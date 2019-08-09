/**
 * <p>The structure used to create or update a database.</p>
 */
export interface _DatabaseInput {
  /**
   * <p>Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.</p>
   */
  Name: string;

  /**
   * <p>Description of the database</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>Thes key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDatabaseInput extends _DatabaseInput {
  /**
   * <p>Thes key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string };
}
