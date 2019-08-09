/**
 * <p>Settings for exporting data to Amazon S3. </p>
 */
export interface _S3Settings {
  /**
   * <p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p> The external table definition. </p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p> The delimiter used to separate rows in the source files. The default is a carriage return (<code>\n</code>). </p>
   */
  CsvRowDelimiter?: string;

  /**
   * <p> The delimiter used to separate columns in the source files. The default is a comma. </p>
   */
  CsvDelimiter?: string;

  /**
   * <p> An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path <code> <i>bucketFolder</i>/<i>schema_name</i>/<i>table_name</i>/</code>. If this parameter is not specified, then the path used is <code> <i>schema_name</i>/<i>table_name</i>/</code>. </p>
   */
  BucketFolder?: string;

  /**
   * <p> The name of the S3 bucket. </p>
   */
  BucketName?: string;

  /**
   * <p> An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed. Applies to both .csv and .parquet file formats. </p>
   */
  CompressionType?: "none" | "gzip" | string;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. To use <code>SSE_S3</code>, you need an AWS Identity and Access Management (IAM) role with permission to allow <code>"arn:aws:s3:::dms-*"</code> to use the following actions:</p> <ul> <li> <p> <code>s3:CreateBucket</code> </p> </li> <li> <p> <code>s3:ListBucket</code> </p> </li> <li> <p> <code>s3:DeleteBucket</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:GetObject</code> </p> </li> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:DeleteObject</code> </p> </li> <li> <p> <code>s3:GetObjectVersion</code> </p> </li> <li> <p> <code>s3:GetBucketPolicy</code> </p> </li> <li> <p> <code>s3:PutBucketPolicy</code> </p> </li> <li> <p> <code>s3:DeleteBucketPolicy</code> </p> </li> </ul>
   */
  EncryptionMode?: "sse-s3" | "sse-kms" | string;

  /**
   * <p>If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide the AWS KMS key ID. The key that you use needs an attached policy that enables AWS Identity and Access Management (IAM) user permissions and allows use of the key.</p> <p>Here is a CLI example: <code>aws dms create-endpoint --endpoint-identifier <i>value</i> --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=<i>value</i>,BucketFolder=<i>value</i>,BucketName=<i>value</i>,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=<i>value</i> </code> </p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * <p>The format of the data that you want to use for output. You can choose one of the following: </p> <ul> <li> <p> <code>csv</code> : This is a row-based file format with comma-separated values (.csv). </p> </li> <li> <p> <code>parquet</code> : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response. </p> </li> </ul>
   */
  DataFormat?: "csv" | "parquet" | string;

  /**
   * <p>The type of encoding you are using: </p> <ul> <li> <p> <code>RLE_DICTIONARY</code> uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.</p> </li> <li> <p> <code>PLAIN</code> doesn't use encoding at all. Values are stored as they are.</p> </li> <li> <p> <code>PLAIN_DICTIONARY</code> builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.</p> </li> </ul>
   */
  EncodingType?: "plain" | "plain-dictionary" | "rle-dictionary" | string;

  /**
   * <p>The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to <code>PLAIN</code> encoding. This size is used for .parquet file format only. </p>
   */
  DictPageSizeLimit?: number;

  /**
   * <p>The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only. </p> <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the max row group length in bytes (64 * 1024 * 1024). </p>
   */
  RowGroupLength?: number;

  /**
   * <p>The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only. </p>
   */
  DataPageSize?: number;

  /**
   * <p>The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code> (the default) or <code>parquet_2_0</code>.</p>
   */
  ParquetVersion?: "parquet-1-0" | "parquet-2-0" | string;

  /**
   * <p>A value that enables statistics for Parquet pages and row groups. Choose <code>true</code> to enable statistics, <code>false</code> to disable. Statistics include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code> values. This parameter defaults to <code>true</code>. This value is used for .parquet file format only.</p>
   */
  EnableStatistics?: boolean;

  /**
   * <p>A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.</p> <note> <p>AWS DMS supports <code>IncludeOpForFullLoad</code> in versions 3.1.4 and later.</p> </note> <p>For full load, records can only be inserted. By default (the <code>false</code> setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If <code>IncludeOpForFullLoad</code> is set to <code>true</code> or <code>y</code>, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.</p> <note> <p>This setting works together with <code>CdcInsertsOnly</code> for output to .csv files only. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS Database Migration Service User Guide.</i>.</p> </note>
   */
  IncludeOpForFullLoad?: boolean;

  /**
   * <p>A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the <code>false</code> setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.</p> <p>If <code>cdcInsertsOnly</code> is set to <code>true</code> or <code>y</code>, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of <code>IncludeOpForFullLoad</code>. If <code>IncludeOpForFullLoad</code> is set to <code>true</code>, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If <code>IncludeOpForFullLoad</code> is set to <code>false</code>, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS Database Migration Service User Guide.</i>.</p> <note> <p>AWS DMS supports this interaction between <code>CdcInsertsOnly</code> and <code>IncludeOpForFullLoad</code> in versions 3.1.4 and later. </p> </note>
   */
  CdcInsertsOnly?: boolean;

  /**
   * <p>A value that includes a timestamp column in the Amazon S3 target endpoint data. AWS DMS includes an additional column in the migrated data when you set <code>timestampColumnName</code> to a non-blank value. </p> <note> <p>AWS DMS supports <code>TimestampColumnName</code> in versions 3.1.4 and later.</p> </note> <p>For a full load, each row of the timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS. For a CDC load, each row of the timestamp column contains the timestamp for the commit of that row in the source database. The format for the timestamp column value is <code>yyyy-MM-dd HH:mm:ss.SSSSSS</code>. For CDC, the microsecond precision depends on the commit timestamp supported by DMS for the source database. When the <code>AddColumnName</code> setting is set to <code>true</code>, DMS also includes the name for the timestamp column that you set as the nonblank value of <code>timestampColumnName</code>.</p>
   */
  TimestampColumnName?: string;
}

export type _UnmarshalledS3Settings = _S3Settings;
