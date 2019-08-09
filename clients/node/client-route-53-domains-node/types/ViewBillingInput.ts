import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The ViewBilling request includes the following elements.</p>
 */
export interface ViewBillingInput {
  /**
   * <p>The beginning date and time for the time period for which you want a list of billing records. Specify the date and time in Coordinated Universal time (UTC).</p>
   */
  Start?: Date | string | number;

  /**
   * <p>The end date and time for the time period for which you want a list of billing records. Specify the date and time in Coordinated Universal time (UTC).</p>
   */
  End?: Date | string | number;

  /**
   * <p>For an initial request for a list of billing records, omit this element. If the number of billing records that are associated with the current AWS account during the specified period is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional billing records. Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element. </p> <p>Constraints: The marker must match the value of <code>NextPageMarker</code> that was returned in the previous response.</p>
   */
  Marker?: string;

  /**
   * <p>The number of billing records to be returned.</p> <p>Default: 20</p>
   */
  MaxItems?: number;

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
