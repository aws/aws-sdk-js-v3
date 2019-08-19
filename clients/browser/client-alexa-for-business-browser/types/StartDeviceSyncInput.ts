import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDeviceSyncInput shape
 */
export interface StartDeviceSyncInput {
  /**
   * <p>The ARN of the room with which the device to sync is associated. Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the device to sync. Required.</p>
   */
  DeviceArn?: string;

  /**
   * <p>Request structure to start the device sync. Required.</p>
   */
  Features:
    | Array<
        | "BLUETOOTH"
        | "VOLUME"
        | "NOTIFICATIONS"
        | "LISTS"
        | "SKILLS"
        | "NETWORK_PROFILE"
        | "SETTINGS"
        | "ALL"
        | string
      >
    | Iterable<
        | "BLUETOOTH"
        | "VOLUME"
        | "NOTIFICATIONS"
        | "LISTS"
        | "SKILLS"
        | "NETWORK_PROFILE"
        | "SETTINGS"
        | "ALL"
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
