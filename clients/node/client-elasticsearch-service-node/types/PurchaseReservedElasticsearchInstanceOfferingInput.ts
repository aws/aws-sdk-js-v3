import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingInput {
  /**
   * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
   */
  ReservedElasticsearchInstanceOfferingId: string;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string;

  /**
   * <p>The number of Elasticsearch instances to reserve.</p>
   */
  InstanceCount?: number;

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
