// smithy-typescript generated code
import type {
  Action,
  CentralizationFailureReason,
  ContextGraphStatus,
  DeletionProtection,
  DestinationType,
  EncryptedLogGroupStrategy,
  EncryptionConflictResolutionStrategy,
  EncryptionScope,
  EncryptionStrategy,
  FilterBehavior,
  FilterRequirement,
  IntegrationStatus,
  LogType,
  MskEnhancedMonitoringLevel,
  OutputFormat,
  RecordFormat,
  ResourceType,
  RuleHealth,
  SignalType,
  SSEAlgorithm,
  Status,
  TagConflictResolutionStrategy,
  TagPropagationFailureReason,
  TagPropagationStatus,
  TelemetryEnrichmentStatus,
  TelemetryPipelineStatus,
  TelemetrySourceType,
  TelemetryState,
  TelemetryType,
  WAFLogType,
} from "./enums";

/**
 * Condition that matches based on the specific WAF action taken on the request.
 *
 * @public
 */
export interface ActionCondition {
  /**
   * The WAF action to match against (ALLOW, BLOCK, COUNT, CAPTCHA, CHALLENGE, EXCLUDED_AS_COUNT).
   *
   * @public
   */
  Action?: Action | undefined;
}

/**
 * Defines criteria for selecting resources based on field values.
 *
 * @public
 */
export interface AdvancedFieldSelector {
  /**
   * The name of the field to use for selection.
   *
   * @public
   */
  Field: string | undefined;

  /**
   * Matches if the field value equals the specified value.
   *
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * Matches if the field value starts with the specified value.
   *
   * @public
   */
  StartsWith?: string[] | undefined;

  /**
   * Matches if the field value ends with the specified value.
   *
   * @public
   */
  EndsWith?: string[] | undefined;

  /**
   * Matches if the field value does not equal the specified value.
   *
   * @public
   */
  NotEquals?: string[] | undefined;

  /**
   * Matches if the field value does not start with the specified value.
   *
   * @public
   */
  NotStartsWith?: string[] | undefined;

  /**
   * Matches if the field value does not end with the specified value.
   *
   * @public
   */
  NotEndsWith?: string[] | undefined;
}

/**
 * Advanced event selectors let you create fine-grained selectors for management, data, and network activity events.
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
 * Configuration for backing up centralized log data to a secondary region.
 *
 * @public
 */
export interface LogsBackupConfiguration {
  /**
   * Logs specific backup destination region within the primary destination account to which log data should be centralized.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * KMS Key ARN belonging to the primary destination account and backup region, to encrypt newly created central log groups in the backup destination.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Configuration that specifies a naming pattern for destination log groups created during centralization. The pattern supports static text and dynamic variables that are replaced with source attributes when log groups are created.
 *
 * @public
 */
export interface LogGroupNameConfiguration {
  /**
   * The pattern used to generate destination log group names during centralization. The pattern can contain static text and dynamic variables that are replaced with source attributes. If a variable cannot be resolved, it inherits the value from its parent variable in the hierarchy. The pattern must be between 1 and 512 characters.
   *
   * Supported variables:
   *
   * - **$\{source.logGroup\}** — The original log group name from the source account.
   * - **$\{source.accountId\}** — The Amazon Web Services account ID where the log originated.
   * - **$\{source.region\}** — The Amazon Web Services Region where the log originated.
   * - **$\{source.org.id\}** — The Amazon Web Services Organization ID of the source account.
   * - **$\{source.org.ouId\}** — The organizational unit ID of the source account.
   * - **$\{source.org.rootId\}** — The organization Root ID.
   * - **$\{source.org.path\}** — The organizational path from account to root.
   *
   * @public
   */
  LogGroupNamePattern: string | undefined;
}

/**
 * Configuration for encrypting centralized destination log groups. By default, this configuration applies only to destination log groups whose corresponding source log groups are encrypted using customer managed KMS keys. To encrypt all destination log groups created by the rule, set `EncryptionScope` to `NEW_DESTINATION_LOG_GROUPS`.
 *
 * @public
 */
export interface LogsEncryptionConfiguration {
  /**
   * Configuration that determines the encryption strategy of the destination log groups. CUSTOMER_MANAGED uses the configured KmsKeyArn to encrypt newly created destination log groups.
   *
   * @public
   */
  EncryptionStrategy: EncryptionStrategy | undefined;

  /**
   * KMS Key ARN belonging to the primary destination account and region, to encrypt newly created central log groups in the primary destination.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Conflict resolution strategy for centralization if the encryption strategy is set to CUSTOMER_MANAGED and the destination log group is encrypted with an AWS_OWNED KMS Key. ALLOW lets centralization go through while SKIP prevents centralization into the destination log group.
   *
   * @public
   */
  EncryptionConflictResolutionStrategy?: EncryptionConflictResolutionStrategy | undefined;

  /**
   * Determines which newly created destination log groups are encrypted with the configured `KmsKeyArn` when `EncryptionStrategy` is `CUSTOMER_MANAGED`.
   *
   * If you set this to `ENCRYPTED_SOURCE_ONLY` (the default), only destination log groups whose source log group is encrypted with a customer managed KMS key use the configured `KmsKeyArn`. Destination log groups derived from Amazon Web Services owned encrypted source log groups remain Amazon Web Services owned encrypted.
   *
   * If you set this to `NEW_DESTINATION_LOG_GROUPS`, every new destination log group created by this rule uses the configured `KmsKeyArn`, regardless of the source log group's encryption posture.
   *
   * This field is not valid when `EncryptionStrategy` is `AWS_OWNED`.
   *
   * @public
   */
  EncryptionScope?: EncryptionScope | undefined;
}

/**
 * Specifies configuration for propagating resource tags from source log groups to centralized destination log groups. The service uses a customer-managed IAM role in the destination account to add, update, and remove tags on destination log groups.
 *
 * @public
 */
export interface TagPropagationConfiguration {
  /**
   * The ARN of a customer-managed IAM role in the destination account. The service assumes this role to propagate tags to destination log groups. You must have `iam:PassRole` permission on this role.
   *
   * @public
   */
  DestinationRoleArn: string | undefined;

  /**
   * The strategy for resolving conflicts when a tag key exists on both the source and destination log groups. If not specified, defaults to `UPDATE_SYNC`.
   *
   * - `ADD_ONLY` – Only adds new tags from the source without modifying existing destination tags.
   * - `UPDATE_SYNC` – Adds new tags and updates existing tags from the source. Does not remove destination tags that are absent from the source.
   * - `IN_SYNC` – Keeps destination tags fully synchronized with source tags, including removing destination tags that do not exist on the source.
   *
   * @public
   */
  TagConflictResolutionStrategy?: TagConflictResolutionStrategy | undefined;
}

/**
 * Configuration for centralization destination log groups, including encryption and backup settings.
 *
 * @public
 */
export interface DestinationLogsConfiguration {
  /**
   * The encryption configuration for centralization destination log groups.
   *
   * @public
   */
  LogsEncryptionConfiguration?: LogsEncryptionConfiguration | undefined;

  /**
   * Configuration defining the backup region and an optional KMS key for the backup destination.
   *
   * @public
   */
  BackupConfiguration?: LogsBackupConfiguration | undefined;

  /**
   * Configuration that specifies a naming pattern for destination log groups created during centralization. The pattern supports static text and dynamic variables that are replaced with source attributes when log groups are created.
   *
   * @public
   */
  LogGroupNameConfiguration?: LogGroupNameConfiguration | undefined;

  /**
   * Specifies the tag propagation configuration for this centralization rule. When present, `LogGroupNameConfiguration` must use a `LogGroupNamePattern` that contains `$\{source.logGroup\}`, `$\{source.accountId\}`, and `$\{source.region\}`.
   *
   * @public
   */
  TagPropagationConfiguration?: TagPropagationConfiguration | undefined;

  /**
   * Specifies whether this centralization rule enables deletion protection on the destination log groups that it creates. If you don't specify this setting, the rule doesn't enable deletion protection on the log groups that it creates. If you specify a backup Region in `BackupConfiguration`, the setting also applies to the log groups that the rule creates in the backup Region.
   *
   * When you set this to `ENABLED`, the rule enables deletion protection only on log groups that it creates after you enable the setting. It does not add deletion protection to log groups the rule created before you enabled the setting.
   *
   * If you remove this setting from the rule or delete the rule, deletion protection stays enabled on log groups that already have it. To delete one of these log groups, first disable deletion protection on the log group in the destination account.
   *
   * @public
   */
  LogGroupDeletionProtection?: DeletionProtection | undefined;
}

/**
 * Configuration for backing up centralized metrics data to a secondary region.
 *
 * @public
 */
export interface MetricsBackupConfiguration {
  /**
   * Metrics specific backup destination region within the primary destination account to which metrics data should be centralized.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * Configuration for centralization destination metrics, including backup settings.
 *
 * @public
 */
export interface DestinationMetricsConfiguration {
  /**
   * Configuration defining the backup region for the metrics backup destination.
   *
   * @public
   */
  BackupConfiguration?: MetricsBackupConfiguration | undefined;
}

/**
 * Configuration specifying the primary destination for centralized telemetry data.
 *
 * @public
 */
export interface CentralizationRuleDestination {
  /**
   * The primary destination region to which telemetry data should be centralized.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The destination account (within the organization) to which the telemetry data should be centralized.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * Log specific configuration for centralization destination log groups.
   *
   * @public
   */
  DestinationLogsConfiguration?: DestinationLogsConfiguration | undefined;

  /**
   * Metric specific configuration for centralization destination metrics.
   *
   * @public
   */
  DestinationMetricsConfiguration?: DestinationMetricsConfiguration | undefined;
}

/**
 * Configuration that enables centralization of the context graph for the selected sources. Including this configuration in a rule's source opts the rule into centralizing the context graph for the selected sources.
 *
 * @public
 */
export interface SourceContextGraphConfiguration {}

/**
 * Configuration for selecting and handling source log groups for centralization.
 *
 * @public
 */
export interface SourceLogsConfiguration {
  /**
   * The selection criteria that specifies which source log groups to centralize. The selection criteria uses the same format as OAM link filters.
   *
   * @public
   */
  LogGroupSelectionCriteria?: string | undefined;

  /**
   * The selection criteria that specifies which data sources to centralize. The selection criteria uses the same filter expression format as `LogGroupSelectionCriteria`, but operates on `DataSourceName` and `DataSourceType` operands. When both `LogGroupSelectionCriteria` and `DataSourceSelectionCriteria` are specified, a log event must match both criteria to be centralized.
   *
   * @public
   */
  DataSourceSelectionCriteria?: string | undefined;

  /**
   * A strategy determining whether to centralize source log groups that are encrypted with customer managed KMS keys (CMK). ALLOW will consider CMK encrypted source log groups for centralization while SKIP will skip CMK encrypted source log groups from centralization.
   *
   * @public
   */
  EncryptedLogGroupStrategy: EncryptedLogGroupStrategy | undefined;
}

/**
 * Configuration for selecting source metrics for centralization.
 *
 * @public
 */
export interface SourceMetricsConfiguration {
  /**
   * The filter expression that selects which source metrics to centralize. Currently, only `*` (all metrics) is supported. Other values return a validation error.
   *
   * @public
   */
  MetricsSelectionCriteria?: string | undefined;
}

/**
 * Configuration specifying the source of telemetry data to be centralized.
 *
 * @public
 */
export interface CentralizationRuleSource {
  /**
   * The list of source regions from which telemetry data should be centralized.
   *
   * @public
   */
  Regions: string[] | undefined;

  /**
   * The organizational scope from which telemetry data should be centralized, specified using organization id, accounts or organizational unit ids.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * Log specific configuration for centralization source log groups.
   *
   * @public
   */
  SourceLogsConfiguration?: SourceLogsConfiguration | undefined;

  /**
   * Metric specific configuration for centralization source metrics.
   *
   * @public
   */
  SourceMetricsConfiguration?: SourceMetricsConfiguration | undefined;

  /**
   * Configuration that enables centralization of the context graph for the selected sources. Including this configuration in a rule's source opts the rule into centralizing the context graph for the selected sources.
   *
   * @public
   */
  SourceContextGraphConfiguration?: SourceContextGraphConfiguration | undefined;
}

/**
 * Defines how telemetry data should be centralized across an Amazon Web Services Organization, including source and destination configurations.
 *
 * @public
 */
export interface CentralizationRule {
  /**
   * Configuration determining the source of the telemetry data to be centralized.
   *
   * @public
   */
  Source: CentralizationRuleSource | undefined;

  /**
   * Configuration determining where the telemetry data should be centralized, backed up, as well as encryption configuration for the primary and backup destinations.
   *
   * @public
   */
  Destination: CentralizationRuleDestination | undefined;
}

/**
 * A summary of a centralization rule's key properties and status.
 *
 * @public
 */
export interface CentralizationRuleSummary {
  /**
   * The name of the organization centralization rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the organization centralization rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The Amazon Web Services Account that created the organization centralization rule.
   *
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * The timestamp when the organization centralization rule was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The Amazon Web Services region where the organization centralization rule was created.
   *
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * The timestamp when the organization centralization rule was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The health status of the organization centralization rule.
   *
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * The reason why an organization centralization rule is marked UNHEALTHY.
   *
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * The health status of tag propagation for this rule. This status is independent of the overall `RuleHealth` for log delivery. Returns `Healthy` when the most recent tag-propagation attempt succeeded, or `Unhealthy` when the most recent attempt failed.
   *
   * @public
   */
  TagPropagationStatus?: TagPropagationStatus | undefined;

  /**
   * The reason tag propagation is unhealthy for this rule. Only present when `TagPropagationStatus` is `Unhealthy`.
   *
   * @public
   */
  TagPropagationFailureReason?: TagPropagationFailureReason | undefined;

  /**
   * The status of context graph centralization for this rule. Returns `Provisioning` while the context graph is being set up, `Healthy` once it is active, or `Unhealthy` if provisioning failed. This status is independent of the overall `RuleHealth` for log delivery.
   *
   * @public
   */
  ContextGraphStatus?: ContextGraphStatus | undefined;

  /**
   * The primary destination account of the organization centralization rule.
   *
   * @public
   */
  DestinationAccountId?: string | undefined;

  /**
   * The primary destination region of the organization centralization rule.
   *
   * @public
   */
  DestinationRegion?: string | undefined;
}

/**
 * Parameters specific to Amazon Web Services CloudTrail telemetry configuration.
 *
 * @public
 */
export interface CloudtrailParameters {
  /**
   * The advanced event selectors to use for filtering Amazon Web Services CloudTrail events.
   *
   * @public
   */
  AdvancedEventSelectors: AdvancedEventSelector[] | undefined;
}

/**
 * Condition that matches based on WAF rule labels, with label names limited to 1024 characters.
 *
 * @public
 */
export interface LabelNameCondition {
  /**
   * The label name to match, supporting alphanumeric characters, underscores, hyphens, and colons.
   *
   * @public
   */
  LabelName?: string | undefined;
}

/**
 * A single condition that can match based on WAF rule action or label name.
 *
 * @public
 */
export interface Condition {
  /**
   * Matches log records based on the WAF rule action taken (ALLOW, BLOCK, COUNT, etc.).
   *
   * @public
   */
  ActionCondition?: ActionCondition | undefined;

  /**
   * Matches log records based on WAF rule labels applied to the request.
   *
   * @public
   */
  LabelNameCondition?: LabelNameCondition | undefined;
}

/**
 * Information about a data source associated with the telemetry pipeline. For CloudWatch Logs sources, this includes both a name and type extracted from the log event metadata. For third-party sources (such as S3), this includes only a name, with the type field left empty.
 *
 * @public
 */
export interface DataSource {
  /**
   * The name of the data source. For CloudWatch Logs sources, this corresponds to the `data_source_name` from the log event metadata. For third-party sources, this is either the configured `data_source_name` or defaults to the plugin name if not specified.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the data source. For CloudWatch Logs sources, this corresponds to the `data_source_type` from the log event metadata. For third-party sources, this field is empty.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A list of source plugin types used in the pipeline configuration (such as `cloudwatch_logs` or `s3`). Currently supports a single source per pipeline, but is structured as a list to accommodate multiple pipelines in the configuration.
 *
 * @public
 */
export interface Source {
  /**
   * The plugin name of the source, such as `cloudwatch_logs` or `s3`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides a summary of pipeline configuration components including sources, processors, and destinations.
 *
 * @public
 */
export interface ConfigurationSummary {
  /**
   * The list of data sources configured in the pipeline.
   *
   * @public
   */
  Sources?: Source[] | undefined;

  /**
   * The list of data sources that provide telemetry data to the pipeline.
   *
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * The list of processors configured in the pipeline for data transformation.
   *
   * @public
   */
  Processors?: string[] | undefined;

  /**
   * The total number of processors configured in the pipeline.
   *
   * @public
   */
  ProcessorCount?: number | undefined;

  /**
   * The list of destinations where processed data is sent.
   *
   * @public
   */
  Sinks?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationInput {
  /**
   * A unique name for the organization-wide centralization rule being created.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.
   *
   * @public
   */
  Rule: CentralizationRule | undefined;

  /**
   * The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationOutput {
  /**
   * The Amazon Resource Name (ARN) of the created organization centralization rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * Represents a detailed validation error with message, reason, and field mapping for comprehensive error reporting.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The error message describing the validation issue.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The reason code or category for the validation error.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * A mapping of field names to specific validation issues within the configuration.
   *
   * @public
   */
  FieldMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon CloudWatch permission to access the resources needed for the dataset integration.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The key-value pairs to associate with the dataset integration resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetIntegrationOutput {
  /**
   * The Amazon Resource Name (ARN) of the created dataset integration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The timestamp when the dataset integration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the dataset integration was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * Defines the encryption configuration for S3 Table integrations, including the encryption algorithm and KMS key settings.
 *
 * @public
 */
export interface Encryption {
  /**
   * The server-side encryption algorithm used for encrypting data in the S3 Table integration.
   *
   * @public
   */
  SseAlgorithm: SSEAlgorithm | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used for encryption when using customer-managed keys.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationInput {
  /**
   * The encryption configuration for the S3 Table integration, including the encryption algorithm and KMS key settings.
   *
   * @public
   */
  Encryption: Encryption | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants permissions for the S3 Table integration to access necessary resources.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The key-value pairs to associate with the S3 Table integration resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationOutput {
  /**
   * The Amazon Resource Name (ARN) of the created S3 Table integration.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Defines the configuration for a pipeline, including how data flows from sources through processors to destinations. The configuration is specified in YAML format and must include a valid pipeline definition with required source and sink components. This pipeline enables end-to-end telemetry data collection, transformation, and delivery while supporting optional processing steps and extensions for enhanced functionality.
 *
 * The primary pipeline configuration section are:
 *
 * - **Source:** Defines where log data originates from (S3 buckets, CloudWatch Logs, third-party APIs). Each pipeline must have exactly one source.
 * - **Processors (optional):** Transform, parse, and enrich log data as it flows through the pipeline. Processors are applied sequentially in the order they are defined.
 * - **Sink:** Defines the destination where processed log data is sent. Each pipeline must have exactly one sink.
 * - **Extensions (optional):** Provide additional functionality such as Amazon Web Services Secrets Manager integration for credential management.
 *
 * For more details on each configuration section see [CloudWatch pipelines User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html). Additional comprehensive configuration examples can be found in the [CreateTelemetryPipeline API docs](https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_CreateTelemetryPipeline.html#API_CreateTelemetryPipeline_Examples).
 *
 * @public
 */
export interface TelemetryPipelineConfiguration {
  /**
   * The pipeline configuration body that defines the data processing rules and transformations.
   *
   * @public
   */
  Body: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineInput {
  /**
   * The name of the telemetry pipeline to create. The name must be unique within your account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration that defines how the telemetry pipeline processes data, including sources, processors, and destinations. For more information about pipeline components, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/pipeline-components-reference.html)
   *
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;

  /**
   * The key-value pairs to associate with the telemetry pipeline resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineOutput {
  /**
   * The Amazon Resource Name (ARN) of the created telemetry pipeline.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Configuration parameters for ELB load balancer logging, including output format and field delimiter settings.
 *
 * @public
 */
export interface ELBLoadBalancerLoggingParameters {
  /**
   * The format for ELB access log entries (plain text or JSON format).
   *
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * The delimiter character used to separate fields in ELB access log entries when using plain text format.
   *
   * @public
   */
  FieldDelimiter?: string | undefined;
}

/**
 * The configuration parameters for log delivery, including `logType` settings. Applies to resource types that support configurable log delivery, such as Amazon Bedrock Knowledge Bases, Amazon Bedrock AgentCore payment managers, and Elastic Load Balancing Application Load Balancers.
 *
 * @public
 */
export interface LogDeliveryParameters {
  /**
   * The types of logs to collect from the resource.
   *
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * Configuration parameters for Amazon MSK cluster monitoring, including enhanced monitoring level settings.
 *
 * @public
 */
export interface MskMonitoringParameters {
  /**
   * The level of enhanced monitoring for the MSK cluster.
   *
   * @public
   */
  EnhancedMonitoring?: MskEnhancedMonitoringLevel | undefined;
}

/**
 * Configuration parameters specific to VPC Flow Logs.
 *
 * @public
 */
export interface VPCFlowLogParameters {
  /**
   * The format in which VPC Flow Log entries should be logged.
   *
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * The type of traffic to log (ACCEPT, REJECT, or ALL).
   *
   * @public
   */
  TrafficType?: string | undefined;

  /**
   * The maximum interval in seconds between the capture of flow log records.
   *
   * @public
   */
  MaxAggregationInterval?: number | undefined;
}

/**
 * A single filter condition that specifies behavior, requirement, and matching conditions for WAF log records.
 *
 * @public
 */
export interface Filter {
  /**
   * The action to take for log records matching this filter (KEEP or DROP).
   *
   * @public
   */
  Behavior?: FilterBehavior | undefined;

  /**
   * Whether the log record must meet all conditions (MEETS_ALL) or any condition (MEETS_ANY) to match this filter.
   *
   * @public
   */
  Requirement?: FilterRequirement | undefined;

  /**
   * The list of conditions that determine if a log record matches this filter.
   *
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * Configuration that determines which WAF log records to keep or drop based on specified conditions.
 *
 * @public
 */
export interface LoggingFilter {
  /**
   * A list of filter conditions that determine log record handling behavior.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The default action (KEEP or DROP) for log records that don't match any filter conditions.
   *
   * @public
   */
  DefaultBehavior?: FilterBehavior | undefined;
}

/**
 * Structure containing a name field limited to 64 characters for header or query parameter identification.
 *
 * @public
 */
export interface SingleHeader {
  /**
   * The name value, limited to 64 characters.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Specifies a field in the request to redact from WAF logs, such as headers, query parameters, or body content.
 *
 * @public
 */
export interface FieldToMatch {
  /**
   * Redacts a specific header field by name from WAF logs.
   *
   * @public
   */
  SingleHeader?: SingleHeader | undefined;

  /**
   * Redacts the URI path from WAF logs.
   *
   * @public
   */
  UriPath?: string | undefined;

  /**
   * Redacts the entire query string from WAF logs.
   *
   * @public
   */
  QueryString?: string | undefined;

  /**
   * Redacts the HTTP method from WAF logs.
   *
   * @public
   */
  Method?: string | undefined;
}

/**
 * Configuration parameters for WAF logging, including redacted fields and logging filters.
 *
 * @public
 */
export interface WAFLoggingParameters {
  /**
   * The fields to redact from WAF logs to protect sensitive information.
   *
   * @public
   */
  RedactedFields?: FieldToMatch[] | undefined;

  /**
   * A filter configuration that determines which WAF log records to include or exclude.
   *
   * @public
   */
  LoggingFilter?: LoggingFilter | undefined;

  /**
   * The type of WAF logs to collect (currently supports WAF_LOGS).
   *
   * @public
   */
  LogType?: WAFLogType | undefined;
}

/**
 * Configuration specifying where and how telemetry data should be delivered for Amazon Web Services resources.
 *
 * @public
 */
export interface TelemetryDestinationConfiguration {
  /**
   * The type of destination for the telemetry data (e.g., "Amazon CloudWatch Logs", "S3").
   *
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * The pattern used to generate the destination path or name, supporting macros like &lt;resourceId&gt; and &lt;accountId&gt;.
   *
   * @public
   */
  DestinationPattern?: string | undefined;

  /**
   * The number of days to retain the telemetry data in the destination.
   *
   * @public
   */
  RetentionInDays?: number | undefined;

  /**
   * Configuration parameters specific to VPC Flow Logs when VPC is the resource type.
   *
   * @public
   */
  VPCFlowLogParameters?: VPCFlowLogParameters | undefined;

  /**
   * Configuration parameters specific to Amazon Web Services CloudTrail when CloudTrail is the source type.
   *
   * @public
   */
  CloudtrailParameters?: CloudtrailParameters | undefined;

  /**
   * Configuration parameters specific to ELB load balancer logging when ELB is the resource type.
   *
   * @public
   */
  ELBLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParameters | undefined;

  /**
   * Configuration parameters specific to WAF logging when WAF is the resource type.
   *
   * @public
   */
  WAFLoggingParameters?: WAFLoggingParameters | undefined;

  /**
   * The configuration parameters for log delivery when the resource type supports configurable log types, such as Amazon Bedrock Knowledge Bases, Amazon Bedrock AgentCore payment managers, or Elastic Load Balancing Application Load Balancers.
   *
   * @public
   */
  LogDeliveryParameters?: LogDeliveryParameters | undefined;

  /**
   * Configuration parameters specific to MSK monitoring when MSK is the resource type.
   *
   * @public
   */
  MskMonitoringParameters?: MskMonitoringParameters | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed Amazon Web Services KMS key used to encrypt the log groups created during telemetry rule remediation.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Defines how telemetry should be configured for specific Amazon Web Services resources.
 *
 * @public
 */
export interface TelemetryRule {
  /**
   * The type of Amazon Web Services resource to configure telemetry for (for example, `AWS::EC2::VPC`, `AWS::EKS::Cluster`, `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::Bedrock::KnowledgeBase`, `AWS::BedrockAgentCore::PaymentManager`, or `AWS::XRay::TransactionSearchConfig`).
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The type of telemetry to collect (Logs, Metrics, or Traces).
   *
   * @public
   */
  TelemetryType: TelemetryType | undefined;

  /**
   * The specific telemetry source types to configure for the resource, such as VPC_FLOW_LOGS or EKS_AUDIT_LOGS. TelemetrySourceTypes must be correlated with the specific resource type.
   *
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;

  /**
   * Configuration specifying where and how the telemetry data should be delivered.
   *
   * @public
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration | undefined;

  /**
   * The organizational scope to which the rule applies, specified using accounts or organizational units.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * Criteria for selecting which resources the rule applies to, such as resource tags.
   *
   * @public
   */
  SelectionCriteria?: string | undefined;

  /**
   * If set to `true`, Amazon CloudWatch Observability Admin detects and remediates configuration drift in telemetry resources that it manages. For example, if a VPC flow log's format, traffic type, or aggregation interval no longer matches the rule's destination configuration, the flow log is replaced with one that matches. Only Observability Admin-managed resources are updated; customer-created resources are never modified. Currently supported for `AWS::EC2::VPC` resources (VPC flow logs).
   *
   * @public
   */
  AllowFieldUpdates?: boolean | undefined;

  /**
   * An optional list of Amazon Web Services Regions where this telemetry rule should be replicated. When specified, the rule is created in the home region and automatically replicated to all listed regions. Mutually exclusive with `AllRegions`.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * If set to `true`, the telemetry rule is replicated to all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. When new regions become available, the rule automatically replicates to them. Mutually exclusive with `Regions`.
   *
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleInput {
  /**
   * A unique name for the telemetry rule being created.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The configuration details for the telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to.
   *
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * The key-value pairs to associate with the telemetry rule resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleOutput {
  /**
   * The Amazon Resource Name (ARN) of the created telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationInput {
  /**
   * A unique name for the organization-wide telemetry rule being created.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The configuration details for the organization-wide telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to across the organization.
   *
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationOutput {
  /**
   * The Amazon Resource Name (ARN) of the created organization telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * Contains summary information about a dataset integration, including its ARN, associated IAM role, and creation and update timestamps, as returned by `ListDatasetIntegrations`.
 *
 * @public
 */
export interface DatasetIntegrationSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset integration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The timestamp when the dataset integration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the dataset integration was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCentralizationRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization centralization rule to delete.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the dataset integration to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteS3TableIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table integration to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryPipelineInput {
  /**
   * The ARN of the telemetry pipeline to delete.
   *
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryPipelineOutput {}

/**
 * @public
 */
export interface DeleteTelemetryRuleInput {
  /**
   * The identifier (name or ARN) of the telemetry rule to delete.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization telemetry rule to delete.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization centralization rule to retrieve.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationOutput {
  /**
   * The name of the organization centralization rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the organization centralization rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The Amazon Web Services Account that created the organization centralization rule.
   *
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * The timestamp when the organization centralization rule was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The Amazon Web Services region where the organization centralization rule was created.
   *
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * The timestamp when the organization centralization rule was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The health status of the organization centralization rule.
   *
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * The reason why an organization centralization rule is marked UNHEALTHY.
   *
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * The health status of tag propagation for this rule. This status is independent of the overall `RuleHealth` for log delivery. Returns `Healthy` when the most recent tag-propagation attempt succeeded, or `Unhealthy` when the most recent attempt failed.
   *
   * @public
   */
  TagPropagationStatus?: TagPropagationStatus | undefined;

  /**
   * The reason tag propagation is unhealthy for this rule. Only present when `TagPropagationStatus` is `Unhealthy`.
   *
   * @public
   */
  TagPropagationFailureReason?: TagPropagationFailureReason | undefined;

  /**
   * The status of context graph centralization for this rule. Returns `Provisioning` while the context graph is being set up, `Healthy` once it is active, or `Unhealthy` if provisioning failed. This status is independent of the overall `RuleHealth` for log delivery.
   *
   * @public
   */
  ContextGraphStatus?: ContextGraphStatus | undefined;

  /**
   * The configuration details for the organization centralization rule.
   *
   * @public
   */
  CentralizationRule?: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface GetDatasetIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the dataset integration to retrieve.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetIntegrationOutput {
  /**
   * The Amazon Resource Name (ARN) of the dataset integration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The timestamp when the dataset integration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the dataset integration was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table integration to retrieve.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationOutput {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table integration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the S3 Table integration.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The current status of the S3 Table integration.
   *
   * @public
   */
  Status?: IntegrationStatus | undefined;

  /**
   * The encryption configuration for the S3 Table integration.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket used as the destination for the table data.
   *
   * @public
   */
  DestinationTableBucketArn?: string | undefined;

  /**
   * The timestamp when the S3 Table integration was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEnrichmentStatusOutput {
  /**
   * The current status of the resource tags for telemetry feature (`Running`, `Stopped`, or `Impaired`).
   *
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Resource Explorer managed view used for resource tags for telemetry, if the feature is enabled.
   *
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * Represents the status of a multi-region operation in a specific Amazon Web Services Region. This structure is used to report per-region progress for both telemetry evaluation and telemetry rule replication.
 *
 * @public
 */
export interface RegionStatus {
  /**
   * The Amazon Web Services Region code (for example, `eu-west-1` or `us-west-2`) that this status applies to.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The status of the operation in this region. For telemetry evaluation, valid values include `STARTING`, `RUNNING`, and `FAILED_START`. For telemetry rules, valid values include `PENDING`, `ACTIVE`, and `FAILED`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The reason for a failure status in this region. This field is only populated when `Status` indicates a failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the telemetry rule in this spoke region. This field is only present for telemetry rule region statuses and is populated when the rule has been successfully created in the spoke region (status is `ACTIVE`).
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusOutput {
  /**
   * The onboarding status of the telemetry config feature.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Describes the reason for the failure status. The field will only be populated if `Status` is `FAILED_START` or `FAILED_STOP`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Web Services Region that is designated as the home region for multi-region telemetry evaluation. The home region is the single management point for all multi-region operations on this account. This field is only present when multi-region telemetry evaluation is active.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * A list of per-region telemetry evaluation statuses. Each entry indicates the evaluation status for a specific spoke region included in the multi-region configuration. This field is only present when multi-region telemetry evaluation is active.
   *
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  /**
   * The onboarding status of the telemetry config feature for the organization.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * This field describes the reason for the failure status. The field will only be populated if `Status` is `FAILED_START` or `FAILED_STOP`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Web Services Region that is designated as the home region for multi-region telemetry evaluation for the organization. The home region is the single management point for all multi-region operations on this organization. This field is only present when multi-region telemetry evaluation is active.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * A list of per-region telemetry evaluation statuses for the organization. Each entry indicates the evaluation status for a specific spoke region included in the multi-region configuration. This field is only present when multi-region telemetry evaluation is active.
   *
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineInput {
  /**
   * The identifier (name or ARN) of the telemetry pipeline to retrieve.
   *
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * Provides detailed information about the status of a telemetry pipeline, including reasons for specific states.
 *
 * @public
 */
export interface TelemetryPipelineStatusReason {
  /**
   * A description of the pipeline status reason, providing additional context about the current state.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Represents a complete telemetry pipeline resource with configuration, status, and metadata for data processing and transformation.
 *
 * @public
 */
export interface TelemetryPipeline {
  /**
   * The timestamp when the telemetry pipeline was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The timestamp when the telemetry pipeline was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the telemetry pipeline.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the telemetry pipeline.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The configuration that defines how the telemetry pipeline processes data.
   *
   * @public
   */
  Configuration?: TelemetryPipelineConfiguration | undefined;

  /**
   * The current status of the telemetry pipeline.
   *
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * Additional information about the pipeline status, including reasons for failure states.
   *
   * @public
   */
  StatusReason?: TelemetryPipelineStatusReason | undefined;

  /**
   * The key-value pairs associated with the telemetry pipeline resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineOutput {
  /**
   * The complete telemetry pipeline resource information, including configuration, status, and metadata.
   *
   * @public
   */
  Pipeline?: TelemetryPipeline | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleInput {
  /**
   * The identifier (name or ARN) of the telemetry rule to retrieve.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleOutput {
  /**
   * The name of the telemetry rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The timestamp when the telemetry rule was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The timestamp when the telemetry rule was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The configuration details of the telemetry rule.
   *
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;

  /**
   * The Amazon Web Services Region where the telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * Indicates whether this telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region.
   *
   * @public
   */
  IsReplicated?: boolean | undefined;

  /**
   * A list of per-region replication statuses for the telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope.
   *
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization telemetry rule to retrieve.
   *
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationOutput {
  /**
   * The name of the organization telemetry rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the organization telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The timestamp when the organization telemetry rule was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The timestamp when the organization telemetry rule was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The configuration details of the organization telemetry rule.
   *
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;

  /**
   * The Amazon Web Services Region where the organization telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * Indicates whether this organization telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region.
   *
   * @public
   */
  IsReplicated?: boolean | undefined;

  /**
   * A list of per-region replication statuses for the organization telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope.
   *
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * Contains summary information about an S3 Table integration for listing operations.
 *
 * @public
 */
export interface IntegrationSummary {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table integration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The current status of the S3 Table integration.
   *
   * @public
   */
  Status?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationInput {
  /**
   * A string to filter organization centralization rules whose names begin with the specified prefix.
   *
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * A flag determining whether to return organization centralization rules from all regions or only the current region.
   *
   * @public
   */
  AllRegions?: boolean | undefined;

  /**
   * The maximum number of organization centralization rules to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationOutput {
  /**
   * A list of centralization rule summaries.
   *
   * @public
   */
  CentralizationRuleSummaries?: CentralizationRuleSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetIntegrationsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetIntegrationsOutput {
  /**
   * The dataset integrations in your account.
   *
   * @public
   */
  DatasetIntegrationSummaries: DatasetIntegrationSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryInput {
  /**
   * A string used to filter resources which have a `ResourceIdentifier` starting with the `ResourceIdentifierPrefix`.
   *
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * A list of resource types used to filter resources supported by telemetry config. If this parameter is provided, the service returns the resources in the same order as specified in the request. Currently supported resource types for discovery are:
   *
   * - `AWS::EC2::Instance`
   * - `AWS::EC2::VPC`
   * - `AWS::Lambda::Function`
   * - `AWS::EKS::Cluster`
   * - `AWS::WAFv2::WebACL`
   * - `AWS::ElasticLoadBalancingV2::LoadBalancer` (Network Load Balancers only)
   *
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * A key-value pair to filter resources based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * A key-value pair to filter resources based on tags associated with the resource. For more information about tags, see [What are tags?](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html)
   *
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * A number field used to limit the number of results within the returned list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A model representing the state of a resource within an account according to telemetry config.
 *
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is `012345678901`.
   *
   * @public
   */
  AccountIdentifier?: string | undefined;

  /**
   * The configuration state for the resource, for example `\{ Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; \}`.
   *
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * The type of resource, for example `Amazon Web Services::EC2::Instance`, or `Amazon Web Services::EKS::Cluster`, etc.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The identifier of the resource, for example for Amazon VPC, it would be `vpc-1a2b3c4d5e6f1a2b3`.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Tags associated with the resource, for example `\{ Name: "ExampleInstance", Environment: "Development" \}`.
   *
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * The timestamp of the last change to the telemetry configuration for the resource. For example, `1728679196318`.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * Specifies the type of telemetry source for a resource, such as EKS cluster logs.
   *
   * @public
   */
  TelemetrySourceType?: TelemetrySourceType | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryOutput {
  /**
   * A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the caller's account.
   *
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * The token for the next set of items to return. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationInput {
  /**
   * A list of Amazon Web Services accounts used to filter the resources to those associated with the specified accounts.
   *
   * @public
   */
  AccountIdentifiers?: string[] | undefined;

  /**
   * A string used to filter resources in the organization which have a `ResourceIdentifier` starting with the `ResourceIdentifierPrefix`.
   *
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * A list of resource types used to filter resources in the organization. If this parameter is provided, the service returns the resources in the same order as specified in the request. Currently supported resource types for discovery are:
   *
   * - `AWS::EC2::Instance`
   * - `AWS::EC2::VPC`
   * - `AWS::Lambda::Function`
   * - `AWS::EKS::Cluster`
   * - `AWS::WAFv2::WebACL`
   * - `AWS::ElasticLoadBalancingV2::LoadBalancer` (Network Load Balancers only)
   *
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * A key-value pair to filter resources in the organization based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * A key-value pair to filter resources in the organization based on tags associated with the resource. Fore more information about tags, see [What are tags?](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html)
   *
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * A number field used to limit the number of results within the returned list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. A previous call provides this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationOutput {
  /**
   * A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.
   *
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * The token for the next set of items to return. A previous call provides this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsInput {
  /**
   * The maximum number of S3 Table integrations to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsOutput {
  /**
   * A list of S3 Table integration summaries containing key information about each integration.
   *
   * @public
   */
  IntegrationSummaries?: IntegrationSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the telemetry rule resource whose tags you want to list.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags associated with the telemetry rule resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesInput {
  /**
   * The maximum number of telemetry pipelines to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about a telemetry pipeline for listing operations.
 *
 * @public
 */
export interface TelemetryPipelineSummary {
  /**
   * The timestamp when the telemetry pipeline was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The timestamp when the telemetry pipeline was last updated.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the telemetry pipeline.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the telemetry pipeline.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the telemetry pipeline.
   *
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * The key-value pairs associated with the telemetry pipeline resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A summary of the pipeline configuration components.
   *
   * @public
   */
  ConfigurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesOutput {
  /**
   * A list of telemetry pipeline summaries containing key information about each pipeline.
   *
   * @public
   */
  PipelineSummaries?: TelemetryPipelineSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesInput {
  /**
   * A string to filter telemetry rules whose names begin with the specified prefix.
   *
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * The maximum number of telemetry rules to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a telemetry rule's key properties.
 *
 * @public
 */
export interface TelemetryRuleSummary {
  /**
   * The name of the telemetry rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The timestamp when the telemetry rule was created.
   *
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * The timestamp when the telemetry rule was last modified.
   *
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * The type of Amazon Web Services resource the rule applies to.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The type of telemetry (Logs, Metrics, or Traces) the rule configures.
   *
   * @public
   */
  TelemetryType?: TelemetryType | undefined;

  /**
   * The types of telemetry sources configured for this rule, such as VPC Flow Logs or EKS audit logs. TelemetrySourceTypes must be correlated with the specific resource type.
   *
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesOutput {
  /**
   * A list of telemetry rule summaries.
   *
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationInput {
  /**
   * A string to filter organization telemetry rules whose names begin with the specified prefix.
   *
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * The list of account IDs to filter organization telemetry rules by their source accounts.
   *
   * @public
   */
  SourceAccountIds?: string[] | undefined;

  /**
   * The list of organizational unit IDs to filter organization telemetry rules by their source organizational units.
   *
   * @public
   */
  SourceOrganizationUnitIds?: string[] | undefined;

  /**
   * The maximum number of organization telemetry rules to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. A previous call generates this token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationOutput {
  /**
   * A list of organization telemetry rule summaries.
   *
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * A token to resume pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEnrichmentOutput {
  /**
   * The status of the resource tags for telemetry feature after the start operation (`Running`, `Stopped`, or `Impaired`).
   *
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Resource Explorer managed view created for resource tags for telemetry.
   *
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEvaluationInput {
  /**
   * An optional list of Amazon Web Services Regions to include in multi-region telemetry evaluation. The current region is always implicitly included and must not be specified in this list. When provided, telemetry evaluation starts in the current region and propagates to all specified regions. Mutually exclusive with `AllRegions`. If neither `Regions` nor `AllRegions` is provided, the operation applies only to the current region.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * If set to `true`, telemetry evaluation starts in all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. The current region becomes the home region for managing multi-region evaluation. When new regions become available, evaluation automatically expands to include them. Mutually exclusive with `Regions`.
   *
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEvaluationForOrganizationInput {
  /**
   * An optional list of Amazon Web Services Regions to include in multi-region telemetry evaluation for the organization. The current region is always implicitly included and must not be specified in this list. When provided, telemetry evaluation starts in the current region and propagates to all specified regions for the organization. Mutually exclusive with `AllRegions`. If neither `Regions` nor `AllRegions` is provided, the operation applies only to the current region.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * If set to `true`, telemetry evaluation for the organization starts in all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. The current region becomes the home region for managing multi-region evaluation for the organization. When new regions become available, evaluation automatically expands to include them. Mutually exclusive with `Regions`.
   *
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface StopTelemetryEnrichmentOutput {
  /**
   * The status of the resource tags for telemetry feature after the stop operation (`Running`, `Stopped`, or `Impaired`).
   *
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the telemetry rule resource to tag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key-value pairs to add or update for the telemetry rule resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryPipelineInput {
  /**
   * The ARN of the telemetry pipeline to update.
   *
   * @public
   */
  PipelineIdentifier: string | undefined;

  /**
   * The new configuration for the telemetry pipeline, including updated sources, processors, and destinations.
   *
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryPipelineOutput {}

/**
 * Represents a test record structure used for pipeline testing operations to validate data processing.
 *
 * @public
 */
export interface _Record {
  /**
   * The data content of the test record used for pipeline validation.
   *
   * @public
   */
  Data?: string | undefined;

  /**
   * The type of the test record, indicating the format or category of the data.
   *
   * @public
   */
  Type?: RecordFormat | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineInput {
  /**
   * The sample records to process through the pipeline configuration for testing purposes.
   *
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * The pipeline configuration to test with the provided sample records.
   *
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;

  /**
   * The type of telemetry signal to test. If not specified, defaults to log processing.
   *
   * @public
   */
  SignalType?: SignalType | undefined;
}

/**
 * Contains detailed error information from pipeline test operations, providing structured error responses for better debugging and troubleshooting capabilities.
 *
 * @public
 */
export interface PipelineOutputError {
  /**
   * The detailed error message describing what went wrong during the pipeline test operation for this record.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the output from pipeline test operations, including processed records and any errors encountered.
 *
 * @public
 */
export interface PipelineOutput {
  /**
   * The processed record output from the pipeline test operation.
   *
   * @public
   */
  Record?: _Record | undefined;

  /**
   * Any error that occurred during the pipeline test operation for this record.
   *
   * @public
   */
  Error?: PipelineOutputError | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineOutput {
  /**
   * The results of processing the test records through the pipeline configuration, including any outputs or errors.
   *
   * @public
   */
  Results?: PipelineOutput[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the telemetry rule resource to remove tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of tag keys to remove from the telemetry rule resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization centralization rule to update.
   *
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.
   *
   * @public
   */
  Rule: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated organization centralization rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetIntegrationInput {
  /**
   * The Amazon Resource Name (ARN) of the dataset integration to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the dataset integration.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetIntegrationOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated dataset integration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the updated dataset integration.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The timestamp when the dataset integration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the dataset integration was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleInput {
  /**
   * The identifier (name or ARN) of the telemetry rule to update.
   *
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * The new configuration details for the telemetry rule.
   *
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationInput {
  /**
   * The identifier (name or ARN) of the organization telemetry rule to update.
   *
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * The new configuration details for the organization telemetry rule, including resource type, telemetry type, and destination configuration.
   *
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated organization telemetry rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationInput {
  /**
   * The pipeline configuration to validate for syntax and compatibility.
   *
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationOutput {
  /**
   * A list of validation errors found in the pipeline configuration, if any.
   *
   * @public
   */
  Errors?: ValidationError[] | undefined;
}
