/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.</p>
 */
export interface _Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service limit. Default value of 1.</p>
   */
  CpsLimit?: number;

  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>The countries to which calls are allowed.</p>
   */
  CallingRegions?: Array<string> | Iterable<string>;

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format.</p>
   */
  CidrAllowedList?: Array<string> | Iterable<string>;

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}

export interface _UnmarshalledTermination extends _Termination {
  /**
   * <p>The countries to which calls are allowed.</p>
   */
  CallingRegions?: Array<string>;

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format.</p>
   */
  CidrAllowedList?: Array<string>;
}
