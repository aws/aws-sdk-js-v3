/**
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 */
export interface _CloudFrontOriginAccessIdentitySummary {
  /**
   * <p>The ID for the origin access identity. For example: <code>E74FTE3AJFJ256A</code>.</p>
   */
  Id: string;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.</p>
   */
  S3CanonicalUserId: string;

  /**
   * <p>The comment for this origin access identity, as originally specified when created.</p>
   */
  Comment: string;
}

export type _UnmarshalledCloudFrontOriginAccessIdentitySummary = _CloudFrontOriginAccessIdentitySummary;
