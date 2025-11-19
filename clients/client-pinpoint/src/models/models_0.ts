// smithy-typescript generated code
import {
  __EndpointTypesElement,
  __TimezoneEstimationMethodsElement,
  Action,
  Alignment,
  AttributeType,
  ButtonAction,
  CampaignStatus,
  ChannelType,
  DayOfWeek,
  DeliveryStatus,
  DimensionType,
  Duration,
  FilterType,
  Format,
  Frequency,
  Include,
  JobStatus,
  Layout,
  MessageType,
  Mode,
  Operator,
  RecencyType,
  SegmentType,
  SourceType,
  State,
  TemplateType,
  Type,
} from "./enums";

/**
 * <p>Provides information about an activity that was performed by a campaign.</p>
 * @public
 */
export interface ActivityResponse {
  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign that the activity applies to.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.</p>
   * @public
   */
  End?: string | undefined;

  /**
   * <p>The unique identifier for the activity.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.</p>
   * @public
   */
  Result?: string | undefined;

  /**
   * <p>The scheduled start time, in ISO 8601 format, for the activity.</p>
   * @public
   */
  ScheduledStart?: string | undefined;

  /**
   * <p>The actual start time, in ISO 8601 format, of the activity.</p>
   * @public
   */
  Start?: string | undefined;

  /**
   * <p>The current status of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The total number of endpoints that the campaign successfully delivered messages to.</p>
   * @public
   */
  SuccessfulEndpointCount?: number | undefined;

  /**
   * <p>The total number of time zones that were completed.</p>
   * @public
   */
  TimezonesCompletedCount?: number | undefined;

  /**
   * <p>The total number of unique time zones that are in the segment for the campaign.</p>
   * @public
   */
  TimezonesTotalCount?: number | undefined;

  /**
   * <p>The total number of endpoints that the campaign attempted to deliver messages to.</p>
   * @public
   */
  TotalEndpointCount?: number | undefined;

  /**
   * <p>The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   * @public
   */
  TreatmentId?: string | undefined;

  /**
   * <p>A JSON object that contains metrics relating to the campaign execution for this campaign activity. For information about the structure and contents of the results, see <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Standard Amazon Pinpoint analytics metrics</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   * @public
   */
  ExecutionMetrics?: Record<string, string> | undefined;
}

/**
 * <p>Provides information about the activities that were performed by a campaign.</p>
 * @public
 */
export interface ActivitiesResponse {
  /**
   * <p>An array of responses, one for each activity that was performed by the campaign.</p>
   * @public
   */
  Item: ActivityResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies attribute-based criteria for including or excluding endpoints from a segment.</p>
 * @public
 */
export interface AttributeDimension {
  /**
   * <p>The type of segment dimension to use. Valid values are: <ul><li>INCLUSIVE - endpoints that have attributes matching the values are included in the segment.</li><li>EXCLUSIVE - endpoints that have attributes matching the values are excluded in the segment.</li><li>CONTAINS - endpoints that have attributes' substrings match the values are included in the segment.</li><li>BEFORE - endpoints with attributes read as ISO_INSTANT datetimes before the value are included in the segment.</li><li>AFTER - endpoints with attributes read as ISO_INSTANT datetimes after the value are included in the segment.</li><li>ON - endpoints with attributes read as ISO_INSTANT dates on the value are included in the segment. Time is ignored in this comparison.</li><li>BETWEEN - endpoints with attributes read as ISO_INSTANT datetimes between the values are included in the segment.</li></p>
   * @public
   */
  AttributeType?: AttributeType | undefined;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Specifies the dimension type and values for a segment dimension.</p>
 * @public
 */
export interface SetDimension {
  /**
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   * @public
   */
  DimensionType?: DimensionType | undefined;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.</p>
 * @public
 */
export interface MetricDimension {
  /**
   * <p>The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.</p>
   * @public
   */
  ComparisonOperator: string | undefined;

  /**
   * <p>The value to compare.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.</p>
 * @public
 */
export interface EventDimensions {
  /**
   * <p>One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.</p>
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * <p>The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard event that Amazon Pinpoint generates, such as _email.delivered. For campaigns, this can also be a custom event that's specific to your application. For information about standard events, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html">Streaming Amazon Pinpoint Events</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   * @public
   */
  EventType?: SetDimension | undefined;

  /**
   * <p>One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.</p>
   * @public
   */
  Metrics?: Record<string, MetricDimension> | undefined;
}

/**
 * <p>Specifies the conditions to evaluate for an event that applies to an activity in a journey.</p>
 * @public
 */
export interface EventCondition {
  /**
   * <p>The dimensions for the event filter to use for the activity.</p>
   * @public
   */
  Dimensions?: EventDimensions | undefined;

  /**
   * <p>The message identifier (message_id) for the message to use when determining whether message events meet the condition.</p>
   * @public
   */
  MessageActivity?: string | undefined;
}

/**
 * <p>Specifies a segment to associate with an activity in a journey.</p>
 * @public
 */
export interface SegmentCondition {
  /**
   * <p>The unique identifier for the segment to associate with the activity.</p>
   * @public
   */
  SegmentId: string | undefined;
}

/**
 * <p>Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 * @public
 */
export interface RecencyDimension {
  /**
   * <p>The duration to use when determining whether an endpoint is active or inactive.</p>
   * @public
   */
  Duration: Duration | undefined;

  /**
   * <p>The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.</p>
   * @public
   */
  RecencyType: RecencyType | undefined;
}

/**
 * <p>Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 * @public
 */
export interface SegmentBehaviors {
  /**
   * <p>The dimension settings that are based on how recently an endpoint was active.</p>
   * @public
   */
  Recency?: RecencyDimension | undefined;
}

/**
 * <p>Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.</p>
 * @public
 */
export interface SegmentDemographics {
  /**
   * <p>The app version criteria for the segment.</p>
   * @public
   */
  AppVersion?: SetDimension | undefined;

  /**
   * <p>The channel criteria for the segment.</p>
   * @public
   */
  Channel?: SetDimension | undefined;

  /**
   * <p>The device type criteria for the segment.</p>
   * @public
   */
  DeviceType?: SetDimension | undefined;

  /**
   * <p>The device make criteria for the segment.</p>
   * @public
   */
  Make?: SetDimension | undefined;

  /**
   * <p>The device model criteria for the segment.</p>
   * @public
   */
  Model?: SetDimension | undefined;

  /**
   * <p>The device platform criteria for the segment.</p>
   * @public
   */
  Platform?: SetDimension | undefined;
}

/**
 * <p>Specifies the GPS coordinates of a location.</p>
 * @public
 */
export interface GPSCoordinates {
  /**
   * <p>The latitude coordinate of the location.</p>
   * @public
   */
  Latitude: number | undefined;

  /**
   * <p>The longitude coordinate of the location.</p>
   * @public
   */
  Longitude: number | undefined;
}

/**
 * <p>Specifies GPS-based criteria for including or excluding endpoints from a segment.</p>
 * @public
 */
export interface GPSPointDimension {
  /**
   * <p>The GPS coordinates to measure distance from.</p>
   * @public
   */
  Coordinates: GPSCoordinates | undefined;

  /**
   * <p>The range, in kilometers, from the GPS coordinates.</p>
   * @public
   */
  RangeInKilometers?: number | undefined;
}

/**
 * <p>Specifies geographical dimension settings for a segment.</p>
 * @public
 */
export interface SegmentLocation {
  /**
   * <p>The country or region code, in ISO 3166-1 alpha-2 format, for the segment.</p>
   * @public
   */
  Country?: SetDimension | undefined;

  /**
   * <p>The GPS location and range for the segment.</p>
   * @public
   */
  GPSPoint?: GPSPointDimension | undefined;
}

/**
 * <p>Specifies the dimension settings for a segment.</p>
 * @public
 */
export interface SegmentDimensions {
  /**
   * <p>One or more custom attributes to use as criteria for the segment.</p>
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * <p>The behavior-based criteria, such as how recently users have used your app, for the segment.</p>
   * @public
   */
  Behavior?: SegmentBehaviors | undefined;

  /**
   * <p>The demographic-based criteria, such as device platform, for the segment.</p>
   * @public
   */
  Demographic?: SegmentDemographics | undefined;

  /**
   * <p>The location-based criteria, such as region or GPS coordinates, for the segment.</p>
   * @public
   */
  Location?: SegmentLocation | undefined;

  /**
   * <p>One or more custom metrics to use as criteria for the segment.</p>
   * @public
   */
  Metrics?: Record<string, MetricDimension> | undefined;

  /**
   * <p>One or more custom user attributes to use as criteria for the segment.</p>
   * @public
   */
  UserAttributes?: Record<string, AttributeDimension> | undefined;
}

/**
 * <p>Specifies a condition to evaluate for an activity in a journey.</p>
 * @public
 */
export interface SimpleCondition {
  /**
   * <p>The dimension settings for the event that's associated with the activity.</p>
   * @public
   */
  EventCondition?: EventCondition | undefined;

  /**
   * <p>The segment that's associated with the activity.</p>
   * @public
   */
  SegmentCondition?: SegmentCondition | undefined;

  /**
   * <p>The dimension settings for the segment that's associated with the activity.</p>
   * @public
   */
  SegmentDimensions?: SegmentDimensions | undefined;
}

/**
 * <p>Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>The conditions to evaluate for the activity.</p>
   * @public
   */
  Conditions?: SimpleCondition[] | undefined;

  /**
   * <p>Specifies how to handle multiple conditions for the activity. For example, if you specify two conditions for an activity, whether both or only one of the conditions must be met for the activity to be performed.</p>
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * <p>Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.</p>
 * @public
 */
export interface WaitTime {
  /**
   * <p>The amount of time to wait, as a duration in ISO 8601 format, before determining whether the activity's conditions have been met or moving participants to the next activity in the journey.</p>
   * @public
   */
  WaitFor?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint determines whether the activity's conditions have been met or the activity moves participants to the next activity in the journey.</p>
   * @public
   */
  WaitUntil?: string | undefined;
}

/**
 * <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
 * @public
 */
export interface ConditionalSplitActivity {
  /**
   * <p>The conditions that define the paths for the activity, and the relationship between the conditions.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>The amount of time to wait before determining whether the conditions are met, or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   * @public
   */
  EvaluationWaitTime?: WaitTime | undefined;

  /**
   * <p>The unique identifier for the activity to perform if the conditions aren't met.</p>
   * @public
   */
  FalseActivity?: string | undefined;

  /**
   * <p>The unique identifier for the activity to perform if the conditions are met.</p>
   * @public
   */
  TrueActivity?: string | undefined;
}

/**
 * @public
 */
export interface ContactCenterActivity {
  /**
   * <p>The unique identifier for the next activity to perform after the this activity.</p>
   * @public
   */
  NextActivity?: string | undefined;
}

/**
 * <p>Specifies the message content for a custom channel message that's sent to participants in a journey.</p>
 * @public
 */
export interface JourneyCustomMessage {
  /**
   * <p>The message content that's passed to an AWS Lambda function or to a web hook.</p>
   * @public
   */
  Data?: string | undefined;
}

/**
 * <p>The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.</p>
 * @public
 */
export interface CustomMessageActivity {
  /**
   * <p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul>
   * @public
   */
  DeliveryUri?: string | undefined;

  /**
   * <p>The types of endpoints to send the custom message to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.</p>
   * @public
   */
  EndpointTypes?: __EndpointTypesElement[] | undefined;

  /**
   * <p>Specifies the message data included in a custom channel message that's sent to participants in a journey.</p>
   * @public
   */
  MessageConfig?: JourneyCustomMessage | undefined;

  /**
   * <p>The unique identifier for the next activity to perform, after Amazon Pinpoint calls the AWS Lambda function or web hook.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The name of the custom message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * <p>Specifies the "From" address for an email message that's sent to participants in a journey.</p>
 * @public
 */
export interface JourneyEmailMessage {
  /**
   * <p>The verified email address to send the email message from. The default address is the FromAddress specified for the email channel for the application.</p>
   * @public
   */
  FromAddress?: string | undefined;
}

/**
 * <p>Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.</p>
 * @public
 */
export interface EmailMessageActivity {
  /**
   * <p>Specifies the sender address for an email message that's sent to participants in the journey.</p>
   * @public
   */
  MessageConfig?: JourneyEmailMessage | undefined;

  /**
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The name of the email message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The unique identifier for the version of the email template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * <p>Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.</p>
 * @public
 */
export interface HoldoutActivity {
  /**
   * <p>The unique identifier for the next activity to perform, after performing the holdout activity.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The percentage of participants who shouldn't continue the journey.</p> <p>To determine which participants are held out, Amazon Pinpoint applies a probability-based algorithm to the percentage that you specify. Therefore, the actual percentage of participants who are held out may not be equal to the percentage that you specify.</p>
   * @public
   */
  Percentage: number | undefined;
}

/**
 * <p>Specifies a condition to evaluate for an activity path in a journey.</p>
 * @public
 */
export interface MultiConditionalBranch {
  /**
   * <p>The condition to evaluate for the activity path.</p>
   * @public
   */
  Condition?: SimpleCondition | undefined;

  /**
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   * @public
   */
  NextActivity?: string | undefined;
}

/**
 * <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
 * @public
 */
export interface MultiConditionalSplitActivity {
  /**
   * <p>The paths for the activity, including the conditions for entering each path and the activity to perform for each path.</p>
   * @public
   */
  Branches?: MultiConditionalBranch[] | undefined;

  /**
   * <p>The unique identifier for the activity to perform for participants who don't meet any of the conditions specified for other paths in the activity.</p>
   * @public
   */
  DefaultActivity?: string | undefined;

  /**
   * <p>The amount of time to wait or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   * @public
   */
  EvaluationWaitTime?: WaitTime | undefined;
}

/**
 * <p>Specifies the message configuration for a push notification that's sent to participants in a journey.</p>
 * @public
 */
export interface JourneyPushMessage {
  /**
   * <p>The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>
   * @public
   */
  TimeToLive?: string | undefined;
}

/**
 * <p>Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.</p>
 * @public
 */
export interface PushMessageActivity {
  /**
   * <p>Specifies the time to live (TTL) value for push notifications that are sent to participants in a journey.</p>
   * @public
   */
  MessageConfig?: JourneyPushMessage | undefined;

  /**
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The name of the push notification template to use for the message. If specified, this value must match the name of an existing message template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The unique identifier for the version of the push notification template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * <p>Specifies the settings for a path in a random split activity in a journey.</p>
 * @public
 */
export interface RandomSplitEntry {
  /**
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The percentage of participants to send down the activity path.</p> <p>To determine which participants are sent down each path, Amazon Pinpoint applies a probability-based algorithm to the percentages that you specify for the paths. Therefore, the actual percentage of participants who are sent down a path may not be equal to the percentage that you specify.</p>
   * @public
   */
  Percentage?: number | undefined;
}

/**
 * <p>Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
 * @public
 */
export interface RandomSplitActivity {
  /**
   * <p>The paths for the activity, including the percentage of participants to enter each path and the activity to perform for each path.</p>
   * @public
   */
  Branches?: RandomSplitEntry[] | undefined;
}

/**
 * <p>Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.</p>
 * @public
 */
export interface JourneySMSMessage {
  /**
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.</p>
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html">Supported Countries and Regions</a> in the Amazon Pinpoint User Guide.</p>
   * @public
   */
  SenderId?: string | undefined;

  /**
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  EntityId?: string | undefined;

  /**
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * <p>Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.</p>
 * @public
 */
export interface SMSMessageActivity {
  /**
   * <p>Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.</p>
   * @public
   */
  MessageConfig?: JourneySMSMessage | undefined;

  /**
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The name of the SMS message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The unique identifier for the version of the SMS template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * <p>Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
 * @public
 */
export interface WaitActivity {
  /**
   * <p>The unique identifier for the next activity to perform, after performing the wait activity.</p>
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * <p>The amount of time to wait or the date and time when the activity moves participants to the next activity in the journey.</p>
   * @public
   */
  WaitTime?: WaitTime | undefined;
}

/**
 * <p>Specifies the configuration and other settings for an activity in a journey.</p>
 * @public
 */
export interface Activity {
  /**
   * <p>The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.</p>
   * @public
   */
  CUSTOM?: CustomMessageActivity | undefined;

  /**
   * <p>The settings for a yes/no split activity. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p>
   * @public
   */
  ConditionalSplit?: ConditionalSplitActivity | undefined;

  /**
   * <p>The custom description of the activity.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The settings for an email activity. This type of activity sends an email message to participants.</p>
   * @public
   */
  EMAIL?: EmailMessageActivity | undefined;

  /**
   * <p>The settings for a holdout activity. This type of activity stops a journey for a specified percentage of participants.</p>
   * @public
   */
  Holdout?: HoldoutActivity | undefined;

  /**
   * <p>The settings for a multivariate split activity. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p>
   * @public
   */
  MultiCondition?: MultiConditionalSplitActivity | undefined;

  /**
   * <p>The settings for a push notification activity. This type of activity sends a push notification to participants.</p>
   * @public
   */
  PUSH?: PushMessageActivity | undefined;

  /**
   * <p>The settings for a random split activity. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
   * @public
   */
  RandomSplit?: RandomSplitActivity | undefined;

  /**
   * <p>The settings for an SMS activity. This type of activity sends a text message to participants.</p>
   * @public
   */
  SMS?: SMSMessageActivity | undefined;

  /**
   * <p>The settings for a wait activity. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
   * @public
   */
  Wait?: WaitActivity | undefined;

  /**
   * <p>The settings for a connect activity. This type of activity initiates a contact center call to participants.</p>
   * @public
   */
  ContactCenter?: ContactCenterActivity | undefined;
}

/**
 * <p>Specifies address-based configuration settings for a message that's sent directly to an endpoint.</p>
 * @public
 */
export interface AddressConfiguration {
  /**
   * <p>The message body to use instead of the default message body. This value overrides the default message body.</p>
   * @public
   */
  BodyOverride?: string | undefined;

  /**
   * <p>The channel to use when sending the message.</p>
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * <p>An object that maps custom attributes to attributes for the address and is attached to the message. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>A map of the message variables to merge with the variables specified by properties of the DefaultMessage object. The variables specified in this map take precedence over all other variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The message title to use instead of the default message title. This value overrides the default message title.</p>
   * @public
   */
  TitleOverride?: string | undefined;
}

/**
 * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 * @public
 */
export interface ADMChannelRequest {
  /**
   * <p>The Client ID that you received from Amazon to send messages by using ADM.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The Client Secret that you received from Amazon to send messages by using ADM.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>Specifies whether to enable the ADM channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 * @public
 */
export interface ADMChannelResponse {
  /**
   * <p>The unique identifier for the application that the ADM channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the ADM channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Specifies whether the ADM channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the ADM channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the ADM channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the ADM channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the ADM channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.</p>
 * @public
 */
export interface ADMMessage {
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The body of the notification message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.</p>
   * @public
   */
  ConsolidationKey?: string | undefined;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * <p>The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.</p>
   * @public
   */
  ExpiresAfter?: string | undefined;

  /**
   * <p>The icon image name of the asset saved in your app.</p>
   * @public
   */
  IconReference?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.</p>
   * @public
   */
  MD5?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.</p>
 * @public
 */
export interface AndroidPushNotificationTemplate {
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The message body to use in a push notification that's based on the message template.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 * @public
 */
export interface APNSChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether to enable the APNs channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   * @public
   */
  TeamId?: string | undefined;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 * @public
 */
export interface APNSChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the APNs channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the APNs channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the APNs channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the APNs channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the APNs channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.</p>
 * @public
 */
export interface APNSMessage {
  /**
   * <p>The type of push notification to send. Valid values are:</p> <ul><li><p>alert - For a standard notification that's displayed on recipients' devices and prompts a recipient to interact with the notification.</p></li> <li><p>background - For a silent notification that delivers content in the background and isn't displayed on recipients' devices.</p></li> <li><p>complication - For a notification that contains update information for an app’s complication timeline.</p></li> <li><p>fileprovider - For a notification that signals changes to a File Provider extension.</p></li> <li><p>mdm - For a notification that tells managed devices to contact the MDM server.</p></li> <li><p>voip - For a notification that provides information about an incoming VoIP call.</p></li></ul> <p>Amazon Pinpoint specifies this value in the apns-push-type request header when it sends the notification message to APNs. If you don't specify a value for this property, Amazon Pinpoint sets the value to alert or background automatically, based on the value that you specify for the SilentPush or RawContent property of the message.</p> <p>For more information about the apns-push-type request header, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns">Sending Notification Requests to APNs</a> on the Apple Developer website.</p>
   * @public
   */
  APNSPushType?: string | undefined;

  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.</p>
   * @public
   */
  Badge?: number | undefined;

  /**
   * <p>The body of the notification message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes.</p> <p>Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.</p>
   * @public
   */
  CollapseId?: string | undefined;

  /**
   * <p>The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * <p>The URL of an image or video to display in the push notification.</p>
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * <p>The authentication method that you want Amazon Pinpoint to use when authenticating with APNs, CERTIFICATE or TOKEN.</p>
   * @public
   */
  PreferredAuthenticationMethod?: string | undefined;

  /**
   * <p>para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.</p>/listitem> <li><p>10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.</p> <p>The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.</p>
   * @public
   */
  Priority?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. The value of the content-available key has to be an integer, and can only be 0 or 1. If you're sending a standard notification, set the value of content-available to 0. If you're sending a silent (background) notification, set the value of content-available to 1. Additionally, silent notification payloads can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p></note>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>Specifies whether the notification is a silent push notification. A silent (or background) push notification isn't displayed on recipients' devices. You can use silent push notifications to make small updates to your app, or to display messages in an in-app message center.</p> <p>Amazon Pinpoint uses this property to determine the correct value for the apns-push-type request header when it sends the notification message to APNs. If you specify a value of true for this property, Amazon Pinpoint sets the value for the apns-push-type header field to background.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. For silent (background) notifications, set the value of content-available to 1. Additionally, the message payload for a silent notification can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p> <p>Apple has indicated that they will throttle "excessive" background notifications based on current traffic volumes. To prevent your notifications being throttled, Apple recommends that you send no more than 3 silent push notifications to each recipient per hour.</p></note>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The key for the sound to play when the recipient receives the push notification. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The default message variables to use in the notification message. You can override these default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.</p>
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * <p>The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.</p>
 * @public
 */
export interface APNSPushNotificationTemplate {
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The message body to use in push notifications that are based on the message template.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The URL of an image or video to display in push notifications that are based on the message template.</p>
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for push notifications that are based on the message template. If specified, this value overrides all other content for the message template.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 * @public
 */
export interface APNSSandboxChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether to enable the APNs sandbox channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   * @public
   */
  TeamId?: string | undefined;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 * @public
 */
export interface APNSSandboxChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs sandbox channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the APNs sandbox channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the APNs sandbox channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the APNs sandbox channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the APNs sandbox channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the APNs sandbox channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs sandbox channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 * @public
 */
export interface APNSVoipChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether to enable the APNs VoIP channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   * @public
   */
  TeamId?: string | undefined;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 * @public
 */
export interface APNSVoipChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs VoIP channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the APNs VoIP channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the APNs VoIP channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the APNs VoIP channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the APNs VoIP channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the APNs VoIP channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 * @public
 */
export interface APNSVoipSandboxChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   * @public
   */
  TeamId?: string | undefined;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 * @public
 */
export interface APNSVoipSandboxChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs VoIP sandbox channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the APNs VoIP sandbox channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP sandbox channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.</p>
 * @public
 */
export interface ResultRowValue {
  /**
   * <p>The friendly name of the metric whose value is specified by the Value property.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The data type of the value specified by the Value property.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 * @public
 */
export interface ResultRow {
  /**
   * <p>An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.</p>
   * @public
   */
  GroupedBys: ResultRowValue[] | undefined;

  /**
   * <p>An array of objects that provides pre-aggregated values for a standard metric that applies to an application, campaign, or journey.</p>
   * @public
   */
  Values: ResultRowValue[] | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 * @public
 */
export interface BaseKpiResult {
  /**
   * <p>An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
   * @public
   */
  Rows: ResultRow[] | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
 * @public
 */
export interface ApplicationDateRangeKpiResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   * @public
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Application Metrics resource because the resource returns all results in a single page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * <p>Provides information about an application.</p>
 * @public
 */
export interface ApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time when the Application was created.</p>
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * <p>The number of messages that can be sent to an endpoint during the specified timeframe for all journeys.</p>
 * @public
 */
export interface JourneyTimeframeCap {
  /**
   * <p>The maximum number of messages that all journeys can send to an endpoint during the specified timeframe. The maximum value is 100. If set to 0, this limit will not apply.</p>
   * @public
   */
  Cap?: number | undefined;

  /**
   * <p>The length of the timeframe in days. The maximum value is 30. If set to 0, this limit will not apply.</p>
   * @public
   */
  Days?: number | undefined;
}

/**
 * <p>The default sending limits for journeys in the application. To override these limits and define custom limits for a specific journey, use the Journey resource.</p>
 * @public
 */
export interface ApplicationSettingsJourneyLimits {
  /**
   * <p>The daily number of messages that an endpoint can receive from all journeys. The maximum value is 100. If set to 0, this limit will not apply.</p>
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * <p>The default maximum number of messages that can be sent to an endpoint during the specified timeframe for all journeys.</p>
   * @public
   */
  TimeframeCap?: JourneyTimeframeCap | undefined;

  /**
   * <p>The default maximum number of messages that a single journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.</p>
   * @public
   */
  TotalCap?: number | undefined;
}

/**
 * <p>Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.</p>
 * @public
 */
export interface CampaignHook {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.</p>
   * @public
   */
  LambdaFunctionName?: string | undefined;

  /**
   * <p>The mode that Amazon Pinpoint uses to invoke the AWS Lambda function. Possible values are:</p> <ul><li><p>FILTER - Invoke the function to customize the segment that's used by a campaign.</p></li> <li><p>DELIVERY - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the CustomDeliveryConfiguration and CampaignCustomMessage objects of the campaign.</p></li></ul>
   * @public
   */
  Mode?: Mode | undefined;

  /**
   * <p>The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.</p>
   * @public
   */
  WebUrl?: string | undefined;
}

/**
 * <p>For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.</p>
 * @public
 */
export interface CampaignLimits {
  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. For an application, this value specifies the default limit for the number of messages that campaigns and journeys can send to a single endpoint during a 24-hour period. The maximum value is 100.</p>
   * @public
   */
  Daily?: number | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.</p>
   * @public
   */
  MaximumDuration?: number | undefined;

  /**
   * <p>The maximum number of messages that a campaign can send each second. For an application, this value specifies the default limit for the number of messages that campaigns can send each second. The minimum value is 1. The maximum value is 20,000.</p>
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. If a campaign recurs, this setting applies to all runs of the campaign. The maximum value is 100.</p>
   * @public
   */
  Total?: number | undefined;

  /**
   * <p>The maximum total number of messages that the campaign can send per user session.</p>
   * @public
   */
  Session?: number | undefined;
}

/**
 * <p>Specifies the start and end times that define a time range when messages aren't sent to endpoints.</p>
 * @public
 */
export interface QuietTime {
  /**
   * <p>The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   * @public
   */
  End?: string | undefined;

  /**
   * <p>The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   * @public
   */
  Start?: string | undefined;
}

/**
 * <p>Provides information about an application, including the default settings for an application.</p>
 * @public
 */
export interface ApplicationSettingsResource {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p>
   * @public
   */
  CampaignHook?: CampaignHook | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the application's settings were last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The default sending limits for campaigns in the application.</p>
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p>
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * <p>The default sending limits for journeys in the application. These limits apply to each journey for the application but can be overridden, on a per journey basis, with the JourneyLimits resource.</p>
   * @public
   */
  JourneyLimits?: ApplicationSettingsJourneyLimits | undefined;
}

/**
 * <p>Provides information about all of your applications.</p>
 * @public
 */
export interface ApplicationsResponse {
  /**
   * <p>An array of responses, one for each application that was returned.</p>
   * @public
   */
  Item?: ApplicationResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
 * @public
 */
export interface AttributesResource {
  /**
   * <p>The unique identifier for the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes that were removed from the endpoints. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users.</p></li></ul>
   * @public
   */
  AttributeType: string | undefined;

  /**
   * <p>An array that specifies the names of the attributes that were removed from the endpoints.</p>
   * @public
   */
  Attributes?: string[] | undefined;
}

/**
 * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 * @public
 */
export interface BaiduChannelRequest {
  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   * @public
   */
  ApiKey: string | undefined;

  /**
   * <p>Specifies whether to enable the Baidu channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The secret key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   * @public
   */
  SecretKey: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 * @public
 */
export interface BaiduChannelResponse {
  /**
   * <p>The unique identifier for the application that the Baidu channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the Baidu channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   * @public
   */
  Credential: string | undefined;

  /**
   * <p>Specifies whether the Baidu channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the Baidu channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the Baidu channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the Baidu channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the Baidu channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.</p>
 * @public
 */
export interface BaiduMessage {
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The body of the notification message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * <p>The icon image name of the asset saved in your app.</p>
   * @public
   */
  IconReference?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.</p>
 * @public
 */
export interface CampaignCustomMessage {
  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. The maximum size is 5 KB.</p>
   * @public
   */
  Data?: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
 * @public
 */
export interface CampaignDateRangeKpiResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign that the metric applies to.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   * @public
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource because the resource returns all results in a single page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * <p>Contains the name and value pair of an email header to add to your email. You can have up to 15 MessageHeaders. A header can contain information such as the sender, receiver, route, or timestamp.</p>
 * @public
 */
export interface MessageHeader {
  /**
   * <p>The name of the message header. The header name can contain up to 126 characters.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the message header. The header value can contain up to 870 characters, including the length of any rendered attributes. For example if you add the \{CreationDate\} attribute, it renders as YYYY-MM-DDTHH:MM:SS.SSSZ and is 24 characters in length.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies the content and "From" address for an email message that's sent to recipients of a campaign.</p>
 * @public
 */
export interface CampaignEmailMessage {
  /**
   * <p>The body of the email for recipients whose email clients don't render HTML content.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.</p>
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * <p>The list of <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#apps-application-id-campaigns-campaign-id-model-messageheader">MessageHeaders</a> for the email. You can have up to 15 MessageHeaders for each email.</p>
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * <p>The body of the email, in HTML format, for recipients whose email clients render HTML content.</p>
   * @public
   */
  HtmlBody?: string | undefined;

  /**
   * <p>The subject line, or title, of the email.</p>
   * @public
   */
  Title?: string | undefined;
}

/**
 * <p>Specifies the settings for events that cause a campaign to be sent.</p>
 * @public
 */
export interface CampaignEventFilter {
  /**
   * <p>The dimension settings of the event filter for the campaign.</p>
   * @public
   */
  Dimensions: EventDimensions | undefined;

  /**
   * <p>The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (<link  linkend="apps-application-id-events">Events</link> resource) occurs.</p>
   * @public
   */
  FilterType: FilterType | undefined;
}

/**
 * <p>Text config for Message Body.</p>
 * @public
 */
export interface InAppMessageBodyConfig {
  /**
   * <p>The alignment of the text. Valid values: LEFT, CENTER, RIGHT.</p>
   * @public
   */
  Alignment: Alignment | undefined;

  /**
   * <p>Message Body.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>The text color.</p>
   * @public
   */
  TextColor: string | undefined;
}

/**
 * <p>Text config for Message Header.</p>
 * @public
 */
export interface InAppMessageHeaderConfig {
  /**
   * <p>The alignment of the text. Valid values: LEFT, CENTER, RIGHT.</p>
   * @public
   */
  Alignment: Alignment | undefined;

  /**
   * <p>Message Header.</p>
   * @public
   */
  Header: string | undefined;

  /**
   * <p>The text color.</p>
   * @public
   */
  TextColor: string | undefined;
}

/**
 * <p>Override button configuration.</p>
 * @public
 */
export interface OverrideButtonConfiguration {
  /**
   * <p>Action triggered by the button.</p>
   * @public
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * <p>Button destination.</p>
   * @public
   */
  Link?: string | undefined;
}

/**
 * <p>Default button configuration.</p>
 * @public
 */
export interface DefaultButtonConfiguration {
  /**
   * <p>The background color of the button.</p>
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * <p>The border radius of the button.</p>
   * @public
   */
  BorderRadius?: number | undefined;

  /**
   * <p>Action triggered by the button.</p>
   * @public
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * <p>Button destination.</p>
   * @public
   */
  Link?: string | undefined;

  /**
   * <p>Button text.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The text color of the button.</p>
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * <p>Button Config for an in-app message.</p>
 * @public
 */
export interface InAppMessageButton {
  /**
   * <p>Default button content.</p>
   * @public
   */
  Android?: OverrideButtonConfiguration | undefined;

  /**
   * <p>Default button content.</p>
   * @public
   */
  DefaultConfig?: DefaultButtonConfiguration | undefined;

  /**
   * <p>Default button content.</p>
   * @public
   */
  IOS?: OverrideButtonConfiguration | undefined;

  /**
   * <p>Default button content.</p>
   * @public
   */
  Web?: OverrideButtonConfiguration | undefined;
}

/**
 * <p>The configuration for the message content.</p>
 * @public
 */
export interface InAppMessageContent {
  /**
   * <p>The background color for the message.</p>
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * <p>The configuration for the message body.</p>
   * @public
   */
  BodyConfig?: InAppMessageBodyConfig | undefined;

  /**
   * <p>The configuration for the message header.</p>
   * @public
   */
  HeaderConfig?: InAppMessageHeaderConfig | undefined;

  /**
   * <p>The image url for the background of message.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The first button inside the message.</p>
   * @public
   */
  PrimaryBtn?: InAppMessageButton | undefined;

  /**
   * <p>The second button inside message.</p>
   * @public
   */
  SecondaryBtn?: InAppMessageButton | undefined;
}

/**
 * <p>In-app message configuration.</p>
 * @public
 */
export interface CampaignInAppMessage {
  /**
   * <p>The message body of the notification, the email body or the text message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>In-app message content.</p>
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * <p>Custom config to be sent to client.</p>
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * <p>In-app message layout.</p>
   * @public
   */
  Layout?: Layout | undefined;
}

/**
 * <p>Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.</p>
 * @public
 */
export interface CustomDeliveryConfiguration {
  /**
   * <p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul>
   * @public
   */
  DeliveryUri: string | undefined;

  /**
   * <p>The types of endpoints to send the campaign or treatment to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.</p>
   * @public
   */
  EndpointTypes?: __EndpointTypesElement[] | undefined;
}

/**
 * <p>Specifies the content and settings for a push notification that's sent to recipients of a campaign.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The body of the notification message. The maximum number of characters is 200.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The URL of the image to display as the push-notification icon, such as the icon for the app.</p>
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * <p>The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.</p>
   * @public
   */
  ImageSmallIconUrl?: string | undefined;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The JSON payload to use for a silent push notification.</p>
   * @public
   */
  JsonBody?: string | undefined;

  /**
   * <p>The URL of the image or video to display in the push notification.</p>
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.</p>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>The title to display above the notification message on a recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the content and settings for an SMS message that's sent to recipients of a campaign.</p>
 * @public
 */
export interface CampaignSmsMessage {
  /**
   * <p>The body of the SMS message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.</p>
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * <p>The sender ID to display on recipients' devices when they receive the SMS message.</p>
   * @public
   */
  SenderId?: string | undefined;

  /**
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  EntityId?: string | undefined;

  /**
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * <p>Specifies the message configuration settings for a campaign.</p>
 * @public
 */
export interface MessageConfiguration {
  /**
   * <p>The message that the campaign sends through the ADM (Amazon Device Messaging) channel. If specified, this message overrides the default message.</p>
   * @public
   */
  ADMMessage?: Message | undefined;

  /**
   * <p>The message that the campaign sends through the APNs (Apple Push Notification service) channel. If specified, this message overrides the default message.</p>
   * @public
   */
  APNSMessage?: Message | undefined;

  /**
   * <p>The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. If specified, this message overrides the default message.</p>
   * @public
   */
  BaiduMessage?: Message | undefined;

  /**
   * <p>The message that the campaign sends through a custom channel, as specified by the delivery configuration (CustomDeliveryConfiguration) settings for the campaign. If specified, this message overrides the default message.</p>
   * @public
   */
  CustomMessage?: CampaignCustomMessage | undefined;

  /**
   * <p>The default message that the campaign sends through all the channels that are configured for the campaign.</p>
   * @public
   */
  DefaultMessage?: Message | undefined;

  /**
   * <p>The message that the campaign sends through the email channel. If specified, this message overrides the default message.</p>
   * @public
   */
  EmailMessage?: CampaignEmailMessage | undefined;

  /**
   * <p>The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. If specified, this message overrides the default message.</p>
   * @public
   */
  GCMMessage?: Message | undefined;

  /**
   * <p>The message that the campaign sends through the SMS channel. If specified, this message overrides the default message.</p>
   * @public
   */
  SMSMessage?: CampaignSmsMessage | undefined;

  /**
   * <p>The in-app message configuration.</p>
   * @public
   */
  InAppMessage?: CampaignInAppMessage | undefined;
}

/**
 * <p>Specifies the schedule settings for a campaign.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The scheduled time, in ISO 8601 format, when the campaign ended or will end.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.</p>
   * @public
   */
  EventFilter?: CampaignEventFilter | undefined;

  /**
   * <p>Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.</p>
   * @public
   */
  Frequency?: Frequency | undefined;

  /**
   * <p>Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.</p>
   * @public
   */
  IsLocalTime?: boolean | undefined;

  /**
   * <p>The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign.</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign.</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.</p>
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * <p>The scheduled time when the campaign began or will begin. Valid values are: IMMEDIATE, to start the campaign immediately; or, a specific time in ISO 8601 format.</p>
   * @public
   */
  StartTime: string | undefined;

  /**
   * <p>The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05,
   *                   UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06,
   *                   UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.</p>
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * <p>Provides information about the status of a campaign.</p>
 * @public
 */
export interface CampaignState {
  /**
   * <p>The current status of the campaign, or the current status of a treatment that belongs to an A/B test campaign.</p> <p>If a campaign uses A/B testing, the campaign has a status of COMPLETED only if all campaign treatments have a status of COMPLETED. If you delete the segment that's associated with a campaign, the campaign fails and has a status of DELETED.</p>
   * @public
   */
  CampaignStatus?: CampaignStatus | undefined;
}

/**
 * <p>Specifies the name and version of the message template to use for the message.</p>
 * @public
 */
export interface Template {
  /**
   * <p>The name of the message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Specifies the message template to use for the message, for each type of channel.</p>
 * @public
 */
export interface TemplateConfiguration {
  /**
   * <p>The email template to use for the message.</p>
   * @public
   */
  EmailTemplate?: Template | undefined;

  /**
   * <p>The push notification template to use for the message.</p>
   * @public
   */
  PushTemplate?: Template | undefined;

  /**
   * <p>The SMS template to use for the message.</p>
   * @public
   */
  SMSTemplate?: Template | undefined;

  /**
   * <p>The voice template to use for the message. This object isn't supported for campaigns.</p>
   * @public
   */
  VoiceTemplate?: Template | undefined;

  /**
   * <p>The InApp template to use for the message. The InApp template object is not supported for SendMessages.</p>
   * @public
   */
  InAppTemplate?: Template | undefined;
}

/**
 * <p>Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.</p>
 * @public
 */
export interface TreatmentResource {
  /**
   * <p>The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.</p>
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * <p>The unique identifier for the treatment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The message configuration settings for the treatment.</p>
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * <p>The schedule settings for the treatment.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>The allocated percentage of users (segment members) that the treatment is sent to.</p>
   * @public
   */
  SizePercent: number | undefined;

  /**
   * <p>The current status of the treatment.</p>
   * @public
   */
  State?: CampaignState | undefined;

  /**
   * <p>The message template to use for the treatment.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>The custom description of the treatment.</p>
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * <p>The custom name of the treatment.</p>
   * @public
   */
  TreatmentName?: string | undefined;
}

/**
 * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
 * @public
 */
export interface CampaignResponse {
  /**
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   * @public
   */
  AdditionalTreatments?: TreatmentResource[] | undefined;

  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The delivery configuration settings for sending the campaign through a custom channel.</p>
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.</p>
   * @public
   */
  DefaultState?: CampaignState | undefined;

  /**
   * <p>The custom description of the campaign.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   * @public
   */
  HoldoutPercent?: number | undefined;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   * @public
   */
  Hook?: CampaignHook | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   * @public
   */
  IsPaused?: boolean | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The messaging limits for the campaign.</p>
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * <p>The message configuration settings for the campaign.</p>
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * <p>The name of the campaign.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schedule settings for the campaign.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>The unique identifier for the segment that's associated with the campaign.</p>
   * @public
   */
  SegmentId: string | undefined;

  /**
   * <p>The version number of the segment that's associated with the campaign.</p>
   * @public
   */
  SegmentVersion: number | undefined;

  /**
   * <p>The current status of the campaign.</p>
   * @public
   */
  State?: CampaignState | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The message template that’s used for the campaign.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>The custom description of the default treatment for the campaign.</p>
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * <p>The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   * @public
   */
  TreatmentName?: string | undefined;

  /**
   * <p>The version number of the campaign.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
 * @public
 */
export interface CampaignsResponse {
  /**
   * <p>An array of responses, one for each campaign that's associated with the application.</p>
   * @public
   */
  Item: CampaignResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information about the general settings and status of a channel for an application.</p>
 * @public
 */
export interface ChannelResponse {
  /**
   * <p>The unique identifier for the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Specifies whether the channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The current version of the channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
 * @public
 */
export interface ChannelsResponse {
  /**
   * <p>A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.</p>
   * @public
   */
  Channels: Record<string, ChannelResponse> | undefined;
}

/**
 * <p>Specifies the rule settings for when messages can't be sent.</p>
 * @public
 */
export interface ClosedDaysRule {
  /**
   * <p>The name of the closed day rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Start DateTime ISO 8601 format</p>
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * <p>End DateTime ISO 8601 format</p>
   * @public
   */
  EndDateTime?: string | undefined;
}

/**
 * <p>The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
 * @public
 */
export interface ClosedDays {
  /**
   * <p>Rules for the Email channel.</p>
   * @public
   */
  EMAIL?: ClosedDaysRule[] | undefined;

  /**
   * <p>Rules for the SMS channel.</p>
   * @public
   */
  SMS?: ClosedDaysRule[] | undefined;

  /**
   * <p>Rules for the Push channel.</p>
   * @public
   */
  PUSH?: ClosedDaysRule[] | undefined;

  /**
   * <p>Rules for the Voice channel.</p>
   * @public
   */
  VOICE?: ClosedDaysRule[] | undefined;

  /**
   * <p>Rules for the Custom channel.</p>
   * @public
   */
  CUSTOM?: ClosedDaysRule[] | undefined;
}

/**
 * <p>Specifies the display name of an application and the tags to associate with the application.</p>
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * <p>Specifies the display name of an application and the tags to associate with the application.</p>
   * @public
   */
  CreateApplicationRequest: CreateApplicationRequest | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * <p>Provides information about an application.</p>
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * <p>Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.</p>
 * @public
 */
export interface WriteTreatmentResource {
  /**
   * <p>The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.</p>
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * <p>The message configuration settings for the treatment.</p>
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * <p>The schedule settings for the treatment.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>The allocated percentage of users (segment members) to send the treatment to.</p>
   * @public
   */
  SizePercent: number | undefined;

  /**
   * <p>The message template to use for the treatment.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>A custom description of the treatment.</p>
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * <p>A custom name for the treatment.</p>
   * @public
   */
  TreatmentName?: string | undefined;
}

/**
 * <p>Specifies the configuration and other settings for a campaign.</p>
 * @public
 */
export interface WriteCampaignRequest {
  /**
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   * @public
   */
  AdditionalTreatments?: WriteTreatmentResource[] | undefined;

  /**
   * <p>The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.</p>
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * <p>A custom description of the campaign.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   * @public
   */
  HoldoutPercent?: number | undefined;

  /**
   * <p>The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   * @public
   */
  Hook?: CampaignHook | undefined;

  /**
   * <p>Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   * @public
   */
  IsPaused?: boolean | undefined;

  /**
   * <p>The messaging limits for the campaign.</p>
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * <p>The message configuration settings for the campaign.</p>
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * <p>A custom name for the campaign.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The schedule settings for the campaign.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>The unique identifier for the segment to associate with the campaign.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>The version of the segment to associate with the campaign.</p>
   * @public
   */
  SegmentVersion?: number | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The message template to use for the campaign.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>A custom description of the default treatment for the campaign.</p>
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * <p>A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   * @public
   */
  TreatmentName?: string | undefined;

  /**
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   * @public
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 * @public
 */
export interface EmailTemplateRequest {
  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   * @public
   */
  HtmlPart?: string | undefined;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * <p>The subject line, or title, to use in email messages that are based on the message template.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The list of <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-model-messageheader">MessageHeaders</a> for the email. You can have up to 15 Headers.</p>
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A custom description of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   * @public
   */
  TextPart?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   * @public
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * <p>Provides information about a request to create a message template.</p>
 * @public
 */
export interface CreateTemplateMessageBody {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The message that's returned from the API for the request to create the message template.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request to create the message template.</p>
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 * @public
 */
export interface ExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   * @public
   */
  S3UrlPrefix: string | undefined;

  /**
   * <p>The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>The version of the segment to export endpoint definitions from, if specified.</p>
   * @public
   */
  SegmentVersion?: number | undefined;
}

/**
 * @public
 */
export interface CreateExportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   * @public
   */
  ExportJobRequest: ExportJobRequest | undefined;
}

/**
 * <p>Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 * @public
 */
export interface ExportJobResource {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   * @public
   */
  S3UrlPrefix: string | undefined;

  /**
   * <p>The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>The version of the segment that the endpoint definitions were exported from.</p>
   * @public
   */
  SegmentVersion?: number | undefined;
}

/**
 * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 * @public
 */
export interface ExportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the export job.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.</p>
   * @public
   */
  CompletedPieces?: number | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the export job was completed.</p>
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the export job was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the export job.</p>
   * @public
   */
  Definition: ExportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.</p>
   * @public
   */
  FailedPieces?: number | undefined;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   * @public
   */
  Failures?: string[] | undefined;

  /**
   * <p>The unique identifier for the export job.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.</p>
   * @public
   */
  TotalFailures?: number | undefined;

  /**
   * <p>The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.</p>
   * @public
   */
  TotalPieces?: number | undefined;

  /**
   * <p>The total number of endpoint definitions that were processed by the export job.</p>
   * @public
   */
  TotalProcessed?: number | undefined;

  /**
   * <p>The job type. This value is EXPORT for export jobs.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateExportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   * @public
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 * @public
 */
export interface ImportJobRequest {
  /**
   * <p>Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   * @public
   */
  DefineSegment?: boolean | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   * @public
   */
  Format: Format | undefined;

  /**
   * <p>Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   * @public
   */
  RegisterEndpoints?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   * @public
   */
  S3Url: string | undefined;

  /**
   * <p>The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   * @public
   */
  SegmentName?: string | undefined;
}

/**
 * @public
 */
export interface CreateImportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   * @public
   */
  ImportJobRequest: ImportJobRequest | undefined;
}

/**
 * <p>Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 * @public
 */
export interface ImportJobResource {
  /**
   * <p>Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   * @public
   */
  DefineSegment?: boolean | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p> <p>If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   * @public
   */
  Format: Format | undefined;

  /**
   * <p>Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   * @public
   */
  RegisterEndpoints?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   * @public
   */
  S3Url: string | undefined;

  /**
   * <p>The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   * @public
   */
  SegmentName?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 * @public
 */
export interface ImportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the import job.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</p>
   * @public
   */
  CompletedPieces?: number | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the import job was completed.</p>
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the import job was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the import job.</p>
   * @public
   */
  Definition: ImportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</p>
   * @public
   */
  FailedPieces?: number | undefined;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   * @public
   */
  Failures?: string[] | undefined;

  /**
   * <p>The unique identifier for the import job.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</p>
   * @public
   */
  TotalFailures?: number | undefined;

  /**
   * <p>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</p>
   * @public
   */
  TotalPieces?: number | undefined;

  /**
   * <p>The total number of endpoint definitions that were processed by the import job.</p>
   * @public
   */
  TotalProcessed?: number | undefined;

  /**
   * <p>The job type. This value is IMPORT for import jobs.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateImportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   * @public
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * <p>InApp Template Request.</p>
 * @public
 */
export interface InAppTemplateRequest {
  /**
   * <p>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</p>
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * <p>Custom config to be sent to client.</p>
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * <p>The layout of the message.</p>
   * @public
   */
  Layout?: Layout | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateInAppTemplateRequest {
  /**
   * <p>InApp Template Request.</p>
   * @public
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * <p>Provides information about a request to create a message template.</p>
 * @public
 */
export interface TemplateCreateMessageBody {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The message that's returned from the API for the request to create the message template.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request to create the message template.</p>
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface CreateInAppTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   * @public
   */
  TemplateCreateMessageBody: TemplateCreateMessageBody | undefined;
}

/**
 * <p>The channel-specific configurations for the journey.</p>
 * @public
 */
export interface JourneyChannelSettings {
  /**
   * <p>Amazon Resource Name (ARN) of the Connect Campaign.</p>
   * @public
   */
  ConnectCampaignArn?: string | undefined;

  /**
   * <p>IAM role ARN to be assumed when invoking Connect campaign execution APIs for dialing.</p>
   * @public
   */
  ConnectCampaignExecutionRoleArn?: string | undefined;
}

/**
 * <p>Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.</p>
 * @public
 */
export interface JourneyLimits {
  /**
   * <p>The maximum number of messages that the journey can send to a single participant during a 24-hour period. The maximum value is 100.</p>
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * <p>The maximum number of times that a participant can enter the journey. The maximum value is 100. To allow participants to enter the journey an unlimited number of times, set this value to 0.</p>
   * @public
   */
  EndpointReentryCap?: number | undefined;

  /**
   * <p>The maximum number of messages that the journey can send each second.</p>
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * <p>Minimum time that must pass before an endpoint can re-enter a given journey. The duration should use an ISO 8601 format, such as PT1H. </p>
   * @public
   */
  EndpointReentryInterval?: string | undefined;

  /**
   * <p>The number of messages that an endpoint can receive during the specified timeframe.</p>
   * @public
   */
  TimeframeCap?: JourneyTimeframeCap | undefined;

  /**
   * <p>The maximum number of messages a journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.</p>
   * @public
   */
  TotalCap?: number | undefined;
}

/**
 * <p>Specifies the start and end time for OpenHours.</p>
 * @public
 */
export interface OpenHoursRule {
  /**
   * <p>The start of the scheduled time, in ISO 8601 format, when the channel can send messages.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The end of the scheduled time, in ISO 8601 format, when the channel can't send messages.</p>
   * @public
   */
  EndTime?: string | undefined;
}

/**
 * <p>Specifies the times when message are allowed to be sent to endpoints.</p>
 * @public
 */
export interface OpenHours {
  /**
   * <p>Specifies the schedule settings for the email channel.</p>
   * @public
   */
  EMAIL?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * <p>Specifies the schedule settings for the SMS channel.</p>
   * @public
   */
  SMS?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * <p>Specifies the schedule settings for the push channel.</p>
   * @public
   */
  PUSH?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * <p>Specifies the schedule settings for the voice channel.</p>
   * @public
   */
  VOICE?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * <p>Specifies the schedule settings for the custom channel.</p>
   * @public
   */
  CUSTOM?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;
}

/**
 * <p>Specifies the schedule settings for a journey.</p>
 * @public
 */
export interface JourneySchedule {
  /**
   * <p>The scheduled time, in ISO 8601 format, when the journey ended or will end.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The scheduled time, in ISO 8601 format, when the journey began or will begin.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The starting UTC offset for the journey schedule, if the value of the journey's LocalTime property is true. Valid values are: UTC,
   *                   UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30,
   *                   UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+08:45, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+12:45, UTC+13, UTC+13:45, UTC-02,
   *                   UTC-02:30, UTC-03, UTC-03:30, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09,
   *                   UTC-09:30, UTC-10, and UTC-11.</p>
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * <p>Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.</p>
 * @public
 */
export interface EventFilter {
  /**
   * <p>The dimensions for the event filter to use for the campaign or the journey activity.</p>
   * @public
   */
  Dimensions: EventDimensions | undefined;

  /**
   * <p>The type of event that causes the campaign to be sent or the journey activity to be performed. Valid values are: SYSTEM, sends the campaign or performs the activity when a system event occurs; and, ENDPOINT, sends the campaign or performs the activity when an endpoint event (<link  linkend="apps-application-id-events">Events resource</link>) occurs.</p>
   * @public
   */
  FilterType: FilterType | undefined;
}

/**
 * <p>Specifies the settings for an event that causes a journey activity to start.</p>
 * @public
 */
export interface EventStartCondition {
  /**
   * <p>Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.</p>
   * @public
   */
  EventFilter?: EventFilter | undefined;

  SegmentId?: string | undefined;
}

/**
 * <p>Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.</p>
 * @public
 */
export interface StartCondition {
  /**
   * <p>The custom description of the condition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the settings for an event that causes a journey activity to start.</p>
   * @public
   */
  EventStartCondition?: EventStartCondition | undefined;

  /**
   * <p>The segment that's associated with the first activity in the journey. This segment determines which users are participants in the journey.</p>
   * @public
   */
  SegmentStartCondition?: SegmentCondition | undefined;
}

/**
 * <p>Specifies the configuration and other settings for a journey.</p>
 * @public
 */
export interface WriteJourneyRequest {
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.</p>
   * @public
   */
  Activities?: Record<string, Activity> | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   * @public
   */
  Limits?: JourneyLimits | undefined;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.</p>
   * @public
   */
  LocalTime?: boolean | undefined;

  /**
   * <p>The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   * @public
   */
  RefreshFrequency?: string | undefined;

  /**
   * <p>The schedule settings for the journey.</p>
   * @public
   */
  Schedule?: JourneySchedule | undefined;

  /**
   * <p>The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.</p>
   * @public
   */
  StartActivity?: string | undefined;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   * @public
   */
  StartCondition?: StartCondition | undefined;

  /**
   * <p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend="apps-application-id-journeys-journey-id-state">Journey State</link> resource.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.</p>
   * @public
   */
  WaitForQuietTime?: boolean | undefined;

  /**
   * <p>Indicates whether the journey participants should be refreshed when a segment is updated.</p>
   * @public
   */
  RefreshOnSegmentUpdate?: boolean | undefined;

  /**
   * <p>The channel-specific configurations for the journey.</p>
   * @public
   */
  JourneyChannelSettings?: JourneyChannelSettings | undefined;

  /**
   * <p>Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.</p>
   * @public
   */
  SendingSchedule?: boolean | undefined;

  /**
   * <p>The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   * @public
   */
  OpenHours?: OpenHours | undefined;

  /**
   * <p>The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   * @public
   */
  ClosedDays?: ClosedDays | undefined;

  /**
   * <p>An array of time zone estimation methods, if any, to use for determining an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html">Endpoints</a> time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.</p> <ul> <li><p>PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.</p></li> <li><p>POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.</p> <note><p>POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.</p></note></li> </ul>
   * @public
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[] | undefined;
}

/**
 * @public
 */
export interface CreateJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   * @public
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * <p>Provides information about the status, configuration, and other settings for a journey.</p>
 * @public
 */
export interface JourneyResponse {
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.</p>
   * @public
   */
  Activities?: Record<string, Activity> | undefined;

  /**
   * <p>The unique identifier for the application that the journey applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   * @public
   */
  Limits?: JourneyLimits | undefined;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.</p>
   * @public
   */
  LocalTime?: boolean | undefined;

  /**
   * <p>The name of the journey.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   * @public
   */
  RefreshFrequency?: string | undefined;

  /**
   * <p>The schedule settings for the journey.</p>
   * @public
   */
  Schedule?: JourneySchedule | undefined;

  /**
   * <p>The unique identifier for the first activity in the journey.</p>
   * @public
   */
  StartActivity?: string | undefined;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   * @public
   */
  StartCondition?: StartCondition | undefined;

  /**
   * <p>The current status of the journey. Possible values are:</p> <ul><li><p>DRAFT - The journey is being developed and hasn't been published yet.</p></li> <li><p>ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li> <li><p>COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.</p></li> <li><p>CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.</p></li> <li><p>CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.</p></li></ul>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>This object is not used or supported.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether endpoints in quiet hours should enter a wait activity until quiet hours have elapsed.</p>
   * @public
   */
  WaitForQuietTime?: boolean | undefined;

  /**
   * <p>Indicates whether the journey participants should be refreshed when a segment is updated.</p>
   * @public
   */
  RefreshOnSegmentUpdate?: boolean | undefined;

  /**
   * <p>The channel-specific configurations for the journey.</p>
   * @public
   */
  JourneyChannelSettings?: JourneyChannelSettings | undefined;

  /**
   * <p>Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.</p>
   * @public
   */
  SendingSchedule?: boolean | undefined;

  /**
   * <p>The time when a journey can send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   * @public
   */
  OpenHours?: OpenHours | undefined;

  /**
   * <p>The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   * @public
   */
  ClosedDays?: ClosedDays | undefined;

  /**
   * <p>An array of time zone estimation methods, if any, to use for determining an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html">Endpoints</a> time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.</p> <ul> <li><p>PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.</p></li> <li><p>POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.</p> <note><p>POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.</p></note></li> </ul>
   * @public
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[] | undefined;
}

/**
 * @public
 */
export interface CreateJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * <p>Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.</p>
 * @public
 */
export interface DefaultPushNotificationTemplate {
  /**
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The message body to use in push notifications that are based on the message template.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p> <p>For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 * @public
 */
export interface PushNotificationTemplateRequest {
  /**
   * <p>The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  ADM?: AndroidPushNotificationTemplate | undefined;

  /**
   * <p>The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  APNS?: APNSPushNotificationTemplate | undefined;

  /**
   * <p>The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  Baidu?: AndroidPushNotificationTemplate | undefined;

  /**
   * <p>The default message template to use for push notification channels.</p>
   * @public
   */
  Default?: DefaultPushNotificationTemplate | undefined;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  GCM?: AndroidPushNotificationTemplate | undefined;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A custom description of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreatePushTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   * @public
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreatePushTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 * @public
 */
export interface CreateRecommenderConfigurationShape {
  /**
   * <p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   * @public
   */
  RecommendationProviderIdType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   * @public
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.</p>
   * @public
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.</p>
   * @public
   */
  RecommendationTransformerUri?: string | undefined;

  /**
   * <p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>
   * @public
   */
  RecommendationsDisplayName?: string | undefined;

  /**
   * <p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   * @public
   */
  RecommendationsPerMessage?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationRequest {
  /**
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   * @public
   */
  CreateRecommenderConfiguration: CreateRecommenderConfigurationShape | undefined;
}

/**
 * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
 * @public
 */
export interface RecommenderConfigurationResponse {
  /**
   * <p>A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The date, in extended ISO 8601 format, when the configuration was created for the recommender model.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The custom description of the configuration for the recommender model.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier for the recommender model configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom name of the configuration for the recommender model.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   * @public
   */
  RecommendationProviderIdType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   * @public
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.</p>
   * @public
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.</p>
   * @public
   */
  RecommendationTransformerUri?: string | undefined;

  /**
   * <p>The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   * @public
   */
  RecommendationsDisplayName?: string | undefined;

  /**
   * <p>The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.</p>
   * @public
   */
  RecommendationsPerMessage?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * <p>Specifies the segment identifier and version of a segment.</p>
 * @public
 */
export interface SegmentReference {
  /**
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version number of the segment.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.</p>
 * @public
 */
export interface SegmentGroup {
  /**
   * <p>An array that defines the dimensions for the segment.</p>
   * @public
   */
  Dimensions?: SegmentDimensions[] | undefined;

  /**
   * <p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>
   * @public
   */
  SourceSegments?: SegmentReference[] | undefined;

  /**
   * <p>Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.</p>
   * @public
   */
  Type?: Type | undefined;
}

/**
 * <p>Specifies the settings that define the relationships between segment groups for a segment.</p>
 * @public
 */
export interface SegmentGroupList {
  /**
   * <p>An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.</p>
   * @public
   */
  Groups?: SegmentGroup[] | undefined;

  /**
   * <p>Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.</p>
   * @public
   */
  Include?: Include | undefined;
}

/**
 * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
 * @public
 */
export interface WriteSegmentRequest {
  /**
   * <p>The criteria that define the dimensions for the segment.</p>
   * @public
   */
  Dimensions?: SegmentDimensions | undefined;

  /**
   * <p>The name of the segment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   * @public
   */
  SegmentGroups?: SegmentGroupList | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   * @public
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * <p>Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.</p>
 * @public
 */
export interface SegmentImportResource {
  /**
   * <p>The number of channel types in the endpoint definitions that were imported to create the segment.</p>
   * @public
   */
  ChannelCounts?: Record<string, number> | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   * @public
   */
  ExternalId: string | undefined;

  /**
   * <p>The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p>
   * @public
   */
  Format: Format | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.</p>
   * @public
   */
  S3Url: string | undefined;

  /**
   * <p>The number of endpoint definitions that were imported successfully to create the segment.</p>
   * @public
   */
  Size: number | undefined;
}

/**
 * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
 * @public
 */
export interface SegmentResponse {
  /**
   * <p>The unique identifier for the application that the segment is associated with.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the segment.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time when the segment was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The dimension settings for the segment.</p>
   * @public
   */
  Dimensions?: SegmentDimensions | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The settings for the import job that's associated with the segment.</p>
   * @public
   */
  ImportDefinition?: SegmentImportResource | undefined;

  /**
   * <p>The date and time when the segment was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The name of the segment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   * @public
   */
  SegmentGroups?: SegmentGroupList | undefined;

  /**
   * <p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>
   * @public
   */
  SegmentType: SegmentType | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version number of the segment.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 * @public
 */
export interface SMSTemplateRequest {
  /**
   * <p>The message body to use in text messages that are based on the message template.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A custom description of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateSmsTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   * @public
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreateSmsTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 * @public
 */
export interface VoiceTemplateRequest {
  /**
   * <p>The text of the script to use in messages that are based on the message template, in plain text format.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A custom description of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   * @public
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

/**
 * @public
 */
export interface CreateVoiceTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * <p>Specifies the default message for all channels.</p>
 * @public
 */
export interface DefaultMessage {
  /**
   * <p>The default body of the message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The default message variables to use in the message. You can override these default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;
}

/**
 * <p>Specifies the default settings and content for a push notification that's sent directly to an endpoint.</p>
 * @public
 */
export interface DefaultPushNotificationMessage {
  /**
   * <p>The default action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The default body of the notification message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.</p>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The default title to display above the notification message on a recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   * @public
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   * @public
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   * @public
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   * @public
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * <p>Provides information about an application.</p>
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   * @public
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the email channel for an application.</p>
 * @public
 */
export interface EmailChannelResponse {
  /**
   * <p>The unique identifier for the application that the email channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that's applied to messages that are sent through the channel.</p>
   * @public
   */
  ConfigurationSet?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Specifies whether the email channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The verified email address that email is sent from when you send email through the channel.</p>
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.</p>
   * @public
   */
  Identity?: string | undefined;

  /**
   * <p>Specifies whether the email channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the email channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The maximum number of emails that can be sent through the channel each second.</p>
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES.</p>
   * @public
   */
  OrchestrationSendingRoleArn?: string | undefined;

  /**
   * <p>The current version of the email channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   * @public
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export interface MessageBody {
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEmailTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The case insensitive unique identifier for the endpoint. The identifier can't contain <code>$</code>, <code>\{</code> or <code>\}</code>.</p>
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * <p>Specifies demographic information about an endpoint, such as the applicable time zone and platform.</p>
 * @public
 */
export interface EndpointDemographic {
  /**
   * <p>The version of the app that's associated with the endpoint.</p>
   * @public
   */
  AppVersion?: string | undefined;

  /**
   * <p>The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The manufacturer of the endpoint device, such as apple or samsung.</p>
   * @public
   */
  Make?: string | undefined;

  /**
   * <p>The model name or number of the endpoint device, such as iPhone or SM-G900F.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The model version of the endpoint device.</p>
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * <p>The platform of the endpoint device, such as ios.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The platform version of the endpoint device.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.</p>
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * <p>Specifies geographic information about an endpoint.</p>
 * @public
 */
export interface EndpointLocation {
  /**
   * <p>The name of the city where the endpoint is located.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The latitude coordinate of the endpoint location, rounded to one decimal place.</p>
   * @public
   */
  Latitude?: number | undefined;

  /**
   * <p>The longitude coordinate of the endpoint location, rounded to one decimal place.</p>
   * @public
   */
  Longitude?: number | undefined;

  /**
   * <p>The postal or ZIP code for the area where the endpoint is located.</p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Specifies data for one or more attributes that describe the user who's associated with an endpoint.</p>
 * @public
 */
export interface EndpointUser {
  /**
   * <p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   * @public
   */
  UserAttributes?: Record<string, string[]> | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>Provides information about the channel type and other settings for an endpoint.</p>
 * @public
 */
export interface EndpointResponse {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The unique identifier for the application that's associated with the endpoint.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments.</p>
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * <p>A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.</p>
   * @public
   */
  CohortId?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * <p>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * <p>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The geographic information for the endpoint.</p>
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   * @public
   */
  OptOut?: string | undefined;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   * @public
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
 * @public
 */
export interface EventStream {
  /**
   * <p>The unique identifier for the application to publish event data for.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   * @public
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the event stream was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The IAM user who last modified the event stream.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface DeleteGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 * @public
 */
export interface GCMChannelResponse {
  /**
   * <p>The unique identifier for the application that the GCM channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time when the GCM channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   * @public
   */
  Credential?: string | undefined;

  /**
   * <p>The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether the GCM channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>Returns true if the JSON file provided by Google during registration process was used in the <b>ServiceJson</b> field of the request.</p>
   * @public
   */
  HasFcmServiceCredentials?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the GCM channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the GCM channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the GCM channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the GCM channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   * @public
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteInAppTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInAppTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  JourneyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface DeletePushTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeletePushTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  RecommenderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  SegmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the SMS channel for an application.</p>
 * @public
 */
export interface SMSChannelResponse {
  /**
   * <p>The unique identifier for the application that the SMS channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Specifies whether the SMS channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the SMS channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the SMS channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The maximum number of promotional messages that you can send through the SMS channel each second.</p>
   * @public
   */
  PromotionalMessagesPerSecond?: number | undefined;

  /**
   * <p>The identity that displays on recipients' devices when they receive messages from the SMS channel.</p>
   * @public
   */
  SenderId?: string | undefined;

  /**
   * <p>The registered short code to use when you send messages through the SMS channel.</p>
   * @public
   */
  ShortCode?: string | undefined;

  /**
   * <p>The maximum number of transactional messages that you can send through the SMS channel each second.</p>
   * @public
   */
  TransactionalMessagesPerSecond?: number | undefined;

  /**
   * <p>The current version of the SMS channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   * @public
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSmsTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * <p>Provides information about all the endpoints that are associated with a user ID.</p>
 * @public
 */
export interface EndpointsResponse {
  /**
   * <p>An array of responses, one for each endpoint that's associated with the user ID.</p>
   * @public
   */
  Item: EndpointResponse[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsResponse {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   * @public
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * <p>Provides information about the status and settings of the voice channel for an application.</p>
 * @public
 */
export interface VoiceChannelResponse {
  /**
   * <p>The unique identifier for the application that the voice channel applies to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the voice channel was enabled.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Specifies whether the voice channel is enabled for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * <p>(Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies whether the voice channel is archived.</p>
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * <p>The user who last modified the voice channel.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the voice channel was last modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.</p>
   * @public
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the voice channel.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   * @public
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * <p>Specifies the contents of an email message, represented as a raw MIME message.</p>
 * @public
 */
export interface RawEmail {
  /**
   * <p>The email message, represented as a raw MIME message. The entire message must be base64 encoded.</p>
   * @public
   */
  Data?: Uint8Array | undefined;
}

/**
 * <p>Specifies the subject or body of an email message, represented as textual email data and the applicable character set.</p>
 * @public
 */
export interface SimpleEmailPart {
  /**
   * <p>The applicable character set for the message content.</p>
   * @public
   */
  Charset?: string | undefined;

  /**
   * <p>The textual data of the message content.</p>
   * @public
   */
  Data?: string | undefined;
}

/**
 * <p>Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.</p>
 * @public
 */
export interface SimpleEmail {
  /**
   * <p>The body of the email message, in HTML format. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   * @public
   */
  HtmlPart?: SimpleEmailPart | undefined;

  /**
   * <p>The subject line, or title, of the email.</p>
   * @public
   */
  Subject?: SimpleEmailPart | undefined;

  /**
   * <p>The body of the email message, in plain text format. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   * @public
   */
  TextPart?: SimpleEmailPart | undefined;

  /**
   * <p>The list of MessageHeaders for the email. You can have up to 15 Headers.</p>
   * @public
   */
  Headers?: MessageHeader[] | undefined;
}

/**
 * <p>Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.</p>
 * @public
 */
export interface EmailMessage {
  /**
   * <p>The body of the email message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The email address to forward bounces and complaints to, if feedback forwarding is enabled.</p>
   * @public
   */
  FeedbackForwardingAddress?: string | undefined;

  /**
   * <p>The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.</p>
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * <p>The email message, represented as a raw MIME message.</p>
   * @public
   */
  RawEmail?: RawEmail | undefined;

  /**
   * <p>The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.</p>
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * <p>The email message, composed of a subject, a text part, and an HTML part.</p>
   * @public
   */
  SimpleEmail?: SimpleEmail | undefined;

  /**
   * <p>The default message variables to use in the email message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;
}

/**
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 * @public
 */
export interface GCMMessage {
  /**
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The body of the notification message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active.</p> <p>Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.</p>
   * @public
   */
  CollapseKey?: string | undefined;

  /**
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * <p>The icon image name of the asset saved in your app.</p>
   * @public
   */
  IconReference?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * <p>The URL of an image to display in the push notification.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The preferred authentication method, with valid values "KEY" or "TOKEN". If a value isn't provided then the <b>DefaultAuthenticationMethod</b> is used.</p>
   * @public
   */
  PreferredAuthenticationMethod?: string | undefined;

  /**
   * <p>para>normal – The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required.</p>/listitem> <li><p>high – The notification is sent immediately and might wake a sleeping device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM.</p> <p>The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.</p>
   * @public
   */
  Priority?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>The package name of the application where registration tokens must match in order for the recipient to receive the message.</p>
   * @public
   */
  RestrictedPackageName?: string | undefined;

  /**
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   * @public
   */
  Sound?: string | undefined;

  /**
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days).</p> <p>Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>The title to display above the notification message on the recipient's device.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.</p>
 * @public
 */
export interface SMSMessage {
  /**
   * <p>The body of the SMS message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The SMS program name that you provided to AWS Support when you requested your dedicated number.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>This field is reserved for future use.</p>
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>The number to send the SMS message from. This value should be one of the dedicated long or short codes that's assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message and sends the message from that code.</p>
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.</p>
   * @public
   */
  SenderId?: string | undefined;

  /**
   * <p>The message variables to use in the SMS message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  EntityId?: string | undefined;

  /**
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * <p>Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.</p>
 * @public
 */
export interface VoiceMessage {
  /**
   * <p>The text of the script to use for the voice message.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The code for the language to use when synthesizing the text of the message script. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <p>The long code to send the voice message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code in E.164 format, for example +12065550100, to ensure prompt and accurate delivery of the message.</p>
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * <p>The default message variables to use in the voice message. You can override the default variables with individual address variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The name of the voice to use when delivering the message. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * <p>Specifies the settings and content for the default message and any default messages that you tailored for specific channels.</p>
 * @public
 */
export interface DirectMessageConfiguration {
  /**
   * <p>The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   * @public
   */
  ADMMessage?: ADMMessage | undefined;

  /**
   * <p>The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   * @public
   */
  APNSMessage?: APNSMessage | undefined;

  /**
   * <p>The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   * @public
   */
  BaiduMessage?: BaiduMessage | undefined;

  /**
   * <p>The default message for all channels.</p>
   * @public
   */
  DefaultMessage?: DefaultMessage | undefined;

  /**
   * <p>The default push notification message for all push notification channels.</p>
   * @public
   */
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage | undefined;

  /**
   * <p>The default message for the email channel. This message overrides the default message (DefaultMessage).</p>
   * @public
   */
  EmailMessage?: EmailMessage | undefined;

  /**
   * <p>The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   * @public
   */
  GCMMessage?: GCMMessage | undefined;

  /**
   * <p>The default message for the SMS channel. This message overrides the default message (DefaultMessage).</p>
   * @public
   */
  SMSMessage?: SMSMessage | undefined;

  /**
   * <p>The default message for the voice channel. This message overrides the default message (DefaultMessage).</p>
   * @public
   */
  VoiceMessage?: VoiceMessage | undefined;
}

/**
 * <p>Specifies the status and settings of the email channel for an application.</p>
 * @public
 */
export interface EmailChannelRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that you want to apply to messages that you send through the channel.</p>
   * @public
   */
  ConfigurationSet?: string | undefined;

  /**
   * <p>Specifies whether to enable the email channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The verified email address that you want to send email from when you send email through the channel.</p>
   * @public
   */
  FromAddress: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>
   * @public
   */
  Identity: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES.</p>
   * @public
   */
  OrchestrationSendingRoleArn?: string | undefined;
}

/**
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 * @public
 */
export interface EmailTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The message body, in HTML format, that's used in email messages that are based on the message template.</p>
   * @public
   */
  HtmlPart?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The unique identifier for the recommender model that's used by the message template.</p>
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * <p>The subject line, or title, that's used in email messages that are based on the message template.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The list of <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-model-messageheader">MessageHeaders</a> for the email. You can have up to 15 Headers.</p>
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The custom description of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For an email template, this value is EMAIL.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The message body, in plain text format, that's used in email messages that are based on the message template.</p>
   * @public
   */
  TextPart?: string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.</p>
 * @public
 */
export interface EndpointBatchItem {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created or updated.</p>
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * <p>The unique identifier for the endpoint in the context of the batch.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The geographic information for the endpoint.</p>
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   * @public
   */
  OptOut?: string | undefined;

  /**
   * <p>The unique identifier for the request to create or update the endpoint.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the user who's associated with the endpoint.</p>
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
 * @public
 */
export interface EndpointBatchRequest {
  /**
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   * @public
   */
  Item: EndpointBatchItem[] | undefined;
}

/**
 * <p>Provides the status code and message that result from processing data for an endpoint.</p>
 * @public
 */
export interface EndpointItemResponse {
  /**
   * <p>The custom message that's returned in the response as a result of processing the endpoint data.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status code that's returned in the response as a result of processing the endpoint data.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * <p>Provides information about the delivery status and results of sending a message directly to an endpoint.</p>
 * @public
 */
export interface EndpointMessageResult {
  /**
   * <p>The endpoint address that the message was delivered to.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.</p></li>    <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   * @public
   */
  DeliveryStatus: DeliveryStatus | undefined;

  /**
   * <p>The unique identifier for the message that was sent.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The downstream service status code for delivering the message.</p>
   * @public
   */
  StatusCode: number | undefined;

  /**
   * <p>The status message for delivering the message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.</p>
   * @public
   */
  UpdatedToken?: string | undefined;
}

/**
 * <p>Specifies the channel type and other settings for an endpoint.</p>
 * @public
 */
export interface EndpointRequest {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint is updated.</p>
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * <p>The geographic information for the endpoint.</p>
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   * @public
   */
  OptOut?: string | undefined;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the user who's associated with the endpoint.</p>
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * <p>Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.</p>
 * @public
 */
export interface EndpointSendConfiguration {
  /**
   * <p>The body of the message. If specified, this value overrides the default message body.</p>
   * @public
   */
  BodyOverride?: string | undefined;

  /**
   * <p>A map of custom attributes to attach to the message for the address. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   * @public
   */
  RawContent?: string | undefined;

  /**
   * <p>A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.</p>
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * <p>The title or subject line of the message. If specified, this value overrides the default message title or subject line.</p>
   * @public
   */
  TitleOverride?: string | undefined;
}

/**
 * <p>Provides information about a session.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The duration of the session, in milliseconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The unique identifier for the session.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time when the session began.</p>
   * @public
   */
  StartTimestamp: string | undefined;

  /**
   * <p>The date and time when the session ended.</p>
   * @public
   */
  StopTimestamp?: string | undefined;
}

/**
 * <p>Specifies information about an event that reports data to Amazon Pinpoint.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The package name of the app that's recording the event.</p>
   * @public
   */
  AppPackageName?: string | undefined;

  /**
   * <p>The title of the app that's recording the event.</p>
   * @public
   */
  AppTitle?: string | undefined;

  /**
   * <p>The version number of the app that's recording the event.</p>
   * @public
   */
  AppVersionCode?: string | undefined;

  /**
   * <p>One or more custom attributes that are associated with the event.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The version of the SDK that's running on the client device.</p>
   * @public
   */
  ClientSdkVersion?: string | undefined;

  /**
   * <p>The name of the event.</p>
   * @public
   */
  EventType: string | undefined;

  /**
   * <p>One or more custom metrics that are associated with the event.</p>
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * <p>The name of the SDK that's being used to record the event.</p>
   * @public
   */
  SdkName?: string | undefined;

  /**
   * <p>Information about the session in which the event occurred.</p>
   * @public
   */
  Session?: Session | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the event occurred.</p>
   * @public
   */
  Timestamp: string | undefined;
}

/**
 * <p>Provides the status code and message that result from processing an event.</p>
 * @public
 */
export interface EventItemResponse {
  /**
   * <p>A custom message that's returned in the response as a result of processing the event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * <p>Specifies the properties and attributes of an endpoint that's associated with an event.</p>
 * @public
 */
export interface PublicEndpoint {
  /**
   * <p>The unique identifier for the recipient, such as a device token, email address, or mobile phone number.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.</p>
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * <p>The geographic information for the endpoint.</p>
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   * @public
   */
  OptOut?: string | undefined;

  /**
   * <p>A unique identifier that's generated each time the endpoint is updated.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * <p>Specifies a batch of endpoints and events to process.</p>
 * @public
 */
export interface EventsBatch {
  /**
   * <p>A set of properties and attributes that are associated with the endpoint.</p>
   * @public
   */
  Endpoint: PublicEndpoint | undefined;

  /**
   * <p>A set of properties that are associated with the event.</p>
   * @public
   */
  Events: Record<string, Event> | undefined;
}

/**
 * <p>Specifies a batch of events to process.</p>
 * @public
 */
export interface EventsRequest {
  /**
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   * @public
   */
  BatchItem: Record<string, EventsBatch> | undefined;
}

/**
 * <p>Provides information about the results of a request to create or update an endpoint that's associated with an event.</p>
 * @public
 */
export interface ItemResponse {
  /**
   * <p>The response that was received after the endpoint data was accepted.</p>
   * @public
   */
  EndpointItemResponse?: EndpointItemResponse | undefined;

  /**
   * <p>A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.</p>
   * @public
   */
  EventsItemResponse?: Record<string, EventItemResponse> | undefined;
}

/**
 * <p>Provides information about endpoints and the events that they're associated with.</p>
 * @public
 */
export interface EventsResponse {
  /**
   * <p>A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.</p>
   * @public
   */
  Results?: Record<string, ItemResponse> | undefined;
}

/**
 * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
 * @public
 */
export interface ExportJobsResponse {
  /**
   * <p>An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).</p>
   * @public
   */
  Item: ExportJobResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 * @public
 */
export interface GCMChannelRequest {
  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * <p>The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".</p>
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * <p>Specifies whether to enable the GCM channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The contents of the JSON file provided by Google during registration in order to generate an access token for authentication. For more information see <a href="https://firebase.google.com/docs/cloud-messaging/migrate-v1">Migrate from legacy FCM APIs to HTTP v1</a>.</p>
   * @public
   */
  ServiceJson?: string | undefined;
}

/**
 * @public
 */
export interface GetAdmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   * @public
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   * @public
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   * @public
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   * @public
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetAppRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResponse {
  /**
   * <p>Provides information about an application.</p>
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
   * @public
   */
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsResponse {
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   * @public
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

/**
 * @public
 */
export interface GetAppsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetAppsResponse {
  /**
   * <p>Provides information about all of your applications.</p>
   * @public
   */
  ApplicationsResponse: ApplicationsResponse | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   * @public
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignActivitiesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignActivitiesResponse {
  /**
   * <p>Provides information about the activities that were performed by a campaign.</p>
   * @public
   */
  ActivitiesResponse: ActivitiesResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
   * @public
   */
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignsResponse {
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   * @public
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   * @public
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionsResponse {
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   * @public
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

/**
 * @public
 */
export interface GetChannelsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelsResponse {
  /**
   * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
   * @public
   */
  ChannelsResponse: ChannelsResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   * @public
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetEmailTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   * @public
   */
  EmailTemplateResponse: EmailTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The case insensitive unique identifier for the endpoint. The identifier can't contain <code>$</code>, <code>\{</code> or <code>\}</code>.</p>
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   * @public
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface GetEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface GetExportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   * @public
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetExportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   * @public
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   * @public
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   * @public
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
 * @public
 */
export interface ImportJobsResponse {
  /**
   * <p>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</p>
   * @public
   */
  Item: ImportJobResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   * @public
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * <p>Provides all fields required for building an in-app message.</p>
 * @public
 */
export interface InAppMessage {
  /**
   * <p>In-app message content.</p>
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * <p>Custom config to be sent to SDK.</p>
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * <p>The layout of the message.</p>
   * @public
   */
  Layout?: Layout | undefined;
}

/**
 * <p>Schedule of the campaign.</p>
 * @public
 */
export interface InAppCampaignSchedule {
  /**
   * <p>The scheduled time after which the in-app message should not be shown. Timestamp is in ISO 8601 format.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The event filter the SDK has to use to show the in-app message in the application.</p>
   * @public
   */
  EventFilter?: CampaignEventFilter | undefined;

  /**
   * <p>Time during which the in-app message should not be shown to the user.</p>
   * @public
   */
  QuietTime?: QuietTime | undefined;
}

/**
 * <p>Targeted in-app message campaign.</p>
 * @public
 */
export interface InAppMessageCampaign {
  /**
   * <p>Campaign id of the corresponding campaign.</p>
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * <p>Daily cap which controls the number of times any in-app messages can be shown to the endpoint during a day.</p>
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * <p>In-app message content with all fields required for rendering an in-app message.</p>
   * @public
   */
  InAppMessage?: InAppMessage | undefined;

  /**
   * <p>Priority of the in-app message.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Schedule of the campaign.</p>
   * @public
   */
  Schedule?: InAppCampaignSchedule | undefined;

  /**
   * <p>Session cap which controls the number of times an in-app message can be shown to the endpoint during an application session.</p>
   * @public
   */
  SessionCap?: number | undefined;

  /**
   * <p>Total cap which controls the number of times an in-app message can be shown to the endpoint.</p>
   * @public
   */
  TotalCap?: number | undefined;

  /**
   * <p>Treatment id of the campaign.</p>
   * @public
   */
  TreatmentId?: string | undefined;
}

/**
 * <p>Get in-app messages response object.</p>
 * @public
 */
export interface InAppMessagesResponse {
  /**
   * <p>List of targeted in-app message campaigns.</p>
   * @public
   */
  InAppMessageCampaigns?: InAppMessageCampaign[] | undefined;
}

/**
 * @public
 */
export interface GetInAppMessagesResponse {
  /**
   * <p>Get in-app messages response object.</p>
   * @public
   */
  InAppMessagesResponse: InAppMessagesResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>In-App Template Response.</p>
 * @public
 */
export interface InAppTemplateResponse {
  /**
   * <p>The resource arn of the template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</p>
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * <p>The creation date of the template.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>Custom config to be sent to client.</p>
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * <p>The last modified date of the template.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The layout of the message.</p>
   * @public
   */
  Layout?: Layout | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of the template.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The version id of the template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetInAppTemplateResponse {
  /**
   * <p>In-App Template Response.</p>
   * @public
   */
  InAppTemplateResponse: InAppTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  JourneyId: string | undefined;
}
