import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSnapshotScheduleInput shape
 */
export interface CreateSnapshotScheduleInput {
  /**
   * <p>The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)". </p>
   */
  ScheduleDefinitions?: Array<string> | Iterable<string>;

  /**
   * <p>A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The description of the snapshot schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>An optional set of tags you can use to search for the schedule.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p/>
   */
  DryRun?: boolean;

  /**
   * <p/>
   */
  NextInvocations?: number;

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
