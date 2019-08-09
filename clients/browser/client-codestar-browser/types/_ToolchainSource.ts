import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 */
export interface _ToolchainSource {
  /**
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project request is stored.</p>
   */
  s3: _S3Location;
}

export interface _UnmarshalledToolchainSource extends _ToolchainSource {
  /**
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project request is stored.</p>
   */
  s3: _UnmarshalledS3Location;
}
