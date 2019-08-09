import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request for a purchase offering.</p>
 */
export interface PurchaseOfferingInput {
  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The number of device slots you wish to purchase in an offering request.</p>
   */
  quantity?: number;

  /**
   * <p>The ID of the offering promotion to be applied to the purchase.</p>
   */
  offeringPromotionId?: string;

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
