/**
 * <p>An object representing an Amazon ECR image layer failure.</p>
 */
export interface _LayerFailure {
  /**
   * <p>The layer digest associated with the failure.</p>
   */
  layerDigest?: string;

  /**
   * <p>The failure code associated with the failure.</p>
   */
  failureCode?: "InvalidLayerDigest" | "MissingLayerDigest" | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

export type _UnmarshalledLayerFailure = _LayerFailure;
