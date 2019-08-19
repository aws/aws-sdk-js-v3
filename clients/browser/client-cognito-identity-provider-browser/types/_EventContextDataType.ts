/**
 * <p>Specifies the user context data captured at the time of an event request.</p>
 */
export interface _EventContextDataType {
  /**
   * <p>The user's IP address.</p>
   */
  IpAddress?: string;

  /**
   * <p>The user's device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The user's time zone.</p>
   */
  Timezone?: string;

  /**
   * <p>The user's city.</p>
   */
  City?: string;

  /**
   * <p>The user's country.</p>
   */
  Country?: string;
}

export type _UnmarshalledEventContextDataType = _EventContextDataType;
