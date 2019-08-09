import { _Channel, _UnmarshalledChannel } from "./_Channel";
import {
  _OutputDataConfig,
  _UnmarshalledOutputDataConfig
} from "./_OutputDataConfig";
import {
  _ResourceConfig,
  _UnmarshalledResourceConfig
} from "./_ResourceConfig";
import {
  _StoppingCondition,
  _UnmarshalledStoppingCondition
} from "./_StoppingCondition";

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 */
export interface _TrainingJobDefinition {
  /**
   * <p>The input mode used by the algorithm for the training job. For the input modes that Amazon SageMaker algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p> <p>If an algorithm supports the <code>File</code> input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the <code>Pipe</code> input mode, Amazon SageMaker streams data directly from S3 to the container.</p>
   */
  TrainingInputMode: "Pipe" | "File" | string;

  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input source.</p>
   */
  InputDataConfig: Array<_Channel> | Iterable<_Channel>;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts.</p>
   */
  OutputDataConfig: _OutputDataConfig;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for model training.</p>
   */
  ResourceConfig: _ResourceConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts.</p>
   */
  StoppingCondition: _StoppingCondition;
}

export interface _UnmarshalledTrainingJobDefinition
  extends _TrainingJobDefinition {
  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input source.</p>
   */
  InputDataConfig: Array<_UnmarshalledChannel>;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts.</p>
   */
  OutputDataConfig: _UnmarshalledOutputDataConfig;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for model training.</p>
   */
  ResourceConfig: _UnmarshalledResourceConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts.</p>
   */
  StoppingCondition: _UnmarshalledStoppingCondition;
}
