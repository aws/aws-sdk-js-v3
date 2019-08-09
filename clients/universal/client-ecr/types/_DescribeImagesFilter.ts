/**
 * <p>An object representing a filter on a <a>DescribeImages</a> operation.</p>
 */
export interface _DescribeImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>DescribeImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.</p>
   */
  tagStatus?: "TAGGED" | "UNTAGGED" | "ANY" | string;
}

export type _UnmarshalledDescribeImagesFilter = _DescribeImagesFilter;
