/**
 * <p>The data of a room profile.</p>
 */
export interface _ProfileData {
  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Retrieves if the profile data is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The timezone of a room profile.</p>
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
}

export type _UnmarshalledProfileData = _ProfileData;
