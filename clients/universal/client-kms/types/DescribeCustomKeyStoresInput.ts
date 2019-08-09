import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCustomKeyStoresInput shape
 */
export interface DescribeCustomKeyStoresInput {
  /**
   * <p>Gets only information about the specified custom key store. Enter the key store ID.</p> <p>By default, this operation gets information about all custom key stores in the account and region. To limit the output to a particular custom key store, you can use either the <code>CustomKeyStoreId</code> or <code>CustomKeyStoreName</code> parameter, but not both.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>Gets only information about the specified custom key store. Enter the friendly name of the custom key store.</p> <p>By default, this operation gets information about all custom key stores in the account and region. To limit the output to a particular custom key store, you can use either the <code>CustomKeyStoreId</code> or <code>CustomKeyStoreName</code> parameter, but not both.</p>
   */
  CustomKeyStoreName?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextMarker</code> from the truncated response you just received.</p>
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
