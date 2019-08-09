import {
  _PublicKeySummary,
  _UnmarshalledPublicKeySummary
} from "./_PublicKeySummary";

/**
 * <p>A list of public keys you've added to CloudFront to use with features like field-level encryption.</p>
 */
export interface _PublicKeyList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your public keys where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of public keys you want in the response body. </p>
   */
  MaxItems: number;

  /**
   * <p>The number of public keys you added to CloudFront to use with features like field-level encryption.</p>
   */
  Quantity: number;

  /**
   * <p>An array of information about a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Items?: Array<_PublicKeySummary> | Iterable<_PublicKeySummary>;
}

export interface _UnmarshalledPublicKeyList extends _PublicKeyList {
  /**
   * <p>An array of information about a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Items?: Array<_UnmarshalledPublicKeySummary>;
}
