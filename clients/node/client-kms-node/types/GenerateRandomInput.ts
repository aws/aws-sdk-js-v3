import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GenerateRandomInput shape
 */
export interface GenerateRandomInput {
  /**
   * <p>The length of the byte string.</p>
   */
  NumberOfBytes?: number;

  /**
   * <p>Generates the random byte string in the AWS CloudHSM cluster that is associated with the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId?: string;

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
