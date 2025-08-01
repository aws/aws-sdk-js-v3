// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ObservabilityAdminServiceException as __BaseException } from "./ObservabilityAdminServiceException";

/**
 * <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide.
 *     </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The name of the exception.
   *     </p>
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
 * <p>
 *       The requested operation conflicts with the current state of the specified resource or with another request.
 *     </p>
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
 * <p>
 *       Configuration parameters specific to VPC Flow Logs.
 *     </p>
 * @public
 */
export interface VPCFlowLogParameters {
  /**
   * <p>
   *       The format in which VPC Flow Log entries should be logged.
   *     </p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p>
   *       The type of traffic to log (ACCEPT, REJECT, or ALL).
   *     </p>
   * @public
   */
  TrafficType?: string | undefined;

  /**
   * <p>
   *       The maximum interval in seconds between the capture of flow log records.
   *     </p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;
}

/**
 * <p>
 *       Configuration specifying where and how telemetry data should be delivered for Amazon Web Services resources.
 *     </p>
 * @public
 */
export interface TelemetryDestinationConfiguration {
  /**
   * <p>
   *       The type of destination for the telemetry data (e.g., "Amazon CloudWatch Logs", "S3").
   *     </p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p>
   *       The pattern used to generate the destination path or name, supporting macros like &lt;resourceId&gt; and &lt;accountId&gt;.
   *     </p>
   * @public
   */
  DestinationPattern?: string | undefined;

  /**
   * <p>
   *       The number of days to retain the telemetry data in the destination.
   *     </p>
   * @public
   */
  RetentionInDays?: number | undefined;

  /**
   * <p>
   *       Configuration parameters specific to VPC Flow Logs when VPC is the resource type.
   *     </p>
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
 * <p>
 *       Defines how telemetry should be configured for specific Amazon Web Services resources.
 *     </p>
 * @public
 */
export interface TelemetryRule {
  /**
   * <p>
   *       The type of Amazon Web Services resource to configure telemetry for (e.g., "AWS::EC2::VPC").
   *     </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>
   *       The type of telemetry to collect (Logs, Metrics, or Traces).
   *     </p>
   * @public
   */
  TelemetryType: TelemetryType | undefined;

  /**
   * <p>
   *       Configuration specifying where and how the telemetry data should be delivered.
   *     </p>
   * @public
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration | undefined;

  /**
   * <p>
   *       The organizational scope to which the rule applies, specified using accounts or organizational units.
   *     </p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>
   *       Criteria for selecting which resources the rule applies to, such as resource tags.
   *     </p>
   * @public
   */
  SelectionCriteria?: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleInput {
  /**
   * <p>
   *       A unique name for the telemetry rule being created.
   *     </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>
   *       The configuration details for the telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to.
   *     </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p>
   *       The key-value pairs to associate with the telemetry rule resource for categorization and management purposes.
   *     </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleOutput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the created telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * <p>
   *       The name of the exception.
   *     </p>
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
 * <p>
 *       The requested operation would exceed the allowed quota for the specified resource type.
 *     </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The name of the exception.
   *     </p>
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
 * <p>
 *       The request throughput limit was exceeded.
 *     </p>
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
 * <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
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
 */
export interface CreateTelemetryRuleForOrganizationInput {
  /**
   * <p>
   *       A unique name for the organization-wide telemetry rule being created.
   *     </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>
   *       The configuration details for the organization-wide telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to across the organization.
   *     </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p>
   *       The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes.
   *     </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationOutput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the created organization telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryRuleInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the telemetry rule to delete.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * <p>
 *       The specified resource (such as a telemetry rule) could not be found.
 *     </p>
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
export interface DeleteTelemetryRuleForOrganizationInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the organization telemetry rule to delete.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;
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
   * <p>
   *       The onboarding status of the telemetry config feature.
   *     </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>
   *       Describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>.
   *     </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  /**
   * <p>
   *       The onboarding status of the telemetry config feature for the organization.
   *     </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>
   *       This field describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>.
   *     </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the telemetry rule to retrieve.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleOutput {
  /**
   * <p>
   *       The name of the telemetry rule.
   *     </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *       The timestamp when the telemetry rule was created.
   *     </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>
   *       The timestamp when the telemetry rule was last updated.
   *     </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>
   *       The configuration details of the telemetry rule.
   *     </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the organization telemetry rule to retrieve.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationOutput {
  /**
   * <p>
   *       The name of the organization telemetry rule.
   *     </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the organization telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *       The timestamp when the organization telemetry rule was created.
   *     </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>
   *       The timestamp when the organization telemetry rule was last updated.
   *     </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>
   *       The configuration details of the organization telemetry rule.
   *     </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;
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
   * <p>
   *       A string used to filter resources which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>.
   *     </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p>
   *       A list of resource types used to filter resources supported by telemetry config. If this parameter is provided, the resources will be returned in the same order used in the request.
   *     </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *     </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources based on tags associated with the resource. For more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a>
   *          </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       A number field used to limit the number of results within the returned list.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       A model representing the state of a resource within an account according to telemetry config.
 *     </p>
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * <p>
   *       The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is <code>012345678901</code>.
   *     </p>
   * @public
   */
  AccountIdentifier?: string | undefined;

  /**
   * <p>
   *       The configuration state for the resource, for example <code>\{ Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; \}</code>.
   *       </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       The type of resource, for example <code>Amazon Web Services::EC2::Instance</code>.
   *     </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>
   *      The identifier of the resource, for example <code>i-0b22a22eec53b9321</code>.
   *     </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>
   *      Tags associated with the resource, for example <code>\{ Name: "ExampleInstance", Environment: "Development" \}</code>.
   *     </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       The timestamp of the last change to the telemetry configuration for the resource.  For example, <code>1728679196318</code>.
   *     </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryOutput {
  /**
   * <p>
   *       A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the caller's account.
   *     </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationInput {
  /**
   * <p>
   *       A list of Amazon Web Services accounts used to filter the resources to those associated with the specified accounts.
   *     </p>
   * @public
   */
  AccountIdentifiers?: string[] | undefined;

  /**
   * <p>
   *       A string used to filter resources in the organization which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>.
   *     </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p>
   *     A list of resource types used to filter resources in the organization. If this parameter is provided, the resources will be returned in the same order used in the request.
   *     </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources in the organization based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *     </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources in the organization based on tags associated with the resource. Fore more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a>
   *          </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       A number field used to limit the number of results within the returned list.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call provides this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationOutput {
  /**
   * <p>
   *       A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.
   *     </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call provides this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the telemetry rule resource whose tags you want to list.
   *     </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>
   *       The list of tags associated with the telemetry rule resource.
   *     </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesInput {
  /**
   * <p>
   *       A string to filter telemetry rules whose names begin with the specified prefix.
   *     </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p>
   *       The maximum number of telemetry rules to return in a single call.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of results. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       A summary of a telemetry rule's key properties.
 *     </p>
 * @public
 */
export interface TelemetryRuleSummary {
  /**
   * <p>
   *       The name of the telemetry rule.
   *     </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *       The timestamp when the telemetry rule was created.
   *     </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>
   *       The timestamp when the telemetry rule was last modified.
   *     </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>
   *       The type of Amazon Web Services resource the rule applies to.
   *     </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>
   *       The type of telemetry (Logs, Metrics, or Traces) the rule configures.
   *     </p>
   * @public
   */
  TelemetryType?: TelemetryType | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesOutput {
  /**
   * <p>
   *       A list of telemetry rule summaries.
   *     </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p>
   *       A token to resume pagination of results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationInput {
  /**
   * <p>
   *       A string to filter organization telemetry rules whose names begin with the specified prefix.
   *     </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p>
   *       The list of account IDs to filter organization telemetry rules by their source accounts.
   *     </p>
   * @public
   */
  SourceAccountIds?: string[] | undefined;

  /**
   * <p>
   *       The list of organizational unit IDs to filter organization telemetry rules by their source organizational units.
   *     </p>
   * @public
   */
  SourceOrganizationUnitIds?: string[] | undefined;

  /**
   * <p>
   *       The maximum number of organization telemetry rules to return in a single call.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of results. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationOutput {
  /**
   * <p>
   *       A list of organization telemetry rule summaries.
   *     </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p>
   *       A token to resume pagination of results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the telemetry rule resource to tag.
   *     </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *       The key-value pairs to add or update for the telemetry rule resource.
   *     </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the telemetry rule resource to remove tags from.
   *     </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *       The list of tag keys to remove from the telemetry rule resource.
   *     </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the telemetry rule to update.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>
   *       The new configuration details for the telemetry rule.
   *     </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleOutput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the updated telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationInput {
  /**
   * <p>
   *       The identifier (name or ARN) of the organization telemetry rule to update.
   *     </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>
   *       The new configuration details for the organization telemetry rule, including resource type, telemetry type, and destination configuration.
   *     </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationOutput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the updated organization telemetry rule.
   *     </p>
   * @public
   */
  RuleArn?: string | undefined;
}
