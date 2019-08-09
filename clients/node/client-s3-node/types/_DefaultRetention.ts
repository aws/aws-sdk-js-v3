/**
 * <p>The container element for specifying the default object lock retention settings for new objects placed in the specified bucket.</p>
 */
export interface _DefaultRetention {
  /**
   * <p>The default object lock retention mode you want to apply to new objects placed in the specified bucket.</p>
   */
  Mode?: "GOVERNANCE" | "COMPLIANCE" | string;

  /**
   * <p>The number of days that you want to specify for the default retention period.</p>
   */
  Days?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Years?: number;
}

export type _UnmarshalledDefaultRetention = _DefaultRetention;
