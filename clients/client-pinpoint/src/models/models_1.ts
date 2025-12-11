// smithy-typescript generated code
import { DeliveryStatus, JourneyRunStatus, State, TemplateType } from "./enums";

import {
  type ADMChannelRequest,
  type ADMChannelResponse,
  type AndroidPushNotificationTemplate,
  type APNSChannelRequest,
  type APNSChannelResponse,
  type APNSPushNotificationTemplate,
  type APNSSandboxChannelRequest,
  type APNSSandboxChannelResponse,
  type APNSVoipChannelRequest,
  type APNSVoipChannelResponse,
  type APNSVoipSandboxChannelRequest,
  type APNSVoipSandboxChannelResponse,
  type ApplicationSettingsJourneyLimits,
  type ApplicationSettingsResource,
  type AttributesResource,
  type BaiduChannelRequest,
  type BaiduChannelResponse,
  type BaseKpiResult,
  type CampaignHook,
  type CampaignLimits,
  type CampaignResponse,
  type DefaultPushNotificationTemplate,
  type DirectMessageConfiguration,
  type EmailChannelRequest,
  type EmailChannelResponse,
  type EmailTemplateRequest,
  type EndpointBatchRequest,
  type EndpointRequest,
  type EndpointsResponse,
  type EventsRequest,
  type EventsResponse,
  type EventStream,
  type ExportJobsResponse,
  type GCMChannelRequest,
  type GCMChannelResponse,
  type ImportJobsResponse,
  type InAppTemplateRequest,
  type MessageBody,
  type PushNotificationTemplateRequest,
  type QuietTime,
  type SMSChannelResponse,
  type SMSTemplateRequest,
  type TemplateConfiguration,
  type VoiceChannelResponse,
  type VoiceTemplateRequest,
  type WriteCampaignRequest,
  type WriteJourneyRequest,
  type WriteSegmentRequest,
  AddressConfiguration,
  EndpointMessageResult,
  EndpointSendConfiguration,
  JourneyResponse,
  RecommenderConfigurationResponse,
  SegmentResponse,
} from "./models_0";

/**
 * @public
 */
export interface GetJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyDateRangeKpiRequest {
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
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  JourneyId: string | undefined;

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
 * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
 * @public
 */
export interface JourneyDateRangeKpiResponse {
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
   * <p>The unique identifier for the journey that the metric applies to.</p>
   * @public
   */
  JourneyId: string | undefined;

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
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.</p>
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
 * @public
 */
export interface GetJourneyDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
   * @public
   */
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey activity.</p>
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
 * @public
 */
export interface JourneyExecutionActivityMetricsResponse {
  /**
   * <p>The type of activity that the metric applies to. Possible values are:</p> <ul><li><p>CONDITIONAL_SPLIT – For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.</p></li> <li><p>HOLDOUT – For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.</p></li> <li><p>MESSAGE – For an email activity, which is an activity that sends an email message to participants.</p></li> <li><p>MULTI_CONDITIONAL_SPLIT – For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.</p></li> <li><p>RANDOM_SPLIT – For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.</p></li> <li><p>WAIT – For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p></li></ul>
   * @public
   */
  ActivityType: string | undefined;

  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the activity that the metric applies to.</p>
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity and updated the data for the metric.</p>
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. The results vary depending on the type of activity (ActivityType). For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
   * @public
   */
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsRequest {
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

  /**
   * <p>The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
 * @public
 */
export interface JourneyExecutionMetricsResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey and updated the data for the metric.</p>
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   * @public
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
   * @public
   */
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionActivityMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey activity.</p>
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The unique identifier for the journey run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query.</p>
 * @public
 */
export interface JourneyRunExecutionActivityMetricsResponse {
  /**
   * <p>The type of activity that the metric applies to. Possible values are:</p> <ul><li><p>CONDITIONAL_SPLIT – For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.</p></li> <li><p>HOLDOUT – For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.</p></li> <li><p>MESSAGE – For an email activity, which is an activity that sends an email message to participants.</p></li> <li><p>MULTI_CONDITIONAL_SPLIT – For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.</p></li> <li><p>RANDOM_SPLIT – For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.</p></li> <li><p>WAIT – For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p></li></ul>
   * @public
   */
  ActivityType: string | undefined;

  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the activity that the metric applies to.</p>
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity for this journey run and updated the data for the metric.</p>
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. For information about the structure and contents of the results, see see <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Standard Amazon Pinpoint analytics metrics</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   * @public
   */
  Metrics: Record<string, string> | undefined;

  /**
   * <p>The unique identifier for the journey run that the metric applies to.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionActivityMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query.</p>
   * @public
   */
  JourneyRunExecutionActivityMetricsResponse: JourneyRunExecutionActivityMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionMetricsRequest {
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

  /**
   * <p>The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   * @public
   */
  PageSize?: string | undefined;

  /**
   * <p>The unique identifier for the journey run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query.</p>
 * @public
 */
export interface JourneyRunExecutionMetricsResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   * @public
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey run and updated the data for the metric.</p>
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Standard Amazon Pinpoint analytics metrics</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   * @public
   */
  Metrics: Record<string, string> | undefined;

  /**
   * <p>The unique identifier for the journey run that the metric applies to.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query.</p>
   * @public
   */
  JourneyRunExecutionMetricsResponse: JourneyRunExecutionMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunsRequest {
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
 * <p>Provides information from a specified run of a journey.</p>
 * @public
 */
export interface JourneyRunResponse {
  /**
   * <p>The time when the journey run was created or scheduled, in ISO 8601 format.</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>The last time the journey run was updated, in ISO 8601 format..</p>
   * @public
   */
  LastUpdateTime: string | undefined;

  /**
   * <p>The unique identifier for the run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The current status of the journey run.</p>
   * @public
   */
  Status: JourneyRunStatus | undefined;
}

/**
 * <p>Provides information from all runs of a journey.</p>
 * @public
 */
export interface JourneyRunsResponse {
  /**
   * <p>An array of responses, one for each run of the journey</p>
   * @public
   */
  Item: JourneyRunResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunsResponse {
  /**
   * <p>Provides information from all runs of a journey.</p>
   * @public
   */
  JourneyRunsResponse: JourneyRunsResponse | undefined;
}

/**
 * @public
 */
export interface GetPushTemplateRequest {
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
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 * @public
 */
export interface PushNotificationTemplateResponse {
  /**
   * <p>The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  ADM?: AndroidPushNotificationTemplate | undefined;

  /**
   * <p>The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  APNS?: APNSPushNotificationTemplate | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  Baidu?: AndroidPushNotificationTemplate | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The default message template that's used for push notification channels.</p>
   * @public
   */
  Default?: DefaultPushNotificationTemplate | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   * @public
   */
  GCM?: AndroidPushNotificationTemplate | undefined;

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
   * <p>The type of channel that the message template is designed for. For a push notification template, this value is PUSH.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetPushTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   * @public
   */
  PushNotificationTemplateResponse: PushNotificationTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  RecommenderId: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationsRequest {
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
 * <p>Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
 * @public
 */
export interface ListRecommenderConfigurationsResponse {
  /**
   * <p>An array of responses, one for each recommender model configuration that's associated with your Amazon Pinpoint account.</p>
   * @public
   */
  Item: RecommenderConfigurationResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationsResponse {
  /**
   * <p>Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
   * @public
   */
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentRequest {
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
export interface GetSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentExportJobsRequest {
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
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   * @public
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentImportJobsRequest {
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
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   * @public
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentsRequest {
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
 * <p>Provides information about all the segments that are associated with an application.</p>
 * @public
 */
export interface SegmentsResponse {
  /**
   * <p>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</p>
   * @public
   */
  Item: SegmentResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   * @public
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionRequest {
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

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionsRequest {
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
   * <p>The unique identifier for the segment.</p>
   * @public
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   * @public
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   * @public
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetSmsTemplateRequest {
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
 * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 * @public
 */
export interface SMSTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The message body that's used in text messages that are based on the message template.</p>
   * @public
   */
  Body?: string | undefined;

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
   * <p>The type of channel that the message template is designed for. For an SMS template, this value is SMS.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetSmsTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   * @public
   */
  SMSTemplateResponse: SMSTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetUserEndpointsRequest {
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
 * @public
 */
export interface GetUserEndpointsResponse {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   * @public
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

/**
 * @public
 */
export interface GetVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   * @public
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetVoiceTemplateRequest {
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
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 * @public
 */
export interface VoiceTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The text of the script that's used in messages that are based on the message template, in plain text format.</p>
   * @public
   */
  Body?: string | undefined;

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
   * <p>The code for the language that's used when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

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
   * <p>The type of channel that the message template is designed for. For a voice template, this value is VOICE.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The name of the voice that's used when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   * @public
   */
  VoiceTemplateResponse: VoiceTemplateResponse | undefined;
}

/**
 * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
 * @public
 */
export interface JourneysResponse {
  /**
   * <p>An array of responses, one for each journey that's associated with the application.</p>
   * @public
   */
  Item: JourneyResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Changes the status of a journey.</p>
 * @public
 */
export interface JourneyStateRequest {
  /**
   * <p>The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p> <p>When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.</p>
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface ListJourneysRequest {
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
export interface ListJourneysResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
   * @public
   */
  JourneysResponse: JourneysResponse | undefined;
}

/**
 * <p>Provides information about a message template that's associated with your Amazon Pinpoint account.</p>
 * @public
 */
export interface TemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template. This value isn't included in a TemplateResponse object. To retrieve the ARN of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the ARN for.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>A map of key-value pairs that identifies the tags that are associated with the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The custom description of the message template. This value isn't included in a TemplateResponse object. To retrieve the description of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the description for.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, INAPP, and VOICE.</p>
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Provides information about a specific version of a message template.</p>
 * @public
 */
export interface TemplateVersionResponse {
  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was created.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>A JSON object that specifies the default values that are used for message variables in the version of the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was last modified.</p>
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the version of the message template.</p>
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, INAPP, and VOICE.</p>
   * @public
   */
  TemplateType: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template. This value is an integer that Amazon Pinpoint automatically increments and assigns to each new version of a template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
 * @public
 */
export interface TagsModel {
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   * @public
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
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
   * <p>The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.</p>
   * @public
   */
  TemplateType?: string | undefined;
}

/**
 * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
 * @public
 */
export interface TemplatesResponse {
  /**
   * <p>An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.</p>
   * @public
   */
  Item: TemplateResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
   * @public
   */
  TemplatesResponse: TemplatesResponse | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsRequest {
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
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   * @public
   */
  TemplateType: string | undefined;
}

/**
 * <p>Provides information about all the versions of a specific message template.</p>
 * @public
 */
export interface TemplateVersionsResponse {
  /**
   * <p>An array of responses, one for each version of the message template.</p>
   * @public
   */
  Item: TemplateVersionResponse[] | undefined;

  /**
   * <p>The message that's returned from the API for the request to retrieve information about all the versions of the message template.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique identifier for the request to retrieve information about all the versions of the message template.</p>
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * <p>Provides information about all the versions of a specific message template.</p>
   * @public
   */
  TemplateVersionsResponse: TemplateVersionsResponse | undefined;
}

/**
 * <p>Provides information about the results of sending a message directly to an endpoint address.</p>
 * @public
 */
export interface MessageResult {
  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint address.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
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
 * <p>Specifies the configuration and other settings for a message.</p>
 * @public
 */
export interface MessageRequest {
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object. An address can be a push notification token, a phone number, or an email address. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   * @public
   */
  Addresses?: Record<string, AddressConfiguration> | undefined;

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   * @public
   */
  Endpoints?: Record<string, EndpointSendConfiguration> | undefined;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   * @public
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   * @public
   */
  TraceId?: string | undefined;
}

/**
 * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
 * @public
 */
export interface MessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.</p>
   * @public
   */
  EndpointResult?: Record<string, EndpointMessageResult> | undefined;

  /**
   * <p>The identifier for the original request that the message was delivered for.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.</p>
   * @public
   */
  Result?: Record<string, MessageResult> | undefined;
}

/**
 * <p>Specifies a phone number to validate and retrieve information about.</p>
 * @public
 */
export interface NumberValidateRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.</p>
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * <p>Provides information about a phone number.</p>
 * @public
 */
export interface NumberValidateResponse {
  /**
   * <p>The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.</p>
   * @public
   */
  Carrier?: string | undefined;

  /**
   * <p>The name of the city where the phone number was originally registered.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.</p>
   * @public
   */
  CleansedPhoneNumberE164?: string | undefined;

  /**
   * <p>The cleansed phone number, in the format for the location where the phone number was originally registered.</p>
   * @public
   */
  CleansedPhoneNumberNational?: string | undefined;

  /**
   * <p>The name of the country or region where the phone number was originally registered.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   * @public
   */
  CountryCodeIso2?: string | undefined;

  /**
   * <p>The numeric code for the country or region where the phone number was originally registered.</p>
   * @public
   */
  CountryCodeNumeric?: string | undefined;

  /**
   * <p>The name of the county where the phone number was originally registered.</p>
   * @public
   */
  County?: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.</p>
   * @public
   */
  OriginalCountryCodeIso2?: string | undefined;

  /**
   * <p>The phone number that was sent in the request body.</p>
   * @public
   */
  OriginalPhoneNumber?: string | undefined;

  /**
   * <p>The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,
   *                   INVALID, PREPAID, and OTHER.</p>
   * @public
   */
  PhoneType?: string | undefined;

  /**
   * <p>The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).</p>
   * @public
   */
  PhoneTypeCode?: number | undefined;

  /**
   * <p>The time zone for the location where the phone number was originally registered.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The postal or ZIP code for the location where the phone number was originally registered.</p>
   * @public
   */
  ZipCode?: string | undefined;
}

/**
 * @public
 */
export interface PhoneNumberValidateRequest {
  /**
   * <p>Specifies a phone number to validate and retrieve information about.</p>
   * @public
   */
  NumberValidateRequest: NumberValidateRequest | undefined;
}

/**
 * @public
 */
export interface PhoneNumberValidateResponse {
  /**
   * <p>Provides information about a phone number.</p>
   * @public
   */
  NumberValidateResponse: NumberValidateResponse | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of events to process.</p>
   * @public
   */
  EventsRequest: EventsRequest | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * <p>Provides information about endpoints and the events that they're associated with.</p>
   * @public
   */
  EventsResponse: EventsResponse | undefined;
}

/**
 * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
 * @public
 */
export interface WriteEventStream {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   * @public
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
   * @public
   */
  WriteEventStream: WriteEventStream | undefined;
}

/**
 * @public
 */
export interface PutEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
 * @public
 */
export interface UpdateAttributesRequest {
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   * @public
   */
  Blacklist?: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
   * @public
   */
  AttributeType: string | undefined;

  /**
   * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
   * @public
   */
  UpdateAttributesRequest: UpdateAttributesRequest | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesResponse {
  /**
   * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
   * @public
   */
  AttributesResource: AttributesResource | undefined;
}

/**
 * @public
 */
export interface SendMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message.</p>
   * @public
   */
  MessageRequest: MessageRequest | undefined;
}

/**
 * @public
 */
export interface SendMessagesResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   * @public
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * <p>Send OTP message request parameters.</p>
 * @public
 */
export interface SendOTPMessageRequestParameters {
  /**
   * <p>The attempts allowed to validate an OTP.</p>
   * @public
   */
  AllowedAttempts?: number | undefined;

  /**
   * <p>The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.</p>
   * @public
   */
  BrandName: string | undefined;

  /**
   * <p>Channel type for the OTP message. Supported values: [SMS].</p>
   * @public
   */
  Channel: string | undefined;

  /**
   * <p>The number of characters in the generated OTP.</p>
   * @public
   */
  CodeLength?: number | undefined;

  /**
   * <p>The destination identity to send OTP to.</p>
   * @public
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>A unique Entity ID received from DLT after entity registration is approved.</p>
   * @public
   */
  EntityId?: string | undefined;

  /**
   * <p>The language to be used for the outgoing message body containing the OTP.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The origination identity used to send OTP from.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>Developer-specified reference identifier. Required to match during OTP verification.</p>
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * <p>A unique Template ID received from DLT after entity registration is approved.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The time in minutes before the OTP is no longer valid.</p>
   * @public
   */
  ValidityPeriod?: number | undefined;
}

/**
 * @public
 */
export interface SendOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Send OTP message request parameters.</p>
   * @public
   */
  SendOTPMessageRequestParameters: SendOTPMessageRequestParameters | undefined;
}

/**
 * @public
 */
export interface SendOTPMessageResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   * @public
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
 * @public
 */
export interface SendUsersMessageRequest {
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   * @public
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   * @public
   */
  TraceId?: string | undefined;

  /**
   * <p>A map that associates user IDs with <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> objects. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   * @public
   */
  Users: Record<string, EndpointSendConfiguration> | undefined;
}

/**
 * @public
 */
export interface SendUsersMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
   * @public
   */
  SendUsersMessageRequest: SendUsersMessageRequest | undefined;
}

/**
 * <p>Provides information about which users and endpoints a message was sent to.</p>
 * @public
 */
export interface SendUsersMessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier that was assigned to the message request.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.</p>
   * @public
   */
  Result?: Record<string, Record<string, EndpointMessageResult>> | undefined;
}

/**
 * @public
 */
export interface SendUsersMessagesResponse {
  /**
   * <p>Provides information about which users and endpoints a message was sent to.</p>
   * @public
   */
  SendUsersMessageResponse: SendUsersMessageResponse | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   * @public
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAdmChannelRequest {
  /**
   * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   * @public
   */
  ADMChannelRequest: ADMChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   * @public
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   * @public
   */
  APNSChannelRequest: APNSChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   * @public
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   * @public
   */
  APNSSandboxChannelRequest: APNSSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   * @public
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   * @public
   */
  APNSVoipChannelRequest: APNSVoipChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   * @public
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   * @public
   */
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * <p>Specifies the default settings for an application.</p>
 * @public
 */
export interface WriteApplicationSettingsRequest {
  /**
   * <p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p> <p>To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource.</p>
   * @public
   */
  CampaignHook?: CampaignHook | undefined;

  /**
   * <p>Specifies whether to enable application-related alarms in Amazon CloudWatch.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  EventTaggingEnabled?: boolean | undefined;
  /**
   * <p>The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource, respectively.</p>
   * @public
   */
  Limits?: CampaignLimits | undefined;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>
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
 * @public
 */
export interface UpdateApplicationSettingsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the default settings for an application.</p>
   * @public
   */
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsResponse {
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   * @public
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

/**
 * @public
 */
export interface UpdateBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   * @public
   */
  BaiduChannelRequest: BaiduChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   * @public
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignRequest {
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
   * <p>Specifies the configuration and other settings for a campaign.</p>
   * @public
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   * @public
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface UpdateEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the email channel for an application.</p>
   * @public
   */
  EmailChannelRequest: EmailChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   * @public
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateEmailTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEmailTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointRequest {
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

  /**
   * <p>Specifies the channel type and other settings for an endpoint.</p>
   * @public
   */
  EndpointRequest: EndpointRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointsBatchRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
   * @public
   */
  EndpointBatchRequest: EndpointBatchRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointsBatchResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   * @public
   */
  GCMChannelRequest: GCMChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   * @public
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateInAppTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInAppTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyRequest {
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

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   * @public
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyStateRequest {
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

  /**
   * <p>Changes the status of a journey.</p>
   * @public
   */
  JourneyStateRequest: JourneyStateRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyStateResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   * @public
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface UpdatePushTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePushTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 * @public
 */
export interface UpdateRecommenderConfigurationShape {
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
export interface UpdateRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  RecommenderId: string | undefined;

  /**
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   * @public
   */
  UpdateRecommenderConfiguration: UpdateRecommenderConfigurationShape | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   * @public
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSegmentRequest {
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

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   * @public
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * <p>Specifies the status and settings of the SMS channel for an application.</p>
 * @public
 */
export interface SMSChannelRequest {
  /**
   * <p>Specifies whether to enable the SMS channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The identity that you want to display on recipients' devices when they receive messages from the SMS channel.</p>
   * @public
   */
  SenderId?: string | undefined;

  /**
   * <p>The registered short code that you want to use when you send messages through the SMS channel.</p>
   * @public
   */
  ShortCode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the SMS channel for an application.</p>
   * @public
   */
  SMSChannelRequest: SMSChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   * @public
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSmsTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSmsTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * <p>Specifies which version of a message template to use as the active version of the template.</p>
 * @public
 */
export interface TemplateActiveVersionRequest {
  /**
   * <p>The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionRequest {
  /**
   * <p>Specifies which version of a message template to use as the active version of the template.</p>
   * @public
   */
  TemplateActiveVersionRequest: TemplateActiveVersionRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   * @public
   */
  TemplateType: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * <p>Specifies the status and settings of the voice channel for an application.</p>
 * @public
 */
export interface VoiceChannelRequest {
  /**
   * <p>Specifies whether to enable the voice channel for the application.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the voice channel for an application.</p>
   * @public
   */
  VoiceChannelRequest: VoiceChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   * @public
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   * @public
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * <p>Verify OTP message request.</p>
 * @public
 */
export interface VerifyOTPMessageRequestParameters {
  /**
   * <p>The destination identity to send OTP to.</p>
   * @public
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>The OTP the end user provided for verification.</p>
   * @public
   */
  Otp: string | undefined;

  /**
   * <p>The reference identifier provided when the OTP was previously sent.</p>
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface VerifyOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Verify OTP message request.</p>
   * @public
   */
  VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters | undefined;
}

/**
 * <p>Verify OTP Message Response.</p>
 * @public
 */
export interface VerificationResponse {
  /**
   * <p>Specifies whether the OTP is valid or not.</p>
   * @public
   */
  Valid?: boolean | undefined;
}

/**
 * @public
 */
export interface VerifyOTPMessageResponse {
  /**
   * <p>Verify OTP Message Response.</p>
   * @public
   */
  VerificationResponse: VerificationResponse | undefined;
}
