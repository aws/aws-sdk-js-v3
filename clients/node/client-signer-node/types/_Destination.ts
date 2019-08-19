import { _S3Destination, _UnmarshalledS3Destination } from "./_S3Destination";

/**
 * <p>Points to an <code>S3Destination</code> object that contains information about your S3 bucket.</p>
 */
export interface _Destination {
  /**
   * <p>The <code>S3Destination</code> object.</p>
   */
  s3?: _S3Destination;
}

export interface _UnmarshalledDestination extends _Destination {
  /**
   * <p>The <code>S3Destination</code> object.</p>
   */
  s3?: _UnmarshalledS3Destination;
}
