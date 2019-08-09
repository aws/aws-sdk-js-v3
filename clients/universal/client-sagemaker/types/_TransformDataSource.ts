import {
  _TransformS3DataSource,
  _UnmarshalledTransformS3DataSource
} from "./_TransformS3DataSource";

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface _TransformDataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource: _TransformS3DataSource;
}

export interface _UnmarshalledTransformDataSource extends _TransformDataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource: _UnmarshalledTransformS3DataSource;
}
