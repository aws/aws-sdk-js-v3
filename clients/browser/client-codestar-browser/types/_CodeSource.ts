import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.</p>
 */
export interface _CodeSource {
  /**
   * <p>Information about the Amazon S3 location where the source code files provided with the project request are stored. </p>
   */
  s3: _S3Location;
}

export interface _UnmarshalledCodeSource extends _CodeSource {
  /**
   * <p>Information about the Amazon S3 location where the source code files provided with the project request are stored. </p>
   */
  s3: _UnmarshalledS3Location;
}
