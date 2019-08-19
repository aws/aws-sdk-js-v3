/**
 * <p>A room profile with attributes.</p>
 */
export interface _Profile {
  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Retrieves if the profile is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: "METRIC" | "IMPERIAL" | string;

  /**
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: "FAHRENHEIT" | "CELSIUS" | string;

  /**
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: "ALEXA" | "AMAZON" | "ECHO" | "COMPUTER" | string;

  /**
   * <p>The setup mode of a room profile.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The max volume limit of a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>The PSTN setting of a room profile.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;
}

export type _UnmarshalledProfile = _Profile;
