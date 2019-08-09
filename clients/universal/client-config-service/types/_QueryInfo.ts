import { _FieldInfo, _UnmarshalledFieldInfo } from "./_FieldInfo";

/**
 * <p>Details about the query.</p>
 */
export interface _QueryInfo {
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: Array<_FieldInfo> | Iterable<_FieldInfo>;
}

export interface _UnmarshalledQueryInfo extends _QueryInfo {
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: Array<_UnmarshalledFieldInfo>;
}
