// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccessBudgetType,
  AdditionalAnalyses,
  AggregateFunctionName,
  AggregationThresholdType,
  AggregationType,
  AllowedAggregateExpressionType,
  AnalysisFormat,
  AnalysisLogExportStatus,
  AnalysisMethod,
  AnalysisRuleType,
  AnalysisTemplateValidationStatus,
  AnalysisTemplateValidationType,
  AnalysisType,
  AnalyticsEngine,
  ApprovalStatus,
  AutoApprovedChangeType,
  AutoRefreshMode,
  BaseTableDependencyType,
  BaseTableParentType,
  ChangeRequestAction,
  ChangeRequestStatus,
  ChangeSpecificationType,
  ChangeType,
  ChildResourceType,
  CollaborationJobLogStatus,
  CollaborationQueryLogStatus,
  CommercialRegion,
  ConfiguredTableAnalysisRuleType,
  ConfiguredTableAssociationAnalysisRuleType,
  CustomMLMemberAbility,
  DifferentialPrivacyAggregationType,
  ErrorMessageType,
  FilterableMemberStatus,
  IdNamespaceType,
  IntermediateTableAnalysisRuleType,
  IntermediateTableStatus,
  JobType,
  JoinOperator,
  JoinRequiredOption,
  LogExportAnalysisType,
  MemberAbility,
  MemberStatus,
  ParameterType,
  PopulateIntermediateTableAnalysisType,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetType,
  ResourceStatus,
  ScalarFunctions,
  SchemaConfiguration,
  SchemaStatus,
  SchemaStatusReasonCode,
  SchemaType,
  SelectedAnalysisMethod,
  SupportedS3Region,
  SyntheticDataColumnType,
  TableReferenceType,
} from "./enums";

/**
 * Detailed information about an access budget including time bounds, budget allocation, and configuration settings.
 *
 * @public
 */
export interface AccessBudgetDetails {
  /**
   * The start time for the access budget period.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time for the access budget period.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The remaining budget amount available for use within this access budget.
   *
   * @public
   */
  remainingBudget: number | undefined;

  /**
   * The total budget allocation amount for this access budget.
   *
   * @public
   */
  budget: number | undefined;

  /**
   * Specifies the time period for limiting table usage in queries and jobs. For calendar-based periods, the budget can renew if auto refresh is enabled. For lifetime budgets, the limit applies to the total usage throughout the collaboration. Valid values are:
   *
   * `CALENDAR_DAY` - Limit table usage per day.
   *
   * `CALENDAR_WEEK` - Limit table usage per week.
   *
   * `CALENDAR_MONTH` - Limit table usage per month.
   *
   * `LIFETIME` - Limit total table usage for the collaboration duration.
   *
   * @public
   */
  budgetType: AccessBudgetType | undefined;

  /**
   * Indicates whether the budget automatically refreshes for each time period specified in `budgetType`. Valid values are:
   *
   * `ENABLED` - The budget refreshes automatically at the start of each period.
   *
   * `DISABLED` - The budget must be refreshed manually.
   *
   * `NULL` - The value is null when `budgetType` is set to `LIFETIME`.
   *
   * @public
   */
  autoRefresh?: AutoRefreshMode | undefined;
}

/**
 * Controls and tracks usage limits for associated configured tables within a collaboration across queries and job. Supports both period-based budgets that can renew (daily, weekly, or monthly) and fixed lifetime budgets. Contains the resource ARN, remaining budget information, and up to two budget configurations (period-based and lifetime). By default, table usage is unlimited unless a budget is configured.
 *
 * @public
 */
export interface AccessBudget {
  /**
   * The Amazon Resource Name (ARN) of the access budget resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Detailed budget information including time bounds, remaining budget, and refresh settings.
   *
   * @public
   */
  details: AccessBudgetDetails[] | undefined;

  /**
   * The total remaining budget across all budget parameters, showing the lower value between the per-period budget and lifetime budget for this access budget. For individual parameter budgets, see `remainingBudget`.
   *
   * @public
   */
  aggregateRemainingBudget: number | undefined;
}

/**
 * Individual budget parameter configuration that defines specific budget allocation settings for access budgets.
 *
 * @public
 */
export interface BudgetParameter {
  /**
   * The type of budget parameter being configured.
   *
   * @public
   */
  type: AccessBudgetType | undefined;

  /**
   * The budget allocation amount for this specific parameter.
   *
   * @public
   */
  budget: number | undefined;

  /**
   * Whether this individual budget parameter automatically refreshes when the budget period resets.
   *
   * @public
   */
  autoRefresh?: AutoRefreshMode | undefined;
}

/**
 * Input parameters for privacy budget templates that support access budgets functionality, enabling enhanced budget management capabilities.
 *
 * @public
 */
export interface AccessBudgetsPrivacyTemplateParametersInput {
  /**
   * An array of budget parameters that define the access budget configuration for the privacy template.
   *
   * @public
   */
  budgetParameters: BudgetParameter[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with this privacy budget template.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Output parameters for privacy budget templates with access budgets support, containing the configured budget information.
 *
 * @public
 */
export interface AccessBudgetsPrivacyTemplateParametersOutput {
  /**
   * An array of budget parameters returned from the access budget configuration.
   *
   * @public
   */
  budgetParameters: BudgetParameter[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with this privacy budget template.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Update parameters for privacy budget templates with access budgets functionality, allowing modification of existing budget configurations.
 *
 * @public
 */
export interface AccessBudgetsPrivacyTemplateUpdateParameters {
  /**
   * Updated array of budget parameters for the access budget configuration.
   *
   * @public
   */
  budgetParameters: BudgetParameter[] | undefined;
}

/**
 * Column in configured table that can be used in aggregate function in query.
 *
 * @public
 */
export interface AggregateColumn {
  /**
   * Column names in configured table of aggregate columns.
   *
   * @public
   */
  columnNames: string[] | undefined;

  /**
   * Aggregation function that can be applied to aggregate column in query.
   *
   * @public
   */
  function: AggregateFunctionName | undefined;
}

/**
 * Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.
 *
 * @public
 */
export interface AggregationConstraint {
  /**
   * Column in aggregation constraint for which there must be a minimum number of distinct values in an output row for it to be in the query output.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The minimum number of distinct values that an output row must be an aggregation of. Minimum threshold of distinct values for a specified column that must exist in an output row for it to be in the query output.
   *
   * @public
   */
  minimum: number | undefined;

  /**
   * The type of aggregation the constraint allows. The only valid value is currently `COUNT_DISTINCT`.
   *
   * @public
   */
  type: AggregationType | undefined;
}

/**
 * Specifies the minimum number of distinct identities for an individual output column. This value overrides the table-wide `minimumIdentityCount` that you set in `AggregationThreshold`.
 *
 * @public
 */
export interface OutputColumnThreshold {
  /**
   * The name of the output column that the override applies to. You can specify each column only once.
   *
   * @public
   */
  outputColumnName: string | undefined;

  /**
   * The minimum number of distinct identities that each query output group must represent for this column. Specify 0 to exempt the column from the threshold, or a value of 2 or greater to enforce a threshold.
   *
   * @public
   */
  minimumIdentityCount: number | undefined;
}

/**
 * Specifies the minimum number of distinct identities that each query output group must represent.
 *
 * @public
 */
export interface AggregationThreshold {
  /**
   * The identity column, such as `user_id`, whose distinct values Clean Rooms counts to enforce minimum aggregation thresholds. Currently, you can specify only one column, and its data type must be string, varchar, or char.
   *
   * @public
   */
  identityColumns: string[] | undefined;

  /**
   * The minimum number of distinct identities that each query output group must represent. This threshold applies to all output columns in the table. To override this threshold for a specific column, use `outputColumnThresholds`.
   *
   * @public
   */
  minimumIdentityCount: number | undefined;

  /**
   * The type of aggregation that the threshold enforces. Currently, the only supported value is `COUNT_DISTINCT`, which counts the distinct values in the identity column.
   *
   * @public
   */
  type: AggregationThresholdType | undefined;

  /**
   * The per-column overrides of `minimumIdentityCount`. An output column without an override uses `minimumIdentityCount`.
   *
   * @public
   */
  outputColumnThresholds?: OutputColumnThreshold[] | undefined;

  /**
   * Specifies whether a query can aggregate a transformed column. This applies to the arguments of both aggregate and window functions. Valid values are:
   *
   * `COLUMNS_ONLY` – A query can aggregate only a direct column reference, such as `SUM(amount)`, or a constant. Clean Rooms rejects a query that transforms a column and then aggregates it, such as `SUM(amount * 2)` or `SUM(ROUND(amount))`.
   *
   * `ANY_EXPRESSION` – A query can aggregate any expression. This includes arithmetic, such as `SUM(price * quantity)`; a cast, such as `SUM(CAST(amount AS DECIMAL))`; a nested function call, such as `SUM(COALESCE(amount, 0))`; and a conditional, such as `SUM(CASE WHEN region = 'EU' THEN amount ELSE 0 END)`.
   *
   * @public
   */
  allowedAggregateExpressionType: AllowedAggregateExpressionType | undefined;
}

/**
 * The analysis log export error.
 *
 * @public
 */
export interface AnalysisLogExportError {
  /**
   * The error code for the analysis log export.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The message for the analysis log export error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains output information for an analysis log export with an S3 output type.
 *
 * The exported logs are written under the bucket and key prefix that you specify. The path includes the collaboration ID, the protected query ID, and the analysis log export ID. Because the path includes the export ID, exporting the same query more than once doesn't overwrite the logs from an earlier export.
 *
 * > **Note:** The exported logs are encrypted using the default encryption configuration of the destination bucket. Clean Rooms doesn't accept a KMS key for log export. To encrypt the exported logs with a customer managed key, configure the bucket's default encryption to use that key before you export.
 *
 * @public
 */
export interface AnalysisLogExportS3OutputConfiguration {
  /**
   * The S3 bucket that the exported analysis logs are written to. The bucket must be in the same Amazon Web Services Region as the collaboration.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 key prefix under which the exported analysis logs are written.
   *
   * Only one export can be in progress at a time for a given query and destination. To export the same query twice at once, use a different key prefix for the second export.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * Contains configuration details for analysis log export output.
 *
 * @public
 */
export interface AnalysisLogExportOutputConfiguration {
  /**
   * Required configuration for an analysis log export with an `s3` output type.
   *
   * @public
   */
  s3: AnalysisLogExportS3OutputConfiguration | undefined;
}

/**
 * Contains configurations for analysis log export results.
 *
 * @public
 */
export interface AnalysisLogExportResultConfiguration {
  /**
   * The configuration for analysis log export results.
   *
   * @public
   */
  outputConfiguration: AnalysisLogExportOutputConfiguration | undefined;
}

/**
 * An export of the redacted Apache Spark logs for a protected query.
 *
 * @public
 */
export interface AnalysisLogExport {
  /**
   * The unique identifier of the analysis log export.
   *
   * @public
   */
  analysisLogExportId: string | undefined;

  /**
   * The unique identifier of the protected query that the analysis logs were exported for.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The type of analysis that the logs were exported for. Currently, only `PROTECTED_QUERY` is supported.
   *
   * @public
   */
  analysisType: LogExportAnalysisType | undefined;

  /**
   * The unique identifier of the membership that the analysis log export belongs to.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The status of the analysis log export. Possible values are:
   *
   * - `IN_PROGRESS` – The export is currently running.
   * - `SUCCESS` – The export completed successfully.
   * - `FAILED` – The export failed. See the `error` field for details.
   *
   * @public
   */
  status: AnalysisLogExportStatus | undefined;

  /**
   * Contains the details needed to write the exported analysis logs.
   *
   * @public
   */
  resultConfiguration: AnalysisLogExportResultConfiguration | undefined;

  /**
   * The time the analysis log export was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the analysis log export was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The analysis log export error. This is present only when the export `status` is `FAILED`.
   *
   * @public
   */
  error?: AnalysisLogExportError | undefined;
}

/**
 * A summary of an analysis log export, including its identifier, status, analysis type, and creation time. Returned by `ListAnalysisLogExports`.
 *
 * @public
 */
export interface AnalysisLogExportSummary {
  /**
   * The unique identifier of the analysis log export.
   *
   * @public
   */
  analysisLogExportId: string | undefined;

  /**
   * The unique identifier of the protected query that the analysis logs were exported for.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The type of analysis that the logs were exported for. Currently, only `PROTECTED_QUERY` is supported.
   *
   * @public
   */
  analysisType: LogExportAnalysisType | undefined;

  /**
   * The status of the analysis log export. Possible values are:
   *
   * - `IN_PROGRESS` – The export is currently running.
   * - `SUCCESS` – The export completed successfully.
   * - `FAILED` – The export failed.
   *
   * @public
   */
  status: AnalysisLogExportStatus | undefined;

  /**
   * The time the analysis log export was created.
   *
   * @public
   */
  createTime: Date | undefined;
}

/**
 * Optional. The member who can query can provide this placeholder for a literal data value in an analysis template.
 *
 * @public
 */
export interface AnalysisParameter {
  /**
   * The name of the parameter. The name must use only alphanumeric or underscore (_) characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of parameter.
   *
   * @public
   */
  type: ParameterType | undefined;

  /**
   * Optional. The default value that is applied in the analysis template. The member who can query can override this value in the query editor.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * The configured table association analysis rule applied to a configured table with the aggregation analysis rule.
 *
 * @public
 */
export interface ConfiguredTableAssociationAnalysisRuleAggregation {
  /**
   * The list of collaboration members who are allowed to receive results of queries run with this configured table.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The list of resources or wildcards (ARNs) that are allowed to perform additional analysis on query output.
   *
   * The `allowedAdditionalAnalyses` parameter is currently supported for the list analysis rule (`AnalysisRuleList`) and the custom analysis rule (`AnalysisRuleCustom`).
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * The configured table association analysis rule applied to a configured table with the custom analysis rule.
 *
 * @public
 */
export interface ConfiguredTableAssociationAnalysisRuleCustom {
  /**
   * The list of collaboration members who are allowed to receive results of queries run with this configured table.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The list of resources or wildcards (ARNs) that are allowed to perform additional analysis on query output.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * The configured table association analysis rule applied to a configured table with the list analysis rule.
 *
 * @public
 */
export interface ConfiguredTableAssociationAnalysisRuleList {
  /**
   * The list of collaboration members who are allowed to receive results of queries run with this configured table.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The list of resources or wildcards (ARNs) that are allowed to perform additional analysis on query output.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * Controls on the query specifications that can be run on an associated configured table.
 *
 * @public
 */
export type ConfiguredTableAssociationAnalysisRulePolicyV1 =
  | ConfiguredTableAssociationAnalysisRulePolicyV1.AggregationMember
  | ConfiguredTableAssociationAnalysisRulePolicyV1.CustomMember
  | ConfiguredTableAssociationAnalysisRulePolicyV1.ListMember
  | ConfiguredTableAssociationAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAssociationAnalysisRulePolicyV1 {
  /**
   * Analysis rule type that enables only list queries on a configured table.
   *
   * @public
   */
  export interface ListMember {
    list: ConfiguredTableAssociationAnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Analysis rule type that enables only aggregation queries on a configured table.
   *
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: ConfiguredTableAssociationAnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Analysis rule type that enables the table owner to approve custom SQL queries on their configured tables. It supports differential privacy.
   *
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: ConfiguredTableAssociationAnalysisRuleCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    list: (value: ConfiguredTableAssociationAnalysisRuleList) => T;
    aggregation: (value: ConfiguredTableAssociationAnalysisRuleAggregation) => T;
    custom: (value: ConfiguredTableAssociationAnalysisRuleCustom) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Controls on the query specifications that can be run on an associated configured table.
 *
 * @public
 */
export type ConfiguredTableAssociationAnalysisRulePolicy =
  | ConfiguredTableAssociationAnalysisRulePolicy.V1Member
  | ConfiguredTableAssociationAnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAssociationAnalysisRulePolicy {
  /**
   * The policy for the configured table association analysis rule.
   *
   * @public
   */
  export interface V1Member {
    v1: ConfiguredTableAssociationAnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: ConfiguredTableAssociationAnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Controls on the analysis specifications that can be run on a configured table.
 *
 * @public
 */
export interface ConsolidatedPolicyAggregation {
  /**
   * Aggregate columns in consolidated policy aggregation.
   *
   * @public
   */
  aggregateColumns: AggregateColumn[] | undefined;

  /**
   * The columns to join on.
   *
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * Join required
   *
   * @public
   */
  joinRequired?: JoinRequiredOption | undefined;

  /**
   * The allowed join operators.
   *
   * @public
   */
  allowedJoinOperators?: JoinOperator[] | undefined;

  /**
   * The dimension columns of the consolidated policy aggregation.
   *
   * @public
   */
  dimensionColumns: string[] | undefined;

  /**
   * The scalar functions.
   *
   * @public
   */
  scalarFunctions: ScalarFunctions[] | undefined;

  /**
   * The output constraints of the consolidated policy aggregation.
   *
   * @public
   */
  outputConstraints: AggregationConstraint[] | undefined;

  /**
   * Additional analyses for the consolidated policy aggregation.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;

  /**
   * The allowed result receivers.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The additional analyses allowed by the consolidated policy aggregation.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * Specifies how a query can compare the columns in a table, including literal comparisons and column-to-column comparisons.
 *
 * @public
 */
export interface ComparisonControls {
  /**
   * The columns that a query can compare to literal values, for example, in a WHERE clause. Clean Rooms rejects a query that compares any other column to a literal value. Specify an empty list to block literal comparison on every column. You can't specify a column that you also use as an identity column in an aggregation threshold.
   *
   * @public
   */
  allowedLiteralComparisonColumns: string[] | undefined;

  /**
   * The columns that a query can compare to another column, for example, in a join, a WHERE clause, a GROUP BY clause, or a window function. Clean Rooms rejects a query that uses any other column in a column-to-column comparison. Specify an empty list to block column-to-column comparison on every column.
   *
   * @public
   */
  allowedColumnComparisonColumns: string[] | undefined;
}

/**
 * Specifies the name of the column that contains the unique identifier of your users, whose privacy you want to protect.
 *
 * @public
 */
export interface DifferentialPrivacyColumn {
  /**
   * The name of the column, such as user_id, that contains the unique identifier of your users, whose privacy you want to protect. If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Specifies the unique identifier for your users.
 *
 * @public
 */
export interface DifferentialPrivacyConfiguration {
  /**
   * The name of the column (such as user_id) that contains the unique identifier of your users whose privacy you want to protect. If you want to turn on diﬀerential privacy for two or more tables in a collaboration, you must conﬁgure the same column as the user identiﬁer column in both analysis rules.
   *
   * @public
   */
  columns: DifferentialPrivacyColumn[] | undefined;
}

/**
 * Controls on the analysis specifications that can be run on a configured table.
 *
 * @public
 */
export interface ConsolidatedPolicyCustom {
  /**
   * The allowed analyses.
   *
   * @public
   */
  allowedAnalyses: string[] | undefined;

  /**
   * The allowed analysis providers.
   *
   * @public
   */
  allowedAnalysisProviders?: string[] | undefined;

  /**
   * Additional analyses for the consolidated policy.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;

  /**
   * Disallowed output columns
   *
   * @public
   */
  disallowedOutputColumns?: string[] | undefined;

  /**
   * Specifies the unique identifier for your users.
   *
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyConfiguration | undefined;

  /**
   * The aggregation thresholds for the consolidated policy.
   *
   * @public
   */
  aggregationThresholds?: AggregationThreshold[] | undefined;

  /**
   * The comparison controls for the consolidated policy.
   *
   * @public
   */
  comparisonControls?: ComparisonControls | undefined;

  /**
   * The allowed result receivers.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The additional analyses allowed by the consolidated policy.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * Controls on the analysis specifications that can be run on a configured table.
 *
 * @public
 */
export interface ConsolidatedPolicyList {
  /**
   * The columns to join on.
   *
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * The allowed join operators in the consolidated policy list.
   *
   * @public
   */
  allowedJoinOperators?: JoinOperator[] | undefined;

  /**
   * The columns in the consolidated policy list.
   *
   * @public
   */
  listColumns: string[] | undefined;

  /**
   * Additional analyses for the consolidated policy list.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;

  /**
   * The allowed result receivers.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The additional analyses allowed by the consolidated policy list.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * Controls on the analysis specifications that can be run on a configured table.
 *
 * @public
 */
export type ConsolidatedPolicyV1 =
  | ConsolidatedPolicyV1.AggregationMember
  | ConsolidatedPolicyV1.CustomMember
  | ConsolidatedPolicyV1.ListMember
  | ConsolidatedPolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConsolidatedPolicyV1 {
  /**
   * The list of consolidated policies.
   *
   * @public
   */
  export interface ListMember {
    list: ConsolidatedPolicyList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * The aggregation setting for the consolidated policy.
   *
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: ConsolidatedPolicyAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Custom policy
   *
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: ConsolidatedPolicyCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    list: (value: ConsolidatedPolicyList) => T;
    aggregation: (value: ConsolidatedPolicyAggregation) => T;
    custom: (value: ConsolidatedPolicyCustom) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Controls on the analysis specifications that can be run on a configured table.
 *
 * @public
 */
export type ConsolidatedPolicy =
  | ConsolidatedPolicy.V1Member
  | ConsolidatedPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ConsolidatedPolicy {
  /**
   * The consolidated policy version 1.
   *
   * @public
   */
  export interface V1Member {
    v1: ConsolidatedPolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: ConsolidatedPolicyV1) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A type of analysis rule that enables query structure and specified queries that produce aggregate statistics.
 *
 * @public
 */
export interface AnalysisRuleAggregation {
  /**
   * The columns that query runners are allowed to use in aggregation queries.
   *
   * @public
   */
  aggregateColumns: AggregateColumn[] | undefined;

  /**
   * Columns in configured table that can be used in join statements and/or as aggregate columns. They can never be outputted directly.
   *
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * Control that requires member who runs query to do a join with their configured table and/or other configured table in query.
   *
   * @public
   */
  joinRequired?: JoinRequiredOption | undefined;

  /**
   * Which logical operators (if any) are to be used in an INNER JOIN match condition. Default is `AND`.
   *
   * @public
   */
  allowedJoinOperators?: JoinOperator[] | undefined;

  /**
   * The columns that query runners are allowed to select, group by, or filter by.
   *
   * @public
   */
  dimensionColumns: string[] | undefined;

  /**
   * Set of scalar functions that are allowed to be used on dimension columns and the output of aggregation of metrics.
   *
   * @public
   */
  scalarFunctions: ScalarFunctions[] | undefined;

  /**
   * Columns that must meet a specific threshold value (after an aggregation function is applied to it) for each output row to be returned.
   *
   * @public
   */
  outputConstraints: AggregationConstraint[] | undefined;

  /**
   * An indicator as to whether additional analyses (such as Clean Rooms ML) can be applied to the output of the direct query.
   *
   * The `additionalAnalyses` parameter is currently supported for the list analysis rule (`AnalysisRuleList`) and the custom analysis rule (`AnalysisRuleCustom`).
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;
}

/**
 * A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. It supports differential privacy, minimum aggregation thresholds, and comparison controls.
 *
 * @public
 */
export interface AnalysisRuleCustom {
  /**
   * The ARN of the analysis templates that are allowed by the custom analysis rule.
   *
   * @public
   */
  allowedAnalyses: string[] | undefined;

  /**
   * The IDs of the Amazon Web Services accounts that are allowed to query by the custom analysis rule. Required when `allowedAnalyses` is `ANY_QUERY`.
   *
   * @public
   */
  allowedAnalysisProviders?: string[] | undefined;

  /**
   * An indicator as to whether additional analyses (such as Clean Rooms ML) can be applied to the output of the direct query.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;

  /**
   * A list of columns that aren't allowed to be shown in the query output.
   *
   * @public
   */
  disallowedOutputColumns?: string[] | undefined;

  /**
   * The differential privacy configuration.
   *
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyConfiguration | undefined;

  /**
   * The aggregation thresholds that each query output group must satisfy. Clean Rooms filters out any group that represents fewer than the specified number of distinct identities. You can specify at most one threshold. You can't use aggregation thresholds with differential privacy, or when `allowedAnalyses` allows only jobs.
   *
   * @public
   */
  aggregationThresholds?: AggregationThreshold[] | undefined;

  /**
   * The controls that restrict how a query can compare the columns in the configured table. You can't use comparison controls with differential privacy, or when `allowedAnalyses` allows only jobs.
   *
   * @public
   */
  comparisonControls?: ComparisonControls | undefined;

  /**
   * The list of Amazon Web Services account IDs that are allowed to receive results from queries run on the configured table.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * The list of allowed additional analyses for the custom analysis rule.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;
}

/**
 * Provides the name of the columns that are required to overlap.
 *
 * @public
 */
export interface QueryConstraintRequireOverlap {
  /**
   * The columns that are required to overlap.
   *
   * @public
   */
  columns?: string[] | undefined;
}

/**
 * Provides any necessary query constraint information.
 *
 * @public
 */
export type QueryConstraint =
  | QueryConstraint.RequireOverlapMember
  | QueryConstraint.$UnknownMember;

/**
 * @public
 */
export namespace QueryConstraint {
  /**
   * An array of column names that specifies which columns are required in the JOIN statement.
   *
   * @public
   */
  export interface RequireOverlapMember {
    requireOverlap: QueryConstraintRequireOverlap;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    requireOverlap?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    requireOverlap: (value: QueryConstraintRequireOverlap) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines details for the analysis rule ID mapping table.
 *
 * @public
 */
export interface AnalysisRuleIdMappingTable {
  /**
   * The columns that query runners are allowed to use in an INNER JOIN statement.
   *
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * The query constraints of the analysis rule ID mapping table.
   *
   * @public
   */
  queryConstraints: QueryConstraint[] | undefined;

  /**
   * The columns that query runners are allowed to select, group by, or filter by.
   *
   * @public
   */
  dimensionColumns?: string[] | undefined;
}

/**
 * A type of analysis rule that enables row-level analysis.
 *
 * @public
 */
export interface AnalysisRuleList {
  /**
   * Columns that can be used to join a configured table with the table of the member who can query and other members' configured tables.
   *
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * The logical operators (if any) that are to be used in an INNER JOIN match condition. Default is `AND`.
   *
   * @public
   */
  allowedJoinOperators?: JoinOperator[] | undefined;

  /**
   * Columns that can be listed in the output.
   *
   * @public
   */
  listColumns: string[] | undefined;

  /**
   * An indicator as to whether additional analyses (such as Clean Rooms ML) can be applied to the output of the direct query.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;
}

/**
 * Controls on the query specifications that can be run on configured table.
 *
 * @public
 */
export type AnalysisRulePolicyV1 =
  | AnalysisRulePolicyV1.AggregationMember
  | AnalysisRulePolicyV1.CustomMember
  | AnalysisRulePolicyV1.IdMappingTableMember
  | AnalysisRulePolicyV1.ListMember
  | AnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicyV1 {
  /**
   * Analysis rule type that enables only list queries on a configured table.
   *
   * @public
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    idMappingTable?: never;
    $unknown?: never;
  }

  /**
   * Analysis rule type that enables only aggregation queries on a configured table.
   *
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    idMappingTable?: never;
    $unknown?: never;
  }

  /**
   * Analysis rule type that enables custom SQL queries on a configured table.
   *
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: AnalysisRuleCustom;
    idMappingTable?: never;
    $unknown?: never;
  }

  /**
   * The ID mapping table.
   *
   * @public
   */
  export interface IdMappingTableMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    idMappingTable: AnalysisRuleIdMappingTable;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    idMappingTable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    custom: (value: AnalysisRuleCustom) => T;
    idMappingTable: (value: AnalysisRuleIdMappingTable) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Controls on the query specifications that can be run on configured table.
 *
 * @public
 */
export type AnalysisRulePolicy =
  | AnalysisRulePolicy.V1Member
  | AnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicy {
  /**
   * Controls on the query specifications that can be run on configured table.
   *
   * @public
   */
  export interface V1Member {
    v1: AnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: AnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A specification about how data from the configured table can be used in a query.
 *
 * @public
 */
export interface AnalysisRule {
  /**
   * The unique ID for the associated collaboration.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The type of analysis rule.
   *
   * @public
   */
  type: AnalysisRuleType | undefined;

  /**
   * The name for the analysis rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time the analysis rule was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the analysis rule was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * A policy that describes the associated data usage limitations.
   *
   * @public
   */
  policy: AnalysisRulePolicy | undefined;

  /**
   * Controls on the query specifications that can be run on an associated configured table.
   *
   * @public
   */
  collaborationPolicy?: ConfiguredTableAssociationAnalysisRulePolicy | undefined;

  /**
   * The consolidated policy for the analysis rule.
   *
   * @public
   */
  consolidatedPolicy?: ConsolidatedPolicy | undefined;
}

/**
 * A relation within an analysis.
 *
 * @public
 */
export interface AnalysisSchema {
  /**
   * The tables referenced in the analysis schema.
   *
   * @public
   */
  referencedTables?: string[] | undefined;
}

/**
 * The S3 location.
 *
 * @public
 */
export interface S3Location {
  /**
   * The bucket name.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * The analysis template artifact.
 *
 * @public
 */
export interface AnalysisTemplateArtifact {
  /**
   * The artifact location.
   *
   * @public
   */
  location: S3Location | undefined;
}

/**
 * The analysis template artifacts.
 *
 * @public
 */
export interface AnalysisTemplateArtifacts {
  /**
   * The entry point for the analysis template artifacts.
   *
   * @public
   */
  entryPoint: AnalysisTemplateArtifact | undefined;

  /**
   * Additional artifacts for the analysis template.
   *
   * @public
   */
  additionalArtifacts?: AnalysisTemplateArtifact[] | undefined;

  /**
   * The role ARN for the analysis template artifacts.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * The structure that defines the body of the analysis template.
 *
 * @public
 */
export type AnalysisSource =
  | AnalysisSource.ArtifactsMember
  | AnalysisSource.TextMember
  | AnalysisSource.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisSource {
  /**
   * The query text.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    artifacts?: never;
    $unknown?: never;
  }

  /**
   * The artifacts of the analysis source.
   *
   * @public
   */
  export interface ArtifactsMember {
    text?: never;
    artifacts: AnalysisTemplateArtifacts;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    artifacts?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    artifacts: (value: AnalysisTemplateArtifacts) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Hash
 *
 * @public
 */
export interface Hash {
  /**
   * The SHA-256 hash value.
   *
   * @public
   */
  sha256?: string | undefined;
}

/**
 * The analysis template artifact metadata.
 *
 * @public
 */
export interface AnalysisTemplateArtifactMetadata {
  /**
   * The hash of the entry point for the analysis template artifact metadata.
   *
   * @public
   */
  entryPointHash: Hash | undefined;

  /**
   * Additional artifact hashes for the analysis template.
   *
   * @public
   */
  additionalArtifactHashes?: Hash[] | undefined;
}

/**
 * The analysis source metadata.
 *
 * @public
 */
export type AnalysisSourceMetadata =
  | AnalysisSourceMetadata.ArtifactsMember
  | AnalysisSourceMetadata.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisSourceMetadata {
  /**
   * The artifacts of the analysis source metadata.
   *
   * @public
   */
  export interface ArtifactsMember {
    artifacts: AnalysisTemplateArtifactMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    artifacts?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    artifacts: (value: AnalysisTemplateArtifactMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that defines the level of detail included in error messages returned by PySpark jobs. This configuration allows you to control the verbosity of error messages to help with troubleshooting PySpark jobs while maintaining appropriate security controls.
 *
 * @public
 */
export interface ErrorMessageConfiguration {
  /**
   * The level of detail for error messages returned by the PySpark job. When set to DETAILED, error messages include more information to help troubleshoot issues with your PySpark job.
   *
   * Because this setting may expose sensitive data, it is recommended for development and testing environments.
   *
   * @public
   */
  type: ErrorMessageType | undefined;
}

/**
 * Properties that define how a specific data column should be handled during synthetic data generation, including its name, type, and role in predictive modeling.
 *
 * @public
 */
export interface SyntheticDataColumnProperties {
  /**
   * The name of the data column as it appears in the dataset.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The data type of the column, which determines how the synthetic data generation algorithm processes and synthesizes values for this column.
   *
   * @public
   */
  columnType: SyntheticDataColumnType | undefined;

  /**
   * Indicates if this column contains predictive values that should be treated as target variables in machine learning models. This affects how the synthetic data generation preserves statistical relationships.
   *
   * @public
   */
  isPredictiveValue: boolean | undefined;
}

/**
 * Contains classification information for data columns, including mappings that specify how columns should be handled during synthetic data generation and privacy analysis.
 *
 * @public
 */
export interface ColumnClassificationDetails {
  /**
   * A mapping that defines the classification of data columns for synthetic data generation and specifies how each column should be handled during the privacy-preserving data synthesis process.
   *
   * @public
   */
  columnMapping: SyntheticDataColumnProperties[] | undefined;
}

/**
 * Parameters that control the generation of synthetic data for machine learning, including privacy settings and column classification details.
 *
 * @public
 */
export interface MLSyntheticDataParameters {
  /**
   * The epsilon value for differential privacy when generating synthetic data. Lower values provide stronger privacy guarantees but may reduce data utility.
   *
   * @public
   */
  epsilon: number | undefined;

  /**
   * The maximum acceptable score for membership inference attack vulnerability. Synthetic data generation fails if the score for the resulting data exceeds this threshold.
   *
   * @public
   */
  maxMembershipInferenceAttackScore: number | undefined;

  /**
   * Classification details for data columns that specify how each column should be treated during synthetic data generation.
   *
   * @public
   */
  columnClassification: ColumnClassificationDetails | undefined;
}

/**
 * The parameters that control how synthetic data is generated, including privacy settings, column classifications, and other configuration options that affect the data synthesis process.
 *
 * @public
 */
export type SyntheticDataParameters =
  | SyntheticDataParameters.MlSyntheticDataParametersMember
  | SyntheticDataParameters.$UnknownMember;

/**
 * @public
 */
export namespace SyntheticDataParameters {
  /**
   * The machine learning-specific parameters for synthetic data generation.
   *
   * @public
   */
  export interface MlSyntheticDataParametersMember {
    mlSyntheticDataParameters: MLSyntheticDataParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mlSyntheticDataParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mlSyntheticDataParameters: (value: MLSyntheticDataParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The reasons for the validation results.
 *
 * @public
 */
export interface AnalysisTemplateValidationStatusReason {
  /**
   * The validation message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The status details of the analysis template validation. Clean Rooms Differential Privacy uses a general-purpose query structure to support complex SQL queries and validates whether an analysis template fits that general-purpose query structure. Validation is performed when analysis templates are created and fetched. Because analysis templates are immutable by design, we recommend that you create analysis templates after you associate the configured tables with their analysis rule to your collaboration.
 *
 * For more information, see [https://docs.aws.amazon.com/clean-rooms/latest/userguide/analysis-rules-custom.html#custom-diff-privacy](https://docs.aws.amazon.com/clean-rooms/latest/userguide/analysis-rules-custom.html#custom-diff-privacy).
 *
 * @public
 */
export interface AnalysisTemplateValidationStatusDetail {
  /**
   * The type of validation that was performed.
   *
   * @public
   */
  type: AnalysisTemplateValidationType | undefined;

  /**
   * The status of the validation.
   *
   * @public
   */
  status: AnalysisTemplateValidationStatus | undefined;

  /**
   * The reasons for the validation results.
   *
   * @public
   */
  reasons?: AnalysisTemplateValidationStatusReason[] | undefined;
}

/**
 * The analysis template.
 *
 * @public
 */
export interface AnalysisTemplate {
  /**
   * The identifier for the analysis template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique ID for the associated collaboration of the analysis template.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique ARN for the analysis template’s associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The identifier of a member who created the analysis template.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member who created the analysis template.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The description of the analysis template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the analysis template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time that the analysis template was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time that the analysis template was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The entire schema object.
   *
   * @public
   */
  schema: AnalysisSchema | undefined;

  /**
   * The format of the analysis template.
   *
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * The source of the analysis template.
   *
   * @public
   */
  source: AnalysisSource | undefined;

  /**
   * The source metadata for the analysis template.
   *
   * @public
   */
  sourceMetadata?: AnalysisSourceMetadata | undefined;

  /**
   * The parameters of the analysis template.
   *
   * @public
   */
  analysisParameters?: AnalysisParameter[] | undefined;

  /**
   * Information about the validations performed on the analysis template.
   *
   * @public
   */
  validations?: AnalysisTemplateValidationStatusDetail[] | undefined;

  /**
   * The configuration that specifies the level of detail in error messages returned by analyses using this template. When set to `DETAILED`, error messages include more information to help troubleshoot issues with PySpark jobs. Detailed error messages may expose underlying data, including sensitive information. Recommended for faster troubleshooting in development and testing environments.
   *
   * @public
   */
  errorMessageConfiguration?: ErrorMessageConfiguration | undefined;

  /**
   * The parameters used to generate synthetic data for this analysis template.
   *
   * @public
   */
  syntheticDataParameters?: SyntheticDataParameters | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisTemplateInput {
  /**
   * The description of the analysis template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The name of the analysis template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The format of the analysis template.
   *
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * The information in the analysis template.
   *
   * @public
   */
  source: AnalysisSource | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The parameters of the analysis template.
   *
   * @public
   */
  analysisParameters?: AnalysisParameter[] | undefined;

  /**
   * A relation within an analysis.
   *
   * @public
   */
  schema?: AnalysisSchema | undefined;

  /**
   * The configuration that specifies the level of detail in error messages returned by analyses using this template. When set to `DETAILED`, error messages include more information to help troubleshoot issues with PySpark jobs. Detailed error messages may expose underlying data, including sensitive information. Recommended for faster troubleshooting in development and testing environments.
   *
   * @public
   */
  errorMessageConfiguration?: ErrorMessageConfiguration | undefined;

  /**
   * The parameters for generating synthetic data when running the analysis template.
   *
   * @public
   */
  syntheticDataParameters?: SyntheticDataParameters | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisTemplateOutput {
  /**
   * The analysis template.
   *
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * Describes validation errors for specific input parameters.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the input parameter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message for the input validation error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisTemplateInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for the analysis template resource.
   *
   * @public
   */
  analysisTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisTemplateOutput {}

/**
 * @public
 */
export interface GetAnalysisTemplateInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for the analysis template resource.
   *
   * @public
   */
  analysisTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAnalysisTemplateOutput {
  /**
   * The analysis template.
   *
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The metadata of the analysis template.
 *
 * @public
 */
export interface AnalysisTemplateSummary {
  /**
   * The Amazon Resource Name (ARN) of the analysis template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time that the analysis template summary was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The identifier of the analysis template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the analysis template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time that the analysis template summary was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member who created the analysis template.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique ARN for the analysis template summary’s associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * A unique identifier for the collaboration that the analysis template summary belongs to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The description of the analysis template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates if this analysis template summary generated synthetic data.
   *
   * @public
   */
  isSyntheticData?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Lists analysis template metadata.
   *
   * @public
   */
  analysisTemplateSummaries: AnalysisTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for the analysis template resource.
   *
   * @public
   */
  analysisTemplateIdentifier: string | undefined;

  /**
   * A new description for the analysis template.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateOutput {
  /**
   * The analysis template.
   *
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * Contains detailed information about the approval state of a given member in the collaboration for a given collaboration change request.
 *
 * @public
 */
export interface ApprovalStatusDetails {
  /**
   * The approval status of a member's vote on the change request. Valid values are PENDING (if they haven't voted), APPROVED, or DENIED.
   *
   * @public
   */
  status: ApprovalStatus | undefined;
}

/**
 * A reference to a table within Athena.
 *
 * @public
 */
export interface AthenaTableReference {
  /**
   * The Amazon Web Services Region where the Athena table is located. This parameter is required to uniquely identify and access tables across different Regions.
   *
   * @public
   */
  region?: CommercialRegion | undefined;

  /**
   * The workgroup of the Athena table reference.
   *
   * @public
   */
  workGroup: string | undefined;

  /**
   * The output location for the Athena table.
   *
   * @public
   */
  outputLocation?: string | undefined;

  /**
   * The database name.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The table reference.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The catalog name.
   *
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateInput {
  /**
   * A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
   *
   * @public
   */
  analysisTemplateArns: string[] | undefined;
}

/**
 * The analysis template within a collaboration.
 *
 * @public
 */
export interface CollaborationAnalysisTemplate {
  /**
   * The identifier of the analysis template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique ARN for the analysis template’s associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The description of the analysis template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The name of the analysis template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time that the analysis template within a collaboration was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time that the analysis template in the collaboration was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The entire schema object.
   *
   * @public
   */
  schema: AnalysisSchema | undefined;

  /**
   * The format of the analysis template in the collaboration.
   *
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * The source of the analysis template within a collaboration.
   *
   * @public
   */
  source?: AnalysisSource | undefined;

  /**
   * The source metadata for the collaboration analysis template.
   *
   * @public
   */
  sourceMetadata?: AnalysisSourceMetadata | undefined;

  /**
   * The analysis parameters that have been specified in the analysis template.
   *
   * @public
   */
  analysisParameters?: AnalysisParameter[] | undefined;

  /**
   * The validations that were performed.
   *
   * @public
   */
  validations?: AnalysisTemplateValidationStatusDetail[] | undefined;

  /**
   * The configuration that specifies the level of detail in error messages returned by analyses using this template. When set to `DETAILED`, error messages include more information to help troubleshoot issues with PySpark jobs. Detailed error messages may expose underlying data, including sensitive information. Recommended for faster troubleshooting in development and testing environments.
   *
   * @public
   */
  errorMessageConfiguration?: ErrorMessageConfiguration | undefined;

  /**
   * The synthetic data generation parameters configured for this collaboration analysis template.
   *
   * @public
   */
  syntheticDataParameters?: SyntheticDataParameters | undefined;
}

/**
 * Details of errors thrown by the call to retrieve multiple analysis templates within a collaboration by their identifiers.
 *
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateError {
  /**
   * The Amazon Resource Name (ARN) of the analysis template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * An error code for the error.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A description of why the call failed.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateOutput {
  /**
   * The retrieved list of analysis templates within a collaboration.
   *
   * @public
   */
  collaborationAnalysisTemplates: CollaborationAnalysisTemplate[] | undefined;

  /**
   * Error reasons for collaboration analysis templates that could not be retrieved. One error is returned for every collaboration analysis template that could not be retrieved.
   *
   * @public
   */
  errors: BatchGetCollaborationAnalysisTemplateError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaInput {
  /**
   * A unique identifier for the collaboration that the schemas belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The names for the schema objects to retrieve.
   *
   * @public
   */
  names: string[] | undefined;
}

/**
 * An error describing why a schema could not be fetched.
 *
 * @public
 */
export interface BatchGetSchemaError {
  /**
   * An error name for the error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An error code for the error.
   *
   * @public
   */
  code: string | undefined;

  /**
   * An error message for the error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A column within a schema relation, derived from the underlying table.
 *
 * @public
 */
export interface Column {
  /**
   * The name of the column.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the column.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * A reason why the schema status is set to its current value.
 *
 * @public
 */
export interface SchemaStatusReason {
  /**
   * The schema status reason code.
   *
   * @public
   */
  code: SchemaStatusReasonCode | undefined;

  /**
   * An explanation of the schema status reason code.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Information about the schema status.
 *
 * A status of `READY` means that based on the schema analysis rule, queries of the given analysis rule type are properly configured to run queries on this schema.
 *
 * @public
 */
export interface SchemaStatusDetail {
  /**
   * The status of the schema, indicating if it is ready to query.
   *
   * @public
   */
  status: SchemaStatus | undefined;

  /**
   * The reasons why the schema status is set to its current state.
   *
   * @public
   */
  reasons?: SchemaStatusReason[] | undefined;

  /**
   * The analysis rule type for which the schema status has been evaluated.
   *
   * @public
   */
  analysisRuleType?: AnalysisRuleType | undefined;

  /**
   * The configuration details of the schema analysis rule for the given type.
   *
   * @public
   */
  configurations?: SchemaConfiguration[] | undefined;

  /**
   * The type of analysis that can be performed on the schema.
   *
   * A schema can have an `analysisType` of `DIRECT_ANALYSIS`, `ADDITIONAL_ANALYSIS_FOR_AUDIENCE_GENERATION`, or both.
   *
   * @public
   */
  analysisType: AnalysisType | undefined;
}

/**
 * Contains the schema type properties for a configured table association.
 *
 * @public
 */
export interface ConfiguredTableAssociationSchemaTypeProperties {
  /**
   * The unique identifier of the configured table association.
   *
   * @public
   */
  configuredTableAssociationId: string | undefined;
}

/**
 * The input source of the ID mapping table.
 *
 * @public
 */
export interface IdMappingTableInputSource {
  /**
   * The unique identifier of the ID namespace association.
   *
   * @public
   */
  idNamespaceAssociationId: string | undefined;

  /**
   * The type of the input source of the ID mapping table.
   *
   * @public
   */
  type: IdNamespaceType | undefined;
}

/**
 * Additional properties that are specific to the type of the associated schema.
 *
 * @public
 */
export interface IdMappingTableSchemaTypeProperties {
  /**
   * Defines which ID namespace associations are used to create the ID mapping table.
   *
   * @public
   */
  idMappingTableInputSource: IdMappingTableInputSource[] | undefined;

  /**
   * The unique identifier of the ID mapping table.
   *
   * @public
   */
  idMappingTableId?: string | undefined;
}

/**
 * Contains the schema type properties for an intermediate table.
 *
 * @public
 */
export interface IntermediateTableSchemaTypeProperties {
  /**
   * The unique identifier of the intermediate table.
   *
   * @public
   */
  intermediateTableId: string | undefined;
}

/**
 * Information about the schema type properties.
 *
 * @public
 */
export type SchemaTypeProperties =
  | SchemaTypeProperties.ConfiguredTableAssociationMember
  | SchemaTypeProperties.IdMappingTableMember
  | SchemaTypeProperties.IntermediateTableMember
  | SchemaTypeProperties.$UnknownMember;

/**
 * @public
 */
export namespace SchemaTypeProperties {
  /**
   * The ID mapping table for the schema type properties.
   *
   * @public
   */
  export interface IdMappingTableMember {
    idMappingTable: IdMappingTableSchemaTypeProperties;
    intermediateTable?: never;
    configuredTableAssociation?: never;
    $unknown?: never;
  }

  /**
   * The schema type properties for an intermediate table.
   *
   * @public
   */
  export interface IntermediateTableMember {
    idMappingTable?: never;
    intermediateTable: IntermediateTableSchemaTypeProperties;
    configuredTableAssociation?: never;
    $unknown?: never;
  }

  /**
   * The schema type properties for a configured table association.
   *
   * @public
   */
  export interface ConfiguredTableAssociationMember {
    idMappingTable?: never;
    intermediateTable?: never;
    configuredTableAssociation: ConfiguredTableAssociationSchemaTypeProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    idMappingTable?: never;
    intermediateTable?: never;
    configuredTableAssociation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    idMappingTable: (value: IdMappingTableSchemaTypeProperties) => T;
    intermediateTable: (value: IntermediateTableSchemaTypeProperties) => T;
    configuredTableAssociation: (value: ConfiguredTableAssociationSchemaTypeProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A schema is a relation within a collaboration.
 *
 * @public
 */
export interface Schema {
  /**
   * The columns for the relation that this schema represents.
   *
   * @public
   */
  columns: Column[] | undefined;

  /**
   * The partition keys for the dataset underlying this schema.
   *
   * @public
   */
  partitionKeys: Column[] | undefined;

  /**
   * The analysis rule types that are associated with the schema. Currently, only one entry is present.
   *
   * @public
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * The analysis method for the schema.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod?: AnalysisMethod | undefined;

  /**
   * The selected analysis methods for the schema.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;

  /**
   * The unique account ID for the Amazon Web Services account that owns the schema.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * A name for the schema. The schema relation is referred to by this name when queried by a protected query.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique ID for the collaboration that the schema belongs to.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) for the collaboration that the schema belongs to.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * A description for the schema.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The time at which the schema was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the schema was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The type of schema.
   *
   * @public
   */
  type: SchemaType | undefined;

  /**
   * Details about the status of the schema. Currently, only one entry is present.
   *
   * @public
   */
  schemaStatusDetails: SchemaStatusDetail[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The schema type properties.
   *
   * @public
   */
  schemaTypeProperties?: SchemaTypeProperties | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaOutput {
  /**
   * The retrieved list of schemas.
   *
   * @public
   */
  schemas: Schema[] | undefined;

  /**
   * Error reasons for schemas that could not be retrieved. One error is returned for every schema that could not be retrieved.
   *
   * @public
   */
  errors: BatchGetSchemaError[] | undefined;
}

/**
 * Defines the information that's necessary to retrieve an analysis rule schema. Schema analysis rules are uniquely identiﬁed by a combination of the schema name and the analysis rule type for a given collaboration.
 *
 * @public
 */
export interface SchemaAnalysisRuleRequest {
  /**
   * The name of the analysis rule schema that you are requesting.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of analysis rule schema that you are requesting.
   *
   * @public
   */
  type: AnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaAnalysisRuleInput {
  /**
   * The unique identifier of the collaboration that contains the schema analysis rule.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The information that's necessary to retrieve a schema analysis rule.
   *
   * @public
   */
  schemaAnalysisRuleRequests: SchemaAnalysisRuleRequest[] | undefined;
}

/**
 * An error that describes why a schema could not be fetched.
 *
 * @public
 */
export interface BatchGetSchemaAnalysisRuleError {
  /**
   * An error name for the error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The analysis rule type.
   *
   * @public
   */
  type: AnalysisRuleType | undefined;

  /**
   * An error code for the error.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A description of why the call failed.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaAnalysisRuleOutput {
  /**
   * The retrieved list of analysis rules.
   *
   * @public
   */
  analysisRules: AnalysisRule[] | undefined;

  /**
   * Error reasons for schemas that could not be retrieved. One error is returned for every schema that could not be retrieved.
   *
   * @public
   */
  errors: BatchGetSchemaAnalysisRuleError[] | undefined;
}

/**
 * The ML member abilities for a collaboration member.
 *
 * @public
 */
export interface MLMemberAbilities {
  /**
   * The custom ML member abilities for a collaboration member.
   *
   * @public
   */
  customMLMemberAbilities: CustomMLMemberAbility[] | undefined;
}

/**
 * An object representing the collaboration member's payment responsibilities set by the collaboration creator for query and job compute costs.
 *
 * @public
 */
export interface JobComputePaymentConfig {
  /**
   * Indicates whether the collaboration creator has configured the collaboration member to pay for query and job compute costs (`TRUE`) or has not configured the collaboration member to pay for query and job compute costs (`FALSE`).
   *
   * One or more members can be configured as payer candidates for query and job compute costs.
   *
   * An error is returned if the collaboration creator sets a `FALSE` value for the member who can run queries and jobs.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * An object representing the collaboration member's model inference payment responsibilities set by the collaboration creator.
 *
 * @public
 */
export interface ModelInferencePaymentConfig {
  /**
   * Indicates whether the collaboration creator has configured the collaboration member to pay for model inference costs (`TRUE`) or has not configured the collaboration member to pay for model inference costs (`FALSE`).
   *
   * One or more members can be configured as payer candidates for model inference costs.
   *
   * If the collaboration creator hasn't specified anyone as the member paying for model inference costs, then the member who can query is the default payer.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * An object representing the collaboration member's model training payment responsibilities set by the collaboration creator.
 *
 * @public
 */
export interface ModelTrainingPaymentConfig {
  /**
   * Indicates whether the collaboration creator has configured the collaboration member to pay for model training costs (`TRUE`) or has not configured the collaboration member to pay for model training costs (`FALSE`).
   *
   * One or more members can be configured as payer candidates for model training costs.
   *
   * If the collaboration creator hasn't specified anyone as the member paying for model training costs, then the member who can query is the default payer.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * Payment configuration for synthetic data generation.
 *
 * @public
 */
export interface SyntheticDataGenerationPaymentConfig {
  /**
   * Indicates who is responsible for paying for synthetic data generation.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * An object representing the collaboration member's machine learning payment responsibilities set by the collaboration creator.
 *
 * @public
 */
export interface MLPaymentConfig {
  /**
   * The payment responsibilities accepted by the member for model training.
   *
   * @public
   */
  modelTraining?: ModelTrainingPaymentConfig | undefined;

  /**
   * The payment responsibilities accepted by the member for model inference.
   *
   * @public
   */
  modelInference?: ModelInferencePaymentConfig | undefined;

  /**
   * The payment configuration for machine learning synthetic data generation.
   *
   * @public
   */
  syntheticDataGeneration?: SyntheticDataGenerationPaymentConfig | undefined;
}

/**
 * An object representing the collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
 *
 * @public
 */
export interface QueryComputePaymentConfig {
  /**
   * Indicates whether the collaboration creator has configured the collaboration member to pay for query compute costs (`TRUE`) or has not configured the collaboration member to pay for query compute costs (`FALSE`).
   *
   * One or more members can be configured as payer candidates for query compute costs.
   *
   * If the collaboration creator hasn't specified anyone as the member paying for query compute costs, then the member who can query is the default payer.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
 *
 * @public
 */
export interface PaymentConfiguration {
  /**
   * The collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
   *
   * @public
   */
  queryCompute: QueryComputePaymentConfig | undefined;

  /**
   * An object representing the collaboration member's machine learning payment responsibilities set by the collaboration creator.
   *
   * @public
   */
  machineLearning?: MLPaymentConfig | undefined;

  /**
   * The compute configuration for the job.
   *
   * @public
   */
  jobCompute?: JobComputePaymentConfig | undefined;
}

/**
 * The settings for client-side encryption for cryptographic computing.
 *
 * @public
 */
export interface DataEncryptionMetadata {
  /**
   * Indicates whether encrypted tables can contain cleartext data (`TRUE`) or are to cryptographically process every column (`FALSE`).
   *
   * @public
   */
  allowCleartext: boolean | undefined;

  /**
   * Indicates whether Fingerprint columns can contain duplicate entries (`TRUE`) or are to contain only non-repeated values (`FALSE`).
   *
   * @public
   */
  allowDuplicates: boolean | undefined;

  /**
   * Indicates whether Fingerprint columns can be joined on any other Fingerprint column with a different name (`TRUE`) or can only be joined on Fingerprint columns of the same name (`FALSE`).
   *
   * @public
   */
  allowJoinsOnColumnsWithDifferentNames: boolean | undefined;

  /**
   * Indicates whether NULL values are to be copied as NULL to encrypted tables (`TRUE`) or cryptographically processed (`FALSE`).
   *
   * @public
   */
  preserveNulls: boolean | undefined;
}

/**
 * Basic metadata used to construct a new member.
 *
 * @public
 */
export interface MemberSpecification {
  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The abilities granted to the collaboration member.
   *
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * The ML abilities granted to the collaboration member.
   *
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * The member's display name.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The collaboration member's payment responsibilities set by the collaboration creator.
   *
   * If the collaboration creator hasn't speciﬁed anyone as the member paying for query compute costs, then the member who can query is the default payer.
   *
   * @public
   */
  paymentConfiguration?: PaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationInput {
  /**
   * A list of initial members, not including the creator. This list is immutable.
   *
   * @public
   */
  members: MemberSpecification[] | undefined;

  /**
   * The display name for a collaboration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the collaboration provided by the collaboration owner.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The abilities granted to the collaboration creator.
   *
   * @public
   */
  creatorMemberAbilities: MemberAbility[] | undefined;

  /**
   * The ML abilities granted to the collaboration creator.
   *
   * @public
   */
  creatorMLMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * The display name of the collaboration creator.
   *
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * The settings for client-side encryption with Cryptographic Computing for Clean Rooms.
   *
   * @public
   */
  dataEncryptionMetadata?: DataEncryptionMetadata | undefined;

  /**
   * An indicator as to whether query logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;

  /**
   * Specifies whether job logs are enabled for this collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about jobs run within this collaboration; those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  jobLogStatus?: CollaborationJobLogStatus | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The collaboration creator's payment responsibilities set by the collaboration creator.
   *
   * If the collaboration creator hasn't specified anyone as the member paying for query compute costs, then the member who can query is the default payer.
   *
   * @public
   */
  creatorPaymentConfiguration?: PaymentConfiguration | undefined;

  /**
   * The analytics engine.
   *
   * > **Note:** After July 16, 2025, the `CLEAN_ROOMS_SQL` parameter will no longer be available.
   *
   * @public
   */
  analyticsEngine?: AnalyticsEngine | undefined;

  /**
   * The types of change requests that are automatically approved for this collaboration.
   *
   * @public
   */
  autoApprovedChangeRequestTypes?: AutoApprovedChangeType[] | undefined;

  /**
   * The Amazon Web Services Regions where collaboration query results can be stored. When specified, results can only be written to these Regions. This parameter enables you to meet your compliance and data governance requirements, and implement regional data governance policies.
   *
   * @public
   */
  allowedResultRegions?: SupportedS3Region[] | undefined;

  /**
   * An indicator as to whether metrics have been enabled or disabled for the collaboration.
   *
   * When `true`, collaboration members can opt in to Amazon CloudWatch metrics for their membership queries. The default value is `false`.
   *
   * @public
   */
  isMetricsEnabled?: boolean | undefined;
}

/**
 * The multi-party data share environment. The collaboration contains metadata about its purpose and participants.
 *
 * @public
 */
export interface Collaboration {
  /**
   * The unique ID for the collaboration.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN for the collaboration.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A human-readable identifier provided by the collaboration owner. Display names are not unique.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the collaboration provided by the collaboration owner.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * A display name of the collaboration creator.
   *
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * The time when the collaboration was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the collaboration metadata was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The status of a member in a collaboration.
   *
   * @public
   */
  memberStatus: MemberStatus | undefined;

  /**
   * The unique ID for your membership within the collaboration.
   *
   * @public
   */
  membershipId?: string | undefined;

  /**
   * The unique ARN for your membership within the collaboration.
   *
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * The settings for client-side encryption for cryptographic computing.
   *
   * @public
   */
  dataEncryptionMetadata?: DataEncryptionMetadata | undefined;

  /**
   * An indicator as to whether query logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;

  /**
   * An indicator as to whether job logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  jobLogStatus?: CollaborationJobLogStatus | undefined;

  /**
   * The analytics engine for the collaboration.
   *
   * > **Note:** After July 16, 2025, the `CLEAN_ROOMS_SQL` parameter will no longer be available.
   *
   * @public
   */
  analyticsEngine?: AnalyticsEngine | undefined;

  /**
   * The types of change requests that are automatically approved for this collaboration.
   *
   * @public
   */
  autoApprovedChangeTypes?: AutoApprovedChangeType[] | undefined;

  /**
   * The Amazon Web Services Regions where collaboration query results can be stored. Returns the list of Region identifiers that were specified when the collaboration was created. This list is used to enforce regional storage policies and compliance requirements.
   *
   * @public
   */
  allowedResultRegions?: SupportedS3Region[] | undefined;

  /**
   * An indicator as to whether metrics are enabled for the collaboration.
   *
   * When `true`, collaboration members can opt in to Amazon CloudWatch metrics for their membership queries.
   *
   * @public
   */
  isMetricsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationOutput {
  /**
   * The collaboration.
   *
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * Defines the specific changes being requested for a collaboration, including configuration modifications and approval requirements.
 *
 * @public
 */
export interface CollaborationChangeSpecification {
  /**
   * Defines requested updates to properties of the collaboration. Currently, this only supports modifying which change types are auto-approved for the collaboration.
   *
   * @public
   */
  autoApprovedChangeTypes?: AutoApprovedChangeType[] | undefined;
}

/**
 * Specifies changes to collaboration membership, including adding new members with their abilities and display names.
 *
 * @public
 */
export interface MemberChangeSpecification {
  /**
   * The Amazon Web Services account ID of the member to add to the collaboration.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The abilities granted to the collaboration member. These determine what actions the member can perform within the collaboration.
   *
   * > **Note:**
   * >
   * > The following values are currently not supported: `CAN_QUERY` and `CAN_RUN_JOB`.
   * >
   * > Set the value of `memberAbilities` to `[]` to allow a member to contribute data.
   * >
   * > Set the value of `memberAbilities` to `[CAN_RECEIVE_RESULTS]` to allow a member to contribute data and receive results.
   * >
   * > Set the value of `memberAbilities` to `[CAN_EXPORT_QUERY_ANALYSIS_LOG]` so that the member can export the analysis logs for a protected query. Having this ability isn't sufficient on its own: You can export logs only for queries that you ran or paid for.
   *
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * The ML member abilities for a collaboration member.
   *
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
   *
   * @public
   */
  paymentConfiguration?: PaymentConfiguration | undefined;

  /**
   * Specifies the display name that will be shown for this member in the collaboration. While this field is required when inviting new members, it becomes optional when modifying abilities of existing collaboration members.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * A union that contains the specification details for different types of changes.
 *
 * @public
 */
export type ChangeSpecification =
  | ChangeSpecification.CollaborationMember
  | ChangeSpecification.MemberMember
  | ChangeSpecification.$UnknownMember;

/**
 * @public
 */
export namespace ChangeSpecification {
  /**
   * The member change specification when the change type is `MEMBER`.
   *
   * @public
   */
  export interface MemberMember {
    member: MemberChangeSpecification;
    collaboration?: never;
    $unknown?: never;
  }

  /**
   * The collaboration configuration changes being requested. Currently, this only supports modifying which change types are auto-approved for the collaboration.
   *
   * @public
   */
  export interface CollaborationMember {
    member?: never;
    collaboration: CollaborationChangeSpecification;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    member?: never;
    collaboration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    member: (value: MemberChangeSpecification) => T;
    collaboration: (value: CollaborationChangeSpecification) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies a change to apply to a collaboration.
 *
 * @public
 */
export interface ChangeInput {
  /**
   * The type of specification for the change. Currently supports `MEMBER` for member-related changes.
   *
   * @public
   */
  specificationType: ChangeSpecificationType | undefined;

  /**
   * The specification details for the change. The structure depends on the specification type.
   *
   * @public
   */
  specification: ChangeSpecification | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationChangeRequestInput {
  /**
   * The identifier of the collaboration that the change request is made against.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The list of changes to apply to the collaboration. Each change specifies the type of modification and the details of what should be changed.
   *
   * @public
   */
  changes: ChangeInput[] | undefined;
}

/**
 * Represents a single change within a collaboration change request, containing the change identifier and specification.
 *
 * @public
 */
export interface Change {
  /**
   * The type of specification for this change.
   *
   * @public
   */
  specificationType: ChangeSpecificationType | undefined;

  /**
   * The specification details for this change.
   *
   * @public
   */
  specification: ChangeSpecification | undefined;

  /**
   * The list of change types that were applied.
   *
   * @public
   */
  types: ChangeType[] | undefined;
}

/**
 * Represents a request to modify a collaboration. Change requests enable structured modifications to collaborations after they have been created.
 *
 * @public
 */
export interface CollaborationChangeRequest {
  /**
   * The unique identifier for the change request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique identifier for the collaboration being modified.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The time when the change request was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time when the change request was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The current status of the change request. Valid values are `PENDING`, `APPROVED`, `DENIED`, `COMMITTED`, and `CANCELLED`.
   *
   * @public
   */
  status: ChangeRequestStatus | undefined;

  /**
   * Whether the change request was automatically approved based on the collaboration's auto-approval settings.
   *
   * @public
   */
  isAutoApproved: boolean | undefined;

  /**
   * The list of changes specified in this change request.
   *
   * @public
   */
  changes: Change[] | undefined;

  /**
   * A list of approval details from collaboration members, including approval status and multi-party approval workflow information.
   *
   * @public
   */
  approvals?: Record<string, ApprovalStatusDetails> | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationChangeRequestOutput {
  /**
   * Represents a request to modify a collaboration. Change requests enable structured modifications to collaborations after they have been created.
   *
   * @public
   */
  collaborationChangeRequest: CollaborationChangeRequest | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationInput {
  /**
   * The identifier for the collaboration.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationOutput {}

/**
 * @public
 */
export interface DeleteMemberInput {
  /**
   * The unique identifier for the associated collaboration.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The account ID of the member to remove.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemberOutput {}

/**
 * @public
 */
export interface GetCollaborationInput {
  /**
   * The identifier for the collaboration.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationOutput {
  /**
   * The entire collaboration for this identifier.
   *
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateInput {
  /**
   * A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
   *
   * @public
   */
  analysisTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateOutput {
  /**
   * The analysis template within a collaboration.
   *
   * @public
   */
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface GetCollaborationChangeRequestInput {
  /**
   * The identifier of the collaboration that the change request is made against.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * A unique identifier for the change request to retrieve.
   *
   * @public
   */
  changeRequestIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationChangeRequestOutput {
  /**
   * The collaboration change request that was requested.
   *
   * @public
   */
  collaborationChangeRequest: CollaborationChangeRequest | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
  /**
   * A unique identifier for the collaboration that the configured audience model association belongs to. Accepts a collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * A unique identifier for the configured audience model association that you want to retrieve.
   *
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;
}

/**
 * The configured audience model association within a collaboration.
 *
 * @public
 */
export interface CollaborationConfiguredAudienceModelAssociation {
  /**
   * The identifier of the configured audience model association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the collaboration that the configured audience model associations belong to. Accepts collaboration ID.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique ARN for the configured audience model's associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configure audience model.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The name of the configured audience model association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The time at which the configured audience model association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured audience model association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
  /**
   * The metadata of the configured audience model association.
   *
   * @public
   */
  collaborationConfiguredAudienceModelAssociation: CollaborationConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface GetCollaborationIdNamespaceAssociationInput {
  /**
   * The unique identifier of the collaboration that contains the ID namespace association that you want to retrieve.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The unique identifier of the ID namespace association that you want to retrieve.
   *
   * @public
   */
  idNamespaceAssociationIdentifier: string | undefined;
}

/**
 * The configuration settings for the ID mapping table.
 *
 * @public
 */
export interface IdMappingConfig {
  /**
   * An indicator as to whether you can use your column as a dimension column in the ID mapping table (`TRUE`) or not (`FALSE`).
   *
   * Default is `FALSE`.
   *
   * @public
   */
  allowUseAsDimensionColumn: boolean | undefined;
}

/**
 * Provides the information for the ID namespace association input reference configuration.
 *
 * @public
 */
export interface IdNamespaceAssociationInputReferenceConfig {
  /**
   * The Amazon Resource Name (ARN) of the Entity Resolution resource that is being associated to the collaboration. Valid resource ARNs are from the ID namespaces that you own.
   *
   * @public
   */
  inputReferenceArn: string | undefined;

  /**
   * When `TRUE`, Clean Rooms manages permissions for the ID namespace association resource.
   *
   * When `FALSE`, the resource owner manages permissions for the ID namespace association resource.
   *
   * @public
   */
  manageResourcePolicies: boolean | undefined;
}

/**
 * Provides the information for the ID namespace association input reference properties.
 *
 * @public
 */
export interface IdNamespaceAssociationInputReferenceProperties {
  /**
   * The ID namespace type for this ID namespace association.
   *
   * @public
   */
  idNamespaceType: IdNamespaceType | undefined;

  /**
   * Defines how ID mapping workflows are supported for this ID namespace association.
   *
   * @public
   */
  idMappingWorkflowsSupported: __DocumentType[] | undefined;
}

/**
 * Defines details for the collaboration ID namespace association.
 *
 * @public
 */
export interface CollaborationIdNamespaceAssociation {
  /**
   * The unique identifier of the collaboration ID namespace association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration ID namespace association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains the collaboration ID namespace association.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains the collaboration ID namespace association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The name of the collaboration ID namespace association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the collaboration ID namespace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the Amazon Web Services account that created the collaboration ID namespace association.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The time at which the collaboration ID namespace association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the collaboration ID namespace was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The input reference configuration that's necessary to create the collaboration ID namespace association.
   *
   * @public
   */
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig | undefined;

  /**
   * The input reference properties that are needed to create the collaboration ID namespace association.
   *
   * @public
   */
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties | undefined;

  /**
   * The configuration settings for the ID mapping table.
   *
   * @public
   */
  idMappingConfig?: IdMappingConfig | undefined;
}

/**
 * @public
 */
export interface GetCollaborationIdNamespaceAssociationOutput {
  /**
   * The ID namespace association that you requested.
   *
   * @public
   */
  collaborationIdNamespaceAssociation: CollaborationIdNamespaceAssociation | undefined;
}

/**
 * @public
 */
export interface GetCollaborationPrivacyBudgetTemplateInput {
  /**
   * A unique identifier for one of your collaborations.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * A unique identifier for one of your privacy budget templates.
   *
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * The epsilon and noise parameter values that were used for the differential privacy template.
 *
 * @public
 */
export interface DifferentialPrivacyTemplateParametersOutput {
  /**
   * The epsilon value that you specified.
   *
   * @public
   */
  epsilon: number | undefined;

  /**
   * Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.
   *
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * The epsilon and noise parameters that were used in the privacy budget template.
 *
 * @public
 */
export type PrivacyBudgetTemplateParametersOutput =
  | PrivacyBudgetTemplateParametersOutput.AccessBudgetMember
  | PrivacyBudgetTemplateParametersOutput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersOutput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersOutput {
  /**
   * The epsilon and noise parameters.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersOutput;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * Access budget configuration returned from the privacy budget template, containing the configured access budget settings.
   *
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudgetsPrivacyTemplateParametersOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    accessBudget?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersOutput) => T;
    accessBudget: (value: AccessBudgetsPrivacyTemplateParametersOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An array that specifies the information for a collaboration's privacy budget template.
 *
 * @public
 */
export interface CollaborationPrivacyBudgetTemplate {
  /**
   * The unique identifier of the collaboration privacy budget template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the collaboration privacy budget template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the collaboration that includes this collaboration privacy budget template.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that includes this collaboration privacy budget template.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the account that created this collaboration privacy budget template.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The time at which the collaboration privacy budget template was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the collaboration privacy budget template was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The type of privacy budget template.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * How often the privacy budget refreshes.
   *
   * > **Important:** If you plan to regularly bring new data into the collaboration, use `CALENDAR_MONTH` to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.
   *
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * Specifies the epsilon and noise parameters for the privacy budget template.
   *
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface GetCollaborationPrivacyBudgetTemplateOutput {
  /**
   * Returns the details of the privacy budget template that you requested.
   *
   * @public
   */
  collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The name of the relation to retrieve the schema for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * The entire schema object.
   *
   * @public
   */
  schema: Schema | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleInput {
  /**
   * A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The name of the schema to retrieve the analysis rule for.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.
   *
   * @public
   */
  type: AnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleOutput {
  /**
   * A specification about how data from the configured table can be used.
   *
   * @public
   */
  analysisRule: AnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesInput {
  /**
   * A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The metadata of the analysis template within a collaboration.
 *
 * @public
 */
export interface CollaborationAnalysisTemplateSummary {
  /**
   * The Amazon Resource Name (ARN) of the analysis template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time that the summary of the analysis template in a collaboration was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The identifier of the analysis template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the analysis template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time that the summary of the analysis template in the collaboration was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique ARN for the analysis template’s associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The description of the analysis template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates if this collaboration analysis template uses synthetic data generation.
   *
   * @public
   */
  isSyntheticData?: boolean | undefined;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The metadata of the analysis template within a collaboration.
   *
   * @public
   */
  collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationChangeRequestsInput {
  /**
   * The identifier of the collaboration that the change request is made against.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * A filter to only return change requests with the specified status.
   *
   * @public
   */
  status?: ChangeRequestStatus | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a collaboration change request.
 *
 * @public
 */
export interface CollaborationChangeRequestSummary {
  /**
   * The unique identifier for the change request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique identifier for the collaboration.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The time when the change request was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time when the change request was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The current status of the change request.
   *
   * @public
   */
  status: ChangeRequestStatus | undefined;

  /**
   * Whether the change request was automatically approved.
   *
   * @public
   */
  isAutoApproved: boolean | undefined;

  /**
   * Summary of the changes in this change request.
   *
   * @public
   */
  changes: Change[] | undefined;

  /**
   * Summary of approval statuses from all collaboration members for this change request.
   *
   * @public
   */
  approvals?: Record<string, ApprovalStatusDetails> | undefined;
}

/**
 * @public
 */
export interface ListCollaborationChangeRequestsOutput {
  /**
   * The list of collaboration change request summaries.
   *
   * @public
   */
  collaborationChangeRequestSummaries: CollaborationChangeRequestSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
  /**
   * A unique identifier for the collaboration that the configured audience model association belongs to. Accepts a collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the configured audience model association in the collaboration.
 *
 * @public
 */
export interface CollaborationConfiguredAudienceModelAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the configured audience model association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The identifier of the configured audience model association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the configured audience model association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The most recent time at which the configured audience model association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique ARN for the configured audience model's associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * A unique identifier for the collaboration that the configured audience model associations belong to. Accepts collaboration ID.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The description of the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
  /**
   * The metadata of the configured audience model association within a collaboration.
   *
   * @public
   */
  collaborationConfiguredAudienceModelAssociationSummaries: CollaborationConfiguredAudienceModelAssociationSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationIdNamespaceAssociationsInput {
  /**
   * The unique identifier of the collaboration that contains the ID namespace associations that you want to retrieve.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.&gt;
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Detailed information about the ID namespace association input reference properties.
 *
 * @public
 */
export interface IdNamespaceAssociationInputReferencePropertiesSummary {
  /**
   * The ID namespace type for this ID namespace association.
   *
   * @public
   */
  idNamespaceType: IdNamespaceType | undefined;
}

/**
 * Provides summary information about the collaboration ID namespace association.
 *
 * @public
 */
export interface CollaborationIdNamespaceAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the collaboration ID namespace association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the collaboration ID namespace association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The unique identifier of the collaboration ID namespace association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The most recent time at which the collaboration ID namespace association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this collaboration ID namespace association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this collaboration ID namespace association.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The Amazon Web Services account that created this collaboration ID namespace association.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The input reference configuration that's used to create the collaboration ID namespace association.
   *
   * @public
   */
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig | undefined;

  /**
   * The name of the collaboration ID namespace association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the collaboration ID namepsace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input reference properties that are used to create the collaboration ID namespace association.
   *
   * @public
   */
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary | undefined;
}

/**
 * @public
 */
export interface ListCollaborationIdNamespaceAssociationsOutput {
  /**
   * The token value provided to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary information of the collaboration ID namespace associations that you requested.
   *
   * @public
   */
  collaborationIdNamespaceAssociationSummaries: CollaborationIdNamespaceAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetsInput {
  /**
   * A unique identifier for one of your collaborations.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * Specifies the type of the privacy budget.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Configured Table Association (ConfiguredTableAssociation) used to filter privacy budgets.
   *
   * @public
   */
  accessBudgetResourceArn?: string | undefined;
}

/**
 * Information about the total number of aggregations, as well as the remaining aggregations.
 *
 * @public
 */
export interface DifferentialPrivacyPrivacyBudgetAggregation {
  /**
   * The different types of aggregation functions that you can perform.
   *
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * The maximum number of aggregation functions that you can perform with the given privacy budget.
   *
   * @public
   */
  maxCount: number | undefined;

  /**
   * The remaining number of aggregation functions that can be run with the available privacy budget.
   *
   * @public
   */
  remainingCount: number | undefined;
}

/**
 * Specifies the configured epsilon value and the utility in terms of total aggregations, as well as the remaining aggregations available.
 *
 * @public
 */
export interface DifferentialPrivacyPrivacyBudget {
  /**
   * This information includes the configured epsilon value and the utility in terms of total aggregations, as well as the remaining aggregations.
   *
   * @public
   */
  aggregations: DifferentialPrivacyPrivacyBudgetAggregation[] | undefined;

  /**
   * The epsilon value that you configured.
   *
   * @public
   */
  epsilon: number | undefined;
}

/**
 * The epsilon parameter value and number of each aggregation function that you can perform.
 *
 * @public
 */
export type PrivacyBudget =
  | PrivacyBudget.AccessBudgetMember
  | PrivacyBudget.DifferentialPrivacyMember
  | PrivacyBudget.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudget {
  /**
   * An object that specifies the epsilon parameter and the utility in terms of total aggregations, as well as the remaining aggregations available.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyBudget;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * Access budget information associated with this privacy budget.
   *
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    accessBudget?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyBudget) => T;
    accessBudget: (value: AccessBudget) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A summary of the collaboration privacy budgets. This summary includes the collaboration information, creation information, epsilon provided, and utility in terms of aggregations.
 *
 * @public
 */
export interface CollaborationPrivacyBudgetSummary {
  /**
   * The unique identifier of the collaboration privacy budget.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique identifier of the collaboration privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * The ARN of the collaboration privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * The unique identifier of the collaboration that includes this privacy budget.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that includes this privacy budget.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the account that created this privacy budget.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The type of privacy budget template.
   *
   * @public
   */
  type: PrivacyBudgetType | undefined;

  /**
   * The time at which the privacy budget was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the privacy budget was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The includes epsilon provided and utility in terms of aggregations.
   *
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetsOutput {
  /**
   * Summaries of the collaboration privacy budgets.
   *
   * @public
   */
  collaborationPrivacyBudgetSummaries: CollaborationPrivacyBudgetSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetTemplatesInput {
  /**
   * A unique identifier for one of your collaborations.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the collaboration's privacy budget template. This summary includes information about who created the privacy budget template and what collaborations it belongs to.
 *
 * @public
 */
export interface CollaborationPrivacyBudgetTemplateSummary {
  /**
   * The unique identifier of the collaboration privacy budget template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the collaboration privacy budget template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this collaboration privacy budget template.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that contains this collaboration privacy budget template.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the account that created this collaboration privacy budget template.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The type of the privacy budget template.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * The time at which the collaboration privacy budget template was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the collaboration privacy budget template was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array that summarizes the collaboration privacy budget templates. The summary includes collaboration information, creation information, the privacy budget type.
   *
   * @public
   */
  collaborationPrivacyBudgetTemplateSummaries: CollaborationPrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationsInput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The caller's status in a collaboration.
   *
   * @public
   */
  memberStatus?: FilterableMemberStatus | undefined;
}

/**
 * The metadata of the collaboration.
 *
 * @public
 */
export interface CollaborationSummary {
  /**
   * The identifier for the collaboration.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the collaboration.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A human-readable identifier provided by the collaboration owner. Display names are not unique.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The display name of the collaboration creator.
   *
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * The time when the collaboration was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the collaboration metadata was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The status of a member in a collaboration.
   *
   * @public
   */
  memberStatus: MemberStatus | undefined;

  /**
   * The identifier of a member in a collaboration.
   *
   * @public
   */
  membershipId?: string | undefined;

  /**
   * The ARN of a member in a collaboration.
   *
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * The analytics engine.
   *
   * > **Note:** After July 16, 2025, the `CLEAN_ROOMS_SQL` parameter will no longer be available.
   *
   * @public
   */
  analyticsEngine?: AnalyticsEngine | undefined;
}

/**
 * @public
 */
export interface ListCollaborationsOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of collaborations.
   *
   * @public
   */
  collaborationList: CollaborationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * The identifier of the collaboration in which the members are listed.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The member object listed by the request.
 *
 * @public
 */
export interface MemberSummary {
  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The status of the member.
   *
   * @public
   */
  status: MemberStatus | undefined;

  /**
   * The member's display name.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The abilities granted to the collaboration member.
   *
   * @public
   */
  abilities: MemberAbility[] | undefined;

  /**
   * Provides a summary of the ML abilities for the collaboration member.
   *
   * @public
   */
  mlAbilities?: MLMemberAbilities | undefined;

  /**
   * The time when the member was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the member metadata was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique ID for the member's associated membership, if present.
   *
   * @public
   */
  membershipId?: string | undefined;

  /**
   * The unique ARN for the member's associated membership, if present.
   *
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * The collaboration member's payment responsibilities set by the collaboration creator.
   *
   * @public
   */
  paymentConfiguration: PaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of members returned by the ListMembers operation.
   *
   * @public
   */
  memberSummaries: MemberSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * If present, filter schemas by schema type.
   *
   * @public
   */
  schemaType?: SchemaType | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The schema summary for the objects listed by the request.
 *
 * @public
 */
export interface SchemaSummary {
  /**
   * The name for the schema object.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of schema object.
   *
   * @public
   */
  type: SchemaType | undefined;

  /**
   * The unique account ID for the Amazon Web Services account that owns the schema.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The time the schema object was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the schema object was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique ID for the collaboration that the schema belongs to.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique ARN for the collaboration that the schema belongs to.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The types of analysis rules that are associated with this schema object.
   *
   * @public
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * The analysis method for the associated schema.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod?: AnalysisMethod | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema summary resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The selected analysis methods for the schema.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;
}

/**
 * @public
 */
export interface ListSchemasOutput {
  /**
   * The retrieved list of schemas.
   *
   * @public
   */
  schemaSummaries: SchemaSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCollaborationInput {
  /**
   * The identifier for the collaboration.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * A human-readable identifier provided by the collaboration owner. Display names are not unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the collaboration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The analytics engine.
   *
   * > **Note:** After July 16, 2025, the `CLEAN_ROOMS_SQL` parameter will no longer be available.
   *
   * @public
   */
  analyticsEngine?: AnalyticsEngine | undefined;
}

/**
 * @public
 */
export interface UpdateCollaborationOutput {
  /**
   * The entire collaboration that has been updated.
   *
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface UpdateCollaborationChangeRequestInput {
  /**
   * The unique identifier of the collaboration that contains the change request to be updated.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The unique identifier of the specific change request to be updated within the collaboration.
   *
   * @public
   */
  changeRequestIdentifier: string | undefined;

  /**
   * The action to perform on the change request. Valid values include APPROVE (approve the change), DENY (reject the change), CANCEL (cancel the request), and COMMIT (commit after the request is approved).
   *
   * For change requests without automatic approval, a member in the collaboration can manually APPROVE or DENY a change request. The collaboration owner can manually CANCEL or COMMIT a change request.
   *
   * @public
   */
  action: ChangeRequestAction | undefined;
}

/**
 * @public
 */
export interface UpdateCollaborationChangeRequestOutput {
  /**
   * Represents a request to modify a collaboration. Change requests enable structured modifications to collaborations after they have been created.
   *
   * @public
   */
  collaborationChangeRequest: CollaborationChangeRequest | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelAssociationInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The configured audience model is associated to the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A unique identifier for the configured audience model that you want to associate.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The name of the configured audience model association.
   *
   * @public
   */
  configuredAudienceModelAssociationName: string | undefined;

  /**
   * When `TRUE`, indicates that the resource policy for the configured audience model resource being associated is configured for Clean Rooms to manage permissions related to the given collaboration. When `FALSE`, indicates that the configured audience model resource owner will manage permissions related to the given collaboration.
   *
   * Setting this to `TRUE` requires you to have permissions to create, update, and delete the resource policy for the `cleanrooms-ml` resource when you call the DeleteConfiguredAudienceModelAssociation resource. In addition, if you are the collaboration creator and specify `TRUE`, you must have the same permissions when you call the DeleteMember and DeleteCollaboration APIs.
   *
   * @public
   */
  manageResourcePolicies: boolean | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A description of the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Details about the configured audience model association.
 *
 * @public
 */
export interface ConfiguredAudienceModelAssociation {
  /**
   * A unique identifier of the configured audience model association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * A unique identifier for the membership that contains this configured audience model association.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership that contains this configured audience model association.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * A unique identifier of the collaboration that contains this configured audience model association.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this configured audience model association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The name of the configured audience model association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * When `TRUE`, indicates that the resource policy for the configured audience model resource being associated is configured for Clean Rooms to manage permissions related to the given collaboration. When `FALSE`, indicates that the configured audience model resource owner will manage permissions related to the given collaboration.
   *
   * @public
   */
  manageResourcePolicies: boolean | undefined;

  /**
   * The description of the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the configured audience model association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured audience model association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelAssociationOutput {
  /**
   * Information about the configured audience model association.
   *
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelAssociationInput {
  /**
   * A unique identifier of the configured audience model association that you want to delete.
   *
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * A unique identifier of the membership that contains the audience model association that you want to delete.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelAssociationOutput {}

/**
 * @public
 */
export interface GetConfiguredAudienceModelAssociationInput {
  /**
   * A unique identifier for the configured audience model association that you want to retrieve.
   *
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * A unique identifier for the membership that contains the configured audience model association that you want to retrieve.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelAssociationOutput {
  /**
   * Information about the configured audience model association that you requested.
   *
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelAssociationsInput {
  /**
   * A unique identifier for a membership that contains the configured audience model associations that you want to retrieve.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the configured audience model association.
 *
 * @public
 */
export interface ConfiguredAudienceModelAssociationSummary {
  /**
   * A unique identifier of the membership that contains the configured audience model association.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership that contains the configured audience model association.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains the configured audience model association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * A unique identifier of the collaboration that configured audience model is associated with.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The time at which the configured audience model association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured audience model association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * A unique identifier of the configured audience model association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the configured audience model association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The description of the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelAssociationsOutput {
  /**
   * Summaries of the configured audience model associations that you requested.
   *
   * @public
   */
  configuredAudienceModelAssociationSummaries: ConfiguredAudienceModelAssociationSummary[] | undefined;

  /**
   * The token value provided to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelAssociationInput {
  /**
   * A unique identifier for the configured audience model association that you want to update.
   *
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * A unique identifier of the membership that contains the configured audience model association that you want to update.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A new description for the configured audience model association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A new name for the configured audience model association.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelAssociationOutput {
  /**
   * Details about the configured audience model association that you updated.
   *
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationInput {
  /**
   * The name of the configured table association. This name is used to query the underlying configured table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the configured table association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique identifier for one of your memberships for a collaboration. The configured table is associated to the collaboration that this membership belongs to. Currently accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A unique identifier for the configured table to be associated to. Currently accepts a configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * The service will assume this role to access catalog metadata and query the table.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about a child resource of a given resource in a collaboration.
 *
 * @public
 */
export interface ChildResource {
  /**
   * The unique identifier of the child resource.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The type of the child resource.
   *
   * @public
   */
  resourceType: ChildResourceType | undefined;

  /**
   * The name of the child resource.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The Amazon Web Services account ID of the member who owns the child resource.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The current status of the child resource.
   *
   * @public
   */
  resourceStatus?: ResourceStatus | undefined;
}

/**
 * A configured table association links a configured table to a collaboration.
 *
 * @public
 */
export interface ConfiguredTableAssociation {
  /**
   * The unique ARN for the configured table association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique ID for the configured table association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ID for the configured table that the association refers to.
   *
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * The unique ARN for the configured table that the association refers to.
   *
   * @public
   */
  configuredTableArn: string | undefined;

  /**
   * The unique ID for the membership this configured table association belongs to.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique ARN for the membership this configured table association belongs to.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The service will assume this role to access catalog metadata and query the table.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the configured table association, in lowercase. The table is identified by this name when running protected queries against the underlying data.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the configured table association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The analysis rule types for the configured table association.
   *
   * @public
   */
  analysisRuleTypes?: ConfiguredTableAssociationAnalysisRuleType[] | undefined;

  /**
   * The time the configured table association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the configured table association was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The child resources that depend on this configured table association.
   *
   * @public
   */
  childResources?: ChildResource[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationOutput {
  /**
   * The configured table association.
   *
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationAnalysisRuleInput {
  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique ID for the configured table association. Currently accepts the configured table association ID.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * The type of analysis rule.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType | undefined;

  /**
   * The analysis rule policy that was created for the configured table association.
   *
   * @public
   */
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy | undefined;
}

/**
 * An analysis rule for a configured table association. This analysis rule specifies how data from the table can be used within its associated collaboration. In the console, the `ConfiguredTableAssociationAnalysisRule` is referred to as the *collaboration analysis rule*.
 *
 * @public
 */
export interface ConfiguredTableAssociationAnalysisRule {
  /**
   * The membership identifier for the configured table association analysis rule.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier for the configured table association.
   *
   * @public
   */
  configuredTableAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured table association.
   *
   * @public
   */
  configuredTableAssociationArn: string | undefined;

  /**
   * The policy of the configured table association analysis rule.
   *
   * @public
   */
  policy: ConfiguredTableAssociationAnalysisRulePolicy | undefined;

  /**
   * The type of the configured table association analysis rule.
   *
   * @public
   */
  type: ConfiguredTableAssociationAnalysisRuleType | undefined;

  /**
   * The creation time of the configured table association analysis rule.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The update time of the configured table association analysis rule.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationAnalysisRuleOutput {
  /**
   * The analysis rule for the conﬁgured table association. In the console, the `ConfiguredTableAssociationAnalysisRule` is referred to as the *collaboration analysis rule*.
   *
   * @public
   */
  analysisRule: ConfiguredTableAssociationAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationInput {
  /**
   * The unique ID for the configured table association to be deleted. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationOutput {}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationAnalysisRuleInput {
  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identiﬁer for the conﬁgured table association that's related to the analysis rule that you want to delete.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * The type of the analysis rule that you want to delete.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationAnalysisRuleOutput {}

/**
 * @public
 */
export interface GetConfiguredTableAssociationInput {
  /**
   * The unique ID for the configured table association to retrieve. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAssociationOutput {
  /**
   * The entire configured table association object.
   *
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAssociationAnalysisRuleInput {
  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identiﬁer for the conﬁgured table association that's related to the analysis rule.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * The type of analysis rule that you want to retrieve.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAssociationAnalysisRuleOutput {
  /**
   * The analysis rule for the conﬁgured table association. In the console, the `ConfiguredTableAssociationAnalysisRule` is referred to as the *collaboration analysis rule*.
   *
   * @public
   */
  analysisRule: ConfiguredTableAssociationAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsInput {
  /**
   * A unique identifier for the membership to list configured table associations for. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The configured table association summary for the objects listed by the request.
 *
 * @public
 */
export interface ConfiguredTableAssociationSummary {
  /**
   * The unique configured table ID that this configured table association refers to.
   *
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * The unique ID for the membership that the configured table association belongs to.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique ARN for the membership that the configured table association belongs to.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The name of the configured table association. The table is identified by this name when running Protected Queries against the underlying data.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time the configured table association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the configured table association was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique ID for the configured table association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN for the configured table association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The analysis rule types that are associated with the configured table associations in this summary.
   *
   * @public
   */
  analysisRuleTypes?: ConfiguredTableAssociationAnalysisRuleType[] | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsOutput {
  /**
   * The retrieved list of configured table associations.
   *
   * @public
   */
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationInput {
  /**
   * The unique identifier for the configured table association to update. Currently accepts the configured table association ID.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * The unique ID for the membership that the configured table association belongs to.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A new description for the configured table association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The service will assume this role to access catalog metadata and query the table.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationOutput {
  /**
   * The entire updated configured table association.
   *
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationAnalysisRuleInput {
  /**
   * A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for the configured table association to update.
   *
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * The analysis rule type that you want to update.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType | undefined;

  /**
   * The updated analysis rule policy for the conﬁgured table association.
   *
   * @public
   */
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationAnalysisRuleOutput {
  /**
   * The updated analysis rule for the conﬁgured table association. In the console, the `ConfiguredTableAssociationAnalysisRule` is referred to as the *collaboration analysis rule*.
   *
   * @public
   */
  analysisRule: ConfiguredTableAssociationAnalysisRule | undefined;
}

/**
 * Details about Delta Sharing Connector for Databricks
 *
 * @public
 */
export interface DatabricksDeltaSharingConnection {
  /**
   * The base URL of a Delta Sharing server that hosts shared datasets.
   *
   * @public
   */
  deltaShareEndpoint: string | undefined;

  /**
   * Name of the Share used for OpenSharing (Delta Sharing) the Databricks Table.
   *
   * @public
   */
  shareName: string | undefined;
}

/**
 * Type of the connector to be used for connecting to Databricks. Supported connector: Delta Sharing
 *
 * @public
 */
export type DatabricksConnectionType =
  | DatabricksConnectionType.DeltaSharingMember
  | DatabricksConnectionType.$UnknownMember;

/**
 * @public
 */
export namespace DatabricksConnectionType {
  /**
   * Details about Connector for Databricks
   *
   * @public
   */
  export interface DeltaSharingMember {
    deltaSharing: DatabricksDeltaSharingConnection;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    deltaSharing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    deltaSharing: (value: DatabricksDeltaSharingConnection) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A reference to a table within Databricks.
 *
 * @public
 */
export interface DatabricksTableReference {
  /**
   * Name of the Schema within Databricks.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * Name of the Table within Databricks.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * URL for the Databricks Workspace.
   *
   * @public
   */
  workspaceUrl: string | undefined;

  /**
   * Type of the connector to be used for connecting to Databricks. Supported connector: Delta Sharing
   *
   * @public
   */
  connectionType: DatabricksConnectionType | undefined;
}

/**
 * A reference to a table within an Glue data catalog.
 *
 * @public
 */
export interface GlueTableReference {
  /**
   * The Amazon Web Services Region where the Glue table is located. This parameter is required to uniquely identify and access tables across different Regions.
   *
   * @public
   */
  region?: CommercialRegion | undefined;

  /**
   * The name of the Glue table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The name of the database the Glue table belongs to.
   *
   * @public
   */
  databaseName: string | undefined;
}

/**
 * The Snowflake table schema.
 *
 * @public
 */
export interface SnowflakeTableSchemaV1 {
  /**
   * The column name.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The column's data type. Supported data types: `ARRAY`, `BIGINT`, `BOOLEAN`, `CHAR`, `DATE`, `DECIMAL`, `DOUBLE`, `DOUBLE PRECISION`, `FLOAT`, `FLOAT4`, `INT`, `INTEGER`, `MAP`, `NUMERIC`, `NUMBER`, `REAL`, `SMALLINT`, `STRING`, `TIMESTAMP`, `TIMESTAMP_LTZ`, `TIMESTAMP_NTZ`, `DATETIME`, `TINYINT`, `VARCHAR`, `TEXT`, `CHARACTER`.
   *
   * @public
   */
  columnType: string | undefined;
}

/**
 * The schema of a Snowflake table.
 *
 * @public
 */
export type SnowflakeTableSchema =
  | SnowflakeTableSchema.V1Member
  | SnowflakeTableSchema.$UnknownMember;

/**
 * @public
 */
export namespace SnowflakeTableSchema {
  /**
   * The schema of a Snowflake table.
   *
   * @public
   */
  export interface V1Member {
    v1: SnowflakeTableSchemaV1[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: SnowflakeTableSchemaV1[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A reference to a table within Snowflake.
 *
 * @public
 */
export interface SnowflakeTableReference {
  /**
   * The secret ARN of the Snowflake table reference.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The account identifier for the Snowflake table reference.
   *
   * @public
   */
  accountIdentifier: string | undefined;

  /**
   * The name of the database the Snowflake table belongs to.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The name of the Snowflake table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The schema name of the Snowflake table reference.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * The schema of the Snowflake table.
   *
   * @public
   */
  tableSchema: SnowflakeTableSchema | undefined;
}

/**
 * A pointer to the dataset that underlies this table.
 *
 * @public
 */
export type TableReference =
  | TableReference.AthenaMember
  | TableReference.DatabricksMember
  | TableReference.GlueMember
  | TableReference.SnowflakeMember
  | TableReference.$UnknownMember;

/**
 * @public
 */
export namespace TableReference {
  /**
   * If present, a reference to the Glue table referred to by this table reference.
   *
   * @public
   */
  export interface GlueMember {
    glue: GlueTableReference;
    snowflake?: never;
    athena?: never;
    databricks?: never;
    $unknown?: never;
  }

  /**
   * If present, a reference to the Snowflake table referred to by this table reference.
   *
   * @public
   */
  export interface SnowflakeMember {
    glue?: never;
    snowflake: SnowflakeTableReference;
    athena?: never;
    databricks?: never;
    $unknown?: never;
  }

  /**
   * If present, a reference to the Athena table referred to by this table reference.
   *
   * @public
   */
  export interface AthenaMember {
    glue?: never;
    snowflake?: never;
    athena: AthenaTableReference;
    databricks?: never;
    $unknown?: never;
  }

  /**
   * If present, a reference to the Databricks table referred to by this table reference.
   *
   * @public
   */
  export interface DatabricksMember {
    glue?: never;
    snowflake?: never;
    athena?: never;
    databricks: DatabricksTableReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glue?: never;
    snowflake?: never;
    athena?: never;
    databricks?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glue: (value: GlueTableReference) => T;
    snowflake: (value: SnowflakeTableReference) => T;
    athena: (value: AthenaTableReference) => T;
    databricks: (value: DatabricksTableReference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConfiguredTableInput {
  /**
   * The name of the configured table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the configured table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A reference to the table being configured.
   *
   * @public
   */
  tableReference: TableReference | undefined;

  /**
   * The columns of the underlying table that can be used by collaborations or analysis rules.
   *
   * @public
   */
  allowedColumns: string[] | undefined;

  /**
   * The analysis method allowed for the configured tables.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * The analysis methods to enable for the configured table. When configured, you must specify at least two analysis methods.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A table that has been configured for use in a collaboration.
 *
 * @public
 */
export interface ConfiguredTable {
  /**
   * The unique ID for the configured table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN for the configured table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A name for the configured table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the configured table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The table that this configured table represents.
   *
   * @public
   */
  tableReference: TableReference | undefined;

  /**
   * Type of the Configured Table DataSource, example: Glue, Snowflake, Athena, Databricks
   *
   * @public
   */
  tableType?: TableReferenceType | undefined;

  /**
   * The time the configured table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the configured table was last updated
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The types of analysis rules associated with this configured table. Currently, only one analysis rule may be associated with a configured table.
   *
   * @public
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * The analysis method for the configured table.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * The columns within the underlying Glue table that can be used within collaborations.
   *
   * @public
   */
  allowedColumns: string[] | undefined;

  /**
   * The selected analysis methods for the configured table.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableOutput {
  /**
   * The created configured table.
   *
   * @public
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * Controls on the query specifications that can be run on a configured table.
 *
 * @public
 */
export type ConfiguredTableAnalysisRulePolicyV1 =
  | ConfiguredTableAnalysisRulePolicyV1.AggregationMember
  | ConfiguredTableAnalysisRulePolicyV1.CustomMember
  | ConfiguredTableAnalysisRulePolicyV1.ListMember
  | ConfiguredTableAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicyV1 {
  /**
   * Analysis rule type that enables only list queries on a configured table.
   *
   * @public
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Analysis rule type that enables only aggregation queries on a configured table.
   *
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. It supports differential privacy, minimum aggregation thresholds, and comparison controls.
   *
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: AnalysisRuleCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    custom: (value: AnalysisRuleCustom) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Controls on the query specifications that can be run on a configured table.
 *
 * @public
 */
export type ConfiguredTableAnalysisRulePolicy =
  | ConfiguredTableAnalysisRulePolicy.V1Member
  | ConfiguredTableAnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicy {
  /**
   * Controls on the query specifications that can be run on a configured table.
   *
   * @public
   */
  export interface V1Member {
    v1: ConfiguredTableAnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: ConfiguredTableAnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleInput {
  /**
   * The identifier for the configured table to create the analysis rule for. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * The type of analysis rule.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * The analysis rule policy that was created for the configured table.
   *
   * @public
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * A configured table analysis rule, which limits how data for this table can be used.
 *
 * @public
 */
export interface ConfiguredTableAnalysisRule {
  /**
   * The unique ID for the configured table.
   *
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * The unique ARN for the configured table.
   *
   * @public
   */
  configuredTableArn: string | undefined;

  /**
   * The policy that controls SQL query rules.
   *
   * @public
   */
  policy: ConfiguredTableAnalysisRulePolicy | undefined;

  /**
   * The type of configured table analysis rule.
   *
   * @public
   */
  type: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * The time the configured table analysis rule was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the configured table analysis rule was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleOutput {
  /**
   * The analysis rule that was created for the configured table.
   *
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableInput {
  /**
   * The unique ID for the configured table to delete.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * The empty output for a successful deletion.
 *
 * @public
 */
export interface DeleteConfiguredTableOutput {}

/**
 * @public
 */
export interface DeleteConfiguredTableAnalysisRuleInput {
  /**
   * The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * The analysis rule type to be deleted. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
}

/**
 * An empty response that indicates a successful delete.
 *
 * @public
 */
export interface DeleteConfiguredTableAnalysisRuleOutput {}

/**
 * @public
 */
export interface GetConfiguredTableInput {
  /**
   * The unique ID for the configured table to retrieve.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableOutput {
  /**
   * The retrieved configured table.
   *
   * @public
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleInput {
  /**
   * The unique identifier for the configured table to retrieve. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleOutput {
  /**
   * The entire analysis rule output.
   *
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesInput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The configured table summary for the objects listed by the request.
 *
 * @public
 */
export interface ConfiguredTableSummary {
  /**
   * The unique ID of the configured table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN of the configured table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the configured table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of the Configured Table DataSource, example: Glue, Snowflake, Athena, Databricks
   *
   * @public
   */
  tableType?: TableReferenceType | undefined;

  /**
   * The time the configured table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the configured table was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The types of analysis rules associated with this configured table.
   *
   * @public
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * The analysis method for the configured tables.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * The selected analysis methods for the configured table summary.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesOutput {
  /**
   * The configured tables listed by the request.
   *
   * @public
   */
  configuredTableSummaries: ConfiguredTableSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableInput {
  /**
   * The identifier for the configured table to update. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * A new name for the configured table.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A new description for the configured table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A pointer to the dataset that underlies this table.
   *
   * @public
   */
  tableReference?: TableReference | undefined;

  /**
   * The columns of the underlying table that can be used by collaborations or analysis rules.
   *
   * @public
   */
  allowedColumns?: string[] | undefined;

  /**
   * The analysis method for the configured table.
   *
   * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
   *
   * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
   *
   * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
   *
   * @public
   */
  analysisMethod?: AnalysisMethod | undefined;

  /**
   * The selected analysis methods for the table configuration update.
   *
   * @public
   */
  selectedAnalysisMethods?: SelectedAnalysisMethod[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableOutput {
  /**
   * The updated configured table.
   *
   * @public
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleInput {
  /**
   * The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
   *
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * The analysis rule type to be updated. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
   *
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * The new analysis rule policy for the configured table analysis rule.
   *
   * @public
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleOutput {
  /**
   * The entire updated analysis rule.
   *
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * Provides the input reference configuration for the ID mapping table.
 *
 * @public
 */
export interface IdMappingTableInputReferenceConfig {
  /**
   * The Amazon Resource Name (ARN) of the referenced resource in Entity Resolution. Valid values are ID mapping workflow ARNs.
   *
   * @public
   */
  inputReferenceArn: string | undefined;

  /**
   * When `TRUE`, Clean Rooms manages permissions for the ID mapping table resource.
   *
   * When `FALSE`, the resource owner manages permissions for the ID mapping table resource.
   *
   * @public
   */
  manageResourcePolicies: boolean | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingTableInput {
  /**
   * The unique identifier of the membership that contains the ID mapping table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A name for the ID mapping table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the ID mapping table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input reference configuration needed to create the ID mapping table.
   *
   * @public
   */
  inputReferenceConfig: IdMappingTableInputReferenceConfig | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services KMS key. This value is used to encrypt the mapping table data that is stored by Clean Rooms.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * The input reference properties for the ID mapping table.
 *
 * @public
 */
export interface IdMappingTableInputReferenceProperties {
  /**
   * The input source of the ID mapping table.
   *
   * @public
   */
  idMappingTableInputSource: IdMappingTableInputSource[] | undefined;
}

/**
 * Describes information about the ID mapping table.
 *
 * @public
 */
export interface IdMappingTable {
  /**
   * The unique identifier of the ID mapping table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID mapping table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The input reference configuration for the ID mapping table.
   *
   * @public
   */
  inputReferenceConfig: IdMappingTableInputReferenceConfig | undefined;

  /**
   * The unique identifier of the membership resource for the ID mapping table.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership resource for the ID mapping table.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this ID mapping table.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this ID mapping table.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The description of the ID mapping table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the ID mapping table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time at which the ID mapping table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ID mapping table was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The input reference properties for the ID mapping table.
   *
   * @public
   */
  inputReferenceProperties: IdMappingTableInputReferenceProperties | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The child resources that depend on this ID mapping table.
   *
   * @public
   */
  childResources?: ChildResource[] | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingTableOutput {
  /**
   * The ID mapping table that was created.
   *
   * @public
   */
  idMappingTable: IdMappingTable | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingTableInput {
  /**
   * The unique identifier of the ID mapping table that you want to delete.
   *
   * @public
   */
  idMappingTableIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID mapping table that you want to delete.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingTableOutput {}

/**
 * @public
 */
export interface GetIdMappingTableInput {
  /**
   * The unique identifier of the ID mapping table identifier that you want to retrieve.
   *
   * @public
   */
  idMappingTableIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID mapping table that you want to retrieve.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingTableOutput {
  /**
   * The ID mapping table that you requested.
   *
   * @public
   */
  idMappingTable: IdMappingTable | undefined;
}

/**
 * @public
 */
export interface ListIdMappingTablesInput {
  /**
   * The unique identifier of the membership that contains the ID mapping tables that you want to view.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Detailed information about the ID mapping table.
 *
 * @public
 */
export interface IdMappingTableSummary {
  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this ID mapping table.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this ID mapping table.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The unique identifier of the membership resource for this ID mapping table.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership resource for this ID mapping table.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The time at which this ID mapping table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which this ID mapping table was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique identifier of this ID mapping table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this ID mapping table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of this ID mapping table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input reference configuration for the ID mapping table.
   *
   * @public
   */
  inputReferenceConfig: IdMappingTableInputReferenceConfig | undefined;

  /**
   * The name of this ID mapping table.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListIdMappingTablesOutput {
  /**
   * The summary information of the ID mapping tables that you requested.
   *
   * @public
   */
  idMappingTableSummaries: IdMappingTableSummary[] | undefined;

  /**
   * The token value provided to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PopulateIdMappingTableInput {
  /**
   * The unique identifier of the ID mapping table that you want to populate.
   *
   * @public
   */
  idMappingTableIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID mapping table that you want to populate.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The job type of the rule-based ID mapping job. Valid values include:
   *
   * `INCREMENTAL`: Processes only new or changed data since the last job run. This is the default job type if the ID mapping workflow was created in Entity Resolution with `incrementalRunConfig` specified.
   *
   * `BATCH`: Processes all data from the input source, regardless of previous job runs. This is the default job type if the ID mapping workflow was created in Entity Resolution but `incrementalRunConfig` wasn't specified.
   *
   * `DELETE_ONLY`: Processes only deletion requests from `BatchDeleteUniqueId`, which is set in Entity Resolution.
   *
   * For more information about `incrementalRunConfig` and `BatchDeleteUniqueId`, see the [Entity Resolution API Reference](https://docs.aws.amazon.com/entityresolution/latest/apireference/Welcome.html).
   *
   * @public
   */
  jobType?: JobType | undefined;
}

/**
 * @public
 */
export interface PopulateIdMappingTableOutput {
  /**
   * The unique identifier of the mapping job that will populate the ID mapping table.
   *
   * @public
   */
  idMappingJobId: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdMappingTableInput {
  /**
   * The unique identifier of the ID mapping table that you want to update.
   *
   * @public
   */
  idMappingTableIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID mapping table that you want to update.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A new description for the ID mapping table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdMappingTableOutput {
  /**
   * The updated ID mapping table.
   *
   * @public
   */
  idMappingTable: IdMappingTable | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceAssociationInput {
  /**
   * The unique identifier of the membership that contains the ID namespace association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The input reference configuration needed to create the ID namespace association.
   *
   * @public
   */
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The name for the ID namespace association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the ID namespace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration settings for the ID mapping table.
   *
   * @public
   */
  idMappingConfig?: IdMappingConfig | undefined;
}

/**
 * Provides information to create the ID namespace association.
 *
 * @public
 */
export interface IdNamespaceAssociation {
  /**
   * The unique identifier for this ID namespace association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID namespace association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the membership resource for this ID namespace association.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership resource for this ID namespace association.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this ID namespace association.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this ID namespace association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The name of this ID namespace association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the ID namespace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the ID namespace association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ID namespace association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The input reference configuration for the ID namespace association.
   *
   * @public
   */
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig | undefined;

  /**
   * The input reference properties for the ID namespace association.
   *
   * @public
   */
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties | undefined;

  /**
   * The configuration settings for the ID mapping table.
   *
   * @public
   */
  idMappingConfig?: IdMappingConfig | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceAssociationOutput {
  /**
   * The ID namespace association that was created.
   *
   * @public
   */
  idNamespaceAssociation: IdNamespaceAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceAssociationInput {
  /**
   * The unique identifier of the ID namespace association that you want to delete.
   *
   * @public
   */
  idNamespaceAssociationIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID namespace association that you want to delete.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceAssociationOutput {}

/**
 * @public
 */
export interface GetIdNamespaceAssociationInput {
  /**
   * The unique identifier of the ID namespace association that you want to retrieve.
   *
   * @public
   */
  idNamespaceAssociationIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID namespace association that you want to retrieve.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIdNamespaceAssociationOutput {
  /**
   * The ID namespace association that you requested.
   *
   * @public
   */
  idNamespaceAssociation: IdNamespaceAssociation | undefined;
}

/**
 * @public
 */
export interface ListIdNamespaceAssociationsInput {
  /**
   * The unique identifier of the membership that contains the ID namespace association that you want to view.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Detailed information about the ID namespace association.
 *
 * @public
 */
export interface IdNamespaceAssociationSummary {
  /**
   * The unique identifier of the membership resource for this ID namespace association.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership resource for this ID namespace association.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains this ID namespace association.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this ID namespace association.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The time at which this ID namespace association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which this ID namespace association has been updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The unique identifier of this ID namespace association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this ID namespace association.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The input reference configuration details for this ID namespace association.
   *
   * @public
   */
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig | undefined;

  /**
   * The name of the ID namespace association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the ID namespace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input reference properties for this ID namespace association.
   *
   * @public
   */
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary | undefined;
}

/**
 * @public
 */
export interface ListIdNamespaceAssociationsOutput {
  /**
   * The token value provided to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary information of the ID namespace associations that you requested.
   *
   * @public
   */
  idNamespaceAssociationSummaries: IdNamespaceAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceAssociationInput {
  /**
   * The unique identifier of the ID namespace association that you want to update.
   *
   * @public
   */
  idNamespaceAssociationIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the ID namespace association that you want to update.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A new name for the ID namespace association.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A new description for the ID namespace association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration settings for the ID mapping table.
   *
   * @public
   */
  idMappingConfig?: IdMappingConfig | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceAssociationOutput {
  /**
   * The updated ID namespace association.
   *
   * @public
   */
  idNamespaceAssociation: IdNamespaceAssociation | undefined;
}

/**
 * Contains the SQL parameters used to populate an intermediate table.
 *
 * @public
 */
export interface PopulationAnalysisSqlParameters {
  /**
   * The SQL query string used to populate the intermediate table.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis template to use for populating the intermediate table.
   *
   * @public
   */
  analysisTemplateArn?: string | undefined;
}

/**
 * Contains the configuration that defines the analysis used to populate an intermediate table.
 *
 * @public
 */
export type PopulationAnalysisConfiguration =
  | PopulationAnalysisConfiguration.SqlParametersMember
  | PopulationAnalysisConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PopulationAnalysisConfiguration {
  /**
   * The SQL parameters for the population analysis, including the query string or analysis template ARN.
   *
   * @public
   */
  export interface SqlParametersMember {
    sqlParameters: PopulationAnalysisSqlParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sqlParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sqlParameters: (value: PopulationAnalysisSqlParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIntermediateTableInput {
  /**
   * The unique identifier of the membership where the intermediate table is created.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The display name for the intermediate table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the intermediate table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration that defines the analysis used to populate the intermediate table.
   *
   * @public
   */
  populationAnalysisConfiguration: PopulationAnalysisConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed KMS key used to encrypt the intermediate table data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The number of days to retain populated data versions.
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about a parent table that contributes an additional analyses constraint.
 *
 * @public
 */
export interface InheritedAdditionalAnalysesSource {
  /**
   * The name of the parent table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the parent table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the parent table.
   *
   * @public
   */
  type: BaseTableDependencyType | undefined;

  /**
   * The additional analyses setting defined on the parent table.
   *
   * @public
   */
  value: AdditionalAnalyses | undefined;

  /**
   * The Amazon Web Services account ID of the member who owns the parent table.
   *
   * @public
   */
  sourceAccountId: string | undefined;
}

/**
 * Contains the inherited additional analyses constraint and its sources from parent tables.
 *
 * @public
 */
export interface InheritedAdditionalAnalyses {
  /**
   * The effective additional analyses setting inherited from parent tables.
   *
   * @public
   */
  value: AdditionalAnalyses | undefined;

  /**
   * The list of parent tables that contribute to this inherited constraint.
   *
   * @public
   */
  sources: InheritedAdditionalAnalysesSource[] | undefined;
}

/**
 * Contains information about a parent table that contributes an allowed additional analyses constraint.
 *
 * @public
 */
export interface InheritedAllowedAdditionalAnalysesSource {
  /**
   * The name of the parent table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the parent table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the parent table.
   *
   * @public
   */
  type: BaseTableDependencyType | undefined;

  /**
   * The allowed additional analyses defined on the parent table.
   *
   * @public
   */
  value: string[] | undefined;

  /**
   * The Amazon Web Services account ID of the member who owns the parent table.
   *
   * @public
   */
  sourceAccountId: string | undefined;
}

/**
 * Contains the inherited allowed additional analyses constraint and its sources from parent tables.
 *
 * @public
 */
export interface InheritedAllowedAdditionalAnalyses {
  /**
   * The effective list of allowed additional analyses inherited from parent tables.
   *
   * @public
   */
  value: string[] | undefined;

  /**
   * The list of parent tables that contribute to this inherited constraint.
   *
   * @public
   */
  sources: InheritedAllowedAdditionalAnalysesSource[] | undefined;
}

/**
 * Contains information about a parent table that contributes an allowed result receivers constraint.
 *
 * @public
 */
export interface InheritedAllowedResultReceiversSource {
  /**
   * The name of the parent table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the parent table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the parent table.
   *
   * @public
   */
  type: BaseTableDependencyType | undefined;

  /**
   * The allowed result receiver account IDs defined on the parent table.
   *
   * @public
   */
  value: string[] | undefined;

  /**
   * The Amazon Web Services account ID of the member who owns the parent table.
   *
   * @public
   */
  sourceAccountId: string | undefined;
}

/**
 * Contains the inherited allowed result receivers constraint and its sources from parent tables.
 *
 * @public
 */
export interface InheritedAllowedResultReceivers {
  /**
   * The effective list of Amazon Web Services account IDs allowed to receive results, inherited from parent tables.
   *
   * @public
   */
  value: string[] | undefined;

  /**
   * The list of parent tables that contribute to this inherited constraint.
   *
   * @public
   */
  sources: InheritedAllowedResultReceiversSource[] | undefined;
}

/**
 * Contains column lineage information that traces a disallowed output column back to its source in a base table.
 *
 * @public
 */
export interface ColumnLineageEntry {
  /**
   * The name of the column in the intermediate table.
   *
   * @public
   */
  column: string | undefined;

  /**
   * The name of the column in the source table.
   *
   * @public
   */
  sourceColumn: string | undefined;

  /**
   * The name of the source table.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * The unique identifier of the source table.
   *
   * @public
   */
  sourceId: string | undefined;

  /**
   * The type of the source table.
   *
   * @public
   */
  sourceType: BaseTableDependencyType | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the source table.
   *
   * @public
   */
  sourceAccountId: string | undefined;
}

/**
 * Contains the inherited disallowed output columns constraint and the column lineage tracing each column to its source.
 *
 * @public
 */
export interface InheritedDisallowedOutputColumns {
  /**
   * The list of column names that are disallowed from appearing in query output, inherited from parent tables.
   *
   * @public
   */
  value: string[] | undefined;

  /**
   * The lineage information that traces each disallowed output column back to its source in a parent table.
   *
   * @public
   */
  columnLineage: ColumnLineageEntry[] | undefined;
}

/**
 * Contains the privacy constraints inherited from parent tables for an intermediate table version.
 *
 * @public
 */
export interface IntermediateTableInheritedConstraints {
  /**
   * The inherited additional analyses constraint.
   *
   * @public
   */
  additionalAnalyses?: InheritedAdditionalAnalyses | undefined;

  /**
   * The inherited allowed additional analyses constraint.
   *
   * @public
   */
  allowedAdditionalAnalyses?: InheritedAllowedAdditionalAnalyses | undefined;

  /**
   * The inherited allowed result receivers constraint.
   *
   * @public
   */
  allowedResultReceivers?: InheritedAllowedResultReceivers | undefined;

  /**
   * The inherited disallowed output columns constraint.
   *
   * @public
   */
  disallowedOutputColumns?: InheritedDisallowedOutputColumns | undefined;
}

/**
 * Contains the details of the currently active version of an intermediate table.
 *
 * @public
 */
export interface IntermediateTableActiveVersion {
  /**
   * The unique identifier of the active version.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The identifier of the protected query that created this version.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The type of analysis that created this version.
   *
   * @public
   */
  analysisType: PopulateIntermediateTableAnalysisType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt this version's data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The runtime parameters that were used when populating this version.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The privacy constraints inherited from parent tables at the time this version was populated.
   *
   * @public
   */
  inheritedConstraints: IntermediateTableInheritedConstraints | undefined;

  /**
   * The time when this version expires based on the retention period.
   *
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * Contains the schema definition of an intermediate table.
 *
 * @public
 */
export interface IntermediateTableSchema {
  /**
   * The list of columns in the intermediate table schema.
   *
   * @public
   */
  columns: Column[] | undefined;
}

/**
 * Contains information about a base table that an intermediate table depends on.
 *
 * @public
 */
export interface IntermediateTableDependency {
  /**
   * The unique identifier of the dependency table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the dependency table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the dependency table.
   *
   * @public
   */
  type: BaseTableDependencyType | undefined;

  /**
   * The type of dependency, either direct or indirect. A direct dependency is a table explicitly referenced in the stored query. An indirect dependency is a table referenced through another intermediate table.
   *
   * @public
   */
  parentType: BaseTableParentType | undefined;

  /**
   * The Amazon Web Services account ID of the member who owns the dependency table.
   *
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * Contains the details of an intermediate table in Clean Rooms. An intermediate table stores a query definition and its materialized results within a collaboration.
 *
 * @public
 */
export interface IntermediateTable {
  /**
   * The unique identifier of the intermediate table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the intermediate table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the intermediate table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the intermediate table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains the intermediate table.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains the intermediate table.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The child resources that depend on this intermediate table.
   *
   * @public
   */
  childResources?: ChildResource[] | undefined;

  /**
   * The time the intermediate table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the intermediate table was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The current status of the intermediate table.
   *
   * @public
   */
  status: IntermediateTableStatus | undefined;

  /**
   * The reason for the current status of the intermediate table.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the intermediate table data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The analysis configuration that defines the query used to populate the intermediate table.
   *
   * @public
   */
  populationAnalysisConfiguration: PopulationAnalysisConfiguration | undefined;

  /**
   * The number of days that populated data is retained before expiring.
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * The list of base tables that this intermediate table depends on.
   *
   * @public
   */
  tableDependencies?: IntermediateTableDependency[] | undefined;

  /**
   * The details of the currently active version of the intermediate table.
   *
   * @public
   */
  intermediateTableVersion?: IntermediateTableActiveVersion | undefined;

  /**
   * The types of analysis rules associated with the intermediate table.
   *
   * @public
   */
  analysisRuleTypes?: IntermediateTableAnalysisRuleType[] | undefined;

  /**
   * The schema of the intermediate table, containing column definitions. Available after the table has been successfully populated.
   *
   * @public
   */
  schema?: IntermediateTableSchema | undefined;
}

/**
 * @public
 */
export interface CreateIntermediateTableOutput {
  /**
   * The intermediate table that was created.
   *
   * @public
   */
  intermediateTable: IntermediateTable | undefined;
}

/**
 * Contains the custom analysis rule configuration for an intermediate table.
 *
 * @public
 */
export interface IntermediateTableAnalysisRuleCustom {
  /**
   * The list of allowed analyses that can be performed on the intermediate table.
   *
   * @public
   */
  allowedAnalyses?: string[] | undefined;

  /**
   * The setting that controls whether additional analyses are allowed on the intermediate table.
   *
   * @public
   */
  additionalAnalyses?: AdditionalAnalyses | undefined;

  /**
   * The list of allowed additional analyses for the intermediate table.
   *
   * @public
   */
  allowedAdditionalAnalyses?: string[] | undefined;

  /**
   * The list of Amazon Web Services account IDs for the allowed analysis providers.
   *
   * @public
   */
  allowedAnalysisProviders?: string[] | undefined;

  /**
   * The list of Amazon Web Services account IDs that are allowed to receive results from queries run on the intermediate table.
   *
   * @public
   */
  allowedResultReceivers?: string[] | undefined;

  /**
   * Specifies the unique identifier for your users.
   *
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyConfiguration | undefined;

  /**
   * The list of columns that are not allowed in the query output.
   *
   * @public
   */
  disallowedOutputColumns?: string[] | undefined;

  /**
   * The aggregation thresholds that each query output group must satisfy. Clean Rooms filters out any group that represents fewer than the specified number of distinct identities. You can specify at most one threshold. You can't use aggregation thresholds with differential privacy, or when `allowedAnalyses` allows only jobs.
   *
   * @public
   */
  aggregationThresholds?: AggregationThreshold[] | undefined;

  /**
   * The controls that restrict how a query can compare the columns in the intermediate table. You can't use comparison controls with differential privacy, or when `allowedAnalyses` allows only jobs.
   *
   * @public
   */
  comparisonControls?: ComparisonControls | undefined;
}

/**
 * Contains the version 1 policy for an intermediate table analysis rule.
 *
 * @public
 */
export type IntermediateTableAnalysisRulePolicyV1 =
  | IntermediateTableAnalysisRulePolicyV1.CustomMember
  | IntermediateTableAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace IntermediateTableAnalysisRulePolicyV1 {
  /**
   * The custom analysis rule policy.
   *
   * @public
   */
  export interface CustomMember {
    custom: IntermediateTableAnalysisRuleCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    custom: (value: IntermediateTableAnalysisRuleCustom) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the policy for an intermediate table analysis rule.
 *
 * @public
 */
export type IntermediateTableAnalysisRulePolicy =
  | IntermediateTableAnalysisRulePolicy.V1Member
  | IntermediateTableAnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace IntermediateTableAnalysisRulePolicy {
  /**
   * The version 1 policy for the analysis rule.
   *
   * @public
   */
  export interface V1Member {
    v1: IntermediateTableAnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1: (value: IntermediateTableAnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIntermediateTableAnalysisRuleInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table for which to create the analysis rule.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The type of analysis rule to create. Currently, only `CUSTOM` is supported.
   *
   * @public
   */
  analysisRuleType: IntermediateTableAnalysisRuleType | undefined;

  /**
   * The analysis rule policy to apply to the intermediate table.
   *
   * @public
   */
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy | undefined;
}

/**
 * Contains the details of an analysis rule for an intermediate table.
 *
 * @public
 */
export interface IntermediateTableAnalysisRule {
  /**
   * The unique identifier of the intermediate table associated with this analysis rule.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the intermediate table associated with this analysis rule.
   *
   * @public
   */
  intermediateTableArn: string | undefined;

  /**
   * The policy of the analysis rule.
   *
   * @public
   */
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy | undefined;

  /**
   * The type of the analysis rule.
   *
   * @public
   */
  analysisRuleType: IntermediateTableAnalysisRuleType | undefined;

  /**
   * The time the analysis rule was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the analysis rule was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateIntermediateTableAnalysisRuleOutput {
  /**
   * The analysis rule that was created for the intermediate table.
   *
   * @public
   */
  analysisRule: IntermediateTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteIntermediateTableInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table to delete.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntermediateTableOutput {}

/**
 * @public
 */
export interface DeleteIntermediateTableAnalysisRuleInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table from which to delete the analysis rule.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The type of analysis rule to delete. Currently, only `CUSTOM` is supported.
   *
   * @public
   */
  analysisRuleType: IntermediateTableAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface DeleteIntermediateTableAnalysisRuleOutput {}

/**
 * @public
 */
export interface GetIntermediateTableInput {
  /**
   * The unique identifier of the intermediate table to retrieve.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIntermediateTableOutput {
  /**
   * The intermediate table retrieved.
   *
   * @public
   */
  intermediateTable: IntermediateTable | undefined;
}

/**
 * @public
 */
export interface GetIntermediateTableAnalysisRuleInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table for which to retrieve the analysis rule.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The type of analysis rule to retrieve. Currently, only `CUSTOM` is supported.
   *
   * @public
   */
  analysisRuleType: IntermediateTableAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetIntermediateTableAnalysisRuleOutput {
  /**
   * The analysis rule for the intermediate table.
   *
   * @public
   */
  analysisRule: IntermediateTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListIntermediateTablesInput {
  /**
   * The unique identifier of the membership for which to list intermediate tables.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an intermediate table.
 *
 * @public
 */
export interface IntermediateTableSummary {
  /**
   * The unique identifier of the intermediate table.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the intermediate table.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the intermediate table.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the intermediate table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the collaboration that contains the intermediate table.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains the intermediate table.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The time the intermediate table was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the intermediate table was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The current status of the intermediate table.
   *
   * @public
   */
  status: IntermediateTableStatus | undefined;

  /**
   * The number of days that populated data is retained before expiring.
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * The types of analysis rules associated with the intermediate table.
   *
   * @public
   */
  analysisRuleTypes?: IntermediateTableAnalysisRuleType[] | undefined;
}

/**
 * @public
 */
export interface ListIntermediateTablesOutput {
  /**
   * The list of intermediate table summaries.
   *
   * @public
   */
  intermediateTableSummaries: IntermediateTableSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}
