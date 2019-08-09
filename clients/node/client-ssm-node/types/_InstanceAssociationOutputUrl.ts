import { _S3OutputUrl, _UnmarshalledS3OutputUrl } from "./_S3OutputUrl";

/**
 * <p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface _InstanceAssociationOutputUrl {
  /**
   * <p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3OutputUrl?: _S3OutputUrl;
}

export interface _UnmarshalledInstanceAssociationOutputUrl
  extends _InstanceAssociationOutputUrl {
  /**
   * <p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3OutputUrl?: _UnmarshalledS3OutputUrl;
}
