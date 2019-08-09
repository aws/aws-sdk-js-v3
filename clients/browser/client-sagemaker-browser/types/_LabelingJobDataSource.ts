import {
  _LabelingJobS3DataSource,
  _UnmarshalledLabelingJobS3DataSource
} from "./_LabelingJobS3DataSource";

/**
 * <p>Provides information about the location of input data.</p>
 */
export interface _LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource: _LabelingJobS3DataSource;
}

export interface _UnmarshalledLabelingJobDataSource
  extends _LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource: _UnmarshalledLabelingJobS3DataSource;
}
