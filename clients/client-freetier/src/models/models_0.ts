// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FreeTierServiceException as __BaseException } from "./FreeTierServiceException";

/**
 * <p> You don't have sufficient access to perform this action. </p>
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
export const AccountPlanStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type AccountPlanStatus = (typeof AccountPlanStatus)[keyof typeof AccountPlanStatus];

/**
 * @public
 * @enum
 */
export const AccountPlanType = {
  FREE: "FREE",
  PAID: "PAID",
} as const;

/**
 * @public
 */
export type AccountPlanType = (typeof AccountPlanType)[keyof typeof AccountPlanType];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * <p> The monetary amount of the credit. </p>
 * @public
 */
export interface MonetaryAmount {
  /**
   * <p> The aggregated monetary amount of credits earned. </p>
   * @public
   */
  amount: number | undefined;

  /**
   * <p> The unit that the monetary amount is given in. </p>
   * @public
   */
  unit: CurrencyCode | undefined;
}

/**
 * <p> The summary of the rewards granted as a result of activities completed. </p>
 * @public
 */
export type ActivityReward = ActivityReward.CreditMember | ActivityReward.$UnknownMember;

/**
 * @public
 */
export namespace ActivityReward {
  /**
   * <p> The credits gained by activity rewards. </p>
   * @public
   */
  export interface CreditMember {
    credit: MonetaryAmount;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    credit?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    credit: (value: MonetaryAmount) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ActivityReward, visitor: Visitor<T>): T => {
    if (value.credit !== undefined) return visitor.credit(value.credit);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ActivityStatus = {
  COMPLETED: "COMPLETED",
  EXPIRING: "EXPIRING",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus];

/**
 * <p> The summary of activities. </p>
 * @public
 */
export interface ActivitySummary {
  /**
   * <p> A unique identifier that identifies the activity. </p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p> The title of the activity. </p>
   * @public
   */
  title: string | undefined;

  /**
   * <p> The reward for the activity. </p>
   * @public
   */
  reward: ActivityReward | undefined;

  /**
   * <p> The current status of the activity. </p>
   * @public
   */
  status: ActivityStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  DE_DE: "de-DE",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_ES: "es-ES",
  FR_FR: "fr-FR",
  ID_ID: "id-ID",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_PT: "pt-PT",
  TR_TR: "tr-TR",
  ZH_CN: "zh-CN",
  ZH_TW: "zh-TW",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 */
export interface GetAccountActivityRequest {
  /**
   * <p> A unique identifier that identifies the activity. </p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p> The language code used to return translated title and description fields. </p>
   * @public
   */
  languageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface GetAccountActivityResponse {
  /**
   * <p> A unique identifier that identifies the activity. </p>
   * @public
   */
  activityId: string | undefined;

  /**
   * <p> A short activity title. </p>
   * @public
   */
  title: string | undefined;

  /**
   * <p> Provides detailed information about the activity and its expected outcomes. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The current activity status. </p>
   * @public
   */
  status: ActivityStatus | undefined;

  /**
   * <p> The URL resource that provides guidance on activity requirements and completion. </p>
   * @public
   */
  instructionsUrl: string | undefined;

  /**
   * <p> A reward granted upon activity completion. </p>
   * @public
   */
  reward: ActivityReward | undefined;

  /**
   * <p> The estimated time to complete the activity. This is the duration in minutes. </p>
   * @public
   */
  estimatedTimeToCompleteInMinutes?: number | undefined;

  /**
   * <p> The time by which the activity must be completed to receive a reward. </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p> The timestamp when the activity started. This field appears only for activities in the <code>IN_PROGRESS</code> or <code>COMPLETED</code> states. </p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p> The timestamp when the activity is completed. This field appears only for activities in the <code>COMPLETED</code> state. </p>
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * <p>An unexpected error occurred during the processing of your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p> This exception is thrown when the requested resource cannot be found. </p>
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
export interface GetAccountPlanStateRequest {}

/**
 * @public
 */
export interface GetAccountPlanStateResponse {
  /**
   * <p> A unique identifier that identifies the account. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p> The plan type for the account. </p>
   * @public
   */
  accountPlanType: AccountPlanType | undefined;

  /**
   * <p> The current status for the account plan. </p>
   * @public
   */
  accountPlanStatus: AccountPlanStatus | undefined;

  /**
   * <p> The amount of credits remaining for the account. </p>
   * @public
   */
  accountPlanRemainingCredits?: MonetaryAmount | undefined;

  /**
   * <p> The timestamp for when the current account plan expires. </p>
   * @public
   */
  accountPlanExpirationDate?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const Dimension = {
  DESCRIPTION: "DESCRIPTION",
  FREE_TIER_TYPE: "FREE_TIER_TYPE",
  OPERATION: "OPERATION",
  REGION: "REGION",
  SERVICE: "SERVICE",
  USAGE_PERCENTAGE: "USAGE_PERCENTAGE",
  USAGE_TYPE: "USAGE_TYPE",
} as const;

/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * <p>Contains the specifications for the filters to use for your request.</p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p>The name of the dimension that you want to filter on.</p>
   * @public
   */
  Key: Dimension | undefined;

  /**
   * <p>The metadata values you can specify to filter upon, so that the results all match at least one of the specified values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. You can specify only one of these values in the array.</p>
   * @public
   */
  MatchOptions: MatchOption[] | undefined;
}

/**
 * <p>Consists of a Amazon Web Services Free Tier offer’s metadata and your data usage for the offer.</p>
 * @public
 */
export interface FreeTierUsage {
  /**
   * <p>The name of the Amazon Web Services service providing the Free Tier offer. For example, this can be Amazon Elastic Compute Cloud.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>Describes <code>usageType</code> more granularly with the specific Amazon Web Services service API operation. For example, this can be the <code>RunInstances</code> API operation for Amazon Elastic Compute Cloud.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>Describes the usage details of the offer. For example, this might be <code>Global-BoxUsage:freetrial</code>.</p>
   * @public
   */
  usageType?: string | undefined;

  /**
   * <p>Describes the Amazon Web Services Region for which this offer is applicable</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Describes the actual usage accrued month-to-day (MTD) that you've used so far.</p>
   * @public
   */
  actualUsageAmount?: number | undefined;

  /**
   * <p>Describes the forecasted usage by the month that you're expected to use.</p>
   * @public
   */
  forecastedUsageAmount?: number | undefined;

  /**
   * <p>Describes the maximum usage allowed in Free Tier.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Describes the unit of the <code>usageType</code>, such as <code>Hrs</code>.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The description of the Free Tier offer.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes the type of the Free Tier offer. For example, the offer can be <code>"12 Months Free"</code>, <code>"Always Free"</code>, and <code>"Free Trial"</code>.</p>
   * @public
   */
  freeTierType?: string | undefined;
}

/**
 * @public
 */
export interface GetFreeTierUsageResponse {
  /**
   * <p>The list of Free Tier usage objects that meet your filter expression.</p>
   * @public
   */
  freeTierUsages: FreeTierUsage[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountActivitiesRequest {
  /**
   * <p> The activity status filter. This field can be used to filter the response by activities status. </p>
   * @public
   */
  filterActivityStatuses?: ActivityStatus[] | undefined;

  /**
   * <p> A token from a previous paginated response. If this is specified, the response includes records beginning from this token (inclusive), up to the number specified by <code>maxResults</code>. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The language code used to return translated titles. </p>
   * @public
   */
  languageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface ListAccountActivitiesResponse {
  /**
   * <p> A brief information about the activities. </p>
   * @public
   */
  activities: ActivitySummary[] | undefined;

  /**
   * <p> The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeAccountPlanRequest {
  /**
   * <p> The target account plan type. This makes it explicit about the change and latest value of the <code>accountPlanType</code>. </p>
   * @public
   */
  accountPlanType: AccountPlanType | undefined;
}

/**
 * @public
 */
export interface UpgradeAccountPlanResponse {
  /**
   * <p> A unique identifier that identifies the account. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p> The type of plan for the account. </p>
   * @public
   */
  accountPlanType: AccountPlanType | undefined;

  /**
   * <p> This indicates the latest state of the account plan within its lifecycle. </p>
   * @public
   */
  accountPlanStatus: AccountPlanStatus | undefined;
}

/**
 * <p>Use <code>Expression</code> to filter in the <code>GetFreeTierUsage</code> API operation.</p> <p>You can use the following patterns:</p> <ul> <li> <p>Simple dimension values (<code>Dimensions</code> root operator)</p> </li> <li> <p>Complex expressions with logical operators (<code>AND</code>, <code>NOT</code>, and <code>OR</code> root operators).</p> </li> </ul> <p>For <i>simple dimension values</i>, you can set the dimension name, values, and match type for the filters that you plan to use.</p> <p> <b>Example for simple dimension values</b> </p> <p>You can filter to match exactly for <code>REGION==us-east-1 OR REGION==us-west-1</code>.</p> <p>The corresponding <code>Expression</code> appears like the following: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ], "MatchOptions": ["EQUALS"] \} \}</code> </p> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when you apply the filter.</p> <p>For <i>complex expressions with logical operators</i>, you can have nested expressions to use the logical operators and specify advanced filtering.</p> <p> <b>Example for complex expressions with logical operators</b> </p> <p>You can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (SERVICE CONTAINS AWSLambda)) AND (USAGE_TYPE !CONTAINS DataTransfer)</code>.</p> <p>The corresponding <code>Expression</code> appears like the following: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ], "MatchOptions": ["EQUALS"] \}\}, \{"Dimensions": \{ "Key": "SERVICE", "Values": ["AWSLambda"], "MatchOptions": ["CONTAINS"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"], "MatchOptions": ["CONTAINS"] \}\}\} ] \}</code> </p> <p>In the following <b>Contents</b>, you must specify exactly one of the following root operators.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>Return results that match any of the <code>Expressions</code> that you specified. in the array.</p>
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * <p>Return results that match all <code>Expressions</code> that you specified in the array.</p>
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * <p>Return results that don’t match the <code>Expression</code> that you specified.</p>
   * @public
   */
  Not?: Expression | undefined;

  /**
   * <p>The specific dimension, values, and match type to filter objects with.</p>
   * @public
   */
  Dimensions?: DimensionValues | undefined;
}

/**
 * @public
 */
export interface GetFreeTierUsageRequest {
  /**
   * <p>An expression that specifies the conditions that you want each <code>FreeTierUsage</code> object to meet.</p>
   * @public
   */
  filter?: Expression | undefined;

  /**
   * <p>The maximum number of results to return in the response. <code>MaxResults</code> means that there can be up to the specified number of values, but there might be fewer results based on your filters.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}
