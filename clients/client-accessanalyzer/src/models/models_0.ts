// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AccessAnalyzerServiceException as __BaseException } from "./AccessAnalyzerServiceException";

/**
 * <p>Contains information about actions and resources that define permissions to check against a policy.</p>
 * @public
 */
export interface Access {
  /**
   * <p>A list of actions for the access permissions. Any strings that can be used as an action in an IAM policy can be used in the list of actions to check.</p>
   * @public
   */
  actions?: string[] | undefined;

  /**
   * <p>A list of resources for the access permissions. Any strings that can be used as an Amazon Resource Name (ARN) in an IAM policy can be used in the list of resources to check. You can only use a wildcard in the portion of the ARN that specifies the resource ID.</p>
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A conflict exception error.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.</p>
 * @public
 */
export interface Criterion {
  /**
   * <p>An "equals" operator to match for the filter used to create the rule.</p>
   * @public
   */
  eq?: string[] | undefined;

  /**
   * <p>A "not equals" operator to match for the filter used to create the rule.</p>
   * @public
   */
  neq?: string[] | undefined;

  /**
   * <p>A "contains" operator to match for the filter used to create the rule.</p>
   * @public
   */
  contains?: string[] | undefined;

  /**
   * <p>An "exists" operator to match for the filter used to create the rule. </p>
   * @public
   */
  exists?: boolean | undefined;
}

/**
 * <p>Creates an archive rule.</p>
 * @public
 */
export interface CreateArchiveRuleRequest {
  /**
   * <p>The name of the created analyzer.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to create.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The criteria for the rule.</p>
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The seconds to wait to retry.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The specified resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Service quote met error.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Throttling limit exceeded error.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The seconds to wait to retry.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Contains information about a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  NOT_SUPPORTED: "notSupported",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>Validation exception error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that didn't validate.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>Deletes an archive rule.</p>
 * @public
 */
export interface DeleteArchiveRuleRequest {
  /**
   * <p>The name of the analyzer that associated with the archive rule to delete.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to delete.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Retrieves an archive rule.</p>
 * @public
 */
export interface GetArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to retrieve.</p>
   * @public
   */
  ruleName: string | undefined;
}

/**
 * <p>Contains information about an archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p>
 * @public
 */
export interface ArchiveRuleSummary {
  /**
   * <p>The name of the archive rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>A filter used to define the archive rule.</p>
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>The time at which the archive rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the archive rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface GetArchiveRuleResponse {
  /**
   * <p>Contains information about an archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p>
   * @public
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 * @public
 */
export interface ListArchiveRulesRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface ListArchiveRulesResponse {
  /**
   * <p>A list of archive rules created for the specified analyzer.</p>
   * @public
   */
  archiveRules: ArchiveRuleSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Updates the specified archive rule.</p>
 * @public
 */
export interface UpdateArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to update the archive rules for.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to update.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>A filter to match for the rules to update. Only rules that match the filter are updated.</p>
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>An criterion statement in an archive rule. Each archive rule may have multiple criteria.</p>
 * @public
 */
export interface InlineArchiveRule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The condition and values for a criterion.</p>
   * @public
   */
  filter: Record<string, Criterion> | undefined;
}

/**
 * @public
 */
export type ResourceType =
  | "AWS::DynamoDB::Stream"
  | "AWS::DynamoDB::Table"
  | "AWS::EC2::Snapshot"
  | "AWS::ECR::Repository"
  | "AWS::EFS::FileSystem"
  | "AWS::IAM::Role"
  | "AWS::IAM::User"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::RDS::DBClusterSnapshot"
  | "AWS::RDS::DBSnapshot"
  | "AWS::S3::Bucket"
  | "AWS::S3Express::DirectoryBucket"
  | "AWS::SNS::Topic"
  | "AWS::SQS::Queue"
  | "AWS::SecretsManager::Secret";

/**
 * <p>The criteria for an analysis rule for an internal access analyzer.</p>
 * @public
 */
export interface InternalAccessAnalysisRuleCriteria {
  /**
   * <p>A list of Amazon Web Services account IDs to apply to the internal access analysis rule criteria. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>A list of resource types to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources of these types. These resource types are currently supported for internal access analyzers:</p> <ul> <li> <p> <code>AWS::S3::Bucket</code> </p> </li> <li> <p> <code>AWS::RDS::DBSnapshot</code> </p> </li> <li> <p> <code>AWS::RDS::DBClusterSnapshot</code> </p> </li> <li> <p> <code>AWS::S3Express::DirectoryBucket</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Table</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Stream</code> </p> </li> </ul>
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * <p>A list of resource ARNs to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources that match these ARNs.</p>
   * @public
   */
  resourceArns?: string[] | undefined;
}

/**
 * <p>Contains information about analysis rules for the internal access analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.</p>
 * @public
 */
export interface InternalAccessAnalysisRule {
  /**
   * <p>A list of rules for the internal access analyzer containing criteria to include in analysis. Only resources that meet the rule criteria will generate findings.</p>
   * @public
   */
  inclusions?: InternalAccessAnalysisRuleCriteria[] | undefined;
}

/**
 * <p>Specifies the configuration of an internal access analyzer for an Amazon Web Services organization or account. This configuration determines how the analyzer evaluates internal access within your Amazon Web Services environment.</p>
 * @public
 */
export interface InternalAccessConfiguration {
  /**
   * <p>Contains information about analysis rules for the internal access analyzer. These rules determine which resources and access patterns will be analyzed.</p>
   * @public
   */
  analysisRule?: InternalAccessAnalysisRule | undefined;
}

/**
 * <p>The criteria for an analysis rule for an analyzer. The criteria determine which entities will generate findings.</p>
 * @public
 */
export interface AnalysisRuleCriteria {
  /**
   * <p>A list of Amazon Web Services account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers. The list cannot include more than 2,000 account IDs.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, <code>_</code>, <code>.</code>, <code>/</code>, <code>=</code>, <code>+</code>, and <code>-</code>.</p> <p>For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with <code>aws:</code>.</p> <p>For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.</p>
   * @public
   */
  resourceTags?: Record<string, string>[] | undefined;
}

/**
 * <p>Contains information about analysis rules for the analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.</p>
 * @public
 */
export interface AnalysisRule {
  /**
   * <p>A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings.</p>
   * @public
   */
  exclusions?: AnalysisRuleCriteria[] | undefined;
}

/**
 * <p>Contains information about an unused access analyzer.</p>
 * @public
 */
export interface UnusedAccessConfiguration {
  /**
   * <p>The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.</p>
   * @public
   */
  unusedAccessAge?: number | undefined;

  /**
   * <p>Contains information about analysis rules for the analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.</p>
   * @public
   */
  analysisRule?: AnalysisRule | undefined;
}

/**
 * <p>Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.</p>
 * @public
 */
export type AnalyzerConfiguration =
  | AnalyzerConfiguration.InternalAccessMember
  | AnalyzerConfiguration.UnusedAccessMember
  | AnalyzerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AnalyzerConfiguration {
  /**
   * <p>Specifies the configuration of an unused access analyzer for an Amazon Web Services organization or account.</p>
   * @public
   */
  export interface UnusedAccessMember {
    unusedAccess: UnusedAccessConfiguration;
    internalAccess?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies the configuration of an internal access analyzer for an Amazon Web Services organization or account. This configuration determines how the analyzer evaluates access within your Amazon Web Services environment.</p>
   * @public
   */
  export interface InternalAccessMember {
    unusedAccess?: never;
    internalAccess: InternalAccessConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    unusedAccess?: never;
    internalAccess?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    unusedAccess: (value: UnusedAccessConfiguration) => T;
    internalAccess: (value: InternalAccessConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalyzerConfiguration, visitor: Visitor<T>): T => {
    if (value.unusedAccess !== undefined) return visitor.unusedAccess(value.unusedAccess);
    if (value.internalAccess !== undefined) return visitor.internalAccess(value.internalAccess);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export type Type =
  | "ACCOUNT"
  | "ACCOUNT_INTERNAL_ACCESS"
  | "ACCOUNT_UNUSED_ACCESS"
  | "ORGANIZATION"
  | "ORGANIZATION_INTERNAL_ACCESS"
  | "ORGANIZATION_UNUSED_ACCESS";

/**
 * <p>Creates an analyzer.</p>
 * @public
 */
export interface CreateAnalyzerRequest {
  /**
   * <p>The name of the analyzer to create.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>The type of analyzer to create. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.</p>
   * @public
   */
  type: Type | undefined;

  /**
   * <p>Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.</p>
   * @public
   */
  archiveRules?: InlineArchiveRule[] | undefined;

  /**
   * <p>An array of key-value pairs to apply to the analyzer. You can use the set of Unicode letters, digits, whitespace, <code>_</code>, <code>.</code>, <code>/</code>, <code>=</code>, <code>+</code>, and <code>-</code>.</p> <p>For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with <code>aws:</code>.</p> <p>For the tag value, you can specify a value that is 0 to 256 characters in length.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the configuration of the analyzer. If the analyzer is an unused access analyzer, the specified scope of unused access is used for the configuration. If the analyzer is an internal access analyzer, the specified internal access analysis rules are used for the configuration.</p>
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * <p>The response to the request to create an analyzer.</p>
 * @public
 */
export interface CreateAnalyzerResponse {
  /**
   * <p>The ARN of the analyzer that was created by the request.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>Deletes an analyzer.</p>
 * @public
 */
export interface DeleteAnalyzerRequest {
  /**
   * <p>The name of the analyzer to delete.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Retrieves an analyzer.</p>
 * @public
 */
export interface GetAnalyzerRequest {
  /**
   * <p>The name of the analyzer retrieved.</p>
   * @public
   */
  analyzerName: string | undefined;
}

/**
 * @public
 */
export type AnalyzerStatus = "ACTIVE" | "CREATING" | "DISABLED" | "FAILED";

/**
 * @public
 */
export type ReasonCode =
  | "AWS_SERVICE_ACCESS_DISABLED"
  | "DELEGATED_ADMINISTRATOR_DEREGISTERED"
  | "ORGANIZATION_DELETED"
  | "SERVICE_LINKED_ROLE_CREATION_FAILED";

/**
 * <p>Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.</p>
 * @public
 */
export interface StatusReason {
  /**
   * <p>The reason code for the current status of the analyzer.</p>
   * @public
   */
  code: ReasonCode | undefined;
}

/**
 * <p>Contains information about the analyzer.</p>
 * @public
 */
export interface AnalyzerSummary {
  /**
   * <p>The ARN of the analyzer.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the analyzer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type represents the zone of trust or scope for the analyzer.</p>
   * @public
   */
  type: Type | undefined;

  /**
   * <p>A timestamp for the time at which the analyzer was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The resource that was most recently analyzed by the analyzer.</p>
   * @public
   */
  lastResourceAnalyzed?: string | undefined;

  /**
   * <p>The time at which the most recently analyzed resource was analyzed.</p>
   * @public
   */
  lastResourceAnalyzedAt?: Date | undefined;

  /**
   * <p>An array of key-value pairs applied to the analyzer. The key-value pairs consist of the set of Unicode letters, digits, whitespace, <code>_</code>, <code>.</code>, <code>/</code>, <code>=</code>, <code>+</code>, and <code>-</code>.</p> <p>The tag key is a value that is 1 to 128 characters in length and cannot be prefixed with <code>aws:</code>.</p> <p>The tag value is a value that is 0 to 256 characters in length.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The status of the analyzer. An <code>Active</code> analyzer successfully monitors supported resources and generates new findings. The analyzer is <code>Disabled</code> when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is <code>Creating</code> when the analyzer creation is in progress and <code>Failed</code> when the analyzer creation has failed. </p>
   * @public
   */
  status: AnalyzerStatus | undefined;

  /**
   * <p>The <code>statusReason</code> provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.</p>
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * <p>Specifies if the analyzer is an external access, unused access, or internal access analyzer. The <a href="https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html">GetAnalyzer</a> action includes this property in its response if a configuration is specified, while the <a href="https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html">ListAnalyzers</a> action omits it.</p>
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface GetAnalyzerResponse {
  /**
   * <p>An <code>AnalyzerSummary</code> object that contains information about the analyzer.</p>
   * @public
   */
  analyzer: AnalyzerSummary | undefined;
}

/**
 * <p>Retrieves a list of analyzers.</p>
 * @public
 */
export interface ListAnalyzersRequest {
  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of analyzer.</p>
   * @public
   */
  type?: Type | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface ListAnalyzersResponse {
  /**
   * <p>The analyzers retrieved.</p>
   * @public
   */
  analyzers: AnalyzerSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnalyzerRequest {
  /**
   * <p>The name of the analyzer to modify.</p>
   * @public
   */
  analyzerName: string | undefined;

  /**
   * <p>Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.</p>
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAnalyzerResponse {
  /**
   * <p>Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.</p>
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * <p>Retroactively applies an archive rule.</p>
 * @public
 */
export interface ApplyArchiveRuleRequest {
  /**
   * <p>The Amazon resource name (ARN) of the analyzer.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The name of the rule to apply.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelPolicyGenerationRequest {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelPolicyGenerationResponse {}

/**
 * @public
 * @enum
 */
export const AccessCheckPolicyType = {
  IDENTITY_POLICY: "IDENTITY_POLICY",
  RESOURCE_POLICY: "RESOURCE_POLICY",
} as const;

/**
 * @public
 */
export type AccessCheckPolicyType = (typeof AccessCheckPolicyType)[keyof typeof AccessCheckPolicyType];

/**
 * @public
 */
export interface CheckAccessNotGrantedRequest {
  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>An access object containing the permissions that shouldn't be granted by the specified policy. If only actions are specified, IAM Access Analyzer checks for access to peform at least one of the actions on any resource in the policy. If only resources are specified, then IAM Access Analyzer checks for access to perform any action on at least one of the resources. If both actions and resources are specified, IAM Access Analyzer checks for access to perform at least one of the specified actions on at least one of the specified resources.</p>
   * @public
   */
  access: Access[] | undefined;

  /**
   * <p>The type of policy. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets.</p>
   * @public
   */
  policyType: AccessCheckPolicyType | undefined;
}

/**
 * <p>Contains information about the reasoning why a check for access passed or failed.</p>
 * @public
 */
export interface ReasonSummary {
  /**
   * <p>A description of the reasoning of a result of checking for access.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The index number of the reason statement.</p>
   * @public
   */
  statementIndex?: number | undefined;

  /**
   * <p>The identifier for the reason statement.</p>
   * @public
   */
  statementId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CheckAccessNotGrantedResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;

/**
 * @public
 */
export type CheckAccessNotGrantedResult =
  (typeof CheckAccessNotGrantedResult)[keyof typeof CheckAccessNotGrantedResult];

/**
 * @public
 */
export interface CheckAccessNotGrantedResponse {
  /**
   * <p>The result of the check for whether the access is allowed. If the result is <code>PASS</code>, the specified policy doesn't allow any of the specified permissions in the access object. If the result is <code>FAIL</code>, the specified policy might allow some or all of the permissions in the access object.</p>
   * @public
   */
  result?: CheckAccessNotGrantedResult | undefined;

  /**
   * <p>The message indicating whether the specified access is allowed.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A description of the reasoning of the result.</p>
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * <p>The specified parameter is invalid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The specified entity could not be processed.</p>
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
  }
}

/**
 * @public
 */
export interface CheckNoNewAccessRequest {
  /**
   * <p>The JSON policy document to use as the content for the updated policy.</p>
   * @public
   */
  newPolicyDocument: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the existing policy.</p>
   * @public
   */
  existingPolicyDocument: string | undefined;

  /**
   * <p>The type of policy to compare. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.</p>
   * @public
   */
  policyType: AccessCheckPolicyType | undefined;
}

/**
 * @public
 * @enum
 */
export const CheckNoNewAccessResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;

/**
 * @public
 */
export type CheckNoNewAccessResult = (typeof CheckNoNewAccessResult)[keyof typeof CheckNoNewAccessResult];

/**
 * @public
 */
export interface CheckNoNewAccessResponse {
  /**
   * <p>The result of the check for new access. If the result is <code>PASS</code>, no new access is allowed by the updated policy. If the result is <code>FAIL</code>, the updated policy might allow new access.</p>
   * @public
   */
  result?: CheckNoNewAccessResult | undefined;

  /**
   * <p>The message indicating whether the updated policy allows new access.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A description of the reasoning of the result.</p>
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AccessCheckResourceType = {
  API_GATEWAY_REST_API: "AWS::ApiGateway::RestApi",
  BACKUP_VAULT: "AWS::Backup::BackupVault",
  CLOUDTRAIL_DASHBOARD: "AWS::CloudTrail::Dashboard",
  CLOUDTRAIL_EVENT_DATA_STORE: "AWS::CloudTrail::EventDataStore",
  CODE_ARTIFACT_DOMAIN: "AWS::CodeArtifact::Domain",
  DYNAMODB_STREAM: "AWS::DynamoDB::Stream",
  DYNAMODB_TABLE: "AWS::DynamoDB::Table",
  EFS_FILESYSTEM: "AWS::EFS::FileSystem",
  KINESIS_DATA_STREAM: "AWS::Kinesis::Stream",
  KINESIS_STREAM_CONSUMER: "AWS::Kinesis::StreamConsumer",
  KMS_KEY: "AWS::KMS::Key",
  LAMBDA_FUNCTION: "AWS::Lambda::Function",
  OPENSEARCHSERVICE_DOMAIN: "AWS::OpenSearchService::Domain",
  ROLE_TRUST: "AWS::IAM::AssumeRolePolicyDocument",
  S3EXPRESS_DIRECTORYBUCKET: "AWS::S3Express::DirectoryBucket",
  S3_ACCESS_POINT: "AWS::S3::AccessPoint",
  S3_BUCKET: "AWS::S3::Bucket",
  S3_EXPRESS_ACCESS_POINT: "AWS::S3Express::AccessPoint",
  S3_GLACIER: "AWS::S3::Glacier",
  S3_OUTPOSTS_ACCESS_POINT: "AWS::S3Outposts::AccessPoint",
  S3_OUTPOSTS_BUCKET: "AWS::S3Outposts::Bucket",
  S3_TABLE: "AWS::S3Tables::Table",
  S3_TABLE_BUCKET: "AWS::S3Tables::TableBucket",
  SECRETSMANAGER_SECRET: "AWS::SecretsManager::Secret",
  SNS_TOPIC: "AWS::SNS::Topic",
  SQS_QUEUE: "AWS::SQS::Queue",
} as const;

/**
 * @public
 */
export type AccessCheckResourceType = (typeof AccessCheckResourceType)[keyof typeof AccessCheckResourceType];

/**
 * @public
 */
export interface CheckNoPublicAccessRequest {
  /**
   * <p>The JSON policy document to evaluate for public access.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>The type of resource to evaluate for public access. For example, to check for public access to Amazon S3 buckets, you can choose <code>AWS::S3::Bucket</code> for the resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer will return an error.</p>
   * @public
   */
  resourceType: AccessCheckResourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const CheckNoPublicAccessResult = {
  FAIL: "FAIL",
  PASS: "PASS",
} as const;

/**
 * @public
 */
export type CheckNoPublicAccessResult = (typeof CheckNoPublicAccessResult)[keyof typeof CheckNoPublicAccessResult];

/**
 * @public
 */
export interface CheckNoPublicAccessResponse {
  /**
   * <p>The result of the check for public access to the specified resource type. If the result is <code>PASS</code>, the policy doesn't allow public access to the specified resource type. If the result is <code>FAIL</code>, the policy might allow public access to the specified resource type.</p>
   * @public
   */
  result?: CheckNoPublicAccessResult | undefined;

  /**
   * <p>The message indicating whether the specified policy allows public access to resources.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of reasons why the specified resource policy grants public access for the resource type.</p>
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * <p>The proposed access control configuration for a DynamoDB stream. You can propose a configuration for a new DynamoDB stream or an existing DynamoDB stream that you own by specifying the policy for the DynamoDB stream. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html">PutResourcePolicy</a>.</p> <ul> <li> <p>If the configuration is for an existing DynamoDB stream and you do not specify the DynamoDB policy, then the access preview uses the existing DynamoDB policy for the stream.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes a DynamoDB stream without a policy.</p> </li> <li> <p>To propose deletion of an existing DynamoDB stream policy, you can specify an empty string for the DynamoDB policy.</p> </li> </ul>
 * @public
 */
export interface DynamodbStreamConfiguration {
  /**
   * <p>The proposed resource policy defining who can access or manage the DynamoDB stream.</p>
   * @public
   */
  streamPolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for a DynamoDB table or index. You can propose a configuration for a new DynamoDB table or index or an existing DynamoDB table or index that you own by specifying the policy for the DynamoDB table or index. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html">PutResourcePolicy</a>.</p> <ul> <li> <p>If the configuration is for an existing DynamoDB table or index and you do not specify the DynamoDB policy, then the access preview uses the existing DynamoDB policy for the table or index.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes a DynamoDB table without a policy.</p> </li> <li> <p>To propose deletion of an existing DynamoDB table or index policy, you can specify an empty string for the DynamoDB policy.</p> </li> </ul>
 * @public
 */
export interface DynamodbTableConfiguration {
  /**
   * <p>The proposed resource policy defining who can access or manage the DynamoDB table.</p>
   * @public
   */
  tablePolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.</p>
 * @public
 */
export interface EbsSnapshotConfiguration {
  /**
   * <p>The IDs of the Amazon Web Services accounts that have access to the Amazon EBS volume snapshot.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>userIds</code>, then the access preview uses the existing shared <code>userIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>userIds</code>, then the access preview considers the snapshot without any <code>userIds</code>.</p> </li> <li> <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an empty list for <code>userIds</code>.</p> </li> </ul>
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * <p>The groups that have access to the Amazon EBS volume snapshot. If the value <code>all</code> is specified, then the Amazon EBS volume snapshot is public.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>groups</code>, then the access preview uses the existing shared <code>groups</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>groups</code>, then the access preview considers the snapshot without any <code>groups</code>.</p> </li> <li> <p>To propose deletion of existing shared <code>groups</code>, you can specify an empty list for <code>groups</code>.</p> </li> </ul>
   * @public
   */
  groups?: string[] | undefined;

  /**
   * <p>The KMS key identifier for an encrypted Amazon EBS volume snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>kmsKeyId</code>, the access preview considers the snapshot as unencrypted.</p> </li> </ul>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.</p> </li> </ul>
 * @public
 */
export interface EcrRepositoryConfiguration {
  /**
   * <p>The JSON repository policy text to apply to the Amazon ECR repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Private repository policy examples</a> in the <i>Amazon ECR User Guide</i>.</p>
   * @public
   */
  repositoryPolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.</p> </li> </ul>
 * @public
 */
export interface EfsFileSystemConfiguration {
  /**
   * <p>The JSON policy definition to apply to the Amazon EFS file system. For more information on the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">Amazon EFS Resource-based policies</a>.</p>
   * @public
   */
  fileSystemPolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a>.</p>
 * @public
 */
export interface IamRoleConfiguration {
  /**
   * <p>The proposed trust policy for the IAM role.</p>
   * @public
   */
  trustPolicy?: string | undefined;
}

/**
 * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.</p>
 * @public
 */
export interface KmsGrantConstraints {
  /**
   * <p>A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.</p>
   * @public
   */
  encryptionContextEquals?: Record<string, string> | undefined;

  /**
   * <p>A list of key-value pairs that must be included in the encryption context of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.</p>
   * @public
   */
  encryptionContextSubset?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const KmsGrantOperation = {
  CREATE_GRANT: "CreateGrant",
  DECRYPT: "Decrypt",
  DESCRIBE_KEY: "DescribeKey",
  ENCRYPT: "Encrypt",
  GENERATE_DATA_KEY: "GenerateDataKey",
  GENERATE_DATA_KEY_PAIR: "GenerateDataKeyPair",
  GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT: "GenerateDataKeyPairWithoutPlaintext",
  GENERATE_DATA_KEY_WITHOUT_PLAINTEXT: "GenerateDataKeyWithoutPlaintext",
  GET_PUBLIC_KEY: "GetPublicKey",
  REENCRYPT_FROM: "ReEncryptFrom",
  REENCRYPT_TO: "ReEncryptTo",
  RETIRE_GRANT: "RetireGrant",
  SIGN: "Sign",
  VERIFY: "Verify",
} as const;

/**
 * @public
 */
export type KmsGrantOperation = (typeof KmsGrantOperation)[keyof typeof KmsGrantOperation];

/**
 * <p>A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.</p>
 * @public
 */
export interface KmsGrantConfiguration {
  /**
   * <p>A list of operations that the grant permits.</p>
   * @public
   */
  operations: KmsGrantOperation[] | undefined;

  /**
   * <p>The principal that is given permission to perform the operations that the grant permits.</p>
   * @public
   */
  granteePrincipal: string | undefined;

  /**
   * <p>The principal that is given permission to retire the grant by using <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html">RetireGrant</a> operation.</p>
   * @public
   */
  retiringPrincipal?: string | undefined;

  /**
   * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>.</p>
   * @public
   */
  constraints?: KmsGrantConstraints | undefined;

  /**
   * <p> The Amazon Web Services account under which the grant was issued. The account is used to propose KMS grants issued by accounts other than the owner of the key.</p>
   * @public
   */
  issuingAccount: string | undefined;
}

/**
 * <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/>
 * @public
 */
export interface KmsKeyConfiguration {
  /**
   * <p>Resource policy configuration for the KMS key. The only valid value for the name of the key policy is <code>default</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>.</p>
   * @public
   */
  keyPolicies?: Record<string, string> | undefined;

  /**
   * <p>A list of proposed grant configurations for the KMS key. If the proposed grant configuration is for an existing key, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the key.</p>
   * @public
   */
  grants?: KmsGrantConfiguration[] | undefined;
}

/**
 * <p>The values for a manual Amazon RDS DB cluster snapshot attribute.</p>
 * @public
 */
export type RdsDbClusterSnapshotAttributeValue =
  | RdsDbClusterSnapshotAttributeValue.AccountIdsMember
  | RdsDbClusterSnapshotAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace RdsDbClusterSnapshotAttributeValue {
  /**
   * <p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB cluster snapshot. If the value <code>all</code> is specified, then the Amazon RDS DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the <code>accountIds</code> in <code>RdsDbClusterSnapshotAttributeValue</code>, then the access preview uses the existing shared <code>accountIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>accountIds</code> in <code>RdsDbClusterSnapshotAttributeValue</code>, then the access preview considers the snapshot without any attributes.</p> </li> <li> <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an empty list for <code>accountIds</code> in the <code>RdsDbClusterSnapshotAttributeValue</code>.</p> </li> </ul>
   * @public
   */
  export interface AccountIdsMember {
    accountIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountIds?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RdsDbClusterSnapshotAttributeValue, visitor: Visitor<T>): T => {
    if (value.accountIds !== undefined) return visitor.accountIds(value.accountIds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.</p>
 * @public
 */
export interface RdsDbClusterSnapshotConfiguration {
  /**
   * <p>The names and values of manual DB cluster snapshot attributes. Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. The only valid value for <code>AttributeName</code> for the attribute map is <code>restore</code> </p>
   * @public
   */
  attributes?: Record<string, RdsDbClusterSnapshotAttributeValue> | undefined;

  /**
   * <p>The KMS key identifier for an encrypted Amazon RDS DB cluster snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>kmsKeyId</code>, then the access preview considers the snapshot as unencrypted.</p> </li> </ul>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot.</p>
 * @public
 */
export type RdsDbSnapshotAttributeValue =
  | RdsDbSnapshotAttributeValue.AccountIdsMember
  | RdsDbSnapshotAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace RdsDbSnapshotAttributeValue {
  /**
   * <p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB snapshot. If the value <code>all</code> is specified, then the Amazon RDS DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the access preview uses the existing shared <code>accountIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the access preview considers the snapshot without any attributes.</p> </li> <li> <p>To propose deletion of an existing shared <code>accountIds</code>, you can specify an empty list for <code>accountIds</code> in the <code>RdsDbSnapshotAttributeValue</code>.</p> </li> </ul>
   * @public
   */
  export interface AccountIdsMember {
    accountIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountIds?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RdsDbSnapshotAttributeValue, visitor: Visitor<T>): T => {
    if (value.accountIds !== undefined) return visitor.accountIds(value.accountIds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>.</p>
 * @public
 */
export interface RdsDbSnapshotConfiguration {
  /**
   * <p>The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid value for <code>attributeName</code> for the attribute map is restore.</p>
   * @public
   */
  attributes?: Record<string, RdsDbSnapshotAttributeValue> | undefined;

  /**
   * <p>The KMS key identifier for an encrypted Amazon RDS DB snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>kmsKeyId</code>, then the access preview considers the snapshot as unencrypted.</p> </li> </ul>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>This configuration sets the network origin for the Amazon S3 access point or multi-region access point to <code>Internet</code>.</p>
 * @public
 */
export interface InternetConfiguration {}

/**
 * <p>The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. </p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p> If this field is specified, this access point will only allow connections from the specified VPC ID. </p>
   * @public
   */
  vpcId: string | undefined;
}

/**
 * <p>The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.</p>
 * @public
 */
export type NetworkOriginConfiguration =
  | NetworkOriginConfiguration.InternetConfigurationMember
  | NetworkOriginConfiguration.VpcConfigurationMember
  | NetworkOriginConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace NetworkOriginConfiguration {
  /**
   * <p>The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. </p>
   * @public
   */
  export interface VpcConfigurationMember {
    vpcConfiguration: VpcConfiguration;
    internetConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for the Amazon S3 access point or multi-region access point with an <code>Internet</code> origin.</p>
   * @public
   */
  export interface InternetConfigurationMember {
    vpcConfiguration?: never;
    internetConfiguration: InternetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    vpcConfiguration?: never;
    internetConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vpcConfiguration: (value: VpcConfiguration) => T;
    internetConfiguration: (value: InternetConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NetworkOriginConfiguration, visitor: Visitor<T>): T => {
    if (value.vpcConfiguration !== undefined) return visitor.vpcConfiguration(value.vpcConfiguration);
    if (value.internetConfiguration !== undefined) return visitor.internetConfiguration(value.internetConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>. </p>
 * @public
 */
export interface S3PublicAccessBlockConfiguration {
  /**
   * <p> Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. </p>
   * @public
   */
  ignorePublicAcls: boolean | undefined;

  /**
   * <p> Specifies whether Amazon S3 should restrict public bucket policies for this bucket. </p>
   * @public
   */
  restrictPublicBuckets: boolean | undefined;
}

/**
 * <p>The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>.</p>
 * @public
 */
export interface S3AccessPointConfiguration {
  /**
   * <p>The access point or multi-region access point policy.</p>
   * @public
   */
  accessPointPolicy?: string | undefined;

  /**
   * <p>The proposed <code>S3PublicAccessBlock</code> configuration to apply to this Amazon S3 access point or multi-region access point.</p>
   * @public
   */
  publicAccessBlock?: S3PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The proposed <code>Internet</code> and <code>VpcConfiguration</code> to apply to this Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. If the access preview is for a new resource and neither is specified, the access preview uses <code>Internet</code> for the network origin. If the access preview is for an existing resource and neither is specified, the access preview uses the existing network origin.</p>
   * @public
   */
  networkOrigin?: NetworkOriginConfiguration | undefined;
}

/**
 * <p>You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.</p>
 * @public
 */
export type AclGrantee = AclGrantee.IdMember | AclGrantee.UriMember | AclGrantee.$UnknownMember;

/**
 * @public
 */
export namespace AclGrantee {
  /**
   * <p>The value specified is the canonical user ID of an Amazon Web Services account.</p>
   * @public
   */
  export interface IdMember {
    id: string;
    uri?: never;
    $unknown?: never;
  }

  /**
   * <p>Used for granting permissions to a predefined group.</p>
   * @public
   */
  export interface UriMember {
    id?: never;
    uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    id?: never;
    uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    id: (value: string) => T;
    uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AclGrantee, visitor: Visitor<T>): T => {
    if (value.id !== undefined) return visitor.id(value.id);
    if (value.uri !== undefined) return visitor.uri(value.uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AclPermission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type AclPermission = (typeof AclPermission)[keyof typeof AclPermission];

/**
 * <p>A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.</p>
 * @public
 */
export interface S3BucketAclGrantConfiguration {
  /**
   * <p>The permissions being granted.</p>
   * @public
   */
  permission: AclPermission | undefined;

  /**
   * <p>The grantee to whom you’re assigning access rights.</p>
   * @public
   */
  grantee: AclGrantee | undefined;
}

/**
 * <p>Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.</p>
 * @public
 */
export interface S3BucketConfiguration {
  /**
   * <p>The proposed bucket policy for the Amazon S3 bucket.</p>
   * @public
   */
  bucketPolicy?: string | undefined;

  /**
   * <p>The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL grants per bucket. If the proposed grant configuration is for an existing bucket, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the bucket.</p>
   * @public
   */
  bucketAclGrants?: S3BucketAclGrantConfiguration[] | undefined;

  /**
   * <p>The proposed block public access configuration for the Amazon S3 bucket.</p>
   * @public
   */
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The configuration of Amazon S3 access points or multi-region access points for the bucket. You can propose up to 10 new access points per bucket.</p>
   * @public
   */
  accessPoints?: Record<string, S3AccessPointConfiguration> | undefined;
}

/**
 * <p>Proposed configuration for an access point attached to an Amazon S3 directory bucket. You can propose up to 10 access points per bucket. If the proposed access point configuration is for an existing Amazon S3 directory bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information about access points for Amazon S3 directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html">Managing access to directory buckets with access points</a> in the Amazon Simple Storage Service User Guide.</p>
 * @public
 */
export interface S3ExpressDirectoryAccessPointConfiguration {
  /**
   * <p>The proposed access point policy for an Amazon S3 directory bucket access point.</p>
   * @public
   */
  accessPointPolicy?: string | undefined;

  /**
   * <p>The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.</p>
   * @public
   */
  networkOrigin?: NetworkOriginConfiguration | undefined;
}

/**
 * <p>Proposed access control configuration for an Amazon S3 directory bucket. You can propose a configuration for a new Amazon S3 directory bucket or an existing Amazon S3 directory bucket that you own by specifying the Amazon S3 bucket policy. If the configuration is for an existing Amazon S3 directory bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the directory bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes an directory bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about Amazon S3 directory bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html">Example bucket policies for directory buckets</a> in the Amazon Simple Storage Service User Guide.</p>
 * @public
 */
export interface S3ExpressDirectoryBucketConfiguration {
  /**
   * <p>The proposed bucket policy for the Amazon S3 directory bucket.</p>
   * @public
   */
  bucketPolicy?: string | undefined;

  /**
   * <p>The proposed access points for the Amazon S3 directory bucket.</p>
   * @public
   */
  accessPoints?: Record<string, S3ExpressDirectoryAccessPointConfiguration> | undefined;
}

/**
 * <p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p> <p>You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for Secrets Manager.</a>.</p>
 * @public
 */
export interface SecretsManagerSecretConfiguration {
  /**
   * <p>The proposed ARN, key ID, or alias of the KMS key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The proposed resource policy defining who can access or manage the secret.</p>
   * @public
   */
  secretPolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>.</p>
 * @public
 */
export interface SnsTopicConfiguration {
  /**
   * <p>The JSON policy text that defines who can access an Amazon SNS topic. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html">Example cases for Amazon SNS access control</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   * @public
   */
  topicPolicy?: string | undefined;
}

/**
 * <p>The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>.</p>
 * @public
 */
export interface SqsQueueConfiguration {
  /**
   * <p> The proposed resource policy for the Amazon SQS queue. </p>
   * @public
   */
  queuePolicy?: string | undefined;
}

/**
 * <p>Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.</p>
 * @public
 */
export type Configuration =
  | Configuration.DynamodbStreamMember
  | Configuration.DynamodbTableMember
  | Configuration.EbsSnapshotMember
  | Configuration.EcrRepositoryMember
  | Configuration.EfsFileSystemMember
  | Configuration.IamRoleMember
  | Configuration.KmsKeyMember
  | Configuration.RdsDbClusterSnapshotMember
  | Configuration.RdsDbSnapshotMember
  | Configuration.S3BucketMember
  | Configuration.S3ExpressDirectoryBucketMember
  | Configuration.SecretsManagerSecretMember
  | Configuration.SnsTopicMember
  | Configuration.SqsQueueMember
  | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * <p>The access control configuration is for an Amazon EBS volume snapshot.</p>
   * @public
   */
  export interface EbsSnapshotMember {
    ebsSnapshot: EbsSnapshotConfiguration;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon ECR repository.</p>
   * @public
   */
  export interface EcrRepositoryMember {
    ebsSnapshot?: never;
    ecrRepository: EcrRepositoryConfiguration;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an IAM role. </p>
   * @public
   */
  export interface IamRoleMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole: IamRoleConfiguration;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon EFS file system.</p>
   * @public
   */
  export interface EfsFileSystemMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem: EfsFileSystemConfiguration;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a KMS key. </p>
   * @public
   */
  export interface KmsKeyMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey: KmsKeyConfiguration;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon RDS DB cluster snapshot.</p>
   * @public
   */
  export interface RdsDbClusterSnapshotMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot: RdsDbClusterSnapshotConfiguration;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon RDS DB snapshot.</p>
   * @public
   */
  export interface RdsDbSnapshotMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot: RdsDbSnapshotConfiguration;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a Secrets Manager secret.</p>
   * @public
   */
  export interface SecretsManagerSecretMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret: SecretsManagerSecretConfiguration;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon S3 bucket. </p>
   * @public
   */
  export interface S3BucketMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket: S3BucketConfiguration;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon SNS topic</p>
   * @public
   */
  export interface SnsTopicMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic: SnsTopicConfiguration;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon SQS queue. </p>
   * @public
   */
  export interface SqsQueueMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue: SqsQueueConfiguration;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon S3 directory bucket.</p>
   * @public
   */
  export interface S3ExpressDirectoryBucketMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket: S3ExpressDirectoryBucketConfiguration;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a DynamoDB stream.</p>
   * @public
   */
  export interface DynamodbStreamMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream: DynamodbStreamConfiguration;
    dynamodbTable?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a DynamoDB table or index.</p>
   * @public
   */
  export interface DynamodbTableMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable: DynamodbTableConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    s3ExpressDirectoryBucket?: never;
    dynamodbStream?: never;
    dynamodbTable?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ebsSnapshot: (value: EbsSnapshotConfiguration) => T;
    ecrRepository: (value: EcrRepositoryConfiguration) => T;
    iamRole: (value: IamRoleConfiguration) => T;
    efsFileSystem: (value: EfsFileSystemConfiguration) => T;
    kmsKey: (value: KmsKeyConfiguration) => T;
    rdsDbClusterSnapshot: (value: RdsDbClusterSnapshotConfiguration) => T;
    rdsDbSnapshot: (value: RdsDbSnapshotConfiguration) => T;
    secretsManagerSecret: (value: SecretsManagerSecretConfiguration) => T;
    s3Bucket: (value: S3BucketConfiguration) => T;
    snsTopic: (value: SnsTopicConfiguration) => T;
    sqsQueue: (value: SqsQueueConfiguration) => T;
    s3ExpressDirectoryBucket: (value: S3ExpressDirectoryBucketConfiguration) => T;
    dynamodbStream: (value: DynamodbStreamConfiguration) => T;
    dynamodbTable: (value: DynamodbTableConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.ebsSnapshot !== undefined) return visitor.ebsSnapshot(value.ebsSnapshot);
    if (value.ecrRepository !== undefined) return visitor.ecrRepository(value.ecrRepository);
    if (value.iamRole !== undefined) return visitor.iamRole(value.iamRole);
    if (value.efsFileSystem !== undefined) return visitor.efsFileSystem(value.efsFileSystem);
    if (value.kmsKey !== undefined) return visitor.kmsKey(value.kmsKey);
    if (value.rdsDbClusterSnapshot !== undefined) return visitor.rdsDbClusterSnapshot(value.rdsDbClusterSnapshot);
    if (value.rdsDbSnapshot !== undefined) return visitor.rdsDbSnapshot(value.rdsDbSnapshot);
    if (value.secretsManagerSecret !== undefined) return visitor.secretsManagerSecret(value.secretsManagerSecret);
    if (value.s3Bucket !== undefined) return visitor.s3Bucket(value.s3Bucket);
    if (value.snsTopic !== undefined) return visitor.snsTopic(value.snsTopic);
    if (value.sqsQueue !== undefined) return visitor.sqsQueue(value.sqsQueue);
    if (value.s3ExpressDirectoryBucket !== undefined)
      return visitor.s3ExpressDirectoryBucket(value.s3ExpressDirectoryBucket);
    if (value.dynamodbStream !== undefined) return visitor.dynamodbStream(value.dynamodbStream);
    if (value.dynamodbTable !== undefined) return visitor.dynamodbTable(value.dynamodbTable);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateAccessPreviewRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.</p>
   * @public
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPreviewResponse {
  /**
   * <p>The unique ID for the access preview.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GenerateFindingRecommendationRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the finding recommendation.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The unique ID for the finding recommendation.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPreviewRequest {
  /**
   * <p>The unique ID for the access preview.</p>
   * @public
   */
  accessPreviewId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.</p>
   * @public
   */
  analyzerArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AccessPreviewStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type AccessPreviewStatus = (typeof AccessPreviewStatus)[keyof typeof AccessPreviewStatus];

/**
 * @public
 * @enum
 */
export const AccessPreviewStatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
} as const;

/**
 * @public
 */
export type AccessPreviewStatusReasonCode =
  (typeof AccessPreviewStatusReasonCode)[keyof typeof AccessPreviewStatusReasonCode];

/**
 * <p>Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.</p>
 * @public
 */
export interface AccessPreviewStatusReason {
  /**
   * <p>The reason code for the current status of the access preview.</p>
   * @public
   */
  code: AccessPreviewStatusReasonCode | undefined;
}

/**
 * <p>Contains information about an access preview.</p>
 * @public
 */
export interface AccessPreview {
  /**
   * <p>The unique ID for the access preview.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>A map of resource ARNs for the proposed resource configuration.</p>
   * @public
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * <p>The time at which the access preview was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The status of the access preview.</p> <ul> <li> <p> <code>Creating</code> - The access preview creation is in progress.</p> </li> <li> <p> <code>Completed</code> - The access preview is complete. You can preview findings for external access to the resource.</p> </li> <li> <p> <code>Failed</code> - The access preview creation has failed.</p> </li> </ul>
   * @public
   */
  status: AccessPreviewStatus | undefined;

  /**
   * <p>Provides more details about the current status of the access preview.</p> <p>For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid resource configuration.</p>
   * @public
   */
  statusReason?: AccessPreviewStatusReason | undefined;
}

/**
 * @public
 */
export interface GetAccessPreviewResponse {
  /**
   * <p>An object that contains information about the access preview.</p>
   * @public
   */
  accessPreview: AccessPreview | undefined;
}

/**
 * <p>Retrieves an analyzed resource.</p>
 * @public
 */
export interface GetAnalyzedResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve information from.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to retrieve information about.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

/**
 * <p>Contains details about the analyzed resource.</p>
 * @public
 */
export interface AnalyzedResource {
  /**
   * <p>The ARN of the resource that was analyzed.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of the resource that was analyzed.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding grants public access to the resource.</p>
   * @public
   */
  isPublic: boolean | undefined;

  /**
   * <p>The actions that an external principal is granted permission to use by the policy that generated the finding.</p>
   * @public
   */
  actions?: string[] | undefined;

  /**
   * <p>Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  sharedVia?: string[] | undefined;

  /**
   * <p>The current status of the finding generated from the analyzed resource.</p>
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface GetAnalyzedResourceResponse {
  /**
   * <p>An <code>AnalyzedResource</code> object that contains information that IAM Access Analyzer found when it analyzed the resource.</p>
   * @public
   */
  resource?: AnalyzedResource | undefined;
}

/**
 * <p>Retrieves a finding.</p>
 * @public
 */
export interface GetFindingRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the finding.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ID of the finding to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceControlPolicyRestriction = {
  APPLICABLE: "APPLICABLE",
  APPLIED: "APPLIED",
  FAILED_TO_EVALUATE_RCP: "FAILED_TO_EVALUATE_RCP",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;

/**
 * @public
 */
export type ResourceControlPolicyRestriction =
  (typeof ResourceControlPolicyRestriction)[keyof typeof ResourceControlPolicyRestriction];

/**
 * <p>Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
 * @public
 */
export interface FindingSourceDetail {
  /**
   * <p>The ARN of the access point that generated the finding. The ARN format depends on whether the ARN represents an access point or a multi-region access point.</p>
   * @public
   */
  accessPointArn?: string | undefined;

  /**
   * <p>The account of the cross-account access point that generated the finding.</p>
   * @public
   */
  accessPointAccount?: string | undefined;
}

/**
 * @public
 */
export type FindingSourceType = "BUCKET_ACL" | "POLICY" | "S3_ACCESS_POINT" | "S3_ACCESS_POINT_ACCOUNT";

/**
 * <p>The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
 * @public
 */
export interface FindingSource {
  /**
   * <p>Indicates the type of access that generated the finding.</p>
   * @public
   */
  type: FindingSourceType | undefined;

  /**
   * <p>Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  detail?: FindingSourceDetail | undefined;
}

/**
 * <p>Contains information about a finding.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to use.</p>
   * @public
   */
  action?: string[] | undefined;

  /**
   * <p>The resource that an external principal has access to.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the resource.</p>
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * <p>The type of the resource identified in the finding.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * <p>The time at which the finding was generated.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * <p>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).</p>
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface GetFindingResponse {
  /**
   * <p>A <code>finding</code> object that contains finding details.</p>
   * @public
   */
  finding?: Finding | undefined;
}

/**
 * @public
 */
export interface GetFindingRecommendationRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the finding recommendation.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The unique ID for the finding recommendation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about the reason that the retrieval of a recommendation for a finding failed.</p>
 * @public
 */
export interface RecommendationError {
  /**
   * <p>The error code for a failed retrieval of a recommendation for a finding.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The error message for a failed retrieval of a recommendation for a finding.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  UNUSED_PERMISSION_RECOMMENDATION: "UnusedPermissionRecommendation",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const RecommendedRemediationAction = {
  CREATE_POLICY: "CREATE_POLICY",
  DETACH_POLICY: "DETACH_POLICY",
} as const;

/**
 * @public
 */
export type RecommendedRemediationAction =
  (typeof RecommendedRemediationAction)[keyof typeof RecommendedRemediationAction];

/**
 * <p>Contains information about the action to take for a policy in an unused permissions finding.</p>
 * @public
 */
export interface UnusedPermissionsRecommendedStep {
  /**
   * <p>The time at which the existing policy for the unused permissions finding was last updated.</p>
   * @public
   */
  policyUpdatedAt?: Date | undefined;

  /**
   * <p>A recommendation of whether to create or detach a policy for an unused permissions finding.</p>
   * @public
   */
  recommendedAction: RecommendedRemediationAction | undefined;

  /**
   * <p>If the recommended action for the unused permissions finding is to replace the existing policy, the contents of the recommended policy to replace the policy specified in the <code>existingPolicyId</code> field.</p>
   * @public
   */
  recommendedPolicy?: string | undefined;

  /**
   * <p>If the recommended action for the unused permissions finding is to detach a policy, the ID of an existing policy to be detached.</p>
   * @public
   */
  existingPolicyId?: string | undefined;
}

/**
 * <p>Contains information about a recommended step for an unused access analyzer finding.</p>
 * @public
 */
export type RecommendedStep = RecommendedStep.UnusedPermissionsRecommendedStepMember | RecommendedStep.$UnknownMember;

/**
 * @public
 */
export namespace RecommendedStep {
  /**
   * <p>A recommended step for an unused permissions finding.</p>
   * @public
   */
  export interface UnusedPermissionsRecommendedStepMember {
    unusedPermissionsRecommendedStep: UnusedPermissionsRecommendedStep;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    unusedPermissionsRecommendedStep?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    unusedPermissionsRecommendedStep: (value: UnusedPermissionsRecommendedStep) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RecommendedStep, visitor: Visitor<T>): T => {
    if (value.unusedPermissionsRecommendedStep !== undefined)
      return visitor.unusedPermissionsRecommendedStep(value.unusedPermissionsRecommendedStep);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface GetFindingRecommendationResponse {
  /**
   * <p>The time at which the retrieval of the finding recommendation was started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time at which the retrieval of the finding recommendation was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Detailed information about the reason that the retrieval of a recommendation for the finding failed.</p>
   * @public
   */
  error?: RecommendationError | undefined;

  /**
   * <p>The ARN of the resource of the finding.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A group of recommended steps for the finding.</p>
   * @public
   */
  recommendedSteps?: RecommendedStep[] | undefined;

  /**
   * <p>The type of recommendation for the finding.</p>
   * @public
   */
  recommendationType: RecommendationType | undefined;

  /**
   * <p>The status of the retrieval of the finding recommendation.</p>
   * @public
   */
  status: Status | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the statistics.</p>
   * @public
   */
  analyzerArn: string | undefined;
}

/**
 * <p>Contains information about the total number of active cross-account and public findings for a resource type of an external access analyzer.</p>
 * @public
 */
export interface ResourceTypeDetails {
  /**
   * <p>The total number of active public findings for the resource type.</p>
   * @public
   */
  totalActivePublic?: number | undefined;

  /**
   * <p>The total number of active cross-account findings for the resource type.</p>
   * @public
   */
  totalActiveCrossAccount?: number | undefined;

  /**
   * <p>The total number of active errors for the resource type.</p>
   * @public
   */
  totalActiveErrors?: number | undefined;
}

/**
 * <p>Provides aggregate statistics about the findings for the specified external access analyzer.</p>
 * @public
 */
export interface ExternalAccessFindingsStatistics {
  /**
   * <p>The total number of active cross-account and public findings for each resource type of the specified external access analyzer.</p>
   * @public
   */
  resourceTypeStatistics?: Partial<Record<ResourceType, ResourceTypeDetails>> | undefined;

  /**
   * <p>The number of active findings for the specified external access analyzer.</p>
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * <p>The number of archived findings for the specified external access analyzer.</p>
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * <p>The number of resolved findings for the specified external access analyzer.</p>
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * <p>Contains information about the total number of active, archived, and resolved findings for a resource type of an internal access analyzer.</p>
 * @public
 */
export interface InternalAccessResourceTypeDetails {
  /**
   * <p>The total number of active findings for the resource type in the internal access analyzer.</p>
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * <p>The total number of resolved findings for the resource type in the internal access analyzer.</p>
   * @public
   */
  totalResolvedFindings?: number | undefined;

  /**
   * <p>The total number of archived findings for the resource type in the internal access analyzer.</p>
   * @public
   */
  totalArchivedFindings?: number | undefined;
}

/**
 * <p>Provides aggregate statistics about the findings for the specified internal access analyzer. This includes counts of active, archived, and resolved findings.</p>
 * @public
 */
export interface InternalAccessFindingsStatistics {
  /**
   * <p>The total number of active findings for each resource type of the specified internal access analyzer.</p>
   * @public
   */
  resourceTypeStatistics?: Partial<Record<ResourceType, InternalAccessResourceTypeDetails>> | undefined;

  /**
   * <p>The number of active findings for the specified internal access analyzer.</p>
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * <p>The number of archived findings for the specified internal access analyzer.</p>
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * <p>The number of resolved findings for the specified internal access analyzer.</p>
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * <p>Contains information about the findings for an Amazon Web Services account in an organization unused access analyzer.</p>
 * @public
 */
export interface FindingAggregationAccountDetails {
  /**
   * <p>The ID of the Amazon Web Services account for which unused access finding details are provided.</p>
   * @public
   */
  account?: string | undefined;

  /**
   * <p>The number of active unused access findings for the specified Amazon Web Services account.</p>
   * @public
   */
  numberOfActiveFindings?: number | undefined;

  /**
   * <p>Provides the number of active findings for each type of unused access for the specified Amazon Web Services account.</p>
   * @public
   */
  details?: Record<string, number> | undefined;
}

/**
 * <p>Contains information about the total number of findings for a type of unused access.</p>
 * @public
 */
export interface UnusedAccessTypeStatistics {
  /**
   * <p>The type of unused access.</p>
   * @public
   */
  unusedAccessType?: string | undefined;

  /**
   * <p>The total number of findings for the specified unused access type.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * <p>Provides aggregate statistics about the findings for the specified unused access analyzer.</p>
 * @public
 */
export interface UnusedAccessFindingsStatistics {
  /**
   * <p>A list of details about the total number of findings for each type of unused access for the analyzer. </p>
   * @public
   */
  unusedAccessTypeStatistics?: UnusedAccessTypeStatistics[] | undefined;

  /**
   * <p>A list of one to ten Amazon Web Services accounts that have the most active findings for the unused access analyzer.</p>
   * @public
   */
  topAccounts?: FindingAggregationAccountDetails[] | undefined;

  /**
   * <p>The total number of active findings for the unused access analyzer.</p>
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * <p>The total number of archived findings for the unused access analyzer.</p>
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * <p>The total number of resolved findings for the unused access analyzer.</p>
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * <p>Contains information about the aggregate statistics for an external or unused access analyzer. Only one parameter can be used in a <code>FindingsStatistics</code> object.</p>
 * @public
 */
export type FindingsStatistics =
  | FindingsStatistics.ExternalAccessFindingsStatisticsMember
  | FindingsStatistics.InternalAccessFindingsStatisticsMember
  | FindingsStatistics.UnusedAccessFindingsStatisticsMember
  | FindingsStatistics.$UnknownMember;

/**
 * @public
 */
export namespace FindingsStatistics {
  /**
   * <p>The aggregate statistics for an external access analyzer.</p>
   * @public
   */
  export interface ExternalAccessFindingsStatisticsMember {
    externalAccessFindingsStatistics: ExternalAccessFindingsStatistics;
    internalAccessFindingsStatistics?: never;
    unusedAccessFindingsStatistics?: never;
    $unknown?: never;
  }

  /**
   * <p>The aggregate statistics for an internal access analyzer. This includes information about active, archived, and resolved findings related to internal access within your Amazon Web Services organization or account.</p>
   * @public
   */
  export interface InternalAccessFindingsStatisticsMember {
    externalAccessFindingsStatistics?: never;
    internalAccessFindingsStatistics: InternalAccessFindingsStatistics;
    unusedAccessFindingsStatistics?: never;
    $unknown?: never;
  }

  /**
   * <p>The aggregate statistics for an unused access analyzer.</p>
   * @public
   */
  export interface UnusedAccessFindingsStatisticsMember {
    externalAccessFindingsStatistics?: never;
    internalAccessFindingsStatistics?: never;
    unusedAccessFindingsStatistics: UnusedAccessFindingsStatistics;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    externalAccessFindingsStatistics?: never;
    internalAccessFindingsStatistics?: never;
    unusedAccessFindingsStatistics?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    externalAccessFindingsStatistics: (value: ExternalAccessFindingsStatistics) => T;
    internalAccessFindingsStatistics: (value: InternalAccessFindingsStatistics) => T;
    unusedAccessFindingsStatistics: (value: UnusedAccessFindingsStatistics) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FindingsStatistics, visitor: Visitor<T>): T => {
    if (value.externalAccessFindingsStatistics !== undefined)
      return visitor.externalAccessFindingsStatistics(value.externalAccessFindingsStatistics);
    if (value.internalAccessFindingsStatistics !== undefined)
      return visitor.internalAccessFindingsStatistics(value.internalAccessFindingsStatistics);
    if (value.unusedAccessFindingsStatistics !== undefined)
      return visitor.unusedAccessFindingsStatistics(value.unusedAccessFindingsStatistics);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * <p>A group of external access or unused access findings statistics.</p>
   * @public
   */
  findingsStatistics?: FindingsStatistics[] | undefined;

  /**
   * <p>The time at which the retrieval of the findings statistics was last updated. If the findings statistics have not been previously retrieved for the specified analyzer, this field will not be populated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetFindingV2Request {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the finding.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ID of the finding to retrieve.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about an external access finding.</p>
 * @public
 */
export interface ExternalAccessDetails {
  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to use.</p>
   * @public
   */
  action?: string[] | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in an external access finding.</p>
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the external access finding is public.</p>
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * <p>The sources of the external access finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * <p>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).</p> <ul> <li> <p> <code>APPLICABLE</code>: There is an RCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. For example, if <code>s3:DeleteObject</code> is blocked by the RCP and the restriction is <code>APPLICABLE</code>, then <code>s3:DeleteObject</code> would still be included in the list of actions for the finding.</p> </li> <li> <p> <code>FAILED_TO_EVALUATE_RCP</code>: There was an error evaluating the RCP.</p> </li> <li> <p> <code>NOT_APPLICABLE</code>: There was no RCP present in the organization, or there was no RCP applicable to the resource. For example, the resource being analyzed is an Amazon RDS snapshot and there is an RCP in the organization, but the RCP only impacts Amazon S3 buckets.</p> </li> <li> <p> <code>APPLIED</code>: This restriction is not currently available for external access findings. </p> </li> </ul>
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * @public
 * @enum
 */
export const InternalAccessType = {
  INTRA_ACCOUNT: "INTRA_ACCOUNT",
  INTRA_ORG: "INTRA_ORG",
} as const;

/**
 * @public
 */
export type InternalAccessType = (typeof InternalAccessType)[keyof typeof InternalAccessType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ServiceControlPolicyRestriction = {
  APPLICABLE: "APPLICABLE",
  APPLIED: "APPLIED",
  FAILED_TO_EVALUATE_SCP: "FAILED_TO_EVALUATE_SCP",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;

/**
 * @public
 */
export type ServiceControlPolicyRestriction =
  (typeof ServiceControlPolicyRestriction)[keyof typeof ServiceControlPolicyRestriction];

/**
 * <p>Contains information about an internal access finding. This includes details about the access that was identified within your Amazon Web Services organization or account.</p>
 * @public
 */
export interface InternalAccessDetails {
  /**
   * <p>The action in the analyzed policy statement that has internal access permission to use.</p>
   * @public
   */
  action?: string[] | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in an internal access finding.</p>
   * @public
   */
  condition?: Record<string, string> | undefined;

  /**
   * <p>The principal that has access to a resource within the internal environment.</p>
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the principal identified in the internal access finding.</p>
   * @public
   */
  principalOwnerAccount?: string | undefined;

  /**
   * <p>The type of internal access identified in the finding. This indicates how the access is granted within your Amazon Web Services environment.</p>
   * @public
   */
  accessType?: InternalAccessType | undefined;

  /**
   * <p>The type of principal identified in the internal access finding, such as IAM role or IAM user.</p>
   * @public
   */
  principalType?: PrincipalType | undefined;

  /**
   * <p>The sources of the internal access finding. This indicates how the access that generated the finding is granted within your Amazon Web Services environment.</p>
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * <p>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).</p> <ul> <li> <p> <code>APPLICABLE</code>: There is an RCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. For example, if <code>s3:DeleteObject</code> is blocked by the RCP and the restriction is <code>APPLICABLE</code>, then <code>s3:DeleteObject</code> would still be included in the list of actions for the finding. Only applicable to internal access findings with the account as the zone of trust. </p> </li> <li> <p> <code>FAILED_TO_EVALUATE_RCP</code>: There was an error evaluating the RCP.</p> </li> <li> <p> <code>NOT_APPLICABLE</code>: There was no RCP present in the organization. For internal access findings with the account as the zone of trust, <code>NOT_APPLICABLE</code> could also indicate that there was no RCP applicable to the resource.</p> </li> <li> <p> <code>APPLIED</code>: An RCP is present in the organization and IAM Access Analyzer included it in the evaluation of effective permissions. For example, if <code>s3:DeleteObject</code> is blocked by the RCP and the restriction is <code>APPLIED</code>, then <code>s3:DeleteObject</code> would not be included in the list of actions for the finding. Only applicable to internal access findings with the organization as the zone of trust. </p> </li> </ul>
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;

  /**
   * <p>The type of restriction applied to the finding by an Organizations service control policy (SCP).</p> <ul> <li> <p> <code>APPLICABLE</code>: There is an SCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. Only applicable to internal access findings with the account as the zone of trust. </p> </li> <li> <p> <code>FAILED_TO_EVALUATE_SCP</code>: There was an error evaluating the SCP.</p> </li> <li> <p> <code>NOT_APPLICABLE</code>: There was no SCP present in the organization. For internal access findings with the account as the zone of trust, <code>NOT_APPLICABLE</code> could also indicate that there was no SCP applicable to the principal.</p> </li> <li> <p> <code>APPLIED</code>: An SCP is present in the organization and IAM Access Analyzer included it in the evaluation of effective permissions. Only applicable to internal access findings with the organization as the zone of trust. </p> </li> </ul>
   * @public
   */
  serviceControlPolicyRestriction?: ServiceControlPolicyRestriction | undefined;
}

/**
 * <p>Contains information about an unused access finding for an IAM role. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see <a href="https://aws.amazon.com/iam/access-analyzer/pricing">IAM Access Analyzer pricing</a>.</p>
 * @public
 */
export interface UnusedIamRoleDetails {
  /**
   * <p>The time at which the role was last accessed.</p>
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * <p>Contains information about an unused access finding for an IAM user access key. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see <a href="https://aws.amazon.com/iam/access-analyzer/pricing">IAM Access Analyzer pricing</a>.</p>
 * @public
 */
export interface UnusedIamUserAccessKeyDetails {
  /**
   * <p>The ID of the access key for which the unused access finding was generated.</p>
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * <p>The time at which the access key was last accessed.</p>
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * <p>Contains information about an unused access finding for an IAM user password. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see <a href="https://aws.amazon.com/iam/access-analyzer/pricing">IAM Access Analyzer pricing</a>.</p>
 * @public
 */
export interface UnusedIamUserPasswordDetails {
  /**
   * <p>The time at which the password was last accessed.</p>
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * <p>Contains information about an unused access finding for an action. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see <a href="https://aws.amazon.com/iam/access-analyzer/pricing">IAM Access Analyzer pricing</a>.</p>
 * @public
 */
export interface UnusedAction {
  /**
   * <p>The action for which the unused access finding was generated.</p>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The time at which the action was last accessed.</p>
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * <p>Contains information about an unused access finding for a permission. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see <a href="https://aws.amazon.com/iam/access-analyzer/pricing">IAM Access Analyzer pricing</a>.</p>
 * @public
 */
export interface UnusedPermissionDetails {
  /**
   * <p>A list of unused actions for which the unused access finding was generated.</p>
   * @public
   */
  actions?: UnusedAction[] | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that contains the unused actions.</p>
   * @public
   */
  serviceNamespace: string | undefined;

  /**
   * <p>The time at which the permission was last accessed.</p>
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * <p>Contains information about an external access or unused access finding. Only one parameter can be used in a <code>FindingDetails</code> object.</p>
 * @public
 */
export type FindingDetails =
  | FindingDetails.ExternalAccessDetailsMember
  | FindingDetails.InternalAccessDetailsMember
  | FindingDetails.UnusedIamRoleDetailsMember
  | FindingDetails.UnusedIamUserAccessKeyDetailsMember
  | FindingDetails.UnusedIamUserPasswordDetailsMember
  | FindingDetails.UnusedPermissionDetailsMember
  | FindingDetails.$UnknownMember;

/**
 * @public
 */
export namespace FindingDetails {
  /**
   * <p>The details for an internal access analyzer finding. This contains information about access patterns identified within your Amazon Web Services organization or account.</p>
   * @public
   */
  export interface InternalAccessDetailsMember {
    internalAccessDetails: InternalAccessDetails;
    externalAccessDetails?: never;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an external access analyzer finding.</p>
   * @public
   */
  export interface ExternalAccessDetailsMember {
    internalAccessDetails?: never;
    externalAccessDetails: ExternalAccessDetails;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an unused access analyzer finding with an unused permission finding type.</p>
   * @public
   */
  export interface UnusedPermissionDetailsMember {
    internalAccessDetails?: never;
    externalAccessDetails?: never;
    unusedPermissionDetails: UnusedPermissionDetails;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an unused access analyzer finding with an unused IAM user access key finding type.</p>
   * @public
   */
  export interface UnusedIamUserAccessKeyDetailsMember {
    internalAccessDetails?: never;
    externalAccessDetails?: never;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an unused access analyzer finding with an unused IAM role finding type.</p>
   * @public
   */
  export interface UnusedIamRoleDetailsMember {
    internalAccessDetails?: never;
    externalAccessDetails?: never;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails: UnusedIamRoleDetails;
    unusedIamUserPasswordDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an unused access analyzer finding with an unused IAM user password finding type.</p>
   * @public
   */
  export interface UnusedIamUserPasswordDetailsMember {
    internalAccessDetails?: never;
    externalAccessDetails?: never;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    internalAccessDetails?: never;
    externalAccessDetails?: never;
    unusedPermissionDetails?: never;
    unusedIamUserAccessKeyDetails?: never;
    unusedIamRoleDetails?: never;
    unusedIamUserPasswordDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    internalAccessDetails: (value: InternalAccessDetails) => T;
    externalAccessDetails: (value: ExternalAccessDetails) => T;
    unusedPermissionDetails: (value: UnusedPermissionDetails) => T;
    unusedIamUserAccessKeyDetails: (value: UnusedIamUserAccessKeyDetails) => T;
    unusedIamRoleDetails: (value: UnusedIamRoleDetails) => T;
    unusedIamUserPasswordDetails: (value: UnusedIamUserPasswordDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FindingDetails, visitor: Visitor<T>): T => {
    if (value.internalAccessDetails !== undefined) return visitor.internalAccessDetails(value.internalAccessDetails);
    if (value.externalAccessDetails !== undefined) return visitor.externalAccessDetails(value.externalAccessDetails);
    if (value.unusedPermissionDetails !== undefined)
      return visitor.unusedPermissionDetails(value.unusedPermissionDetails);
    if (value.unusedIamUserAccessKeyDetails !== undefined)
      return visitor.unusedIamUserAccessKeyDetails(value.unusedIamUserAccessKeyDetails);
    if (value.unusedIamRoleDetails !== undefined) return visitor.unusedIamRoleDetails(value.unusedIamRoleDetails);
    if (value.unusedIamUserPasswordDetails !== undefined)
      return visitor.unusedIamUserPasswordDetails(value.unusedIamUserPasswordDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FindingType = {
  EXTERNAL_ACCESS: "ExternalAccess",
  INTERNAL_ACCESS: "InternalAccess",
  UNUSED_IAM_ROLE: "UnusedIAMRole",
  UNUSED_IAM_USER_ACCESS_KEY: "UnusedIAMUserAccessKey",
  UNUSED_IAM_USER_PASSWORD: "UnusedIAMUserPassword",
  UNUSED_PERMISSION: "UnusedPermission",
} as const;

/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 */
export interface GetFindingV2Response {
  /**
   * <p>The time at which the resource-based policy or IAM entity that generated the finding was analyzed.</p>
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>An error.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The ID of the finding to retrieve.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The resource that generated the finding.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>The type of the resource identified in the finding.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>Tye Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A localized message that explains the finding and provides guidance on how to address it.</p>
   * @public
   */
  findingDetails: FindingDetails[] | undefined;

  /**
   * <p>The type of the finding. For external access analyzers, the type is <code>ExternalAccess</code>. For unused access analyzers, the type can be <code>UnusedIAMRole</code>, <code>UnusedIAMUserAccessKey</code>, <code>UnusedIAMUserPassword</code>, or <code>UnusedPermission</code>. For internal access analyzers, the type is <code>InternalAccess</code>.</p>
   * @public
   */
  findingType?: FindingType | undefined;
}

/**
 * @public
 */
export interface GetGeneratedPolicyRequest {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies.</p> <p>For example, in the resource section of a policy, you can receive a placeholder such as <code>"Resource":"arn:aws:s3:::$\{BucketName\}"</code> instead of <code>"*"</code>.</p>
   * @public
   */
  includeResourcePlaceholders?: boolean | undefined;

  /**
   * <p>The level of detail that you want to generate. You can specify whether to generate service-level policies. </p> <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have been used recently to create this service-level template.</p>
   * @public
   */
  includeServiceLevelTemplate?: boolean | undefined;
}

/**
 * <p>Contains the text for the generated policy.</p>
 * @public
 */
export interface GeneratedPolicy {
  /**
   * <p>The text to use as the content for the new policy. The policy is created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 * @public
 */
export interface TrailProperties {
  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   * @public
   */
  cloudTrailArn: string | undefined;

  /**
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.</p>
   * @public
   */
  allRegions?: boolean | undefined;
}

/**
 * <p>Contains information about CloudTrail access.</p>
 * @public
 */
export interface CloudTrailProperties {
  /**
   * <p>A <code>TrailProperties</code> object that contains settings for trail properties.</p>
   * @public
   */
  trailProperties: TrailProperties[] | undefined;

  /**
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>Contains the generated policy details.</p>
 * @public
 */
export interface GeneratedPolicyProperties {
  /**
   * <p>This value is set to <code>true</code> if the generated policy contains all possible actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified, and <code>false</code> otherwise.</p>
   * @public
   */
  isComplete?: boolean | undefined;

  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>Lists details about the <code>Trail</code> used to generated policy.</p>
   * @public
   */
  cloudTrailProperties?: CloudTrailProperties | undefined;
}

/**
 * <p>Contains the text for the generated policy and its details.</p>
 * @public
 */
export interface GeneratedPolicyResult {
  /**
   * <p>A <code>GeneratedPolicyProperties</code> object that contains properties of the generated policy.</p>
   * @public
   */
  properties: GeneratedPolicyProperties | undefined;

  /**
   * <p>The text to use as the content for the new policy. The policy is created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   * @public
   */
  generatedPolicies?: GeneratedPolicy[] | undefined;
}

/**
 * @public
 * @enum
 */
export const JobErrorCode = {
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  RESOURCE_NOT_FOUND_ERROR: "RESOURCE_NOT_FOUND_ERROR",
  SERVICE_ERROR: "SERVICE_ERROR",
  SERVICE_QUOTA_EXCEEDED_ERROR: "SERVICE_QUOTA_EXCEEDED_ERROR",
} as const;

/**
 * @public
 */
export type JobErrorCode = (typeof JobErrorCode)[keyof typeof JobErrorCode];

/**
 * <p>Contains the details about the policy generation error.</p>
 * @public
 */
export interface JobError {
  /**
   * <p>The job error code.</p>
   * @public
   */
  code: JobErrorCode | undefined;

  /**
   * <p>Specific information about the error. For example, which service quota was exceeded or which resource was not found.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>Contains details about the policy generation request.</p>
 * @public
 */
export interface JobDetails {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The status of the job request.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>A timestamp of when the job was started.</p>
   * @public
   */
  startedOn: Date | undefined;

  /**
   * <p>A timestamp of when the job was completed.</p>
   * @public
   */
  completedOn?: Date | undefined;

  /**
   * <p>The job error for the policy generation request.</p>
   * @public
   */
  jobError?: JobError | undefined;
}

/**
 * @public
 */
export interface GetGeneratedPolicyResponse {
  /**
   * <p>A <code>GeneratedPolicyDetails</code> object that contains details about the generated policy.</p>
   * @public
   */
  jobDetails: JobDetails | undefined;

  /**
   * <p>A <code>GeneratedPolicyResult</code> object that contains the generated policies and associated details.</p>
   * @public
   */
  generatedPolicyResult: GeneratedPolicyResult | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsRequest {
  /**
   * <p>The unique ID for the access preview.</p>
   * @public
   */
  accessPreviewId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>Criteria to filter the returned findings.</p>
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FindingChangeType = {
  CHANGED: "CHANGED",
  NEW: "NEW",
  UNCHANGED: "UNCHANGED",
} as const;

/**
 * @public
 */
export type FindingChangeType = (typeof FindingChangeType)[keyof typeof FindingChangeType];

/**
 * <p>An access preview finding generated by the access preview.</p>
 * @public
 */
export interface AccessPreviewFinding {
  /**
   * <p>The ID of the access preview finding. This ID uniquely identifies the element in the list of access preview findings and is not related to the finding ID in Access Analyzer.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The existing ID of the finding in IAM Access Analyzer, provided only for existing findings.</p>
   * @public
   */
  existingFindingId?: string | undefined;

  /**
   * <p>The existing status of the finding, provided only for existing findings.</p>
   * @public
   */
  existingFindingStatus?: FindingStatus | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to perform.</p>
   * @public
   */
  action?: string[] | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   * @public
   */
  condition?: Record<string, string> | undefined;

  /**
   * <p>The resource that an external principal has access to. This is the resource associated with the access preview.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the resource.</p>
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * <p>The type of the resource that can be accessed in the finding.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The time at which the access preview finding was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Provides context on how the access preview finding compares to existing access identified in IAM Access Analyzer.</p> <ul> <li> <p> <code>New</code> - The finding is for newly-introduced access.</p> </li> <li> <p> <code>Unchanged</code> - The preview finding is an existing finding that would remain unchanged.</p> </li> <li> <p> <code>Changed</code> - The preview finding is an existing finding with a change in status.</p> </li> </ul> <p>For example, a <code>Changed</code> finding with preview status <code>Resolved</code> and existing status <code>Active</code> indicates the existing <code>Active</code> finding would become <code>Resolved</code> as a result of the proposed permissions change.</p>
   * @public
   */
  changeType: FindingChangeType | undefined;

  /**
   * <p>The preview status of the finding. This is what the status of the finding would be after permissions deployment. For example, a <code>Changed</code> finding with preview status <code>Resolved</code> and existing status <code>Active</code> indicates the existing <code>Active</code> finding would become <code>Resolved</code> as a result of the proposed permissions change.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * <p>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).</p>
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsResponse {
  /**
   * <p>A list of access preview findings that match the specified filter criteria.</p>
   * @public
   */
  findings: AccessPreviewFinding[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of information about an access preview.</p>
 * @public
 */
export interface AccessPreviewSummary {
  /**
   * <p>The unique ID for the access preview.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The time at which the access preview was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The status of the access preview.</p> <ul> <li> <p> <code>Creating</code> - The access preview creation is in progress.</p> </li> <li> <p> <code>Completed</code> - The access preview is complete and previews the findings for external access to the resource.</p> </li> <li> <p> <code>Failed</code> - The access preview creation has failed.</p> </li> </ul>
   * @public
   */
  status: AccessPreviewStatus | undefined;

  /**
   * <p>Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.</p>
   * @public
   */
  statusReason?: AccessPreviewStatusReason | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewsResponse {
  /**
   * <p>A list of access previews retrieved for the analyzer.</p>
   * @public
   */
  accessPreviews: AccessPreviewSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Retrieves a list of resources that have been analyzed.</p>
 * @public
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains the ARN of the analyzed resource.</p>
 * @public
 */
export interface AnalyzedResourceSummary {
  /**
   * <p>The ARN of the analyzed resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The type of resource that was analyzed.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * <p>A list of resources that were analyzed.</p>
   * @public
   */
  analyzedResources: AnalyzedResourceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export type OrderBy = "ASC" | "DESC";

/**
 * <p>The criteria used to sort.</p>
 * @public
 */
export interface SortCriteria {
  /**
   * <p>The name of the attribute to sort on.</p>
   * @public
   */
  attributeName?: string | undefined;

  /**
   * <p>The sort order, ascending or descending.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>A filter to match for the findings to return.</p>
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * <p>The sort order for the findings returned.</p>
   * @public
   */
  sort?: SortCriteria | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about a finding.</p>
 * @public
 */
export interface FindingSummary {
  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to use.</p>
   * @public
   */
  action?: string[] | undefined;

  /**
   * <p>The resource that the external principal has access to.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>Indicates whether the finding reports a resource that has a policy that allows public access.</p>
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * <p>The type of the resource that the external principal has access to.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource-based policy that generated the finding was analyzed.</p>
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The error that resulted in an Error finding.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * <p>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).</p>
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>A list of findings retrieved from the analyzer that match the filter criteria specified, if any.</p>
   * @public
   */
  findings: FindingSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsV2Request {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>A filter to match for the findings to return.</p>
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria used to sort.</p>
   * @public
   */
  sort?: SortCriteria | undefined;
}

/**
 * <p>Contains information about a finding.</p>
 * @public
 */
export interface FindingSummaryV2 {
  /**
   * <p>The time at which the resource-based policy or IAM entity that generated the finding was analyzed.</p>
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The error that resulted in an Error finding.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The resource that the external principal has access to.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>The type of the resource that the external principal has access to.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>The time at which the finding was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The type of the access finding. For external access analyzers, the type is <code>ExternalAccess</code>. For unused access analyzers, the type can be <code>UnusedIAMRole</code>, <code>UnusedIAMUserAccessKey</code>, <code>UnusedIAMUserPassword</code>, or <code>UnusedPermission</code>. For internal access analyzers, the type is <code>InternalAccess</code>.</p>
   * @public
   */
  findingType?: FindingType | undefined;
}

/**
 * @public
 */
export interface ListFindingsV2Response {
  /**
   * <p>A list of findings retrieved from the analyzer that match the filter criteria specified, if any.</p>
   * @public
   */
  findings: FindingSummaryV2[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with <code>ListGeneratedPolicies</code> to filter the results to only include results for a specific principal.</p>
   * @public
   */
  principalArn?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about the policy generation status and properties.</p>
 * @public
 */
export interface PolicyGeneration {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The status of the policy generation request.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>A timestamp of when the policy generation started.</p>
   * @public
   */
  startedOn: Date | undefined;

  /**
   * <p>A timestamp of when the policy generation was completed.</p>
   * @public
   */
  completedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * <p>A <code>PolicyGeneration</code> object that contains details about the generated policy.</p>
   * @public
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Retrieves a list of tags applied to the specified resource.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags from.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are applied to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 * @public
 */
export interface Trail {
  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   * @public
   */
  cloudTrailArn: string | undefined;

  /**
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.</p>
   * @public
   */
  allRegions?: boolean | undefined;
}

/**
 * <p>Contains information about CloudTrail access.</p>
 * @public
 */
export interface CloudTrailDetails {
  /**
   * <p>A <code>Trail</code> object that contains settings for a trail.</p>
   * @public
   */
  trails: Trail[] | undefined;

  /**
   * <p>The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and service last accessed information.</p>
   * @public
   */
  accessRole: string | undefined;

  /**
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * <p>Contains the ARN details about the IAM entity for which the policy is generated.</p>
 * @public
 */
export interface PolicyGenerationDetails {
  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * <p>Contains the ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   * @public
   */
  policyGenerationDetails: PolicyGenerationDetails | undefined;

  /**
   * <p>A <code>CloudTrailDetails</code> object that contains details about a <code>Trail</code> that you want to analyze to generate policies.</p>
   * @public
   */
  cloudTrailDetails?: CloudTrailDetails | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Starts a scan of the policies applied to the specified resource.</p>
 * @public
 */
export interface StartResourceScanRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to scan.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.</p>
   * @public
   */
  resourceOwnerAccount?: string | undefined;
}

/**
 * <p>Adds a tag to the specified resource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add the tag to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Removes a tag from the specified resource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key for the tag to add.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The response to the request.</p>
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * <p>Updates findings with the new values provided in the request.</p>
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.</p>
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * <p>The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.</p>
   * @public
   */
  status: FindingStatusUpdate | undefined;

  /**
   * <p>The IDs of the findings to update.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>The ARN of the resource identified in the finding.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Locale = {
  DE: "DE",
  EN: "EN",
  ES: "ES",
  FR: "FR",
  IT: "IT",
  JA: "JA",
  KO: "KO",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;

/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  IDENTITY_POLICY: "IDENTITY_POLICY",
  RESOURCE_CONTROL_POLICY: "RESOURCE_CONTROL_POLICY",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  SERVICE_CONTROL_POLICY: "SERVICE_CONTROL_POLICY",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ValidatePolicyResourceType = {
  DYNAMODB_TABLE: "AWS::DynamoDB::Table",
  ROLE_TRUST: "AWS::IAM::AssumeRolePolicyDocument",
  S3_ACCESS_POINT: "AWS::S3::AccessPoint",
  S3_BUCKET: "AWS::S3::Bucket",
  S3_MULTI_REGION_ACCESS_POINT: "AWS::S3::MultiRegionAccessPoint",
  S3_OBJECT_LAMBDA_ACCESS_POINT: "AWS::S3ObjectLambda::AccessPoint",
} as const;

/**
 * @public
 */
export type ValidatePolicyResourceType = (typeof ValidatePolicyResourceType)[keyof typeof ValidatePolicyResourceType];

/**
 * @public
 */
export interface ValidatePolicyRequest {
  /**
   * <p>The locale to use for localizing the findings.</p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p> <p>Service control policies (SCPs) are a type of organization policy attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>
   * @public
   */
  validatePolicyResourceType?: ValidatePolicyResourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidatePolicyFindingType = {
  ERROR: "ERROR",
  SECURITY_WARNING: "SECURITY_WARNING",
  SUGGESTION: "SUGGESTION",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ValidatePolicyFindingType = (typeof ValidatePolicyFindingType)[keyof typeof ValidatePolicyFindingType];

/**
 * <p>A reference to a substring of a literal string in a JSON document.</p>
 * @public
 */
export interface Substring {
  /**
   * <p>The start index of the substring, starting from 0.</p>
   * @public
   */
  start: number | undefined;

  /**
   * <p>The length of the substring.</p>
   * @public
   */
  length: number | undefined;
}

/**
 * <p>A single element in a path through the JSON representation of a policy.</p>
 * @public
 */
export type PathElement =
  | PathElement.IndexMember
  | PathElement.KeyMember
  | PathElement.SubstringMember
  | PathElement.ValueMember
  | PathElement.$UnknownMember;

/**
 * @public
 */
export namespace PathElement {
  /**
   * <p>Refers to an index in a JSON array.</p>
   * @public
   */
  export interface IndexMember {
    index: number;
    key?: never;
    substring?: never;
    value?: never;
    $unknown?: never;
  }

  /**
   * <p>Refers to a key in a JSON object.</p>
   * @public
   */
  export interface KeyMember {
    index?: never;
    key: string;
    substring?: never;
    value?: never;
    $unknown?: never;
  }

  /**
   * <p>Refers to a substring of a literal string in a JSON object.</p>
   * @public
   */
  export interface SubstringMember {
    index?: never;
    key?: never;
    substring: Substring;
    value?: never;
    $unknown?: never;
  }

  /**
   * <p>Refers to the value associated with a given key in a JSON object.</p>
   * @public
   */
  export interface ValueMember {
    index?: never;
    key?: never;
    substring?: never;
    value: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    index?: never;
    key?: never;
    substring?: never;
    value?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    index: (value: number) => T;
    key: (value: string) => T;
    substring: (value: Substring) => T;
    value: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PathElement, visitor: Visitor<T>): T => {
    if (value.index !== undefined) return visitor.index(value.index);
    if (value.key !== undefined) return visitor.key(value.key);
    if (value.substring !== undefined) return visitor.substring(value.substring);
    if (value.value !== undefined) return visitor.value(value.value);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A position in a policy.</p>
 * @public
 */
export interface Position {
  /**
   * <p>The line of the position, starting from 1.</p>
   * @public
   */
  line: number | undefined;

  /**
   * <p>The column of the position, starting from 0.</p>
   * @public
   */
  column: number | undefined;

  /**
   * <p>The offset within the policy that corresponds to the position, starting from 0.</p>
   * @public
   */
  offset: number | undefined;
}

/**
 * <p>A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).</p>
 * @public
 */
export interface Span {
  /**
   * <p>The start position of the span (inclusive).</p>
   * @public
   */
  start: Position | undefined;

  /**
   * <p>The end position of the span (exclusive).</p>
   * @public
   */
  end: Position | undefined;
}

/**
 * <p>A location in a policy that is represented as a path through the JSON representation and a corresponding span.</p>
 * @public
 */
export interface Location {
  /**
   * <p>A path in a policy, represented as a sequence of path elements.</p>
   * @public
   */
  path: PathElement[] | undefined;

  /**
   * <p>A span in a policy.</p>
   * @public
   */
  span: Span | undefined;
}

/**
 * <p>A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.</p>
 * @public
 */
export interface ValidatePolicyFinding {
  /**
   * <p>A localized message that explains the finding and provides guidance on how to address it.</p>
   * @public
   */
  findingDetails: string | undefined;

  /**
   * <p>The impact of the finding.</p> <p>Security warnings report when the policy allows access that we consider overly permissive.</p> <p>Errors report when a part of the policy is not functional.</p> <p>Warnings report non-security issues when a policy does not conform to policy writing best practices.</p> <p>Suggestions recommend stylistic improvements in the policy that do not impact access.</p>
   * @public
   */
  findingType: ValidatePolicyFindingType | undefined;

  /**
   * <p>The issue code provides an identifier of the issue associated with this finding.</p>
   * @public
   */
  issueCode: string | undefined;

  /**
   * <p>A link to additional documentation about the type of finding.</p>
   * @public
   */
  learnMoreLink: string | undefined;

  /**
   * <p>The list of locations in the policy document that are related to the finding. The issue code provides a summary of an issue identified by the finding.</p>
   * @public
   */
  locations: Location[] | undefined;
}

/**
 * @public
 */
export interface ValidatePolicyResponse {
  /**
   * <p>The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy checks.</p>
   * @public
   */
  findings: ValidatePolicyFinding[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}
