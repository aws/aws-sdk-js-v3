import { _Datum, _UnmarshalledDatum } from "./_Datum";

/**
 * <p>The rows that comprise a query result table.</p>
 */
export interface _Row {
  /**
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Array<_Datum> | Iterable<_Datum>;
}

export interface _UnmarshalledRow extends _Row {
  /**
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Array<_UnmarshalledDatum>;
}
