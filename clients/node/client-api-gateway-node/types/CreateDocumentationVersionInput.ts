import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Creates a new documentation version of a given API.</p>
 */
export interface CreateDocumentationVersionInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] The version identifier of the new snapshot.</p>
   */
  documentationVersion: string;

  /**
   * <p>The stage name to be associated with the new documentation snapshot.</p>
   */
  stageName?: string;

  /**
   * <p>A description about the new documentation snapshot.</p>
   */
  description?: string;

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
