import { _Stream, _UnmarshalledStream } from "./_Stream";
import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>The location of the OTA update.</p>
 */
export interface _FileLocation {
  /**
   * <p>The stream that contains the OTA update.</p>
   */
  stream?: _Stream;

  /**
   * <p>The location of the updated firmware in S3.</p>
   */
  s3Location?: _S3Location;
}

export interface _UnmarshalledFileLocation extends _FileLocation {
  /**
   * <p>The stream that contains the OTA update.</p>
   */
  stream?: _UnmarshalledStream;

  /**
   * <p>The location of the updated firmware in S3.</p>
   */
  s3Location?: _UnmarshalledS3Location;
}
