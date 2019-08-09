import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProfileInput shape
 */
export interface CreateProfileInput {
  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName: string;

  /**
   * <p>The time zone used by a room profile.</p>
   */
  Timezone: string;

  /**
   * <p>The valid address for the room.</p>
   */
  Address: string;

  /**
   * <p>The distance unit to be used by devices in the profile.</p>
   */
  DistanceUnit: "METRIC" | "IMPERIAL" | string;

  /**
   * <p>The temperature unit to be used by devices in the profile.</p>
   */
  TemperatureUnit: "FAHRENHEIT" | "CELSIUS" | string;

  /**
   * <p>A wake word for Alexa, Echo, Amazon, or a computer.</p>
   */
  WakeWord: "ALEXA" | "AMAZON" | "ECHO" | "COMPUTER" | string;

  /**
   * <p>The user-specified token that is used during the creation of a profile.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Whether room profile setup is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The maximum volume limit for a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>Whether PSTN calling is enabled.</p>
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
