// smithy-typescript generated code
import type { DeliveryStatus, JourneyRunStatus, State, TemplateType } from "./enums";
import type {
  AddressConfiguration,
  ADMChannelRequest,
  ADMChannelResponse,
  AndroidPushNotificationTemplate,
  APNSChannelRequest,
  APNSChannelResponse,
  APNSPushNotificationTemplate,
  APNSSandboxChannelRequest,
  APNSSandboxChannelResponse,
  APNSVoipChannelRequest,
  APNSVoipChannelResponse,
  APNSVoipSandboxChannelRequest,
  APNSVoipSandboxChannelResponse,
  ApplicationSettingsJourneyLimits,
  ApplicationSettingsResource,
  AttributesResource,
  BaiduChannelRequest,
  BaiduChannelResponse,
  BaseKpiResult,
  CampaignHook,
  CampaignLimits,
  CampaignResponse,
  DefaultPushNotificationTemplate,
  DirectMessageConfiguration,
  EmailChannelRequest,
  EmailChannelResponse,
  EmailTemplateRequest,
  EndpointBatchRequest,
  EndpointMessageResult,
  EndpointRequest,
  EndpointSendConfiguration,
  EndpointsResponse,
  EventsRequest,
  EventsResponse,
  EventStream,
  ExportJobsResponse,
  GCMChannelRequest,
  GCMChannelResponse,
  ImportJobsResponse,
  InAppTemplateRequest,
  JourneyResponse,
  MessageBody,
  PushNotificationTemplateRequest,
  QuietTime,
  RecommenderConfigurationResponse,
  SegmentResponse,
  SMSChannelResponse,
  SMSTemplateRequest,
  TemplateConfiguration,
  VoiceChannelResponse,
  VoiceTemplateRequest,
  WriteCampaignRequest,
  WriteJourneyRequest,
  WriteSegmentRequest,
} from "./models_0";

/**
 * @public
 */
export interface GetJourneyResponse {
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
export interface GetJourneyDateRangeKpiRequest {
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
   * The unique identifier for the journey.
   *
   * @public
   */
  JourneyId: string | undefined;

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
 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
 *
 * @public
 */
export interface JourneyDateRangeKpiResponse {
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
   * The unique identifier for the journey that the metric applies to.
   *
   * @public
   */
  JourneyId: string | undefined;

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
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.
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
 * @public
 */
export interface GetJourneyDateRangeKpiResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
   *
   * @public
   */
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey activity.
   *
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * The unique identifier for the journey.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The `string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.`
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
}

/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
 *
 * @public
 */
export interface JourneyExecutionActivityMetricsResponse {
  /**
   * The type of activity that the metric applies to. Possible values are:
   *
   * - CONDITIONAL_SPLIT – For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.
   * - HOLDOUT – For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.
   * - MESSAGE – For an email activity, which is an activity that sends an email message to participants.
   * - MULTI_CONDITIONAL_SPLIT – For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.
   * - RANDOM_SPLIT – For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.
   * - WAIT – For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
   *
   * @public
   */
  ActivityType: string | undefined;

  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the activity that the metric applies to.
   *
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * The unique identifier for the journey that the metric applies to.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity and updated the data for the metric.
   *
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * A JSON object that contains the results of the query. The results vary depending on the type of activity (ActivityType). For information about the structure and contents of the results, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
   *
   * @public
   */
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsRequest {
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

  /**
   * The `string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.`
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
}

/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
 *
 * @public
 */
export interface JourneyExecutionMetricsResponse {
  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey that the metric applies to.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey and updated the data for the metric.
   *
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * A JSON object that contains the results of the query. For information about the structure and contents of the results, see the [Amazon Pinpoint Developer Guide](https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html).
   *
   * @public
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
   *
   * @public
   */
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionActivityMetricsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey activity.
   *
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * The unique identifier for the journey.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The `string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.`
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
   * The unique identifier for the journey run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query.
 *
 * @public
 */
export interface JourneyRunExecutionActivityMetricsResponse {
  /**
   * The type of activity that the metric applies to. Possible values are:
   *
   * - CONDITIONAL_SPLIT – For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.
   * - HOLDOUT – For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.
   * - MESSAGE – For an email activity, which is an activity that sends an email message to participants.
   * - MULTI_CONDITIONAL_SPLIT – For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.
   * - RANDOM_SPLIT – For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.
   * - WAIT – For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
   *
   * @public
   */
  ActivityType: string | undefined;

  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the activity that the metric applies to.
   *
   * @public
   */
  JourneyActivityId: string | undefined;

  /**
   * The unique identifier for the journey that the metric applies to.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity for this journey run and updated the data for the metric.
   *
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * A JSON object that contains the results of the query. For information about the structure and contents of the results, see see [Standard Amazon Pinpoint analytics metrics](https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html) in the *Amazon Pinpoint Developer Guide*.
   *
   * @public
   */
  Metrics: Record<string, string> | undefined;

  /**
   * The unique identifier for the journey run that the metric applies to.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionActivityMetricsResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query.
   *
   * @public
   */
  JourneyRunExecutionActivityMetricsResponse: JourneyRunExecutionActivityMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionMetricsRequest {
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

  /**
   * The `string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.`
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
   * The unique identifier for the journey run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query.
 *
 * @public
 */
export interface JourneyRunExecutionMetricsResponse {
  /**
   * The unique identifier for the application that the metric applies to.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier for the journey that the metric applies to.
   *
   * @public
   */
  JourneyId: string | undefined;

  /**
   * The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey run and updated the data for the metric.
   *
   * @public
   */
  LastEvaluatedTime: string | undefined;

  /**
   * A JSON object that contains the results of the query. For information about the structure and contents of the results, see the [Standard Amazon Pinpoint analytics metrics](https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html) in the *Amazon Pinpoint Developer Guide*.
   *
   * @public
   */
  Metrics: Record<string, string> | undefined;

  /**
   * The unique identifier for the journey run that the metric applies to.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunExecutionMetricsResponse {
  /**
   * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query.
   *
   * @public
   */
  JourneyRunExecutionMetricsResponse: JourneyRunExecutionMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRunsRequest {
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
 * Provides information from a specified run of a journey.
 *
 * @public
 */
export interface JourneyRunResponse {
  /**
   * The time when the journey run was created or scheduled, in ISO 8601 format.
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * The last time the journey run was updated, in ISO 8601 format..
   *
   * @public
   */
  LastUpdateTime: string | undefined;

  /**
   * The unique identifier for the run.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * The current status of the journey run.
   *
   * @public
   */
  Status: JourneyRunStatus | undefined;
}

/**
 * Provides information from all runs of a journey.
 *
 * @public
 */
export interface JourneyRunsResponse {
  /**
   * An array of responses, one for each run of the journey
   *
   * @public
   */
  Item: JourneyRunResponse[] | undefined;

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
export interface GetJourneyRunsResponse {
  /**
   * Provides information from all runs of a journey.
   *
   * @public
   */
  JourneyRunsResponse: JourneyRunsResponse | undefined;
}

/**
 * @public
 */
export interface GetPushTemplateRequest {
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
 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
 *
 * @public
 */
export interface PushNotificationTemplateResponse {
  /**
   * The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  ADM?: AndroidPushNotificationTemplate | undefined;

  /**
   * The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  APNS?: APNSPushNotificationTemplate | undefined;

  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  Baidu?: AndroidPushNotificationTemplate | undefined;

  /**
   * The date, in ISO 8601 format, when the message template was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The default message template that's used for push notification channels.
   *
   * @public
   */
  Default?: DefaultPushNotificationTemplate | undefined;

  /**
   * The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).
   *
   * @public
   */
  GCM?: AndroidPushNotificationTemplate | undefined;

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
   * The type of channel that the message template is designed for. For a push notification template, this value is PUSH.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetPushTemplateResponse {
  /**
   * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
   *
   * @public
   */
  PushNotificationTemplateResponse: PushNotificationTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationRequest {
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
export interface GetRecommenderConfigurationResponse {
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
export interface GetRecommenderConfigurationsRequest {
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
 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
 *
 * @public
 */
export interface ListRecommenderConfigurationsResponse {
  /**
   * An array of responses, one for each recommender model configuration that's associated with your Amazon Pinpoint account.
   *
   * @public
   */
  Item: RecommenderConfigurationResponse[] | undefined;

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
export interface GetRecommenderConfigurationsResponse {
  /**
   * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
   *
   * @public
   */
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentRequest {
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
export interface GetSegmentResponse {
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
export interface GetSegmentExportJobsRequest {
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
   * The unique identifier for the segment.
   *
   * @public
   */
  SegmentId: string | undefined;

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
export interface GetSegmentExportJobsResponse {
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
export interface GetSegmentImportJobsRequest {
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
   * The unique identifier for the segment.
   *
   * @public
   */
  SegmentId: string | undefined;

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
export interface GetSegmentImportJobsResponse {
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
export interface GetSegmentsRequest {
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
 * Provides information about all the segments that are associated with an application.
 *
 * @public
 */
export interface SegmentsResponse {
  /**
   * An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).
   *
   * @public
   */
  Item: SegmentResponse[] | undefined;

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
export interface GetSegmentsResponse {
  /**
   * Provides information about all the segments that are associated with an application.
   *
   * @public
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionRequest {
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
export interface GetSegmentVersionResponse {
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
export interface GetSegmentVersionsRequest {
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
   * The unique identifier for the segment.
   *
   * @public
   */
  SegmentId: string | undefined;

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
export interface GetSegmentVersionsResponse {
  /**
   * Provides information about all the segments that are associated with an application.
   *
   * @public
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSmsChannelRequest {
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
export interface GetSmsChannelResponse {
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
export interface GetSmsTemplateRequest {
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
 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
 *
 * @public
 */
export interface SMSTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The message body that's used in text messages that are based on the message template.
   *
   * @public
   */
  Body?: string | undefined;

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
   * The type of channel that the message template is designed for. For an SMS template, this value is SMS.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetSmsTemplateResponse {
  /**
   * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
   *
   * @public
   */
  SMSTemplateResponse: SMSTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetUserEndpointsRequest {
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
 * @public
 */
export interface GetUserEndpointsResponse {
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
export interface GetVoiceChannelRequest {
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
export interface GetVoiceChannelResponse {
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
export interface GetVoiceTemplateRequest {
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
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
 *
 * @public
 */
export interface VoiceTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The text of the script that's used in messages that are based on the message template, in plain text format.
   *
   * @public
   */
  Body?: string | undefined;

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
   * The code for the language that's used when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the message template was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

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
   * The type of channel that the message template is designed for. For a voice template, this value is VOICE.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The name of the voice that's used when delivering messages that are based on the message template. For a list of supported voices, see the [Amazon Polly Developer Guide](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceTemplateResponse {
  /**
   * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
   *
   * @public
   */
  VoiceTemplateResponse: VoiceTemplateResponse | undefined;
}

/**
 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
 *
 * @public
 */
export interface JourneysResponse {
  /**
   * An array of responses, one for each journey that's associated with the application.
   *
   * @public
   */
  Item: JourneyResponse[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Changes the status of a journey.
 *
 * @public
 */
export interface JourneyStateRequest {
  /**
   * The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED
   *
   * If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.
   *
   * After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.
   *
   * When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.
   *
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface ListJourneysRequest {
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
export interface ListJourneysResponse {
  /**
   * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
   *
   * @public
   */
  JourneysResponse: JourneysResponse | undefined;
}

/**
 * Provides information about a message template that's associated with your Amazon Pinpoint account.
 *
 * @public
 */
export interface TemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template. This value isn't included in a TemplateResponse object. To retrieve the ARN of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the ARN for.
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
   * The JSON object that specifies the default values that are used for message variables in the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the message template was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * A map of key-value pairs that identifies the tags that are associated with the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The custom description of the message template. This value isn't included in a TemplateResponse object. To retrieve the description of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the description for.
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
   * The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, INAPP, and VOICE.
   *
   * @public
   */
  TemplateType: TemplateType | undefined;

  /**
   * The unique identifier, as an integer, for the active version of the message template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Provides information about a specific version of a message template.
 *
 * @public
 */
export interface TemplateVersionResponse {
  /**
   * The date, in ISO 8601 format, when the version of the message template was created.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * A JSON object that specifies the default values that are used for message variables in the version of the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  DefaultSubstitutions?: string | undefined;

  /**
   * The date, in ISO 8601 format, when the version of the message template was last modified.
   *
   * @public
   */
  LastModifiedDate: string | undefined;

  /**
   * The custom description of the version of the message template.
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
   * The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, INAPP, and VOICE.
   *
   * @public
   */
  TemplateType: string | undefined;

  /**
   * The unique identifier for the version of the message template. This value is an integer that Amazon Pinpoint automatically increments and assigns to each new version of a template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
 *
 * @public
 */
export interface TagsModel {
  /**
   * A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.
   *
   * Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
   *
   * @public
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
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
   * The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.
   *
   * @public
   */
  TemplateType?: string | undefined;
}

/**
 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
 *
 * @public
 */
export interface TemplatesResponse {
  /**
   * An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.
   *
   * @public
   */
  Item: TemplateResponse[] | undefined;

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
export interface ListTemplatesResponse {
  /**
   * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
   *
   * @public
   */
  TemplatesResponse: TemplatesResponse | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsRequest {
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
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
   *
   * @public
   */
  TemplateType: string | undefined;
}

/**
 * Provides information about all the versions of a specific message template.
 *
 * @public
 */
export interface TemplateVersionsResponse {
  /**
   * An array of responses, one for each version of the message template.
   *
   * @public
   */
  Item: TemplateVersionResponse[] | undefined;

  /**
   * The message that's returned from the API for the request to retrieve information about all the versions of the message template.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique identifier for the request to retrieve information about all the versions of the message template.
   *
   * @public
   */
  RequestID?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * Provides information about all the versions of a specific message template.
   *
   * @public
   */
  TemplateVersionsResponse: TemplateVersionsResponse | undefined;
}

/**
 * Provides information about the results of sending a message directly to an endpoint address.
 *
 * @public
 */
export interface MessageResult {
  /**
   * The delivery status of the message. Possible values are:
   *
   * - DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.
   * - OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.
   * - PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.
   * - SUCCESSFUL - The message was successfully delivered to the endpoint address.
   * - TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.
   * - THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.
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
 * Specifies the configuration and other settings for a message.
 *
 * @public
 */
export interface MessageRequest {
  /**
   * A map of key-value pairs, where each key is an address and each value is an [AddressConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration) object. An address can be a push notification token, a phone number, or an email address. You can use an [AddressConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration) object to tailor the message for an address by specifying settings such as content overrides and message variables.
   *
   * @public
   */
  Addresses?: Record<string, AddressConfiguration> | undefined;

  /**
   * A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * A map of key-value pairs, where each key is an endpoint ID and each value is an [EndpointSendConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration) object. You can use an [EndpointSendConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration) object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.
   *
   * @public
   */
  Endpoints?: Record<string, EndpointSendConfiguration> | undefined;

  /**
   * The settings and content for the default message and any default messages that you defined for specific channels.
   *
   * @public
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * The message template to use for the message.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * The unique identifier for tracing the message. This identifier is visible to message recipients.
   *
   * @public
   */
  TraceId?: string | undefined;
}

/**
 * Provides information about the results of a request to send a message to an endpoint address.
 *
 * @public
 */
export interface MessageResponse {
  /**
   * The unique identifier for the application that was used to send the message.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.
   *
   * @public
   */
  EndpointResult?: Record<string, EndpointMessageResult> | undefined;

  /**
   * The identifier for the original request that the message was delivered for.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.
   *
   * @public
   */
  Result?: Record<string, MessageResult> | undefined;
}

/**
 * Specifies a phone number to validate and retrieve information about.
 *
 * @public
 */
export interface NumberValidateRequest {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.
   *
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * Provides information about a phone number.
 *
 * @public
 */
export interface NumberValidateResponse {
  /**
   * The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.
   *
   * @public
   */
  Carrier?: string | undefined;

  /**
   * The name of the city where the phone number was originally registered.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.
   *
   * @public
   */
  CleansedPhoneNumberE164?: string | undefined;

  /**
   * The cleansed phone number, in the format for the location where the phone number was originally registered.
   *
   * @public
   */
  CleansedPhoneNumberNational?: string | undefined;

  /**
   * The name of the country or region where the phone number was originally registered.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.
   *
   * @public
   */
  CountryCodeIso2?: string | undefined;

  /**
   * The numeric code for the country or region where the phone number was originally registered.
   *
   * @public
   */
  CountryCodeNumeric?: string | undefined;

  /**
   * The name of the county where the phone number was originally registered.
   *
   * @public
   */
  County?: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.
   *
   * @public
   */
  OriginalCountryCodeIso2?: string | undefined;

  /**
   * The phone number that was sent in the request body.
   *
   * @public
   */
  OriginalPhoneNumber?: string | undefined;

  /**
   * The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP, INVALID, PREPAID, and OTHER.
   *
   * @public
   */
  PhoneType?: string | undefined;

  /**
   * The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).
   *
   * @public
   */
  PhoneTypeCode?: number | undefined;

  /**
   * The time zone for the location where the phone number was originally registered.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The postal or ZIP code for the location where the phone number was originally registered.
   *
   * @public
   */
  ZipCode?: string | undefined;
}

/**
 * @public
 */
export interface PhoneNumberValidateRequest {
  /**
   * Specifies a phone number to validate and retrieve information about.
   *
   * @public
   */
  NumberValidateRequest: NumberValidateRequest | undefined;
}

/**
 * @public
 */
export interface PhoneNumberValidateResponse {
  /**
   * Provides information about a phone number.
   *
   * @public
   */
  NumberValidateResponse: NumberValidateResponse | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies a batch of events to process.
   *
   * @public
   */
  EventsRequest: EventsRequest | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * Provides information about endpoints and the events that they're associated with.
   *
   * @public
   */
  EventsResponse: EventsResponse | undefined;
}

/**
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
 *
 * @public
 */
export interface WriteEventStream {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.
   *
   * For a Kinesis data stream, the ARN format is: arn:aws:kinesis:region:account-id:stream/stream_name
   *
   * For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:region:account-id:deliverystream/stream_name
   *
   * @public
   */
  DestinationStreamArn: string | undefined;

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
export interface PutEventStreamRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
   *
   * @public
   */
  WriteEventStream: WriteEventStream | undefined;
}

/**
 * @public
 */
export interface PutEventStreamResponse {
  /**
   * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  EventStream: EventStream | undefined;
}

/**
 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
 *
 * @public
 */
export interface UpdateAttributesRequest {
  /**
   * An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.
   *
   * @public
   */
  Blacklist?: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The type of attribute or attributes to remove. Valid values are:
   *
   * - endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.
   * - endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.
   * - endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.
   *
   * @public
   */
  AttributeType: string | undefined;

  /**
   * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
   *
   * @public
   */
  UpdateAttributesRequest: UpdateAttributesRequest | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesResponse {
  /**
   * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
   *
   * @public
   */
  AttributesResource: AttributesResource | undefined;
}

/**
 * @public
 */
export interface SendMessagesRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the configuration and other settings for a message.
   *
   * @public
   */
  MessageRequest: MessageRequest | undefined;
}

/**
 * @public
 */
export interface SendMessagesResponse {
  /**
   * Provides information about the results of a request to send a message to an endpoint address.
   *
   * @public
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * Send OTP message request parameters.
 *
 * @public
 */
export interface SendOTPMessageRequestParameters {
  /**
   * The attempts allowed to validate an OTP.
   *
   * @public
   */
  AllowedAttempts?: number | undefined;

  /**
   * The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.
   *
   * @public
   */
  BrandName: string | undefined;

  /**
   * Channel type for the OTP message. Supported values: [SMS].
   *
   * @public
   */
  Channel: string | undefined;

  /**
   * The number of characters in the generated OTP.
   *
   * @public
   */
  CodeLength?: number | undefined;

  /**
   * The destination identity to send OTP to.
   *
   * @public
   */
  DestinationIdentity: string | undefined;

  /**
   * A unique Entity ID received from DLT after entity registration is approved.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The language to be used for the outgoing message body containing the OTP.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The origination identity used to send OTP from.
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * Developer-specified reference identifier. Required to match during OTP verification.
   *
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * A unique Template ID received from DLT after entity registration is approved.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The time in minutes before the OTP is no longer valid.
   *
   * @public
   */
  ValidityPeriod?: number | undefined;
}

/**
 * @public
 */
export interface SendOTPMessageRequest {
  /**
   * The unique ID of your Amazon Pinpoint application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Send OTP message request parameters.
   *
   * @public
   */
  SendOTPMessageRequestParameters: SendOTPMessageRequestParameters | undefined;
}

/**
 * @public
 */
export interface SendOTPMessageResponse {
  /**
   * Provides information about the results of a request to send a message to an endpoint address.
   *
   * @public
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
 *
 * @public
 */
export interface SendUsersMessageRequest {
  /**
   * A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * The settings and content for the default message and any default messages that you defined for specific channels.
   *
   * @public
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * The message template to use for the message.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * The unique identifier for tracing the message. This identifier is visible to message recipients.
   *
   * @public
   */
  TraceId?: string | undefined;

  /**
   * A map that associates user IDs with [EndpointSendConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration) objects. You can use an [EndpointSendConfiguration](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration) object to tailor the message for a user by specifying settings such as content overrides and message variables.
   *
   * @public
   */
  Users: Record<string, EndpointSendConfiguration> | undefined;
}

/**
 * @public
 */
export interface SendUsersMessagesRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
   *
   * @public
   */
  SendUsersMessageRequest: SendUsersMessageRequest | undefined;
}

/**
 * Provides information about which users and endpoints a message was sent to.
 *
 * @public
 */
export interface SendUsersMessageResponse {
  /**
   * The unique identifier for the application that was used to send the message.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The unique identifier that was assigned to the message request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.
   *
   * @public
   */
  Result?: Record<string, Record<string, EndpointMessageResult>> | undefined;
}

/**
 * @public
 */
export interface SendUsersMessagesResponse {
  /**
   * Provides information about which users and endpoints a message was sent to.
   *
   * @public
   */
  SendUsersMessageResponse: SendUsersMessageResponse | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
   *
   * @public
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAdmChannelRequest {
  /**
   * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
   *
   * @public
   */
  ADMChannelRequest: ADMChannelRequest | undefined;

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
export interface UpdateAdmChannelResponse {
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
export interface UpdateApnsChannelRequest {
  /**
   * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
   *
   * @public
   */
  APNSChannelRequest: APNSChannelRequest | undefined;

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
export interface UpdateApnsChannelResponse {
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
export interface UpdateApnsSandboxChannelRequest {
  /**
   * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
   *
   * @public
   */
  APNSSandboxChannelRequest: APNSSandboxChannelRequest | undefined;

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
export interface UpdateApnsSandboxChannelResponse {
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
export interface UpdateApnsVoipChannelRequest {
  /**
   * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
   *
   * @public
   */
  APNSVoipChannelRequest: APNSVoipChannelRequest | undefined;

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
export interface UpdateApnsVoipChannelResponse {
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
export interface UpdateApnsVoipSandboxChannelRequest {
  /**
   * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
   *
   * @public
   */
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest | undefined;

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
export interface UpdateApnsVoipSandboxChannelResponse {
  /**
   * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
   *
   * @public
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * Specifies the default settings for an application.
 *
 * @public
 */
export interface WriteApplicationSettingsRequest {
  /**
   * The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.
   *
   * To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the Campaign resource.
   *
   * @public
   */
  CampaignHook?: CampaignHook | undefined;

  /**
   * Specifies whether to enable application-related alarms in Amazon CloudWatch.
   *
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  EventTaggingEnabled?: boolean | undefined;
  /**
   * The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the Campaign resource or the Journey resource, respectively.
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
   * To override the default quiet time settings for a specific campaign or journey, use the Campaign resource or the Journey resource to define a custom quiet time for the campaign or journey.
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
 * @public
 */
export interface UpdateApplicationSettingsRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the default settings for an application.
   *
   * @public
   */
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsResponse {
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
export interface UpdateBaiduChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
   *
   * @public
   */
  BaiduChannelRequest: BaiduChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateBaiduChannelResponse {
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
export interface UpdateCampaignRequest {
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
   * Specifies the configuration and other settings for a campaign.
   *
   * @public
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
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
export interface UpdateEmailChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the status and settings of the email channel for an application.
   *
   * @public
   */
  EmailChannelRequest: EmailChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEmailChannelResponse {
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
export interface UpdateEmailTemplateRequest {
  /**
   * Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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
export interface UpdateEmailTemplateResponse {
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
export interface UpdateEndpointRequest {
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

  /**
   * Specifies the channel type and other settings for an endpoint.
   *
   * @public
   */
  EndpointRequest: EndpointRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
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
export interface UpdateEndpointsBatchRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
   *
   * @public
   */
  EndpointBatchRequest: EndpointBatchRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointsBatchResponse {
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
export interface UpdateGcmChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
   *
   * @public
   */
  GCMChannelRequest: GCMChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateGcmChannelResponse {
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
export interface UpdateInAppTemplateRequest {
  /**
   * Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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
export interface UpdateInAppTemplateResponse {
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
export interface UpdateJourneyRequest {
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

  /**
   * Specifies the configuration and other settings for a journey.
   *
   * @public
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyResponse {
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
export interface UpdateJourneyStateRequest {
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

  /**
   * Changes the status of a journey.
   *
   * @public
   */
  JourneyStateRequest: JourneyStateRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyStateResponse {
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
export interface UpdatePushTemplateRequest {
  /**
   * Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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
export interface UpdatePushTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
 *
 * @public
 */
export interface UpdateRecommenderConfigurationShape {
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
export interface UpdateRecommenderConfigurationRequest {
  /**
   * The unique identifier for the recommender model configuration. This identifier is displayed as the **Recommender ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  RecommenderId: string | undefined;

  /**
   * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
   *
   * @public
   */
  UpdateRecommenderConfiguration: UpdateRecommenderConfigurationShape | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderConfigurationResponse {
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
export interface UpdateSegmentRequest {
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

  /**
   * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
   *
   * @public
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSegmentResponse {
  /**
   * Provides information about the configuration, dimension, and other settings for a segment.
   *
   * @public
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * Specifies the status and settings of the SMS channel for an application.
 *
 * @public
 */
export interface SMSChannelRequest {
  /**
   * Specifies whether to enable the SMS channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The identity that you want to display on recipients' devices when they receive messages from the SMS channel.
   *
   * @public
   */
  SenderId?: string | undefined;

  /**
   * The registered short code that you want to use when you send messages through the SMS channel.
   *
   * @public
   */
  ShortCode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSmsChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the status and settings of the SMS channel for an application.
   *
   * @public
   */
  SMSChannelRequest: SMSChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSmsChannelResponse {
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
export interface UpdateSmsTemplateRequest {
  /**
   * Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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
export interface UpdateSmsTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * Specifies which version of a message template to use as the active version of the template.
 *
 * @public
 */
export interface TemplateActiveVersionRequest {
  /**
   * The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the Template Versions resource.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionRequest {
  /**
   * Specifies which version of a message template to use as the active version of the template.
   *
   * @public
   */
  TemplateActiveVersionRequest: TemplateActiveVersionRequest | undefined;

  /**
   * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
   *
   * @public
   */
  TemplateType: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * Specifies the status and settings of the voice channel for an application.
 *
 * @public
 */
export interface VoiceChannelRequest {
  /**
   * Specifies whether to enable the voice channel for the application.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceChannelRequest {
  /**
   * The unique identifier for the application. This identifier is displayed as the **Project ID** on the Amazon Pinpoint console.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specifies the status and settings of the voice channel for an application.
   *
   * @public
   */
  VoiceChannelRequest: VoiceChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceChannelResponse {
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
export interface UpdateVoiceTemplateRequest {
  /**
   * Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.
   *
   * If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

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
export interface UpdateVoiceTemplateResponse {
  /**
   * Provides information about an API request or response.
   *
   * @public
   */
  MessageBody: MessageBody | undefined;
}

/**
 * Verify OTP message request.
 *
 * @public
 */
export interface VerifyOTPMessageRequestParameters {
  /**
   * The destination identity to send OTP to.
   *
   * @public
   */
  DestinationIdentity: string | undefined;

  /**
   * The OTP the end user provided for verification.
   *
   * @public
   */
  Otp: string | undefined;

  /**
   * The reference identifier provided when the OTP was previously sent.
   *
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface VerifyOTPMessageRequest {
  /**
   * The unique ID of your Amazon Pinpoint application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Verify OTP message request.
   *
   * @public
   */
  VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters | undefined;
}

/**
 * Verify OTP Message Response.
 *
 * @public
 */
export interface VerificationResponse {
  /**
   * Specifies whether the OTP is valid or not.
   *
   * @public
   */
  Valid?: boolean | undefined;
}

/**
 * @public
 */
export interface VerifyOTPMessageResponse {
  /**
   * Verify OTP Message Response.
   *
   * @public
   */
  VerificationResponse: VerificationResponse | undefined;
}
