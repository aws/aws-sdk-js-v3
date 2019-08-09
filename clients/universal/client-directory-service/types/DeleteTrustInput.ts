import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain.</p>
 */
export interface DeleteTrustInput {
  /**
   * <p>The Trust ID of the trust relationship to be deleted.</p>
   */
  TrustId: string;

  /**
   * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
   */
  DeleteAssociatedConditionalForwarder?: boolean;

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
