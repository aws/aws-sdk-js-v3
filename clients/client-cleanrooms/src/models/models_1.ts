// smithy-typescript generated code
import {
  AnalysisType,
  DifferentialPrivacyAggregationType,
  MemberAbility,
  MembershipJobLogStatus,
  MembershipQueryLogStatus,
  MembershipStatus,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetType,
  ProtectedJobAnalysisType,
  ProtectedJobStatus,
  ProtectedJobType,
  ProtectedQueryStatus,
  ProtectedQueryType,
  TargetProtectedJobStatus,
  TargetProtectedQueryStatus,
} from "./enums";

import {
  AccessBudgetsPrivacyTemplateParametersInput,
  AccessBudgetsPrivacyTemplateUpdateParameters,
  ComputeConfiguration,
  DifferentialPrivacyParameters,
  Membership,
  MembershipPaymentConfiguration,
  MembershipProtectedJobResultConfiguration,
  MembershipProtectedQueryResultConfiguration,
  MLMemberAbilities,
  PrivacyBudget,
  PrivacyBudgetTemplateParametersOutput,
  ProtectedJob,
  ProtectedJobComputeConfiguration,
  ProtectedJobParameters,
  ProtectedQueryError,
  ProtectedQueryResult,
  ProtectedQueryResultConfiguration,
  ProtectedQuerySQLParameters,
  ProtectedQueryStatistics,
} from "./models_0";

/**
 * <p>The parameters for an Clean Rooms protected query.</p>
 * @public
 */
export interface ProtectedQuery {
  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier for the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The ARN of the membership.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time at which the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The status of the query.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * <p>Contains any details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p>Statistics about protected query execution.</p>
   * @public
   */
  statistics?: ProtectedQueryStatistics | undefined;

  /**
   * <p>The result of the protected query.</p>
   * @public
   */
  result?: ProtectedQueryResult | undefined;

  /**
   * <p>An error thrown by the protected query.</p>
   * @public
   */
  error?: ProtectedQueryError | undefined;

  /**
   * <p>The sensitivity parameters of the differential privacy results of the protected query.</p>
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyParameters | undefined;

  /**
   * <p> The compute configuration for the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * <p>The query processing metadata.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A filter which will return only memberships in the specified status.</p>
   * @public
   */
  status?: MembershipStatus | undefined;
}

/**
 * <p>The membership object listed by the request.</p>
 * @public
 */
export interface MembershipSummary {
  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services principal that created the collaboration. Currently only supports Amazon Web Services account ID.</p>
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name for the membership's collaboration.</p>
   * @public
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the membership.</p>
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>Provides a summary of the ML abilities for the collaboration member.</p>
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member.</p>
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of memberships returned from the ListMemberships operation.</p>
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The privacy budget type.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access budget resource to filter privacy budgets by.</p>
   * @public
   */
  accessBudgetResourceArn?: string | undefined;
}

/**
 * <p>An array that summaries the specified privacy budget. This summary includes collaboration information, creation information, membership information, and privacy budget information.</p>
 * @public
 */
export interface PrivacyBudgetSummary {
  /**
   * <p>The unique identifier of the privacy budget.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget summary.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget.</p>
   * @public
   */
  type: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The provided privacy budget.</p>
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsOutput {
  /**
   * <p>An array that summarizes the privacy budgets. The summary includes collaboration information, membership information, privacy budget template information, and privacy budget details.</p>
   * @public
   */
  privacyBudgetSummaries: PrivacyBudgetSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedJobsInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected job.</p>
   * @public
   */
  status?: ProtectedJobStatus | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The protected job direct analysis configuration details.</p>
 * @public
 */
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  /**
   * <p> The receiver account IDs.</p>
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * <p>The protected job configuration details.</p>
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
   * <p>The details needed to configure the direct analysis.</p>
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
 * <p>The protected job receiver configuration.</p>
 * @public
 */
export interface ProtectedJobReceiverConfiguration {
  /**
   * <p> The analysis type for the protected job receiver configuration.</p>
   * @public
   */
  analysisType: ProtectedJobAnalysisType | undefined;

  /**
   * <p> The configuration details for the protected job receiver.</p>
   * @public
   */
  configurationDetails?: ProtectedJobConfigurationDetails | undefined;
}

/**
 * <p>The protected job summary for the objects listed by the request.</p>
 * @public
 */
export interface ProtectedJobSummary {
  /**
   * <p> The ID of the protected job.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected job.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected job.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected job.</p>
   * @public
   */
  status: ProtectedJobStatus | undefined;

  /**
   * <p> The receiver configurations for the protected job.</p>
   * @public
   */
  receiverConfigurations: ProtectedJobReceiverConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedJobsOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of protected job summaries.</p>
   * @public
   */
  protectedJobs: ProtectedJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected query.</p>
   * @public
   */
  status?: ProtectedQueryStatus | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The direct analysis configuration details.</p>
 * @public
 */
export interface DirectAnalysisConfigurationDetails {
  /**
   * <p> The account IDs for the member who received the results of a protected query.</p>
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * <p> The configuration details.</p>
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
   * <p> The direct analysis configuration details.</p>
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
 * <p> The receiver configuration for a protected query.</p>
 * @public
 */
export interface ReceiverConfiguration {
  /**
   * <p> The type of analysis for the protected query. The results of the query can be analyzed directly (<code>DIRECT_ANALYSIS</code>) or used as input into additional analyses (<code>ADDITIONAL_ANALYSIS</code>), such as a query that is a seed for a lookalike ML model.</p>
   * @public
   */
  analysisType: AnalysisType | undefined;

  /**
   * <p> The configuration details of the receiver configuration.</p>
   * @public
   */
  configurationDetails?: ConfigurationDetails | undefined;
}

/**
 * <p>The protected query summary for the objects listed by the request.</p>
 * @public
 */
export interface ProtectedQuerySummary {
  /**
   * <p>The unique ID of the protected query.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected query.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected query.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected query.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * <p> The receiver configuration.</p>
   * @public
   */
  receiverConfigurations: ReceiverConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of protected queries.</p>
   * @public
   */
  protectedQueries: ProtectedQuerySummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to preview.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewParametersInput {
  /**
   * <p>The epsilon value that you want to preview.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>Specifies the updated epsilon and noise parameters to preview. The preview allows you to see how the maximum number of each type of aggregation function would change with the new parameters.</p>
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
   * <p>An array that specifies the epsilon and noise parameters.</p>
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
   * <p>A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>Specifies the desired epsilon and noise parameters to preview.</p>
   * @public
   */
  parameters: PreviewPrivacyImpactParametersInput | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewAggregation {
  /**
   * <p>The type of aggregation function.</p>
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The maximum number of aggregations that the member who can query can run given the epsilon and noise parameters.</p>
   * @public
   */
  maxCount: number | undefined;
}

/**
 * <p>Information about the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyImpact {
  /**
   * <p>The number of aggregation functions that you can perform.</p>
   * @public
   */
  aggregations: DifferentialPrivacyPreviewAggregation[] | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export type PrivacyImpact = PrivacyImpact.DifferentialPrivacyMember | PrivacyImpact.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyImpact {
  /**
   * <p>An object that lists the number and type of aggregation functions you can perform.</p>
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
   * <p>An estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters. This does not change the privacy budget.</p>
   * @public
   */
  privacyImpact: PrivacyImpact | undefined;
}

/**
 * <p> The protected job member output configuration input.</p>
 * @public
 */
export interface ProtectedJobMemberOutputConfigurationInput {
  /**
   * <p> The account ID.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p> The protected job output configuration input.</p>
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
   * <p> The member of the protected job output configuration input.</p>
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
 * <p>The protected job result configuration input.</p>
 * @public
 */
export interface ProtectedJobResultConfigurationInput {
  /**
   * <p> The output configuration for a protected job result.</p>
   * @public
   */
  outputConfiguration: ProtectedJobOutputConfigurationInput | undefined;
}

/**
 * @public
 */
export interface StartProtectedJobInput {
  /**
   * <p> The type of protected job to start.</p>
   * @public
   */
  type: ProtectedJobType | undefined;

  /**
   * <p>A unique identifier for the membership to run this job against. Currently accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p> The job parameters.</p>
   * @public
   */
  jobParameters: ProtectedJobParameters | undefined;

  /**
   * <p>The details needed to write the job results.</p>
   * @public
   */
  resultConfiguration?: ProtectedJobResultConfigurationInput | undefined;

  /**
   * <p>The compute configuration for the protected job.</p>
   * @public
   */
  computeConfiguration?: ProtectedJobComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedJobOutput {
  /**
   * <p> The protected job.</p>
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryInput {
  /**
   * <p>The type of the protected query to be started.</p>
   * @public
   */
  type: ProtectedQueryType | undefined;

  /**
   * <p>A unique identifier for the membership to run this query against. Currently accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The compute configuration for the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * <p>The protected query.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * <p>The unique identifier of the membership.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the membership.</p> <p>When <code>ENABLED</code>, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  queryLogStatus?: MembershipQueryLogStatus | undefined;

  /**
   * <p>An indicator as to whether job logging has been enabled or disabled for the collaboration. </p> <p>When <code>ENABLED</code>, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The default job result configuration.</p>
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * <p>The membership object.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedJobInput {
  /**
   * <p>The identifier for a member of a protected job instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p> The identifier of the protected job to update.</p>
   * @public
   */
  protectedJobIdentifier: string | undefined;

  /**
   * <p>The target status of a protected job. Used to update the execution status of a currently running job.</p>
   * @public
   */
  targetStatus: TargetProtectedJobStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedJobOutput {
  /**
   * <p>The protected job output.</p>
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryInput {
  /**
   * <p>The identifier for a member of a protected query instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * <p>The target status of a query. Used to update the execution status of a currently running query.</p>
   * @public
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * <p>The protected query output.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to use for the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateParametersInput {
  /**
   * <p>The epsilon value that you want to use.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to use for the privacy budget template.</p>
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
   * <p>An object that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * <p>Access budget configuration for the privacy budget template input, enabling integration with access budget functionality.</p>
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
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p> <important> <p>If you plan to regularly bring new data into the collaboration, you can use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queries across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p> </important>
   * @public
   */
  autoRefresh?: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies your parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersInput | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An object that defines the privacy budget template.</p>
 * @public
 */
export interface PrivacyBudgetTemplate {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p> <important> <p>If you plan to regularly bring new data into the collaboration, use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p> </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateOutput {
  /**
   * <p>A summary of the elements in the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template. </p>
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
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateOutput {
  /**
   * <p>Returns the details of the privacy budget template that you requested.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget templates are retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the privacy budget template. The summary includes membership information, collaboration information, and creation information.</p>
 * @public
 */
export interface PrivacyBudgetTemplateSummary {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array that summarizes the privacy budget templates. The summary includes collaboration information, creation information, and privacy budget type.</p>
   * @public
   */
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to update in the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateUpdateParameters {
  /**
   * <p>The updated epsilon value that you want to use.</p>
   * @public
   */
  epsilon?: number | undefined;

  /**
   * <p>The updated value of noise added per query. It is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery?: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to update in the privacy budget template.</p>
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
   * <p>An object that specifies the new values for the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * <p> The new access budget configuration that completely replaces the existing access budget settings in the privacy budget template.</p>
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
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is updated in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template that you want to update.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters?: PrivacyBudgetTemplateUpdateParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateOutput {
  /**
   * <p>Summary of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of objects specifying each key name and value.</p>
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
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
