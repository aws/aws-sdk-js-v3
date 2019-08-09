import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>Represents a file to stream.</p>
 */
export interface _StreamFile {
  /**
   * <p>The file ID.</p>
   */
  fileId?: number;

  /**
   * <p>The location of the file in S3.</p>
   */
  s3Location?: _S3Location;
}

export interface _UnmarshalledStreamFile extends _StreamFile {
  /**
   * <p>The location of the file in S3.</p>
   */
  s3Location?: _UnmarshalledS3Location;
}
