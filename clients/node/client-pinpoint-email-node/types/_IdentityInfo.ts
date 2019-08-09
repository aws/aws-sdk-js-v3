/**
 * <p>Information about an email identity.</p>
 */
export interface _IdentityInfo {
  /**
   * <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> <li> <p> <code>MANAGED_DOMAIN</code> – The identity is a domain that is managed by AWS.</p> </li> </ul>
   */
  IdentityType?: "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN" | string;

  /**
   * <p>The address or domain of the identity.</p>
   */
  IdentityName?: string;

  /**
   * <p>Indicates whether or not you can send email from the identity.</p> <p>In Amazon Pinpoint, an identity is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon Pinpoint to send email from that identity.</p>
   */
  SendingEnabled?: boolean;
}

export type _UnmarshalledIdentityInfo = _IdentityInfo;
