// smithy-typescript generated code
import type {
  BillingMode,
  DashboardStatus,
  DashboardType,
  DeliveryStatus,
  DestinationType,
  EventCategory,
  EventCategoryAggregation,
  EventDataStoreStatus,
  FederationStatus,
  ImportFailureStatus,
  ImportStatus,
  InsightsMetricDataType,
  InsightType,
  ListInsightsDataDimensionKey,
  ListInsightsDataType,
  LookupAttributeKey,
  MaxEventSize,
  QueryStatus,
  ReadWriteType,
  RefreshScheduleFrequencyUnit,
  RefreshScheduleStatus,
  SourceEventCategory,
  Template,
  Type,
} from "./enums";

/**
 * A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, dashboard, or channel.
 *
 * @public
 */
export interface Tag {
  /**
   * The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies the tags to add to a trail, event data store, dashboard, or channel.
 *
 * @public
 */
export interface AddTagsRequest {
  /**
   * Specifies the ARN of the trail, event data store, dashboard, or channel to which one or more tags will be added.
   *
   * The format of a trail ARN is: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * The format of an event data store ARN is: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * The format of a dashboard ARN is: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * The format of a channel ARN is: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Contains a list of tags, up to a limit of 50
   *
   * @public
   */
  TagsList: Tag[] | undefined;
}

/**
 * Returns the objects or data if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface AddTagsResponse {}

/**
 * A single selector statement in an advanced event selector.
 *
 * @public
 */
export interface AdvancedFieldSelector {
  /**
   * A field in a CloudTrail event record on which to filter events to be logged. For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or events outside of Amazon Web Services, the field is used only for selecting events as filtering is not supported.
   *
   * For more information, see [AdvancedFieldSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedFieldSelector.html) in the *CloudTrail API Reference*.
   *
   * > **Note:** Selectors don't support the use of wildcards like `*` . To match multiple values with a single condition, you may use `StartsWith`, `EndsWith`, `NotStartsWith`, or `NotEndsWith` to explicitly match the beginning or end of the event field.
   *
   * @public
   */
  Field: string | undefined;

  /**
   * An operator that includes events that match the exact value of the event record field specified as the value of `Field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.
   *
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * An operator that includes events that match the first few characters of the event record field specified as the value of `Field`.
   *
   * @public
   */
  StartsWith?: string[] | undefined;

  /**
   * An operator that includes events that match the last few characters of the event record field specified as the value of `Field`.
   *
   * @public
   */
  EndsWith?: string[] | undefined;

  /**
   * An operator that excludes events that match the exact value of the event record field specified as the value of `Field`.
   *
   * @public
   */
  NotEquals?: string[] | undefined;

  /**
   * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field`.
   *
   * @public
   */
  NotStartsWith?: string[] | undefined;

  /**
   * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field`.
   *
   * @public
   */
  NotEndsWith?: string[] | undefined;
}

/**
 * Advanced event selectors let you create fine-grained selectors for CloudTrail management, data, and network activity events. They help you control costs by logging only those events that are important to you. For more information about configuring advanced event selectors, see the [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html), [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html), and [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) topics in the *CloudTrail User Guide*.
 *
 * You cannot apply both event selectors and advanced event selectors to a trail.
 *
 * For information about configurable advanced event selector fields, see [AdvancedEventSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html) in the *CloudTrail API Reference*.
 *
 * @public
 */
export interface AdvancedEventSelector {
  /**
   * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Contains all selector statements in an advanced event selector.
   *
   * @public
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

/**
 * An object that contains configuration settings for aggregating events.
 *
 * @public
 */
export interface AggregationConfiguration {
  /**
   * A list of aggregation templates that can be used to configure event aggregation.
   *
   * @public
   */
  Templates: Template[] | undefined;

  /**
   * Specifies the event category for which aggregation should be performed.
   *
   * @public
   */
  EventCategory: EventCategoryAggregation | undefined;
}

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of an event data store on which the specified query is running.
   *
   * @deprecated EventDataStore is no longer required by CancelQueryRequest.
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * The ID of the query that you want to cancel. The `QueryId` comes from the response of a `StartQuery` operation.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface CancelQueryResponse {
  /**
   * The ID of the canceled query.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * Shows the status of a query after a `CancelQuery` request. Typically, the values shown are either `RUNNING` or `CANCELLED`.
   *
   * @public
   */
  QueryStatus: QueryStatus | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * Contains information about a returned CloudTrail channel.
 *
 * @public
 */
export interface Channel {
  /**
   * The Amazon Resource Name (ARN) of a channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The name of the CloudTrail channel. For service-linked channels, the name is `aws-service-channel/service-name/custom-suffix` where `service-name` represents the name of the Amazon Web Services service that created the channel and `custom-suffix` represents the suffix created by the Amazon Web Services service.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains information about the destination receiving events.
 *
 * @public
 */
export interface Destination {
  /**
   * The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is `EVENT_DATA_STORE`. For service-linked channels, the value is `AWS_SERVICE`.
   *
   * @public
   */
  Type: DestinationType | undefined;

  /**
   * For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel. For service-linked channels, the location is the name of the Amazon Web Services service.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * The name of the channel.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.
   *
   * A source can be either `Custom` for all valid non-Amazon Web Services events, or the name of a partner event source. For information about the source names for available partners, see [Additional information about integration partners](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information) in the CloudTrail User Guide.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * One or more event data stores to which events arriving through a channel will be logged.
   *
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) of the new channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The name of the new channel.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The partner or external event source name.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The event data stores that log the events arriving through the channel.
   *
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Specifies the frequency for a dashboard refresh schedule.
 *
 * For a custom dashboard, you can schedule a refresh for every 1, 6, 12, or 24 hours, or every day.
 *
 * @public
 */
export interface RefreshScheduleFrequency {
  /**
   * The unit to use for the refresh.
   *
   * For custom dashboards, the unit can be `HOURS` or `DAYS`.
   *
   * For the Highlights dashboard, the `Unit` must be `HOURS`.
   *
   * @public
   */
  Unit?: RefreshScheduleFrequencyUnit | undefined;

  /**
   * The value for the refresh schedule.
   *
   * For custom dashboards, the following values are valid when the unit is `HOURS`: `1`, `6`, `12`, `24`
   *
   * For custom dashboards, the only valid value when the unit is `DAYS` is `1`.
   *
   * For the Highlights dashboard, the `Value` must be `6`.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The schedule for a dashboard refresh.
 *
 * @public
 */
export interface RefreshSchedule {
  /**
   * The frequency at which you want the dashboard refreshed.
   *
   * @public
   */
  Frequency?: RefreshScheduleFrequency | undefined;

  /**
   * Specifies whether the refresh schedule is enabled. Set the value to `ENABLED` to enable the refresh schedule, or to `DISABLED` to turn off the refresh schedule.
   *
   * @public
   */
  Status?: RefreshScheduleStatus | undefined;

  /**
   * The time of day in UTC to run the schedule; for hourly only refer to minutes; default is 00:00.
   *
   * @public
   */
  TimeOfDay?: string | undefined;
}

/**
 * Contains information about a widget on a CloudTrail Lake dashboard.
 *
 * @public
 */
export interface RequestWidget {
  /**
   * The query statement for the widget. For custom dashboard widgets, you can query across multiple event data stores as long as all event data stores exist in your account.
   *
   * > **Note:** When a query uses `?` with `eventTime`, `?` must be surrounded by single quotes as follows: `'?'`.
   *
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * The optional query parameters. The following query parameters are valid: `$StartTime$`, `$EndTime$`, and `$Period$`.
   *
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * The view properties for the widget. For more information about view properties, see [View properties for widgets](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html) in the *CloudTrail User Guide*.
   *
   * @public
   */
  ViewProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * The name of the dashboard. The name must be unique to your account.
   *
   * To create the Highlights dashboard, the name must be `AWSCloudTrail-Highlights`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The refresh schedule configuration for the dashboard.
   *
   * To create the Highlights dashboard, you must set a refresh schedule and set the `Status` to `ENABLED`. The `Unit` for the refresh schedule must be `HOURS` and the `Value` must be `6`.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.
   *
   * You do not need to specify widgets for the Highlights dashboard.
   *
   * @public
   */
  Widgets?: RequestWidget[] | undefined;
}

/**
 * A widget on a CloudTrail Lake dashboard.
 *
 * @public
 */
export interface Widget {
  /**
   * The query alias used to identify the query for the widget.
   *
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * The SQL query statement for the widget.
   *
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * The query parameters for the widget.
   *
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * The view properties for the widget. For more information about view properties, see [View properties for widgets](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html) in the *CloudTrail User Guide*..
   *
   * @public
   */
  ViewProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * The ARN for the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The name of the dashboard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The dashboard type.
   *
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * An array of widgets for the dashboard.
   *
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * The refresh schedule for the dashboard, if configured.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * Indicates whether termination protection is enabled for the dashboard.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEventDataStoreRequest {
  /**
   * The name of the event data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.
   *
   * For more information about how to use advanced event selectors to log CloudTrail events, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
   *
   * For more information about how to use advanced event selectors to include Config configuration items in your event data store, see [Create an event data store for Config configuration items](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-eds-cli.html#lake-cli-create-eds-config) in the CloudTrail User Guide.
   *
   * For more information about how to use advanced event selectors to include events outside of Amazon Web Services events in your event data store, see [Create an integration to log events from outside Amazon Web Services](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-integrations-cli.html#lake-cli-create-integration) in the CloudTrail User Guide.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Specifies whether an event data store collects events logged for an organization in Organizations.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period of the event data store, in days. If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING`, you can set a retention period of up to 3653 days, the equivalent of 10 years. If `BillingMode` is set to `FIXED_RETENTION_PRICING`, you can set a retention period of up to 2557 days, the equivalent of seven years.
   *
   * CloudTrail Lake determines whether to retain an event by checking if the `eventTime` of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the `eventTime` is older than 90 days.
   *
   * > **Note:** If you plan to copy trail events to this event data store, we recommend that you consider both the age of the events that you want to copy as well as how long you want to keep the copied events in your event data store. For example, if you copy trail events that are 5 years old and specify a retention period of 7 years, the event data store will retain those events for two years.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by `alias/`, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * > **Important:** Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.
   *
   * CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * Examples:
   *
   * - `alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - `12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the event data store should start ingesting live events. The default is true.
   *
   * @public
   */
  StartIngestion?: boolean | undefined;

  /**
   * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
   *
   * The following are the possible values:
   *
   * - `EXTENDABLE_RETENTION_PRICING` - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.
   * - `FIXED_RETENTION_PRICING` - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.
   *
   * The default value is `EXTENDABLE_RETENTION_PRICING`.
   *
   * For more information about CloudTrail pricing, see [CloudTrail Pricing](http://aws.amazon.com/cloudtrail/pricing/) and [Managing CloudTrail Lake costs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html).
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface CreateEventDataStoreResponse {
  /**
   * The ARN of the event data store.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The name of the event data store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of event data store creation.
   *
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * The advanced event selectors that were used to select the events for the data store.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Indicates whether the event data store collects events from all Regions, or only from the Region in which it was created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Indicates whether an event data store is collecting logged events for an organization in Organizations.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period of an event data store, in days.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Indicates whether termination protection is enabled for the event data store.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * The timestamp that shows when the event data store was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp that shows when an event data store was updated, if applicable. `UpdatedTimestamp` is always either the same or newer than the time shown in `CreatedTimestamp`.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The billing mode for the event data store.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * Specifies the settings for each trail.
 *
 * @public
 */
export interface CreateTrailRequest {
  /**
   * Specifies the name of the trail. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
   * - Start with a letter or number, and end with a letter or number
   * - Be between 3 and 128 characters
   * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
   * - Not be in IP address format (for example, 192.168.5.4)
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files. For information about bucket naming rules, see [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files). The maximum length is 200 characters.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
   *
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files. Setting this value to `true` only delivers global service events to the trail if the trail is multi-Region or if the trail's home Region is the partition leader Region (for example, us-east-1).
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Specifies whether the trail is created in the current Region or in all Regions. The default is false, which creates a trail only in the Region where you are signed in. As a best practice, consider creating trails that log events in all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * Specifies whether log file integrity validation is enabled. The default is false.
   *
   * > **Note:** When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
   *
   * @public
   */
  EnableLogFileValidation?: boolean | undefined;

  /**
   * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. You must use a log group that exists in your account.
   *
   * Not required unless you specify `CloudWatchLogsRoleArn`.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Specifies the KMS key ID to use to encrypt the logs and digest files delivered by CloudTrail. The value can be an alias name prefixed by `alias/`, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * Examples:
   *
   * - `alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - `12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * Specifies whether recursive logging is enabled for the trail. If you set `RecursiveLogging` to `false`, CloudTrail suppresses events generated by CloudTrail when it delivers log files to your trail's destinations, including Amazon S3 and CloudWatch Logs. The default value is `true`.
   *
   * @public
   */
  RecursiveLogging?: boolean | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface CreateTrailResponse {
  /**
   * Specifies the name of the trail.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files).
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * This field is no longer in use. Use `SnsTopicARN`.
   *
   * @deprecated deprecated.
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:
   *
   * `arn:aws:sns:us-east-2:123456789012:MyTopic`
   *
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files. Setting this value to `true` only delivers global service events to the trail if the trail is multi-Region or if the trail's home Region is the partition leader Region (for example, us-east-1).
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Specifies whether the trail exists in one Region or in all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * Specifies the ARN of the trail that was created. The format of a trail ARN is:
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Specifies whether log file integrity validation is enabled.
   *
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the trail is an organization trail.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * Specifies whether recursive logging is enabled for the trail.
   *
   * @public
   */
  RecursiveLogging?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The ARN or the `UUID` value of the channel that you want to delete.
   *
   * @public
   */
  Channel: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelResponse {}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * The name or ARN for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {}

/**
 * @public
 */
export interface DeleteEventDataStoreRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of the event data store to delete.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDataStoreResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel you're deleting the resource-based policy from.
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * The request that specifies the name of a trail to delete.
 *
 * @public
 */
export interface DeleteTrailRequest {
  /**
   * Specifies the name or the CloudTrail ARN of the trail to be deleted. The following is the format of a trail ARN. `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface DeleteTrailResponse {}

/**
 * Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator.
 *
 * @public
 */
export interface DeregisterOrganizationDelegatedAdminRequest {
  /**
   * A delegated administrator account ID. This is a member account in an organization that is currently designated as a delegated administrator.
   *
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * Returns the following response if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface DeregisterOrganizationDelegatedAdminResponse {}

/**
 * @public
 */
export interface DescribeQueryRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of an event data store on which the specified query was run.
   *
   * @deprecated EventDataStore is no longer required by DescribeQueryRequest.
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * The query ID.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The alias that identifies a query template.
   *
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * The ID of the dashboard refresh.
   *
   * @public
   */
  RefreshId?: string | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.
 *
 * @public
 */
export interface QueryStatisticsForDescribeQuery {
  /**
   * The number of events that matched a query.
   *
   * @public
   */
  EventsMatched?: number | undefined;

  /**
   * The number of events that the query scanned in the event data store.
   *
   * @public
   */
  EventsScanned?: number | undefined;

  /**
   * The total bytes that the query scanned in the event data store. This value matches the number of bytes for which your account is billed for the query, unless the query is still running.
   *
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * The query's run time, in milliseconds.
   *
   * @public
   */
  ExecutionTimeInMillis?: number | undefined;

  /**
   * The creation time of the query.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * The ID of the query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The SQL code of a query.
   *
   * @public
   */
  QueryString?: string | undefined;

  /**
   * The status of a query. Values for `QueryStatus` include `QUEUED`, `RUNNING`, `FINISHED`, `FAILED`, `TIMED_OUT`, or `CANCELLED`
   *
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * Metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.
   *
   * @public
   */
  QueryStatistics?: QueryStatisticsForDescribeQuery | undefined;

  /**
   * The error message returned if a query failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The URI for the S3 bucket where CloudTrail delivered query results, if applicable.
   *
   * @public
   */
  DeliveryS3Uri?: string | undefined;

  /**
   * The delivery status.
   *
   * @public
   */
  DeliveryStatus?: DeliveryStatus | undefined;

  /**
   * The prompt used for a generated query. For information about generated queries, see [Create CloudTrail Lake queries from natural language prompts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html) in the *CloudTrail* user guide.
   *
   * @public
   */
  Prompt?: string | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * Returns information about the trail.
 *
 * @public
 */
export interface DescribeTrailsRequest {
  /**
   * Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * If an empty list is specified, information for the trail in the current Region is returned.
   *
   * - If an empty list is specified and `IncludeShadowTrails` is false, then information for all trails in the current Region is returned.
   * - If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current Region and any associated shadow trails in other Regions is returned.
   *
   * > **Note:** If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current Region and current account. To return information about a trail in another Region, you must specify its trail ARN.
   *
   * @public
   */
  trailNameList?: string[] | undefined;

  /**
   * Specifies whether to include shadow trails in the response. A shadow trail is the replication in a Region of a trail that was created in a different Region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and Region replication trails will not be returned. The default is true.
   *
   * @public
   */
  includeShadowTrails?: boolean | undefined;
}

/**
 * The settings for a trail.
 *
 * @public
 */
export interface Trail {
  /**
   * Name of the trail set by calling CreateTrail. The maximum length is 128 characters.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Name of the Amazon S3 bucket into which CloudTrail delivers your trail files. See [Amazon S3 Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files). The maximum length is 200 characters.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * This field is no longer in use. Use `SnsTopicARN`.
   *
   * @deprecated deprecated.
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The following is the format of a topic ARN.
   *
   * `arn:aws:sns:us-east-2:123456789012:MyTopic`
   *
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * Set to **True** to include Amazon Web Services API calls from Amazon Web Services global services such as IAM. Otherwise, **False**. Setting this value to `true` only delivers global service events to the trail if the trail is multi-Region or if the trail's home Region is the partition leader Region (for example, us-east-1).
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Specifies whether the trail exists only in one Region or exists in all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * The Region in which the trail was created.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * Specifies the ARN of the trail. The following is the format of a trail ARN.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Specifies whether log file validation is enabled.
   *
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Specifies the KMS key ID that encrypts the logs and digest files delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies if the trail has custom event selectors.
   *
   * @public
   */
  HasCustomEventSelectors?: boolean | undefined;

  /**
   * Specifies whether a trail has insight types specified in an `InsightSelector` list.
   *
   * @public
   */
  HasInsightSelectors?: boolean | undefined;

  /**
   * Specifies whether the trail is an organization trail.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * Specifies whether recursive logging is enabled for the trail. If you set `RecursiveLogging` to `false`, CloudTrail suppresses events generated by CloudTrail when it delivers log files to your trail's destinations, including Amazon S3 and CloudWatch Logs. The default value is `true`.
   *
   * @public
   */
  RecursiveLogging?: boolean | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface DescribeTrailsResponse {
  /**
   * The list of trail objects. Trail objects with string values are only returned if values for the objects exist in a trail's configuration. For example, `SNSTopicName` and `SNSTopicARN` are only returned in results if a trail is configured to send SNS notifications. Similarly, `KMSKeyId` only appears in results if a trail's log files are encrypted with KMS customer managed keys.
   *
   * @public
   */
  trailList?: Trail[] | undefined;
}

/**
 * @public
 */
export interface DisableFederationRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store for which you want to disable Lake query federation.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface DisableFederationResponse {
  /**
   * The ARN of the event data store for which you disabled Lake query federation.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The federation status.
   *
   * @public
   */
  FederationStatus?: FederationStatus | undefined;
}

/**
 * @public
 */
export interface EnableFederationRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store for which you want to enable Lake query federation.
   *
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * The ARN of the federation role to use for the event data store. Amazon Web Services services like Lake Formation use this federation role to access data for the federated event data store. The federation role must exist in your account and provide the [required minimum permissions](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions-role).
   *
   * @public
   */
  FederationRoleArn: string | undefined;
}

/**
 * @public
 */
export interface EnableFederationResponse {
  /**
   * The ARN of the event data store for which you enabled Lake query federation.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The federation status.
   *
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * The ARN of the federation role.
   *
   * @public
   */
  FederationRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store that you want to query. You can only specify one event data store.
   *
   * @public
   */
  EventDataStores: string[] | undefined;

  /**
   * The prompt that you want to use to generate the query. The prompt must be in English. For example prompts, see [Example prompts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html#lake-query-generator-examples) in the *CloudTrail* user guide.
   *
   * @public
   */
  Prompt: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryResponse {
  /**
   * The SQL query statement generated from the prompt.
   *
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * An alias that identifies the prompt. When you run the `StartQuery` operation, you can pass in either the `QueryAlias` or `QueryStatement` parameter.
   *
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * The ARN or `UUID` of a channel.
   *
   * @public
   */
  Channel: string | undefined;
}

/**
 * A table showing information about the most recent successful and failed attempts to ingest events.
 *
 * @public
 */
export interface IngestionStatus {
  /**
   * The time stamp of the most recent successful ingestion of events for the channel.
   *
   * @public
   */
  LatestIngestionSuccessTime?: Date | undefined;

  /**
   * The event ID of the most recent successful ingestion of events.
   *
   * @public
   */
  LatestIngestionSuccessEventID?: string | undefined;

  /**
   * The error code for the most recent failure to ingest events.
   *
   * @public
   */
  LatestIngestionErrorCode?: string | undefined;

  /**
   * The time stamp of the most recent attempt to ingest events on the channel.
   *
   * @public
   */
  LatestIngestionAttemptTime?: Date | undefined;

  /**
   * The event ID of the most recent attempt to ingest events.
   *
   * @public
   */
  LatestIngestionAttemptEventID?: string | undefined;
}

/**
 * Contains configuration information about the channel.
 *
 * @public
 */
export interface SourceConfig {
  /**
   * Specifies whether the channel applies to a single Region or to all Regions.
   *
   * @public
   */
  ApplyToAllRegions?: boolean | undefined;

  /**
   * The advanced event selectors that are configured for the channel.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * The ARN of an channel returned by a `GetChannel` request.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The name of the CloudTrail channel. For service-linked channels, the name is `aws-service-channel/service-name/custom-suffix` where `service-name` represents the name of the Amazon Web Services service that created the channel and `custom-suffix` represents the suffix generated by the Amazon Web Services service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The source for the CloudTrail channel.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Provides information about the advanced event selectors configured for the channel, and whether the channel applies to all Regions or a single Region.
   *
   * @public
   */
  SourceConfig?: SourceConfig | undefined;

  /**
   * The destinations for the channel. For channels created for integrations, the destinations are the event data stores that log events arriving through the channel. For service-linked channels, the destination is the Amazon Web Services service that created the service-linked channel to receive events.
   *
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * A table showing information about the most recent successful and failed attempts to ingest events.
   *
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;
}

/**
 * @public
 */
export interface GetDashboardRequest {
  /**
   * The name or ARN for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardResponse {
  /**
   * The ARN for the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The type of dashboard.
   *
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * The status of the dashboard.
   *
   * @public
   */
  Status?: DashboardStatus | undefined;

  /**
   * An array of widgets for the dashboard.
   *
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * The refresh schedule for the dashboard, if configured.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * The timestamp that shows when the dashboard was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp that shows when the dashboard was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The ID of the last dashboard refresh.
   *
   * @public
   */
  LastRefreshId?: string | undefined;

  /**
   * Provides information about failures for the last scheduled refresh.
   *
   * @public
   */
  LastRefreshFailureReason?: string | undefined;

  /**
   * Indicates whether termination protection is enabled for the dashboard.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEventConfigurationRequest {
  /**
   * The name of the trail for which you want to retrieve event configuration settings.
   *
   * @public
   */
  TrailName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which you want to retrieve event configuration settings.
   *
   * @public
   */
  EventDataStore?: string | undefined;
}

/**
 * An object that contains information types to be included in CloudTrail enriched events.
 *
 * @public
 */
export interface ContextKeySelector {
  /**
   * Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * A list of keys defined by Type to be included in CloudTrail enriched events.
   *
   * @public
   */
  Equals: string[] | undefined;
}

/**
 * @public
 */
export interface GetEventConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the trail for which the event configuration settings are returned.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which the event configuration settings are returned.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The maximum allowed size for events stored in the specified event data store.
   *
   * @public
   */
  MaxEventSize?: MaxEventSize | undefined;

  /**
   * The list of context key selectors that are configured for the event data store.
   *
   * @public
   */
  ContextKeySelectors?: ContextKeySelector[] | undefined;

  /**
   * The list of aggregation configurations that are configured for the trail.
   *
   * @public
   */
  AggregationConfigurations?: AggregationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetEventDataStoreRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store about which you want information.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * Contains information about a partition key for an event data store.
 *
 * @public
 */
export interface PartitionKey {
  /**
   * The name of the partition key.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the partition key. For example, `bigint` or `string`.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface GetEventDataStoreResponse {
  /**
   * The event data store Amazon Resource Number (ARN).
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The name of the event data store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of an event data store.
   *
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * The advanced event selectors used to select events for the data store.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Indicates whether the event data store includes events from all Regions, or only from the Region in which it was created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Indicates whether an event data store is collecting logged events for an organization in Organizations.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period of the event data store, in days.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Indicates that termination protection is enabled.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * The timestamp of the event data store's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * Shows the time that an event data store was updated, if applicable. `UpdatedTimestamp` is always either the same or newer than the time shown in `CreatedTimestamp`.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The billing mode for the event data store.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Indicates the [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) status. The status is `ENABLED` if Lake query federation is enabled, or `DISABLED` if Lake query federation is disabled. You cannot delete an event data store if the `FederationStatus` is `ENABLED`.
   *
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
   *
   * @public
   */
  FederationRoleArn?: string | undefined;

  /**
   * The partition keys for the event data store. To improve query performance and efficiency, CloudTrail Lake organizes event data into partitions based on values derived from partition keys.
   *
   * @public
   */
  PartitionKeys?: PartitionKey[] | undefined;
}

/**
 * @public
 */
export interface GetEventSelectorsRequest {
  /**
   * Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
   * - Start with a letter or number, and end with a letter or number
   * - Be between 3 and 128 characters
   * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
   * - Not be in IP address format (for example, 192.168.5.4)
   *
   * If you specify a trail ARN, it must be in the format:
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailName: string | undefined;
}

/**
 * You can configure the `DataResource` in an `EventSelector` to log data events for the following three resource types:
 *
 * - `AWS::DynamoDB::Table`
 * - `AWS::Lambda::Function`
 * - `AWS::S3::Object`
 *
 * To log data events for all other resource types including objects stored in [directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html), you must use [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html). You must also use `AdvancedEventSelectors` if you want to filter on the `eventName` field.
 *
 * Configure the `DataResource` to specify the resource type and resource ARNs for which you want to log data events.
 *
 * > **Note:** The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.
 *
 * The following example demonstrates how logging works when you configure logging of all data events for a general purpose bucket named `amzn-s3-demo-bucket1`. In this example, the CloudTrail user specified an empty prefix, and the option to log both `Read` and `Write` data events.
 *
 * 1. A user uploads an image file to `amzn-s3-demo-bucket1`.
 * 2. The `PutObject` API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.
 * 3. A user uploads an object to an Amazon S3 bucket named `arn:aws:s3:::amzn-s3-demo-bucket1`.
 * 4. The `PutObject` API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.
 *
 * The following example demonstrates how logging works when you configure logging of Lambda data events for a Lambda function named *MyLambdaFunction*, but not for all Lambda functions.
 *
 * 1. A user runs a script that includes a call to the *MyLambdaFunction* function and the *MyOtherLambdaFunction* function.
 * 2. The `Invoke` API operation on *MyLambdaFunction* is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for *MyLambdaFunction*, any invocations of that function are logged. The trail processes and logs the event.
 * 3. The `Invoke` API operation on *MyOtherLambdaFunction* is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the `Invoke` operation for *MyOtherLambdaFunction* does not match the function specified for the trail. The trail doesn’t log the event.
 *
 * @public
 */
export interface DataResource {
  /**
   * The resource type in which you want to log data events. You can specify the following *basic* event selector resource types:
   *
   * - `AWS::DynamoDB::Table`
   * - `AWS::Lambda::Function`
   * - `AWS::S3::Object`
   *
   * Additional resource types are available through *advanced* event selectors. For more information, see [AdvancedEventSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified resource type.
   *
   * - To log data events for all objects in all S3 buckets in your Amazon Web Services account, specify the prefix as `arn:aws:s3`.
   *
   *   > **Note:** This also enables logging of data event activity performed by any user or role in your Amazon Web Services account, even if that activity is performed on a bucket that belongs to another Amazon Web Services account.
   * - To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as `arn:aws:s3:::amzn-s3-demo-bucket1/`. The trail logs data events for all objects in this S3 bucket.
   * - To log data events for specific objects, specify the S3 bucket and object prefix such as `arn:aws:s3:::amzn-s3-demo-bucket1/example-images`. The trail logs data events for objects in this S3 bucket that match the prefix.
   * - To log data events for all Lambda functions in your Amazon Web Services account, specify the prefix as `arn:aws:lambda`.
   *
   *   > **Note:** This also enables logging of `Invoke` activity performed by any user or role in your Amazon Web Services account, even if that activity is performed on a function that belongs to another Amazon Web Services account.
   * - To log data events for a specific Lambda function, specify the function ARN.
   *
   *   > **Note:** Lambda function ARNs are exact. For example, if you specify a function ARN *arn:aws:lambda:us-west-2:111111111111:function:helloworld*, data events will only be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld*. They will not be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld2*.
   * - To log data events for all DynamoDB tables in your Amazon Web Services account, specify the prefix as `arn:aws:dynamodb`.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
 *
 * You can configure up to five event selectors for a trail.
 *
 * You cannot apply both event selectors and advanced event selectors to a trail.
 *
 * @public
 */
export interface EventSelector {
  /**
   * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 `GetConsoleOutput` is a read-only API operation and `RunInstances` is a write-only API operation.
   *
   * By default, the value is `All`.
   *
   * @public
   */
  ReadWriteType?: ReadWriteType | undefined;

  /**
   * Specify if you want your event selector to include management events for your trail.
   *
   * For more information, see [Management Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) in the *CloudTrail User Guide*.
   *
   * By default, the value is `true`.
   *
   * The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same Region. For more information about CloudTrail pricing, see [CloudTrail Pricing](http://aws.amazon.com/cloudtrail/pricing/).
   *
   * @public
   */
  IncludeManagementEvents?: boolean | undefined;

  /**
   * CloudTrail supports data event logging for Amazon S3 objects in standard S3 buckets, Lambda functions, and Amazon DynamoDB tables with basic event selectors. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
   *
   * For more information, see [Data Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Limits in CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the *CloudTrail User Guide*.
   *
   * > **Note:** To log data events for all other resource types including objects stored in [directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html), you must use [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html). You must also use `AdvancedEventSelectors` if you want to filter on the `eventName` field.
   *
   * @public
   */
  DataResources?: DataResource[] | undefined;

  /**
   * An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out Key Management Service or Amazon RDS Data API events by containing `kms.amazonaws.com` or `rdsdata.amazonaws.com`. By default, `ExcludeManagementEventSources` is empty, and KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in Regions that support the event source.
   *
   * @public
   */
  ExcludeManagementEventSources?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEventSelectorsResponse {
  /**
   * The specified trail ARN that has the event selectors.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * The event selectors that are configured for the trail.
   *
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * The advanced event selectors that are configured for the trail.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface GetImportRequest {
  /**
   * The ID for the import.
   *
   * @public
   */
  ImportId: string | undefined;
}

/**
 * The settings for the source S3 bucket.
 *
 * @public
 */
export interface S3ImportSource {
  /**
   * The URI for the source S3 bucket.
   *
   * @public
   */
  S3LocationUri: string | undefined;

  /**
   * The Region associated with the source S3 bucket.
   *
   * @public
   */
  S3BucketRegion: string | undefined;

  /**
   * The IAM ARN role used to access the source S3 bucket.
   *
   * @public
   */
  S3BucketAccessRoleArn: string | undefined;
}

/**
 * The import source.
 *
 * @public
 */
export interface ImportSource {
  /**
   * The source S3 bucket.
   *
   * @public
   */
  S3: S3ImportSource | undefined;
}

/**
 * Provides statistics for the specified `ImportID`. CloudTrail does not update import statistics in real-time. Returned values for parameters such as `EventsCompleted` may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.
 *
 * @public
 */
export interface ImportStatistics {
  /**
   * The number of S3 prefixes found for the import.
   *
   * @public
   */
  PrefixesFound?: number | undefined;

  /**
   * The number of S3 prefixes that completed import.
   *
   * @public
   */
  PrefixesCompleted?: number | undefined;

  /**
   * The number of log files that completed import.
   *
   * @public
   */
  FilesCompleted?: number | undefined;

  /**
   * The number of trail events imported into the event data store.
   *
   * @public
   */
  EventsCompleted?: number | undefined;

  /**
   * The number of failed entries.
   *
   * @public
   */
  FailedEntries?: number | undefined;
}

/**
 * @public
 */
export interface GetImportResponse {
  /**
   * The ID of the import.
   *
   * @public
   */
  ImportId?: string | undefined;

  /**
   * The ARN of the destination event data store.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The source S3 bucket.
   *
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * Used with `EndEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * Used with `StartEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The timestamp of the import's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the import was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Provides statistics for the import. CloudTrail does not update import statistics in real-time. Returned values for parameters such as `EventsCompleted` may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.
   *
   * @public
   */
  ImportStatistics?: ImportStatistics | undefined;
}

/**
 * @public
 */
export interface GetInsightSelectorsRequest {
  /**
   * Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
   * - Start with a letter or number, and end with a letter or number
   * - Be between 3 and 128 characters
   * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
   * - Not be in IP address format (for example, 192.168.5.4)
   *
   * If you specify a trail ARN, it must be in the format:
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * You cannot use this parameter with the `EventDataStore` parameter.
   *
   * @public
   */
  TrailName?: string | undefined;

  /**
   * Specifies the ARN (or ID suffix of the ARN) of the event data store for which you want to get Insights selectors.
   *
   * You cannot use this parameter with the `TrailName` parameter.
   *
   * @public
   */
  EventDataStore?: string | undefined;
}

/**
 * A JSON string that contains a list of Insights types that are logged on a trail or event data store.
 *
 * @public
 */
export interface InsightSelector {
  /**
   * The type of Insights events to log on a trail or event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
   *
   * The `ApiCallRateInsight` Insights type analyzes write-only management API calls or read and write data API calls that are aggregated per minute against a baseline API call volume.
   *
   * The `ApiErrorRateInsight` Insights type analyzes management and data API calls that result in error codes. The error is shown if the API call is unsuccessful.
   *
   * @public
   */
  InsightType?: InsightType | undefined;

  /**
   * Select the event category on which Insights should be enabled.
   *
   * - If EventCategories is not provided, the specified Insights types are enabled on management API calls by default.
   * - If EventCategories is provided, the given event categories will overwrite the existing ones. For example, if a trail already has Insights enabled on management events, and then a PutInsightSelectors request is made with only data events specified in EventCategories, Insights on management events will be disabled.
   *
   * @public
   */
  EventCategories?: SourceEventCategory[] | undefined;
}

/**
 * @public
 */
export interface GetInsightSelectorsResponse {
  /**
   * The Amazon Resource Name (ARN) of a trail for which you want to get Insights selectors.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Contains the Insights types that are enabled on a trail or event data store. It also specifies the event categories on which a particular Insight type is enabled. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.The EventCategory field can specify `Management` or `Data` events or both. For event data store, you can log Insights for management events only.
   *
   * @public
   */
  InsightSelectors?: InsightSelector[] | undefined;

  /**
   * The ARN of the source event data store that enabled Insights events.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The ARN of the destination event data store that logs Insights events.
   *
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store against which the query was run.
   *
   * @deprecated EventDataStore is no longer required by GetQueryResultsRequest.
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * The ID of the query for which you want to get results.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * A token you can use to get the next page of query results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of query results to display on a single page.
   *
   * @public
   */
  MaxQueryResults?: number | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * Metadata about a query, such as the number of results.
 *
 * @public
 */
export interface QueryStatistics {
  /**
   * The number of results returned.
   *
   * @public
   */
  ResultsCount?: number | undefined;

  /**
   * The total number of results returned by a query.
   *
   * @public
   */
  TotalResultsCount?: number | undefined;

  /**
   * The total bytes that the query scanned in the event data store. This value matches the number of bytes for which your account is billed for the query, unless the query is still running.
   *
   * @public
   */
  BytesScanned?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * The status of the query. Values include `QUEUED`, `RUNNING`, `FINISHED`, `FAILED`, `TIMED_OUT`, or `CANCELLED`.
   *
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * Shows the count of query results.
   *
   * @public
   */
  QueryStatistics?: QueryStatistics | undefined;

  /**
   * Contains the individual event results of the query.
   *
   * @public
   */
  QueryResultRows?: Record<string, string>[][] | undefined;

  /**
   * A token you can use to get the next page of query results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The error message returned if a query failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to resource-based policy.
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A JSON-formatted string that contains the resource-based policy attached to the CloudTrail event data store, dashboard, or channel.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * The default resource-based policy that is automatically generated for the delegated administrator of an Organizations organization. This policy will be evaluated in tandem with any policy you submit for the resource. For more information about this policy, see [Default resource policy for delegated administrators](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html#cloudtrail-lake-organizations-eds-rbp).
   *
   * @public
   */
  DelegatedAdminResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetTrailRequest {
  /**
   * The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTrailResponse {
  /**
   * The settings for a trail.
   *
   * @public
   */
  Trail?: Trail | undefined;
}

/**
 * The name of a trail about which you want the current status.
 *
 * @public
 */
export interface GetTrailStatusRequest {
  /**
   * Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another Region), you must specify its ARN.
   *
   * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * > **Note:** If the trail is an organization trail and you are a member account in the organization in Organizations, you must provide the full ARN of that trail, and not just the name.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface GetTrailStatusResponse {
  /**
   * Whether the CloudTrail trail is currently logging Amazon Web Services API calls.
   *
   * @public
   */
  IsLogging?: boolean | undefined;

  /**
   * Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files to the designated bucket. For more information, see [Error Responses](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html) in the Amazon S3 API Reference.
   *
   * > **Note:** This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, fix the [bucket policy](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html) so that CloudTrail can write to the bucket; or create a new bucket and call `UpdateTrail` to specify the new bucket.
   *
   * @public
   */
  LatestDeliveryError?: string | undefined;

  /**
   * Displays any Amazon SNS error that CloudTrail encountered when attempting to send a notification. For more information about Amazon SNS errors, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/welcome.html).
   *
   * @public
   */
  LatestNotificationError?: string | undefined;

  /**
   * Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.
   *
   * @public
   */
  LatestDeliveryTime?: Date | undefined;

  /**
   * Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.
   *
   * @public
   */
  LatestNotificationTime?: Date | undefined;

  /**
   * Specifies the most recent date and time when CloudTrail started recording API calls for an Amazon Web Services account.
   *
   * @public
   */
  StartLoggingTime?: Date | undefined;

  /**
   * Specifies the most recent date and time when CloudTrail stopped recording API calls for an Amazon Web Services account.
   *
   * @public
   */
  StopLoggingTime?: Date | undefined;

  /**
   * Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.
   *
   * @public
   */
  LatestCloudWatchLogsDeliveryError?: string | undefined;

  /**
   * Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.
   *
   * @public
   */
  LatestCloudWatchLogsDeliveryTime?: Date | undefined;

  /**
   * Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.
   *
   * @public
   */
  LatestDigestDeliveryTime?: Date | undefined;

  /**
   * Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest file to the designated bucket. For more information, see [Error Responses](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html) in the Amazon S3 API Reference.
   *
   * > **Note:** This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, fix the [bucket policy](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html) so that CloudTrail can write to the bucket; or create a new bucket and call `UpdateTrail` to specify the new bucket.
   *
   * @public
   */
  LatestDigestDeliveryError?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  LatestDeliveryAttemptTime?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  LatestNotificationAttemptTime?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  LatestNotificationAttemptSucceeded?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  LatestDeliveryAttemptSucceeded?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  TimeLoggingStarted?: string | undefined;

  /**
   * This field is no longer in use.
   *
   * @public
   */
  TimeLoggingStopped?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The maximum number of CloudTrail channels to display on a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * The list of channels in the account.
   *
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * Specify a name prefix to filter on.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Specify a dashboard type to filter on: `CUSTOM` or `MANAGED`.
   *
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * A token you can use to get the next page of dashboard results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of dashboards to display on a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information about a CloudTrail Lake dashboard.
 *
 * @public
 */
export interface DashboardDetail {
  /**
   * The ARN for the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The type of dashboard.
   *
   * @public
   */
  Type?: DashboardType | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * Contains information about dashboards in the account, in the current Region that match the applied filters.
   *
   * @public
   */
  Dashboards?: DashboardDetail[] | undefined;

  /**
   * A token you can use to get the next page of dashboard results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventDataStoresRequest {
  /**
   * A token you can use to get the next page of event data store results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of event data stores to display on a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account. To select events for an event data store, use [advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-concepts.html#adv-event-selectors).
 *
 * @public
 */
export interface EventDataStore {
  /**
   * The ARN of the event data store.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The name of the event data store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates whether the event data store is protected from termination.
   *
   * @deprecated TerminationProtectionEnabled is no longer returned by ListEventDataStores.
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * The status of an event data store.
   *
   * @deprecated Status is no longer returned by ListEventDataStores.
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * The advanced event selectors that were used to select events for the data store.
   *
   * @deprecated AdvancedEventSelectors is no longer returned by ListEventDataStores.
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Indicates whether the event data store includes events from all Regions, or only from the Region in which it was created.
   *
   * @deprecated MultiRegionEnabled is no longer returned by ListEventDataStores.
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Indicates that an event data store is collecting logged events for an organization.
   *
   * @deprecated OrganizationEnabled is no longer returned by ListEventDataStores.
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period, in days.
   *
   * @deprecated RetentionPeriod is no longer returned by ListEventDataStores.
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * The timestamp of the event data store's creation.
   *
   * @deprecated CreatedTimestamp is no longer returned by ListEventDataStores.
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp showing when an event data store was updated, if applicable. `UpdatedTimestamp` is always either the same or newer than the time shown in `CreatedTimestamp`.
   *
   * @deprecated UpdatedTimestamp is no longer returned by ListEventDataStores.
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventDataStoresResponse {
  /**
   * Contains information about event data stores in the account, in the current Region.
   *
   * @public
   */
  EventDataStores?: EventDataStore[] | undefined;

  /**
   * A token you can use to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFailuresRequest {
  /**
   * The ID of the import.
   *
   * @public
   */
  ImportId: string | undefined;

  /**
   * The maximum number of failures to display on a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token you can use to get the next page of import failures.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information about an import failure.
 *
 * @public
 */
export interface ImportFailureListItem {
  /**
   * The location of the failure in the S3 bucket.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  Status?: ImportFailureStatus | undefined;

  /**
   * The type of import error.
   *
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * Provides the reason the import failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * When the import was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImportFailuresResponse {
  /**
   * Contains information about the import failures.
   *
   * @public
   */
  Failures?: ImportFailureListItem[] | undefined;

  /**
   * A token you can use to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsRequest {
  /**
   * The maximum number of imports to display on a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ARN of the destination event data store.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * A token you can use to get the next page of import results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about an import that was returned by a lookup request.
 *
 * @public
 */
export interface ImportsListItem {
  /**
   * The ID of the import.
   *
   * @public
   */
  ImportId?: string | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The ARN of the destination event data store.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The timestamp of the import's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of the import's last update.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListImportsResponse {
  /**
   * The list of returned imports.
   *
   * @public
   */
  Imports?: ImportsListItem[] | undefined;

  /**
   * A token you can use to get the next page of import results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInsightsDataRequest {
  /**
   * The Amazon Resource Name(ARN) of the trail for which you want to retrieve Insights events.
   *
   * @public
   */
  InsightSource: string | undefined;

  /**
   * Specifies the category of events returned. To fetch Insights events, specify `InsightsEvents` as the value of `DataType`
   *
   * @public
   */
  DataType: ListInsightsDataType | undefined;

  /**
   * Contains a map of dimensions. Currently the map can contain only one item.
   *
   * @public
   */
  Dimensions?: Partial<Record<ListInsightsDataDimensionKey, string>> | undefined;

  /**
   * Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The number of events to return. Possible values are 1 through 50. The default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified a EventName as a dimension with `PutObject` as a value, the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the type and name of a resource referenced by an event.
 *
 * @public
 */
export interface Resource {
  /**
   * The type of a resource referenced by the event returned. When the resource type cannot be determined, null is returned. Some examples of resource types are: **Instance** for EC2, **Trail** for CloudTrail, **DBInstance** for Amazon RDS, and **AccessKey** for IAM. To learn more about how to look up and filter events by the resource types supported for a service, see [Filtering CloudTrail Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events).
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The name of the resource referenced by the event returned. These are user-created names whose values will depend on the environment. For example, the resource name might be "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2 Instance.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
 *
 * @public
 */
export interface Event {
  /**
   * The CloudTrail ID of the event returned.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The name of the event returned.
   *
   * @public
   */
  EventName?: string | undefined;

  /**
   * Information about whether the event is a write event or a read event.
   *
   * @public
   */
  ReadOnly?: string | undefined;

  /**
   * The Amazon Web Services access key ID that was used to sign the request. If the request was made with temporary security credentials, this is the access key ID of the temporary credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The date and time of the event returned.
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * The Amazon Web Services service to which the request was made.
   *
   * @public
   */
  EventSource?: string | undefined;

  /**
   * A user name or role name of the requester that called the API in the event returned.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * A list of resources referenced by the event returned.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * A JSON string that contains a representation of the event returned.
   *
   * @public
   */
  CloudTrailEvent?: string | undefined;
}

/**
 * @public
 */
export interface ListInsightsDataResponse {
  /**
   * A list of events returned based on the InsightSource, DataType or Dimensions specified. The events list is sorted by time. The most recent event is listed first.
   *
   * @public
   */
  Events?: Event[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified a EventName as a dimension with `PutObject` as a value, the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInsightsMetricDataRequest {
  /**
   * The Amazon Resource Name(ARN) or name of the trail for which you want to retrieve Insights metrics data. This parameter should only be provided to fetch Insights metrics data generated on trails logging data events. This parameter is not required for Insights metric data generated on trails logging management events.
   *
   * @public
   */
  TrailName?: string | undefined;

  /**
   * The Amazon Web Services service to which the request was made, such as `iam.amazonaws.com` or `s3.amazonaws.com`.
   *
   * @public
   */
  EventSource: string | undefined;

  /**
   * The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded.
   *
   * @public
   */
  EventName: string | undefined;

  /**
   * The type of CloudTrail Insights event, which is either `ApiCallRateInsight` or `ApiErrorRateInsight`. The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume. The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes.
   *
   * @public
   */
  InsightType: InsightType | undefined;

  /**
   * Conditionally required if the `InsightType` parameter is set to `ApiErrorRateInsight`.
   *
   * If returning metrics for the `ApiErrorRateInsight` Insights type, this is the error to retrieve data for. For example, `AccessDenied`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Specifies, in UTC, the start time for time-series data. The value specified is inclusive; results include data points with the specified time stamp.
   *
   * The default is 90 days before the time of request.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Specifies, in UTC, the end time for time-series data. The value specified is exclusive; results include data points up to the specified time stamp.
   *
   * The default is the time of request.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Granularity of data to retrieve, in seconds. Valid values are `60`, `300`, and `3600`. If you specify any other value, you will get an error. The default is 3600 seconds.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * Type of data points to return. Valid values are `NonZeroData` and `FillWithZeros`. The default is `NonZeroData`.
   *
   * @public
   */
  DataType?: InsightsMetricDataType | undefined;

  /**
   * The maximum number of data points to return. Valid values are integers from 1 to 21600. The default value is 21600.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returned if all datapoints can't be returned in a single call. For example, due to reaching `MaxResults`.
   *
   * Add this parameter to the request to continue retrieving results starting from the last evaluated point.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInsightsMetricDataResponse {
  /**
   * Specifies the ARN of the trail. This is only returned when Insights is enabled on a trail logging data events.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * The Amazon Web Services service to which the request was made, such as `iam.amazonaws.com` or `s3.amazonaws.com`.
   *
   * @public
   */
  EventSource?: string | undefined;

  /**
   * The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded.
   *
   * @public
   */
  EventName?: string | undefined;

  /**
   * The type of CloudTrail Insights event, which is either `ApiCallRateInsight` or `ApiErrorRateInsight`. The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume. The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes.
   *
   * @public
   */
  InsightType?: InsightType | undefined;

  /**
   * Only returned if `InsightType` parameter was set to `ApiErrorRateInsight`.
   *
   * If returning metrics for the `ApiErrorRateInsight` Insights type, this is the error to retrieve data for. For example, `AccessDenied`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * List of timestamps at intervals corresponding to the specified time period.
   *
   * @public
   */
  Timestamps?: Date[] | undefined;

  /**
   * List of values representing the API call rate or error rate at each timestamp. The number of values is equal to the number of timestamps.
   *
   * @public
   */
  Values?: number[] | undefined;

  /**
   * Only returned if the full results could not be returned in a single query. You can set the `NextToken` parameter in the next request to this value to continue retrieval.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Requests the public keys for a specified time range.
 *
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about a returned public key.
 *
 * @public
 */
export interface PublicKey {
  /**
   * The DER encoded public key value in PKCS#1 format.
   *
   * @public
   */
  Value?: Uint8Array | undefined;

  /**
   * The starting time of validity of the public key.
   *
   * @public
   */
  ValidityStartTime?: Date | undefined;

  /**
   * The ending time of validity of the public key.
   *
   * @public
   */
  ValidityEndTime?: Date | undefined;

  /**
   * The fingerprint of the public key.
   *
   * @public
   */
  Fingerprint?: string | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface ListPublicKeysResponse {
  /**
   * Contains an array of PublicKey objects.
   *
   * > **Note:** The returned public keys may have validity time ranges that overlap.
   *
   * @public
   */
  PublicKeyList?: PublicKey[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueriesRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of an event data store on which queries were run.
   *
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * A token you can use to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of queries to show on a page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use with `EndTime` to bound a `ListQueries` request, and limit its results to only those queries run within a specified time period.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Use with `StartTime` to bound a `ListQueries` request, and limit its results to only those queries run within a specified time period.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of queries that you want to return in results. Valid values for `QueryStatus` include `QUEUED`, `RUNNING`, `FINISHED`, `FAILED`, `TIMED_OUT`, or `CANCELLED`.
   *
   * @public
   */
  QueryStatus?: QueryStatus | undefined;
}

/**
 * A SQL string of criteria about events that you want to collect in an event data store.
 *
 * @public
 */
export interface Query {
  /**
   * The ID of a query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The status of the query. This can be `QUEUED`, `RUNNING`, `FINISHED`, `FAILED`, `TIMED_OUT`, or `CANCELLED`.
   *
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * The creation time of a query.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListQueriesResponse {
  /**
   * Lists matching query results, and shows query ID, status, and creation time of each query.
   *
   * @public
   */
  Queries?: Query[] | undefined;

  /**
   * A token you can use to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies a list of tags to return.
 *
 * @public
 */
export interface ListTagsRequest {
  /**
   * Specifies a list of trail, event data store, dashboard, or channel ARNs whose tags will be listed. The list has a limit of 20 ARNs.
   *
   * Example trail ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceIdList: string[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A resource tag.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * Specifies the ARN of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagsList?: Tag[] | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface ListTagsResponse {
  /**
   * A list of resource tags.
   *
   * @public
   */
  ResourceTagList?: ResourceTag[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrailsRequest {
  /**
   * The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a CloudTrail trail, including the trail's name, home Region, and Amazon Resource Name (ARN).
 *
 * @public
 */
export interface TrailInfo {
  /**
   * The ARN of a trail.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * The name of a trail.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Web Services Region in which a trail was created.
   *
   * @public
   */
  HomeRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListTrailsResponse {
  /**
   * Returns the name, ARN, and home Region of trails in the current account.
   *
   * @public
   */
  Trails?: TrailInfo[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies an attribute and value that filter the events returned.
 *
 * @public
 */
export interface LookupAttribute {
  /**
   * Specifies an attribute on which to filter the events returned.
   *
   * @public
   */
  AttributeKey: LookupAttributeKey | undefined;

  /**
   * Specifies a value for the specified `AttributeKey`.
   *
   * The maximum length for the `AttributeValue` is 2000 characters. The following characters ('`_`', '', '`,`', '`\\n`') count as two characters towards the 2000 character limit.
   *
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * Contains a request for LookupEvents.
 *
 * @public
 */
export interface LookupEventsRequest {
  /**
   * Contains a list of lookup attributes. Currently the list can contain only one item.
   *
   * @public
   */
  LookupAttributes?: LookupAttribute[] | undefined;

  /**
   * Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Specifies the event category. If you do not specify an event category, events of the category are not returned in the response. For example, if you do not specify `insight` as the value of `EventCategory`, no Insights events are returned.
   *
   * @public
   */
  EventCategory?: EventCategory | undefined;

  /**
   * The number of events to return. Possible values are 1 through 50. The default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a response to a LookupEvents action.
 *
 * @public
 */
export interface LookupEventsResponse {
  /**
   * A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.
   *
   * @public
   */
  Events?: Event[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutEventConfigurationRequest {
  /**
   * The name of the trail for which you want to update event configuration settings.
   *
   * @public
   */
  TrailName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which event configuration settings are updated.
   *
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * The maximum allowed size for events to be stored in the specified event data store. If you are using context key selectors, MaxEventSize must be set to Large.
   *
   * @public
   */
  MaxEventSize?: MaxEventSize | undefined;

  /**
   * A list of context key selectors that will be included to provide enriched event data.
   *
   * @public
   */
  ContextKeySelectors?: ContextKeySelector[] | undefined;

  /**
   * The list of aggregation configurations that you want to configure for the trail.
   *
   * @public
   */
  AggregationConfigurations?: AggregationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutEventConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the trail that has aggregation enabled.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which the event configuration settings were updated.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The maximum allowed size for events stored in the specified event data store.
   *
   * @public
   */
  MaxEventSize?: MaxEventSize | undefined;

  /**
   * The list of context key selectors that are configured for the event data store.
   *
   * @public
   */
  ContextKeySelectors?: ContextKeySelector[] | undefined;

  /**
   * A list of aggregation configurations that are configured for the trail.
   *
   * @public
   */
  AggregationConfigurations?: AggregationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutEventSelectorsRequest {
  /**
   * Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
   * - Start with a letter or number, and end with a letter or number
   * - Be between 3 and 128 characters
   * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
   * - Not be in IP address format (for example, 192.168.5.4)
   *
   * If you specify a trail ARN, it must be in the following format.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailName: string | undefined;

  /**
   * Specifies the settings for your event selectors. You can use event selectors to log management events and data events for the following resource types:
   *
   * - `AWS::DynamoDB::Table`
   * - `AWS::Lambda::Function`
   * - `AWS::S3::Object`
   *
   * You can't use event selectors to log network activity events.
   *
   * You can configure up to five event selectors for a trail. You can use either `EventSelectors` or `AdvancedEventSelectors` in a `PutEventSelectors` request, but not both. If you apply `EventSelectors` to a trail, any existing `AdvancedEventSelectors` are overwritten.
   *
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * Specifies the settings for advanced event selectors. You can use advanced event selectors to log management events, data events for all resource types, and network activity events.
   *
   * You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either `AdvancedEventSelectors` or `EventSelectors`, but not both. If you apply `AdvancedEventSelectors` to a trail, any existing `EventSelectors` are overwritten. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html) in the *CloudTrail User Guide*.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface PutEventSelectorsResponse {
  /**
   * Specifies the ARN of the trail that was updated with event selectors. The following is the format of a trail ARN.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Specifies the event selectors configured for your trail.
   *
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * Specifies the advanced event selectors configured for your trail.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface PutInsightSelectorsRequest {
  /**
   * The name of the CloudTrail trail for which you want to change or add Insights selectors.
   *
   * You cannot use this parameter with the `EventDataStore` and `InsightsDestination` parameters.
   *
   * @public
   */
  TrailName?: string | undefined;

  /**
   * Contains the Insights types you want to log on a specific category of events on a trail or event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.The EventCategory field can specify `Management` or `Data` events or both. For event data store, you can log Insights for management events only.
   *
   * The `ApiCallRateInsight` Insights type analyzes write-only management API calls or read and write data API calls that are aggregated per minute against a baseline API call volume.
   *
   * The `ApiErrorRateInsight` Insights type analyzes management and data API calls that result in error codes. The error is shown if the API call is unsuccessful.
   *
   * @public
   */
  InsightSelectors: InsightSelector[] | undefined;

  /**
   * The ARN (or ID suffix of the ARN) of the source event data store for which you want to change or add Insights selectors. To enable Insights on an event data store, you must provide both the `EventDataStore` and `InsightsDestination` parameters.
   *
   * You cannot use this parameter with the `TrailName` parameter.
   *
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events. To enable Insights on an event data store, you must provide both the `EventDataStore` and `InsightsDestination` parameters.
   *
   * You cannot use this parameter with the `TrailName` parameter.
   *
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * @public
 */
export interface PutInsightSelectorsResponse {
  /**
   * The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights selectors.
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Contains the Insights types you want to log on a specific category of events in a trail or event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.The EventCategory field can specify `Management` or `Data` events or both. For event data store, you can only log Insights for management events only.
   *
   * @public
   */
  InsightSelectors?: InsightSelector[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source event data store for which you want to change or add Insights selectors.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The ARN of the destination event data store that logs Insights events.
   *
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A JSON-formatted string for an Amazon Web Services resource-based policy.
   *
   * For example resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the *CloudTrail User Guide*.
   *
   * @public
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The JSON-formatted string of the Amazon Web Services resource-based policy attached to the CloudTrail event data store, dashboard, or channel.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * The default resource-based policy that is automatically generated for the delegated administrator of an Organizations organization. This policy will be evaluated in tandem with any policy you submit for the resource. For more information about this policy, see [Default resource policy for delegated administrators](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html#cloudtrail-lake-organizations-eds-rbp).
   *
   * @public
   */
  DelegatedAdminResourcePolicy?: string | undefined;
}

/**
 * Specifies an organization member account ID as a CloudTrail delegated administrator.
 *
 * @public
 */
export interface RegisterOrganizationDelegatedAdminRequest {
  /**
   * An organization member account ID that you want to designate as a delegated administrator.
   *
   * @public
   */
  MemberAccountId: string | undefined;
}

/**
 * Returns the following response if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface RegisterOrganizationDelegatedAdminResponse {}

/**
 * Specifies the tags to remove from a trail, event data store, dashboard, or channel.
 *
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * Specifies the ARN of the trail, event data store, dashboard, or channel from which tags should be removed.
   *
   * Example trail ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
   *
   * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
   *
   * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Specifies a list of tags to be removed.
   *
   * @public
   */
  TagsList: Tag[] | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface RemoveTagsResponse {}

/**
 * @public
 */
export interface RestoreEventDataStoreRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of the event data store that you want to restore.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface RestoreEventDataStoreResponse {
  /**
   * The event data store ARN.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The name of the event data store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the event data store.
   *
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * The advanced event selectors that were used to select events.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Indicates whether the event data store is collecting events from all Regions, or only from the Region in which the event data store was created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Indicates whether an event data store is collecting logged events for an organization in Organizations.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period, in days.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Indicates that termination protection is enabled and the event data store cannot be automatically deleted.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * The timestamp of an event data store's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp that shows when an event data store was updated, if applicable. `UpdatedTimestamp` is always either the same or newer than the time shown in `CreatedTimestamp`.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The billing mode for the event data store.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface SearchSampleQueriesRequest {
  /**
   * The natural language phrase to use for the semantic search. The phrase must be in English. The length constraint is in characters, not words.
   *
   * @public
   */
  SearchPhrase: string | undefined;

  /**
   * The maximum number of results to return on a single page. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token you can use to get the next page of results. The length constraint is in characters, not words.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A search result returned by the `SearchSampleQueries` operation.
 *
 * @public
 */
export interface SearchSampleQueriesSearchResult {
  /**
   * The name of a sample query.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A longer description of a sample query.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The SQL code of the sample query.
   *
   * @public
   */
  SQL?: string | undefined;

  /**
   * A value between 0 and 1 indicating the similarity between the search phrase and result.
   *
   * @public
   */
  Relevance?: number | undefined;
}

/**
 * @public
 */
export interface SearchSampleQueriesResponse {
  /**
   * A list of objects containing the search results ordered from most relevant to least relevant.
   *
   * @public
   */
  SearchResults?: SearchSampleQueriesSearchResult[] | undefined;

  /**
   * A token you can use to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDashboardRefreshRequest {
  /**
   * The name or ARN of the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The query parameter values for the dashboard
   *
   * For custom dashboards, the following query parameters are valid: `$StartTime$`, `$EndTime$`, and `$Period$`.
   *
   * For managed dashboards, the following query parameters are valid: `$StartTime$`, `$EndTime$`, `$Period$`, and `$EventDataStoreId$`. The `$EventDataStoreId$` query parameter is required.
   *
   * @public
   */
  QueryParameterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDashboardRefreshResponse {
  /**
   * The refresh ID for the dashboard.
   *
   * @public
   */
  RefreshId?: string | undefined;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store for which you want to start ingestion.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionResponse {}

/**
 * @public
 */
export interface StartImportRequest {
  /**
   * The ARN of the destination event data store. Use this parameter for a new import.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The source S3 bucket for the import. Use this parameter for a new import.
   *
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * Use with `EndEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified `StartEventTime` and `EndEventTime` before attempting to import events.
   *
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * Use with `StartEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified `StartEventTime` and `EndEventTime` before attempting to import events.
   *
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * The ID of the import. Use this parameter when you are retrying an import.
   *
   * @public
   */
  ImportId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * The ID of the import.
   *
   * @public
   */
  ImportId?: string | undefined;

  /**
   * The ARN of the destination event data store.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The source S3 bucket for the import.
   *
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * Used with `EndEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * Used with `StartEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * Shows the status of the import after a `StartImport` request. An import finishes with a status of `COMPLETED` if there were no failures, or `FAILED` if there were failures.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The timestamp for the import's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of the import's last update, if applicable.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * The request to CloudTrail to start logging Amazon Web Services API calls for an account.
 *
 * @public
 */
export interface StartLoggingRequest {
  /**
   * Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs Amazon Web Services API calls. The following is the format of a trail ARN.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface StartLoggingResponse {}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * The SQL code of your query.
   *
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * The URI for the S3 bucket where CloudTrail delivers the query results.
   *
   * @public
   */
  DeliveryS3Uri?: string | undefined;

  /**
   * The alias that identifies a query template.
   *
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * The query parameters for the specified `QueryAlias`.
   *
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * The ID of the started query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The account ID of the event data store owner.
   *
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StopEventDataStoreIngestionRequest {
  /**
   * The ARN (or ID suffix of the ARN) of the event data store for which you want to stop ingestion.
   *
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface StopEventDataStoreIngestionResponse {}

/**
 * @public
 */
export interface StopImportRequest {
  /**
   * The ID of the import.
   *
   * @public
   */
  ImportId: string | undefined;
}

/**
 * @public
 */
export interface StopImportResponse {
  /**
   * The ID for the import.
   *
   * @public
   */
  ImportId?: string | undefined;

  /**
   * The source S3 bucket for the import.
   *
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * The ARN of the destination event data store.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The timestamp of the import's creation.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of the import's last update.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Used with `EndEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * Used with `StartEventTime` to bound a `StartImport` request, and limit imported trail events to only those events logged within a specified time period.
   *
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * Returns information on the stopped import.
   *
   * @public
   */
  ImportStatistics?: ImportStatistics | undefined;
}

/**
 * Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
 *
 * @public
 */
export interface StopLoggingRequest {
  /**
   * Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging Amazon Web Services API calls. The following is the format of a trail ARN.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface StopLoggingResponse {}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * The ARN or ID (the ARN suffix) of the channel that you want to update.
   *
   * @public
   */
  Channel: string | undefined;

  /**
   * The ARNs of event data stores that you want to log events arriving through the channel.
   *
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * Changes the name of the channel.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The ARN of the channel that was updated.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The name of the channel that was updated.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The event source of the channel that was updated.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The event data stores that log events arriving through the channel.
   *
   * @public
   */
  Destinations?: Destination[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * The name or ARN of the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * An array of widgets for the dashboard. A custom dashboard can have a maximum of 10 widgets.
   *
   * To add new widgets, pass in an array that includes the existing widgets along with any new widgets. Run the `GetDashboard` operation to get the list of widgets for the dashboard.
   *
   * To remove widgets, pass in an array that includes the existing widgets minus the widgets you want removed.
   *
   * @public
   */
  Widgets?: RequestWidget[] | undefined;

  /**
   * The refresh schedule configuration for the dashboard.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * The ARN for the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The name for the dashboard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of dashboard.
   *
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * An array of widgets for the dashboard.
   *
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * The refresh schedule for the dashboard, if configured.
   *
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * Indicates whether termination protection is enabled for the dashboard.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * The timestamp that shows when the dashboard was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp that shows when the dashboard was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventDataStoreRequest {
  /**
   * The ARN (or the ID suffix of the ARN) of the event data store that you want to update.
   *
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * The event data store name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The advanced event selectors used to select events for the event data store. You can configure up to five advanced event selectors for each event data store.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Specifies whether an event data store collects events from all Regions, or only from the Region in which it was created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Specifies whether an event data store collects events logged for an organization in Organizations.
   *
   * > **Note:** Only the management account for the organization can convert an organization event data store to a non-organization event data store, or convert a non-organization event data store to an organization event data store.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period of the event data store, in days. If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING`, you can set a retention period of up to 3653 days, the equivalent of 10 years. If `BillingMode` is set to `FIXED_RETENTION_PRICING`, you can set a retention period of up to 2557 days, the equivalent of seven years.
   *
   * CloudTrail Lake determines whether to retain an event by checking if the `eventTime` of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the `eventTime` is older than 90 days.
   *
   * > **Note:** If you decrease the retention period of an event data store, CloudTrail will remove any events with an `eventTime` older than the new retention period. For example, if the previous retention period was 365 days and you decrease it to 100 days, CloudTrail will remove events with an `eventTime` older than 100 days.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Indicates that termination protection is enabled and the event data store cannot be automatically deleted.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by `alias/`, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * > **Important:** Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.
   *
   * CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * Examples:
   *
   * - `alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:alias/MyAliasName`
   * - `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - `12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * > **Note:** You can't change the billing mode from `EXTENDABLE_RETENTION_PRICING` to `FIXED_RETENTION_PRICING`. If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING` and you want to use `FIXED_RETENTION_PRICING` instead, you'll need to stop ingestion on the event data store and create a new event data store that uses `FIXED_RETENTION_PRICING`.
   *
   * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
   *
   * The following are the possible values:
   *
   * - `EXTENDABLE_RETENTION_PRICING` - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.
   * - `FIXED_RETENTION_PRICING` - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.
   *
   * For more information about CloudTrail pricing, see [CloudTrail Pricing](http://aws.amazon.com/cloudtrail/pricing/) and [Managing CloudTrail Lake costs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html).
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface UpdateEventDataStoreResponse {
  /**
   * The ARN of the event data store.
   *
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * The name of the event data store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of an event data store.
   *
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * The advanced event selectors that are applied to the event data store.
   *
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * Indicates whether the event data store includes events from all Regions, or only from the Region in which it was created.
   *
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * Indicates whether an event data store is collecting logged events for an organization in Organizations.
   *
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * The retention period, in days.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * Indicates whether termination protection is enabled for the event data store.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * The timestamp that shows when an event data store was first created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp that shows when the event data store was last updated. `UpdatedTimestamp` is always either the same or newer than the time shown in `CreatedTimestamp`.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The billing mode for the event data store.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Indicates the [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) status. The status is `ENABLED` if Lake query federation is enabled, or `DISABLED` if Lake query federation is disabled. You cannot delete an event data store if the `FederationStatus` is `ENABLED`.
   *
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
   *
   * @public
   */
  FederationRoleArn?: string | undefined;
}

/**
 * Specifies settings to update for the trail.
 *
 * @public
 */
export interface UpdateTrailRequest {
  /**
   * Specifies the name of the trail or trail ARN. If `Name` is a trail name, the string must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
   * - Start with a letter or number, and end with a letter or number
   * - Be between 3 and 128 characters
   * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
   * - Not be in IP address format (for example, 192.168.5.4)
   *
   * If `Name` is a trail ARN, it must be in the following format.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files. See [Amazon S3 Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files). The maximum length is 200 characters.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
   *
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files. Setting this value to `true` only delivers global service events to the trail if the trail is multi-Region or if the trail's home Region is the partition leader Region (for example, us-east-1).
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Specifies whether the trail applies only to the current Region or to all Regions. The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * Specifies whether log file validation is enabled. The default is false.
   *
   * > **Note:** When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
   *
   * @public
   */
  EnableLogFileValidation?: boolean | undefined;

  /**
   * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account.
   *
   * Not required unless you specify `CloudWatchLogsRoleArn`.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Specifies the KMS key ID to use to encrypt the logs and digest files delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * Examples:
   *
   * - alias/MyAliasName
   * - arn:aws:kms:us-east-2:123456789012:alias/MyAliasName
   * - arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012
   * - 12345678-1234-1234-1234-123456789012
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in Organizations. If the trail is not an organization trail and this is set to `true`, the trail will be created in all Amazon Web Services accounts that belong to the organization. If the trail is an organization trail and this is set to `false`, the trail will remain in the current Amazon Web Services account but be deleted from all member accounts in the organization.
   *
   * > **Note:** Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to an organization trail.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * Specifies whether recursive logging is enabled for the trail. If you set `RecursiveLogging` to `false`, CloudTrail suppresses events generated by CloudTrail when it delivers log files to your trail's destinations, including Amazon S3 and CloudWatch Logs. The default value is `true`.
   *
   * @public
   */
  RecursiveLogging?: boolean | undefined;
}

/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 *
 * @public
 */
export interface UpdateTrailResponse {
  /**
   * Specifies the name of the trail.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your IAM Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files).
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * This field is no longer in use. Use `SnsTopicARN`.
   *
   * @deprecated deprecated.
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The following is the format of a topic ARN.
   *
   * `arn:aws:sns:us-east-2:123456789012:MyTopic`
   *
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files. Setting this value to `true` only delivers global service events to the trail if the trail is multi-Region or if the trail's home Region is the partition leader Region (for example, us-east-1).
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Specifies whether the trail exists in one Region or in all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * Specifies the ARN of the trail that was updated. The following is the format of a trail ARN.
   *
   * `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
   *
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * Specifies whether log file integrity validation is enabled.
   *
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs are delivered.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Specifies the KMS key ID that encrypts the logs and digest files delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.
   *
   * `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the trail is an organization trail.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * Specifies whether recursive logging is enabled for the trail.
   *
   * @public
   */
  RecursiveLogging?: boolean | undefined;
}
