import {
  _HyperParameterAlgorithmSpecification,
  _UnmarshalledHyperParameterAlgorithmSpecification
} from "./_HyperParameterAlgorithmSpecification";
import { _Channel, _UnmarshalledChannel } from "./_Channel";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";
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
 * <p>Defines the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface _HyperParameterTrainingJobDefinition {
  /**
   * <p>Specifies the values of hyperparameters that do not change for the tuning job.</p>
   */
  StaticHyperParameters?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that specifies the resource algorithm to use for the training jobs that the tuning job launches.</p>
   */
  AlgorithmSpecification: _HyperParameterAlgorithmSpecification;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the training jobs that the tuning job launches.</p>
   */
  RoleArn: string;

  /**
   * <p>An array of <a>Channel</a> objects that specify the input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Array<_Channel> | Iterable<_Channel>;

  /**
   * <p>The <a>VpcConfig</a> object that specifies the VPC that you want the training jobs that this hyperparameter tuning job launches to connect to. Control access to and from your training container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you store model artifacts from the training jobs that the tuning job launches.</p>
   */
  OutputDataConfig: _OutputDataConfig;

  /**
   * <p>The resources, including the compute instances and storage volumes, to use for the training jobs that the tuning job launches.</p> <p>Storage volumes store model artifacts and incremental states. Training algorithms might also use storage volumes for scratch space. If you want Amazon SageMaker to use the storage volume to store the training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: _ResourceConfig;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: _StoppingCondition;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.</p> <note> <p>The Semantic Segmentation built-in algorithm does not support network isolation.</p> </note>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training, choose <code>True</code>. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;
}

export interface _UnmarshalledHyperParameterTrainingJobDefinition
  extends _HyperParameterTrainingJobDefinition {
  /**
   * <p>Specifies the values of hyperparameters that do not change for the tuning job.</p>
   */
  StaticHyperParameters?: { [key: string]: string };

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that specifies the resource algorithm to use for the training jobs that the tuning job launches.</p>
   */
  AlgorithmSpecification: _UnmarshalledHyperParameterAlgorithmSpecification;

  /**
   * <p>An array of <a>Channel</a> objects that specify the input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Array<_UnmarshalledChannel>;

  /**
   * <p>The <a>VpcConfig</a> object that specifies the VPC that you want the training jobs that this hyperparameter tuning job launches to connect to. Control access to and from your training container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you store model artifacts from the training jobs that the tuning job launches.</p>
   */
  OutputDataConfig: _UnmarshalledOutputDataConfig;

  /**
   * <p>The resources, including the compute instances and storage volumes, to use for the training jobs that the tuning job launches.</p> <p>Storage volumes store model artifacts and incremental states. Training algorithms might also use storage volumes for scratch space. If you want Amazon SageMaker to use the storage volume to store the training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: _UnmarshalledResourceConfig;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: _UnmarshalledStoppingCondition;
}
