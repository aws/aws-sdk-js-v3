/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that may reside in a Hive metastore or an RDBMS.</p>
 */
export interface _Database {
  /**
   * <p>Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.</p>
   */
  Name: string;

  /**
   * <p>Description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date | string | number;
}

export interface _UnmarshalledDatabase extends _Database {
  /**
   * <p>These key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;
}
