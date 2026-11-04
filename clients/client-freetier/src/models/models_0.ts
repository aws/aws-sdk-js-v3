// smithy-typescript generated code
import type {
  AccountPlanStatus,
  AccountPlanType,
  ActivityStatus,
  CurrencyCode,
  Dimension,
  LanguageCode,
  MatchOption,
} from "./enums";

/**
 * The monetary amount of the credit.
 *
 * @public
 */
export interface MonetaryAmount {
  /**
   * The aggregated monetary amount of credits earned.
   *
   * @public
   */
  amount: number | undefined;

  /**
   * The unit that the monetary amount is given in.
   *
   * @public
   */
  unit: CurrencyCode | undefined;
}

/**
 * The summary of the rewards granted as a result of activities completed.
 *
 * @public
 */
export type ActivityReward =
  | ActivityReward.CreditMember
  | ActivityReward.$UnknownMember;

/**
 * @public
 */
export namespace ActivityReward {
  /**
   * The credits gained by activity rewards.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    credit: (value: MonetaryAmount) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The summary of activities.
 *
 * @public
 */
export interface ActivitySummary {
  /**
   * A unique identifier that identifies the activity.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The title of the activity.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The reward for the activity.
   *
   * @public
   */
  reward: ActivityReward | undefined;

  /**
   * The current status of the activity.
   *
   * @public
   */
  status: ActivityStatus | undefined;
}

/**
 * @public
 */
export interface GetAccountActivityRequest {
  /**
   * A unique identifier that identifies the activity.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * The language code used to return translated title and description fields.
   *
   * @public
   */
  languageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface GetAccountActivityResponse {
  /**
   * A unique identifier that identifies the activity.
   *
   * @public
   */
  activityId: string | undefined;

  /**
   * A short activity title.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Provides detailed information about the activity and its expected outcomes.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The current activity status.
   *
   * @public
   */
  status: ActivityStatus | undefined;

  /**
   * The URL resource that provides guidance on activity requirements and completion.
   *
   * @public
   */
  instructionsUrl: string | undefined;

  /**
   * A reward granted upon activity completion.
   *
   * @public
   */
  reward: ActivityReward | undefined;

  /**
   * The estimated time to complete the activity. This is the duration in minutes.
   *
   * @public
   */
  estimatedTimeToCompleteInMinutes?: number | undefined;

  /**
   * The time by which the activity must be completed to receive a reward.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The timestamp when the activity started. This field appears only for activities in the `IN_PROGRESS` or `COMPLETED` states.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp when the activity is completed. This field appears only for activities in the `COMPLETED` state.
   *
   * @public
   */
  completedAt?: Date | undefined;
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
   * A unique identifier that identifies the account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The plan type for the account.
   *
   * @public
   */
  accountPlanType: AccountPlanType | undefined;

  /**
   * The current status for the account plan.
   *
   * @public
   */
  accountPlanStatus: AccountPlanStatus | undefined;

  /**
   * The amount of credits remaining for the account.
   *
   * @public
   */
  accountPlanRemainingCredits?: MonetaryAmount | undefined;

  /**
   * The timestamp for when the current account plan expires.
   *
   * @public
   */
  accountPlanExpirationDate?: Date | undefined;
}

/**
 * Contains the specifications for the filters to use for your request.
 *
 * @public
 */
export interface DimensionValues {
  /**
   * The name of the dimension that you want to filter on.
   *
   * @public
   */
  Key: Dimension | undefined;

  /**
   * The metadata values you can specify to filter upon, so that the results all match at least one of the specified values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The match options that you can use to filter your results. You can specify only one of these values in the array.
   *
   * @public
   */
  MatchOptions: MatchOption[] | undefined;
}

/**
 * Consists of a Amazon Web Services Free Tier offer’s metadata and your data usage for the offer.
 *
 * @public
 */
export interface FreeTierUsage {
  /**
   * The name of the Amazon Web Services service providing the Free Tier offer. For example, this can be Amazon Elastic Compute Cloud.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * Describes `usageType` more granularly with the specific Amazon Web Services service API operation. For example, this can be the `RunInstances` API operation for Amazon Elastic Compute Cloud.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * Describes the usage details of the offer. For example, this might be `Global-BoxUsage:freetrial`.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * Describes the Amazon Web Services Region for which this offer is applicable
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Describes the actual usage accrued month-to-day (MTD) that you've used so far.
   *
   * @public
   */
  actualUsageAmount?: number | undefined;

  /**
   * Describes the forecasted usage by the month that you're expected to use.
   *
   * @public
   */
  forecastedUsageAmount?: number | undefined;

  /**
   * Describes the maximum usage allowed in Free Tier.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * Describes the unit of the `usageType`, such as `Hrs`.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The description of the Free Tier offer.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes the type of the Free Tier offer. For example, the offer can be `"12 Months Free"`, `"Always Free"`, and `"Free Trial"`.
   *
   * @public
   */
  freeTierType?: string | undefined;
}

/**
 * @public
 */
export interface GetFreeTierUsageResponse {
  /**
   * The list of Free Tier usage objects that meet your filter expression.
   *
   * @public
   */
  freeTierUsages: FreeTierUsage[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountActivitiesRequest {
  /**
   * The activity status filter. This field can be used to filter the response by activities status.
   *
   * @public
   */
  filterActivityStatuses?: ActivityStatus[] | undefined;

  /**
   * A token from a previous paginated response. If this is specified, the response includes records beginning from this token (inclusive), up to the number specified by `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The language code used to return translated titles.
   *
   * @public
   */
  languageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface ListAccountActivitiesResponse {
  /**
   * A brief information about the activities.
   *
   * @public
   */
  activities: ActivitySummary[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeAccountPlanRequest {
  /**
   * The target account plan type. This makes it explicit about the change and latest value of the `accountPlanType`.
   *
   * @public
   */
  accountPlanType: AccountPlanType | undefined;
}

/**
 * @public
 */
export interface UpgradeAccountPlanResponse {
  /**
   * A unique identifier that identifies the account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The type of plan for the account.
   *
   * @public
   */
  accountPlanType: AccountPlanType | undefined;

  /**
   * This indicates the latest state of the account plan within its lifecycle.
   *
   * @public
   */
  accountPlanStatus: AccountPlanStatus | undefined;
}

/**
 * Use `Expression` to filter in the `GetFreeTierUsage` API operation.
 *
 * You can use the following patterns:
 *
 * - Simple dimension values (`Dimensions` root operator)
 * - Complex expressions with logical operators (`AND`, `NOT`, and `OR` root operators).
 *
 * For *simple dimension values*, you can set the dimension name, values, and match type for the filters that you plan to use.
 *
 * **Example for simple dimension values**
 *
 * You can filter to match exactly for `REGION==us-east-1 OR REGION==us-west-1`.
 *
 * The corresponding `Expression` appears like the following: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ], "MatchOptions": ["EQUALS"] \} \}`
 *
 * As shown in the previous example, lists of dimension values are combined with `OR` when you apply the filter.
 *
 * For *complex expressions with logical operators*, you can have nested expressions to use the logical operators and specify advanced filtering.
 *
 * **Example for complex expressions with logical operators**
 *
 * You can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (SERVICE CONTAINS AWSLambda)) AND (USAGE_TYPE !CONTAINS DataTransfer)`.
 *
 * The corresponding `Expression` appears like the following: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ], "MatchOptions": ["EQUALS"] \}\}, \{"Dimensions": \{ "Key": "SERVICE", "Values": ["AWSLambda"], "MatchOptions": ["CONTAINS"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"], "MatchOptions": ["CONTAINS"] \}\}\} ] \}`
 *
 * In the following **Contents**, you must specify exactly one of the following root operators.
 *
 * @public
 */
export interface Expression {
  /**
   * Return results that match any of the `Expressions` that you specified. in the array.
   *
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * Return results that match all `Expressions` that you specified in the array.
   *
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * Return results that don’t match the `Expression` that you specified.
   *
   * @public
   */
  Not?: Expression | undefined;

  /**
   * The specific dimension, values, and match type to filter objects with.
   *
   * @public
   */
  Dimensions?: DimensionValues | undefined;
}

/**
 * @public
 */
export interface GetFreeTierUsageRequest {
  /**
   * An expression that specifies the conditions that you want each `FreeTierUsage` object to meet.
   *
   * @public
   */
  filter?: Expression | undefined;

  /**
   * The maximum number of results to return in the response. `MaxResults` means that there can be up to the specified number of values, but there might be fewer results based on your filters.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}
