import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobsInput shape
 */
export interface ListJobsInput {
  /**
   * <p/>
   */
  AccountId: string;

  /**
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.</p>
   */
  JobStatuses?:
    | Array<
        | "Active"
        | "Cancelled"
        | "Cancelling"
        | "Complete"
        | "Completing"
        | "Failed"
        | "Failing"
        | "New"
        | "Paused"
        | "Pausing"
        | "Preparing"
        | "Ready"
        | "Suspended"
        | string
      >
    | Iterable<
        | "Active"
        | "Cancelled"
        | "Cancelling"
        | "Complete"
        | "Completing"
        | "Failed"
        | "Failing"
        | "New"
        | "Paused"
        | "Pausing"
        | "Preparing"
        | "Ready"
        | "Suspended"
        | string
      >;

  /**
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.</p>
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
