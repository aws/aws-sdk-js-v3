import { _Value, _UnmarshalledValue } from "./_Value";

/**
 * <p>A structure value returned by a call.</p>
 */
export interface _StructValue {
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Array<_Value> | Iterable<_Value>;
}

export interface _UnmarshalledStructValue extends _StructValue {
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Array<_UnmarshalledValue>;
}
