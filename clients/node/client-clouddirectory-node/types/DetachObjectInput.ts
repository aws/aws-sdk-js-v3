import { _ObjectReference } from "./_ObjectReference";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetachObjectInput shape
 */
export interface DetachObjectInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The parent reference from which the object with the specified link name is detached.</p>
   */
  ParentReference: _ObjectReference;

  /**
   * <p>The link name associated with the object that needs to be detached.</p>
   */
  LinkName: string;

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
