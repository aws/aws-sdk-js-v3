import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>Artifact details for the action execution, such as the artifact location.</p>
 */
export interface _ArtifactDetail {
  /**
   * <p>The artifact object name for the action execution.</p>
   */
  name?: string;

  /**
   * <p>The Amazon S3 artifact location for the action execution.</p>
   */
  s3location?: _S3Location;
}

export interface _UnmarshalledArtifactDetail extends _ArtifactDetail {
  /**
   * <p>The Amazon S3 artifact location for the action execution.</p>
   */
  s3location?: _UnmarshalledS3Location;
}
