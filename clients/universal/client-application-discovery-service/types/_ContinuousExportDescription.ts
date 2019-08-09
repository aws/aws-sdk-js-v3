/**
 * <p>A list of continuous export descriptions.</p>
 */
export interface _ContinuousExportDescription {
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>Describes the status of the export. Can be one of the following values:</p> <ul> <li> <p>START_IN_PROGRESS - setting up resources to start continuous export.</p> </li> <li> <p>START_FAILED - an error occurred setting up continuous export. To recover, call start-continuous-export again.</p> </li> <li> <p>ACTIVE - data is being exported to the customer bucket.</p> </li> <li> <p>ERROR - an error occurred during export. To fix the issue, call stop-continuous-export and start-continuous-export.</p> </li> <li> <p>STOP_IN_PROGRESS - stopping the export.</p> </li> <li> <p>STOP_FAILED - an error occurred stopping the export. To recover, call stop-continuous-export again.</p> </li> <li> <p>INACTIVE - the continuous export has been stopped. Data is no longer being exported to the customer bucket.</p> </li> </ul>
   */
  status?:
    | "START_IN_PROGRESS"
    | "START_FAILED"
    | "ACTIVE"
    | "ERROR"
    | "STOP_IN_PROGRESS"
    | "STOP_FAILED"
    | "INACTIVE"
    | string;

  /**
   * <p>Contains information about any errors that have occurred. This data type can have the following values:</p> <ul> <li> <p>ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon Athena. Contact your AWS administrator for help. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html">Setting Up AWS Application Discovery Service</a> in the Application Discovery Service User Guide.</p> </li> <li> <p>DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data Firehose delivery streams. Reduce the number of streams or request a limit increase and try again. For more information, see <a href="http://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the Amazon Kinesis Data Streams Developer Guide.</p> </li> <li> <p>FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because your IAM User is missing the AWSApplicationDiscoveryServiceFirehose role. Turn on Data Exploration in Amazon Athena and try again. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html#setting-up-user-policy">Step 3: Provide Application Discovery Service Access to Non-Administrator Users by Attaching Policies</a> in the Application Discovery Service User Guide.</p> </li> <li> <p>FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state because your IAM User is missing one or more of the Kinesis data delivery streams.</p> </li> <li> <p>INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an internal failure. Try again later. If this problem persists, contact AWS Support.</p> </li> <li> <p>S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the number of Amazon S3 buckets or request a limit increase and try again. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service Developer Guide.</p> </li> <li> <p>S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="https://aws.amazon.com/s3">https://aws.amazon.com/s3</a>.</p> </li> </ul>
   */
  statusDetail?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date | string | number;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for AGENT).</p>
   */
  dataSource?: "AGENT" | string;

  /**
   * <p>An object which describes how the data is stored.</p> <ul> <li> <p> <code>databaseName</code> - the name of the Glue database used to store the schema.</p> </li> </ul>
   */
  schemaStorageConfig?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledContinuousExportDescription
  extends _ContinuousExportDescription {
  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;

  /**
   * <p>An object which describes how the data is stored.</p> <ul> <li> <p> <code>databaseName</code> - the name of the Glue database used to store the schema.</p> </li> </ul>
   */
  schemaStorageConfig?: { [key: string]: string };
}
