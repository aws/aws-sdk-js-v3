import { _FilterRule, _UnmarshalledFilterRule } from "./_FilterRule";

/**
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface _S3KeyFilter {
  /**
   * <p/>
   */
  FilterRules?: Array<_FilterRule> | Iterable<_FilterRule>;
}

export interface _UnmarshalledS3KeyFilter extends _S3KeyFilter {
  /**
   * <p/>
   */
  FilterRules?: Array<_UnmarshalledFilterRule>;
}
