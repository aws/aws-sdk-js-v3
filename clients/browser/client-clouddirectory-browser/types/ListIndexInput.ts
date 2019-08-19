import { _ObjectAttributeRange } from "./_ObjectAttributeRange";
import { _ObjectReference } from "./_ObjectReference";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIndexInput shape
 */
export interface ListIndexInput {
  /**
   * <p>The ARN of the directory that the index exists in.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?:
    | Array<_ObjectAttributeRange>
    | Iterable<_ObjectAttributeRange>;

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: _ObjectReference;

  /**
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The consistency level to execute the request at.</p>
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
