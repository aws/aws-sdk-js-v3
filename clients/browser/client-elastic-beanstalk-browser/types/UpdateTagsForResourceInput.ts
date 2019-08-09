import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTagsForResourceInput shape
 */
export interface UpdateTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk environment.</p>
   */
  ResourceArn: string;

  /**
   * <p>A list of tags to add or update.</p> <p>If a key of an existing tag is added, the tag's value is updated.</p>
   */
  TagsToAdd?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A list of tag keys to remove.</p> <p>If a tag key doesn't exist, it is silently ignored.</p>
   */
  TagsToRemove?: Array<string> | Iterable<string>;

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
