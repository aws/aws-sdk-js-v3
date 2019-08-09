import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The GET request to get the usage data of a usage plan in a specified time interval.</p>
 */
export interface GetUsageInput {
  /**
   * <p>[Required] The Id of the usage plan associated with the usage data.</p>
   */
  usagePlanId: string;

  /**
   * <p>The Id of the API key associated with the resultant usage data.</p>
   */
  keyId?: string;

  /**
   * <p>[Required] The starting date (e.g., 2016-01-01) of the usage data.</p>
   */
  startDate: string;

  /**
   * <p>[Required] The ending date (e.g., 2016-12-31) of the usage data.</p>
   */
  endDate: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

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
