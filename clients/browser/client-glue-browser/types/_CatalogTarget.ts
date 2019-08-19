/**
 * <p>Specifies an AWS Glue Data Catalog target.</p>
 */
export interface _CatalogTarget {
  /**
   * <p>The name of the database to be synchronized.</p>
   */
  DatabaseName: string;

  /**
   * <p>A list of the tables to be synchronized.</p>
   */
  Tables: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCatalogTarget extends _CatalogTarget {
  /**
   * <p>A list of the tables to be synchronized.</p>
   */
  Tables: Array<string>;
}
