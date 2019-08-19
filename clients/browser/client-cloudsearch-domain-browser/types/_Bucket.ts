/**
 * <p>A container for facet information. </p>
 */
export interface _Bucket {
  /**
   * <p>The facet value being counted.</p>
   */
  value?: string;

  /**
   * <p>The number of hits that contain the facet value in the specified facet field.</p>
   */
  count?: number;
}

export type _UnmarshalledBucket = _Bucket;
