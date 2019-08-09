/**
 * <p>A container for information about an identity provider.</p>
 */
export interface _IdentityProviderType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

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
   * <p>The identity provider details, such as <code>MetadataURL</code> and <code>MetadataFile</code>.</p>
   */
  ProviderDetails?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A mapping of identity provider attributes to standard and custom user pool attributes.</p>
   */
  AttributeMapping?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: Array<string> | Iterable<string>;

  /**
   * <p>The date the identity provider was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the identity provider was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledIdentityProviderType
  extends _IdentityProviderType {
  /**
   * <p>The identity provider details, such as <code>MetadataURL</code> and <code>MetadataFile</code>.</p>
   */
  ProviderDetails?: { [key: string]: string };

  /**
   * <p>A mapping of identity provider attributes to standard and custom user pool attributes.</p>
   */
  AttributeMapping?: { [key: string]: string };

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: Array<string>;

  /**
   * <p>The date the identity provider was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the identity provider was created.</p>
   */
  CreationDate?: Date;
}
