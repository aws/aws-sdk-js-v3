// smithy-typescript generated code
import {
  Action,
  CentralizationFailureReason,
  DestinationType,
  EncryptedLogGroupStrategy,
  EncryptionConflictResolutionStrategy,
  EncryptionStrategy,
  FilterBehavior,
  FilterRequirement,
  IntegrationStatus,
  LogType,
  OutputFormat,
  RecordFormat,
  ResourceType,
  RuleHealth,
  SSEAlgorithm,
  Status,
  TelemetryEnrichmentStatus,
  TelemetryPipelineStatus,
  TelemetrySourceType,
  TelemetryState,
  TelemetryType,
  WAFLogType,
} from "./enums";

/**
 * <p> Condition that matches based on the specific WAF action taken on the request. </p>
 * @public
 */
export interface ActionCondition {
  /**
   * <p> The WAF action to match against (ALLOW, BLOCK, COUNT, CAPTCHA, CHALLENGE, EXCLUDED_AS_COUNT). </p>
   * @public
   */
  Action?: Action | undefined;
}

/**
 * <p> Defines criteria for selecting resources based on field values. </p>
 * @public
 */
export interface AdvancedFieldSelector {
  /**
   * <p> The name of the field to use for selection. </p>
   * @public
   */
  Field: string | undefined;

  /**
   * <p> Matches if the field value equals the specified value. </p>
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * <p> Matches if the field value starts with the specified value. </p>
   * @public
   */
  StartsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value ends with the specified value. </p>
   * @public
   */
  EndsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value does not equal the specified value. </p>
   * @public
   */
  NotEquals?: string[] | undefined;

  /**
   * <p> Matches if the field value does not start with the specified value. </p>
   * @public
   */
  NotStartsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value does not end with the specified value. </p>
   * @public
   */
  NotEndsWith?: string[] | undefined;
}

/**
 * <p>Advanced event selectors let you create fine-grained selectors for management, data, and network activity events.</p>
 * @public
 */
export interface AdvancedEventSelector {
  /**
   * <p>An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Contains all selector statements in an advanced event selector.</p>
   * @public
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

/**
 * <p>Configuration for backing up centralized log data to a secondary region.</p>
 * @public
 */
export interface LogsBackupConfiguration {
  /**
   * <p>Logs specific backup destination region within the primary destination account to which log data should be centralized.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>KMS Key ARN belonging to the primary destination account and backup region, to encrypt newly created central log groups in the backup destination.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Configuration for encrypting centralized log groups. This configuration is only applied to destination log groups for which the corresponding source log groups are encrypted using Customer Managed KMS Keys.</p>
 * @public
 */
export interface LogsEncryptionConfiguration {
  /**
   * <p>Configuration that determines the encryption strategy of the destination log groups. CUSTOMER_MANAGED uses the configured KmsKeyArn to encrypt newly created destination log groups.</p>
   * @public
   */
  EncryptionStrategy: EncryptionStrategy | undefined;

  /**
   * <p>KMS Key ARN belonging to the primary destination account and region, to encrypt newly created central log groups in the primary destination.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Conflict resolution strategy for centralization if the encryption strategy is set to CUSTOMER_MANAGED and the destination log group is encrypted with an AWS_OWNED KMS Key. ALLOW lets centralization go through while SKIP prevents centralization into the destination log group.</p>
   * @public
   */
  EncryptionConflictResolutionStrategy?: EncryptionConflictResolutionStrategy | undefined;
}

/**
 * <p>Configuration for centralization destination log groups, including encryption and backup settings.</p>
 * @public
 */
export interface DestinationLogsConfiguration {
  /**
   * <p>The encryption configuration for centralization destination log groups.</p>
   * @public
   */
  LogsEncryptionConfiguration?: LogsEncryptionConfiguration | undefined;

  /**
   * <p>Configuration defining the backup region and an optional KMS key for the backup destination.</p>
   * @public
   */
  BackupConfiguration?: LogsBackupConfiguration | undefined;
}

/**
 * <p>Configuration specifying the primary destination for centralized telemetry data.</p>
 * @public
 */
export interface CentralizationRuleDestination {
  /**
   * <p>The primary destination region to which telemetry data should be centralized.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The destination account (within the organization) to which the telemetry data should be centralized.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>Log specific configuration for centralization destination log groups.</p>
   * @public
   */
  DestinationLogsConfiguration?: DestinationLogsConfiguration | undefined;
}

/**
 * <p>Configuration for selecting and handling source log groups for centralization.</p>
 * @public
 */
export interface SourceLogsConfiguration {
  /**
   * <p>The selection criteria that specifies which source log groups to centralize. The selection criteria uses the same format as OAM link filters.</p>
   * @public
   */
  LogGroupSelectionCriteria: string | undefined;

  /**
   * <p>A strategy determining whether to centralize source log groups that are encrypted with customer managed KMS keys (CMK). ALLOW will consider CMK encrypted source log groups for centralization while SKIP will skip CMK encrypted source log groups from centralization.</p>
   * @public
   */
  EncryptedLogGroupStrategy: EncryptedLogGroupStrategy | undefined;
}

/**
 * <p>Configuration specifying the source of telemetry data to be centralized.</p>
 * @public
 */
export interface CentralizationRuleSource {
  /**
   * <p>The list of source regions from which telemetry data should be centralized.</p>
   * @public
   */
  Regions: string[] | undefined;

  /**
   * <p>The organizational scope from which telemetry data should be centralized, specified using organization id, accounts or organizational unit ids.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>Log specific configuration for centralization source log groups.</p>
   * @public
   */
  SourceLogsConfiguration?: SourceLogsConfiguration | undefined;
}

/**
 * <p>Defines how telemetry data should be centralized across an Amazon Web Services Organization, including source and destination configurations.</p>
 * @public
 */
export interface CentralizationRule {
  /**
   * <p>Configuration determining the source of the telemetry data to be centralized.</p>
   * @public
   */
  Source: CentralizationRuleSource | undefined;

  /**
   * <p>Configuration determining where the telemetry data should be centralized, backed up, as well as encryption configuration for the primary and backup destinations.</p>
   * @public
   */
  Destination: CentralizationRuleDestination | undefined;
}

/**
 * <p>A summary of a centralization rule's key properties and status.</p>
 * @public
 */
export interface CentralizationRuleSummary {
  /**
   * <p>The name of the organization centralization rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Account that created the organization centralization rule.</p>
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Web Services region where the organization centralization rule was created.</p>
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The health status of the organization centralization rule.</p>
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * <p>The reason why an organization centralization rule is marked UNHEALTHY.</p>
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * <p>The primary destination account of the organization centralization rule.</p>
   * @public
   */
  DestinationAccountId?: string | undefined;

  /**
   * <p>The primary destination region of the organization centralization rule.</p>
   * @public
   */
  DestinationRegion?: string | undefined;
}

/**
 * <p> Parameters specific to Amazon Web Services CloudTrail telemetry configuration. </p>
 * @public
 */
export interface CloudtrailParameters {
  /**
   * <p> The advanced event selectors to use for filtering Amazon Web Services CloudTrail events. </p>
   * @public
   */
  AdvancedEventSelectors: AdvancedEventSelector[] | undefined;
}

/**
 * <p> Condition that matches based on WAF rule labels, with label names limited to 1024 characters. </p>
 * @public
 */
export interface LabelNameCondition {
  /**
   * <p> The label name to match, supporting alphanumeric characters, underscores, hyphens, and colons. </p>
   * @public
   */
  LabelName?: string | undefined;
}

/**
 * <p> A single condition that can match based on WAF rule action or label name. </p>
 * @public
 */
export interface Condition {
  /**
   * <p> Matches log records based on the WAF rule action taken (ALLOW, BLOCK, COUNT, etc.). </p>
   * @public
   */
  ActionCondition?: ActionCondition | undefined;

  /**
   * <p> Matches log records based on WAF rule labels applied to the request. </p>
   * @public
   */
  LabelNameCondition?: LabelNameCondition | undefined;
}

/**
 * <p>Information about a data source associated with the telemetry pipeline. For CloudWatch Logs sources, this includes both a name and type extracted from the log event metadata. For third-party sources (such as S3), this includes only a name, with the type field left empty.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The name of the data source. For CloudWatch Logs sources, this corresponds to the <code>data_source_name</code> from the log event metadata. For third-party sources, this is either the configured <code>data_source_name</code> or defaults to the plugin name if not specified.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source. For CloudWatch Logs sources, this corresponds to the <code>data_source_type</code> from the log event metadata. For third-party sources, this field is empty.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A list of source plugin types used in the pipeline configuration (such as <code>cloudwatch_logs</code> or <code>s3</code>). Currently supports a single source per pipeline, but is structured as a list to accommodate multiple pipelines in the configuration.</p>
 * @public
 */
export interface Source {
  /**
   * <p>The plugin name of the source, such as <code>cloudwatch_logs</code> or <code>s3</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides a summary of pipeline configuration components including sources, processors, and destinations.</p>
 * @public
 */
export interface ConfigurationSummary {
  /**
   * <p>The list of data sources configured in the pipeline.</p>
   * @public
   */
  Sources?: Source[] | undefined;

  /**
   * <p>The list of data sources that provide telemetry data to the pipeline.</p>
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * <p>The list of processors configured in the pipeline for data transformation.</p>
   * @public
   */
  Processors?: string[] | undefined;

  /**
   * <p>The total number of processors configured in the pipeline.</p>
   * @public
   */
  ProcessorCount?: number | undefined;

  /**
   * <p>The list of destinations where processed data is sent.</p>
   * @public
   */
  Sinks?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationInput {
  /**
   * <p>A unique name for the organization-wide centralization rule being created.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.</p>
   * @public
   */
  Rule: CentralizationRule | undefined;

  /**
   * <p>The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * <p>Represents a detailed validation error with message, reason, and field mapping for comprehensive error reporting.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The error message describing the validation issue.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The reason code or category for the validation error.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>A mapping of field names to specific validation issues within the configuration.</p>
   * @public
   */
  FieldMap?: Record<string, string> | undefined;
}

/**
 * <p>Defines the encryption configuration for S3 Table integrations, including the encryption algorithm and KMS key settings.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used for encrypting data in the S3 Table integration.</p>
   * @public
   */
  SseAlgorithm: SSEAlgorithm | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used for encryption when using customer-managed keys.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationInput {
  /**
   * <p>The encryption configuration for the S3 Table integration, including the encryption algorithm and KMS key settings.</p>
   * @public
   */
  Encryption: Encryption | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants permissions for the S3 Table integration to access necessary resources.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The key-value pairs to associate with the S3 Table integration resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Defines the configuration for a telemetry pipeline, including how data flows from sources through processors to destinations.</p>
 * @public
 */
export interface TelemetryPipelineConfiguration {
  /**
   * <p>The pipeline configuration body that defines the data processing rules and transformations.</p>
   * @public
   */
  Body: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineInput {
  /**
   * <p>The name of the telemetry pipeline to create. The name must be unique within your account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration that defines how the telemetry pipeline processes data, including sources, processors, and destinations. For more information about pipeline components, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/pipeline-components-reference.html">Amazon CloudWatch User Guide</a> </p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;

  /**
   * <p>The key-value pairs to associate with the telemetry pipeline resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p> Configuration parameters for ELB load balancer logging, including output format and field delimiter settings. </p>
 * @public
 */
export interface ELBLoadBalancerLoggingParameters {
  /**
   * <p> The format for ELB access log entries (plain text or JSON format). </p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * <p> The delimiter character used to separate fields in ELB access log entries when using plain text format. </p>
   * @public
   */
  FieldDelimiter?: string | undefined;
}

/**
 * <p>Configuration parameters for Amazon Bedrock AgentCore logging, including <code>logType</code> settings.</p>
 * @public
 */
export interface LogDeliveryParameters {
  /**
   * <p>The type of log that the source is sending.</p>
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * <p> Configuration parameters specific to VPC Flow Logs. </p>
 * @public
 */
export interface VPCFlowLogParameters {
  /**
   * <p> The format in which VPC Flow Log entries should be logged. </p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p> The type of traffic to log (ACCEPT, REJECT, or ALL). </p>
   * @public
   */
  TrafficType?: string | undefined;

  /**
   * <p> The maximum interval in seconds between the capture of flow log records. </p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;
}

/**
 * <p> A single filter condition that specifies behavior, requirement, and matching conditions for WAF log records. </p>
 * @public
 */
export interface Filter {
  /**
   * <p> The action to take for log records matching this filter (KEEP or DROP). </p>
   * @public
   */
  Behavior?: FilterBehavior | undefined;

  /**
   * <p> Whether the log record must meet all conditions (MEETS_ALL) or any condition (MEETS_ANY) to match this filter. </p>
   * @public
   */
  Requirement?: FilterRequirement | undefined;

  /**
   * <p> The list of conditions that determine if a log record matches this filter. </p>
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * <p> Configuration that determines which WAF log records to keep or drop based on specified conditions. </p>
 * @public
 */
export interface LoggingFilter {
  /**
   * <p> A list of filter conditions that determine log record handling behavior. </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The default action (KEEP or DROP) for log records that don't match any filter conditions. </p>
   * @public
   */
  DefaultBehavior?: FilterBehavior | undefined;
}

/**
 * <p> Structure containing a name field limited to 64 characters for header or query parameter identification. </p>
 * @public
 */
export interface SingleHeader {
  /**
   * <p> The name value, limited to 64 characters. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p> Specifies a field in the request to redact from WAF logs, such as headers, query parameters, or body content. </p>
 * @public
 */
export interface FieldToMatch {
  /**
   * <p> Redacts a specific header field by name from WAF logs. </p>
   * @public
   */
  SingleHeader?: SingleHeader | undefined;

  /**
   * <p> Redacts the URI path from WAF logs. </p>
   * @public
   */
  UriPath?: string | undefined;

  /**
   * <p> Redacts the entire query string from WAF logs. </p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p> Redacts the HTTP method from WAF logs. </p>
   * @public
   */
  Method?: string | undefined;
}

/**
 * <p> Configuration parameters for WAF logging, including redacted fields and logging filters. </p>
 * @public
 */
export interface WAFLoggingParameters {
  /**
   * <p> The fields to redact from WAF logs to protect sensitive information. </p>
   * @public
   */
  RedactedFields?: FieldToMatch[] | undefined;

  /**
   * <p> A filter configuration that determines which WAF log records to include or exclude. </p>
   * @public
   */
  LoggingFilter?: LoggingFilter | undefined;

  /**
   * <p> The type of WAF logs to collect (currently supports WAF_LOGS). </p>
   * @public
   */
  LogType?: WAFLogType | undefined;
}

/**
 * <p> Configuration specifying where and how telemetry data should be delivered for Amazon Web Services resources. </p>
 * @public
 */
export interface TelemetryDestinationConfiguration {
  /**
   * <p> The type of destination for the telemetry data (e.g., "Amazon CloudWatch Logs", "S3"). </p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p> The pattern used to generate the destination path or name, supporting macros like &lt;resourceId&gt; and &lt;accountId&gt;. </p>
   * @public
   */
  DestinationPattern?: string | undefined;

  /**
   * <p> The number of days to retain the telemetry data in the destination. </p>
   * @public
   */
  RetentionInDays?: number | undefined;

  /**
   * <p> Configuration parameters specific to VPC Flow Logs when VPC is the resource type. </p>
   * @public
   */
  VPCFlowLogParameters?: VPCFlowLogParameters | undefined;

  /**
   * <p> Configuration parameters specific to Amazon Web Services CloudTrail when CloudTrail is the source type. </p>
   * @public
   */
  CloudtrailParameters?: CloudtrailParameters | undefined;

  /**
   * <p> Configuration parameters specific to ELB load balancer logging when ELB is the resource type. </p>
   * @public
   */
  ELBLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParameters | undefined;

  /**
   * <p> Configuration parameters specific to WAF logging when WAF is the resource type. </p>
   * @public
   */
  WAFLoggingParameters?: WAFLoggingParameters | undefined;

  /**
   * <p>Configuration parameters specific to Amazon Bedrock AgentCore logging when Amazon Bedrock AgentCore is the resource type.</p>
   * @public
   */
  LogDeliveryParameters?: LogDeliveryParameters | undefined;
}

/**
 * <p> Defines how telemetry should be configured for specific Amazon Web Services resources. </p>
 * @public
 */
export interface TelemetryRule {
  /**
   * <p> The type of Amazon Web Services resource to configure telemetry for (e.g., "AWS::EC2::VPC", "AWS::EKS::Cluster", "AWS::WAFv2::WebACL"). </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The type of telemetry to collect (Logs, Metrics, or Traces). </p>
   * @public
   */
  TelemetryType: TelemetryType | undefined;

  /**
   * <p> The specific telemetry source types to configure for the resource, such as VPC_FLOW_LOGS or EKS_AUDIT_LOGS. TelemetrySourceTypes must be correlated with the specific resource type. </p>
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;

  /**
   * <p> Configuration specifying where and how the telemetry data should be delivered. </p>
   * @public
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration | undefined;

  /**
   * <p> The organizational scope to which the rule applies, specified using accounts or organizational units. </p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p> Criteria for selecting which resources the rule applies to, such as resource tags. </p>
   * @public
   */
  SelectionCriteria?: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleInput {
  /**
   * <p> A unique name for the telemetry rule being created. </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p> The configuration details for the telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p> The key-value pairs to associate with the telemetry rule resource for categorization and management purposes. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationInput {
  /**
   * <p> A unique name for the organization-wide telemetry rule being created. </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p> The configuration details for the organization-wide telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to across the organization. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p> The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to delete.</p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteS3TableIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryPipelineInput {
  /**
   * <p>The ARN of the telemetry pipeline to delete.</p>
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
   * <p> The identifier (name or ARN) of the telemetry rule to delete. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to delete. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to retrieve.</p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationOutput {
  /**
   * <p>The name of the organization centralization rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Account that created the organization centralization rule.</p>
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Web Services region where the organization centralization rule was created.</p>
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The health status of the organization centralization rule.</p>
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * <p>The reason why an organization centralization rule is marked UNHEALTHY.</p>
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * <p>The configuration details for the organization centralization rule.</p>
   * @public
   */
  CentralizationRule?: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the S3 Table integration.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The current status of the S3 Table integration.</p>
   * @public
   */
  Status?: IntegrationStatus | undefined;

  /**
   * <p>The encryption configuration for the S3 Table integration.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket used as the destination for the table data.</p>
   * @public
   */
  DestinationTableBucketArn?: string | undefined;

  /**
   * <p>The timestamp when the S3 Table integration was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEnrichmentStatusOutput {
  /**
   * <p> The current status of the resource tags for telemetry feature (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Resource Explorer managed view used for resource tags for telemetry, if the feature is enabled. </p>
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusOutput {
  /**
   * <p> The onboarding status of the telemetry config feature. </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p> Describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>. </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  /**
   * <p> The onboarding status of the telemetry config feature for the organization. </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p> This field describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>. </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineInput {
  /**
   * <p>The identifier (name or ARN) of the telemetry pipeline to retrieve.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * <p>Provides detailed information about the status of a telemetry pipeline, including reasons for specific states.</p>
 * @public
 */
export interface TelemetryPipelineStatusReason {
  /**
   * <p>A description of the pipeline status reason, providing additional context about the current state.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Represents a complete telemetry pipeline resource with configuration, status, and metadata for data processing and transformation.</p>
 * @public
 */
export interface TelemetryPipeline {
  /**
   * <p>The timestamp when the telemetry pipeline was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The timestamp when the telemetry pipeline was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the telemetry pipeline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The configuration that defines how the telemetry pipeline processes data.</p>
   * @public
   */
  Configuration?: TelemetryPipelineConfiguration | undefined;

  /**
   * <p>The current status of the telemetry pipeline.</p>
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * <p>Additional information about the pipeline status, including reasons for failure states.</p>
   * @public
   */
  StatusReason?: TelemetryPipelineStatusReason | undefined;

  /**
   * <p>The key-value pairs associated with the telemetry pipeline resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineOutput {
  /**
   * <p>The complete telemetry pipeline resource information, including configuration, status, and metadata.</p>
   * @public
   */
  Pipeline?: TelemetryPipeline | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleInput {
  /**
   * <p> The identifier (name or ARN) of the telemetry rule to retrieve. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleOutput {
  /**
   * <p> The name of the telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the telemetry rule was last updated. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The configuration details of the telemetry rule. </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to retrieve. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationOutput {
  /**
   * <p> The name of the organization telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the organization telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the organization telemetry rule was last updated. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The configuration details of the organization telemetry rule. </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;
}

/**
 * <p>Contains summary information about an S3 Table integration for listing operations.</p>
 * @public
 */
export interface IntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the S3 Table integration.</p>
   * @public
   */
  Status?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationInput {
  /**
   * <p>A string to filter organization centralization rules whose names begin with the specified prefix.</p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p>A flag determining whether to return organization centralization rules from all regions or only the current region.</p>
   * @public
   */
  AllRegions?: boolean | undefined;

  /**
   * <p>The maximum number of organization centralization rules to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationOutput {
  /**
   * <p>A list of centralization rule summaries.</p>
   * @public
   */
  CentralizationRuleSummaries?: CentralizationRuleSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryInput {
  /**
   * <p> A string used to filter resources which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>. </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p> A list of resource types used to filter resources supported by telemetry config. If this parameter is provided, the resources will be returned in the same order used in the request. </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p> A key-value pair to filter resources based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> A key-value pair to filter resources based on tags associated with the resource. For more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a> </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> A number field used to limit the number of results within the returned list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A model representing the state of a resource within an account according to telemetry config. </p>
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * <p> The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is <code>012345678901</code>. </p>
   * @public
   */
  AccountIdentifier?: string | undefined;

  /**
   * <p> The configuration state for the resource, for example <code>\{ Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; \}</code>. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> The type of resource, for example <code>Amazon Web Services::EC2::Instance</code>, or <code>Amazon Web Services::EKS::Cluster</code>, etc. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The identifier of the resource, for example for Amazon VPC, it would be <code>vpc-1a2b3c4d5e6f1a2b3</code>. </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p> Tags associated with the resource, for example <code>\{ Name: "ExampleInstance", Environment: "Development" \}</code>. </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> The timestamp of the last change to the telemetry configuration for the resource. For example, <code>1728679196318</code>. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryOutput {
  /**
   * <p> A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the caller's account. </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationInput {
  /**
   * <p> A list of Amazon Web Services accounts used to filter the resources to those associated with the specified accounts. </p>
   * @public
   */
  AccountIdentifiers?: string[] | undefined;

  /**
   * <p> A string used to filter resources in the organization which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>. </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p> A list of resource types used to filter resources in the organization. If this parameter is provided, the resources will be returned in the same order used in the request. </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p> A key-value pair to filter resources in the organization based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> A key-value pair to filter resources in the organization based on tags associated with the resource. Fore more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a> </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> A number field used to limit the number of results within the returned list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call provides this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationOutput {
  /**
   * <p> A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization. </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call provides this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsInput {
  /**
   * <p>The maximum number of S3 Table integrations to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsOutput {
  /**
   * <p>A list of S3 Table integration summaries containing key information about each integration.</p>
   * @public
   */
  IntegrationSummaries?: IntegrationSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource whose tags you want to list. </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p> The list of tags associated with the telemetry rule resource. </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesInput {
  /**
   * <p>The maximum number of telemetry pipelines to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a telemetry pipeline for listing operations.</p>
 * @public
 */
export interface TelemetryPipelineSummary {
  /**
   * <p>The timestamp when the telemetry pipeline was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The timestamp when the telemetry pipeline was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the telemetry pipeline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the telemetry pipeline.</p>
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * <p>The key-value pairs associated with the telemetry pipeline resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A summary of the pipeline configuration components.</p>
   * @public
   */
  ConfigurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesOutput {
  /**
   * <p>A list of telemetry pipeline summaries containing key information about each pipeline.</p>
   * @public
   */
  PipelineSummaries?: TelemetryPipelineSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesInput {
  /**
   * <p> A string to filter telemetry rules whose names begin with the specified prefix. </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p> The maximum number of telemetry rules to return in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A summary of a telemetry rule's key properties. </p>
 * @public
 */
export interface TelemetryRuleSummary {
  /**
   * <p> The name of the telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the telemetry rule was last modified. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The type of Amazon Web Services resource the rule applies to. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The type of telemetry (Logs, Metrics, or Traces) the rule configures. </p>
   * @public
   */
  TelemetryType?: TelemetryType | undefined;

  /**
   * <p> The types of telemetry sources configured for this rule, such as VPC Flow Logs or EKS audit logs. TelemetrySourceTypes must be correlated with the specific resource type. </p>
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesOutput {
  /**
   * <p> A list of telemetry rule summaries. </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p> A token to resume pagination of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationInput {
  /**
   * <p> A string to filter organization telemetry rules whose names begin with the specified prefix. </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p> The list of account IDs to filter organization telemetry rules by their source accounts. </p>
   * @public
   */
  SourceAccountIds?: string[] | undefined;

  /**
   * <p> The list of organizational unit IDs to filter organization telemetry rules by their source organizational units. </p>
   * @public
   */
  SourceOrganizationUnitIds?: string[] | undefined;

  /**
   * <p> The maximum number of organization telemetry rules to return in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationOutput {
  /**
   * <p> A list of organization telemetry rule summaries. </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p> A token to resume pagination of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEnrichmentOutput {
  /**
   * <p> The status of the resource tags for telemetry feature after the start operation (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Resource Explorer managed view created for resource tags for telemetry. </p>
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * @public
 */
export interface StopTelemetryEnrichmentOutput {
  /**
   * <p> The status of the resource tags for telemetry feature after the stop operation (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource to tag. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> The key-value pairs to add or update for the telemetry rule resource. </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryPipelineInput {
  /**
   * <p>The ARN of the telemetry pipeline to update.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;

  /**
   * <p>The new configuration for the telemetry pipeline, including updated sources, processors, and destinations.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryPipelineOutput {}

/**
 * <p>Represents a test record structure used for pipeline testing operations to validate data processing.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The data content of the test record used for pipeline validation.</p>
   * @public
   */
  Data?: string | undefined;

  /**
   * <p>The type of the test record, indicating the format or category of the data.</p>
   * @public
   */
  Type?: RecordFormat | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineInput {
  /**
   * <p>The sample records to process through the pipeline configuration for testing purposes.</p>
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * <p>The pipeline configuration to test with the provided sample records.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * <p>Contains detailed error information from pipeline test operations, providing structured error responses for better debugging and troubleshooting capabilities.</p>
 * @public
 */
export interface PipelineOutputError {
  /**
   * <p>The detailed error message describing what went wrong during the pipeline test operation for this record.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the output from pipeline test operations, including processed records and any errors encountered.</p>
 * @public
 */
export interface PipelineOutput {
  /**
   * <p>The processed record output from the pipeline test operation.</p>
   * @public
   */
  Record?: _Record | undefined;

  /**
   * <p>Any error that occurred during the pipeline test operation for this record.</p>
   * @public
   */
  Error?: PipelineOutputError | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineOutput {
  /**
   * <p>The results of processing the test records through the pipeline configuration, including any outputs or errors.</p>
   * @public
   */
  Results?: PipelineOutput[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource to remove tags from. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> The list of tag keys to remove from the telemetry rule resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to update.</p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.</p>
   * @public
   */
  Rule: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleInput {
  /**
   * <p> The identifier (name or ARN) of the telemetry rule to update. </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p> The new configuration details for the telemetry rule. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to update. </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p> The new configuration details for the organization telemetry rule, including resource type, telemetry type, and destination configuration. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationInput {
  /**
   * <p>The pipeline configuration to validate for syntax and compatibility.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationOutput {
  /**
   * <p>A list of validation errors found in the pipeline configuration, if any.</p>
   * @public
   */
  Errors?: ValidationError[] | undefined;
}
