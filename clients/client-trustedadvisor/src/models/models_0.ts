// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TrustedAdvisorServiceException as __BaseException } from "./TrustedAdvisorServiceException";

/**
 * @public
 * <p>Exception that access has been denied due to insufficient access</p>
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
 * @public
 * @enum
 */
export const RecommendationLifecycleStage = {
  DISMISSED: "dismissed",
  IN_PROGRESS: "in_progress",
  PENDING_RESPONSE: "pending_response",
  RESOLVED: "resolved",
} as const;

/**
 * @public
 */
export type RecommendationLifecycleStage =
  (typeof RecommendationLifecycleStage)[keyof typeof RecommendationLifecycleStage];

/**
 * @public
 * @enum
 */
export const UpdateRecommendationLifecycleStageReasonCode = {
  LOW_PRIORITY: "low_priority",
  NON_CRITICAL_ACCOUNT: "non_critical_account",
  NOT_APPLICABLE: "not_applicable",
  OTHER: "other",
  OTHER_METHODS_AVAILABLE: "other_methods_available",
  TEMPORARY_ACCOUNT: "temporary_account",
  VALID_BUSINESS_CASE: "valid_business_case",
} as const;

/**
 * @public
 */
export type UpdateRecommendationLifecycleStageReasonCode =
  (typeof UpdateRecommendationLifecycleStageReasonCode)[keyof typeof UpdateRecommendationLifecycleStageReasonCode];

/**
 * @public
 * <p>Summary of an AccountRecommendationLifecycle for an Organization Recommendation</p>
 */
export interface AccountRecommendationLifecycleSummary {
  /**
   * @public
   * <p>The AWS account ID</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The Recommendation ARN</p>
   */
  accountRecommendationArn?: string;

  /**
   * @public
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * @public
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOf?: string;

  /**
   * @public
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * @public
   * <p>Reason for the lifecycle stage change</p>
   */
  updateReason?: string;

  /**
   * @public
   * <p>Reason code for the lifecycle state change</p>
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * @public
   * <p>When the Recommendation was last updated</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const RecommendationPillar = {
  COST_OPTIMIZING: "cost_optimizing",
  FAULT_TOLERANCE: "fault_tolerance",
  OPERATIONAL_EXCELLENCE: "operational_excellence",
  PERFORMANCE: "performance",
  SECURITY: "security",
  SERVICE_LIMITS: "service_limits",
} as const;

/**
 * @public
 */
export type RecommendationPillar = (typeof RecommendationPillar)[keyof typeof RecommendationPillar];

/**
 * @public
 * @enum
 */
export const RecommendationSource = {
  AWS_CONFIG: "aws_config",
  COMPUTE_OPTIMIZER: "compute_optimizer",
  COST_EXPLORER: "cost_explorer",
  LSE: "lse",
  MANUAL: "manual",
  PSE: "pse",
  RDS: "rds",
  RESILIENCE: "resilience",
  RESILIENCE_HUB: "resilience_hub",
  SECURITY_HUB: "security_hub",
  STIR: "stir",
  TA_CHECK: "ta_check",
  WELL_ARCHITECTED: "well_architected",
} as const;

/**
 * @public
 */
export type RecommendationSource = (typeof RecommendationSource)[keyof typeof RecommendationSource];

/**
 * @public
 * <p>A summary of an AWS Trusted Advisor Check</p>
 */
export interface CheckSummary {
  /**
   * @public
   * <p>The unique identifier of the AWS Trusted Advisor Check</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the AWS Trusted Advisor Check</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the AWS Trusted Advisor Check</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of what the AWS Trusted Advisor Check is monitoring</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The Recommendation pillars that the AWS Trusted Advisor Check falls under</p>
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * @public
   * <p>The AWS Services that the Check applies to</p>
   */
  awsServices: string[] | undefined;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source: RecommendationSource | undefined;

  /**
   * @public
   * <p>The column headings for the metadata returned in the resource</p>
   */
  metadata: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Exception that the request was denied due to conflictions in state</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface GetOrganizationRecommendationRequest {
  /**
   * @public
   * <p>The Recommendation identifier</p>
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * @public
 * <p>Cost optimizing aggregates for a Recommendation</p>
 */
export interface RecommendationCostOptimizingAggregates {
  /**
   * @public
   * <p>The estimated monthly savings</p>
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * @public
   * <p>The estimated percently monthly savings</p>
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * @public
 * <p>Recommendation pillar aggregates</p>
 */
export interface RecommendationPillarSpecificAggregates {
  /**
   * @public
   * <p>Cost optimizing aggregates</p>
   */
  costOptimizing?: RecommendationCostOptimizingAggregates;
}

/**
 * @public
 * <p>Aggregation of Recommendation Resources</p>
 */
export interface RecommendationResourcesAggregates {
  /**
   * @public
   * <p>The number of AWS resources that were flagged to be OK according to the Trusted Advisor check</p>
   */
  okCount: number | undefined;

  /**
   * @public
   * <p>The number of AWS resources that were flagged to have warning according to the Trusted Advisor check
   *         </p>
   */
  warningCount: number | undefined;

  /**
   * @public
   * <p>The number of AWS resources that were flagged to have errors according to the Trusted Advisor check</p>
   */
  errorCount: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  ERROR: "error",
  OK: "ok",
  WARNING: "warning",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  PRIORITY: "priority",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * <p>A Recommendation for accounts within an Organization</p>
 */
export interface OrganizationRecommendation {
  /**
   * @public
   * <p>The ID which identifies where the Recommendation was produced</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   */
  type: RecommendationType | undefined;

  /**
   * @public
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   */
  checkArn?: string;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status: RecommendationStatus | undefined;

  /**
   * @public
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * @public
   * <p>The Pillars that the Recommendation is optimizing</p>
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source: RecommendationSource | undefined;

  /**
   * @public
   * <p>The AWS Services that the Recommendation applies to</p>
   */
  awsServices?: string[];

  /**
   * @public
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An aggregation of all resources</p>
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * @public
   * <p>The pillar aggregations for cost savings</p>
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * @public
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the Recommendation was last updated</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The ARN of the Recommendation</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A description for AWS Trusted Advisor recommendations</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The creator, if created by AWS Trusted Advisor Priority</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOf?: string;

  /**
   * @public
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * @public
   * <p>Reason for the lifecycle stage change</p>
   */
  updateReason?: string;

  /**
   * @public
   * <p>Reason code for the lifecycle state change</p>
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * @public
   * <p>When the Recommendation was resolved</p>
   */
  resolvedAt?: Date;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationResponse {
  /**
   * @public
   * <p>The Recommendation</p>
   */
  organizationRecommendation?: OrganizationRecommendation;
}

/**
 * @public
 * <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * @public
 * <p>Exception that the requested resource has not been found</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>Exception to notify that requests are being throttled</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * @public
 * <p>Exception that the request failed to satisfy service constraints</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * @public
   * <p>The Recommendation identifier</p>
   */
  recommendationIdentifier: string | undefined;
}

/**
 * @public
 * <p>A Recommendation for an Account</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The ID which identifies where the Recommendation was produced</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   */
  type: RecommendationType | undefined;

  /**
   * @public
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   */
  checkArn?: string;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status: RecommendationStatus | undefined;

  /**
   * @public
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * @public
   * <p>The Pillars that the Recommendation is optimizing</p>
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source: RecommendationSource | undefined;

  /**
   * @public
   * <p>The AWS Services that the Recommendation applies to</p>
   */
  awsServices?: string[];

  /**
   * @public
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An aggregation of all resources</p>
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * @public
   * <p>The pillar aggregations for cost savings</p>
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * @public
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the Recommendation was last updated</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The ARN of the Recommendation</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A description for AWS Trusted Advisor recommendations</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The creator, if created by AWS Trusted Advisor Priority</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOf?: string;

  /**
   * @public
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * @public
   * <p>Reason for the lifecycle stage change</p>
   */
  updateReason?: string;

  /**
   * @public
   * <p>Reason code for the lifecycle state change</p>
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * @public
   * <p>When the Recommendation was resolved</p>
   */
  resolvedAt?: Date;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * @public
   * <p>The Recommendation</p>
   */
  recommendation?: Recommendation;
}

/**
 * @public
 * @enum
 */
export const RecommendationLanguage = {
  BAHASA_INDONESIA: "id",
  BRAZILIAN_PORTUGUESE: "pt_BR",
  CHINESE: "zh",
  ENGLISH: "en",
  FRENCH: "fr",
  GERMAN: "de",
  ITALIAN: "it",
  JAPANESE: "ja",
  KOREAN: "ko",
  SPANISH: "es",
  TRADITIONAL_CHINESE: "zh_TW",
} as const;

/**
 * @public
 */
export type RecommendationLanguage = (typeof RecommendationLanguage)[keyof typeof RecommendationLanguage];

/**
 * @public
 */
export interface ListChecksRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The pillar of the check</p>
   */
  pillar?: RecommendationPillar;

  /**
   * @public
   * <p>The aws service associated with the check</p>
   */
  awsService?: string;

  /**
   * @public
   * <p>The source of the check</p>
   */
  source?: RecommendationSource;

  /**
   * @public
   * <p>The ISO 639-1 code for the language that you want your checks to appear in.</p>
   */
  language?: RecommendationLanguage;
}

/**
 * @public
 */
export interface ListChecksResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of Checks</p>
   */
  checkSummaries: CheckSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Recommendation identifier</p>
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * @public
   * <p>An account affected by this organization recommendation</p>
   */
  affectedAccountId?: string;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationAccountsResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The account recommendations lifecycles that are applicable to the Recommendation</p>
   */
  accountRecommendationLifecycleSummaries: AccountRecommendationLifecycleSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  ERROR: "error",
  OK: "ok",
  WARNING: "warning",
} as const;

/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The status of the resource</p>
   */
  status?: ResourceStatus;

  /**
   * @public
   * <p>The AWS Region code of the resource</p>
   */
  regionCode?: string;

  /**
   * @public
   * <p>The AWS Organization organization's Recommendation identifier</p>
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * @public
   * <p>An account affected by this organization recommendation</p>
   */
  affectedAccountId?: string;
}

/**
 * @public
 * <p>Organization Recommendation Resource Summary</p>
 */
export interface OrganizationRecommendationResourceSummary {
  /**
   * @public
   * <p>The ID of the Recommendation Resource</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the Recommendation Resource</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The AWS resource identifier</p>
   */
  awsResourceId: string | undefined;

  /**
   * @public
   * <p>The AWS Region code that the Recommendation Resource is in</p>
   */
  regionCode: string | undefined;

  /**
   * @public
   * <p>The current status of the Recommendation Resource</p>
   */
  status: ResourceStatus | undefined;

  /**
   * @public
   * <p>Metadata associated with the Recommendation Resource</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * @public
   * <p>When the Recommendation Resource was last updated</p>
   */
  lastUpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The AWS account ID</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The Recommendation ARN</p>
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationResourcesResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of Recommendation Resources</p>
   */
  organizationRecommendationResourceSummaries: OrganizationRecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The type of the Recommendation</p>
   */
  type?: RecommendationType;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status?: RecommendationStatus;

  /**
   * @public
   * <p>The pillar of the Recommendation</p>
   */
  pillar?: RecommendationPillar;

  /**
   * @public
   * <p>The aws service associated with the Recommendation</p>
   */
  awsService?: string;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source?: RecommendationSource;

  /**
   * @public
   * <p>The check identifier of the Recommendation</p>
   */
  checkIdentifier?: string;

  /**
   * @public
   * <p>After the last update of the Recommendation</p>
   */
  afterLastUpdatedAt?: Date;

  /**
   * @public
   * <p>Before the last update of the Recommendation</p>
   */
  beforeLastUpdatedAt?: Date;
}

/**
 * @public
 * <p>Summary of recommendation for accounts within an Organization</p>
 */
export interface OrganizationRecommendationSummary {
  /**
   * @public
   * <p>The ID which identifies where the Recommendation was produced</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   */
  type: RecommendationType | undefined;

  /**
   * @public
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   */
  checkArn?: string;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status: RecommendationStatus | undefined;

  /**
   * @public
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * @public
   * <p>The Pillars that the Recommendation is optimizing</p>
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source: RecommendationSource | undefined;

  /**
   * @public
   * <p>The AWS Services that the Recommendation applies to</p>
   */
  awsServices?: string[];

  /**
   * @public
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An aggregation of all resources</p>
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * @public
   * <p>The pillar aggregations for cost savings</p>
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * @public
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the Recommendation was last updated</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The ARN of the Recommendation</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationRecommendationsResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of Recommendations</p>
   */
  organizationRecommendationSummaries: OrganizationRecommendationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The status of the resource</p>
   */
  status?: ResourceStatus;

  /**
   * @public
   * <p>The AWS Region code of the resource</p>
   */
  regionCode?: string;

  /**
   * @public
   * <p>The Recommendation identifier</p>
   */
  recommendationIdentifier: string | undefined;
}

/**
 * @public
 * <p>Summary of a Recommendation Resource</p>
 */
export interface RecommendationResourceSummary {
  /**
   * @public
   * <p>The ID of the Recommendation Resource</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the Recommendation Resource</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The AWS resource identifier</p>
   */
  awsResourceId: string | undefined;

  /**
   * @public
   * <p>The AWS Region code that the Recommendation Resource is in</p>
   */
  regionCode: string | undefined;

  /**
   * @public
   * <p>The current status of the Recommendation Resource</p>
   */
  status: ResourceStatus | undefined;

  /**
   * @public
   * <p>Metadata associated with the Recommendation Resource</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * @public
   * <p>When the Recommendation Resource was last updated</p>
   */
  lastUpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The Recommendation ARN</p>
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationResourcesResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of Recommendation Resources</p>
   */
  recommendationResourceSummaries: RecommendationResourceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The type of the Recommendation</p>
   */
  type?: RecommendationType;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status?: RecommendationStatus;

  /**
   * @public
   * <p>The pillar of the Recommendation</p>
   */
  pillar?: RecommendationPillar;

  /**
   * @public
   * <p>The aws service associated with the Recommendation</p>
   */
  awsService?: string;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source?: RecommendationSource;

  /**
   * @public
   * <p>The check identifier of the Recommendation</p>
   */
  checkIdentifier?: string;

  /**
   * @public
   * <p>After the last update of the Recommendation</p>
   */
  afterLastUpdatedAt?: Date;

  /**
   * @public
   * <p>Before the last update of the Recommendation</p>
   */
  beforeLastUpdatedAt?: Date;
}

/**
 * @public
 * <p>Summary of Recommendation for an Account</p>
 */
export interface RecommendationSummary {
  /**
   * @public
   * <p>The ID which identifies where the Recommendation was produced</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority</p>
   */
  type: RecommendationType | undefined;

  /**
   * @public
   * <p>The AWS Trusted Advisor Check ARN that relates to the Recommendation</p>
   */
  checkArn?: string;

  /**
   * @public
   * <p>The status of the Recommendation</p>
   */
  status: RecommendationStatus | undefined;

  /**
   * @public
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * @public
   * <p>The Pillars that the Recommendation is optimizing</p>
   */
  pillars: RecommendationPillar[] | undefined;

  /**
   * @public
   * <p>The source of the Recommendation</p>
   */
  source: RecommendationSource | undefined;

  /**
   * @public
   * <p>The AWS Services that the Recommendation applies to</p>
   */
  awsServices?: string[];

  /**
   * @public
   * <p>The name of the AWS Trusted Advisor Recommendation</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An aggregation of all resources</p>
   */
  resourcesAggregates: RecommendationResourcesAggregates | undefined;

  /**
   * @public
   * <p>The pillar aggregations for cost savings</p>
   */
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * @public
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the Recommendation was last updated</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The ARN of the Recommendation</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of Recommendations</p>
   */
  recommendationSummaries: RecommendationSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateRecommendationLifecycleStage = {
  DISMISSED: "dismissed",
  IN_PROGRESS: "in_progress",
  PENDING_RESPONSE: "pending_response",
  RESOLVED: "resolved",
} as const;

/**
 * @public
 */
export type UpdateRecommendationLifecycleStage =
  (typeof UpdateRecommendationLifecycleStage)[keyof typeof UpdateRecommendationLifecycleStage];

/**
 * @public
 */
export interface UpdateOrganizationRecommendationLifecycleRequest {
  /**
   * @public
   * <p>The new lifecycle stage</p>
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * @public
   * <p>Reason for the lifecycle stage change</p>
   */
  updateReason?: string;

  /**
   * @public
   * <p>Reason code for the lifecycle state change</p>
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * @public
   * <p>The Recommendation identifier for AWS Trusted Advisor Priority recommendations</p>
   */
  organizationRecommendationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommendationLifecycleRequest {
  /**
   * @public
   * <p>The new lifecycle stage</p>
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * @public
   * <p>Reason for the lifecycle stage change</p>
   */
  updateReason?: string;

  /**
   * @public
   * <p>Reason code for the lifecycle state change</p>
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * @public
   * <p>The Recommendation identifier for AWS Trusted Advisor Priority recommendations</p>
   */
  recommendationIdentifier: string | undefined;
}

/**
 * @internal
 */
export const AccountRecommendationLifecycleSummaryFilterSensitiveLog = (
  obj: AccountRecommendationLifecycleSummary
): any => ({
  ...obj,
  ...(obj.updateReason && { updateReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrganizationRecommendationFilterSensitiveLog = (obj: OrganizationRecommendation): any => ({
  ...obj,
  ...(obj.updateReason && { updateReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOrganizationRecommendationResponseFilterSensitiveLog = (
  obj: GetOrganizationRecommendationResponse
): any => ({
  ...obj,
  ...(obj.organizationRecommendation && {
    organizationRecommendation: OrganizationRecommendationFilterSensitiveLog(obj.organizationRecommendation),
  }),
});

/**
 * @internal
 */
export const RecommendationFilterSensitiveLog = (obj: Recommendation): any => ({
  ...obj,
  ...(obj.updateReason && { updateReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRecommendationResponseFilterSensitiveLog = (obj: GetRecommendationResponse): any => ({
  ...obj,
  ...(obj.recommendation && { recommendation: RecommendationFilterSensitiveLog(obj.recommendation) }),
});

/**
 * @internal
 */
export const ListOrganizationRecommendationAccountsResponseFilterSensitiveLog = (
  obj: ListOrganizationRecommendationAccountsResponse
): any => ({
  ...obj,
  ...(obj.accountRecommendationLifecycleSummaries && {
    accountRecommendationLifecycleSummaries: obj.accountRecommendationLifecycleSummaries.map((item) =>
      AccountRecommendationLifecycleSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateOrganizationRecommendationLifecycleRequestFilterSensitiveLog = (
  obj: UpdateOrganizationRecommendationLifecycleRequest
): any => ({
  ...obj,
  ...(obj.updateReason && { updateReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateRecommendationLifecycleRequestFilterSensitiveLog = (
  obj: UpdateRecommendationLifecycleRequest
): any => ({
  ...obj,
  ...(obj.updateReason && { updateReason: SENSITIVE_STRING }),
});
