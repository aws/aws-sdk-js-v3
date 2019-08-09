import { _DateInterval } from "./_DateInterval";
import { _Expression } from "./_Expression";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCostForecastInput shape
 */
export interface GetCostForecastInput {
  /**
   * <p>The period of time that you want the forecast to cover.</p>
   */
  TimePeriod: _DateInterval;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation appear on some line items in my bill?</a>. </p> <p>Valid values for a <code>GetCostForecast</code> call are the following:</p> <ul> <li> <p>AMORTIZED_COST</p> </li> <li> <p>BLENDED_COST</p> </li> <li> <p>NET_AMORTIZED_COST</p> </li> <li> <p>NET_UNBLENDED_COST</p> </li> <li> <p>UNBLENDED_COST</p> </li> </ul>
   */
  Metric:
    | "BLENDED_COST"
    | "UNBLENDED_COST"
    | "AMORTIZED_COST"
    | "NET_UNBLENDED_COST"
    | "NET_AMORTIZED_COST"
    | "USAGE_QUANTITY"
    | "NORMALIZED_USAGE_AMOUNT"
    | string;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p> <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity: "DAILY" | "MONTHLY" | "HOURLY" | string;

  /**
   * <p>The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.</p>
   */
  Filter?: _Expression;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
