import {
  _ResultRowValue,
  _UnmarshalledResultRowValue
} from "./_ResultRowValue";

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application or campaign.</p>
 */
export interface _ResultRow {
  /**
   *  <p>An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.</p>
   */
  GroupedBys: Array<_ResultRowValue> | Iterable<_ResultRowValue>;

  /**
   *  <p>An array of objects that provides pre-aggregated values for a standard metric that applies to an application or campaign.</p>
   */
  Values: Array<_ResultRowValue> | Iterable<_ResultRowValue>;
}

export interface _UnmarshalledResultRow extends _ResultRow {
  /**
   *  <p>An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.</p>
   */
  GroupedBys: Array<_UnmarshalledResultRowValue>;

  /**
   *  <p>An array of objects that provides pre-aggregated values for a standard metric that applies to an application or campaign.</p>
   */
  Values: Array<_UnmarshalledResultRowValue>;
}
