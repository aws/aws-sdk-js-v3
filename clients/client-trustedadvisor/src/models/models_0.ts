// smithy-typescript generated code
import {
  ExclusionStatus,
  RecommendationLanguage,
  RecommendationLifecycleStage,
  RecommendationPillar,
  RecommendationSource,
  RecommendationStatus,
  RecommendationType,
  ResourceStatus,
  UpdateRecommendationLifecycleStage,
  UpdateRecommendationLifecycleStageReasonCode,
} from "./enums";

/**
 * <p>Summary of an AccountRecommendationLifecycle for an Organization Recommendation</p>
 * @public
 */
export interface AccountRecommendationLifecycleSummary {
  /**
   * <p>The AWS account ID</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Recommendation ARN</p>
   * @public
   */
  accountRecommendationArn?: string | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * <p>The request entry for Recommendation Resource exclusion. Each entry is a combination of Recommendation Resource ARN and corresponding exclusion status</p>
 * @public
 */
export interface RecommendationResourceExclusion {
  /**
   * <p>The ARN of the Recommendation Resource</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The exclusion status</p>
   * @public
   */
  isExcluded: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationResourceExclusionRequest {
  /**
   * <p>A list of recommendation resource ARNs and exclusion status to update</p>
   * @public
   */
  recommendationResourceExclusions: RecommendationResourceExclusion[] | undefined;
}

/**
 * <p>The error entry for Recommendation Resource exclusion. Each entry is a combination of Recommendation Resource ARN, error code and error message</p>
 * @public
 */
export interface UpdateRecommendationResourceExclusionError {
  /**
   * <p>The ARN of the Recommendation Resource</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The error code</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The error message</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationResourceExclusionResponse {
  /**
   * <p>A list of recommendation resource ARNs whose exclusion status failed to update, if any</p>
   * @public
   */
  batchUpdateRecommendationResourceExclusionErrors: UpdateRecommendationResourceExclusionError[] | undefined;
}

/**
 * <p>A summary of an AWS Trusted Advisor Check</p>
 * @public
 */
export interface CheckSummary {
  /**
   * <p>The unique identifier of the AWS Trusted Advisor Check</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the AWS Trusted Advisor Check</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the AWS Trusted Advisor Check</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of what the AWS Trusted Advisor Check is monitoring</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The Recommendation pillars that the AWS Trusted Advisor Check falls under</p>
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * <p>The AWS Services that the Check applies to</p>
   * @public
   */
  awsServices: string[] | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * <p>The column headings for the metadata returned in the resource</p>
   * @public
   */
  metadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationRequest {
  /**
   * <p>The Recommendation identifier</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * <p>Cost optimizing aggregates for a Recommendation</p>
 * @public
 */
export interface RecommendationCostOptimizingAggregates {
  /**
   * <p>The estimated monthly savings</p>
   * @public
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * <p>The estimated percently monthly savings</p>
   * @public
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * <p>Recommendation pillar aggregates</p>
 * @public
 */
export interface RecommendationPillarSpecificAggregates {
  /**
   * <p>Cost optimizing aggregates</p>
   * @public
   */
  costOptimizing?: RecommendationCostOptimizingAggregates | undefined;
}

/**
 * <p>Aggregation of Recommendation Resources</p>
 * @public
 */
export interface RecommendationResourcesAggregates {
  /**
   * <p>The number of AWS resources that were flagged to be OK according to the Trusted Advisor check</p>
   * @public
   */
  okCount: number | undefined;

  /**
   * <p>The number of AWS resources that were flagged to have warning according to the Trusted Advisor check
   *         </p>
   * @public
   */
  warningCount: number | undefined;

  /**
   * <p>The number of AWS resources that were flagged to have errors according to the Trusted Advisor check</p>
   * @public
   */
  errorCount: number | undefined;
}

/**
 * <p>A Recommendation for accounts within an Organization</p>
 * @public
 */
export interface OrganizationRecommendation {
  /**
   * <p>The ID which identifies where the Recommendation was produced</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   * @public
   */
  checkArn?: string | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * <p>The Pillars that the Recommendation is optimizing</p>
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * <p>The AWS Services that the Recommendation applies to</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An aggregation of all resources</p>
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * <p>The pillar aggregations for cost savings</p>
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ARN of the Recommendation</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A description for AWS Trusted Advisor recommendations</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The creator, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * <p>When the Recommendation was resolved</p>
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationResponse {
  /**
   * <p>The Recommendation</p>
   * @public
   */
  organizationRecommendation?: OrganizationRecommendation | undefined;
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * <p>The Recommendation identifier</p>
   * @public
   */
  recommendationIdentifier: string | undefined;
}

/**
 * <p>A Recommendation for an Account</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The ID which identifies where the Recommendation was produced</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   * @public
   */
  checkArn?: string | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * <p>The Pillars that the Recommendation is optimizing</p>
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * <p>The AWS Services that the Recommendation applies to</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An aggregation of all resources</p>
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * <p>The pillar aggregations for cost savings</p>
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ARN of the Recommendation</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A description for AWS Trusted Advisor recommendations</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The creator, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * <p>When the Recommendation was resolved</p>
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The Recommendation</p>
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * @public
 */
export interface ListChecksRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pillar of the check</p>
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * <p>The aws service associated with the check</p>
   * @public
   */
  awsService?: string | undefined;

  /**
   * <p>The source of the check</p>
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * <p>The ISO 639-1 code for the language that you want your checks to appear in.</p>
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * @public
 */
export interface ListChecksResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of Checks</p>
   * @public
   */
  checkSummaries: CheckSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Recommendation identifier</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * <p>An account affected by this organization recommendation</p>
   * @public
   */
  affectedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The account recommendations lifecycles that are applicable to the Recommendation</p>
   * @public
   */
  accountRecommendationLifecycleSummaries: AccountRecommendationLifecycleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status of the resource</p>
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * <p>The exclusion status of the resource</p>
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * <p>The AWS Region code of the resource</p>
   * @public
   */
  regionCode?: string | undefined;

  /**
   * <p>The AWS Organization organization's Recommendation identifier</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * <p>An account affected by this organization recommendation</p>
   * @public
   */
  affectedAccountId?: string | undefined;
}

/**
 * <p>Organization Recommendation Resource Summary</p>
 * @public
 */
export interface OrganizationRecommendationResourceSummary {
  /**
   * <p>The ID of the Recommendation Resource</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the Recommendation Resource</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The AWS resource identifier</p>
   * @public
   */
  awsResourceId: string | undefined;

  /**
   * <p>The AWS Region code that the Recommendation Resource is in</p>
   * @public
   */
  regionCode: string | undefined;

  /**
   * <p>The current status of the Recommendation Resource</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>Metadata associated with the Recommendation Resource</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>When the Recommendation Resource was last updated</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The exclusion status of the Recommendation Resource</p>
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * <p>The AWS account ID</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Recommendation ARN</p>
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of Recommendation Resources</p>
   * @public
   */
  organizationRecommendationResourceSummaries: OrganizationRecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of the Recommendation</p>
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * <p>The pillar of the Recommendation</p>
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * <p>The aws service associated with the Recommendation</p>
   * @public
   */
  awsService?: string | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * <p>The check identifier of the Recommendation</p>
   * @public
   */
  checkIdentifier?: string | undefined;

  /**
   * <p>After the last update of the Recommendation</p>
   * @public
   */
  afterLastUpdatedAt?: Date | undefined;

  /**
   * <p>Before the last update of the Recommendation</p>
   * @public
   */
  beforeLastUpdatedAt?: Date | undefined;
}

/**
 * <p>Summary of recommendation for accounts within an Organization</p>
 * @public
 */
export interface OrganizationRecommendationSummary {
  /**
   * <p>The ID which identifies where the Recommendation was produced</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   * @public
   */
  checkArn?: string | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * <p>The Pillars that the Recommendation is optimizing</p>
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * <p>The AWS Services that the Recommendation applies to</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An aggregation of all resources</p>
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * <p>The pillar aggregations for cost savings</p>
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ARN of the Recommendation</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of Recommendations</p>
   * @public
   */
  organizationRecommendationSummaries: OrganizationRecommendationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status of the resource</p>
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * <p>The exclusion status of the resource</p>
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * <p>The AWS Region code of the resource</p>
   * @public
   */
  regionCode?: string | undefined;

  /**
   * <p>The Recommendation identifier</p>
   * @public
   */
  recommendationIdentifier: string | undefined;
}

/**
 * <p>Summary of a Recommendation Resource</p>
 * @public
 */
export interface RecommendationResourceSummary {
  /**
   * <p>The ID of the Recommendation Resource</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the Recommendation Resource</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The AWS resource identifier</p>
   * @public
   */
  awsResourceId: string | undefined;

  /**
   * <p>The AWS Region code that the Recommendation Resource is in</p>
   * @public
   */
  regionCode: string | undefined;

  /**
   * <p>The current status of the Recommendation Resource</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>Metadata associated with the Recommendation Resource</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>When the Recommendation Resource was last updated</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The exclusion status of the Recommendation Resource</p>
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * <p>The Recommendation ARN</p>
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of Recommendation Resources</p>
   * @public
   */
  recommendationResourceSummaries: RecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of the Recommendation</p>
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * <p>The pillar of the Recommendation</p>
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * <p>The aws service associated with the Recommendation</p>
   * @public
   */
  awsService?: string | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * <p>The check identifier of the Recommendation</p>
   * @public
   */
  checkIdentifier?: string | undefined;

  /**
   * <p>After the last update of the Recommendation</p>
   * @public
   */
  afterLastUpdatedAt?: Date | undefined;

  /**
   * <p>Before the last update of the Recommendation</p>
   * @public
   */
  beforeLastUpdatedAt?: Date | undefined;
}

/**
 * <p>Summary of Recommendation for an Account</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>The ID which identifies where the Recommendation was produced</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   * @public
   */
  checkArn?: string | undefined;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * <p>The Pillars that the Recommendation is optimizing</p>
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * <p>The AWS Services that the Recommendation applies to</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An aggregation of all resources</p>
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * <p>The pillar aggregations for cost savings</p>
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ARN of the Recommendation</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of Recommendations</p>
   * @public
   */
  recommendationSummaries: RecommendationSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationRecommendationLifecycleRequest {
  /**
   * <p>The new lifecycle stage</p>
   * @public
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * <p>The Recommendation identifier for AWS Trusted Advisor Priority recommendations</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommendationLifecycleRequest {
  /**
   * <p>The new lifecycle stage</p>
   * @public
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * <p>The Recommendation identifier for AWS Trusted Advisor Priority recommendations</p>
   * @public
   */
  recommendationIdentifier: string | undefined;
}
