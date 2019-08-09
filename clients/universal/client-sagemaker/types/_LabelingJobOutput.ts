/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface _LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent Amazon SageMaker model trained as part of automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

export type _UnmarshalledLabelingJobOutput = _LabelingJobOutput;
