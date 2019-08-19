/**
 * Settings for use with a SPEKE key provider
 */
export interface _SpekeKeyProvider {
  /**
   * Optional AWS Certificate Manager ARN for a certificate to send to the keyprovider. The certificate holds a key used by the keyprovider to encrypt the keys in its response.
   */
  CertificateArn?: string;

  /**
   * The SPEKE-compliant server uses Resource ID (ResourceId) to identify content.
   */
  ResourceId?: string;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id.
   */
  SystemIds?: Array<string> | Iterable<string>;

  /**
   * Use URL (Url) to specify the SPEKE-compliant server that will provide keys for content.
   */
  Url?: string;
}

export interface _UnmarshalledSpekeKeyProvider extends _SpekeKeyProvider {
  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id.
   */
  SystemIds?: Array<string>;
}
