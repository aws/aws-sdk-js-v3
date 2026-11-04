// smithy-typescript generated code
import type {
  AnalysisLogExportStatus,
  AnalysisType,
  DifferentialPrivacyAggregationType,
  IntermediateTableAnalysisRuleType,
  IntermediateTableVersionStatus,
  LogExportAnalysisType,
  MemberAbility,
  MembershipJobLogStatus,
  MembershipQueryLogStatus,
  MembershipStatus,
  PopulateIntermediateTableAnalysisType,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetType,
  ProtectedJobAnalysisType,
  ProtectedJobStatus,
  ProtectedJobType,
  ProtectedJobWorkerComputeType,
  ProtectedQueryStatus,
  ProtectedQueryType,
  ResultFormat,
  TargetProtectedJobStatus,
  TargetProtectedQueryStatus,
  WorkerComputeType,
} from "./enums";
import type {
  AccessBudgetsPrivacyTemplateParametersInput,
  AccessBudgetsPrivacyTemplateUpdateParameters,
  AnalysisLogExport,
  AnalysisLogExportResultConfiguration,
  AnalysisLogExportSummary,
  IntermediateTable,
  IntermediateTableAnalysisRule,
  IntermediateTableAnalysisRulePolicy,
  MLMemberAbilities,
  PrivacyBudget,
  PrivacyBudgetTemplateParametersOutput,
} from "./models_0";

/**
 * @public
 */
export interface ListIntermediateTableVersionsInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table for which to list versions.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

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
 * Contains summary information about a version of an intermediate table.
 *
 * @public
 */
export interface IntermediateTableVersionSummary {
  /**
   * The unique identifier of the version.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The unique identifier of the intermediate table that this version belongs to.
   *
   * @public
   */
  tableId: string | undefined;

  /**
   * The time the version was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The identifier of the protected query that created this version.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The status of the version.
   *
   * @public
   */
  status: IntermediateTableVersionStatus | undefined;

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
   * The time when this version expires based on the retention period.
   *
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListIntermediateTableVersionsOutput {
  /**
   * The list of intermediate table version summaries.
   *
   * @public
   */
  intermediateTableVersionSummaries: IntermediateTableVersionSummary[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration properties that define the compute environment settings for workers in Clean Rooms. These properties enable customization of the underlying compute environment to optimize performance for your specific workloads.
 *
 * @public
 */
export type WorkerComputeConfigurationProperties =
  | WorkerComputeConfigurationProperties.SparkMember
  | WorkerComputeConfigurationProperties.$UnknownMember;

/**
 * @public
 */
export namespace WorkerComputeConfigurationProperties {
  /**
   * The Spark configuration properties for SQL and PySpark workloads. This map contains key-value pairs that configure Apache Spark settings to optimize performance for your data processing jobs. You can specify up to 50 Spark properties, with each key being 1-200 characters and each value being 0-500 characters. These properties allow you to adjust compute capacity for large datasets and complex workloads.
   *
   * @public
   */
  export interface SparkMember {
    spark: Record<string, string>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    spark?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    spark: (value: Record<string, string>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration of the compute resources for workers running an analysis with the Clean Rooms SQL analytics engine.
 *
 * @public
 */
export interface WorkerComputeConfiguration {
  /**
   * The worker compute configuration type.
   *
   * @public
   */
  type?: WorkerComputeType | undefined;

  /**
   * The number of workers.
   *
   * SQL queries support a minimum value of 2 and a maximum value of 400.
   *
   * PySpark jobs support a minimum value of 4 and a maximum value of 128.
   *
   * @public
   */
  number?: number | undefined;

  /**
   * The configuration properties for the worker compute environment. These properties allow you to customize the compute settings for your Clean Rooms workloads.
   *
   * @public
   */
  properties?: WorkerComputeConfigurationProperties | undefined;
}

/**
 * Contains the compute configuration for an intermediate table population operation.
 *
 * @public
 */
export type IntermediateTableComputeConfiguration =
  | IntermediateTableComputeConfiguration.QueryComputeConfigurationMember
  | IntermediateTableComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace IntermediateTableComputeConfiguration {
  /**
   * The configuration of the compute resources for workers running an analysis with the Clean Rooms SQL analytics engine.
   *
   * @public
   */
  export interface QueryComputeConfigurationMember {
    queryComputeConfiguration: WorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    queryComputeConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    queryComputeConfiguration: (value: WorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PopulateIntermediateTableInput {
  /**
   * The unique identifier of the intermediate table to populate.
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

  /**
   * The runtime parameter values that override the defaults in the stored query.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The compute configuration for the population query execution.
   *
   * @public
   */
  computeConfiguration?: IntermediateTableComputeConfiguration | undefined;

  /**
   * The account ID of the member that pays for the analysis compute costs.
   *
   * @public
   */
  analysisPayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface PopulateIntermediateTableOutput {
  /**
   * The identifier for the protected query execution that populated the intermediate table.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The type of analysis performed to populate the intermediate table.
   *
   * @public
   */
  analysisType: PopulateIntermediateTableAnalysisType | undefined;

  /**
   * The unique identifier of the version created by this population operation.
   *
   * @public
   */
  versionId: string | undefined;
}

/**
 * Contains the name and type of a column in an intermediate table.
 *
 * @public
 */
export interface IntermediateTableColumn {
  /**
   * The name of the column.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 */
export interface UpdateIntermediateTableInput {
  /**
   * The unique identifier of the intermediate table to update.
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

  /**
   * A new description for the intermediate table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed KMS key to use for encrypting future population data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The list of columns with updated type definitions. Only the type of existing columns can be updated.
   *
   * @public
   */
  columns?: IntermediateTableColumn[] | undefined;
}

/**
 * @public
 */
export interface UpdateIntermediateTableOutput {
  /**
   * The updated intermediate table.
   *
   * @public
   */
  intermediateTable: IntermediateTable | undefined;
}

/**
 * @public
 */
export interface UpdateIntermediateTableAnalysisRuleInput {
  /**
   * The unique identifier of the membership that contains the intermediate table.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the intermediate table for which to update the analysis rule.
   *
   * @public
   */
  intermediateTableIdentifier: string | undefined;

  /**
   * The type of analysis rule to update. Currently, only `CUSTOM` is supported.
   *
   * @public
   */
  analysisRuleType: IntermediateTableAnalysisRuleType | undefined;

  /**
   * The updated analysis rule policy for the intermediate table.
   *
   * @public
   */
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateIntermediateTableAnalysisRuleOutput {
  /**
   * The updated analysis rule for the intermediate table.
   *
   * @public
   */
  analysisRule: IntermediateTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A map of objects specifying each key name and value.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Contains input information for protected jobs with an S3 output type.
 *
 * @public
 */
export interface ProtectedJobS3OutputConfigurationInput {
  /**
   * The file format of the protected job results. If you don't specify a format, results are written as CSV.
   *
   * @public
   */
  resultFormat?: ResultFormat | undefined;

  /**
   * The S3 bucket for job output.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 prefix to unload the protected job results.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * Contains configurations for protected job results.
 *
 * @public
 */
export type MembershipProtectedJobOutputConfiguration =
  | MembershipProtectedJobOutputConfiguration.S3Member
  | MembershipProtectedJobOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MembershipProtectedJobOutputConfiguration {
  /**
   * Contains the configuration to write the job results to S3.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedJobS3OutputConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedJobS3OutputConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations for protected job results.
 *
 * @public
 */
export interface MembershipProtectedJobResultConfiguration {
  /**
   * The output configuration for a protected job result.
   *
   * @public
   */
  outputConfiguration: MembershipProtectedJobOutputConfiguration | undefined;

  /**
   * The unique ARN for an IAM role that is used by Clean Rooms to write protected job results to the result location, given by the member who can receive results.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Contains the configuration to write the query results to S3.
 *
 * @public
 */
export interface ProtectedQueryS3OutputConfiguration {
  /**
   * Intended file format of the result.
   *
   * @public
   */
  resultFormat: ResultFormat | undefined;

  /**
   * The S3 bucket to unload the protected query results.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 prefix to unload the protected query results.
   *
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * Indicates whether files should be output as a single file (`TRUE`) or output as multiple files (`FALSE`). This parameter is only supported for analyses with the Spark analytics engine.
   *
   * @public
   */
  singleFileOutput?: boolean | undefined;
}

/**
 * Contains configurations for protected query results.
 *
 * @public
 */
export type MembershipProtectedQueryOutputConfiguration =
  | MembershipProtectedQueryOutputConfiguration.S3Member
  | MembershipProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MembershipProtectedQueryOutputConfiguration {
  /**
   * Contains the configuration to write the query results to S3.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations for protected query results.
 *
 * @public
 */
export interface MembershipProtectedQueryResultConfiguration {
  /**
   * Configuration for protected query results.
   *
   * @public
   */
  outputConfiguration: MembershipProtectedQueryOutputConfiguration | undefined;

  /**
   * The unique ARN for an IAM role that is used by Clean Rooms to write protected query results to the result location, given by the member who can receive results.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member for query and job compute costs.
 *
 * @public
 */
export interface MembershipJobComputePaymentConfig {
  /**
   * Indicates whether the collaboration member has accepted to pay for job compute costs (`TRUE`) or has not accepted to pay for query and job compute costs (`FALSE`).
   *
   * There can be one or more members who are designated as payer candidates for queries and jobs.
   *
   * An error message is returned for the following reasons:
   *
   * - If you set the value to `FALSE` but you are responsible to pay for query and job compute costs.
   * - If you set the value to `TRUE` but you are not responsible to pay for query and job compute costs.
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
export interface MembershipModelInferencePaymentConfig {
  /**
   * Indicates whether the collaboration member has accepted to pay for model inference costs (`TRUE`) or has not accepted to pay for model inference costs (`FALSE`).
   *
   * If the collaboration creator has not specified anyone to pay for model inference costs, then the member who can query is the default payer.
   *
   * An error message is returned for the following reasons:
   *
   * - If you set the value to `FALSE` but you are responsible to pay for model inference costs.
   * - If you set the value to `TRUE` but you are not responsible to pay for model inference costs.
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
export interface MembershipModelTrainingPaymentConfig {
  /**
   * Indicates whether the collaboration member has accepted to pay for model training costs (`TRUE`) or has not accepted to pay for model training costs (`FALSE`).
   *
   * If the collaboration creator has not specified anyone to pay for model training costs, then the member who can query is the default payer.
   *
   * An error message is returned for the following reasons:
   *
   * - If you set the value to `FALSE` but you are responsible to pay for model training costs.
   * - If you set the value to `TRUE` but you are not responsible to pay for model training costs.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * Configuration for payment for synthetic data generation in a membership.
 *
 * @public
 */
export interface MembershipSyntheticDataGenerationPaymentConfig {
  /**
   * Indicates if this membership is responsible for paying for synthetic data generation.
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
export interface MembershipMLPaymentConfig {
  /**
   * The payment responsibilities accepted by the member for model training.
   *
   * @public
   */
  modelTraining?: MembershipModelTrainingPaymentConfig | undefined;

  /**
   * The payment responsibilities accepted by the member for model inference.
   *
   * @public
   */
  modelInference?: MembershipModelInferencePaymentConfig | undefined;

  /**
   * The payment configuration for synthetic data generation for this machine learning membership.
   *
   * @public
   */
  syntheticDataGeneration?: MembershipSyntheticDataGenerationPaymentConfig | undefined;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member for query compute costs.
 *
 * @public
 */
export interface MembershipQueryComputePaymentConfig {
  /**
   * Indicates whether the collaboration member has accepted to pay for query compute costs (`TRUE`) or has not accepted to pay for query compute costs (`FALSE`).
   *
   * If the collaboration creator has not specified anyone to pay for query compute costs, then the member who can query is the default payer.
   *
   * An error message is returned for the following reasons:
   *
   * - If you set the value to `FALSE` but you are responsible to pay for query compute costs.
   * - If you set the value to `TRUE` but you are not responsible to pay for query compute costs.
   *
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member.
 *
 * @public
 */
export interface MembershipPaymentConfiguration {
  /**
   * The payment responsibilities accepted by the collaboration member for query compute costs.
   *
   * @public
   */
  queryCompute: MembershipQueryComputePaymentConfig | undefined;

  /**
   * The payment responsibilities accepted by the collaboration member for machine learning costs.
   *
   * @public
   */
  machineLearning?: MembershipMLPaymentConfig | undefined;

  /**
   * The payment responsibilities accepted by the collaboration member for job compute costs.
   *
   * @public
   */
  jobCompute?: MembershipJobComputePaymentConfig | undefined;
}

/**
 * @public
 */
export interface CreateMembershipInput {
  /**
   * The unique ID for the associated collaboration.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * An indicator as to whether query logging has been enabled or disabled for the membership.
   *
   * When `ENABLED`, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * An indicator as to whether job logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The default protected query result configuration as specified by the member who can receive results.
   *
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * The default job result configuration that determines how job results are protected and managed within this membership. This configuration applies to all jobs.
   *
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;

  /**
   * The payment responsibilities accepted by the collaboration member.
   *
   * Not required if the collaboration member has the member ability to run queries.
   *
   * Required if the collaboration member doesn't have the member ability to run queries but is configured as a payer by the collaboration creator.
   *
   * @public
   */
  paymentConfiguration?: MembershipPaymentConfiguration | undefined;

  /**
   * An indicator as to whether Amazon CloudWatch metrics have been enabled or disabled for the membership.
   *
   * Amazon CloudWatch metrics are only available when the collaboration has metrics enabled. This option can be set by collaboration members who have the ability to run queries (analysis runners) or by members who are configured as payers.
   *
   * When `true`, metrics about query execution are collected in Amazon CloudWatch. The default value is `false`.
   *
   * @public
   */
  isMetricsEnabled?: boolean | undefined;
}

/**
 * The membership object.
 *
 * @public
 */
export interface Membership {
  /**
   * The unique ID of the membership.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN for the membership.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique ARN for the membership's associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique ID for the membership's collaboration.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * The display name of the collaboration creator.
   *
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * The name of the membership's collaboration.
   *
   * @public
   */
  collaborationName: string | undefined;

  /**
   * The time when the membership was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the membership metadata was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The status of the membership.
   *
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * The abilities granted to the collaboration member.
   *
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * Specifies the ML member abilities that are granted to a collaboration member.
   *
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * An indicator as to whether query logging has been enabled or disabled for the membership.
   *
   * When `ENABLED`, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * An indicator as to whether job logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * The default protected query result configuration as specified by the member who can receive results.
   *
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * The default job result configuration for the membership.
   *
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;

  /**
   * The payment responsibilities accepted by the collaboration member.
   *
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;

  /**
   * An indicator as to whether Amazon CloudWatch metrics are enabled for the membership.
   *
   * When `true`, metrics about query execution are collected in Amazon CloudWatch.
   *
   * @public
   */
  isMetricsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateMembershipOutput {
  /**
   * The membership that was created.
   *
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipOutput {}

/**
 * @public
 */
export interface DisallowIntermediateTableInput {
  /**
   * The unique identifier of the membership that contains the intermediate table to disallow.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The name of the intermediate table to disallow.
   *
   * @public
   */
  intermediateTableName: string | undefined;

  /**
   * Specifies whether to cascade the disallow action to descendant intermediate tables. Default is `true`.
   *
   * @public
   */
  includeDescendants?: boolean | undefined;
}

/**
 * @public
 */
export interface DisallowIntermediateTableOutput {}

/**
 * @public
 */
export interface GetAnalysisLogExportInput {
  /**
   * A unique identifier for the membership that the analysis log export belongs to. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the analysis log export to retrieve.
   *
   * @public
   */
  analysisLogExportIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAnalysisLogExportOutput {
  /**
   * The analysis log export processing metadata.
   *
   * @public
   */
  analysisLogExport: AnalysisLogExport | undefined;
}

/**
 * @public
 */
export interface GetMembershipInput {
  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipOutput {
  /**
   * The membership retrieved for the provided identifier.
   *
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface GetProtectedJobInput {
  /**
   * The identifier for a membership in a protected job instance.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for the protected job instance.
   *
   * @public
   */
  protectedJobIdentifier: string | undefined;
}

/**
 * The configuration of the compute resources for a PySpark job.
 *
 * @public
 */
export interface ProtectedJobWorkerComputeConfiguration {
  /**
   * The worker compute configuration type.
   *
   * @public
   */
  type: ProtectedJobWorkerComputeType | undefined;

  /**
   * The number of workers for a PySpark job.
   *
   * @public
   */
  number: number | undefined;

  /**
   * The configuration properties for the worker compute environment. These properties allow you to customize the compute settings for your Clean Rooms workloads.
   *
   * @public
   */
  properties?: WorkerComputeConfigurationProperties | undefined;
}

/**
 * The configuration of the compute resources for a PySpark job.
 *
 * @public
 */
export type ProtectedJobComputeConfiguration =
  | ProtectedJobComputeConfiguration.WorkerMember
  | ProtectedJobComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobComputeConfiguration {
  /**
   * The worker configuration for the compute environment.
   *
   * @public
   */
  export interface WorkerMember {
    worker: ProtectedJobWorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    worker: (value: ProtectedJobWorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The protected job error.
 *
 * @public
 */
export interface ProtectedJobError {
  /**
   * The message for the protected job error.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The error code for the protected job.
   *
   * @public
   */
  code: string | undefined;
}

/**
 * The parameters for the protected job.
 *
 * @public
 */
export interface ProtectedJobParameters {
  /**
   * The ARN of the analysis template.
   *
   * @public
   */
  analysisTemplateArn: string | undefined;

  /**
   * Runtime configuration values passed to the PySpark analysis script. Parameter names and types must match those defined in the analysis template.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * Details about the member who received the job result.
 *
 * @public
 */
export interface ProtectedJobSingleMemberOutput {
  /**
   * The Amazon Web Services account ID of the member in the collaboration who can receive results from analyses.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Contains output information for protected jobs with an S3 output type.
 *
 * @public
 */
export interface ProtectedJobS3Output {
  /**
   * The S3 location for the protected job output.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * Contains details about the protected job output.
 *
 * @public
 */
export type ProtectedJobOutput =
  | ProtectedJobOutput.MemberListMember
  | ProtectedJobOutput.S3Member
  | ProtectedJobOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutput {
  /**
   * If present, the output for a protected job with an `S3` output type.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedJobS3Output;
    memberList?: never;
    $unknown?: never;
  }

  /**
   * The list of member Amazon Web Services account(s) that received the results of the job.
   *
   * @public
   */
  export interface MemberListMember {
    s3?: never;
    memberList: ProtectedJobSingleMemberOutput[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    memberList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedJobS3Output) => T;
    memberList: (value: ProtectedJobSingleMemberOutput[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the job results.
 *
 * @public
 */
export interface ProtectedJobResult {
  /**
   * The output of the protected job.
   *
   * @public
   */
  output: ProtectedJobOutput | undefined;
}

/**
 * The protected job member output configuration output.
 *
 * @public
 */
export interface ProtectedJobMemberOutputConfigurationOutput {
  /**
   * The account ID.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * The output configuration for a protected job's S3 output.
 *
 * @public
 */
export interface ProtectedJobS3OutputConfigurationOutput {
  /**
   * The S3 bucket for job output.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 prefix to unload the protected job results.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * The protected job output configuration output.
 *
 * @public
 */
export type ProtectedJobOutputConfigurationOutput =
  | ProtectedJobOutputConfigurationOutput.MemberMember
  | ProtectedJobOutputConfigurationOutput.S3Member
  | ProtectedJobOutputConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutputConfigurationOutput {
  /**
   * If present, the output for a protected job with an `S3` output type.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedJobS3OutputConfigurationOutput;
    member?: never;
    $unknown?: never;
  }

  /**
   * The member output configuration for a protected job.
   *
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedJobMemberOutputConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedJobS3OutputConfigurationOutput) => T;
    member: (value: ProtectedJobMemberOutputConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The output configuration for a protected job result.
 *
 * @public
 */
export interface ProtectedJobResultConfigurationOutput {
  /**
   * The output configuration.
   *
   * @public
   */
  outputConfiguration: ProtectedJobOutputConfigurationOutput | undefined;
}

/**
 * Information related to the utilization of resources that have been billed or charged for in a given context, such as a protected job.
 *
 * @public
 */
export interface BilledJobResourceUtilization {
  /**
   * The number of Clean Rooms Processing Unit (CRPU) hours that have been billed.
   *
   * @public
   */
  units: number | undefined;
}

/**
 * Contains statistics about the execution of the protected job.
 *
 * @public
 */
export interface ProtectedJobStatistics {
  /**
   * The duration of the protected job, from creation until job completion, in milliseconds.
   *
   * @public
   */
  totalDurationInMillis?: number | undefined;

  /**
   * The billed resource utilization for the protected job.
   *
   * @public
   */
  billedResourceUtilization?: BilledJobResourceUtilization | undefined;
}

/**
 * The parameters for an Clean Rooms protected job.
 *
 * @public
 */
export interface ProtectedJob {
  /**
   * The identifier for a protected job instance.
   *
   * @public
   */
  id: string | undefined;

  /**
   * he identifier for the membership.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The ARN of the membership.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The creation time of the protected job.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The job parameters for the protected job.
   *
   * @public
   */
  jobParameters?: ProtectedJobParameters | undefined;

  /**
   * The status of the protected job.
   *
   * @public
   */
  status: ProtectedJobStatus | undefined;

  /**
   * Contains any details needed to write the job results.
   *
   * @public
   */
  resultConfiguration?: ProtectedJobResultConfigurationOutput | undefined;

  /**
   * The statistics of the protected job.
   *
   * @public
   */
  statistics?: ProtectedJobStatistics | undefined;

  /**
   * The result of the protected job.
   *
   * @public
   */
  result?: ProtectedJobResult | undefined;

  /**
   * The error from the protected job.
   *
   * @public
   */
  error?: ProtectedJobError | undefined;

  /**
   * The compute configuration for the protected job.
   *
   * @public
   */
  computeConfiguration?: ProtectedJobComputeConfiguration | undefined;

  /**
   * The account ID of the member that pays for the job compute costs.
   *
   * @public
   */
  jobComputePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProtectedJobOutput {
  /**
   * The protected job metadata.
   *
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryInput {
  /**
   * The identifier for a membership in a protected query instance.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for a protected query instance.
   *
   * @public
   */
  protectedQueryIdentifier: string | undefined;
}

/**
 * The configuration of the compute resources for an analysis with the Spark analytics engine.
 *
 * @public
 */
export type ComputeConfiguration =
  | ComputeConfiguration.WorkerMember
  | ComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ComputeConfiguration {
  /**
   * The worker configuration for the compute environment.
   *
   * @public
   */
  export interface WorkerMember {
    worker: WorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    worker: (value: WorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provides the sensitivity parameters.
 *
 * @public
 */
export interface DifferentialPrivacySensitivityParameters {
  /**
   * The type of aggregation function that was run.
   *
   * @public
   */
  aggregationType: DifferentialPrivacyAggregationType | undefined;

  /**
   * The aggregation expression that was run.
   *
   * @public
   */
  aggregationExpression: string | undefined;

  /**
   * The maximum number of rows contributed by a user in a SQL query.
   *
   * @public
   */
  userContributionLimit: number | undefined;

  /**
   * The lower bound of the aggregation expression.
   *
   * @public
   */
  minColumnValue?: number | undefined;

  /**
   * The upper bound of the aggregation expression.
   *
   * @public
   */
  maxColumnValue?: number | undefined;
}

/**
 * An array that contains the sensitivity parameters.
 *
 * @public
 */
export interface DifferentialPrivacyParameters {
  /**
   * Provides the sensitivity parameters that you can use to better understand the total amount of noise in query results.
   *
   * @public
   */
  sensitivityParameters: DifferentialPrivacySensitivityParameters[] | undefined;
}

/**
 * Details of errors thrown by the protected query.
 *
 * @public
 */
export interface ProtectedQueryError {
  /**
   * A description of why the query failed.
   *
   * @public
   */
  message: string | undefined;

  /**
   * An error code for the error.
   *
   * @public
   */
  code: string | undefined;
}

/**
 * Details about the member who received the query result.
 *
 * @public
 */
export interface ProtectedQuerySingleMemberOutput {
  /**
   * The Amazon Web Services account ID of the member in the collaboration who can receive results for the query.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Contains output information for protected queries with an S3 output type.
 *
 * @public
 */
export interface ProtectedQueryS3Output {
  /**
   * The S3 location of the result.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * Contains the output information for a protected query with a distribute output configuration.
 *
 * This output type allows query results to be distributed to multiple receivers, including S3 and collaboration members. It is only available for queries using the Spark analytics engine.
 *
 * @public
 */
export interface ProtectedQueryDistributeOutput {
  /**
   * Contains output information for protected queries with an S3 output type.
   *
   * @public
   */
  s3?: ProtectedQueryS3Output | undefined;

  /**
   * Contains the output results for each member location specified in the distribute output configuration. Each entry provides details about the result distribution to a specific collaboration member.
   *
   * @public
   */
  memberList?: ProtectedQuerySingleMemberOutput[] | undefined;
}

/**
 * Contains details about the protected query output.
 *
 * @public
 */
export type ProtectedQueryOutput =
  | ProtectedQueryOutput.DistributeMember
  | ProtectedQueryOutput.MemberListMember
  | ProtectedQueryOutput.S3Member
  | ProtectedQueryOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutput {
  /**
   * If present, the output for a protected query with an `S3` output type.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3Output;
    memberList?: never;
    distribute?: never;
    $unknown?: never;
  }

  /**
   * The list of member Amazon Web Services account(s) that received the results of the query.
   *
   * @public
   */
  export interface MemberListMember {
    s3?: never;
    memberList: ProtectedQuerySingleMemberOutput[];
    distribute?: never;
    $unknown?: never;
  }

  /**
   * Contains output information for protected queries that use a `distribute` output type. This output type lets you send query results to multiple locations - either to S3 or to collaboration members.
   *
   * > **Note:** You can only use the `distribute` output type with the Spark analytics engine.
   *
   * @public
   */
  export interface DistributeMember {
    s3?: never;
    memberList?: never;
    distribute: ProtectedQueryDistributeOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    memberList?: never;
    distribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3Output) => T;
    memberList: (value: ProtectedQuerySingleMemberOutput[]) => T;
    distribute: (value: ProtectedQueryDistributeOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the query results.
 *
 * @public
 */
export interface ProtectedQueryResult {
  /**
   * The output of the protected query.
   *
   * @public
   */
  output: ProtectedQueryOutput | undefined;
}

/**
 * Contains configuration details for the protected query member output.
 *
 * @public
 */
export interface ProtectedQueryMemberOutputConfiguration {
  /**
   * The unique identifier for the account.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Specifies where you'll distribute the results of your protected query. You must configure either an S3 destination or a collaboration member destination.
 *
 * @public
 */
export type ProtectedQueryDistributeOutputConfigurationLocation =
  | ProtectedQueryDistributeOutputConfigurationLocation.MemberMember
  | ProtectedQueryDistributeOutputConfigurationLocation.S3Member
  | ProtectedQueryDistributeOutputConfigurationLocation.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryDistributeOutputConfigurationLocation {
  /**
   * Contains the configuration to write the query results to S3.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    member?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details for the protected query member output.
   *
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedQueryMemberOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    member: (value: ProtectedQueryMemberOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the configuration for distributing protected query results to multiple receivers, including S3 and collaboration members.
 *
 * @public
 */
export interface ProtectedQueryDistributeOutputConfiguration {
  /**
   * A list of locations where you want to distribute the protected query results. Each location must specify either an S3 destination or a collaboration member destination.
   *
   * > **Important:**
   * >
   * > You can't specify more than one S3 location.
   * >
   * > You can't specify the query runner's account as a member location.
   * >
   * > You must include either an S3 or member output configuration for each location, but not both.
   *
   * @public
   */
  locations: ProtectedQueryDistributeOutputConfigurationLocation[] | undefined;
}

/**
 * Contains the output configuration of an intermediate table when a protected query populates it.
 *
 * @public
 */
export interface IntermediateTableOutputConfiguration {
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
}

/**
 * Contains configuration details for protected query output.
 *
 * @public
 */
export type ProtectedQueryOutputConfiguration =
  | ProtectedQueryOutputConfiguration.DistributeMember
  | ProtectedQueryOutputConfiguration.IntermediateTableMember
  | ProtectedQueryOutputConfiguration.MemberMember
  | ProtectedQueryOutputConfiguration.S3Member
  | ProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutputConfiguration {
  /**
   * Required configuration for a protected query with an `s3` output type.
   *
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    member?: never;
    distribute?: never;
    intermediateTable?: never;
    $unknown?: never;
  }

  /**
   * Required configuration for a protected query with a `member` output type.
   *
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedQueryMemberOutputConfiguration;
    distribute?: never;
    intermediateTable?: never;
    $unknown?: never;
  }

  /**
   * Required configuration for a protected query with a `distribute` output type.
   *
   * @public
   */
  export interface DistributeMember {
    s3?: never;
    member?: never;
    distribute: ProtectedQueryDistributeOutputConfiguration;
    intermediateTable?: never;
    $unknown?: never;
  }

  /**
   * The intermediate table output configuration, present when the protected query was triggered by a populate operation.
   *
   * @public
   */
  export interface IntermediateTableMember {
    s3?: never;
    member?: never;
    distribute?: never;
    intermediateTable: IntermediateTableOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    distribute?: never;
    intermediateTable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    member: (value: ProtectedQueryMemberOutputConfiguration) => T;
    distribute: (value: ProtectedQueryDistributeOutputConfiguration) => T;
    intermediateTable: (value: IntermediateTableOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations for protected query results.
 *
 * @public
 */
export interface ProtectedQueryResultConfiguration {
  /**
   * Configuration for protected query results.
   *
   * @public
   */
  outputConfiguration: ProtectedQueryOutputConfiguration | undefined;
}

/**
 * The parameters for the SQL type Protected Query.
 *
 * @public
 */
export interface ProtectedQuerySQLParameters {
  /**
   * The query string to be submitted.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
   *
   * @public
   */
  analysisTemplateArn?: string | undefined;

  /**
   * The protected query SQL parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * Information related to the utilization of resources that have been billed or charged for in a given context, such as a protected query.
 *
 * @public
 */
export interface BilledResourceUtilization {
  /**
   * The number of Clean Rooms Processing Unit (CRPU) hours that have been billed.
   *
   * @public
   */
  units: number | undefined;
}

/**
 * Contains statistics about the execution of the protected query.
 *
 * @public
 */
export interface ProtectedQueryStatistics {
  /**
   * The duration of the protected query, from creation until query completion, in milliseconds.
   *
   * @public
   */
  totalDurationInMillis?: number | undefined;

  /**
   * The billed resource utilization.
   *
   * @public
   */
  billedResourceUtilization?: BilledResourceUtilization | undefined;
}

/**
 * The parameters for an Clean Rooms protected query.
 *
 * @public
 */
export interface ProtectedQuery {
  /**
   * The identifier for a protected query instance.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier for the membership.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The ARN of the membership.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The time at which the protected query was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The protected query SQL parameters.
   *
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters | undefined;

  /**
   * The status of the query.
   *
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * Contains any details needed to write the query results.
   *
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * Statistics about protected query execution.
   *
   * @public
   */
  statistics?: ProtectedQueryStatistics | undefined;

  /**
   * The result of the protected query.
   *
   * @public
   */
  result?: ProtectedQueryResult | undefined;

  /**
   * An error thrown by the protected query.
   *
   * @public
   */
  error?: ProtectedQueryError | undefined;

  /**
   * The sensitivity parameters of the differential privacy results of the protected query.
   *
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyParameters | undefined;

  /**
   * The compute configuration for the protected query.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The account ID of the member that pays for the query compute costs.
   *
   * @public
   */
  queryComputePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * The query processing metadata.
   *
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListAnalysisLogExportsInput {
  /**
   * A unique identifier for the membership to list analysis log exports for. Currently accepts the membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A filter on the unique identifier of the protected query that the analysis logs were exported for.
   *
   * @public
   */
  analysisIdentifier?: string | undefined;

  /**
   * A filter on the status of the analysis log export.
   *
   * @public
   */
  status?: AnalysisLogExportStatus | undefined;

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
 * @public
 */
export interface ListAnalysisLogExportsOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of analysis log exports.
   *
   * @public
   */
  analysisLogExports: AnalysisLogExportSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
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
   * A filter which will return only memberships in the specified status.
   *
   * @public
   */
  status?: MembershipStatus | undefined;
}

/**
 * The membership object listed by the request.
 *
 * @public
 */
export interface MembershipSummary {
  /**
   * The unique ID for the membership's collaboration.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ARN for the membership.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique ARN for the membership's associated collaboration.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The unique ID for the membership's collaboration.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The identifier of the Amazon Web Services principal that created the collaboration. Currently only supports Amazon Web Services account ID.
   *
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * The display name of the collaboration creator.
   *
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * The name for the membership's collaboration.
   *
   * @public
   */
  collaborationName: string | undefined;

  /**
   * The time when the membership was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The time the membership metadata was last updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The status of the membership.
   *
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * The abilities granted to the collaboration member.
   *
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * Provides a summary of the ML abilities for the collaboration member.
   *
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * The payment responsibilities accepted by the collaboration member.
   *
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of memberships returned from the ListMemberships operation.
   *
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The privacy budget type.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

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
   * The Amazon Resource Name (ARN) of the access budget resource to filter privacy budgets by.
   *
   * @public
   */
  accessBudgetResourceArn?: string | undefined;
}

/**
 * An array that summaries the specified privacy budget. This summary includes collaboration information, creation information, membership information, and privacy budget information.
 *
 * @public
 */
export interface PrivacyBudgetSummary {
  /**
   * The unique identifier of the privacy budget.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique identifier of the privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * The ARN of the privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member who created the privacy budget summary.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique identifier of the collaboration that contains this privacy budget.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that contains this privacy budget.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * Specifies the type of the privacy budget.
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
   * The provided privacy budget.
   *
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsOutput {
  /**
   * An array that summarizes the privacy budgets. The summary includes collaboration information, membership information, privacy budget template information, and privacy budget details.
   *
   * @public
   */
  privacyBudgetSummaries: PrivacyBudgetSummary[] | undefined;

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
export interface ListProtectedJobsInput {
  /**
   * The identifier for the membership in the collaboration.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A filter on the status of the protected job.
   *
   * @public
   */
  status?: ProtectedJobStatus | undefined;

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
 * The protected job direct analysis configuration details.
 *
 * @public
 */
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  /**
   * The receiver account IDs.
   *
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * The protected job configuration details.
 *
 * @public
 */
export type ProtectedJobConfigurationDetails =
  | ProtectedJobConfigurationDetails.DirectAnalysisConfigurationDetailsMember
  | ProtectedJobConfigurationDetails.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobConfigurationDetails {
  /**
   * The details needed to configure the direct analysis.
   *
   * @public
   */
  export interface DirectAnalysisConfigurationDetailsMember {
    directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    directAnalysisConfigurationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    directAnalysisConfigurationDetails: (value: ProtectedJobDirectAnalysisConfigurationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The protected job receiver configuration.
 *
 * @public
 */
export interface ProtectedJobReceiverConfiguration {
  /**
   * The analysis type for the protected job receiver configuration.
   *
   * @public
   */
  analysisType: ProtectedJobAnalysisType | undefined;

  /**
   * The configuration details for the protected job receiver.
   *
   * @public
   */
  configurationDetails?: ProtectedJobConfigurationDetails | undefined;
}

/**
 * The protected job summary for the objects listed by the request.
 *
 * @public
 */
export interface ProtectedJobSummary {
  /**
   * The ID of the protected job.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ID for the membership that initiated the protected job.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique ARN for the membership that initiated the protected job.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The time the protected job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The status of the protected job.
   *
   * @public
   */
  status: ProtectedJobStatus | undefined;

  /**
   * The receiver configurations for the protected job.
   *
   * @public
   */
  receiverConfigurations: ProtectedJobReceiverConfiguration[] | undefined;

  /**
   * The account ID of the member that pays for the job compute costs.
   *
   * @public
   */
  jobComputePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedJobsOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of protected job summaries.
   *
   * @public
   */
  protectedJobs: ProtectedJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * The identifier for the membership in the collaboration.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A filter on the status of the protected query.
   *
   * @public
   */
  status?: ProtectedQueryStatus | undefined;

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
 * The direct analysis configuration details.
 *
 * @public
 */
export interface DirectAnalysisConfigurationDetails {
  /**
   * The account IDs for the member who received the results of a protected query.
   *
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * The configuration details.
 *
 * @public
 */
export type ConfigurationDetails =
  | ConfigurationDetails.DirectAnalysisConfigurationDetailsMember
  | ConfigurationDetails.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationDetails {
  /**
   * The direct analysis configuration details.
   *
   * @public
   */
  export interface DirectAnalysisConfigurationDetailsMember {
    directAnalysisConfigurationDetails: DirectAnalysisConfigurationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    directAnalysisConfigurationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    directAnalysisConfigurationDetails: (value: DirectAnalysisConfigurationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The receiver configuration for a protected query.
 *
 * @public
 */
export interface ReceiverConfiguration {
  /**
   * The type of analysis for the protected query. The results of the query can be analyzed directly (`DIRECT_ANALYSIS`) or used as input into additional analyses (`ADDITIONAL_ANALYSIS`), such as a query that is a seed for a lookalike ML model.
   *
   * @public
   */
  analysisType: AnalysisType | undefined;

  /**
   * The configuration details of the receiver configuration.
   *
   * @public
   */
  configurationDetails?: ConfigurationDetails | undefined;
}

/**
 * The protected query summary for the objects listed by the request.
 *
 * @public
 */
export interface ProtectedQuerySummary {
  /**
   * The unique ID of the protected query.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique ID for the membership that initiated the protected query.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique ARN for the membership that initiated the protected query.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The time the protected query was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The status of the protected query.
   *
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * The receiver configuration.
   *
   * @public
   */
  receiverConfigurations: ReceiverConfiguration[] | undefined;

  /**
   * The account ID of the member that pays for the query compute costs.
   *
   * @public
   */
  queryComputePayerAccountId?: string | undefined;

  /**
   * The intermediate table configuration, present when the protected query was triggered by a populate operation.
   *
   * @public
   */
  intermediateTableConfiguration?: IntermediateTableOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of protected queries.
   *
   * @public
   */
  protectedQueries: ProtectedQuerySummary[] | undefined;
}

/**
 * The epsilon and noise parameters that you want to preview.
 *
 * @public
 */
export interface DifferentialPrivacyPreviewParametersInput {
  /**
   * The epsilon value that you want to preview.
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
 * Specifies the updated epsilon and noise parameters to preview. The preview allows you to see how the maximum number of each type of aggregation function would change with the new parameters.
 *
 * @public
 */
export type PreviewPrivacyImpactParametersInput =
  | PreviewPrivacyImpactParametersInput.DifferentialPrivacyMember
  | PreviewPrivacyImpactParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PreviewPrivacyImpactParametersInput {
  /**
   * An array that specifies the epsilon and noise parameters.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPreviewParametersInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PreviewPrivacyImpactInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * Specifies the desired epsilon and noise parameters to preview.
   *
   * @public
   */
  parameters: PreviewPrivacyImpactParametersInput | undefined;
}

/**
 * Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.
 *
 * @public
 */
export interface DifferentialPrivacyPreviewAggregation {
  /**
   * The type of aggregation function.
   *
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * The maximum number of aggregations that the member who can query can run given the epsilon and noise parameters.
   *
   * @public
   */
  maxCount: number | undefined;
}

/**
 * Information about the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.
 *
 * @public
 */
export interface DifferentialPrivacyPrivacyImpact {
  /**
   * The number of aggregation functions that you can perform.
   *
   * @public
   */
  aggregations: DifferentialPrivacyPreviewAggregation[] | undefined;
}

/**
 * Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.
 *
 * @public
 */
export type PrivacyImpact =
  | PrivacyImpact.DifferentialPrivacyMember
  | PrivacyImpact.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyImpact {
  /**
   * An object that lists the number and type of aggregation functions you can perform.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyImpact;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyImpact) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PreviewPrivacyImpactOutput {
  /**
   * An estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters. This does not change the privacy budget.
   *
   * @public
   */
  privacyImpact: PrivacyImpact | undefined;
}

/**
 * @public
 */
export interface StartAnalysisLogExportInput {
  /**
   * A unique identifier for the membership to export the analysis logs for. Currently accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The unique identifier of the protected query that you want to export the analysis logs for.
   *
   * @public
   */
  analysisId: string | undefined;

  /**
   * The type of analysis that the logs are exported for. Currently, only `PROTECTED_QUERY` is supported.
   *
   * @public
   */
  analysisType: LogExportAnalysisType | undefined;

  /**
   * The details needed to write the exported analysis logs.
   *
   * You don't need to create an IAM role for log export. Clean Rooms writes the exported logs using your own identity, so Clean Rooms writes the exported logs only where your existing permissions allow.
   *
   * @public
   */
  resultConfiguration: AnalysisLogExportResultConfiguration | undefined;
}

/**
 * @public
 */
export interface StartAnalysisLogExportOutput {
  /**
   * The analysis log export that was started. The `status` is `IN_PROGRESS`.
   *
   * @public
   */
  analysisLogExport: AnalysisLogExport | undefined;
}

/**
 * The protected job member output configuration input.
 *
 * @public
 */
export interface ProtectedJobMemberOutputConfigurationInput {
  /**
   * The account ID.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * The protected job output configuration input.
 *
 * @public
 */
export type ProtectedJobOutputConfigurationInput =
  | ProtectedJobOutputConfigurationInput.MemberMember
  | ProtectedJobOutputConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutputConfigurationInput {
  /**
   * The member of the protected job output configuration input.
   *
   * @public
   */
  export interface MemberMember {
    member: ProtectedJobMemberOutputConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    member?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    member: (value: ProtectedJobMemberOutputConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The protected job result configuration input.
 *
 * @public
 */
export interface ProtectedJobResultConfigurationInput {
  /**
   * The output configuration for a protected job result.
   *
   * @public
   */
  outputConfiguration: ProtectedJobOutputConfigurationInput | undefined;
}

/**
 * @public
 */
export interface StartProtectedJobInput {
  /**
   * The type of protected job to start.
   *
   * @public
   */
  type: ProtectedJobType | undefined;

  /**
   * A unique identifier for the membership to run this job against. Currently accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The job parameters.
   *
   * @public
   */
  jobParameters: ProtectedJobParameters | undefined;

  /**
   * The details needed to write the job results.
   *
   * @public
   */
  resultConfiguration?: ProtectedJobResultConfigurationInput | undefined;

  /**
   * The compute configuration for the protected job.
   *
   * @public
   */
  computeConfiguration?: ProtectedJobComputeConfiguration | undefined;

  /**
   * The account ID of the member that pays for the job compute costs.
   *
   * @public
   */
  jobComputePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartProtectedJobOutput {
  /**
   * The protected job.
   *
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryInput {
  /**
   * The type of the protected query to be started.
   *
   * @public
   */
  type: ProtectedQueryType | undefined;

  /**
   * A unique identifier for the membership to run this query against. Currently accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The protected SQL query parameters.
   *
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * The details needed to write the query results.
   *
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * The compute configuration for the protected query.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The account ID of the member that pays for the query compute costs.
   *
   * @public
   */
  queryComputePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * The protected query.
   *
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * An object representing the payment responsibilities to update for the membership.
 *
 * @public
 */
export interface UpdateMembershipPaymentConfiguration {
  /**
   * An object representing the payment responsibilities accepted by the collaboration member for query compute costs.
   *
   * @public
   */
  queryCompute?: MembershipQueryComputePaymentConfig | undefined;

  /**
   * An object representing the collaboration member's machine learning payment responsibilities set by the collaboration creator.
   *
   * @public
   */
  machineLearning?: MembershipMLPaymentConfig | undefined;

  /**
   * An object representing the payment responsibilities accepted by the collaboration member for query and job compute costs.
   *
   * @public
   */
  jobCompute?: MembershipJobComputePaymentConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * The unique identifier of the membership.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * An indicator as to whether query logging has been enabled or disabled for the membership.
   *
   * When `ENABLED`, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  queryLogStatus?: MembershipQueryLogStatus | undefined;

  /**
   * An indicator as to whether job logging has been enabled or disabled for the collaboration.
   *
   * When `ENABLED`, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
   *
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * The default protected query result configuration as specified by the member who can receive results.
   *
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * The default job result configuration.
   *
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;

  /**
   * The payment configuration to update for the membership.
   *
   * @public
   */
  membershipPaymentConfiguration?: UpdateMembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * The membership object.
   *
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedJobInput {
  /**
   * The identifier for a member of a protected job instance.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier of the protected job to update.
   *
   * @public
   */
  protectedJobIdentifier: string | undefined;

  /**
   * The target status of a protected job. Used to update the execution status of a currently running job.
   *
   * @public
   */
  targetStatus: TargetProtectedJobStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedJobOutput {
  /**
   * The protected job output.
   *
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryInput {
  /**
   * The identifier for a member of a protected query instance.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The identifier for a protected query instance.
   *
   * @public
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * The target status of a query. Used to update the execution status of a currently running query.
   *
   * @public
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * The protected query output.
   *
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * The epsilon and noise parameter values that you want to use for the differential privacy template.
 *
 * @public
 */
export interface DifferentialPrivacyTemplateParametersInput {
  /**
   * The epsilon value that you want to use.
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
 * The epsilon and noise parameters that you want to use for the privacy budget template.
 *
 * @public
 */
export type PrivacyBudgetTemplateParametersInput =
  | PrivacyBudgetTemplateParametersInput.AccessBudgetMember
  | PrivacyBudgetTemplateParametersInput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersInput {
  /**
   * An object that specifies the epsilon and noise parameters.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * Access budget configuration for the privacy budget template input, enabling integration with access budget functionality.
   *
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudgetsPrivacyTemplateParametersInput;
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
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersInput) => T;
    accessBudget: (value: AccessBudgetsPrivacyTemplateParametersInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * How often the privacy budget refreshes.
   *
   * > **Important:** If you plan to regularly bring new data into the collaboration, you can use `CALENDAR_MONTH` to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queries across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.
   *
   * @public
   */
  autoRefresh?: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * Specifies the type of the privacy budget template.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * Specifies your parameters for the privacy budget template.
   *
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersInput | undefined;

  /**
   * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An object that defines the privacy budget template.
 *
 * @public
 */
export interface PrivacyBudgetTemplate {
  /**
   * The unique identifier of the privacy budget template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the privacy budget template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member who created the privacy budget template.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique ID of the collaboration that contains this privacy budget template.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that contains this privacy budget template.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The time at which the privacy budget template was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the privacy budget template was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * Specifies the type of the privacy budget template.
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
export interface CreatePrivacyBudgetTemplateOutput {
  /**
   * A summary of the elements in the privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A unique identifier for your privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateOutput {}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget template is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A unique identifier for your privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateOutput {
  /**
   * Returns the details of the privacy budget template that you requested.
   *
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget templates are retrieved from the collaboration that this membership belongs to. Accepts a membership ID.
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
 * A summary of the privacy budget template. The summary includes membership information, collaboration information, and creation information.
 *
 * @public
 */
export interface PrivacyBudgetTemplateSummary {
  /**
   * The unique identifier of the privacy budget template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the privacy budget template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The identifier for a membership resource.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member who created the privacy budget template.
   *
   * @public
   */
  membershipArn: string | undefined;

  /**
   * The unique ID of the collaboration that contains this privacy budget template.
   *
   * @public
   */
  collaborationId: string | undefined;

  /**
   * The ARN of the collaboration that contains this privacy budget template.
   *
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * The type of the privacy budget template.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * The time at which the privacy budget template was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the privacy budget template was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesOutput {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array that summarizes the privacy budget templates. The summary includes collaboration information, creation information, and privacy budget type.
   *
   * @public
   */
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * The epsilon and noise parameter values that you want to update in the differential privacy template.
 *
 * @public
 */
export interface DifferentialPrivacyTemplateUpdateParameters {
  /**
   * The updated epsilon value that you want to use.
   *
   * @public
   */
  epsilon?: number | undefined;

  /**
   * The updated value of noise added per query. It is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.
   *
   * @public
   */
  usersNoisePerQuery?: number | undefined;
}

/**
 * The epsilon and noise parameters that you want to update in the privacy budget template.
 *
 * @public
 */
export type PrivacyBudgetTemplateUpdateParameters =
  | PrivacyBudgetTemplateUpdateParameters.AccessBudgetMember
  | PrivacyBudgetTemplateUpdateParameters.DifferentialPrivacyMember
  | PrivacyBudgetTemplateUpdateParameters.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateUpdateParameters {
  /**
   * An object that specifies the new values for the epsilon and noise parameters.
   *
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * The new access budget configuration that completely replaces the existing access budget settings in the privacy budget template.
   *
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudgetsPrivacyTemplateUpdateParameters;
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
    differentialPrivacy: (value: DifferentialPrivacyTemplateUpdateParameters) => T;
    accessBudget: (value: AccessBudgetsPrivacyTemplateUpdateParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateInput {
  /**
   * A unique identifier for one of your memberships for a collaboration. The privacy budget template is updated in the collaboration that this membership belongs to. Accepts a membership ID.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * A unique identifier for your privacy budget template that you want to update.
   *
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;

  /**
   * Specifies the type of the privacy budget template.
   *
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * Specifies the epsilon and noise parameters for the privacy budget template.
   *
   * @public
   */
  parameters?: PrivacyBudgetTemplateUpdateParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateOutput {
  /**
   * Summary of the privacy budget template.
   *
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) associated with the resource you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of objects specifying each key name and value.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of key names of tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
