/**
 * <p>The filter for the lifecycle policy preview.</p>
 */
export interface _LifecyclePolicyPreviewFilter {
  /**
   * <p>The tag status of the image.</p>
   */
  tagStatus?: "TAGGED" | "UNTAGGED" | "ANY" | string;
}

export type _UnmarshalledLifecyclePolicyPreviewFilter = _LifecyclePolicyPreviewFilter;
