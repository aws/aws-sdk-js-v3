import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PurchaseHostReservationInput shape
 */
export interface PurchaseHostReservationInput {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>, and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   */
  HostIdSet: Array<string> | Iterable<string>;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation (calculated as the offering's upfront cost multiplied by the host count). If the total upfront cost is greater than the specified price limit, the request fails. This is used to ensure that the purchase does not exceed the expected upfront cost of the purchase. At this time, the only supported currency is <code>USD</code>. For example, to indicate a limit price of USD 100, specify 100.00.</p>
   */
  LimitPrice?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId: string;

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
