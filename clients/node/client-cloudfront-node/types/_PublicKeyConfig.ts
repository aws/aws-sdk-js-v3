/**
 * <p>Information about a public key you add to CloudFront to use with features like field-level encryption.</p>
 */
export interface _PublicKeyConfig {
  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   */
  CallerReference: string;

  /**
   * <p>The name for a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Name: string;

  /**
   * <p>The encoded public key that you want to add to CloudFront to use with features like field-level encryption.</p>
   */
  EncodedKey: string;

  /**
   * <p>An optional comment about a public key.</p>
   */
  Comment?: string;
}

export type _UnmarshalledPublicKeyConfig = _PublicKeyConfig;
