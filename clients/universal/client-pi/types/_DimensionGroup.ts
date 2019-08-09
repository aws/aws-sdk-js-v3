/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p>
 */
export interface _DimensionGroup {
  /**
   * <p>The name of the dimension group. Valid values are:</p> <ul> <li> <p> <code>db.user</code> </p> </li> <li> <p> <code>db.host</code> </p> </li> <li> <p> <code>db.sql</code> </p> </li> <li> <p> <code>db.sql_tokenized</code> </p> </li> <li> <p> <code>db.wait_event</code> </p> </li> <li> <p> <code>db.wait_event_type</code> </p> </li> </ul>
   */
  Group: string;

  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response.</p> <p>Valid values for elements in the <code>Dimensions</code> array are:</p> <ul> <li> <p>db.user.id</p> </li> <li> <p>db.user.name</p> </li> <li> <p>db.host.id</p> </li> <li> <p>db.host.name</p> </li> <li> <p>db.sql.id</p> </li> <li> <p>db.sql.db_id</p> </li> <li> <p>db.sql.statement</p> </li> <li> <p>db.sql.tokenized_id</p> </li> <li> <p>db.sql_tokenized.id</p> </li> <li> <p>db.sql_tokenized.db_id</p> </li> <li> <p>db.sql_tokenized.statement</p> </li> <li> <p>db.wait_event.name</p> </li> <li> <p>db.wait_event.type</p> </li> <li> <p>db.wait_event_type.name</p> </li> </ul>
   */
  Dimensions?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of items to fetch for this dimension group.</p>
   */
  Limit?: number;
}

export interface _UnmarshalledDimensionGroup extends _DimensionGroup {
  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response.</p> <p>Valid values for elements in the <code>Dimensions</code> array are:</p> <ul> <li> <p>db.user.id</p> </li> <li> <p>db.user.name</p> </li> <li> <p>db.host.id</p> </li> <li> <p>db.host.name</p> </li> <li> <p>db.sql.id</p> </li> <li> <p>db.sql.db_id</p> </li> <li> <p>db.sql.statement</p> </li> <li> <p>db.sql.tokenized_id</p> </li> <li> <p>db.sql_tokenized.id</p> </li> <li> <p>db.sql_tokenized.db_id</p> </li> <li> <p>db.sql_tokenized.statement</p> </li> <li> <p>db.wait_event.name</p> </li> <li> <p>db.wait_event.type</p> </li> <li> <p>db.wait_event_type.name</p> </li> </ul>
   */
  Dimensions?: Array<string>;
}
