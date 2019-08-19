/**
 * <p>The SIP address for the contact containing the URI and SIP address type.</p>
 */
export interface _SipAddress {
  /**
   * <p>The URI for the SIP address.</p>
   */
  Uri: string;

  /**
   * <p>The type of the SIP address.</p>
   */
  Type: "WORK" | string;
}

export type _UnmarshalledSipAddress = _SipAddress;
