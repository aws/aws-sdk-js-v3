// smithy-typescript generated code
import type {
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
 * Provides information about an activity that was performed by a campaign.
 *
 * @public
 */
export interface ActivityResponse {
  /**
   * The unique identifier for the application that the campaign applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign that the activity applies to.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.
   *
   * @public
   */
  End?: string | undefined;

  /**
   * The unique identifier for the activity.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * The scheduled start time, in ISO 8601 format, for the activity.
   *
   * @public
   */
  ScheduledStart?: string | undefined;

  /**
   * The actual start time, in ISO 8601 format, of the activity.
   *
   * @public
   */
  Start?: string | undefined;

  /**
   * The current status of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The total number of endpoints that the campaign successfully delivered messages to.
   *
   * @public
   */
  SuccessfulEndpointCount?: number | undefined;

  /**
   * The total number of time zones that were completed.
   *
   * @public
   */
  TimezonesCompletedCount?: number | undefined;

  /**
   * The total number of unique time zones that are in the segment for the campaign.
   *
   * @public
   */
  TimezonesTotalCount?: number | undefined;

  /**
   * The total number of endpoints that the campaign attempted to deliver messages to.
   *
   * @public
   */
  TotalEndpointCount?: number | undefined;

  /**
   * The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.
   *
   * @public
   */
  TreatmentId?: string | undefined;

  /**
   * A JSON object that contains metrics relating to the campaign execution for this campaign activity. For information about the structure and contents of the results, see [Standard Amazon Pinpoint analytics metrics](https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html) in the *Amazon Pinpoint Developer Guide*.
   *
   * @public
   */
  ExecutionMetrics?: Record<string, string> | undefined;
}

/**
 * Provides information about the activities that were performed by a campaign.
 *
 * @public
 */
export interface ActivitiesResponse {
  /**
   * An array of responses, one for each activity that was performed by the campaign.
   *
   * @public
   */
  Item: ActivityResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
 *
 * @public
 */
export interface AttributeDimension {
  /**
   * The type of segment dimension to use. Valid values are:
   *
   * - INCLUSIVE - endpoints that have attributes matching the values are included in the segment.
   * - EXCLUSIVE - endpoints that have attributes matching the values are excluded in the segment.
   * - CONTAINS - endpoints that have attributes' substrings match the values are included in the segment.
   * - BEFORE - endpoints with attributes read as ISO_INSTANT datetimes before the value are included in the segment.
   * - AFTER - endpoints with attributes read as ISO_INSTANT datetimes after the value are included in the segment.
   * - ON - endpoints with attributes read as ISO_INSTANT dates on the value are included in the segment. Time is ignored in this comparison.
   * - BETWEEN - endpoints with attributes read as ISO_INSTANT datetimes between the values are included in the segment.
   *
   * @public
   */
  AttributeType?: AttributeType | undefined;

  /**
   * The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Specifies the dimension type and values for a segment dimension.
 *
 * @public
 */
export interface SetDimension {
  /**
   * The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.
   *
   * @public
   */
  DimensionType?: DimensionType | undefined;

  /**
   * The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
 *
 * @public
 */
export interface MetricDimension {
  /**
   * The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.
   *
   * @public
   */
  ComparisonOperator: string | undefined;

  /**
   * The value to compare.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
 *
 * @public
 */
export interface EventDimensions {
  /**
   * One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.
   *
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard event that Amazon Pinpoint generates, such as _email.delivered. For campaigns, this can also be a custom event that's specific to your application. For information about standard events, see [Streaming Amazon Pinpoint Events](https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html) in the *Amazon Pinpoint Developer Guide*.
   *
   * @public
   */
  EventType?: SetDimension | undefined;

  /**
   * One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.
   *
   * @public
   */
  Metrics?: Record<string, MetricDimension> | undefined;
}

/**
 * Specifies the conditions to evaluate for an event that applies to an activity in a journey.
 *
 * @public
 */
export interface EventCondition {
  /**
   * The dimensions for the event filter to use for the activity.
   *
   * @public
   */
  Dimensions?: EventDimensions | undefined;

  /**
   * The message identifier (message_id) for the message to use when determining whether message events meet the condition.
   *
   * @public
   */
  MessageActivity?: string | undefined;
}

/**
 * Specifies a segment to associate with an activity in a journey.
 *
 * @public
 */
export interface SegmentCondition {
  /**
   * The unique identifier for the segment to associate with the activity.
   *
   * @public
   */
  SegmentId: string | undefined;
}

/**
 * Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
 *
 * @public
 */
export interface RecencyDimension {
  /**
   * The duration to use when determining whether an endpoint is active or inactive.
   *
   * @public
   */
  Duration: Duration | undefined;

  /**
   * The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.
   *
   * @public
   */
  RecencyType: RecencyType | undefined;
}

/**
 * Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
 *
 * @public
 */
export interface SegmentBehaviors {
  /**
   * The dimension settings that are based on how recently an endpoint was active.
   *
   * @public
   */
  Recency?: RecencyDimension | undefined;
}

/**
 * Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
 *
 * @public
 */
export interface SegmentDemographics {
  /**
   * The app version criteria for the segment.
   *
   * @public
   */
  AppVersion?: SetDimension | undefined;

  /**
   * The channel criteria for the segment.
   *
   * @public
   */
  Channel?: SetDimension | undefined;

  /**
   * The device type criteria for the segment.
   *
   * @public
   */
  DeviceType?: SetDimension | undefined;

  /**
   * The device make criteria for the segment.
   *
   * @public
   */
  Make?: SetDimension | undefined;

  /**
   * The device model criteria for the segment.
   *
   * @public
   */
  Model?: SetDimension | undefined;

  /**
   * The device platform criteria for the segment.
   *
   * @public
   */
  Platform?: SetDimension | undefined;
}

/**
 * Specifies the GPS coordinates of a location.
 *
 * @public
 */
export interface GPSCoordinates {
  /**
   * The latitude coordinate of the location.
   *
   * @public
   */
  Latitude: number | undefined;

  /**
   * The longitude coordinate of the location.
   *
   * @public
   */
  Longitude: number | undefined;
}

/**
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
 *
 * @public
 */
export interface GPSPointDimension {
  /**
   * The GPS coordinates to measure distance from.
   *
   * @public
   */
  Coordinates: GPSCoordinates | undefined;

  /**
   * The range, in kilometers, from the GPS coordinates.
   *
   * @public
   */
  RangeInKilometers?: number | undefined;
}

/**
 * Specifies geographical dimension settings for a segment.
 *
 * @public
 */
export interface SegmentLocation {
  /**
   * The country or region code, in ISO 3166-1 alpha-2 format, for the segment.
   *
   * @public
   */
  Country?: SetDimension | undefined;

  /**
   * The GPS location and range for the segment.
   *
   * @public
   */
  GPSPoint?: GPSPointDimension | undefined;
}

/**
 * Specifies the dimension settings for a segment.
 *
 * @public
 */
export interface SegmentDimensions {
  /**
   * One or more custom attributes to use as criteria for the segment.
   *
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * The behavior-based criteria, such as how recently users have used your app, for the segment.
   *
   * @public
   */
  Behavior?: SegmentBehaviors | undefined;

  /**
   * The demographic-based criteria, such as device platform, for the segment.
   *
   * @public
   */
  Demographic?: SegmentDemographics | undefined;

  /**
   * The location-based criteria, such as region or GPS coordinates, for the segment.
   *
   * @public
   */
  Location?: SegmentLocation | undefined;

  /**
   * One or more custom metrics to use as criteria for the segment.
   *
   * @public
   */
  Metrics?: Record<string, MetricDimension> | undefined;

  /**
   * One or more custom user attributes to use as criteria for the segment.
   *
   * @public
   */
  UserAttributes?: Record<string, AttributeDimension> | undefined;
}

/**
 * Specifies a condition to evaluate for an activity in a journey.
 *
 * @public
 */
export interface SimpleCondition {
  /**
   * The dimension settings for the event that's associated with the activity.
   *
   * @public
   */
  EventCondition?: EventCondition | undefined;

  /**
   * The segment that's associated with the activity.
   *
   * @public
   */
  SegmentCondition?: SegmentCondition | undefined;

  /**
   * The dimension settings for the segment that's associated with the activity.
   *
   * @public
   */
  SegmentDimensions?: SegmentDimensions | undefined;
}

/**
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
 *
 * @public
 */
export interface Condition {
  /**
   * The conditions to evaluate for the activity.
   *
   * @public
   */
  Conditions?: SimpleCondition[] | undefined;

  /**
   * Specifies how to handle multiple conditions for the activity. For example, if you specify two conditions for an activity, whether both or only one of the conditions must be met for the activity to be performed.
   *
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
 *
 * @public
 */
export interface WaitTime {
  /**
   * The amount of time to wait, as a duration in ISO 8601 format, before determining whether the activity's conditions have been met or moving participants to the next activity in the journey.
   *
   * @public
   */
  WaitFor?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when Amazon Pinpoint determines whether the activity's conditions have been met or the activity moves participants to the next activity in the journey.
   *
   * @public
   */
  WaitUntil?: string | undefined;
}

/**
 * Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.
 *
 * > **Note:** To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see [Integrating Amazon Pinpoint with your application](https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html) in the *Amazon Pinpoint Developer Guide*.
 *
 * @public
 */
export interface ConditionalSplitActivity {
  /**
   * The conditions that define the paths for the activity, and the relationship between the conditions.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * The amount of time to wait before determining whether the conditions are met, or the date and time when Amazon Pinpoint determines whether the conditions are met.
   *
   * @public
   */
  EvaluationWaitTime?: WaitTime | undefined;

  /**
   * The unique identifier for the activity to perform if the conditions aren't met.
   *
   * @public
   */
  FalseActivity?: string | undefined;

  /**
   * The unique identifier for the activity to perform if the conditions are met.
   *
   * @public
   */
  TrueActivity?: string | undefined;
}

/**
 * @public
 */
export interface ContactCenterActivity {
  /**
   * The unique identifier for the next activity to perform after the this activity.
   *
   * @public
   */
  NextActivity?: string | undefined;
}

/**
 * Specifies the message content for a custom channel message that's sent to participants in a journey.
 *
 * @public
 */
export interface JourneyCustomMessage {
  /**
   * The message content that's passed to an AWS Lambda function or to a web hook.
   *
   * @public
   */
  Data?: string | undefined;
}

/**
 * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
 *
 * @public
 */
export interface CustomMessageActivity {
  /**
   * The destination to send the campaign or treatment to. This value can be one of the following:
   *
   * - The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.
   * - The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.
   *
   * @public
   */
  DeliveryUri?: string | undefined;

  /**
   * The types of endpoints to send the custom message to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.
   *
   * @public
   */
  EndpointTypes?: __EndpointTypesElement[] | undefined;

  /**
   * Specifies the message data included in a custom channel message that's sent to participants in a journey.
   *
   * @public
   */
  MessageConfig?: JourneyCustomMessage | undefined;

  /**
   * The unique identifier for the next activity to perform, after Amazon Pinpoint calls the AWS Lambda function or web hook.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The name of the custom message template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * Specifies the "From" address for an email message that's sent to participants in a journey.
 *
 * @public
 */
export interface JourneyEmailMessage {
  /**
   * The verified email address to send the email message from. The default address is the FromAddress specified for the email channel for the application.
   *
   * @public
   */
  FromAddress?: string | undefined;
}

/**
 * Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
 *
 * @public
 */
export interface EmailMessageActivity {
  /**
   * Specifies the sender address for an email message that's sent to participants in the journey.
   *
   * @public
   */
  MessageConfig?: JourneyEmailMessage | undefined;

  /**
   * The unique identifier for the next activity to perform, after the message is sent.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The name of the email message template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The unique identifier for the version of the email template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
 *
 * @public
 */
export interface HoldoutActivity {
  /**
   * The unique identifier for the next activity to perform, after performing the holdout activity.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The percentage of participants who shouldn't continue the journey.
   *
   * To determine which participants are held out, Amazon Pinpoint applies a probability-based algorithm to the percentage that you specify. Therefore, the actual percentage of participants who are held out may not be equal to the percentage that you specify.
   *
   * @public
   */
  Percentage: number | undefined;
}

/**
 * Specifies a condition to evaluate for an activity path in a journey.
 *
 * @public
 */
export interface MultiConditionalBranch {
  /**
   * The condition to evaluate for the activity path.
   *
   * @public
   */
  Condition?: SimpleCondition | undefined;

  /**
   * The unique identifier for the next activity to perform, after completing the activity for the path.
   *
   * @public
   */
  NextActivity?: string | undefined;
}

/**
 * Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default *Else* path) in a journey, based on conditions that you specify.
 *
 * > **Note:** To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see [Integrating Amazon Pinpoint with your application](https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html) in the *Amazon Pinpoint Developer Guide*.
 *
 * @public
 */
export interface MultiConditionalSplitActivity {
  /**
   * The paths for the activity, including the conditions for entering each path and the activity to perform for each path.
   *
   * @public
   */
  Branches?: MultiConditionalBranch[] | undefined;

  /**
   * The unique identifier for the activity to perform for participants who don't meet any of the conditions specified for other paths in the activity.
   *
   * @public
   */
  DefaultActivity?: string | undefined;

  /**
   * The amount of time to wait or the date and time when Amazon Pinpoint determines whether the conditions are met.
   *
   * @public
   */
  EvaluationWaitTime?: WaitTime | undefined;
}

/**
 * Specifies the message configuration for a push notification that's sent to participants in a journey.
 *
 * @public
 */
export interface JourneyPushMessage {
  /**
   * The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.
   *
   * This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.
   *
   * @public
   */
  TimeToLive?: string | undefined;
}

/**
 * Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
 *
 * @public
 */
export interface PushMessageActivity {
  /**
   * Specifies the time to live (TTL) value for push notifications that are sent to participants in a journey.
   *
   * @public
   */
  MessageConfig?: JourneyPushMessage | undefined;

  /**
   * The unique identifier for the next activity to perform, after the message is sent.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The name of the push notification template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The unique identifier for the version of the push notification template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * Specifies the settings for a path in a random split activity in a journey.
 *
 * @public
 */
export interface RandomSplitEntry {
  /**
   * The unique identifier for the next activity to perform, after completing the activity for the path.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The percentage of participants to send down the activity path.
   *
   * To determine which participants are sent down each path, Amazon Pinpoint applies a probability-based algorithm to the percentages that you specify for the paths. Therefore, the actual percentage of participants who are sent down a path may not be equal to the percentage that you specify.
   *
   * @public
   */
  Percentage?: number | undefined;
}

/**
 * Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
 *
 * @public
 */
export interface RandomSplitActivity {
  /**
   * The paths for the activity, including the percentage of participants to enter each path and the activity to perform for each path.
   *
   * @public
   */
  Branches?: RandomSplitEntry[] | undefined;
}

/**
 * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
 *
 * @public
 */
export interface JourneySMSMessage {
  /**
   * The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.
   *
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region. For more information, see [Supported Countries and Regions](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html) in the Amazon Pinpoint User Guide.
   *
   * @public
   */
  SenderId?: string | undefined;

  /**
   * The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The template ID received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
 *
 * @public
 */
export interface SMSMessageActivity {
  /**
   * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
   *
   * @public
   */
  MessageConfig?: JourneySMSMessage | undefined;

  /**
   * The unique identifier for the next activity to perform, after the message is sent.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The name of the SMS message template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The unique identifier for the version of the SMS template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * @public
   */
  TemplateVersion?: string | undefined;
}

/**
 * Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
 *
 * @public
 */
export interface WaitActivity {
  /**
   * The unique identifier for the next activity to perform, after performing the wait activity.
   *
   * @public
   */
  NextActivity?: string | undefined;

  /**
   * The amount of time to wait or the date and time when the activity moves participants to the next activity in the journey.
   *
   * @public
   */
  WaitTime?: WaitTime | undefined;
}

/**
 * Specifies the configuration and other settings for an activity in a journey.
 *
 * @public
 */
export interface Activity {
  /**
   * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
   *
   * @public
   */
  CUSTOM?: CustomMessageActivity | undefined;

  /**
   * The settings for a yes/no split activity. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.
   *
   * @public
   */
  ConditionalSplit?: ConditionalSplitActivity | undefined;

  /**
   * The custom description of the activity.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The settings for an email activity. This type of activity sends an email message to participants.
   *
   * @public
   */
  EMAIL?: EmailMessageActivity | undefined;

  /**
   * The settings for a holdout activity. This type of activity stops a journey for a specified percentage of participants.
   *
   * @public
   */
  Holdout?: HoldoutActivity | undefined;

  /**
   * The settings for a multivariate split activity. This type of activity sends participants down one of as many as five paths (including a default *Else* path) in a journey, based on conditions that you specify.
   *
   * @public
   */
  MultiCondition?: MultiConditionalSplitActivity | undefined;

  /**
   * The settings for a push notification activity. This type of activity sends a push notification to participants.
   *
   * @public
   */
  PUSH?: PushMessageActivity | undefined;

  /**
   * The settings for a random split activity. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
   *
   * @public
   */
  RandomSplit?: RandomSplitActivity | undefined;

  /**
   * The settings for an SMS activity. This type of activity sends a text message to participants.
   *
   * @public
   */
  SMS?: SMSMessageActivity | undefined;

  /**
   * The settings for a wait activity. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
   *
   * @public
   */
  Wait?: WaitActivity | undefined;

  /**
   * The settings for a connect activity. This type of activity initiates a contact center call to participants.
   *
   * @public
   */
  ContactCenter?: ContactCenterActivity | undefined;
}

/**
 * Specifies address-based configuration settings for a message that's sent directly to an endpoint.
 *
 * @public
 */
export interface AddressConfiguration {
  /**
   * The message body to use instead of the default message body. This value overrides the default message body.
   *
   * @public
   */
  BodyOverride?: string | undefined;

  /**
   * The channel to use when sending the message.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * An object that maps custom attributes to attributes for the address and is attached to the message. Attribute names are case sensitive.
   *
   * For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * A map of the message variables to merge with the variables specified by properties of the DefaultMessage object. The variables specified in this map take precedence over all other variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The message title to use instead of the default message title. This value overrides the default message title.
   *
   * @public
   */
  TitleOverride?: string | undefined;
}

/**
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
 *
 * @public
 */
export interface ADMChannelRequest {
  /**
   * The Client ID that you received from Amazon to send messages by using ADM.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The Client Secret that you received from Amazon to send messages by using ADM.
   *
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * Specifies whether to enable the ADM channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
 *
 * @public
 */
export interface ADMChannelResponse {
  /**
   * The unique identifier for the application that the ADM channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the ADM channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Specifies whether the ADM channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the ADM channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the ADM channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the ADM channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the ADM channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
 *
 * @public
 */
export interface ADMMessage {
  /**
   * The action to occur if the recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The body of the notification message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.
   *
   * @public
   */
  ConsolidationKey?: string | undefined;

  /**
   * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.
   *
   * @public
   */
  ExpiresAfter?: string | undefined;

  /**
   * The icon image name of the asset saved in your app.
   *
   * @public
   */
  IconReference?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of the push notification.
   *
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * The URL of an image to display in the push notification.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.
   *
   * @public
   */
  MD5?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of the push notification.
   *
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The default message variables to use in the notification message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The title to display above the notification message on the recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
 *
 * @public
 */
export interface AndroidPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The message body to use in a push notification that's based on the message template.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
   *
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * The URL of an image to display in a push notification that's based on the message template.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
 *
 * @public
 */
export interface APNSChannelRequest {
  /**
   * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether to enable the APNs channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
   *
   * @public
   */
  TeamId?: string | undefined;

  /**
   * The authentication key to use for APNs tokens.
   *
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
   *
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
 *
 * @public
 */
export interface APNSChannelResponse {
  /**
   * The unique identifier for the application that the APNs channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the APNs channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the APNs channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
   *
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the APNs channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the APNs channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the APNs channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the APNs channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
 *
 * @public
 */
export interface APNSMessage {
  /**
   * The type of push notification to send. Valid values are:
   *
   * - alert - For a standard notification that's displayed on recipients' devices and prompts a recipient to interact with the notification.
   * - background - For a silent notification that delivers content in the background and isn't displayed on recipients' devices.
   * - complication - For a notification that contains update information for an app’s complication timeline.
   * - fileprovider - For a notification that signals changes to a File Provider extension.
   * - mdm - For a notification that tells managed devices to contact the MDM server.
   * - voip - For a notification that provides information about an incoming VoIP call.
   *
   * Amazon Pinpoint specifies this value in the apns-push-type request header when it sends the notification message to APNs. If you don't specify a value for this property, Amazon Pinpoint sets the value to alert or background automatically, based on the value that you specify for the SilentPush or RawContent property of the message.
   *
   * For more information about the apns-push-type request header, see [Sending Notification Requests to APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) on the Apple Developer website.
   *
   * @public
   */
  APNSPushType?: string | undefined;

  /**
   * The action to occur if the recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.
   *
   * @public
   */
  Badge?: number | undefined;

  /**
   * The body of the notification message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes.
   *
   * Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.
   *
   * @public
   */
  CollapseId?: string | undefined;

  /**
   * The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * The URL of an image or video to display in the push notification.
   *
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * The authentication method that you want Amazon Pinpoint to use when authenticating with APNs, CERTIFICATE or TOKEN.
   *
   * @public
   */
  PreferredAuthenticationMethod?: string | undefined;

  /**
   * para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.
   *
   * /listitem>
   * - 10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device./para>
   *
   * Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.
   *
   * The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.
   *
   * @public
   */
  Priority?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * > **Note:** If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. The value of the content-available key has to be an integer, and can only be 0 or 1. If you're sending a standard notification, set the value of content-available to 0. If you're sending a silent (background) notification, set the value of content-available to 1. Additionally, silent notification payloads can't include the alert, badge, or sound keys. For more information, see [Generating a Remote Notification](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification) and [Pushing Background Updates to Your App](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app) on the Apple Developer website.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * Specifies whether the notification is a silent push notification. A silent (or background) push notification isn't displayed on recipients' devices. You can use silent push notifications to make small updates to your app, or to display messages in an in-app message center.
   *
   * Amazon Pinpoint uses this property to determine the correct value for the apns-push-type request header when it sends the notification message to APNs. If you specify a value of true for this property, Amazon Pinpoint sets the value for the apns-push-type header field to background.
   *
   * > **Note:**
   * >
   * > If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. For silent (background) notifications, set the value of content-available to 1. Additionally, the message payload for a silent notification can't include the alert, badge, or sound keys. For more information, see [Generating a Remote Notification](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification) and [Pushing Background Updates to Your App](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app) on the Apple Developer website.
   * >
   * > Apple has indicated that they will throttle "excessive" background notifications based on current traffic volumes. To prevent your notifications being throttled, Apple recommends that you send no more than 3 silent push notifications to each recipient per hour.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The key for the sound to play when the recipient receives the push notification. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The default message variables to use in the notification message. You can override these default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.
   *
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.
   *
   * Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * The title to display above the notification message on the recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
 *
 * @public
 */
export interface APNSPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The message body to use in push notifications that are based on the message template.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The URL of an image or video to display in push notifications that are based on the message template.
   *
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for push notifications that are based on the message template. If specified, this value overrides all other content for the message template.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
 *
 * @public
 */
export interface APNSSandboxChannelRequest {
  /**
   * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether to enable the APNs sandbox channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
   *
   * @public
   */
  TeamId?: string | undefined;

  /**
   * The authentication key to use for APNs tokens.
   *
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.
   *
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
 *
 * @public
 */
export interface APNSSandboxChannelResponse {
  /**
   * The unique identifier for the application that the APNs sandbox channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the APNs sandbox channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the APNs sandbox channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
   *
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the APNs sandbox channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the APNs sandbox channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the APNs sandbox channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the APNs sandbox channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
 *
 * @public
 */
export interface APNSVoipChannelRequest {
  /**
   * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether to enable the APNs VoIP channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
   *
   * @public
   */
  TeamId?: string | undefined;

  /**
   * The authentication key to use for APNs tokens.
   *
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
   *
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
 *
 * @public
 */
export interface APNSVoipChannelResponse {
  /**
   * The unique identifier for the application that the APNs VoIP channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the APNs VoIP channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the APNs VoIP channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
   *
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the APNs VoIP channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the APNs VoIP channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the APNs VoIP channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the APNs VoIP channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
 *
 * @public
 */
export interface APNSVoipSandboxChannelRequest {
  /**
   * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
   *
   * @public
   */
  TeamId?: string | undefined;

  /**
   * The authentication key to use for APNs tokens.
   *
   * @public
   */
  TokenKey?: string | undefined;

  /**
   * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.
   *
   * @public
   */
  TokenKeyId?: string | undefined;
}

/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
 *
 * @public
 */
export interface APNSVoipSandboxChannelResponse {
  /**
   * The unique identifier for the application that the APNs VoIP sandbox channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the APNs VoIP sandbox channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
   *
   * @public
   */
  HasTokenKey?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the APNs VoIP sandbox channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the APNs VoIP sandbox channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the APNs VoIP sandbox channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the APNs VoIP sandbox channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
 *
 * @public
 */
export interface ResultRowValue {
  /**
   * The friendly name of the metric whose value is specified by the Value property.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The data type of the value specified by the Value property.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
 *
 * @public
 */
export interface ResultRow {
  /**
   * An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.
   *
   * @public
   */
  GroupedBys: ResultRowValue[] | undefined;

  /**
   * An array of objects that provides pre-aggregated values for a standard metric that applies to an application, campaign, or journey.
   *
   * @public
   */
  Values: ResultRowValue[] | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
 *
 * @public
 */
export interface BaseKpiResult {
  /**
   * An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
   *
   * @public
   */
  Rows: ResultRow[] | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
 *
 * @public
 */
export interface ApplicationDateRangeKpiResponse {
  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The name of the metric, also referred to as a *key performance indicator (KPI)*, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  KpiName: string | undefined;

  /**
   * An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.
   *
   * @public
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Application Metrics resource because the resource returns all results in a single page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.
   *
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * Provides information about an application.
 *
 * @public
 */
export interface ApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The display name of the application. This name is displayed as the **Project name** on the Amazon Pinpoint console.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The date and time when the Application was created.
   *
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * The number of messages that can be sent to an endpoint during the specified timeframe for all journeys.
 *
 * @public
 */
export interface JourneyTimeframeCap {
  /**
   * The maximum number of messages that all journeys can send to an endpoint during the specified timeframe. The maximum value is 100. If set to 0, this limit will not apply.
   *
   * @public
   */
  Cap?: number | undefined;

  /**
   * The length of the timeframe in days. The maximum value is 30. If set to 0, this limit will not apply.
   *
   * @public
   */
  Days?: number | undefined;
}

/**
 * The default sending limits for journeys in the application. To override these limits and define custom limits for a specific journey, use the Journey resource.
 *
 * @public
 */
export interface ApplicationSettingsJourneyLimits {
  /**
   * The daily number of messages that an endpoint can receive from all journeys. The maximum value is 100. If set to 0, this limit will not apply.
   *
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * The default maximum number of messages that can be sent to an endpoint during the specified timeframe for all journeys.
   *
   * @public
   */
  TimeframeCap?: JourneyTimeframeCap | undefined;

  /**
   * The default maximum number of messages that a single journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.
   *
   * @public
   */
  TotalCap?: number | undefined;
}

/**
 * Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
 *
 * @public
 */
export interface CampaignHook {
  /**
   * The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.
   *
   * @public
   */
  LambdaFunctionName?: string | undefined;

  /**
   * The mode that Amazon Pinpoint uses to invoke the AWS Lambda function. Possible values are:
   *
   * - FILTER - Invoke the function to customize the segment that's used by a campaign.
   * - DELIVERY - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the CustomDeliveryConfiguration and CampaignCustomMessage objects of the campaign.
   *
   * @public
   */
  Mode?: Mode | undefined;

  /**
   * The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.
   *
   * @public
   */
  WebUrl?: string | undefined;
}

/**
 * For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
 *
 * @public
 */
export interface CampaignLimits {
  /**
   * The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. For an application, this value specifies the default limit for the number of messages that campaigns and journeys can send to a single endpoint during a 24-hour period. The maximum value is 100.
   *
   * @public
   */
  Daily?: number | undefined;

  /**
   * The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.
   *
   * @public
   */
  MaximumDuration?: number | undefined;

  /**
   * The maximum number of messages that a campaign can send each second. For an application, this value specifies the default limit for the number of messages that campaigns can send each second. The minimum value is 1. The maximum value is 20,000.
   *
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. If a campaign recurs, this setting applies to all runs of the campaign. The maximum value is 100.
   *
   * @public
   */
  Total?: number | undefined;

  /**
   * The maximum total number of messages that the campaign can send per user session.
   *
   * @public
   */
  Session?: number | undefined;
}

/**
 * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
 *
 * @public
 */
export interface QuietTime {
  /**
   * The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.
   *
   * @public
   */
  End?: string | undefined;

  /**
   * The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.
   *
   * @public
   */
  Start?: string | undefined;
}

/**
 * Provides information about an application, including the default settings for an application.
 *
 * @public
 */
export interface ApplicationSettingsResource {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.
   *
   * @public
   */
  CampaignHook?: CampaignHook | undefined;

  /**
   * The date and time, in ISO 8601 format, when the application's settings were last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The default sending limits for campaigns in the application.
   *
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:
   *
   * - The EndpointDemographic.Timezone property of the endpoint is set to a valid value.
   * - The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).
   * - The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).
   *
   * If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.
   *
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * The default sending limits for journeys in the application. These limits apply to each journey for the application but can be overridden, on a per journey basis, with the JourneyLimits resource.
   *
   * @public
   */
  JourneyLimits?: ApplicationSettingsJourneyLimits | undefined;
}

/**
 * Provides information about all of your applications.
 *
 * @public
 */
export interface ApplicationsResponse {
  /**
   * An array of responses, one for each application that was returned.
   *
   * @public
   */
  Item?: ApplicationResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
 *
 * @public
 */
export interface AttributesResource {
  /**
   * The unique identifier for the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The type of attribute or attributes that were removed from the endpoints. Valid values are:
   *
   * - endpoint-custom-attributes - Custom attributes that describe endpoints.
   * - endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints.
   * - endpoint-user-attributes - Custom attributes that describe users.
   *
   * @public
   */
  AttributeType: string | undefined;

  /**
   * An array that specifies the names of the attributes that were removed from the endpoints.
   *
   * @public
   */
  Attributes?: string[] | undefined;
}

/**
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
 *
 * @public
 */
export interface BaiduChannelRequest {
  /**
   * The API key that you received from the Baidu Cloud Push service to communicate with the service.
   *
   * @public
   */
  ApiKey: string | undefined;

  /**
   * Specifies whether to enable the Baidu channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The secret key that you received from the Baidu Cloud Push service to communicate with the service.
   *
   * @public
   */
  SecretKey: string | undefined;
}

/**
 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
 *
 * @public
 */
export interface BaiduChannelResponse {
  /**
   * The unique identifier for the application that the Baidu channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the Baidu channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The API key that you received from the Baidu Cloud Push service to communicate with the service.
   *
   * @public
   */
  Credential: string | undefined;

  /**
   * Specifies whether the Baidu channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the Baidu channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the Baidu channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the Baidu channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the Baidu channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
 *
 * @public
 */
export interface BaiduMessage {
  /**
   * The action to occur if the recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The body of the notification message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * The icon image name of the asset saved in your app.
   *
   * @public
   */
  IconReference?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of the push notification.
   *
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * The URL of an image to display in the push notification.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of the push notification.
   *
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The default message variables to use in the notification message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * The title to display above the notification message on the recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
 *
 * @public
 */
export interface CampaignCustomMessage {
  /**
   * The raw, JSON-formatted string to use as the payload for the message. The maximum size is 5 KB.
   *
   * @public
   */
  Data?: string | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
 *
 * @public
 */
export interface CampaignDateRangeKpiResponse {
  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign that the metric applies to.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The name of the metric, also referred to as a *key performance indicator (KPI)*, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  KpiName: string | undefined;

  /**
   * An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.
   *
   * @public
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource because the resource returns all results in a single page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.
   *
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * Contains the name and value pair of an email header to add to your email. You can have up to 15 MessageHeaders. A header can contain information such as the sender, receiver, route, or timestamp.
 *
 * @public
 */
export interface MessageHeader {
  /**
   * The name of the message header. The header name can contain up to 126 characters.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the message header. The header value can contain up to 870 characters, including the length of any rendered attributes. For example if you add the \{CreationDate\} attribute, it renders as YYYY-MM-DDTHH:MM:SS.SSSZ and is 24 characters in length.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
 *
 * @public
 */
export interface CampaignEmailMessage {
  /**
   * The body of the email for recipients whose email clients don't render HTML content.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * The list of [MessageHeaders](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#apps-application-id-campaigns-campaign-id-model-messageheader) for the email. You can have up to 15 MessageHeaders for each email.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * The body of the email, in HTML format, for recipients whose email clients render HTML content.
   *
   * @public
   */
  HtmlBody?: string | undefined;

  /**
   * The subject line, or title, of the email.
   *
   * @public
   */
  Title?: string | undefined;
}

/**
 * Specifies the settings for events that cause a campaign to be sent.
 *
 * @public
 */
export interface CampaignEventFilter {
  /**
   * The dimension settings of the event filter for the campaign.
   *
   * @public
   */
  Dimensions: EventDimensions | undefined;

  /**
   * The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (Events resource) occurs.
   *
   * @public
   */
  FilterType: FilterType | undefined;
}

/**
 * Text config for Message Body.
 *
 * @public
 */
export interface InAppMessageBodyConfig {
  /**
   * The alignment of the text. Valid values: LEFT, CENTER, RIGHT.
   *
   * @public
   */
  Alignment: Alignment | undefined;

  /**
   * Message Body.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * The text color.
   *
   * @public
   */
  TextColor: string | undefined;
}

/**
 * Text config for Message Header.
 *
 * @public
 */
export interface InAppMessageHeaderConfig {
  /**
   * The alignment of the text. Valid values: LEFT, CENTER, RIGHT.
   *
   * @public
   */
  Alignment: Alignment | undefined;

  /**
   * Message Header.
   *
   * @public
   */
  Header: string | undefined;

  /**
   * The text color.
   *
   * @public
   */
  TextColor: string | undefined;
}

/**
 * Override button configuration.
 *
 * @public
 */
export interface OverrideButtonConfiguration {
  /**
   * Action triggered by the button.
   *
   * @public
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * Button destination.
   *
   * @public
   */
  Link?: string | undefined;
}

/**
 * Default button configuration.
 *
 * @public
 */
export interface DefaultButtonConfiguration {
  /**
   * The background color of the button.
   *
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * The border radius of the button.
   *
   * @public
   */
  BorderRadius?: number | undefined;

  /**
   * Action triggered by the button.
   *
   * @public
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * Button destination.
   *
   * @public
   */
  Link?: string | undefined;

  /**
   * Button text.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The text color of the button.
   *
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * Button Config for an in-app message.
 *
 * @public
 */
export interface InAppMessageButton {
  /**
   * Default button content.
   *
   * @public
   */
  Android?: OverrideButtonConfiguration | undefined;

  /**
   * Default button content.
   *
   * @public
   */
  DefaultConfig?: DefaultButtonConfiguration | undefined;

  /**
   * Default button content.
   *
   * @public
   */
  IOS?: OverrideButtonConfiguration | undefined;

  /**
   * Default button content.
   *
   * @public
   */
  Web?: OverrideButtonConfiguration | undefined;
}

/**
 * The configuration for the message content.
 *
 * @public
 */
export interface InAppMessageContent {
  /**
   * The background color for the message.
   *
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * The configuration for the message body.
   *
   * @public
   */
  BodyConfig?: InAppMessageBodyConfig | undefined;

  /**
   * The configuration for the message header.
   *
   * @public
   */
  HeaderConfig?: InAppMessageHeaderConfig | undefined;

  /**
   * The image url for the background of message.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The first button inside the message.
   *
   * @public
   */
  PrimaryBtn?: InAppMessageButton | undefined;

  /**
   * The second button inside message.
   *
   * @public
   */
  SecondaryBtn?: InAppMessageButton | undefined;
}

/**
 * In-app message configuration.
 *
 * @public
 */
export interface CampaignInAppMessage {
  /**
   * The message body of the notification, the email body or the text message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * In-app message content.
   *
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * Custom config to be sent to client.
   *
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * In-app message layout.
   *
   * @public
   */
  Layout?: Layout | undefined;
}

/**
 * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
 *
 * @public
 */
export interface CustomDeliveryConfiguration {
  /**
   * The destination to send the campaign or treatment to. This value can be one of the following:
   *
   * - The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.
   * - The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.
   *
   * @public
   */
  DeliveryUri: string | undefined;

  /**
   * The types of endpoints to send the campaign or treatment to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.
   *
   * @public
   */
  EndpointTypes?: __EndpointTypesElement[] | undefined;
}

/**
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
 *
 * @public
 */
export interface Message {
  /**
   * The action to occur if a recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The body of the notification message. The maximum number of characters is 200.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The URL of the image to display as the push-notification icon, such as the icon for the app.
   *
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.
   *
   * @public
   */
  ImageSmallIconUrl?: string | undefined;

  /**
   * The URL of an image to display in the push notification.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The JSON payload to use for a silent push notification.
   *
   * @public
   */
  JsonBody?: string | undefined;

  /**
   * The URL of the image or video to display in the push notification.
   *
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.
   *
   * This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * The title to display above the notification message on a recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
 *
 * @public
 */
export interface CampaignSmsMessage {
  /**
   * The body of the SMS message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.
   *
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * The sender ID to display on recipients' devices when they receive the SMS message.
   *
   * @public
   */
  SenderId?: string | undefined;

  /**
   * The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The template ID received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * Specifies the message configuration settings for a campaign.
 *
 * @public
 */
export interface MessageConfiguration {
  /**
   * The message that the campaign sends through the ADM (Amazon Device Messaging) channel. If specified, this message overrides the default message.
   *
   * @public
   */
  ADMMessage?: Message | undefined;

  /**
   * The message that the campaign sends through the APNs (Apple Push Notification service) channel. If specified, this message overrides the default message.
   *
   * @public
   */
  APNSMessage?: Message | undefined;

  /**
   * The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. If specified, this message overrides the default message.
   *
   * @public
   */
  BaiduMessage?: Message | undefined;

  /**
   * The message that the campaign sends through a custom channel, as specified by the delivery configuration (CustomDeliveryConfiguration) settings for the campaign. If specified, this message overrides the default message.
   *
   * @public
   */
  CustomMessage?: CampaignCustomMessage | undefined;

  /**
   * The default message that the campaign sends through all the channels that are configured for the campaign.
   *
   * @public
   */
  DefaultMessage?: Message | undefined;

  /**
   * The message that the campaign sends through the email channel. If specified, this message overrides the default message.
   *
   * @public
   */
  EmailMessage?: CampaignEmailMessage | undefined;

  /**
   * The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. If specified, this message overrides the default message.
   *
   * @public
   */
  GCMMessage?: Message | undefined;

  /**
   * The message that the campaign sends through the SMS channel. If specified, this message overrides the default message.
   *
   * @public
   */
  SMSMessage?: CampaignSmsMessage | undefined;

  /**
   * The in-app message configuration.
   *
   * @public
   */
  InAppMessage?: CampaignInAppMessage | undefined;
}

/**
 * Specifies the schedule settings for a campaign.
 *
 * @public
 */
export interface Schedule {
  /**
   * The scheduled time, in ISO 8601 format, when the campaign ended or will end.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.
   *
   * @public
   */
  EventFilter?: CampaignEventFilter | undefined;

  /**
   * Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.
   *
   * @public
   */
  Frequency?: Frequency | undefined;

  /**
   * Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.
   *
   * @public
   */
  IsLocalTime?: boolean | undefined;

  /**
   * The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:
   *
   * - The EndpointDemographic.Timezone property of the endpoint is set to a valid value.
   * - The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign.
   * - The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign.
   *
   * If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.
   *
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * The scheduled time when the campaign began or will begin. Valid values are: IMMEDIATE, to start the campaign immediately; or, a specific time in ISO 8601 format.
   *
   * @public
   */
  StartTime: string | undefined;

  /**
   * The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30, UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * Provides information about the status of a campaign.
 *
 * @public
 */
export interface CampaignState {
  /**
   * The current status of the campaign, or the current status of a treatment that belongs to an A/B test campaign.
   *
   * If a campaign uses A/B testing, the campaign has a status of COMPLETED only if all campaign treatments have a status of COMPLETED. If you delete the segment that's associated with a campaign, the campaign fails and has a status of DELETED.
   *
   * @public
   */
  CampaignStatus?: CampaignStatus | undefined;
}

/**
 * Specifies the name and version of the message template to use for the message.
 *
 * @public
 */
export interface Template {
  /**
   * The name of the message template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Specifies the message template to use for the message, for each type of channel.
 *
 * @public
 */
export interface TemplateConfiguration {
  /**
   * The email template to use for the message.
   *
   * @public
   */
  EmailTemplate?: Template | undefined;

  /**
   * The push notification template to use for the message.
   *
   * @public
   */
  PushTemplate?: Template | undefined;

  /**
   * The SMS template to use for the message.
   *
   * @public
   */
  SMSTemplate?: Template | undefined;

  /**
   * The voice template to use for the message. This object isn't supported for campaigns.
   *
   * @public
   */
  VoiceTemplate?: Template | undefined;

  /**
   * The InApp template to use for the message. The InApp template object is not supported for SendMessages.
   *
   * @public
   */
  InAppTemplate?: Template | undefined;
}

/**
 * Specifies the settings for a campaign treatment. A *treatment* is a variation of a campaign that's used for A/B testing of a campaign.
 *
 * @public
 */
export interface TreatmentResource {
  /**
   * The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.
   *
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * The unique identifier for the treatment.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The message configuration settings for the treatment.
   *
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * The schedule settings for the treatment.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * The allocated percentage of users (segment members) that the treatment is sent to.
   *
   * @public
   */
  SizePercent: number | undefined;

  /**
   * The current status of the treatment.
   *
   * @public
   */
  State?: CampaignState | undefined;

  /**
   * The message template to use for the treatment.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * The custom description of the treatment.
   *
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * The custom name of the treatment.
   *
   * @public
   */
  TreatmentName?: string | undefined;
}

/**
 * Provides information about the status, configuration, and other settings for a campaign.
 *
 * @public
 */
export interface CampaignResponse {
  /**
   * An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.
   *
   * @public
   */
  AdditionalTreatments?: TreatmentResource[] | undefined;

  /**
   * The unique identifier for the application that the campaign applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date, in ISO 8601 format, when the campaign was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The delivery configuration settings for sending the campaign through a custom channel.
   *
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.
   *
   * @public
   */
  DefaultState?: CampaignState | undefined;

  /**
   * The custom description of the campaign.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
   *
   * @public
   */
  HoldoutPercent?: number | undefined;

  /**
   * The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.
   *
   * @public
   */
  Hook?: CampaignHook | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.
   *
   * @public
   */
  IsPaused?: boolean | undefined;

  /**
   * The date, in ISO 8601 format, when the campaign was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * The messaging limits for the campaign.
   *
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * The message configuration settings for the campaign.
   *
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * The name of the campaign.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schedule settings for the campaign.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * The unique identifier for the segment that's associated with the campaign.
   *
   * @public
   */
  SegmentId: string | undefined;

  /**
   * The version number of the segment that's associated with the campaign.
   *
   * @public
   */
  SegmentVersion: number | undefined;

  /**
   * The current status of the campaign.
   *
   * @public
   */
  State?: CampaignState | undefined;

  /**
   * A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The message template that’s used for the campaign.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * The custom description of the default treatment for the campaign.
   *
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A *treatment* is a variation of a campaign that's used for A/B testing.
   *
   * @public
   */
  TreatmentName?: string | undefined;

  /**
   * The version number of the campaign.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
 *
 * @public
 */
export interface CampaignsResponse {
  /**
   * An array of responses, one for each campaign that's associated with the application.
   *
   * @public
   */
  Item: CampaignResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information about the general settings and status of a channel for an application.
 *
 * @public
 */
export interface ChannelResponse {
  /**
   * The unique identifier for the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Specifies whether the channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The current version of the channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
 *
 * @public
 */
export interface ChannelsResponse {
  /**
   * A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.
   *
   * @public
   */
  Channels: Record<string, ChannelResponse> | undefined;
}

/**
 * Specifies the rule settings for when messages can't be sent.
 *
 * @public
 */
export interface ClosedDaysRule {
  /**
   * The name of the closed day rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Start DateTime ISO 8601 format
   *
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * End DateTime ISO 8601 format
   *
   * @public
   */
  EndDateTime?: string | undefined;
}

/**
 * The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.
 *
 * @public
 */
export interface ClosedDays {
  /**
   * Rules for the Email channel.
   *
   * @public
   */
  EMAIL?: ClosedDaysRule[] | undefined;

  /**
   * Rules for the SMS channel.
   *
   * @public
   */
  SMS?: ClosedDaysRule[] | undefined;

  /**
   * Rules for the Push channel.
   *
   * @public
   */
  PUSH?: ClosedDaysRule[] | undefined;

  /**
   * Rules for the Voice channel.
   *
   * @public
   */
  VOICE?: ClosedDaysRule[] | undefined;

  /**
   * Rules for the Custom channel.
   *
   * @public
   */
  CUSTOM?: ClosedDaysRule[] | undefined;
}

/**
 * Specifies the display name of an application and the tags to associate with the application.
 *
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The display name of the application. This name is displayed as the **Project name** on the Amazon Pinpoint console.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * Specifies the display name of an application and the tags to associate with the application.
   *
   * @public
   */
  CreateApplicationRequest: CreateApplicationRequest | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * Provides information about an application.
   *
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * Specifies the settings for a campaign treatment. A *treatment* is a variation of a campaign that's used for A/B testing of a campaign.
 *
 * @public
 */
export interface WriteTreatmentResource {
  /**
   * The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.
   *
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * The message configuration settings for the treatment.
   *
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * The schedule settings for the treatment.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * The allocated percentage of users (segment members) to send the treatment to.
   *
   * @public
   */
  SizePercent: number | undefined;

  /**
   * The message template to use for the treatment.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * A custom description of the treatment.
   *
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * A custom name for the treatment.
   *
   * @public
   */
  TreatmentName?: string | undefined;
}

/**
 * Specifies the configuration and other settings for a campaign.
 *
 * @public
 */
export interface WriteCampaignRequest {
  /**
   * An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.
   *
   * @public
   */
  AdditionalTreatments?: WriteTreatmentResource[] | undefined;

  /**
   * The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.
   *
   * @public
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;

  /**
   * A custom description of the campaign.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
   *
   * @public
   */
  HoldoutPercent?: number | undefined;

  /**
   * The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.
   *
   * @public
   */
  Hook?: CampaignHook | undefined;

  /**
   * Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.
   *
   * @public
   */
  IsPaused?: boolean | undefined;

  /**
   * The messaging limits for the campaign.
   *
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * The message configuration settings for the campaign.
   *
   * @public
   */
  MessageConfiguration?: MessageConfiguration | undefined;

  /**
   * A custom name for the campaign.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schedule settings for the campaign.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * The unique identifier for the segment to associate with the campaign.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * The version of the segment to associate with the campaign.
   *
   * @public
   */
  SegmentVersion?: number | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The message template to use for the campaign.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * A custom description of the default treatment for the campaign.
   *
   * @public
   */
  TreatmentDescription?: string | undefined;

  /**
   * A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A *treatment* is a variation of a campaign that's used for A/B testing.
   *
   * @public
   */
  TreatmentName?: string | undefined;

  /**
   * Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the configuration and other settings for a campaign.
   *
   * @public
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * Provides information about the status, configuration, and other settings for a campaign.
   *
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
 *
 * @public
 */
export interface EmailTemplateRequest {
  /**
   * A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
   *
   * @public
   */
  HtmlPart?: string | undefined;

  /**
   * The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.
   *
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * The subject line, or title, to use in email messages that are based on the message template.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The list of [MessageHeaders](https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-model-messageheader) for the email. You can have up to 15 Headers.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A custom description of the message template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
   *
   * @public
   */
  TextPart?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailTemplateRequest {
  /**
   * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
   *
   * @public
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * Provides information about a request to create a message template.
 *
 * @public
 */
export interface CreateTemplateMessageBody {
  /**
   * The Amazon Resource Name (ARN) of the message template that was created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The message that's returned from the API for the request to create the message template.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The unique identifier for the request to create the message template.
   *
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailTemplateResponse {
  /**
   * Provides information about a request to create a message template.
   *
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
 *
 * @public
 */
export interface ExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://bucket-name/folder-name/.
   *
   * @public
   */
  S3UrlPrefix: string | undefined;

  /**
   * The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * The version of the segment to export endpoint definitions from, if specified.
   *
   * @public
   */
  SegmentVersion?: number | undefined;
}

/**
 * @public
 */
export interface CreateExportJobRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
   *
   * @public
   */
  ExportJobRequest: ExportJobRequest | undefined;
}

/**
 * Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
 *
 * @public
 */
export interface ExportJobResource {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://bucket-name/folder-name/.
   *
   * @public
   */
  S3UrlPrefix: string | undefined;

  /**
   * The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * The version of the segment that the endpoint definitions were exported from.
   *
   * @public
   */
  SegmentVersion?: number | undefined;
}

/**
 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
 *
 * @public
 */
export interface ExportJobResponse {
  /**
   * The unique identifier for the application that's associated with the export job.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.
   *
   * @public
   */
  CompletedPieces?: number | undefined;

  /**
   * The date, in ISO 8601 format, when the export job was completed.
   *
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the export job was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The resource settings that apply to the export job.
   *
   * @public
   */
  Definition: ExportJobResource | undefined;

  /**
   * The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.
   *
   * @public
   */
  FailedPieces?: number | undefined;

  /**
   * An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.
   *
   * @public
   */
  Failures?: string[] | undefined;

  /**
   * The unique identifier for the export job.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.
   *
   * @public
   */
  TotalFailures?: number | undefined;

  /**
   * The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.
   *
   * @public
   */
  TotalPieces?: number | undefined;

  /**
   * The total number of endpoint definitions that were processed by the export job.
   *
   * @public
   */
  TotalProcessed?: number | undefined;

  /**
   * The job type. This value is EXPORT for export jobs.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateExportJobResponse {
  /**
   * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
   *
   * @public
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
 *
 * @public
 */
export interface ImportJobRequest {
  /**
   * Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.
   *
   * @public
   */
  DefineSegment?: boolean | undefined;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.
   *
   * @public
   */
  RegisterEndpoints?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.
   *
   * The URL should be in the following format: s3://bucket-name/folder-name/file-name. The location can end with the key for an individual object or a prefix that qualifies multiple objects.
   *
   * @public
   */
  S3Url: string | undefined;

  /**
   * The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.
   *
   * @public
   */
  SegmentName?: string | undefined;
}

/**
 * @public
 */
export interface CreateImportJobRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
   *
   * @public
   */
  ImportJobRequest: ImportJobRequest | undefined;
}

/**
 * Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
 *
 * @public
 */
export interface ImportJobResource {
  /**
   * Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.
   *
   * @public
   */
  DefineSegment?: boolean | undefined;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.
   *
   * If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.
   *
   * @public
   */
  RegisterEndpoints?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.
   *
   * The URL should be in the following format: s3://bucket-name/folder-name/file-name. The location can end with the key for an individual object or a prefix that qualifies multiple objects.
   *
   * @public
   */
  S3Url: string | undefined;

  /**
   * The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.
   *
   * @public
   */
  SegmentName?: string | undefined;
}

/**
 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
 *
 * @public
 */
export interface ImportJobResponse {
  /**
   * The unique identifier for the application that's associated with the import job.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.
   *
   * @public
   */
  CompletedPieces?: number | undefined;

  /**
   * The date, in ISO 8601 format, when the import job was completed.
   *
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the import job was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The resource settings that apply to the import job.
   *
   * @public
   */
  Definition: ImportJobResource | undefined;

  /**
   * The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.
   *
   * @public
   */
  FailedPieces?: number | undefined;

  /**
   * An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.
   *
   * @public
   */
  Failures?: string[] | undefined;

  /**
   * The unique identifier for the import job.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.
   *
   * @public
   */
  TotalFailures?: number | undefined;

  /**
   * The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.
   *
   * @public
   */
  TotalPieces?: number | undefined;

  /**
   * The total number of endpoint definitions that were processed by the import job.
   *
   * @public
   */
  TotalProcessed?: number | undefined;

  /**
   * The job type. This value is IMPORT for import jobs.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateImportJobResponse {
  /**
   * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
   *
   * @public
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * InApp Template Request.
 *
 * @public
 */
export interface InAppTemplateRequest {
  /**
   * The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.
   *
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * Custom config to be sent to client.
   *
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * The layout of the message.
   *
   * @public
   */
  Layout?: Layout | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateInAppTemplateRequest {
  /**
   * InApp Template Request.
   *
   * @public
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * Provides information about a request to create a message template.
 *
 * @public
 */
export interface TemplateCreateMessageBody {
  /**
   * The Amazon Resource Name (ARN) of the message template that was created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The message that's returned from the API for the request to create the message template.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The unique identifier for the request to create the message template.
   *
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface CreateInAppTemplateResponse {
  /**
   * Provides information about a request to create a message template.
   *
   * @public
   */
  TemplateCreateMessageBody: TemplateCreateMessageBody | undefined;
}

/**
 * The channel-specific configurations for the journey.
 *
 * @public
 */
export interface JourneyChannelSettings {
  /**
   * Amazon Resource Name (ARN) of the Connect Campaign.
   *
   * @public
   */
  ConnectCampaignArn?: string | undefined;

  /**
   * IAM role ARN to be assumed when invoking Connect campaign execution APIs for dialing.
   *
   * @public
   */
  ConnectCampaignExecutionRoleArn?: string | undefined;
}

/**
 * Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
 *
 * @public
 */
export interface JourneyLimits {
  /**
   * The maximum number of messages that the journey can send to a single participant during a 24-hour period. The maximum value is 100.
   *
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * The maximum number of times that a participant can enter the journey. The maximum value is 100. To allow participants to enter the journey an unlimited number of times, set this value to 0.
   *
   * @public
   */
  EndpointReentryCap?: number | undefined;

  /**
   * The maximum number of messages that the journey can send each second.
   *
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * Minimum time that must pass before an endpoint can re-enter a given journey. The duration should use an ISO 8601 format, such as PT1H.
   *
   * @public
   */
  EndpointReentryInterval?: string | undefined;

  /**
   * The number of messages that an endpoint can receive during the specified timeframe.
   *
   * @public
   */
  TimeframeCap?: JourneyTimeframeCap | undefined;

  /**
   * The maximum number of messages a journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.
   *
   * @public
   */
  TotalCap?: number | undefined;
}

/**
 * Specifies the start and end time for OpenHours.
 *
 * @public
 */
export interface OpenHoursRule {
  /**
   * The start of the scheduled time, in ISO 8601 format, when the channel can send messages.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The end of the scheduled time, in ISO 8601 format, when the channel can't send messages.
   *
   * @public
   */
  EndTime?: string | undefined;
}

/**
 * Specifies the times when message are allowed to be sent to endpoints.
 *
 * @public
 */
export interface OpenHours {
  /**
   * Specifies the schedule settings for the email channel.
   *
   * @public
   */
  EMAIL?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * Specifies the schedule settings for the SMS channel.
   *
   * @public
   */
  SMS?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * Specifies the schedule settings for the push channel.
   *
   * @public
   */
  PUSH?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * Specifies the schedule settings for the voice channel.
   *
   * @public
   */
  VOICE?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;

  /**
   * Specifies the schedule settings for the custom channel.
   *
   * @public
   */
  CUSTOM?: Partial<Record<DayOfWeek, OpenHoursRule[]>> | undefined;
}

/**
 * Specifies the schedule settings for a journey.
 *
 * @public
 */
export interface JourneySchedule {
  /**
   * The scheduled time, in ISO 8601 format, when the journey ended or will end.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The scheduled time, in ISO 8601 format, when the journey began or will begin.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The starting UTC offset for the journey schedule, if the value of the journey's LocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+08:45, UTC+09, UTC+09:30, UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+12:45, UTC+13, UTC+13:45, UTC-02, UTC-02:30, UTC-03, UTC-03:30, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09, UTC-09:30, UTC-10, and UTC-11.
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
 *
 * @public
 */
export interface EventFilter {
  /**
   * The dimensions for the event filter to use for the campaign or the journey activity.
   *
   * @public
   */
  Dimensions: EventDimensions | undefined;

  /**
   * The type of event that causes the campaign to be sent or the journey activity to be performed. Valid values are: SYSTEM, sends the campaign or performs the activity when a system event occurs; and, ENDPOINT, sends the campaign or performs the activity when an endpoint event (Events resource) occurs.
   *
   * @public
   */
  FilterType: FilterType | undefined;
}

/**
 * Specifies the settings for an event that causes a journey activity to start.
 *
 * @public
 */
export interface EventStartCondition {
  /**
   * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
   *
   * @public
   */
  EventFilter?: EventFilter | undefined;

  SegmentId?: string | undefined;
}

/**
 * Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
 *
 * @public
 */
export interface StartCondition {
  /**
   * The custom description of the condition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the settings for an event that causes a journey activity to start.
   *
   * @public
   */
  EventStartCondition?: EventStartCondition | undefined;

  /**
   * The segment that's associated with the first activity in the journey. This segment determines which users are participants in the journey.
   *
   * @public
   */
  SegmentStartCondition?: SegmentCondition | undefined;
}

/**
 * Specifies the configuration and other settings for a journey.
 *
 * @public
 */
export interface WriteJourneyRequest {
  /**
   * A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.
   *
   * @public
   */
  Activities?: Record<string, Activity> | undefined;

  /**
   * The date, in ISO 8601 format, when the journey was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the journey was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The messaging and entry limits for the journey.
   *
   * @public
   */
  Limits?: JourneyLimits | undefined;

  /**
   * Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.
   *
   * @public
   */
  LocalTime?: boolean | undefined;

  /**
   * The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:
   *
   * - The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.
   * - The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.
   * - The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.
   *
   * If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.
   *
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.
   *
   * @public
   */
  RefreshFrequency?: string | undefined;

  /**
   * The schedule settings for the journey.
   *
   * @public
   */
  Schedule?: JourneySchedule | undefined;

  /**
   * The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.
   *
   * @public
   */
  StartActivity?: string | undefined;

  /**
   * The segment that defines which users are participants in the journey.
   *
   * @public
   */
  StartCondition?: StartCondition | undefined;

  /**
   * The status of the journey. Valid values are:
   *
   * - DRAFT - Saves the journey and doesn't publish it.
   * - ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.
   *
   * PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the Journey State resource.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.
   *
   * @public
   */
  WaitForQuietTime?: boolean | undefined;

  /**
   * Indicates whether the journey participants should be refreshed when a segment is updated.
   *
   * @public
   */
  RefreshOnSegmentUpdate?: boolean | undefined;

  /**
   * The channel-specific configurations for the journey.
   *
   * @public
   */
  JourneyChannelSettings?: JourneyChannelSettings | undefined;

  /**
   * Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.
   *
   * @public
   */
  SendingSchedule?: boolean | undefined;

  /**
   * The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.
   *
   * @public
   */
  OpenHours?: OpenHours | undefined;

  /**
   * The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.
   *
   * @public
   */
  ClosedDays?: ClosedDays | undefined;

  /**
   * An array of time zone estimation methods, if any, to use for determining an [Endpoints](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html) time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.
   *
   * - PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.
   * - POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.
   *
   *   > **Note:** POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.
   *
   * @public
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[] | undefined;
}

/**
 * @public
 */
export interface CreateJourneyRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the configuration and other settings for a journey.
   *
   * @public
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * Provides information about the status, configuration, and other settings for a journey.
 *
 * @public
 */
export interface JourneyResponse {
  /**
   * A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.
   *
   * @public
   */
  Activities?: Record<string, Activity> | undefined;

  /**
   * The unique identifier for the application that the journey applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The date, in ISO 8601 format, when the journey was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The unique identifier for the journey.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date, in ISO 8601 format, when the journey was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The messaging and entry limits for the journey.
   *
   * @public
   */
  Limits?: JourneyLimits | undefined;

  /**
   * Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.
   *
   * @public
   */
  LocalTime?: boolean | undefined;

  /**
   * The name of the journey.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:
   *
   * - The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.
   * - The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.
   * - The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.
   *
   * If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.
   *
   * @public
   */
  QuietTime?: QuietTime | undefined;

  /**
   * The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.
   *
   * @public
   */
  RefreshFrequency?: string | undefined;

  /**
   * The schedule settings for the journey.
   *
   * @public
   */
  Schedule?: JourneySchedule | undefined;

  /**
   * The unique identifier for the first activity in the journey.
   *
   * @public
   */
  StartActivity?: string | undefined;

  /**
   * The segment that defines which users are participants in the journey.
   *
   * @public
   */
  StartCondition?: StartCondition | undefined;

  /**
   * The current status of the journey. Possible values are:
   *
   * - DRAFT - The journey is being developed and hasn't been published yet.
   * - ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.
   * - COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.
   * - CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.
   * - CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * This object is not used or supported.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Indicates whether endpoints in quiet hours should enter a wait activity until quiet hours have elapsed.
   *
   * @public
   */
  WaitForQuietTime?: boolean | undefined;

  /**
   * Indicates whether the journey participants should be refreshed when a segment is updated.
   *
   * @public
   */
  RefreshOnSegmentUpdate?: boolean | undefined;

  /**
   * The channel-specific configurations for the journey.
   *
   * @public
   */
  JourneyChannelSettings?: JourneyChannelSettings | undefined;

  /**
   * Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.
   *
   * @public
   */
  SendingSchedule?: boolean | undefined;

  /**
   * The time when a journey can send messages. QuietTime should be configured first and SendingSchedule should be set to true.
   *
   * @public
   */
  OpenHours?: OpenHours | undefined;

  /**
   * The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.
   *
   * @public
   */
  ClosedDays?: ClosedDays | undefined;

  /**
   * An array of time zone estimation methods, if any, to use for determining an [Endpoints](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html) time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.
   *
   * - PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.
   * - POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.
   *
   *   > **Note:** POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.
   *
   * @public
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[] | undefined;
}

/**
 * @public
 */
export interface CreateJourneyResponse {
  /**
   * Provides information about the status, configuration, and other settings for a journey.
   *
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
 *
 * @public
 */
export interface DefaultPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The message body to use in push notifications that are based on the message template.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
   *
   * For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
 *
 * @public
 */
export interface PushNotificationTemplateRequest {
  /**
   * The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  ADM?: AndroidPushNotificationTemplate | undefined;

  /**
   * The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  APNS?: APNSPushNotificationTemplate | undefined;

  /**
   * The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  Baidu?: AndroidPushNotificationTemplate | undefined;

  /**
   * The default message template to use for push notification channels.
   *
   * @public
   */
  Default?: DefaultPushNotificationTemplate | undefined;

  /**
   * A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  GCM?: AndroidPushNotificationTemplate | undefined;

  /**
   * The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.
   *
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A custom description of the message template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreatePushTemplateRequest {
  /**
   * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
   *
   * @public
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreatePushTemplateResponse {
  /**
   * Provides information about a request to create a message template.
   *
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
 *
 * @public
 */
export interface CreateRecommenderConfigurationShape {
  /**
   * A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.
   *
   * In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the **Attribute finder** of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:
   *
   * - An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.
   * - An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).
   *
   * This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:
   *
   * - PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.
   * - PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.
   *
   * @public
   */
  RecommendationProviderIdType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.
   *
   * @public
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.
   *
   * @public
   */
  RecommendationProviderUri: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.
   *
   * @public
   */
  RecommendationTransformerUri?: string | undefined;

  /**
   * A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.
   *
   * This name appears in the **Attribute finder** of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.
   *
   * @public
   */
  RecommendationsDisplayName?: string | undefined;

  /**
   * The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.
   *
   * To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.
   *
   * @public
   */
  RecommendationsPerMessage?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationRequest {
  /**
   * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
   *
   * @public
   */
  CreateRecommenderConfiguration: CreateRecommenderConfigurationShape | undefined;
}

/**
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
 *
 * @public
 */
export interface RecommenderConfigurationResponse {
  /**
   * A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.
   *
   * This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The date, in extended ISO 8601 format, when the configuration was created for the recommender model.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The custom description of the configuration for the recommender model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the recommender model configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * The custom name of the configuration for the recommender model.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are:
   *
   * - PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.
   * - PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.
   *
   * @public
   */
  RecommendationProviderIdType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.
   *
   * @public
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.
   *
   * @public
   */
  RecommendationProviderUri: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.
   *
   * @public
   */
  RecommendationTransformerUri?: string | undefined;

  /**
   * The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the **Attribute finder** of the template editor on the Amazon Pinpoint console.
   *
   * This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.
   *
   * @public
   */
  RecommendationsDisplayName?: string | undefined;

  /**
   * The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.
   *
   * @public
   */
  RecommendationsPerMessage?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationResponse {
  /**
   * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
   *
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * Specifies the segment identifier and version of a segment.
 *
 * @public
 */
export interface SegmentReference {
  /**
   * The unique identifier for the segment.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version number of the segment.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
 *
 * @public
 */
export interface SegmentGroup {
  /**
   * An array that defines the dimensions for the segment.
   *
   * @public
   */
  Dimensions?: SegmentDimensions[] | undefined;

  /**
   * The base segment to build the segment on. A base segment, also referred to as a *source segment*, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.
   *
   * You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.
   *
   * @public
   */
  SourceSegments?: SegmentReference[] | undefined;

  /**
   * Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.
   *
   * @public
   */
  Type?: Type | undefined;
}

/**
 * Specifies the settings that define the relationships between segment groups for a segment.
 *
 * @public
 */
export interface SegmentGroupList {
  /**
   * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
   *
   * @public
   */
  Groups?: SegmentGroup[] | undefined;

  /**
   * Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.
   *
   * @public
   */
  Include?: Include | undefined;
}

/**
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
 *
 * @public
 */
export interface WriteSegmentRequest {
  /**
   * The criteria that define the dimensions for the segment.
   *
   * @public
   */
  Dimensions?: SegmentDimensions | undefined;

  /**
   * The name of the segment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.
   *
   * @public
   */
  SegmentGroups?: SegmentGroupList | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSegmentRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
   *
   * @public
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
 *
 * @public
 */
export interface SegmentImportResource {
  /**
   * The number of channel types in the endpoint definitions that were imported to create the segment.
   *
   * @public
   */
  ChannelCounts?: Record<string, number> | undefined;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
   *
   * @public
   */
  ExternalId: string | undefined;

  /**
   * The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.
   *
   * @public
   */
  S3Url: string | undefined;

  /**
   * The number of endpoint definitions that were imported successfully to create the segment.
   *
   * @public
   */
  Size: number | undefined;
}

/**
 * Provides information about the configuration, dimension, and other settings for a segment.
 *
 * @public
 */
export interface SegmentResponse {
  /**
   * The unique identifier for the application that the segment is associated with.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the segment.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time when the segment was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The dimension settings for the segment.
   *
   * @public
   */
  Dimensions?: SegmentDimensions | undefined;

  /**
   * The unique identifier for the segment.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The settings for the import job that's associated with the segment.
   *
   * @public
   */
  ImportDefinition?: SegmentImportResource | undefined;

  /**
   * The date and time when the segment was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The name of the segment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.
   *
   * @public
   */
  SegmentGroups?: SegmentGroupList | undefined;

  /**
   * The segment type. Valid values are:
   *
   * - DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.
   * - IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.
   *
   * @public
   */
  SegmentType: SegmentType | undefined;

  /**
   * A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The version number of the segment.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateSegmentResponse {
  /**
   * Provides information about the configuration, dimension, and other settings for a segment.
   *
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
 *
 * @public
 */
export interface SMSTemplateRequest {
  /**
   * The message body to use in text messages that are based on the message template.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.
   *
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A custom description of the message template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateSmsTemplateRequest {
  /**
   * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
   *
   * @public
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreateSmsTemplateResponse {
  /**
   * Provides information about a request to create a message template.
   *
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
 *
 * @public
 */
export interface VoiceTemplateRequest {
  /**
   * The text of the script to use in messages that are based on the message template, in plain text format.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * > **Note:** As of **22-05-2023** tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either [Tags](https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html) in the *API Reference for Amazon Pinpoint*, [resourcegroupstaggingapi](https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html) commands in the *AWS Command Line Interface Documentation* or [resourcegroupstaggingapi](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html) in the *AWS SDK*.
   *
   * (Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A custom description of the message template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
   *
   * @public
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

/**
 * @public
 */
export interface CreateVoiceTemplateResponse {
  /**
   * Provides information about a request to create a message template.
   *
   * @public
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * Specifies the default message for all channels.
 *
 * @public
 */
export interface DefaultMessage {
  /**
   * The default body of the message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The default message variables to use in the message. You can override these default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;
}

/**
 * Specifies the default settings and content for a push notification that's sent directly to an endpoint.
 *
 * @public
 */
export interface DefaultPushNotificationMessage {
  /**
   * The default action to occur if a recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The default body of the notification message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The default message variables to use in the notification message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The default title to display above the notification message on a recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdmChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdmChannelResponse {
  /**
   * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
   *
   * @public
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
   *
   * @public
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
   *
   * @public
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
   *
   * @public
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
   *
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * Provides information about an application.
   *
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelResponse {
  /**
   * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
   *
   * @public
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * Provides information about the status, configuration, and other settings for a campaign.
   *
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Provides information about the status and settings of the email channel for an application.
 *
 * @public
 */
export interface EmailChannelResponse {
  /**
   * The unique identifier for the application that the email channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The [Amazon SES configuration set](https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html) that's applied to messages that are sent through the channel.
   *
   * @public
   */
  ConfigurationSet?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the email channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Specifies whether the email channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The verified email address that email is sent from when you send email through the channel.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.
   *
   * @public
   */
  Identity?: string | undefined;

  /**
   * Specifies whether the email channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the email channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the email channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The maximum number of emails that can be sent through the channel each second.
   *
   * @public
   */
  MessagesPerSecond?: number | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES.
   *
   * @public
   */
  OrchestrationSendingRoleArn?: string | undefined;

  /**
   * The current version of the email channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteEmailChannelResponse {
  /**
   * Provides information about the status and settings of the email channel for an application.
   *
   * @public
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Provides information about an API request or response.
 *
 * @public
 */
export interface MessageBody {
  /**
   * The message that's returned from the API.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The unique identifier for the request or response.
   *
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEmailTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The case insensitive unique identifier for the endpoint. The identifier can't contain `$`, `\{` or `\}`.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * Specifies demographic information about an endpoint, such as the applicable time zone and platform.
 *
 * @public
 */
export interface EndpointDemographic {
  /**
   * The version of the app that's associated with the endpoint.
   *
   * @public
   */
  AppVersion?: string | undefined;

  /**
   * The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The manufacturer of the endpoint device, such as apple or samsung.
   *
   * @public
   */
  Make?: string | undefined;

  /**
   * The model name or number of the endpoint device, such as iPhone or SM-G900F.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The model version of the endpoint device.
   *
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * The platform of the endpoint device, such as ios.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The platform version of the endpoint device.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * Specifies geographic information about an endpoint.
 *
 * @public
 */
export interface EndpointLocation {
  /**
   * The name of the city where the endpoint is located.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The latitude coordinate of the endpoint location, rounded to one decimal place.
   *
   * @public
   */
  Latitude?: number | undefined;

  /**
   * The longitude coordinate of the endpoint location, rounded to one decimal place.
   *
   * @public
   */
  Longitude?: number | undefined;

  /**
   * The postal or ZIP code for the area where the endpoint is located.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Specifies data for one or more attributes that describe the user who's associated with an endpoint.
 *
 * @public
 */
export interface EndpointUser {
  /**
   * One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.
   *
   * An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.
   *
   * @public
   */
  UserAttributes?: Record<string, string[]> | undefined;

  /**
   * The unique identifier for the user.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Provides information about the channel type and other settings for an endpoint.
 *
 * @public
 */
export interface EndpointResponse {
  /**
   * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The unique identifier for the application that's associated with the endpoint.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments.
   *
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * The channel that's used when sending messages or push notifications to the endpoint.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.
   *
   * @public
   */
  CohortId?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the endpoint was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The demographic information for the endpoint, such as the time zone and platform.
   *
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * The date and time, in ISO 8601 format, when the endpoint was last updated.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.
   *
   * Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.
   *
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The geographic information for the endpoint.
   *
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
   *
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
   *
   * @public
   */
  OptOut?: string | undefined;

  /**
   * The unique identifier for the most recent request to update the endpoint.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.
   *
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {
  /**
   * Provides information about the channel type and other settings for an endpoint.
   *
   * @public
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
 *
 * @public
 */
export interface EventStream {
  /**
   * The unique identifier for the application to publish event data for.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.
   *
   * For a Kinesis data stream, the ARN format is: arn:aws:kinesis:region:account-id:stream/stream_name
   *
   * For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:region:account-id:deliverystream/stream_name
   *
   * @public
   */
  DestinationStreamArn: string | undefined;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the event stream was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The IAM user who last modified the event stream.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamResponse {
  /**
   * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface DeleteGcmChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
 *
 * @public
 */
export interface GCMChannelResponse {
  /**
   * The unique identifier for the application that the GCM channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time when the GCM channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The Web API Key, also referred to as an *API_KEY* or *server key*, that you received from Google to communicate with Google services.
   *
   * @public
   */
  Credential?: string | undefined;

  /**
   * The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether the GCM channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * Returns true if the JSON file provided by Google during registration process was used in the **ServiceJson** field of the request.
   *
   * @public
   */
  HasFcmServiceCredentials?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the GCM channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the GCM channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the GCM channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the GCM channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteGcmChannelResponse {
  /**
   * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
   *
   * @public
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteInAppTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInAppTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey.
   *
   * @public
   */
  JourneyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyResponse {
  /**
   * Provides information about the status, configuration, and other settings for a journey.
   *
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface DeletePushTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeletePushTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationRequest {
  /**
   * The unique identifier for the recommender model configuration. This identifier is displayed as the **Recommender ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  RecommenderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationResponse {
  /**
   * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
   *
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the segment.
   *
   * @public
   */
  SegmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentResponse {
  /**
   * Provides information about the configuration, dimension, and other settings for a segment.
   *
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Provides information about the status and settings of the SMS channel for an application.
 *
 * @public
 */
export interface SMSChannelResponse {
  /**
   * The unique identifier for the application that the SMS channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the SMS channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Specifies whether the SMS channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the SMS channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the SMS channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the SMS channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The maximum number of promotional messages that you can send through the SMS channel each second.
   *
   * @public
   */
  PromotionalMessagesPerSecond?: number | undefined;

  /**
   * The identity that displays on recipients' devices when they receive messages from the SMS channel.
   *
   * @public
   */
  SenderId?: string | undefined;

  /**
   * The registered short code to use when you send messages through the SMS channel.
   *
   * @public
   */
  ShortCode?: string | undefined;

  /**
   * The maximum number of transactional messages that you can send through the SMS channel each second.
   *
   * @public
   */
  TransactionalMessagesPerSecond?: number | undefined;

  /**
   * The current version of the SMS channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteSmsChannelResponse {
  /**
   * Provides information about the status and settings of the SMS channel for an application.
   *
   * @public
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSmsTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * Provides information about all the endpoints that are associated with a user ID.
 *
 * @public
 */
export interface EndpointsResponse {
  /**
   * An array of responses, one for each endpoint that's associated with the user ID.
   *
   * @public
   */
  Item: EndpointResponse[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsResponse {
  /**
   * Provides information about all the endpoints that are associated with a user ID.
   *
   * @public
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Provides information about the status and settings of the voice channel for an application.
 *
 * @public
 */
export interface VoiceChannelResponse {
  /**
   * The unique identifier for the application that the voice channel applies to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the voice channel was enabled.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Specifies whether the voice channel is enabled for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * (Not used) This property is retained only for backward compatibility.
   *
   * @public
   */
  HasCredential?: boolean | undefined;

  /**
   * (Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies whether the voice channel is archived.
   *
   * @public
   */
  IsArchived?: boolean | undefined;

  /**
   * The user who last modified the voice channel.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when the voice channel was last modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.
   *
   * @public
   */
  Platform: string | undefined;

  /**
   * The current version of the voice channel.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceChannelResponse {
  /**
   * Provides information about the status and settings of the voice channel for an application.
   *
   * @public
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * Specifies the contents of an email message, represented as a raw MIME message.
 *
 * @public
 */
export interface RawEmail {
  /**
   * The email message, represented as a raw MIME message. The entire message must be base64 encoded.
   *
   * @public
   */
  Data?: Uint8Array | undefined;
}

/**
 * Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
 *
 * @public
 */
export interface SimpleEmailPart {
  /**
   * The applicable character set for the message content.
   *
   * @public
   */
  Charset?: string | undefined;

  /**
   * The textual data of the message content.
   *
   * @public
   */
  Data?: string | undefined;
}

/**
 * Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
 *
 * @public
 */
export interface SimpleEmail {
  /**
   * The body of the email message, in HTML format. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
   *
   * @public
   */
  HtmlPart?: SimpleEmailPart | undefined;

  /**
   * The subject line, or title, of the email.
   *
   * @public
   */
  Subject?: SimpleEmailPart | undefined;

  /**
   * The body of the email message, in plain text format. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
   *
   * @public
   */
  TextPart?: SimpleEmailPart | undefined;

  /**
   * The list of MessageHeaders for the email. You can have up to 15 Headers.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;
}

/**
 * Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
 *
 * @public
 */
export interface EmailMessage {
  /**
   * The body of the email message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The email address to forward bounces and complaints to, if feedback forwarding is enabled.
   *
   * @public
   */
  FeedbackForwardingAddress?: string | undefined;

  /**
   * The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * The email message, represented as a raw MIME message.
   *
   * @public
   */
  RawEmail?: RawEmail | undefined;

  /**
   * The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The email message, composed of a subject, a text part, and an HTML part.
   *
   * @public
   */
  SimpleEmail?: SimpleEmail | undefined;

  /**
   * The default message variables to use in the email message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;
}

/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
 *
 * @public
 */
export interface GCMMessage {
  /**
   * The action to occur if the recipient taps the push notification. Valid values are:
   *
   * - OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The body of the notification message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active.
   *
   * Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.
   *
   * @public
   */
  CollapseKey?: string | undefined;

  /**
   * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * The icon image name of the asset saved in your app.
   *
   * @public
   */
  IconReference?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of the push notification.
   *
   * @public
   */
  ImageIconUrl?: string | undefined;

  /**
   * The URL of an image to display in the push notification.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The preferred authentication method, with valid values "KEY" or "TOKEN". If a value isn't provided then the **DefaultAuthenticationMethod** is used.
   *
   * @public
   */
  PreferredAuthenticationMethod?: string | undefined;

  /**
   * para>normal – The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required.
   *
   * /listitem>
   * - high – The notification is sent immediately and might wake a sleeping device./para>
   *
   * Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM.
   *
   * The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.
   *
   * @public
   */
  Priority?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * The package name of the application where registration tokens must match in order for the recipient to receive the message.
   *
   * @public
   */
  RestrictedPackageName?: string | undefined;

  /**
   * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
   *
   * @public
   */
  SilentPush?: boolean | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of the push notification.
   *
   * @public
   */
  SmallImageIconUrl?: string | undefined;

  /**
   * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
   *
   * @public
   */
  Sound?: string | undefined;

  /**
   * The default message variables to use in the notification message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days).
   *
   * Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * The title to display above the notification message on the recipient's device.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
 *
 * @public
 */
export interface SMSMessage {
  /**
   * The body of the SMS message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The SMS program name that you provided to AWS Support when you requested your dedicated number.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * This field is reserved for future use.
   *
   * @public
   */
  MediaUrl?: string | undefined;

  /**
   * The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The number to send the SMS message from. This value should be one of the dedicated long or short codes that's assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message and sends the message from that code.
   *
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.
   *
   * @public
   */
  SenderId?: string | undefined;

  /**
   * The message variables to use in the SMS message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The template ID received from the regulatory body for sending SMS in your country.
   *
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
 *
 * @public
 */
export interface VoiceMessage {
  /**
   * The text of the script to use for the voice message.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The code for the language to use when synthesizing the text of the message script. For a list of supported languages and the code for each one, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The long code to send the voice message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code in E.164 format, for example +12065550100, to ensure prompt and accurate delivery of the message.
   *
   * @public
   */
  OriginationNumber?: string | undefined;

  /**
   * The default message variables to use in the voice message. You can override the default variables with individual address variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The name of the voice to use when delivering the message. For a list of supported voices, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
 *
 * @public
 */
export interface DirectMessageConfiguration {
  /**
   * The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
   *
   * @public
   */
  ADMMessage?: ADMMessage | undefined;

  /**
   * The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
   *
   * @public
   */
  APNSMessage?: APNSMessage | undefined;

  /**
   * The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
   *
   * @public
   */
  BaiduMessage?: BaiduMessage | undefined;

  /**
   * The default message for all channels.
   *
   * @public
   */
  DefaultMessage?: DefaultMessage | undefined;

  /**
   * The default push notification message for all push notification channels.
   *
   * @public
   */
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage | undefined;

  /**
   * The default message for the email channel. This message overrides the default message (DefaultMessage).
   *
   * @public
   */
  EmailMessage?: EmailMessage | undefined;

  /**
   * The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).
   *
   * @public
   */
  GCMMessage?: GCMMessage | undefined;

  /**
   * The default message for the SMS channel. This message overrides the default message (DefaultMessage).
   *
   * @public
   */
  SMSMessage?: SMSMessage | undefined;

  /**
   * The default message for the voice channel. This message overrides the default message (DefaultMessage).
   *
   * @public
   */
  VoiceMessage?: VoiceMessage | undefined;
}

/**
 * Specifies the status and settings of the email channel for an application.
 *
 * @public
 */
export interface EmailChannelRequest {
  /**
   * The [Amazon SES configuration set](https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html) that you want to apply to messages that you send through the channel.
   *
   * @public
   */
  ConfigurationSet?: string | undefined;

  /**
   * Specifies whether to enable the email channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The verified email address that you want to send email from when you send email through the channel.
   *
   * @public
   */
  FromAddress: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES.
   *
   * @public
   */
  OrchestrationSendingRoleArn?: string | undefined;
}

/**
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
 *
 * @public
 */
export interface EmailTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the message template was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The message body, in HTML format, that's used in email messages that are based on the message template.
   *
   * @public
   */
  HtmlPart?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the message template was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * The unique identifier for the recommender model that's used by the message template.
   *
   * @public
   */
  RecommenderId?: string | undefined;

  /**
   * The subject line, or title, that's used in email messages that are based on the message template.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The list of [MessageHeaders](https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-model-messageheader) for the email. You can have up to 15 Headers.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The custom description of the message template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The type of channel that the message template is designed for. For an email template, this value is EMAIL.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The message body, in plain text format, that's used in email messages that are based on the message template.
   *
   * @public
   */
  TextPart?: string | undefined;

  /**
   * The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.
 *
 * @public
 */
export interface EndpointBatchItem {
  /**
   * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.
   *
   * An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.
   *
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * The channel to use when sending messages or push notifications to the endpoint.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * The demographic information for the endpoint, such as the time zone and platform.
   *
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * The date and time, in ISO 8601 format, when the endpoint was created or updated.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.
   *
   * Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.
   *
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * The unique identifier for the endpoint in the context of the batch.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The geographic information for the endpoint.
   *
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
   *
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
   *
   * @public
   */
  OptOut?: string | undefined;

  /**
   * The unique identifier for the request to create or update the endpoint.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * One or more custom attributes that describe the user who's associated with the endpoint.
   *
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
 *
 * @public
 */
export interface EndpointBatchRequest {
  /**
   * An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.
   *
   * @public
   */
  Item: EndpointBatchItem[] | undefined;
}

/**
 * Provides the status code and message that result from processing data for an endpoint.
 *
 * @public
 */
export interface EndpointItemResponse {
  /**
   * The custom message that's returned in the response as a result of processing the endpoint data.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status code that's returned in the response as a result of processing the endpoint data.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * Provides information about the delivery status and results of sending a message directly to an endpoint.
 *
 * @public
 */
export interface EndpointMessageResult {
  /**
   * The endpoint address that the message was delivered to.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The delivery status of the message. Possible values are:
   *
   * - DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.
   * - OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.
   * - PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.
   * - SUCCESSFUL - The message was successfully delivered to the endpoint.
   * - TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.
   * - THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint.
   * - UNKNOWN_FAILURE - An unknown error occurred.
   *
   * @public
   */
  DeliveryStatus: DeliveryStatus | undefined;

  /**
   * The unique identifier for the message that was sent.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The downstream service status code for delivering the message.
   *
   * @public
   */
  StatusCode: number | undefined;

  /**
   * The status message for delivering the message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.
   *
   * @public
   */
  UpdatedToken?: string | undefined;
}

/**
 * Specifies the channel type and other settings for an endpoint.
 *
 * @public
 */
export interface EndpointRequest {
  /**
   * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.
   *
   * An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.
   *
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * The channel to use when sending messages or push notifications to the endpoint.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * The demographic information for the endpoint, such as the time zone and platform.
   *
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * The date and time, in ISO 8601 format, when the endpoint is updated.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.
   *
   * Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.
   *
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * The geographic information for the endpoint.
   *
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
   *
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
   *
   * @public
   */
  OptOut?: string | undefined;

  /**
   * The unique identifier for the most recent request to update the endpoint.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * One or more custom attributes that describe the user who's associated with the endpoint.
   *
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
 *
 * @public
 */
export interface EndpointSendConfiguration {
  /**
   * The body of the message. If specified, this value overrides the default message body.
   *
   * @public
   */
  BodyOverride?: string | undefined;

  /**
   * A map of custom attributes to attach to the message for the address. Attribute names are case sensitive.
   *
   * For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.
   *
   * @public
   */
  RawContent?: string | undefined;

  /**
   * A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.
   *
   * @public
   */
  Substitutions?: Record<string, string[]> | undefined;

  /**
   * The title or subject line of the message. If specified, this value overrides the default message title or subject line.
   *
   * @public
   */
  TitleOverride?: string | undefined;
}

/**
 * Provides information about a session.
 *
 * @public
 */
export interface Session {
  /**
   * The duration of the session, in milliseconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The unique identifier for the session.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time when the session began.
   *
   * @public
   */
  StartTimestamp: string | undefined;

  /**
   * The date and time when the session ended.
   *
   * @public
   */
  StopTimestamp?: string | undefined;
}

/**
 * Specifies information about an event that reports data to Amazon Pinpoint.
 *
 * @public
 */
export interface Event {
  /**
   * The package name of the app that's recording the event.
   *
   * @public
   */
  AppPackageName?: string | undefined;

  /**
   * The title of the app that's recording the event.
   *
   * @public
   */
  AppTitle?: string | undefined;

  /**
   * The version number of the app that's recording the event.
   *
   * @public
   */
  AppVersionCode?: string | undefined;

  /**
   * One or more custom attributes that are associated with the event.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The version of the SDK that's running on the client device.
   *
   * @public
   */
  ClientSdkVersion?: string | undefined;

  /**
   * The name of the event.
   *
   * @public
   */
  EventType: string | undefined;

  /**
   * One or more custom metrics that are associated with the event.
   *
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * The name of the SDK that's being used to record the event.
   *
   * @public
   */
  SdkName?: string | undefined;

  /**
   * Information about the session in which the event occurred.
   *
   * @public
   */
  Session?: Session | undefined;

  /**
   * The date and time, in ISO 8601 format, when the event occurred.
   *
   * @public
   */
  Timestamp: string | undefined;
}

/**
 * Provides the status code and message that result from processing an event.
 *
 * @public
 */
export interface EventItemResponse {
  /**
   * A custom message that's returned in the response as a result of processing the event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * Specifies the properties and attributes of an endpoint that's associated with an event.
 *
 * @public
 */
export interface PublicEndpoint {
  /**
   * The unique identifier for the recipient, such as a device token, email address, or mobile phone number.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.
   *
   * @public
   */
  Attributes?: Record<string, string[]> | undefined;

  /**
   * The channel that's used when sending messages or push notifications to the endpoint.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * The demographic information for the endpoint, such as the time zone and platform.
   *
   * @public
   */
  Demographic?: EndpointDemographic | undefined;

  /**
   * The date and time, in ISO 8601 format, when the endpoint was last updated.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.
   *
   * Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.
   *
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * The geographic information for the endpoint.
   *
   * @public
   */
  Location?: EndpointLocation | undefined;

  /**
   * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
   *
   * @public
   */
  Metrics?: Record<string, number> | undefined;

  /**
   * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
   *
   * @public
   */
  OptOut?: string | undefined;

  /**
   * A unique identifier that's generated each time the endpoint is updated.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.
   *
   * @public
   */
  User?: EndpointUser | undefined;
}

/**
 * Specifies a batch of endpoints and events to process.
 *
 * @public
 */
export interface EventsBatch {
  /**
   * A set of properties and attributes that are associated with the endpoint.
   *
   * @public
   */
  Endpoint: PublicEndpoint | undefined;

  /**
   * A set of properties that are associated with the event.
   *
   * @public
   */
  Events: Record<string, Event> | undefined;
}

/**
 * Specifies a batch of events to process.
 *
 * @public
 */
export interface EventsRequest {
  /**
   * The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.
   *
   * @public
   */
  BatchItem: Record<string, EventsBatch> | undefined;
}

/**
 * Provides information about the results of a request to create or update an endpoint that's associated with an event.
 *
 * @public
 */
export interface ItemResponse {
  /**
   * The response that was received after the endpoint data was accepted.
   *
   * @public
   */
  EndpointItemResponse?: EndpointItemResponse | undefined;

  /**
   * A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.
   *
   * @public
   */
  EventsItemResponse?: Record<string, EventItemResponse> | undefined;
}

/**
 * Provides information about endpoints and the events that they're associated with.
 *
 * @public
 */
export interface EventsResponse {
  /**
   * A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.
   *
   * @public
   */
  Results?: Record<string, ItemResponse> | undefined;
}

/**
 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
 *
 * @public
 */
export interface ExportJobsResponse {
  /**
   * An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).
   *
   * @public
   */
  Item: ExportJobResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
 *
 * @public
 */
export interface GCMChannelRequest {
  /**
   * The Web API Key, also referred to as an *API_KEY* or *server key*, that you received from Google to communicate with Google services.
   *
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".
   *
   * @public
   */
  DefaultAuthenticationMethod?: string | undefined;

  /**
   * Specifies whether to enable the GCM channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The contents of the JSON file provided by Google during registration in order to generate an access token for authentication. For more information see [Migrate from legacy FCM APIs to HTTP v1](https://firebase.google.com/docs/cloud-messaging/migrate-v1).
   *
   * @public
   */
  ServiceJson?: string | undefined;
}

/**
 * @public
 */
export interface GetAdmChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAdmChannelResponse {
  /**
   * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
   *
   * @public
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
   *
   * @public
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
   *
   * @public
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
   *
   * @public
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
   *
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetAppRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResponse {
  /**
   * Provides information about an application.
   *
   * @public
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The name of the metric, also referred to as a *key performance indicator (KPI)*, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  KpiName: string | undefined;

  /**
   * The string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
   *
   * @public
   */
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsResponse {
  /**
   * Provides information about an application, including the default settings for an application.
   *
   * @public
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

/**
 * @public
 */
export interface GetAppsRequest {
  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetAppsResponse {
  /**
   * Provides information about all of your applications.
   *
   * @public
   */
  ApplicationsResponse: ApplicationsResponse | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelResponse {
  /**
   * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
   *
   * @public
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * Provides information about the status, configuration, and other settings for a campaign.
   *
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignActivitiesRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignActivitiesResponse {
  /**
   * Provides information about the activities that were performed by a campaign.
   *
   * @public
   */
  ActivitiesResponse: ActivitiesResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The name of the metric, also referred to as a *key performance indicator (KPI)*, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  KpiName: string | undefined;

  /**
   * The string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
   *
   * @public
   */
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignsResponse {
  /**
   * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
   *
   * @public
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The unique version number (Version property) for the campaign version.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionResponse {
  /**
   * Provides information about the status, configuration, and other settings for a campaign.
   *
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the campaign.
   *
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionsResponse {
  /**
   * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
   *
   * @public
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

/**
 * @public
 */
export interface GetChannelsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelsResponse {
  /**
   * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
   *
   * @public
   */
  ChannelsResponse: ChannelsResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelResponse {
  /**
   * Provides information about the status and settings of the email channel for an application.
   *
   * @public
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetEmailTemplateResponse {
  /**
   * Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
   *
   * @public
   */
  EmailTemplateResponse: EmailTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetEndpointRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The case insensitive unique identifier for the endpoint. The identifier can't contain `$`, `\{` or `\}`.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * Provides information about the channel type and other settings for an endpoint.
   *
   * @public
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface GetEventStreamRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEventStreamResponse {
  /**
   * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface GetExportJobRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobResponse {
  /**
   * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
   *
   * @public
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetExportJobsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobsResponse {
  /**
   * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
   *
   * @public
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelResponse {
  /**
   * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
   *
   * @public
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
   *
   * @public
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   *
   * @public
   */
  PageSize?: string | undefined;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
 *
 * @public
 */
export interface ImportJobsResponse {
  /**
   * An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).
   *
   * @public
   */
  Item: ImportJobResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetImportJobsResponse {
  /**
   * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
   *
   * @public
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppMessagesRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the endpoint.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * Provides all fields required for building an in-app message.
 *
 * @public
 */
export interface InAppMessage {
  /**
   * In-app message content.
   *
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * Custom config to be sent to SDK.
   *
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * The layout of the message.
   *
   * @public
   */
  Layout?: Layout | undefined;
}

/**
 * Schedule of the campaign.
 *
 * @public
 */
export interface InAppCampaignSchedule {
  /**
   * The scheduled time after which the in-app message should not be shown. Timestamp is in ISO 8601 format.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The event filter the SDK has to use to show the in-app message in the application.
   *
   * @public
   */
  EventFilter?: CampaignEventFilter | undefined;

  /**
   * Time during which the in-app message should not be shown to the user.
   *
   * @public
   */
  QuietTime?: QuietTime | undefined;
}

/**
 * Targeted in-app message campaign.
 *
 * @public
 */
export interface InAppMessageCampaign {
  /**
   * Campaign id of the corresponding campaign.
   *
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * Daily cap which controls the number of times any in-app messages can be shown to the endpoint during a day.
   *
   * @public
   */
  DailyCap?: number | undefined;

  /**
   * In-app message content with all fields required for rendering an in-app message.
   *
   * @public
   */
  InAppMessage?: InAppMessage | undefined;

  /**
   * Priority of the in-app message.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Schedule of the campaign.
   *
   * @public
   */
  Schedule?: InAppCampaignSchedule | undefined;

  /**
   * Session cap which controls the number of times an in-app message can be shown to the endpoint during an application session.
   *
   * @public
   */
  SessionCap?: number | undefined;

  /**
   * Total cap which controls the number of times an in-app message can be shown to the endpoint.
   *
   * @public
   */
  TotalCap?: number | undefined;

  /**
   * Treatment id of the campaign.
   *
   * @public
   */
  TreatmentId?: string | undefined;
}

/**
 * Get in-app messages response object.
 *
 * @public
 */
export interface InAppMessagesResponse {
  /**
   * List of targeted in-app message campaigns.
   *
   * @public
   */
  InAppMessageCampaigns?: InAppMessageCampaign[] | undefined;
}

/**
 * @public
 */
export interface GetInAppMessagesResponse {
  /**
   * Get in-app messages response object.
   *
   * @public
   */
  InAppMessagesResponse: InAppMessagesResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppTemplateRequest {
  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource.
   *
   * If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint does the following:
   *
   * - For a get operation, retrieves information about the active version of the template.
   * - For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.
   * - For a delete operation, deletes the template, including all versions of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * In-App Template Response.
 *
 * @public
 */
export interface InAppTemplateResponse {
  /**
   * The resource arn of the template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.
   *
   * @public
   */
  Content?: InAppMessageContent[] | undefined;

  /**
   * The creation date of the template.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * Custom config to be sent to client.
   *
   * @public
   */
  CustomConfig?: Record<string, string> | undefined;

  /**
   * The last modified date of the template.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * The layout of the message.
   *
   * @public
   */
  Layout?: Layout | undefined;

  /**
   * A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the template.
   *
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The type of the template.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The version id of the template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetInAppTemplateResponse {
  /**
   * In-App Template Response.
   *
   * @public
   */
  InAppTemplateResponse: InAppTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey.
   *
   * @public
   */
  JourneyId: string | undefined;
}
