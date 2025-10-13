// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ObservabilityAdminServiceException as __BaseException } from "./ObservabilityAdminServiceException";

/**
 * <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p> The name of the exception. </p>
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * @enum
 */
export const CentralizationFailureReason = {
  DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION: "DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  TRUSTED_ACCESS_NOT_ENABLED: "TRUSTED_ACCESS_NOT_ENABLED",
} as const;

/**
 * @public
 */
export type CentralizationFailureReason =
  (typeof CentralizationFailureReason)[keyof typeof CentralizationFailureReason];

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
   * <p>KMS Key arn belonging to the primary destination account and backup region, to encrypt newly created central log groups in the backup destination.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionConflictResolutionStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;

/**
 * @public
 */
export type EncryptionConflictResolutionStrategy =
  (typeof EncryptionConflictResolutionStrategy)[keyof typeof EncryptionConflictResolutionStrategy];

/**
 * @public
 * @enum
 */
export const EncryptionStrategy = {
  AWS_OWNED: "AWS_OWNED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type EncryptionStrategy = (typeof EncryptionStrategy)[keyof typeof EncryptionStrategy];

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
   * <p>KMS Key arn belonging to the primary destination account and region, to encrypt newly created central log groups in the primary destination.</p>
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
 * @public
 * @enum
 */
export const EncryptedLogGroupStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;

/**
 * @public
 */
export type EncryptedLogGroupStrategy = (typeof EncryptedLogGroupStrategy)[keyof typeof EncryptedLogGroupStrategy];

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
 * @public
 * @enum
 */
export const RuleHealth = {
  HEALTHY: "Healthy",
  PROVISIONING: "Provisioning",
  UNHEALTHY: "Unhealthy",
} as const;

/**
 * @public
 */
export type RuleHealth = (typeof RuleHealth)[keyof typeof RuleHealth];

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
 * <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
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
 * <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * <p> The name of the exception. </p>
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p> The name of the exception. </p>
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p> The request throughput limit was exceeded. </p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  CLOUDWATCH_LOGS: "cloud-watch-logs",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

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
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS::EC2::Instance",
  AWS_EC2_VPC: "AWS::EC2::VPC",
  AWS_LAMDBA_FUNCTION: "AWS::Lambda::Function",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const TelemetryType = {
  LOGS: "Logs",
  METRICS: "Metrics",
  TRACES: "Traces",
} as const;

/**
 * @public
 */
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];

/**
 * <p> Defines how telemetry should be configured for specific Amazon Web Services resources. </p>
 * @public
 */
export interface TelemetryRule {
  /**
   * <p> The type of Amazon Web Services resource to configure telemetry for (e.g., "AWS::EC2::VPC"). </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The type of telemetry to collect (Logs, Metrics, or Traces). </p>
   * @public
   */
  TelemetryType: TelemetryType | undefined;

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
 * <p> The specified resource (such as a telemetry rule) could not be found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

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
 * @enum
 */
export const TelemetryEnrichmentStatus = {
  IMPAIRED: "Impaired",
  RUNNING: "Running",
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type TelemetryEnrichmentStatus = (typeof TelemetryEnrichmentStatus)[keyof typeof TelemetryEnrichmentStatus];

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
   * <p> The Amazon Resource Name (ARN) of the Amazon Web Services Resource Explorer managed view used for resource tags for telemetry, if the feature is enabled. </p>
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED_START: "FAILED_START",
  FAILED_STOP: "FAILED_STOP",
  NOT_STARTED: "NOT_STARTED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

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
 * @enum
 */
export const TelemetryState = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  NOT_APPLICABLE: "NotApplicable",
} as const;

/**
 * @public
 */
export type TelemetryState = (typeof TelemetryState)[keyof typeof TelemetryState];

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
   * <p> The type of resource, for example <code>Amazon Web Services::EC2::Instance</code>. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The identifier of the resource, for example <code>i-0b22a22eec53b9321</code>. </p>
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
   * <p> The Amazon Resource Name (ARN) of the Amazon Web Services Resource Explorer managed view created for resource tags for telemetry. </p>
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
