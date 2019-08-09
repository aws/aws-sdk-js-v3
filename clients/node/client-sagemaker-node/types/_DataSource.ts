import { _S3DataSource, _UnmarshalledS3DataSource } from "./_S3DataSource";

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface _DataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource?: _S3DataSource;
}

export interface _UnmarshalledDataSource extends _DataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource?: _UnmarshalledS3DataSource;
}
