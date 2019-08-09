import { _S3Destination, _UnmarshalledS3Destination } from "./_S3Destination";

/**
 * <p>Describes the location of the updated firmware.</p>
 */
export interface _Destination {
  /**
   * <p>Describes the location in S3 of the updated firmware.</p>
   */
  s3Destination?: _S3Destination;
}

export interface _UnmarshalledDestination extends _Destination {
  /**
   * <p>Describes the location in S3 of the updated firmware.</p>
   */
  s3Destination?: _UnmarshalledS3Destination;
}
