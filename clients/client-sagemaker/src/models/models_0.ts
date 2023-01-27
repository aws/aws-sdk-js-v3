// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SageMakerServiceException as __BaseException } from "./SageMakerServiceException";

/**
 * <p>A structure describing the source of an action.</p>
 */
export interface ActionSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   */
  SourceId?: string;
}

export enum ActionStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  UNKNOWN = "Unknown",
}

/**
 * <p>Lists the properties of an <i>action</i>. An action represents an action
 *         or activity. Some examples are a workflow step and a model deployment. Generally, an
 *         action involves at least one input artifact or output artifact.</p>
 */
export interface ActionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;

  /**
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * <p>The source of the action.</p>
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   */
  ActionType?: string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>When the action was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the action was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export enum AssociationEdgeType {
  ASSOCIATED_WITH = "AssociatedWith",
  CONTRIBUTED_TO = "ContributedTo",
  DERIVED_FROM = "DerivedFrom",
  PRODUCED = "Produced",
}

export interface AddAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn: string | undefined;

  /**
   * <p>The type of association. The following are suggested uses for each type. Amazon SageMaker
   *         places no restrictions on their use.</p>
   *          <ul>
   *             <li>
   *                <p>ContributedTo - The source contributed to the destination or had a part in
   *             enabling the destination. For example, the training data contributed to the training
   *             job.</p>
   *             </li>
   *             <li>
   *                <p>AssociatedWith - The source is connected to the destination. For example, an
   *             approval workflow is associated with a model deployment.</p>
   *             </li>
   *             <li>
   *                <p>DerivedFrom - The destination is a modification of the source. For example, a digest
   *             output of a channel input for a processing job is derived from the original inputs.</p>
   *             </li>
   *             <li>
   *                <p>Produced - The source generated the destination. For example, a training job
   *             produced a model artifact.</p>
   *             </li>
   *          </ul>
   */
  AssociationType?: AssociationEdgeType | string;
}

export interface AddAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;
}

/**
 * <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 */
export class ResourceLimitExceeded extends __BaseException {
  readonly name: "ResourceLimitExceeded" = "ResourceLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceeded, __BaseException>) {
    super({
      name: "ResourceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource being access is not found.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Input object for the model.</p>
 */
export interface ModelInput {
  /**
   * <p>The input configuration object for the model.</p>
   */
  DataInputConfig: string | undefined;
}

/**
 * <p>Describes the Docker container for the model package.</p>
 */
export interface ModelPackageContainerDefinition {
  /**
   * <p>The DNS host name for the Docker container.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.</p>
   *          <p>If you are using your own custom algorithm instead of an algorithm provided by SageMaker,
   *             the inference code must meet SageMaker requirements. SageMaker supports both
   *             <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  Image: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  ImageDigest?: string;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *             (<code>.tar.gz</code> suffix).</p>
   *          <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model package.</p>
   *          </note>
   */
  ModelDataUrl?: string;

  /**
   * <p>The Amazon Web Services Marketplace product ID of the model package.</p>
   */
  ProductId?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *             <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>A structure with Model Input details.</p>
   */
  ModelInput?: ModelInput;

  /**
   * <p>The machine learning framework of the model package container image.</p>
   */
  Framework?: string;

  /**
   * <p>The framework version of the Model Package Container Image.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The name of a pre-trained machine learning benchmarked by
   *            Amazon SageMaker Inference Recommender model that matches your model.
   *            You can find a list of benchmarked models by calling <code>ListModelMetadata</code>.</p>
   */
  NearestModelName?: string;
}

export enum ProductionVariantInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_LARGE = "ml.c4.large",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_LARGE = "ml.c5d.large",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_LARGE = "ml.c5.large",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_C6GD_12XLARGE = "ml.c6gd.12xlarge",
  ML_C6GD_16XLARGE = "ml.c6gd.16xlarge",
  ML_C6GD_2XLARGE = "ml.c6gd.2xlarge",
  ML_C6GD_4XLARGE = "ml.c6gd.4xlarge",
  ML_C6GD_8XLARGE = "ml.c6gd.8xlarge",
  ML_C6GD_LARGE = "ml.c6gd.large",
  ML_C6GD_XLARGE = "ml.c6gd.xlarge",
  ML_C6GN_12XLARGE = "ml.c6gn.12xlarge",
  ML_C6GN_16XLARGE = "ml.c6gn.16xlarge",
  ML_C6GN_2XLARGE = "ml.c6gn.2xlarge",
  ML_C6GN_4XLARGE = "ml.c6gn.4xlarge",
  ML_C6GN_8XLARGE = "ml.c6gn.8xlarge",
  ML_C6GN_LARGE = "ml.c6gn.large",
  ML_C6GN_XLARGE = "ml.c6gn.xlarge",
  ML_C6G_12XLARGE = "ml.c6g.12xlarge",
  ML_C6G_16XLARGE = "ml.c6g.16xlarge",
  ML_C6G_2XLARGE = "ml.c6g.2xlarge",
  ML_C6G_4XLARGE = "ml.c6g.4xlarge",
  ML_C6G_8XLARGE = "ml.c6g.8xlarge",
  ML_C6G_LARGE = "ml.c6g.large",
  ML_C6G_XLARGE = "ml.c6g.xlarge",
  ML_C6I_12XLARGE = "ml.c6i.12xlarge",
  ML_C6I_16XLARGE = "ml.c6i.16xlarge",
  ML_C6I_24XLARGE = "ml.c6i.24xlarge",
  ML_C6I_2XLARGE = "ml.c6i.2xlarge",
  ML_C6I_32XLARGE = "ml.c6i.32xlarge",
  ML_C6I_4XLARGE = "ml.c6i.4xlarge",
  ML_C6I_8XLARGE = "ml.c6i.8xlarge",
  ML_C6I_LARGE = "ml.c6i.large",
  ML_C6I_XLARGE = "ml.c6i.xlarge",
  ML_C7G_12XLARGE = "ml.c7g.12xlarge",
  ML_C7G_16XLARGE = "ml.c7g.16xlarge",
  ML_C7G_2XLARGE = "ml.c7g.2xlarge",
  ML_C7G_4XLARGE = "ml.c7g.4xlarge",
  ML_C7G_8XLARGE = "ml.c7g.8xlarge",
  ML_C7G_LARGE = "ml.c7g.large",
  ML_C7G_XLARGE = "ml.c7g.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_G5_12XLARGE = "ml.g5.12xlarge",
  ML_G5_16XLARGE = "ml.g5.16xlarge",
  ML_G5_24XLARGE = "ml.g5.24xlarge",
  ML_G5_2XLARGE = "ml.g5.2xlarge",
  ML_G5_48XLARGE = "ml.g5.48xlarge",
  ML_G5_4XLARGE = "ml.g5.4xlarge",
  ML_G5_8XLARGE = "ml.g5.8xlarge",
  ML_G5_XLARGE = "ml.g5.xlarge",
  ML_INF1_24XLARGE = "ml.inf1.24xlarge",
  ML_INF1_2XLARGE = "ml.inf1.2xlarge",
  ML_INF1_6XLARGE = "ml.inf1.6xlarge",
  ML_INF1_XLARGE = "ml.inf1.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_M6GD_12XLARGE = "ml.m6gd.12xlarge",
  ML_M6GD_16XLARGE = "ml.m6gd.16xlarge",
  ML_M6GD_2XLARGE = "ml.m6gd.2xlarge",
  ML_M6GD_4XLARGE = "ml.m6gd.4xlarge",
  ML_M6GD_8XLARGE = "ml.m6gd.8xlarge",
  ML_M6GD_LARGE = "ml.m6gd.large",
  ML_M6GD_XLARGE = "ml.m6gd.xlarge",
  ML_M6G_12XLARGE = "ml.m6g.12xlarge",
  ML_M6G_16XLARGE = "ml.m6g.16xlarge",
  ML_M6G_2XLARGE = "ml.m6g.2xlarge",
  ML_M6G_4XLARGE = "ml.m6g.4xlarge",
  ML_M6G_8XLARGE = "ml.m6g.8xlarge",
  ML_M6G_LARGE = "ml.m6g.large",
  ML_M6G_XLARGE = "ml.m6g.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_P4DE_24XLARGE = "ml.p4de.24xlarge",
  ML_P4D_24XLARGE = "ml.p4d.24xlarge",
  ML_R5D_12XLARGE = "ml.r5d.12xlarge",
  ML_R5D_24XLARGE = "ml.r5d.24xlarge",
  ML_R5D_2XLARGE = "ml.r5d.2xlarge",
  ML_R5D_4XLARGE = "ml.r5d.4xlarge",
  ML_R5D_LARGE = "ml.r5d.large",
  ML_R5D_XLARGE = "ml.r5d.xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_R6GD_12XLARGE = "ml.r6gd.12xlarge",
  ML_R6GD_16XLARGE = "ml.r6gd.16xlarge",
  ML_R6GD_2XLARGE = "ml.r6gd.2xlarge",
  ML_R6GD_4XLARGE = "ml.r6gd.4xlarge",
  ML_R6GD_8XLARGE = "ml.r6gd.8xlarge",
  ML_R6GD_LARGE = "ml.r6gd.large",
  ML_R6GD_XLARGE = "ml.r6gd.xlarge",
  ML_R6G_12XLARGE = "ml.r6g.12xlarge",
  ML_R6G_16XLARGE = "ml.r6g.16xlarge",
  ML_R6G_2XLARGE = "ml.r6g.2xlarge",
  ML_R6G_4XLARGE = "ml.r6g.4xlarge",
  ML_R6G_8XLARGE = "ml.r6g.8xlarge",
  ML_R6G_LARGE = "ml.r6g.large",
  ML_R6G_XLARGE = "ml.r6g.xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
}

export enum TransformInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
}

/**
 * <p>A structure of additional Inference Specification. Additional Inference Specification
 *             specifies details about inference jobs that can be run with models based on
 *             this model package</p>
 */
export interface AdditionalInferenceSpecificationDefinition {
  /**
   * <p>A unique name to identify the additional inference specification. The name must
   *            be unique within the list of your additional inference specifications for a
   *            particular model package.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the additional Inference specification</p>
   */
  Description?: string;

  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run
   *            or on which an endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes?: (TransformInstanceType | string)[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes?: (ProductionVariantInstanceType | string)[];

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes?: string[];

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes?: string[];
}

/**
 * <p>A tag object that consists of a key and an optional value, used to manage metadata
 *             for SageMaker Amazon Web Services resources.</p>
 *          <p>You can add tags to notebook instances, training jobs, hyperparameter tuning jobs,
 *             batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints. For more information on adding tags to SageMaker resources, see <a>AddTags</a>.</p>
 *          <p>For more information on adding metadata to your Amazon Web Services resources with
 *             tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. For advice on best practices for
 *             managing Amazon Web Services resources with tagging, see <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
 *                 Best Practices: Implement an Effective Amazon Web Services Resource Tagging
 *                 Strategy</a>.</p>
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique per resource.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

export interface AddTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags: Tag[] | undefined;
}

export interface AddTagsOutput {
  /**
   * <p>A list of tags associated with the SageMaker resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Edge Manager agent version.</p>
 */
export interface AgentVersion {
  /**
   * <p>Version of the agent.</p>
   */
  Version: string | undefined;

  /**
   * <p>The number of Edge Manager agents.</p>
   */
  AgentCount: number | undefined;
}

/**
 * <p>An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.</p>
 */
export interface Alarm {
  /**
   * <p>The name of a CloudWatch alarm in your account.</p>
   */
  AlarmName?: string;
}

export enum AlgorithmSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

/**
 * <p>Specifies a metric that the training algorithm
 *             writes
 *             to <code>stderr</code> or <code>stdout</code>. SageMakerhyperparameter
 *             tuning captures
 *             all
 *             defined metrics.
 *             You
 *             specify one metric that a hyperparameter tuning job uses as its
 *             objective metric to choose the best training job.</p>
 */
export interface MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   */
  Name: string | undefined;

  /**
   * <p>A regular expression that searches the output of a training job and gets the value of
   *             the metric. For more information about using regular expressions to define metrics, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html">Defining
   *                 Objective Metrics</a>.</p>
   */
  Regex: string | undefined;
}

export enum TrainingRepositoryAccessMode {
  PLATFORM = "Platform",
  VPC = "Vpc",
}

/**
 * <p>An object containing authentication information for a private Docker registry.</p>
 */
export interface TrainingRepositoryAuthConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function used to give SageMaker access
   *             credentials to your private Docker registry.</p>
   */
  TrainingRepositoryCredentialsProviderArn: string | undefined;
}

/**
 * <p>The configuration to use an image from a private Docker registry for a training
 *             job.</p>
 */
export interface TrainingImageConfig {
  /**
   * <p>The method that your training job will use to gain access to the images in your
   *             private Docker registry. For access to an image in a private Docker registry, set to
   *                 <code>Vpc</code>.</p>
   */
  TrainingRepositoryAccessMode: TrainingRepositoryAccessMode | string | undefined;

  /**
   * <p>An object containing authentication information for a private Docker registry
   *             containing your training images.</p>
   */
  TrainingRepositoryAuthConfig?: TrainingRepositoryAuthConfig;
}

export enum TrainingInputMode {
  FASTFILE = "FastFile",
  FILE = "File",
  PIPE = "Pipe",
}

/**
 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a>
 *             request.</p>
 *          <p>For more information about algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For
 *             information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
 *                 SageMaker</a>. </p>
 */
export interface AlgorithmSpecification {
  /**
   * <p>The registry path of the Docker image
   *              that contains the training algorithm.
   *             For information about docker registry paths for SageMaker built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Docker Registry
   *                 Paths and Example Code</a> in the <i>Amazon SageMaker developer guide</i>.
   *             SageMaker supports both <code>registry/repository[:tag]</code> and
   *                 <code>registry/repository[@digest]</code> image path formats. For more information
   *             about using your custom training container, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
   *                 Amazon SageMaker</a>.</p>
   *          <note>
   *             <p>You must specify either the algorithm name to the <code>AlgorithmName</code>
   *                 parameter or the image URI of the algorithm container to the
   *                     <code>TrainingImage</code> parameter.</p>
   *             <p>For more information, see the note in the <code>AlgorithmName</code> parameter
   *                 description.</p>
   *          </note>
   */
  TrainingImage?: string;

  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an
   *             algorithm resource that you created or subscribe to on Amazon Web Services
   *             Marketplace.</p>
   *          <note>
   *             <p>You must specify either the algorithm name to the <code>AlgorithmName</code>
   *                 parameter or the image URI of the algorithm container to the
   *                     <code>TrainingImage</code> parameter.</p>
   *             <p>Note that the <code>AlgorithmName</code> parameter is mutually exclusive with the
   *                     <code>TrainingImage</code> parameter. If you specify a value for the
   *                     <code>AlgorithmName</code> parameter, you can't specify a value for
   *                     <code>TrainingImage</code>, and vice versa.</p>
   *             <p>If you specify values for both parameters, the training job might break; if you
   *                 don't specify any value for both parameters, the training job might raise a
   *                     <code>null</code> error.</p>
   *          </note>
   */
  AlgorithmName?: string;

  /**
   * <p>The training input mode that the algorithm supports. For more information about input
   *             modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *          <p>
   *             <b>Pipe mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly from
   *             Amazon S3 to the container.</p>
   *          <p>
   *             <b>File mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>File</code> mode, SageMaker downloads the training data from
   *             S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume
   *             for the training container.</p>
   *          <p>You must provision the ML storage volume with sufficient capacity to accommodate the
   *             data downloaded from S3. In addition to the training data, the ML storage volume also
   *             stores the output model. The algorithm container uses the ML storage volume to also
   *             store intermediate information, if any.</p>
   *          <p>For distributed algorithms, training data is distributed uniformly. Your training
   *             duration is predictable if the input data objects sizes are approximately the same. SageMaker
   *             does not split the files any further for model training. If the object sizes are skewed,
   *             training won't be optimal as the data distribution is also skewed when one host in a
   *             training cluster is overloaded, thus becoming a bottleneck in training.</p>
   *          <p>
   *             <b>FastFile mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly from
   *             S3 to the container with no code changes, and provides file system access to the data.
   *             Users can author their training script to interact with these files as if they were
   *             stored on disk.</p>
   *          <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially. Augmented
   *             manifest files aren't supported. The startup time is lower when there are fewer files in
   *             the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>To generate and save time-series metrics during training, set to <code>true</code>.
   *             The default is <code>false</code> and time-series metrics aren't generated except in the
   *             following cases:</p>
   *          <ul>
   *             <li>
   *                <p>You use one of the SageMaker built-in algorithms</p>
   *             </li>
   *             <li>
   *                <p>You use one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pre-built-containers-frameworks-deep-learning.html">Prebuilt SageMaker Docker Images</a>:</p>
   *                <ul>
   *                   <li>
   *                      <p>Tensorflow (version >= 1.15)</p>
   *                   </li>
   *                   <li>
   *                      <p>MXNet (version >= 1.6)</p>
   *                   </li>
   *                   <li>
   *                      <p>PyTorch (version >= 1.3)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>You specify at least one <a>MetricDefinition</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EnableSageMakerMetricsTimeSeries?: boolean;

  /**
   * <p>The <a href="https://docs.docker.com/engine/reference/builder/">entrypoint script
   *                 for a Docker container</a> used to run a training job. This script takes
   *             precedence over the default train processing instructions. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Amazon SageMaker
   *                 Runs Your Training Image</a> for more information.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments for a container used to run a training job. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Amazon SageMaker
   *                 Runs Your Training Image</a> for additional information.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>The configuration to use an image from a private Docker registry for a training job.</p>
   */
  TrainingImageConfig?: TrainingImageConfig;
}

export enum AlgorithmStatus {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

export enum DetailedAlgorithmStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted",
}

/**
 * <p>Represents the overall status of an algorithm.</p>
 */
export interface AlgorithmStatusItem {
  /**
   * <p>The name of the algorithm for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedAlgorithmStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

/**
 * <p>Specifies the validation and image scan statuses of the algorithm.</p>
 */
export interface AlgorithmStatusDetails {
  /**
   * <p>The status of algorithm validation.</p>
   */
  ValidationStatuses?: AlgorithmStatusItem[];

  /**
   * <p>The status of the scan of the algorithm's Docker image container.</p>
   */
  ImageScanStatuses?: AlgorithmStatusItem[];
}

/**
 * <p>Provides summary information about an algorithm.</p>
 */
export interface AlgorithmSummary {
  /**
   * <p>The name of the algorithm that is described by the summary.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;
}

export enum CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

export enum FileSystemAccessMode {
  RO = "ro",
  RW = "rw",
}

export enum FileSystemType {
  EFS = "EFS",
  FSXLUSTRE = "FSxLustre",
}

/**
 * <p>Specifies a file system data source for a channel.</p>
 */
export interface FileSystemDataSource {
  /**
   * <p>The file system id.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The access mode of the mount of the directory associated with the channel. A directory
   *             can be mounted either in <code>ro</code> (read-only) or <code>rw</code> (read-write)
   *             mode.</p>
   */
  FileSystemAccessMode: FileSystemAccessMode | string | undefined;

  /**
   * <p>The file system type. </p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * <p>The full path to the directory to associate with the channel.</p>
   */
  DirectoryPath: string | undefined;
}

export enum S3DataDistribution {
  FULLY_REPLICATED = "FullyReplicated",
  SHARDED_BY_S3_KEY = "ShardedByS3Key",
}

export enum S3DataType {
  AUGMENTED_MANIFEST_FILE = "AugmentedManifestFile",
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

/**
 * <p>Describes the S3 data source.</p>
 */
export interface S3DataSource {
  /**
   * <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix.
   *             SageMaker uses all objects that match the specified key name prefix for model training. </p>
   *          <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want SageMaker to use for model
   *             training. </p>
   *          <p>If you choose <code>AugmentedManifestFile</code>, S3Uri identifies an object that is
   *             an augmented manifest file in JSON lines format. This file contains the data you want to
   *             use for model training. <code>AugmentedManifestFile</code> can only be used if the
   *             Channel's input mode is <code>Pipe</code>.</p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either
   *             a key name prefix or a manifest. For example: </p>
   *          <ul>
   *             <li>
   *                <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                </p>
   *                <p> A manifest is an S3 object which is a JSON file consisting of an array of
   *                     elements. The first element is a prefix which is followed by one or more
   *                     suffixes. SageMaker appends the suffix elements to the prefix to get a full set
   *                     of <code>S3Uri</code>. Note that the prefix must be a valid non-empty
   *                         <code>S3Uri</code> that precludes users from specifying a manifest whose
   *                     individual <code>S3Uri</code> is sourced from different S3 buckets.</p>
   *                <p> The following code example shows a valid manifest format: </p>
   *                <p>
   *                   <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                </p>
   *                <p>
   *                   <code> "relative/path/to/custdata-1",</code>
   *                </p>
   *                <p>
   *                   <code> "relative/path/custdata-2",</code>
   *                </p>
   *                <p>
   *                   <code> ...</code>
   *                </p>
   *                <p>
   *                   <code> "relative/path/custdata-N"</code>
   *                </p>
   *                <p>
   *                   <code>]</code>
   *                </p>
   *                <p> This JSON is equivalent to the following <code>S3Uri</code>
   *                     list:</p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                </p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                </p>
   *                <p>
   *                   <code>...</code>
   *                </p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                </p>
   *                <p>The complete set of <code>S3Uri</code> in this manifest is the input data
   *                     for the channel for this data source. The object that each <code>S3Uri</code>
   *                     points to must be readable by the IAM role that SageMaker uses to perform tasks on
   *                     your behalf. </p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;

  /**
   * <p>If you want SageMaker to replicate the entire dataset on each ML compute instance that
   *             is launched for model training, specify <code>FullyReplicated</code>. </p>
   *          <p>If you want SageMaker to replicate a subset of data on each ML compute instance that is
   *             launched for model training, specify <code>ShardedByS3Key</code>. If there are
   *                 <i>n</i> ML compute instances launched for a training job, each
   *             instance gets approximately 1/<i>n</i> of the number of S3 objects. In
   *             this case, model training on each machine uses only the subset of training data. </p>
   *          <p>Don't choose more ML compute instances for training than available S3 objects. If
   *             you do, some nodes won't get any data and you will pay for nodes that aren't getting any
   *             training data. This applies in both File and Pipe modes. Keep this in mind when
   *             developing algorithms. </p>
   *          <p>In distributed training, where you use multiple ML compute EC2 instances, you might
   *             choose <code>ShardedByS3Key</code>. If the algorithm requires copying training data to
   *             the ML storage volume (when <code>TrainingInputMode</code> is set to <code>File</code>),
   *             this copies 1/<i>n</i> of the number of objects. </p>
   */
  S3DataDistributionType?: S3DataDistribution | string;

  /**
   * <p>A list of one or more attribute names to use that are found in a specified augmented
   *             manifest file.</p>
   */
  AttributeNames?: string[];

  /**
   * <p>A list of names of instance groups that get data from the S3 data source.</p>
   */
  InstanceGroupNames?: string[];
}

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface DataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource?: S3DataSource;

  /**
   * <p>The file system that is associated with a channel.</p>
   */
  FileSystemDataSource?: FileSystemDataSource;
}

export enum RecordWrapper {
  NONE = "None",
  RECORDIO = "RecordIO",
}

/**
 * <p>A configuration for a shuffle option for input data in a channel. If you use
 *                 <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix
 *             matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object
 *             references in the <code>ManifestFile</code> is shuffled. If you use
 *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
 *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
 *             using the <code>Seed</code> value.</p>
 *          <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at
 *             the start of every epoch. With large datasets, this ensures that the order of the
 *             training data is different for each epoch, and it helps reduce bias and possible
 *             overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined
 *             with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is
 *             shuffled across nodes so that the content sent to a particular node on the first epoch
 *             might be sent to a different node on the second epoch.</p>
 */
export interface ShuffleConfig {
  /**
   * <p>Determines the shuffling order in <code>ShuffleConfig</code> value.</p>
   */
  Seed: number | undefined;
}

/**
 * <p>A channel is a named input source that training algorithms can consume. </p>
 */
export interface Channel {
  /**
   * <p>The name of the channel. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The location of the channel data.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>The MIME type of the data.</p>
   */
  ContentType?: string;

  /**
   * <p>If training data is compressed, the compression type. The default value is
   *                 <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In
   *             File mode, leave this field unset or set it to None.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p></p>
   *          <p>Specify RecordIO as the value when input data is in raw format but the training
   *             algorithm requires the RecordIO format. In this case, SageMaker wraps each individual S3
   *             object in a RecordIO record. If the input data is already in RecordIO format, you don't
   *             need to set this attribute. For more information, see <a href="https://mxnet.apache.org/api/architecture/note_data_loading#data-format">Create
   *                 a Dataset Using RecordIO</a>. </p>
   *          <p>In File mode, leave this field unset or set it to None.</p>
   */
  RecordWrapperType?: RecordWrapper | string;

  /**
   * <p>(Optional) The input mode to use for the data channel in a training job. If you don't
   *             set a value for <code>InputMode</code>, SageMaker uses the value set for
   *                 <code>TrainingInputMode</code>. Use this parameter to override the
   *                 <code>TrainingInputMode</code> setting in a <a>AlgorithmSpecification</a>
   *             request when you have a channel that needs a different input mode from the training
   *             job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML
   *             storage volume, and mount the directory to a Docker volume, use <code>File</code> input
   *             mode. To stream data directly from Amazon S3 to the container, choose <code>Pipe</code> input
   *             mode.</p>
   *          <p>To use a model for incremental training, choose <code>File</code> input model.</p>
   */
  InputMode?: TrainingInputMode | string;

  /**
   * <p>A configuration for a shuffle option for input data in a channel. If you use
   *                 <code>S3Prefix</code> for <code>S3DataType</code>, this shuffles the results of the
   *             S3 key prefix matches. If you use <code>ManifestFile</code>, the order of the S3 object
   *             references in the <code>ManifestFile</code> is shuffled. If you use
   *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
   *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
   *             using the <code>Seed</code> value.</p>
   *          <p>For Pipe input mode, shuffling is done at the start of every epoch. With large
   *             datasets this ensures that the order of the training data is different for each epoch,
   *             it helps reduce bias and possible overfitting. In a multi-node training job when
   *             ShuffleConfig is combined with <code>S3DataDistributionType</code> of
   *                 <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content
   *             sent to a particular node on the first epoch might be sent to a different node on the
   *             second epoch.</p>
   */
  ShuffleConfig?: ShuffleConfig;
}

/**
 * <p>Provides information about how to store model training results (model
 *             artifacts).</p>
 */
export interface OutputDataConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker
   *             uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The
   *                 <code>KmsKeyId</code> can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services
   *                 Key Management Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>. </p>
   */
  S3OutputPath: string | undefined;
}

export enum TrainingInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5N_18XLARGE = "ml.c5n.18xlarge",
  ML_C5N_2XLARGE = "ml.c5n.2xlarge",
  ML_C5N_4XLARGE = "ml.c5n.4xlarge",
  ML_C5N_9XLARGE = "ml.c5n.9xlarge",
  ML_C5N_XLARGE = "ml.c5n.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_G5_12XLARGE = "ml.g5.12xlarge",
  ML_G5_16XLARGE = "ml.g5.16xlarge",
  ML_G5_24XLARGE = "ml.g5.24xlarge",
  ML_G5_2XLARGE = "ml.g5.2xlarge",
  ML_G5_48XLARGE = "ml.g5.48xlarge",
  ML_G5_4XLARGE = "ml.g5.4xlarge",
  ML_G5_8XLARGE = "ml.g5.8xlarge",
  ML_G5_XLARGE = "ml.g5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_P4D_24XLARGE = "ml.p4d.24xlarge",
  ML_TRN1_2XLARGE = "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE = "ml.trn1.32xlarge",
}

/**
 * <p>Defines an instance group for heterogeneous cluster training. When requesting a
 *             training job using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> API, you can configure multiple instance groups .</p>
 */
export interface InstanceGroup {
  /**
   * <p>Specifies the instance type of the instance group.</p>
   */
  InstanceType: TrainingInstanceType | string | undefined;

  /**
   * <p>Specifies the number of instances of the instance group.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Specifies the name of the instance group.</p>
   */
  InstanceGroupName: string | undefined;
}

/**
 * <p>Describes the resources, including machine learning (ML) compute instances and ML
 *             storage volumes, to use for model training. </p>
 */
export interface ResourceConfig {
  /**
   * <p>The ML compute instance type. </p>
   *          <note>
   *             <p>SageMaker Training on Amazon Elastic Compute Cloud (EC2) P4de instances is in preview release starting
   *                 December 9th, 2022. </p>
   *             <p>
   *                <a href="http://aws.amazon.com/ec2/instance-types/p4/">Amazon EC2 P4de instances</a>
   *                 (currently in preview) are powered by 8 NVIDIA A100 GPUs with 80GB high-performance
   *                 HBM2e GPU memory, which accelerate the speed of training ML models that need to be
   *                 trained on large datasets of high-resolution data. In this preview release, Amazon SageMaker
   *                 supports ML training jobs on P4de instances (<code>ml.p4de.24xlarge</code>) to
   *                 reduce model training time. The <code>ml.p4de.24xlarge</code> instances are
   *                 available in the following Amazon Web Services Regions. </p>
   *             <ul>
   *                <li>
   *                   <p>US East (N. Virginia) (us-east-1)</p>
   *                </li>
   *                <li>
   *                   <p>US West (Oregon) (us-west-2)</p>
   *                </li>
   *             </ul>
   *             <p>To request quota limit increase and start using P4de instances, contact the SageMaker
   *                 Training service team through your account team.</p>
   *          </note>
   */
  InstanceType?: TrainingInstanceType | string;

  /**
   * <p>The number of ML compute instances to use. For distributed training, provide a
   *             value greater than 1. </p>
   */
  InstanceCount?: number;

  /**
   * <p>The size of the ML storage volume that you want to provision. </p>
   *          <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use the ML storage volume for scratch space. If you want to store
   *             the training data in the ML storage volume, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. </p>
   *          <p>When using an ML instance with <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html#nvme-ssd-volumes">NVMe SSD
   *                 volumes</a>, SageMaker doesn't provision Amazon EBS General Purpose SSD (gp2) storage.
   *             Available storage is fixed to the NVMe-type instance's storage capacity. SageMaker configures
   *             storage paths for training datasets, checkpoints, model artifacts, and outputs to use
   *             the entire capacity of the instance storage. For example, ML instance families with the
   *             NVMe-type instance storage include <code>ml.p4d</code>, <code>ml.g4dn</code>, and
   *                 <code>ml.g5</code>. </p>
   *          <p>When using an ML instance with the EBS-only storage option and without instance
   *             storage, you must define the size of EBS volume through <code>VolumeSizeInGB</code> in
   *             the <code>ResourceConfig</code> API. For example, ML instance families that use EBS
   *             volumes include <code>ml.c5</code> and <code>ml.p2</code>. </p>
   *          <p>To look up instance types and their instance storage types and volumes, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>.</p>
   *          <p>To find the default local paths defined by the SageMaker training platform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-train-storage.html">Amazon SageMaker
   *                 Training Storage Folders for Training Datasets, Checkpoints, Model Artifacts, and
   *                 Outputs</a>.</p>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services KMS key that SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training job.</p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *          </note>
   *          <p>The <code>VolumeKmsKeyId</code> can be in any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The configuration of a heterogeneous cluster in JSON format.</p>
   */
  InstanceGroups?: InstanceGroup[];

  /**
   * <p>The duration of time in seconds to retain configured resources in a warm pool for
   *             subsequent training jobs.</p>
   */
  KeepAlivePeriodInSeconds?: number;
}

/**
 * <p>Specifies a limit to how long a model training job or model compilation job can run.
 *             It also specifies how long a managed spot training job has to complete. When the job
 *             reaches the time limit, SageMaker ends the training or compilation job. Use this API to cap
 *             model training costs.</p>
 *          <p>To stop a training job, SageMaker sends the algorithm the <code>SIGTERM</code> signal,
 *             which delays job termination for 120 seconds. Algorithms can use this 120-second window
 *             to save the model artifacts, so the results of training are not lost. </p>
 *          <p>The training algorithms provided by SageMaker automatically save the intermediate results
 *             of a model training job when possible. This attempt to save artifacts is only a best
 *             effort case as model might not be in a state from which it can be saved. For example, if
 *             training has just started, the model might not be ready to save. When saved, this
 *             intermediate data is a valid model artifact. You can use it to create a model with
 *                 <code>CreateModel</code>.</p>
 *          <note>
 *             <p>The Neural Topic Model (NTM) currently does not support saving intermediate model
 *                 artifacts. When training NTMs, make sure that the maximum runtime is sufficient for
 *                 the training job to complete.</p>
 *          </note>
 */
export interface StoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that a training or compilation job can run
   *             before it is stopped.</p>
   *          <p>For compilation jobs, if the job does not complete during this time, a
   *                 <code>TimeOut</code> error is generated. We recommend starting with 900 seconds and
   *             increasing as necessary based on your model.</p>
   *          <p>For all other jobs, if the job does not complete during this time, SageMaker ends the job.
   *             When <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxRuntimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt. The default value is 1 day. The maximum value is
   *             28 days.</p>
   *          <p>The maximum time that a <code>TrainingJob</code> can run in total, including any time
   *             spent publishing metrics or archiving and uploading models after it has been stopped, is
   *             30 days.</p>
   */
  MaxRuntimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, that a managed Spot training job has to
   *             complete. It is the amount of time spent waiting for Spot capacity plus the amount of
   *             time the job can run. It must be equal to or greater than
   *                 <code>MaxRuntimeInSeconds</code>. If the job does not complete during this time,
   *             SageMaker ends the job.</p>
   *          <p>When <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxWaitTimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt.</p>
   */
  MaxWaitTimeInSeconds?: number;
}

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 */
export interface TrainingJobDefinition {
  /**
   * <p>The training input mode that the algorithm supports. For more information about input
   *             modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *          <p>
   *             <b>Pipe mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly from
   *             Amazon S3 to the container.</p>
   *          <p>
   *             <b>File mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>File</code> mode, SageMaker downloads the training data from
   *             S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume
   *             for the training container.</p>
   *          <p>You must provision the ML storage volume with sufficient capacity to accommodate the
   *             data downloaded from S3. In addition to the training data, the ML storage volume also
   *             stores the output model. The algorithm container uses the ML storage volume to also
   *             store intermediate information, if any.</p>
   *          <p>For distributed algorithms, training data is distributed uniformly. Your training
   *             duration is predictable if the input data objects sizes are approximately the same. SageMaker
   *             does not split the files any further for model training. If the object sizes are skewed,
   *             training won't be optimal as the data distribution is also skewed when one host in a
   *             training cluster is overloaded, thus becoming a bottleneck in training.</p>
   *          <p>
   *             <b>FastFile mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly from
   *             S3 to the container with no code changes, and provides file system access to the data.
   *             Users can author their training script to interact with these files as if they were
   *             stored on disk.</p>
   *          <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially. Augmented
   *             manifest files aren't supported. The startup time is lower when there are fewer files in
   *             the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input
   *             source.</p>
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. SageMaker creates
   *             subfolders for the artifacts.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for
   *             model training.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export enum BatchStrategy {
  MULTI_RECORD = "MultiRecord",
  SINGLE_RECORD = "SingleRecord",
}

/**
 * <p>Describes the S3 data source.</p>
 */
export interface TransformS3DataSource {
  /**
   * <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix.
   *             Amazon SageMaker uses all objects with the specified key name prefix for batch transform. </p>
   *          <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch
   *             transform. </p>
   *          <p>The following values are compatible: <code>ManifestFile</code>,
   *             <code>S3Prefix</code>
   *          </p>
   *          <p>The following value is not compatible: <code>AugmentedManifestFile</code>
   *          </p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *             key name prefix or a manifest. For example:</p>
   *          <ul>
   *             <li>
   *                <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>. </p>
   *             </li>
   *             <li>
   *                <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                </p>
   *                <p> The manifest is an S3 object which is a JSON file with the following format: </p>
   *                <p>
   *                   <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                </p>
   *                <p>
   *                   <code>"relative/path/to/custdata-1",</code>
   *                </p>
   *                <p>
   *                   <code>"relative/path/custdata-2",</code>
   *                </p>
   *                <p>
   *                   <code>...</code>
   *                </p>
   *                <p>
   *                   <code>"relative/path/custdata-N"</code>
   *                </p>
   *                <p>
   *                   <code>]</code>
   *                </p>
   *                <p> The preceding JSON matches the following <code>S3Uris</code>: </p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                </p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                </p>
   *                <p>
   *                   <code>...</code>
   *                </p>
   *                <p>
   *                   <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                </p>
   *                <p> The complete set of <code>S3Uris</code> in this manifest constitutes the
   *                     input data for the channel for this datasource. The object that each
   *                         <code>S3Uris</code> points to must be readable by the IAM role that Amazon SageMaker
   *                     uses to perform tasks on your behalf.</p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;
}

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface TransformDataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource: TransformS3DataSource | undefined;
}

export enum SplitType {
  LINE = "Line",
  NONE = "None",
  RECORDIO = "RecordIO",
  TFRECORD = "TFRecord",
}

/**
 * <p>Describes the input source of a transform job and the way the transform job consumes
 *             it.</p>
 */
export interface TransformInput {
  /**
   * <p>Describes the location of
   *             the
   *             channel data, which is, the S3 location of the input data that the
   *             model can consume.</p>
   */
  DataSource: TransformDataSource | undefined;

  /**
   * <p>The multipurpose internet mail extension
   *             (MIME)
   *             type of the data. Amazon SageMaker uses the MIME type with each http call to
   *             transfer data to the transform job.</p>
   */
  ContentType?: string;

  /**
   * <p>If your transform data
   *             is
   *             compressed, specify the compression type. Amazon SageMaker automatically
   *             decompresses the data for the transform job accordingly. The default value is
   *                 <code>None</code>.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The method to use to split the transform job's data files into smaller batches.
   *             Splitting is necessary when the total size of each object is too large to fit in a
   *             single request. You can also use data splitting to improve performance by processing
   *             multiple concurrent mini-batches. The default value for <code>SplitType</code> is
   *                 <code>None</code>, which indicates that input data files are not split, and request
   *             payloads contain the entire contents of an input object. Set the value of this parameter
   *             to <code>Line</code> to split records on a newline character boundary.
   *                 <code>SplitType</code> also supports a number of record-oriented binary data
   *             formats. Currently, the supported record formats are:</p>
   *          <ul>
   *             <li>
   *                <p>RecordIO</p>
   *             </li>
   *             <li>
   *                <p>TFRecord</p>
   *             </li>
   *          </ul>
   *          <p>When splitting is enabled, the size of a mini-batch depends on the values of the
   *                 <code>BatchStrategy</code> and <code>MaxPayloadInMB</code> parameters. When the
   *             value of <code>BatchStrategy</code> is <code>MultiRecord</code>, Amazon SageMaker sends the maximum
   *             number of records in each request, up to the <code>MaxPayloadInMB</code> limit. If the
   *             value of <code>BatchStrategy</code> is <code>SingleRecord</code>, Amazon SageMaker sends individual
   *             records in each request.</p>
   *          <note>
   *             <p>Some data formats represent a record as a binary payload wrapped with extra
   *                 padding bytes. When splitting is applied to a binary data format, padding is removed
   *                 if the value of <code>BatchStrategy</code> is set to <code>SingleRecord</code>.
   *                 Padding is not removed if the value of <code>BatchStrategy</code> is set to
   *                     <code>MultiRecord</code>.</p>
   *             <p>For more information about <code>RecordIO</code>, see <a href="https://mxnet.apache.org/api/faq/recordio">Create a Dataset Using
   *                     RecordIO</a> in the MXNet documentation. For more information about
   *                     <code>TFRecord</code>, see <a href="https://www.tensorflow.org/guide/data#consuming_tfrecord_data">Consuming TFRecord data</a> in the TensorFlow documentation.</p>
   *          </note>
   */
  SplitType?: SplitType | string;
}

export enum AssemblyType {
  LINE = "Line",
  NONE = "None",
}

/**
 * <p>Describes the results of a transform job.</p>
 */
export interface TransformOutput {
  /**
   * <p>The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   *          <p>For every S3 object used as input for the transform job, batch transform stores the
   *             transformed data with an .<code>out</code> suffix in a corresponding subfolder in the
   *             location in the output prefix. For example, for the input data stored at
   *                 <code>s3://bucket-name/input-name-prefix/dataset01/data.csv</code>, batch transform
   *             stores the transformed data at
   *                 <code>s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out</code>.
   *             Batch transform doesn't upload partially processed objects. For an input S3 object that
   *             contains multiple records, it creates an .<code>out</code> file only if the transform
   *             job succeeds on the entire file. When the input contains multiple S3 objects, the batch
   *             transform job processes the listed S3 objects and uploads only the output for
   *             successfully processed objects. If any object fails in the transform job batch transform
   *             marks the job as failed to prompt investigation.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http
   *             call to transfer data from the transform job.</p>
   */
  Accept?: string;

  /**
   * <p>Defines how to assemble the results of the transform job as a single S3 object. Choose
   *             a format that is most convenient to you. To concatenate the results in binary format,
   *             specify <code>None</code>. To add a newline character at the end of every transformed
   *             record, specify
   *             <code>Line</code>.</p>
   */
  AssembleWith?: AssemblyType | string;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
   *             Amazon S3 server-side encryption. The <code>KmsKeyId</code> can be any of the following
   *             formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your
   *             role's account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the
   *                 <i>Amazon Simple Storage Service
   *                 Developer Guide.</i>
   *          </p>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   * 	<a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>
   * 		request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                     Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>Describes the resources, including ML instance types and ML instance count, to use for
 *             transform job.</p>
 */
export interface TransformResources {
  /**
   * <p>The ML compute instance type for the transform job. If you are using built-in
   *             algorithms to
   *             transform
   *             moderately sized datasets, we recommend using ml.m4.xlarge or
   *             <code>ml.m5.large</code>instance types.</p>
   */
  InstanceType: TransformInstanceType | string | undefined;

  /**
   * <p>The number of
   *             ML
   *             compute instances to use in the transform job. The default value is
   *                 <code>1</code>, and the maximum is <code>100</code>. For distributed transform jobs,
   *             specify a value greater than <code>1</code>.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume
   *             attached to the ML compute instance(s) that run the batch transform job.</p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *          </note>
   *          <p>
   *             The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

/**
 * <p>Defines the input needed to run a transform job using the inference specification
 *             specified in the algorithm.</p>
 */
export interface TransformJobDefinition {
  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record
   *             (without metadata).</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p>
   *          <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results
   *             from the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;
}

/**
 * <p>Defines a training job and a batch transform job that SageMaker runs to validate your
 *             algorithm.</p>
 *          <p>The data provided in the validation profile is made available to your buyers on
 *                 Amazon Web Services Marketplace.</p>
 */
export interface AlgorithmValidationProfile {
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: TransformJobDefinition;
}

/**
 * <p>Specifies configurations for one or more training jobs that SageMaker runs to test the
 *             algorithm.</p>
 */
export interface AlgorithmValidationSpecification {
  /**
   * <p>The IAM roles that SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;
}

/**
 * <p>Configures how labels are consolidated across human workers and processes output data.
 *          </p>
 */
export interface AnnotationConsolidationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function implements the logic for <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">annotation consolidation</a> and to process output data.</p>
   *          <p>This parameter is required for all labeling jobs. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>, use one
   *             of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>AnnotationConsolidationLambdaArn</code>. For custom labeling workflows, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-postlambda">Post-annotation Lambda</a>. </p>
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *             different workers based on the Jaccard index of the boxes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Image classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of an image based on
   *             annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Multi-label image classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of an image based on
   *             annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image
   *             as a multi-class classification and treats pixel annotations from workers as "votes" for
   *             the correct label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Text classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of text based on
   *             annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Multi-label text classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of text based on
   *             annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Named entity recognition</b> - Groups similar selections
   *             and calculates aggregate boundaries, resolving to most-assigned label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Object Detection</b> - Use this task type
   *             when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids
   *             around objects. For example, you can use this task type to ask workers to identify
   *             different types of objects in a point cloud, such as cars, bikes, and
   *             pedestrians.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Object Tracking</b> - Use this task type
   *             when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D
   *             point cloud frames. For example, you can use this task type to ask workers to track the
   *             movement of vehicles across multiple point cloud frames. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> - Use this task
   *             type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned
   *             to one of the classes you specify.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *          <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *          <p>
   *             <b>Semantic Segmentation Adjustment</b> - Treats each pixel
   *             in an image as a multi-class classification and treats pixel adjusted annotations from
   *             workers as "votes" for the correct label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Semantic Segmentation Verification</b> - Uses a variant
   *             of the Expectation Maximization approach to estimate the true class of verification
   *             judgment for semantic segmentation labels based on annotations from individual
   *             workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Bounding Box Adjustment</b> - Finds the most similar
   *             boxes from different workers based on the Jaccard index of the adjusted
   *             annotations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Bounding Box Verification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of verification judgement
   *             for bounding box labels based on annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Object Detection Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects in a 3D point cloud. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Object Tracking Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects that appear in a
   *             sequence of 3D point cloud frames.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Semantic Segmentation Adjustment</b> - Use this task
   *             type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

export enum AppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
  RSessionGateway = "RSessionGateway",
  RStudioServerPro = "RStudioServerPro",
  TensorBoard = "TensorBoard",
}

export enum AppStatus {
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
}

/**
 * <p>Details about an Amazon SageMaker app.</p>
 */
export interface AppDetails {
  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName?: string;
}

/**
 * <p>The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.</p>
 */
export interface FileSystemConfig {
  /**
   * <p>The path within the image to mount the user's EFS home directory. The directory
   *         should be empty. If not specified, defaults to <i>/home/sagemaker-user</i>.</p>
   */
  MountPath?: string;

  /**
   * <p>The default POSIX user ID (UID). If not specified, defaults to <code>1000</code>.</p>
   */
  DefaultUid?: number;

  /**
   * <p>The default POSIX group ID (GID). If not specified, defaults to <code>100</code>.</p>
   */
  DefaultGid?: number;
}

/**
 * <p>The specification of a Jupyter kernel.</p>
 */
export interface KernelSpec {
  /**
   * <p>The name of the Jupyter kernel in the image. This value is case sensitive.</p>
   */
  Name: string | undefined;

  /**
   * <p>The display name of the kernel.</p>
   */
  DisplayName?: string;
}

/**
 * <p>The configuration for the file system and kernels in a SageMaker image running as a
 *         KernelGateway app.</p>
 */
export interface KernelGatewayImageConfig {
  /**
   * <p>The specification of the Jupyter kernels in the image.</p>
   */
  KernelSpecs: KernelSpec[] | undefined;

  /**
   * <p>The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.</p>
   */
  FileSystemConfig?: FileSystemConfig;
}

/**
 * <p>The configuration for running a SageMaker image as a KernelGateway app.</p>
 */
export interface AppImageConfigDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig. Must be unique to your account.</p>
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the file system and kernels in the SageMaker image.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export enum AppImageConfigSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
  Name = "Name",
}

export enum AppInstanceType {
  ML_C5_12XLARGE = "ml.c5.12xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_24XLARGE = "ml.c5.24xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_LARGE = "ml.c5.large",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_G5_12XLARGE = "ml.g5.12xlarge",
  ML_G5_16XLARGE = "ml.g5.16xlarge",
  ML_G5_24XLARGE = "ml.g5.24xlarge",
  ML_G5_2XLARGE = "ml.g5.2xlarge",
  ML_G5_48XLARGE = "ml.g5.48xlarge",
  ML_G5_4XLARGE = "ml.g5.4xlarge",
  ML_G5_8XLARGE = "ml.g5.8xlarge",
  ML_G5_XLARGE = "ml.g5.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_16XLARGE = "ml.m5d.16xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_8XLARGE = "ml.m5d.8xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_16XLARGE = "ml.m5.16xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_8XLARGE = "ml.m5.8xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_16XLARGE = "ml.r5.16xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_8XLARGE = "ml.r5.8xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_MICRO = "ml.t3.micro",
  ML_T3_SMALL = "ml.t3.small",
  ML_T3_XLARGE = "ml.t3.xlarge",
  SYSTEM = "system",
}

export enum AppNetworkAccessType {
  PublicInternetOnly = "PublicInternetOnly",
  VpcOnly = "VpcOnly",
}

export enum AppSecurityGroupManagement {
  Customer = "Customer",
  Service = "Service",
}

export enum AppSortKey {
  CreationTime = "CreationTime",
}

/**
 * <p>Configuration to run a processing job in a specified container image.</p>
 */
export interface AppSpecification {
  /**
   * <p>The container image to be run by the processing job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a processing job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments for a container used to run a processing job.</p>
   */
  ContainerArguments?: string[];
}

export enum ArtifactSourceIdType {
  CUSTOM = "Custom",
  MD5_HASH = "MD5Hash",
  S3_ETAG = "S3ETag",
  S3_VERSION = "S3Version",
}

/**
 * <p>The ID and ID type of an artifact source.</p>
 */
export interface ArtifactSourceType {
  /**
   * <p>The type of ID.</p>
   */
  SourceIdType: ArtifactSourceIdType | string | undefined;

  /**
   * <p>The ID.</p>
   */
  Value: string | undefined;
}

/**
 * <p>A structure describing the source of an artifact.</p>
 */
export interface ArtifactSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>A list of source types.</p>
   */
  SourceTypes?: ArtifactSourceType[];
}

/**
 * <p>Lists a summary of the properties of an artifact. An artifact represents a URI
 *         addressable object or data. Some examples are a dataset and a model.</p>
 */
export interface ArtifactSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The name of the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The source of the artifact.</p>
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   */
  ArtifactType?: string;

  /**
   * <p>When the artifact was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the artifact was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface AssociateTrialComponentRequest {
  /**
   * <p>The name of the component to associated with the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to associate with.</p>
   */
  TrialName: string | undefined;
}

export interface AssociateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * <p>Information about the user who created or modified an experiment, trial, trial
 *       component, lineage group, project, or model card.</p>
 */
export interface UserContext {
  /**
   * <p>The Amazon Resource Name (ARN) of the user's profile.</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The name of the user's profile.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The domain associated with the user.</p>
   */
  DomainId?: string;
}

/**
 * <p>Lists a summary of the properties of an association. An association is an entity that
 *         links other lineage or experiment entities. An example would be an association between a
 *         training job and a model.</p>
 */
export interface AssociationSummary {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * <p>The destination type.</p>
   */
  DestinationType?: string;

  /**
   * <p>The type of the association.</p>
   */
  AssociationType?: AssociationEdgeType | string;

  /**
   * <p>The name of the source.</p>
   */
  SourceName?: string;

  /**
   * <p>The name of the destination.</p>
   */
  DestinationName?: string;

  /**
   * <p>When the association was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;
}

/**
 * <p>Configures the behavior of the client used by SageMaker to interact with the model
 *             container during asynchronous inference.</p>
 */
export interface AsyncInferenceClientConfig {
  /**
   * <p>The maximum number of concurrent requests sent by the SageMaker client to the model
   *             container. If no value is provided, SageMaker chooses an optimal value.</p>
   */
  MaxConcurrentInvocationsPerInstance?: number;
}

/**
 * <p>Specifies the configuration for notifications of inference results for asynchronous
 *             inference.</p>
 */
export interface AsyncInferenceNotificationConfig {
  /**
   * <p>Amazon SNS topic to post a notification to when inference completes successfully. If no
   *             topic is provided, no notification is sent on success.</p>
   */
  SuccessTopic?: string;

  /**
   * <p>Amazon SNS topic to post a notification to when inference fails. If no topic is provided,
   *             no notification is sent on failure.</p>
   */
  ErrorTopic?: string;
}

/**
 * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
 */
export interface AsyncInferenceOutputConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker
   *             uses to encrypt the asynchronous inference output in Amazon S3.</p>
   *          <p></p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 location to upload inference responses to.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Specifies the configuration for notifications of inference results for asynchronous
   *             inference.</p>
   */
  NotificationConfig?: AsyncInferenceNotificationConfig;
}

/**
 * <p>Specifies configuration for how an endpoint performs asynchronous inference.</p>
 */
export interface AsyncInferenceConfig {
  /**
   * <p>Configures the behavior of the client used by SageMaker to interact with the model
   *             container during asynchronous inference.</p>
   */
  ClientConfig?: AsyncInferenceClientConfig;

  /**
   * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
   */
  OutputConfig: AsyncInferenceOutputConfig | undefined;
}

export enum AthenaResultCompressionType {
  GZIP = "GZIP",
  SNAPPY = "SNAPPY",
  ZLIB = "ZLIB",
}

export enum AthenaResultFormat {
  AVRO = "AVRO",
  JSON = "JSON",
  ORC = "ORC",
  PARQUET = "PARQUET",
  TEXTFILE = "TEXTFILE",
}

/**
 * <p>Configuration for Athena Dataset Definition input.</p>
 */
export interface AthenaDatasetDefinition {
  /**
   * <p>The name of the data catalog used in Athena query execution.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>The name of the database used in the Athena query execution.</p>
   */
  Database: string | undefined;

  /**
   * <p>The SQL query statements, to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The name of the workgroup in which the Athena query is being started.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The location in Amazon S3 where Athena query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data generated from
   *             an Athena query execution.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Athena query results.</p>
   */
  OutputFormat: AthenaResultFormat | string | undefined;

  /**
   * <p>The compression used for Athena query results.</p>
   */
  OutputCompression?: AthenaResultCompressionType | string;
}

export enum AuthMode {
  IAM = "IAM",
  SSO = "SSO",
}

/**
 * <p>The location of artifacts for an AutoML candidate job.</p>
 */
export interface CandidateArtifactLocations {
  /**
   * <p>The Amazon S3 prefix to the explainability artifacts generated for the AutoML
   *          candidate.</p>
   */
  Explainability: string | undefined;

  /**
   * <p>The Amazon S3 prefix to the model insight artifacts generated for the AutoML candidate.</p>
   */
  ModelInsights?: string;
}

export enum AutoMLMetricEnum {
  ACCURACY = "Accuracy",
  AUC = "AUC",
  BALANCED_ACCURACY = "BalancedAccuracy",
  F1 = "F1",
  F1_MACRO = "F1macro",
  MAE = "MAE",
  MSE = "MSE",
  PRECISION = "Precision",
  PRECISION_MACRO = "PrecisionMacro",
  R2 = "R2",
  RECALL = "Recall",
  RECALL_MACRO = "RecallMacro",
  RMSE = "RMSE",
}

export enum MetricSetSource {
  TEST = "Test",
  TRAIN = "Train",
  VALIDATION = "Validation",
}

export enum AutoMLMetricExtendedEnum {
  ACCURACY = "Accuracy",
  AUC = "AUC",
  BALANCED_ACCURACY = "BalancedAccuracy",
  F1 = "F1",
  F1_MACRO = "F1macro",
  INFERENCE_LATENCY = "InferenceLatency",
  LogLoss = "LogLoss",
  MAE = "MAE",
  MSE = "MSE",
  PRECISION = "Precision",
  PRECISION_MACRO = "PrecisionMacro",
  R2 = "R2",
  RECALL = "Recall",
  RECALL_MACRO = "RecallMacro",
  RMSE = "RMSE",
}

/**
 * <p>Information about the metric for a candidate produced by an AutoML job.</p>
 */
export interface MetricDatum {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: AutoMLMetricEnum | string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The dataset split from which the AutoML job produced the metric.</p>
   */
  Set?: MetricSetSource | string;

  /**
   * <p>The name of the standard metric. </p>
   *          <note>
   *             <p>For definitions of the standard metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-metrics">
   *                   <code>Autopilot candidate metrics</code>
   *                </a>.</p>
   *          </note>
   */
  StandardMetricName?: AutoMLMetricExtendedEnum | string;
}

/**
 * <p>The properties of an AutoML candidate job.</p>
 */
export interface CandidateProperties {
  /**
   * <p>The Amazon S3 prefix to the artifacts generated for an AutoML candidate.</p>
   */
  CandidateArtifactLocations?: CandidateArtifactLocations;

  /**
   * <p>Information about the candidate metrics for an AutoML job.</p>
   */
  CandidateMetrics?: MetricDatum[];
}

export enum CandidateStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum CandidateStepType {
  PROCESSING = "AWS::SageMaker::ProcessingJob",
  TRAINING = "AWS::SageMaker::TrainingJob",
  TRANSFORM = "AWS::SageMaker::TransformJob",
}

/**
 * <p>Information about the steps for a candidate and what step it is working on.</p>
 */
export interface AutoMLCandidateStep {
  /**
   * <p>Whether the candidate is at the transform, training, or processing step.</p>
   */
  CandidateStepType: CandidateStepType | string | undefined;

  /**
   * <p>The ARN for the candidate's step.</p>
   */
  CandidateStepArn: string | undefined;

  /**
   * <p>The name for the candidate's step.</p>
   */
  CandidateStepName: string | undefined;
}

export enum AutoMLJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize",
}

/**
 * <p>The best candidate result from an AutoML training job.</p>
 */
export interface FinalAutoMLJobObjectiveMetric {
  /**
   * <p>The type of metric with the best result.</p>
   */
  Type?: AutoMLJobObjectiveType | string;

  /**
   * <p>The name of the metric with the best result. For a description of the possible objective
   *          metrics, see <a>AutoMLJobObjective$MetricName</a>.</p>
   */
  MetricName: AutoMLMetricEnum | string | undefined;

  /**
   * <p>The value of the metric with the best result.</p>
   */
  Value: number | undefined;
}

/**
 * <p>A list of container definitions that describe the different containers that make up an
 *          AutoML candidate. For more information, see .</p>
 */
export interface AutoMLContainerDefinition {
  /**
   * <p>The Amazon Elastic Container Registry (Amazon ECR) path of the container. For more
   *          information, see .</p>
   */
  Image: string | undefined;

  /**
   * <p>The location of the model artifacts. For more information, see .</p>
   */
  ModelDataUrl: string | undefined;

  /**
   * <p>The environment variables to set in the container. For more information, see .</p>
   */
  Environment?: Record<string, string>;
}

export enum ObjectiveStatus {
  Failed = "Failed",
  Pending = "Pending",
  Succeeded = "Succeeded",
}

/**
 * <p>Information about a candidate produced by an AutoML training job, including its status,
 *          steps, and other properties.</p>
 */
export interface AutoMLCandidate {
  /**
   * <p>The name of the candidate.</p>
   */
  CandidateName: string | undefined;

  /**
   * <p>The best candidate result from an AutoML training job.</p>
   */
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;

  /**
   * <p>The objective's status.</p>
   */
  ObjectiveStatus: ObjectiveStatus | string | undefined;

  /**
   * <p>Information about the candidate's steps.</p>
   */
  CandidateSteps: AutoMLCandidateStep[] | undefined;

  /**
   * <p>The candidate's status.</p>
   */
  CandidateStatus: CandidateStatus | string | undefined;

  /**
   * <p>Information about the inference container definitions.</p>
   */
  InferenceContainers?: AutoMLContainerDefinition[];

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The properties of an AutoML candidate job.</p>
   */
  CandidateProperties?: CandidateProperties;
}

/**
 * <p>Stores the config information for how a candidate is generated (optional).</p>
 */
export interface AutoMLCandidateGenerationConfig {
  /**
   * <p>A URL to the Amazon S3 data source containing selected features from the input data source to
   *          run an Autopilot job. You can input <code>FeatureAttributeNames</code> (optional) in JSON
   *          format as shown below: </p>
   *          <p>
   *             <code>{ "FeatureAttributeNames":["col1", "col2", ...] }</code>.</p>
   *          <p>You can also specify the data type of the feature (optional) in the format shown
   *          below:</p>
   *          <p>
   *             <code>{ "FeatureDataTypes":{"col1":"numeric", "col2":"categorical" ... } }</code>
   *          </p>
   *          <note>
   *             <p>These column keys may not include the target column.</p>
   *          </note>
   *          <p>In ensembling mode, Autopilot will only support the following data types:
   *             <code>numeric</code>, <code>categorical</code>, <code>text</code> and
   *             <code>datetime</code>. In HPO mode, Autopilot can support <code>numeric</code>,
   *             <code>categorical</code>, <code>text</code>, <code>datetime</code> and
   *             <code>sequence</code>.</p>
   *          <p>If only <code>FeatureDataTypes</code> is provided, the column keys (<code>col1</code>,
   *             <code>col2</code>,..) should be a subset of the column names in the input data. </p>
   *          <p>If both <code>FeatureDataTypes</code> and <code>FeatureAttributeNames</code> are
   *          provided, then the column keys should be a subset of the column names provided in
   *             <code>FeatureAttributeNames</code>. </p>
   *          <p>The key name <code>FeatureAttributeNames</code> is fixed. The values listed in
   *             <code>["col1", "col2", ...]</code> is case sensitive and should be a list of strings
   *          containing unique values that are a subset of the column names in the input data. The list
   *          of columns provided must not include the target column.</p>
   */
  FeatureSpecificationS3Uri?: string;
}

export enum AutoMLChannelType {
  TRAINING = "training",
  VALIDATION = "validation",
}

export enum AutoMLS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

/**
 * <p>The Amazon S3 data source.</p>
 */
export interface AutoMLS3DataSource {
  /**
   * <p>The data type.</p>
   *          <p>A ManifestFile should have the format shown below:</p>
   *          <p>
   *             <code>[ {"prefix": "s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER/DOC-EXAMPLE-PREFIX/"},
   *          </code>
   *          </p>
   *          <p>
   *             <code>"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-1",</code>
   *          </p>
   *          <p>
   *             <code>"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-2",</code>
   *          </p>
   *          <p>
   *             <code>... "DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-N" ]</code>
   *          </p>
   *          <p>An S3Prefix should have the following format: </p>
   *          <p>
   *             <code>s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER-OR-FILE</code>
   *          </p>
   */
  S3DataType: AutoMLS3DataType | string | undefined;

  /**
   * <p>The URL to the Amazon S3 data source.</p>
   */
  S3Uri: string | undefined;
}

/**
 * <p>The data source for the Autopilot job.</p>
 */
export interface AutoMLDataSource {
  /**
   * <p>The Amazon S3 location of the input data.</p>
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

/**
 * <p>A channel is a named input source that training algorithms can consume. The validation
 *          dataset size is limited to less than 2 GB. The training dataset size must be less than 100
 *          GB. For more information, see .</p>
 *          <note>
 *             <p>A validation dataset must contain the same headers as the training dataset.</p>
 *          </note>
 *          <p></p>
 */
export interface AutoMLChannel {
  /**
   * <p>The data source for an AutoML channel.</p>
   */
  DataSource: AutoMLDataSource | undefined;

  /**
   * <p>You can use <code>Gzip</code> or <code>None</code>. The default value is
   *             <code>None</code>.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The name of the target variable in supervised learning, usually represented by
   *          'y'.</p>
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The content type of the data from the input source. You can use
   *             <code>text/csv;header=present</code> or <code>x-application/vnd.amazon+parquet</code>.
   *          The default value is <code>text/csv;header=present</code>.</p>
   */
  ContentType?: string;

  /**
   * <p>The channel type (optional) is an <code>enum</code> string. The default value is
   *             <code>training</code>. Channels for training and validation must share the same
   *             <code>ContentType</code> and <code>TargetAttributeName</code>. For information on
   *          specifying training and validation channel types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-data-sources-training-or-validation">
   *                <code>How to specify training and validation datasets</code>
   *             </a>.</p>
   */
  ChannelType?: AutoMLChannelType | string;
}

/**
 * <p>This structure specifies how to split the data into train and validation datasets. The
 *          validation and training datasets must contain the same headers. The validation dataset must
 *          be less than 2 GB in size.</p>
 */
export interface AutoMLDataSplitConfig {
  /**
   * <p>The validation fraction (optional) is a float that specifies the portion of the training
   *          dataset to be used for validation. The default value is 0.2, and values must be greater
   *          than 0 and less than 1. We recommend setting this value to be less than 0.5.</p>
   */
  ValidationFraction?: number;
}

/**
 * <p>The artifacts that are generated during an AutoML job.</p>
 */
export interface AutoMLJobArtifacts {
  /**
   * <p>The URL of the notebook location.</p>
   */
  CandidateDefinitionNotebookLocation?: string;

  /**
   * <p>The URL of the notebook location.</p>
   */
  DataExplorationNotebookLocation?: string;
}

/**
 * <p>How long a job is allowed to run, or how many candidates a job is allowed to
 *          generate.</p>
 */
export interface AutoMLJobCompletionCriteria {
  /**
   * <p>The maximum number of times a training job is allowed to run.</p>
   */
  MaxCandidates?: number;

  /**
   * <p>The maximum time, in seconds, that each training job executed inside hyperparameter
   *          tuning is allowed to run as part of a hyperparameter tuning job. For more information, see
   *          the  used by the  action.</p>
   */
  MaxRuntimePerTrainingJobInSeconds?: number;

  /**
   * <p>The maximum runtime, in seconds, an AutoML job has to complete.</p>
   *          <p>If an AutoML job exceeds the maximum runtime, the job is stopped automatically and its
   *          processing is ended gracefully. The AutoML job identifies the best model whose training was
   *          completed and marks it as the best-performing model. Any unfinished steps of the job, such
   *          as automatic one-click Autopilot model deployment, will not be completed. </p>
   */
  MaxAutoMLJobRuntimeInSeconds?: number;
}

export enum AutoMLMode {
  AUTO = "AUTO",
  ENSEMBLING = "ENSEMBLING",
  HYPERPARAMETER_TUNING = "HYPERPARAMETER_TUNING",
}

/**
 * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
 *             access to and from your training and model containers by configuring the VPC. For more
 *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
 *                 by Using an Amazon Virtual Private Cloud</a>. </p>
 */
export interface VpcConfig {
  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for
   *             the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or
   *             model. For information about the availability of specific instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html">Supported
   *                 Instance Types and Availability Zones</a>.</p>
   */
  Subnets: string[] | undefined;
}

/**
 * <p>Security options.</p>
 */
export interface AutoMLSecurityConfig {
  /**
   * <p>The key used to encrypt stored data.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Whether to use traffic encryption between the container layers.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The VPC configuration.</p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * <p>A collection of settings used for an AutoML job.</p>
 */
export interface AutoMLJobConfig {
  /**
   * <p>How long an AutoML job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The security configuration for traffic encryption or Amazon VPC settings.</p>
   */
  SecurityConfig?: AutoMLSecurityConfig;

  /**
   * <p>The configuration for splitting the input training dataset.</p>
   *          <p>Type: AutoMLDataSplitConfig</p>
   */
  DataSplitConfig?: AutoMLDataSplitConfig;

  /**
   * <p>The configuration for generating a candidate for an AutoML job (optional). </p>
   */
  CandidateGenerationConfig?: AutoMLCandidateGenerationConfig;

  /**
   * <p>The method that Autopilot uses to train the data. You can either specify the mode manually
   *          or let Autopilot choose for you based on the dataset size by selecting <code>AUTO</code>. In
   *             <code>AUTO</code> mode, Autopilot chooses <code>ENSEMBLING</code> for datasets smaller than
   *          100 MB, and <code>HYPERPARAMETER_TUNING</code> for larger ones.</p>
   *          <p>The <code>ENSEMBLING</code> mode uses a multi-stack ensemble model to predict
   *          classification and regression tasks directly from your dataset. This machine learning mode
   *          combines several base models to produce an optimal predictive model. It then uses a
   *          stacking ensemble method to combine predictions from contributing members. A multi-stack
   *          ensemble model can provide better performance over a single model by combining the
   *          predictive capabilities of multiple models. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-suppprt">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>ENSEMBLING</code> mode.</p>
   *          <p>The <code>HYPERPARAMETER_TUNING</code> (HPO) mode uses the best hyperparameters to train
   *          the best version of a model. HPO will automatically select an algorithm for the type of
   *          problem you want to solve. Then HPO finds the best hyperparameters according to your
   *          objective metric. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-suppprt">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>HYPERPARAMETER_TUNING</code> mode.</p>
   */
  Mode?: AutoMLMode | string;
}

/**
 * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
 */
export interface AutoMLJobObjective {
  /**
   * <p>The name of the objective metric used to measure the predictive quality of a machine
   *          learning system. This metric is optimized during training to provide the best estimate for
   *          model parameter values from data.</p>
   *          <p>Here are the options:</p>
   *          <dl>
   *             <dt>Accuracy</dt>
   *             <dd>
   *                <p> The ratio of the number of correctly classified items to the total number of
   *                   (correctly and incorrectly) classified items. It is used for both binary and
   *                   multiclass classification. Accuracy measures how close the predicted class values
   *                   are to the actual values. Values for accuracy metrics vary between zero (0) and
   *                   one (1). A value of 1 indicates perfect accuracy, and 0 indicates perfect
   *                   inaccuracy.</p>
   *             </dd>
   *             <dt>AUC</dt>
   *             <dd>
   *                <p>The area under the curve (AUC) metric is used to compare and evaluate binary
   *                   classification by algorithms that return probabilities, such as logistic
   *                   regression. To map the probabilities into classifications, these are compared
   *                   against a threshold value. </p>
   *                <p>The relevant curve is the receiver operating characteristic curve (ROC curve).
   *                   The ROC curve plots the true positive rate (TPR) of predictions (or recall)
   *                   against the false positive rate (FPR) as a function of the threshold value, above
   *                   which a prediction is considered positive. Increasing the threshold results in
   *                   fewer false positives, but more false negatives. </p>
   *                <p>AUC is the area under this ROC curve. Therefore, AUC provides an aggregated
   *                   measure of the model performance across all possible classification thresholds.
   *                   AUC scores vary between 0 and 1. A score of 1 indicates perfect accuracy, and a
   *                   score of one half (0.5) indicates that the prediction is not better than a random
   *                   classifier. </p>
   *             </dd>
   *             <dt>BalancedAccuracy</dt>
   *             <dd>
   *                <p>
   *                   <code>BalancedAccuracy</code> is a metric that measures the ratio of accurate
   *                   predictions to all predictions. This ratio is calculated after normalizing true
   *                   positives (TP) and true negatives (TN) by the total number of positive (P) and
   *                   negative (N) values. It is used in both binary and multiclass classification and
   *                   is defined as follows: 0.5*((TP/P)+(TN/N)), with values ranging from 0 to 1.
   *                      <code>BalancedAccuracy</code> gives a better measure of accuracy when the
   *                   number of positives or negatives differ greatly from each other in an imbalanced
   *                   dataset. For example, when only 1% of email is spam. </p>
   *             </dd>
   *             <dt>F1</dt>
   *             <dd>
   *                <p>The <code>F1</code> score is the harmonic mean of the precision and recall,
   *                   defined as follows: F1 = 2 * (precision * recall) / (precision + recall). It is
   *                   used for binary classification into classes traditionally referred to as positive
   *                   and negative. Predictions are said to be true when they match their actual
   *                   (correct) class, and false when they do not. </p>
   *                <p>Precision is the ratio of the true positive predictions to all positive
   *                   predictions, and it includes the false positives in a dataset. Precision measures
   *                   the quality of the prediction when it predicts the positive class. </p>
   *                <p>Recall (or sensitivity) is the ratio of the true positive predictions to all
   *                   actual positive instances. Recall measures how completely a model predicts the
   *                   actual class members in a dataset. </p>
   *                <p>F1 scores vary between 0 and 1. A score of 1 indicates the best possible
   *                   performance, and 0 indicates the worst.</p>
   *             </dd>
   *             <dt>F1macro</dt>
   *             <dd>
   *                <p>The <code>F1macro</code> score applies F1 scoring to multiclass classification
   *                   problems. It does this by calculating the precision and recall, and then taking
   *                   their harmonic mean to calculate the F1 score for each class. Lastly, the F1macro
   *                   averages the individual scores to obtain the <code>F1macro</code> score.
   *                      <code>F1macro</code> scores vary between 0 and 1. A score of 1 indicates the
   *                   best possible performance, and 0 indicates the worst.</p>
   *             </dd>
   *             <dt>MAE</dt>
   *             <dd>
   *                <p>The mean absolute error (MAE) is a measure of how different the predicted and
   *                   actual values are, when they're averaged over all values. MAE is commonly used in
   *                   regression analysis to understand model prediction error. If there is linear
   *                   regression, MAE represents the average distance from a predicted line to the
   *                   actual value. MAE is defined as the sum of absolute errors divided by the number
   *                   of observations. Values range from 0 to infinity, with smaller numbers indicating
   *                   a better model fit to the data.</p>
   *             </dd>
   *             <dt>MSE</dt>
   *             <dd>
   *                <p>The mean squared error (MSE) is the average of the squared differences between
   *                   the predicted and actual values. It is used for regression. MSE values are always
   *                   positive. The better a model is at predicting the actual values, the smaller the
   *                   MSE value is</p>
   *             </dd>
   *             <dt>Precision</dt>
   *             <dd>
   *                <p>Precision measures how well an algorithm predicts the true positives (TP) out
   *                   of all of the positives that it identifies. It is defined as follows: Precision =
   *                   TP/(TP+FP), with values ranging from zero (0) to one (1), and is used in binary
   *                   classification. Precision is an important metric when the cost of a false positive
   *                   is high. For example, the cost of a false positive is very high if an airplane
   *                   safety system is falsely deemed safe to fly. A false positive (FP) reflects a
   *                   positive prediction that is actually negative in the data.</p>
   *             </dd>
   *             <dt>PrecisionMacro</dt>
   *             <dd>
   *                <p>The precision macro computes precision for multiclass classification problems.
   *                   It does this by calculating precision for each class and averaging scores to
   *                   obtain precision for several classes. <code>PrecisionMacro</code> scores range
   *                   from zero (0) to one (1). Higher scores reflect the model's ability to predict
   *                   true positives (TP) out of all of the positives that it identifies, averaged
   *                   across multiple classes.</p>
   *             </dd>
   *             <dt>R2</dt>
   *             <dd>
   *                <p>R2, also known as the coefficient of determination, is used in regression to
   *                   quantify how much a model can explain the variance of a dependent variable. Values
   *                   range from one (1) to negative one (-1). Higher numbers indicate a higher fraction
   *                   of explained variability. <code>R2</code> values close to zero (0) indicate that
   *                   very little of the dependent variable can be explained by the model. Negative
   *                   values indicate a poor fit and that the model is outperformed by a constant
   *                   function. For linear regression, this is a horizontal line.</p>
   *             </dd>
   *             <dt>Recall</dt>
   *             <dd>
   *                <p>Recall measures how well an algorithm correctly predicts all of the true
   *                   positives (TP) in a dataset. A true positive is a positive prediction that is also
   *                   an actual positive value in the data. Recall is defined as follows: Recall =
   *                   TP/(TP+FN), with values ranging from 0 to 1. Higher scores reflect a better
   *                   ability of the model to predict true positives (TP) in the data, and is used in
   *                   binary classification. </p>
   *                <p>Recall is important when testing for cancer because it's used to find all of
   *                   the true positives. A false positive (FP) reflects a positive prediction that is
   *                   actually negative in the data. It is often insufficient to measure only recall,
   *                   because predicting every output as a true positive will yield a perfect recall
   *                   score.</p>
   *             </dd>
   *             <dt>RecallMacro</dt>
   *             <dd>
   *                <p>The RecallMacro computes recall for multiclass classification problems by
   *                   calculating recall for each class and averaging scores to obtain recall for
   *                   several classes. RecallMacro scores range from 0 to 1. Higher scores reflect the
   *                   model's ability to predict true positives (TP) in a dataset. Whereas, a true
   *                   positive reflects a positive prediction that is also an actual positive value in
   *                   the data. It is often insufficient to measure only recall, because predicting
   *                   every output as a true positive will yield a perfect recall score.</p>
   *             </dd>
   *             <dt>RMSE</dt>
   *             <dd>
   *                <p>Root mean squared error (RMSE) measures the square root of the squared
   *                   difference between predicted and actual values, and it's averaged over all values.
   *                   It is used in regression analysis to understand model prediction error. It's an
   *                   important metric to indicate the presence of large model errors and outliers.
   *                   Values range from zero (0) to infinity, with smaller numbers indicating a better
   *                   model fit to the data. RMSE is dependent on scale, and should not be used to
   *                   compare datasets of different sizes.</p>
   *             </dd>
   *          </dl>
   *          <p>If you do not specify a metric explicitly, the default behavior is to automatically
   *          use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MSE</code>: for regression.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1</code>: for binary classification</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Accuracy</code>: for multiclass classification.</p>
   *             </li>
   *          </ul>
   */
  MetricName: AutoMLMetricEnum | string | undefined;
}

export enum AutoMLJobSecondaryStatus {
  ANALYZING_DATA = "AnalyzingData",
  CANDIDATE_DEFINITIONS_GENERATED = "CandidateDefinitionsGenerated",
  COMPLETED = "Completed",
  DEPLOYING_MODEL = "DeployingModel",
  EXPLAINABILITY_ERROR = "ExplainabilityError",
  FAILED = "Failed",
  FEATURE_ENGINEERING = "FeatureEngineering",
  GENERATING_EXPLAINABILITY_REPORT = "GeneratingExplainabilityReport",
  GENERATING_MODEL_INSIGHTS_REPORT = "GeneratingModelInsightsReport",
  MAX_AUTO_ML_JOB_RUNTIME_REACHED = "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED = "MaxCandidatesReached",
  MODEL_DEPLOYMENT_ERROR = "ModelDeploymentError",
  MODEL_INSIGHTS_ERROR = "ModelInsightsError",
  MODEL_TUNING = "ModelTuning",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum AutoMLJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Metadata for an AutoML job step.</p>
 */
export interface AutoMLJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job.</p>
   */
  Arn?: string;
}

/**
 * <p>The reason for a partial failure of an AutoML job.</p>
 */
export interface AutoMLPartialFailureReason {
  /**
   * <p>The message containing the reason for a partial failure of an AutoML job.</p>
   */
  PartialFailureMessage?: string;
}

/**
 * <p>Provides a summary about an AutoML job.</p>
 */
export interface AutoMLJobSummary {
  /**
   * <p>The name of the AutoML job you are requesting.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>The ARN of the AutoML job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>The status of the AutoML job.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>The secondary status of the AutoML job.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>When the AutoML job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time of an AutoML job.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the AutoML job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The failure reason of an AutoML job.</p>
   */
  FailureReason?: string;

  /**
   * <p>The list of reasons for partial failures within an AutoML job.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];
}

/**
 * <p>The output data configuration.</p>
 */
export interface AutoMLOutputDataConfig {
  /**
   * <p>The Key Management Service (KMS) encryption key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   */
  S3OutputPath: string | undefined;
}

export enum AutoMLSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum AutoMLSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
 * <p>Automatic rollback configuration for handling endpoint deployment failures and
 *             recovery.</p>
 */
export interface AutoRollbackConfig {
  /**
   * <p>List of CloudWatch alarms in your account that are configured to monitor metrics on an
   *             endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the
   *             deployment.</p>
   */
  Alarms?: Alarm[];
}

export enum AwsManagedHumanLoopRequestSource {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1",
}

/**
 * <p>Configuration to control how SageMaker captures inference data for batch transform jobs.</p>
 */
export interface BatchDataCaptureConfig {
  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on
   *             the storage volume attached to the ML compute instance that hosts the batch transform job.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                     <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                     <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>Flag that indicates whether to append inference id to the output.</p>
   */
  GenerateInferenceId?: boolean;
}

export interface BatchDescribeModelPackageInput {
  /**
   * <p>The list of Amazon Resource Name (ARN) of the model package groups.</p>
   */
  ModelPackageArnList: string[] | undefined;
}

/**
 * <p>The error code and error description associated with the resource.</p>
 */
export interface BatchDescribeModelPackageError {
  /**
   * <p></p>
   */
  ErrorCode: string | undefined;

  /**
   * <p></p>
   */
  ErrorResponse: string | undefined;
}

/**
 * <p>Defines how to perform inference generation after a training job is run.</p>
 */
export interface InferenceSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an
   *             endpoint can be deployed.</p>
   *          <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   */
  SupportedTransformInstanceTypes?: (TransformInstanceType | string)[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   *          <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   */
  SupportedRealtimeInferenceInstanceTypes?: (ProductionVariantInstanceType | string)[];

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: string[] | undefined;
}

export enum ModelApprovalStatus {
  APPROVED = "Approved",
  PENDING_MANUAL_APPROVAL = "PendingManualApproval",
  REJECTED = "Rejected",
}

export enum ModelPackageStatus {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

/**
 * <p>Provides summary information about the model package.</p>
 */
export interface BatchDescribeModelPackageSummary {
  /**
   * <p>The group name for the model package</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The version number of a versioned model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The creation time of the mortgage package summary.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   */
  InferenceSpecification: InferenceSpecification | undefined;

  /**
   * <p>The status of the mortgage package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>The approval status of the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;
}

export interface BatchDescribeModelPackageOutput {
  /**
   * <p>The summaries for the model package versions</p>
   */
  ModelPackageSummaries?: Record<string, BatchDescribeModelPackageSummary>;

  /**
   * <p>A map of the resource and BatchDescribeModelPackageError objects
   *             reporting the error associated with describing the model package.</p>
   */
  BatchDescribeModelPackageErrorMap?: Record<string, BatchDescribeModelPackageError>;
}

/**
 * <p>Represents the CSV dataset format used when running a monitoring job.</p>
 */
export interface MonitoringCsvDatasetFormat {
  /**
   * <p>Indicates if the CSV data has a header.</p>
   */
  Header?: boolean;
}

/**
 * <p>Represents the JSON dataset format used when running a monitoring job.</p>
 */
export interface MonitoringJsonDatasetFormat {
  /**
   * <p>Indicates if the file should be read as a json object per line.
   * </p>
   */
  Line?: boolean;
}

/**
 * <p>Represents the Parquet dataset format used when running a monitoring job.</p>
 */
export interface MonitoringParquetDatasetFormat {}

/**
 * <p>Represents the dataset format used when running a monitoring job.</p>
 */
export interface MonitoringDatasetFormat {
  /**
   * <p>The CSV dataset used in the monitoring job.</p>
   */
  Csv?: MonitoringCsvDatasetFormat;

  /**
   * <p>The JSON dataset used in the monitoring job</p>
   */
  Json?: MonitoringJsonDatasetFormat;

  /**
   * <p>The Parquet dataset used in the monitoring job</p>
   */
  Parquet?: MonitoringParquetDatasetFormat;
}

export enum ProcessingS3DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key",
}

export enum ProcessingS3InputMode {
  FILE = "File",
  PIPE = "Pipe",
}

/**
 * <p>Input object for the batch transform job.</p>
 */
export interface BatchTransformInput {
  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DataCapturedDestinationS3Uri: string | undefined;

  /**
   * <p>The dataset format for your batch transform job.</p>
   */
  DatasetFormat: MonitoringDatasetFormat | undefined;

  /**
   * <p>Path to the filesystem where the batch transform data is available to the container.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether the <code>Pipe</code> or <code>File</code> is used as the input mode for
   *             transferring data for the monitoring job. <code>Pipe</code> mode is recommended for large
   *             datasets. <code>File</code> mode is useful for small files that fit in memory. Defaults to
   *             <code>File</code>.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
   *             Defaults to <code>FullyReplicated</code>
   *          </p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>The attributes of the input data that are the input features.</p>
   */
  FeaturesAttribute?: string;

  /**
   * <p>The attribute of the input data that represents the ground truth label.</p>
   */
  InferenceAttribute?: string;

  /**
   * <p>In a classification problem, the attribute that represents the class probability.</p>
   */
  ProbabilityAttribute?: string;

  /**
   * <p>The threshold for the class probability to be evaluated as a positive result.</p>
   */
  ProbabilityThresholdAttribute?: number;

  /**
   * <p>If specified, monitoring jobs substract this time from the start time. For information
   *             about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *                 Quality Monitoring Jobs</a>.</p>
   */
  StartTimeOffset?: string;

  /**
   * <p>If specified, monitoring jobs substract this time from the end time. For information
   *             about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *                 Quality Monitoring Jobs</a>.</p>
   */
  EndTimeOffset?: string;
}

/**
 * <p>Details about the metrics source.</p>
 */
export interface MetricsSource {
  /**
   * <p>The metric source content type.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The hash key used for the metrics source.</p>
   */
  ContentDigest?: string;

  /**
   * <p>The S3 URI for the metrics source.</p>
   */
  S3Uri: string | undefined;
}

/**
 * <p>Contains bias metrics for a model.</p>
 */
export interface Bias {
  /**
   * <p>The bias report for a model</p>
   */
  Report?: MetricsSource;

  /**
   * <p>The pre-training bias report for a model.</p>
   */
  PreTrainingReport?: MetricsSource;

  /**
   * <p>The post-training bias report for a model.</p>
   */
  PostTrainingReport?: MetricsSource;
}

export enum CapacitySizeType {
  CAPACITY_PERCENT = "CAPACITY_PERCENT",
  INSTANCE_COUNT = "INSTANCE_COUNT",
}

/**
 * <p>Specifies the endpoint capacity to activate for production.</p>
 */
export interface CapacitySize {
  /**
   * <p>Specifies the endpoint capacity type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_COUNT</code>: The endpoint activates based on the number of
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPACITY_PERCENT</code>: The endpoint activates based on the specified
   *                     percentage of capacity.</p>
   *             </li>
   *          </ul>
   */
  Type: CapacitySizeType | string | undefined;

  /**
   * <p>Defines the capacity size, either as a number of instances or a capacity
   *             percentage.</p>
   */
  Value: number | undefined;
}

export enum TrafficRoutingConfigType {
  ALL_AT_ONCE = "ALL_AT_ONCE",
  CANARY = "CANARY",
  LINEAR = "LINEAR",
}

/**
 * <p>Defines the traffic routing strategy during an endpoint deployment to shift traffic from the
 *             old fleet to the new fleet.</p>
 */
export interface TrafficRoutingConfig {
  /**
   * <p>Traffic routing strategy type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_AT_ONCE</code>: Endpoint traffic shifts to the new fleet
   *                 in a single step.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANARY</code>: Endpoint traffic shifts to the new fleet
   *                 in two steps. The first step is the canary, which is a small portion of the traffic. The
   *                 second step is the remainder of the traffic.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINEAR</code>: Endpoint traffic shifts to the new fleet in
   *                 n steps of a configurable size.
   *             </p>
   *             </li>
   *          </ul>
   */
  Type: TrafficRoutingConfigType | string | undefined;

  /**
   * <p>The waiting time (in seconds) between incremental steps to turn on traffic on the
   *             new endpoint fleet.</p>
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * <p>Batch size for the first step to turn on traffic on the new endpoint fleet. <code>Value</code> must be less than
   *             or equal to 50% of the variant's total instance count.</p>
   */
  CanarySize?: CapacitySize;

  /**
   * <p>Batch size for each step to turn on traffic on the new endpoint fleet. <code>Value</code> must be
   *             10-50% of the variant's total instance count.</p>
   */
  LinearStepSize?: CapacitySize;
}

/**
 * <p>Update policy for a blue/green deployment. If this update policy is specified, SageMaker
 *             creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips
 *             traffic to the new fleet according to the specified traffic routing configuration. Only
 *             one update policy should be used in the deployment configuration. If no update policy is
 *             specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting
 *             by default.</p>
 */
export interface BlueGreenUpdatePolicy {
  /**
   * <p>Defines the traffic routing strategy to shift traffic from the old fleet to the new
   *             fleet during an endpoint deployment.</p>
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig | undefined;

  /**
   * <p>Additional waiting time in seconds after the completion of an endpoint deployment
   *             before terminating the old endpoint fleet. Default is 0.</p>
   */
  TerminationWaitInSeconds?: number;

  /**
   * <p>Maximum execution timeout for the deployment. Note that the timeout value should be
   *             larger than the total waiting time specified in <code>TerminationWaitInSeconds</code>
   *             and <code>WaitIntervalInSeconds</code>.</p>
   */
  MaximumExecutionTimeoutInSeconds?: number;
}

export enum BooleanOperator {
  AND = "And",
  OR = "Or",
}

/**
 * <p>Details on the cache hit of a pipeline execution step.</p>
 */
export interface CacheHitResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  SourcePipelineExecutionArn?: string;
}

/**
 * <p>An output parameter of a pipeline step.</p>
 */
export interface OutputParameter {
  /**
   * <p>The name of the output parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the output parameter.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Metadata about a callback step.</p>
 */
export interface CallbackStepMetadata {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken?: string;

  /**
   * <p>The URL of the Amazon Simple Queue Service (Amazon SQS) queue used by the callback step.</p>
   */
  SqsQueueUrl?: string;

  /**
   * <p>A list of the output parameters of the callback step.</p>
   */
  OutputParameters?: OutputParameter[];
}

export enum CandidateSortBy {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Status = "Status",
}

export enum FeatureStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

/**
 * <p>Time series forecast settings for the SageMaker Canvas app.</p>
 */
export interface TimeSeriesForecastingSettings {
  /**
   * <p>Describes whether time series forecasting is enabled or disabled in the Canvas app.</p>
   */
  Status?: FeatureStatus | string;

  /**
   * <p>The IAM role that Canvas passes to Amazon Forecast for time series forecasting. By default,
   *    Canvas uses the execution role specified in the <code>UserProfile</code> that launches the Canvas app.
   *    If an execution role is not specified in the <code>UserProfile</code>, Canvas uses the execution
   *    role specified in the Domain that owns the <code>UserProfile</code>.
   *    To allow time series forecasting, this IAM role should have the
   *    <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-canvas.html#security-iam-awsmanpol-AmazonSageMakerCanvasForecastAccess">
   *     AmazonSageMakerCanvasForecastAccess</a> policy attached and <code>forecast.amazonaws.com</code> added
   *    in the trust relationship as a service principal.</p>
   */
  AmazonForecastRoleArn?: string;
}

/**
 * <p>The SageMaker Canvas app settings.</p>
 */
export interface CanvasAppSettings {
  /**
   * <p>Time series forecast settings for the Canvas app.</p>
   */
  TimeSeriesForecastingSettings?: TimeSeriesForecastingSettings;
}

/**
 * <p>Configuration specifying how to treat different headers. If no headers are specified SageMaker
 *          will by default base64 encode when capturing the data.</p>
 */
export interface CaptureContentTypeHeader {
  /**
   * <p>The list of all content type headers that SageMaker will treat as CSV and capture accordingly.</p>
   */
  CsvContentTypes?: string[];

  /**
   * <p>The list of all content type headers that SageMaker will treat as JSON and capture accordingly.</p>
   */
  JsonContentTypes?: string[];
}

export enum CaptureMode {
  INPUT = "Input",
  OUTPUT = "Output",
}

/**
 * <p>Specifies data Model Monitor will capture.</p>
 */
export interface CaptureOption {
  /**
   * <p>Specify the boundary of data to capture.</p>
   */
  CaptureMode: CaptureMode | string | undefined;
}

export enum CaptureStatus {
  STARTED = "Started",
  STOPPED = "Stopped",
}

/**
 * <p>Environment parameters you want to benchmark your load test against.</p>
 */
export interface CategoricalParameter {
  /**
   * <p>The Name of the environment variable.</p>
   */
  Name: string | undefined;

  /**
   * <p>The list of values you can pass.</p>
   */
  Value: string[] | undefined;
}

/**
 * <p>A list of categorical hyperparameters to tune.</p>
 */
export interface CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the categories
   *             for
   *             the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p>Defines the possible values for a categorical hyperparameter.</p>
 */
export interface CategoricalParameterRangeSpecification {
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 */
export interface ChannelSpecification {
  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>A brief description of the channel.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?: (CompressionType | string)[];

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p>
   *          <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode.</p>
   *          <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: (TrainingInputMode | string)[] | undefined;
}

/**
 * <p>Contains information about the output location for managed spot training checkpoint
 *             data. </p>
 */
export interface CheckpointConfig {
  /**
   * <p>Identifies the S3 path where you want SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   */
  LocalPath?: string;
}

/**
 * <p>The container for the metadata for the ClarifyCheck step. For more information,
 *             see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-clarify-check">ClarifyCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *         </p>
 */
export interface ClarifyCheckStepMetadata {
  /**
   * <p>The type of the Clarify Check step</p>
   */
  CheckType?: string;

  /**
   * <p>The Amazon S3 URI of baseline constraints file to be used for the drift check.</p>
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   */
  CalculatedBaselineConstraints?: string;

  /**
   * <p>The model package group name.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon S3 URI of the violation report if violations are detected.</p>
   */
  ViolationReport?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the check processing job that was run by this step's execution.</p>
   */
  CheckJobArn?: string;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *             If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   */
  SkipCheck?: boolean;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *             <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *             If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *             These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> property. </p>
   */
  RegisterNewBaseline?: boolean;
}

export enum ClarifyFeatureType {
  CATEGORICAL = "categorical",
  NUMERICAL = "numerical",
  TEXT = "text",
}

/**
 * <p>The inference configuration parameter for the model container.</p>
 */
export interface ClarifyInferenceConfig {
  /**
   * <p>Provides the JMESPath expression to extract the features from a model container input
   *             in JSON Lines format. For example, if <code>FeaturesAttribute</code> is the JMESPath
   *             expression <code>'myfeatures'</code>, it extracts a list of features
   *                 <code>[1,2,3]</code> from request data <code>'{"myfeatures":[1,2,3]}'</code>.</p>
   */
  FeaturesAttribute?: string;

  /**
   * <p>A template string used to format a JSON record into an acceptable model container
   *             input. For example, a <code>ContentTemplate</code> string
   *                 <code>'{"myfeatures":$features}'</code> will format a list of features
   *                 <code>[1,2,3]</code> into the record string <code>'{"myfeatures":[1,2,3]}'</code>.
   *             Required only when the model container input is in JSON Lines format.</p>
   */
  ContentTemplate?: string;

  /**
   * <p>The maximum number of records in a request that the model container can process when
   *             querying the model container for the predictions of a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-synthetic">synthetic dataset</a>. A record is a unit of input data that inference can be
   *             made on, for example, a single line in CSV data. If <code>MaxRecordCount</code> is
   *                 <code>1</code>, the model container expects one record per request. A value of 2 or
   *             greater means that the model expects batch requests, which can reduce overhead and speed
   *             up the inferencing process. If this parameter is not provided, the explainer will tune
   *             the record count per request according to the model container's capacity at
   *             runtime.</p>
   */
  MaxRecordCount?: number;

  /**
   * <p>The maximum payload size (MB) allowed of a request from the explainer to the model
   *             container. Defaults to <code>6</code> MB.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A zero-based index used to extract a probability value (score) or list from model
   *             container output in CSV format. If this value is not provided, the entire model
   *             container output will be treated as a probability value (score) or list.</p>
   *          <p>
   *             <b>Example for a single class model:</b> If the model
   *             container output consists of a string-formatted prediction label followed by its
   *             probability: <code>'1,0.6'</code>, set <code>ProbabilityIndex</code> to <code>1</code>
   *             to select the probability value <code>0.6</code>.</p>
   *          <p>
   *             <b>Example for a multiclass model:</b> If the model
   *             container output consists of a string-formatted prediction label followed by its
   *             probability: <code>'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'</code>, set
   *                 <code>ProbabilityIndex</code> to <code>1</code> to select the probability values
   *                 <code>[0.1,0.6,0.3]</code>.</p>
   */
  ProbabilityIndex?: number;

  /**
   * <p>A zero-based index used to extract a label header or list of label headers from model
   *             container output in CSV format.</p>
   *          <p>
   *             <b>Example for a multiclass model:</b> If the model
   *             container output consists of label headers followed by probabilities:
   *                 <code>'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'</code>, set
   *                 <code>LabelIndex</code> to <code>0</code> to select the label headers
   *                 <code>['cat','dog','fish']</code>.</p>
   */
  LabelIndex?: number;

  /**
   * <p>A JMESPath expression used to extract the probability (or score) from the model
   *             container output if the model container is in JSON Lines format.</p>
   *          <p>
   *             <b>Example</b>: If the model container output of a single
   *             request is <code>'{"predicted_label":1,"probability":0.6}'</code>, then set
   *                 <code>ProbabilityAttribute</code> to <code>'probability'</code>.</p>
   */
  ProbabilityAttribute?: string;

  /**
   * <p>A JMESPath expression used to locate the list of label headers in the model container
   *             output.</p>
   *          <p>
   *             <b>Example</b>: If the model container output of a batch
   *             request is <code>'{"labels":["cat","dog","fish"],"probability":[0.6,0.3,0.1]}'</code>,
   *             then set <code>LabelAttribute</code> to <code>'labels'</code> to extract the list of
   *             label headers <code>["cat","dog","fish"]</code>
   *          </p>
   */
  LabelAttribute?: string;

  /**
   * <p>For multiclass classification problems, the label headers are the names of the
   *             classes. Otherwise, the label header is the name of the predicted label. These are used
   *             to help readability for the output of the <code>InvokeEndpoint</code> API. See the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">response</a> section under <b>Invoke the endpoint</b>
   *             in the Developer Guide for more information. If there are no label headers in the model
   *             container output, provide them manually using this parameter.</p>
   */
  LabelHeaders?: string[];

  /**
   * <p>The names of the features. If provided, these are included in the endpoint response
   *             payload to help readability of the <code>InvokeEndpoint</code> output. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">Response</a> section under <b>Invoke the endpoint</b>
   *             in the Developer Guide for more information.</p>
   */
  FeatureHeaders?: string[];

  /**
   * <p>A list of data types of the features (optional). Applicable only to NLP
   *             explainability. If provided, <code>FeatureTypes</code> must have at least one
   *                 <code>'text'</code> string (for example, <code>['text']</code>). If
   *                 <code>FeatureTypes</code> is not provided, the explainer infers the feature types
   *             based on the baseline data. The feature types are included in the endpoint response
   *             payload. For additional information see the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">response</a> section under <b>Invoke the endpoint</b>
   *             in the Developer Guide for more information.</p>
   */
  FeatureTypes?: (ClarifyFeatureType | string)[];
}

/**
 * <p>The configuration for the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-feature-attribute-shap-baselines.html">SHAP
 *                 baseline</a> (also called the background or reference dataset) of the Kernal
 *             SHAP algorithm.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The number of records in the baseline data determines the size of the
 *                         synthetic dataset, which has an impact on latency of explainability
 *                         requests. For more information, see the <b>Synthetic
 *                             data</b> of <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html">Configure and create an endpoint</a>.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>ShapBaseline</code> and <code>ShapBaselineUri</code> are mutually
 *                         exclusive parameters. One or the either is required to configure a SHAP
 *                         baseline. </p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface ClarifyShapBaselineConfig {
  /**
   * <p>The MIME type of the baseline data. Choose from <code>'text/csv'</code> or
   *                 <code>'application/jsonlines'</code>. Defaults to <code>'text/csv'</code>.</p>
   */
  MimeType?: string;

  /**
   * <p>The inline SHAP baseline data in string format. <code>ShapBaseline</code> can have one
   *             or multiple records to be used as the baseline dataset. The format of the SHAP baseline
   *             file should be the same format as the training dataset. For example, if the training
   *             dataset is in CSV format and each record contains four features, and all features are
   *             numerical, then the format of the baseline data should also share these characteristics.
   *             For natural language processing (NLP) of text columns, the baseline value should be the
   *             value used to replace the unit of text specified by the <code>Granularity</code> of the
   *                 <code>TextConfig</code> parameter. The size limit for <code>ShapBasline</code> is 4
   *             KB. Use the <code>ShapBaselineUri</code> parameter if you want to provide more than 4 KB
   *             of baseline data.</p>
   */
  ShapBaseline?: string;

  /**
   * <p>The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is
   *             stored. The format of the SHAP baseline file should be the same format as the format of
   *             the training dataset. For example, if the training dataset is in CSV format, and each
   *             record in the training dataset has four features, and all features are numerical, then
   *             the baseline file should also have this same format. Each record should contain only the
   *             features. If you are using a virtual private cloud (VPC), the
   *                 <code>ShapBaselineUri</code> should be accessible to the VPC. For more information
   *             about setting up endpoints with Amazon Virtual Private Cloud, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker access to
   *                 Resources in your Amazon Virtual Private Cloud</a>.</p>
   */
  ShapBaselineUri?: string;
}

export enum ClarifyTextGranularity {
  PARAGRAPH = "paragraph",
  SENTENCE = "sentence",
  TOKEN = "token",
}

export enum ClarifyTextLanguage {
  AFRIKAANS = "af",
  ALBANIAN = "sq",
  ARABIC = "ar",
  ARMENIAN = "hy",
  BASQUE = "eu",
  BENGALI = "bn",
  BULGARIAN = "bg",
  CATALAN = "ca",
  CHINESE = "zh",
  CROATIAN = "hr",
  CZECH = "cs",
  DANISH = "da",
  DUTCH = "nl",
  ENGLISH = "en",
  ESTONIAN = "et",
  FINNISH = "fi",
  FRENCH = "fr",
  GERMAN = "de",
  GREEK = "el",
  GUJARATI = "gu",
  HEBREW = "he",
  HINDI = "hi",
  HUNGARIAN = "hu",
  ICELANDIC = "is",
  INDONESIAN = "id",
  IRISH = "ga",
  ITALIAN = "it",
  KANNADA = "kn",
  KYRGYZ = "ky",
  LATVIAN = "lv",
  LIGURIAN = "lij",
  LITHUANIAN = "lt",
  LUXEMBOURGISH = "lb",
  MACEDONIAN = "mk",
  MALAYALAM = "ml",
  MARATHI = "mr",
  MULTI_LANGUAGE = "xx",
  NEPALI = "ne",
  NORWEGIAN_BOKMAL = "nb",
  PERSIAN = "fa",
  POLISH = "pl",
  PORTUGUESE = "pt",
  ROMANIAN = "ro",
  RUSSIAN = "ru",
  SANSKRIT = "sa",
  SERBIAN = "sr",
  SETSWANA = "tn",
  SINHALA = "si",
  SLOVAK = "sk",
  SLOVENIAN = "sl",
  SPANISH = "es",
  SWEDISH = "sv",
  TAGALOG = "tl",
  TAMIL = "ta",
  TATAR = "tt",
  TELUGU = "te",
  TURKISH = "tr",
  UKRAINIAN = "uk",
  URDU = "ur",
  YORUBA = "yo",
}

/**
 * <p>A parameter used to configure the SageMaker Clarify explainer to treat text features as text so
 *             that explanations are provided for individual units of text. Required only for natural
 *             language processing (NLP) explainability. </p>
 */
export interface ClarifyTextConfig {
  /**
   * <p>Specifies the language of the text features in <a href=" https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1</a> or
   *                 <a href="https://en.wikipedia.org/wiki/ISO_639-3">ISO 639-3</a> code of a
   *             supported language. </p>
   *          <note>
   *             <p>For a mix of multiple languages, use code <code>'xx'</code>.</p>
   *          </note>
   */
  Language: ClarifyTextLanguage | string | undefined;

  /**
   * <p>The unit of granularity for the analysis of text features. For example, if the unit is
   *                 <code>'token'</code>, then each token (like a word in English) of the text is
   *             treated as a feature. SHAP values are computed for each unit/feature.</p>
   */
  Granularity: ClarifyTextGranularity | string | undefined;
}

/**
 * <p>The configuration for SHAP analysis using SageMaker Clarify Explainer.</p>
 */
export interface ClarifyShapConfig {
  /**
   * <p>The configuration for the SHAP baseline of the Kernal SHAP algorithm.</p>
   */
  ShapBaselineConfig: ClarifyShapBaselineConfig | undefined;

  /**
   * <p>The number of samples to be used for analysis by the Kernal SHAP algorithm. </p>
   *          <note>
   *             <p>The number of samples determines the size of the synthetic dataset, which has an
   *                 impact on latency of explainability requests. For more information, see the
   *                     <b>Synthetic data</b> of <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html">Configure and create an endpoint</a>.</p>
   *          </note>
   */
  NumberOfSamples?: number;

  /**
   * <p>A Boolean toggle to indicate if you want to use the logit function (true) or log-odds
   *             units (false) for model predictions. Defaults to false.</p>
   */
  UseLogit?: boolean;

  /**
   * <p>The starting value used to initialize the random number generator in the explainer.
   *             Provide a value for this parameter to obtain a deterministic SHAP result.</p>
   */
  Seed?: number;

  /**
   * <p>A parameter that indicates if text features are treated as text and explanations are
   *             provided for individual units of text. Required for natural language processing (NLP)
   *             explainability only.</p>
   */
  TextConfig?: ClarifyTextConfig;
}

/**
 * <p>The configuration parameters for the SageMaker Clarify explainer.</p>
 */
export interface ClarifyExplainerConfig {
  /**
   * <p>A JMESPath boolean expression used to filter which records to explain. Explanations
   *             are activated by default. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">
   *                <code>EnableExplanations</code>
   *             </a>for additional information.</p>
   */
  EnableExplanations?: string;

  /**
   * <p>The inference configuration parameter for the model container.</p>
   */
  InferenceConfig?: ClarifyInferenceConfig;

  /**
   * <p>The configuration for SHAP analysis.</p>
   */
  ShapConfig: ClarifyShapConfig | undefined;
}

/**
 * <p>A Git repository that SageMaker automatically displays to users for cloning in the JupyterServer application.</p>
 */
export interface CodeRepository {
  /**
   * <p>The URL of the Git repository.</p>
   */
  RepositoryUrl: string | undefined;
}

export enum CodeRepositorySortBy {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name",
}

export enum CodeRepositorySortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
 * <p>Specifies configuration details for a Git repository in your Amazon Web Services
 *             account.</p>
 */
export interface GitConfig {
  /**
   * <p>The URL where the Git repository is located.</p>
   */
  RepositoryUrl: string | undefined;

  /**
   * <p>The default branch for the Git repository.</p>
   */
  Branch?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *          </p>
   */
  SecretArn?: string;
}

/**
 * <p>Specifies summary information about a Git repository.</p>
 */
export interface CodeRepositorySummary {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the Git repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the Git repository was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details for the Git repository, including the URL where it is located
   *             and the ARN of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository.</p>
   */
  GitConfig?: GitConfig;
}

/**
 * <p>Use this parameter to configure your Amazon Cognito workforce.
 *       A single Cognito workforce is created using and corresponds to a single
 *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
 *       Amazon Cognito user pool</a>.</p>
 */
export interface CognitoConfig {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       user pool</a> is a user directory in Amazon Cognito.
   *       With a user pool, your users can sign in to your web or mobile app through Amazon Cognito.
   *       Your users can also sign in through social identity providers like
   *       Google, Facebook, Amazon, or Apple, and through SAML identity providers.</p>
   */
  UserPool: string | undefined;

  /**
   * <p>The client ID for your Amazon Cognito user pool.</p>
   */
  ClientId: string | undefined;
}

/**
 * <p>Identifies a Amazon Cognito user group. A user group can be used in on or more work
 *             teams.</p>
 */
export interface CognitoMemberDefinition {
  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service
   *             that you are calling.</p>
   */
  UserPool: string | undefined;

  /**
   * <p>An identifier for a user group.</p>
   */
  UserGroup: string | undefined;

  /**
   * <p>An identifier for an application client. You must create the app client ID using
   *             Amazon Cognito.</p>
   */
  ClientId: string | undefined;
}

/**
 * <p>Configuration information for the Amazon SageMaker Debugger output tensor collections.</p>
 */
export interface CollectionConfiguration {
  /**
   * <p>The name of the tensor collection. The name must be unique relative to other rule configuration names.</p>
   */
  CollectionName?: string;

  /**
   * <p>Parameter values for the tensor collection. The allowed parameters are
   *                 <code>"name"</code>, <code>"include_regex"</code>, <code>"reduction_config"</code>,
   *                 <code>"save_config"</code>, <code>"tensor_names"</code>, and
   *                 <code>"save_histogram"</code>.</p>
   */
  CollectionParameters?: Record<string, string>;
}

export enum CompilationJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INPROGRESS = "INPROGRESS",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export enum TargetDevice {
  AISAGE = "aisage",
  AMBA_CV2 = "amba_cv2",
  AMBA_CV22 = "amba_cv22",
  AMBA_CV25 = "amba_cv25",
  COREML = "coreml",
  DEEPLENS = "deeplens",
  IMX8MPLUS = "imx8mplus",
  IMX8QM = "imx8qm",
  JACINTO_TDA4VM = "jacinto_tda4vm",
  JETSON_NANO = "jetson_nano",
  JETSON_TX1 = "jetson_tx1",
  JETSON_TX2 = "jetson_tx2",
  JETSON_XAVIER = "jetson_xavier",
  LAMBDA = "lambda",
  ML_C4 = "ml_c4",
  ML_C5 = "ml_c5",
  ML_EIA2 = "ml_eia2",
  ML_G4DN = "ml_g4dn",
  ML_INF1 = "ml_inf1",
  ML_M4 = "ml_m4",
  ML_M5 = "ml_m5",
  ML_P2 = "ml_p2",
  ML_P3 = "ml_p3",
  QCS603 = "qcs603",
  QCS605 = "qcs605",
  RASP3B = "rasp3b",
  RK3288 = "rk3288",
  RK3399 = "rk3399",
  SBE_C = "sbe_c",
  SITARA_AM57X = "sitara_am57x",
  X86_WIN32 = "x86_win32",
  X86_WIN64 = "x86_win64",
}

export enum TargetPlatformAccelerator {
  INTEL_GRAPHICS = "INTEL_GRAPHICS",
  MALI = "MALI",
  NNA = "NNA",
  NVIDIA = "NVIDIA",
}

export enum TargetPlatformArch {
  ARM64 = "ARM64",
  ARM_EABI = "ARM_EABI",
  ARM_EABIHF = "ARM_EABIHF",
  X86 = "X86",
  X86_64 = "X86_64",
}

export enum TargetPlatformOs {
  ANDROID = "ANDROID",
  LINUX = "LINUX",
}

/**
 * <p>A summary of a model compilation job.</p>
 */
export interface CompilationJobSummary {
  /**
   * <p>The name of the model compilation job that you want a summary for.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The time when the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the model compilation job started.</p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job completed.</p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>The type of device that the model will run on after the compilation job has
   *             completed.</p>
   */
  CompilationTargetDevice?: TargetDevice | string;

  /**
   * <p>The type of OS that the model will run on after the compilation job has
   *             completed.</p>
   */
  CompilationTargetPlatformOs?: TargetPlatformOs | string;

  /**
   * <p>The type of architecture that the model will run on after the compilation job has
   *             completed.</p>
   */
  CompilationTargetPlatformArch?: TargetPlatformArch | string;

  /**
   * <p>The type of accelerator that the model will run on after the compilation job has
   *             completed.</p>
   */
  CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator | string;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;
}

export enum ConditionOutcome {
  FALSE = "False",
  TRUE = "True",
}

/**
 * <p>Metadata for a Condition step.</p>
 */
export interface ConditionStepMetadata {
  /**
   * <p>The outcome of the Condition step evaluation.</p>
   */
  Outcome?: ConditionOutcome | string;
}

/**
 * <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

export enum RepositoryAccessMode {
  PLATFORM = "Platform",
  VPC = "Vpc",
}

/**
 * <p>Specifies an authentication configuration for the private docker registry where your
 *             model image is hosted. Specify a value for this property only if you specified
 *                 <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field of the
 *                 <code>ImageConfig</code> object that you passed to a call to
 *                 <code>CreateModel</code> and the private Docker registry where the model image is
 *             hosted requires authentication.</p>
 */
export interface RepositoryAuthConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function that provides
   *             credentials to authenticate to the private Docker registry where your model image is
   *             hosted. For information about how to create an Amazon Web Services Lambda function, see
   *                 <a href="https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html">Create a Lambda function
   *                 with the console</a> in the <i>Amazon Web Services Lambda Developer
   *                 Guide</i>.</p>
   */
  RepositoryCredentialsProviderArn: string | undefined;
}

/**
 * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
 *             accessible from your Amazon Virtual Private Cloud (VPC).</p>
 */
export interface ImageConfig {
  /**
   * <p>Set this to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Platform</code> - The model image is hosted in Amazon ECR.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Vpc</code> - The model image is hosted in a private Docker registry in
   *                     your VPC.</p>
   *             </li>
   *          </ul>
   */
  RepositoryAccessMode: RepositoryAccessMode | string | undefined;

  /**
   * <p>(Optional) Specifies an authentication configuration for the private docker registry
   *             where your model image is hosted. Specify a value for this property only if you
   *             specified <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field,
   *             and the private Docker registry where the model image is hosted requires
   *             authentication.</p>
   */
  RepositoryAuthConfig?: RepositoryAuthConfig;
}

export enum ContainerMode {
  MULTI_MODEL = "MultiModel",
  SINGLE_MODEL = "SingleModel",
}

export enum ModelCacheSetting {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

/**
 * <p>Specifies additional configuration for hosting multi-model endpoints.</p>
 */
export interface MultiModelConfig {
  /**
   * <p>Whether to cache models for a multi-model endpoint. By default, multi-model endpoints
   *             cache models so that a model does not have to be loaded into memory each time it is
   *             invoked. Some use cases do not benefit from model caching. For example, if an endpoint
   *             hosts a large number of models that are each invoked infrequently, the endpoint might
   *             perform better if you disable model caching. To disable model caching, set the value of
   *             this parameter to <code>Disabled</code>.</p>
   */
  ModelCacheSetting?: ModelCacheSetting | string;
}

/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface ContainerDefinition {
  /**
   * <p>This parameter is ignored for models that contain only a
   *             <code>PrimaryContainer</code>.</p>
   *          <p>When a <code>ContainerDefinition</code> is part of an inference pipeline, the value of
   *             the parameter uniquely identifies the container for the purposes of logging and metrics.
   *             For information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html">Use Logs and Metrics
   *                 to Monitor an Inference Pipeline</a>. If you don't specify a value for this
   *             parameter for a <code>ContainerDefinition</code> that is part of an inference pipeline,
   *             a unique name is automatically assigned based on the position of the
   *                 <code>ContainerDefinition</code> in the pipeline. If you specify a value for the
   *                 <code>ContainerHostName</code> for any <code>ContainerDefinition</code> that is part
   *             of an inference pipeline, you must specify a value for the
   *                 <code>ContainerHostName</code> parameter of every <code>ContainerDefinition</code>
   *             in that pipeline.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a
   *             Docker registry that is accessible from the same VPC that you configure for your
   *             endpoint. If you are using your own custom algorithm instead of an algorithm provided by
   *             SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>
   *          </p>
   */
  Image?: string;

  /**
   * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
   *             accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a
   *             private Docker registry, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html">Use a
   *                 Private Docker Registry for Real-Time Inference Containers</a>
   *          </p>
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>Whether the container hosts a single model or multiple models.</p>
   */
  Mode?: ContainerMode | string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3
   *             path is required for SageMaker built-in algorithms, but not if you use your own algorithms.
   *             For more information on built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common
   *                 Parameters</a>. </p>
   *          <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model or endpoint you are creating.</p>
   *          </note>
   *          <p>If you provide a value for this parameter, SageMaker uses Amazon Web Services Security Token
   *             Service to download model artifacts from the S3 path you provide. Amazon Web Services STS
   *             is activated in your IAM user account by default. If you previously deactivated
   *                 Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS
   *             for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
   *                     <i>Amazon Web Services Identity and Access Management User
   *                 Guide</i>.</p>
   *          <important>
   *             <p>If you use a built-in algorithm to create a model, SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *          </important>
   */
  ModelDataUrl?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *                 <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map. </p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the
   *             model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Specifies additional configuration for multi-model endpoints.</p>
   */
  MultiModelConfig?: MultiModelConfig;
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
}

/**
 * <p>A structure describing the source of a context.</p>
 */
export interface ContextSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   */
  SourceId?: string;
}

/**
 * <p>Lists a summary of the properties of a context. A context provides a logical grouping
 *         of other entities.</p>
 */
export interface ContextSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;

  /**
   * <p>The name of the context.</p>
   */
  ContextName?: string;

  /**
   * <p>The source of the context.</p>
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   */
  ContextType?: string;

  /**
   * <p>When the context was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the context was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export enum HyperParameterScalingType {
  AUTO = "Auto",
  LINEAR = "Linear",
  LOGARITHMIC = "Logarithmic",
  REVERSE_LOGARITHMIC = "ReverseLogarithmic",
}

/**
 * <p>A list of continuous hyperparameters to tune.</p>
 */
export interface ContinuousParameterRange {
  /**
   * <p>The name of the continuous hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The minimum value for the hyperparameter.
   *             The
   *             tuning job uses floating-point values between this value and <code>MaxValue</code>for
   *             tuning.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum value for the hyperparameter. The tuning job uses floating-point values
   *             between <code>MinValue</code> value and this value for tuning.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *          <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                <p>SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *             </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *             </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *             </dd>
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a reverse logarithmic scale.</p>
   *                <p>Reverse logarithmic scaling works only for ranges that are entirely within
   *                         the range 0<=x<1.0.</p>
   *             </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

/**
 * <p>Defines the possible values for a continuous hyperparameter.</p>
 */
export interface ContinuousParameterRangeSpecification {
  /**
   * <p>The minimum floating-point value allowed.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum floating-point value allowed.</p>
   */
  MaxValue: string | undefined;
}

/**
 * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
 */
export interface MetadataProperties {
  /**
   * <p>The commit ID.</p>
   */
  CommitId?: string;

  /**
   * <p>The repository.</p>
   */
  Repository?: string;

  /**
   * <p>The entity this entity was generated by.</p>
   */
  GeneratedBy?: string;

  /**
   * <p>The project ID.</p>
   */
  ProjectId?: string;
}

export interface CreateActionRequest {
  /**
   * <p>The name of the action. Must be unique to your account in an Amazon Web Services Region.</p>
   */
  ActionName: string | undefined;

  /**
   * <p>The source type, ID, and URI.</p>
   */
  Source: ActionSource | undefined;

  /**
   * <p>The action type.</p>
   */
  ActionType: string | undefined;

  /**
   * <p>The description of the action.</p>
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>A list of properties to add to the action.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the action.</p>
   */
  Tags?: Tag[];
}

export interface CreateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

/**
 * <p>Defines the possible values for an integer hyperparameter.</p>
 */
export interface IntegerParameterRangeSpecification {
  /**
   * <p>The minimum integer value allowed.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum integer value allowed.</p>
   */
  MaxValue: string | undefined;
}

/**
 * <p>Defines the possible values for categorical, continuous, and integer hyperparameters
 *             to be used by an algorithm.</p>
 */
export interface ParameterRange {
  /**
   * <p>A <code>IntegerParameterRangeSpecification</code> object that defines the possible
   *             values for an integer hyperparameter.</p>
   */
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible
   *             values for a continuous hyperparameter.</p>
   */
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  /**
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible
   *             values for a categorical hyperparameter.</p>
   */
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
}

export enum ParameterType {
  CATEGORICAL = "Categorical",
  CONTINUOUS = "Continuous",
  FREE_TEXT = "FreeText",
  INTEGER = "Integer",
}

/**
 * <p>Defines a hyperparameter to be used by an algorithm.</p>
 */
export interface HyperParameterSpecification {
  /**
   * <p>The name of this hyperparameter. The name must be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>A brief description of the hyperparameter.</p>
   */
  Description?: string;

  /**
   * <p>The type of this hyperparameter. The valid types are <code>Integer</code>,
   *                 <code>Continuous</code>, <code>Categorical</code>, and <code>FreeText</code>.</p>
   */
  Type: ParameterType | string | undefined;

  /**
   * <p>The allowed range for this hyperparameter.</p>
   */
  Range?: ParameterRange;

  /**
   * <p>Indicates whether this hyperparameter is tunable in a hyperparameter tuning
   *             job.</p>
   */
  IsTunable?: boolean;

  /**
   * <p>Indicates whether this hyperparameter is required.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The default value for this hyperparameter. If a default value is specified, a
   *             hyperparameter cannot be required.</p>
   */
  DefaultValue?: string;
}

export enum HyperParameterTuningJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize",
}

/**
 * <p>Defines the objective metric for a hyperparameter tuning job.
 *             Hyperparameter
 *             tuning uses the value of this metric to evaluate the training jobs it launches, and
 *             returns the training job that results in either the highest or lowest value for this
 *             metric, depending on the value you specify for the <code>Type</code>
 *             parameter.</p>
 */
export interface HyperParameterTuningJobObjective {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric.</p>
   */
  Type: HyperParameterTuningJobObjectiveType | string | undefined;

  /**
   * <p>The
   *             name of the metric to use for the objective metric.</p>
   */
  MetricName: string | undefined;
}

/**
 * <p>Defines how the algorithm is used for a training job.</p>
 */
export interface TrainingSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the training
   *             algorithm.</p>
   */
  TrainingImage: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  TrainingImageDigest?: string;

  /**
   * <p>A list of the <code>HyperParameterSpecification</code> objects, that define the
   *             supported hyperparameters. This is required if the algorithm supports automatic model
   *             tuning.></p>
   */
  SupportedHyperParameters?: HyperParameterSpecification[];

  /**
   * <p>A list of the instance types that this algorithm can use for training.</p>
   */
  SupportedTrainingInstanceTypes: (TrainingInstanceType | string)[] | undefined;

  /**
   * <p>Indicates whether the algorithm supports distributed training. If set to false, buyers
   *             can't request more than one instance during training.</p>
   */
  SupportsDistributedTraining?: boolean;

  /**
   * <p>A list of <code>MetricDefinition</code> objects, which are used for parsing metrics
   *             generated by the algorithm.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>A list of <code>ChannelSpecification</code> objects, which specify the input sources
   *             to be used by the algorithm.</p>
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * <p>A list of the metrics that the algorithm emits that can be used as the objective
   *             metric in a hyperparameter tuning job.</p>
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];
}

export interface CreateAlgorithmInput {
  /**
   * <p>The name of the algorithm.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>A description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>Specifies details about training jobs run by this algorithm, including the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon ECR path of the container and the version digest of the
   *                     algorithm.</p>
   *             </li>
   *             <li>
   *                <p>The hyperparameters that the algorithm supports.</p>
   *             </li>
   *             <li>
   *                <p>The instance types that the algorithm supports for training.</p>
   *             </li>
   *             <li>
   *                <p>Whether the algorithm supports distributed training.</p>
   *             </li>
   *             <li>
   *                <p>The metrics that the algorithm emits to Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                <p>Which metrics that the algorithm emits can be used as the objective metric for
   *                     hyperparameter tuning jobs.</p>
   *             </li>
   *             <li>
   *                <p>The input channels that the algorithm supports for training data. For example,
   *                     an algorithm might support <code>train</code>, <code>validation</code>, and
   *                         <code>test</code> channels.</p>
   *             </li>
   *          </ul>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Specifies details about inference jobs that the algorithm runs, including the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                <p>The instance types that the algorithm supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                <p>The input and output content formats that the algorithm supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more training jobs and that SageMaker runs to test the
   *             algorithm's training code and, optionally, one or more batch transform jobs that SageMaker
   *             runs to test the algorithm's inference code.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>Whether to certify the algorithm so that it can be listed in Amazon Web Services
   *             Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

export interface CreateAlgorithmOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new algorithm.</p>
   */
  AlgorithmArn: string | undefined;
}

/**
 * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
 *      the version runs on.</p>
 */
export interface ResourceSpec {
  /**
   * <p>The ARN of the SageMaker image that the image version belongs to.</p>
   */
  SageMakerImageArn?: string;

  /**
   * <p>The ARN of the image version created on the instance.</p>
   */
  SageMakerImageVersionArn?: string;

  /**
   * <p>The instance type that the image version runs on.</p>
   *          <note>
   *             <p>
   *                <b>JupyterServer apps</b> only support the <code>system</code> value.</p>
   *             <p>For <b>KernelGateway apps</b>, the <code>system</code>
   *              value is translated to <code>ml.t3.medium</code>. KernelGateway apps also support all other values for available
   *             instance types.</p>
   *          </note>
   */
  InstanceType?: AppInstanceType | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.</p>
   */
  LifecycleConfigArn?: string;
}

export interface CreateAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   *          <note>
   *             <p>The value of <code>InstanceType</code> passed as part of the <code>ResourceSpec</code> in the <code>CreateApp</code> call overrides the value passed as part of the <code>ResourceSpec</code> configured for
   *           the user profile or the domain. If <code>InstanceType</code> is not specified in any of those three <code>ResourceSpec</code> values for a
   *           <code>KernelGateway</code> app, the <code>CreateApp</code> call fails with a request validation error.</p>
   *          </note>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   */
  SpaceName?: string;
}

export interface CreateAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;
}

/**
 * <p>Resource being accessed is in use.</p>
 */
export class ResourceInUse extends __BaseException {
  readonly name: "ResourceInUse" = "ResourceInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig. Must be unique to your account.</p>
   */
  AppImageConfigName: string | undefined;

  /**
   * <p>A list of tags to apply to the AppImageConfig.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The KernelGatewayImageConfig. You can only specify one image kernel in the
   * 	AppImageConfig API. This kernel will be shown to users before the
   * 	image starts. Once the image runs, all kernels are visible in JupyterLab.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export interface CreateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

export interface CreateArtifactRequest {
  /**
   * <p>The name of the artifact. Must be unique to your account in an Amazon Web Services Region.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The ID, ID type, and URI of the source.</p>
   */
  Source: ArtifactSource | undefined;

  /**
   * <p>The artifact type.</p>
   */
  ArtifactType: string | undefined;

  /**
   * <p>A list of properties to add to the artifact.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the artifact.</p>
   */
  Tags?: Tag[];
}

export interface CreateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

/**
 * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
 *          deployment.</p>
 */
export interface ModelDeployConfig {
  /**
   * <p>Set to <code>True</code> to automatically generate an endpoint name for a one-click
   *          Autopilot model deployment; set to <code>False</code> otherwise. The default value is
   *             <code>False</code>.</p>
   *          <note>
   *             <p>If you set <code>AutoGenerateEndpointName</code> to <code>True</code>, do not specify
   *             the <code>EndpointName</code>; otherwise a 400 error is thrown.</p>
   *          </note>
   */
  AutoGenerateEndpointName?: boolean;

  /**
   * <p>Specifies the endpoint name to use for a one-click Autopilot model deployment if the
   *          endpoint name is not generated automatically.</p>
   *          <note>
   *             <p>Specify the <code>EndpointName</code> if and only if you set
   *                <code>AutoGenerateEndpointName</code> to <code>False</code>; otherwise a 400 error is
   *             thrown.</p>
   *          </note>
   */
  EndpointName?: string;
}

export enum ProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression",
}

export interface CreateAutoMLJobRequest {
  /**
   * <p>Identifies an Autopilot job. The name must be unique to your account and is
   *          case-insensitive.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>An array of channel objects that describes the input data and its location. Each channel
   *          is a named input source. Similar to <code>InputDataConfig</code> supported by . Format(s) supported: CSV, Parquet.
   *          A minimum of 500 rows is required for the training dataset. There is not a minimum number
   *          of rows required for the validation dataset.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Provides information about encryption and the Amazon S3 output path needed to store artifacts
   *          from an AutoML job. Format(s) supported: CSV.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Defines the type of supervised learning available for the candidates. For more
   *          information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development-problem-types.html">
   *             Amazon SageMaker Autopilot problem types and algorithm support</a>.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Defines the objective metric used to measure the predictive quality of an AutoML job. You
   *          provide an <a>AutoMLJobObjective$MetricName</a> and Autopilot infers whether to
   *          minimize or maximize it.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>A collection of settings used to configure an AutoML job.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>The ARN of the role that is used to access the data.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Generates possible candidates without training the models. A candidate is a combination
   *          of data preprocessors, algorithms, and algorithm parameter settings.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Each tag consists of a key and an optional value. Tag keys must be unique per
   *          resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
   *          deployment.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;
}

export interface CreateAutoMLJobResponse {
  /**
   * <p>The unique ARN assigned to the AutoML job when it is created.</p>
   */
  AutoMLJobArn: string | undefined;
}

export interface CreateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository. The name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>Specifies details about the repository, including the URL where the repository is
   *             located, the default branch, and credentials to use to access the repository.</p>
   */
  GitConfig: GitConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

export interface CreateCodeRepositoryOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export enum Framework {
  DARKNET = "DARKNET",
  KERAS = "KERAS",
  MXNET = "MXNET",
  ONNX = "ONNX",
  PYTORCH = "PYTORCH",
  SKLEARN = "SKLEARN",
  TENSORFLOW = "TENSORFLOW",
  TFLITE = "TFLITE",
  XGBOOST = "XGBOOST",
}

/**
 * <p>Contains information about the location of input model artifacts, the name and
 *             shape
 *             of the expected data inputs, and the framework in which the model was trained.</p>
 */
export interface InputConfig {
  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a
   *             JSON dictionary form. The data inputs are <a>InputConfig$Framework</a>
   *             specific. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TensorFlow</code>: You must specify the name and shape (NHWC format) of
   *                     the expected data inputs using a dictionary format for your trained model. The
   *                     dictionary formats required for the console and CLI are different.</p>
   *                <ul>
   *                   <li>
   *                      <p>Examples for one input:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console,
   *                                     <code>{"input":[1,1024,1024,3]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>{\"input\":[1,1024,1024,3]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>{"data1": [1,28,28,1],
   *                                         "data2":[1,28,28,1]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>{\"data1\": [1,28,28,1],
   *                                         \"data2\":[1,28,28,1]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KERAS</code>: You must specify the name and shape (NCHW format) of
   *                     expected data inputs using a dictionary format for your trained model. Note that
   *                     while Keras model artifacts should be uploaded in NHWC (channel-last) format,
   *                         <code>DataInputConfig</code> should be specified in NCHW (channel-first)
   *                     format. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                <ul>
   *                   <li>
   *                      <p>Examples for one input:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console,
   *                                     <code>{"input_1":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>{\"input_1\":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>{"input_1": [1,3,224,224],
   *                                         "input_2":[1,3,224,224]} </code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>{\"input_1\": [1,3,224,224],
   *                                         \"input_2\":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MXNET/ONNX/DARKNET</code>: You must specify the name and shape (NCHW format) of
   *                     the expected data inputs in order using a dictionary format for your trained
   *                     model. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                <ul>
   *                   <li>
   *                      <p>Examples for one input:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console,
   *                                     <code>{"data":[1,3,1024,1024]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>{\"data\":[1,3,1024,1024]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>{"var1": [1,1,28,28],
   *                                         "var2":[1,1,28,28]} </code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>{\"var1\": [1,1,28,28],
   *                                         \"var2\":[1,1,28,28]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PyTorch</code>: You can either specify the name and shape (NCHW format)
   *                     of expected data inputs in order using a dictionary format for your trained
   *                     model or you can specify the shape only using a list format. The dictionary
   *                     formats required for the console and CLI are different. The list formats for the
   *                     console and CLI are the same.</p>
   *                <ul>
   *                   <li>
   *                      <p>Examples for one input in dictionary format:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console,
   *                                     <code>{"input0":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>{\"input0\":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Example for one input in list format:
   *                             <code>[[1,3,224,224]]</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs in dictionary format:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>{"input0":[1,3,224,224],
   *                                         "input1":[1,3,224,224]}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>{\"input0\":[1,3,224,224],
   *                                         \"input1\":[1,3,224,224]} </code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Example for two inputs in list format: <code>[[1,3,224,224],
   *                                 [1,3,224,224]]</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XGBOOST</code>: input data name and shape are not needed.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>DataInputConfig</code> supports the following parameters for <code>CoreML</code>
   *             <a>OutputConfig$TargetDevice</a> (ML Model format):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>shape</code>: Input shape, for example <code>{"input_1": {"shape": [1,224,224,3]}}</code>.
   *                     In addition to static input shapes, CoreML converter supports Flexible input shapes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Range Dimension. You can use the Range Dimension feature if you know the input shape
   *                             will be within some specific interval in that dimension,
   *                             for example: <code>{"input_1": {"shape": ["1..10", 224, 224, 3]}}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Enumerated shapes. Sometimes, the models are trained to work only on a select
   *                             set of inputs. You can enumerate all supported input shapes,
   *                             for example: <code>{"input_1": {"shape": [[1, 224, 224, 3], [1, 160, 160, 3]]}}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_shape</code>: Default input shape. You can set a default shape during
   *                     conversion for both Range Dimension and Enumerated Shapes. For example
   *                     <code>{"input_1": {"shape": ["1..10", 224, 224, 3], "default_shape": [1, 224, 224, 3]}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>: Input type. Allowed values: <code>Image</code> and <code>Tensor</code>.
   *                     By default, the converter generates an ML Model with inputs of type Tensor (MultiArray).
   *                     User can set input type to be Image. Image input type requires additional input parameters
   *                     such as <code>bias</code> and <code>scale</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bias</code>: If the input type is an Image, you need to provide the bias vector.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scale</code>: If the input type is an Image, you need to provide a scale factor.</p>
   *             </li>
   *          </ul>
   *          <p>CoreML <code>ClassifierConfig</code> parameters can be specified using
   *             <a>OutputConfig$CompilerOptions</a>. CoreML converter supports Tensorflow and PyTorch models.
   *             CoreML conversion examples:</p>
   *          <ul>
   *             <li>
   *                <p>Tensor type input:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3]}}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Tensor type input without input name (PyTorch):</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224]}]</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Image type input:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Image type input without input name (PyTorch):</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}]</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>Depending on the model format, <code>DataInputConfig</code> requires the following parameters for
   *             <code>ml_eia2</code>
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-TargetDevice">OutputConfig:TargetDevice</a>.</p>
   *          <ul>
   *             <li>
   *                <p>For TensorFlow models saved in the SavedModel format, specify the input names
   *                 from <code>signature_def_key</code> and the input model shapes for <code>DataInputConfig</code>.
   *                 Specify the <code>signature_def_key</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a> if
   *                 the model does not use TensorFlow's default signature def key. For example:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": {"inputs": [1, 224, 224, 3]}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": {"signature_def_key": "serving_custom"}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For TensorFlow models saved as a frozen graph, specify the input tensor names and shapes
   *                 in <code>DataInputConfig</code> and the output tensor names for <code>output_names</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a>.
   *                 For example:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": {"input_tensor:0": [1, 224, 224, 3]}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": {"output_names": ["output_tensor:0"]}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  DataInputConfig: string | undefined;

  /**
   * <p>Identifies the framework in which the model was trained. For example:
   *             TENSORFLOW.</p>
   */
  Framework: Framework | string | undefined;

  /**
   * <p>Specifies the framework version to use. This API field is only supported for the MXNet,
   * 	    PyTorch, TensorFlow and TensorFlow Lite frameworks.</p>
   *          <p>For information about framework versions supported for cloud targets and edge devices, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-cloud.html">Cloud Supported Instance Types and Frameworks</a> and
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-devices-edge-frameworks.html">Edge Supported Frameworks</a>.</p>
   */
  FrameworkVersion?: string;
}

/**
 * <p>Contains information about a target platform that you want your model to run on, such
 *             as OS, architecture, and accelerators. It is an alternative of
 *             <code>TargetDevice</code>.</p>
 */
export interface TargetPlatform {
  /**
   * <p>Specifies a target platform OS.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINUX</code>: Linux-based operating systems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANDROID</code>: Android operating systems. Android API level can be
   *                     specified using the <code>ANDROID_PLATFORM</code> compiler option. For example,
   *                     <code>"CompilerOptions": {'ANDROID_PLATFORM': 28}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Os: TargetPlatformOs | string | undefined;

  /**
   * <p>Specifies a target platform architecture.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>X86_64</code>: 64-bit version of the x86 instruction set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>X86</code>: 32-bit version of the x86 instruction set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARM64</code>: ARMv8 64-bit CPU.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARM_EABIHF</code>: ARMv7 32-bit, Hard Float.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARM_EABI</code>: ARMv7 32-bit, Soft Float. Used by Android 32-bit ARM
   *                     platform.</p>
   *             </li>
   *          </ul>
   */
  Arch: TargetPlatformArch | string | undefined;

  /**
   * <p>Specifies a target platform accelerator (optional).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NVIDIA</code>: Nvidia graphics processing unit. It also requires
   *                     <code>gpu-code</code>, <code>trt-ver</code>, <code>cuda-ver</code> compiler
   *                     options</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MALI</code>: ARM Mali graphics processor</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTEL_GRAPHICS</code>: Integrated Intel graphics</p>
   *             </li>
   *          </ul>
   */
  Accelerator?: TargetPlatformAccelerator | string;
}

/**
 * <p>Contains information about the output location for the compiled model and the target
 *             device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code>
 *             are mutually exclusive, so you need to choose one between the two to specify your target
 *             device or platform. If you cannot find your device you want to use from the
 *                 <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the
 *             platform of your edge device and <code>CompilerOptions</code> if there are specific
 *             settings that are required or recommended to use for particular TargetPlatform.</p>
 */
export interface OutputConfig {
  /**
   * <p>Identifies the S3 bucket where you want Amazon SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>Identifies the target device or the machine learning instance that you want to run
   *             your model on after the compilation has completed. Alternatively, you can specify OS,
   *             architecture, and accelerator using <a>TargetPlatform</a> fields. It can be
   *             used instead of <code>TargetPlatform</code>.</p>
   */
  TargetDevice?: TargetDevice | string;

  /**
   * <p>Contains information about a target platform that you want your model to run on, such
   *             as OS, architecture, and accelerators. It is an alternative of
   *             <code>TargetDevice</code>.</p>
   *          <p>The following examples show how to configure the <code>TargetPlatform</code> and
   *                 <code>CompilerOptions</code> JSON strings for popular target platforms: </p>
   *          <ul>
   *             <li>
   *                <p>Raspberry Pi 3 Model B+</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM_EABIHF"},</code>
   *                </p>
   *                <p>
   *                   <code> "CompilerOptions": {'mattr': ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Jetson TX2</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                <p>
   *                   <code> "CompilerOptions": {'gpu-code': 'sm_62', 'trt-ver': '6.0.1',
   *                         'cuda-ver': '10.0'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>EC2 m5.2xlarge instance OS</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "X86_64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                <p>
   *                   <code> "CompilerOptions": {'mcpu': 'skylake-avx512'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RK3399</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "MALI"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARMv7 phone (CPU)</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM_EABI"},</code>
   *                </p>
   *                <p>
   *                   <code> "CompilerOptions": {'ANDROID_PLATFORM': 25, 'mattr':
   *                     ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARMv8 phone (CPU)</p>
   *                <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM64"},</code>
   *                </p>
   *                <p>
   *                   <code> "CompilerOptions": {'ANDROID_PLATFORM': 29}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TargetPlatform?: TargetPlatform;

  /**
   * <p>Specifies additional parameters for compiler options in JSON format. The compiler
   *             options are <code>TargetPlatform</code> specific. It is required for NVIDIA accelerators
   *             and highly recommended for CPU compilations. For any other cases, it is optional to
   *             specify <code>CompilerOptions.</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DTYPE</code>: Specifies the data type for the input. When compiling for
   *                     <code>ml_*</code> (except for <code>ml_inf</code>) instances using PyTorch
   *                     framework, provide the data type (dtype) of the model's input.
   *                         <code>"float32"</code> is used if <code>"DTYPE"</code> is not specified.
   *                     Options for data type are:</p>
   *                <ul>
   *                   <li>
   *                      <p>float32: Use either <code>"float"</code> or <code>"float32"</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>int64: Use either <code>"int64"</code> or <code>"long"</code>.</p>
   *                   </li>
   *                </ul>
   *                <p> For example, <code>{"dtype" : "float32"}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CPU</code>: Compilation for CPU supports the following compiler
   *                     options.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>mcpu</code>: CPU micro-architecture. For example, <code>{'mcpu':
   *                                 'skylake-avx512'}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon',
   *                                 '+vfpv4']}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARM</code>: Details of ARM CPU compilations.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>NEON</code>: NEON is an implementation of the Advanced SIMD
   *                             extension used in ARMv7 processors.</p>
   *                      <p>For example, add <code>{'mattr': ['+neon']}</code> to the compiler
   *                             options if compiling for ARM 32-bit platform with the NEON
   *                             support.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NVIDIA</code>: Compilation for NVIDIA GPU supports the following
   *                     compiler options.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>gpu_code</code>: Specifies the targeted architecture.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>trt-ver</code>: Specifies the TensorRT versions in x.y.z.
   *                             format.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cuda-ver</code>: Specifies the CUDA version in x.y
   *                             format.</p>
   *                   </li>
   *                </ul>
   *                <p>For example, <code>{'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver':
   *                         '10.1'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANDROID</code>: Compilation for the Android OS supports the following
   *                     compiler options:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ANDROID_PLATFORM</code>: Specifies the Android API levels.
   *                             Available levels range from 21 to 29. For example,
   *                                 <code>{'ANDROID_PLATFORM': 28}</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>mattr</code>: Add <code>{'mattr': ['+neon']}</code> to compiler
   *                             options if compiling for ARM 32-bit platform with NEON support.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFERENTIA</code>: Compilation for target ml_inf1 uses compiler options
   *                     passed in as a JSON string. For example,
   *                     <code>"CompilerOptions": "\"--verbose 1 --num-neuroncores 2 -O2\""</code>.
   *                 </p>
   *                <p>For information about supported compiler options, see
   *                     <a href="https://github.com/aws/aws-neuron-sdk/blob/master/docs/neuron-cc/command-line-reference.md">
   *                         Neuron Compiler CLI</a>.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CoreML</code>: Compilation for the CoreML <a>OutputConfig$TargetDevice</a>
   *                     supports the following compiler options:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>class_labels</code>: Specifies the classification labels file
   *                             name inside input tar.gz file. For example,
   *                                 <code>{"class_labels": "imagenet_labels_1000.txt"}</code>.
   *                             Labels inside the txt file should be separated by newlines.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EIA</code>: Compilation for the Elastic Inference Accelerator supports the following
   *                     compiler options:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>precision_mode</code>: Specifies the precision of compiled artifacts. Supported values
   *                         are <code>"FP16"</code> and <code>"FP32"</code>. Default is
   *                         <code>"FP32"</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>signature_def_key</code>: Specifies the signature to use for models in SavedModel
   *                         format. Defaults is TensorFlow's default signature def key.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>output_names</code>: Specifies a list of output tensor names for
   *                         models in FrozenGraph format. Set at most one API field, either: <code>signature_def_key</code> or <code>output_names</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>For example:
   *                     <code>{"precision_mode": "FP32",  "output_names": ["output:0"]}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CompilerOptions?: string;

  /**
   * <p>The Amazon Web Services Key Management Service key (Amazon Web Services KMS) that Amazon SageMaker uses to encrypt your output models with Amazon S3 server-side encryption
   *         after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
   *         For more information, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

/**
 * <p>The <a>VpcConfig</a> configuration object that specifies the VPC that you
 *             want the compilation jobs to connect to. For more information on
 *             controlling access to your Amazon S3 buckets used for compilation job, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Give Amazon SageMaker Compilation Jobs Access to Resources in Your Amazon VPC</a>.</p>
 */
export interface NeoVpcConfig {
  /**
   * <p>The VPC security group IDs. IDs have the form of <code>sg-xxxxxxxx</code>.
   *             Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect the
   *             compilation job to for accessing the model in Amazon S3.</p>
   */
  Subnets: string[] | undefined;
}

export interface CreateCompilationJobRequest {
  /**
   * <p>A name for the model compilation job. The name must be unique within the Amazon Web Services Region
   *             and within your Amazon Web Services account. </p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on
   *             your behalf. </p>
   *          <p>During model compilation, Amazon SageMaker needs your permission to:</p>
   *          <ul>
   *             <li>
   *                <p>Read input data from an S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>Write model artifacts to an S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>Write logs to Amazon CloudWatch Logs</p>
   *             </li>
   *             <li>
   *                <p>Publish metrics to Amazon CloudWatch</p>
   *             </li>
   *          </ul>
   *          <p>You grant permissions for all of these tasks to an IAM role. To pass this role to
   *             Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles.</a>
   *          </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a versioned model package. Provide either a
   *     <code>ModelPackageVersionArn</code> or an <code>InputConfig</code> object in the
   *     request syntax. The presence of both objects in the <code>CreateCompilationJob</code>
   *     request will return an exception.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * <p>Provides information about the location of input model artifacts, the name and shape
   *             of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig?: InputConfig;

  /**
   * <p>Provides information about the output location for the compiled model and the target
   *             device the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             compilation job to connect to. Control access to your models by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: NeoVpcConfig;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export interface CreateCompilationJobResponse {
  /**
   * <p>If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns
   *             the following data in JSON format:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CompilationJobArn</code>: The Amazon Resource Name (ARN) of the compiled
   *                     job.</p>
   *             </li>
   *          </ul>
   */
  CompilationJobArn: string | undefined;
}

export interface CreateContextRequest {
  /**
   * <p>The name of the context. Must be unique to your account in an Amazon Web Services Region.</p>
   */
  ContextName: string | undefined;

  /**
   * <p>The source type, ID, and URI.</p>
   */
  Source: ContextSource | undefined;

  /**
   * <p>The context type.</p>
   */
  ContextType: string | undefined;

  /**
   * <p>The description of the context.</p>
   */
  Description?: string;

  /**
   * <p>A list of properties to add to the context.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of tags to apply to the context.</p>
   */
  Tags?: Tag[];
}

export interface CreateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

/**
 * <p>Information about the container that a data quality monitoring job runs.</p>
 */
export interface DataQualityAppSpecification {
  /**
   * <p>The container image that the data quality monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments to send to the container that the monitoring job runs.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * <p>The constraints resource for a monitoring job.</p>
 */
export interface MonitoringConstraintsResource {
  /**
   * <p>The Amazon S3 URI for the constraints resource.</p>
   */
  S3Uri?: string;
}

/**
 * <p>The statistics resource for a monitoring job.</p>
 */
export interface MonitoringStatisticsResource {
  /**
   * <p>The Amazon S3 URI for the statistics resource.</p>
   */
  S3Uri?: string;
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface DataQualityBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the data quality monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The statistics resource for a monitoring job.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

/**
 * <p>Input object for the endpoint</p>
 */
export interface EndpointInput {
  /**
   * <p>An endpoint in customer's account which has enabled <code>DataCaptureConfig</code>
   *          enabled.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>Path to the filesystem where the endpoint data is available to the container.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether the <code>Pipe</code> or <code>File</code> is used as the input mode for
   *          transferring data for the monitoring job. <code>Pipe</code> mode is recommended for large
   *          datasets. <code>File</code> mode is useful for small files that fit in memory. Defaults to
   *             <code>File</code>.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
   *          Defaults to <code>FullyReplicated</code>
   *          </p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>The attributes of the input data that are the input features.</p>
   */
  FeaturesAttribute?: string;

  /**
   * <p>The attribute of the input data that represents the ground truth label.</p>
   */
  InferenceAttribute?: string;

  /**
   * <p>In a classification problem, the attribute that represents the class probability.</p>
   */
  ProbabilityAttribute?: string;

  /**
   * <p>The threshold for the class probability to be evaluated as a positive result.</p>
   */
  ProbabilityThresholdAttribute?: number;

  /**
   * <p>If specified, monitoring jobs substract this time from the start time. For information
   *          about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *             Quality Monitoring Jobs</a>.</p>
   */
  StartTimeOffset?: string;

  /**
   * <p>If specified, monitoring jobs substract this time from the end time. For information
   *          about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *             Quality Monitoring Jobs</a>.</p>
   */
  EndTimeOffset?: string;
}

/**
 * <p>The input for the data quality monitoring job. Currently endpoints are supported for
 *          input.</p>
 */
export interface DataQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput?: EndpointInput;

  /**
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;
}

export enum ProcessingS3UploadMode {
  CONTINUOUS = "Continuous",
  END_OF_JOB = "EndOfJob",
}

/**
 * <p>Information about where and how you want to store the results of a monitoring
 *          job.</p>
 */
export interface MonitoringS3Output {
  /**
   * <p>A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job. LocalPath is an absolute path for the output data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the monitoring job continuously or after the job
   *          completes.</p>
   */
  S3UploadMode?: ProcessingS3UploadMode | string;
}

/**
 * <p>The output object for a monitoring job.</p>
 */
export interface MonitoringOutput {
  /**
   * <p>The Amazon S3 storage location where the results of a monitoring job are saved.</p>
   */
  S3Output: MonitoringS3Output | undefined;
}

/**
 * <p>The output configuration for monitoring jobs.</p>
 */
export interface MonitoringOutputConfig {
  /**
   * <p>Monitoring outputs for monitoring jobs. This is where the output of the periodic
   *          monitoring jobs is uploaded.</p>
   */
  MonitoringOutputs: MonitoringOutput[] | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the model
   *          artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  KmsKeyId?: string;
}

export enum ProcessingInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_16XLARGE = "ml.r5.16xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_8XLARGE = "ml.r5.8xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge",
}

/**
 * <p>Configuration for the cluster used to run model monitoring jobs.</p>
 */
export interface MonitoringClusterConfig {
  /**
   * <p>The number of ML compute instances to use in the model monitoring job. For distributed
   *          processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The size of the ML storage volume, in gigabytes, that you want to provision. You must
   *          specify sufficient ML storage for your scenario.</p>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data
   *          on the storage volume attached to the ML compute instance(s) that run the model monitoring
   *          job.</p>
   */
  VolumeKmsKeyId?: string;
}

/**
 * <p>Identifies the resources to deploy for a monitoring job.</p>
 */
export interface MonitoringResources {
  /**
   * <p>The configuration for the cluster resources used to run the processing job.</p>
   */
  ClusterConfig: MonitoringClusterConfig | undefined;
}

/**
 * <p>The networking configuration for the monitoring job.</p>
 */
export interface MonitoringNetworkConfig {
  /**
   * <p>Whether to encrypt all communications between the instances used for the monitoring
   *          jobs. Choose <code>True</code> to encrypt communications. Encryption provides greater
   *          security for distributed jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the monitoring job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
 */
export interface MonitoringStoppingCondition {
  /**
   * <p>The maximum runtime allowed in seconds.</p>
   *          <note>
   *             <p>The <code>MaxRuntimeInSeconds</code> cannot exceed the frequency of the job. For data quality and
   *             model explainability, this can be up to 3600 seconds for an hourly schedule. For model
   *             bias and model quality hourly schedules, this can be up to 1800 seconds.</p>
   *          </note>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export interface CreateDataQualityJobDefinitionRequest {
  /**
   * <p>The name for the monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>Configures the constraints and baselines for the monitoring job.</p>
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * <p>Specifies the container that runs the monitoring job.</p>
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>A list of inputs for the monitoring job. Currently endpoints are supported as monitoring
   *          inputs.</p>
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Specifies networking configuration for the monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   */
  JobDefinitionArn: string | undefined;
}

export enum EdgePresetDeploymentType {
  GreengrassV2Component = "GreengrassV2Component",
}

/**
 * <p>The output configuration.</p>
 */
export interface EdgeOutputConfig {
  /**
   * <p>The Amazon Simple Storage (S3) bucker URI.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job.
   *      If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The deployment type SageMaker Edge Manager will create.
   *       Currently only supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  PresetDeploymentType?: EdgePresetDeploymentType | string;

  /**
   * <p>The configuration used to create deployment artifacts.
   *       Specify configuration options with a JSON string. The available configuration options for each type are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ComponentName</code> (optional) - Name of the GreenGrass V2 component. If not specified,
   *      the default name generated consists of "SagemakerEdgeManager" and the name of your SageMaker Edge Manager
   *      packaging job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ComponentDescription</code> (optional) - Description of the component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ComponentVersion</code> (optional) - The version of the component.</p>
   *                <note>
   *                   <p>Amazon Web Services IoT Greengrass uses semantic versions for components. Semantic versions follow a<i>
   *        major.minor.patch</i> number system. For example, version 1.0.0 represents the first
   *         major release for a component. For more information, see the <a href="https://semver.org/">semantic version specification</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PlatformOS</code> (optional) - The name of the operating system for the platform.
   *      Supported platforms include Windows and Linux.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PlatformArchitecture</code> (optional) - The processor architecture for the platform. </p>
   *                <p>Supported architectures Windows include: Windows32_x86, Windows64_x64.</p>
   *                <p>Supported architectures for Linux include: Linux x86_64, Linux ARMV8.</p>
   *             </li>
   *          </ul>
   */
  PresetDeploymentConfig?: string;
}

export interface CreateDeviceFleetRequest {
  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>Creates tags for the specified fleet.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *      The name of the role alias generated will match this pattern:
   *      "SageMakerEdge-{DeviceFleetName}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *      the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

/**
 * <p>The JupyterServer app settings.</p>
 */
export interface JupyterServerAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app. If you use the <code>LifecycleConfigArns</code> parameter, then this parameter is also required.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the <code>DefaultResourceSpec</code> parameter is also required.</p>
   *          <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];

  /**
   * <p>A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application.</p>
   */
  CodeRepositories?: CodeRepository[];
}

/**
 * <p>A custom SageMaker image. For more information, see
 *        <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.</p>
 */
export interface CustomImage {
  /**
   * <p>The name of the CustomImage. Must be unique to your account.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version number of the CustomImage.</p>
   */
  ImageVersionNumber?: number;

  /**
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName: string | undefined;
}

/**
 * <p>The KernelGateway app settings.</p>
 */
export interface KernelGatewayAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.</p>
   *          <note>
   *             <p>The Amazon SageMaker Studio UI does not use the default instance type value set here. The default
   *           instance type set here is used when Apps are created using the Amazon Web Services Command Line Interface or Amazon Web Services CloudFormation
   *             and the instance type parameter value is not passed.</p>
   *          </note>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A list of custom SageMaker images that are configured to run as a KernelGateway app.</p>
   */
  CustomImages?: CustomImage[];

  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.</p>
   *          <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];
}

/**
 * <p>A collection of settings that apply to spaces created in the Domain.</p>
 */
export interface DefaultSpaceSettings {
  /**
   * <p>The execution role for the space.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The security groups for the Amazon Virtual Private Cloud that the space uses for communication.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The JupyterServer app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The KernelGateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
}

/**
 * <p>A collection of settings that apply to an <code>RSessionGateway</code> app.</p>
 */
export interface RSessionAppSettings {
  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A list of custom SageMaker images that are configured to run as a RSession app.</p>
   */
  CustomImages?: CustomImage[];
}

export enum RStudioServerProAccessStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export enum RStudioServerProUserGroup {
  Admin = "R_STUDIO_ADMIN",
  User = "R_STUDIO_USER",
}

/**
 * <p>A collection of settings that configure user interaction with the
 *                 <code>RStudioServerPro</code> app. <code>RStudioServerProAppSettings</code> cannot
 *             be updated. The <code>RStudioServerPro</code> app must be deleted and a new one created
 *             to make any changes.</p>
 */
export interface RStudioServerProAppSettings {
  /**
   * <p>Indicates whether the current user has access to the <code>RStudioServerPro</code>
   *             app.</p>
   */
  AccessStatus?: RStudioServerProAccessStatus | string;

  /**
   * <p>The level of permissions that the user has within the <code>RStudioServerPro</code>
   *             app. This value defaults to `User`. The `Admin` value allows the user access to the
   *             RStudio Administrative Dashboard.</p>
   */
  UserGroup?: RStudioServerProUserGroup | string;
}

export enum NotebookOutputOption {
  Allowed = "Allowed",
  Disabled = "Disabled",
}

/**
 * <p>Specifies options for sharing SageMaker Studio notebooks. These settings are
 *     specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code>
 *     API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code>
 *     API is called. When <code>SharingSettings</code> is not specified, notebook sharing
 *     isn't allowed.</p>
 */
export interface SharingSettings {
  /**
   * <p>Whether to include the notebook cell output when sharing the notebook. The default
   *          is <code>Disabled</code>.</p>
   */
  NotebookOutputOption?: NotebookOutputOption | string;

  /**
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the Amazon S3 bucket used
   *          to store the shared notebook snapshots.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the Amazon Web Services Key Management Service (KMS)
   *          encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.</p>
   */
  S3KmsKeyId?: string;
}

/**
 * <p>The TensorBoard app settings.</p>
 */
export interface TensorBoardAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

/**
 * <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are
 *       specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code>
 *       when the <code>CreateDomain</code> API is called.</p>
 *          <p>
 *             <code>SecurityGroups</code> is aggregated when specified in both calls. For all other
 *      settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code>
 *      take precedence over those specified in <code>CreateDomain</code>.</p>
 */
export interface UserSettings {
  /**
   * <p>The execution role for the user.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   *          <p>Optional when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *          <code>PublicInternetOnly</code>.</p>
   *          <p>Required when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *          <code>VpcOnly</code>.</p>
   *          <p>Amazon SageMaker adds a security group to allow NFS traffic from SageMaker Studio. Therefore, the
   *          number of security groups that you can specify is one less than the maximum number shown.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies options for sharing SageMaker Studio notebooks.</p>
   */
  SharingSettings?: SharingSettings;

  /**
   * <p>The Jupyter server's app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The kernel gateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * <p>The TensorBoard app settings.</p>
   */
  TensorBoardAppSettings?: TensorBoardAppSettings;

  /**
   * <p>A collection of settings that configure user interaction with the
   *                 <code>RStudioServerPro</code> app.</p>
   */
  RStudioServerProAppSettings?: RStudioServerProAppSettings;

  /**
   * <p>A collection of settings that configure the <code>RSessionGateway</code> app.</p>
   */
  RSessionAppSettings?: RSessionAppSettings;

  /**
   * <p>The Canvas app settings.</p>
   */
  CanvasAppSettings?: CanvasAppSettings;
}

export enum ExecutionRoleIdentityConfig {
  DISABLED = "DISABLED",
  USER_PROFILE_NAME = "USER_PROFILE_NAME",
}

/**
 * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level
 *             app.</p>
 */
export interface RStudioServerProDomainSettings {
  /**
   * <p>The ARN of the execution role for the <code>RStudioServerPro</code> Domain-level
   *             app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * <p>A URL pointing to an RStudio Connect server.</p>
   */
  RStudioConnectUrl?: string;

  /**
   * <p>A URL pointing to an RStudio Package Manager server.</p>
   */
  RStudioPackageManagerUrl?: string;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

/**
 * <p>A collection of settings that apply to the <code>SageMaker Domain</code>. These
 *             settings are specified through the <code>CreateDomain</code> API call.</p>
 */
export interface DomainSettings {
  /**
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for
   *             communication between Domain-level apps and user apps.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level
   *             app.</p>
   */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings;

  /**
   * <p>The configuration for attaching a SageMaker user profile name to the execution role as a
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">sts:SourceIdentity key</a>.</p>
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig | string;
}

export interface CreateDomainRequest {
  /**
   * <p>A name for the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The mode of authentication that members use to access the domain.</p>
   */
  AuthMode: AuthMode | string | undefined;

  /**
   * <p>The default settings to use to create a user profile when <code>UserSettings</code> isn't specified
   *          in the call to the <code>CreateUserProfile</code> API.</p>
   *          <p>
   *             <code>SecurityGroups</code> is aggregated when specified in both calls. For all other
   *          settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code>
   *          take precedence over those specified in <code>CreateDomain</code>.</p>
   */
  DefaultUserSettings: UserSettings | undefined;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Tags to associated with the Domain. Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource. Tags are searchable using the
   *          <code>Search</code> API.</p>
   *          <p>Tags that you specify for the Domain are also added to all Apps that the
   *           Domain launches.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType | string;

  /**
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>SageMaker uses Amazon Web Services KMS to encrypt the EFS volume attached to the domain with an Amazon Web Services managed
   *          key by default. For more control, specify a customer managed key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * <p>The default settings used to create a space.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
}

export interface CreateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created domain.</p>
   */
  DomainArn?: string;

  /**
   * <p>The URL to the created domain.</p>
   */
  Url?: string;
}

/**
 * <p>Contains information about the configuration of a model in a deployment.</p>
 */
export interface EdgeDeploymentModelConfig {
  /**
   * <p>The name the device application uses to reference this model.</p>
   */
  ModelHandle: string | undefined;

  /**
   * <p>The edge packaging job associated with this deployment.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export enum FailureHandlingPolicy {
  DoNothing = "DO_NOTHING",
  RollbackOnFailure = "ROLLBACK_ON_FAILURE",
}

/**
 * <p>Contains information about the configuration of a deployment.</p>
 */
export interface EdgeDeploymentConfig {
  /**
   * <p>Toggle that determines whether to rollback to previous configuration if the current deployment fails.
   *       By default this is turned on. You may turn this off if you want to investigate the errors yourself.</p>
   */
  FailureHandlingPolicy: FailureHandlingPolicy | string | undefined;
}

export enum DeviceSubsetType {
  NameContains = "NAMECONTAINS",
  Percentage = "PERCENTAGE",
  Selection = "SELECTION",
}

/**
 * <p>Contains information about the configurations of selected devices.</p>
 */
export interface DeviceSelectionConfig {
  /**
   * <p>Type of device subsets to deploy to the current stage.</p>
   */
  DeviceSubsetType: DeviceSubsetType | string | undefined;

  /**
   * <p>Percentage of devices in the fleet to deploy to the current stage.</p>
   */
  Percentage?: number;

  /**
   * <p>List of devices chosen to deploy.</p>
   */
  DeviceNames?: string[];

  /**
   * <p>A filter to select devices with names containing this name.</p>
   */
  DeviceNameContains?: string;
}

/**
 * <p>Contains information about a stage in an edge deployment plan.</p>
 */
export interface DeploymentStage {
  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>Configuration of the devices in the stage.</p>
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * <p>Configuration of the deployment details.</p>
   */
  DeploymentConfig?: EdgeDeploymentConfig;
}

export interface CreateEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of models associated with the edge deployment plan.</p>
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * <p>The device fleet used for this edge deployment plan.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>List of stages of the edge deployment plan. The number of stages is limited to 10 per deployment.</p>
   */
  Stages?: DeploymentStage[];

  /**
   * <p>List of tags with which to tag the edge deployment plan.</p>
   */
  Tags?: Tag[];
}

export interface CreateEdgeDeploymentPlanResponse {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;
}

export interface CreateEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of stages to be added to the edge deployment plan.</p>
   */
  Stages: DeploymentStage[] | undefined;
}

export interface CreateEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that will be used to locate model artifacts for packaging.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact SageMaker Neo.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides information about the output location for the packaged model.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the edge packaging job runs on.</p>
   */
  ResourceKey?: string;

  /**
   * <p>Creates tags for the packaging job.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The deployment configuration for an endpoint, which contains the desired deployment
 *             strategy and rollback configurations.</p>
 */
export interface DeploymentConfig {
  /**
   * <p>Update policy for a blue/green deployment. If this update policy is specified, SageMaker
   *             creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips
   *             traffic to the new fleet according to the specified traffic routing configuration. Only
   *             one update policy should be used in the deployment configuration. If no update policy is
   *             specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting
   *             by default.</p>
   */
  BlueGreenUpdatePolicy: BlueGreenUpdatePolicy | undefined;

  /**
   * <p>Automatic rollback configuration for handling endpoint deployment failures and
   *             recovery.</p>
   */
  AutoRollbackConfiguration?: AutoRollbackConfig;
}

export interface CreateEndpointInput {
  /**
   * <p>The name of the endpoint.The name must be unique within an Amazon Web Services
   *             Region in your Amazon Web Services account. The name is case-insensitive in
   *                 <code>CreateEndpoint</code>, but the case is preserved and must be matched in .</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of an endpoint configuration. For more information, see <a>CreateEndpointConfig</a>. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

export interface CreateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * <p>Configuration to control how SageMaker captures inference data.</p>
 */
export interface DataCaptureConfig {
  /**
   * <p>Whether data capture should be enabled or disabled (defaults to enabled).</p>
   */
  EnableCapture?: boolean;

  /**
   * <p>The percentage of requests SageMaker will capture. A lower value is recommended for
   *          Endpoints with high traffic.</p>
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt the
   *           captured data at rest using Amazon S3 server-side encryption.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies data Model Monitor will capture. You can configure whether to
   *          collect only input, only output, or both</p>
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * <p>Configuration specifying how to treat different headers. If no headers are specified SageMaker will
   *          by default base64 encode when capturing the data.</p>
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
}

/**
 * <p>A parameter to activate explainers.</p>
 */
export interface ExplainerConfig {
  /**
   * <p>A member of <code>ExplainerConfig</code> that contains configuration parameters for
   *             the SageMaker Clarify explainer.</p>
   */
  ClarifyExplainerConfig?: ClarifyExplainerConfig;
}

export enum ProductionVariantAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

/**
 * <p>Specifies configuration for a core dump from the model container when the process
 *             crashes.</p>
 */
export interface ProductionVariantCoreDumpConfig {
  /**
   * <p>The Amazon S3 bucket to send the core dump to.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker
   *             uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. The
   *                 <code>KmsKeyId</code> can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code> and <code>UpdateEndpoint</code> requests. For more
   *             information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management
   *                 Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>Specifies the serverless configuration for an endpoint variant.</p>
 */
export interface ProductionVariantServerlessConfig {
  /**
   * <p>The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.</p>
   */
  MemorySizeInMB: number | undefined;

  /**
   * <p>The maximum number of concurrent invocations your serverless endpoint can process.</p>
   */
  MaxConcurrency: number | undefined;
}

/**
 * <p>Identifies a model that you want to host and the resources chosen to deploy for
 *             hosting it. If you are deploying multiple models, tell SageMaker how to distribute traffic
 *             among the models by specifying variant weights. </p>
 */
export interface ProductionVariant {
  /**
   * <p>The name of the production variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The name of the model that you want to host. This is the name that you specified
   *             when creating the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount?: number;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>Determines initial traffic distribution among all of the models that you specify in
   *             the endpoint configuration. The traffic to a production variant is determined by the
   *             ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code>
   *             values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *             </p>
   */
  InitialVariantWeight?: number;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>Specifies configuration for a core dump from the model container when the process
   *             crashes.</p>
   */
  CoreDumpConfig?: ProductionVariantCoreDumpConfig;

  /**
   * <p>The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.</p>
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The size, in GB, of the ML storage volume attached to individual inference instance
   *             associated with the production variant. Currently only Amazon EBS gp2 storage volumes are
   *             supported.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>The timeout value, in seconds, to download and extract the model that you want to host
   *             from Amazon S3 to the individual inference instance associated with this production
   *             variant.</p>
   */
  ModelDataDownloadTimeoutInSeconds?: number;

  /**
   * <p>The timeout value, in seconds, for your inference container to pass health check by
   *             SageMaker Hosting. For more information about health check, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests">How Your Container Should Respond to Health Check (Ping) Requests</a>.</p>
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
}

export interface CreateEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration. You specify this name in a <a>CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that
   *             SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that
   *             hosts the endpoint.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code>, <code>UpdateEndpoint</code> requests. For more
   *             information, refer to the Amazon Web Services Key Management Service section<a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"> Using Key
   *                 Policies in Amazon Web Services KMS </a>
   *          </p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>KmsKeyId</code> when using an instance type with local
   *                 storage. If any of the models that you specify in the
   *                     <code>ProductionVariants</code> parameter use nitro-based instances with local
   *                 storage, do not specify a value for the <code>KmsKeyId</code> parameter. If you
   *                 specify a value for <code>KmsKeyId</code> when using any nitro-based instances with
   *                 local storage, the call to <code>CreateEndpointConfig</code> fails.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *          </note>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies configuration for how an endpoint performs asynchronous inference. This is a
   *             required field in order for your Endpoint to be invoked using <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpointAsync.html">InvokeEndpointAsync</a>.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>A member of <code>CreateEndpointConfig</code> that enables explainers.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint in shadow mode with production traffic replicated from the
   *             model specified on <code>ProductionVariants</code>. If you use this field, you can only
   *             specify one variant for <code>ProductionVariants</code> and one variant for
   *                 <code>ShadowProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariant[];
}

export interface CreateEndpointConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration. </p>
   */
  EndpointConfigArn: string | undefined;
}

export interface CreateExperimentRequest {
  /**
   * <p>The name of the experiment. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If you don't
   *       specify <code>DisplayName</code>, the value in <code>ExperimentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>A list of tags to associate with the experiment. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

export interface CreateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export enum FeatureType {
  FRACTIONAL = "Fractional",
  INTEGRAL = "Integral",
  STRING = "String",
}

/**
 * @internal
 */
export const ActionSourceFilterSensitiveLog = (obj: ActionSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionSummaryFilterSensitiveLog = (obj: ActionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAssociationRequestFilterSensitiveLog = (obj: AddAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAssociationResponseFilterSensitiveLog = (obj: AddAssociationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelInputFilterSensitiveLog = (obj: ModelInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageContainerDefinitionFilterSensitiveLog = (obj: ModelPackageContainerDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalInferenceSpecificationDefinitionFilterSensitiveLog = (
  obj: AdditionalInferenceSpecificationDefinition
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsInputFilterSensitiveLog = (obj: AddTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsOutputFilterSensitiveLog = (obj: AddTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentVersionFilterSensitiveLog = (obj: AgentVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmFilterSensitiveLog = (obj: Alarm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDefinitionFilterSensitiveLog = (obj: MetricDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingRepositoryAuthConfigFilterSensitiveLog = (obj: TrainingRepositoryAuthConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingImageConfigFilterSensitiveLog = (obj: TrainingImageConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmSpecificationFilterSensitiveLog = (obj: AlgorithmSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmStatusItemFilterSensitiveLog = (obj: AlgorithmStatusItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmStatusDetailsFilterSensitiveLog = (obj: AlgorithmStatusDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmSummaryFilterSensitiveLog = (obj: AlgorithmSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemDataSourceFilterSensitiveLog = (obj: FileSystemDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataSourceFilterSensitiveLog = (obj: S3DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShuffleConfigFilterSensitiveLog = (obj: ShuffleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelFilterSensitiveLog = (obj: Channel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDataConfigFilterSensitiveLog = (obj: OutputDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceGroupFilterSensitiveLog = (obj: InstanceGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceConfigFilterSensitiveLog = (obj: ResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StoppingConditionFilterSensitiveLog = (obj: StoppingCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingJobDefinitionFilterSensitiveLog = (obj: TrainingJobDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformS3DataSourceFilterSensitiveLog = (obj: TransformS3DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformDataSourceFilterSensitiveLog = (obj: TransformDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformInputFilterSensitiveLog = (obj: TransformInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformOutputFilterSensitiveLog = (obj: TransformOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformResourcesFilterSensitiveLog = (obj: TransformResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformJobDefinitionFilterSensitiveLog = (obj: TransformJobDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmValidationProfileFilterSensitiveLog = (obj: AlgorithmValidationProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmValidationSpecificationFilterSensitiveLog = (obj: AlgorithmValidationSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationConsolidationConfigFilterSensitiveLog = (obj: AnnotationConsolidationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppDetailsFilterSensitiveLog = (obj: AppDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemConfigFilterSensitiveLog = (obj: FileSystemConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KernelSpecFilterSensitiveLog = (obj: KernelSpec): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KernelGatewayImageConfigFilterSensitiveLog = (obj: KernelGatewayImageConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppImageConfigDetailsFilterSensitiveLog = (obj: AppImageConfigDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppSpecificationFilterSensitiveLog = (obj: AppSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactSourceTypeFilterSensitiveLog = (obj: ArtifactSourceType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactSourceFilterSensitiveLog = (obj: ArtifactSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactSummaryFilterSensitiveLog = (obj: ArtifactSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrialComponentRequestFilterSensitiveLog = (obj: AssociateTrialComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrialComponentResponseFilterSensitiveLog = (obj: AssociateTrialComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserContextFilterSensitiveLog = (obj: UserContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationSummaryFilterSensitiveLog = (obj: AssociationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncInferenceClientConfigFilterSensitiveLog = (obj: AsyncInferenceClientConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncInferenceNotificationConfigFilterSensitiveLog = (obj: AsyncInferenceNotificationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncInferenceOutputConfigFilterSensitiveLog = (obj: AsyncInferenceOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AsyncInferenceConfigFilterSensitiveLog = (obj: AsyncInferenceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AthenaDatasetDefinitionFilterSensitiveLog = (obj: AthenaDatasetDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CandidateArtifactLocationsFilterSensitiveLog = (obj: CandidateArtifactLocations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDatumFilterSensitiveLog = (obj: MetricDatum): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CandidatePropertiesFilterSensitiveLog = (obj: CandidateProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLCandidateStepFilterSensitiveLog = (obj: AutoMLCandidateStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinalAutoMLJobObjectiveMetricFilterSensitiveLog = (obj: FinalAutoMLJobObjectiveMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLContainerDefinitionFilterSensitiveLog = (obj: AutoMLContainerDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLCandidateFilterSensitiveLog = (obj: AutoMLCandidate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLCandidateGenerationConfigFilterSensitiveLog = (obj: AutoMLCandidateGenerationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLS3DataSourceFilterSensitiveLog = (obj: AutoMLS3DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLDataSourceFilterSensitiveLog = (obj: AutoMLDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLChannelFilterSensitiveLog = (obj: AutoMLChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLDataSplitConfigFilterSensitiveLog = (obj: AutoMLDataSplitConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobArtifactsFilterSensitiveLog = (obj: AutoMLJobArtifacts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobCompletionCriteriaFilterSensitiveLog = (obj: AutoMLJobCompletionCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigFilterSensitiveLog = (obj: VpcConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLSecurityConfigFilterSensitiveLog = (obj: AutoMLSecurityConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobConfigFilterSensitiveLog = (obj: AutoMLJobConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobObjectiveFilterSensitiveLog = (obj: AutoMLJobObjective): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobStepMetadataFilterSensitiveLog = (obj: AutoMLJobStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLPartialFailureReasonFilterSensitiveLog = (obj: AutoMLPartialFailureReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLJobSummaryFilterSensitiveLog = (obj: AutoMLJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLOutputDataConfigFilterSensitiveLog = (obj: AutoMLOutputDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoRollbackConfigFilterSensitiveLog = (obj: AutoRollbackConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDataCaptureConfigFilterSensitiveLog = (obj: BatchDataCaptureConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeModelPackageInputFilterSensitiveLog = (obj: BatchDescribeModelPackageInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeModelPackageErrorFilterSensitiveLog = (obj: BatchDescribeModelPackageError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceSpecificationFilterSensitiveLog = (obj: InferenceSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeModelPackageSummaryFilterSensitiveLog = (obj: BatchDescribeModelPackageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeModelPackageOutputFilterSensitiveLog = (obj: BatchDescribeModelPackageOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringCsvDatasetFormatFilterSensitiveLog = (obj: MonitoringCsvDatasetFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringJsonDatasetFormatFilterSensitiveLog = (obj: MonitoringJsonDatasetFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringParquetDatasetFormatFilterSensitiveLog = (obj: MonitoringParquetDatasetFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringDatasetFormatFilterSensitiveLog = (obj: MonitoringDatasetFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchTransformInputFilterSensitiveLog = (obj: BatchTransformInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricsSourceFilterSensitiveLog = (obj: MetricsSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BiasFilterSensitiveLog = (obj: Bias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacitySizeFilterSensitiveLog = (obj: CapacitySize): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficRoutingConfigFilterSensitiveLog = (obj: TrafficRoutingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlueGreenUpdatePolicyFilterSensitiveLog = (obj: BlueGreenUpdatePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheHitResultFilterSensitiveLog = (obj: CacheHitResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputParameterFilterSensitiveLog = (obj: OutputParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CallbackStepMetadataFilterSensitiveLog = (obj: CallbackStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesForecastingSettingsFilterSensitiveLog = (obj: TimeSeriesForecastingSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanvasAppSettingsFilterSensitiveLog = (obj: CanvasAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptureContentTypeHeaderFilterSensitiveLog = (obj: CaptureContentTypeHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptureOptionFilterSensitiveLog = (obj: CaptureOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoricalParameterFilterSensitiveLog = (obj: CategoricalParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoricalParameterRangeFilterSensitiveLog = (obj: CategoricalParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoricalParameterRangeSpecificationFilterSensitiveLog = (
  obj: CategoricalParameterRangeSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelSpecificationFilterSensitiveLog = (obj: ChannelSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckpointConfigFilterSensitiveLog = (obj: CheckpointConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyCheckStepMetadataFilterSensitiveLog = (obj: ClarifyCheckStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyInferenceConfigFilterSensitiveLog = (obj: ClarifyInferenceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyShapBaselineConfigFilterSensitiveLog = (obj: ClarifyShapBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyTextConfigFilterSensitiveLog = (obj: ClarifyTextConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyShapConfigFilterSensitiveLog = (obj: ClarifyShapConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClarifyExplainerConfigFilterSensitiveLog = (obj: ClarifyExplainerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeRepositoryFilterSensitiveLog = (obj: CodeRepository): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GitConfigFilterSensitiveLog = (obj: GitConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeRepositorySummaryFilterSensitiveLog = (obj: CodeRepositorySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoConfigFilterSensitiveLog = (obj: CognitoConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoMemberDefinitionFilterSensitiveLog = (obj: CognitoMemberDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CollectionConfigurationFilterSensitiveLog = (obj: CollectionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompilationJobSummaryFilterSensitiveLog = (obj: CompilationJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionStepMetadataFilterSensitiveLog = (obj: ConditionStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryAuthConfigFilterSensitiveLog = (obj: RepositoryAuthConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageConfigFilterSensitiveLog = (obj: ImageConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiModelConfigFilterSensitiveLog = (obj: MultiModelConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerDefinitionFilterSensitiveLog = (obj: ContainerDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContextSourceFilterSensitiveLog = (obj: ContextSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContextSummaryFilterSensitiveLog = (obj: ContextSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousParameterRangeFilterSensitiveLog = (obj: ContinuousParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousParameterRangeSpecificationFilterSensitiveLog = (
  obj: ContinuousParameterRangeSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataPropertiesFilterSensitiveLog = (obj: MetadataProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActionRequestFilterSensitiveLog = (obj: CreateActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateActionResponseFilterSensitiveLog = (obj: CreateActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntegerParameterRangeSpecificationFilterSensitiveLog = (obj: IntegerParameterRangeSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterRangeFilterSensitiveLog = (obj: ParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterSpecificationFilterSensitiveLog = (obj: HyperParameterSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobObjectiveFilterSensitiveLog = (obj: HyperParameterTuningJobObjective): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingSpecificationFilterSensitiveLog = (obj: TrainingSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAlgorithmInputFilterSensitiveLog = (obj: CreateAlgorithmInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAlgorithmOutputFilterSensitiveLog = (obj: CreateAlgorithmOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSpecFilterSensitiveLog = (obj: ResourceSpec): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppRequestFilterSensitiveLog = (obj: CreateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppResponseFilterSensitiveLog = (obj: CreateAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppImageConfigRequestFilterSensitiveLog = (obj: CreateAppImageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppImageConfigResponseFilterSensitiveLog = (obj: CreateAppImageConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateArtifactRequestFilterSensitiveLog = (obj: CreateArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateArtifactResponseFilterSensitiveLog = (obj: CreateArtifactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDeployConfigFilterSensitiveLog = (obj: ModelDeployConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAutoMLJobRequestFilterSensitiveLog = (obj: CreateAutoMLJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAutoMLJobResponseFilterSensitiveLog = (obj: CreateAutoMLJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCodeRepositoryInputFilterSensitiveLog = (obj: CreateCodeRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCodeRepositoryOutputFilterSensitiveLog = (obj: CreateCodeRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputConfigFilterSensitiveLog = (obj: InputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetPlatformFilterSensitiveLog = (obj: TargetPlatform): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputConfigFilterSensitiveLog = (obj: OutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NeoVpcConfigFilterSensitiveLog = (obj: NeoVpcConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCompilationJobRequestFilterSensitiveLog = (obj: CreateCompilationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCompilationJobResponseFilterSensitiveLog = (obj: CreateCompilationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContextRequestFilterSensitiveLog = (obj: CreateContextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContextResponseFilterSensitiveLog = (obj: CreateContextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityAppSpecificationFilterSensitiveLog = (obj: DataQualityAppSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConstraintsResourceFilterSensitiveLog = (obj: MonitoringConstraintsResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringStatisticsResourceFilterSensitiveLog = (obj: MonitoringStatisticsResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityBaselineConfigFilterSensitiveLog = (obj: DataQualityBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointInputFilterSensitiveLog = (obj: EndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityJobInputFilterSensitiveLog = (obj: DataQualityJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringS3OutputFilterSensitiveLog = (obj: MonitoringS3Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringOutputFilterSensitiveLog = (obj: MonitoringOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringOutputConfigFilterSensitiveLog = (obj: MonitoringOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringClusterConfigFilterSensitiveLog = (obj: MonitoringClusterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringResourcesFilterSensitiveLog = (obj: MonitoringResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringNetworkConfigFilterSensitiveLog = (obj: MonitoringNetworkConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringStoppingConditionFilterSensitiveLog = (obj: MonitoringStoppingCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: CreateDataQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataQualityJobDefinitionResponseFilterSensitiveLog = (
  obj: CreateDataQualityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeOutputConfigFilterSensitiveLog = (obj: EdgeOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceFleetRequestFilterSensitiveLog = (obj: CreateDeviceFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JupyterServerAppSettingsFilterSensitiveLog = (obj: JupyterServerAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomImageFilterSensitiveLog = (obj: CustomImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KernelGatewayAppSettingsFilterSensitiveLog = (obj: KernelGatewayAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultSpaceSettingsFilterSensitiveLog = (obj: DefaultSpaceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RSessionAppSettingsFilterSensitiveLog = (obj: RSessionAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RStudioServerProAppSettingsFilterSensitiveLog = (obj: RStudioServerProAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SharingSettingsFilterSensitiveLog = (obj: SharingSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TensorBoardAppSettingsFilterSensitiveLog = (obj: TensorBoardAppSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSettingsFilterSensitiveLog = (obj: UserSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RStudioServerProDomainSettingsFilterSensitiveLog = (obj: RStudioServerProDomainSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainSettingsFilterSensitiveLog = (obj: DomainSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResponseFilterSensitiveLog = (obj: CreateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeDeploymentModelConfigFilterSensitiveLog = (obj: EdgeDeploymentModelConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeDeploymentConfigFilterSensitiveLog = (obj: EdgeDeploymentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSelectionConfigFilterSensitiveLog = (obj: DeviceSelectionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentStageFilterSensitiveLog = (obj: DeploymentStage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEdgeDeploymentPlanRequestFilterSensitiveLog = (obj: CreateEdgeDeploymentPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEdgeDeploymentPlanResponseFilterSensitiveLog = (obj: CreateEdgeDeploymentPlanResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEdgeDeploymentStageRequestFilterSensitiveLog = (obj: CreateEdgeDeploymentStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEdgePackagingJobRequestFilterSensitiveLog = (obj: CreateEdgePackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentConfigFilterSensitiveLog = (obj: DeploymentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointInputFilterSensitiveLog = (obj: CreateEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointOutputFilterSensitiveLog = (obj: CreateEndpointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCaptureConfigFilterSensitiveLog = (obj: DataCaptureConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExplainerConfigFilterSensitiveLog = (obj: ExplainerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantCoreDumpConfigFilterSensitiveLog = (obj: ProductionVariantCoreDumpConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantServerlessConfigFilterSensitiveLog = (obj: ProductionVariantServerlessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantFilterSensitiveLog = (obj: ProductionVariant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointConfigInputFilterSensitiveLog = (obj: CreateEndpointConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointConfigOutputFilterSensitiveLog = (obj: CreateEndpointConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentRequestFilterSensitiveLog = (obj: CreateExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentResponseFilterSensitiveLog = (obj: CreateExperimentResponse): any => ({
  ...obj,
});
