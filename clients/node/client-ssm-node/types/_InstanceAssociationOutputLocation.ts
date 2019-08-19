import {
  _S3OutputLocation,
  _UnmarshalledS3OutputLocation
} from "./_S3OutputLocation";

/**
 * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface _InstanceAssociationOutputLocation {
  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3Location?: _S3OutputLocation;
}

export interface _UnmarshalledInstanceAssociationOutputLocation
  extends _InstanceAssociationOutputLocation {
  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  S3Location?: _UnmarshalledS3OutputLocation;
}
