/**
 * <p>Describes the data source that contains the data to upload to a dataset.</p>
 */
export interface _DataSource {
  /**
   * <p>The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. For example: </p> <p> <code>s3://bucket-name/training-data.csv</code> </p>
   */
  dataLocation?: string;
}

export type _UnmarshalledDataSource = _DataSource;
