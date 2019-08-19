/**
 * <p>A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service.</p>
 */
export interface _Category {
  /**
   * <p>The category code for the support case.</p>
   */
  code?: string;

  /**
   * <p>The category name for the support case.</p>
   */
  name?: string;
}

export type _UnmarshalledCategory = _Category;
