/**
 * <p>Contains the list of SAML providers for this account.</p>
 */
export interface _SAMLProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   */
  Arn?: string;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date | string | number;
}

export interface _UnmarshalledSAMLProviderListEntry
  extends _SAMLProviderListEntry {
  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;
}
