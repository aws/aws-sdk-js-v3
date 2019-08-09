import {
  _S3ReferenceDataSource,
  _UnmarshalledS3ReferenceDataSource
} from "./_S3ReferenceDataSource";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.</p>
 */
export interface _ReferenceDataSource {
  /**
   * <p>The name of the in-application table to create.</p>
   */
  TableName: string;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data. A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: _S3ReferenceDataSource;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: _SourceSchema;
}

export interface _UnmarshalledReferenceDataSource extends _ReferenceDataSource {
  /**
   * <p>Identifies the S3 bucket and object that contains the reference data. A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: _UnmarshalledS3ReferenceDataSource;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: _UnmarshalledSourceSchema;
}
