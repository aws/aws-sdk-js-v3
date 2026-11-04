// smithy-typescript generated code
import type {
  ActionStatus,
  ActiveClusterOperationName,
  AdditionalS3DataSourceDataType,
  AggregationTransformationValue,
  AIBenchmarkJobStatus,
  AICapacityReservationPreference,
  AIRecommendationInferenceFramework,
  AIRecommendationInstanceType,
  AIRecommendationJobStatus,
  AIRecommendationMetric,
  AIRecommendationOptimizationType,
  AlgorithmStatus,
  AppInstanceType,
  AppStatus,
  AppType,
  ArtifactSourceIdType,
  AssemblyType,
  AssociationEdgeType,
  AsyncNotificationTopicTypes,
  AthenaResultCompressionType,
  AthenaResultFormat,
  AutoMLAlgorithm,
  AutoMLChannelType,
  AutoMLJobObjectiveType,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLMetricEnum,
  AutoMLMetricExtendedEnum,
  AutoMLMode,
  AutoMLProcessingUnit,
  AutoMLS3DataType,
  AutotuneMode,
  BatchAddClusterNodesErrorCode,
  BatchDeleteClusterNodesErrorCode,
  BatchRebootClusterNodesErrorCode,
  BatchReplaceClusterNodesErrorCode,
  BatchStrategy,
  CandidateStatus,
  CandidateStepType,
  CapacityReservationType,
  CapacitySizeType,
  CaptureMode,
  ClarifyFeatureType,
  ClarifyTextGranularity,
  ClarifyTextLanguage,
  CleanupFailureErrorCode,
  ClusterAutoScalerType,
  ClusterAutoScalingMode,
  ClusterAutoScalingStatus,
  ClusterCapacityType,
  ClusterEventLevel,
  ClusterEventResourceType,
  ClusterFSxLustreDeletionPolicy,
  ClusterImageVersionStatus,
  ClusterInstanceStatus,
  ClusterInstanceType,
  ClusterInterfaceType,
  ClusterKubernetesTaintEffect,
  ClusterPatchingStrategy,
  ClusterSlurmConfigStrategy,
  ClusterSlurmNodeType,
  CompressionType,
  DatabaseConfigurationRollbackStatus,
  DataSourceName,
  DeepHealthCheckType,
  DetailedAlgorithmStatus,
  FeatureStatus,
  FileSystemAccessMode,
  FileSystemType,
  FillingType,
  InstanceGroupStatus,
  LifecycleManagement,
  MetricSetSource,
  MIGProfileType,
  ModelApprovalStatus,
  ModelCompressionType,
  ModelPackageRegistrationType,
  ModelPackageStatus,
  NodeUnavailabilityType,
  ObjectiveStatus,
  OutputCompressionType,
  ProblemType,
  ProcessingS3DataDistributionType,
  ProcessingS3InputMode,
  ProductionVariantInstanceType,
  RecordWrapper,
  S3DataDistribution,
  S3DataType,
  S3ModelDataType,
  SlurmHealthComponent,
  SlurmHealthReason,
  SlurmHealthStatus,
  SoftwareUpdateStatus,
  SplitType,
  TrafficRoutingConfigType,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingRepositoryAccessMode,
  TransformInstanceType,
  VolumeAttachmentStatus,
} from "./enums";

/**
 * Configuration for allocating accelerator partitions.
 *
 * @public
 */
export interface AcceleratorPartitionConfig {
  /**
   * The Multi-Instance GPU (MIG) profile type that defines the partition configuration. The profile specifies the compute and memory allocation for each partition instance. The available profile types depend on the instance type specified in the compute quota configuration.
   *
   * @public
   */
  Type: MIGProfileType | undefined;

  /**
   * The number of accelerator partitions to allocate with the specified partition type. If you don't specify a value for vCPU and MemoryInGiB, SageMaker AI automatically allocates ratio-based values for those parameters based on the accelerator partition count you provide.
   *
   * @public
   */
  Count: number | undefined;
}

/**
 * Configuration of the resources used for the compute allocation definition.
 *
 * @public
 */
export interface ComputeQuotaResourceConfig {
  /**
   * The instance type of the instance group for the cluster.
   *
   * @public
   */
  InstanceType: ClusterInstanceType | undefined;

  /**
   * The number of instances to add to the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The number of accelerators to allocate. If you don't specify a value for vCPU and MemoryInGiB, SageMaker AI automatically allocates ratio-based values for those parameters based on the number of accelerators you provide. For example, if you allocate 16 out of 32 total accelerators, SageMaker AI uses the ratio of 0.5 and allocates values to vCPU and MemoryInGiB.
   *
   * @public
   */
  Accelerators?: number | undefined;

  /**
   * The number of vCPU to allocate. If you specify a value only for vCPU, SageMaker AI automatically allocates ratio-based values for MemoryInGiB based on this vCPU parameter. For example, if you allocate 20 out of 40 total vCPU, SageMaker AI uses the ratio of 0.5 and allocates values to MemoryInGiB. Accelerators are set to 0.
   *
   * @public
   */
  VCpu?: number | undefined;

  /**
   * The amount of memory in GiB to allocate. If you specify a value only for this parameter, SageMaker AI automatically allocates a ratio-based value for vCPU based on this memory that you provide. For example, if you allocate 200 out of 400 total memory in GiB, SageMaker AI uses the ratio of 0.5 and allocates values to vCPU. Accelerators are set to 0.
   *
   * @public
   */
  MemoryInGiB?: number | undefined;

  /**
   * The accelerator partition configuration for fractional GPU allocation.
   *
   * @public
   */
  AcceleratorPartition?: AcceleratorPartitionConfig | undefined;
}

/**
 * A layout of accelerator partitions for a production variant. On NVIDIA GPUs, the partitions are Multi-Instance GPU (MIG) instances. SageMaker applies the layout to every accelerator on the variant's instance type. You can't change the layout of a running endpoint. To use a different layout, create a new endpoint.
 *
 * @public
 */
export interface AcceleratorPartitionLayout {
  /**
   * The list of partition profiles to carve on each accelerator that this layout applies to. On NVIDIA GPUs these are Multi-Instance GPU (MIG) profiles, for example `["mig-3g.40gb", "mig-4g.40gb"]`. The order of the profiles doesn't change how the accelerator is partitioned. However, when you update an endpoint, a layout with the same profiles in a different order counts as a different layout, and the update is rejected. Repeat a profile to request more than one partition of that size: for example, `["mig-3g.40gb", "mig-3g.40gb"]` requests two `mig-3g.40gb` partitions.
   *
   * @public
   */
  AcceleratorPartitionTypes?: string[] | undefined;
}

/**
 * A structure describing the source of an action.
 *
 * @public
 */
export interface ActionSource {
  /**
   * The URI of the source.
   *
   * @public
   */
  SourceUri: string | undefined;

  /**
   * The type of the source.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The ID of the source.
   *
   * @public
   */
  SourceId?: string | undefined;
}

/**
 * Lists the properties of an *action*. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The Amazon Resource Name (ARN) of the action.
   *
   * @public
   */
  ActionArn?: string | undefined;

  /**
   * The name of the action.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * The source of the action.
   *
   * @public
   */
  Source?: ActionSource | undefined;

  /**
   * The type of the action.
   *
   * @public
   */
  ActionType?: string | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * When the action was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the action was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface AddAssociationRequest {
  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn: string | undefined;

  /**
   * The type of association. The following are suggested uses for each type. Amazon SageMaker places no restrictions on their use.
   *
   * - ContributedTo - The source contributed to the destination or had a part in enabling the destination. For example, the training data contributed to the training job.
   * - AssociatedWith - The source is connected to the destination. For example, an approval workflow is associated with a model deployment.
   * - DerivedFrom - The destination is a modification of the source. For example, a digest output of a channel input for a processing job is derived from the original inputs.
   * - Produced - The source generated the destination. For example, a training job produced a model artifact.
   *
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;
}

/**
 * @public
 */
export interface AddAssociationResponse {
  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * Specifies an instance group and the number of nodes to add to it.
 *
 * @public
 */
export interface AddClusterNodeSpecification {
  /**
   * The name of the instance group to which you want to add nodes.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * The number of nodes to add to the specified instance group. The total number of nodes across all instance groups in a single request cannot exceed 50.
   *
   * @public
   */
  IncrementTargetCountBy: number | undefined;

  /**
   * The availability zones in which to add nodes. Use this to target node placement in specific availability zones within a flexible instance group.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The instance types to use when adding nodes. Use this to target specific instance types within a flexible instance group.
   *
   * @public
   */
  InstanceTypes?: ClusterInstanceType[] | undefined;
}

/**
 * Information about additional Elastic Network Interfaces (ENIs) associated with an instance.
 *
 * @public
 */
export interface AdditionalEnis {
  /**
   * A list of Elastic Fabric Adapter (EFA) ENIs associated with the instance.
   *
   * @public
   */
  EfaEnis?: string[] | undefined;
}

/**
 * Configuration information specifying which hub contents have accessible deployment options.
 *
 * @public
 */
export interface InferenceHubAccessConfig {
  /**
   * The ARN of the hub content for which deployment access is allowed.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
 *
 * - If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
 * - If you are an AutoML user, see the *Optional Parameters* section of *Create an AutoML job to fine-tune text generation models using the API* for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
 *
 * @public
 */
export interface ModelAccessConfig {
  /**
   * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
   *
   * @public
   */
  AcceptEula: boolean | undefined;
}

/**
 * Specifies the S3 location of ML model data to deploy.
 *
 * @public
 */
export interface S3ModelDataSource {
  /**
   * Specifies the S3 path of ML model data to deploy.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies the type of ML model data to deploy.
   *
   * If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix as part of the ML model data to deploy. A valid key name prefix identified by `S3Uri` always ends with a forward slash (/).
   *
   * If you choose `S3Object`, `S3Uri` identifies an object that is the ML model data to deploy.
   *
   * @public
   */
  S3DataType: S3ModelDataType | undefined;

  /**
   * Specifies how the ML model data is prepared.
   *
   * If you choose `Gzip` and choose `S3Object` as the value of `S3DataType`, `S3Uri` identifies an object that is a gzip-compressed TAR archive. SageMaker will attempt to decompress and untar the object during model deployment.
   *
   * If you choose `None` and chooose `S3Object` as the value of `S3DataType`, `S3Uri` identifies an object that represents an uncompressed ML model to deploy.
   *
   * If you choose None and choose `S3Prefix` as the value of `S3DataType`, `S3Uri` identifies a key name prefix, under which all objects represents the uncompressed ML model to deploy.
   *
   * If you choose None, then SageMaker will follow rules below when creating model data files under /opt/ml/model directory for use by your inference code:
   *
   * - If you choose `S3Object` as the value of `S3DataType`, then SageMaker will split the key of the S3 object referenced by `S3Uri` by slash (/), and use the last part as the filename of the file holding the content of the S3 object.
   * - If you choose `S3Prefix` as the value of `S3DataType`, then for each S3 object under the key name pefix referenced by `S3Uri`, SageMaker will trim its key by the prefix, and use the remainder as the path (relative to `/opt/ml/model`) of the file holding the content of the S3 object. SageMaker will split the remainder by slash (/), using intermediate parts as directory names and the last part as filename of the file holding the content of the S3 object.
   * - Do not use any of the following as file names or directory names:
   *
   *   - An empty or blank string
   *   - A string which contains null bytes
   *   - A string longer than 255 bytes
   *   - A single dot (`.`)
   *   - A double dot (`..`)
   * - Ambiguous file names will result in model deployment failure. For example, if your uncompressed ML model consists of two S3 objects `s3://mybucket/model/weights` and `s3://mybucket/model/weights/part1` and you specify `s3://mybucket/model/` as the value of `S3Uri` and `S3Prefix` as the value of `S3DataType`, then it will result in name clash between `/opt/ml/model/weights` (a regular file) and `/opt/ml/model/weights/` (a directory).
   * - Do not organize the model artifacts in [S3 console using folders](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html). When you create a folder in S3 console, S3 creates a 0-byte object with a key set to the folder name you provide. They key of the 0-byte object ends with a slash (/) which violates SageMaker restrictions on model artifact file names, leading to model deployment failure.
   *
   * @public
   */
  CompressionType: ModelCompressionType | undefined;

  /**
   * Specifies the access configuration file for the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
   *
   * @public
   */
  ModelAccessConfig?: ModelAccessConfig | undefined;

  /**
   * Configuration information for hub access.
   *
   * @public
   */
  HubAccessConfig?: InferenceHubAccessConfig | undefined;

  /**
   * The Amazon S3 URI of the manifest file. The manifest file is a CSV file that stores the artifact locations.
   *
   * @public
   */
  ManifestS3Uri?: string | undefined;

  /**
   * The ETag associated with S3 URI.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The ETag associated with Manifest S3 URI.
   *
   * @public
   */
  ManifestEtag?: string | undefined;
}

/**
 * Data sources that are available to your model in addition to the one that you specify for `ModelDataSource` when you use the `CreateModel` action.
 *
 * @public
 */
export interface AdditionalModelDataSource {
  /**
   * A custom name for this `AdditionalModelDataSource` object.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * Specifies the S3 location of ML model data to deploy.
   *
   * @public
   */
  S3DataSource: S3ModelDataSource | undefined;
}

/**
 * A data source used for training or inference that is in addition to the input dataset or model data.
 *
 * @public
 */
export interface AdditionalS3DataSource {
  /**
   * The data type of the additional data source that you specify for use in inference or training.
   *
   * @public
   */
  S3DataType: AdditionalS3DataSourceDataType | undefined;

  /**
   * The uniform resource identifier (URI) used to identify an additional data source used in inference or training.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The type of compression used for an additional data source used in inference or training. Specify `None` if your additional data source is not compressed.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * The ETag associated with S3 URI.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * Identifies the foundation model that was used as the starting point for model customization.
 *
 * @public
 */
export interface BaseModel {
  /**
   * The hub content name of the base model.
   *
   * @public
   */
  HubContentName?: string | undefined;

  /**
   * The hub content version of the base model.
   *
   * @public
   */
  HubContentVersion?: string | undefined;

  /**
   * The recipe name of the base model.
   *
   * @public
   */
  RecipeName?: string | undefined;
}

/**
 * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
 *
 * @public
 */
export interface ModelDataSource {
  /**
   * Specifies the S3 location of ML model data to deploy.
   *
   * @public
   */
  S3DataSource?: S3ModelDataSource | undefined;
}

/**
 * Input object for the model.
 *
 * @public
 */
export interface ModelInput {
  /**
   * The input configuration object for the model.
   *
   * @public
   */
  DataInputConfig: string | undefined;
}

/**
 * Describes the Docker container for the model package.
 *
 * @public
 */
export interface ModelPackageContainerDefinition {
  /**
   * The DNS host name for the Docker container.
   *
   * @public
   */
  ContainerHostname?: string | undefined;

  /**
   * The Amazon Elastic Container Registry (Amazon ECR) path where inference code is stored.
   *
   * If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * An MD5 hash of the training algorithm that identifies the Docker image used for training.
   *
   * @public
   */
  ImageDigest?: string | undefined;

  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
   *
   * > **Note:** The model artifacts must be in an S3 bucket that is in the same region as the model package.
   *
   * @public
   */
  ModelDataUrl?: string | undefined;

  /**
   * Specifies the location of ML model data to deploy during endpoint creation.
   *
   * @public
   */
  ModelDataSource?: ModelDataSource | undefined;

  /**
   * The Amazon Web Services Marketplace product ID of the model package.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The environment variables to set in the Docker container. Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * A structure with Model Input details.
   *
   * @public
   */
  ModelInput?: ModelInput | undefined;

  /**
   * The machine learning framework of the model package container image.
   *
   * @public
   */
  Framework?: string | undefined;

  /**
   * The framework version of the Model Package Container Image.
   *
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model. You can find a list of benchmarked models by calling `ListModelMetadata`.
   *
   * @public
   */
  NearestModelName?: string | undefined;

  /**
   * Data sources that are available to your model in addition to the one that you specify for `ModelDataSource` when you use the `CreateModelPackage` action.
   *
   * @public
   */
  AdditionalModelDataSources?: AdditionalModelDataSource[] | undefined;

  /**
   * The additional data source that is used during inference in the Docker container for your model package.
   *
   * @public
   */
  AdditionalS3DataSource?: AdditionalS3DataSource | undefined;

  /**
   * The ETag associated with Model Data URL.
   *
   * @public
   */
  ModelDataETag?: string | undefined;

  /**
   * Specifies whether the model data is a training checkpoint.
   *
   * @public
   */
  IsCheckpoint?: boolean | undefined;

  /**
   * Identifies the foundation model that was used as the starting point for model customization.
   *
   * @public
   */
  BaseModel?: BaseModel | undefined;
}

/**
 * A structure of additional Inference Specification. Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
 *
 * @public
 */
export interface AdditionalInferenceSpecificationDefinition {
  /**
   * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the additional Inference specification
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   *
   * @public
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   *
   * @public
   */
  SupportedTransformInstanceTypes?: TransformInstanceType[] | undefined;

  /**
   * A list of the instance types that are used to generate inferences in real-time.
   *
   * @public
   */
  SupportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceType[] | undefined;

  /**
   * The supported MIME types for the input data.
   *
   * @public
   */
  SupportedContentTypes?: string[] | undefined;

  /**
   * The supported MIME types for the output data.
   *
   * @public
   */
  SupportedResponseMIMETypes?: string[] | undefined;
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker Amazon Web Services resources.
 *
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 *
 * For more information on adding metadata to your Amazon Web Services resources with tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing Amazon Web Services resources with tagging, see [Tagging Best Practices: Implement an Effective Amazon Web Services Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key. Tag keys must be unique per resource.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsInput {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsOutput {
  /**
   * A list of tags associated with the SageMaker resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Edge Manager agent version.
 *
 * @public
 */
export interface AgentVersion {
  /**
   * Version of the agent.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The number of Edge Manager agents.
   *
   * @public
   */
  AgentCount: number | undefined;
}

/**
 * A LoRA adapter entry identified by a model package ARN.
 *
 * @public
 */
export interface AIAdapterModelPackageEntry {
  /**
   * A unique identifier for the adapter. This ID is used as the inference component name when the adapter is deployed. The ID must start and end with an alphanumeric character, can contain hyphens between alphanumeric characters, and can be up to 63 characters long.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package that contains the LoRA adapter artifacts.
   *
   * @public
   */
  ModelPackageArn: string | undefined;
}

/**
 * A LoRA adapter entry identified by an Amazon S3 URI.
 *
 * @public
 */
export interface AIAdapterS3Entry {
  /**
   * A unique identifier for the adapter. This ID is used as the inference component name when the adapter is deployed. The ID must start and end with an alphanumeric character, can contain hyphens between alphanumeric characters, and can be up to 63 characters long.
   *
   * @public
   */
  AdapterId: string | undefined;

  /**
   * The Amazon S3 URI of the directory that contains the LoRA adapter artifacts in PEFT format.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * The source of LoRA adapters for an AI recommendation job. This is a union type — specify exactly one of the members.
 *
 * @public
 */
export type AIAdapterSource =
  | AIAdapterSource.ModelPackageArnsMember
  | AIAdapterSource.S3UrisMember
  | AIAdapterSource.$UnknownMember;

/**
 * @public
 */
export namespace AIAdapterSource {
  /**
   * A list of LoRA adapters identified by their model package ARNs. Use this when your adapters were produced by a SageMaker AI fine-tuning workflow that registers model packages.
   *
   * @public
   */
  export interface ModelPackageArnsMember {
    ModelPackageArns: AIAdapterModelPackageEntry[];
    S3Uris?: never;
    $unknown?: never;
  }

  /**
   * A list of LoRA adapters identified by their Amazon S3 URIs. Use this when your adapters are stored as raw artifacts in Amazon S3.
   *
   * @public
   */
  export interface S3UrisMember {
    ModelPackageArns?: never;
    S3Uris: AIAdapterS3Entry[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ModelPackageArns?: never;
    S3Uris?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ModelPackageArns: (value: AIAdapterModelPackageEntry[]) => T;
    S3Uris: (value: AIAdapterS3Entry[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An inference component to benchmark.
 *
 * @public
 */
export interface AIBenchmarkInferenceComponent {
  /**
   * The name or Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The SageMaker endpoint configuration for benchmarking.
 *
 * @public
 */
export interface AIBenchmarkEndpoint {
  /**
   * The name or Amazon Resource Name (ARN) of the SageMaker endpoint to benchmark.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The hostname of the specific container to target within a multi-container endpoint.
   *
   * @public
   */
  TargetContainerHostname?: string | undefined;

  /**
   * The list of inference components to benchmark on the endpoint.
   *
   * @public
   */
  InferenceComponents?: AIBenchmarkInferenceComponent[] | undefined;
}

/**
 * Summary information about an AI benchmark job.
 *
 * @public
 */
export interface AIBenchmarkJobSummary {
  /**
   * The name of the benchmark job.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benchmark job.
   *
   * @public
   */
  AIBenchmarkJobArn: string | undefined;

  /**
   * The status of the benchmark job.
   *
   * @public
   */
  AIBenchmarkJobStatus: AIBenchmarkJobStatus | undefined;

  /**
   * A timestamp that indicates when the benchmark job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates when the benchmark job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The name of the AI workload configuration used by the benchmark job.
   *
   * @public
   */
  AIWorkloadConfigName?: string | undefined;
}

/**
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * The network configuration for an AI benchmark job.
 *
 * @public
 */
export interface AIBenchmarkNetworkConfig {
  /**
   * The VPC configuration, including security group IDs and subnet IDs.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * The MLflow tracking configuration for logging metrics and parameters to a SageMaker managed MLflow tracking server.
 *
 * @public
 */
export interface AIMlflowConfig {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker managed MLflow resource.
   *
   * @public
   */
  MlflowResourceArn: string | undefined;

  /**
   * The MLflow experiment name used for tracking.
   *
   * @public
   */
  MlflowExperimentName?: string | undefined;

  /**
   * The MLflow run name used for tracking.
   *
   * @public
   */
  MlflowRunName?: string | undefined;
}

/**
 * The output configuration for an AI benchmark job.
 *
 * @public
 */
export interface AIBenchmarkOutputConfig {
  /**
   * The Amazon S3 URI where benchmark results are stored.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * The MLflow tracking configuration for the job. If you don't specify this parameter, MLflow tracking is disabled.
   *
   * @public
   */
  MlflowConfig?: AIMlflowConfig | undefined;
}

/**
 * CloudWatch log information for an AI benchmark or recommendation job.
 *
 * @public
 */
export interface AICloudWatchLogs {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group.
   *
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * The name of the CloudWatch log stream.
   *
   * @public
   */
  LogStreamName?: string | undefined;
}

/**
 * The output result of an AI benchmark job, including the Amazon S3 location and CloudWatch log information.
 *
 * @public
 */
export interface AIBenchmarkOutputResult {
  /**
   * The Amazon S3 URI where benchmark results are stored.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * The CloudWatch log information for the benchmark job.
   *
   * @public
   */
  CloudWatchLogs?: AICloudWatchLogs[] | undefined;

  /**
   * The MLflow tracking configuration for the job.
   *
   * @public
   */
  MlflowConfig?: AIMlflowConfig | undefined;
}

/**
 * The target for an AI benchmark job. This is a union type — specify one of the members.
 *
 * @public
 */
export type AIBenchmarkTarget =
  | AIBenchmarkTarget.EndpointMember
  | AIBenchmarkTarget.$UnknownMember;

/**
 * @public
 */
export namespace AIBenchmarkTarget {
  /**
   * The SageMaker endpoint to benchmark.
   *
   * @public
   */
  export interface EndpointMember {
    Endpoint: AIBenchmarkEndpoint;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Endpoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Endpoint: (value: AIBenchmarkEndpoint) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The capacity reservation configuration for an AI recommendation job.
 *
 * @public
 */
export interface AICapacityReservationConfig {
  /**
   * The capacity reservation preference. The only valid value is `capacity-reservations-only`.
   *
   * @public
   */
  CapacityReservationPreference?: AICapacityReservationPreference | undefined;

  /**
   * The list of ML reservation ARNs to use.
   *
   * @public
   */
  MlReservationArns?: string[] | undefined;
}

/**
 * The Amazon S3 data source for an AI workload.
 *
 * @public
 */
export interface AIWorkloadS3DataSource {
  /**
   * The Amazon S3 URI of the data.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * The data source for an AI workload input data channel.
 *
 * @public
 */
export interface AIWorkloadDataSource {
  /**
   * The Amazon S3 data source configuration.
   *
   * @public
   */
  S3DataSource?: AIWorkloadS3DataSource | undefined;
}

/**
 * A channel of input data for an AI workload configuration. Each channel has a name and a data source.
 *
 * @public
 */
export interface AIWorkloadInputDataConfig {
  /**
   * The logical name for the data channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The data source for this channel.
   *
   * @public
   */
  DataSource: AIWorkloadDataSource | undefined;
}

/**
 * The dataset configuration for an AI workload. This is a union type — specify one of the members.
 *
 * @public
 */
export type AIDatasetConfig =
  | AIDatasetConfig.InputDataConfigMember
  | AIDatasetConfig.$UnknownMember;

/**
 * @public
 */
export namespace AIDatasetConfig {
  /**
   * An array of input data channel configurations for the workload.
   *
   * @public
   */
  export interface InputDataConfigMember {
    InputDataConfig: AIWorkloadInputDataConfig[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InputDataConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    InputDataConfig: (value: AIWorkloadInputDataConfig[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon S3 model source configuration.
 *
 * @public
 */
export interface AIModelSourceS3 {
  /**
   * The Amazon S3 URI of the model artifacts.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * The source of the model for an AI recommendation job. This is a union type.
 *
 * @public
 */
export type AIModelSource =
  | AIModelSource.S3Member
  | AIModelSource.$UnknownMember;

/**
 * @public
 */
export namespace AIModelSource {
  /**
   * The Amazon S3 location of the model artifacts.
   *
   * @public
   */
  export interface S3Member {
    S3: AIModelSourceS3;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3: (value: AIModelSourceS3) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The per-recommendation LoRA adapter details. Contains both the model package ARNs and Amazon S3 URIs for each adapter, regardless of which form was originally supplied in the request. When you supply only Amazon S3 URIs, Amazon SageMaker AI creates model packages on your behalf.
 *
 * @public
 */
export interface AIRecommendationAdapterDetails {
  /**
   * The list of LoRA adapters with their model package ARNs.
   *
   * @public
   */
  ModelPackageArns: AIAdapterModelPackageEntry[] | undefined;

  /**
   * The list of LoRA adapters with their Amazon S3 URIs.
   *
   * @public
   */
  S3Uris: AIAdapterS3Entry[] | undefined;
}

/**
 * An Amazon S3 data channel for a recommended deployment configuration, containing model artifacts or optimized model outputs.
 *
 * @public
 */
export interface AIRecommendationDeploymentS3Channel {
  /**
   * A custom name for this Amazon S3 data channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The Amazon S3 URI of the data for this channel.
   *
   * @public
   */
  Uri?: string | undefined;
}

/**
 * The deployment configuration for a recommendation.
 *
 * @public
 */
export interface AIRecommendationDeploymentConfiguration {
  /**
   * The Amazon S3 data channels for the deployment.
   *
   * @public
   */
  S3?: AIRecommendationDeploymentS3Channel[] | undefined;

  /**
   * The URI of the container image for the deployment.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The recommended instance type for the deployment.
   *
   * @public
   */
  InstanceType?: AIRecommendationInstanceType | undefined;

  /**
   * The recommended number of instances for the deployment.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The number of model copies per instance.
   *
   * @public
   */
  CopyCountPerInstance?: number | undefined;

  /**
   * The environment variables for the deployment.
   *
   * @public
   */
  EnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The minimum host (CPU) memory, in MiB, to reserve for each model copy when deploying the recommendation as an Inference Component. This value maps to the Inference Component's `ComputeResourceRequirements$MinMemoryRequiredInMb` field.
   *
   * @public
   */
  MinCpuMemoryRequiredInMb?: number | undefined;
}

/**
 * An expected performance metric for a recommendation.
 *
 * @public
 */
export interface AIRecommendationPerformanceMetric {
  /**
   * The name of the performance metric.
   *
   * @public
   */
  Metric: string | undefined;

  /**
   * The statistical measure for the metric.
   *
   * @public
   */
  Stat?: string | undefined;

  /**
   * The value of the metric.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The unit of the metric value.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * Instance details for a recommendation.
 *
 * @public
 */
export interface AIRecommendationInstanceDetail {
  /**
   * The recommended instance type.
   *
   * @public
   */
  InstanceType?: AIRecommendationInstanceType | undefined;

  /**
   * The recommended number of instances.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The number of model copies per instance.
   *
   * @public
   */
  CopyCountPerInstance?: number | undefined;
}

/**
 * Details about the model package in a recommendation.
 *
 * @public
 */
export interface AIRecommendationModelDetails {
  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn?: string | undefined;

  /**
   * The name of the inference specification within the model package.
   *
   * @public
   */
  InferenceSpecificationName?: string | undefined;

  /**
   * The instance details for this recommendation, including instance type, count, and model copies per instance.
   *
   * @public
   */
  InstanceDetails?: AIRecommendationInstanceDetail[] | undefined;
}

/**
 * Details about an optimization technique applied in a recommendation.
 *
 * @public
 */
export interface AIRecommendationOptimizationDetail {
  /**
   * The type of optimization. Valid values are `SpeculativeDecoding` and `KernelTuning`.
   *
   * @public
   */
  OptimizationType: AIRecommendationOptimizationType | undefined;

  /**
   * A map of configuration parameters for the optimization technique.
   *
   * @public
   */
  OptimizationConfig?: Record<string, string> | undefined;
}

/**
 * An optimization recommendation generated by an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendation {
  /**
   * A description of the recommendation.
   *
   * @public
   */
  RecommendationDescription?: string | undefined;

  /**
   * The optimization techniques applied in this recommendation.
   *
   * @public
   */
  OptimizationDetails?: AIRecommendationOptimizationDetail[] | undefined;

  /**
   * Details about the model package associated with this recommendation.
   *
   * @public
   */
  ModelDetails?: AIRecommendationModelDetails | undefined;

  /**
   * The deployment configuration for this recommendation, including the container image, instance type, instance count, and environment variables.
   *
   * @public
   */
  DeploymentConfiguration?: AIRecommendationDeploymentConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benchmark job associated with this recommendation.
   *
   * @public
   */
  AIBenchmarkJobArn?: string | undefined;

  /**
   * The expected performance metrics for this recommendation.
   *
   * @public
   */
  ExpectedPerformance?: AIRecommendationPerformanceMetric[] | undefined;

  /**
   * The LoRA adapter details for this recommendation. This field contains both the model package ARNs and Amazon S3 URIs for each adapter, regardless of which form was originally supplied. This field is absent when the job was created without LoRA adapters.
   *
   * @public
   */
  AdapterDetails?: AIRecommendationAdapterDetails | undefined;
}

/**
 * The compute resource specification for an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationComputeSpec {
  /**
   * The list of instance types to consider for recommendations. You can specify up to 3 instance types.
   *
   * @public
   */
  InstanceTypes?: AIRecommendationInstanceType[] | undefined;

  /**
   * The capacity reservation configuration.
   *
   * @public
   */
  CapacityReservationConfig?: AICapacityReservationConfig | undefined;
}

/**
 * A performance constraint for an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationConstraint {
  /**
   * The performance metric. Valid values are `ttft-ms` (time to first token in milliseconds), `throughput`, and `cost`.
   *
   * @public
   */
  Metric: AIRecommendationMetric | undefined;
}

/**
 * The inference framework for an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationInferenceSpecification {
  /**
   * The inference framework. Valid values are `LMI` and `VLLM`.
   *
   * @public
   */
  Framework?: AIRecommendationInferenceFramework | undefined;
}

/**
 * Summary information about an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationJobSummary {
  /**
   * The name of the recommendation job.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommendation job.
   *
   * @public
   */
  AIRecommendationJobArn: string | undefined;

  /**
   * The status of the recommendation job.
   *
   * @public
   */
  AIRecommendationJobStatus: AIRecommendationJobStatus | undefined;

  /**
   * A timestamp that indicates when the recommendation job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates when the recommendation job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * The output configuration for an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationOutputConfig {
  /**
   * The Amazon S3 URI where recommendation results are stored.
   *
   * @public
   */
  S3OutputLocation?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the model package group where the optimized model is registered as a new model package version.
   *
   * @public
   */
  ModelPackageGroupIdentifier?: string | undefined;

  /**
   * The MLflow tracking configuration for the job. If you don't specify this parameter, MLflow tracking is disabled.
   *
   * @public
   */
  MlflowConfig?: AIMlflowConfig | undefined;
}

/**
 * The output configuration for an AI recommendation job, including the S3 location for results and the model package group for deployment.
 *
 * @public
 */
export interface AIRecommendationOutputResult {
  /**
   * The Amazon S3 URI where the recommendation job writes its output results.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the model package group where deployment-ready model packages are registered.
   *
   * @public
   */
  ModelPackageGroupIdentifier?: string | undefined;

  /**
   * The MLflow tracking configuration for the job.
   *
   * @public
   */
  MlflowConfig?: AIMlflowConfig | undefined;
}

/**
 * The performance targets for an AI recommendation job.
 *
 * @public
 */
export interface AIRecommendationPerformanceTarget {
  /**
   * An array of performance constraints that define the optimization objectives.
   *
   * @public
   */
  Constraints: AIRecommendationConstraint[] | undefined;
}

/**
 * The workload specification for benchmark tool configuration. Provide an inline YAML or JSON string.
 *
 * @public
 */
export type WorkloadSpec =
  | WorkloadSpec.InlineMember
  | WorkloadSpec.$UnknownMember;

/**
 * @public
 */
export namespace WorkloadSpec {
  /**
   * An inline YAML or JSON string that defines benchmark parameters.
   *
   * @public
   */
  export interface InlineMember {
    Inline: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Inline?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Inline: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The benchmark tool configuration for an AI workload.
 *
 * @public
 */
export interface AIWorkloadConfigs {
  /**
   * The workload specification that defines benchmark parameters.
   *
   * @public
   */
  WorkloadSpec: WorkloadSpec | undefined;
}

/**
 * Summary information about an AI workload configuration.
 *
 * @public
 */
export interface AIWorkloadConfigSummary {
  /**
   * The name of the AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigArn: string | undefined;

  /**
   * A timestamp that indicates when the configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of a CloudWatch alarm in your account.
   *
   * @public
   */
  AlarmName?: string | undefined;
}

/**
 * The details of the alarm to monitor during the AMI update.
 *
 * @public
 */
export interface AlarmDetails {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName: string | undefined;
}

/**
 * Specifies a metric that the training algorithm writes to `stderr` or `stdout`. You can view these logs to understand how your training job performs and check for any errors encountered during training. SageMaker hyperparameter tuning captures all defined metrics. Specify one of the defined metrics to use as an objective metric using the [TuningObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-TuningObjective) parameter in the `HyperParameterTrainingJobDefinition` API to evaluate job performance during hyperparameter tuning.
 *
 * @public
 */
export interface MetricDefinition {
  /**
   * The name of the metric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A regular expression that searches the output of a training job and gets the value of the metric. For more information about using regular expressions to define metrics, see [Defining metrics and environment variables](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
   *
   * @public
   */
  Regex: string | undefined;
}

/**
 * An object containing authentication information for a private Docker registry.
 *
 * @public
 */
export interface TrainingRepositoryAuthConfig {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function used to give SageMaker access credentials to your private Docker registry.
   *
   * @public
   */
  TrainingRepositoryCredentialsProviderArn: string | undefined;
}

/**
 * The configuration to use an image from a private Docker registry for a training job.
 *
 * @public
 */
export interface TrainingImageConfig {
  /**
   * The method that your training job will use to gain access to the images in your private Docker registry. For access to an image in a private Docker registry, set to `Vpc`.
   *
   * @public
   */
  TrainingRepositoryAccessMode: TrainingRepositoryAccessMode | undefined;

  /**
   * An object containing authentication information for a private Docker registry containing your training images.
   *
   * @public
   */
  TrainingRepositoryAuthConfig?: TrainingRepositoryAuthConfig | undefined;
}

/**
 * Specifies the training algorithm to use in a [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) request.
 *
 * > **Important:** SageMaker uses its own SageMaker account credentials to pull and access built-in algorithms so built-in algorithms are universally accessible across all Amazon Web Services accounts. As a result, built-in algorithms have standard, unrestricted access. You cannot restrict built-in algorithms using IAM roles. Use custom algorithms if you require specific access controls.
 *
 * For more information about algorithms provided by SageMaker, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). For information about using your own algorithms, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
 *
 * @public
 */
export interface AlgorithmSpecification {
  /**
   * The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for SageMaker built-in algorithms, see [Docker Registry Paths and Example Code](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html) in the *Amazon SageMaker developer guide*. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information about using your custom training container, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * > **Note:**
   * >
   * > You must specify either the algorithm name to the `AlgorithmName` parameter or the image URI of the algorithm container to the `TrainingImage` parameter.
   * >
   * > For more information, see the note in the `AlgorithmName` parameter description.
   *
   * @public
   */
  TrainingImage?: string | undefined;

  /**
   * The name of the algorithm resource to use for the training job. This must be an algorithm resource that you created or subscribe to on Amazon Web Services Marketplace.
   *
   * > **Note:**
   * >
   * > You must specify either the algorithm name to the `AlgorithmName` parameter or the image URI of the algorithm container to the `TrainingImage` parameter.
   * >
   * > Note that the `AlgorithmName` parameter is mutually exclusive with the `TrainingImage` parameter. If you specify a value for the `AlgorithmName` parameter, you can't specify a value for `TrainingImage`, and vice versa.
   * >
   * > If you specify values for both parameters, the training job might break; if you don't specify any value for both parameters, the training job might raise a `null` error.
   *
   * @public
   */
  AlgorithmName?: string | undefined;

  /**
   * The training input mode that the algorithm supports. For more information about input modes, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html).
   *
   * **Pipe mode**
   *
   * If an algorithm supports `Pipe` mode, Amazon SageMaker streams data directly from Amazon S3 to the container.
   *
   * **File mode**
   *
   * If an algorithm supports `File` mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container.
   *
   * You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any.
   *
   * For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training.
   *
   * **FastFile mode**
   *
   * If an algorithm supports `FastFile` mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk.
   *
   * `FastFile` mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
   *
   * @public
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. SageMaker publishes each metric to Amazon CloudWatch.
   *
   * @public
   */
  MetricDefinitions?: MetricDefinition[] | undefined;

  /**
   * To generate and save time-series metrics during training, set to `true`. The default is `false` and time-series metrics aren't generated except in the following cases:
   *
   * - You use one of the SageMaker built-in algorithms
   * - You use one of the following [Prebuilt SageMaker Docker Images](https://docs.aws.amazon.com/sagemaker/latest/dg/pre-built-containers-frameworks-deep-learning.html):
   *
   *   - Tensorflow (version &gt;= 1.15)
   *   - MXNet (version &gt;= 1.6)
   *   - PyTorch (version &gt;= 1.3)
   * - You specify at least one [MetricDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_MetricDefinition.html)
   *
   * @public
   */
  EnableSageMakerMetricsTimeSeries?: boolean | undefined;

  /**
   * The [entrypoint script for a Docker container](https://docs.docker.com/engine/reference/builder/) used to run a training job. This script takes precedence over the default train processing instructions. See [How Amazon SageMaker Runs Your Training Image](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html) for more information.
   *
   * @public
   */
  ContainerEntrypoint?: string[] | undefined;

  /**
   * The arguments for a container used to run a training job. See [How Amazon SageMaker Runs Your Training Image](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html) for additional information.
   *
   * @public
   */
  ContainerArguments?: string[] | undefined;

  /**
   * The configuration to use an image from a private Docker registry for a training job.
   *
   * @public
   */
  TrainingImageConfig?: TrainingImageConfig | undefined;
}

/**
 * Represents the overall status of an algorithm.
 *
 * @public
 */
export interface AlgorithmStatusItem {
  /**
   * The name of the algorithm for which the overall status is being reported.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current status.
   *
   * @public
   */
  Status: DetailedAlgorithmStatus | undefined;

  /**
   * if the overall status is `Failed`, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Specifies the validation and image scan statuses of the algorithm.
 *
 * @public
 */
export interface AlgorithmStatusDetails {
  /**
   * The status of algorithm validation.
   *
   * @public
   */
  ValidationStatuses?: AlgorithmStatusItem[] | undefined;

  /**
   * The status of the scan of the algorithm's Docker image container.
   *
   * @public
   */
  ImageScanStatuses?: AlgorithmStatusItem[] | undefined;
}

/**
 * Provides summary information about an algorithm.
 *
 * @public
 */
export interface AlgorithmSummary {
  /**
   * The name of the algorithm that is described by the summary.
   *
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm.
   *
   * @public
   */
  AlgorithmArn: string | undefined;

  /**
   * A brief description of the algorithm.
   *
   * @public
   */
  AlgorithmDescription?: string | undefined;

  /**
   * A timestamp that shows when the algorithm was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The overall status of the algorithm.
   *
   * @public
   */
  AlgorithmStatus: AlgorithmStatus | undefined;
}

/**
 * Specifies a dataset source for a channel.
 *
 * @public
 */
export interface DatasetSource {
  /**
   * The Amazon Resource Name (ARN) of the dataset resource.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * Specifies a file system data source for a channel.
 *
 * @public
 */
export interface FileSystemDataSource {
  /**
   * The file system id.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The access mode of the mount of the directory associated with the channel. A directory can be mounted either in `ro` (read-only) or `rw` (read-write) mode.
   *
   * @public
   */
  FileSystemAccessMode: FileSystemAccessMode | undefined;

  /**
   * The file system type.
   *
   * @public
   */
  FileSystemType: FileSystemType | undefined;

  /**
   * The full path to the directory to associate with the channel.
   *
   * @public
   */
  DirectoryPath: string | undefined;
}

/**
 * The configuration for a private hub model reference that points to a public SageMaker JumpStart model.
 *
 * For more information about private hubs, see [Private curated hubs for foundation model access control in JumpStart](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-curated-hubs.html).
 *
 * @public
 */
export interface HubAccessConfig {
  /**
   * The ARN of your private model hub content. This should be a `ModelReference` resource type that points to a SageMaker JumpStart public hub model.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * Describes the S3 data source.
 *
 * Your input bucket must be in the same Amazon Web Services region as your training job.
 *
 * @public
 */
export interface S3DataSource {
  /**
   * If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix for model training.
   *
   * If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker to use for model training.
   *
   * If you choose `AugmentedManifestFile`, `S3Uri` identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` can only be used if the Channel's input mode is `Pipe`.
   *
   * If you choose `Converse`, `S3Uri` identifies an Amazon S3 location that contains data formatted according to Converse format. This format structures conversational messages with specific roles and content types used for training and fine-tuning foundational models.
   *
   * @public
   */
  S3DataType: S3DataType | undefined;

  /**
   * Depending on the value specified for the `S3DataType`, identifies either a key name prefix or a manifest. For example:
   *
   * - A key name prefix might look like this: `s3://bucketname/exampleprefix/`
   * - A manifest might look like this: `s3://bucketname/example.manifest`
   *
   *   A manifest is an S3 object which is a JSON file consisting of an array of elements. The first element is a prefix which is followed by one or more suffixes. SageMaker appends the suffix elements to the prefix to get a full set of `S3Uri`. Note that the prefix must be a valid non-empty `S3Uri` that precludes users from specifying a manifest whose individual `S3Uri` is sourced from different S3 buckets.
   *
   *   The following code example shows a valid manifest format:
   *
   *   `[ \{"prefix": "s3://customer_bucket/some/prefix/"\},`
   *
   *   `"relative/path/to/custdata-1",`
   *
   *   `"relative/path/custdata-2",`
   *
   *   `...`
   *
   *   `"relative/path/custdata-N"`
   *
   *   `]`
   *
   *   This JSON is equivalent to the following `S3Uri` list:
   *
   *   `s3://customer_bucket/some/prefix/relative/path/to/custdata-1`
   *
   *   `s3://customer_bucket/some/prefix/relative/path/custdata-2`
   *
   *   `...`
   *
   *   `s3://customer_bucket/some/prefix/relative/path/custdata-N`
   *
   *   The complete set of `S3Uri` in this manifest is the input data for the channel for this data source. The object that each `S3Uri` points to must be readable by the IAM role that SageMaker uses to perform tasks on your behalf.
   *
   * Your input bucket must be located in same Amazon Web Services region as your training job.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * If you want SageMaker to replicate the entire dataset on each ML compute instance that is launched for model training, specify `FullyReplicated`.
   *
   * If you want SageMaker to replicate a subset of data on each ML compute instance that is launched for model training, specify `ShardedByS3Key`. If there are *n* ML compute instances launched for a training job, each instance gets approximately 1/*n* of the number of S3 objects. In this case, model training on each machine uses only the subset of training data.
   *
   * Don't choose more ML compute instances for training than available S3 objects. If you do, some nodes won't get any data and you will pay for nodes that aren't getting any training data. This applies in both File and Pipe modes. Keep this in mind when developing algorithms.
   *
   * In distributed training, where you use multiple ML compute EC2 instances, you might choose `ShardedByS3Key`. If the algorithm requires copying training data to the ML storage volume (when `TrainingInputMode` is set to `File`), this copies 1/*n* of the number of objects.
   *
   * @public
   */
  S3DataDistributionType?: S3DataDistribution | undefined;

  /**
   * A list of one or more attribute names to use that are found in a specified augmented manifest file.
   *
   * @public
   */
  AttributeNames?: string[] | undefined;

  /**
   * A list of names of instance groups that get data from the S3 data source.
   *
   * @public
   */
  InstanceGroupNames?: string[] | undefined;

  /**
   * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
   *
   * - If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
   * - If you are an AutoML user, see the *Optional Parameters* section of *Create an AutoML job to fine-tune text generation models using the API* for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
   *
   * @public
   */
  ModelAccessConfig?: ModelAccessConfig | undefined;

  /**
   * The configuration for a private hub model reference that points to a SageMaker JumpStart public hub model.
   *
   * @public
   */
  HubAccessConfig?: HubAccessConfig | undefined;
}

/**
 * Describes the location of the channel data.
 *
 * @public
 */
export interface DataSource {
  /**
   * The S3 location of the data source that is associated with a channel.
   *
   * @public
   */
  S3DataSource?: S3DataSource | undefined;

  /**
   * The file system that is associated with a channel.
   *
   * @public
   */
  FileSystemDataSource?: FileSystemDataSource | undefined;

  /**
   * The dataset resource that's associated with a channel.
   *
   * @public
   */
  DatasetSource?: DatasetSource | undefined;
}

/**
 * A configuration for a shuffle option for input data in a channel. If you use `S3Prefix` for `S3DataType`, the results of the S3 key prefix matches are shuffled. If you use `ManifestFile`, the order of the S3 object references in the `ManifestFile` is shuffled. If you use `AugmentedManifestFile`, the order of the JSON lines in the `AugmentedManifestFile` is shuffled. The shuffling order is determined using the `Seed` value.
 *
 * For Pipe input mode, when `ShuffleConfig` is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when `ShuffleConfig` is combined with `S3DataDistributionType` of `ShardedByS3Key`, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
 *
 * @public
 */
export interface ShuffleConfig {
  /**
   * Determines the shuffling order in `ShuffleConfig` value.
   *
   * @public
   */
  Seed: number | undefined;
}

/**
 * A channel is a named input source that training algorithms can consume.
 *
 * @public
 */
export interface Channel {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The location of the channel data.
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * The MIME type of the data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * If training data is compressed, the compression type. The default value is `None`. `CompressionType` is used only in Pipe input mode. In File mode, leave this field unset or set it to None.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * Specify RecordIO as the value when input data is in raw format but the training algorithm requires the RecordIO format. In this case, SageMaker wraps each individual S3 object in a RecordIO record. If the input data is already in RecordIO format, you don't need to set this attribute. For more information, see [Create a Dataset Using RecordIO](https://mxnet.apache.org/api/architecture/note_data_loading#data-format).
   *
   * In File mode, leave this field unset or set it to None.
   *
   * @public
   */
  RecordWrapperType?: RecordWrapper | undefined;

  /**
   * (Optional) The input mode to use for the data channel in a training job. If you don't set a value for `InputMode`, SageMaker uses the value set for `TrainingInputMode`. Use this parameter to override the `TrainingInputMode` setting in a [AlgorithmSpecification](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html) request when you have a channel that needs a different input mode from the training job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML storage volume, and mount the directory to a Docker volume, use `File` input mode. To stream data directly from Amazon S3 to the container, choose `Pipe` input mode.
   *
   * To use a model for incremental training, choose `File` input model.
   *
   * @public
   */
  InputMode?: TrainingInputMode | undefined;

  /**
   * A configuration for a shuffle option for input data in a channel. If you use `S3Prefix` for `S3DataType`, this shuffles the results of the S3 key prefix matches. If you use `ManifestFile`, the order of the S3 object references in the `ManifestFile` is shuffled. If you use `AugmentedManifestFile`, the order of the JSON lines in the `AugmentedManifestFile` is shuffled. The shuffling order is determined using the `Seed` value.
   *
   * For Pipe input mode, shuffling is done at the start of every epoch. With large datasets this ensures that the order of the training data is different for each epoch, it helps reduce bias and possible overfitting. In a multi-node training job when ShuffleConfig is combined with `S3DataDistributionType` of `ShardedByS3Key`, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
   *
   * @public
   */
  ShuffleConfig?: ShuffleConfig | undefined;
}

/**
 * Provides information about how to store model training results (model artifacts).
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The `KmsKeyId` can be any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // KMS Key Alias
   *
   *   `"alias/ExampleAlias"`
   * - // Amazon Resource Name (ARN) of a KMS Key Alias
   *
   *   `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
   *
   * If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call `kms:Encrypt`. If you don't provide a KMS key ID, SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide*. If the output data is stored in Amazon S3 Express One Zone, it is encrypted with server-side encryption with Amazon S3 managed keys (SSE-S3). KMS key is not supported for Amazon S3 Express One Zone
   *
   * The KMS key policy must grant permission to the IAM role that you specify in your `CreateTrainingJob`, `CreateTransformJob`, or `CreateHyperParameterTuningJob` requests. For more information, see [Using Key Policies in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Identifies the S3 path where you want SageMaker to store the model artifacts. For example, `s3://bucket-name/key-name-prefix`.
   *
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * The model output compression type. Select `None` to output an uncompressed model, recommended for large model outputs. Defaults to gzip.
   *
   * @public
   */
  CompressionType?: OutputCompressionType | undefined;
}

/**
 * Defines an instance group for heterogeneous cluster training. When requesting a training job using the [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) API, you can configure multiple instance groups .
 *
 * @public
 */
export interface InstanceGroup {
  /**
   * Specifies the instance type of the instance group.
   *
   * @public
   */
  InstanceType: TrainingInstanceType | undefined;

  /**
   * Specifies the number of instances of the instance group.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Specifies the name of the instance group.
   *
   * @public
   */
  InstanceGroupName: string | undefined;
}

/**
 * Specifies how instances should be placed on a specific UltraServer.
 *
 * @public
 */
export interface PlacementSpecification {
  /**
   * The unique identifier of the UltraServer where instances should be placed.
   *
   * @public
   */
  UltraServerId?: string | undefined;

  /**
   * The number of ML compute instances required to be placed together on the same UltraServer. Minimum value of 1.
   *
   * @public
   */
  InstanceCount: number | undefined;
}

/**
 * Configuration for how instances are placed and allocated within UltraServers. This is only applicable for UltraServer capacity.
 *
 * @public
 */
export interface InstancePlacementConfig {
  /**
   * If set to true, allows multiple jobs to share the same UltraServer instances. If set to false, ensures this job's instances are placed on an UltraServer exclusively, with no other jobs sharing the same UltraServer. Default is false.
   *
   * @public
   */
  EnableMultipleJobs?: boolean | undefined;

  /**
   * A list of specifications for how instances should be placed on specific UltraServers. Maximum of 10 items is supported.
   *
   * @public
   */
  PlacementSpecifications?: PlacementSpecification[] | undefined;
}

/**
 * A candidate instance type preference in an `InstancePreferences` list.
 *
 * @public
 */
export interface InstancePreference {
  /**
   * The ML compute instance type. An instance type can appear only once in an `InstancePreferences` list.
   *
   * @public
   */
  InstanceType: TrainingInstanceType | undefined;

  /**
   * The number of instances to launch if this instance type is selected. Specify the instance count for the training job in one of the following two ways:
   *
   * 1. **Per preference** – Set `InstanceCount` on every preference in the `InstancePreferences` list and don't set `ResourceConfig$InstanceCount`. Use this when each instance type needs a different number of instances to deliver equivalent compute.
   * 2. **One count for the job** – Set `ResourceConfig$InstanceCount` and omit it from every preference. SageMaker applies this to all instance types in the list.
   *
   * For example, in a list of five preferences, either all five specify `InstanceCount` or none of them do. SageMaker rejects requests that set `InstanceCount` on only some preferences, that set it both per preference and in `ResourceConfig`, or that omit it in both places.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of a training plan to use if this instance type is selected. The plan's instance type must match `InstanceType`. A preference with a training plan uses that plan's reserved capacity; a preference without one uses on-demand capacity. Per-preference `TrainingPlanArns` is mutually exclusive with the job-level `TrainingPlanArn` in `ResourceConfig`.
   *
   * @public
   */
  TrainingPlanArns?: string[] | undefined;
}

/**
 * Describes the resources, including machine learning (ML) compute instances and ML storage volumes, to use for model training.
 *
 * @public
 */
export interface ResourceConfig {
  /**
   * The ML compute instance type.
   *
   * @public
   */
  InstanceType?: TrainingInstanceType | undefined;

  /**
   * The number of ML compute instances to use. For distributed training, provide a value greater than 1.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The size of the ML storage volume that you want to provision.
   *
   * SageMaker automatically selects the volume size for serverless training jobs. You cannot customize this setting.
   *
   * ML storage volumes store model artifacts and incremental states. Training algorithms might also use the ML storage volume for scratch space. If you want to store the training data in the ML storage volume, choose `File` as the `TrainingInputMode` in the algorithm specification.
   *
   * When using an ML instance with [NVMe SSD volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html#nvme-ssd-volumes), SageMaker doesn't provision Amazon EBS General Purpose SSD (gp2) storage. Available storage is fixed to the NVMe-type instance's storage capacity. SageMaker configures storage paths for training datasets, checkpoints, model artifacts, and outputs to use the entire capacity of the instance storage. For example, ML instance families with the NVMe-type instance storage include `ml.p4d`, `ml.g4dn`, and `ml.g5`.
   *
   * When using an ML instance with the EBS-only storage option and without instance storage, you must define the size of EBS volume through `VolumeSizeInGB` in the `ResourceConfig` API. For example, ML instance families that use EBS volumes include `ml.c5` and `ml.p2`.
   *
   * To look up instance types and their instance storage types and volumes, see [Amazon EC2 Instance Types](http://aws.amazon.com/ec2/instance-types/).
   *
   * To find the default local paths defined by the SageMaker training platform, see [Amazon SageMaker Training Storage Folders for Training Datasets, Checkpoints, Model Artifacts, and Outputs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-train-storage.html).
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * The Amazon Web Services KMS key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job.
   *
   * > **Note:**
   * >
   * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `VolumeKmsKeyId` when using an instance type with local storage.
   * >
   * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   * >
   * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
   *
   * The `VolumeKmsKeyId` can be in any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * The duration of time in seconds to retain configured resources in a warm pool for subsequent training jobs.
   *
   * @public
   */
  KeepAlivePeriodInSeconds?: number | undefined;

  /**
   * The configuration of a heterogeneous cluster in JSON format.
   *
   * @public
   */
  InstanceGroups?: InstanceGroup[] | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan to use for this resource configuration.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;

  /**
   * Configuration for how training job instances are placed and allocated within UltraServers. Only applicable for UltraServer capacity.
   *
   * @public
   */
  InstancePlacementConfig?: InstancePlacementConfig | undefined;

  /**
   * An ordered list of ML compute instance types for the training job, in priority order. SageMaker launches the training job on the first instance type in the list that has available capacity. If capacity is insufficient, SageMaker evaluates the next instance type in the preferred list. Exactly one instance type is selected for the job.
   *
   * `InstancePreferences` is mutually exclusive with `InstanceType`, `InstanceGroups`, `InstancePlacementConfig`, and `EnableManagedSpotTraining`, and supports only Flexible Training Plans (FTP) and On-Demand capacity.
   *
   * @public
   */
  InstancePreferences?: InstancePreference[] | undefined;

  /**
   * The instance type that SageMaker selected for the job from the provided `InstancePreferences`. The job is billed for this instance type and count. Returned by `DescribeTrainingJob` after an instance type is selected. This field is read-only and isn't accepted in `CreateTrainingJob` requests.
   *
   * @public
   */
  SelectedInstanceType?: TrainingInstanceType | undefined;

  /**
   * The number of instances of `SelectedInstanceType` that the training job launched with. The job is billed for this instance type and count. Returned by `DescribeTrainingJob` after an instance type is selected. This field is read-only and isn't accepted in `CreateTrainingJob` requests.
   *
   * @public
   */
  SelectedInstanceCount?: number | undefined;
}

/**
 * Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
 *
 * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
 *
 * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel`.
 *
 * > **Note:** The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
 *
 * @public
 */
export interface StoppingCondition {
  /**
   * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
   *
   * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
   *
   * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
   *
   * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
   *
   * @public
   */
  MaxRuntimeInSeconds?: number | undefined;

  /**
   * The maximum length of time, in seconds, that a managed Spot training job has to complete. It is the amount of time spent waiting for Spot capacity plus the amount of time the job can run. It must be equal to or greater than `MaxRuntimeInSeconds`. If the job does not complete during this time, SageMaker ends the job.
   *
   * When `RetryStrategy` is specified in the job request, `MaxWaitTimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt.
   *
   * @public
   */
  MaxWaitTimeInSeconds?: number | undefined;

  /**
   * The maximum length of time, in seconds, that a training or compilation job can be pending before it is stopped.
   *
   * > **Note:**
   * >
   * > When working with training jobs that use capacity from [training plans](https://docs.aws.amazon.com/sagemaker/latest/dg/reserve-capacity-with-training-plans.html), not all `Pending` job states count against the `MaxPendingTimeInSeconds` limit. The following scenarios do not increment the `MaxPendingTimeInSeconds` counter:
   * >
   * > - The plan is in a `Scheduled` state: Jobs queued (in `Pending` status) before a plan's start date (waiting for scheduled start time)
   * > - Between capacity reservations: Jobs temporarily back to `Pending` status between two capacity reservation periods
   * >
   * > `MaxPendingTimeInSeconds` only increments when jobs are actively waiting for capacity in an `Active` plan.
   *
   * > **Note:**
   * >
   * > - `MaxPendingTimeInSeconds` takes effect only for jobs that request accelerated computing instance types, such as instances in the `ml.p`, `ml.g`, and `ml.trn` families. It has no effect on jobs that request CPU-only instance types.
   * > - If the job specifies `InstancePreferences`, `MaxPendingTimeInSeconds` bounds the total time SageMaker spends working through your list of instance types. It is not applied per instance type preference, and takes effect only when the list includes at least one accelerated computing instance type.
   *
   * @public
   */
  MaxPendingTimeInSeconds?: number | undefined;
}

/**
 * Defines the input needed to run a training job using the algorithm.
 *
 * @public
 */
export interface TrainingJobDefinition {
  /**
   * The training input mode that the algorithm supports. For more information about input modes, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html).
   *
   * **Pipe mode**
   *
   * If an algorithm supports `Pipe` mode, Amazon SageMaker streams data directly from Amazon S3 to the container.
   *
   * **File mode**
   *
   * If an algorithm supports `File` mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container.
   *
   * You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any.
   *
   * For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training.
   *
   * **FastFile mode**
   *
   * If an algorithm supports `FastFile` mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk.
   *
   * `FastFile` mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
   *
   * @public
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * The hyperparameters used for the training job.
   *
   * @public
   */
  HyperParameters?: Record<string, string> | undefined;

  /**
   * An array of `Channel` objects, each of which specifies an input source.
   *
   * @public
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * the path to the S3 bucket where you want to store model artifacts. SageMaker creates subfolders for the artifacts.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The resources, including the ML compute instances and ML storage volumes, to use for model training.
   *
   * @public
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * Specifies a limit to how long a model training job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs.
   *
   * To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts.
   *
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;
}

/**
 * Describes the S3 data source.
 *
 * @public
 */
export interface TransformS3DataSource {
  /**
   * If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for batch transform.
   *
   * If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch transform.
   *
   * The following values are compatible: `ManifestFile`, `S3Prefix`
   *
   * The following value is not compatible: `AugmentedManifestFile`
   *
   * @public
   */
  S3DataType: S3DataType | undefined;

  /**
   * Depending on the value specified for the `S3DataType`, identifies either a key name prefix or a manifest. For example:
   *
   * - A key name prefix might look like this: `s3://bucketname/exampleprefix/`.
   * - A manifest might look like this: `s3://bucketname/example.manifest`
   *
   *   The manifest is an S3 object which is a JSON file with the following format:
   *
   *   `[ \{"prefix": "s3://customer_bucket/some/prefix/"\},`
   *
   *   `"relative/path/to/custdata-1",`
   *
   *   `"relative/path/custdata-2",`
   *
   *   `...`
   *
   *   `"relative/path/custdata-N"`
   *
   *   `]`
   *
   *   The preceding JSON matches the following `S3Uris`:
   *
   *   `s3://customer_bucket/some/prefix/relative/path/to/custdata-1`
   *
   *   `s3://customer_bucket/some/prefix/relative/path/custdata-2`
   *
   *   `...`
   *
   *   `s3://customer_bucket/some/prefix/relative/path/custdata-N`
   *
   *   The complete set of `S3Uris` in this manifest constitutes the input data for the channel for this datasource. The object that each `S3Uris` points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Describes the location of the channel data.
 *
 * @public
 */
export interface TransformDataSource {
  /**
   * The S3 location of the data source that is associated with a channel.
   *
   * @public
   */
  S3DataSource: TransformS3DataSource | undefined;
}

/**
 * Describes the input source of a transform job and the way the transform job consumes it.
 *
 * @public
 */
export interface TransformInput {
  /**
   * Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.
   *
   * @public
   */
  DataSource: TransformDataSource | undefined;

  /**
   * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is `None`.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * The method to use to split the transform job's data files into smaller batches. Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for `SplitType` is `None`, which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to `Line` to split records on a newline character boundary. `SplitType` also supports a number of record-oriented binary data formats. Currently, the supported record formats are:
   *
   * - RecordIO
   * - TFRecord
   *
   * When splitting is enabled, the size of a mini-batch depends on the values of the `BatchStrategy` and `MaxPayloadInMB` parameters. When the value of `BatchStrategy` is `MultiRecord`, Amazon SageMaker sends the maximum number of records in each request, up to the `MaxPayloadInMB` limit. If the value of `BatchStrategy` is `SingleRecord`, Amazon SageMaker sends individual records in each request.
   *
   * > **Note:**
   * >
   * > Some data formats represent a record as a binary payload wrapped with extra padding bytes. When splitting is applied to a binary data format, padding is removed if the value of `BatchStrategy` is set to `SingleRecord`. Padding is not removed if the value of `BatchStrategy` is set to `MultiRecord`.
   * >
   * > For more information about `RecordIO`, see [Create a Dataset Using RecordIO](https://mxnet.apache.org/api/faq/recordio) in the MXNet documentation. For more information about `TFRecord`, see [Consuming TFRecord data](https://www.tensorflow.org/guide/data#consuming_tfrecord_data) in the TensorFlow documentation.
   *
   * @public
   */
  SplitType?: SplitType | undefined;
}

/**
 * Describes the results of a transform job.
 *
 * @public
 */
export interface TransformOutput {
  /**
   * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, `s3://bucket-name/key-name-prefix`.
   *
   * For every S3 object used as input for the transform job, batch transform stores the transformed data with an .`out` suffix in a corresponding subfolder in the location in the output prefix. For example, for the input data stored at `s3://bucket-name/input-name-prefix/dataset01/data.csv`, batch transform stores the transformed data at `s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out`. Batch transform doesn't upload partially processed objects. For an input S3 object that contains multiple records, it creates an .`out` file only if the transform job succeeds on the entire file. When the input contains multiple S3 objects, the batch transform job processes the listed S3 objects and uploads only the output for successfully processed objects. If any object fails in the transform job batch transform marks the job as failed to prompt investigation.
   *
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
   *
   * @public
   */
  Accept?: string | undefined;

  /**
   * Defines how to assemble the results of the transform job as a single S3 object. Choose a format that is most convenient to you. To concatenate the results in binary format, specify `None`. To add a newline character at the end of every transformed record, specify `Line`.
   *
   * @public
   */
  AssembleWith?: AssemblyType | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The `KmsKeyId` can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
   *
   * The KMS key policy must grant permission to the IAM role that you specify in your [CreateModel](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html) request. For more information, see [Using Key Policies in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
 *
 * @public
 */
export interface TransformResources {
  /**
   * The ML compute instance type for the transform job. If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or `ml.m5.large`instance types.
   *
   * @public
   */
  InstanceType: TransformInstanceType | undefined;

  /**
   * The number of ML compute instances to use in the transform job. The default value is `1`, and the maximum is `100`. For distributed transform jobs, specify a value greater than `1`.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
   *
   * > **Note:**
   * >
   * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `VolumeKmsKeyId` when using an instance type with local storage.
   * >
   * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   * >
   * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
   *
   * The `VolumeKmsKeyId` can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. Each image is configured by Amazon Web Services with a set of software and driver versions.
   *
   * - **al2-ami-sagemaker-batch-gpu-470**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 470
   *
   * - **al2-ami-sagemaker-batch-gpu-535**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 535
   *
   * @public
   */
  TransformAmiVersion?: string | undefined;
}

/**
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
 *
 * @public
 */
export interface TransformJobDefinition {
  /**
   * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
   *
   * @public
   */
  MaxConcurrentTransforms?: number | undefined;

  /**
   * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
   *
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * A string that determines the number of records included in a single mini-batch.
   *
   * `SingleRecord` means only one record is used per mini-batch. `MultiRecord` means a mini-batch is set to contain as many records that can fit within the `MaxPayloadInMB` limit.
   *
   * @public
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * A description of the input source and the way the transform job consumes it.
   *
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
   *
   * @public
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * Identifies the ML compute instances for the transform job.
   *
   * @public
   */
  TransformResources: TransformResources | undefined;
}

/**
 * Defines a training job and a batch transform job that SageMaker runs to validate your algorithm.
 *
 * The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.
 *
 * @public
 */
export interface AlgorithmValidationProfile {
  /**
   * The name of the profile for the algorithm. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
   *
   * @public
   */
  ProfileName: string | undefined;

  /**
   * The `TrainingJobDefinition` object that describes the training job that SageMaker runs to validate your algorithm.
   *
   * @public
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * The `TransformJobDefinition` object that describes the transform job that SageMaker runs to validate your algorithm.
   *
   * @public
   */
  TransformJobDefinition?: TransformJobDefinition | undefined;
}

/**
 * Specifies configurations for one or more training jobs that SageMaker runs to test the algorithm.
 *
 * @public
 */
export interface AlgorithmValidationSpecification {
  /**
   * The IAM roles that SageMaker uses to run the training jobs.
   *
   * @public
   */
  ValidationRole: string | undefined;

  /**
   * An array of `AlgorithmValidationProfile` objects, each of which specifies a training job and batch transform job that SageMaker runs to validate your algorithm.
   *
   * @public
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;
}

/**
 * A collection of settings that configure the Amazon Q experience within the domain.
 *
 * @public
 */
export interface AmazonQSettings {
  /**
   * Whether Amazon Q has been enabled within the domain.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The ARN of the Amazon Q profile used within the domain.
   *
   * @public
   */
  QProfileArn?: string | undefined;
}

/**
 * Configures how labels are consolidated across human workers and processes output data.
 *
 * @public
 */
export interface AnnotationConsolidationConfig {
  /**
   * The Amazon Resource Name (ARN) of a Lambda function implements the logic for [annotation consolidation](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html) and to process output data.
   *
   * For [built-in task types](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html), use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for `AnnotationConsolidationLambdaArn`. For custom labeling workflows, see [Post-annotation Lambda](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-postlambda).
   *
   * **Bounding box** - Finds the most similar boxes from different workers based on the Jaccard index of the boxes.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox`
   *
   * **Image classification** - Uses a variant of the Expectation Maximization approach to estimate the true class of an image based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass`
   *
   * **Multi-label image classification** - Uses a variant of the Expectation Maximization approach to estimate the true classes of an image based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel`
   *
   * **Semantic segmentation** - Treats each pixel in an image as a multi-class classification and treats pixel annotations from workers as "votes" for the correct label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation`
   *
   * **Text classification** - Uses a variant of the Expectation Maximization approach to estimate the true class of text based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass`
   *
   * **Multi-label text classification** - Uses a variant of the Expectation Maximization approach to estimate the true classes of text based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel`
   *
   * **Named entity recognition** - Groups similar selections and calculates aggregate boundaries, resolving to most-assigned label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition`
   *
   * **Video Classification** - Use this task type when you need workers to classify videos using predefined labels that you specify. Workers are shown videos and are asked to choose one label for each video.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoMultiClass`
   *
   * **Video Frame Object Detection** - Use this task type to have workers identify and locate objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to identify and localize various objects in a series of video frames, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectDetection`
   *
   * **Video Frame Object Tracking** - Use this task type to have workers track the movement of objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to track the movement of objects, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectTracking`
   *
   * **3D Point Cloud Object Detection** - Use this task type when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids around objects. For example, you can use this task type to ask workers to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectDetection`
   *
   * **3D Point Cloud Object Tracking** - Use this task type when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D point cloud frames. For example, you can use this task type to ask workers to track the movement of vehicles across multiple point cloud frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectTracking`
   *
   * **3D Point Cloud Semantic Segmentation** - Use this task type when you want workers to create a point-level semantic segmentation masks by painting objects in a 3D point cloud using different colors where each color is assigned to one of the classes you specify.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudSemanticSegmentation`
   *
   * **Use the following ARNs for Label Verification and Adjustment Jobs**
   *
   * Use label verification and adjustment jobs to review and adjust labels. To learn more, see [Verify and Adjust Labels](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html).
   *
   * **Semantic Segmentation Adjustment** - Treats each pixel in an image as a multi-class classification and treats pixel adjusted annotations from workers as "votes" for the correct label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation`
   *
   * **Semantic Segmentation Verification** - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgment for semantic segmentation labels based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation`
   *
   * **Bounding Box Adjustment** - Finds the most similar boxes from different workers based on the Jaccard index of the adjusted annotations.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox`
   *
   * **Bounding Box Verification** - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgement for bounding box labels based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox`
   *
   * **Video Frame Object Detection Adjustment** - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to classify and localize objects in a sequence of video frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectDetection`
   *
   * **Video Frame Object Tracking Adjustment** - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to track object movement across a sequence of video frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectTracking`
   *
   * **3D Point Cloud Object Detection Adjustment** - Use this task type when you want workers to adjust 3D cuboids around objects in a 3D point cloud.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection`
   *
   * **3D Point Cloud Object Tracking Adjustment** - Use this task type when you want workers to adjust 3D cuboids around objects that appear in a sequence of 3D point cloud frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectTracking`
   *
   * **3D Point Cloud Semantic Segmentation Adjustment** - Use this task type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudSemanticSegmentation`
   *
   * **Generative AI/Custom** - Direct passthrough of output data without any transformation.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:ACS-PassThrough`
   * - `arn:aws:lambda:us-east-2:266458841044:function:ACS-PassThrough`
   * - `arn:aws:lambda:us-west-2:081040173940:function:ACS-PassThrough`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:ACS-PassThrough`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-PassThrough`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-PassThrough`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:ACS-PassThrough`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:ACS-PassThrough`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-PassThrough`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:ACS-PassThrough`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-PassThrough`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:ACS-PassThrough`
   *
   * @public
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

/**
 * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
 *
 * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
 *
 * @public
 */
export interface ResourceSpec {
  /**
   * The ARN of the SageMaker AI image that the image version belongs to.
   *
   * @public
   */
  SageMakerImageArn?: string | undefined;

  /**
   * The ARN of the image version created on the instance. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  SageMakerImageVersionArn?: string | undefined;

  /**
   * The SageMakerImageVersionAlias of the image to launch with. This value is in SemVer 2.0.0 versioning format.
   *
   * @public
   */
  SageMakerImageVersionAlias?: string | undefined;

  /**
   * The instance type that the image version runs on.
   *
   * > **Note:**
   * >
   * > **JupyterServer apps** only support the `system` value.
   * >
   * > For **KernelGateway apps**, the `system` value is translated to `ml.t3.medium`. KernelGateway apps also support all other values for available instance types.
   *
   * @public
   */
  InstanceType?: AppInstanceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
   *
   * @public
   */
  LifecycleConfigArn?: string | undefined;

  /**
   * The ARN of the SageMaker AI Training Plan to use for this app. When you specify a training plan, the app launches on reserved GPU capacity. This field is supported for JupyterLab and CodeEditor app types.
   *
   * For more information about how to reserve GPU capacity with SageMaker AI Training Plans, see [Using training plans in Studio applications](https://docs.aws.amazon.com/sagemaker/latest/dg/training-plan-utilization-for-studio-apps.html).
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * Details about an Amazon SageMaker AI app.
 *
 * @public
 */
export interface AppDetails {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The user profile name.
   *
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * The type of app.
   *
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * The name of the app.
   *
   * @public
   */
  AppName?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: AppStatus | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  ResourceSpec?: ResourceSpec | undefined;
}

/**
 * The configuration used to run the application image container.
 *
 * @public
 */
export interface ContainerConfig {
  /**
   * The arguments for the container when you're running the application.
   *
   * @public
   */
  ContainerArguments?: string[] | undefined;

  /**
   * The entrypoint used to run the application in the container.
   *
   * @public
   */
  ContainerEntrypoint?: string[] | undefined;

  /**
   * The environment variables to set in the container
   *
   * @public
   */
  ContainerEnvironmentVariables?: Record<string, string> | undefined;
}

/**
 * The Amazon Elastic File System storage configuration for a SageMaker AI image.
 *
 * @public
 */
export interface FileSystemConfig {
  /**
   * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to *\/home/sagemaker-user*.
   *
   * @public
   */
  MountPath?: string | undefined;

  /**
   * The default POSIX user ID (UID). If not specified, defaults to `1000`.
   *
   * @public
   */
  DefaultUid?: number | undefined;

  /**
   * The default POSIX group ID (GID). If not specified, defaults to `100`.
   *
   * @public
   */
  DefaultGid?: number | undefined;
}

/**
 * The configuration for the file system and kernels in a SageMaker image running as a Code Editor app. The `FileSystemConfig` object is not supported.
 *
 * @public
 */
export interface CodeEditorAppImageConfig {
  /**
   * The Amazon Elastic File System storage configuration for a SageMaker AI image.
   *
   * @public
   */
  FileSystemConfig?: FileSystemConfig | undefined;

  /**
   * The configuration used to run the application image container.
   *
   * @public
   */
  ContainerConfig?: ContainerConfig | undefined;
}

/**
 * The configuration for the file system and kernels in a SageMaker AI image running as a JupyterLab app. The `FileSystemConfig` object is not supported.
 *
 * @public
 */
export interface JupyterLabAppImageConfig {
  /**
   * The Amazon Elastic File System storage configuration for a SageMaker AI image.
   *
   * @public
   */
  FileSystemConfig?: FileSystemConfig | undefined;

  /**
   * The configuration used to run the application image container.
   *
   * @public
   */
  ContainerConfig?: ContainerConfig | undefined;
}

/**
 * The specification of a Jupyter kernel.
 *
 * @public
 */
export interface KernelSpec {
  /**
   * The name of the Jupyter kernel in the image. This value is case sensitive.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name of the kernel.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * The configuration for the file system and kernels in a SageMaker AI image running as a KernelGateway app.
 *
 * @public
 */
export interface KernelGatewayImageConfig {
  /**
   * The specification of the Jupyter kernels in the image.
   *
   * @public
   */
  KernelSpecs: KernelSpec[] | undefined;

  /**
   * The Amazon Elastic File System storage configuration for a SageMaker AI image.
   *
   * @public
   */
  FileSystemConfig?: FileSystemConfig | undefined;
}

/**
 * The configuration for running a SageMaker AI image as a KernelGateway app.
 *
 * @public
 */
export interface AppImageConfigDetails {
  /**
   * The ARN of the AppImageConfig.
   *
   * @public
   */
  AppImageConfigArn?: string | undefined;

  /**
   * The name of the AppImageConfig. Must be unique to your account.
   *
   * @public
   */
  AppImageConfigName?: string | undefined;

  /**
   * When the AppImageConfig was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the AppImageConfig was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The configuration for the file system and kernels in the SageMaker AI image.
   *
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;

  /**
   * The configuration for the file system and the runtime, such as the environment variables and entry point.
   *
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig | undefined;

  /**
   * The configuration for the file system and the runtime, such as the environment variables and entry point.
   *
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig | undefined;
}

/**
 * Settings related to idle shutdown of Studio applications.
 *
 * @public
 */
export interface IdleSettings {
  /**
   * Indicates whether idle shutdown is activated for the application type.
   *
   * @public
   */
  LifecycleManagement?: LifecycleManagement | undefined;

  /**
   * The time that SageMaker waits after the application becomes idle before shutting it down.
   *
   * @public
   */
  IdleTimeoutInMinutes?: number | undefined;

  /**
   * The minimum value in minutes that custom idle shutdown can be set to by the user.
   *
   * @public
   */
  MinIdleTimeoutInMinutes?: number | undefined;

  /**
   * The maximum value in minutes that custom idle shutdown can be set to by the user.
   *
   * @public
   */
  MaxIdleTimeoutInMinutes?: number | undefined;
}

/**
 * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications.
 *
 * @public
 */
export interface AppLifecycleManagement {
  /**
   * Settings related to idle shutdown of Studio applications.
   *
   * @public
   */
  IdleSettings?: IdleSettings | undefined;
}

/**
 * Configuration to run a processing job in a specified container image.
 *
 * @public
 */
export interface AppSpecification {
  /**
   * The container image to be run by the processing job.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * The entrypoint for a container used to run a processing job.
   *
   * @public
   */
  ContainerEntrypoint?: string[] | undefined;

  /**
   * The arguments for a container used to run a processing job.
   *
   * @public
   */
  ContainerArguments?: string[] | undefined;
}

/**
 * The ID and ID type of an artifact source.
 *
 * @public
 */
export interface ArtifactSourceType {
  /**
   * The type of ID.
   *
   * @public
   */
  SourceIdType: ArtifactSourceIdType | undefined;

  /**
   * The ID.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A structure describing the source of an artifact.
 *
 * @public
 */
export interface ArtifactSource {
  /**
   * The URI of the source.
   *
   * @public
   */
  SourceUri: string | undefined;

  /**
   * A list of source types.
   *
   * @public
   */
  SourceTypes?: ArtifactSourceType[] | undefined;
}

/**
 * Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
 *
 * @public
 */
export interface ArtifactSummary {
  /**
   * The Amazon Resource Name (ARN) of the artifact.
   *
   * @public
   */
  ArtifactArn?: string | undefined;

  /**
   * The name of the artifact.
   *
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * The source of the artifact.
   *
   * @public
   */
  Source?: ArtifactSource | undefined;

  /**
   * The type of the artifact.
   *
   * @public
   */
  ArtifactType?: string | undefined;

  /**
   * When the artifact was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the artifact was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateTrialComponentRequest {
  /**
   * The name of the component to associated with the trial.
   *
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * The name of the trial to associate with.
   *
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrialComponentResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * The data type used to describe the relationship between different sources.
 *
 * @public
 */
export interface AssociationInfo {
  /**
   * The Amazon Resource Name (ARN) of the `AssociationInfo` source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `AssociationInfo` destination.
   *
   * @public
   */
  DestinationArn: string | undefined;
}

/**
 * The IAM Identity details associated with the user. These details are associated with model package groups, model packages and project entities only.
 *
 * @public
 */
export interface IamIdentity {
  /**
   * The Amazon Resource Name (ARN) of the IAM identity.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the principal that assumes the IAM identity.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The person or application which assumes the IAM identity.
   *
   * @public
   */
  SourceIdentity?: string | undefined;
}

/**
 * Information about the user who created or modified a SageMaker resource.
 *
 * @public
 */
export interface UserContext {
  /**
   * The Amazon Resource Name (ARN) of the user's profile.
   *
   * @public
   */
  UserProfileArn?: string | undefined;

  /**
   * The name of the user's profile.
   *
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * The domain associated with the user.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The IAM Identity details associated with the user. These details are associated with model package groups, model packages, and project entities only.
   *
   * @public
   */
  IamIdentity?: IamIdentity | undefined;
}

/**
 * Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
 *
 * @public
 */
export interface AssociationSummary {
  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The source type.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The destination type.
   *
   * @public
   */
  DestinationType?: string | undefined;

  /**
   * The type of the association.
   *
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;

  /**
   * The name of the source.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The name of the destination.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * When the association was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;
}

/**
 * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
 *
 * @public
 */
export interface AsyncInferenceClientConfig {
  /**
   * The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, SageMaker chooses an optimal value.
   *
   * @public
   */
  MaxConcurrentInvocationsPerInstance?: number | undefined;
}

/**
 * Specifies the configuration for notifications of inference results for asynchronous inference.
 *
 * @public
 */
export interface AsyncInferenceNotificationConfig {
  /**
   * Amazon SNS topic to post a notification to when inference completes successfully. If no topic is provided, no notification is sent on success.
   *
   * @public
   */
  SuccessTopic?: string | undefined;

  /**
   * Amazon SNS topic to post a notification to when inference fails. If no topic is provided, no notification is sent on failure.
   *
   * @public
   */
  ErrorTopic?: string | undefined;

  /**
   * The Amazon SNS topics where you want the inference response to be included.
   *
   * > **Note:** The inference response is included only if the response size is less than or equal to 128 KB.
   *
   * @public
   */
  IncludeInferenceResponseIn?: AsyncNotificationTopicTypes[] | undefined;
}

/**
 * Specifies the configuration for asynchronous inference invocation outputs.
 *
 * @public
 */
export interface AsyncInferenceOutputConfig {
  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon S3 location to upload inference responses to.
   *
   * @public
   */
  S3OutputPath?: string | undefined;

  /**
   * Specifies the configuration for notifications of inference results for asynchronous inference.
   *
   * @public
   */
  NotificationConfig?: AsyncInferenceNotificationConfig | undefined;

  /**
   * The Amazon S3 location to upload failure inference responses to.
   *
   * @public
   */
  S3FailurePath?: string | undefined;
}

/**
 * Specifies configuration for how an endpoint performs asynchronous inference.
 *
 * @public
 */
export interface AsyncInferenceConfig {
  /**
   * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
   *
   * @public
   */
  ClientConfig?: AsyncInferenceClientConfig | undefined;

  /**
   * Specifies the configuration for asynchronous inference invocation outputs.
   *
   * @public
   */
  OutputConfig: AsyncInferenceOutputConfig | undefined;
}

/**
 * Configuration for Athena Dataset Definition input.
 *
 * @public
 */
export interface AthenaDatasetDefinition {
  /**
   * The name of the data catalog used in Athena query execution.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The name of the database used in the Athena query execution.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The SQL query statements, to be executed.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The name of the workgroup in which the Athena query is being started.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * The location in Amazon S3 where Athena query results are stored.
   *
   * @public
   */
  OutputS3Uri: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The data storage format for Athena query results.
   *
   * @public
   */
  OutputFormat: AthenaResultFormat | undefined;

  /**
   * The compression used for Athena query results.
   *
   * @public
   */
  OutputCompression?: AthenaResultCompressionType | undefined;
}

/**
 * The query execution identifier and the result output location for the Amazon Athena query that an Athena step runs.
 *
 * @public
 */
export interface AthenaStepMetadata {
  /**
   * The unique identifier of the Amazon Athena query execution that was run by this step execution.
   *
   * @public
   */
  QueryExecutionId?: string | undefined;

  /**
   * The Amazon S3 location of the Amazon Athena query results. This is the effective output location reported by `GetQueryExecution` for the query. This value can be absent when the query uses Athena managed query results.
   *
   * @public
   */
  S3OutputLocation?: string | undefined;
}

/**
 * @public
 */
export interface AttachClusterNodeNetworkInterfaceRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the SageMaker HyperPod cluster that contains the target node.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The unique identifier of the cluster node to which you want to attach the network interface. The node must belong to your specified HyperPod cluster and cannot be part of a Restricted Instance Group (RIG).
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of the elastic network interface (ENI) to attach.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface AttachClusterNodeNetworkInterfaceResponse {
  /**
   * The Amazon Resource Name (ARN) of your SageMaker HyperPod cluster where the network interface attachment operation was performed.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The unique identifier of the cluster node where your network interface was attached.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of the elastic network interface (ENI) that was attached.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The unique identifier of the network interface attachment. Use this value to reference or detach the network interface later.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface AttachClusterNodeVolumeRequest {
  /**
   * The Amazon Resource Name (ARN) of your SageMaker HyperPod cluster containing the target node. Your cluster must use EKS as the orchestration and be in the `InService` state.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The unique identifier of the cluster node to which you want to attach the volume. The node must belong to your specified HyperPod cluster and cannot be part of a Restricted Instance Group (RIG).
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of your EBS volume to attach. The volume must be in the `available` state.
   *
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface AttachClusterNodeVolumeResponse {
  /**
   * The Amazon Resource Name (ARN) of your SageMaker HyperPod cluster where the volume attachment operation was performed.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The unique identifier of the cluster node where your volume was attached.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of your EBS volume that was attached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The timestamp when the volume attachment operation was initiated by the SageMaker HyperPod service.
   *
   * @public
   */
  AttachTime: Date | undefined;

  /**
   * The current status of your volume attachment operation.
   *
   * @public
   */
  Status: VolumeAttachmentStatus | undefined;

  /**
   * The device name assigned to your attached volume on the target instance.
   *
   * @public
   */
  DeviceName: string | undefined;
}

/**
 * Contains a presigned URL and its associated local file path for downloading hub content artifacts.
 *
 * @public
 */
export interface AuthorizedUrl {
  /**
   * The presigned S3 URL that provides temporary, secure access to download the file. URLs expire within 15 minutes for security purposes.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The recommended local file path where the downloaded file should be stored to maintain proper directory structure and file organization.
   *
   * @public
   */
  LocalPath?: string | undefined;
}

/**
 * The selection of algorithms trained on your dataset to generate the model candidates for an Autopilot job.
 *
 * @public
 */
export interface AutoMLAlgorithmConfig {
  /**
   * The selection of algorithms trained on your dataset to generate the model candidates for an Autopilot job.
   *
   * - **For the tabular problem type `TabularJobConfig`:**
   *
   *   > **Note:** Selected algorithms must belong to the list corresponding to the training mode set in [AutoMLJobConfig.Mode](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobConfig.html#sagemaker-Type-AutoMLJobConfig-Mode) (`ENSEMBLING` or `HYPERPARAMETER_TUNING`). Choose a minimum of 1 algorithm.
   *
   *   - In `ENSEMBLING` mode:
   *
   *     - "catboost"
   *     - "extra-trees"
   *     - "fastai"
   *     - "lightgbm"
   *     - "linear-learner"
   *     - "nn-torch"
   *     - "randomforest"
   *     - "xgboost"
   *   - In `HYPERPARAMETER_TUNING` mode:
   *
   *     - "linear-learner"
   *     - "mlp"
   *     - "xgboost"
   * - **For the time-series forecasting problem type `TimeSeriesForecastingJobConfig`:**
   *
   *   - Choose your algorithms from this list.
   *
   *     - "cnn-qr"
   *     - "deepar"
   *     - "prophet"
   *     - "arima"
   *     - "npts"
   *     - "ets"
   *
   * @public
   */
  AutoMLAlgorithms: AutoMLAlgorithm[] | undefined;
}

/**
 * The location of artifacts for an AutoML candidate job.
 *
 * @public
 */
export interface CandidateArtifactLocations {
  /**
   * The Amazon S3 prefix to the explainability artifacts generated for the AutoML candidate.
   *
   * @public
   */
  Explainability: string | undefined;

  /**
   * The Amazon S3 prefix to the model insight artifacts generated for the AutoML candidate.
   *
   * @public
   */
  ModelInsights?: string | undefined;

  /**
   * The Amazon S3 prefix to the accuracy metrics and the inference results observed over the testing window. Available only for the time-series forecasting problem type.
   *
   * @public
   */
  BacktestResults?: string | undefined;
}

/**
 * Information about the metric for a candidate produced by an AutoML job.
 *
 * @public
 */
export interface MetricDatum {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: AutoMLMetricEnum | undefined;

  /**
   * The name of the standard metric.
   *
   * > **Note:** For definitions of the standard metrics, see [`Autopilot candidate metrics`](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-metrics).
   *
   * @public
   */
  StandardMetricName?: AutoMLMetricExtendedEnum | undefined;

  /**
   * The value of the metric.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The dataset split from which the AutoML job produced the metric.
   *
   * @public
   */
  Set?: MetricSetSource | undefined;
}

/**
 * The properties of an AutoML candidate job.
 *
 * @public
 */
export interface CandidateProperties {
  /**
   * The Amazon S3 prefix to the artifacts generated for an AutoML candidate.
   *
   * @public
   */
  CandidateArtifactLocations?: CandidateArtifactLocations | undefined;

  /**
   * Information about the candidate metrics for an AutoML job.
   *
   * @public
   */
  CandidateMetrics?: MetricDatum[] | undefined;
}

/**
 * Information about the steps for a candidate and what step it is working on.
 *
 * @public
 */
export interface AutoMLCandidateStep {
  /**
   * Whether the candidate is at the transform, training, or processing step.
   *
   * @public
   */
  CandidateStepType: CandidateStepType | undefined;

  /**
   * The ARN for the candidate's step.
   *
   * @public
   */
  CandidateStepArn: string | undefined;

  /**
   * The name for the candidate's step.
   *
   * @public
   */
  CandidateStepName: string | undefined;
}

/**
 * The best candidate result from an AutoML training job.
 *
 * @public
 */
export interface FinalAutoMLJobObjectiveMetric {
  /**
   * The type of metric with the best result.
   *
   * @public
   */
  Type?: AutoMLJobObjectiveType | undefined;

  /**
   * The name of the metric with the best result. For a description of the possible objective metrics, see [AutoMLJobObjective$MetricName](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html).
   *
   * @public
   */
  MetricName: AutoMLMetricEnum | undefined;

  /**
   * The value of the metric with the best result.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The name of the standard metric. For a description of the standard metrics, see [Autopilot candidate metrics](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html#autopilot-metrics).
   *
   * @public
   */
  StandardMetricName?: AutoMLMetricEnum | undefined;
}

/**
 * A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see [ContainerDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html).
 *
 * @public
 */
export interface AutoMLContainerDefinition {
  /**
   * The Amazon Elastic Container Registry (Amazon ECR) path of the container. For more information, see [ContainerDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html).
   *
   * @public
   */
  Image: string | undefined;

  /**
   * The location of the model artifacts. For more information, see [ContainerDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html).
   *
   * @public
   */
  ModelDataUrl: string | undefined;

  /**
   * The environment variables to set in the container. For more information, see [ContainerDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html).
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
 *
 * @public
 */
export interface AutoMLCandidate {
  /**
   * The name of the candidate.
   *
   * @public
   */
  CandidateName: string | undefined;

  /**
   * The best candidate result from an AutoML training job.
   *
   * @public
   */
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric | undefined;

  /**
   * The objective's status.
   *
   * @public
   */
  ObjectiveStatus: ObjectiveStatus | undefined;

  /**
   * Information about the candidate's steps.
   *
   * @public
   */
  CandidateSteps: AutoMLCandidateStep[] | undefined;

  /**
   * The candidate's status.
   *
   * @public
   */
  CandidateStatus: CandidateStatus | undefined;

  /**
   * Information about the recommended inference container definitions.
   *
   * @public
   */
  InferenceContainers?: AutoMLContainerDefinition[] | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The end time.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The failure reason.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The properties of an AutoML candidate job.
   *
   * @public
   */
  CandidateProperties?: CandidateProperties | undefined;

  /**
   * The mapping of all supported processing unit (CPU, GPU, etc...) to inference container definitions for the candidate. This field is populated for the AutoML jobs V2 (for example, for jobs created by calling `CreateAutoMLJobV2`) related to image or text classification problem types only.
   *
   * @public
   */
  InferenceContainerDefinitions?: Partial<Record<AutoMLProcessingUnit, AutoMLContainerDefinition[]>> | undefined;
}

/**
 * Stores the configuration information for how a candidate is generated (optional).
 *
 * @public
 */
export interface AutoMLCandidateGenerationConfig {
  /**
   * A URL to the Amazon S3 data source containing selected features from the input data source to run an Autopilot job. You can input `FeatureAttributeNames` (optional) in JSON format as shown below:
   *
   * `\{ "FeatureAttributeNames":["col1", "col2", ...] \}`.
   *
   * You can also specify the data type of the feature (optional) in the format shown below:
   *
   * `\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}`
   *
   * > **Note:** These column keys may not include the target column.
   *
   * In ensembling mode, Autopilot only supports the following data types: `numeric`, `categorical`, `text`, and `datetime`. In HPO mode, Autopilot can support `numeric`, `categorical`, `text`, `datetime`, and `sequence`.
   *
   * If only `FeatureDataTypes` is provided, the column keys (`col1`, `col2`,..) should be a subset of the column names in the input data.
   *
   * If both `FeatureDataTypes` and `FeatureAttributeNames` are provided, then the column keys should be a subset of the column names provided in `FeatureAttributeNames`.
   *
   * The key name `FeatureAttributeNames` is fixed. The values listed in `["col1", "col2", ...]` are case sensitive and should be a list of strings containing unique values that are a subset of the column names in the input data. The list of columns provided must not include the target column.
   *
   * @public
   */
  FeatureSpecificationS3Uri?: string | undefined;

  /**
   * Stores the configuration information for the selection of algorithms trained on tabular data.
   *
   * The list of available algorithms to choose from depends on the training mode set in [`TabularJobConfig.Mode`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TabularJobConfig.html).
   *
   * - `AlgorithmsConfig` should not be set if the training mode is set on `AUTO`.
   * - When `AlgorithmsConfig` is provided, one `AutoMLAlgorithms` attribute must be set and one only.
   *
   *   If the list of algorithms provided as values for `AutoMLAlgorithms` is empty, `CandidateGenerationConfig` uses the full set of algorithms for the given training mode.
   * - When `AlgorithmsConfig` is not provided, `CandidateGenerationConfig` uses the full set of algorithms for the given training mode.
   *
   * For the list of all algorithms per problem type and training mode, see [AutoMLAlgorithmConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html).
   *
   * For more information on each algorithm, see the [Algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) section in Autopilot developer guide.
   *
   * @public
   */
  AlgorithmsConfig?: AutoMLAlgorithmConfig[] | undefined;
}

/**
 * Describes the Amazon S3 data source.
 *
 * @public
 */
export interface AutoMLS3DataSource {
  /**
   * The data type.
   *
   * - If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker AI uses all objects that match the specified key name prefix for model training.
   *
   *   The `S3Prefix` should have the following format:
   *
   *   `s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER-OR-FILE`
   * - If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker AI to use for model training.
   *
   *   A `ManifestFile` should have the format shown below:
   *
   *   `[ \{"prefix": "s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER/DOC-EXAMPLE-PREFIX/"\},`
   *
   *   `"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-1",`
   *
   *   `"DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-2",`
   *
   *   `... "DOC-EXAMPLE-RELATIVE-PATH/DOC-EXAMPLE-FOLDER/DATA-N" ]`
   * - If you choose `AugmentedManifestFile`, `S3Uri` identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` is available for V2 API jobs only (for example, for jobs created by calling `CreateAutoMLJobV2`).
   *
   *   Here is a minimal, single-record example of an `AugmentedManifestFile`:
   *
   *   `\{"source-ref": "s3://DOC-EXAMPLE-BUCKET/DOC-EXAMPLE-FOLDER/cats/cat.jpg",`
   *
   *   `"label-metadata": \{"class-name": "cat"` \}
   *
   *   For more information on `AugmentedManifestFile`, see [Provide Dataset Metadata to Training Jobs with an Augmented Manifest File](https://docs.aws.amazon.com/sagemaker/latest/dg/augmented-manifest.html).
   *
   * @public
   */
  S3DataType: AutoMLS3DataType | undefined;

  /**
   * The URL to the Amazon S3 data source. The Uri refers to the Amazon S3 prefix or ManifestFile depending on the data type.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * The data source for the Autopilot job.
 *
 * @public
 */
export interface AutoMLDataSource {
  /**
   * The Amazon S3 location of the input data.
   *
   * @public
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

/**
 * A channel is a named input source that training algorithms can consume. The validation dataset size is limited to less than 2 GB. The training dataset size must be less than 100 GB. For more information, see [Channel](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html).
 *
 * > **Note:** A validation dataset must contain the same headers as the training dataset.
 *
 * @public
 */
export interface AutoMLChannel {
  /**
   * The data source for an AutoML channel.
   *
   * @public
   */
  DataSource?: AutoMLDataSource | undefined;

  /**
   * You can use `Gzip` or `None`. The default value is `None`.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * The name of the target variable in supervised learning, usually represented by 'y'.
   *
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * The content type of the data from the input source. You can use `text/csv;header=present` or `x-application/vnd.amazon+parquet`. The default value is `text/csv;header=present`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The channel type (optional) is an `enum` string. The default value is `training`. Channels for training and validation must share the same `ContentType` and `TargetAttributeName`. For information on specifying training and validation channel types, see [How to specify training and validation datasets](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-data-sources-training-or-validation).
   *
   * @public
   */
  ChannelType?: AutoMLChannelType | undefined;

  /**
   * If specified, this column name indicates which column of the dataset should be treated as sample weights for use by the objective metric during the training, evaluation, and the selection of the best model. This column is not considered as a predictive feature. For more information on Autopilot metrics, see [Metrics and validation](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html).
   *
   * Sample weights should be numeric, non-negative, with larger values indicating which rows are more important than others. Data points that have invalid or no weight value are excluded.
   *
   * Support for sample weights is available in [Ensembling](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html) mode only.
   *
   * @public
   */
  SampleWeightAttributeName?: string | undefined;
}

/**
 * > **Note:** This data type is intended for use exclusively by SageMaker Canvas and cannot be used in other contexts at the moment.
 *
 * Specifies the compute configuration for the EMR Serverless job.
 *
 * @public
 */
export interface EmrServerlessComputeConfig {
  /**
   * The ARN of the IAM role granting the AutoML job V2 the necessary permissions access policies to list, connect to, or manage EMR Serverless jobs. For detailed information about the required permissions of this role, see "How to configure AutoML to initiate a remote job on EMR Serverless for large datasets" in [Create a regression or classification job for tabular data using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development-create-experiment.html) or [Create an AutoML job for time-series forecasting using the API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-timeseries-forecasting.html#timeseries-forecasting-api-optional-params).
   *
   * @public
   */
  ExecutionRoleARN: string | undefined;
}

/**
 * > **Note:** This data type is intended for use exclusively by SageMaker Canvas and cannot be used in other contexts at the moment.
 *
 * Specifies the compute configuration for an AutoML job V2.
 *
 * @public
 */
export interface AutoMLComputeConfig {
  /**
   * The configuration for using [EMR Serverless](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html) to run the AutoML job V2.
   *
   * To allow your AutoML job V2 to automatically initiate a remote job on EMR Serverless when additional compute resources are needed to process large datasets, you need to provide an `EmrServerlessComputeConfig` object, which includes an `ExecutionRoleARN` attribute, to the `AutoMLComputeConfig` of the AutoML job V2 input request.
   *
   * By seamlessly transitioning to EMR Serverless when required, the AutoML job can handle datasets that would otherwise exceed the initially provisioned resources, without any manual intervention from you.
   *
   * EMR Serverless is available for the tabular and time series problem types. We recommend setting up this option for tabular datasets larger than 5 GB and time series datasets larger than 30 GB.
   *
   * @public
   */
  EmrServerlessComputeConfig?: EmrServerlessComputeConfig | undefined;
}

/**
 * This structure specifies how to split the data into train and validation datasets.
 *
 * The validation and training datasets must contain the same headers. For jobs created by calling `CreateAutoMLJob`, the validation dataset must be less than 2 GB in size.
 *
 * @public
 */
export interface AutoMLDataSplitConfig {
  /**
   * The validation fraction (optional) is a float that specifies the portion of the training dataset to be used for validation. The default value is 0.2, and values must be greater than 0 and less than 1. We recommend setting this value to be less than 0.5.
   *
   * @public
   */
  ValidationFraction?: number | undefined;
}

/**
 * The artifacts that are generated during an AutoML job.
 *
 * @public
 */
export interface AutoMLJobArtifacts {
  /**
   * The URL of the notebook location.
   *
   * @public
   */
  CandidateDefinitionNotebookLocation?: string | undefined;

  /**
   * The URL of the notebook location.
   *
   * @public
   */
  DataExplorationNotebookLocation?: string | undefined;
}

/**
 * A channel is a named input source that training algorithms can consume. This channel is used for AutoML jobs V2 (jobs created by calling [CreateAutoMLJobV2](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html)).
 *
 * @public
 */
export interface AutoMLJobChannel {
  /**
   * The type of channel. Defines whether the data are used for training or validation. The default value is `training`. Channels for `training` and `validation` must share the same `ContentType`
   *
   * > **Note:** The type of channel defaults to `training` for the time-series forecasting problem type.
   *
   * @public
   */
  ChannelType?: AutoMLChannelType | undefined;

  /**
   * The content type of the data from the input source. The following are the allowed content types for different problems:
   *
   * - For tabular problem types: `text/csv;header=present` or `x-application/vnd.amazon+parquet`. The default value is `text/csv;header=present`.
   * - For image classification: `image/png`, `image/jpeg`, or `image/*`. The default value is `image/*`.
   * - For text classification: `text/csv;header=present` or `x-application/vnd.amazon+parquet`. The default value is `text/csv;header=present`.
   * - For time-series forecasting: `text/csv;header=present` or `x-application/vnd.amazon+parquet`. The default value is `text/csv;header=present`.
   * - For text generation (LLMs fine-tuning): `text/csv;header=present` or `x-application/vnd.amazon+parquet`. The default value is `text/csv;header=present`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The allowed compression types depend on the input format and problem type. We allow the compression type `Gzip` for `S3Prefix` inputs on tabular data only. For all other inputs, the compression type should be `None`. If no compression type is provided, we default to `None`.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * The data source for an AutoML channel (Required).
   *
   * @public
   */
  DataSource?: AutoMLDataSource | undefined;
}

/**
 * How long a job is allowed to run, or how many candidates a job is allowed to generate.
 *
 * @public
 */
export interface AutoMLJobCompletionCriteria {
  /**
   * The maximum number of times a training job is allowed to run.
   *
   * For text and image classification, time-series forecasting, as well as text generation (LLMs fine-tuning) problem types, the supported value is 1. For tabular problem types, the maximum value is 750.
   *
   * @public
   */
  MaxCandidates?: number | undefined;

  /**
   * The maximum time, in seconds, that each training job executed inside hyperparameter tuning is allowed to run as part of a hyperparameter tuning job. For more information, see the [StoppingCondition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StoppingCondition.html) used by the [CreateHyperParameterTuningJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateHyperParameterTuningJob.html) action.
   *
   * For job V2s (jobs created by calling `CreateAutoMLJobV2`), this field controls the runtime of the job candidate.
   *
   * For [TextGenerationJobConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TextClassificationJobConfig.html) problem types, the maximum time defaults to 72 hours (259200 seconds).
   *
   * @public
   */
  MaxRuntimePerTrainingJobInSeconds?: number | undefined;

  /**
   * The maximum runtime, in seconds, an AutoML job has to complete.
   *
   * If an AutoML job exceeds the maximum runtime, the job is stopped automatically and its processing is ended gracefully. The AutoML job identifies the best model whose training was completed and marks it as the best-performing model. Any unfinished steps of the job, such as automatic one-click Autopilot model deployment, are not completed.
   *
   * @public
   */
  MaxAutoMLJobRuntimeInSeconds?: number | undefined;
}

/**
 * Security options.
 *
 * @public
 */
export interface AutoMLSecurityConfig {
  /**
   * The key used to encrypt stored data.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Whether to use traffic encryption between the container layers.
   *
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * The VPC configuration.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * A collection of settings used for an AutoML job.
 *
 * @public
 */
export interface AutoMLJobConfig {
  /**
   * How long an AutoML job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * The security configuration for traffic encryption or Amazon VPC settings.
   *
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig | undefined;

  /**
   * The configuration for generating a candidate for an AutoML job (optional).
   *
   * @public
   */
  CandidateGenerationConfig?: AutoMLCandidateGenerationConfig | undefined;

  /**
   * The configuration for splitting the input training dataset.
   *
   * Type: AutoMLDataSplitConfig
   *
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig | undefined;

  /**
   * The method that Autopilot uses to train the data. You can either specify the mode manually or let Autopilot choose for you based on the dataset size by selecting `AUTO`. In `AUTO` mode, Autopilot chooses `ENSEMBLING` for datasets smaller than 100 MB, and `HYPERPARAMETER_TUNING` for larger ones.
   *
   * The `ENSEMBLING` mode uses a multi-stack ensemble model to predict classification and regression tasks directly from your dataset. This machine learning mode combines several base models to produce an optimal predictive model. It then uses a stacking ensemble method to combine predictions from contributing members. A multi-stack ensemble model can provide better performance over a single model by combining the predictive capabilities of multiple models. See [Autopilot algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) for a list of algorithms supported by `ENSEMBLING` mode.
   *
   * The `HYPERPARAMETER_TUNING` (HPO) mode uses the best hyperparameters to train the best version of a model. HPO automatically selects an algorithm for the type of problem you want to solve. Then HPO finds the best hyperparameters according to your objective metric. See [Autopilot algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) for a list of algorithms supported by `HYPERPARAMETER_TUNING` mode.
   *
   * @public
   */
  Mode?: AutoMLMode | undefined;
}

/**
 * Specifies a metric to minimize or maximize as the objective of an AutoML job.
 *
 * @public
 */
export interface AutoMLJobObjective {
  /**
   * The name of the objective metric used to measure the predictive quality of a machine learning system. During training, the model's parameters are updated iteratively to optimize its performance based on the feedback provided by the objective metric when evaluating the model on the validation dataset.
   *
   * The list of available metrics supported by Autopilot and the default metric applied when you do not specify a metric name explicitly depend on the problem type.
   *
   * - For tabular problem types:
   *
   *   - List of available metrics:
   *
   *     - Regression: `MAE`, `MSE`, `R2`, `RMSE`
   *     - Binary classification: `Accuracy`, `AUC`, `BalancedAccuracy`, `F1`, `Precision`, `Recall`
   *     - Multiclass classification: `Accuracy`, `BalancedAccuracy`, `F1macro`, `PrecisionMacro`, `RecallMacro`
   *
   *     For a description of each metric, see [Autopilot metrics for classification and regression](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html#autopilot-metrics).
   *   - Default objective metrics:
   *
   *     - Regression: `MSE`.
   *     - Binary classification: `F1`.
   *     - Multiclass classification: `Accuracy`.
   * - For image or text classification problem types:
   *
   *   - List of available metrics: `Accuracy`
   *
   *     For a description of each metric, see [Autopilot metrics for text and image classification](https://docs.aws.amazon.com/sagemaker/latest/dg/text-classification-data-format-and-metric.html).
   *   - Default objective metrics: `Accuracy`
   * - For time-series forecasting problem types:
   *
   *   - List of available metrics: `RMSE`, `wQL`, `Average wQL`, `MASE`, `MAPE`, `WAPE`
   *
   *     For a description of each metric, see [Autopilot metrics for time-series forecasting](https://docs.aws.amazon.com/sagemaker/latest/dg/timeseries-objective-metric.html).
   *   - Default objective metrics: `AverageWeightedQuantileLoss`
   * - For text generation problem types (LLMs fine-tuning): Fine-tuning language models in Autopilot does not require setting the `AutoMLJobObjective` field. Autopilot fine-tunes LLMs without requiring multiple candidates to be trained and evaluated. Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a default objective metric, the cross-entropy loss. After fine-tuning a language model, you can evaluate the quality of its generated text using different metrics. For a list of the available metrics, see [Metrics for fine-tuning LLMs in Autopilot](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-metrics.html).
   *
   * @public
   */
  MetricName: AutoMLMetricEnum | undefined;
}

/**
 * Metadata for an AutoML job step.
 *
 * @public
 */
export interface AutoMLJobStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the AutoML job.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The reason for a partial failure of an AutoML job.
 *
 * @public
 */
export interface AutoMLPartialFailureReason {
  /**
   * The message containing the reason for a partial failure of an AutoML job.
   *
   * @public
   */
  PartialFailureMessage?: string | undefined;
}

/**
 * Provides a summary about an AutoML job.
 *
 * @public
 */
export interface AutoMLJobSummary {
  /**
   * The name of the AutoML job you are requesting.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * The ARN of the AutoML job.
   *
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * The status of the AutoML job.
   *
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * The secondary status of the AutoML job.
   *
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * When the AutoML job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The end time of an AutoML job.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * When the AutoML job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The failure reason of an AutoML job.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The list of reasons for partial failures within an AutoML job.
   *
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[] | undefined;
}

/**
 * The output data configuration.
 *
 * @public
 */
export interface AutoMLOutputDataConfig {
  /**
   * The Key Management Service encryption key ID.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon S3 output path. Must be 512 characters or less.
   *
   * @public
   */
  S3OutputPath: string | undefined;
}

/**
 * The collection of settings used by an AutoML job V2 for the image classification problem type.
 *
 * @public
 */
export interface ImageClassificationJobConfig {
  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;
}

/**
 * Stores the configuration information for how model candidates are generated using an AutoML job V2.
 *
 * @public
 */
export interface CandidateGenerationConfig {
  /**
   * Your Autopilot job trains a default set of algorithms on your dataset. For tabular and time-series data, you can customize the algorithm list by selecting a subset of algorithms for your problem type.
   *
   * `AlgorithmsConfig` stores the customized selection of algorithms to train on your data.
   *
   * - **For the tabular problem type `TabularJobConfig`,** the list of available algorithms to choose from depends on the training mode set in [`AutoMLJobConfig.Mode`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobConfig.html).
   *
   *   - `AlgorithmsConfig` should not be set when the training mode `AutoMLJobConfig.Mode` is set to `AUTO`.
   *   - When `AlgorithmsConfig` is provided, one `AutoMLAlgorithms` attribute must be set and one only.
   *
   *     If the list of algorithms provided as values for `AutoMLAlgorithms` is empty, `CandidateGenerationConfig` uses the full set of algorithms for the given training mode.
   *   - When `AlgorithmsConfig` is not provided, `CandidateGenerationConfig` uses the full set of algorithms for the given training mode.
   *
   *   For the list of all algorithms per training mode, see [AlgorithmConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html).
   *
   *   For more information on each algorithm, see the [Algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) section in the Autopilot developer guide.
   * - **For the time-series forecasting problem type `TimeSeriesForecastingJobConfig`,** choose your algorithms from the list provided in [AlgorithmConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html).
   *
   *   For more information on each algorithm, see the [Algorithms support for time-series forecasting](https://docs.aws.amazon.com/sagemaker/latest/dg/timeseries-forecasting-algorithms.html) section in the Autopilot developer guide.
   *
   *   - When `AlgorithmsConfig` is provided, one `AutoMLAlgorithms` attribute must be set and one only.
   *
   *     If the list of algorithms provided as values for `AutoMLAlgorithms` is empty, `CandidateGenerationConfig` uses the full set of algorithms for time-series forecasting.
   *   - When `AlgorithmsConfig` is not provided, `CandidateGenerationConfig` uses the full set of algorithms for time-series forecasting.
   *
   * @public
   */
  AlgorithmsConfig?: AutoMLAlgorithmConfig[] | undefined;
}

/**
 * The collection of settings used by an AutoML job V2 for the tabular problem type.
 *
 * @public
 */
export interface TabularJobConfig {
  /**
   * The configuration information of how model candidates are generated.
   *
   * @public
   */
  CandidateGenerationConfig?: CandidateGenerationConfig | undefined;

  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * A URL to the Amazon S3 data source containing selected features from the input data source to run an Autopilot job V2. You can input `FeatureAttributeNames` (optional) in JSON format as shown below:
   *
   * `\{ "FeatureAttributeNames":["col1", "col2", ...] \}`.
   *
   * You can also specify the data type of the feature (optional) in the format shown below:
   *
   * `\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}`
   *
   * > **Note:** These column keys may not include the target column.
   *
   * In ensembling mode, Autopilot only supports the following data types: `numeric`, `categorical`, `text`, and `datetime`. In HPO mode, Autopilot can support `numeric`, `categorical`, `text`, `datetime`, and `sequence`.
   *
   * If only `FeatureDataTypes` is provided, the column keys (`col1`, `col2`,..) should be a subset of the column names in the input data.
   *
   * If both `FeatureDataTypes` and `FeatureAttributeNames` are provided, then the column keys should be a subset of the column names provided in `FeatureAttributeNames`.
   *
   * The key name `FeatureAttributeNames` is fixed. The values listed in `["col1", "col2", ...]` are case sensitive and should be a list of strings containing unique values that are a subset of the column names in the input data. The list of columns provided must not include the target column.
   *
   * @public
   */
  FeatureSpecificationS3Uri?: string | undefined;

  /**
   * The method that Autopilot uses to train the data. You can either specify the mode manually or let Autopilot choose for you based on the dataset size by selecting `AUTO`. In `AUTO` mode, Autopilot chooses `ENSEMBLING` for datasets smaller than 100 MB, and `HYPERPARAMETER_TUNING` for larger ones.
   *
   * The `ENSEMBLING` mode uses a multi-stack ensemble model to predict classification and regression tasks directly from your dataset. This machine learning mode combines several base models to produce an optimal predictive model. It then uses a stacking ensemble method to combine predictions from contributing members. A multi-stack ensemble model can provide better performance over a single model by combining the predictive capabilities of multiple models. See [Autopilot algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) for a list of algorithms supported by `ENSEMBLING` mode.
   *
   * The `HYPERPARAMETER_TUNING` (HPO) mode uses the best hyperparameters to train the best version of a model. HPO automatically selects an algorithm for the type of problem you want to solve. Then HPO finds the best hyperparameters according to your objective metric. See [Autopilot algorithm support](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-model-support-validation.html#autopilot-algorithm-support) for a list of algorithms supported by `HYPERPARAMETER_TUNING` mode.
   *
   * @public
   */
  Mode?: AutoMLMode | undefined;

  /**
   * Generates possible candidates without training the models. A model candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings.
   *
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean | undefined;

  /**
   * The type of supervised learning problem available for the model candidates of the AutoML job V2. For more information, see [SageMaker Autopilot problem types](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types).
   *
   * > **Note:** You must either specify the type of supervised learning problem in `ProblemType` and provide the [AutoMLJobObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html#sagemaker-CreateAutoMLJobV2-request-AutoMLJobObjective) metric, or none at all.
   *
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * The name of the target variable in supervised learning, usually represented by 'y'.
   *
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * If specified, this column name indicates which column of the dataset should be treated as sample weights for use by the objective metric during the training, evaluation, and the selection of the best model. This column is not considered as a predictive feature. For more information on Autopilot metrics, see [Metrics and validation](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html).
   *
   * Sample weights should be numeric, non-negative, with larger values indicating which rows are more important than others. Data points that have invalid or no weight value are excluded.
   *
   * Support for sample weights is available in [Ensembling](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLAlgorithmConfig.html) mode only.
   *
   * @public
   */
  SampleWeightAttributeName?: string | undefined;
}

/**
 * The collection of settings used by an AutoML job V2 for the text classification problem type.
 *
 * @public
 */
export interface TextClassificationJobConfig {
  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * The name of the column used to provide the sentences to be classified. It should not be the same as the target column.
   *
   * @public
   */
  ContentColumn: string | undefined;

  /**
   * The name of the column used to provide the class labels. It should not be same as the content column.
   *
   * @public
   */
  TargetLabelColumn: string | undefined;
}

/**
 * The collection of settings used by an AutoML job V2 for the text generation problem type.
 *
 * > **Note:** The text generation models that support fine-tuning in Autopilot are currently accessible exclusively in regions supported by Canvas. Refer to the documentation of Canvas for the [full list of its supported Regions](https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html).
 *
 * @public
 */
export interface TextGenerationJobConfig {
  /**
   * How long a fine-tuning job is allowed to run. For `TextGenerationJobConfig` problem types, the `MaxRuntimePerTrainingJobInSeconds` attribute of `AutoMLJobCompletionCriteria` defaults to 72h (259200s).
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * The name of the base model to fine-tune. Autopilot supports fine-tuning a variety of large language models. For information on the list of supported models, see [Text generation models supporting fine-tuning in Autopilot](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-models.html#autopilot-llms-finetuning-supported-llms). If no `BaseModelName` is provided, the default model used is **Falcon7BInstruct**.
   *
   * @public
   */
  BaseModelName?: string | undefined;

  /**
   * The hyperparameters used to configure and optimize the learning process of the base model. You can set any combination of the following hyperparameters for all base models. For more information on each supported hyperparameter, see [Optimize the learning process of your text generation models with hyperparameters](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-set-hyperparameters.html).
   *
   * - `"epochCount"`: The number of times the model goes through the entire training dataset. Its value should be a string containing an integer value within the range of "1" to "10".
   * - `"batchSize"`: The number of data samples used in each iteration of training. Its value should be a string containing an integer value within the range of "1" to "64".
   * - `"learningRate"`: The step size at which a model's parameters are updated during training. Its value should be a string containing a floating-point value within the range of "0" to "1".
   * - `"learningRateWarmupSteps"`: The number of training steps during which the learning rate gradually increases before reaching its target or maximum value. Its value should be a string containing an integer value within the range of "0" to "250".
   *
   * Here is an example where all four hyperparameters are configured.
   *
   * `\{ "epochCount":"5", "learningRate":"0.5", "batchSize": "32", "learningRateWarmupSteps": "10" \}`
   *
   * @public
   */
  TextGenerationHyperParameters?: Record<string, string> | undefined;

  /**
   * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
   *
   * - If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
   * - If you are an AutoML user, see the *Optional Parameters* section of *Create an AutoML job to fine-tune text generation models using the API* for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
   *
   * @public
   */
  ModelAccessConfig?: ModelAccessConfig | undefined;
}

/**
 * Stores the holiday featurization attributes applicable to each item of time-series datasets during the training of a forecasting model. This allows the model to identify patterns associated with specific holidays.
 *
 * @public
 */
export interface HolidayConfigAttributes {
  /**
   * The country code for the holiday calendar.
   *
   * For the list of public holiday calendars supported by AutoML job V2, see [Country Codes](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-timeseries-forecasting-holiday-calendars.html#holiday-country-codes). Use the country code corresponding to the country of your choice.
   *
   * @public
   */
  CountryCode?: string | undefined;
}

/**
 * The collection of components that defines the time-series.
 *
 * @public
 */
export interface TimeSeriesConfig {
  /**
   * The name of the column representing the target variable that you want to predict for each item in your dataset. The data type of the target variable must be numerical.
   *
   * @public
   */
  TargetAttributeName: string | undefined;

  /**
   * The name of the column indicating a point in time at which the target value of a given item is recorded.
   *
   * @public
   */
  TimestampAttributeName: string | undefined;

  /**
   * The name of the column that represents the set of item identifiers for which you want to predict the target value.
   *
   * @public
   */
  ItemIdentifierAttributeName: string | undefined;

  /**
   * A set of columns names that can be grouped with the item identifier column to create a composite key for which a target value is predicted.
   *
   * @public
   */
  GroupingAttributeNames?: string[] | undefined;
}

/**
 * Transformations allowed on the dataset. Supported transformations are `Filling` and `Aggregation`. `Filling` specifies how to add values to missing values in the dataset. `Aggregation` defines how to aggregate data that does not align with forecast frequency.
 *
 * @public
 */
export interface TimeSeriesTransformations {
  /**
   * A key value pair defining the filling method for a column, where the key is the column name and the value is an object which defines the filling logic. You can specify multiple filling methods for a single column.
   *
   * The supported filling methods and their corresponding options are:
   *
   * - `frontfill`: `none` (Supported only for target column)
   * - `middlefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `backfill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `futurefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   *
   * To set a filling method to a specific value, set the fill parameter to the chosen filling method value (for example `"backfill" : "value"`), and define the filling value in an additional parameter prefixed with "_value". For example, to set `backfill` to a value of `2`, you must include two parameters: `"backfill": "value"` and `"backfill_value":"2"`.
   *
   * @public
   */
  Filling?: Record<string, Partial<Record<FillingType, string>>> | undefined;

  /**
   * A key value pair defining the aggregation method for a column, where the key is the column name and the value is the aggregation method.
   *
   * The supported aggregation methods are `sum` (default), `avg`, `first`, `min`, `max`.
   *
   * > **Note:** Aggregation is only supported for the target column.
   *
   * @public
   */
  Aggregation?: Record<string, AggregationTransformationValue> | undefined;
}

/**
 * The collection of settings used by an AutoML job V2 for the time-series forecasting problem type.
 *
 * @public
 */
export interface TimeSeriesForecastingJobConfig {
  /**
   * A URL to the Amazon S3 data source containing additional selected features that complement the target, itemID, timestamp, and grouped columns set in `TimeSeriesConfig`. When not provided, the AutoML job V2 includes all the columns from the original dataset that are not already declared in `TimeSeriesConfig`. If provided, the AutoML job V2 only considers these additional columns as a complement to the ones declared in `TimeSeriesConfig`.
   *
   * You can input `FeatureAttributeNames` (optional) in JSON format as shown below:
   *
   * `\{ "FeatureAttributeNames":["col1", "col2", ...] \}`.
   *
   * You can also specify the data type of the feature (optional) in the format shown below:
   *
   * `\{ "FeatureDataTypes":\{"col1":"numeric", "col2":"categorical" ... \} \}`
   *
   * Autopilot supports the following data types: `numeric`, `categorical`, `text`, and `datetime`.
   *
   * > **Note:** These column keys must not include any column set in `TimeSeriesConfig`.
   *
   * @public
   */
  FeatureSpecificationS3Uri?: string | undefined;

  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * The frequency of predictions in a forecast.
   *
   * Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, `1D` indicates every day and `15min` indicates every 15 minutes. The value of a frequency must not overlap with the next larger frequency. For example, you must use a frequency of `1H` instead of `60min`.
   *
   * The valid values for each frequency are the following:
   *
   * - Minute - 1-59
   * - Hour - 1-23
   * - Day - 1-6
   * - Week - 1-4
   * - Month - 1-11
   * - Year - 1
   *
   * @public
   */
  ForecastFrequency: string | undefined;

  /**
   * The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the time-steps in the dataset.
   *
   * @public
   */
  ForecastHorizon: number | undefined;

  /**
   * The quantiles used to train the model for forecasts at a specified quantile. You can specify quantiles from `0.01` (p1) to `0.99` (p99), by increments of 0.01 or higher. Up to five forecast quantiles can be specified. When `ForecastQuantiles` is not provided, the AutoML job uses the quantiles p10, p50, and p90 as default.
   *
   * @public
   */
  ForecastQuantiles?: string[] | undefined;

  /**
   * The transformations modifying specific attributes of the time-series, such as filling strategies for missing values.
   *
   * @public
   */
  Transformations?: TimeSeriesTransformations | undefined;

  /**
   * The collection of components that defines the time-series.
   *
   * @public
   */
  TimeSeriesConfig: TimeSeriesConfig | undefined;

  /**
   * The collection of holiday featurization attributes used to incorporate national holiday information into your forecasting model.
   *
   * @public
   */
  HolidayConfig?: HolidayConfigAttributes[] | undefined;

  /**
   * Stores the configuration information for how model candidates are generated using an AutoML job V2.
   *
   * @public
   */
  CandidateGenerationConfig?: CandidateGenerationConfig | undefined;
}

/**
 * A collection of settings specific to the problem type used to configure an AutoML job V2. There must be one and only one config of the following type.
 *
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
   * Settings used to configure an AutoML job V2 for the image classification problem type.
   *
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
   * Settings used to configure an AutoML job V2 for the text classification problem type.
   *
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
   * Settings used to configure an AutoML job V2 for the time-series forecasting problem type.
   *
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
   * Settings used to configure an AutoML job V2 for the tabular problem type (regression, classification).
   *
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
   * Settings used to configure an AutoML job V2 for the text generation (LLMs fine-tuning) problem type.
   *
   * > **Note:** The text generation models that support fine-tuning in Autopilot are currently accessible exclusively in regions supported by Canvas. Refer to the documentation of Canvas for the [full list of its supported Regions](https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html).
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ImageClassificationJobConfig: (value: ImageClassificationJobConfig) => T;
    TextClassificationJobConfig: (value: TextClassificationJobConfig) => T;
    TimeSeriesForecastingJobConfig: (value: TimeSeriesForecastingJobConfig) => T;
    TabularJobConfig: (value: TabularJobConfig) => T;
    TextGenerationJobConfig: (value: TextGenerationJobConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The resolved attributes specific to the tabular problem type.
 *
 * @public
 */
export interface TabularResolvedAttributes {
  /**
   * The type of supervised learning problem available for the model candidates of the AutoML job V2 (Binary Classification, Multiclass Classification, Regression). For more information, see [SageMaker Autopilot problem types](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types).
   *
   * @public
   */
  ProblemType?: ProblemType | undefined;
}

/**
 * The resolved attributes specific to the text generation problem type.
 *
 * @public
 */
export interface TextGenerationResolvedAttributes {
  /**
   * The name of the base model to fine-tune.
   *
   * @public
   */
  BaseModelName?: string | undefined;
}

/**
 * Stores resolved attributes specific to the problem type of an AutoML job V2.
 *
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
   * The resolved attributes for the tabular problem type.
   *
   * @public
   */
  export interface TabularResolvedAttributesMember {
    TabularResolvedAttributes: TabularResolvedAttributes;
    TextGenerationResolvedAttributes?: never;
    $unknown?: never;
  }

  /**
   * The resolved attributes for the text generation problem type.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TabularResolvedAttributes: (value: TabularResolvedAttributes) => T;
    TextGenerationResolvedAttributes: (value: TextGenerationResolvedAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The resolved attributes used to configure an AutoML job V2.
 *
 * @public
 */
export interface AutoMLResolvedAttributes {
  /**
   * Specifies a metric to minimize or maximize as the objective of an AutoML job.
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;

  /**
   * Defines the resolved attributes specific to a problem type.
   *
   * @public
   */
  AutoMLProblemTypeResolvedAttributes?: AutoMLProblemTypeResolvedAttributes | undefined;
}

/**
 * The name and an example value of the hyperparameter that you want to use in Autotune. If Automatic model tuning (AMT) determines that your hyperparameter is eligible for Autotune, an optimal hyperparameter range is selected for you.
 *
 * @public
 */
export interface AutoParameter {
  /**
   * The name of the hyperparameter to optimize using Autotune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An example value of the hyperparameter to optimize using Autotune.
   *
   * @public
   */
  ValueHint: string | undefined;
}

/**
 * Automatic rollback configuration for handling endpoint deployment failures and recovery.
 *
 * @public
 */
export interface AutoRollbackConfig {
  /**
   * List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the deployment.
   *
   * @public
   */
  Alarms?: Alarm[] | undefined;
}

/**
 * A flag to indicate if you want to use Autotune to automatically find optimal values for the following fields:
 *
 * - [ParameterRanges](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-ParameterRanges): The names and ranges of parameters that a hyperparameter tuning job can optimize.
 * - [ResourceLimits](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html): The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time.
 * - [TrainingJobEarlyStoppingType](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-TrainingJobEarlyStoppingType): A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job.
 * - [RetryStrategy](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-RetryStrategy): The number of times to retry a training job.
 * - [Strategy](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html): Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches.
 * - [ConvergenceDetected](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ConvergenceDetected.html): A flag to indicate that Automatic model tuning (AMT) has detected model convergence.
 *
 * @public
 */
export interface Autotune {
  /**
   * Set `Mode` to `Enabled` if you want to use Autotune.
   *
   * @public
   */
  Mode: AutotuneMode | undefined;
}

/**
 * Contains information about an available upgrade for a SageMaker Partner AI App, including the version number and release notes.
 *
 * @public
 */
export interface AvailableUpgrade {
  /**
   * The semantic version number of the available upgrade for the SageMaker Partner AI App.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * A list of release notes describing the changes and improvements included in the available upgrade version.
   *
   * @public
   */
  ReleaseNotes?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAddClusterNodesRequest {
  /**
   * The name of the HyperPod cluster to which you want to add nodes.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is valid for 8 hours. If you retry the request with the same client token within this timeframe and the same parameters, the API returns the same set of `NodeLogicalIds` with their latest status.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A list of instance groups and the number of nodes to add to each. You can specify up to 5 instance groups in a single request, with a maximum of 50 nodes total across all instance groups.
   *
   * @public
   */
  NodesToAdd: AddClusterNodeSpecification[] | undefined;
}

/**
 * Information about an error that occurred during the node addition operation.
 *
 * @public
 */
export interface BatchAddClusterNodesError {
  /**
   * The name of the instance group for which the error occurred.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * The error code associated with the failure. Possible values include `InstanceGroupNotFound` and `InvalidInstanceGroupState`.
   *
   * @public
   */
  ErrorCode: BatchAddClusterNodesErrorCode | undefined;

  /**
   * The number of nodes that failed to be added to the specified instance group.
   *
   * @public
   */
  FailedCount: number | undefined;

  /**
   * The availability zones associated with the failed node addition request.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The instance types associated with the failed node addition request.
   *
   * @public
   */
  InstanceTypes?: ClusterInstanceType[] | undefined;

  /**
   * A descriptive message providing additional details about the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Information about a node that was successfully added to the cluster.
 *
 * @public
 */
export interface NodeAdditionResult {
  /**
   * A unique identifier assigned to the node that can be used to track its provisioning status through the `DescribeClusterNode` operation.
   *
   * @public
   */
  NodeLogicalId: string | undefined;

  /**
   * The name of the instance group to which the node was added.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * The current status of the node. Possible values include `Pending`, `Running`, `Failed`, `ShuttingDown`, `SystemUpdating`, `DeepHealthCheckInProgress`, and `NotFound`.
   *
   * @public
   */
  Status: ClusterInstanceStatus | undefined;

  /**
   * The availability zones associated with the successfully added node.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The instance types associated with the successfully added node.
   *
   * @public
   */
  InstanceTypes?: ClusterInstanceType[] | undefined;
}

/**
 * @public
 */
export interface BatchAddClusterNodesResponse {
  /**
   * A list of `NodeLogicalIDs` that were successfully added to the cluster. The `NodeLogicalID` is unique per cluster and does not change between instance replacements. Each entry includes a `NodeLogicalId` that can be used to track the node's provisioning status (with `DescribeClusterNode`), the instance group name, and the current status of the node.
   *
   * @public
   */
  Successful: NodeAdditionResult[] | undefined;

  /**
   * A list of errors that occurred during the node addition operation. Each entry includes the instance group name, error code, number of failed additions, and an error message.
   *
   * @public
   */
  Failed: BatchAddClusterNodesError[] | undefined;
}

/**
 * Configuration to control how SageMaker captures inference data for batch transform jobs.
 *
 * @public
 */
export interface BatchDataCaptureConfig {
  /**
   * The Amazon S3 location being used to capture the data.
   *
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the batch transform job.
   *
   * The KmsKeyId can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Flag that indicates whether to append inference id to the output.
   *
   * @public
   */
  GenerateInferenceId?: boolean | undefined;
}

/**
 * Information about an error that occurred when attempting to delete a node identified by its `NodeLogicalId`.
 *
 * @public
 */
export interface BatchDeleteClusterNodeLogicalIdsError {
  /**
   * The error code associated with the failure. Possible values include `NodeLogicalIdNotFound`, `InvalidNodeStatus`, and `InternalError`.
   *
   * @public
   */
  Code: BatchDeleteClusterNodesErrorCode | undefined;

  /**
   * A descriptive message providing additional details about the error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The `NodeLogicalId` of the node that could not be deleted.
   *
   * @public
   */
  NodeLogicalId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterNodesRequest {
  /**
   * The name of the SageMaker HyperPod cluster from which to delete the specified nodes.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A list of node IDs to be deleted from the specified cluster.
   *
   * > **Note:**
   * >
   * > - For SageMaker HyperPod clusters using the Slurm workload manager, you cannot remove instances that are configured as Slurm controller nodes.
   * > - If you need to delete more than 99 instances, contact [Support](http://aws.amazon.com/contact-us/) for assistance.
   *
   * @public
   */
  NodeIds?: string[] | undefined;

  /**
   * A list of `NodeLogicalIds` identifying the nodes to be deleted. You can specify up to 50 `NodeLogicalIds`. You must specify either `NodeLogicalIds`, `InstanceIds`, or both, with a combined maximum of 50 identifiers.
   *
   * @public
   */
  NodeLogicalIds?: string[] | undefined;
}

/**
 * Represents an error encountered when deleting a node from a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface BatchDeleteClusterNodesError {
  /**
   * The error code associated with the error encountered when deleting a node.
   *
   * The code provides information about the specific issue encountered, such as the node not being found, the node's status being invalid for deletion, or the node ID being in use by another process.
   *
   * @public
   */
  Code: BatchDeleteClusterNodesErrorCode | undefined;

  /**
   * A message describing the error encountered when deleting a node.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The ID of the node that encountered an error during the deletion process.
   *
   * @public
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterNodesResponse {
  /**
   * A list of errors encountered when deleting the specified nodes.
   *
   * @public
   */
  Failed?: BatchDeleteClusterNodesError[] | undefined;

  /**
   * A list of node IDs that were successfully deleted from the specified cluster.
   *
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * A list of `NodeLogicalIds` that could not be deleted, along with error information explaining why the deletion failed.
   *
   * @public
   */
  FailedNodeLogicalIds?: BatchDeleteClusterNodeLogicalIdsError[] | undefined;

  /**
   * A list of `NodeLogicalIds` that were successfully deleted from the cluster.
   *
   * @public
   */
  SuccessfulNodeLogicalIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDescribeModelPackageInput {
  /**
   * The list of Amazon Resource Name (ARN) of the model package groups.
   *
   * @public
   */
  ModelPackageArnList: string[] | undefined;
}

/**
 * The error code and error description associated with the resource.
 *
 * @public
 */
export interface BatchDescribeModelPackageError {
  /**
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * @public
   */
  ErrorResponse: string | undefined;
}

/**
 * Defines how to perform inference generation after a training job is run.
 *
 * @public
 */
export interface InferenceSpecification {
  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   *
   * @public
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   *
   * This parameter is required for unversioned models, and optional for versioned models.
   *
   * @public
   */
  SupportedTransformInstanceTypes?: TransformInstanceType[] | undefined;

  /**
   * A list of the instance types that are used to generate inferences in real-time.
   *
   * This parameter is required for unversioned models, and optional for versioned models.
   *
   * @public
   */
  SupportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceType[] | undefined;

  /**
   * The supported MIME types for the input data.
   *
   * @public
   */
  SupportedContentTypes?: string[] | undefined;

  /**
   * The supported MIME types for the output data.
   *
   * @public
   */
  SupportedResponseMIMETypes?: string[] | undefined;
}

/**
 * Provides summary information about the model package.
 *
 * @public
 */
export interface BatchDescribeModelPackageSummary {
  /**
   * The group name for the model package
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * The version number of a versioned model.
   *
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * The description of the model package.
   *
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * The creation time of the mortgage package summary.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Defines how to perform inference generation after a training job is run.
   *
   * @public
   */
  InferenceSpecification: InferenceSpecification | undefined;

  /**
   * The status of the mortgage package.
   *
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * The approval status of the model.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * The package registration type of the model package summary.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;
}

/**
 * @public
 */
export interface BatchDescribeModelPackageOutput {
  /**
   * The summaries for the model package versions
   *
   * @public
   */
  ModelPackageSummaries?: Record<string, BatchDescribeModelPackageSummary> | undefined;

  /**
   * A map of the resource and BatchDescribeModelPackageError objects reporting the error associated with describing the model package.
   *
   * @public
   */
  BatchDescribeModelPackageErrorMap?: Record<string, BatchDescribeModelPackageError> | undefined;
}

/**
 * Represents an error encountered when rebooting a node (identified by its logical node ID) from a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface BatchRebootClusterNodeLogicalIdsError {
  /**
   * The logical node ID of the node that encountered an error during the reboot operation.
   *
   * @public
   */
  NodeLogicalId: string | undefined;

  /**
   * The error code associated with the error encountered when rebooting a node by logical node ID.
   *
   * Possible values:
   *
   * - `InstanceIdNotFound`: The node does not exist in the specified cluster.
   * - `InvalidInstanceStatus`: The node is in a state that does not allow rebooting. Wait for the node to finish any ongoing changes before retrying.
   * - `InstanceIdInUse`: Another operation is already in progress for this node. Wait for the operation to complete before retrying.
   * - `InternalServerError`: An internal error occurred while processing this node.
   *
   * @public
   */
  ErrorCode: BatchRebootClusterNodesErrorCode | undefined;

  /**
   * A human-readable message describing the error encountered when rebooting a node by logical node ID.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchRebootClusterNodesRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the SageMaker HyperPod cluster containing the nodes to reboot.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A list of EC2 instance IDs to reboot using soft recovery. You can specify between 1 and 25 instance IDs.
   *
   * > **Note:**
   * >
   * > - Either `NodeIds` or `NodeLogicalIds` must be provided (or both), but at least one is required.
   * > - Each instance ID must follow the pattern `i-` followed by 17 hexadecimal characters (for example, `i-0123456789abcdef0`).
   *
   * @public
   */
  NodeIds?: string[] | undefined;

  /**
   * A list of logical node IDs to reboot using soft recovery. You can specify between 1 and 25 logical node IDs.
   *
   * The `NodeLogicalId` is a unique identifier that persists throughout the node's lifecycle and can be used to track nodes that are still being provisioned and don't yet have an EC2 instance ID assigned.
   *
   * > **Important:**
   * >
   * > - This parameter is only supported for clusters using `Continuous` as the `NodeProvisioningMode`. For clusters using the default provisioning mode, use `NodeIds` instead.
   * > - Either `NodeIds` or `NodeLogicalIds` must be provided (or both), but at least one is required.
   *
   * @public
   */
  NodeLogicalIds?: string[] | undefined;
}

/**
 * Represents an error encountered when rebooting a node from a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface BatchRebootClusterNodesError {
  /**
   * The EC2 instance ID of the node that encountered an error during the reboot operation.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The error code associated with the error encountered when rebooting a node.
   *
   * Possible values:
   *
   * - `InstanceIdNotFound`: The instance does not exist in the specified cluster.
   * - `InvalidInstanceStatus`: The instance is in a state that does not allow rebooting. Wait for the instance to finish any ongoing changes before retrying.
   * - `InstanceIdInUse`: Another operation is already in progress for this node. Wait for the operation to complete before retrying.
   * - `InternalServerError`: An internal error occurred while processing this node.
   *
   * @public
   */
  ErrorCode: BatchRebootClusterNodesErrorCode | undefined;

  /**
   * A human-readable message describing the error encountered when rebooting a node.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchRebootClusterNodesResponse {
  /**
   * A list of EC2 instance IDs for which the reboot operation was successfully initiated.
   *
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * A list of errors encountered for EC2 instance IDs that could not be rebooted. Each error includes the instance ID, an error code, and a descriptive message.
   *
   * @public
   */
  Failed?: BatchRebootClusterNodesError[] | undefined;

  /**
   * A list of errors encountered for logical node IDs that could not be rebooted. Each error includes the logical node ID, an error code, and a descriptive message. This field is only present when `NodeLogicalIds` were provided in the request.
   *
   * @public
   */
  FailedNodeLogicalIds?: BatchRebootClusterNodeLogicalIdsError[] | undefined;

  /**
   * A list of logical node IDs for which the reboot operation was successfully initiated. This field is only present when `NodeLogicalIds` were provided in the request.
   *
   * @public
   */
  SuccessfulNodeLogicalIds?: string[] | undefined;
}

/**
 * Represents an error encountered when replacing a node (identified by its logical node ID) in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface BatchReplaceClusterNodeLogicalIdsError {
  /**
   * The logical node ID of the node that encountered an error during the replacement operation.
   *
   * @public
   */
  NodeLogicalId: string | undefined;

  /**
   * The error code associated with the error encountered when replacing a node by logical node ID.
   *
   * Possible values:
   *
   * - `InstanceIdNotFound`: The node does not exist in the specified cluster.
   * - `InvalidInstanceStatus`: The node is in a state that does not allow replacement. Wait for the node to finish any ongoing changes before retrying.
   * - `InstanceIdInUse`: Another operation is already in progress for this node. Wait for the operation to complete before retrying.
   * - `InternalServerError`: An internal error occurred while processing this node.
   *
   * @public
   */
  ErrorCode: BatchReplaceClusterNodesErrorCode | undefined;

  /**
   * A human-readable message describing the error encountered when replacing a node by logical node ID.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchReplaceClusterNodesRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the SageMaker HyperPod cluster containing the nodes to replace.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A list of EC2 instance IDs to replace with new hardware. You can specify between 1 and 25 instance IDs.
   *
   * > **Important:** Replace operations destroy all instance volumes (root and secondary). Ensure you have backed up any important data before proceeding.
   *
   * > **Note:**
   * >
   * > - Either `NodeIds` or `NodeLogicalIds` must be provided (or both), but at least one is required.
   * > - Each instance ID must follow the pattern `i-` followed by 17 hexadecimal characters (for example, `i-0123456789abcdef0`).
   * > - For SageMaker HyperPod clusters using the Slurm workload manager, you cannot replace instances that are configured as Slurm controller nodes.
   *
   * @public
   */
  NodeIds?: string[] | undefined;

  /**
   * A list of logical node IDs to replace with new hardware. You can specify between 1 and 25 logical node IDs.
   *
   * The `NodeLogicalId` is a unique identifier that persists throughout the node's lifecycle and can be used to track nodes that are still being provisioned and don't yet have an EC2 instance ID assigned.
   *
   * > **Important:**
   * >
   * > - Replace operations destroy all instance volumes (root and secondary). Ensure you have backed up any important data before proceeding.
   * > - This parameter is only supported for clusters using `Continuous` as the `NodeProvisioningMode`. For clusters using the default provisioning mode, use `NodeIds` instead.
   * > - Either `NodeIds` or `NodeLogicalIds` must be provided (or both), but at least one is required.
   *
   * @public
   */
  NodeLogicalIds?: string[] | undefined;
}

/**
 * Represents an error encountered when replacing a node in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface BatchReplaceClusterNodesError {
  /**
   * The EC2 instance ID of the node that encountered an error during the replacement operation.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The error code associated with the error encountered when replacing a node.
   *
   * Possible values:
   *
   * - `InstanceIdNotFound`: The instance does not exist in the specified cluster.
   * - `InvalidInstanceStatus`: The instance is in a state that does not allow replacement. Wait for the instance to finish any ongoing changes before retrying.
   * - `InstanceIdInUse`: Another operation is already in progress for this node. Wait for the operation to complete before retrying.
   * - `InternalServerError`: An internal error occurred while processing this node.
   *
   * @public
   */
  ErrorCode: BatchReplaceClusterNodesErrorCode | undefined;

  /**
   * A human-readable message describing the error encountered when replacing a node.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchReplaceClusterNodesResponse {
  /**
   * A list of EC2 instance IDs for which the replacement operation was successfully initiated.
   *
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * A list of errors encountered for EC2 instance IDs that could not be replaced. Each error includes the instance ID, an error code, and a descriptive message.
   *
   * @public
   */
  Failed?: BatchReplaceClusterNodesError[] | undefined;

  /**
   * A list of errors encountered for logical node IDs that could not be replaced. Each error includes the logical node ID, an error code, and a descriptive message. This field is only present when `NodeLogicalIds` were provided in the request.
   *
   * @public
   */
  FailedNodeLogicalIds?: BatchReplaceClusterNodeLogicalIdsError[] | undefined;

  /**
   * A list of logical node IDs for which the replacement operation was successfully initiated. This field is only present when `NodeLogicalIds` were provided in the request.
   *
   * @public
   */
  SuccessfulNodeLogicalIds?: string[] | undefined;
}

/**
 * Represents the CSV dataset format used when running a monitoring job.
 *
 * @public
 */
export interface MonitoringCsvDatasetFormat {
  /**
   * Indicates if the CSV data has a header.
   *
   * @public
   */
  Header?: boolean | undefined;
}

/**
 * Represents the JSON dataset format used when running a monitoring job.
 *
 * @public
 */
export interface MonitoringJsonDatasetFormat {
  /**
   * Indicates if the file should be read as a JSON object per line.
   *
   * @public
   */
  Line?: boolean | undefined;
}

/**
 * Represents the Parquet dataset format used when running a monitoring job.
 *
 * @public
 */
export interface MonitoringParquetDatasetFormat {}

/**
 * Represents the dataset format used when running a monitoring job.
 *
 * @public
 */
export interface MonitoringDatasetFormat {
  /**
   * The CSV dataset used in the monitoring job.
   *
   * @public
   */
  Csv?: MonitoringCsvDatasetFormat | undefined;

  /**
   * The JSON dataset used in the monitoring job
   *
   * @public
   */
  Json?: MonitoringJsonDatasetFormat | undefined;

  /**
   * The Parquet dataset used in the monitoring job
   *
   * @public
   */
  Parquet?: MonitoringParquetDatasetFormat | undefined;
}

/**
 * Input object for the batch transform job.
 *
 * @public
 */
export interface BatchTransformInput {
  /**
   * The Amazon S3 location being used to capture the data.
   *
   * @public
   */
  DataCapturedDestinationS3Uri: string | undefined;

  /**
   * The dataset format for your batch transform job.
   *
   * @public
   */
  DatasetFormat: MonitoringDatasetFormat | undefined;

  /**
   * Path to the filesystem where the batch transform data is available to the container.
   *
   * @public
   */
  LocalPath: string | undefined;

  /**
   * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   *
   * @public
   */
  S3InputMode?: ProcessingS3InputMode | undefined;

  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`
   *
   * @public
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | undefined;

  /**
   * The attributes of the input data that are the input features.
   *
   * @public
   */
  FeaturesAttribute?: string | undefined;

  /**
   * The attribute of the input data that represents the ground truth label.
   *
   * @public
   */
  InferenceAttribute?: string | undefined;

  /**
   * In a classification problem, the attribute that represents the class probability.
   *
   * @public
   */
  ProbabilityAttribute?: string | undefined;

  /**
   * The threshold for the class probability to be evaluated as a positive result.
   *
   * @public
   */
  ProbabilityThresholdAttribute?: number | undefined;

  /**
   * If specified, monitoring jobs substract this time from the start time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * @public
   */
  StartTimeOffset?: string | undefined;

  /**
   * If specified, monitoring jobs subtract this time from the end time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * @public
   */
  EndTimeOffset?: string | undefined;

  /**
   * The attributes of the input data to exclude from the analysis.
   *
   * @public
   */
  ExcludeFeaturesAttribute?: string | undefined;
}

/**
 * The metadata of the Amazon Bedrock custom model deployment.
 *
 * @public
 */
export interface BedrockCustomModelDeploymentMetadata {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Bedrock custom model deployment.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The metadata of the Amazon Bedrock custom model.
 *
 * @public
 */
export interface BedrockCustomModelMetadata {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Bedrock custom model.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The metadata of the Amazon Bedrock model import.
 *
 * @public
 */
export interface BedrockModelImportMetadata {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Bedrock model import.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The metadata of the Amazon Bedrock provisioned model throughput.
 *
 * @public
 */
export interface BedrockProvisionedModelThroughputMetadata {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Bedrock provisioned model throughput.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A structure that keeps track of which training jobs launched by your hyperparameter tuning job are not improving model performance as evaluated against an objective function.
 *
 * @public
 */
export interface BestObjectiveNotImproving {
  /**
   * The number of training jobs that have failed to improve model performance by 1% or greater over prior training jobs as evaluated against an objective function.
   *
   * @public
   */
  MaxNumberOfTrainingJobsNotImproving?: number | undefined;
}

/**
 * Details about the metrics source.
 *
 * @public
 */
export interface MetricsSource {
  /**
   * The metric source content type.
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * The hash key used for the metrics source.
   *
   * @public
   */
  ContentDigest?: string | undefined;

  /**
   * The S3 URI for the metrics source.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Contains bias metrics for a model.
 *
 * @public
 */
export interface Bias {
  /**
   * The bias report for a model
   *
   * @public
   */
  Report?: MetricsSource | undefined;

  /**
   * The pre-training bias report for a model.
   *
   * @public
   */
  PreTrainingReport?: MetricsSource | undefined;

  /**
   * The post-training bias report for a model.
   *
   * @public
   */
  PostTrainingReport?: MetricsSource | undefined;
}

/**
 * The billable token usage for a training session, broken down by operation type.
 *
 * @public
 */
export interface BillableTokenUsage {
  /**
   * The number of prefill tokens consumed.
   *
   * @public
   */
  PrefillTokenCount?: number | undefined;

  /**
   * The number of sample tokens consumed.
   *
   * @public
   */
  SampleTokenCount?: number | undefined;

  /**
   * The number of training tokens consumed.
   *
   * @public
   */
  TrainingTokenCount?: number | undefined;
}

/**
 * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy. You can specify your batches as either instance count or the overall percentage or your fleet.
 *
 * For a rollback strategy, if you don't specify the fields in this object, or if you set the `Value` to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
 *
 * @public
 */
export interface CapacitySize {
  /**
   * Specifies the endpoint capacity type.
   *
   * - `INSTANCE_COUNT`: The endpoint activates based on the number of instances.
   * - `CAPACITY_PERCENT`: The endpoint activates based on the specified percentage of capacity.
   *
   * @public
   */
  Type: CapacitySizeType | undefined;

  /**
   * Defines the capacity size, either as a number of instances or a capacity percentage.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet.
 *
 * @public
 */
export interface TrafficRoutingConfig {
  /**
   * Traffic routing strategy type.
   *
   * - `ALL_AT_ONCE`: Endpoint traffic shifts to the new fleet in a single step.
   * - `CANARY`: Endpoint traffic shifts to the new fleet in two steps. The first step is the canary, which is a small portion of the traffic. The second step is the remainder of the traffic.
   * - `LINEAR`: Endpoint traffic shifts to the new fleet in n steps of a configurable size.
   *
   * @public
   */
  Type: TrafficRoutingConfigType | undefined;

  /**
   * The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet.
   *
   * @public
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * Batch size for the first step to turn on traffic on the new endpoint fleet. `Value` must be less than or equal to 50% of the variant's total instance count.
   *
   * @public
   */
  CanarySize?: CapacitySize | undefined;

  /**
   * Batch size for each step to turn on traffic on the new endpoint fleet. `Value` must be 10-50% of the variant's total instance count.
   *
   * @public
   */
  LinearStepSize?: CapacitySize | undefined;
}

/**
 * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
 *
 * @public
 */
export interface BlueGreenUpdatePolicy {
  /**
   * Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment.
   *
   * @public
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig | undefined;

  /**
   * Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is 0.
   *
   * @public
   */
  TerminationWaitInSeconds?: number | undefined;

  /**
   * Maximum execution timeout for the deployment. Note that the timeout value should be larger than the total waiting time specified in `TerminationWaitInSeconds` and `WaitIntervalInSeconds`.
   *
   * @public
   */
  MaximumExecutionTimeoutInSeconds?: number | undefined;
}

/**
 * Details on the cache hit of a pipeline execution step.
 *
 * @public
 */
export interface CacheHitResult {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;
}

/**
 * An output parameter of a pipeline step.
 *
 * @public
 */
export interface OutputParameter {
  /**
   * The name of the output parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the output parameter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Metadata about a callback step.
 *
 * @public
 */
export interface CallbackStepMetadata {
  /**
   * The pipeline generated token from the Amazon SQS queue.
   *
   * @public
   */
  CallbackToken?: string | undefined;

  /**
   * The URL of the Amazon Simple Queue Service (Amazon SQS) queue used by the callback step.
   *
   * @public
   */
  SqsQueueUrl?: string | undefined;

  /**
   * A list of the output parameters of the callback step.
   *
   * @public
   */
  OutputParameters?: OutputParameter[] | undefined;
}

/**
 * The model deployment settings for the SageMaker Canvas application.
 *
 * > **Note:** In order to enable model deployment for Canvas, the SageMaker Domain's or user profile's Amazon Web Services IAM execution role must have the `AmazonSageMakerCanvasDirectDeployAccess` policy attached. You can also turn on model deployment permissions through the SageMaker Domain's or user profile's settings in the SageMaker console.
 *
 * @public
 */
export interface DirectDeploySettings {
  /**
   * Describes whether model deployment permissions are enabled or disabled in the Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * The settings for running Amazon EMR Serverless jobs in SageMaker Canvas.
 *
 * @public
 */
export interface EmrServerlessSettings {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM role that is assumed for running Amazon EMR Serverless jobs in SageMaker Canvas. This role should have the necessary permissions to read and write data attached and a trust relationship with EMR Serverless.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * Describes whether Amazon EMR Serverless job capabilities are enabled or disabled in the SageMaker Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * The generative AI settings for the SageMaker Canvas application.
 *
 * Configure these settings for Canvas users starting chats with generative AI foundation models. For more information, see [Use generative AI with foundation models](https://docs.aws.amazon.com/sagemaker/latest/dg/canvas-fm-chat.html).
 *
 * @public
 */
export interface GenerativeAiSettings {
  /**
   * The ARN of an Amazon Web Services IAM role that allows fine-tuning of large language models (LLMs) in Amazon Bedrock. The IAM role should have Amazon S3 read and write permissions, as well as a trust relationship that establishes `bedrock.amazonaws.com` as a service principal.
   *
   * @public
   */
  AmazonBedrockRoleArn?: string | undefined;
}

/**
 * The Amazon SageMaker Canvas application setting where you configure OAuth for connecting to an external data source, such as Snowflake.
 *
 * @public
 */
export interface IdentityProviderOAuthSetting {
  /**
   * The name of the data source that you're connecting to. Canvas currently supports OAuth for Snowflake and Salesforce Data Cloud.
   *
   * @public
   */
  DataSourceName?: DataSourceName | undefined;

  /**
   * Describes whether OAuth for a data source is enabled or disabled in the Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The ARN of an Amazon Web Services Secrets Manager secret that stores the credentials from your identity provider, such as the client ID and secret, authorization URL, and token URL.
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The Amazon SageMaker Canvas application setting where you configure document querying.
 *
 * @public
 */
export interface KendraSettings {
  /**
   * Describes whether the document querying feature is enabled or disabled in the Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * The model registry settings for the SageMaker Canvas application.
 *
 * @public
 */
export interface ModelRegisterSettings {
  /**
   * Describes whether the integration to the model registry is enabled or disabled in the Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SageMaker model registry account. Required only to register model versions created by a different SageMaker Canvas Amazon Web Services account than the Amazon Web Services account in which SageMaker model registry is set up.
   *
   * @public
   */
  CrossAccountModelRegisterRoleArn?: string | undefined;
}

/**
 * Time series forecast settings for the SageMaker Canvas application.
 *
 * @public
 */
export interface TimeSeriesForecastingSettings {
  /**
   * Describes whether time series forecasting is enabled or disabled in the Canvas application.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The IAM role that Canvas passes to Amazon Forecast for time series forecasting. By default, Canvas uses the execution role specified in the `UserProfile` that launches the Canvas application. If an execution role is not specified in the `UserProfile`, Canvas uses the execution role specified in the Domain that owns the `UserProfile`. To allow time series forecasting, this IAM role should have the [AmazonSageMakerCanvasForecastAccess](https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-canvas.html#security-iam-awsmanpol-AmazonSageMakerCanvasForecastAccess) policy attached and `forecast.amazonaws.com` added in the trust relationship as a service principal.
   *
   * @public
   */
  AmazonForecastRoleArn?: string | undefined;
}

/**
 * The workspace settings for the SageMaker Canvas application.
 *
 * @public
 */
export interface WorkspaceSettings {
  /**
   * The Amazon S3 bucket used to store artifacts generated by Canvas. Updating the Amazon S3 location impacts existing configuration settings, and Canvas users no longer have access to their artifacts. Canvas users must log out and log back in to apply the new location.
   *
   * @public
   */
  S3ArtifactPath?: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (KMS) encryption key ID that is used to encrypt artifacts generated by Canvas in the Amazon S3 bucket.
   *
   * @public
   */
  S3KmsKeyId?: string | undefined;
}

/**
 * The SageMaker Canvas application settings.
 *
 * @public
 */
export interface CanvasAppSettings {
  /**
   * Time series forecast settings for the SageMaker Canvas application.
   *
   * @public
   */
  TimeSeriesForecastingSettings?: TimeSeriesForecastingSettings | undefined;

  /**
   * The model registry settings for the SageMaker Canvas application.
   *
   * @public
   */
  ModelRegisterSettings?: ModelRegisterSettings | undefined;

  /**
   * The workspace settings for the SageMaker Canvas application.
   *
   * @public
   */
  WorkspaceSettings?: WorkspaceSettings | undefined;

  /**
   * The settings for connecting to an external data source with OAuth.
   *
   * @public
   */
  IdentityProviderOAuthSettings?: IdentityProviderOAuthSetting[] | undefined;

  /**
   * The model deployment settings for the SageMaker Canvas application.
   *
   * @public
   */
  DirectDeploySettings?: DirectDeploySettings | undefined;

  /**
   * The settings for document querying.
   *
   * @public
   */
  KendraSettings?: KendraSettings | undefined;

  /**
   * The generative AI settings for the SageMaker Canvas application.
   *
   * @public
   */
  GenerativeAiSettings?: GenerativeAiSettings | undefined;

  /**
   * The settings for running Amazon EMR Serverless data processing jobs in SageMaker Canvas.
   *
   * @public
   */
  EmrServerlessSettings?: EmrServerlessSettings | undefined;
}

/**
 * Information about the Capacity Reservation used by an instance or instance group.
 *
 * @public
 */
export interface CapacityReservation {
  /**
   * The Amazon Resource Name (ARN) of the Capacity Reservation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of Capacity Reservation. Valid values are `ODCR` (On-Demand Capacity Reservation) or `CRG` (Capacity Reservation Group).
   *
   * @public
   */
  Type?: CapacityReservationType | undefined;
}

/**
 * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
 *
 * @public
 */
export interface CapacitySizeConfig {
  /**
   * Specifies whether SageMaker should process the update by amount or percentage of instances.
   *
   * @public
   */
  Type: NodeUnavailabilityType | undefined;

  /**
   * Specifies the amount or percentage of instances SageMaker updates at a time.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Configuration specifying how to treat different headers. If no headers are specified Amazon SageMaker AI will by default base64 encode when capturing the data.
 *
 * @public
 */
export interface CaptureContentTypeHeader {
  /**
   * The list of all content type headers that Amazon SageMaker AI will treat as CSV and capture accordingly.
   *
   * @public
   */
  CsvContentTypes?: string[] | undefined;

  /**
   * The list of all content type headers that SageMaker AI will treat as JSON and capture accordingly.
   *
   * @public
   */
  JsonContentTypes?: string[] | undefined;
}

/**
 * Specifies data Model Monitor will capture.
 *
 * @public
 */
export interface CaptureOption {
  /**
   * Specify the boundary of data to capture.
   *
   * @public
   */
  CaptureMode: CaptureMode | undefined;
}

/**
 * Environment parameters you want to benchmark your load test against.
 *
 * @public
 */
export interface CategoricalParameter {
  /**
   * The Name of the environment variable.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of values you can pass.
   *
   * @public
   */
  Value: string[] | undefined;
}

/**
 * A list of categorical hyperparameters to tune.
 *
 * @public
 */
export interface CategoricalParameterRange {
  /**
   * The name of the categorical hyperparameter to tune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the categories for the hyperparameter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Defines the possible values for a categorical hyperparameter.
 *
 * @public
 */
export interface CategoricalParameterRangeSpecification {
  /**
   * The allowed categories for the hyperparameter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A key-value pair that represents a parameter for the CloudFormation stack.
 *
 * @public
 */
export interface CfnStackCreateParameter {
  /**
   * The name of the CloudFormation parameter.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the CloudFormation parameter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The CloudFormation template provider configuration for creating infrastructure resources.
 *
 * @public
 */
export interface CfnCreateTemplateProvider {
  /**
   * A unique identifier for the template within the project.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The Amazon S3 URL of the CloudFormation template.
   *
   * @public
   */
  TemplateURL: string | undefined;

  /**
   * The IAM role that CloudFormation assumes when creating the stack.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * An array of CloudFormation stack parameters.
   *
   * @public
   */
  Parameters?: CfnStackCreateParameter[] | undefined;
}

/**
 * Details about the CloudFormation stack.
 *
 * @public
 */
export interface CfnStackDetail {
  /**
   * The name of the CloudFormation stack.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the CloudFormation stack.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A human-readable message about the stack's current status.
   *
   * @public
   */
  StatusMessage: string | undefined;
}

/**
 * A key-value pair representing a parameter used in the CloudFormation stack.
 *
 * @public
 */
export interface CfnStackParameter {
  /**
   * The name of the CloudFormation parameter.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the CloudFormation parameter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A key-value pair representing a parameter used in the CloudFormation stack.
 *
 * @public
 */
export interface CfnStackUpdateParameter {
  /**
   * The name of the CloudFormation parameter.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the CloudFormation parameter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Details about a CloudFormation template provider configuration and associated provisioning information.
 *
 * @public
 */
export interface CfnTemplateProviderDetail {
  /**
   * The unique identifier of the template within the project.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The Amazon S3 URL of the CloudFormation template.
   *
   * @public
   */
  TemplateURL: string | undefined;

  /**
   * The IAM role used by CloudFormation to create the stack.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * An array of CloudFormation stack parameters.
   *
   * @public
   */
  Parameters?: CfnStackParameter[] | undefined;

  /**
   * Information about the CloudFormation stack created by the template provider.
   *
   * @public
   */
  StackDetail?: CfnStackDetail | undefined;
}

/**
 * Contains configuration details for updating an existing CloudFormation template provider in the project.
 *
 * @public
 */
export interface CfnUpdateTemplateProvider {
  /**
   * The unique identifier of the template to update within the project.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The Amazon S3 URL of the CloudFormation template.
   *
   * @public
   */
  TemplateURL: string | undefined;

  /**
   * An array of CloudFormation stack parameters.
   *
   * @public
   */
  Parameters?: CfnStackUpdateParameter[] | undefined;
}

/**
 * Defines a named input source, called a channel, to be used by an algorithm.
 *
 * @public
 */
export interface ChannelSpecification {
  /**
   * The name of the channel.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A brief description of the channel.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the channel is required by the algorithm.
   *
   * @public
   */
  IsRequired?: boolean | undefined;

  /**
   * The supported MIME types for the data.
   *
   * @public
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * The allowed compression types, if data compression is used.
   *
   * @public
   */
  SupportedCompressionTypes?: CompressionType[] | undefined;

  /**
   * The allowed input mode, either FILE or PIPE.
   *
   * In FILE mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode.
   *
   * In PIPE mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
   *
   * @public
   */
  SupportedInputModes: TrainingInputMode[] | undefined;
}

/**
 * Contains information about the output location for managed spot training checkpoint data.
 *
 * @public
 */
export interface CheckpointConfig {
  /**
   * Identifies the S3 path where you want SageMaker to store checkpoints. For example, `s3://bucket-name/key-name-prefix`.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * (Optional) The local directory where checkpoints are written. The default directory is `/opt/ml/checkpoints/`.
   *
   * @public
   */
  LocalPath?: string | undefined;
}

/**
 * The container for the metadata for the ClarifyCheck step. For more information, see the topic on [ClarifyCheck step](https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-clarify-check) in the *Amazon SageMaker Developer Guide*.
 *
 * @public
 */
export interface ClarifyCheckStepMetadata {
  /**
   * The type of the Clarify Check step
   *
   * @public
   */
  CheckType?: string | undefined;

  /**
   * The Amazon S3 URI of baseline constraints file to be used for the drift check.
   *
   * @public
   */
  BaselineUsedForDriftCheckConstraints?: string | undefined;

  /**
   * The Amazon S3 URI of the newly calculated baseline constraints file.
   *
   * @public
   */
  CalculatedBaselineConstraints?: string | undefined;

  /**
   * The model package group name.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * The Amazon S3 URI of the violation report if violations are detected.
   *
   * @public
   */
  ViolationReport?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the check processing job that was run by this step's execution.
   *
   * @public
   */
  CheckJobArn?: string | undefined;

  /**
   * This flag indicates if the drift check against the previous baseline will be skipped or not. If it is set to `False`, the previous baseline of the configured check type must be available.
   *
   * @public
   */
  SkipCheck?: boolean | undefined;

  /**
   * This flag indicates if a newly calculated baseline can be accessed through step properties `BaselineUsedForDriftCheckConstraints` and `BaselineUsedForDriftCheckStatistics`. If it is set to `False`, the previous baseline of the configured check type must also be available. These can be accessed through the `BaselineUsedForDriftCheckConstraints` property.
   *
   * @public
   */
  RegisterNewBaseline?: boolean | undefined;
}

/**
 * The inference configuration parameter for the model container.
 *
 * @public
 */
export interface ClarifyInferenceConfig {
  /**
   * Provides the JMESPath expression to extract the features from a model container input in JSON Lines format. For example, if `FeaturesAttribute` is the JMESPath expression `'myfeatures'`, it extracts a list of features `[1,2,3]` from request data `'\{"myfeatures":[1,2,3]\}'`.
   *
   * @public
   */
  FeaturesAttribute?: string | undefined;

  /**
   * A template string used to format a JSON record into an acceptable model container input. For example, a `ContentTemplate` string `'\{"myfeatures":$features\}'` will format a list of features `[1,2,3]` into the record string `'\{"myfeatures":[1,2,3]\}'`. Required only when the model container input is in JSON Lines format.
   *
   * @public
   */
  ContentTemplate?: string | undefined;

  /**
   * The maximum number of records in a request that the model container can process when querying the model container for the predictions of a [synthetic dataset](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-synthetic). A record is a unit of input data that inference can be made on, for example, a single line in CSV data. If `MaxRecordCount` is `1`, the model container expects one record per request. A value of 2 or greater means that the model expects batch requests, which can reduce overhead and speed up the inferencing process. If this parameter is not provided, the explainer will tune the record count per request according to the model container's capacity at runtime.
   *
   * @public
   */
  MaxRecordCount?: number | undefined;

  /**
   * The maximum payload size (MB) allowed of a request from the explainer to the model container. Defaults to `6` MB.
   *
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * A zero-based index used to extract a probability value (score) or list from model container output in CSV format. If this value is not provided, the entire model container output will be treated as a probability value (score) or list.
   *
   * **Example for a single class model:** If the model container output consists of a string-formatted prediction label followed by its probability: `'1,0.6'`, set `ProbabilityIndex` to `1` to select the probability value `0.6`.
   *
   * **Example for a multiclass model:** If the model container output consists of a string-formatted prediction label followed by its probability: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'`, set `ProbabilityIndex` to `1` to select the probability values `[0.1,0.6,0.3]`.
   *
   * @public
   */
  ProbabilityIndex?: number | undefined;

  /**
   * A zero-based index used to extract a label header or list of label headers from model container output in CSV format.
   *
   * **Example for a multiclass model:** If the model container output consists of label headers followed by probabilities: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'`, set `LabelIndex` to `0` to select the label headers `['cat','dog','fish']`.
   *
   * @public
   */
  LabelIndex?: number | undefined;

  /**
   * A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format.
   *
   * **Example**: If the model container output of a single request is `'\{"predicted_label":1,"probability":0.6\}'`, then set `ProbabilityAttribute` to `'probability'`.
   *
   * @public
   */
  ProbabilityAttribute?: string | undefined;

  /**
   * A JMESPath expression used to locate the list of label headers in the model container output.
   *
   * **Example**: If the model container output of a batch request is `'\{"labels":["cat","dog","fish"],"probability":[0.6,0.3,0.1]\}'`, then set `LabelAttribute` to `'labels'` to extract the list of label headers `["cat","dog","fish"]`
   *
   * @public
   */
  LabelAttribute?: string | undefined;

  /**
   * For multiclass classification problems, the label headers are the names of the classes. Otherwise, the label header is the name of the predicted label. These are used to help readability for the output of the `InvokeEndpoint` API. See the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information. If there are no label headers in the model container output, provide them manually using this parameter.
   *
   * @public
   */
  LabelHeaders?: string[] | undefined;

  /**
   * The names of the features. If provided, these are included in the endpoint response payload to help readability of the `InvokeEndpoint` output. See the [Response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information.
   *
   * @public
   */
  FeatureHeaders?: string[] | undefined;

  /**
   * A list of data types of the features (optional). Applicable only to NLP explainability. If provided, `FeatureTypes` must have at least one `'text'` string (for example, `['text']`). If `FeatureTypes` is not provided, the explainer infers the feature types based on the baseline data. The feature types are included in the endpoint response payload. For additional information see the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information.
   *
   * @public
   */
  FeatureTypes?: ClarifyFeatureType[] | undefined;
}

/**
 * The configuration for the [SHAP baseline](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-feature-attribute-shap-baselines.html) (also called the background or reference dataset) of the Kernal SHAP algorithm.
 *
 * > **Note:**
 * >
 * > - The number of records in the baseline data determines the size of the synthetic dataset, which has an impact on latency of explainability requests. For more information, see the **Synthetic data** of [Configure and create an endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html).
 * > - `ShapBaseline` and `ShapBaselineUri` are mutually exclusive parameters. One or the either is required to configure a SHAP baseline.
 *
 * @public
 */
export interface ClarifyShapBaselineConfig {
  /**
   * The MIME type of the baseline data. Choose from `'text/csv'` or `'application/jsonlines'`. Defaults to `'text/csv'`.
   *
   * @public
   */
  MimeType?: string | undefined;

  /**
   * The inline SHAP baseline data in string format. `ShapBaseline` can have one or multiple records to be used as the baseline dataset. The format of the SHAP baseline file should be the same format as the training dataset. For example, if the training dataset is in CSV format and each record contains four features, and all features are numerical, then the format of the baseline data should also share these characteristics. For natural language processing (NLP) of text columns, the baseline value should be the value used to replace the unit of text specified by the `Granularity` of the `TextConfig` parameter. The size limit for `ShapBasline` is 4 KB. Use the `ShapBaselineUri` parameter if you want to provide more than 4 KB of baseline data.
   *
   * @public
   */
  ShapBaseline?: string | undefined;

  /**
   * The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored. The format of the SHAP baseline file should be the same format as the format of the training dataset. For example, if the training dataset is in CSV format, and each record in the training dataset has four features, and all features are numerical, then the baseline file should also have this same format. Each record should contain only the features. If you are using a virtual private cloud (VPC), the `ShapBaselineUri` should be accessible to the VPC. For more information about setting up endpoints with Amazon Virtual Private Cloud, see [Give SageMaker access to Resources in your Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  ShapBaselineUri?: string | undefined;
}

/**
 * A parameter used to configure the SageMaker Clarify explainer to treat text features as text so that explanations are provided for individual units of text. Required only for natural language processing (NLP) explainability.
 *
 * @public
 */
export interface ClarifyTextConfig {
  /**
   * Specifies the language of the text features in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of a supported language.
   *
   * > **Note:** For a mix of multiple languages, use code `'xx'`.
   *
   * @public
   */
  Language: ClarifyTextLanguage | undefined;

  /**
   * The unit of granularity for the analysis of text features. For example, if the unit is `'token'`, then each token (like a word in English) of the text is treated as a feature. SHAP values are computed for each unit/feature.
   *
   * @public
   */
  Granularity: ClarifyTextGranularity | undefined;
}

/**
 * The configuration for SHAP analysis using SageMaker Clarify Explainer.
 *
 * @public
 */
export interface ClarifyShapConfig {
  /**
   * The configuration for the SHAP baseline of the Kernal SHAP algorithm.
   *
   * @public
   */
  ShapBaselineConfig: ClarifyShapBaselineConfig | undefined;

  /**
   * The number of samples to be used for analysis by the Kernal SHAP algorithm.
   *
   * > **Note:** The number of samples determines the size of the synthetic dataset, which has an impact on latency of explainability requests. For more information, see the **Synthetic data** of [Configure and create an endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html).
   *
   * @public
   */
  NumberOfSamples?: number | undefined;

  /**
   * A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions. Defaults to false.
   *
   * @public
   */
  UseLogit?: boolean | undefined;

  /**
   * The starting value used to initialize the random number generator in the explainer. Provide a value for this parameter to obtain a deterministic SHAP result.
   *
   * @public
   */
  Seed?: number | undefined;

  /**
   * A parameter that indicates if text features are treated as text and explanations are provided for individual units of text. Required for natural language processing (NLP) explainability only.
   *
   * @public
   */
  TextConfig?: ClarifyTextConfig | undefined;
}

/**
 * The configuration parameters for the SageMaker Clarify explainer.
 *
 * @public
 */
export interface ClarifyExplainerConfig {
  /**
   * A JMESPath boolean expression used to filter which records to explain. Explanations are activated by default. See [`EnableExplanations`](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable)for additional information.
   *
   * @public
   */
  EnableExplanations?: string | undefined;

  /**
   * The inference configuration parameter for the model container.
   *
   * @public
   */
  InferenceConfig?: ClarifyInferenceConfig | undefined;

  /**
   * The configuration for SHAP analysis.
   *
   * @public
   */
  ShapConfig: ClarifyShapConfig | undefined;
}

/**
 * The Amazon S3 output resources associated with an upstream step that the Cleanup step could not delete.
 *
 * @public
 */
export interface CleanupFailure {
  /**
   * The name of the upstream step whose Amazon S3 output resources the Cleanup step could not delete.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The error code that identifies why the Cleanup step could not delete the output resources associated with the upstream step.
   *
   * @public
   */
  ErrorCode?: CleanupFailureErrorCode | undefined;

  /**
   * A message describing why the Cleanup step could not delete the output resources associated with the upstream step.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * The cleanup outcomes for Amazon S3 output resources associated with upstream steps.
 *
 * @public
 */
export interface CleanupStepMetadata {
  /**
   * The names of upstream steps whose Amazon S3 output resources the Cleanup step deleted successfully.
   *
   * @public
   */
  CleanedSteps?: string[] | undefined;

  /**
   * The upstream steps whose Amazon S3 output resources the Cleanup step could not delete.
   *
   * @public
   */
  FailedSteps?: CleanupFailure[] | undefined;

  /**
   * The names of upstream steps that the Cleanup step skipped. The Cleanup step skips a step when the output properties needed to locate its resources are unavailable.
   *
   * @public
   */
  SkippedSteps?: string[] | undefined;
}

/**
 * The external MySQL-compatible database that the Slurm accounting daemon (`slurmdbd`) connects to for a SageMaker HyperPod cluster. You provide the database credentials in an Amazon Web Services Secrets Manager secret instead of in the request.
 *
 * @public
 */
export interface ClusterAccountingDatabase {
  /**
   * The hostname or endpoint of the accounting database, such as the endpoint of an Amazon RDS for MySQL or Aurora MySQL database. The database must be reachable from the subnets and security groups that you configure for the cluster.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * The port that the accounting database listens on. The default is `3306`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the database schema that stores the Slurm accounting data. The default is `slurm_acct_db_` followed by the cluster ID from the cluster ARN, for example `slurm_acct_db_a1b2c3d4e5f6`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the user name and password for the accounting database. The database user must be able to create the schema and to read from and write to it.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * The configurations that SageMaker uses when updating the AMI versions.
 *
 * @public
 */
export interface RollingDeploymentPolicy {
  /**
   * The maximum amount of instances in the cluster that SageMaker can update at a time.
   *
   * @public
   */
  MaximumBatchSize: CapacitySizeConfig | undefined;

  /**
   * The maximum amount of instances in the cluster that SageMaker can roll back at a time.
   *
   * @public
   */
  RollbackMaximumBatchSize?: CapacitySizeConfig | undefined;
}

/**
 * The configuration to use when updating the AMI versions.
 *
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * The policy that SageMaker uses when updating the AMI versions of the cluster.
   *
   * @public
   */
  RollingUpdatePolicy?: RollingDeploymentPolicy | undefined;

  /**
   * The duration in seconds that SageMaker waits before updating more instances in the cluster.
   *
   * @public
   */
  WaitIntervalInSeconds?: number | undefined;

  /**
   * An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.
   *
   * @public
   */
  AutoRollbackConfiguration?: AlarmDetails[] | undefined;
}

/**
 * The schedule configuration for automatic patching.
 *
 * @public
 */
export interface ClusterPatchSchedule {
  /**
   * The date and time of the next scheduled automatic patch. The system sets this automatically when a patch is detected. Use this field to reschedule the patch to a different date.
   *
   * @public
   */
  NextPatchDate?: Date | undefined;
}

/**
 * The configuration for automatic patching of the instance group. When configured, the system automatically applies security patch AMI updates to the instance group.
 *
 * @public
 */
export interface ClusterAutoPatchConfig {
  /**
   * The strategy for applying patches to instances in the group.
   *
   * - `WhenIdle`: Cordons all instances and patches each instance as it becomes idle (no running jobs). Each instance is uncordoned immediately after patching and becomes available for new jobs. If instances do not become idle, they remain on the previous AMI version. You can then use UpdateClusterSoftware with the desired ImageReleaseVersion to manually update the remaining instances.
   * - `WhenAllIdle`: Cordons all instances and waits for all to become idle before patching. All instances are uncordoned after patching completes. If not all instances become idle, no patching occurs and all instances remain on the previous AMI version.
   *
   * @public
   */
  PatchingStrategy: ClusterPatchingStrategy | undefined;

  /**
   * The schedule for automatic patching, including the next patch date.
   *
   * @public
   */
  PatchSchedule?: ClusterPatchSchedule | undefined;

  /**
   * The deployment configuration for rolling patch updates, including rollback settings and batch sizes. Only applicable when using a rolling patching strategy.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfiguration | undefined;
}

/**
 * The schedule details for automatic patching, including the next scheduled patch date.
 *
 * @public
 */
export interface ClusterPatchScheduleDetails {
  /**
   * The date and time of the next scheduled automatic patch.
   *
   * @public
   */
  NextPatchDate?: Date | undefined;
}

/**
 * The auto-patching configuration details for the instance group, including the patching strategy and schedule.
 *
 * @public
 */
export interface ClusterAutoPatchConfigDetails {
  /**
   * The strategy used for applying patches to instances in the group.
   *
   * - `WhenIdle`: Cordons all instances and patches each instance as it becomes idle (no running jobs). Each instance is uncordoned immediately after patching and becomes available for new jobs. If instances do not become idle, they remain on the previous AMI version. You can then use UpdateClusterSoftware with the desired ImageReleaseVersion to manually update the remaining instances.
   * - `WhenAllIdle`: Cordons all instances and waits for all to become idle before patching. All instances are uncordoned after patching completes. If not all instances become idle, no patching occurs and all instances remain on the previous AMI version.
   *
   * @public
   */
  PatchingStrategy?: ClusterPatchingStrategy | undefined;

  /**
   * The currently active patch schedule that the system will execute.
   *
   * @public
   */
  CurrentPatchSchedule?: ClusterPatchScheduleDetails | undefined;

  /**
   * The requested patch schedule. Differs from CurrentPatchSchedule when a reschedule request is pending.
   *
   * @public
   */
  DesiredPatchSchedule?: ClusterPatchScheduleDetails | undefined;

  /**
   * The deployment configuration for rolling patch updates.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfiguration | undefined;
}

/**
 * Specifies the autoscaling configuration for a HyperPod cluster.
 *
 * @public
 */
export interface ClusterAutoScalingConfig {
  /**
   * Describes whether autoscaling is enabled or disabled for the cluster. Valid values are `Enable` and `Disable`.
   *
   * @public
   */
  Mode: ClusterAutoScalingMode | undefined;

  /**
   * The type of autoscaler to use. Currently supported value is `Karpenter`.
   *
   * @public
   */
  AutoScalerType?: ClusterAutoScalerType | undefined;
}

/**
 * The autoscaling configuration and status information for a HyperPod cluster.
 *
 * @public
 */
export interface ClusterAutoScalingConfigOutput {
  /**
   * Describes whether autoscaling is enabled or disabled for the cluster.
   *
   * @public
   */
  Mode: ClusterAutoScalingMode | undefined;

  /**
   * The type of autoscaler configured for the cluster.
   *
   * @public
   */
  AutoScalerType?: ClusterAutoScalerType | undefined;

  /**
   * The current status of the autoscaling configuration. Valid values are `InService`, `Failed`, `Creating`, and `Deleting`.
   *
   * @public
   */
  Status: ClusterAutoScalingStatus | undefined;

  /**
   * If the autoscaling status is `Failed`, this field contains a message describing the failure.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * Configuration options specific to On-Demand instances.
 *
 * @public
 */
export interface ClusterOnDemandOptions {}

/**
 * Configuration options specific to Spot instances.
 *
 * @public
 */
export interface ClusterSpotOptions {}

/**
 * Defines the instance capacity requirements for an instance group, including configurations for both Spot and On-Demand capacity types.
 *
 * @public
 */
export interface ClusterCapacityRequirements {
  /**
   * Configuration options specific to Spot instances.
   *
   * @public
   */
  Spot?: ClusterSpotOptions | undefined;

  /**
   * Configuration options specific to On-Demand instances.
   *
   * @public
   */
  OnDemand?: ClusterOnDemandOptions | undefined;
}

/**
 * Defines the configuration for attaching an additional Amazon Elastic Block Store (EBS) volume to each instance of the SageMaker HyperPod cluster instance group. To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620).
 *
 * @public
 */
export interface ClusterEbsVolumeConfig {
  /**
   * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker`.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * The ID of a KMS key to encrypt the Amazon EBS volume.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Specifies whether the configuration is for the cluster's root or secondary Amazon EBS volume. You can specify two `ClusterEbsVolumeConfig` fields to configure both the root and secondary volumes. Set the value to `True` if you'd like to provide your own customer managed Amazon Web Services KMS key to encrypt the root volume. When `True`:
   *
   * - The configuration is applied to the root volume.
   * - You can't specify the `VolumeSizeInGB` field. The size of the root volume is determined for you.
   * - You must specify a KMS key ID for `VolumeKmsKeyId` to encrypt the root volume with your own KMS key instead of an Amazon Web Services owned KMS key.
   *
   * Otherwise, by default, the value is `False`, and the following applies:
   *
   * - The configuration is applied to the secondary volume, while the root volume is encrypted with an Amazon Web Services owned key.
   * - You must specify the `VolumeSizeInGB` field.
   * - You can optionally specify the `VolumeKmsKeyId` to encrypt the secondary volume with your own KMS key instead of an Amazon Web Services owned KMS key.
   *
   * @public
   */
  RootVolume?: boolean | undefined;
}

/**
 * Metadata information about a HyperPod cluster showing information about the cluster level operations, such as creating, updating, and deleting.
 *
 * @public
 */
export interface ClusterMetadata {
  /**
   * An error message describing why the cluster level operation (such as creating, updating, or deleting) failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * A list of Amazon EKS IAM role ARNs associated with the cluster. This is created by HyperPod on your behalf and only applies for EKS orchestrated clusters.
   *
   * @public
   */
  EksRoleAccessEntries?: string[] | undefined;

  /**
   * The Service-Linked Role (SLR) associated with the cluster. This is created by HyperPod on your behalf and only applies for EKS orchestrated clusters.
   *
   * @public
   */
  SlrAccessEntry?: string | undefined;
}

/**
 * Metadata information about a change to the external Slurm accounting database of a HyperPod cluster.
 *
 * @public
 */
export interface DatabaseConfigurationMetadata {
  /**
   * Whether HyperPod restored the previous accounting database configuration after the change failed. Valid values:
   *
   * - `NotApplicable`: The change failed before HyperPod modified the cluster, for example because the database could not be reached or rejected the credentials, so there was nothing to restore.
   * - `Reverted`: The change failed after it was applied, and HyperPod restored the previous configuration. The cluster continues to use the previous accounting database.
   * - `RevertFailed`: The change failed and HyperPod could not restore the previous configuration, so Slurm accounting on the cluster might not be working.
   *
   * This field is omitted when the change succeeds.
   *
   * @public
   */
  RollbackStatus?: DatabaseConfigurationRollbackStatus | undefined;

  /**
   * Additional information about a change that succeeded, such as an action to take on the cluster.
   *
   * @public
   */
  Advisory?: string | undefined;

  /**
   * An error message describing why the accounting database change failed, and how to resolve it.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * The customer ENI and additional ENIs associated with a network interface category.
 *
 * @public
 */
export interface InstanceRequirementsEniConfiguration {
  /**
   * The ID of the customer-managed Elastic Network Interface (ENI) associated with the instance type category.
   *
   * @public
   */
  CustomerEni?: string | undefined;

  /**
   * Information about additional Elastic Network Interfaces (ENIs) associated with the instance type category.
   *
   * @public
   */
  AdditionalEnis?: AdditionalEnis | undefined;
}

/**
 * Metadata information about an instance in a HyperPod cluster.
 *
 * @public
 */
export interface InstanceMetadata {
  /**
   * The ID of the customer-managed Elastic Network Interface (ENI) associated with the instance.
   *
   * @public
   */
  CustomerEni?: string | undefined;

  /**
   * Information about additional Elastic Network Interfaces (ENIs) associated with the instance.
   *
   * @public
   */
  AdditionalEnis?: AdditionalEnis | undefined;

  /**
   * The ENI configurations for the instance types in the instance requirements, grouped by network interface category (for example, ENI-only or EFA with ENIs). At most one configuration per category.
   *
   * @public
   */
  InstanceRequirementsEniConfigurations?: InstanceRequirementsEniConfiguration[] | undefined;

  /**
   * Information about the Capacity Reservation used by the instance.
   *
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;

  /**
   * An error message describing why the instance creation or update failed, if applicable.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The execution state of the Lifecycle Script (LCS) for the instance.
   *
   * @public
   */
  LcsExecutionState?: string | undefined;

  /**
   * The unique logical identifier of the node within the cluster. The ID used here is the same object as in the `BatchAddClusterNodes` API.
   *
   * @public
   */
  NodeLogicalId?: string | undefined;
}

/**
 * Metadata information about an instance group in a HyperPod cluster.
 *
 * @public
 */
export interface InstanceGroupMetadata {
  /**
   * An error message describing why the instance group level operation (such as creating, scaling, or deleting) failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The ID of the Availability Zone where the instance group is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Information about the Capacity Reservation used by the instance group.
   *
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;

  /**
   * The ID of the subnet where the instance group is located.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * A list of security group IDs associated with the instance group.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * If you use a custom Amazon Machine Image (AMI) for the instance group, this field shows the ID of the custom AMI.
   *
   * @public
   */
  AmiOverride?: string | undefined;
}

/**
 * Metadata information about scaling operations for an instance group.
 *
 * @public
 */
export interface InstanceGroupScalingMetadata {
  /**
   * The current number of instances in the group.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The desired number of instances for the group after scaling.
   *
   * @public
   */
  TargetCount?: number | undefined;

  /**
   * Minimum instance count of the instance group.
   *
   * @public
   */
  MinCount?: number | undefined;

  /**
   * An error message describing why the scaling operation failed, if applicable.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * Metadata information about the health of a Slurm component on the controller node of a HyperPod cluster.
 *
 * @public
 */
export interface SlurmHealthMetadata {
  /**
   * The Slurm component that the health information describes. The valid value is `Slurmdbd`, the Slurm accounting daemon.
   *
   * @public
   */
  Component: SlurmHealthComponent | undefined;

  /**
   * The health of the component. Valid values are `Healthy` and `Unhealthy`.
   *
   * @public
   */
  Status: SlurmHealthStatus | undefined;

  /**
   * The reason the component is unhealthy. Valid values:
   *
   * - `DaemonDown`: The daemon is not running, so job accounting records are not being written.
   * - `DaemonDisabled`: The daemon is running and its accounting database is responding, but the daemon is not enabled to start automatically. Job accounting stops the next time the controller node restarts.
   * - `DbUnreachable`: The daemon is running, but its accounting database did not respond. Job accounting records might not be written.
   *
   * This field is omitted when the component is healthy.
   *
   * @public
   */
  Reason?: SlurmHealthReason | undefined;
}

/**
 * Metadata associated with a cluster event, which may include details about various resource types.
 *
 * @public
 */
export type EventMetadata =
  | EventMetadata.ClusterMember
  | EventMetadata.DatabaseConfigurationMember
  | EventMetadata.InstanceMember
  | EventMetadata.InstanceGroupMember
  | EventMetadata.InstanceGroupScalingMember
  | EventMetadata.SlurmHealthMember
  | EventMetadata.$UnknownMember;

/**
 * @public
 */
export namespace EventMetadata {
  /**
   * Metadata specific to cluster-level events.
   *
   * @public
   */
  export interface ClusterMember {
    Cluster: ClusterMetadata;
    InstanceGroup?: never;
    InstanceGroupScaling?: never;
    Instance?: never;
    DatabaseConfiguration?: never;
    SlurmHealth?: never;
    $unknown?: never;
  }

  /**
   * Metadata specific to instance group-level events.
   *
   * @public
   */
  export interface InstanceGroupMember {
    Cluster?: never;
    InstanceGroup: InstanceGroupMetadata;
    InstanceGroupScaling?: never;
    Instance?: never;
    DatabaseConfiguration?: never;
    SlurmHealth?: never;
    $unknown?: never;
  }

  /**
   * Metadata related to instance group scaling events.
   *
   * @public
   */
  export interface InstanceGroupScalingMember {
    Cluster?: never;
    InstanceGroup?: never;
    InstanceGroupScaling: InstanceGroupScalingMetadata;
    Instance?: never;
    DatabaseConfiguration?: never;
    SlurmHealth?: never;
    $unknown?: never;
  }

  /**
   * Metadata specific to instance-level events.
   *
   * @public
   */
  export interface InstanceMember {
    Cluster?: never;
    InstanceGroup?: never;
    InstanceGroupScaling?: never;
    Instance: InstanceMetadata;
    DatabaseConfiguration?: never;
    SlurmHealth?: never;
    $unknown?: never;
  }

  /**
   * Metadata specific to events about the external Slurm accounting database of the cluster.
   *
   * @public
   */
  export interface DatabaseConfigurationMember {
    Cluster?: never;
    InstanceGroup?: never;
    InstanceGroupScaling?: never;
    Instance?: never;
    DatabaseConfiguration: DatabaseConfigurationMetadata;
    SlurmHealth?: never;
    $unknown?: never;
  }

  /**
   * Metadata specific to events about the health of the Slurm components on the controller node of the cluster.
   *
   * @public
   */
  export interface SlurmHealthMember {
    Cluster?: never;
    InstanceGroup?: never;
    InstanceGroupScaling?: never;
    Instance?: never;
    DatabaseConfiguration?: never;
    SlurmHealth: SlurmHealthMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Cluster?: never;
    InstanceGroup?: never;
    InstanceGroupScaling?: never;
    Instance?: never;
    DatabaseConfiguration?: never;
    SlurmHealth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Cluster: (value: ClusterMetadata) => T;
    InstanceGroup: (value: InstanceGroupMetadata) => T;
    InstanceGroupScaling: (value: InstanceGroupScalingMetadata) => T;
    Instance: (value: InstanceMetadata) => T;
    DatabaseConfiguration: (value: DatabaseConfigurationMetadata) => T;
    SlurmHealth: (value: SlurmHealthMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Detailed information about a specific event, including event metadata.
 *
 * @public
 */
export interface EventDetails {
  /**
   * Metadata specific to the event, which may include information about the cluster, instance group, or instance involved.
   *
   * @public
   */
  EventMetadata?: EventMetadata | undefined;
}

/**
 * Detailed information about a specific event in a HyperPod cluster.
 *
 * @public
 */
export interface ClusterEventDetail {
  /**
   * The unique identifier (UUID) of the event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the HyperPod cluster associated with the event.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the HyperPod cluster associated with the event.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The name of the instance group associated with the event, if applicable.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The EC2 instance ID associated with the event, if applicable.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The type of resource associated with the event. Valid values are `Cluster`, `InstanceGroup`, or `Instance`.
   *
   * @public
   */
  ResourceType: ClusterEventResourceType | undefined;

  /**
   * The timestamp when the event occurred.
   *
   * @public
   */
  EventTime: Date | undefined;

  /**
   * Additional details about the event, including event-specific metadata.
   *
   * @public
   */
  EventDetails?: EventDetails | undefined;

  /**
   * A human-readable description of the event.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The severity level of the event. Valid values are `Info`, `Warn`, and `Error`.
   *
   * @public
   */
  EventLevel?: ClusterEventLevel | undefined;
}

/**
 * A summary of an event in a HyperPod cluster.
 *
 * @public
 */
export interface ClusterEventSummary {
  /**
   * The unique identifier (UUID) of the event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the HyperPod cluster associated with the event.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the HyperPod cluster associated with the event.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The name of the instance group associated with the event, if applicable.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The Amazon Elastic Compute Cloud (EC2) instance ID associated with the event, if applicable.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The type of resource associated with the event. Valid values are `Cluster`, `InstanceGroup`, or `Instance`.
   *
   * @public
   */
  ResourceType: ClusterEventResourceType | undefined;

  /**
   * The timestamp when the event occurred.
   *
   * @public
   */
  EventTime: Date | undefined;

  /**
   * A brief, human-readable description of the event.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The severity level of the event. Valid values are `Info`, `Warn`, and `Error`.
   *
   * @public
   */
  EventLevel?: ClusterEventLevel | undefined;
}

/**
 * Defines the configuration for attaching an Amazon FSx for Lustre file system to instances in a SageMaker HyperPod cluster instance group.
 *
 * @public
 */
export interface ClusterFsxLustreConfig {
  /**
   * The DNS name of the Amazon FSx for Lustre file system.
   *
   * @public
   */
  DnsName: string | undefined;

  /**
   * The mount name of the Amazon FSx for Lustre file system.
   *
   * @public
   */
  MountName: string | undefined;

  /**
   * The local path where the Amazon FSx for Lustre file system is mounted on instances.
   *
   * @public
   */
  MountPath?: string | undefined;
}

/**
 * Defines the configuration for attaching an Amazon FSx for OpenZFS file system to instances in a SageMaker HyperPod cluster instance group.
 *
 * @public
 */
export interface ClusterFsxOpenZfsConfig {
  /**
   * The DNS name of the Amazon FSx for OpenZFS file system.
   *
   * @public
   */
  DnsName: string | undefined;

  /**
   * The local path where the Amazon FSx for OpenZFS file system is mounted on instances.
   *
   * @public
   */
  MountPath?: string | undefined;
}

/**
 * The instance requirement details for a flexible instance group, including the current and desired instance types.
 *
 * @public
 */
export interface ClusterInstanceRequirementDetails {
  /**
   * The instance types currently in use by the instance group.
   *
   * @public
   */
  CurrentInstanceTypes?: ClusterInstanceType[] | undefined;

  /**
   * The desired instance types for the instance group, as specified in the most recent update request.
   *
   * @public
   */
  DesiredInstanceTypes?: ClusterInstanceType[] | undefined;
}

/**
 * Defines the configuration for attaching additional storage to the instances in the SageMaker HyperPod cluster instance group. To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620).
 *
 * @public
 */
export type ClusterInstanceStorageConfig =
  | ClusterInstanceStorageConfig.EbsVolumeConfigMember
  | ClusterInstanceStorageConfig.FsxLustreConfigMember
  | ClusterInstanceStorageConfig.FsxOpenZfsConfigMember
  | ClusterInstanceStorageConfig.$UnknownMember;

/**
 * @public
 */
export namespace ClusterInstanceStorageConfig {
  /**
   * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker`.
   *
   * @public
   */
  export interface EbsVolumeConfigMember {
    EbsVolumeConfig: ClusterEbsVolumeConfig;
    FsxLustreConfig?: never;
    FsxOpenZfsConfig?: never;
    $unknown?: never;
  }

  /**
   * Defines the configuration for attaching an Amazon FSx for Lustre file system to the instances in the SageMaker HyperPod cluster instance group.
   *
   * @public
   */
  export interface FsxLustreConfigMember {
    EbsVolumeConfig?: never;
    FsxLustreConfig: ClusterFsxLustreConfig;
    FsxOpenZfsConfig?: never;
    $unknown?: never;
  }

  /**
   * Defines the configuration for attaching an Amazon FSx for OpenZFS file system to the instances in the SageMaker HyperPod cluster instance group.
   *
   * @public
   */
  export interface FsxOpenZfsConfigMember {
    EbsVolumeConfig?: never;
    FsxLustreConfig?: never;
    FsxOpenZfsConfig: ClusterFsxOpenZfsConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EbsVolumeConfig?: never;
    FsxLustreConfig?: never;
    FsxOpenZfsConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EbsVolumeConfig: (value: ClusterEbsVolumeConfig) => T;
    FsxLustreConfig: (value: ClusterFsxLustreConfig) => T;
    FsxOpenZfsConfig: (value: ClusterFsxOpenZfsConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about a specific instance type within a flexible instance group, including the count and configuration.
 *
 * @public
 */
export interface ClusterInstanceTypeDetail {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: ClusterInstanceType | undefined;

  /**
   * The number of instances of this type currently running in the instance group.
   *
   * @public
   */
  CurrentCount?: number | undefined;

  /**
   * The number of threads per CPU core for this instance type.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * A Kubernetes taint that can be applied to cluster nodes.
 *
 * @public
 */
export interface ClusterKubernetesTaint {
  /**
   * The key of the taint.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the taint.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The effect of the taint. Valid values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
   *
   * @public
   */
  Effect: ClusterKubernetesTaintEffect | undefined;
}

/**
 * Detailed Kubernetes configuration showing both the current and desired state of labels and taints for cluster nodes.
 *
 * @public
 */
export interface ClusterKubernetesConfigDetails {
  /**
   * The current labels applied to cluster nodes of an instance group.
   *
   * @public
   */
  CurrentLabels?: Record<string, string> | undefined;

  /**
   * The desired labels to be applied to cluster nodes of an instance group.
   *
   * @public
   */
  DesiredLabels?: Record<string, string> | undefined;

  /**
   * The current taints applied to cluster nodes of an instance group.
   *
   * @public
   */
  CurrentTaints?: ClusterKubernetesTaint[] | undefined;

  /**
   * The desired taints to be applied to cluster nodes of an instance group.
   *
   * @public
   */
  DesiredTaints?: ClusterKubernetesTaint[] | undefined;
}

/**
 * The lifecycle configuration for a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterLifeCycleConfig {
  /**
   * An Amazon S3 bucket path where your lifecycle scripts are stored.
   *
   * > **Important:** Make sure that the S3 bucket path starts with `s3://sagemaker-`. The [IAM role for SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-iam-role-for-hyperpod) has the managed [`AmazonSageMakerClusterInstanceRolePolicy`](https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-cluster.html) attached, which allows access to S3 buckets with the specific prefix `sagemaker-`.
   *
   * @public
   */
  SourceS3Uri?: string | undefined;

  /**
   * The file name of the entrypoint script of lifecycle scripts under `SourceS3Uri`. This entrypoint script runs during cluster creation.
   *
   * @public
   */
  OnCreate?: string | undefined;

  /**
   * The file name of the entrypoint script of lifecycle scripts under `SourceS3Uri`. This script runs on the node after the AMI-based initialization is complete.
   *
   * @public
   */
  OnInitComplete?: string | undefined;
}

/**
 * The network interface configuration details for a Amazon SageMaker HyperPod cluster instance group.
 *
 * @public
 */
export interface ClusterNetworkInterfaceDetails {
  /**
   * The type of network interface for the instance group. Valid values are `efa` and `efa-only`.
   *
   * @public
   */
  InterfaceType?: ClusterInterfaceType | undefined;
}

/**
 * The configuration object of the schedule that SageMaker follows when updating the AMI.
 *
 * @public
 */
export interface ScheduledUpdateConfig {
  /**
   * A cron expression that specifies the schedule that SageMaker follows when updating the AMI.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * The configuration to use when updating the AMI versions.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfiguration | undefined;
}

/**
 * The Slurm configuration details for an instance group in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterSlurmConfigDetails {
  /**
   * The type of Slurm node for the instance group. Valid values are `Controller`, `Worker`, and `Login`.
   *
   * @public
   */
  NodeType: ClusterSlurmNodeType | undefined;

  /**
   * The list of Slurm partition names that the instance group belongs to.
   *
   * @public
   */
  PartitionNames?: string[] | undefined;
}

/**
 * Details of an instance group in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterInstanceGroupDetails {
  /**
   * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  CurrentCount?: number | undefined;

  /**
   * The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  TargetCount?: number | undefined;

  /**
   * The minimum number of instances that must be available in the instance group of a SageMaker HyperPod cluster before it transitions to `InService` status.
   *
   * @public
   */
  MinCount?: number | undefined;

  /**
   * The name of the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The instance type of the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceType?: ClusterInstanceType | undefined;

  /**
   * The instance requirements for the instance group, including the current and desired instance types. This field is present for flexible instance groups that support multiple instance types.
   *
   * @public
   */
  InstanceRequirements?: ClusterInstanceRequirementDetails | undefined;

  /**
   * Details about the instance types in the instance group, including the count and configuration of each instance type. This field is present for flexible instance groups that support multiple instance types.
   *
   * @public
   */
  InstanceTypeDetails?: ClusterInstanceTypeDetail[] | undefined;

  /**
   * Details of LifeCycle configuration for the instance group.
   *
   * @public
   */
  LifeCycleConfig?: ClusterLifeCycleConfig | undefined;

  /**
   * The execution role for the instance group to assume.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The number you specified to `TreadsPerCore` in `CreateCluster` for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading. For more information, see the reference table of [CPU cores and threads per CPU core per instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * The additional storage configurations for the instances in the SageMaker HyperPod cluster instance group.
   *
   * @public
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[] | undefined;

  /**
   * A flag indicating whether deep health checks should be performed when the cluster instance group is created or updated.
   *
   * @public
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[] | undefined;

  /**
   * The current status of the cluster instance group.
   *
   * - `InService`: The instance group is active and healthy.
   * - `Creating`: The instance group is being provisioned.
   * - `Updating`: The instance group is being updated.
   * - `Failed`: The instance group has failed to provision or is no longer healthy.
   * - `Degraded`: The instance group is degraded, meaning that some instances have failed to provision or are no longer healthy.
   * - `Deleting`: The instance group is being deleted.
   *
   * @public
   */
  Status?: InstanceGroupStatus | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan associated with this cluster instance group.
   *
   * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;

  /**
   * The current status of the training plan associated with this cluster instance group.
   *
   * @public
   */
  TrainingPlanStatus?: string | undefined;

  /**
   * The customized Amazon VPC configuration at the instance group level that overrides the default Amazon VPC configuration of the SageMaker HyperPod cluster.
   *
   * @public
   */
  OverrideVpcConfig?: VpcConfig | undefined;

  /**
   * The configuration object of the schedule that SageMaker follows when updating the AMI.
   *
   * @public
   */
  ScheduledUpdateConfig?: ScheduledUpdateConfig | undefined;

  /**
   * The auto-patching configuration for the instance group, including the current patching strategy and next scheduled patch date.
   *
   * @public
   */
  AutoPatchConfig?: ClusterAutoPatchConfigDetails | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) currently in use by the instance group.
   *
   * @public
   */
  CurrentImageId?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) desired for the instance group.
   *
   * @public
   */
  DesiredImageId?: string | undefined;

  /**
   * The version of the HyperPod-managed AMI currently running on the instance group.
   *
   * @public
   */
  CurrentImageReleaseVersion?: string | undefined;

  /**
   * The desired version of the HyperPod-managed AMI for the instance group. This may differ from the current version when an update is pending.
   *
   * @public
   */
  DesiredImageReleaseVersion?: string | undefined;

  /**
   * The status of the image version for the instance group. Indicates whether the instance group is running the latest image version or if an update is available.
   *
   * @public
   */
  ImageVersionStatus?: ClusterImageVersionStatus | undefined;

  /**
   * A map indicating active operations currently in progress for the instance group of a SageMaker HyperPod cluster. When there is a scaling operation in progress, this map contains a key `Scaling` with value 1.
   *
   * @public
   */
  ActiveOperations?: Partial<Record<ActiveClusterOperationName, number>> | undefined;

  /**
   * The Kubernetes configuration for the instance group that contains labels and taints to be applied for the nodes in this instance group.
   *
   * @public
   */
  KubernetesConfig?: ClusterKubernetesConfigDetails | undefined;

  /**
   * The instance capacity requirements for the instance group.
   *
   * @public
   */
  CapacityRequirements?: ClusterCapacityRequirements | undefined;

  /**
   * Represents the number of running nodes using the desired Image ID.
   *
   * 1. **During software update operations:** This count shows the number of nodes running on the desired Image ID. If a rollback occurs, the current image ID and desired image ID (both included in the describe cluster response) swap values. The TargetStateCount then shows the number of nodes running on the newly designated desired image ID (which was previously the current image ID).
   * 2. **During simultaneous scaling and software update operations:** This count shows the number of instances running on the desired image ID, including any new instances created as part of the scaling request. New nodes are always created using the desired image ID, so TargetStateCount reflects the total count of nodes running on the desired image ID, even during rollback scenarios.
   *
   * @public
   */
  TargetStateCount?: number | undefined;

  /**
   * Status of the last software udpate request.
   *
   * Status transitions follow these possible sequences:
   *
   * - Pending -&gt; InProgress -&gt; Succeeded
   * - Pending -&gt; InProgress -&gt; RollbackInProgress -&gt; RollbackComplete
   * - Pending -&gt; InProgress -&gt; RollbackInProgress -&gt; Failed
   *
   * @public
   */
  SoftwareUpdateStatus?: SoftwareUpdateStatus | undefined;

  /**
   * The configuration to use when updating the AMI versions.
   *
   * @public
   */
  ActiveSoftwareUpdateConfig?: DeploymentConfiguration | undefined;

  /**
   * The Slurm configuration for the instance group.
   *
   * @public
   */
  SlurmConfig?: ClusterSlurmConfigDetails | undefined;

  /**
   * The network interface configuration for the instance group.
   *
   * @public
   */
  NetworkInterface?: ClusterNetworkInterfaceDetails | undefined;
}

/**
 * The instance requirements for a flexible instance group. Use this to specify multiple instance types that the instance group can use. The order of instance types in the list determines the priority for instance provisioning.
 *
 * @public
 */
export interface ClusterInstanceRequirements {
  /**
   * The list of instance types that the instance group can use. The order of instance types determines the priority—HyperPod attempts to provision instances using the first instance type in the list and falls back to subsequent types if capacity is unavailable.
   *
   * @public
   */
  InstanceTypes: ClusterInstanceType[] | undefined;
}

/**
 * Kubernetes configuration that specifies labels and taints to be applied to cluster nodes in an instance group.
 *
 * @public
 */
export interface ClusterKubernetesConfig {
  /**
   * Key-value pairs of labels to be applied to cluster nodes.
   *
   * @public
   */
  Labels?: Record<string, string> | undefined;

  /**
   * List of taints to be applied to cluster nodes.
   *
   * @public
   */
  Taints?: ClusterKubernetesTaint[] | undefined;
}

/**
 * The network interface configuration for a Amazon SageMaker HyperPod cluster instance group.
 *
 * @public
 */
export interface ClusterNetworkInterface {
  /**
   * The type of network interface for the instance group. Valid values:
   *
   * - `efa` – An EFA with ENA interface, which provides both the EFA device for low-latency, high-throughput communication and the ENA device for IP networking.
   * - `efa-only` – An EFA-only interface, which provides only the EFA device capabilities without the ENA device for traditional IP networking.
   *
   * For more information, see [Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html).
   *
   * @public
   */
  InterfaceType?: ClusterInterfaceType | undefined;
}

/**
 * The Slurm configuration for an instance group in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterSlurmConfig {
  /**
   * The type of Slurm node for the instance group. Valid values are `Controller`, `Worker`, and `Login`.
   *
   * @public
   */
  NodeType: ClusterSlurmNodeType | undefined;

  /**
   * The list of Slurm partition names that the instance group belongs to.
   *
   * @public
   */
  PartitionNames?: string[] | undefined;
}

/**
 * The specifications of an instance group that you need to define.
 *
 * @public
 */
export interface ClusterInstanceGroupSpecification {
  /**
   * Specifies the number of instances to add to the instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Defines the minimum number of instances required for an instance group to become `InService`. If this threshold isn't met within 3 hours, the instance group rolls back to its previous state - zero instances for new instance groups, or previous settings for existing instance groups. `MinInstanceCount` only affects the initial transition to `InService` and does not guarantee maintaining this minimum afterward.
   *
   * @public
   */
  MinInstanceCount?: number | undefined;

  /**
   * Specifies the name of the instance group.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * Specifies the instance type of the instance group.
   *
   * @public
   */
  InstanceType?: ClusterInstanceType | undefined;

  /**
   * The instance requirements for the instance group, including the instance types to use. Use this to create a flexible instance group that supports multiple instance types. The `InstanceType` and `InstanceRequirements` properties are mutually exclusive.
   *
   * @public
   */
  InstanceRequirements?: ClusterInstanceRequirements | undefined;

  /**
   * Specifies the LifeCycle configuration for the instance group.
   *
   * @public
   */
  LifeCycleConfig?: ClusterLifeCycleConfig | undefined;

  /**
   * Specifies an IAM execution role to be assumed by the instance group.
   *
   * @public
   */
  ExecutionRole: string | undefined;

  /**
   * Specifies the value for **Threads per core**. For instance types that support multithreading, you can specify `1` for disabling multithreading and `2` for enabling multithreading. For instance types that doesn't support multithreading, specify `1`. For more information, see the reference table of [CPU cores and threads per CPU core per instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Specifies the additional storage configurations for the instances in the SageMaker HyperPod cluster instance group.
   *
   * @public
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[] | undefined;

  /**
   * A flag indicating whether deep health checks should be performed when the cluster instance group is created or updated.
   *
   * @public
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[] | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan to use for this cluster instance group.
   *
   * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;

  /**
   * To configure multi-AZ deployments, customize the Amazon VPC configuration at the instance group level. You can specify different subnets and security groups across different AZs in the instance group specification to override a SageMaker HyperPod cluster's default Amazon VPC configuration. For more information about deploying a cluster in multiple AZs, see [Setting up SageMaker HyperPod clusters across multiple AZs](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-multiple-availability-zones).
   *
   * > **Note:**
   * >
   * > When your Amazon VPC and subnets support IPv6, network communications differ based on the cluster orchestration platform:
   * >
   * > - Slurm-orchestrated clusters automatically configure nodes with dual IPv6 and IPv4 addresses, allowing immediate IPv6 network communications.
   * > - In Amazon EKS-orchestrated clusters, nodes receive dual-stack addressing, but pods can only use IPv6 when the Amazon EKS cluster is explicitly IPv6-enabled. For information about deploying an IPv6 Amazon EKS cluster, see [Amazon EKS IPv6 Cluster Deployment](https://docs.aws.amazon.com/eks/latest/userguide/deploy-ipv6-cluster.html#_deploy_an_ipv6_cluster_with_eksctl).
   * >
   * > Additional resources for IPv6 configuration:
   * >
   * > - For information about adding IPv6 support to your VPC, see to [IPv6 Support for VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html).
   * > - For information about creating a new IPv6-compatible VPC, see [Amazon VPC Creation Guide](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html).
   * > - To configure SageMaker HyperPod with a custom Amazon VPC, see [Custom Amazon VPC Setup for SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-optional-vpc).
   *
   * @public
   */
  OverrideVpcConfig?: VpcConfig | undefined;

  /**
   * The configuration object of the schedule that SageMaker uses to update the AMI.
   *
   * @public
   */
  ScheduledUpdateConfig?: ScheduledUpdateConfig | undefined;

  /**
   * When configuring your HyperPod cluster, you can specify an image ID using one of the following options:
   *
   * - `HyperPodPublicAmiId`: Use a HyperPod public AMI
   * - `CustomAmiId`: Use your custom AMI
   * - `default`: Use the default latest system image. For clusters with continuous scaling node provisioning mode, new instance groups inherit the AMI from the earliest existing instance group
   *
   * If you choose to use a custom AMI (`CustomAmiId`), ensure it meets the following requirements:
   *
   * - Encryption: The custom AMI must be unencrypted.
   * - Ownership: The custom AMI must be owned by the same Amazon Web Services account that is creating the HyperPod cluster.
   * - Volume support: Only the primary AMI snapshot volume is supported; additional AMI volumes are not supported.
   *
   * When updating the instance group's AMI through the `UpdateClusterSoftware` operation, if an instance group uses a custom AMI, you must provide an `ImageId` or use the default as input. Note that if you don't specify an instance group in your `UpdateClusterSoftware` request, then all of the instance groups are patched with the specified image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The configuration for automatic OS security patching. If present, the system automatically applies PATCH AMI updates to this instance group.
   *
   * @public
   */
  AutoPatchConfig?: ClusterAutoPatchConfig | undefined;

  /**
   * The version of the HyperPod-managed AMI to use for the instance group. Uses semantic versioning in the format `MAJOR.MINOR.PATCH` (for example, `1.2.3`). If omitted, the latest available version is used.
   *
   * @public
   */
  ImageReleaseVersion?: string | undefined;

  /**
   * Specifies the Kubernetes configuration for the instance group. You describe what you want the labels and taints to look like, and the cluster works to reconcile the actual state with the declared state for nodes in this instance group.
   *
   * @public
   */
  KubernetesConfig?: ClusterKubernetesConfig | undefined;

  /**
   * Specifies the Slurm configuration for the instance group.
   *
   * @public
   */
  SlurmConfig?: ClusterSlurmConfig | undefined;

  /**
   * Specifies the capacity requirements for the instance group.
   *
   * @public
   */
  CapacityRequirements?: ClusterCapacityRequirements | undefined;

  /**
   * The network interface configuration for the instance group.
   *
   * @public
   */
  NetworkInterface?: ClusterNetworkInterface | undefined;
}

/**
 * Specifies the placement details for the node in the SageMaker HyperPod cluster, including the Availability Zone and the unique identifier (ID) of the Availability Zone.
 *
 * @public
 */
export interface ClusterInstancePlacement {
  /**
   * The Availability Zone where the node in the SageMaker HyperPod cluster is launched.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The unique identifier (ID) of the Availability Zone where the node in the SageMaker HyperPod cluster is launched.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Details of an instance in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterInstanceStatusDetails {
  /**
   * The status of an instance in a SageMaker HyperPod cluster.
   *
   * @public
   */
  Status: ClusterInstanceStatus | undefined;

  /**
   * The message from an instance in a SageMaker HyperPod cluster.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Node-specific Kubernetes configuration showing both current and desired state of labels and taints for an individual cluster node.
 *
 * @public
 */
export interface ClusterKubernetesConfigNodeDetails {
  /**
   * The current labels applied to the cluster node.
   *
   * @public
   */
  CurrentLabels?: Record<string, string> | undefined;

  /**
   * The desired labels to be applied to the cluster node.
   *
   * @public
   */
  DesiredLabels?: Record<string, string> | undefined;

  /**
   * The current taints applied to the cluster node.
   *
   * @public
   */
  CurrentTaints?: ClusterKubernetesTaint[] | undefined;

  /**
   * The desired taints to be applied to the cluster node.
   *
   * @public
   */
  DesiredTaints?: ClusterKubernetesTaint[] | undefined;
}

/**
 * Contains information about the UltraServer object.
 *
 * @public
 */
export interface UltraServerInfo {
  /**
   * The unique identifier of the UltraServer.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the UltraServer.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details of an instance (also called a *node* interchangeably) in a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterNodeDetails {
  /**
   * The instance group name in which the instance is.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A unique identifier for the node that persists throughout its lifecycle, from provisioning request to termination. This identifier can be used to track the node even before it has an assigned `InstanceId`.
   *
   * @public
   */
  NodeLogicalId?: string | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  InstanceStatus?: ClusterInstanceStatusDetails | undefined;

  /**
   * The type of the instance.
   *
   * @public
   */
  InstanceType?: ClusterInstanceType | undefined;

  /**
   * The time when the instance is launched.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The time when the cluster was last updated.
   *
   * @public
   */
  LastSoftwareUpdateTime?: Date | undefined;

  /**
   * The LifeCycle configuration applied to the instance.
   *
   * @public
   */
  LifeCycleConfig?: ClusterLifeCycleConfig | undefined;

  /**
   * The customized Amazon VPC configuration at the instance group level that overrides the default Amazon VPC configuration of the SageMaker HyperPod cluster.
   *
   * @public
   */
  OverrideVpcConfig?: VpcConfig | undefined;

  /**
   * The number of threads per CPU core you specified under `CreateCluster`.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * The configurations of additional storage specified to the instance group where the instance (node) is launched.
   *
   * @public
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[] | undefined;

  /**
   * The private primary IP address of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  PrivatePrimaryIp?: string | undefined;

  /**
   * The private primary IPv6 address of the SageMaker HyperPod cluster node when configured with an Amazon VPC that supports IPv6 and includes subnets with IPv6 addressing enabled in either the cluster Amazon VPC configuration or the instance group Amazon VPC configuration.
   *
   * @public
   */
  PrivatePrimaryIpv6?: string | undefined;

  /**
   * The private DNS hostname of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  PrivateDnsHostname?: string | undefined;

  /**
   * The placement details of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  Placement?: ClusterInstancePlacement | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) currently in use by the node.
   *
   * @public
   */
  CurrentImageId?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) desired for the node.
   *
   * @public
   */
  DesiredImageId?: string | undefined;

  /**
   * The version of the HyperPod-managed AMI currently running on the node.
   *
   * @public
   */
  CurrentImageReleaseVersion?: string | undefined;

  /**
   * The desired version of the HyperPod-managed AMI for the node. This may differ from the current version when an update is pending.
   *
   * @public
   */
  DesiredImageReleaseVersion?: string | undefined;

  /**
   * The status of the image version for the cluster node.
   *
   * @public
   */
  ImageVersionStatus?: ClusterImageVersionStatus | undefined;

  /**
   * Contains information about the UltraServer.
   *
   * @public
   */
  UltraServerInfo?: UltraServerInfo | undefined;

  /**
   * The Kubernetes configuration applied to this node, showing both the current and desired state of labels and taints. The cluster works to reconcile the actual state with the declared state.
   *
   * @public
   */
  KubernetesConfig?: ClusterKubernetesConfigNodeDetails | undefined;

  /**
   * The capacity type of the node. Valid values are `OnDemand` and `Spot`. When set to `OnDemand`, the node is launched as an On-Demand instance. When set to `Spot`, the node is launched as a Spot instance.
   *
   * @public
   */
  CapacityType?: ClusterCapacityType | undefined;

  /**
   * The network interface configuration for the cluster node.
   *
   * @public
   */
  NetworkInterface?: ClusterNetworkInterfaceDetails | undefined;
}

/**
 * Lists a summary of the properties of an instance (also called a *node* interchangeably) of a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterNodeSummary {
  /**
   * The name of the instance group in which the instance is.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the node that persists throughout its lifecycle, from provisioning request to termination. This identifier can be used to track the node even before it has an assigned `InstanceId`. This field is only included when `IncludeNodeLogicalIds` is set to `True` in the `ListClusterNodes` request.
   *
   * @public
   */
  NodeLogicalId?: string | undefined;

  /**
   * The type of the instance.
   *
   * @public
   */
  InstanceType: ClusterInstanceType | undefined;

  /**
   * The time when the instance is launched.
   *
   * @public
   */
  LaunchTime: Date | undefined;

  /**
   * The time when SageMaker last updated the software of the instances in the cluster.
   *
   * @public
   */
  LastSoftwareUpdateTime?: Date | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  InstanceStatus: ClusterInstanceStatusDetails | undefined;

  /**
   * Contains information about the UltraServer.
   *
   * @public
   */
  UltraServerInfo?: UltraServerInfo | undefined;

  /**
   * The private DNS hostname of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  PrivateDnsHostname?: string | undefined;

  /**
   * The version of the HyperPod-managed AMI currently running on the node.
   *
   * @public
   */
  CurrentImageReleaseVersion?: string | undefined;

  /**
   * The status of the image version for the cluster node.
   *
   * @public
   */
  ImageVersionStatus?: ClusterImageVersionStatus | undefined;
}

/**
 * The configuration settings for the Amazon EKS cluster used as the orchestrator for the SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterOrchestratorEksConfig {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EKS cluster associated with the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * The configuration settings for the Slurm orchestrator used with the SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterOrchestratorSlurmConfig {
  /**
   * The strategy for managing partitions for the Slurm configuration. Valid values are `Managed`, `Overwrite`, and `Merge`.
   *
   * @public
   */
  SlurmConfigStrategy?: ClusterSlurmConfigStrategy | undefined;

  /**
   * The external database that stores the Slurm accounting data for the cluster, such as job history, associations, and usage. When you omit this field, Slurm accounting uses a database on the cluster's controller node.
   *
   * > **Note:** This field is only supported for clusters using `Continuous` as the `NodeProvisioningMode`.
   *
   * @public
   */
  AccountingDatabase?: ClusterAccountingDatabase | undefined;
}

/**
 * The type of orchestrator used for the SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterOrchestrator {
  /**
   * The Amazon EKS cluster used as the orchestrator for the SageMaker HyperPod cluster.
   *
   * @public
   */
  Eks?: ClusterOrchestratorEksConfig | undefined;

  /**
   * The Slurm orchestrator configuration for the SageMaker HyperPod cluster.
   *
   * @public
   */
  Slurm?: ClusterOrchestratorSlurmConfig | undefined;
}

/**
 * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
 *
 * @public
 */
export interface FSxLustreConfig {
  /**
   * The storage capacity of the Amazon FSx for Lustre file system, specified in gibibytes (GiB).
   *
   * @public
   */
  SizeInGiB: number | undefined;

  /**
   * The throughput capacity of the Amazon FSx for Lustre file system, measured in MB/s per TiB of storage.
   *
   * @public
   */
  PerUnitStorageThroughput: number | undefined;
}

/**
 * The configuration details for the restricted instance groups (RIG) environment.
 *
 * @public
 */
export interface EnvironmentConfigDetails {
  /**
   * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
   *
   * @public
   */
  FSxLustreConfig?: FSxLustreConfig | undefined;

  /**
   * The Amazon S3 path where output data from the restricted instance group (RIG) environment will be stored.
   *
   * @public
   */
  S3OutputPath?: string | undefined;
}

/**
 * The instance group details of the restricted instance group (RIG).
 *
 * @public
 */
export interface ClusterRestrictedInstanceGroupDetails {
  /**
   * The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  CurrentCount?: number | undefined;

  /**
   * The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  TargetCount?: number | undefined;

  /**
   * The name of the restricted instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The instance type of the restricted instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceType?: ClusterInstanceType | undefined;

  /**
   * The execution role for the restricted instance group to assume.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The number you specified to `TreadsPerCore` in `CreateCluster` for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading. For more information, see the reference table of [CPU cores and threads per CPU core per instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * The additional storage configurations for the instances in the SageMaker HyperPod cluster restricted instance group.
   *
   * @public
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[] | undefined;

  /**
   * A flag indicating whether deep health checks should be performed when the cluster's restricted instance group is created or updated.
   *
   * @public
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[] | undefined;

  /**
   * The current status of the cluster's restricted instance group.
   *
   * - `InService`: The restricted instance group is active and healthy.
   * - `Creating`: The restricted instance group is being provisioned.
   * - `Updating`: The restricted instance group is being updated.
   * - `Failed`: The restricted instance group has failed to provision or is no longer healthy.
   * - `Degraded`: The restricted instance group is degraded, meaning that some instances have failed to provision or are no longer healthy.
   * - `Deleting`: The restricted instance group is being deleted.
   *
   * @public
   */
  Status?: InstanceGroupStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training plan to filter clusters by. For more information about reserving GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;

  /**
   * The current status of the training plan associated with this cluster restricted instance group.
   *
   * @public
   */
  TrainingPlanStatus?: string | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  OverrideVpcConfig?: VpcConfig | undefined;

  /**
   * The configuration object of the schedule that SageMaker follows when updating the AMI.
   *
   * @public
   */
  ScheduledUpdateConfig?: ScheduledUpdateConfig | undefined;

  /**
   * The configuration for the restricted instance groups (RIG) environment.
   *
   * @public
   */
  EnvironmentConfig?: EnvironmentConfigDetails | undefined;
}

/**
 * The shared environment configuration for the restricted instance groups (RIG).
 *
 * @public
 */
export interface ClusterSharedEnvironmentConfig {
  /**
   * The deletion policy for the Amazon FSx for Lustre file system in the shared environment.
   *
   * @public
   */
  FSxLustreDeletionPolicy: ClusterFSxLustreDeletionPolicy | undefined;

  /**
   * Configuration settings for an Amazon FSx for Lustre file system in the shared environment.
   *
   * @public
   */
  FSxLustreConfig: FSxLustreConfig | undefined;
}

/**
 * The configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterRestrictedInstanceGroupsConfig {
  /**
   * The shared environment configuration for the restricted instance groups (RIG).
   *
   * @public
   */
  SharedEnvironmentConfig: ClusterSharedEnvironmentConfig | undefined;
}

/**
 * The shared environment configuration details for the restricted instance groups (RIG).
 *
 * @public
 */
export interface ClusterSharedEnvironmentConfigDetails {
  /**
   * The current Amazon FSx for Lustre file system configuration in the shared environment.
   *
   * @public
   */
  CurrentFSxLustreConfig?: FSxLustreConfig | undefined;

  /**
   * The desired Amazon FSx for Lustre file system configuration in the shared environment.
   *
   * @public
   */
  DesiredFSxLustreConfig?: FSxLustreConfig | undefined;

  /**
   * The current deletion policy for the Amazon FSx for Lustre file system in the shared environment.
   *
   * @public
   */
  CurrentFSxLustreDeletionPolicy?: ClusterFSxLustreDeletionPolicy | undefined;

  /**
   * The desired deletion policy for the Amazon FSx for Lustre file system in the shared environment.
   *
   * @public
   */
  DesiredFSxLustreDeletionPolicy?: ClusterFSxLustreDeletionPolicy | undefined;
}
