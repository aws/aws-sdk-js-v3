import { _ContainerDefinition } from "./_ContainerDefinition";
import { _Tag } from "./_Tag";
import { _VpcConfig } from "./_VpcConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateModelInput shape
 */
export interface CreateModelInput {
  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string;

  /**
   * <p>The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions. </p>
   */
  PrimaryContainer?: _ContainerDefinition;

  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: Array<_ContainerDefinition> | Iterable<_ContainerDefinition>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p> <note> <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission.</p> </note>
   */
  ExecutionRoleArn: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. <code>VpcConfig</code> is used in hosting services and in batch transform. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or from the model container.</p> <note> <p>The Semantic Segmentation built-in algorithm does not support network isolation.</p> </note>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
