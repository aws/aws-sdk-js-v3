/**
 * <p>The search filter to use when listing history records.</p>
 */
export interface _ListRecordHistorySearchFilter {
  /**
   * <p>The filter key.</p> <ul> <li> <p> <code>product</code> - Filter results based on the specified product identifier.</p> </li> <li> <p> <code>provisionedproduct</code> - Filter results based on the provisioned product identifier.</p> </li> </ul>
   */
  Key?: string;

  /**
   * <p>The filter value.</p>
   */
  Value?: string;
}

export type _UnmarshalledListRecordHistorySearchFilter = _ListRecordHistorySearchFilter;
