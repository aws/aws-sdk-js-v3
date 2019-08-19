import {
  _S3ReferenceDataSourceDescription,
  _UnmarshalledS3ReferenceDataSourceDescription
} from "./_S3ReferenceDataSourceDescription";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source configured for an application.</p>
 */
export interface _ReferenceDataSourceDescription {
  /**
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   */
  ReferenceId: string;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string;

  /**
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
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
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
   */
  S3ReferenceDataSourceDescription: _UnmarshalledS3ReferenceDataSourceDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: _UnmarshalledSourceSchema;
}
