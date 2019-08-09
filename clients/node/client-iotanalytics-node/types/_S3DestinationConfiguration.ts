import {
  _GlueConfiguration,
  _UnmarshalledGlueConfiguration
} from "./_GlueConfiguration";

/**
 * <p>Configuration information for delivery of data set contents to Amazon S3.</p>
 */
export interface _S3DestinationConfiguration {
  /**
   * <p>The name of the Amazon S3 bucket to which data set contents are delivered.</p>
   */
  bucket: string;

  /**
   * <p>The key of the data set contents object. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key).</p>
   */
  key: string;

  /**
   * <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service.</p>
   */
  glueConfiguration?: _GlueConfiguration;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 and AWS Glue resources.</p>
   */
  roleArn: string;
}

export interface _UnmarshalledS3DestinationConfiguration
  extends _S3DestinationConfiguration {
  /**
   * <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service.</p>
   */
  glueConfiguration?: _UnmarshalledGlueConfiguration;
}
