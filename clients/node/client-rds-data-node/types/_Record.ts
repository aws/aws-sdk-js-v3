import { _Value, _UnmarshalledValue } from "./_Value";

/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Array<_Value> | Iterable<_Value>;
}

export interface _UnmarshalledRecord extends _Record {
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Array<_UnmarshalledValue>;
}
