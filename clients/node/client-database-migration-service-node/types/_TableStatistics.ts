/**
 * <p/>
 */
export interface _TableStatistics {
  /**
   * <p>The schema name.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The number of insert actions performed on a table.</p>
   */
  Inserts?: number;

  /**
   * <p>The number of delete actions performed on a table.</p>
   */
  Deletes?: number;

  /**
   * <p>The number of update actions performed on a table.</p>
   */
  Updates?: number;

  /**
   * <p>The Data Definition Language (DDL) used to build and modify the structure of your tables.</p>
   */
  Ddls?: number;

  /**
   * <p>The number of rows added during the Full Load operation.</p>
   */
  FullLoadRows?: number;

  /**
   * <p>The number of rows that failed conditional checks during the Full Load operation (valid only for DynamoDB as a target migrations).</p>
   */
  FullLoadCondtnlChkFailedRows?: number;

  /**
   * <p>The number of rows that failed to load during the Full Load operation (valid only for DynamoDB as a target migrations).</p>
   */
  FullLoadErrorRows?: number;

  /**
   * <p>The last time the table was updated.</p>
   */
  LastUpdateTime?: Date | string | number;

  /**
   * <p>The state of the tables described.</p> <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table all | Table updates | Table is being reloaded</p>
   */
  TableState?: string;

  /**
   * <p>The number of records that have yet to be validated.</p>
   */
  ValidationPendingRecords?: number;

  /**
   * <p>The number of records that failed validation.</p>
   */
  ValidationFailedRecords?: number;

  /**
   * <p>The number of records that could not be validated.</p>
   */
  ValidationSuspendedRecords?: number;

  /**
   * <p>The validation state of the table.</p> <p>The parameter can have the following values</p> <ul> <li> <p>Not enabled—Validation is not enabled for the table in the migration task.</p> </li> <li> <p>Pending records—Some records in the table are waiting for validation.</p> </li> <li> <p>Mismatched records—Some records in the table do not match between the source and target.</p> </li> <li> <p>Suspended records—Some records in the table could not be validated.</p> </li> <li> <p>No primary key—The table could not be validated because it had no primary key.</p> </li> <li> <p>Table error—The table was not validated because it was in an error state and some data was not migrated.</p> </li> <li> <p>Validated—All rows in the table were validated. If the table is updated, the status can change from Validated.</p> </li> <li> <p>Error—The table could not be validated because of an unexpected error.</p> </li> </ul>
   */
  ValidationState?: string;

  /**
   * <p>Additional details about the state of validation.</p>
   */
  ValidationStateDetails?: string;
}

export interface _UnmarshalledTableStatistics extends _TableStatistics {
  /**
   * <p>The last time the table was updated.</p>
   */
  LastUpdateTime?: Date;
}
