/**
 * <p>Describes the ICMP type and code.</p>
 */
export interface _IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   */
  Type?: number;
}

export type _UnmarshalledIcmpTypeCode = _IcmpTypeCode;
