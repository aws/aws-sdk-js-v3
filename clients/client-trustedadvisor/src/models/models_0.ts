// smithy-typescript generated code
import type {
  ExclusionStatus,
  RecommendationLanguage,
  RecommendationLifecycleStage,
  RecommendationPillar,
  RecommendationSource,
  RecommendationStatus,
  RecommendationType,
  ResourceStatus,
  StatusReason,
  UpdateRecommendationLifecycleStage,
  UpdateRecommendationLifecycleStageReasonCode,
} from "./enums";

/**
 * Summary of an AccountRecommendationLifecycle for an Organization Recommendation
 *
 * @public
 */
export interface AccountRecommendationLifecycleSummary {
  /**
   * The AWS account ID
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Recommendation ARN
   *
   * @public
   */
  accountRecommendationArn?: string | undefined;

  /**
   * The lifecycle stage from AWS Trusted Advisor Priority
   *
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * Reason for the lifecycle stage change
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * Reason code for the lifecycle state change
   *
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * When the Recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * The request entry for Recommendation Resource exclusion. Each entry is a combination of Recommendation Resource ARN and corresponding exclusion status
 *
 * @public
 */
export interface RecommendationResourceExclusion {
  /**
   * The ARN of the Recommendation Resource
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The exclusion status
   *
   * @public
   */
  isExcluded: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationResourceExclusionRequest {
  /**
   * A list of recommendation resource ARNs and exclusion status to update
   *
   * @public
   */
  recommendationResourceExclusions: RecommendationResourceExclusion[] | undefined;
}

/**
 * The error entry for Recommendation Resource exclusion. Each entry is a combination of Recommendation Resource ARN, error code and error message
 *
 * @public
 */
export interface UpdateRecommendationResourceExclusionError {
  /**
   * The ARN of the Recommendation Resource
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The error code
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationResourceExclusionResponse {
  /**
   * A list of recommendation resource ARNs whose exclusion status failed to update, if any
   *
   * @public
   */
  batchUpdateRecommendationResourceExclusionErrors: UpdateRecommendationResourceExclusionError[] | undefined;
}

/**
 * A summary of an AWS Trusted Advisor Check
 *
 * @public
 */
export interface CheckSummary {
  /**
   * The unique identifier of the AWS Trusted Advisor Check
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the AWS Trusted Advisor Check
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the AWS Trusted Advisor Check
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of what the AWS Trusted Advisor Check is monitoring
   *
   * @public
   */
  description: string | undefined;

  /**
   * The Recommendation pillars that the AWS Trusted Advisor Check falls under
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * The AWS Services that the Check applies to
   *
   * @public
   */
  awsServices: string[] | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * The column headings for the metadata returned in the resource
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * Indicates whether this check is supported by the ListRecommendationsForResource API.
   *
   * @public
   */
  resourceArnQueryable?: boolean | undefined;

  /**
   * The AWS resource types that this check evaluates (for example, AWS::EC2::Instance).
   *
   * @public
   */
  awsResourceTypes?: string[] | undefined;

  /**
   * The granularity level at which the check operates: resource, account, or account_region.
   *
   * @public
   */
  checkGranularity?: string | undefined;

  /**
   * The recommendation identifier associated with the check.
   *
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationRequest {
  /**
   * The Recommendation identifier
   *
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * Cost optimizing aggregates for a Recommendation
 *
 * @public
 */
export interface RecommendationCostOptimizingAggregates {
  /**
   * The estimated monthly savings
   *
   * @public
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * The estimated percently monthly savings
   *
   * @public
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * Recommendation pillar aggregates
 *
 * @public
 */
export interface RecommendationPillarSpecificAggregates {
  /**
   * Cost optimizing aggregates
   *
   * @public
   */
  costOptimizing?: RecommendationCostOptimizingAggregates | undefined;
}

/**
 * Aggregation of Recommendation Resources
 *
 * @public
 */
export interface RecommendationResourcesAggregates {
  /**
   * The number of AWS resources that were flagged to be OK according to the Trusted Advisor check
   *
   * @public
   */
  okCount: number | undefined;

  /**
   * The number of AWS resources that were flagged to have warning according to the Trusted Advisor check
   *
   * @public
   */
  warningCount: number | undefined;

  /**
   * The number of AWS resources that were flagged to have errors according to the Trusted Advisor check
   *
   * @public
   */
  errorCount: number | undefined;

  /**
   * The number of AWS resources belonging to this Trusted Advisor check that were excluded by the customer
   *
   * @public
   */
  excludedCount?: number | undefined;
}

/**
 * A Recommendation for accounts within an Organization
 *
 * @public
 */
export interface OrganizationRecommendation {
  /**
   * The ID which identifies where the Recommendation was produced
   *
   * @public
   */
  id: string | undefined;

  /**
   * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The AWS Trusted Advisor Check ARN that relates to the Recommendation
   *
   * @public
   */
  checkArn?: string | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The lifecycle stage from AWS Trusted Advisor Priority
   *
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * The Pillars that the Recommendation is optimizing
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * The AWS Services that the Recommendation applies to
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The name of the AWS Trusted Advisor Recommendation
   *
   * @public
   */
  name: string | undefined;

  /**
   * An aggregation of all resources
   *
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * The pillar aggregations for cost savings
   *
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * When the Recommendation was created, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the Recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the Recommendation
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A description for AWS Trusted Advisor recommendations
   *
   * @public
   */
  description: string | undefined;

  /**
   * The creator, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * Reason for the lifecycle stage change
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * Reason code for the lifecycle state change
   *
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * When the Recommendation was resolved
   *
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationResponse {
  /**
   * The Recommendation
   *
   * @public
   */
  organizationRecommendation?: OrganizationRecommendation | undefined;
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * The Recommendation identifier
   *
   * @public
   */
  recommendationIdentifier: string | undefined;

  /**
   * The ISO 639-1 code for the language that you want your recommendations to appear in.
   *
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * A Recommendation for an Account
 *
 * @public
 */
export interface Recommendation {
  /**
   * The ID which identifies where the Recommendation was produced
   *
   * @public
   */
  id: string | undefined;

  /**
   * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The AWS Trusted Advisor Check ARN that relates to the Recommendation
   *
   * @public
   */
  checkArn?: string | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The lifecycle stage from AWS Trusted Advisor Priority
   *
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * The Pillars that the Recommendation is optimizing
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * The AWS Services that the Recommendation applies to
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The name of the AWS Trusted Advisor Recommendation
   *
   * @public
   */
  name: string | undefined;

  /**
   * An aggregation of all resources
   *
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * The pillar aggregations for cost savings
   *
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * When the Recommendation was created, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the Recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the Recommendation
   *
   * @public
   */
  arn: string | undefined;

  /**
   * This attribute provides additional details about potential discrepancies in check status determination.
   *
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * A description for AWS Trusted Advisor recommendations
   *
   * @public
   */
  description: string | undefined;

  /**
   * The creator, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOf?: string | undefined;

  /**
   * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority
   *
   * @public
   */
  updatedOnBehalfOfJobTitle?: string | undefined;

  /**
   * Reason for the lifecycle stage change
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * Reason code for the lifecycle state change
   *
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * When the Recommendation was resolved
   *
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * The Recommendation
   *
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * @public
 */
export interface ListChecksRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pillar of the check
   *
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * The aws service associated with the check
   *
   * @public
   */
  awsService?: string | undefined;

  /**
   * The source of the check
   *
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * The ISO 639-1 code for the language that you want your checks to appear in.
   *
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * @public
 */
export interface ListChecksResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of Checks
   *
   * @public
   */
  checkSummaries: CheckSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Recommendation identifier
   *
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * An account affected by this organization recommendation
   *
   * @public
   */
  affectedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The account recommendations lifecycles that are applicable to the Recommendation
   *
   * @public
   */
  accountRecommendationLifecycleSummaries: AccountRecommendationLifecycleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of the resource
   *
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * The exclusion status of the resource
   *
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * The AWS Region code of the resource
   *
   * @public
   */
  regionCode?: string | undefined;

  /**
   * The AWS Organization organization's Recommendation identifier
   *
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * An account affected by this organization recommendation
   *
   * @public
   */
  affectedAccountId?: string | undefined;
}

/**
 * Organization Recommendation Resource Summary
 *
 * @public
 */
export interface OrganizationRecommendationResourceSummary {
  /**
   * The ID of the Recommendation Resource
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the Recommendation Resource
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The AWS resource identifier. There are certain checks that generate recommendation resources without an awsResourceId.
   *
   * @public
   */
  awsResourceId: string | undefined;

  /**
   * The AWS Region code that the Recommendation Resource is in
   *
   * @public
   */
  regionCode: string | undefined;

  /**
   * The current status of the Recommendation Resource
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * Metadata associated with the Recommendation Resource
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * When the Recommendation Resource was last updated
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The exclusion status of the Recommendation Resource
   *
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * The AWS account ID
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Recommendation ARN
   *
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Recommendation Resources
   *
   * @public
   */
  organizationRecommendationResourceSummaries: OrganizationRecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of the Recommendation
   *
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * The pillar of the Recommendation
   *
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * The aws service associated with the Recommendation
   *
   * @public
   */
  awsService?: string | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * The check identifier of the Recommendation
   *
   * @public
   */
  checkIdentifier?: string | undefined;

  /**
   * After the last update of the Recommendation
   *
   * @public
   */
  afterLastUpdatedAt?: Date | undefined;

  /**
   * Before the last update of the Recommendation
   *
   * @public
   */
  beforeLastUpdatedAt?: Date | undefined;
}

/**
 * Summary of recommendation for accounts within an Organization
 *
 * @public
 */
export interface OrganizationRecommendationSummary {
  /**
   * The ID which identifies where the Recommendation was produced
   *
   * @public
   */
  id: string | undefined;

  /**
   * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The AWS Trusted Advisor Check ARN that relates to the Recommendation
   *
   * @public
   */
  checkArn?: string | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The lifecycle stage from AWS Trusted Advisor Priority
   *
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * The Pillars that the Recommendation is optimizing
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * The AWS Services that the Recommendation applies to
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The name of the AWS Trusted Advisor Recommendation
   *
   * @public
   */
  name: string | undefined;

  /**
   * An aggregation of all resources
   *
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * The pillar aggregations for cost savings
   *
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * When the Recommendation was created, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the Recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the Recommendation
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of Recommendations
   *
   * @public
   */
  organizationRecommendationSummaries: OrganizationRecommendationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of the resource
   *
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * The exclusion status of the resource
   *
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * The AWS Region code of the resource
   *
   * @public
   */
  regionCode?: string | undefined;

  /**
   * The Recommendation identifier
   *
   * @public
   */
  recommendationIdentifier: string | undefined;

  /**
   * The ISO 639-1 code for the language that you want your recommendations to appear in.
   *
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * Summary of a Recommendation Resource
 *
 * @public
 */
export interface RecommendationResourceSummary {
  /**
   * The ID of the Recommendation Resource
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the Recommendation Resource
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The AWS resource identifier. There are certain checks that generate recommendation resources without an awsResourceId.
   *
   * @public
   */
  awsResourceId: string | undefined;

  /**
   * The AWS Region code that the Recommendation Resource is in
   *
   * @public
   */
  regionCode: string | undefined;

  /**
   * The current status of the Recommendation Resource
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * Metadata associated with the Recommendation Resource
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * When the Recommendation Resource was last updated
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The exclusion status of the Recommendation Resource
   *
   * @public
   */
  exclusionStatus?: ExclusionStatus | undefined;

  /**
   * The Recommendation ARN
   *
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Recommendation Resources
   *
   * @public
   */
  recommendationResourceSummaries: RecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of the Recommendation
   *
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * The pillar of the Recommendation
   *
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * The aws service associated with the Recommendation
   *
   * @public
   */
  awsService?: string | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source?: RecommendationSource | undefined;

  /**
   * The check identifier of the Recommendation
   *
   * @public
   */
  checkIdentifier?: string | undefined;

  /**
   * After the last update of the Recommendation
   *
   * @public
   */
  afterLastUpdatedAt?: Date | undefined;

  /**
   * Before the last update of the Recommendation
   *
   * @public
   */
  beforeLastUpdatedAt?: Date | undefined;

  /**
   * The ISO 639-1 code for the language that you want your recommendations to appear in.
   *
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * Summary of Recommendation for an Account
 *
 * @public
 */
export interface RecommendationSummary {
  /**
   * The ID which identifies where the Recommendation was produced
   *
   * @public
   */
  id: string | undefined;

  /**
   * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The AWS Trusted Advisor Check ARN that relates to the Recommendation
   *
   * @public
   */
  checkArn?: string | undefined;

  /**
   * The status of the Recommendation
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The lifecycle stage from AWS Trusted Advisor Priority
   *
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage | undefined;

  /**
   * The Pillars that the Recommendation is optimizing
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * The source of the Recommendation
   *
   * @public
   */
  source: RecommendationSource | undefined;

  /**
   * The AWS Services that the Recommendation applies to
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The name of the AWS Trusted Advisor Recommendation
   *
   * @public
   */
  name: string | undefined;

  /**
   * An aggregation of all resources
   *
   * @public
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * The pillar aggregations for cost savings
   *
   * @public
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates | undefined;

  /**
   * When the Recommendation was created, if created by AWS Trusted Advisor Priority
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the Recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the Recommendation
   *
   * @public
   */
  arn: string | undefined;

  /**
   * This attribute provides additional details about potential discrepancies in check status determination.
   *
   * @public
   */
  statusReason?: StatusReason | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of Recommendations
   *
   * @public
   */
  recommendationSummaries: RecommendationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsForResourceRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ARN of the AWS resource to query recommendations for
   *
   * @public
   */
  awsResourceArn: string | undefined;

  /**
   * The pillar that the recommendation belongs to
   *
   * @public
   */
  pillar?: RecommendationPillar | undefined;

  /**
   * The current status of the Recommendation Resource
   *
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * The AWS Trusted Advisor Check ARN that relates to the Recommendation
   *
   * @public
   */
  checkArn?: string | undefined;

  /**
   * The ISO 639-1 code for the language that you want your recommendations to appear in.
   *
   * @public
   */
  language?: RecommendationLanguage | undefined;
}

/**
 * Summary of a Recommendation for a specific AWS Resource
 *
 * @public
 */
export interface RecommendationForResourceSummary {
  /**
   * The Check ARN
   *
   * @public
   */
  checkArn: string | undefined;

  /**
   * The Recommendation ARN
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The AWS Resource ARN
   *
   * @public
   */
  awsResourceArn: string | undefined;

  /**
   * The current status of the recommendation
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * When the recommendation was last updated
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The exclusion status of the recommendation
   *
   * @public
   */
  exclusionStatus: ExclusionStatus | undefined;

  /**
   * Metadata associated with the recommendation
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * The Pillars that the Recommendation is optimizing
   *
   * @public
   */
  pillars: RecommendationPillar[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsForResourceResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of Trusted Advisor recommendations associated with the given AWS resource
   *
   * @public
   */
  recommendationForResourceSummaries: RecommendationForResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationRecommendationLifecycleRequest {
  /**
   * The new lifecycle stage
   *
   * @public
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * Reason for the lifecycle stage change
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * Reason code for the lifecycle state change
   *
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * The Recommendation identifier for AWS Trusted Advisor Priority recommendations
   *
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommendationLifecycleRequest {
  /**
   * The new lifecycle stage
   *
   * @public
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * Reason for the lifecycle stage change
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * Reason code for the lifecycle state change
   *
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode | undefined;

  /**
   * The Recommendation identifier for AWS Trusted Advisor Priority recommendations
   *
   * @public
   */
  recommendationIdentifier: string | undefined;
}
