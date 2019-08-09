import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of, and adds tags to, an on-premises instance operation.</p>
 */
export interface AddTagsToOnPremisesInstancesInput {
  /**
   * <p>The tag key-value pairs to add to the on-premises instances.</p> <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed.</p>
   */
  tags: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The names of the on-premises instances to which to add tags.</p>
   */
  instanceNames: Array<string> | Iterable<string>;

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
