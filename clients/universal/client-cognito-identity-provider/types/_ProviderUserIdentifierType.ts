/**
 * <p>A container for information about an identity provider for a user pool.</p>
 */
export interface _ProviderUserIdentifierType {
  /**
   * <p>The name of the provider, for example, Facebook, Google, or Login with Amazon.</p>
   */
  ProviderName?: string;

  /**
   * <p>The name of the provider attribute to link to, for example, <code>NameID</code>.</p>
   */
  ProviderAttributeName?: string;

  /**
   * <p>The value of the provider attribute to link to, for example, <code>xxxxx_account</code>.</p>
   */
  ProviderAttributeValue?: string;
}

export type _UnmarshalledProviderUserIdentifierType = _ProviderUserIdentifierType;
