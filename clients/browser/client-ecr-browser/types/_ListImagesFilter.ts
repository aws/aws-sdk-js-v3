/**
 * <p>An object representing a filter on a <a>ListImages</a> operation.</p>
 */
export interface _ListImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>ListImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.</p>
   */
  tagStatus?: "TAGGED" | "UNTAGGED" | "ANY" | string;
}

export type _UnmarshalledListImagesFilter = _ListImagesFilter;
