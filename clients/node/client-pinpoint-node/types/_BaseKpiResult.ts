import { _ResultRow, _UnmarshalledResultRow } from "./_ResultRow";

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application or campaign.</p>
 */
export interface _BaseKpiResult {
  /**
   * <p>An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application or campaign.</p>
   */
  Rows: Array<_ResultRow> | Iterable<_ResultRow>;
}

export interface _UnmarshalledBaseKpiResult extends _BaseKpiResult {
  /**
   * <p>An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application or campaign.</p>
   */
  Rows: Array<_UnmarshalledResultRow>;
}
