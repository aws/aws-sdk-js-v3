import {
  _ArtifactLocation,
  _UnmarshalledArtifactLocation
} from "./_ArtifactLocation";

/**
 * <p>Represents information about an artifact that will be worked upon by actions in the pipeline.</p>
 */
export interface _Artifact {
  /**
   * <p>The artifact's name.</p>
   */
  name?: string;

  /**
   * <p>The artifact's revision ID. Depending on the type of object, this could be a commit ID (GitHub) or a revision ID (Amazon S3).</p>
   */
  revision?: string;

  /**
   * <p>The location of an artifact.</p>
   */
  location?: _ArtifactLocation;
}

export interface _UnmarshalledArtifact extends _Artifact {
  /**
   * <p>The location of an artifact.</p>
   */
  location?: _UnmarshalledArtifactLocation;
}
