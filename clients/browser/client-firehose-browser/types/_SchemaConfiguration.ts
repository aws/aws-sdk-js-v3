/**
 * <p>Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3.</p>
 */
export interface _SchemaConfiguration {
  /**
   * <p>The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of the AWS Glue database that contains the schema for the output data.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Specifies the AWS Glue table that contains the column information that constitutes your data schema.</p>
   */
  TableName?: string;

  /**
   * <p>If you don't specify an AWS Region, the default is the current Region.</p>
   */
  Region?: string;

  /**
   * <p>Specifies the table version for the output data schema. If you don't specify this version ID, or if you set it to <code>LATEST</code>, Kinesis Data Firehose uses the most recent version. This means that any updates to the table are automatically picked up.</p>
   */
  VersionId?: string;
}

export type _UnmarshalledSchemaConfiguration = _SchemaConfiguration;
