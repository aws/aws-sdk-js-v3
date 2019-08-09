import {
  _S3ReferenceDataSourceDescription,
  _UnmarshalledS3ReferenceDataSourceDescription
} from "./_S3ReferenceDataSourceDescription";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";

/**
 * <p>Describes the reference data source configured for an application.</p>
 */
export interface _ReferenceDataSourceDescription {
  /**
   * <p>ID of the reference data source. This is the ID that Amazon Kinesis Analytics assigns when you add the reference data source to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.</p>
   */
  ReferenceId: string;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string;

  /**
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceDescription: _S3ReferenceDataSourceDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: _SourceSchema;
}

export interface _UnmarshalledReferenceDataSourceDescription
  extends _ReferenceDataSourceDescription {
  /**
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceDescription: _UnmarshalledS3ReferenceDataSourceDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: _UnmarshalledSourceSchema;
}
