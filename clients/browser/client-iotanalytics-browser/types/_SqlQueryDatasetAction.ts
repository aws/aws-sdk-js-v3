import { _QueryFilter, _UnmarshalledQueryFilter } from "./_QueryFilter";

/**
 * <p>The SQL query to modify the message.</p>
 */
export interface _SqlQueryDatasetAction {
  /**
   * <p>A SQL query string.</p>
   */
  sqlQuery: string;

  /**
   * <p>Pre-filters applied to message data.</p>
   */
  filters?: Array<_QueryFilter> | Iterable<_QueryFilter>;
}

export interface _UnmarshalledSqlQueryDatasetAction
  extends _SqlQueryDatasetAction {
  /**
   * <p>Pre-filters applied to message data.</p>
   */
  filters?: Array<_UnmarshalledQueryFilter>;
}
