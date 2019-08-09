/**
 * <p>Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.</p>
 */
export interface _DatasetSchema {
  /**
   * <p>The name of the schema.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  schemaArn?: string;

  /**
   * <p>The schema.</p>
   */
  schema?: string;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledDatasetSchema extends _DatasetSchema {
  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
