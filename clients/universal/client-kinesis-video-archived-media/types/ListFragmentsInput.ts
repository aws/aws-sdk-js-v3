import { _FragmentSelector } from "./_FragmentSelector";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFragmentsInput shape
 */
export interface ListFragmentsInput {
  /**
   * <p>The name of the stream from which to retrieve a fragment list.</p>
   */
  StreamName: string;

  /**
   * <p>The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.</p>
   */
  NextToken?: string;

  /**
   * <p>Describes the timestamp range and timestamp origin for the range of fragments to return.</p>
   */
  FragmentSelector?: _FragmentSelector;

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
