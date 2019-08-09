import { _ComparedFace, _UnmarshalledComparedFace } from "./_ComparedFace";

/**
 * <p>Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.</p>
 */
export interface _CompareFacesMatch {
  /**
   * <p>Level of confidence that the faces match.</p>
   */
  Similarity?: number;

  /**
   * <p>Provides face metadata (bounding box and confidence that the bounding box actually contains a face).</p>
   */
  Face?: _ComparedFace;
}

export interface _UnmarshalledCompareFacesMatch extends _CompareFacesMatch {
  /**
   * <p>Provides face metadata (bounding box and confidence that the bounding box actually contains a face).</p>
   */
  Face?: _UnmarshalledComparedFace;
}
