/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: 10 origination routes per Amazon Chime Voice Connector.</p>
 */
export interface _OriginationRoute {
  /**
   * <p>The FODN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: "TCP" | "UDP" | string;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are distributed among them based on their relative weight.</p>
   */
  Weight?: number;
}

export type _UnmarshalledOriginationRoute = _OriginationRoute;
