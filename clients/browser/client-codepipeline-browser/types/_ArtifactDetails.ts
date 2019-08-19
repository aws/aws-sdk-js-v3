/**
 * <p>Returns information about the details of an artifact.</p>
 */
export interface _ArtifactDetails {
  /**
   * <p>The minimum number of artifacts allowed for the action type.</p>
   */
  minimumCount: number;

  /**
   * <p>The maximum number of artifacts allowed for the action type.</p>
   */
  maximumCount: number;
}

export type _UnmarshalledArtifactDetails = _ArtifactDetails;
