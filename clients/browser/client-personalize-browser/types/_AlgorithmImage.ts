/**
 * <p>Describes an algorithm image.</p>
 */
export interface _AlgorithmImage {
  /**
   * <p>The name of the algorithm image.</p>
   */
  name?: string;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   */
  dockerURI: string;
}

export type _UnmarshalledAlgorithmImage = _AlgorithmImage;
