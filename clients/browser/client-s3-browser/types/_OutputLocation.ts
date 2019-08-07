import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface _OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   */
  S3?: _S3Location;
}

export interface _UnmarshalledOutputLocation extends _OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   */
  S3?: _UnmarshalledS3Location;
}
