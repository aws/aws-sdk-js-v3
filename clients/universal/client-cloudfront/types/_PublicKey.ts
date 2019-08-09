import {
  _PublicKeyConfig,
  _UnmarshalledPublicKeyConfig
} from "./_PublicKeyConfig";

/**
 * <p>A complex data type of public keys you add to CloudFront to use with features like field-level encryption.</p>
 */
export interface _PublicKey {
  /**
   * <p>A unique ID assigned to a public key you've added to CloudFront.</p>
   */
  Id: string;

  /**
   * <p>A time you added a public key to CloudFront.</p>
   */
  CreatedTime: Date | string | number;

  /**
   * <p>A complex data type for a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  PublicKeyConfig: _PublicKeyConfig;
}

export interface _UnmarshalledPublicKey extends _PublicKey {
  /**
   * <p>A time you added a public key to CloudFront.</p>
   */
  CreatedTime: Date;

  /**
   * <p>A complex data type for a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  PublicKeyConfig: _UnmarshalledPublicKeyConfig;
}
