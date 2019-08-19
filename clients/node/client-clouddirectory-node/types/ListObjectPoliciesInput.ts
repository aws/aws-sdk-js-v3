import { _ObjectReference } from "./_ObjectReference";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectPoliciesInput shape
 */
export interface ListObjectPoliciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Reference that identifies the object for which policies will be listed.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: "SERIALIZABLE" | "EVENTUAL" | string;

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
