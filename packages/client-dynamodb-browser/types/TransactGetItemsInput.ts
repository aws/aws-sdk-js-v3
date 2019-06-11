import { _TransactGetItem } from "./_TransactGetItem";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TransactGetItemsInput shape
 */
export interface TransactGetItemsInput {
  /**
   * <p>An ordered array of up to 10 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure.</p>
   */
  TransactItems: Array<_TransactGetItem> | Iterable<_TransactGetItem>;

  /**
   * <p>A value of <code>TOTAL</code> causes consumed capacity information to be returned, and a value of <code>NONE</code> prevents that information from being returned. No other value is valid.</p>
   */
  ReturnConsumedCapacity?: "INDEXES" | "TOTAL" | "NONE" | string;

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
