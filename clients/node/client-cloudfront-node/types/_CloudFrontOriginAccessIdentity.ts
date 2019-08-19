import {
  _CloudFrontOriginAccessIdentityConfig,
  _UnmarshalledCloudFrontOriginAccessIdentityConfig
} from "./_CloudFrontOriginAccessIdentityConfig";

/**
 * <p>CloudFront origin access identity.</p>
 */
export interface _CloudFrontOriginAccessIdentity {
  /**
   * <p>The ID for the origin access identity, for example, <code>E74FTE3AJFJ256A</code>. </p>
   */
  Id: string;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, used when giving the origin access identity read permission to an object in Amazon S3. </p>
   */
  S3CanonicalUserId: string;

  /**
   * <p>The current configuration information for the identity. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: _CloudFrontOriginAccessIdentityConfig;
}

export interface _UnmarshalledCloudFrontOriginAccessIdentity
  extends _CloudFrontOriginAccessIdentity {
  /**
   * <p>The current configuration information for the identity. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: _UnmarshalledCloudFrontOriginAccessIdentityConfig;
}
