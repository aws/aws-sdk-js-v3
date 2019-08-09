import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRoomInput shape
 */
export interface UpdateRoomInput {
  /**
   * <p>The ARN of the room to update. </p>
   */
  RoomArn?: string;

  /**
   * <p>The updated name for the room.</p>
   */
  RoomName?: string;

  /**
   * <p>The updated description for the room.</p>
   */
  Description?: string;

  /**
   * <p>The updated provider calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The updated profile ARN for the room.</p>
   */
  ProfileArn?: string;

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
