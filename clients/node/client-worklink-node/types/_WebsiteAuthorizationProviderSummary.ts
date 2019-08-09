/**
 * <p>The summary of the website authorization provider.</p>
 */
export interface _WebsiteAuthorizationProviderSummary {
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: "SAML" | string;

  /**
   * <p>The domain name of the authorization provider. This applies only to SAML-based authorization providers.</p>
   */
  DomainName?: string;

  /**
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date | string | number;
}

export interface _UnmarshalledWebsiteAuthorizationProviderSummary
  extends _WebsiteAuthorizationProviderSummary {
  /**
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date;
}
