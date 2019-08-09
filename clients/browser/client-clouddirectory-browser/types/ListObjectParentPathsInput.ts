import { _ObjectReference } from "./_ObjectReference";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectParentPathsInput shape
 */
export interface ListObjectParentPathsInput {
  /**
   * <p>The ARN of the directory to which the parent path applies.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The reference that identifies the object whose parent paths are listed.</p>
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
