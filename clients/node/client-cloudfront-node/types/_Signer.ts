import { _KeyPairIds, _UnmarshalledKeyPairIds } from "./_KeyPairIds";

/**
 * <p>A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. </p>
 */
export interface _Signer {
  /**
   * <p>An AWS account that is included in the <code>TrustedSigners</code> complex type for this distribution. Valid values include:</p> <ul> <li> <p> <code>self</code>, which is the AWS account used to create the distribution.</p> </li> <li> <p>An AWS account number.</p> </li> </ul>
   */
  AwsAccountNumber?: string;

  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p>
   */
  KeyPairIds?: _KeyPairIds;
}

export interface _UnmarshalledSigner extends _Signer {
  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p>
   */
  KeyPairIds?: _UnmarshalledKeyPairIds;
}
