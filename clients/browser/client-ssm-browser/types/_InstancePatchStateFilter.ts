/**
 * <p>Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API.</p>
 */
export interface _InstancePatchStateFilter {
  /**
   * <p>The key for the filter. Supported values are FailedCount, InstalledCount, InstalledOtherCount, MissingCount and NotApplicableCount.</p>
   */
  Key: string;

  /**
   * <p>The value for the filter, must be an integer greater than or equal to 0.</p>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, LessThan or GreaterThan.</p>
   */
  Type: "Equal" | "NotEqual" | "LessThan" | "GreaterThan" | string;
}

export interface _UnmarshalledInstancePatchStateFilter
  extends _InstancePatchStateFilter {
  /**
   * <p>The value for the filter, must be an integer greater than or equal to 0.</p>
   */
  Values: Array<string>;
}
