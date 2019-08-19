import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListContactsInput {
  /**
   * <p>End time of a contact.</p>
   */
  endTime: Date | string | number;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum number of contacts returned.</p>
   */
  maxResults?: number;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime: Date | string | number;

  /**
   * <p>Status of a contact reservation.</p>
   */
  statusList:
    | Array<
        | "AVAILABLE"
        | "AWS_CANCELLED"
        | "CANCELLED"
        | "COMPLETED"
        | "FAILED"
        | "FAILED_TO_SCHEDULE"
        | "PASS"
        | "POSTPASS"
        | "PREPASS"
        | "SCHEDULED"
        | "SCHEDULING"
        | string
      >
    | Iterable<
        | "AVAILABLE"
        | "AWS_CANCELLED"
        | "CANCELLED"
        | "COMPLETED"
        | "FAILED"
        | "FAILED_TO_SCHEDULE"
        | "PASS"
        | "POSTPASS"
        | "PREPASS"
        | "SCHEDULED"
        | "SCHEDULING"
        | string
      >;

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
