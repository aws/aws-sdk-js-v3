// smithy-typescript generated code
import type {
  AccessCheckPolicyType,
  AccessCheckResourceType,
  AccessPreviewStatus,
  AccessPreviewStatusReasonCode,
  AclPermission,
  AnalyzerStatus,
  CheckAccessNotGrantedResult,
  CheckNoNewAccessResult,
  CheckNoPublicAccessResult,
  FindingChangeType,
  FindingSourceType,
  FindingStatus,
  FindingStatusUpdate,
  FindingType,
  InternalAccessType,
  JobErrorCode,
  JobStatus,
  KmsGrantOperation,
  Locale,
  OrderBy,
  PolicyType,
  PrincipalType,
  ReasonCode,
  RecommendationType,
  RecommendedRemediationAction,
  ResourceControlPolicyRestriction,
  ResourceType,
  ServiceControlPolicyRestriction,
  Status,
  Type,
  ValidatePolicyFindingType,
  ValidatePolicyResourceType,
} from "./enums";

/**
 * Contains information about actions and resources that define permissions to check against a policy.
 *
 * @public
 */
export interface Access {
  /**
   * A list of actions for the access permissions. Any strings that can be used as an action in an IAM policy can be used in the list of actions to check.
   *
   * @public
   */
  actions?: string[] | undefined;

  /**
   * A list of resources for the access permissions. Any strings that can be used as an Amazon Resource Name (ARN) in an IAM policy can be used in the list of resources to check. You can only use a wildcard in the portion of the ARN that specifies the resource ID.
   *
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see [IAM Access Analyzer filter keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html).
 *
 * @public
 */
export interface Criterion {
  /**
   * An "equals" operator to match for the filter used to create the rule.
   *
   * @public
   */
  eq?: string[] | undefined;

  /**
   * A "not equals" operator to match for the filter used to create the rule.
   *
   * @public
   */
  neq?: string[] | undefined;

  /**
   * A "contains" operator to match for the filter used to create the rule.
   *
   * @public
   */
  contains?: string[] | undefined;

  /**
   * An "exists" operator to match for the filter used to create the rule.
   *
   * @public
   */
  exists?: boolean | undefined;
}

/**
 * Creates an archive rule.
 *
 * @public
 */
export interface CreateArchiveRuleRequest {
  /**
   * The name of the created analyzer.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * The name of the rule to create.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The criteria for the rule.
   *
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains information about a validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Deletes an archive rule.
 *
 * @public
 */
export interface DeleteArchiveRuleRequest {
  /**
   * The name of the analyzer that associated with the archive rule to delete.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * The name of the rule to delete.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Retrieves an archive rule.
 *
 * @public
 */
export interface GetArchiveRuleRequest {
  /**
   * The name of the analyzer to retrieve rules from.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * The name of the rule to retrieve.
   *
   * @public
   */
  ruleName: string | undefined;
}

/**
 * Contains information about an archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
 *
 * @public
 */
export interface ArchiveRuleSummary {
  /**
   * The name of the archive rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A filter used to define the archive rule.
   *
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * The time at which the archive rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the archive rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface GetArchiveRuleResponse {
  /**
   * Contains information about an archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
   *
   * @public
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

/**
 * Retrieves a list of archive rules created for the specified analyzer.
 *
 * @public
 */
export interface ListArchiveRulesRequest {
  /**
   * The name of the analyzer to retrieve rules from.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface ListArchiveRulesResponse {
  /**
   * A list of archive rules created for the specified analyzer.
   *
   * @public
   */
  archiveRules: ArchiveRuleSummary[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Updates the specified archive rule.
 *
 * @public
 */
export interface UpdateArchiveRuleRequest {
  /**
   * The name of the analyzer to update the archive rules for.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * The name of the rule to update.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A filter to match for the rules to update. Only rules that match the filter are updated.
   *
   * @public
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * An criterion statement in an archive rule. Each archive rule may have multiple criteria.
 *
 * @public
 */
export interface InlineArchiveRule {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The condition and values for a criterion.
   *
   * @public
   */
  filter: Record<string, Criterion> | undefined;
}

/**
 * The criteria for an analysis rule for an internal access analyzer.
 *
 * @public
 */
export interface InternalAccessAnalysisRuleCriteria {
  /**
   * A list of Amazon Web Services account IDs to apply to the internal access analysis rule criteria. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * A list of resource types to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources of these types. These resource types are currently supported for internal access analyzers:
   *
   * - `AWS::S3::Bucket`
   * - `AWS::RDS::DBSnapshot`
   * - `AWS::RDS::DBClusterSnapshot`
   * - `AWS::S3Express::DirectoryBucket`
   * - `AWS::DynamoDB::Table`
   * - `AWS::DynamoDB::Stream`
   *
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * A list of resource ARNs to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources that match these ARNs.
   *
   * @public
   */
  resourceArns?: string[] | undefined;
}

/**
 * Contains information about analysis rules for the internal access analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.
 *
 * @public
 */
export interface InternalAccessAnalysisRule {
  /**
   * A list of rules for the internal access analyzer containing criteria to include in analysis. Only resources that meet the rule criteria will generate findings.
   *
   * @public
   */
  inclusions?: InternalAccessAnalysisRuleCriteria[] | undefined;
}

/**
 * Specifies the configuration of an internal access analyzer for an Amazon Web Services organization or account. This configuration determines how the analyzer evaluates internal access within your Amazon Web Services environment.
 *
 * @public
 */
export interface InternalAccessConfiguration {
  /**
   * Contains information about analysis rules for the internal access analyzer. These rules determine which resources and access patterns will be analyzed.
   *
   * @public
   */
  analysisRule?: InternalAccessAnalysisRule | undefined;
}

/**
 * The criteria for an analysis rule for an analyzer. The criteria determine which entities will generate findings.
 *
 * @public
 */
export interface AnalysisRuleCriteria {
  /**
   * A list of Amazon Web Services account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers. The list cannot include more than 2,000 account IDs.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   *
   * For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with `aws:`.
   *
   * For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.
   *
   * @public
   */
  resourceTags?: Record<string, string>[] | undefined;
}

/**
 * Contains information about analysis rules for the analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.
 *
 * @public
 */
export interface AnalysisRule {
  /**
   * A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings.
   *
   * @public
   */
  exclusions?: AnalysisRuleCriteria[] | undefined;
}

/**
 * Contains information about an unused access analyzer.
 *
 * @public
 */
export interface UnusedAccessConfiguration {
  /**
   * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.
   *
   * @public
   */
  unusedAccessAge?: number | undefined;

  /**
   * Contains information about analysis rules for the analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.
   *
   * @public
   */
  analysisRule?: AnalysisRule | undefined;
}

/**
 * Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.
 *
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
   * Specifies the configuration of an unused access analyzer for an Amazon Web Services organization or account.
   *
   * @public
   */
  export interface UnusedAccessMember {
    unusedAccess: UnusedAccessConfiguration;
    internalAccess?: never;
    $unknown?: never;
  }

  /**
   * Specifies the configuration of an internal access analyzer for an Amazon Web Services organization or account. This configuration determines how the analyzer evaluates access within your Amazon Web Services environment.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    unusedAccess: (value: UnusedAccessConfiguration) => T;
    internalAccess: (value: InternalAccessConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Creates an analyzer.
 *
 * @public
 */
export interface CreateAnalyzerRequest {
  /**
   * The name of the analyzer to create.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * The type of analyzer to create. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
   *
   * @public
   */
  type: Type | undefined;

  /**
   * Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
   *
   * @public
   */
  archiveRules?: InlineArchiveRule[] | undefined;

  /**
   * An array of key-value pairs to apply to the analyzer. You can use the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   *
   * For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with `aws:`.
   *
   * For the tag value, you can specify a value that is 0 to 256 characters in length.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the configuration of the analyzer. If the analyzer is an unused access analyzer, the specified scope of unused access is used for the configuration. If the analyzer is an internal access analyzer, the specified internal access analysis rules are used for the configuration.
   *
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * The response to the request to create an analyzer.
 *
 * @public
 */
export interface CreateAnalyzerResponse {
  /**
   * The ARN of the analyzer that was created by the request.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Deletes an analyzer.
 *
 * @public
 */
export interface DeleteAnalyzerRequest {
  /**
   * The name of the analyzer to delete.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Deletes a service-linked analyzer.
 *
 * @public
 */
export interface DeleteServiceLinkedAnalyzerRequest {
  /**
   * The name of the service-linked analyzer to delete. Service-linked analyzer names follow the format `_AccessAnalyzerFor\{ServiceName\}-\{Id\}`.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Retrieves an analyzer.
 *
 * @public
 */
export interface GetAnalyzerRequest {
  /**
   * The name of the analyzer retrieved.
   *
   * @public
   */
  analyzerName: string | undefined;
}

/**
 * Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a `Failed` status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
 *
 * @public
 */
export interface StatusReason {
  /**
   * The reason code for the current status of the analyzer.
   *
   * @public
   */
  code: ReasonCode | undefined;
}

/**
 * Contains information about the analyzer.
 *
 * @public
 */
export interface AnalyzerSummary {
  /**
   * The ARN of the analyzer.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the analyzer.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type represents the zone of trust or scope for the analyzer.
   *
   * @public
   */
  type: Type | undefined;

  /**
   * A timestamp for the time at which the analyzer was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The resource that was most recently analyzed by the analyzer.
   *
   * @public
   */
  lastResourceAnalyzed?: string | undefined;

  /**
   * The time at which the most recently analyzed resource was analyzed.
   *
   * @public
   */
  lastResourceAnalyzedAt?: Date | undefined;

  /**
   * An array of key-value pairs applied to the analyzer. The key-value pairs consist of the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   *
   * The tag key is a value that is 1 to 128 characters in length and cannot be prefixed with `aws:`.
   *
   * The tag value is a value that is 0 to 256 characters in length.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The status of the analyzer. An `Active` analyzer successfully monitors supported resources and generates new findings. The analyzer is `Disabled` when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is `Creating` when the analyzer creation is in progress and `Failed` when the analyzer creation has failed.
   *
   * @public
   */
  status: AnalyzerStatus | undefined;

  /**
   * The `statusReason` provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a `Failed` status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
   *
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * Specifies if the analyzer is an external access, unused access, or internal access analyzer. The [GetAnalyzer](https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html) action includes this property in its response if a configuration is specified, while the [ListAnalyzers](https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html) action omits it.
   *
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;

  /**
   * The service principal that manages this analyzer (for example, `securityhubv2.amazonaws.com`). This field is only present for service-linked analyzers and is not included for customer-managed analyzers.
   *
   * @public
   */
  managedBy?: string | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface GetAnalyzerResponse {
  /**
   * An `AnalyzerSummary` object that contains information about the analyzer.
   *
   * @public
   */
  analyzer: AnalyzerSummary | undefined;
}

/**
 * Retrieves a list of analyzers.
 *
 * @public
 */
export interface ListAnalyzersRequest {
  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of analyzer.
   *
   * @public
   */
  type?: Type | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface ListAnalyzersResponse {
  /**
   * The analyzers retrieved.
   *
   * @public
   */
  analyzers: AnalyzerSummary[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnalyzerRequest {
  /**
   * The name of the analyzer to modify.
   *
   * @public
   */
  analyzerName: string | undefined;

  /**
   * Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.
   *
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAnalyzerResponse {
  /**
   * Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.
   *
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * Retroactively applies an archive rule.
 *
 * @public
 */
export interface ApplyArchiveRuleRequest {
  /**
   * The Amazon resource name (ARN) of the analyzer.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The name of the rule to apply.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelPolicyGenerationRequest {
  /**
   * The `JobId` that is returned by the `StartPolicyGeneration` operation. The `JobId` can be used with `GetGeneratedPolicy` to retrieve the generated policies or used with `CancelPolicyGeneration` to cancel the policy generation request.
   *
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
 */
export interface CheckAccessNotGrantedRequest {
  /**
   * The JSON policy document to use as the content for the policy.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * An access object containing the permissions that shouldn't be granted by the specified policy. If only actions are specified, IAM Access Analyzer checks for access to peform at least one of the actions on any resource in the policy. If only resources are specified, then IAM Access Analyzer checks for access to perform any action on at least one of the resources. If both actions and resources are specified, IAM Access Analyzer checks for access to perform at least one of the specified actions on at least one of the specified resources.
   *
   * @public
   */
  access: Access[] | undefined;

  /**
   * The type of policy. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.
   *
   * Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets.
   *
   * @public
   */
  policyType: AccessCheckPolicyType | undefined;
}

/**
 * Contains information about the reasoning why a check for access passed or failed.
 *
 * @public
 */
export interface ReasonSummary {
  /**
   * A description of the reasoning of a result of checking for access.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The index number of the reason statement.
   *
   * @public
   */
  statementIndex?: number | undefined;

  /**
   * The identifier for the reason statement.
   *
   * @public
   */
  statementId?: string | undefined;
}

/**
 * @public
 */
export interface CheckAccessNotGrantedResponse {
  /**
   * The result of the check for whether the access is allowed. If the result is `PASS`, the specified policy doesn't allow any of the specified permissions in the access object. If the result is `FAIL`, the specified policy might allow some or all of the permissions in the access object.
   *
   * @public
   */
  result?: CheckAccessNotGrantedResult | undefined;

  /**
   * The message indicating whether the specified access is allowed.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A description of the reasoning of the result.
   *
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * @public
 */
export interface CheckNoNewAccessRequest {
  /**
   * The JSON policy document to use as the content for the updated policy.
   *
   * @public
   */
  newPolicyDocument: string | undefined;

  /**
   * The JSON policy document to use as the content for the existing policy.
   *
   * @public
   */
  existingPolicyDocument: string | undefined;

  /**
   * The type of policy to compare. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.
   *
   * Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.
   *
   * @public
   */
  policyType: AccessCheckPolicyType | undefined;
}

/**
 * @public
 */
export interface CheckNoNewAccessResponse {
  /**
   * The result of the check for new access. If the result is `PASS`, no new access is allowed by the updated policy. If the result is `FAIL`, the updated policy might allow new access.
   *
   * @public
   */
  result?: CheckNoNewAccessResult | undefined;

  /**
   * The message indicating whether the updated policy allows new access.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A description of the reasoning of the result.
   *
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * @public
 */
export interface CheckNoPublicAccessRequest {
  /**
   * The JSON policy document to evaluate for public access.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * The type of resource to evaluate for public access. For example, to check for public access to Amazon S3 buckets, you can choose `AWS::S3::Bucket` for the resource type.
   *
   * For resource types not supported as valid values, IAM Access Analyzer will return an error.
   *
   * @public
   */
  resourceType: AccessCheckResourceType | undefined;
}

/**
 * @public
 */
export interface CheckNoPublicAccessResponse {
  /**
   * The result of the check for public access to the specified resource type. If the result is `PASS`, the policy doesn't allow public access to the specified resource type. If the result is `FAIL`, the policy might allow public access to the specified resource type.
   *
   * @public
   */
  result?: CheckNoPublicAccessResult | undefined;

  /**
   * The message indicating whether the specified policy allows public access to resources.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of reasons why the specified resource policy grants public access for the resource type.
   *
   * @public
   */
  reasons?: ReasonSummary[] | undefined;
}

/**
 * The proposed access control configuration for a DynamoDB stream. You can propose a configuration for a new DynamoDB stream or an existing DynamoDB stream that you own by specifying the policy for the DynamoDB stream. For more information, see [PutResourcePolicy](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html).
 *
 * - If the configuration is for an existing DynamoDB stream and you do not specify the DynamoDB policy, then the access preview uses the existing DynamoDB policy for the stream.
 * - If the access preview is for a new resource and you do not specify the policy, then the access preview assumes a DynamoDB stream without a policy.
 * - To propose deletion of an existing DynamoDB stream policy, you can specify an empty string for the DynamoDB policy.
 *
 * @public
 */
export interface DynamodbStreamConfiguration {
  /**
   * The proposed resource policy defining who can access or manage the DynamoDB stream.
   *
   * @public
   */
  streamPolicy?: string | undefined;
}

/**
 * The proposed access control configuration for a DynamoDB table or index. You can propose a configuration for a new DynamoDB table or index or an existing DynamoDB table or index that you own by specifying the policy for the DynamoDB table or index. For more information, see [PutResourcePolicy](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html).
 *
 * - If the configuration is for an existing DynamoDB table or index and you do not specify the DynamoDB policy, then the access preview uses the existing DynamoDB policy for the table or index.
 * - If the access preview is for a new resource and you do not specify the policy, then the access preview assumes a DynamoDB table without a policy.
 * - To propose deletion of an existing DynamoDB table or index policy, you can specify an empty string for the DynamoDB policy.
 *
 * @public
 */
export interface DynamodbTableConfiguration {
  /**
   * The proposed resource policy defining who can access or manage the DynamoDB table.
   *
   * @public
   */
  tablePolicy?: string | undefined;
}

/**
 * The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see [ModifySnapshotAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html).
 *
 * @public
 */
export interface EbsSnapshotConfiguration {
  /**
   * The IDs of the Amazon Web Services accounts that have access to the Amazon EBS volume snapshot.
   *
   * - If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the `userIds`, then the access preview uses the existing shared `userIds` for the snapshot.
   * - If the access preview is for a new resource and you do not specify the `userIds`, then the access preview considers the snapshot without any `userIds`.
   * - To propose deletion of existing shared `accountIds`, you can specify an empty list for `userIds`.
   *
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * The groups that have access to the Amazon EBS volume snapshot. If the value `all` is specified, then the Amazon EBS volume snapshot is public.
   *
   * - If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the `groups`, then the access preview uses the existing shared `groups` for the snapshot.
   * - If the access preview is for a new resource and you do not specify the `groups`, then the access preview considers the snapshot without any `groups`.
   * - To propose deletion of existing shared `groups`, you can specify an empty list for `groups`.
   *
   * @public
   */
  groups?: string[] | undefined;

  /**
   * The KMS key identifier for an encrypted Amazon EBS volume snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * - If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the `kmsKeyId`, or you specify an empty string, then the access preview uses the existing `kmsKeyId` of the snapshot.
   * - If the access preview is for a new resource and you do not specify the `kmsKeyId`, the access preview considers the snapshot as unencrypted.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see [Repository](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html).
 *
 * - If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.
 * - If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.
 * - To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.
 *
 * @public
 */
export interface EcrRepositoryConfiguration {
  /**
   * The JSON repository policy text to apply to the Amazon ECR repository. For more information, see [Private repository policy examples](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon ECR User Guide*.
   *
   * @public
   */
  repositoryPolicy?: string | undefined;
}

/**
 * The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see [Using file systems in Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/using-fs.html).
 *
 * - If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.
 * - If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.
 * - To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.
 *
 * @public
 */
export interface EfsFileSystemConfiguration {
  /**
   * The JSON policy definition to apply to the Amazon EFS file system. For more information on the elements that make up a file system policy, see [Amazon EFS Resource-based policies](https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies).
   *
   * @public
   */
  fileSystemPolicy?: string | undefined;
}

/**
 * The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html).
 *
 * @public
 */
export interface IamRoleConfiguration {
  /**
   * The proposed trust policy for the IAM role.
   *
   * @public
   */
  trustPolicy?: string | undefined;
}

/**
 * Use this structure to propose allowing [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) in the grant only when the operation request includes the specified [encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context). You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see [GrantConstraints](https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html).
 *
 * @public
 */
export interface KmsGrantConstraints {
  /**
   * A list of key-value pairs that must match the encryption context in the [cryptographic operation](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.
   *
   * @public
   */
  encryptionContextEquals?: Record<string, string> | undefined;

  /**
   * A list of key-value pairs that must be included in the encryption context of the [cryptographic operation](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.
   *
   * @public
   */
  encryptionContextSubset?: Record<string, string> | undefined;
}

/**
 * A proposed grant configuration for a KMS key. For more information, see [CreateGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html).
 *
 * @public
 */
export interface KmsGrantConfiguration {
  /**
   * A list of operations that the grant permits.
   *
   * @public
   */
  operations: KmsGrantOperation[] | undefined;

  /**
   * The principal that is given permission to perform the operations that the grant permits.
   *
   * @public
   */
  granteePrincipal: string | undefined;

  /**
   * The principal that is given permission to retire the grant by using [RetireGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html) operation.
   *
   * @public
   */
  retiringPrincipal?: string | undefined;

  /**
   * Use this structure to propose allowing [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) in the grant only when the operation request includes the specified [encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context).
   *
   * @public
   */
  constraints?: KmsGrantConstraints | undefined;

  /**
   * The Amazon Web Services account under which the grant was issued. The account is used to propose KMS grants issued by accounts other than the owner of the key.
   *
   * @public
   */
  issuingAccount: string | undefined;
}

/**
 * Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default). For more information about key policy limits, see [Resource quotas](https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html).
 *
 * @public
 */
export interface KmsKeyConfiguration {
  /**
   * Resource policy configuration for the KMS key. The only valid value for the name of the key policy is `default`. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default).
   *
   * @public
   */
  keyPolicies?: Record<string, string> | undefined;

  /**
   * A list of proposed grant configurations for the KMS key. If the proposed grant configuration is for an existing key, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the key.
   *
   * @public
   */
  grants?: KmsGrantConfiguration[] | undefined;
}

/**
 * The values for a manual Amazon RDS DB cluster snapshot attribute.
 *
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
   * The Amazon Web Services account IDs that have access to the manual Amazon RDS DB cluster snapshot. If the value `all` is specified, then the Amazon RDS DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.
   *
   * - If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the `accountIds` in `RdsDbClusterSnapshotAttributeValue`, then the access preview uses the existing shared `accountIds` for the snapshot.
   * - If the access preview is for a new resource and you do not specify the specify the `accountIds` in `RdsDbClusterSnapshotAttributeValue`, then the access preview considers the snapshot without any attributes.
   * - To propose deletion of existing shared `accountIds`, you can specify an empty list for `accountIds` in the `RdsDbClusterSnapshotAttributeValue`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the `RdsDbClusterSnapshotAttributeValue` and optional KMS encryption key. For more information, see [ModifyDBClusterSnapshotAttribute](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html).
 *
 * @public
 */
export interface RdsDbClusterSnapshotConfiguration {
  /**
   * The names and values of manual DB cluster snapshot attributes. Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. The only valid value for `AttributeName` for the attribute map is `restore`
   *
   * @public
   */
  attributes?: Record<string, RdsDbClusterSnapshotAttributeValue> | undefined;

  /**
   * The KMS key identifier for an encrypted Amazon RDS DB cluster snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * - If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the `kmsKeyId`, or you specify an empty string, then the access preview uses the existing `kmsKeyId` of the snapshot.
   * - If the access preview is for a new resource and you do not specify the specify the `kmsKeyId`, then the access preview considers the snapshot as unencrypted.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot.
 *
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
   * The Amazon Web Services account IDs that have access to the manual Amazon RDS DB snapshot. If the value `all` is specified, then the Amazon RDS DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.
   *
   * - If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the `accountIds` in `RdsDbSnapshotAttributeValue`, then the access preview uses the existing shared `accountIds` for the snapshot.
   * - If the access preview is for a new resource and you do not specify the specify the `accountIds` in `RdsDbSnapshotAttributeValue`, then the access preview considers the snapshot without any attributes.
   * - To propose deletion of an existing shared `accountIds`, you can specify an empty list for `accountIds` in the `RdsDbSnapshotAttributeValue`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the `RdsDbSnapshotAttributeValue` and optional KMS encryption key. For more information, see [ModifyDBSnapshotAttribute](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html).
 *
 * @public
 */
export interface RdsDbSnapshotConfiguration {
  /**
   * The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid value for `attributeName` for the attribute map is restore.
   *
   * @public
   */
  attributes?: Record<string, RdsDbSnapshotAttributeValue> | undefined;

  /**
   * The KMS key identifier for an encrypted Amazon RDS DB snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * - If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the `kmsKeyId`, or you specify an empty string, then the access preview uses the existing `kmsKeyId` of the snapshot.
   * - If the access preview is for a new resource and you do not specify the specify the `kmsKeyId`, then the access preview considers the snapshot as unencrypted.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * This configuration sets the network origin for the Amazon S3 access point or multi-region access point to `Internet`.
 *
 * @public
 */
export interface InternetConfiguration {}

/**
 * The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see [VpcConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html).
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * If this field is specified, this access point will only allow connections from the specified VPC ID.
   *
   * @public
   */
  vpcId: string | undefined;
}

/**
 * The proposed `InternetConfiguration` or `VpcConfiguration` to apply to the Amazon S3 access point. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see [Creating access points](https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html).
 *
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
   * The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see [VpcConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html).
   *
   * @public
   */
  export interface VpcConfigurationMember {
    vpcConfiguration: VpcConfiguration;
    internetConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for the Amazon S3 access point or multi-region access point with an `Internet` origin.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    vpcConfiguration: (value: VpcConfiguration) => T;
    internetConfiguration: (value: InternetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The `PublicAccessBlock` configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses `false`. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses `true`. For more information, see [PublicAccessBlockConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html).
 *
 * @public
 */
export interface S3PublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket.
   *
   * @public
   */
  ignorePublicAcls: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for this bucket.
   *
   * @public
   */
  restrictPublicBuckets: boolean | undefined;
}

/**
 * The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see [Creating access points](https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html). For more information about access point policy limits, see [Access points restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html).
 *
 * @public
 */
export interface S3AccessPointConfiguration {
  /**
   * The access point or multi-region access point policy.
   *
   * @public
   */
  accessPointPolicy?: string | undefined;

  /**
   * The proposed `S3PublicAccessBlock` configuration to apply to this Amazon S3 access point or multi-region access point.
   *
   * @public
   */
  publicAccessBlock?: S3PublicAccessBlockConfiguration | undefined;

  /**
   * The proposed `Internet` and `VpcConfiguration` to apply to this Amazon S3 access point. `VpcConfiguration` does not apply to multi-region access points. If the access preview is for a new resource and neither is specified, the access preview uses `Internet` for the network origin. If the access preview is for an existing resource and neither is specified, the access preview uses the existing network origin.
   *
   * @public
   */
  networkOrigin?: NetworkOriginConfiguration | undefined;
}

/**
 * You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see [PutBucketAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html).
 *
 * @public
 */
export type AclGrantee =
  | AclGrantee.IdMember
  | AclGrantee.UriMember
  | AclGrantee.$UnknownMember;

/**
 * @public
 */
export namespace AclGrantee {
  /**
   * The value specified is the canonical user ID of an Amazon Web Services account.
   *
   * @public
   */
  export interface IdMember {
    id: string;
    uri?: never;
    $unknown?: never;
  }

  /**
   * Used for granting permissions to a predefined group.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    id: (value: string) => T;
    uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see [How to Specify an ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls).
 *
 * @public
 */
export interface S3BucketAclGrantConfiguration {
  /**
   * The permissions being granted.
   *
   * @public
   */
  permission: AclPermission | undefined;

  /**
   * The grantee to whom you’re assigning access rights.
   *
   * @public
   */
  grantee: AclGrantee | undefined;
}

/**
 * Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see [Bucket Policy Examples](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html).
 *
 * @public
 */
export interface S3BucketConfiguration {
  /**
   * The proposed bucket policy for the Amazon S3 bucket.
   *
   * @public
   */
  bucketPolicy?: string | undefined;

  /**
   * The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL grants per bucket. If the proposed grant configuration is for an existing bucket, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the bucket.
   *
   * @public
   */
  bucketAclGrants?: S3BucketAclGrantConfiguration[] | undefined;

  /**
   * The proposed block public access configuration for the Amazon S3 bucket.
   *
   * @public
   */
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration | undefined;

  /**
   * The configuration of Amazon S3 access points or multi-region access points for the bucket. You can propose up to 10 new access points per bucket.
   *
   * @public
   */
  accessPoints?: Record<string, S3AccessPointConfiguration> | undefined;
}

/**
 * Proposed configuration for an access point attached to an Amazon S3 directory bucket. You can propose up to 10 access points per bucket. If the proposed access point configuration is for an existing Amazon S3 directory bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information about access points for Amazon S3 directory buckets, see [Managing access to directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html) in the Amazon Simple Storage Service User Guide.
 *
 * @public
 */
export interface S3ExpressDirectoryAccessPointConfiguration {
  /**
   * The proposed access point policy for an Amazon S3 directory bucket access point.
   *
   * @public
   */
  accessPointPolicy?: string | undefined;

  /**
   * The proposed `InternetConfiguration` or `VpcConfiguration` to apply to the Amazon S3 access point. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see [Creating access points](https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html).
   *
   * @public
   */
  networkOrigin?: NetworkOriginConfiguration | undefined;
}

/**
 * Proposed access control configuration for an Amazon S3 directory bucket. You can propose a configuration for a new Amazon S3 directory bucket or an existing Amazon S3 directory bucket that you own by specifying the Amazon S3 bucket policy. If the configuration is for an existing Amazon S3 directory bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the directory bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes an directory bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about Amazon S3 directory bucket policies, see [Example bucket policies for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html) in the Amazon Simple Storage Service User Guide.
 *
 * @public
 */
export interface S3ExpressDirectoryBucketConfiguration {
  /**
   * The proposed bucket policy for the Amazon S3 directory bucket.
   *
   * @public
   */
  bucketPolicy?: string | undefined;

  /**
   * The proposed access points for the Amazon S3 directory bucket.
   *
   * @public
   */
  accessPoints?: Record<string, S3ExpressDirectoryAccessPointConfiguration> | undefined;
}

/**
 * The configuration for a Secrets Manager secret. For more information, see [CreateSecret](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html).
 *
 * You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key `aws/secretsmanager`. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see [Quotas for Secrets Manager.](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html).
 *
 * @public
 */
export interface SecretsManagerSecretConfiguration {
  /**
   * The proposed ARN, key ID, or alias of the KMS key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The proposed resource policy defining who can access or manage the secret.
   *
   * @public
   */
  secretPolicy?: string | undefined;
}

/**
 * The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see [Topic](https://docs.aws.amazon.com/sns/latest/api/API_Topic.html).
 *
 * @public
 */
export interface SnsTopicConfiguration {
  /**
   * The JSON policy text that defines who can access an Amazon SNS topic. For more information, see [Example cases for Amazon SNS access control](https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html) in the *Amazon SNS Developer Guide*.
   *
   * @public
   */
  topicPolicy?: string | undefined;
}

/**
 * The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see [Quotas related to policies](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html).
 *
 * @public
 */
export interface SqsQueueConfiguration {
  /**
   * The proposed resource policy for the Amazon SQS queue.
   *
   * @public
   */
  queuePolicy?: string | undefined;
}

/**
 * Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
 *
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
   * The access control configuration is for an Amazon EBS volume snapshot.
   *
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
   * The access control configuration is for an Amazon ECR repository.
   *
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
   * The access control configuration is for an IAM role.
   *
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
   * The access control configuration is for an Amazon EFS file system.
   *
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
   * The access control configuration is for a KMS key.
   *
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
   * The access control configuration is for an Amazon RDS DB cluster snapshot.
   *
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
   * The access control configuration is for an Amazon RDS DB snapshot.
   *
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
   * The access control configuration is for a Secrets Manager secret.
   *
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
   * The access control configuration is for an Amazon S3 bucket.
   *
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
   * The access control configuration is for an Amazon SNS topic
   *
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
   * The access control configuration is for an Amazon SQS queue.
   *
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
   * The access control configuration is for an Amazon S3 directory bucket.
   *
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
   * The access control configuration is for a DynamoDB stream.
   *
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
   * The access control configuration is for a DynamoDB table or index.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * @public
 */
export interface CreateAccessPreviewRequest {
  /**
   * The [ARN of the account analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the access preview. You can only create an access preview for analyzers with an `Account` type and `Active` status.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.
   *
   * @public
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPreviewResponse {
  /**
   * The unique ID for the access preview.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Creates a service-linked analyzer.
 *
 * @public
 */
export interface CreateServiceLinkedAnalyzerRequest {
  /**
   * The type of analyzer to create. Valid values are `ACCOUNT_UNUSED_ACCESS` and `ORGANIZATION_UNUSED_ACCESS`.
   *
   * @public
   */
  type: Type | undefined;

  /**
   * Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
   *
   * @public
   */
  archiveRules?: InlineArchiveRule[] | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the configuration of the analyzer. The specified scope of unused access is used for the configuration.
   *
   * @public
   */
  configuration?: AnalyzerConfiguration | undefined;
}

/**
 * The response to the request to create a service-linked analyzer.
 *
 * @public
 */
export interface CreateServiceLinkedAnalyzerResponse {
  /**
   * The ARN of the service-linked analyzer that was created by the request. The analyzer name follows the format `_AccessAnalyzerFor\{ServiceName\}-\{Id\}` where `Id` is a randomly generated identifier.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GenerateFindingRecommendationRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the finding recommendation.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The unique ID for the finding recommendation.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPreviewRequest {
  /**
   * The unique ID for the access preview.
   *
   * @public
   */
  accessPreviewId: string | undefined;

  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the access preview.
   *
   * @public
   */
  analyzerArn: string | undefined;
}

/**
 * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a `Failed` status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
 *
 * @public
 */
export interface AccessPreviewStatusReason {
  /**
   * The reason code for the current status of the access preview.
   *
   * @public
   */
  code: AccessPreviewStatusReasonCode | undefined;
}

/**
 * Contains information about an access preview.
 *
 * @public
 */
export interface AccessPreview {
  /**
   * The unique ID for the access preview.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the analyzer used to generate the access preview.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * A map of resource ARNs for the proposed resource configuration.
   *
   * @public
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * The time at which the access preview was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The status of the access preview.
   *
   * - `Creating` - The access preview creation is in progress.
   * - `Completed` - The access preview is complete. You can preview findings for external access to the resource.
   * - `Failed` - The access preview creation has failed.
   *
   * @public
   */
  status: AccessPreviewStatus | undefined;

  /**
   * Provides more details about the current status of the access preview.
   *
   * For example, if the creation of the access preview fails, a `Failed` status is returned. This failure can be due to an internal issue with the analysis or due to an invalid resource configuration.
   *
   * @public
   */
  statusReason?: AccessPreviewStatusReason | undefined;
}

/**
 * @public
 */
export interface GetAccessPreviewResponse {
  /**
   * An object that contains information about the access preview.
   *
   * @public
   */
  accessPreview: AccessPreview | undefined;
}

/**
 * Retrieves an analyzed resource.
 *
 * @public
 */
export interface GetAnalyzedResourceRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) to retrieve information from.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The ARN of the resource to retrieve information about.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Contains details about the analyzed resource.
 *
 * @public
 */
export interface AnalyzedResource {
  /**
   * The ARN of the resource that was analyzed.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The type of the resource that was analyzed.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The time at which the finding was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the resource was analyzed.
   *
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * The time at which the finding was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Indicates whether the policy that generated the finding grants public access to the resource.
   *
   * @public
   */
  isPublic: boolean | undefined;

  /**
   * The actions that an external principal is granted permission to use by the policy that generated the finding.
   *
   * @public
   */
  actions?: string[] | undefined;

  /**
   * Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  sharedVia?: string[] | undefined;

  /**
   * The current status of the finding generated from the analyzed resource.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * An error message.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface GetAnalyzedResourceResponse {
  /**
   * An `AnalyzedResource` object that contains information that IAM Access Analyzer found when it analyzed the resource.
   *
   * @public
   */
  resource?: AnalyzedResource | undefined;
}

/**
 * Retrieves a finding.
 *
 * @public
 */
export interface GetFindingRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) that generated the finding.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The ID of the finding to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
 *
 * @public
 */
export interface FindingSourceDetail {
  /**
   * The ARN of the access point that generated the finding. The ARN format depends on whether the ARN represents an access point or a multi-region access point.
   *
   * @public
   */
  accessPointArn?: string | undefined;

  /**
   * The account of the cross-account access point that generated the finding.
   *
   * @public
   */
  accessPointAccount?: string | undefined;
}

/**
 * The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
 *
 * @public
 */
export interface FindingSource {
  /**
   * Indicates the type of access that generated the finding.
   *
   * @public
   */
  type: FindingSourceType | undefined;

  /**
   * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  detail?: FindingSourceDetail | undefined;
}

/**
 * Contains information about a finding.
 *
 * @public
 */
export interface Finding {
  /**
   * The ID of the finding.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external principal that has access to a resource within the zone of trust.
   *
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * The action in the analyzed policy statement that an external principal has permission to use.
   *
   * @public
   */
  action?: string[] | undefined;

  /**
   * The resource that an external principal has access to.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * Indicates whether the policy that generated the finding allows public access to the resource.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * The type of the resource identified in the finding.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The condition in the analyzed policy statement that resulted in a finding.
   *
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * The time at which the finding was generated.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the resource was analyzed.
   *
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * The time at which the finding was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * An error.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).
   *
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface GetFindingResponse {
  /**
   * A `finding` object that contains finding details.
   *
   * @public
   */
  finding?: Finding | undefined;
}

/**
 * @public
 */
export interface GetFindingRecommendationRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the finding recommendation.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The unique ID for the finding recommendation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about the reason that the retrieval of a recommendation for a finding failed.
 *
 * @public
 */
export interface RecommendationError {
  /**
   * The error code for a failed retrieval of a recommendation for a finding.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The error message for a failed retrieval of a recommendation for a finding.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains information about the action to take for a policy in an unused permissions finding.
 *
 * @public
 */
export interface UnusedPermissionsRecommendedStep {
  /**
   * The time at which the existing policy for the unused permissions finding was last updated.
   *
   * @public
   */
  policyUpdatedAt?: Date | undefined;

  /**
   * A recommendation of whether to create or detach a policy for an unused permissions finding.
   *
   * @public
   */
  recommendedAction: RecommendedRemediationAction | undefined;

  /**
   * If the recommended action for the unused permissions finding is to replace the existing policy, the contents of the recommended policy to replace the policy specified in the `existingPolicyId` field.
   *
   * @public
   */
  recommendedPolicy?: string | undefined;

  /**
   * If the recommended action for the unused permissions finding is to detach a policy, the ID of an existing policy to be detached.
   *
   * @public
   */
  existingPolicyId?: string | undefined;
}

/**
 * Contains information about a recommended step for an unused access analyzer finding.
 *
 * @public
 */
export type RecommendedStep =
  | RecommendedStep.UnusedPermissionsRecommendedStepMember
  | RecommendedStep.$UnknownMember;

/**
 * @public
 */
export namespace RecommendedStep {
  /**
   * A recommended step for an unused permissions finding.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    unusedPermissionsRecommendedStep: (value: UnusedPermissionsRecommendedStep) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetFindingRecommendationResponse {
  /**
   * The time at which the retrieval of the finding recommendation was started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The time at which the retrieval of the finding recommendation was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Detailed information about the reason that the retrieval of a recommendation for the finding failed.
   *
   * @public
   */
  error?: RecommendationError | undefined;

  /**
   * The ARN of the resource of the finding.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A group of recommended steps for the finding.
   *
   * @public
   */
  recommendedSteps?: RecommendedStep[] | undefined;

  /**
   * The type of recommendation for the finding.
   *
   * @public
   */
  recommendationType: RecommendationType | undefined;

  /**
   * The status of the retrieval of the finding recommendation.
   *
   * @public
   */
  status: Status | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the statistics.
   *
   * @public
   */
  analyzerArn: string | undefined;
}

/**
 * Contains information about the total number of active cross-account and public findings for a resource type of an external access analyzer.
 *
 * @public
 */
export interface ResourceTypeDetails {
  /**
   * The total number of active public findings for the resource type.
   *
   * @public
   */
  totalActivePublic?: number | undefined;

  /**
   * The total number of active cross-account findings for the resource type.
   *
   * @public
   */
  totalActiveCrossAccount?: number | undefined;

  /**
   * The total number of active errors for the resource type.
   *
   * @public
   */
  totalActiveErrors?: number | undefined;
}

/**
 * Provides aggregate statistics about the findings for the specified external access analyzer.
 *
 * @public
 */
export interface ExternalAccessFindingsStatistics {
  /**
   * The total number of active cross-account and public findings for each resource type of the specified external access analyzer.
   *
   * @public
   */
  resourceTypeStatistics?: Partial<Record<ResourceType, ResourceTypeDetails>> | undefined;

  /**
   * The number of active findings for the specified external access analyzer.
   *
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * The number of archived findings for the specified external access analyzer.
   *
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * The number of resolved findings for the specified external access analyzer.
   *
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * Contains information about the total number of active, archived, and resolved findings for a resource type of an internal access analyzer.
 *
 * @public
 */
export interface InternalAccessResourceTypeDetails {
  /**
   * The total number of active findings for the resource type in the internal access analyzer.
   *
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * The total number of resolved findings for the resource type in the internal access analyzer.
   *
   * @public
   */
  totalResolvedFindings?: number | undefined;

  /**
   * The total number of archived findings for the resource type in the internal access analyzer.
   *
   * @public
   */
  totalArchivedFindings?: number | undefined;
}

/**
 * Provides aggregate statistics about the findings for the specified internal access analyzer. This includes counts of active, archived, and resolved findings.
 *
 * @public
 */
export interface InternalAccessFindingsStatistics {
  /**
   * The total number of active findings for each resource type of the specified internal access analyzer.
   *
   * @public
   */
  resourceTypeStatistics?: Partial<Record<ResourceType, InternalAccessResourceTypeDetails>> | undefined;

  /**
   * The number of active findings for the specified internal access analyzer.
   *
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * The number of archived findings for the specified internal access analyzer.
   *
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * The number of resolved findings for the specified internal access analyzer.
   *
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * Contains information about the findings for an Amazon Web Services account in an organization unused access analyzer.
 *
 * @public
 */
export interface FindingAggregationAccountDetails {
  /**
   * The ID of the Amazon Web Services account for which unused access finding details are provided.
   *
   * @public
   */
  account?: string | undefined;

  /**
   * The number of active unused access findings for the specified Amazon Web Services account.
   *
   * @public
   */
  numberOfActiveFindings?: number | undefined;

  /**
   * Provides the number of active findings for each type of unused access for the specified Amazon Web Services account.
   *
   * @public
   */
  details?: Record<string, number> | undefined;
}

/**
 * Contains information about the total number of findings for a type of unused access.
 *
 * @public
 */
export interface UnusedAccessTypeStatistics {
  /**
   * The type of unused access.
   *
   * @public
   */
  unusedAccessType?: string | undefined;

  /**
   * The total number of findings for the specified unused access type.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * Provides aggregate statistics about the findings for the specified unused access analyzer.
 *
 * @public
 */
export interface UnusedAccessFindingsStatistics {
  /**
   * A list of details about the total number of findings for each type of unused access for the analyzer.
   *
   * @public
   */
  unusedAccessTypeStatistics?: UnusedAccessTypeStatistics[] | undefined;

  /**
   * A list of one to ten Amazon Web Services accounts that have the most active findings for the unused access analyzer.
   *
   * @public
   */
  topAccounts?: FindingAggregationAccountDetails[] | undefined;

  /**
   * The total number of active findings for the unused access analyzer.
   *
   * @public
   */
  totalActiveFindings?: number | undefined;

  /**
   * The total number of archived findings for the unused access analyzer.
   *
   * @public
   */
  totalArchivedFindings?: number | undefined;

  /**
   * The total number of resolved findings for the unused access analyzer.
   *
   * @public
   */
  totalResolvedFindings?: number | undefined;
}

/**
 * Contains information about the aggregate statistics for an external or unused access analyzer. Only one parameter can be used in a `FindingsStatistics` object.
 *
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
   * The aggregate statistics for an external access analyzer.
   *
   * @public
   */
  export interface ExternalAccessFindingsStatisticsMember {
    externalAccessFindingsStatistics: ExternalAccessFindingsStatistics;
    internalAccessFindingsStatistics?: never;
    unusedAccessFindingsStatistics?: never;
    $unknown?: never;
  }

  /**
   * The aggregate statistics for an internal access analyzer. This includes information about active, archived, and resolved findings related to internal access within your Amazon Web Services organization or account.
   *
   * @public
   */
  export interface InternalAccessFindingsStatisticsMember {
    externalAccessFindingsStatistics?: never;
    internalAccessFindingsStatistics: InternalAccessFindingsStatistics;
    unusedAccessFindingsStatistics?: never;
    $unknown?: never;
  }

  /**
   * The aggregate statistics for an unused access analyzer.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    externalAccessFindingsStatistics: (value: ExternalAccessFindingsStatistics) => T;
    internalAccessFindingsStatistics: (value: InternalAccessFindingsStatistics) => T;
    unusedAccessFindingsStatistics: (value: UnusedAccessFindingsStatistics) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * A group of external access or unused access findings statistics.
   *
   * @public
   */
  findingsStatistics?: FindingsStatistics[] | undefined;

  /**
   * The time at which the retrieval of the findings statistics was last updated. If the findings statistics have not been previously retrieved for the specified analyzer, this field will not be populated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetFindingV2Request {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) that generated the finding.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The ID of the finding to retrieve.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about an external access finding.
 *
 * @public
 */
export interface ExternalAccessDetails {
  /**
   * The action in the analyzed policy statement that an external principal has permission to use.
   *
   * @public
   */
  action?: string[] | undefined;

  /**
   * The condition in the analyzed policy statement that resulted in an external access finding.
   *
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * Specifies whether the external access finding is public.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * The external principal that has access to a resource within the zone of trust.
   *
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * The sources of the external access finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).
   *
   * - `APPLICABLE`: There is an RCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. For example, if `s3:DeleteObject` is blocked by the RCP and the restriction is `APPLICABLE`, then `s3:DeleteObject` would still be included in the list of actions for the finding.
   * - `FAILED_TO_EVALUATE_RCP`: There was an error evaluating the RCP.
   * - `NOT_APPLICABLE`: There was no RCP present in the organization, or there was no RCP applicable to the resource. For example, the resource being analyzed is an Amazon RDS snapshot and there is an RCP in the organization, but the RCP only impacts Amazon S3 buckets.
   * - `APPLIED`: This restriction is not currently available for external access findings.
   *
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * Contains information about an internal access finding. This includes details about the access that was identified within your Amazon Web Services organization or account.
 *
 * @public
 */
export interface InternalAccessDetails {
  /**
   * The action in the analyzed policy statement that has internal access permission to use.
   *
   * @public
   */
  action?: string[] | undefined;

  /**
   * The condition in the analyzed policy statement that resulted in an internal access finding.
   *
   * @public
   */
  condition?: Record<string, string> | undefined;

  /**
   * The principal that has access to a resource within the internal environment.
   *
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account ID that owns the principal identified in the internal access finding.
   *
   * @public
   */
  principalOwnerAccount?: string | undefined;

  /**
   * The type of internal access identified in the finding. This indicates how the access is granted within your Amazon Web Services environment.
   *
   * @public
   */
  accessType?: InternalAccessType | undefined;

  /**
   * The type of principal identified in the internal access finding, such as IAM role or IAM user.
   *
   * @public
   */
  principalType?: PrincipalType | undefined;

  /**
   * The sources of the internal access finding. This indicates how the access that generated the finding is granted within your Amazon Web Services environment.
   *
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).
   *
   * - `APPLICABLE`: There is an RCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. For example, if `s3:DeleteObject` is blocked by the RCP and the restriction is `APPLICABLE`, then `s3:DeleteObject` would still be included in the list of actions for the finding. Only applicable to internal access findings with the account as the zone of trust.
   * - `FAILED_TO_EVALUATE_RCP`: There was an error evaluating the RCP.
   * - `NOT_APPLICABLE`: There was no RCP present in the organization. For internal access findings with the account as the zone of trust, `NOT_APPLICABLE` could also indicate that there was no RCP applicable to the resource.
   * - `APPLIED`: An RCP is present in the organization and IAM Access Analyzer included it in the evaluation of effective permissions. For example, if `s3:DeleteObject` is blocked by the RCP and the restriction is `APPLIED`, then `s3:DeleteObject` would not be included in the list of actions for the finding. Only applicable to internal access findings with the organization as the zone of trust.
   *
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;

  /**
   * The type of restriction applied to the finding by an Organizations service control policy (SCP).
   *
   * - `APPLICABLE`: There is an SCP present in the organization but IAM Access Analyzer does not include it in the evaluation of effective permissions. Only applicable to internal access findings with the account as the zone of trust.
   * - `FAILED_TO_EVALUATE_SCP`: There was an error evaluating the SCP.
   * - `NOT_APPLICABLE`: There was no SCP present in the organization. For internal access findings with the account as the zone of trust, `NOT_APPLICABLE` could also indicate that there was no SCP applicable to the principal.
   * - `APPLIED`: An SCP is present in the organization and IAM Access Analyzer included it in the evaluation of effective permissions. Only applicable to internal access findings with the organization as the zone of trust.
   *
   * @public
   */
  serviceControlPolicyRestriction?: ServiceControlPolicyRestriction | undefined;
}

/**
 * Contains information about an unused access finding for an IAM role. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see [IAM Access Analyzer pricing](https://aws.amazon.com/iam/access-analyzer/pricing).
 *
 * @public
 */
export interface UnusedIamRoleDetails {
  /**
   * The time at which the role was last accessed.
   *
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * Contains information about an unused access finding for an IAM user access key. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see [IAM Access Analyzer pricing](https://aws.amazon.com/iam/access-analyzer/pricing).
 *
 * @public
 */
export interface UnusedIamUserAccessKeyDetails {
  /**
   * The ID of the access key for which the unused access finding was generated.
   *
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The time at which the access key was last accessed.
   *
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * Contains information about an unused access finding for an IAM user password. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see [IAM Access Analyzer pricing](https://aws.amazon.com/iam/access-analyzer/pricing).
 *
 * @public
 */
export interface UnusedIamUserPasswordDetails {
  /**
   * The time at which the password was last accessed.
   *
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * Contains information about an unused access finding for an action. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see [IAM Access Analyzer pricing](https://aws.amazon.com/iam/access-analyzer/pricing).
 *
 * @public
 */
export interface UnusedAction {
  /**
   * The action for which the unused access finding was generated.
   *
   * @public
   */
  action: string | undefined;

  /**
   * The time at which the action was last accessed.
   *
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * Contains information about an unused access finding for a permission. IAM Access Analyzer charges for unused access analysis based on the number of IAM roles and users analyzed per month. For more details on pricing, see [IAM Access Analyzer pricing](https://aws.amazon.com/iam/access-analyzer/pricing).
 *
 * @public
 */
export interface UnusedPermissionDetails {
  /**
   * A list of unused actions for which the unused access finding was generated.
   *
   * @public
   */
  actions?: UnusedAction[] | undefined;

  /**
   * The namespace of the Amazon Web Services service that contains the unused actions.
   *
   * @public
   */
  serviceNamespace: string | undefined;

  /**
   * The time at which the permission was last accessed.
   *
   * @public
   */
  lastAccessed?: Date | undefined;
}

/**
 * Contains information about an external access or unused access finding. Only one parameter can be used in a `FindingDetails` object.
 *
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
   * The details for an internal access analyzer finding. This contains information about access patterns identified within your Amazon Web Services organization or account.
   *
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
   * The details for an external access analyzer finding.
   *
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
   * The details for an unused access analyzer finding with an unused permission finding type.
   *
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
   * The details for an unused access analyzer finding with an unused IAM user access key finding type.
   *
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
   * The details for an unused access analyzer finding with an unused IAM role finding type.
   *
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
   * The details for an unused access analyzer finding with an unused IAM user password finding type.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    internalAccessDetails: (value: InternalAccessDetails) => T;
    externalAccessDetails: (value: ExternalAccessDetails) => T;
    unusedPermissionDetails: (value: UnusedPermissionDetails) => T;
    unusedIamUserAccessKeyDetails: (value: UnusedIamUserAccessKeyDetails) => T;
    unusedIamRoleDetails: (value: UnusedIamRoleDetails) => T;
    unusedIamUserPasswordDetails: (value: UnusedIamUserPasswordDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetFindingV2Response {
  /**
   * The time at which the resource-based policy or IAM entity that generated the finding was analyzed.
   *
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * The time at which the finding was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * An error.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The ID of the finding to retrieve.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The resource that generated the finding.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * The type of the resource identified in the finding.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * Tye Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The time at which the finding was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A localized message that explains the finding and provides guidance on how to address it.
   *
   * @public
   */
  findingDetails: FindingDetails[] | undefined;

  /**
   * The type of the finding. For external access analyzers, the type is `ExternalAccess`. For unused access analyzers, the type can be `UnusedIAMRole`, `UnusedIAMUserAccessKey`, `UnusedIAMUserPassword`, or `UnusedPermission`. For internal access analyzers, the type is `InternalAccess`.
   *
   * @public
   */
  findingType?: FindingType | undefined;
}

/**
 * @public
 */
export interface GetGeneratedPolicyRequest {
  /**
   * The `JobId` that is returned by the `StartPolicyGeneration` operation. The `JobId` can be used with `GetGeneratedPolicy` to retrieve the generated policies or used with `CancelPolicyGeneration` to cancel the policy generation request.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies.
   *
   * For example, in the resource section of a policy, you can receive a placeholder such as `"Resource":"arn:aws:s3:::$\{BucketName\}"` instead of `"*"`.
   *
   * @public
   */
  includeResourcePlaceholders?: boolean | undefined;

  /**
   * The level of detail that you want to generate. You can specify whether to generate service-level policies.
   *
   * IAM Access Analyzer uses `iam:servicelastaccessed` to identify services that have been used recently to create this service-level template.
   *
   * @public
   */
  includeServiceLevelTemplate?: boolean | undefined;
}

/**
 * Contains the text for the generated policy.
 *
 * @public
 */
export interface GeneratedPolicy {
  /**
   * The text to use as the content for the new policy. The policy is created using the [CreatePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html) action.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
 *
 * @public
 */
export interface TrailProperties {
  /**
   * Specifies the ARN of the trail. The format of a trail ARN is `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`.
   *
   * @public
   */
  cloudTrailArn: string | undefined;

  /**
   * A list of regions to get CloudTrail data from and analyze to generate a policy.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * Possible values are `true` or `false`. If set to `true`, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.
   *
   * @public
   */
  allRegions?: boolean | undefined;
}

/**
 * Contains information about CloudTrail access.
 *
 * @public
 */
export interface CloudTrailProperties {
  /**
   * A `TrailProperties` object that contains settings for trail properties.
   *
   * @public
   */
  trailProperties: TrailProperties[] | undefined;

  /**
   * The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * Contains the generated policy details.
 *
 * @public
 */
export interface GeneratedPolicyProperties {
  /**
   * This value is set to `true` if the generated policy contains all possible actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified, and `false` otherwise.
   *
   * @public
   */
  isComplete?: boolean | undefined;

  /**
   * The ARN of the IAM entity (user or role) for which you are generating a policy.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * Lists details about the `Trail` used to generated policy.
   *
   * @public
   */
  cloudTrailProperties?: CloudTrailProperties | undefined;
}

/**
 * Contains the text for the generated policy and its details.
 *
 * @public
 */
export interface GeneratedPolicyResult {
  /**
   * A `GeneratedPolicyProperties` object that contains properties of the generated policy.
   *
   * @public
   */
  properties: GeneratedPolicyProperties | undefined;

  /**
   * The text to use as the content for the new policy. The policy is created using the [CreatePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html) action.
   *
   * @public
   */
  generatedPolicies?: GeneratedPolicy[] | undefined;
}

/**
 * Contains the details about the policy generation error.
 *
 * @public
 */
export interface JobError {
  /**
   * The job error code.
   *
   * @public
   */
  code: JobErrorCode | undefined;

  /**
   * Specific information about the error. For example, which service quota was exceeded or which resource was not found.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains details about the policy generation request.
 *
 * @public
 */
export interface JobDetails {
  /**
   * The `JobId` that is returned by the `StartPolicyGeneration` operation. The `JobId` can be used with `GetGeneratedPolicy` to retrieve the generated policies or used with `CancelPolicyGeneration` to cancel the policy generation request.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The status of the job request.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * A timestamp of when the job was started.
   *
   * @public
   */
  startedOn: Date | undefined;

  /**
   * A timestamp of when the job was completed.
   *
   * @public
   */
  completedOn?: Date | undefined;

  /**
   * The job error for the policy generation request.
   *
   * @public
   */
  jobError?: JobError | undefined;
}

/**
 * @public
 */
export interface GetGeneratedPolicyResponse {
  /**
   * A `GeneratedPolicyDetails` object that contains details about the generated policy.
   *
   * @public
   */
  jobDetails: JobDetails | undefined;

  /**
   * A `GeneratedPolicyResult` object that contains the generated policies and associated details.
   *
   * @public
   */
  generatedPolicyResult: GeneratedPolicyResult | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsRequest {
  /**
   * The unique ID for the access preview.
   *
   * @public
   */
  accessPreviewId: string | undefined;

  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the access.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * Criteria to filter the returned findings.
   *
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An access preview finding generated by the access preview.
 *
 * @public
 */
export interface AccessPreviewFinding {
  /**
   * The ID of the access preview finding. This ID uniquely identifies the element in the list of access preview findings and is not related to the finding ID in Access Analyzer.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The existing ID of the finding in IAM Access Analyzer, provided only for existing findings.
   *
   * @public
   */
  existingFindingId?: string | undefined;

  /**
   * The existing status of the finding, provided only for existing findings.
   *
   * @public
   */
  existingFindingStatus?: FindingStatus | undefined;

  /**
   * The external principal that has access to a resource within the zone of trust.
   *
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * The action in the analyzed policy statement that an external principal has permission to perform.
   *
   * @public
   */
  action?: string[] | undefined;

  /**
   * The condition in the analyzed policy statement that resulted in a finding.
   *
   * @public
   */
  condition?: Record<string, string> | undefined;

  /**
   * The resource that an external principal has access to. This is the resource associated with the access preview.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * Indicates whether the policy that generated the finding allows public access to the resource.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * The type of the resource that can be accessed in the finding.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The time at which the access preview finding was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Provides context on how the access preview finding compares to existing access identified in IAM Access Analyzer.
   *
   * - `New` - The finding is for newly-introduced access.
   * - `Unchanged` - The preview finding is an existing finding that would remain unchanged.
   * - `Changed` - The preview finding is an existing finding with a change in status.
   *
   * For example, a `Changed` finding with preview status `Resolved` and existing status `Active` indicates the existing `Active` finding would become `Resolved` as a result of the proposed permissions change.
   *
   * @public
   */
  changeType: FindingChangeType | undefined;

  /**
   * The preview status of the finding. This is what the status of the finding would be after permissions deployment. For example, a `Changed` finding with preview status `Resolved` and existing status `Active` indicates the existing `Active` finding would become `Resolved` as a result of the proposed permissions change.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * An error.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).
   *
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsResponse {
  /**
   * A list of access preview findings that match the specified filter criteria.
   *
   * @public
   */
  findings: AccessPreviewFinding[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewsRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) used to generate the access preview.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of information about an access preview.
 *
 * @public
 */
export interface AccessPreviewSummary {
  /**
   * The unique ID for the access preview.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the analyzer used to generate the access preview.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The time at which the access preview was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The status of the access preview.
   *
   * - `Creating` - The access preview creation is in progress.
   * - `Completed` - The access preview is complete and previews the findings for external access to the resource.
   * - `Failed` - The access preview creation has failed.
   *
   * @public
   */
  status: AccessPreviewStatus | undefined;

  /**
   * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a `Failed` status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
   *
   * @public
   */
  statusReason?: AccessPreviewStatusReason | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewsResponse {
  /**
   * A list of access previews retrieved for the analyzer.
   *
   * @public
   */
  accessPreviews: AccessPreviewSummary[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Retrieves a list of resources that have been analyzed.
 *
 * @public
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) to retrieve a list of analyzed resources from.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains the ARN of the analyzed resource.
 *
 * @public
 */
export interface AnalyzedResourceSummary {
  /**
   * The ARN of the analyzed resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * The type of resource that was analyzed.
   *
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * A list of resources that were analyzed.
   *
   * @public
   */
  analyzedResources: AnalyzedResourceSummary[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The criteria used to sort.
 *
 * @public
 */
export interface SortCriteria {
  /**
   * The name of the attribute to sort on.
   *
   * @public
   */
  attributeName?: string | undefined;

  /**
   * The sort order, ascending or descending.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * Retrieves a list of findings generated by the specified analyzer.
 *
 * @public
 */
export interface ListFindingsRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) to retrieve findings from.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * A filter to match for the findings to return.
   *
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * The sort order for the findings returned.
   *
   * @public
   */
  sort?: SortCriteria | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about a finding.
 *
 * @public
 */
export interface FindingSummary {
  /**
   * The ID of the finding.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external principal that has access to a resource within the zone of trust.
   *
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * The action in the analyzed policy statement that an external principal has permission to use.
   *
   * @public
   */
  action?: string[] | undefined;

  /**
   * The resource that the external principal has access to.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * Indicates whether the finding reports a resource that has a policy that allows public access.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * The type of the resource that the external principal has access to.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The condition in the analyzed policy statement that resulted in a finding.
   *
   * @public
   */
  condition: Record<string, string> | undefined;

  /**
   * The time at which the finding was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the resource-based policy that generated the finding was analyzed.
   *
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * The time at which the finding was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * The error that resulted in an Error finding.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
   *
   * @public
   */
  sources?: FindingSource[] | undefined;

  /**
   * The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP).
   *
   * @public
   */
  resourceControlPolicyRestriction?: ResourceControlPolicyRestriction | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface ListFindingsResponse {
  /**
   * A list of findings retrieved from the analyzer that match the filter criteria specified, if any.
   *
   * @public
   */
  findings: FindingSummary[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsV2Request {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) to retrieve findings from.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * A filter to match for the findings to return.
   *
   * @public
   */
  filter?: Record<string, Criterion> | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria used to sort.
   *
   * @public
   */
  sort?: SortCriteria | undefined;
}

/**
 * Contains information about a finding.
 *
 * @public
 */
export interface FindingSummaryV2 {
  /**
   * The time at which the resource-based policy or IAM entity that generated the finding was analyzed.
   *
   * @public
   */
  analyzedAt: Date | undefined;

  /**
   * The time at which the finding was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The error that resulted in an Error finding.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The ID of the finding.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The resource that the external principal has access to.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * The type of the resource that the external principal has access to.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  resourceOwnerAccount: string | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The time at which the finding was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The type of the access finding. For external access analyzers, the type is `ExternalAccess`. For unused access analyzers, the type can be `UnusedIAMRole`, `UnusedIAMUserAccessKey`, `UnusedIAMUserPassword`, or `UnusedPermission`. For internal access analyzers, the type is `InternalAccess`.
   *
   * @public
   */
  findingType?: FindingType | undefined;
}

/**
 * @public
 */
export interface ListFindingsV2Response {
  /**
   * A list of findings retrieved from the analyzer that match the filter criteria specified, if any.
   *
   * @public
   */
  findings: FindingSummaryV2[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with `ListGeneratedPolicies` to filter the results to only include results for a specific principal.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about the policy generation status and properties.
 *
 * @public
 */
export interface PolicyGeneration {
  /**
   * The `JobId` that is returned by the `StartPolicyGeneration` operation. The `JobId` can be used with `GetGeneratedPolicy` to retrieve the generated policies or used with `CancelPolicyGeneration` to cancel the policy generation request.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The ARN of the IAM entity (user or role) for which you are generating a policy.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The status of the policy generation request.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * A timestamp of when the policy generation started.
   *
   * @public
   */
  startedOn: Date | undefined;

  /**
   * A timestamp of when the policy generation was completed.
   *
   * @public
   */
  completedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * A `PolicyGeneration` object that contains details about the generated policy.
   *
   * @public
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Retrieves a list of tags applied to the specified resource.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to retrieve tags from.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are applied to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
 *
 * @public
 */
export interface Trail {
  /**
   * Specifies the ARN of the trail. The format of a trail ARN is `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`.
   *
   * @public
   */
  cloudTrailArn: string | undefined;

  /**
   * A list of regions to get CloudTrail data from and analyze to generate a policy.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * Possible values are `true` or `false`. If set to `true`, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.
   *
   * @public
   */
  allRegions?: boolean | undefined;
}

/**
 * Contains information about CloudTrail access.
 *
 * @public
 */
export interface CloudTrailDetails {
  /**
   * A `Trail` object that contains settings for a trail.
   *
   * @public
   */
  trails: Trail[] | undefined;

  /**
   * The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and service last accessed information.
   *
   * @public
   */
  accessRole: string | undefined;

  /**
   * The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Contains the ARN details about the IAM entity for which the policy is generated.
 *
 * @public
 */
export interface PolicyGenerationDetails {
  /**
   * The ARN of the IAM entity (user or role) for which you are generating a policy.
   *
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * Contains the ARN of the IAM entity (user or role) for which you are generating a policy.
   *
   * @public
   */
  policyGenerationDetails: PolicyGenerationDetails | undefined;

  /**
   * A `CloudTrailDetails` object that contains details about a `Trail` that you want to analyze to generate policies.
   *
   * @public
   */
  cloudTrailDetails?: CloudTrailDetails | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * The `JobId` that is returned by the `StartPolicyGeneration` operation. The `JobId` can be used with `GetGeneratedPolicy` to retrieve the generated policies or used with `CancelPolicyGeneration` to cancel the policy generation request.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Starts a scan of the policies applied to the specified resource.
 *
 * @public
 */
export interface StartResourceScanRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) to use to scan the policies applied to the specified resource.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The ARN of the resource to scan.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.
   *
   * @public
   */
  resourceOwnerAccount?: string | undefined;
}

/**
 * Adds a tag to the specified resource.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to add the tag to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * Removes a tag from the specified resource.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to remove the tag from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key for the tag to add.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * The response to the request.
 *
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Updates findings with the new values provided in the request.
 *
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * The [ARN of the analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources) that generated the findings to update.
   *
   * @public
   */
  analyzerArn: string | undefined;

  /**
   * The state represents the action to take to update the finding Status. Use `ARCHIVE` to change an Active finding to an Archived finding. Use `ACTIVE` to change an Archived finding to an Active finding.
   *
   * @public
   */
  status: FindingStatusUpdate | undefined;

  /**
   * The IDs of the findings to update.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * The ARN of the resource identified in the finding.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ValidatePolicyRequest {
  /**
   * The locale to use for localizing the findings.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The JSON policy document to use as the content for the policy.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups.
   *
   * Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.
   *
   * Service control policies (SCPs) are a type of organization policy attached to an Amazon Web Services organization, organizational unit (OU), or an account.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is `RESOURCE_POLICY`. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose `AWS::S3::Bucket` for the policy validation resource type.
   *
   * For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.
   *
   * @public
   */
  validatePolicyResourceType?: ValidatePolicyResourceType | undefined;
}

/**
 * A reference to a substring of a literal string in a JSON document.
 *
 * @public
 */
export interface Substring {
  /**
   * The start index of the substring, starting from 0.
   *
   * @public
   */
  start: number | undefined;

  /**
   * The length of the substring.
   *
   * @public
   */
  length: number | undefined;
}

/**
 * A single element in a path through the JSON representation of a policy.
 *
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
   * Refers to an index in a JSON array.
   *
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
   * Refers to a key in a JSON object.
   *
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
   * Refers to a substring of a literal string in a JSON object.
   *
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
   * Refers to the value associated with a given key in a JSON object.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    index: (value: number) => T;
    key: (value: string) => T;
    substring: (value: Substring) => T;
    value: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A position in a policy.
 *
 * @public
 */
export interface Position {
  /**
   * The line of the position, starting from 1.
   *
   * @public
   */
  line: number | undefined;

  /**
   * The column of the position, starting from 0.
   *
   * @public
   */
  column: number | undefined;

  /**
   * The offset within the policy that corresponds to the position, starting from 0.
   *
   * @public
   */
  offset: number | undefined;
}

/**
 * A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
 *
 * @public
 */
export interface Span {
  /**
   * The start position of the span (inclusive).
   *
   * @public
   */
  start: Position | undefined;

  /**
   * The end position of the span (exclusive).
   *
   * @public
   */
  end: Position | undefined;
}

/**
 * A location in a policy that is represented as a path through the JSON representation and a corresponding span.
 *
 * @public
 */
export interface Location {
  /**
   * A path in a policy, represented as a sequence of path elements.
   *
   * @public
   */
  path: PathElement[] | undefined;

  /**
   * A span in a policy.
   *
   * @public
   */
  span: Span | undefined;
}

/**
 * A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
 *
 * @public
 */
export interface ValidatePolicyFinding {
  /**
   * A localized message that explains the finding and provides guidance on how to address it.
   *
   * @public
   */
  findingDetails: string | undefined;

  /**
   * The impact of the finding.
   *
   * Security warnings report when the policy allows access that we consider overly permissive.
   *
   * Errors report when a part of the policy is not functional.
   *
   * Warnings report non-security issues when a policy does not conform to policy writing best practices.
   *
   * Suggestions recommend stylistic improvements in the policy that do not impact access.
   *
   * @public
   */
  findingType: ValidatePolicyFindingType | undefined;

  /**
   * The issue code provides an identifier of the issue associated with this finding.
   *
   * @public
   */
  issueCode: string | undefined;

  /**
   * A link to additional documentation about the type of finding.
   *
   * @public
   */
  learnMoreLink: string | undefined;

  /**
   * The list of locations in the policy document that are related to the finding. The issue code provides a summary of an issue identified by the finding.
   *
   * @public
   */
  locations: Location[] | undefined;
}

/**
 * @public
 */
export interface ValidatePolicyResponse {
  /**
   * The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy checks.
   *
   * @public
   */
  findings: ValidatePolicyFinding[] | undefined;

  /**
   * A token used for pagination of results returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}
