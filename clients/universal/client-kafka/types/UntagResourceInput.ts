import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UntagResourceInput shape
 */
export interface UntagResourceInput {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   *
   */
  ResourceArn: string;

  /**
   *
   *             <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p>
   *             <ul>
   *                <li>
   *                   <p>Each tag key must be unique. If you add a tag with a key that's already in
   *                   use, your new tag overwrites the existing key-value pair. </p>
   *                </li>
   *                <li>
   *                   <p>You can't start a tag key with aws: because this prefix is reserved for use
   *                   by  AWS.  AWS creates tags that begin with this prefix on your behalf, but
   *                   you can't edit or delete them.</p>
   *                </li>
   *                <li>
   *                   <p>Tag keys must be between 1 and 128 Unicode characters in length.</p>
   *                </li>
   *                <li>
   *                   <p>Tag keys must consist of the following characters: Unicode letters, digits,
   *                   white space, and the following special characters: _ . / = + -
   *                      @.</p>
   *                </li>
   *             </ul>
   *
   */
  TagKeys: Array<string> | Iterable<string>;

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
