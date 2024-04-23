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
 * @public
 * <p>Contains the specifications for the filters to use for your request.</p>
 */
export interface DimensionValues {
  /**
   * @public
   * <p>The name of the dimension that you want to filter on.</p>
   */
  Key: Dimension | undefined;

  /**
   * @public
   * <p>The metadata values you can specify to filter upon, so that the results all match at least
   *       one of the specified values.</p>
   */
  Values: string[] | undefined;

  /**
   * @public
   * <p>The match options that you can use to filter your results. You can specify only one of
   *       these values in the array.</p>
   */
  MatchOptions: MatchOption[] | undefined;
}

/**
 * @public
 * <p>Consists of a Amazon Web Services Free Tier offer’s metadata and your data usage for the offer.</p>
 */
export interface FreeTierUsage {
  /**
   * @public
   * <p>The name of the Amazon Web Service providing the Free Tier offer. For example, this can be
   *       Amazon Elastic Compute Cloud.</p>
   */
  service?: string;

  /**
   * @public
   * <p>Describes <code>usageType</code> more granularly with the specific Amazon Web Service API
   *       operation. For example, this can be the <code>RunInstances</code> API operation for
   *       Amazon Elastic Compute Cloud.</p>
   */
  operation?: string;

  /**
   * @public
   * <p>Describes the usage details of the offer. For example, this might be
   *         <code>Global-BoxUsage:freetrial</code>.</p>
   */
  usageType?: string;

  /**
   * @public
   * <p>Describes the Amazon Web Services Region for which this offer is applicable</p>
   */
  region?: string;

  /**
   * @public
   * <p>Describes the actual usage accrued month-to-day (MTD) that you've used so far.</p>
   */
  actualUsageAmount?: number;

  /**
   * @public
   * <p>Describes the forecasted usage by the month that you're expected to use.</p>
   */
  forecastedUsageAmount?: number;

  /**
   * @public
   * <p>Describes the maximum usage allowed in Free Tier.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>Describes the unit of the <code>usageType</code>, such as <code>Hrs</code>.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>The description of the Free Tier offer.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Describes the type of the Free Tier offer. For example, the offer can be <code>"12 Months
   *         Free"</code>,  <code>"Always Free"</code>, and <code>"Free Trial"</code>.</p>
   */
  freeTierType?: string;
}

/**
 * @public
 */
export interface GetFreeTierUsageResponse {
  /**
   * @public
   * <p>The list of Free Tier usage objects that meet your filter expression.</p>
   */
  freeTierUsages: FreeTierUsage[] | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An unexpected error occurred during the processing of your request.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Service.</p>
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
 */
export interface Expression {
  /**
   * @public
   * <p>Return results that match any of the <code>Expressions</code>  that you specified. in the
   *       array.</p>
   */
  Or?: Expression[];

  /**
   * @public
   * <p>Return results that match all <code>Expressions</code>  that you specified in the
   *       array.</p>
   */
  And?: Expression[];

  /**
   * @public
   * <p>Return results that don’t match the <code>Expression</code> that you specified.</p>
   */
  Not?: Expression;

  /**
   * @public
   * <p>The specific dimension, values, and match type to filter objects with.</p>
   */
  Dimensions?: DimensionValues;
}

/**
 * @public
 */
export interface GetFreeTierUsageRequest {
  /**
   * @public
   * <p>An expression that specifies the conditions that you want each <code>FreeTierUsage</code> object
   *     to meet.</p>
   */
  filter?: Expression;

  /**
   * @public
   * <p>The maximum number of results to return in the response. <code>MaxResults</code> means
   *       that there can be up to the specified number of values, but there might be fewer results based
   *       on your filters.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;
}
