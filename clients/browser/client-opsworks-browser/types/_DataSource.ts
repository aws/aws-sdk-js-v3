/**
 * <p>Describes an app's data source.</p>
 */
export interface _DataSource {
  /**
   * <p>The data source's type, <code>AutoSelectOpsworksMysqlInstance</code>, <code>OpsworksMysqlInstance</code>, <code>RdsDbInstance</code>, or <code>None</code>.</p>
   */
  Type?: string;

  /**
   * <p>The data source's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The database name.</p>
   */
  DatabaseName?: string;
}

export type _UnmarshalledDataSource = _DataSource;
