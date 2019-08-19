/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface _Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII format.</p>
   */
  Username?: string;

  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}

export type _UnmarshalledCredential = _Credential;
