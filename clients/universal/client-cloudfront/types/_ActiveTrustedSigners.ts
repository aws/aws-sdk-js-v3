import { _Signer, _UnmarshalledSigner } from "./_Signer";

/**
 * <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _ActiveTrustedSigners {
  /**
   * <p>Enabled is <code>true</code> if any of the AWS accounts listed in the <code>TrustedSigners</code> complex type for this distribution have active CloudFront key pairs. If not, <code>Enabled</code> is <code>false</code>.</p>
   */
  Enabled: boolean;

  /**
   * <p>The number of trusted signers specified in the <code>TrustedSigners</code> complex type.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>Signer</code> complex type for each trusted signer that is specified in the <code>TrustedSigners</code> complex type.</p>
   */
  Items?: Array<_Signer> | Iterable<_Signer>;
}

export interface _UnmarshalledActiveTrustedSigners
  extends _ActiveTrustedSigners {
  /**
   * <p>A complex type that contains one <code>Signer</code> complex type for each trusted signer that is specified in the <code>TrustedSigners</code> complex type.</p>
   */
  Items?: Array<_UnmarshalledSigner>;
}
