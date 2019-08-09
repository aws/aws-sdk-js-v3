/**
 * <p>Specifies a table definition in the AWS Glue Data Catalog.</p>
 */
export interface _CatalogEntry {
  /**
   * <p>The database in which the table metadata resides.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName: string;
}

export type _UnmarshalledCatalogEntry = _CatalogEntry;
