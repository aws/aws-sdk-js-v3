import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateProfileInput shape
 */
export interface UpdateProfileInput {
  /**
   * <p>The ARN of the room profile to update. Required.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The updated name for the room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Sets the profile as default if selected. If this is missing, no update is done to the default status.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The updated timezone for the room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The updated address for the room profile.</p>
   */
  Address?: string;

  /**
   * <p>The updated distance unit for the room profile.</p>
   */
  DistanceUnit?: "METRIC" | "IMPERIAL" | string;

  /**
   * <p>The updated temperature unit for the room profile.</p>
   */
  TemperatureUnit?: "FAHRENHEIT" | "CELSIUS" | string;

  /**
   * <p>The updated wake word for the room profile.</p>
   */
  WakeWord?: "ALEXA" | "AMAZON" | "ECHO" | "COMPUTER" | string;

  /**
   * <p>Whether the setup mode of the profile is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The updated maximum volume limit for the room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>Whether the PSTN setting of the room profile is enabled.</p>
   */
  PSTNEnabled?: boolean;

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
