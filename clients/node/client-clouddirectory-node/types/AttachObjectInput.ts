import { _ObjectReference } from "./_ObjectReference";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachObjectInput shape
 */
export interface AttachObjectInput {
  /**
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: _ObjectReference;

  /**
   * <p>The child object reference to be attached to the object.</p>
   */
  ChildReference: _ObjectReference;

  /**
   * <p>The link name with which the child object is attached to the parent.</p>
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
