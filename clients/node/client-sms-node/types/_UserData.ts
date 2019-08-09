import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.</p>
 */
export interface _UserData {
  /**
   * <p>Amazon S3 location of the user-data script.</p>
   */
  s3Location?: _S3Location;
}

export interface _UnmarshalledUserData extends _UserData {
  /**
   * <p>Amazon S3 location of the user-data script.</p>
   */
  s3Location?: _UnmarshalledS3Location;
}
