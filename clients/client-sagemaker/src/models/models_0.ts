// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerServiceException as __BaseException } from "./SageMakerServiceException";

/**
 * <p>A structure describing the source of an action.</p>
 * @public
 */
export interface ActionSource {
  /**
   * <p>The URI of the source.</p>
   * @public
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   * @public
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   * @public
   */
  SourceId?: string;
}

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * <p>Lists the properties of an <i>action</i>. An action represents an action
 *         or activity. Some examples are a workflow step and a model deployment. Generally, an
 *         action involves at least one input artifact or output artifact.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  ActionName?: string;

  /**
   * <p>The source of the action.</p>
   * @public
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   * @public
   */
  ActionType?: string;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: ActionStatus;

  /**
   * <p>When the action was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the action was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const AssociationEdgeType = {
  ASSOCIATED_WITH: "AssociatedWith",
  CONTRIBUTED_TO: "ContributedTo",
  DERIVED_FROM: "DerivedFrom",
  PRODUCED: "Produced",
  SAME_AS: "SameAs",
} as const;

/**
 * @public
 */
export type AssociationEdgeType = (typeof AssociationEdgeType)[keyof typeof AssociationEdgeType];

/**
 * @public
 */
export interface AddAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
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
   * @public
   */
  AssociationType?: AssociationEdgeType;
}

/**
 * @public
 */
export interface AddAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn?: string;
}

/**
 * <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const CompressionType = {
  GZIP: "Gzip",
  NONE: "None",
} as const;

/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const AdditionalS3DataSourceDataType = {
  S3OBJECT: "S3Object",
  S3PREFIX: "S3Prefix",
} as const;

/**
 * @public
 */
export type AdditionalS3DataSourceDataType =
  (typeof AdditionalS3DataSourceDataType)[keyof typeof AdditionalS3DataSourceDataType];

/**
 * <p>A data source used for training or inference that is in addition to the input dataset
 *             or model data.</p>
 * @public
 */
export interface AdditionalS3DataSource {
  /**
   * <p>The data type of the additional data source that you specify for use in inference or
   *             training. </p>
   * @public
   */
  S3DataType: AdditionalS3DataSourceDataType | undefined;

  /**
   * <p>The uniform resource identifier (URI) used to identify an additional data source used
   *             in inference or training.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The type of compression used for an additional data source used in inference or
   *             training. Specify <code>None</code> if your additional data source is not
   *             compressed.</p>
   * @public
   */
  CompressionType?: CompressionType;
}

/**
 * @public
 * @enum
 */
export const ModelCompressionType = {
  Gzip: "Gzip",
  None: "None",
} as const;

/**
 * @public
 */
export type ModelCompressionType = (typeof ModelCompressionType)[keyof typeof ModelCompressionType];

/**
 * <p>The access configuration file to control access to the ML model. You can explicitly accept the model
 *          end-user license agreement (EULA) within the <code>ModelAccessConfig</code>.</p>
 *          <ul>
 *             <li>
 *                <p>If you are a Jumpstart user, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula">End-user license agreements</a> section for more details on accepting the EULA.</p>
 *             </li>
 *             <li>
 *                <p>If you are an AutoML user, see the  <i>Optional Parameters</i> section of
 *                <i>Create an AutoML job to fine-tune text generation models using the
 *                   API</i> for details on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params">How to set the EULA acceptance when fine-tuning a model using the AutoML
 *                   API</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ModelAccessConfig {
  /**
   * <p>Specifies agreement to the model end-user license agreement (EULA). The
   *             <code>AcceptEula</code> value must be explicitly defined as <code>True</code> in order
   *          to accept the EULA that this model requires. You are responsible for reviewing and
   *          complying with any applicable license terms and making sure they are acceptable for your
   *          use case before downloading or using a model.</p>
   * @public
   */
  AcceptEula: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ModelDataType = {
  S3Object: "S3Object",
  S3Prefix: "S3Prefix",
} as const;

/**
 * @public
 */
export type S3ModelDataType = (typeof S3ModelDataType)[keyof typeof S3ModelDataType];

/**
 * <p>Specifies the S3 location of ML model data to deploy.</p>
 * @public
 */
export interface S3ModelDataSource {
  /**
   * <p>Specifies the S3 path of ML model data to deploy.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies the type of ML model data to deploy.</p>
   *          <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix.
   *             SageMaker uses all objects that match the specified key name prefix as part of the ML model
   *             data to deploy. A valid key name prefix identified by <code>S3Uri</code> always ends
   *             with a forward slash (/).</p>
   *          <p>If you choose <code>S3Object</code>, <code>S3Uri</code> identifies an object that is
   *             the ML model data to deploy.</p>
   * @public
   */
  S3DataType: S3ModelDataType | undefined;

  /**
   * <p>Specifies how the ML model data is prepared.</p>
   *          <p>If you choose <code>Gzip</code> and choose <code>S3Object</code> as the value of
   *                 <code>S3DataType</code>, <code>S3Uri</code> identifies an object that is a
   *             gzip-compressed TAR archive. SageMaker will attempt to decompress and untar the object during
   *             model deployment.</p>
   *          <p>If you choose <code>None</code> and chooose <code>S3Object</code> as the value of
   *                 <code>S3DataType</code>, <code>S3Uri</code> identifies an object that represents an
   *             uncompressed ML model to deploy.</p>
   *          <p>If you choose None and choose <code>S3Prefix</code> as the value of
   *                 <code>S3DataType</code>, <code>S3Uri</code> identifies a key name prefix, under
   *             which all objects represents the uncompressed ML model to deploy.</p>
   *          <p>If you choose None, then SageMaker will follow rules below when creating model data files
   *             under /opt/ml/model directory for use by your inference code:</p>
   *          <ul>
   *             <li>
   *                <p>If you choose <code>S3Object</code> as the value of <code>S3DataType</code>,
   *                     then SageMaker will split the key of the S3 object referenced by <code>S3Uri</code>
   *                     by slash (/), and use the last part as the filename of the file holding the
   *                     content of the S3 object.</p>
   *             </li>
   *             <li>
   *                <p>If you choose <code>S3Prefix</code> as the value of <code>S3DataType</code>,
   *                     then for each S3 object under the key name pefix referenced by
   *                         <code>S3Uri</code>, SageMaker will trim its key by the prefix, and use the
   *                     remainder as the path (relative to <code>/opt/ml/model</code>) of the file
   *                     holding the content of the S3 object. SageMaker will split the remainder by slash
   *                     (/), using intermediate parts as directory names and the last part as filename
   *                     of the file holding the content of the S3 object.</p>
   *             </li>
   *             <li>
   *                <p>Do not use any of the following as file names or directory names:</p>
   *                <ul>
   *                   <li>
   *                      <p>An empty or blank string</p>
   *                   </li>
   *                   <li>
   *                      <p>A string which contains null bytes</p>
   *                   </li>
   *                   <li>
   *                      <p>A string longer than 255 bytes</p>
   *                   </li>
   *                   <li>
   *                      <p>A single dot (<code>.</code>)</p>
   *                   </li>
   *                   <li>
   *                      <p>A double dot (<code>..</code>)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Ambiguous file names will result in model deployment failure. For example, if
   *                     your uncompressed ML model consists of two S3 objects
   *                         <code>s3://mybucket/model/weights</code> and
   *                         <code>s3://mybucket/model/weights/part1</code> and you specify
   *                         <code>s3://mybucket/model/</code> as the value of <code>S3Uri</code> and
   *                         <code>S3Prefix</code> as the value of <code>S3DataType</code>, then it will
   *                     result in name clash between <code>/opt/ml/model/weights</code> (a regular file)
   *                     and <code>/opt/ml/model/weights/</code> (a directory).</p>
   *             </li>
   *             <li>
   *                <p>Do not organize the model artifacts in <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html">S3 console using
   *                         folders</a>. When you create a folder in S3 console, S3 creates a 0-byte
   *                     object with a key set to the folder name you provide. They key of the 0-byte
   *                     object ends with a slash (/) which violates SageMaker restrictions on model artifact
   *                     file names, leading to model deployment failure. </p>
   *             </li>
   *          </ul>
   * @public
   */
  CompressionType: ModelCompressionType | undefined;

  /**
   * <p>Specifies the access configuration file for the ML model. You can explicitly accept the
   *          model end-user license agreement (EULA) within the <code>ModelAccessConfig</code>. You are
   *          responsible for reviewing and complying with any applicable license terms and making sure
   *          they are acceptable for your use case before downloading or using a model.</p>
   * @public
   */
  ModelAccessConfig?: ModelAccessConfig;
}

/**
 * <p>Specifies the location of ML model data to deploy. If specified, you must specify one
 *             and only one of the available data sources.</p>
 * @public
 */
export interface ModelDataSource {
  /**
   * <p>Specifies the S3 location of ML model data to deploy.</p>
   * @public
   */
  S3DataSource?: S3ModelDataSource;
}

/**
 * <p>Input object for the model.</p>
 * @public
 */
export interface ModelInput {
  /**
   * <p>The input configuration object for the model.</p>
   * @public
   */
  DataInputConfig: string | undefined;
}

/**
 * <p>Describes the Docker container for the model package.</p>
 * @public
 */
export interface ModelPackageContainerDefinition {
  /**
   * <p>The DNS host name for the Docker container.</p>
   * @public
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.</p>
   *          <p>If you are using your own custom algorithm instead of an algorithm provided by SageMaker,
   *             the inference code must meet SageMaker requirements. SageMaker supports both
   *             <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   * @public
   */
  Image: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   * @public
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
   * @public
   */
  ModelDataUrl?: string;

  /**
   * <p>Specifies the location of ML model data to deploy during endpoint creation.</p>
   * @public
   */
  ModelDataSource?: ModelDataSource;

  /**
   * <p>The Amazon Web Services Marketplace product ID of the model package.</p>
   * @public
   */
  ProductId?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *             <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>A structure with Model Input details.</p>
   * @public
   */
  ModelInput?: ModelInput;

  /**
   * <p>The machine learning framework of the model package container image.</p>
   * @public
   */
  Framework?: string;

  /**
   * <p>The framework version of the Model Package Container Image.</p>
   * @public
   */
  FrameworkVersion?: string;

  /**
   * <p>The name of a pre-trained machine learning benchmarked by
   *            Amazon SageMaker Inference Recommender model that matches your model.
   *            You can find a list of benchmarked models by calling <code>ListModelMetadata</code>.</p>
   * @public
   */
  NearestModelName?: string;

  /**
   * <p>The additional data source that is used during inference in the Docker container for
   *             your model package.</p>
   * @public
   */
  AdditionalS3DataSource?: AdditionalS3DataSource;
}

/**
 * @public
 * @enum
 */
export const ProductionVariantInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_LARGE: "ml.c4.large",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5D_18XLARGE: "ml.c5d.18xlarge",
  ML_C5D_2XLARGE: "ml.c5d.2xlarge",
  ML_C5D_4XLARGE: "ml.c5d.4xlarge",
  ML_C5D_9XLARGE: "ml.c5d.9xlarge",
  ML_C5D_LARGE: "ml.c5d.large",
  ML_C5D_XLARGE: "ml.c5d.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6GD_12XLARGE: "ml.c6gd.12xlarge",
  ML_C6GD_16XLARGE: "ml.c6gd.16xlarge",
  ML_C6GD_2XLARGE: "ml.c6gd.2xlarge",
  ML_C6GD_4XLARGE: "ml.c6gd.4xlarge",
  ML_C6GD_8XLARGE: "ml.c6gd.8xlarge",
  ML_C6GD_LARGE: "ml.c6gd.large",
  ML_C6GD_XLARGE: "ml.c6gd.xlarge",
  ML_C6GN_12XLARGE: "ml.c6gn.12xlarge",
  ML_C6GN_16XLARGE: "ml.c6gn.16xlarge",
  ML_C6GN_2XLARGE: "ml.c6gn.2xlarge",
  ML_C6GN_4XLARGE: "ml.c6gn.4xlarge",
  ML_C6GN_8XLARGE: "ml.c6gn.8xlarge",
  ML_C6GN_LARGE: "ml.c6gn.large",
  ML_C6GN_XLARGE: "ml.c6gn.xlarge",
  ML_C6G_12XLARGE: "ml.c6g.12xlarge",
  ML_C6G_16XLARGE: "ml.c6g.16xlarge",
  ML_C6G_2XLARGE: "ml.c6g.2xlarge",
  ML_C6G_4XLARGE: "ml.c6g.4xlarge",
  ML_C6G_8XLARGE: "ml.c6g.8xlarge",
  ML_C6G_LARGE: "ml.c6g.large",
  ML_C6G_XLARGE: "ml.c6g.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7G_12XLARGE: "ml.c7g.12xlarge",
  ML_C7G_16XLARGE: "ml.c7g.16xlarge",
  ML_C7G_2XLARGE: "ml.c7g.2xlarge",
  ML_C7G_4XLARGE: "ml.c7g.4xlarge",
  ML_C7G_8XLARGE: "ml.c7g.8xlarge",
  ML_C7G_LARGE: "ml.c7g.large",
  ML_C7G_XLARGE: "ml.c7g.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_DL1_24XLARGE: "ml.dl1.24xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_G6_12XLARGE: "ml.g6.12xlarge",
  ML_G6_16XLARGE: "ml.g6.16xlarge",
  ML_G6_24XLARGE: "ml.g6.24xlarge",
  ML_G6_2XLARGE: "ml.g6.2xlarge",
  ML_G6_48XLARGE: "ml.g6.48xlarge",
  ML_G6_4XLARGE: "ml.g6.4xlarge",
  ML_G6_8XLARGE: "ml.g6.8xlarge",
  ML_G6_XLARGE: "ml.g6.xlarge",
  ML_INF1_24XLARGE: "ml.inf1.24xlarge",
  ML_INF1_2XLARGE: "ml.inf1.2xlarge",
  ML_INF1_6XLARGE: "ml.inf1.6xlarge",
  ML_INF1_XLARGE: "ml.inf1.xlarge",
  ML_INF2_24XLARGE: "ml.inf2.24xlarge",
  ML_INF2_48XLARGE: "ml.inf2.48xlarge",
  ML_INF2_8XLARGE: "ml.inf2.8xlarge",
  ML_INF2_XLARGE: "ml.inf2.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6GD_12XLARGE: "ml.m6gd.12xlarge",
  ML_M6GD_16XLARGE: "ml.m6gd.16xlarge",
  ML_M6GD_2XLARGE: "ml.m6gd.2xlarge",
  ML_M6GD_4XLARGE: "ml.m6gd.4xlarge",
  ML_M6GD_8XLARGE: "ml.m6gd.8xlarge",
  ML_M6GD_LARGE: "ml.m6gd.large",
  ML_M6GD_XLARGE: "ml.m6gd.xlarge",
  ML_M6G_12XLARGE: "ml.m6g.12xlarge",
  ML_M6G_16XLARGE: "ml.m6g.16xlarge",
  ML_M6G_2XLARGE: "ml.m6g.2xlarge",
  ML_M6G_4XLARGE: "ml.m6g.4xlarge",
  ML_M6G_8XLARGE: "ml.m6g.8xlarge",
  ML_M6G_LARGE: "ml.m6g.large",
  ML_M6G_XLARGE: "ml.m6g.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_R5D_12XLARGE: "ml.r5d.12xlarge",
  ML_R5D_24XLARGE: "ml.r5d.24xlarge",
  ML_R5D_2XLARGE: "ml.r5d.2xlarge",
  ML_R5D_4XLARGE: "ml.r5d.4xlarge",
  ML_R5D_LARGE: "ml.r5d.large",
  ML_R5D_XLARGE: "ml.r5d.xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R6GD_12XLARGE: "ml.r6gd.12xlarge",
  ML_R6GD_16XLARGE: "ml.r6gd.16xlarge",
  ML_R6GD_2XLARGE: "ml.r6gd.2xlarge",
  ML_R6GD_4XLARGE: "ml.r6gd.4xlarge",
  ML_R6GD_8XLARGE: "ml.r6gd.8xlarge",
  ML_R6GD_LARGE: "ml.r6gd.large",
  ML_R6GD_XLARGE: "ml.r6gd.xlarge",
  ML_R6G_12XLARGE: "ml.r6g.12xlarge",
  ML_R6G_16XLARGE: "ml.r6g.16xlarge",
  ML_R6G_2XLARGE: "ml.r6g.2xlarge",
  ML_R6G_4XLARGE: "ml.r6g.4xlarge",
  ML_R6G_8XLARGE: "ml.r6g.8xlarge",
  ML_R6G_LARGE: "ml.r6g.large",
  ML_R6G_XLARGE: "ml.r6g.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
  ML_T2_2XLARGE: "ml.t2.2xlarge",
  ML_T2_LARGE: "ml.t2.large",
  ML_T2_MEDIUM: "ml.t2.medium",
  ML_T2_XLARGE: "ml.t2.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;

/**
 * @public
 */
export type ProductionVariantInstanceType =
  (typeof ProductionVariantInstanceType)[keyof typeof ProductionVariantInstanceType];

/**
 * @public
 * @enum
 */
export const TransformInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_R6I_12XLARGE: "ml.r6i.12xlarge",
  ML_R6I_16XLARGE: "ml.r6i.16xlarge",
  ML_R6I_24XLARGE: "ml.r6i.24xlarge",
  ML_R6I_2XLARGE: "ml.r6i.2xlarge",
  ML_R6I_32XLARGE: "ml.r6i.32xlarge",
  ML_R6I_4XLARGE: "ml.r6i.4xlarge",
  ML_R6I_8XLARGE: "ml.r6i.8xlarge",
  ML_R6I_LARGE: "ml.r6i.large",
  ML_R6I_XLARGE: "ml.r6i.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
} as const;

/**
 * @public
 */
export type TransformInstanceType = (typeof TransformInstanceType)[keyof typeof TransformInstanceType];

/**
 * <p>A structure of additional Inference Specification. Additional Inference Specification
 *             specifies details about inference jobs that can be run with models based on
 *             this model package</p>
 * @public
 */
export interface AdditionalInferenceSpecificationDefinition {
  /**
   * <p>A unique name to identify the additional inference specification. The name must
   *            be unique within the list of your additional inference specifications for a
   *            particular model package.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the additional Inference specification</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   * @public
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run
   *            or on which an endpoint can be deployed.</p>
   * @public
   */
  SupportedTransformInstanceTypes?: TransformInstanceType[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   * @public
   */
  SupportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceType[];

  /**
   * <p>The supported MIME types for the input data.</p>
   * @public
   */
  SupportedContentTypes?: string[];

  /**
   * <p>The supported MIME types for the output data.</p>
   * @public
   */
  SupportedResponseMIMETypes?: string[];
}

/**
 * <p>A tag object that consists of a key and an optional value, used to manage metadata
 *             for SageMaker Amazon Web Services resources.</p>
 *          <p>You can add tags to notebook instances, training jobs, hyperparameter tuning jobs,
 *             batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints. For more information on adding tags to SageMaker resources, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a>.</p>
 *          <p>For more information on adding metadata to your Amazon Web Services resources with
 *             tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. For advice on best practices for
 *             managing Amazon Web Services resources with tagging, see <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
 *                 Best Practices: Implement an Effective Amazon Web Services Resource Tagging
 *                 Strategy</a>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique per resource.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsOutput {
  /**
   * <p>A list of tags associated with the SageMaker resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Edge Manager agent version.</p>
 * @public
 */
export interface AgentVersion {
  /**
   * <p>Version of the agent.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>The number of Edge Manager agents.</p>
   * @public
   */
  AgentCount: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregationTransformationValue = {
  Avg: "avg",
  First: "first",
  Max: "max",
  Min: "min",
  Sum: "sum",
} as const;

/**
 * @public
 */
export type AggregationTransformationValue =
  (typeof AggregationTransformationValue)[keyof typeof AggregationTransformationValue];

/**
 * <p>An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.</p>
 * @public
 */
export interface Alarm {
  /**
   * <p>The name of a CloudWatch alarm in your account.</p>
   * @public
   */
  AlarmName?: string;
}

/**
 * @public
 * @enum
 */
export const AlgorithmSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AlgorithmSortBy = (typeof AlgorithmSortBy)[keyof typeof AlgorithmSortBy];

/**
 * <p>Specifies a metric that the training algorithm writes to <code>stderr</code> or
 *                 <code>stdout</code>. You can view these logs to understand how your training job
 *             performs and check for any errors encountered during training. SageMaker hyperparameter
 *             tuning captures all defined metrics. Specify one of the defined metrics to use as an
 *             objective metric using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-TuningObjective">TuningObjective</a> parameter in the
 *                 <code>HyperParameterTrainingJobDefinition</code> API to evaluate job performance
 *             during hyperparameter tuning.</p>
 * @public
 */
export interface MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A regular expression that searches the output of a training job and gets the value of
   *             the metric. For more information about using regular expressions to define metrics, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Defining metrics and environment variables</a>.</p>
   * @public
   */
  Regex: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingRepositoryAccessMode = {
  PLATFORM: "Platform",
  VPC: "Vpc",
} as const;

/**
 * @public
 */
export type TrainingRepositoryAccessMode =
  (typeof TrainingRepositoryAccessMode)[keyof typeof TrainingRepositoryAccessMode];

/**
 * <p>An object containing authentication information for a private Docker registry.</p>
 * @public
 */
export interface TrainingRepositoryAuthConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function used to give SageMaker access
   *             credentials to your private Docker registry.</p>
   * @public
   */
  TrainingRepositoryCredentialsProviderArn: string | undefined;
}

/**
 * <p>The configuration to use an image from a private Docker registry for a training
 *             job.</p>
 * @public
 */
export interface TrainingImageConfig {
  /**
   * <p>The method that your training job will use to gain access to the images in your
   *             private Docker registry. For access to an image in a private Docker registry, set to
   *                 <code>Vpc</code>.</p>
   * @public
   */
  TrainingRepositoryAccessMode: TrainingRepositoryAccessMode | undefined;

  /**
   * <p>An object containing authentication information for a private Docker registry
   *             containing your training images.</p>
   * @public
   */
  TrainingRepositoryAuthConfig?: TrainingRepositoryAuthConfig;
}

/**
 * @public
 * @enum
 */
export const TrainingInputMode = {
  FASTFILE: "FastFile",
  FILE: "File",
  PIPE: "Pipe",
} as const;

/**
 * @public
 */
export type TrainingInputMode = (typeof TrainingInputMode)[keyof typeof TrainingInputMode];

/**
 * <p>Specifies the training algorithm to use in a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> request.</p>
 *          <p>For more information about algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For
 *             information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
 *                 Amazon SageMaker</a>. </p>
 * @public
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
   * @public
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
   * @public
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
   * @public
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. SageMaker publishes each metric to Amazon CloudWatch.</p>
   * @public
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
   *                <p>You specify at least one <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_MetricDefinition.html">MetricDefinition</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EnableSageMakerMetricsTimeSeries?: boolean;

  /**
   * <p>The <a href="https://docs.docker.com/engine/reference/builder/">entrypoint script
   *                 for a Docker container</a> used to run a training job. This script takes
   *             precedence over the default train processing instructions. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Amazon SageMaker
   *                 Runs Your Training Image</a> for more information.</p>
   * @public
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments for a container used to run a training job. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Amazon SageMaker
   *                 Runs Your Training Image</a> for additional information.</p>
   * @public
   */
  ContainerArguments?: string[];

  /**
   * <p>The configuration to use an image from a private Docker registry for a training
   *             job.</p>
   * @public
   */
  TrainingImageConfig?: TrainingImageConfig;
}

/**
 * @public
 * @enum
 */
export const AlgorithmStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type AlgorithmStatus = (typeof AlgorithmStatus)[keyof typeof AlgorithmStatus];

/**
 * @public
 * @enum
 */
export const DetailedAlgorithmStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
} as const;

/**
 * @public
 */
export type DetailedAlgorithmStatus = (typeof DetailedAlgorithmStatus)[keyof typeof DetailedAlgorithmStatus];

/**
 * <p>Represents the overall status of an algorithm.</p>
 * @public
 */
export interface AlgorithmStatusItem {
  /**
   * <p>The name of the algorithm for which the overall status is being reported.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   * @public
   */
  Status: DetailedAlgorithmStatus | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * <p>Specifies the validation and image scan statuses of the algorithm.</p>
 * @public
 */
export interface AlgorithmStatusDetails {
  /**
   * <p>The status of algorithm validation.</p>
   * @public
   */
  ValidationStatuses?: AlgorithmStatusItem[];

  /**
   * <p>The status of the scan of the algorithm's Docker image container.</p>
   * @public
   */
  ImageScanStatuses?: AlgorithmStatusItem[];
}

/**
 * <p>Provides summary information about an algorithm.</p>
 * @public
 */
export interface AlgorithmSummary {
  /**
   * <p>The name of the algorithm that is described by the summary.</p>
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   * @public
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief description of the algorithm.</p>
   * @public
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the algorithm.</p>
   * @public
   */
  AlgorithmStatus: AlgorithmStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const FileSystemAccessMode = {
  RO: "ro",
  RW: "rw",
} as const;

/**
 * @public
 */
export type FileSystemAccessMode = (typeof FileSystemAccessMode)[keyof typeof FileSystemAccessMode];

/**
 * @public
 * @enum
 */
export const FileSystemType = {
  EFS: "EFS",
  FSXLUSTRE: "FSxLustre",
} as const;

/**
 * @public
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

/**
 * <p>Specifies a file system data source for a channel.</p>
 * @public
 */
export interface FileSystemDataSource {
  /**
   * <p>The file system id.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The access mode of the mount of the directory associated with the channel. A directory
   *             can be mounted either in <code>ro</code> (read-only) or <code>rw</code> (read-write)
   *             mode.</p>
   * @public
   */
  FileSystemAccessMode: FileSystemAccessMode | undefined;

  /**
   * <p>The file system type. </p>
   * @public
   */
  FileSystemType: FileSystemType | undefined;

  /**
   * <p>The full path to the directory to associate with the channel.</p>
   * @public
   */
  DirectoryPath: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3DataDistribution = {
  FULLY_REPLICATED: "FullyReplicated",
  SHARDED_BY_S3_KEY: "ShardedByS3Key",
} as const;

/**
 * @public
 */
export type S3DataDistribution = (typeof S3DataDistribution)[keyof typeof S3DataDistribution];

/**
 * @public
 * @enum
 */
export const S3DataType = {
  AUGMENTED_MANIFEST_FILE: "AugmentedManifestFile",
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;

/**
 * @public
 */
export type S3DataType = (typeof S3DataType)[keyof typeof S3DataType];

/**
 * <p>Describes the S3 data source.</p>
 *          <p>Your input bucket must be in the same Amazon Web Services region as your training
 *             job.</p>
 * @public
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
   * @public
   */
  S3DataType: S3DataType | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either
   *             a key name prefix or a manifest. For example: </p>
   *          <ul>
   *             <li>
   *                <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                </p>
   *                <p> A manifest is an S3 object which is a JSON file consisting of an array of
   *                     elements. The first element is a prefix which is followed by one or more
   *                     suffixes. SageMaker appends the suffix elements to the prefix to get a full set of
   *                         <code>S3Uri</code>. Note that the prefix must be a valid non-empty
   *                         <code>S3Uri</code> that precludes users from specifying a manifest whose
   *                     individual <code>S3Uri</code> is sourced from different S3 buckets.</p>
   *                <p> The following code example shows a valid manifest format: </p>
   *                <p>
   *                   <code>[ \{"prefix": "s3://customer_bucket/some/prefix/"\},</code>
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
   *          <p>Your input bucket must be located in same Amazon Web Services region as your
   *             training job.</p>
   * @public
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
   * @public
   */
  S3DataDistributionType?: S3DataDistribution;

  /**
   * <p>A list of one or more attribute names to use that are found in a specified augmented
   *             manifest file.</p>
   * @public
   */
  AttributeNames?: string[];

  /**
   * <p>A list of names of instance groups that get data from the S3 data source.</p>
   * @public
   */
  InstanceGroupNames?: string[];
}

/**
 * <p>Describes the location of the channel data.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   * @public
   */
  S3DataSource?: S3DataSource;

  /**
   * <p>The file system that is associated with a channel.</p>
   * @public
   */
  FileSystemDataSource?: FileSystemDataSource;
}

/**
 * @public
 * @enum
 */
export const RecordWrapper = {
  NONE: "None",
  RECORDIO: "RecordIO",
} as const;

/**
 * @public
 */
export type RecordWrapper = (typeof RecordWrapper)[keyof typeof RecordWrapper];

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
 * @public
 */
export interface ShuffleConfig {
  /**
   * <p>Determines the shuffling order in <code>ShuffleConfig</code> value.</p>
   * @public
   */
  Seed: number | undefined;
}

/**
 * <p>A channel is a named input source that training algorithms can consume. </p>
 * @public
 */
export interface Channel {
  /**
   * <p>The name of the channel. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The location of the channel data.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>The MIME type of the data.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>If training data is compressed, the compression type. The default value is
   *                 <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In
   *             File mode, leave this field unset or set it to None.</p>
   * @public
   */
  CompressionType?: CompressionType;

  /**
   * <p></p>
   *          <p>Specify RecordIO as the value when input data is in raw format but the training
   *             algorithm requires the RecordIO format. In this case, SageMaker wraps each individual S3
   *             object in a RecordIO record. If the input data is already in RecordIO format, you don't
   *             need to set this attribute. For more information, see <a href="https://mxnet.apache.org/api/architecture/note_data_loading#data-format">Create
   *                 a Dataset Using RecordIO</a>. </p>
   *          <p>In File mode, leave this field unset or set it to None.</p>
   * @public
   */
  RecordWrapperType?: RecordWrapper;

  /**
   * <p>(Optional) The input mode to use for the data channel in a training job. If you don't
   *             set a value for <code>InputMode</code>, SageMaker uses the value set for
   *                 <code>TrainingInputMode</code>. Use this parameter to override the
   *                 <code>TrainingInputMode</code> setting in a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html">AlgorithmSpecification</a> request when you have a channel that needs a
   *             different input mode from the training job's general setting. To download the data from
   *             Amazon Simple Storage Service (Amazon S3) to the provisioned ML storage volume, and mount the directory to a
   *             Docker volume, use <code>File</code> input mode. To stream data directly from Amazon S3 to
   *             the container, choose <code>Pipe</code> input mode.</p>
   *          <p>To use a model for incremental training, choose <code>File</code> input model.</p>
   * @public
   */
  InputMode?: TrainingInputMode;

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
   * @public
   */
  ShuffleConfig?: ShuffleConfig;
}

/**
 * @public
 * @enum
 */
export const OutputCompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type OutputCompressionType = (typeof OutputCompressionType)[keyof typeof OutputCompressionType];

/**
 * <p>Provides information about how to store model training results (model
 *             artifacts).</p>
 * @public
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
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account.
   *
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. If the output
   *             data is stored in Amazon S3 Express One Zone, it is encrypted with server-side encryption with Amazon S3
   *             managed keys (SSE-S3). KMS key is not supported for Amazon S3 Express One Zone</p>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services
   *                 Key Management Service Developer Guide</i>.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>. </p>
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The model output compression type. Select <code>None</code> to output an uncompressed
   *             model, recommended for large model outputs. Defaults to gzip.</p>
   * @public
   */
  CompressionType?: OutputCompressionType;
}

/**
 * @public
 * @enum
 */
export const TrainingInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_XLARGE: "ml.c5n.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;

/**
 * @public
 */
export type TrainingInstanceType = (typeof TrainingInstanceType)[keyof typeof TrainingInstanceType];

/**
 * <p>Defines an instance group for heterogeneous cluster training. When requesting a
 *             training job using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> API, you can configure multiple instance groups .</p>
 * @public
 */
export interface InstanceGroup {
  /**
   * <p>Specifies the instance type of the instance group.</p>
   * @public
   */
  InstanceType: TrainingInstanceType | undefined;

  /**
   * <p>Specifies the number of instances of the instance group.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>Specifies the name of the instance group.</p>
   * @public
   */
  InstanceGroupName: string | undefined;
}

/**
 * <p>Describes the resources, including machine learning (ML) compute instances and ML
 *             storage volumes, to use for model training. </p>
 * @public
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
   * @public
   */
  InstanceType?: TrainingInstanceType;

  /**
   * <p>The number of ML compute instances to use. For distributed training, provide a
   *             value greater than 1. </p>
   * @public
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
   * @public
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
   * @public
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The duration of time in seconds to retain configured resources in a warm pool for
   *             subsequent training jobs.</p>
   * @public
   */
  KeepAlivePeriodInSeconds?: number;

  /**
   * <p>The configuration of a heterogeneous cluster in JSON format.</p>
   * @public
   */
  InstanceGroups?: InstanceGroup[];
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
 * @public
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
   * @public
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
   * @public
   */
  MaxWaitTimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, that a training or compilation job can be
   *          pending before it is stopped.</p>
   * @public
   */
  MaxPendingTimeInSeconds?: number;
}

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 * @public
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
   * @public
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * <p>The hyperparameters used for the training job.</p>
   * @public
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input
   *             source.</p>
   * @public
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. SageMaker creates
   *             subfolders for the artifacts.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for
   *             model training.</p>
   * @public
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchStrategy = {
  MULTI_RECORD: "MultiRecord",
  SINGLE_RECORD: "SingleRecord",
} as const;

/**
 * @public
 */
export type BatchStrategy = (typeof BatchStrategy)[keyof typeof BatchStrategy];

/**
 * <p>Describes the S3 data source.</p>
 * @public
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
   * @public
   */
  S3DataType: S3DataType | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *             key name prefix or a manifest. For example:</p>
   *          <ul>
   *             <li>
   *                <p> A key name prefix might look like this:
   * 		<code>s3://bucketname/exampleprefix/</code>. </p>
   *             </li>
   *             <li>
   *                <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                </p>
   *                <p> The manifest is an S3 object which is a JSON file with the following format: </p>
   *                <p>
   *                   <code>[ \{"prefix": "s3://customer_bucket/some/prefix/"\},</code>
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
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Describes the location of the channel data.</p>
 * @public
 */
export interface TransformDataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   * @public
   */
  S3DataSource: TransformS3DataSource | undefined;
}

/**
 * @public
 * @enum
 */
export const SplitType = {
  LINE: "Line",
  NONE: "None",
  RECORDIO: "RecordIO",
  TFRECORD: "TFRecord",
} as const;

/**
 * @public
 */
export type SplitType = (typeof SplitType)[keyof typeof SplitType];

/**
 * <p>Describes the input source of a transform job and the way the transform job consumes
 *             it.</p>
 * @public
 */
export interface TransformInput {
  /**
   * <p>Describes the location of
   *             the
   *             channel data, which is, the S3 location of the input data that the
   *             model can consume.</p>
   * @public
   */
  DataSource: TransformDataSource | undefined;

  /**
   * <p>The multipurpose internet mail extension
   *             (MIME)
   *             type of the data. Amazon SageMaker uses the MIME type with each http call to
   *             transfer data to the transform job.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>If your transform data
   *             is
   *             compressed, specify the compression type. Amazon SageMaker automatically
   *             decompresses the data for the transform job accordingly. The default value is
   *                 <code>None</code>.</p>
   * @public
   */
  CompressionType?: CompressionType;

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
   * @public
   */
  SplitType?: SplitType;
}

/**
 * @public
 * @enum
 */
export const AssemblyType = {
  LINE: "Line",
  NONE: "None",
} as const;

/**
 * @public
 */
export type AssemblyType = (typeof AssemblyType)[keyof typeof AssemblyType];

/**
 * <p>Describes the results of a transform job.</p>
 * @public
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
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http
   *             call to transfer data from the transform job.</p>
   * @public
   */
  Accept?: string;

  /**
   * <p>Defines how to assemble the results of the transform job as a single S3 object. Choose
   *             a format that is most convenient to you. To concatenate the results in binary format,
   *             specify <code>None</code>. To add a newline character at the end of every transformed
   *             record, specify
   *             <code>Line</code>.</p>
   * @public
   */
  AssembleWith?: AssemblyType;

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
   * @public
   */
  KmsKeyId?: string;
}

/**
 * <p>Describes the resources, including ML instance types and ML instance count, to use for
 *             transform job.</p>
 * @public
 */
export interface TransformResources {
  /**
   * <p>The ML compute instance type for the transform job. If you are using built-in
   *             algorithms to
   *             transform
   *             moderately sized datasets, we recommend using ml.m4.xlarge or
   *             <code>ml.m5.large</code>instance types.</p>
   * @public
   */
  InstanceType: TransformInstanceType | undefined;

  /**
   * <p>The number of
   *             ML
   *             compute instances to use in the transform job. The default value is
   *                 <code>1</code>, and the maximum is <code>100</code>. For distributed transform jobs,
   *             specify a value greater than <code>1</code>.</p>
   * @public
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
   * @public
   */
  VolumeKmsKeyId?: string;
}

/**
 * <p>Defines the input needed to run a transform job using the inference specification
 *             specified in the algorithm.</p>
 * @public
 */
export interface TransformJobDefinition {
  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. The default value is 1.</p>
   * @public
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record
   *             (without metadata).</p>
   * @public
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p>
   *          <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   * @public
   */
  BatchStrategy?: BatchStrategy;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   * @public
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   * @public
   */
  TransformResources: TransformResources | undefined;
}

/**
 * <p>Defines a training job and a batch transform job that SageMaker runs to validate your
 *             algorithm.</p>
 *          <p>The data provided in the validation profile is made available to your buyers on
 *                 Amazon Web Services Marketplace.</p>
 * @public
 */
export interface AlgorithmValidationProfile {
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             SageMaker runs to validate your algorithm.</p>
   * @public
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             SageMaker runs to validate your algorithm.</p>
   * @public
   */
  TransformJobDefinition?: TransformJobDefinition;
}

/**
 * <p>Specifies configurations for one or more training jobs that SageMaker runs to test the
 *             algorithm.</p>
 * @public
 */
export interface AlgorithmValidationSpecification {
  /**
   * <p>The IAM roles that SageMaker uses to run the training jobs.</p>
   * @public
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that SageMaker runs to validate your algorithm.</p>
   * @public
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;
}

/**
 * <p>Configures how labels are consolidated across human workers and processes output data.
 *          </p>
 * @public
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
   * @public
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AppType = {
  Canvas: "Canvas",
  CodeEditor: "CodeEditor",
  DetailedProfiler: "DetailedProfiler",
  JupyterLab: "JupyterLab",
  JupyterServer: "JupyterServer",
  KernelGateway: "KernelGateway",
  RSessionGateway: "RSessionGateway",
  RStudioServerPro: "RStudioServerPro",
  TensorBoard: "TensorBoard",
} as const;

/**
 * @public
 */
export type AppType = (typeof AppType)[keyof typeof AppType];

/**
 * @public
 * @enum
 */
export const AppInstanceType = {
  ML_C5_12XLARGE: "ml.c5.12xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_24XLARGE: "ml.c5.24xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6ID_12XLARGE: "ml.c6id.12xlarge",
  ML_C6ID_16XLARGE: "ml.c6id.16xlarge",
  ML_C6ID_24XLARGE: "ml.c6id.24xlarge",
  ML_C6ID_2XLARGE: "ml.c6id.2xlarge",
  ML_C6ID_32XLARGE: "ml.c6id.32xlarge",
  ML_C6ID_4XLARGE: "ml.c6id.4xlarge",
  ML_C6ID_8XLARGE: "ml.c6id.8xlarge",
  ML_C6ID_LARGE: "ml.c6id.large",
  ML_C6ID_XLARGE: "ml.c6id.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_G6_12XLARGE: "ml.g6.12xlarge",
  ML_G6_16XLARGE: "ml.g6.16xlarge",
  ML_G6_24XLARGE: "ml.g6.24xlarge",
  ML_G6_2XLARGE: "ml.g6.2xlarge",
  ML_G6_48XLARGE: "ml.g6.48xlarge",
  ML_G6_4XLARGE: "ml.g6.4xlarge",
  ML_G6_8XLARGE: "ml.g6.8xlarge",
  ML_G6_XLARGE: "ml.g6.xlarge",
  ML_GEOSPATIAL_INTERACTIVE: "ml.geospatial.interactive",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_16XLARGE: "ml.m5d.16xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_8XLARGE: "ml.m5d.8xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_16XLARGE: "ml.m5.16xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_8XLARGE: "ml.m5.8xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6ID_12XLARGE: "ml.m6id.12xlarge",
  ML_M6ID_16XLARGE: "ml.m6id.16xlarge",
  ML_M6ID_24XLARGE: "ml.m6id.24xlarge",
  ML_M6ID_2XLARGE: "ml.m6id.2xlarge",
  ML_M6ID_32XLARGE: "ml.m6id.32xlarge",
  ML_M6ID_4XLARGE: "ml.m6id.4xlarge",
  ML_M6ID_8XLARGE: "ml.m6id.8xlarge",
  ML_M6ID_LARGE: "ml.m6id.large",
  ML_M6ID_XLARGE: "ml.m6id.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R6ID_12XLARGE: "ml.r6id.12xlarge",
  ML_R6ID_16XLARGE: "ml.r6id.16xlarge",
  ML_R6ID_24XLARGE: "ml.r6id.24xlarge",
  ML_R6ID_2XLARGE: "ml.r6id.2xlarge",
  ML_R6ID_32XLARGE: "ml.r6id.32xlarge",
  ML_R6ID_4XLARGE: "ml.r6id.4xlarge",
  ML_R6ID_8XLARGE: "ml.r6id.8xlarge",
  ML_R6ID_LARGE: "ml.r6id.large",
  ML_R6ID_XLARGE: "ml.r6id.xlarge",
  ML_R6I_12XLARGE: "ml.r6i.12xlarge",
  ML_R6I_16XLARGE: "ml.r6i.16xlarge",
  ML_R6I_24XLARGE: "ml.r6i.24xlarge",
  ML_R6I_2XLARGE: "ml.r6i.2xlarge",
  ML_R6I_32XLARGE: "ml.r6i.32xlarge",
  ML_R6I_4XLARGE: "ml.r6i.4xlarge",
  ML_R6I_8XLARGE: "ml.r6i.8xlarge",
  ML_R6I_LARGE: "ml.r6i.large",
  ML_R6I_XLARGE: "ml.r6i.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_MICRO: "ml.t3.micro",
  ML_T3_SMALL: "ml.t3.small",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
  SYSTEM: "system",
} as const;

/**
 * @public
 */
export type AppInstanceType = (typeof AppInstanceType)[keyof typeof AppInstanceType];

/**
 * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
 *          the version runs on.</p>
 * @public
 */
export interface ResourceSpec {
  /**
   * <p>The ARN of the SageMaker image that the image version belongs to.</p>
   * @public
   */
  SageMakerImageArn?: string;

  /**
   * <p>The ARN of the image version created on the instance.</p>
   * @public
   */
  SageMakerImageVersionArn?: string;

  /**
   * <p>The SageMakerImageVersionAlias of the image to launch with. This value is in SemVer 2.0.0 versioning format.</p>
   * @public
   */
  SageMakerImageVersionAlias?: string;

  /**
   * <p>The instance type that the image version runs on.</p>
   *          <note>
   *             <p>
   *                <b>JupyterServer apps</b> only support the <code>system</code> value.</p>
   *             <p>For <b>KernelGateway apps</b>, the <code>system</code>
   *             value is translated to <code>ml.t3.medium</code>. KernelGateway apps also support all other values for available
   *             instance types.</p>
   *          </note>
   * @public
   */
  InstanceType?: AppInstanceType;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.</p>
   * @public
   */
  LifecycleConfigArn?: string;
}

/**
 * @public
 * @enum
 */
export const AppStatus = {
  Deleted: "Deleted",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
} as const;

/**
 * @public
 */
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

/**
 * <p>Details about an Amazon SageMaker app.</p>
 * @public
 */
export interface AppDetails {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType?: AppType;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: AppStatus;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *          the version runs on.</p>
   * @public
   */
  ResourceSpec?: ResourceSpec;
}

/**
 * <p>The configuration used to run the application image container.</p>
 * @public
 */
export interface ContainerConfig {
  /**
   * <p>The arguments for the container when you're running the application.</p>
   * @public
   */
  ContainerArguments?: string[];

  /**
   * <p>The entrypoint used to run the application in the container.</p>
   * @public
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The environment variables to set in the container</p>
   * @public
   */
  ContainerEnvironmentVariables?: Record<string, string>;
}

/**
 * <p>The Amazon Elastic File System storage configuration for a SageMaker image.</p>
 * @public
 */
export interface FileSystemConfig {
  /**
   * <p>The path within the image to mount the user's EFS home directory. The directory
   *          should be empty. If not specified, defaults to <i>/home/sagemaker-user</i>.</p>
   * @public
   */
  MountPath?: string;

  /**
   * <p>The default POSIX user ID (UID). If not specified, defaults to <code>1000</code>.</p>
   * @public
   */
  DefaultUid?: number;

  /**
   * <p>The default POSIX group ID (GID). If not specified, defaults to <code>100</code>.</p>
   * @public
   */
  DefaultGid?: number;
}

/**
 * <p>The configuration for the file system and kernels in a SageMaker image running as a Code Editor app.
 *       The <code>FileSystemConfig</code> object is not supported.</p>
 * @public
 */
export interface CodeEditorAppImageConfig {
  /**
   * <p>The Amazon Elastic File System storage configuration for a SageMaker image.</p>
   * @public
   */
  FileSystemConfig?: FileSystemConfig;

  /**
   * <p>The configuration used to run the application image container.</p>
   * @public
   */
  ContainerConfig?: ContainerConfig;
}

/**
 * <p>The configuration for the file system and kernels in a SageMaker image running as a JupyterLab app. The <code>FileSystemConfig</code> object is not supported.</p>
 * @public
 */
export interface JupyterLabAppImageConfig {
  /**
   * <p>The Amazon Elastic File System storage configuration for a SageMaker image.</p>
   * @public
   */
  FileSystemConfig?: FileSystemConfig;

  /**
   * <p>The configuration used to run the application image container.</p>
   * @public
   */
  ContainerConfig?: ContainerConfig;
}

/**
 * <p>The specification of a Jupyter kernel.</p>
 * @public
 */
export interface KernelSpec {
  /**
   * <p>The name of the Jupyter kernel in the image. This value is case sensitive.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name of the kernel.</p>
   * @public
   */
  DisplayName?: string;
}

/**
 * <p>The configuration for the file system and kernels in a SageMaker image running as a
 *          KernelGateway app.</p>
 * @public
 */
export interface KernelGatewayImageConfig {
  /**
   * <p>The specification of the Jupyter kernels in the image.</p>
   * @public
   */
  KernelSpecs: KernelSpec[] | undefined;

  /**
   * <p>The Amazon Elastic File System storage configuration for a SageMaker image.</p>
   * @public
   */
  FileSystemConfig?: FileSystemConfig;
}

/**
 * <p>The configuration for running a SageMaker image as a KernelGateway app.</p>
 * @public
 */
export interface AppImageConfigDetails {
  /**
   * <p>The ARN of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig. Must be unique to your account.</p>
   * @public
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the file system and kernels in the SageMaker image.</p>
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;

  /**
   * <p>The configuration for the file system and the runtime, such as the environment variables and entry point.</p>
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;

  /**
   * <p>The configuration for the file system and the runtime,
   *       such as the environment variables and entry point.</p>
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}

/**
 * @public
 * @enum
 */
export const AppImageConfigSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type AppImageConfigSortKey = (typeof AppImageConfigSortKey)[keyof typeof AppImageConfigSortKey];

/**
 * @public
 * @enum
 */
export const AppNetworkAccessType = {
  PublicInternetOnly: "PublicInternetOnly",
  VpcOnly: "VpcOnly",
} as const;

/**
 * @public
 */
export type AppNetworkAccessType = (typeof AppNetworkAccessType)[keyof typeof AppNetworkAccessType];

/**
 * @public
 * @enum
 */
export const AppSecurityGroupManagement = {
  Customer: "Customer",
  Service: "Service",
} as const;

/**
 * @public
 */
export type AppSecurityGroupManagement = (typeof AppSecurityGroupManagement)[keyof typeof AppSecurityGroupManagement];

/**
 * @public
 * @enum
 */
export const AppSortKey = {
  CreationTime: "CreationTime",
} as const;

/**
 * @public
 */
export type AppSortKey = (typeof AppSortKey)[keyof typeof AppSortKey];

/**
 * <p>Configuration to run a processing job in a specified container image.</p>
 * @public
 */
export interface AppSpecification {
  /**
   * <p>The container image to be run by the processing job.</p>
   * @public
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a processing job.</p>
   * @public
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments for a container used to run a processing job.</p>
   * @public
   */
  ContainerArguments?: string[];
}

/**
 * @public
 * @enum
 */
export const ArtifactSourceIdType = {
  CUSTOM: "Custom",
  MD5_HASH: "MD5Hash",
  S3_ETAG: "S3ETag",
  S3_VERSION: "S3Version",
} as const;

/**
 * @public
 */
export type ArtifactSourceIdType = (typeof ArtifactSourceIdType)[keyof typeof ArtifactSourceIdType];

/**
 * <p>The ID and ID type of an artifact source.</p>
 * @public
 */
export interface ArtifactSourceType {
  /**
   * <p>The type of ID.</p>
   * @public
   */
  SourceIdType: ArtifactSourceIdType | undefined;

  /**
   * <p>The ID.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A structure describing the source of an artifact.</p>
 * @public
 */
export interface ArtifactSource {
  /**
   * <p>The URI of the source.</p>
   * @public
   */
  SourceUri: string | undefined;

  /**
   * <p>A list of source types.</p>
   * @public
   */
  SourceTypes?: ArtifactSourceType[];
}

/**
 * <p>Lists a summary of the properties of an artifact. An artifact represents a URI
 *         addressable object or data. Some examples are a dataset and a model.</p>
 * @public
 */
export interface ArtifactSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string;

  /**
   * <p>The name of the artifact.</p>
   * @public
   */
  ArtifactName?: string;

  /**
   * <p>The source of the artifact.</p>
   * @public
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   * @public
   */
  ArtifactType?: string;

  /**
   * <p>When the artifact was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the artifact was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface AssociateTrialComponentRequest {
  /**
   * <p>The name of the component to associated with the trial.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to associate with.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string;
}

/**
 * <p>The IAM Identity details associated with the user. These details are
 *       associated with model package groups, model packages and project entities only.</p>
 * @public
 */
export interface IamIdentity {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM identity.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the principal that assumes the IAM identity.</p>
   * @public
   */
  PrincipalId?: string;

  /**
   * <p>The person or application which assumes the IAM identity.</p>
   * @public
   */
  SourceIdentity?: string;
}

/**
 * <p>Information about the user who created or modified an experiment, trial, trial
 *       component, lineage group, project, or model card.</p>
 * @public
 */
export interface UserContext {
  /**
   * <p>The Amazon Resource Name (ARN) of the user's profile.</p>
   * @public
   */
  UserProfileArn?: string;

  /**
   * <p>The name of the user's profile.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The domain associated with the user.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The IAM Identity details associated with the user. These details are
   *       associated with model package groups, model packages, and project entities only.</p>
   * @public
   */
  IamIdentity?: IamIdentity;
}

/**
 * <p>Lists a summary of the properties of an association. An association is an entity that
 *         links other lineage or experiment entities. An example would be an association between a
 *         training job and a model.</p>
 * @public
 */
export interface AssociationSummary {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn?: string;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string;

  /**
   * <p>The destination type.</p>
   * @public
   */
  DestinationType?: string;

  /**
   * <p>The type of the association.</p>
   * @public
   */
  AssociationType?: AssociationEdgeType;

  /**
   * <p>The name of the source.</p>
   * @public
   */
  SourceName?: string;

  /**
   * <p>The name of the destination.</p>
   * @public
   */
  DestinationName?: string;

  /**
   * <p>When the association was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;
}

/**
 * <p>Configures the behavior of the client used by SageMaker to interact with the model
 *             container during asynchronous inference.</p>
 * @public
 */
export interface AsyncInferenceClientConfig {
  /**
   * <p>The maximum number of concurrent requests sent by the SageMaker client to the model
   *             container. If no value is provided, SageMaker chooses an optimal value.</p>
   * @public
   */
  MaxConcurrentInvocationsPerInstance?: number;
}

/**
 * @public
 * @enum
 */
export const AsyncNotificationTopicTypes = {
  ERROR_NOTIFICATION_TOPIC: "ERROR_NOTIFICATION_TOPIC",
  SUCCESS_NOTIFICATION_TOPIC: "SUCCESS_NOTIFICATION_TOPIC",
} as const;

/**
 * @public
 */
export type AsyncNotificationTopicTypes =
  (typeof AsyncNotificationTopicTypes)[keyof typeof AsyncNotificationTopicTypes];

/**
 * <p>Specifies the configuration for notifications of inference results for asynchronous
 *             inference.</p>
 * @public
 */
export interface AsyncInferenceNotificationConfig {
  /**
   * <p>Amazon SNS topic to post a notification to when inference completes successfully. If no
   *             topic is provided, no notification is sent on success.</p>
   * @public
   */
  SuccessTopic?: string;

  /**
   * <p>Amazon SNS topic to post a notification to when inference fails. If no topic is provided,
   *             no notification is sent on failure.</p>
   * @public
   */
  ErrorTopic?: string;

  /**
   * <p>The Amazon SNS topics where you want the inference response to be included.</p>
   *          <note>
   *             <p>The inference response is included only if the response size is less than or equal
   *                 to 128 KB.</p>
   *          </note>
   * @public
   */
  IncludeInferenceResponseIn?: AsyncNotificationTopicTypes[];
}

/**
 * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
 * @public
 */
export interface AsyncInferenceOutputConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker
   *             uses to encrypt the asynchronous inference output in Amazon S3.</p>
   *          <p></p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 location to upload inference responses to.</p>
   * @public
   */
  S3OutputPath?: string;

  /**
   * <p>Specifies the configuration for notifications of inference results for asynchronous
   *             inference.</p>
   * @public
   */
  NotificationConfig?: AsyncInferenceNotificationConfig;

  /**
   * <p>The Amazon S3 location to upload failure inference responses to.</p>
   * @public
   */
  S3FailurePath?: string;
}

/**
 * <p>Specifies configuration for how an endpoint performs asynchronous inference.</p>
 * @public
 */
export interface AsyncInferenceConfig {
  /**
   * <p>Configures the behavior of the client used by SageMaker to interact with the model
   *             container during asynchronous inference.</p>
   * @public
   */
  ClientConfig?: AsyncInferenceClientConfig;

  /**
   * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
   * @public
   */
  OutputConfig: AsyncInferenceOutputConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const AthenaResultCompressionType = {
  GZIP: "GZIP",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
} as const;

/**
 * @public
 */
export type AthenaResultCompressionType =
  (typeof AthenaResultCompressionType)[keyof typeof AthenaResultCompressionType];

/**
 * @public
 * @enum
 */
export const AthenaResultFormat = {
  AVRO: "AVRO",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
  TEXTFILE: "TEXTFILE",
} as const;

/**
 * @public
 */
export type AthenaResultFormat = (typeof AthenaResultFormat)[keyof typeof AthenaResultFormat];

/**
 * <p>Configuration for Athena Dataset Definition input.</p>
 * @public
 */
export interface AthenaDatasetDefinition {
  /**
   * <p>The name of the data catalog used in Athena query execution.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The name of the database used in the Athena query execution.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The SQL query statements, to be executed.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>The name of the workgroup in which the Athena query is being started.</p>
   * @public
   */
  WorkGroup?: string;

  /**
   * <p>The location in Amazon S3 where Athena query results are stored.</p>
   * @public
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data generated from
   *             an Athena query execution.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Athena query results.</p>
   * @public
   */
  OutputFormat: AthenaResultFormat | undefined;

  /**
   * <p>The compression used for Athena query results.</p>
   * @public
   */
  OutputCompression?: AthenaResultCompressionType;
}

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 * @enum
 */
export const AutoMLAlgorithm = {
  CATBOOST: "catboost",
  EXTRA_TREES: "extra-trees",
  FASTAI: "fastai",
  LIGHTGBM: "lightgbm",
  LINEAR_LEARNER: "linear-learner",
  MLP: "mlp",
  NN_TORCH: "nn-torch",
  RANDOMFOREST: "randomforest",
  XGBOOST: "xgboost",
} as const;

/**
 * @public
 */
export type AutoMLAlgorithm = (typeof AutoMLAlgorithm)[keyof typeof AutoMLAlgorithm];

/**
 * <p>The collection of algorithms run on a dataset for training the model candidates of an
 *          Autopilot job.</p>
 * @public
 */
export interface AutoMLAlgorithmConfig {
  /**
   * <p>The selection of algorithms run on a dataset to train the model candidates of an Autopilot
   *          job. </p>
   *          <note>
   *             <p>Selected algorithms must belong to the list corresponding to the training mode set in
   *                <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobConfig.html#sagemaker-Type-AutoMLJobConfig-Mode">AutoMLJobConfig.Mode</a> (<code>ENSEMBLING</code> or
   *                <code>HYPERPARAMETER_TUNING</code>). Choose a minimum of 1 algorithm. </p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>In <code>ENSEMBLING</code> mode:</p>
   *                <ul>
   *                   <li>
   *                      <p>"catboost"</p>
   *                   </li>
   *                   <li>
   *                      <p>"extra-trees"</p>
   *                   </li>
   *                   <li>
   *                      <p>"fastai"</p>
   *                   </li>
   *                   <li>
   *                      <p>"lightgbm"</p>
   *                   </li>
   *                   <li>
   *                      <p>"linear-learner"</p>
   *                   </li>
   *                   <li>
   *                      <p>"nn-torch"</p>
   *                   </li>
   *                   <li>
   *                      <p>"randomforest"</p>
   *                   </li>
   *                   <li>
   *                      <p>"xgboost"</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>In <code>HYPERPARAMETER_TUNING</code> mode:</p>
   *                <ul>
   *                   <li>
   *                      <p>"linear-learner"</p>
   *                   </li>
   *                   <li>
   *                      <p>"mlp"</p>
   *                   </li>
   *                   <li>
   *                      <p>"xgboost"</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  AutoMLAlgorithms: AutoMLAlgorithm[] | undefined;
}

/**
 * <p>The location of artifacts for an AutoML candidate job.</p>
 * @public
 */
export interface CandidateArtifactLocations {
  /**
   * <p>The Amazon S3 prefix to the explainability artifacts generated for the AutoML
   *          candidate.</p>
   * @public
   */
  Explainability: string | undefined;

  /**
   * <p>The Amazon S3 prefix to the model insight artifacts generated for the AutoML candidate.</p>
   * @public
   */
  ModelInsights?: string;

  /**
   * <p>The Amazon S3 prefix to the accuracy metrics and the inference results observed over the
   *          testing window. Available only for the time-series forecasting problem type.</p>
   * @public
   */
  BacktestResults?: string;
}

/**
 * @public
 * @enum
 */
export const AutoMLMetricEnum = {
  ACCURACY: "Accuracy",
  AUC: "AUC",
  AVERAGE_WEIGHTED_QUANTILE_LOSS: "AverageWeightedQuantileLoss",
  BALANCED_ACCURACY: "BalancedAccuracy",
  F1: "F1",
  F1_MACRO: "F1macro",
  MAE: "MAE",
  MAPE: "MAPE",
  MASE: "MASE",
  MSE: "MSE",
  PRECISION: "Precision",
  PRECISION_MACRO: "PrecisionMacro",
  R2: "R2",
  RECALL: "Recall",
  RECALL_MACRO: "RecallMacro",
  RMSE: "RMSE",
  WAPE: "WAPE",
} as const;

/**
 * @public
 */
export type AutoMLMetricEnum = (typeof AutoMLMetricEnum)[keyof typeof AutoMLMetricEnum];

/**
 * @public
 * @enum
 */
export const MetricSetSource = {
  TEST: "Test",
  TRAIN: "Train",
  VALIDATION: "Validation",
} as const;

/**
 * @public
 */
export type MetricSetSource = (typeof MetricSetSource)[keyof typeof MetricSetSource];

/**
 * @public
 * @enum
 */
export const AutoMLMetricExtendedEnum = {
  ACCURACY: "Accuracy",
  AUC: "AUC",
  AVERAGE_WEIGHTED_QUANTILE_LOSS: "AverageWeightedQuantileLoss",
  BALANCED_ACCURACY: "BalancedAccuracy",
  F1: "F1",
  F1_MACRO: "F1macro",
  INFERENCE_LATENCY: "InferenceLatency",
  LogLoss: "LogLoss",
  MAE: "MAE",
  MAPE: "MAPE",
  MASE: "MASE",
  MSE: "MSE",
  PERPLEXITY: "Perplexity",
  PRECISION: "Precision",
  PRECISION_MACRO: "PrecisionMacro",
  R2: "R2",
  RECALL: "Recall",
  RECALL_MACRO: "RecallMacro",
  RMSE: "RMSE",
  ROUGE1: "Rouge1",
  ROUGE2: "Rouge2",
  ROUGEL: "RougeL",
  ROUGEL_SUM: "RougeLSum",
  TRAINING_LOSS: "TrainingLoss",
  VALIDATION_LOSS: "ValidationLoss",
  WAPE: "WAPE",
} as const;

/**
 * @public
 */
export type AutoMLMetricExtendedEnum = (typeof AutoMLMetricExtendedEnum)[keyof typeof AutoMLMetricExtendedEnum];

/**
 * <p>Information about the metric for a candidate produced by an AutoML job.</p>
 * @public
 */
export interface MetricDatum {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: AutoMLMetricEnum;

  /**
   * <p>The name of the standard metric. </p>
   *          <note>
   *             <p>For definitions of the standard metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-metrics">
   *                   <code>Autopilot candidate metrics</code>
   *                </a>.</p>
   *          </note>
   * @public
   */
  StandardMetricName?: AutoMLMetricExtendedEnum;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number;

  /**
   * <p>The dataset split from which the AutoML job produced the metric.</p>
   * @public
   */
  Set?: MetricSetSource;
}

/**
 * <p>The properties of an AutoML candidate job.</p>
 * @public
 */
export interface CandidateProperties {
  /**
   * <p>The Amazon S3 prefix to the artifacts generated for an AutoML candidate.</p>
   * @public
   */
  CandidateArtifactLocations?: CandidateArtifactLocations;

  /**
   * <p>Information about the candidate metrics for an AutoML job.</p>
   * @public
   */
  CandidateMetrics?: MetricDatum[];
}

/**
 * @public
 * @enum
 */
export const CandidateStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type CandidateStatus = (typeof CandidateStatus)[keyof typeof CandidateStatus];

/**
 * @public
 * @enum
 */
export const CandidateStepType = {
  PROCESSING: "AWS::SageMaker::ProcessingJob",
  TRAINING: "AWS::SageMaker::TrainingJob",
  TRANSFORM: "AWS::SageMaker::TransformJob",
} as const;

/**
 * @public
 */
export type CandidateStepType = (typeof CandidateStepType)[keyof typeof CandidateStepType];

/**
 * <p>Information about the steps for a candidate and what step it is working on.</p>
 * @public
 */
export interface AutoMLCandidateStep {
  /**
   * <p>Whether the candidate is at the transform, training, or processing step.</p>
   * @public
   */
  CandidateStepType: CandidateStepType | undefined;

  /**
   * <p>The ARN for the candidate's step.</p>
   * @public
   */
  CandidateStepArn: string | undefined;

  /**
   * <p>The name for the candidate's step.</p>
   * @public
   */
  CandidateStepName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoMLJobObjectiveType = {
  MAXIMIZE: "Maximize",
  MINIMIZE: "Minimize",
} as const;

/**
 * @public
 */
export type AutoMLJobObjectiveType = (typeof AutoMLJobObjectiveType)[keyof typeof AutoMLJobObjectiveType];

/**
 * <p>The best candidate result from an AutoML training job.</p>
 * @public
 */
export interface FinalAutoMLJobObjectiveMetric {
  /**
   * <p>The type of metric with the best result.</p>
   * @public
   */
  Type?: AutoMLJobObjectiveType;

  /**
   * <p>The name of the metric with the best result. For a description of the possible objective
   *          metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html">AutoMLJobObjective$MetricName</a>.</p>
   * @public
   */
  MetricName: AutoMLMetricEnum | undefined;

  /**
   * <p>The value of the metric with the best result.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The name of the standard metric. For a description of the standard metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html#autopilot-metrics">Autopilot
   *             candidate metrics</a>.</p>
   * @public
   */
  StandardMetricName?: AutoMLMetricEnum;
}

/**
 * @public
 * @enum
 */
export const AutoMLProcessingUnit = {
  CPU: "CPU",
  GPU: "GPU",
} as const;

/**
 * @public
 */
export type AutoMLProcessingUnit = (typeof AutoMLProcessingUnit)[keyof typeof AutoMLProcessingUnit];

/**
 * <p>A list of container definitions that describe the different containers that make up an
 *          AutoML candidate. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html">
 *             ContainerDefinition</a>.</p>
 * @public
 */
export interface AutoMLContainerDefinition {
  /**
   * <p>The Amazon Elastic Container Registry (Amazon ECR) path of the container. For more
   *          information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html">
   *             ContainerDefinition</a>.</p>
   * @public
   */
  Image: string | undefined;

  /**
   * <p>The location of the model artifacts. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html">
   *             ContainerDefinition</a>.</p>
   * @public
   */
  ModelDataUrl: string | undefined;

  /**
   * <p>The environment variables to set in the container. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html">
   *             ContainerDefinition</a>.</p>
   * @public
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ObjectiveStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type ObjectiveStatus = (typeof ObjectiveStatus)[keyof typeof ObjectiveStatus];

/**
 * <p>Information about a candidate produced by an AutoML training job, including its status,
 *          steps, and other properties.</p>
 * @public
 */
export interface AutoMLCandidate {
  /**
   * <p>The name of the candidate.</p>
   * @public
   */
  CandidateName: string | undefined;

  /**
   * <p>The best candidate result from an AutoML training job.</p>
   * @public
   */
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;

  /**
   * <p>The objective's status.</p>
   * @public
   */
  ObjectiveStatus: ObjectiveStatus | undefined;

  /**
   * <p>Information about the candidate's steps.</p>
   * @public
   */
  CandidateSteps: AutoMLCandidateStep[] | undefined;

  /**
   * <p>The candidate's status.</p>
   * @public
   */
  CandidateStatus: CandidateStatus | undefined;

  /**
   * <p>Information about the recommended inference container definitions.</p>
   * @public
   */
  InferenceContainers?: AutoMLContainerDefinition[];

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The properties of an AutoML candidate job.</p>
   * @public
   */
  CandidateProperties?: CandidateProperties;

  /**
   * <p>The mapping of all supported processing unit (CPU, GPU, etc...) to inference container
   *          definitions for the candidate. This field is populated for the AutoML jobs V2 (for example,
   *          for jobs created by calling <code>CreateAutoMLJobV2</code>) related to image or text
   *          classification problem types only.</p>
   * @public
   */
  InferenceContainerDefinitions?: Partial<Record<AutoMLProcessingUnit, AutoMLContainerDefinition[]>>;
}

/**
 * <p>Stores the configuration information for how a candidate is generated (optional).</p>
 * @public
 */
export interface AutoMLCandidateGenerationConfig {
  /**
   * <p>A URL to the Amazon S3 data source containing selected features from the input data source to
   *          run an Autopilot job. You can input <code>FeatureAttributeNames</code> (optional) in JSON
   *          format as shown below: </p>
   *          <p>
   *             <code>\{ "FeatureAttributeNames":["col1", "col2", ...] \}</code>.</p>
   *          <p>You can also specify the data type of the feature (optional) in the format shown
   *          below:</p>
   *          <p>
   *             <code>\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}</code>
   *          </p>
   *          <note>
   *             <p>These column keys may not include the target column.</p>
   *          </note>
   *          <p>In ensembling mode, Autopilot only supports the following data types: <code>numeric</code>,
   *             <code>categorical</code>, <code>text</code>, and <code>datetime</code>. In HPO mode,
   *          Autopilot can support <code>numeric</code>, <code>categorical</code>, <code>text</code>,
   *             <code>datetime</code>, and <code>sequence</code>.</p>
   *          <p>If only <code>FeatureDataTypes</code> is provided, the column keys (<code>col1</code>,
   *             <code>col2</code>,..) should be a subset of the column names in the input data. </p>
   *          <p>If both <code>FeatureDataTypes</code> and <code>FeatureAttributeNames</code> are
   *          provided, then the column keys should be a subset of the column names provided in
   *             <code>FeatureAttributeNames</code>. </p>
   *          <p>The key name <code>FeatureAttributeNames</code> is fixed. The values listed in
   *             <code>["col1", "col2", ...]</code> are case sensitive and should be a list of strings
   *          containing unique values that are a subset of the column names in the input data. The list
   *          of columns provided must not include the target column.</p>
   * @public
   */
  FeatureSpecificationS3Uri?: string;

  /**
   * <p>Stores the configuration information for the selection of algorithms used to train the
   *          model candidates.</p>
   *          <p>The list of available algorithms to choose from depends on the training mode set in
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobConfig.html">
   *                <code>AutoMLJobConfig.Mode</code>
   *             </a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AlgorithmsConfig</code> should not be set in <code>AUTO</code> training
   *                mode.</p>
   *             </li>
   *             <li>
   *                <p>When <code>AlgorithmsConfig</code> is provided, one <code>AutoMLAlgorithms</code>
   *                attribute must be set and one only.</p>
   *                <p>If the list of algorithms provided as values for <code>AutoMLAlgorithms</code> is
   *                empty, <code>AutoMLCandidateGenerationConfig</code> uses the full set of algorithms
   *                for the given training mode.</p>
   *             </li>
   *             <li>
   *                <p>When <code>AlgorithmsConfig</code> is not provided,
   *                   <code>AutoMLCandidateGenerationConfig</code> uses the full set of algorithms for
   *                the given training mode.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of all algorithms per training mode, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html">
   *             AutoMLAlgorithmConfig</a>.</p>
   *          <p>For more information on each algorithm, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Algorithm support</a> section in Autopilot developer guide.</p>
   * @public
   */
  AlgorithmsConfig?: AutoMLAlgorithmConfig[];
}

/**
 * @public
 * @enum
 */
export const AutoMLChannelType = {
  TRAINING: "training",
  VALIDATION: "validation",
} as const;

/**
 * @public
 */
export type AutoMLChannelType = (typeof AutoMLChannelType)[keyof typeof AutoMLChannelType];

/**
 * @public
 * @enum
 */
export const AutoMLS3DataType = {
  AUGMENTED_MANIFEST_FILE: "AugmentedManifestFile",
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;

/**
 * @public
 */
export type AutoMLS3DataType = (typeof AutoMLS3DataType)[keyof typeof AutoMLS3DataType];

/**
 * <p>Describes the Amazon S3 data source.</p>
 * @public
 */
export interface AutoMLS3DataSource {
  /**
   * <p>The data type. </p>
   *          <ul>
   *             <li>
   *                <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name
   *                prefix. SageMaker uses all objects that match the specified key name prefix for model
   *                training.</p>
   *                <p>The <code>S3Prefix</code> should have the following format:</p>
   *                <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER-OR-FILE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *                that is a manifest file containing a list of object keys that you want SageMaker to use
   *                for model training.</p>
   *                <p>A <code>ManifestFile</code> should have the format shown below:</p>
   *                <p>
   *                   <code>[ \{"prefix":
   *                   "s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER/DOC-EXAMPLE-PREFIX/"\}, </code>
   *                </p>
   *                <p>
   *                   <code>"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-1",</code>
   *                </p>
   *                <p>
   *                   <code>"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-2",</code>
   *                </p>
   *                <p>
   *                   <code>... "DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-N" ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you choose <code>AugmentedManifestFile</code>, <code>S3Uri</code> identifies an
   *                object that is an augmented manifest file in JSON lines format. This file contains
   *                the data you want to use for model training. <code>AugmentedManifestFile</code> is
   *                available for V2 API jobs only (for example, for jobs created by calling
   *                   <code>CreateAutoMLJobV2</code>).</p>
   *                <p>Here is a minimal, single-record example of an
   *                <code>AugmentedManifestFile</code>:</p>
   *                <p>
   *                   <code>\{"source-ref":
   *                   "s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER/cats/cat.jpg",</code>
   *                </p>
   *                <p>
   *                   <code>"label-metadata": \{"class-name": "cat"</code> \}</p>
   *                <p>For more information on <code>AugmentedManifestFile</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/augmented-manifest.html">Provide
   *                   Dataset Metadata to Training Jobs with an Augmented Manifest File</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  S3DataType: AutoMLS3DataType | undefined;

  /**
   * <p>The URL to the Amazon S3 data source. The Uri refers to the Amazon S3 prefix or ManifestFile
   *          depending on the data type.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>The data source for the Autopilot job.</p>
 * @public
 */
export interface AutoMLDataSource {
  /**
   * <p>The Amazon S3 location of the input data.</p>
   * @public
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

/**
 * <p>A channel is a named input source that training algorithms can consume. The validation
 *          dataset size is limited to less than 2 GB. The training dataset size must be less than 100
 *          GB. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html"> Channel</a>.</p>
 *          <note>
 *             <p>A validation dataset must contain the same headers as the training dataset.</p>
 *          </note>
 *          <p></p>
 * @public
 */
export interface AutoMLChannel {
  /**
   * <p>The data source for an AutoML channel.</p>
   * @public
   */
  DataSource?: AutoMLDataSource;

  /**
   * <p>You can use <code>Gzip</code> or <code>None</code>. The default value is
   *             <code>None</code>.</p>
   * @public
   */
  CompressionType?: CompressionType;

  /**
   * <p>The name of the target variable in supervised learning, usually represented by
   *          'y'.</p>
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The content type of the data from the input source. You can use
   *             <code>text/csv;header=present</code> or <code>x-application/vnd.amazon+parquet</code>.
   *          The default value is <code>text/csv;header=present</code>.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>The channel type (optional) is an <code>enum</code> string. The default value is
   *             <code>training</code>. Channels for training and validation must share the same
   *             <code>ContentType</code> and <code>TargetAttributeName</code>. For information on
   *          specifying training and validation channel types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-data-sources-training-or-validation">How to specify training and validation datasets</a>.</p>
   * @public
   */
  ChannelType?: AutoMLChannelType;

  /**
   * <p>If specified, this column name indicates which column of the dataset should be treated
   *          as sample weights for use by the objective metric during the training, evaluation, and the
   *          selection of the best model. This column is not considered as a predictive feature. For
   *          more information on Autopilot metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">Metrics and
   *             validation</a>.</p>
   *          <p>Sample weights should be numeric, non-negative, with larger values indicating which rows
   *          are more important than others. Data points that have invalid or no weight value are
   *          excluded.</p>
   *          <p>Support for sample weights is available in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html">Ensembling</a>
   *          mode only.</p>
   * @public
   */
  SampleWeightAttributeName?: string;
}

/**
 * <p>This structure specifies how to split the data into train and validation
 *          datasets.</p>
 *          <p>The validation and training datasets must contain the same headers. For jobs created by
 *          calling <code>CreateAutoMLJob</code>, the validation dataset must be less than 2 GB in
 *          size.</p>
 * @public
 */
export interface AutoMLDataSplitConfig {
  /**
   * <p>The validation fraction (optional) is a float that specifies the portion of the training
   *          dataset to be used for validation. The default value is 0.2, and values must be greater
   *          than 0 and less than 1. We recommend setting this value to be less than 0.5.</p>
   * @public
   */
  ValidationFraction?: number;
}

/**
 * <p>The artifacts that are generated during an AutoML job.</p>
 * @public
 */
export interface AutoMLJobArtifacts {
  /**
   * <p>The URL of the notebook location.</p>
   * @public
   */
  CandidateDefinitionNotebookLocation?: string;

  /**
   * <p>The URL of the notebook location.</p>
   * @public
   */
  DataExplorationNotebookLocation?: string;
}

/**
 * <p>A channel is a named input source that training algorithms can consume. This channel is
 *          used for AutoML jobs V2 (jobs created by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html">CreateAutoMLJobV2</a>).</p>
 * @public
 */
export interface AutoMLJobChannel {
  /**
   * <p>The type of channel. Defines whether the data are used for training or validation. The
   *          default value is <code>training</code>. Channels for <code>training</code> and
   *             <code>validation</code> must share the same <code>ContentType</code>
   *          </p>
   *          <note>
   *             <p>The type of channel defaults to <code>training</code> for the time-series forecasting
   *             problem type.</p>
   *          </note>
   * @public
   */
  ChannelType?: AutoMLChannelType;

  /**
   * <p>The content type of the data from the input source. The following are the allowed
   *          content types for different problems:</p>
   *          <ul>
   *             <li>
   *                <p>For tabular problem types: <code>text/csv;header=present</code> or
   *                   <code>x-application/vnd.amazon+parquet</code>. The default value is
   *                   <code>text/csv;header=present</code>.</p>
   *             </li>
   *             <li>
   *                <p>For image classification: <code>image/png</code>, <code>image/jpeg</code>, or
   *                   <code>image/*</code>. The default value is <code>image/*</code>.</p>
   *             </li>
   *             <li>
   *                <p>For text classification: <code>text/csv;header=present</code> or
   *                   <code>x-application/vnd.amazon+parquet</code>. The default value is
   *                   <code>text/csv;header=present</code>.</p>
   *             </li>
   *             <li>
   *                <p>For time-series forecasting: <code>text/csv;header=present</code> or
   *                   <code>x-application/vnd.amazon+parquet</code>. The default value is
   *                   <code>text/csv;header=present</code>.</p>
   *             </li>
   *             <li>
   *                <p>For text generation (LLMs fine-tuning): <code>text/csv;header=present</code> or
   *                   <code>x-application/vnd.amazon+parquet</code>. The default value is
   *                   <code>text/csv;header=present</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType?: string;

  /**
   * <p>The allowed compression types depend on the input format and problem type. We allow the
   *          compression type <code>Gzip</code> for <code>S3Prefix</code> inputs on tabular data only.
   *          For all other inputs, the compression type should be <code>None</code>. If no compression
   *          type is provided, we default to <code>None</code>.</p>
   * @public
   */
  CompressionType?: CompressionType;

  /**
   * <p>The data source for an AutoML channel (Required).</p>
   * @public
   */
  DataSource?: AutoMLDataSource;
}

/**
 * <p>How long a job is allowed to run, or how many candidates a job is allowed to
 *          generate.</p>
 * @public
 */
export interface AutoMLJobCompletionCriteria {
  /**
   * <p>The maximum number of times a training job is allowed to run.</p>
   *          <p>For text and image classification, time-series forecasting, as well as text generation
   *          (LLMs fine-tuning) problem types, the supported value is 1. For tabular problem types, the
   *          maximum value is 750.</p>
   * @public
   */
  MaxCandidates?: number;

  /**
   * <p>The maximum time, in seconds, that each training job executed inside hyperparameter
   *          tuning is allowed to run as part of a hyperparameter tuning job. For more information, see
   *          the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StoppingCondition.html">StoppingCondition</a>
   *          used by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html">CreateHyperParameterTuningJob</a> action.</p>
   *          <p>For job V2s (jobs created by calling <code>CreateAutoMLJobV2</code>), this field
   *          controls the runtime of the job candidate.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TextClassificationJobConfig.html">TextGenerationJobConfig</a> problem types, the maximum time defaults to 72 hours
   *          (259200 seconds).</p>
   * @public
   */
  MaxRuntimePerTrainingJobInSeconds?: number;

  /**
   * <p>The maximum runtime, in seconds, an AutoML job has to complete.</p>
   *          <p>If an AutoML job exceeds the maximum runtime, the job is stopped automatically and its
   *          processing is ended gracefully. The AutoML job identifies the best model whose training was
   *          completed and marks it as the best-performing model. Any unfinished steps of the job, such
   *          as automatic one-click Autopilot model deployment, are not completed.</p>
   * @public
   */
  MaxAutoMLJobRuntimeInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const AutoMLMode = {
  AUTO: "AUTO",
  ENSEMBLING: "ENSEMBLING",
  HYPERPARAMETER_TUNING: "HYPERPARAMETER_TUNING",
} as const;

/**
 * @public
 */
export type AutoMLMode = (typeof AutoMLMode)[keyof typeof AutoMLMode];

/**
 * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
 *             have access to. You can control access to and from your resources by configuring a VPC.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The VPC security group IDs, in the form <code>sg-xxxxxxxx</code>. Specify the security
   *             groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or
   *             model. For information about the availability of specific instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html">Supported
   *                 Instance Types and Availability Zones</a>.</p>
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * <p>Security options.</p>
 * @public
 */
export interface AutoMLSecurityConfig {
  /**
   * <p>The key used to encrypt stored data.</p>
   * @public
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Whether to use traffic encryption between the container layers.</p>
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The VPC configuration.</p>
   * @public
   */
  VpcConfig?: VpcConfig;
}

/**
 * <p>A collection of settings used for an AutoML job.</p>
 * @public
 */
export interface AutoMLJobConfig {
  /**
   * <p>How long an AutoML job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The security configuration for traffic encryption or Amazon VPC settings.</p>
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig;

  /**
   * <p>The configuration for generating a candidate for an AutoML job (optional). </p>
   * @public
   */
  CandidateGenerationConfig?: AutoMLCandidateGenerationConfig;

  /**
   * <p>The configuration for splitting the input training dataset.</p>
   *          <p>Type: AutoMLDataSplitConfig</p>
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig;

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
   *          predictive capabilities of multiple models. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>ENSEMBLING</code> mode.</p>
   *          <p>The <code>HYPERPARAMETER_TUNING</code> (HPO) mode uses the best hyperparameters to train
   *          the best version of a model. HPO automatically selects an algorithm for the type of problem
   *          you want to solve. Then HPO finds the best hyperparameters according to your objective
   *          metric. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>HYPERPARAMETER_TUNING</code> mode.</p>
   * @public
   */
  Mode?: AutoMLMode;
}

/**
 * <p>Specifies a metric to minimize or maximize as the objective of an AutoML job.</p>
 * @public
 */
export interface AutoMLJobObjective {
  /**
   * <p>The name of the objective metric used to measure the predictive quality of a machine
   *          learning system. During training, the model's parameters are updated iteratively to
   *          optimize its performance based on the feedback provided by the objective metric when
   *          evaluating the model on the validation dataset.</p>
   *          <p>The list of available metrics supported by Autopilot and the default metric applied when you
   *          do not specify a metric name explicitly depend on the problem type.</p>
   *          <ul>
   *             <li>
   *                <p>For tabular problem types:</p>
   *                <ul>
   *                   <li>
   *                      <p>List of available metrics: </p>
   *                      <ul>
   *                         <li>
   *                            <p> Regression: <code>MAE</code>,
   *                               <code>MSE</code>, <code>R2</code>, <code>RMSE</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p> Binary classification: <code>Accuracy</code>, <code>AUC</code>,
   *                               <code>BalancedAccuracy</code>, <code>F1</code>,
   *                               <code>Precision</code>, <code>Recall</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p> Multiclass classification: <code>Accuracy</code>,
   *                               <code>BalancedAccuracy</code>, <code>F1macro</code>,
   *                               <code>PrecisionMacro</code>, <code>RecallMacro</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                      <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html#autopilot-metrics">Autopilot metrics for classification and regression</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Default objective metrics:</p>
   *                      <ul>
   *                         <li>
   *                            <p>Regression: <code>MSE</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>Binary classification: <code>F1</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>Multiclass classification: <code>Accuracy</code>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For image or text classification problem types:</p>
   *                <ul>
   *                   <li>
   *                      <p>List of available metrics: <code>Accuracy</code>
   *                      </p>
   *                      <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/text-classification-data-format-and-metric.html">Autopilot metrics for text and image classification</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Default objective metrics: <code>Accuracy</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For time-series forecasting problem types:</p>
   *                <ul>
   *                   <li>
   *                      <p>List of available metrics: <code>RMSE</code>, <code>wQL</code>,
   *                         <code>Average wQL</code>, <code>MASE</code>, <code>MAPE</code>,
   *                         <code>WAPE</code>
   *                      </p>
   *                      <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/timeseries-objective-metric.html">Autopilot metrics for
   *                         time-series forecasting</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Default objective metrics: <code>AverageWeightedQuantileLoss</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For text generation problem types (LLMs fine-tuning):
   *                   Fine-tuning language models in Autopilot does not
   *                   require setting the <code>AutoMLJobObjective</code> field. Autopilot fine-tunes LLMs
   *                   without requiring multiple candidates to be trained and evaluated.
   *                   Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a
   *                   default objective metric, the cross-entropy loss. After fine-tuning a language model,
   *                   you can evaluate the quality of its generated text using different metrics.
   *                   For a list of the available metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-metrics.html">Metrics for
   *                         fine-tuning LLMs in Autopilot</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricName: AutoMLMetricEnum | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoMLJobSecondaryStatus = {
  ANALYZING_DATA: "AnalyzingData",
  CANDIDATE_DEFINITIONS_GENERATED: "CandidateDefinitionsGenerated",
  COMPLETED: "Completed",
  DEPLOYING_MODEL: "DeployingModel",
  EXPLAINABILITY_ERROR: "ExplainabilityError",
  FAILED: "Failed",
  FEATURE_ENGINEERING: "FeatureEngineering",
  GENERATING_EXPLAINABILITY_REPORT: "GeneratingExplainabilityReport",
  GENERATING_MODEL_INSIGHTS_REPORT: "GeneratingModelInsightsReport",
  MAX_AUTO_ML_JOB_RUNTIME_REACHED: "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED: "MaxCandidatesReached",
  MODEL_DEPLOYMENT_ERROR: "ModelDeploymentError",
  MODEL_INSIGHTS_ERROR: "ModelInsightsError",
  MODEL_TUNING: "ModelTuning",
  PRE_TRAINING: "PreTraining",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  TRAINING_MODELS: "TrainingModels",
} as const;

/**
 * @public
 */
export type AutoMLJobSecondaryStatus = (typeof AutoMLJobSecondaryStatus)[keyof typeof AutoMLJobSecondaryStatus];

/**
 * @public
 * @enum
 */
export const AutoMLJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type AutoMLJobStatus = (typeof AutoMLJobStatus)[keyof typeof AutoMLJobStatus];

/**
 * <p>Metadata for an AutoML job step.</p>
 * @public
 */
export interface AutoMLJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>The reason for a partial failure of an AutoML job.</p>
 * @public
 */
export interface AutoMLPartialFailureReason {
  /**
   * <p>The message containing the reason for a partial failure of an AutoML job.</p>
   * @public
   */
  PartialFailureMessage?: string;
}

/**
 * <p>Provides a summary about an AutoML job.</p>
 * @public
 */
export interface AutoMLJobSummary {
  /**
   * <p>The name of the AutoML job you are requesting.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>The ARN of the AutoML job.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>The status of the AutoML job.</p>
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * <p>The secondary status of the AutoML job.</p>
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * <p>When the AutoML job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time of an AutoML job.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>When the AutoML job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The failure reason of an AutoML job.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The list of reasons for partial failures within an AutoML job.</p>
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];
}

/**
 * <p>The output data configuration.</p>
 * @public
 */
export interface AutoMLOutputDataConfig {
  /**
   * <p>The Key Management Service encryption key ID.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   * @public
   */
  S3OutputPath: string | undefined;
}

/**
 * <p>The collection of settings used by an AutoML job V2 for the image classification problem
 *          type.</p>
 * @public
 */
export interface ImageClassificationJobConfig {
  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

/**
 * <p>Stores the configuration information for how model candidates are generated using an
 *          AutoML job V2.</p>
 * @public
 */
export interface CandidateGenerationConfig {
  /**
   * <p>Stores the configuration information for the selection of algorithms used to train model
   *          candidates on tabular data.</p>
   *          <p>The list of available algorithms to choose from depends on the training mode set in
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TabularJobConfig.html">
   *                <code>TabularJobConfig.Mode</code>
   *             </a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AlgorithmsConfig</code> should not be set in <code>AUTO</code> training
   *                mode.</p>
   *             </li>
   *             <li>
   *                <p>When <code>AlgorithmsConfig</code> is provided, one <code>AutoMLAlgorithms</code>
   *                attribute must be set and one only.</p>
   *                <p>If the list of algorithms provided as values for <code>AutoMLAlgorithms</code> is
   *                empty, <code>CandidateGenerationConfig</code> uses the full set of algorithms for the
   *                given training mode.</p>
   *             </li>
   *             <li>
   *                <p>When <code>AlgorithmsConfig</code> is not provided,
   *                   <code>CandidateGenerationConfig</code> uses the full set of algorithms for the
   *                given training mode.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of all algorithms per problem type and training mode, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html">
   *             AutoMLAlgorithmConfig</a>.</p>
   *          <p>For more information on each algorithm, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Algorithm support</a> section in Autopilot developer guide.</p>
   * @public
   */
  AlgorithmsConfig?: AutoMLAlgorithmConfig[];
}

/**
 * @public
 * @enum
 */
export const ProblemType = {
  BINARY_CLASSIFICATION: "BinaryClassification",
  MULTICLASS_CLASSIFICATION: "MulticlassClassification",
  REGRESSION: "Regression",
} as const;

/**
 * @public
 */
export type ProblemType = (typeof ProblemType)[keyof typeof ProblemType];

/**
 * <p>The collection of settings used by an AutoML job V2 for the tabular problem type.</p>
 * @public
 */
export interface TabularJobConfig {
  /**
   * <p>The configuration information of how model candidates are generated.</p>
   * @public
   */
  CandidateGenerationConfig?: CandidateGenerationConfig;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>A URL to the Amazon S3 data source containing selected features from the input data source to
   *          run an Autopilot job V2. You can input <code>FeatureAttributeNames</code> (optional) in JSON
   *          format as shown below: </p>
   *          <p>
   *             <code>\{ "FeatureAttributeNames":["col1", "col2", ...] \}</code>.</p>
   *          <p>You can also specify the data type of the feature (optional) in the format shown
   *          below:</p>
   *          <p>
   *             <code>\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}</code>
   *          </p>
   *          <note>
   *             <p>These column keys may not include the target column.</p>
   *          </note>
   *          <p>In ensembling mode, Autopilot only supports the following data types: <code>numeric</code>,
   *             <code>categorical</code>, <code>text</code>, and <code>datetime</code>. In HPO mode,
   *          Autopilot can support <code>numeric</code>, <code>categorical</code>, <code>text</code>,
   *             <code>datetime</code>, and <code>sequence</code>.</p>
   *          <p>If only <code>FeatureDataTypes</code> is provided, the column keys (<code>col1</code>,
   *             <code>col2</code>,..) should be a subset of the column names in the input data. </p>
   *          <p>If both <code>FeatureDataTypes</code> and <code>FeatureAttributeNames</code> are
   *          provided, then the column keys should be a subset of the column names provided in
   *             <code>FeatureAttributeNames</code>. </p>
   *          <p>The key name <code>FeatureAttributeNames</code> is fixed. The values listed in
   *             <code>["col1", "col2", ...]</code> are case sensitive and should be a list of strings
   *          containing unique values that are a subset of the column names in the input data. The list
   *          of columns provided must not include the target column.</p>
   * @public
   */
  FeatureSpecificationS3Uri?: string;

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
   *          predictive capabilities of multiple models. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>ENSEMBLING</code> mode.</p>
   *          <p>The <code>HYPERPARAMETER_TUNING</code> (HPO) mode uses the best hyperparameters to train
   *          the best version of a model. HPO automatically selects an algorithm for the type of problem
   *          you want to solve. Then HPO finds the best hyperparameters according to your objective
   *          metric. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support">Autopilot algorithm support</a> for a list of algorithms supported by
   *             <code>HYPERPARAMETER_TUNING</code> mode.</p>
   * @public
   */
  Mode?: AutoMLMode;

  /**
   * <p>Generates possible candidates without training the models. A model candidate is a
   *          combination of data preprocessors, algorithms, and algorithm parameter settings.</p>
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>The type of supervised learning problem available for the model candidates of the AutoML
   *          job V2. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types">
   *             SageMaker Autopilot problem types</a>.</p>
   *          <note>
   *             <p>You must either specify the type of supervised learning problem in
   *                <code>ProblemType</code> and provide the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html#sagemaker-CreateAutoMLJobV2-request-AutoMLJobObjective">AutoMLJobObjective</a> metric, or none at all.</p>
   *          </note>
   * @public
   */
  ProblemType?: ProblemType;

  /**
   * <p>The name of the target variable in supervised learning, usually represented by
   *          'y'.</p>
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>If specified, this column name indicates which column of the dataset should be treated
   *          as sample weights for use by the objective metric during the training, evaluation, and the
   *          selection of the best model. This column is not considered as a predictive feature. For
   *          more information on Autopilot metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">Metrics and
   *             validation</a>.</p>
   *          <p>Sample weights should be numeric, non-negative, with larger values indicating which rows
   *          are more important than others. Data points that have invalid or no weight value are
   *          excluded.</p>
   *          <p>Support for sample weights is available in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html">Ensembling</a>
   *          mode only.</p>
   * @public
   */
  SampleWeightAttributeName?: string;
}

/**
 * <p>The collection of settings used by an AutoML job V2 for the text classification problem
 *          type.</p>
 * @public
 */
export interface TextClassificationJobConfig {
  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The name of the column used to provide the sentences to be classified. It should not be
   *          the same as the target column.</p>
   * @public
   */
  ContentColumn: string | undefined;

  /**
   * <p>The name of the column used to provide the class labels. It should not be same as the
   *          content column.</p>
   * @public
   */
  TargetLabelColumn: string | undefined;
}

/**
 * <p>The collection of settings used by an AutoML job V2 for the text generation problem
 *          type.</p>
 *          <note>
 *             <p>The text generation models that support fine-tuning in Autopilot are currently accessible
 *             exclusively in regions supported by Canvas. Refer to the documentation of Canvas for the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html">full list of its supported
 *                Regions</a>.</p>
 *          </note>
 * @public
 */
export interface TextGenerationJobConfig {
  /**
   * <p>How long a fine-tuning job is allowed to run. For <code>TextGenerationJobConfig</code>
   *          problem types, the <code>MaxRuntimePerTrainingJobInSeconds</code> attribute of
   *             <code>AutoMLJobCompletionCriteria</code> defaults to 72h (259200s).</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The name of the base model to fine-tune. Autopilot supports fine-tuning a variety of large
   *          language models. For information on the list of supported models, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-models.html#autopilot-llms-finetuning-supported-llms">Text generation models supporting fine-tuning in Autopilot</a>. If no
   *             <code>BaseModelName</code> is provided, the default model used is <b>Falcon7BInstruct</b>. </p>
   * @public
   */
  BaseModelName?: string;

  /**
   * <p>The hyperparameters used to configure and optimize the learning process of the base
   *          model. You can set any combination of the following hyperparameters for all base models.
   *          For more information on each supported hyperparameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-set-hyperparameters.html">Optimize
   *             the learning process of your text generation models with hyperparameters</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"epochCount"</code>: The number of times the model goes through the entire
   *                training dataset. Its value should be a string containing an integer value within the
   *                range of "1" to "10".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"batchSize"</code>: The number of data samples used in each iteration of
   *                training. Its value should be a string containing an integer value within the range
   *                of "1" to "64".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"learningRate"</code>: The step size at which a model's parameters are
   *                updated during training. Its value should be a string containing a floating-point
   *                value within the range of "0" to "1".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"learningRateWarmupSteps"</code>: The number of training steps during which
   *                the learning rate gradually increases before reaching its target or maximum value.
   *                Its value should be a string containing an integer value within the range of "0" to
   *                "250".</p>
   *             </li>
   *          </ul>
   *          <p>Here is an example where all four hyperparameters are configured.</p>
   *          <p>
   *             <code>\{ "epochCount":"5", "learningRate":"0.5", "batchSize": "32",
   *             "learningRateWarmupSteps": "10" \}</code>
   *          </p>
   * @public
   */
  TextGenerationHyperParameters?: Record<string, string>;

  /**
   * <p>The access configuration file to control access to the ML model. You can explicitly accept the model
   *          end-user license agreement (EULA) within the <code>ModelAccessConfig</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If you are a Jumpstart user, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula">End-user license agreements</a> section for more details on accepting the EULA.</p>
   *             </li>
   *             <li>
   *                <p>If you are an AutoML user, see the  <i>Optional Parameters</i> section of
   *                <i>Create an AutoML job to fine-tune text generation models using the
   *                   API</i> for details on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params">How to set the EULA acceptance when fine-tuning a model using the AutoML
   *                   API</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelAccessConfig?: ModelAccessConfig;
}

/**
 * <p>Stores the holiday featurization attributes applicable to each item of time-series
 *          datasets during the training of a forecasting model. This allows the model to identify
 *          patterns associated with specific holidays.</p>
 * @public
 */
export interface HolidayConfigAttributes {
  /**
   * <p>The country code for the holiday calendar.</p>
   *          <p>For the list of public holiday calendars supported by AutoML job V2, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-timeseries-forecasting-holiday-calendars.html#holiday-country-codes">Country Codes</a>. Use the country code corresponding to the country of your
   *          choice.</p>
   * @public
   */
  CountryCode?: string;
}

/**
 * <p>The collection of components that defines the time-series.</p>
 * @public
 */
export interface TimeSeriesConfig {
  /**
   * <p>The name of the column representing the target variable that you want to predict for
   *          each item in your dataset. The data type of the target variable must be numerical.</p>
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The name of the column indicating a point in time at which the target value of a given
   *          item is recorded.</p>
   * @public
   */
  TimestampAttributeName: string | undefined;

  /**
   * <p>The name of the column that represents the set of item identifiers for which you want to
   *          predict the target value.</p>
   * @public
   */
  ItemIdentifierAttributeName: string | undefined;

  /**
   * <p>A set of columns names that can be grouped with the item identifier column to create a
   *          composite key for which a target value is predicted.</p>
   * @public
   */
  GroupingAttributeNames?: string[];
}

/**
 * @public
 * @enum
 */
export const FillingType = {
  Backfill: "backfill",
  BackfillValue: "backfill_value",
  Frontfill: "frontfill",
  FrontfillValue: "frontfill_value",
  Futurefill: "futurefill",
  FuturefillValue: "futurefill_value",
  Middlefill: "middlefill",
  MiddlefillValue: "middlefill_value",
} as const;

/**
 * @public
 */
export type FillingType = (typeof FillingType)[keyof typeof FillingType];

/**
 * <p>Transformations allowed on the dataset. Supported transformations are
 *             <code>Filling</code> and <code>Aggregation</code>. <code>Filling</code> specifies how to
 *          add values to missing values in the dataset. <code>Aggregation</code> defines how to
 *          aggregate data that does not align with forecast frequency.</p>
 * @public
 */
export interface TimeSeriesTransformations {
  /**
   * <p>A key value pair defining the filling method for a column, where the key is the column
   *          name and the value is an object which defines the filling logic. You can specify multiple
   *          filling methods for a single column.</p>
   *          <p>The supported filling methods and their corresponding options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>frontfill</code>: <code>none</code> (Supported only for target
   *                column)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <code>zero</code>, <code>value</code>,
   *                   <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <code>zero</code>, <code>value</code>, <code>median</code>,
   *                   <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>futurefill</code>: <code>zero</code>, <code>value</code>,
   *                   <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To set a filling method to a specific value, set the fill parameter to the chosen
   *          filling method value (for example <code>"backfill" : "value"</code>), and define the
   *          filling value in an additional parameter prefixed with "_value". For example, to set
   *             <code>backfill</code> to a value of <code>2</code>, you must include two parameters:
   *             <code>"backfill": "value"</code> and <code>"backfill_value":"2"</code>.</p>
   * @public
   */
  Filling?: Record<string, Partial<Record<FillingType, string>>>;

  /**
   * <p>A key value pair defining the aggregation method for a column, where the key is the
   *          column name and the value is the aggregation method.</p>
   *          <p>The supported aggregation methods are <code>sum</code> (default), <code>avg</code>,
   *             <code>first</code>, <code>min</code>, <code>max</code>.</p>
   *          <note>
   *             <p>Aggregation is only supported for the target column.</p>
   *          </note>
   * @public
   */
  Aggregation?: Record<string, AggregationTransformationValue>;
}

/**
 * <p>The collection of settings used by an AutoML job V2 for the time-series forecasting
 *          problem type.</p>
 * @public
 */
export interface TimeSeriesForecastingJobConfig {
  /**
   * <p>A URL to the Amazon S3 data source containing additional selected features that complement
   *          the target, itemID, timestamp, and grouped columns set in <code>TimeSeriesConfig</code>.
   *          When not provided, the AutoML job V2 includes all the columns from the original dataset
   *          that are not already declared in <code>TimeSeriesConfig</code>. If provided, the AutoML job
   *          V2 only considers these additional columns as a complement to the ones declared in
   *             <code>TimeSeriesConfig</code>.</p>
   *          <p>You can input <code>FeatureAttributeNames</code> (optional) in JSON format as shown
   *          below: </p>
   *          <p>
   *             <code>\{ "FeatureAttributeNames":["col1", "col2", ...] \}</code>.</p>
   *          <p>You can also specify the data type of the feature (optional) in the format shown
   *          below:</p>
   *          <p>
   *             <code>\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}</code>
   *          </p>
   *          <p>Autopilot supports the following data types: <code>numeric</code>, <code>categorical</code>,
   *             <code>text</code>, and <code>datetime</code>.</p>
   *          <note>
   *             <p>These column keys must not include any column set in
   *             <code>TimeSeriesConfig</code>.</p>
   *          </note>
   * @public
   */
  FeatureSpecificationS3Uri?: string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H
   *          (Hour), and min (Minute). For example, <code>1D</code> indicates every day and
   *             <code>15min</code> indicates every 15 minutes. The value of a frequency must not overlap
   *          with the next larger frequency. For example, you must use a frequency of <code>1H</code>
   *          instead of <code>60min</code>.</p>
   *          <p>The valid values for each frequency are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Minute - 1-59</p>
   *             </li>
   *             <li>
   *                <p>Hour - 1-23</p>
   *             </li>
   *             <li>
   *                <p>Day - 1-6</p>
   *             </li>
   *             <li>
   *                <p>Week - 1-4</p>
   *             </li>
   *             <li>
   *                <p>Month - 1-11</p>
   *             </li>
   *             <li>
   *                <p>Year - 1</p>
   *             </li>
   *          </ul>
   * @public
   */
  ForecastFrequency: string | undefined;

  /**
   * <p>The number of time-steps that the model predicts. The forecast horizon is also called
   *          the prediction length. The maximum forecast horizon is the lesser of 500 time-steps or 1/4
   *          of the time-steps in the dataset.</p>
   * @public
   */
  ForecastHorizon: number | undefined;

  /**
   * <p>The quantiles used to train the model for forecasts at a specified quantile. You can
   *          specify quantiles from <code>0.01</code> (p1) to <code>0.99</code> (p99), by increments of
   *          0.01 or higher. Up to five forecast quantiles can be specified. When
   *             <code>ForecastQuantiles</code> is not provided, the AutoML job uses the quantiles p10,
   *          p50, and p90 as default.</p>
   * @public
   */
  ForecastQuantiles?: string[];

  /**
   * <p>The transformations modifying specific attributes of the time-series, such as filling
   *          strategies for missing values.</p>
   * @public
   */
  Transformations?: TimeSeriesTransformations;

  /**
   * <p>The collection of components that defines the time-series.</p>
   * @public
   */
  TimeSeriesConfig: TimeSeriesConfig | undefined;

  /**
   * <p>The collection of holiday featurization attributes used to incorporate national holiday
   *          information into your forecasting model.</p>
   * @public
   */
  HolidayConfig?: HolidayConfigAttributes[];
}

/**
 * <p>A collection of settings specific to the problem type used to configure an AutoML job V2.
 *          There must be one and only one config of the following type.</p>
 * @public
 */
export type AutoMLProblemTypeConfig =
  | AutoMLProblemTypeConfig.ImageClassificationJobConfigMember
  | AutoMLProblemTypeConfig.TabularJobConfigMember
  | AutoMLProblemTypeConfig.TextClassificationJobConfigMember
  | AutoMLProblemTypeConfig.TextGenerationJobConfigMember
  | AutoMLProblemTypeConfig.TimeSeriesForecastingJobConfigMember
  | AutoMLProblemTypeConfig.$UnknownMember;

/**
 * @public
 */
export namespace AutoMLProblemTypeConfig {
  /**
   * <p>Settings used to configure an AutoML job V2 for the image classification problem
   *          type.</p>
   * @public
   */
  export interface ImageClassificationJobConfigMember {
    ImageClassificationJobConfig: ImageClassificationJobConfig;
    TextClassificationJobConfig?: never;
    TimeSeriesForecastingJobConfig?: never;
    TabularJobConfig?: never;
    TextGenerationJobConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Settings used to configure an AutoML job V2 for the text classification problem
   *          type.</p>
   * @public
   */
  export interface TextClassificationJobConfigMember {
    ImageClassificationJobConfig?: never;
    TextClassificationJobConfig: TextClassificationJobConfig;
    TimeSeriesForecastingJobConfig?: never;
    TabularJobConfig?: never;
    TextGenerationJobConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Settings used to configure an AutoML job V2 for the time-series forecasting problem
   *          type.</p>
   * @public
   */
  export interface TimeSeriesForecastingJobConfigMember {
    ImageClassificationJobConfig?: never;
    TextClassificationJobConfig?: never;
    TimeSeriesForecastingJobConfig: TimeSeriesForecastingJobConfig;
    TabularJobConfig?: never;
    TextGenerationJobConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Settings used to configure an AutoML job V2 for the tabular problem type (regression,
   *          classification).</p>
   * @public
   */
  export interface TabularJobConfigMember {
    ImageClassificationJobConfig?: never;
    TextClassificationJobConfig?: never;
    TimeSeriesForecastingJobConfig?: never;
    TabularJobConfig: TabularJobConfig;
    TextGenerationJobConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Settings used to configure an AutoML job V2 for the text generation (LLMs fine-tuning)
   *          problem type.</p>
   *          <note>
   *             <p>The text generation models that support fine-tuning in Autopilot are currently accessible
   *             exclusively in regions supported by Canvas. Refer to the documentation of Canvas for the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html">full list of its supported
   *                Regions</a>.</p>
   *          </note>
   * @public
   */
  export interface TextGenerationJobConfigMember {
    ImageClassificationJobConfig?: never;
    TextClassificationJobConfig?: never;
    TimeSeriesForecastingJobConfig?: never;
    TabularJobConfig?: never;
    TextGenerationJobConfig: TextGenerationJobConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ImageClassificationJobConfig?: never;
    TextClassificationJobConfig?: never;
    TimeSeriesForecastingJobConfig?: never;
    TabularJobConfig?: never;
    TextGenerationJobConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ImageClassificationJobConfig: (value: ImageClassificationJobConfig) => T;
    TextClassificationJobConfig: (value: TextClassificationJobConfig) => T;
    TimeSeriesForecastingJobConfig: (value: TimeSeriesForecastingJobConfig) => T;
    TabularJobConfig: (value: TabularJobConfig) => T;
    TextGenerationJobConfig: (value: TextGenerationJobConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutoMLProblemTypeConfig, visitor: Visitor<T>): T => {
    if (value.ImageClassificationJobConfig !== undefined)
      return visitor.ImageClassificationJobConfig(value.ImageClassificationJobConfig);
    if (value.TextClassificationJobConfig !== undefined)
      return visitor.TextClassificationJobConfig(value.TextClassificationJobConfig);
    if (value.TimeSeriesForecastingJobConfig !== undefined)
      return visitor.TimeSeriesForecastingJobConfig(value.TimeSeriesForecastingJobConfig);
    if (value.TabularJobConfig !== undefined) return visitor.TabularJobConfig(value.TabularJobConfig);
    if (value.TextGenerationJobConfig !== undefined)
      return visitor.TextGenerationJobConfig(value.TextGenerationJobConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AutoMLProblemTypeConfigName = {
  IMAGE_CLASSIFICATION: "ImageClassification",
  TABULAR: "Tabular",
  TEXT_CLASSIFICATION: "TextClassification",
  TEXT_GENERATION: "TextGeneration",
  TIMESERIES_FORECASTING: "TimeSeriesForecasting",
} as const;

/**
 * @public
 */
export type AutoMLProblemTypeConfigName =
  (typeof AutoMLProblemTypeConfigName)[keyof typeof AutoMLProblemTypeConfigName];

/**
 * <p>The resolved attributes specific to the tabular problem type.</p>
 * @public
 */
export interface TabularResolvedAttributes {
  /**
   * <p>The type of supervised learning problem available for the model candidates of the AutoML
   *          job V2 (Binary Classification, Multiclass Classification, Regression). For more
   *          information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types">
   *             SageMaker Autopilot problem types</a>.</p>
   * @public
   */
  ProblemType?: ProblemType;
}

/**
 * <p>The resolved attributes specific to the text generation problem type.</p>
 * @public
 */
export interface TextGenerationResolvedAttributes {
  /**
   * <p>The name of the base model to fine-tune.</p>
   * @public
   */
  BaseModelName?: string;
}

/**
 * <p>Stores resolved attributes specific to the problem type of an AutoML job V2.</p>
 * @public
 */
export type AutoMLProblemTypeResolvedAttributes =
  | AutoMLProblemTypeResolvedAttributes.TabularResolvedAttributesMember
  | AutoMLProblemTypeResolvedAttributes.TextGenerationResolvedAttributesMember
  | AutoMLProblemTypeResolvedAttributes.$UnknownMember;

/**
 * @public
 */
export namespace AutoMLProblemTypeResolvedAttributes {
  /**
   * <p>The resolved attributes for the tabular problem type.</p>
   * @public
   */
  export interface TabularResolvedAttributesMember {
    TabularResolvedAttributes: TabularResolvedAttributes;
    TextGenerationResolvedAttributes?: never;
    $unknown?: never;
  }

  /**
   * <p>The resolved attributes for the text generation problem type.</p>
   * @public
   */
  export interface TextGenerationResolvedAttributesMember {
    TabularResolvedAttributes?: never;
    TextGenerationResolvedAttributes: TextGenerationResolvedAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TabularResolvedAttributes?: never;
    TextGenerationResolvedAttributes?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TabularResolvedAttributes: (value: TabularResolvedAttributes) => T;
    TextGenerationResolvedAttributes: (value: TextGenerationResolvedAttributes) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutoMLProblemTypeResolvedAttributes, visitor: Visitor<T>): T => {
    if (value.TabularResolvedAttributes !== undefined)
      return visitor.TabularResolvedAttributes(value.TabularResolvedAttributes);
    if (value.TextGenerationResolvedAttributes !== undefined)
      return visitor.TextGenerationResolvedAttributes(value.TextGenerationResolvedAttributes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The resolved attributes used to configure an AutoML job V2.</p>
 * @public
 */
export interface AutoMLResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of an AutoML job.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>Defines the resolved attributes specific to a problem type.</p>
   * @public
   */
  AutoMLProblemTypeResolvedAttributes?: AutoMLProblemTypeResolvedAttributes;
}

/**
 * @public
 * @enum
 */
export const AutoMLSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type AutoMLSortBy = (typeof AutoMLSortBy)[keyof typeof AutoMLSortBy];

/**
 * @public
 * @enum
 */
export const AutoMLSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type AutoMLSortOrder = (typeof AutoMLSortOrder)[keyof typeof AutoMLSortOrder];

/**
 * <p>The name and an example value of the hyperparameter that you want to use in Autotune.
 *             If Automatic model tuning (AMT) determines that your hyperparameter is eligible for
 *             Autotune, an optimal hyperparameter range is selected for you.</p>
 * @public
 */
export interface AutoParameter {
  /**
   * <p>The name of the hyperparameter to optimize using Autotune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An example value of the hyperparameter to optimize using Autotune.</p>
   * @public
   */
  ValueHint: string | undefined;
}

/**
 * <p>Automatic rollback configuration for handling endpoint deployment failures and
 *             recovery.</p>
 * @public
 */
export interface AutoRollbackConfig {
  /**
   * <p>List of CloudWatch alarms in your account that are configured to monitor metrics on an
   *             endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the
   *             deployment.</p>
   * @public
   */
  Alarms?: Alarm[];
}

/**
 * @public
 * @enum
 */
export const AutotuneMode = {
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type AutotuneMode = (typeof AutotuneMode)[keyof typeof AutotuneMode];

/**
 * <p>A flag to indicate if you want to use Autotune to automatically find optimal values
 *             for the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-ParameterRanges">ParameterRanges</a>: The names and ranges of parameters that a
 *                     hyperparameter tuning job can optimize.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>: The maximum resources that can be used for a
 *                     training job. These resources include the maximum number of training jobs, the
 *                     maximum runtime of a tuning job, and the maximum number of training jobs to run
 *                     at the same time.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-TrainingJobEarlyStoppingType">TrainingJobEarlyStoppingType</a>: A flag that specifies whether or not
 *                     to use early stopping for training jobs launched by a hyperparameter tuning
 *                     job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-RetryStrategy">RetryStrategy</a>: The number of times to retry a training job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">Strategy</a>: Specifies how hyperparameter tuning chooses the
 *                     combinations of hyperparameter values to use for the training jobs that it
 *                     launches.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ConvergenceDetected.html">ConvergenceDetected</a>: A flag to indicate that Automatic model tuning
 *                     (AMT) has detected model convergence.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Autotune {
  /**
   * <p>Set <code>Mode</code> to <code>Enabled</code> if you want to use Autotune.</p>
   * @public
   */
  Mode: AutotuneMode | undefined;
}

/**
 * @public
 * @enum
 */
export const AwsManagedHumanLoopRequestSource = {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3: "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1: "AWS/Textract/AnalyzeDocument/Forms/V1",
} as const;

/**
 * @public
 */
export type AwsManagedHumanLoopRequestSource =
  (typeof AwsManagedHumanLoopRequestSource)[keyof typeof AwsManagedHumanLoopRequestSource];

/**
 * <p>Configuration to control how SageMaker captures inference data for batch transform jobs.</p>
 * @public
 */
export interface BatchDataCaptureConfig {
  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   * @public
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
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>Flag that indicates whether to append inference id to the output.</p>
   * @public
   */
  GenerateInferenceId?: boolean;
}

/**
 * @public
 */
export interface BatchDescribeModelPackageInput {
  /**
   * <p>The list of Amazon Resource Name (ARN) of the model package groups.</p>
   * @public
   */
  ModelPackageArnList: string[] | undefined;
}

/**
 * <p>The error code and error description associated with the resource.</p>
 * @public
 */
export interface BatchDescribeModelPackageError {
  /**
   * <p></p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ErrorResponse: string | undefined;
}

/**
 * <p>Defines how to perform inference generation after a training job is run.</p>
 * @public
 */
export interface InferenceSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   * @public
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an
   *             endpoint can be deployed.</p>
   *          <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   * @public
   */
  SupportedTransformInstanceTypes?: TransformInstanceType[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   *          <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   * @public
   */
  SupportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceType[];

  /**
   * <p>The supported MIME types for the input data.</p>
   * @public
   */
  SupportedContentTypes?: string[];

  /**
   * <p>The supported MIME types for the output data.</p>
   * @public
   */
  SupportedResponseMIMETypes?: string[];
}

/**
 * @public
 * @enum
 */
export const ModelApprovalStatus = {
  APPROVED: "Approved",
  PENDING_MANUAL_APPROVAL: "PendingManualApproval",
  REJECTED: "Rejected",
} as const;

/**
 * @public
 */
export type ModelApprovalStatus = (typeof ModelApprovalStatus)[keyof typeof ModelApprovalStatus];

/**
 * @public
 * @enum
 */
export const ModelPackageStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type ModelPackageStatus = (typeof ModelPackageStatus)[keyof typeof ModelPackageStatus];

/**
 * <p>Provides summary information about the model package.</p>
 * @public
 */
export interface BatchDescribeModelPackageSummary {
  /**
   * <p>The group name for the model package</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The version number of a versioned model.</p>
   * @public
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The description of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string;

  /**
   * <p>The creation time of the mortgage package summary.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   * @public
   */
  InferenceSpecification: InferenceSpecification | undefined;

  /**
   * <p>The status of the mortgage package.</p>
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * <p>The approval status of the model.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;
}

/**
 * @public
 */
export interface BatchDescribeModelPackageOutput {
  /**
   * <p>The summaries for the model package versions</p>
   * @public
   */
  ModelPackageSummaries?: Record<string, BatchDescribeModelPackageSummary>;

  /**
   * <p>A map of the resource and BatchDescribeModelPackageError objects
   *             reporting the error associated with describing the model package.</p>
   * @public
   */
  BatchDescribeModelPackageErrorMap?: Record<string, BatchDescribeModelPackageError>;
}

/**
 * <p>Represents the CSV dataset format used when running a monitoring job.</p>
 * @public
 */
export interface MonitoringCsvDatasetFormat {
  /**
   * <p>Indicates if the CSV data has a header.</p>
   * @public
   */
  Header?: boolean;
}

/**
 * <p>Represents the JSON dataset format used when running a monitoring job.</p>
 * @public
 */
export interface MonitoringJsonDatasetFormat {
  /**
   * <p>Indicates if the file should be read as a JSON object per line. </p>
   * @public
   */
  Line?: boolean;
}

/**
 * <p>Represents the Parquet dataset format used when running a monitoring job.</p>
 * @public
 */
export interface MonitoringParquetDatasetFormat {}

/**
 * <p>Represents the dataset format used when running a monitoring job.</p>
 * @public
 */
export interface MonitoringDatasetFormat {
  /**
   * <p>The CSV dataset used in the monitoring job.</p>
   * @public
   */
  Csv?: MonitoringCsvDatasetFormat;

  /**
   * <p>The JSON dataset used in the monitoring job</p>
   * @public
   */
  Json?: MonitoringJsonDatasetFormat;

  /**
   * <p>The Parquet dataset used in the monitoring job</p>
   * @public
   */
  Parquet?: MonitoringParquetDatasetFormat;
}

/**
 * @public
 * @enum
 */
export const ProcessingS3DataDistributionType = {
  FULLYREPLICATED: "FullyReplicated",
  SHARDEDBYS3KEY: "ShardedByS3Key",
} as const;

/**
 * @public
 */
export type ProcessingS3DataDistributionType =
  (typeof ProcessingS3DataDistributionType)[keyof typeof ProcessingS3DataDistributionType];

/**
 * @public
 * @enum
 */
export const ProcessingS3InputMode = {
  FILE: "File",
  PIPE: "Pipe",
} as const;

/**
 * @public
 */
export type ProcessingS3InputMode = (typeof ProcessingS3InputMode)[keyof typeof ProcessingS3InputMode];

/**
 * <p>Input object for the batch transform job.</p>
 * @public
 */
export interface BatchTransformInput {
  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   * @public
   */
  DataCapturedDestinationS3Uri: string | undefined;

  /**
   * <p>The dataset format for your batch transform job.</p>
   * @public
   */
  DatasetFormat: MonitoringDatasetFormat | undefined;

  /**
   * <p>Path to the filesystem where the batch transform data is available to the container.</p>
   * @public
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether the <code>Pipe</code> or <code>File</code> is used as the input mode for
   *             transferring data for the monitoring job. <code>Pipe</code> mode is recommended for large
   *             datasets. <code>File</code> mode is useful for small files that fit in memory. Defaults to
   *             <code>File</code>.</p>
   * @public
   */
  S3InputMode?: ProcessingS3InputMode;

  /**
   * <p>Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
   *             Defaults to <code>FullyReplicated</code>
   *          </p>
   * @public
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType;

  /**
   * <p>The attributes of the input data that are the input features.</p>
   * @public
   */
  FeaturesAttribute?: string;

  /**
   * <p>The attribute of the input data that represents the ground truth label.</p>
   * @public
   */
  InferenceAttribute?: string;

  /**
   * <p>In a classification problem, the attribute that represents the class probability.</p>
   * @public
   */
  ProbabilityAttribute?: string;

  /**
   * <p>The threshold for the class probability to be evaluated as a positive result.</p>
   * @public
   */
  ProbabilityThresholdAttribute?: number;

  /**
   * <p>If specified, monitoring jobs substract this time from the start time. For information
   *             about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *                 Quality Monitoring Jobs</a>.</p>
   * @public
   */
  StartTimeOffset?: string;

  /**
   * <p>If specified, monitoring jobs subtract this time from the end time. For information
   *             about using offsets for scheduling monitoring jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html">Schedule Model
   *                 Quality Monitoring Jobs</a>.</p>
   * @public
   */
  EndTimeOffset?: string;

  /**
   * <p>The attributes of the input data to exclude from the analysis.</p>
   * @public
   */
  ExcludeFeaturesAttribute?: string;
}

/**
 * <p>A structure that keeps track of which training jobs launched by your hyperparameter
 *             tuning job are not improving model performance as evaluated against an objective
 *             function.</p>
 * @public
 */
export interface BestObjectiveNotImproving {
  /**
   * <p>The number of training jobs that have failed to improve model performance by 1% or
   *             greater over prior training jobs as evaluated against an objective function.</p>
   * @public
   */
  MaxNumberOfTrainingJobsNotImproving?: number;
}

/**
 * <p>Details about the metrics source.</p>
 * @public
 */
export interface MetricsSource {
  /**
   * <p>The metric source content type.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The hash key used for the metrics source.</p>
   * @public
   */
  ContentDigest?: string;

  /**
   * <p>The S3 URI for the metrics source.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Contains bias metrics for a model.</p>
 * @public
 */
export interface Bias {
  /**
   * <p>The bias report for a model</p>
   * @public
   */
  Report?: MetricsSource;

  /**
   * <p>The pre-training bias report for a model.</p>
   * @public
   */
  PreTrainingReport?: MetricsSource;

  /**
   * <p>The post-training bias report for a model.</p>
   * @public
   */
  PostTrainingReport?: MetricsSource;
}

/**
 * @public
 * @enum
 */
export const CapacitySizeType = {
  CAPACITY_PERCENT: "CAPACITY_PERCENT",
  INSTANCE_COUNT: "INSTANCE_COUNT",
} as const;

/**
 * @public
 */
export type CapacitySizeType = (typeof CapacitySizeType)[keyof typeof CapacitySizeType];

/**
 * <p>Specifies the type and size of the endpoint capacity to activate for a blue/green
 *             deployment, a rolling deployment, or a rollback strategy. You can specify your batches
 *             as either instance count or the overall percentage or your fleet.</p>
 *          <p>For a rollback strategy, if you don't specify the fields in this object, or if you set
 *             the <code>Value</code> to 100%, then SageMaker uses a blue/green rollback strategy and rolls
 *             all traffic back to the blue fleet.</p>
 * @public
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
   * @public
   */
  Type: CapacitySizeType | undefined;

  /**
   * <p>Defines the capacity size, either as a number of instances or a capacity
   *             percentage.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficRoutingConfigType = {
  ALL_AT_ONCE: "ALL_AT_ONCE",
  CANARY: "CANARY",
  LINEAR: "LINEAR",
} as const;

/**
 * @public
 */
export type TrafficRoutingConfigType = (typeof TrafficRoutingConfigType)[keyof typeof TrafficRoutingConfigType];

/**
 * <p>Defines the traffic routing strategy during an endpoint deployment to shift traffic from the
 *             old fleet to the new fleet.</p>
 * @public
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
   * @public
   */
  Type: TrafficRoutingConfigType | undefined;

  /**
   * <p>The waiting time (in seconds) between incremental steps to turn on traffic on the
   *             new endpoint fleet.</p>
   * @public
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * <p>Batch size for the first step to turn on traffic on the new endpoint fleet. <code>Value</code> must be less than
   *             or equal to 50% of the variant's total instance count.</p>
   * @public
   */
  CanarySize?: CapacitySize;

  /**
   * <p>Batch size for each step to turn on traffic on the new endpoint fleet. <code>Value</code> must be
   *             10-50% of the variant's total instance count.</p>
   * @public
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
 * @public
 */
export interface BlueGreenUpdatePolicy {
  /**
   * <p>Defines the traffic routing strategy to shift traffic from the old fleet to the new
   *             fleet during an endpoint deployment.</p>
   * @public
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig | undefined;

  /**
   * <p>Additional waiting time in seconds after the completion of an endpoint deployment
   *             before terminating the old endpoint fleet. Default is 0.</p>
   * @public
   */
  TerminationWaitInSeconds?: number;

  /**
   * <p>Maximum execution timeout for the deployment. Note that the timeout value should be
   *             larger than the total waiting time specified in <code>TerminationWaitInSeconds</code>
   *             and <code>WaitIntervalInSeconds</code>.</p>
   * @public
   */
  MaximumExecutionTimeoutInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const BooleanOperator = {
  AND: "And",
  OR: "Or",
} as const;

/**
 * @public
 */
export type BooleanOperator = (typeof BooleanOperator)[keyof typeof BooleanOperator];

/**
 * <p>Details on the cache hit of a pipeline execution step.</p>
 * @public
 */
export interface CacheHitResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  SourcePipelineExecutionArn?: string;
}

/**
 * <p>An output parameter of a pipeline step.</p>
 * @public
 */
export interface OutputParameter {
  /**
   * <p>The name of the output parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the output parameter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Metadata about a callback step.</p>
 * @public
 */
export interface CallbackStepMetadata {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   * @public
   */
  CallbackToken?: string;

  /**
   * <p>The URL of the Amazon Simple Queue Service (Amazon SQS) queue used by the callback step.</p>
   * @public
   */
  SqsQueueUrl?: string;

  /**
   * <p>A list of the output parameters of the callback step.</p>
   * @public
   */
  OutputParameters?: OutputParameter[];
}

/**
 * @public
 * @enum
 */
export const CandidateSortBy = {
  CreationTime: "CreationTime",
  FinalObjectiveMetricValue: "FinalObjectiveMetricValue",
  Status: "Status",
} as const;

/**
 * @public
 */
export type CandidateSortBy = (typeof CandidateSortBy)[keyof typeof CandidateSortBy];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * <p>The model deployment settings for the SageMaker Canvas application.</p>
 *          <note>
 *             <p>In order to enable model deployment for Canvas, the SageMaker Domain's or user profile's Amazon Web Services IAM
 *       execution role must have the <code>AmazonSageMakerCanvasDirectDeployAccess</code> policy attached. You can also
 *     turn on model deployment permissions through the SageMaker Domain's or user profile's settings in the SageMaker console.</p>
 *          </note>
 * @public
 */
export interface DirectDeploySettings {
  /**
   * <p>Describes whether model deployment permissions are enabled or disabled in the Canvas application.</p>
   * @public
   */
  Status?: FeatureStatus;
}

/**
 * <p>The generative AI settings for the SageMaker Canvas application.</p>
 *          <p>Configure these settings for Canvas users starting chats with generative AI foundation models.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/canvas-fm-chat.html">
 *         Use generative AI with foundation models</a>.</p>
 * @public
 */
export interface GenerativeAiSettings {
  /**
   * <p>The ARN of an Amazon Web Services IAM role that allows fine-tuning of large language models (LLMs) in
   *       Amazon Bedrock. The IAM role should have Amazon S3 read and write permissions, as well as a trust relationship that
   *       establishes <code>bedrock.amazonaws.com</code> as a service principal.</p>
   * @public
   */
  AmazonBedrockRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceName = {
  SalesforceGenie: "SalesforceGenie",
  Snowflake: "Snowflake",
} as const;

/**
 * @public
 */
export type DataSourceName = (typeof DataSourceName)[keyof typeof DataSourceName];

/**
 * <p>The Amazon SageMaker Canvas application setting where you configure OAuth for connecting to an external
 *       data source, such as Snowflake.</p>
 * @public
 */
export interface IdentityProviderOAuthSetting {
  /**
   * <p>The name of the data source that you're connecting to. Canvas currently supports OAuth for Snowflake and Salesforce Data Cloud.</p>
   * @public
   */
  DataSourceName?: DataSourceName;

  /**
   * <p>Describes whether OAuth for a data source is enabled or disabled in the Canvas
   *       application.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The ARN of an Amazon Web Services Secrets Manager secret that stores the credentials from your
   *       identity provider, such as the client ID and secret, authorization URL, and token URL. </p>
   * @public
   */
  SecretArn?: string;
}

/**
 * <p>The Amazon SageMaker Canvas application setting where you configure
 *       document querying.</p>
 * @public
 */
export interface KendraSettings {
  /**
   * <p>Describes whether the document querying feature is enabled
   *       or disabled in the Canvas application.</p>
   * @public
   */
  Status?: FeatureStatus;
}

/**
 * <p>The model registry settings for the SageMaker Canvas application.</p>
 * @public
 */
export interface ModelRegisterSettings {
  /**
   * <p>Describes whether the integration to the model registry is enabled or disabled in the
   *       Canvas application.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker model registry account. Required only to register model versions
   *       created by a different SageMaker Canvas Amazon Web Services account than the Amazon Web Services
   *       account in which SageMaker model registry is set up.</p>
   * @public
   */
  CrossAccountModelRegisterRoleArn?: string;
}

/**
 * <p>Time series forecast settings for the SageMaker Canvas application.</p>
 * @public
 */
export interface TimeSeriesForecastingSettings {
  /**
   * <p>Describes whether time series forecasting is enabled or disabled in the Canvas
   *       application.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The IAM role that Canvas passes to Amazon Forecast for time series forecasting. By default,
   *       Canvas uses the execution role specified in the <code>UserProfile</code> that launches the
   *       Canvas application. If an execution role is not specified in the <code>UserProfile</code>,
   *       Canvas uses the execution role specified in the Domain that owns the
   *       <code>UserProfile</code>. To allow time series forecasting, this IAM role should have the
   *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-canvas.html#security-iam-awsmanpol-AmazonSageMakerCanvasForecastAccess"> AmazonSageMakerCanvasForecastAccess</a> policy attached and
   *         <code>forecast.amazonaws.com</code> added in the trust relationship as a service
   *       principal.</p>
   * @public
   */
  AmazonForecastRoleArn?: string;
}

/**
 * <p>The workspace settings for the SageMaker Canvas application.</p>
 * @public
 */
export interface WorkspaceSettings {
  /**
   * <p>The Amazon S3 bucket used to store artifacts generated by Canvas. Updating the Amazon S3 location impacts
   *       existing configuration settings, and Canvas users no longer have access to their artifacts. Canvas users
   *       must log out and log back in to apply the new location.</p>
   * @public
   */
  S3ArtifactPath?: string;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) encryption key ID that is used to encrypt artifacts generated by Canvas in the Amazon S3 bucket.</p>
   * @public
   */
  S3KmsKeyId?: string;
}

/**
 * <p>The SageMaker Canvas application settings.</p>
 * @public
 */
export interface CanvasAppSettings {
  /**
   * <p>Time series forecast settings for the SageMaker Canvas application.</p>
   * @public
   */
  TimeSeriesForecastingSettings?: TimeSeriesForecastingSettings;

  /**
   * <p>The model registry settings for the SageMaker Canvas application.</p>
   * @public
   */
  ModelRegisterSettings?: ModelRegisterSettings;

  /**
   * <p>The workspace settings for the SageMaker Canvas application.</p>
   * @public
   */
  WorkspaceSettings?: WorkspaceSettings;

  /**
   * <p>The settings for connecting to an external data source with OAuth.</p>
   * @public
   */
  IdentityProviderOAuthSettings?: IdentityProviderOAuthSetting[];

  /**
   * <p>The model deployment settings for the SageMaker Canvas application.</p>
   * @public
   */
  DirectDeploySettings?: DirectDeploySettings;

  /**
   * <p>The settings for document querying.</p>
   * @public
   */
  KendraSettings?: KendraSettings;

  /**
   * <p>The generative AI settings for the SageMaker Canvas application.</p>
   * @public
   */
  GenerativeAiSettings?: GenerativeAiSettings;
}

/**
 * <p>Configuration specifying how to treat different headers. If no headers are specified
 *             Amazon SageMaker will by default base64 encode when capturing the data.</p>
 * @public
 */
export interface CaptureContentTypeHeader {
  /**
   * <p>The list of all content type headers that Amazon SageMaker will treat as CSV and
   *          capture accordingly.</p>
   * @public
   */
  CsvContentTypes?: string[];

  /**
   * <p>The list of all content type headers that SageMaker will treat as JSON and
   *          capture accordingly.</p>
   * @public
   */
  JsonContentTypes?: string[];
}

/**
 * @public
 * @enum
 */
export const CaptureMode = {
  INPUT: "Input",
  INPUT_AND_OUTPUT: "InputAndOutput",
  OUTPUT: "Output",
} as const;

/**
 * @public
 */
export type CaptureMode = (typeof CaptureMode)[keyof typeof CaptureMode];

/**
 * <p>Specifies data Model Monitor will capture.</p>
 * @public
 */
export interface CaptureOption {
  /**
   * <p>Specify the boundary of data to capture.</p>
   * @public
   */
  CaptureMode: CaptureMode | undefined;
}

/**
 * @public
 * @enum
 */
export const CaptureStatus = {
  STARTED: "Started",
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type CaptureStatus = (typeof CaptureStatus)[keyof typeof CaptureStatus];

/**
 * <p>Environment parameters you want to benchmark your load test against.</p>
 * @public
 */
export interface CategoricalParameter {
  /**
   * <p>The Name of the environment variable.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The list of values you can pass.</p>
   * @public
   */
  Value: string[] | undefined;
}

/**
 * <p>A list of categorical hyperparameters to tune.</p>
 * @public
 */
export interface CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the categories
   *             for
   *             the hyperparameter.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Defines the possible values for a categorical hyperparameter.</p>
 * @public
 */
export interface CategoricalParameterRangeSpecification {
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 * @public
 */
export interface ChannelSpecification {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A brief description of the channel.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   * @public
   */
  IsRequired?: boolean;

  /**
   * <p>The supported MIME types for the data.</p>
   * @public
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   * @public
   */
  SupportedCompressionTypes?: CompressionType[];

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p>
   *          <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local Amazon
   *             Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This
   *             is the most commonly used input mode.</p>
   *          <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your algorithm
   *             without using the EBS volume.</p>
   * @public
   */
  SupportedInputModes: TrainingInputMode[] | undefined;
}

/**
 * <p>Contains information about the output location for managed spot training checkpoint
 *             data. </p>
 * @public
 */
export interface CheckpointConfig {
  /**
   * <p>Identifies the S3 path where you want SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   * @public
   */
  LocalPath?: string;
}

/**
 * <p>The container for the metadata for the ClarifyCheck step. For more information,
 *             see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-clarify-check">ClarifyCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *         </p>
 * @public
 */
export interface ClarifyCheckStepMetadata {
  /**
   * <p>The type of the Clarify Check step</p>
   * @public
   */
  CheckType?: string;

  /**
   * <p>The Amazon S3 URI of baseline constraints file to be used for the drift check.</p>
   * @public
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   * @public
   */
  CalculatedBaselineConstraints?: string;

  /**
   * <p>The model package group name.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon S3 URI of the violation report if violations are detected.</p>
   * @public
   */
  ViolationReport?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the check processing job that was run by this step's execution.</p>
   * @public
   */
  CheckJobArn?: string;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *             If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   * @public
   */
  SkipCheck?: boolean;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *             <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *             If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *             These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> property. </p>
   * @public
   */
  RegisterNewBaseline?: boolean;
}

/**
 * @public
 * @enum
 */
export const ClarifyFeatureType = {
  CATEGORICAL: "categorical",
  NUMERICAL: "numerical",
  TEXT: "text",
} as const;

/**
 * @public
 */
export type ClarifyFeatureType = (typeof ClarifyFeatureType)[keyof typeof ClarifyFeatureType];

/**
 * <p>The inference configuration parameter for the model container.</p>
 * @public
 */
export interface ClarifyInferenceConfig {
  /**
   * <p>Provides the JMESPath expression to extract the features from a model container input
   *             in JSON Lines format. For example, if <code>FeaturesAttribute</code> is the JMESPath
   *             expression <code>'myfeatures'</code>, it extracts a list of features
   *                 <code>[1,2,3]</code> from request data <code>'\{"myfeatures":[1,2,3]\}'</code>.</p>
   * @public
   */
  FeaturesAttribute?: string;

  /**
   * <p>A template string used to format a JSON record into an acceptable model container
   *             input. For example, a <code>ContentTemplate</code> string
   *                 <code>'\{"myfeatures":$features\}'</code> will format a list of features
   *                 <code>[1,2,3]</code> into the record string <code>'\{"myfeatures":[1,2,3]\}'</code>.
   *             Required only when the model container input is in JSON Lines format.</p>
   * @public
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
   * @public
   */
  MaxRecordCount?: number;

  /**
   * <p>The maximum payload size (MB) allowed of a request from the explainer to the model
   *             container. Defaults to <code>6</code> MB.</p>
   * @public
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
   * @public
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
   * @public
   */
  LabelIndex?: number;

  /**
   * <p>A JMESPath expression used to extract the probability (or score) from the model
   *             container output if the model container is in JSON Lines format.</p>
   *          <p>
   *             <b>Example</b>: If the model container output of a single
   *             request is <code>'\{"predicted_label":1,"probability":0.6\}'</code>, then set
   *                 <code>ProbabilityAttribute</code> to <code>'probability'</code>.</p>
   * @public
   */
  ProbabilityAttribute?: string;

  /**
   * <p>A JMESPath expression used to locate the list of label headers in the model container
   *             output.</p>
   *          <p>
   *             <b>Example</b>: If the model container output of a batch
   *             request is <code>'\{"labels":["cat","dog","fish"],"probability":[0.6,0.3,0.1]\}'</code>,
   *             then set <code>LabelAttribute</code> to <code>'labels'</code> to extract the list of
   *             label headers <code>["cat","dog","fish"]</code>
   *          </p>
   * @public
   */
  LabelAttribute?: string;

  /**
   * <p>For multiclass classification problems, the label headers are the names of the
   *             classes. Otherwise, the label header is the name of the predicted label. These are used
   *             to help readability for the output of the <code>InvokeEndpoint</code> API. See the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">response</a> section under <b>Invoke the endpoint</b>
   *             in the Developer Guide for more information. If there are no label headers in the model
   *             container output, provide them manually using this parameter.</p>
   * @public
   */
  LabelHeaders?: string[];

  /**
   * <p>The names of the features. If provided, these are included in the endpoint response
   *             payload to help readability of the <code>InvokeEndpoint</code> output. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">Response</a> section under <b>Invoke the endpoint</b>
   *             in the Developer Guide for more information.</p>
   * @public
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
   * @public
   */
  FeatureTypes?: ClarifyFeatureType[];
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
 * @public
 */
export interface ClarifyShapBaselineConfig {
  /**
   * <p>The MIME type of the baseline data. Choose from <code>'text/csv'</code> or
   *                 <code>'application/jsonlines'</code>. Defaults to <code>'text/csv'</code>.</p>
   * @public
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
   * @public
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
   * @public
   */
  ShapBaselineUri?: string;
}

/**
 * @public
 * @enum
 */
export const ClarifyTextGranularity = {
  PARAGRAPH: "paragraph",
  SENTENCE: "sentence",
  TOKEN: "token",
} as const;

/**
 * @public
 */
export type ClarifyTextGranularity = (typeof ClarifyTextGranularity)[keyof typeof ClarifyTextGranularity];

/**
 * @public
 * @enum
 */
export const ClarifyTextLanguage = {
  AFRIKAANS: "af",
  ALBANIAN: "sq",
  ARABIC: "ar",
  ARMENIAN: "hy",
  BASQUE: "eu",
  BENGALI: "bn",
  BULGARIAN: "bg",
  CATALAN: "ca",
  CHINESE: "zh",
  CROATIAN: "hr",
  CZECH: "cs",
  DANISH: "da",
  DUTCH: "nl",
  ENGLISH: "en",
  ESTONIAN: "et",
  FINNISH: "fi",
  FRENCH: "fr",
  GERMAN: "de",
  GREEK: "el",
  GUJARATI: "gu",
  HEBREW: "he",
  HINDI: "hi",
  HUNGARIAN: "hu",
  ICELANDIC: "is",
  INDONESIAN: "id",
  IRISH: "ga",
  ITALIAN: "it",
  KANNADA: "kn",
  KYRGYZ: "ky",
  LATVIAN: "lv",
  LIGURIAN: "lij",
  LITHUANIAN: "lt",
  LUXEMBOURGISH: "lb",
  MACEDONIAN: "mk",
  MALAYALAM: "ml",
  MARATHI: "mr",
  MULTI_LANGUAGE: "xx",
  NEPALI: "ne",
  NORWEGIAN_BOKMAL: "nb",
  PERSIAN: "fa",
  POLISH: "pl",
  PORTUGUESE: "pt",
  ROMANIAN: "ro",
  RUSSIAN: "ru",
  SANSKRIT: "sa",
  SERBIAN: "sr",
  SETSWANA: "tn",
  SINHALA: "si",
  SLOVAK: "sk",
  SLOVENIAN: "sl",
  SPANISH: "es",
  SWEDISH: "sv",
  TAGALOG: "tl",
  TAMIL: "ta",
  TATAR: "tt",
  TELUGU: "te",
  TURKISH: "tr",
  UKRAINIAN: "uk",
  URDU: "ur",
  YORUBA: "yo",
} as const;

/**
 * @public
 */
export type ClarifyTextLanguage = (typeof ClarifyTextLanguage)[keyof typeof ClarifyTextLanguage];

/**
 * <p>A parameter used to configure the SageMaker Clarify explainer to treat text features as text so
 *             that explanations are provided for individual units of text. Required only for natural
 *             language processing (NLP) explainability. </p>
 * @public
 */
export interface ClarifyTextConfig {
  /**
   * <p>Specifies the language of the text features in <a href=" https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1</a> or
   *                 <a href="https://en.wikipedia.org/wiki/ISO_639-3">ISO 639-3</a> code of a
   *             supported language. </p>
   *          <note>
   *             <p>For a mix of multiple languages, use code <code>'xx'</code>.</p>
   *          </note>
   * @public
   */
  Language: ClarifyTextLanguage | undefined;

  /**
   * <p>The unit of granularity for the analysis of text features. For example, if the unit is
   *                 <code>'token'</code>, then each token (like a word in English) of the text is
   *             treated as a feature. SHAP values are computed for each unit/feature.</p>
   * @public
   */
  Granularity: ClarifyTextGranularity | undefined;
}

/**
 * <p>The configuration for SHAP analysis using SageMaker Clarify Explainer.</p>
 * @public
 */
export interface ClarifyShapConfig {
  /**
   * <p>The configuration for the SHAP baseline of the Kernal SHAP algorithm.</p>
   * @public
   */
  ShapBaselineConfig: ClarifyShapBaselineConfig | undefined;

  /**
   * <p>The number of samples to be used for analysis by the Kernal SHAP algorithm. </p>
   *          <note>
   *             <p>The number of samples determines the size of the synthetic dataset, which has an
   *                 impact on latency of explainability requests. For more information, see the
   *                     <b>Synthetic data</b> of <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html">Configure and create an endpoint</a>.</p>
   *          </note>
   * @public
   */
  NumberOfSamples?: number;

  /**
   * <p>A Boolean toggle to indicate if you want to use the logit function (true) or log-odds
   *             units (false) for model predictions. Defaults to false.</p>
   * @public
   */
  UseLogit?: boolean;

  /**
   * <p>The starting value used to initialize the random number generator in the explainer.
   *             Provide a value for this parameter to obtain a deterministic SHAP result.</p>
   * @public
   */
  Seed?: number;

  /**
   * <p>A parameter that indicates if text features are treated as text and explanations are
   *             provided for individual units of text. Required for natural language processing (NLP)
   *             explainability only.</p>
   * @public
   */
  TextConfig?: ClarifyTextConfig;
}

/**
 * <p>The configuration parameters for the SageMaker Clarify explainer.</p>
 * @public
 */
export interface ClarifyExplainerConfig {
  /**
   * <p>A JMESPath boolean expression used to filter which records to explain. Explanations
   *             are activated by default. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">
   *                <code>EnableExplanations</code>
   *             </a>for additional information.</p>
   * @public
   */
  EnableExplanations?: string;

  /**
   * <p>The inference configuration parameter for the model container.</p>
   * @public
   */
  InferenceConfig?: ClarifyInferenceConfig;

  /**
   * <p>The configuration for SHAP analysis.</p>
   * @public
   */
  ShapConfig: ClarifyShapConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterInstanceType = {
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_LARGE: "ml.c5n.large",
  ML_C5_12XLARGE: "ml.c5.12xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_24XLARGE: "ml.c5.24xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_16XLARGE: "ml.m5.16xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_8XLARGE: "ml.m5.8xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;

/**
 * @public
 */
export type ClusterInstanceType = (typeof ClusterInstanceType)[keyof typeof ClusterInstanceType];

/**
 * <p>The lifecycle configuration for a SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterLifeCycleConfig {
  /**
   * <p>An Amazon S3 bucket path where your lifecycle scripts are stored.</p>
   *          <important>
   *             <p>Make sure that the S3 bucket path starts with <code>s3://sagemaker-</code>. The
   *                <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-iam-role-for-hyperpod">IAM role for SageMaker HyperPod</a> has the managed <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-cluster.html">
   *                   <code>AmazonSageMakerClusterInstanceRolePolicy</code>
   *                </a> attached, which
   *             allows access to S3 buckets with the specific prefix <code>sagemaker-</code>.</p>
   *          </important>
   * @public
   */
  SourceS3Uri: string | undefined;

  /**
   * <p>The file name of the entrypoint script of lifecycle scripts under
   *             <code>SourceS3Uri</code>. This entrypoint script runs during cluster creation.</p>
   * @public
   */
  OnCreate: string | undefined;
}

/**
 * <p>Details of an instance group in a SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterInstanceGroupDetails {
  /**
   * <p>The number of instances that are currently in the instance group of a
   *          SageMaker HyperPod cluster.</p>
   * @public
   */
  CurrentCount?: number;

  /**
   * <p>The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.</p>
   * @public
   */
  TargetCount?: number;

  /**
   * <p>The name of the instance group of a SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceGroupName?: string;

  /**
   * <p>The instance type of the instance group of a SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceType?: ClusterInstanceType;

  /**
   * <p>Details of LifeCycle configuration for the instance group.</p>
   * @public
   */
  LifeCycleConfig?: ClusterLifeCycleConfig;

  /**
   * <p>The execution role for the instance group to assume.</p>
   * @public
   */
  ExecutionRole?: string;

  /**
   * <p>The number you specified to <code>TreadsPerCore</code> in <code>CreateCluster</code> for
   *          enabling or disabling multithreading. For instance types that support multithreading, you
   *          can specify 1 for disabling multithreading and 2 for enabling multithreading. For more
   *          information, see the reference table of <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html">CPU cores and threads per CPU core per instance type</a> in the <i>Amazon Elastic Compute Cloud
   *             User Guide</i>.</p>
   * @public
   */
  ThreadsPerCore?: number;
}

/**
 * <p>The specifications of an instance group that you need to define.</p>
 * @public
 */
export interface ClusterInstanceGroupSpecification {
  /**
   * <p>Specifies the number of instances to add to the instance group of a SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>Specifies the name of the instance group.</p>
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * <p>Specifies the instance type of the instance group.</p>
   * @public
   */
  InstanceType: ClusterInstanceType | undefined;

  /**
   * <p>Specifies the LifeCycle configuration for the instance group.</p>
   * @public
   */
  LifeCycleConfig: ClusterLifeCycleConfig | undefined;

  /**
   * <p>Specifies an IAM execution role to be assumed by the instance group.</p>
   * @public
   */
  ExecutionRole: string | undefined;

  /**
   * <p>Specifies the value for <b>Threads per core</b>. For instance types that
   *          support multithreading, you can specify <code>1</code> for disabling multithreading and
   *             <code>2</code> for enabling multithreading. For instance types that doesn't support
   *          multithreading, specify <code>1</code>. For more information, see the reference table of
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html">CPU cores and threads per CPU core per instance type</a> in the <i>Amazon Elastic Compute Cloud
   *             User Guide</i>.</p>
   * @public
   */
  ThreadsPerCore?: number;
}

/**
 * @public
 * @enum
 */
export const ClusterInstanceStatus = {
  FAILURE: "Failure",
  PENDING: "Pending",
  RUNNING: "Running",
  SHUTTING_DOWN: "ShuttingDown",
  SYSTEM_UPDATING: "SystemUpdating",
} as const;

/**
 * @public
 */
export type ClusterInstanceStatus = (typeof ClusterInstanceStatus)[keyof typeof ClusterInstanceStatus];

/**
 * <p>Details of an instance in a SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterInstanceStatusDetails {
  /**
   * <p>The status of an instance in a SageMaker HyperPod cluster.</p>
   * @public
   */
  Status: ClusterInstanceStatus | undefined;

  /**
   * <p>The message from an instance in a SageMaker HyperPod cluster.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Details of an instance (also called a <i>node</i> interchangeably) in a
 *          SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterNodeDetails {
  /**
   * <p>The instance group name in which the instance is.</p>
   * @public
   */
  InstanceGroupName?: string;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The status of the instance.</p>
   * @public
   */
  InstanceStatus?: ClusterInstanceStatusDetails;

  /**
   * <p>The type of the instance.</p>
   * @public
   */
  InstanceType?: ClusterInstanceType;

  /**
   * <p>The time when the instance is launched.</p>
   * @public
   */
  LaunchTime?: Date;

  /**
   * <p>The LifeCycle configuration applied to the instance.</p>
   * @public
   */
  LifeCycleConfig?: ClusterLifeCycleConfig;

  /**
   * <p>The number of threads per CPU core you specified under
   *          <code>CreateCluster</code>.</p>
   * @public
   */
  ThreadsPerCore?: number;
}

/**
 * <p>Lists a summary of the properties of an instance (also called a
 *             <i>node</i> interchangeably) of a SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterNodeSummary {
  /**
   * <p>The name of the instance group in which the instance is.</p>
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of the instance.</p>
   * @public
   */
  InstanceType: ClusterInstanceType | undefined;

  /**
   * <p>The time when the instance is launched.</p>
   * @public
   */
  LaunchTime: Date | undefined;

  /**
   * <p>The status of the instance.</p>
   * @public
   */
  InstanceStatus: ClusterInstanceStatusDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterSortBy = {
  CREATION_TIME: "CREATION_TIME",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type ClusterSortBy = (typeof ClusterSortBy)[keyof typeof ClusterSortBy];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  INSERVICE: "InService",
  ROLLINGBACK: "RollingBack",
  SYSTEMUPDATING: "SystemUpdating",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * <p>Lists a summary of the properties of a SageMaker HyperPod cluster.</p>
 * @public
 */
export interface ClusterSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The name of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The time when the SageMaker HyperPod cluster is created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterStatus: ClusterStatus | undefined;
}

/**
 * <p>A custom SageMaker image. For more information, see
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.</p>
 * @public
 */
export interface CustomImage {
  /**
   * <p>The name of the CustomImage. Must be unique to your account.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The version number of the CustomImage.</p>
   * @public
   */
  ImageVersionNumber?: number;

  /**
   * <p>The name of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * <p>The Code Editor application settings.</p>
 *          <p>For more information about Code Editor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html">Get started with Code
 *       Editor in Amazon SageMaker</a>.</p>
 * @public
 */
export interface CodeEditorAppSettings {
  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *          the version runs on.</p>
   * @public
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A list of custom SageMaker images that are configured to run as a Code Editor app.</p>
   * @public
   */
  CustomImages?: CustomImage[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Code Editor application
   *       lifecycle configuration.</p>
   * @public
   */
  LifecycleConfigArns?: string[];
}

/**
 * <p>A Git repository that SageMaker automatically displays to users for cloning in the JupyterServer application.</p>
 * @public
 */
export interface CodeRepository {
  /**
   * <p>The URL of the Git repository.</p>
   * @public
   */
  RepositoryUrl: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CodeRepositorySortBy = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type CodeRepositorySortBy = (typeof CodeRepositorySortBy)[keyof typeof CodeRepositorySortBy];

/**
 * @public
 * @enum
 */
export const CodeRepositorySortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type CodeRepositorySortOrder = (typeof CodeRepositorySortOrder)[keyof typeof CodeRepositorySortOrder];

/**
 * <p>Specifies configuration details for a Git repository in your Amazon Web Services
 *             account.</p>
 * @public
 */
export interface GitConfig {
  /**
   * <p>The URL where the Git repository is located.</p>
   * @public
   */
  RepositoryUrl: string | undefined;

  /**
   * <p>The default branch for the Git repository.</p>
   * @public
   */
  Branch?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   * @public
   */
  SecretArn?: string;
}

/**
 * <p>Specifies summary information about a Git repository.</p>
 * @public
 */
export interface CodeRepositorySummary {
  /**
   * <p>The name of the Git repository.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   * @public
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the Git repository was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the Git repository was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details for the Git repository, including the URL where it is located
   *             and the ARN of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository.</p>
   * @public
   */
  GitConfig?: GitConfig;
}

/**
 * <p>Use this parameter to configure your Amazon Cognito workforce.
 *       A single Cognito workforce is created using and corresponds to a single
 *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
 *       Amazon Cognito user pool</a>.</p>
 * @public
 */
export interface CognitoConfig {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       user pool</a> is a user directory in Amazon Cognito.
   *       With a user pool, your users can sign in to your web or mobile app through Amazon Cognito.
   *       Your users can also sign in through social identity providers like
   *       Google, Facebook, Amazon, or Apple, and through SAML identity providers.</p>
   * @public
   */
  UserPool: string | undefined;

  /**
   * <p>The client ID for your Amazon Cognito user pool.</p>
   * @public
   */
  ClientId: string | undefined;
}

/**
 * <p>Identifies a Amazon Cognito user group. A user group can be used in on or more work
 *             teams.</p>
 * @public
 */
export interface CognitoMemberDefinition {
  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service
   *             that you are calling.</p>
   * @public
   */
  UserPool: string | undefined;

  /**
   * <p>An identifier for a user group.</p>
   * @public
   */
  UserGroup: string | undefined;

  /**
   * <p>An identifier for an application client. You must create the app client ID using
   *             Amazon Cognito.</p>
   * @public
   */
  ClientId: string | undefined;
}

/**
 * <p>Configuration for your vector collection type.</p>
 * @public
 */
export interface VectorConfig {
  /**
   * <p>The number of elements in your vector.</p>
   * @public
   */
  Dimension: number | undefined;
}

/**
 * <p>Configuration for your collection.</p>
 * @public
 */
export type CollectionConfig = CollectionConfig.VectorConfigMember | CollectionConfig.$UnknownMember;

/**
 * @public
 */
export namespace CollectionConfig {
  /**
   * <p>Configuration for your vector collection type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Dimension</code>: The number of elements in your vector.</p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface VectorConfigMember {
    VectorConfig: VectorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VectorConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    VectorConfig: (value: VectorConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CollectionConfig, visitor: Visitor<T>): T => {
    if (value.VectorConfig !== undefined) return visitor.VectorConfig(value.VectorConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configuration information for the Amazon SageMaker Debugger output tensor collections.</p>
 * @public
 */
export interface CollectionConfiguration {
  /**
   * <p>The name of the tensor collection. The name must be unique relative to other rule configuration names.</p>
   * @public
   */
  CollectionName?: string;

  /**
   * <p>Parameter values for the tensor collection. The allowed parameters are
   *                 <code>"name"</code>, <code>"include_regex"</code>, <code>"reduction_config"</code>,
   *                 <code>"save_config"</code>, <code>"tensor_names"</code>, and
   *                 <code>"save_histogram"</code>.</p>
   * @public
   */
  CollectionParameters?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const CollectionType = {
  LIST: "List",
  SET: "Set",
  VECTOR: "Vector",
} as const;

/**
 * @public
 */
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType];

/**
 * @public
 * @enum
 */
export const CompilationJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INPROGRESS: "INPROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type CompilationJobStatus = (typeof CompilationJobStatus)[keyof typeof CompilationJobStatus];

/**
 * @public
 * @enum
 */
export const TargetDevice = {
  AISAGE: "aisage",
  AMBA_CV2: "amba_cv2",
  AMBA_CV22: "amba_cv22",
  AMBA_CV25: "amba_cv25",
  COREML: "coreml",
  DEEPLENS: "deeplens",
  IMX8MPLUS: "imx8mplus",
  IMX8QM: "imx8qm",
  JACINTO_TDA4VM: "jacinto_tda4vm",
  JETSON_NANO: "jetson_nano",
  JETSON_TX1: "jetson_tx1",
  JETSON_TX2: "jetson_tx2",
  JETSON_XAVIER: "jetson_xavier",
  LAMBDA: "lambda",
  ML_C4: "ml_c4",
  ML_C5: "ml_c5",
  ML_C6G: "ml_c6g",
  ML_EIA2: "ml_eia2",
  ML_G4DN: "ml_g4dn",
  ML_INF1: "ml_inf1",
  ML_INF2: "ml_inf2",
  ML_M4: "ml_m4",
  ML_M5: "ml_m5",
  ML_M6G: "ml_m6g",
  ML_P2: "ml_p2",
  ML_P3: "ml_p3",
  ML_TRN1: "ml_trn1",
  QCS603: "qcs603",
  QCS605: "qcs605",
  RASP3B: "rasp3b",
  RASP4B: "rasp4b",
  RK3288: "rk3288",
  RK3399: "rk3399",
  SBE_C: "sbe_c",
  SITARA_AM57X: "sitara_am57x",
  X86_WIN32: "x86_win32",
  X86_WIN64: "x86_win64",
} as const;

/**
 * @public
 */
export type TargetDevice = (typeof TargetDevice)[keyof typeof TargetDevice];

/**
 * @public
 * @enum
 */
export const TargetPlatformAccelerator = {
  INTEL_GRAPHICS: "INTEL_GRAPHICS",
  MALI: "MALI",
  NNA: "NNA",
  NVIDIA: "NVIDIA",
} as const;

/**
 * @public
 */
export type TargetPlatformAccelerator = (typeof TargetPlatformAccelerator)[keyof typeof TargetPlatformAccelerator];

/**
 * @public
 * @enum
 */
export const TargetPlatformArch = {
  ARM64: "ARM64",
  ARM_EABI: "ARM_EABI",
  ARM_EABIHF: "ARM_EABIHF",
  X86: "X86",
  X86_64: "X86_64",
} as const;

/**
 * @public
 */
export type TargetPlatformArch = (typeof TargetPlatformArch)[keyof typeof TargetPlatformArch];

/**
 * @public
 * @enum
 */
export const TargetPlatformOs = {
  ANDROID: "ANDROID",
  LINUX: "LINUX",
} as const;

/**
 * @public
 */
export type TargetPlatformOs = (typeof TargetPlatformOs)[keyof typeof TargetPlatformOs];

/**
 * <p>A summary of a model compilation job.</p>
 * @public
 */
export interface CompilationJobSummary {
  /**
   * <p>The name of the model compilation job that you want a summary for.</p>
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   * @public
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The time when the model compilation job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the model compilation job started.</p>
   * @public
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job completed.</p>
   * @public
   */
  CompilationEndTime?: Date;

  /**
   * <p>The type of device that the model will run on after the compilation job has
   *             completed.</p>
   * @public
   */
  CompilationTargetDevice?: TargetDevice;

  /**
   * <p>The type of OS that the model will run on after the compilation job has
   *             completed.</p>
   * @public
   */
  CompilationTargetPlatformOs?: TargetPlatformOs;

  /**
   * <p>The type of architecture that the model will run on after the compilation job has
   *             completed.</p>
   * @public
   */
  CompilationTargetPlatformArch?: TargetPlatformArch;

  /**
   * <p>The type of accelerator that the model will run on after the compilation job has
   *             completed.</p>
   * @public
   */
  CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the model compilation job.</p>
   * @public
   */
  CompilationJobStatus: CompilationJobStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const CompleteOnConvergence = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type CompleteOnConvergence = (typeof CompleteOnConvergence)[keyof typeof CompleteOnConvergence];

/**
 * @public
 * @enum
 */
export const ConditionOutcome = {
  FALSE: "False",
  TRUE: "True",
} as const;

/**
 * @public
 */
export type ConditionOutcome = (typeof ConditionOutcome)[keyof typeof ConditionOutcome];

/**
 * <p>Metadata for a Condition step.</p>
 * @public
 */
export interface ConditionStepMetadata {
  /**
   * <p>The outcome of the Condition step evaluation.</p>
   * @public
   */
  Outcome?: ConditionOutcome;
}

/**
 * <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const RepositoryAccessMode = {
  PLATFORM: "Platform",
  VPC: "Vpc",
} as const;

/**
 * @public
 */
export type RepositoryAccessMode = (typeof RepositoryAccessMode)[keyof typeof RepositoryAccessMode];

/**
 * <p>Specifies an authentication configuration for the private docker registry where your
 *             model image is hosted. Specify a value for this property only if you specified
 *                 <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field of the
 *                 <code>ImageConfig</code> object that you passed to a call to
 *                 <code>CreateModel</code> and the private Docker registry where the model image is
 *             hosted requires authentication.</p>
 * @public
 */
export interface RepositoryAuthConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function that provides
   *             credentials to authenticate to the private Docker registry where your model image is
   *             hosted. For information about how to create an Amazon Web Services Lambda function, see
   *                 <a href="https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html">Create a Lambda function
   *                 with the console</a> in the <i>Amazon Web Services Lambda Developer
   *                 Guide</i>.</p>
   * @public
   */
  RepositoryCredentialsProviderArn: string | undefined;
}

/**
 * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
 *          accessible from your Amazon Virtual Private Cloud (VPC).</p>
 * @public
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
   *                your VPC.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RepositoryAccessMode: RepositoryAccessMode | undefined;

  /**
   * <p>(Optional) Specifies an authentication configuration for the private docker registry
   *          where your model image is hosted. Specify a value for this property only if you
   *          specified <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field,
   *          and the private Docker registry where the model image is hosted requires
   *          authentication.</p>
   * @public
   */
  RepositoryAuthConfig?: RepositoryAuthConfig;
}

/**
 * @public
 * @enum
 */
export const ContainerMode = {
  MULTI_MODEL: "MultiModel",
  SINGLE_MODEL: "SingleModel",
} as const;

/**
 * @public
 */
export type ContainerMode = (typeof ContainerMode)[keyof typeof ContainerMode];

/**
 * @public
 * @enum
 */
export const ModelCacheSetting = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type ModelCacheSetting = (typeof ModelCacheSetting)[keyof typeof ModelCacheSetting];

/**
 * <p>Specifies additional configuration for hosting multi-model endpoints.</p>
 * @public
 */
export interface MultiModelConfig {
  /**
   * <p>Whether to cache models for a multi-model endpoint. By default, multi-model endpoints
   *             cache models so that a model does not have to be loaded into memory each time it is
   *             invoked. Some use cases do not benefit from model caching. For example, if an endpoint
   *             hosts a large number of models that are each invoked infrequently, the endpoint might
   *             perform better if you disable model caching. To disable model caching, set the value of
   *             this parameter to <code>Disabled</code>.</p>
   * @public
   */
  ModelCacheSetting?: ModelCacheSetting;
}

/**
 * <p>Describes the container, as part of model definition.</p>
 * @public
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
   * @public
   */
  ContainerHostname?: string;

  /**
   * <p>The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a
   *             Docker registry that is accessible from the same VPC that you configure for your
   *             endpoint. If you are using your own custom algorithm instead of an algorithm provided by
   *             SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
   *                 Amazon SageMaker</a>. </p>
   *          <note>
   *             <p>The model artifacts in an Amazon S3 bucket and the Docker image for inference container
   *                 in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are
   *                 creating.</p>
   *          </note>
   * @public
   */
  Image?: string;

  /**
   * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
   *             accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a
   *             private Docker registry, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html">Use a
   *                 Private Docker Registry for Real-Time Inference Containers</a>. </p>
   *          <note>
   *             <p>The model artifacts in an Amazon S3 bucket and the Docker image for inference container
   *                 in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are
   *                 creating.</p>
   *          </note>
   * @public
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>Whether the container hosts a single model or multiple models.</p>
   * @public
   */
  Mode?: ContainerMode;

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
   *             is activated in your Amazon Web Services account by default. If you previously
   *             deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
   *                     <i>Amazon Web Services Identity and Access Management User
   *                 Guide</i>.</p>
   *          <important>
   *             <p>If you use a built-in algorithm to create a model, SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *          </important>
   * @public
   */
  ModelDataUrl?: string;

  /**
   * <p>Specifies the location of ML model data to deploy.</p>
   *          <note>
   *             <p>Currently you cannot use <code>ModelDataSource</code> in conjunction with SageMaker
   *                 batch transform, SageMaker serverless endpoints, SageMaker multi-model endpoints, and SageMaker
   *                 Marketplace.</p>
   *          </note>
   * @public
   */
  ModelDataSource?: ModelDataSource;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   *          <p>The maximum length of each key and value in the <code>Environment</code> map is
   *             1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If
   *             you pass multiple containers to a <code>CreateModel</code> request, then the maximum
   *             length of all of their maps, combined, is also 32 KB.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the
   *             model.</p>
   * @public
   */
  ModelPackageName?: string;

  /**
   * <p>The inference specification name in the model package version.</p>
   * @public
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Specifies additional configuration for multi-model endpoints.</p>
   * @public
   */
  MultiModelConfig?: MultiModelConfig;
}

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;

/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * <p>A structure describing the source of a context.</p>
 * @public
 */
export interface ContextSource {
  /**
   * <p>The URI of the source.</p>
   * @public
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   * @public
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   * @public
   */
  SourceId?: string;
}

/**
 * <p>Lists a summary of the properties of a context. A context provides a logical grouping
 *         of other entities.</p>
 * @public
 */
export interface ContextSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string;

  /**
   * <p>The name of the context.</p>
   * @public
   */
  ContextName?: string;

  /**
   * <p>The source of the context.</p>
   * @public
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   * @public
   */
  ContextType?: string;

  /**
   * <p>When the context was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the context was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const HyperParameterScalingType = {
  AUTO: "Auto",
  LINEAR: "Linear",
  LOGARITHMIC: "Logarithmic",
  REVERSE_LOGARITHMIC: "ReverseLogarithmic",
} as const;

/**
 * @public
 */
export type HyperParameterScalingType = (typeof HyperParameterScalingType)[keyof typeof HyperParameterScalingType];

/**
 * <p>A list of continuous hyperparameters to tune.</p>
 * @public
 */
export interface ContinuousParameterRange {
  /**
   * <p>The name of the continuous hyperparameter to tune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The minimum value for the hyperparameter.
   *             The
   *             tuning job uses floating-point values between this value and <code>MaxValue</code>for
   *             tuning.</p>
   * @public
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum value for the hyperparameter. The tuning job uses floating-point values
   *             between <code>MinValue</code> value and this value for tuning.</p>
   * @public
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
   * @public
   */
  ScalingType?: HyperParameterScalingType;
}

/**
 * <p>Defines the possible values for a continuous hyperparameter.</p>
 * @public
 */
export interface ContinuousParameterRangeSpecification {
  /**
   * <p>The minimum floating-point value allowed.</p>
   * @public
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum floating-point value allowed.</p>
   * @public
   */
  MaxValue: string | undefined;
}

/**
 * <p>A flag to indicating that automatic model tuning (AMT) has detected model convergence,
 *             defined as a lack of significant improvement (1% or less) against an objective
 *             metric.</p>
 * @public
 */
export interface ConvergenceDetected {
  /**
   * <p>A flag to stop a tuning job once AMT has detected that the job has converged.</p>
   * @public
   */
  CompleteOnConvergence?: CompleteOnConvergence;
}

/**
 * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
 * @public
 */
export interface MetadataProperties {
  /**
   * <p>The commit ID.</p>
   * @public
   */
  CommitId?: string;

  /**
   * <p>The repository.</p>
   * @public
   */
  Repository?: string;

  /**
   * <p>The entity this entity was generated by.</p>
   * @public
   */
  GeneratedBy?: string;

  /**
   * <p>The project ID.</p>
   * @public
   */
  ProjectId?: string;
}

/**
 * @public
 */
export interface CreateActionRequest {
  /**
   * <p>The name of the action. Must be unique to your account in an Amazon Web Services Region.</p>
   * @public
   */
  ActionName: string | undefined;

  /**
   * <p>The source type, ID, and URI.</p>
   * @public
   */
  Source: ActionSource | undefined;

  /**
   * <p>The action type.</p>
   * @public
   */
  ActionType: string | undefined;

  /**
   * <p>The description of the action.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: ActionStatus;

  /**
   * <p>A list of properties to add to the action.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the action.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string;
}

/**
 * <p>Defines the possible values for an integer hyperparameter.</p>
 * @public
 */
export interface IntegerParameterRangeSpecification {
  /**
   * <p>The minimum integer value allowed.</p>
   * @public
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum integer value allowed.</p>
   * @public
   */
  MaxValue: string | undefined;
}

/**
 * <p>Defines the possible values for categorical, continuous, and integer hyperparameters
 *             to be used by an algorithm.</p>
 * @public
 */
export interface ParameterRange {
  /**
   * <p>A <code>IntegerParameterRangeSpecification</code> object that defines the possible
   *             values for an integer hyperparameter.</p>
   * @public
   */
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible
   *             values for a continuous hyperparameter.</p>
   * @public
   */
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  /**
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible
   *             values for a categorical hyperparameter.</p>
   * @public
   */
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
}

/**
 * @public
 * @enum
 */
export const ParameterType = {
  CATEGORICAL: "Categorical",
  CONTINUOUS: "Continuous",
  FREE_TEXT: "FreeText",
  INTEGER: "Integer",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * <p>Defines a hyperparameter to be used by an algorithm.</p>
 * @public
 */
export interface HyperParameterSpecification {
  /**
   * <p>The name of this hyperparameter. The name must be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A brief description of the hyperparameter.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of this hyperparameter. The valid types are <code>Integer</code>,
   *                 <code>Continuous</code>, <code>Categorical</code>, and <code>FreeText</code>.</p>
   * @public
   */
  Type: ParameterType | undefined;

  /**
   * <p>The allowed range for this hyperparameter.</p>
   * @public
   */
  Range?: ParameterRange;

  /**
   * <p>Indicates whether this hyperparameter is tunable in a hyperparameter tuning
   *             job.</p>
   * @public
   */
  IsTunable?: boolean;

  /**
   * <p>Indicates whether this hyperparameter is required.</p>
   * @public
   */
  IsRequired?: boolean;

  /**
   * <p>The default value for this hyperparameter. If a default value is specified, a
   *             hyperparameter cannot be required.</p>
   * @public
   */
  DefaultValue?: string;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobObjectiveType = {
  MAXIMIZE: "Maximize",
  MINIMIZE: "Minimize",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobObjectiveType =
  (typeof HyperParameterTuningJobObjectiveType)[keyof typeof HyperParameterTuningJobObjectiveType];

/**
 * <p>Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning
 *             uses the value of this metric to evaluate the training jobs it launches, and returns the
 *             training job that results in either the highest or lowest value for this metric,
 *             depending on the value you specify for the <code>Type</code> parameter. If you want to
 *             define a custom objective metric, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Define metrics and environment variables</a>.</p>
 * @public
 */
export interface HyperParameterTuningJobObjective {
  /**
   * <p>Whether to minimize or maximize the objective metric.</p>
   * @public
   */
  Type: HyperParameterTuningJobObjectiveType | undefined;

  /**
   * <p>The
   *             name of the metric to use for the objective metric.</p>
   * @public
   */
  MetricName: string | undefined;
}

/**
 * <p>Defines how the algorithm is used for a training job.</p>
 * @public
 */
export interface TrainingSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the training
   *             algorithm.</p>
   * @public
   */
  TrainingImage: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   * @public
   */
  TrainingImageDigest?: string;

  /**
   * <p>A list of the <code>HyperParameterSpecification</code> objects, that define the
   *             supported hyperparameters. This is required if the algorithm supports automatic model
   *             tuning.></p>
   * @public
   */
  SupportedHyperParameters?: HyperParameterSpecification[];

  /**
   * <p>A list of the instance types that this algorithm can use for training.</p>
   * @public
   */
  SupportedTrainingInstanceTypes: TrainingInstanceType[] | undefined;

  /**
   * <p>Indicates whether the algorithm supports distributed training. If set to false, buyers
   *             can't request more than one instance during training.</p>
   * @public
   */
  SupportsDistributedTraining?: boolean;

  /**
   * <p>A list of <code>MetricDefinition</code> objects, which are used for parsing metrics
   *             generated by the algorithm.</p>
   * @public
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>A list of <code>ChannelSpecification</code> objects, which specify the input sources
   *             to be used by the algorithm.</p>
   * @public
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * <p>A list of the metrics that the algorithm emits that can be used as the objective
   *             metric in a hyperparameter tuning job.</p>
   * @public
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

  /**
   * <p>The additional data source used during the training job.</p>
   * @public
   */
  AdditionalS3DataSource?: AdditionalS3DataSource;
}

/**
 * @public
 */
export interface CreateAlgorithmInput {
  /**
   * <p>The name of the algorithm.</p>
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * <p>A description of the algorithm.</p>
   * @public
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
   * @public
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
   * @public
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more training jobs and that SageMaker runs to test the
   *             algorithm's training code and, optionally, one or more batch transform jobs that SageMaker
   *             runs to test the algorithm's inference code.</p>
   * @public
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>Whether to certify the algorithm so that it can be listed in Amazon Web Services
   *             Marketplace.</p>
   * @public
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAlgorithmOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new algorithm.</p>
   * @public
   */
  AlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code>
   *       must be set.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   *          <note>
   *             <p>The value of <code>InstanceType</code> passed as part of the <code>ResourceSpec</code> in the <code>CreateApp</code> call overrides the value passed as part of the <code>ResourceSpec</code> configured for
   *           the user profile or the domain. If <code>InstanceType</code> is not specified in any of those three <code>ResourceSpec</code> values for a
   *           <code>KernelGateway</code> app, the <code>CreateApp</code> call fails with a request validation error.</p>
   *          </note>
   * @public
   */
  ResourceSpec?: ResourceSpec;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   * @public
   */
  AppArn?: string;
}

/**
 * <p>Resource being accessed is in use.</p>
 * @public
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

/**
 * @public
 */
export interface CreateAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig. Must be unique to your account.</p>
   * @public
   */
  AppImageConfigName: string | undefined;

  /**
   * <p>A list of tags to apply to the AppImageConfig.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The KernelGatewayImageConfig. You can only specify one image kernel in the
   *          AppImageConfig API. This kernel will be shown to users before the
   *          image starts. Once the image runs, all kernels are visible in JupyterLab.</p>
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;

  /**
   * <p>The <code>JupyterLabAppImageConfig</code>. You can only specify one image kernel in the <code>AppImageConfig</code> API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab.</p>
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;

  /**
   * <p>The <code>CodeEditorAppImageConfig</code>. You can only specify one image kernel
   *       in the AppImageConfig API. This kernel is shown to users before the image starts.
   *       After the image runs, all kernels are visible in Code Editor.</p>
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}

/**
 * @public
 */
export interface CreateAppImageConfigResponse {
  /**
   * <p>The ARN of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigArn?: string;
}

/**
 * @public
 */
export interface CreateArtifactRequest {
  /**
   * <p>The name of the artifact. Must be unique to your account in an Amazon Web Services Region.</p>
   * @public
   */
  ArtifactName?: string;

  /**
   * <p>The ID, ID type, and URI of the source.</p>
   * @public
   */
  Source: ArtifactSource | undefined;

  /**
   * <p>The artifact type.</p>
   * @public
   */
  ArtifactType: string | undefined;

  /**
   * <p>A list of properties to add to the artifact.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the artifact.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string;
}

/**
 * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
 *          deployment.</p>
 * @public
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
   * @public
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
   * @public
   */
  EndpointName?: string;
}

/**
 * @public
 */
export interface CreateAutoMLJobRequest {
  /**
   * <p>Identifies an Autopilot job. The name must be unique to your account and is case
   *          insensitive.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>An array of channel objects that describes the input data and its location. Each channel
   *          is a named input source. Similar to <code>InputDataConfig</code> supported by <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a>. Format(s) supported: CSV, Parquet. A
   *          minimum of 500 rows is required for the training dataset. There is not a minimum number of
   *          rows required for the validation dataset.</p>
   * @public
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Provides information about encryption and the Amazon S3 output path needed to store artifacts
   *          from an AutoML job. Format(s) supported: CSV.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Defines the type of supervised learning problem available for the candidates. For more
   *          information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types">
   *             SageMaker Autopilot problem types</a>.</p>
   * @public
   */
  ProblemType?: ProblemType;

  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job. If not specified,
   *          the default objective metric depends on the problem type. See <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html">AutoMLJobObjective</a> for the default values.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>A collection of settings used to configure an AutoML job.</p>
   * @public
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>The ARN of the role that is used to access the data.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Generates possible candidates without training the models. A candidate is a combination
   *          of data preprocessors, algorithms, and algorithm parameter settings.</p>
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *          resources in different ways, for example, by purpose, owner, or environment. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web ServicesResources</a>. Tag keys must be unique per
   *          resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
   *          deployment.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig;
}

/**
 * @public
 */
export interface CreateAutoMLJobResponse {
  /**
   * <p>The unique ARN assigned to the AutoML job when it is created.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAutoMLJobV2Request {
  /**
   * <p>Identifies an Autopilot job. The name must be unique to your account and is case
   *          insensitive.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>An array of channel objects describing the input data and their location. Each channel
   *          is a named input source. Similar to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html#sagemaker-CreateAutoMLJob-request-InputDataConfig">InputDataConfig</a> attribute in the <code>CreateAutoMLJob</code> input parameters.
   *          The supported formats depend on the problem type:</p>
   *          <ul>
   *             <li>
   *                <p>For tabular problem types: <code>S3Prefix</code>,
   *                <code>ManifestFile</code>.</p>
   *             </li>
   *             <li>
   *                <p>For image classification: <code>S3Prefix</code>, <code>ManifestFile</code>,
   *                   <code>AugmentedManifestFile</code>.</p>
   *             </li>
   *             <li>
   *                <p>For text classification: <code>S3Prefix</code>.</p>
   *             </li>
   *             <li>
   *                <p>For time-series forecasting: <code>S3Prefix</code>.</p>
   *             </li>
   *             <li>
   *                <p>For text generation (LLMs fine-tuning): <code>S3Prefix</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * <p>Provides information about encryption and the Amazon S3 output path needed to store artifacts
   *          from an AutoML job.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Defines the configuration settings of one of the supported problem types.</p>
   * @public
   */
  AutoMLProblemTypeConfig: AutoMLProblemTypeConfig | undefined;

  /**
   * <p>The ARN of the role that is used to access the data.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *          resources in different ways, such as by purpose, owner, or environment. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web ServicesResources</a>. Tag keys must be unique per
   *          resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The security configuration for traffic encryption or Amazon VPC settings.</p>
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig;

  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job. If not specified,
   *          the default objective metric depends on the problem type. For the list of default values
   *          per problem type, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html">AutoMLJobObjective</a>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>For tabular problem types: You must either provide both the
   *                      <code>AutoMLJobObjective</code> and indicate the type of supervised learning
   *                   problem in <code>AutoMLProblemTypeConfig</code>
   *                      (<code>TabularJobConfig.ProblemType</code>), or none at all.</p>
   *                </li>
   *                <li>
   *                   <p>For text generation problem types (LLMs fine-tuning):
   *                   Fine-tuning language models in Autopilot does not
   *                   require setting the <code>AutoMLJobObjective</code> field. Autopilot fine-tunes LLMs
   *                   without requiring multiple candidates to be trained and evaluated.
   *                   Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a
   *                   default objective metric, the cross-entropy loss. After fine-tuning a language model,
   *                   you can evaluate the quality of its generated text using different metrics.
   *                   For a list of the available metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-metrics.html">Metrics for
   *                         fine-tuning LLMs in Autopilot</a>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
   *          deployment.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>This structure specifies how to split the data into train and validation
   *          datasets.</p>
   *          <p>The validation and training datasets must contain the same headers. For jobs created by
   *          calling <code>CreateAutoMLJob</code>, the validation dataset must be less than 2 GB in
   *          size.</p>
   *          <note>
   *             <p>This attribute must not be set for the time-series forecasting problem type, as Autopilot
   *             automatically splits the input dataset into training and validation sets.</p>
   *          </note>
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig;
}

/**
 * @public
 */
export interface CreateAutoMLJobV2Response {
  /**
   * <p>The unique ARN assigned to the AutoMLJob when it is created.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The name for the new SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The instance groups to be created in the SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceGroups: ClusterInstanceGroupSpecification[] | undefined;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
   *             have access to. You can control access to and from your resources by configuring a VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Custom tags for managing the SageMaker HyperPod cluster as an Amazon Web Services resource. You can
   *          add tags to your cluster in the same way you add them in other Amazon Web Services services
   *          that support tagging. To learn more about tagging Amazon Web Services resources in general,
   *          see <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html">Tagging Amazon Web Services Resources User Guide</a>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository. The name must have 1 to 63 characters. Valid
   *          characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>Specifies details about the repository, including the URL where the repository is
   *          located, the default branch, and credentials to use to access the repository.</p>
   * @public
   */
  GitConfig: GitConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *          resources in different ways, for example, by purpose, owner, or environment. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCodeRepositoryOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new repository.</p>
   * @public
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Framework = {
  DARKNET: "DARKNET",
  KERAS: "KERAS",
  MXNET: "MXNET",
  ONNX: "ONNX",
  PYTORCH: "PYTORCH",
  SKLEARN: "SKLEARN",
  TENSORFLOW: "TENSORFLOW",
  TFLITE: "TFLITE",
  XGBOOST: "XGBOOST",
} as const;

/**
 * @public
 */
export type Framework = (typeof Framework)[keyof typeof Framework];

/**
 * <p>Contains information about the location of input model artifacts, the name and
 *             shape
 *             of the expected data inputs, and the framework in which the model was trained.</p>
 * @public
 */
export interface InputConfig {
  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a
   *             JSON dictionary form. The data inputs are <code>Framework</code> specific. </p>
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
   *                                     <code>\{"input":[1,1024,1024,3]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>\{\"input\":[1,1024,1024,3]\}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>\{"data1": [1,28,28,1],
   *                                         "data2":[1,28,28,1]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>\{\"data1\": [1,28,28,1],
   *                                         \"data2\":[1,28,28,1]\}</code>
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
   *                                     <code>\{"input_1":[1,3,224,224]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>\{\"input_1\":[1,3,224,224]\}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>\{"input_1": [1,3,224,224],
   *                                         "input_2":[1,3,224,224]\} </code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>\{\"input_1\": [1,3,224,224],
   *                                         \"input_2\":[1,3,224,224]\}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MXNET/ONNX/DARKNET</code>: You must specify the name and shape (NCHW
   *                     format) of the expected data inputs in order using a dictionary format for your
   *                     trained model. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                <ul>
   *                   <li>
   *                      <p>Examples for one input:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console,
   *                                     <code>\{"data":[1,3,1024,1024]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>\{\"data\":[1,3,1024,1024]\}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Examples for two inputs:</p>
   *                      <ul>
   *                         <li>
   *                            <p>If using the console, <code>\{"var1": [1,1,28,28],
   *                                         "var2":[1,1,28,28]\} </code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>\{\"var1\": [1,1,28,28],
   *                                         \"var2\":[1,1,28,28]\}</code>
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
   *                                     <code>\{"input0":[1,3,224,224]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI,
   *                                     <code>\{\"input0\":[1,3,224,224]\}</code>
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
   *                            <p>If using the console, <code>\{"input0":[1,3,224,224],
   *                                         "input1":[1,3,224,224]\}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>If using the CLI, <code>\{\"input0\":[1,3,224,224],
   *                                         \"input1\":[1,3,224,224]\} </code>
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
   *             <code>TargetDevice</code> (ML Model format):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>shape</code>: Input shape, for example <code>\{"input_1": \{"shape":
   *                         [1,224,224,3]\}\}</code>. In addition to static input shapes, CoreML converter
   *                     supports Flexible input shapes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Range Dimension. You can use the Range Dimension feature if you know
   *                             the input shape will be within some specific interval in that dimension,
   *                             for example: <code>\{"input_1": \{"shape": ["1..10", 224, 224,
   *                             3]\}\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Enumerated shapes. Sometimes, the models are trained to work only on a
   *                             select set of inputs. You can enumerate all supported input shapes, for
   *                             example: <code>\{"input_1": \{"shape": [[1, 224, 224, 3], [1, 160, 160,
   *                                 3]]\}\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_shape</code>: Default input shape. You can set a default shape
   *                     during conversion for both Range Dimension and Enumerated Shapes. For example
   *                         <code>\{"input_1": \{"shape": ["1..10", 224, 224, 3], "default_shape": [1,
   *                         224, 224, 3]\}\}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>: Input type. Allowed values: <code>Image</code> and
   *                         <code>Tensor</code>. By default, the converter generates an ML Model with
   *                     inputs of type Tensor (MultiArray). User can set input type to be Image. Image
   *                     input type requires additional input parameters such as <code>bias</code> and
   *                         <code>scale</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bias</code>: If the input type is an Image, you need to provide the bias
   *                     vector.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scale</code>: If the input type is an Image, you need to provide a scale
   *                     factor.</p>
   *             </li>
   *          </ul>
   *          <p>CoreML <code>ClassifierConfig</code> parameters can be specified using <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html">OutputConfig</a>
   *             <code>CompilerOptions</code>. CoreML converter supports Tensorflow and PyTorch models.
   *             CoreML conversion examples:</p>
   *          <ul>
   *             <li>
   *                <p>Tensor type input:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": \{"input_1": \{"shape": [[1,224,224,3],
   *                                 [1,160,160,3]], "default_shape": [1,224,224,3]\}\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Tensor type input without input name (PyTorch):</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": [\{"shape": [[1,3,224,224], [1,3,160,160]],
   *                                 "default_shape": [1,3,224,224]\}]</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Image type input:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": \{"input_1": \{"shape": [[1,224,224,3],
   *                                 [1,160,160,3]], "default_shape": [1,224,224,3], "type": "Image",
   *                                 "bias": [-1,-1,-1], "scale": 0.007843137255\}\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": \{"class_labels":
   *                                 "imagenet_labels_1000.txt"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Image type input without input name (PyTorch):</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": [\{"shape": [[1,3,224,224], [1,3,160,160]],
   *                                 "default_shape": [1,3,224,224], "type": "Image", "bias": [-1,-1,-1],
   *                                 "scale": 0.007843137255\}]</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": \{"class_labels":
   *                                 "imagenet_labels_1000.txt"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>Depending on the model format, <code>DataInputConfig</code> requires the following
   *             parameters for <code>ml_eia2</code>
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-TargetDevice">OutputConfig:TargetDevice</a>.</p>
   *          <ul>
   *             <li>
   *                <p>For TensorFlow models saved in the SavedModel format, specify the input names
   *                     from <code>signature_def_key</code> and the input model shapes for
   *                         <code>DataInputConfig</code>. Specify the <code>signature_def_key</code> in
   *                         <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a> if the model does not
   *                     use TensorFlow's default signature def key. For example:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": \{"inputs": [1, 224, 224, 3]\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": \{"signature_def_key":
   *                                 "serving_custom"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For TensorFlow models saved as a frozen graph, specify the input tensor names
   *                     and shapes in <code>DataInputConfig</code> and the output tensor names for
   *                         <code>output_names</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a>. For
   *                     example:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": \{"input_tensor:0": [1, 224, 224,
   *                             3]\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": \{"output_names":
   *                             ["output_tensor:0"]\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  DataInputConfig?: string;

  /**
   * <p>Identifies the framework in which the model was trained. For example:
   *             TENSORFLOW.</p>
   * @public
   */
  Framework: Framework | undefined;

  /**
   * <p>Specifies the framework version to use. This API field is only supported for the
   *             MXNet, PyTorch, TensorFlow and TensorFlow Lite frameworks.</p>
   *          <p>For information about framework versions supported for cloud targets and edge devices,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-cloud.html">Cloud
   *                 Supported Instance Types and Frameworks</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-devices-edge-frameworks.html">Edge Supported
   *                 Frameworks</a>.</p>
   * @public
   */
  FrameworkVersion?: string;
}

/**
 * <p>Contains information about a target platform that you want your model to run on, such
 *             as OS, architecture, and accelerators. It is an alternative of
 *             <code>TargetDevice</code>.</p>
 * @public
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
   *                         <code>"CompilerOptions": \{'ANDROID_PLATFORM': 28\}</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Os: TargetPlatformOs | undefined;

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
   * @public
   */
  Arch: TargetPlatformArch | undefined;

  /**
   * <p>Specifies a target platform accelerator (optional).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NVIDIA</code>: Nvidia graphics processing unit. It also requires
   *                         <code>gpu-code</code>, <code>trt-ver</code>, <code>cuda-ver</code> compiler
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
   * @public
   */
  Accelerator?: TargetPlatformAccelerator;
}
