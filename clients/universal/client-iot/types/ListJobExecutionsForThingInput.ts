import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobExecutionsForThingInput shape
 */
export interface ListJobExecutionsForThingInput {
  /**
   * <p>The thing name.</p>
   */
  thingName: string;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?:
    | "QUEUED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "TIMED_OUT"
    | "REJECTED"
    | "REMOVED"
    | "CANCELED"
    | string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

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
