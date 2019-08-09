import { _ObjectReference } from "./_ObjectReference";
import { _ObjectAttributeUpdate } from "./_ObjectAttributeUpdate";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateObjectAttributesInput shape
 */
export interface UpdateObjectAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates:
    | Array<_ObjectAttributeUpdate>
    | Iterable<_ObjectAttributeUpdate>;

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
