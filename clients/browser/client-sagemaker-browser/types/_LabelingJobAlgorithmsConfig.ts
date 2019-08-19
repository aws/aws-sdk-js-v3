import {
  _LabelingJobResourceConfig,
  _UnmarshalledLabelingJobResourceConfig
} from "./_LabelingJobResourceConfig";

/**
 * <p>Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.</p>
 */
export interface _LabelingJobAlgorithmsConfig {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You must select one of the following ARNs:</p> <ul> <li> <p> <i>Image classification</i> </p> <p> <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code> </p> </li> <li> <p> <i>Text classification</i> </p> <p> <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code> </p> </li> <li> <p> <i>Object detection</i> </p> <p> <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code> </p> </li> </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string;

  /**
   * <p>At the end of an auto-label job Amazon SageMaker Ground Truth sends the Amazon Resource Nam (ARN) of the final model used for auto-labeling. You can use this model as the starting point for subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: _LabelingJobResourceConfig;
}

export interface _UnmarshalledLabelingJobAlgorithmsConfig
  extends _LabelingJobAlgorithmsConfig {
  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: _UnmarshalledLabelingJobResourceConfig;
}
