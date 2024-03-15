// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TrustedAdvisorServiceException as __BaseException } from "./TrustedAdvisorServiceException";

/**
 * <p>Exception that access has been denied due to insufficient access</p>
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
 * <p>Summary of an AccountRecommendationLifecycle for an Organization Recommendation</p>
 * @public
 */
export interface AccountRecommendationLifecycleSummary {
  /**
   * <p>The AWS account ID</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The Recommendation ARN</p>
   * @public
   */
  accountRecommendationArn?: string;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
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
 * <p>Exception that the request was denied due to conflictions in state</p>
 * @public
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
  costOptimizing?: RecommendationCostOptimizingAggregates;
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
  checkArn?: string;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage;

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
  awsServices?: string[];

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
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date;

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
  createdBy?: string;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * <p>When the Recommendation was resolved</p>
   * @public
   */
  resolvedAt?: Date;
}

/**
 * @public
 */
export interface GetOrganizationRecommendationResponse {
  /**
   * <p>The Recommendation</p>
   * @public
   */
  organizationRecommendation?: OrganizationRecommendation;
}

/**
 * <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 * @public
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
 * <p>Exception that the requested resource has not been found</p>
 * @public
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
 * <p>Exception to notify that requests are being throttled</p>
 * @public
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
 * <p>Exception that the request failed to satisfy service constraints</p>
 * @public
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
  checkArn?: string;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage;

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
  awsServices?: string[];

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
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date;

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
  createdBy?: string;

  /**
   * <p>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information
   *             is only available when a Technical Account Manager takes an action on a recommendation managed by AWS
   *             Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOf?: string;

  /**
   * <p>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation.
   *             This information is only available when a Technical Account Manager takes an action on a recommendation
   *             managed by AWS Trusted Advisor Priority
   *         </p>
   * @public
   */
  updatedOnBehalfOfJobTitle?: string;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * <p>When the Recommendation was resolved</p>
   * @public
   */
  resolvedAt?: Date;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The Recommendation</p>
   * @public
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pillar of the check</p>
   * @public
   */
  pillar?: RecommendationPillar;

  /**
   * <p>The aws service associated with the check</p>
   * @public
   */
  awsService?: string;

  /**
   * <p>The source of the check</p>
   * @public
   */
  source?: RecommendationSource;

  /**
   * <p>The ISO 639-1 code for the language that you want your checks to appear in.</p>
   * @public
   */
  language?: RecommendationLanguage;
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
  nextToken?: string;

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
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The Recommendation identifier</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * <p>An account affected by this organization recommendation</p>
   * @public
   */
  affectedAccountId?: string;
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
  nextToken?: string;

  /**
   * <p>The account recommendations lifecycles that are applicable to the Recommendation</p>
   * @public
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The status of the resource</p>
   * @public
   */
  status?: ResourceStatus;

  /**
   * <p>The AWS Region code of the resource</p>
   * @public
   */
  regionCode?: string;

  /**
   * <p>The AWS Organization organization's Recommendation identifier</p>
   * @public
   */
  organizationRecommendationIdentifier: string | undefined;

  /**
   * <p>An account affected by this organization recommendation</p>
   * @public
   */
  affectedAccountId?: string;
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
   * <p>The AWS account ID</p>
   * @public
   */
  accountId?: string;

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
  nextToken?: string;

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
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The type of the Recommendation</p>
   * @public
   */
  type?: RecommendationType;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status?: RecommendationStatus;

  /**
   * <p>The pillar of the Recommendation</p>
   * @public
   */
  pillar?: RecommendationPillar;

  /**
   * <p>The aws service associated with the Recommendation</p>
   * @public
   */
  awsService?: string;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source?: RecommendationSource;

  /**
   * <p>The check identifier of the Recommendation</p>
   * @public
   */
  checkIdentifier?: string;

  /**
   * <p>After the last update of the Recommendation</p>
   * @public
   */
  afterLastUpdatedAt?: Date;

  /**
   * <p>Before the last update of the Recommendation</p>
   * @public
   */
  beforeLastUpdatedAt?: Date;
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
  checkArn?: string;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage;

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
  awsServices?: string[];

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
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date;

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
  nextToken?: string;

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
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The status of the resource</p>
   * @public
   */
  status?: ResourceStatus;

  /**
   * <p>The AWS Region code of the resource</p>
   * @public
   */
  regionCode?: string;

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
  nextToken?: string;

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
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The type of the Recommendation</p>
   * @public
   */
  type?: RecommendationType;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status?: RecommendationStatus;

  /**
   * <p>The pillar of the Recommendation</p>
   * @public
   */
  pillar?: RecommendationPillar;

  /**
   * <p>The aws service associated with the Recommendation</p>
   * @public
   */
  awsService?: string;

  /**
   * <p>The source of the Recommendation</p>
   * @public
   */
  source?: RecommendationSource;

  /**
   * <p>The check identifier of the Recommendation</p>
   * @public
   */
  checkIdentifier?: string;

  /**
   * <p>After the last update of the Recommendation</p>
   * @public
   */
  afterLastUpdatedAt?: Date;

  /**
   * <p>Before the last update of the Recommendation</p>
   * @public
   */
  beforeLastUpdatedAt?: Date;
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
  checkArn?: string;

  /**
   * <p>The status of the Recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The lifecycle stage from AWS Trusted Advisor Priority</p>
   * @public
   */
  lifecycleStage?: RecommendationLifecycleStage;

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
  awsServices?: string[];

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
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;

  /**
   * <p>When the Recommendation was created, if created by AWS Trusted Advisor Priority</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>When the Recommendation was last updated</p>
   * @public
   */
  lastUpdatedAt?: Date;

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
  nextToken?: string;

  /**
   * <p>The list of Recommendations</p>
   * @public
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
   * <p>The new lifecycle stage</p>
   * @public
   */
  lifecycleStage: UpdateRecommendationLifecycleStage | undefined;

  /**
   * <p>Reason for the lifecycle stage change</p>
   * @public
   */
  updateReason?: string;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

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
  updateReason?: string;

  /**
   * <p>Reason code for the lifecycle state change</p>
   * @public
   */
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;

  /**
   * <p>The Recommendation identifier for AWS Trusted Advisor Priority recommendations</p>
   * @public
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
