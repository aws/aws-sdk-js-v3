import { _Source } from "./_Source";
import { _Destination } from "./_Destination";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSigningJobInput shape
 */
export interface StartSigningJobInput {
  /**
   * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw code.</p>
   */
  source: _Source;

  /**
   * <p>The S3 bucket in which to save your signed object. The destination contains the name of your bucket and an optional prefix.</p>
   */
  destination: _Destination;

  /**
   * <p>The name of the signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>String that identifies the signing request. All calls after the first that use this token return the same response as the first call.</p>
   */
  clientRequestToken: string;

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
