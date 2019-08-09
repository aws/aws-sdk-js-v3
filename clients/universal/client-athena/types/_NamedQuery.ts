/**
 * <p>A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.</p>
 */
export interface _NamedQuery {
  /**
   * <p>The query name.</p>
   */
  Name: string;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string;

  /**
   * <p>The SQL query statements that comprise the query.</p>
   */
  QueryString: string;

  /**
   * <p>The unique identifier of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The name of the workgroup that contains the named query.</p>
   */
  WorkGroup?: string;
}

export type _UnmarshalledNamedQuery = _NamedQuery;
