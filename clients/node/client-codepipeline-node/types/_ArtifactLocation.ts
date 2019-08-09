import {
  _S3ArtifactLocation,
  _UnmarshalledS3ArtifactLocation
} from "./_S3ArtifactLocation";

/**
 * <p>Represents information about the location of an artifact.</p>
 */
export interface _ArtifactLocation {
  /**
   * <p>The type of artifact in the location.</p>
   */
  type?: "S3" | string;

  /**
   * <p>The Amazon S3 bucket that contains the artifact.</p>
   */
  s3Location?: _S3ArtifactLocation;
}

export interface _UnmarshalledArtifactLocation extends _ArtifactLocation {
  /**
   * <p>The Amazon S3 bucket that contains the artifact.</p>
   */
  s3Location?: _UnmarshalledS3ArtifactLocation;
}
