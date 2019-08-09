import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartContinuousExportOutput shape
 */
export interface StartContinuousExportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for AGENT).</p>
   */
  dataSource?: "AGENT" | string;

  /**
   * <p>A dictionary which describes how the data is stored.</p> <ul> <li> <p> <code>databaseName</code> - the name of the Glue database used to store the schema.</p> </li> </ul>
   */
  schemaStorageConfig?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
