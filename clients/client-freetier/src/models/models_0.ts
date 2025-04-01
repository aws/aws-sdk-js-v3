// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FreeTierServiceException as __BaseException } from "./FreeTierServiceException";

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
   * <p>The metadata values you can specify to filter upon, so that the results all match at least
   *       one of the specified values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. You can specify only one of
   *       these values in the array.</p>
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
   * <p>The name of the Amazon Web Service providing the Free Tier offer. For example, this can be
   *       Amazon Elastic Compute Cloud.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>Describes <code>usageType</code> more granularly with the specific Amazon Web Service API
   *       operation. For example, this can be the <code>RunInstances</code> API operation for
   *       Amazon Elastic Compute Cloud.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>Describes the usage details of the offer. For example, this might be
   *         <code>Global-BoxUsage:freetrial</code>.</p>
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
   * <p>Describes the type of the Free Tier offer. For example, the offer can be <code>"12 Months
   *         Free"</code>,  <code>"Always Free"</code>, and <code>"Free Trial"</code>.</p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Service.</p>
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
 * <p>Use <code>Expression</code> to filter in the <code>GetFreeTierUsage</code> API operation.</p>
 *          <p>You can use the following patterns:</p>
 *          <ul>
 *             <li>
 *                <p>Simple dimension values (<code>Dimensions</code> root operator)</p>
 *             </li>
 *             <li>
 *                <p>Complex expressions with logical operators (<code>AND</code>, <code>NOT</code>, and
 *             <code>OR</code> root operators).</p>
 *             </li>
 *          </ul>
 *          <p>For <i>simple dimension values</i>, you can set the dimension name, values,
 *       and match type for the filters that you plan to use.</p>
 *          <p>
 *             <b>Example for simple dimension values</b>
 *          </p>
 *          <p>You can filter to match exactly for <code>REGION==us-east-1 OR
 *       REGION==us-west-1</code>.</p>
 *          <p>The corresponding <code>Expression</code> appears like the following: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ], "MatchOptions": ["EQUALS"] \} \}</code>
 *          </p>
 *          <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when
 *       you apply the filter.</p>
 *          <p>For <i>complex expressions with logical operators</i>, you can have nested
 *       expressions to use the logical operators and specify advanced filtering.</p>
 *          <p>
 *             <b>Example for complex expressions with logical operators</b>
 *          </p>
 *          <p>You can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (SERVICE CONTAINS
 *         AWSLambda)) AND (USAGE_TYPE !CONTAINS DataTransfer)</code>.</p>
 *          <p>The corresponding <code>Expression</code> appears like the following: <code>\{ "And": [
 *           \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ],
 *           "MatchOptions": ["EQUALS"] \}\}, \{"Dimensions": \{ "Key": "SERVICE", "Values": ["AWSLambda"], "MatchOptions": ["CONTAINS"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"], "MatchOptions": ["CONTAINS"] \}\}\} ] \}</code>
 *          </p>
 *          <p>In the following <b>Contents</b>, you must specify exactly one of the
 *       following root operators.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>Return results that match any of the <code>Expressions</code>  that you specified. in the
   *       array.</p>
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * <p>Return results that match all <code>Expressions</code>  that you specified in the
   *       array.</p>
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
   * <p>An expression that specifies the conditions that you want each <code>FreeTierUsage</code> object
   *     to meet.</p>
   * @public
   */
  filter?: Expression | undefined;

  /**
   * <p>The maximum number of results to return in the response. <code>MaxResults</code> means
   *       that there can be up to the specified number of values, but there might be fewer results based
   *       on your filters.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}
