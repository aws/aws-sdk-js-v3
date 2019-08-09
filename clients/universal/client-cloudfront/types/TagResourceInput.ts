import { _Tags } from "./_Tags";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The request to add tags to a CloudFront resource.</p>
 */
export interface TagResourceInput {
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string;

  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _Tags;

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
