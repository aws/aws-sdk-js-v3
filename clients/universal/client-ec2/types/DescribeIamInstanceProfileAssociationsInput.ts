import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIamInstanceProfileAssociationsInput shape
 */
export interface DescribeIamInstanceProfileAssociationsInput {
  /**
   * <p>The IAM instance profile associations.</p>
   */
  AssociationIds?: Array<string> | Iterable<string>;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>instance-id</code> - The ID of the instance.</p> </li> <li> <p> <code>state</code> - The state of the association (<code>associating</code> | <code>associated</code> | <code>disassociating</code> | <code>disassociated</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

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
