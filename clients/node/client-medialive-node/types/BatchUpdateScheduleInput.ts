import { _BatchScheduleActionCreateRequest } from "./_BatchScheduleActionCreateRequest";
import { _BatchScheduleActionDeleteRequest } from "./_BatchScheduleActionDeleteRequest";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleInput {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string;

  /**
   * Schedule actions to create in the schedule.
   */
  Creates?: _BatchScheduleActionCreateRequest;

  /**
   * Schedule actions to delete from the schedule.
   */
  Deletes?: _BatchScheduleActionDeleteRequest;

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
