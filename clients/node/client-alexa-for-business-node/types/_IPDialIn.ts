/**
 * <p>The IP endpoint and protocol for calling.</p>
 */
export interface _IPDialIn {
  /**
   * <p>The IP address.</p>
   */
  Endpoint: string;

  /**
   * <p>The protocol, including SIP, SIPS, and H323.</p>
   */
  CommsProtocol: "SIP" | "SIPS" | "H323" | string;
}

export type _UnmarshalledIPDialIn = _IPDialIn;
