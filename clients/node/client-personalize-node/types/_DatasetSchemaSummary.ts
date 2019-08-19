/**
 * <p>Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API.</p>
 */
export interface _DatasetSchemaSummary {
  /**
   * <p>The name of the schema.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  schemaArn?: string;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledDatasetSchemaSummary
  extends _DatasetSchemaSummary {
  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
