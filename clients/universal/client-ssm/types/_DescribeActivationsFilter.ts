/**
 * <p>Filter for the DescribeActivation API.</p>
 */
export interface _DescribeActivationsFilter {
  /**
   * <p>The name of the filter.</p>
   */
  FilterKey?: "ActivationIds" | "DefaultInstanceName" | "IamRole" | string;

  /**
   * <p>The filter values.</p>
   */
  FilterValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDescribeActivationsFilter
  extends _DescribeActivationsFilter {
  /**
   * <p>The filter values.</p>
   */
  FilterValues?: Array<string>;
}
