/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface _LabelingJobS3DataSource {
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects.</p>
   */
  ManifestS3Uri: string;
}

export type _UnmarshalledLabelingJobS3DataSource = _LabelingJobS3DataSource;
