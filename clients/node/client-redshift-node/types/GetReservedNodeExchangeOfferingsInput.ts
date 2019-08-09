import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetReservedNodeExchangeOfferingsInput {
  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be exchanged.</p>
   */
  ReservedNodeId: string;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates the starting point for the next set of ReservedNodeOfferings.</p>
   */
  Marker?: string;

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
