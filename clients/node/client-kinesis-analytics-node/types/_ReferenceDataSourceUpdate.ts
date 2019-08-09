import {
  _S3ReferenceDataSourceUpdate,
  _UnmarshalledS3ReferenceDataSourceUpdate
} from "./_S3ReferenceDataSourceUpdate";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";

/**
 * <p>When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.</p>
 */
export interface _ReferenceDataSourceUpdate {
  /**
   * <p>ID of the reference data source being updated. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string;

  /**
   * <p>In-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: _S3ReferenceDataSourceUpdate;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: _SourceSchema;
}

export interface _UnmarshalledReferenceDataSourceUpdate
  extends _ReferenceDataSourceUpdate {
  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: _UnmarshalledS3ReferenceDataSourceUpdate;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: _UnmarshalledSourceSchema;
}
