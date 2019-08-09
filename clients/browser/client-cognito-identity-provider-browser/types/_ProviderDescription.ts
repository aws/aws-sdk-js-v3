/**
 * <p>A container for identity provider details.</p>
 */
export interface _ProviderDescription {
  /**
   * <p>The identity provider name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The identity provider type.</p>
   */
  ProviderType?:
    | "SAML"
    | "Facebook"
    | "Google"
    | "LoginWithAmazon"
    | "OIDC"
    | string;

  /**
   * <p>The date the provider was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the provider was added to the user pool.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledProviderDescription extends _ProviderDescription {
  /**
   * <p>The date the provider was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the provider was added to the user pool.</p>
   */
  CreationDate?: Date;
}
