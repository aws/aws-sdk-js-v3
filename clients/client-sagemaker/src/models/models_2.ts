// smithy-typescript generated code
import { LazyJsonString as __LazyJsonString, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ActionSource,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSpecification,
  ArtifactSource,
  AthenaDatasetDefinition,
  AutoMLJobCompletionCriteria,
  AutoMLJobObjective,
  CategoricalParameter,
  CategoricalParameterRange,
  CategoricalParameterRangeSpecification,
  Channel,
  CheckpointConfig,
  CognitoConfig,
  CognitoMemberDefinition,
  CompressionType,
  ContentClassifier,
  ContextSource,
  ContinuousParameterRange,
  ContinuousParameterRangeSpecification,
  DebugHookConfig,
  DebugRuleConfiguration,
  DriftCheckBaselines,
  ExperimentConfig,
  FeatureDefinition,
  GitConfig,
  InferenceSpecification,
  KernelGatewayImageConfig,
  LabelingJobInputConfig,
  MetadataProperties,
  MetricDefinition,
  MetricsSource,
  ModelMetrics,
  ModelPackageValidationSpecification,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringScheduleConfig,
  MonitoringStoppingCondition,
  NetworkConfig,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputDataConfig,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariantInstanceType,
  ResourceSpec,
  ServiceCatalogProvisioningDetails,
  SourceAlgorithmSpecification,
  StoppingCondition,
  Tag,
  TrainingInputMode,
  TransformInstanceType,
  TransformJobDefinition,
  VpcConfig,
} from "./models_1";
import {
  _InstanceType,
  BooleanOperator,
  CaptureStatus,
  CompilationJobStatus,
  ConditionOutcome,
  DataDistributionType,
  DetailedModelPackageStatus,
  DomainStatus,
  EdgePackagingJobStatus,
  EdgePresetDeploymentStatus,
  EdgePresetDeploymentType,
  EndpointStatus,
  ExecutionStatus,
  FeatureGroupStatus,
  FlowDefinitionStatus,
  HyperParameterScalingType,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobStrategyType,
  ImageStatus,
  ImageVersionStatus,
  InputMode,
  JoinSource,
  LabelingJobStatus,
  ModelMetadataFilterType,
  ModelPackageGroupStatus,
  MonitoringType,
  NotebookInstanceStatus,
  NotebookOutputOption,
  OfflineStoreStatusValue,
  Operator,
  ParameterType,
  PipelineExecutionStatus,
  PipelineStatus,
  ProblemType,
  ProcessingInstanceType,
  ProcessingJobStatus,
  ProcessingS3CompressionType,
  ProcessingS3DataDistributionType,
  ProcessingS3DataType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  ProductionVariantAcceleratorType,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationJobType,
  RedshiftResultCompressionType,
  RedshiftResultFormat,
  RetentionType,
  RStudioServerProAccessStatus,
  RStudioServerProUserGroup,
  RuleEvaluationStatus,
  ScheduleStatus,
  SecondaryStatus,
  StepStatus,
  StudioLifecycleConfigAppType,
  TargetDevice,
  TargetPlatformAccelerator,
  TargetPlatformArch,
  TargetPlatformOs,
  TrafficType,
  TrainingJobStatus,
  TransformJobStatus,
  TrialComponentPrimaryStatus,
  UserProfileStatus,
  VariantPropertyType,
  VariantStatus,
} from "./models_3";

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

export namespace ActionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionSummary): any => ({
    ...obj,
  });
}

export enum AssociationEdgeType {
  ASSOCIATED_WITH = "AssociatedWith",
  CONTRIBUTED_TO = "ContributedTo",
  DERIVED_FROM = "DerivedFrom",
  PRODUCED = "Produced",
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

export namespace ModelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelInput): any => ({
    ...obj,
  });
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

export namespace AgentVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentVersion): any => ({
    ...obj,
  });
}

export enum AlgorithmSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
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

export namespace AlgorithmStatusItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmStatusItem): any => ({
    ...obj,
  });
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

export namespace AlgorithmStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmStatusDetails): any => ({
    ...obj,
  });
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

export namespace AlgorithmSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmSummary): any => ({
    ...obj,
  });
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

export namespace FileSystemDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemDataSource): any => ({
    ...obj,
  });
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
   *         <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want SageMaker to use for model
   *             training. </p>
   *         <p>If you choose <code>AugmentedManifestFile</code>, S3Uri identifies an object that is
   *             an augmented manifest file in JSON lines format. This file contains the data you want to
   *             use for model training. <code>AugmentedManifestFile</code> can only be used if the
   *             Channel's input mode is <code>Pipe</code>.</p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either
   *             a key name prefix or a manifest. For example: </p>
   *         <ul>
   *             <li>
   *                 <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                 </p>
   *                 <p> A manifest is an S3 object which is a JSON file consisting of an array of
   *                     elements. The first element is a prefix which is followed by one or more
   *                     suffixes. SageMaker appends the suffix elements to the prefix to get a full set
   *                     of <code>S3Uri</code>. Note that the prefix must be a valid non-empty
   *                         <code>S3Uri</code> that precludes users from specifying a manifest whose
   *                     individual <code>S3Uri</code> is sourced from different S3 buckets.</p>
   *                 <p> The following code example shows a valid manifest format: </p>
   *                 <p>
   *                     <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                 </p>
   *                 <p>
   *                     <code> "relative/path/to/custdata-1",</code>
   *                 </p>
   *                 <p>
   *                     <code> "relative/path/custdata-2",</code>
   *                 </p>
   *                 <p>
   *                     <code> ...</code>
   *                 </p>
   *                 <p>
   *                     <code> "relative/path/custdata-N"</code>
   *                 </p>
   *                 <p>
   *                     <code>]</code>
   *                 </p>
   *                 <p> This JSON is equivalent to the following <code>S3Uri</code>
   *                     list:</p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                 </p>
   *                 <p>The complete set of <code>S3Uri</code> in this manifest is the input data
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
   *         <p>If you want SageMaker to replicate a subset of data on each ML compute instance that is
   *             launched for model training, specify <code>ShardedByS3Key</code>. If there are
   *                 <i>n</i> ML compute instances launched for a training job, each
   *             instance gets approximately 1/<i>n</i> of the number of S3 objects. In
   *             this case, model training on each machine uses only the subset of training data. </p>
   *         <p>Don't choose more ML compute instances for training than available S3 objects. If
   *             you do, some nodes won't get any data and you will pay for nodes that aren't getting any
   *             training data. This applies in both File and Pipe modes. Keep this in mind when
   *             developing algorithms. </p>
   *         <p>In distributed training, where you use multiple ML compute EC2 instances, you might
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
}

export namespace S3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DataSource): any => ({
    ...obj,
  });
}

export enum RecordWrapper {
  NONE = "None",
  RECORDIO = "RecordIO",
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
}

/**
 * <p>Describes the resources, including ML compute instances and ML storage volumes, to
 *             use for model training. </p>
 */
export interface ResourceConfig {
  /**
   * <p>The ML compute instance type. </p>
   */
  InstanceType: TrainingInstanceType | string | undefined;

  /**
   * <p>The number of ML compute instances to use. For distributed training, provide a
   *             value greater than 1. </p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The size of the ML storage volume that you want to provision. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use the ML storage volume for scratch space. If you want to store
   *             the training data in the ML storage volume, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. </p>
   *         <p>You must specify sufficient ML storage for your scenario. </p>
   *         <note>
   *             <p> SageMaker supports only the General Purpose SSD (gp2) ML storage volume type.
   *             </p>
   *         </note>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for training, SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                     <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services KMS key that SageMaker uses to encrypt data on the storage volume attached to the ML
   *             compute instance(s) that run the training job.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *         </note>
   *         <p>The <code>VolumeKmsKeyId</code> can be in any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

export namespace ResourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConfig): any => ({
    ...obj,
  });
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
   *         <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch
   *             transform. </p>
   *         <p>The following values are compatible: <code>ManifestFile</code>,
   *             <code>S3Prefix</code>
   *          </p>
   *         <p>The following value is not compatible: <code>AugmentedManifestFile</code>
   *          </p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *             key name prefix or a manifest. For example:</p>
   *         <ul>
   *             <li>
   *                 <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>. </p>
   *             </li>
   *             <li>
   *                 <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                 </p>
   *                 <p> The manifest is an S3 object which is a JSON file with the following format: </p>
   *                 <p>
   *                     <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/to/custdata-1",</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-2",</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-N"</code>
   *                 </p>
   *                 <p>
   *                     <code>]</code>
   *                 </p>
   *                 <p> The preceding JSON matches the following <code>S3Uris</code>: </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                 </p>
   *                 <p> The complete set of <code>S3Uris</code> in this manifest constitutes the
   *                     input data for the channel for this datasource. The object that each
   *                         <code>S3Uris</code> points to must be readable by the IAM role that Amazon SageMaker
   *                     uses to perform tasks on your behalf.</p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;
}

export namespace TransformS3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformS3DataSource): any => ({
    ...obj,
  });
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

export namespace TransformDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformDataSource): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>RecordIO</p>
   *             </li>
   *             <li>
   *                 <p>TFRecord</p>
   *             </li>
   *          </ul>
   *         <p>When splitting is enabled, the size of a mini-batch depends on the values of the
   *                 <code>BatchStrategy</code> and <code>MaxPayloadInMB</code> parameters. When the
   *             value of <code>BatchStrategy</code> is <code>MultiRecord</code>, Amazon SageMaker sends the maximum
   *             number of records in each request, up to the <code>MaxPayloadInMB</code> limit. If the
   *             value of <code>BatchStrategy</code> is <code>SingleRecord</code>, Amazon SageMaker sends individual
   *             records in each request.</p>
   *         <note>
   *             <p>Some data formats represent a record as a binary payload wrapped with extra
   *                 padding bytes. When splitting is applied to a binary data format, padding is removed
   *                 if the value of <code>BatchStrategy</code> is set to <code>SingleRecord</code>.
   *                 Padding is not removed if the value of <code>BatchStrategy</code> is set to
   *                     <code>MultiRecord</code>.</p>
   *             <p>For more information about <code>RecordIO</code>, see <a href="https://mxnet.apache.org/api/faq/recordio">Create a Dataset Using
   *                     RecordIO</a> in the MXNet documentation. For more information about
   *                     <code>TFRecord</code>, see <a href="https://www.tensorflow.org/guide/data#consuming_tfrecord_data">Consuming TFRecord data</a> in the TensorFlow documentation.</p>
   *         </note>
   */
  SplitType?: SplitType | string;
}

export namespace TransformInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformInput): any => ({
    ...obj,
  });
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
   *         <p>For every S3 object used as input for the transform job, batch transform stores the
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
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your
   *             role's account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the
   *                 <i>Amazon Simple Storage Service
   *                 Developer Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   * 	<a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>
   * 		request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                     Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;
}

export namespace TransformOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformOutput): any => ({
    ...obj,
  });
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
   *             compute instances to use in the transform job. For distributed
   *             transform jobs, specify a value greater than 1. The default value is
   *             <code>1</code>.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume
   *             attached to the ML compute instance(s) that run the batch transform job.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *         </note>
   *             <p>
   *             The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

export namespace TransformResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformResources): any => ({
    ...obj,
  });
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
}

export namespace AppDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppDetails): any => ({
    ...obj,
  });
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

export namespace FileSystemConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemConfig): any => ({
    ...obj,
  });
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

export namespace KernelSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelSpec): any => ({
    ...obj,
  });
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

export namespace AppImageConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppImageConfigDetails): any => ({
    ...obj,
  });
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

export enum ArtifactSourceIdType {
  CUSTOM = "Custom",
  MD5_HASH = "MD5Hash",
  S3_ETAG = "S3ETag",
  S3_VERSION = "S3Version",
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

export namespace ArtifactSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user who created or modified an experiment, trial, trial
 *       component, lineage group, or project.</p>
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

export namespace UserContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserContext): any => ({
    ...obj,
  });
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
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;
}

export namespace AssociationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationSummary): any => ({
    ...obj,
  });
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

export namespace CandidateArtifactLocations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CandidateArtifactLocations): any => ({
    ...obj,
  });
}

export enum AutoMLMetricEnum {
  ACCURACY = "Accuracy",
  AUC = "AUC",
  F1 = "F1",
  F1_MACRO = "F1macro",
  MSE = "MSE",
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

export namespace MetricDatum {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDatum): any => ({
    ...obj,
  });
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

export namespace CandidateProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CandidateProperties): any => ({
    ...obj,
  });
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

export namespace AutoMLCandidateStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLCandidateStep): any => ({
    ...obj,
  });
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

export namespace FinalAutoMLJobObjectiveMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalAutoMLJobObjectiveMetric): any => ({
    ...obj,
  });
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

export namespace AutoMLContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLContainerDefinition): any => ({
    ...obj,
  });
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

export namespace AutoMLCandidate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLCandidate): any => ({
    ...obj,
  });
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

export namespace AutoMLJobArtifacts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobArtifacts): any => ({
    ...obj,
  });
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
 * <p>The reason for a partial failure of an AutoML job.</p>
 */
export interface AutoMLPartialFailureReason {
  /**
   * <p>The message containing the reason for a partial failure of an AutoML job.</p>
   */
  PartialFailureMessage?: string;
}

export namespace AutoMLPartialFailureReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLPartialFailureReason): any => ({
    ...obj,
  });
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

export namespace AutoMLJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobSummary): any => ({
    ...obj,
  });
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

export enum AwsManagedHumanLoopRequestSource {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1",
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

export namespace BatchDescribeModelPackageError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeModelPackageError): any => ({
    ...obj,
  });
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

export namespace BatchDescribeModelPackageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeModelPackageSummary): any => ({
    ...obj,
  });
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

export namespace CacheHitResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheHitResult): any => ({
    ...obj,
  });
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

export namespace OutputParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputParameter): any => ({
    ...obj,
  });
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

export namespace CallbackStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CallbackStepMetadata): any => ({
    ...obj,
  });
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

export namespace ClarifyCheckStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClarifyCheckStepMetadata): any => ({
    ...obj,
  });
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
   *             and the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used to
   *             access the repository.</p>
   */
  GitConfig?: GitConfig;
}

export namespace CodeRepositorySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeRepositorySummary): any => ({
    ...obj,
  });
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

export namespace CompilationJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompilationJobSummary): any => ({
    ...obj,
  });
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

export namespace ConditionStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an authentication configuration for the private docker registry where your
 *             model image is hosted. Specify a value for this property only if you specified
 *             <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field of the
 *             <code>ImageConfig</code> object that you passed to a call to <code>CreateModel</code>
 *             and the private Docker registry where the model image is
 *             hosted requires authentication.</p>
 */
export interface RepositoryAuthConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function that provides credentials to
   *             authenticate to the private Docker registry where your model image is hosted. For
   *             information about how to create an Amazon Web Services Lambda function, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html">Create a Lambda function
   *                 with the console</a> in the <i>Amazon Web Services Lambda Developer
   *             Guide</i>.</p>
   */
  RepositoryCredentialsProviderArn: string | undefined;
}

export namespace RepositoryAuthConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryAuthConfig): any => ({
    ...obj,
  });
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

export namespace ContextSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContextSummary): any => ({
    ...obj,
  });
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

export namespace IntegerParameterRangeSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerParameterRangeSpecification): any => ({
    ...obj,
  });
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

export namespace ParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterRange): any => ({
    ...obj,
  });
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

export namespace HyperParameterSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterSpecification): any => ({
    ...obj,
  });
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

export namespace HyperParameterTuningJobObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobObjective): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a target platform that you want your model to run on, such
 *             as OS, architecture, and accelerators. It is an alternative of
 *             <code>TargetDevice</code>.</p>
 */
export interface TargetPlatform {
  /**
   * <p>Specifies a target platform OS.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>LINUX</code>: Linux-based operating systems.</p>
   *             </li>
   *             <li>
   *                 <p>
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>X86_64</code>: 64-bit version of the x86 instruction set.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>X86</code>: 32-bit version of the x86 instruction set.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ARM64</code>: ARMv8 64-bit CPU.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ARM_EABIHF</code>: ARMv7 32-bit, Hard Float.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ARM_EABI</code>: ARMv7 32-bit, Soft Float. Used by Android 32-bit ARM
   *                     platform.</p>
   *             </li>
   *          </ul>
   */
  Arch: TargetPlatformArch | string | undefined;

  /**
   * <p>Specifies a target platform accelerator (optional).</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NVIDIA</code>: Nvidia graphics processing unit. It also requires
   *                     <code>gpu-code</code>, <code>trt-ver</code>, <code>cuda-ver</code> compiler
   *                     options</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MALI</code>: ARM Mali graphics processor</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INTEL_GRAPHICS</code>: Integrated Intel graphics</p>
   *             </li>
   *          </ul>
   */
  Accelerator?: TargetPlatformAccelerator | string;
}

export namespace TargetPlatform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetPlatform): any => ({
    ...obj,
  });
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

export namespace MonitoringConstraintsResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringConstraintsResource): any => ({
    ...obj,
  });
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

export namespace MonitoringStatisticsResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringStatisticsResource): any => ({
    ...obj,
  });
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

export namespace EndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointInput): any => ({
    ...obj,
  });
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

export namespace MonitoringS3Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringS3Output): any => ({
    ...obj,
  });
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

export namespace MonitoringOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringOutput): any => ({
    ...obj,
  });
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

export namespace MonitoringClusterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringClusterConfig): any => ({
    ...obj,
  });
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
   *         <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];
}

export namespace JupyterServerAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JupyterServerAppSettings): any => ({
    ...obj,
  });
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

export namespace CustomImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomImage): any => ({
    ...obj,
  });
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
   *         <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];
}

export namespace KernelGatewayAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelGatewayAppSettings): any => ({
    ...obj,
  });
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

export namespace RSessionAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RSessionAppSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that configure user interaction with the <code>RStudioServerPro</code> app. <code>RStudioServerProAppSettings</code> cannot be updated. The <code>RStudioServerPro</code> app must be deleted and a new one created to make any changes.</p>
 */
export interface RStudioServerProAppSettings {
  /**
   * <p>Indicates whether the current user has access to the <code>RStudioServerPro</code> app.</p>
   */
  AccessStatus?: RStudioServerProAccessStatus | string;

  /**
   * <p>The level of permissions that the user has within the <code>RStudioServerPro</code> app. This value defaults to `User`. The `Admin` value allows the user access to the RStudio Administrative Dashboard.</p>
   */
  UserGroup?: RStudioServerProUserGroup | string;
}

export namespace RStudioServerProAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RStudioServerProAppSettings): any => ({
    ...obj,
  });
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

export namespace SharingSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharingSettings): any => ({
    ...obj,
  });
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

export namespace TensorBoardAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TensorBoardAppSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level app.</p>
 */
export interface RStudioServerProDomainSettings {
  /**
   * <p>The ARN of the execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
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

export namespace RStudioServerProDomainSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RStudioServerProDomainSettings): any => ({
    ...obj,
  });
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
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using
   *             Amazon S3 server-side encryption. The <code>KmsKeyId</code> can be any of the following
   *             formats: </p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// KMS Key Alias</p>
   *                 <p>
   *                     <code>"alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code> and <code>UpdateEndpoint</code> requests. For more
   *             information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in Amazon Web Services
   *                 KMS</a> in the <i>Amazon Web Services Key Management Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;
}

export namespace ProductionVariantCoreDumpConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantCoreDumpConfig): any => ({
    ...obj,
  });
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

export namespace ProductionVariantServerlessConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantServerlessConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The meta data of the Glue table which serves as data catalog for the
 *             <code>OfflineStore</code>. </p>
 */
export interface DataCatalogConfig {
  /**
   * <p>The name of the Glue table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the Glue table catalog.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>The name of the Glue table database.</p>
   */
  Database: string | undefined;
}

export namespace DataCatalogConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCatalogConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.</p>
 */
export interface S3StorageConfig {
  /**
   * <p>The S3 URI, or location in Amazon S3, of <code>OfflineStore</code>.</p>
   *          <p>S3 URIs have a format similar to the following: <code>s3://example-bucket/prefix/</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) key ID of the key used to encrypt any objects
   *          written into the <code>OfflineStore</code> S3 location.</p>
   *          <p>The IAM <code>roleARN</code> that is passed as a parameter to
   *             <code>CreateFeatureGroup</code> must have below permissions to the
   *          <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:GenerateDataKey"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The S3 path where offline records are written.</p>
   */
  ResolvedOutputS3Uri?: string;
}

export namespace S3StorageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3StorageConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The security configuration for <code>OnlineStore</code>.</p>
 */
export interface OnlineStoreSecurityConfig {
  /**
   * <p>The ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker Feature Store uses
   *          to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.</p>
   *          <p>The caller (either IAM user or IAM role) of <code>CreateFeatureGroup</code> must have
   *          below permissions to the <code>OnlineStore</code>
   *             <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:Encrypt"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:Decrypt"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:DescribeKey"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:CreateGrant"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:RetireGrant"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ReEncryptFrom"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ReEncryptTo"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:GenerateDataKey"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ListAliases"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ListGrants"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:RevokeGrant"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The caller (either IAM user or IAM role) to all DataPlane operations
   *             (<code>PutRecord</code>, <code>GetRecord</code>, <code>DeleteRecord</code>) must have
   *          the following permissions to the <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:Decrypt"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

export namespace OnlineStoreSecurityConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnlineStoreSecurityConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines under what conditions SageMaker creates a human loop. Used within . See  for the required
 *          format of activation conditions.</p>
 */
export interface HumanLoopActivationConditionsConfig {
  /**
   * <p>JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team.
   *          The set of conditions is different for Rekognition and Textract. For more information about how to structure the JSON, see
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-human-fallback-conditions-json-schema.html">JSON Schema for Human Loop Activation Conditions in Amazon Augmented AI</a>
   *          in the <i>Amazon SageMaker Developer Guide</i>.</p>
   */
  HumanLoopActivationConditions: __LazyJsonString | string | undefined;
}

export namespace HumanLoopActivationConditionsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopActivationConditionsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an amount of money in United States dollars.</p>
 */
export interface USD {
  /**
   * <p>The whole number of dollars in the amount.</p>
   */
  Dollars?: number;

  /**
   * <p>The fractional portion, in cents, of the amount. </p>
   */
  Cents?: number;

  /**
   * <p>Fractions of a cent, in tenths.</p>
   */
  TenthFractionsOfACent?: number;
}

export namespace USD {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: USD): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
 *         <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
 *             should be based on the complexity of the task; the longer it takes in your initial
 *             testing, the more you should offer.</p>
 *         <ul>
 *             <li>
 *                 <p>0.036</p>
 *             </li>
 *             <li>
 *                 <p>0.048</p>
 *             </li>
 *             <li>
 *                 <p>0.060</p>
 *             </li>
 *             <li>
 *                 <p>0.072</p>
 *             </li>
 *             <li>
 *                 <p>0.120</p>
 *             </li>
 *             <li>
 *                 <p>0.240</p>
 *             </li>
 *             <li>
 *                 <p>0.360</p>
 *             </li>
 *             <li>
 *                 <p>0.480</p>
 *             </li>
 *             <li>
 *                 <p>0.600</p>
 *             </li>
 *             <li>
 *                 <p>0.720</p>
 *             </li>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for image classification, text classification, and
 *             custom tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>0.012</p>
 *             </li>
 *             <li>
 *                 <p>0.024</p>
 *             </li>
 *             <li>
 *                 <p>0.036</p>
 *             </li>
 *             <li>
 *                 <p>0.048</p>
 *             </li>
 *             <li>
 *                 <p>0.060</p>
 *             </li>
 *             <li>
 *                 <p>0.072</p>
 *             </li>
 *             <li>
 *                 <p>0.120</p>
 *             </li>
 *             <li>
 *                 <p>0.240</p>
 *             </li>
 *             <li>
 *                 <p>0.360</p>
 *             </li>
 *             <li>
 *                 <p>0.480</p>
 *             </li>
 *             <li>
 *                 <p>0.600</p>
 *             </li>
 *             <li>
 *                 <p>0.720</p>
 *             </li>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
 *             dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>2.400 </p>
 *             </li>
 *             <li>
 *                 <p>2.280 </p>
 *             </li>
 *             <li>
 *                 <p>2.160 </p>
 *             </li>
 *             <li>
 *                 <p>2.040 </p>
 *             </li>
 *             <li>
 *                 <p>1.920 </p>
 *             </li>
 *             <li>
 *                 <p>1.800 </p>
 *             </li>
 *             <li>
 *                 <p>1.680 </p>
 *             </li>
 *             <li>
 *                 <p>1.560 </p>
 *             </li>
 *             <li>
 *                 <p>1.440 </p>
 *             </li>
 *             <li>
 *                 <p>1.320 </p>
 *             </li>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
 *             Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 */
export interface PublicWorkforceTaskPrice {
  /**
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars.</p>
   */
  AmountInUsd?: USD;
}

export namespace PublicWorkforceTaskPrice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicWorkforceTaskPrice): any => ({
    ...obj,
  });
}

/**
 * <p>For a hyperparameter of the integer type, specifies the range
 *             that
 *             a hyperparameter tuning job searches.</p>
 */
export interface IntegerParameterRange {
  /**
   * <p>The name of the hyperparameter to search.</p>
   */
  Name: string | undefined;

  /**
   * <p>The minimum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *         <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                     <p>SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *                 </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *                 </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                     <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *                 </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

export namespace IntegerParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
 *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
 *             with hyperparameter values within these ranges to find the combination of values that
 *             result in the training job with the best performance as measured by the objective metric
 *             of the hyperparameter tuning job.</p>
 *         <note>
 *             <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job
 *                 can search over. Every possible value of a categorical parameter range counts
 *                 against this limit.</p>
 *         </note>
 */
export interface ParameterRanges {
  /**
   * <p>The array of <a>IntegerParameterRange</a> objects that specify ranges of
   *             integer hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];

  /**
   * <p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of
   *             continuous hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * <p>The array of <a>CategoricalParameterRange</a> objects that specify ranges
   *             of categorical hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];
}

export namespace ParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterRanges): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the maximum number of
 *             training
 *             jobs and parallel training jobs that a hyperparameter tuning job can
 *             launch.</p>
 */
export interface ResourceLimits {
  /**
   * <p>The
   *             maximum
   *             number of training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxNumberOfTrainingJobs: number | undefined;

  /**
   * <p>The
   *             maximum
   *             number of concurrent training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxParallelTrainingJobs: number | undefined;
}

export namespace ResourceLimits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLimits): any => ({
    ...obj,
  });
}

/**
 * <p>The job completion criteria.</p>
 */
export interface TuningJobCompletionCriteria {
  /**
   * <p>The value of the objective metric.</p>
   */
  TargetObjectiveMetricValue: number | undefined;
}

export namespace TuningJobCompletionCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TuningJobCompletionCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies
 *             which
 *             training algorithm to use for training jobs that a hyperparameter
 *             tuning job launches and the metrics to monitor.</p>
 */
export interface HyperParameterAlgorithmSpecification {
  /**
   * <p> The registry path of the Docker image that contains the training algorithm. For
   *             information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The training input mode that the algorithm supports. For more information about input modes, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *
   *         <p>
   *             <b>Pipe mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly
   *             from Amazon S3 to the container.</p>
   *
   *         <p>
   *             <b>File mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>File</code> mode, SageMaker
   *             downloads the training data from S3 to the provisioned ML storage volume, and mounts the
   *             directory to the Docker volume for the training container.</p>
   *         <p>You must provision the ML storage volume with sufficient capacity
   *             to accommodate the data downloaded from S3. In addition to the training data, the ML
   *             storage volume also stores the output model. The algorithm container uses the ML storage
   *             volume to also store intermediate information, if any.</p>
   *         <p>For distributed algorithms, training data is distributed uniformly.
   *             Your training duration is predictable if the input data objects sizes are
   *             approximately the same. SageMaker does not split the files any further for model training.
   *             If the object sizes are skewed, training won't be optimal as the data distribution is also
   *             skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in
   *             training.</p>
   *
   *         <p>
   *             <b>FastFile mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly
   *             from S3 to the container with no code changes, and provides file system access to
   *             the data. Users can author their training script to interact with these files as if
   *             they were stored on disk.</p>
   *         <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially.
   *             Augmented manifest files aren't supported.
   *             The startup time is lower when there are fewer files in the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you
   *             specify a value for this parameter, do not specify a value for
   *                 <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>An array of <a>MetricDefinition</a> objects that specify the
   *             metrics
   *             that the algorithm emits.</p>
   */
  MetricDefinitions?: MetricDefinition[];
}

export namespace HyperParameterAlgorithmSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterAlgorithmSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The retry strategy to use when a training job fails due to an
 *                 <code>InternalServerError</code>. <code>RetryStrategy</code> is specified as part of
 *             the <code>CreateTrainingJob</code> and <code>CreateHyperParameterTuningJob</code>
 *             requests. You can add the <code>StoppingCondition</code> parameter to the request to
 *             limit the training time for the complete job.</p>
 */
export interface RetryStrategy {
  /**
   * <p>The number of times to retry the job. When the job is retried, it's
   *                 <code>SecondaryStatus</code> is changed to <code>STARTING</code>.</p>
   */
  MaximumRetryAttempts: number | undefined;
}

export namespace RetryStrategy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryStrategy): any => ({
    ...obj,
  });
}

/**
 * <p>A previously completed or stopped hyperparameter tuning job to be used as a starting
 *             point for a new hyperparameter tuning job.</p>
 */
export interface ParentHyperParameterTuningJob {
  /**
   * <p>The name of the hyperparameter tuning job to be used as a starting point for a new
   *             hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;
}

export namespace ParentHyperParameterTuningJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParentHyperParameterTuningJob): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the range of environment parameters</p>
 */
export interface EnvironmentParameterRanges {
  /**
   * <p>Specified a list of parameters for each category.</p>
   */
  CategoricalParameterRanges?: CategoricalParameter[];
}

export namespace EnvironmentParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentParameterRanges): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint configuration for the load test.</p>
 */
export interface EndpointInputConfiguration {
  /**
   * <p>The instance types to use for the load test.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p> The parameter you want to benchmark against.</p>
   */
  EnvironmentParameterRanges?: EnvironmentParameterRanges;
}

export namespace EndpointInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointInputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the maximum number of jobs that can run in parallel
 *     and the maximum number of jobs that can run.</p>
 */
export interface RecommendationJobResourceLimit {
  /**
   * <p>Defines the maximum number of load tests.</p>
   */
  MaxNumberOfTests?: number;

  /**
   * <p>Defines the maximum number of parallel load tests.</p>
   */
  MaxParallelOfTests?: number;
}

export namespace RecommendationJobResourceLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobResourceLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the traffic pattern.</p>
 */
export interface Phase {
  /**
   * <p>Specifies how many concurrent users to start with.</p>
   */
  InitialNumberOfUsers?: number;

  /**
   * <p>Specified how many new users to spawn in a minute.</p>
   */
  SpawnRate?: number;

  /**
   * <p>Specifies how long traffic phase should be.</p>
   */
  DurationInSeconds?: number;
}

export namespace Phase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the traffic pattern of the load test.</p>
 */
export interface TrafficPattern {
  /**
   * <p>Defines the traffic patterns.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>Defines the phases traffic specification.</p>
   */
  Phases?: Phase[];
}

export namespace TrafficPattern {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPattern): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the output configuration for the compiled
 *          model.</p>
 */
export interface RecommendationJobCompiledOutputConfig {
  /**
   * <p>Identifies the Amazon S3 bucket where you want SageMaker to store the
   *          compiled model artifacts.</p>
   */
  S3OutputUri?: string;
}

export namespace RecommendationJobCompiledOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobCompiledOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The model latency threshold.</p>
 */
export interface ModelLatencyThreshold {
  /**
   * <p>The model latency percentile threshold.</p>
   */
  Percentile?: string;

  /**
   * <p>The model latency percentile value in milliseconds.</p>
   */
  ValueInMilliseconds?: number;
}

export namespace ModelLatencyThreshold {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelLatencyThreshold): any => ({
    ...obj,
  });
}

/**
 * <p>Provided configuration information for the worker UI for a labeling job. Provide
 *             either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p>
 *         <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use
 *                 <code>HumanTaskUiArn</code>.</p>
 *         <p>For all other Ground Truth built-in task types and custom task types, use
 *                 <code>UiTemplateS3Uri</code> to specify the location of a worker task template in
 *             Amazon S3.</p>
 */
export interface UiConfig {
  /**
   * <p>The Amazon S3 bucket location of the UI template, or worker task template. This is the
   *             template used to render the worker UI and tools for labeling job tasks. For more
   *             information about the contents of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri?: string;

  /**
   * <p>The ARN of the worker task template used to render the worker UI and tools for
   *             labeling job tasks.</p>
   *         <p>Use this parameter when you are creating a labeling job for named entity recognition,
   *             3D point cloud and video frame labeling jobs. Use your labeling job task type to select
   *             one of the following ARNs and use it with this parameter when you create a labeling job.
   *             Replace <code>aws-region</code> with the Amazon Web Services Region you are creating your labeling job
   *             in. For example, replace <code>aws-region</code> with <code>us-west-1</code> if you
   *             create a labeling job in US West (N. California).</p>
   *         <p>
   *             <b>Named Entity Recognition</b>
   *          </p>
   *         <p>Use the following <code>HumanTaskUiArn</code> for named entity recognition labeling
   *             jobs:</p>
   *         <p>
   *             <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/NamedEntityRecognition</code>
   *          </p>
   *
   *         <p>
   *             <b>3D Point Cloud HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for 3D point cloud object detection and 3D point
   *             cloud object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud object tracking and 3D point
   *             cloud object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud semantic segmentation and 3D
   *             point cloud semantic segmentation adjustment labeling jobs.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for video frame object detection and video frame
   *             object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for video frame object tracking and video frame
   *             object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  HumanTaskUiArn?: string;
}

export namespace UiConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be
 *             labeled.</p>
 */
export interface LabelingJobDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult
   *             content. SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
   *             based on this information.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

export namespace LabelingJobDataAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobDataAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects. </p>
   *         <p>The input manifest file referenced in <code>ManifestS3Uri</code> must contain one of
   *             the following keys: <code>source-ref</code> or <code>source</code>. The value of the
   *             keys are interpreted as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>source-ref</code>: The source of the object is the Amazon S3 object
   *                     specified in the value. Use this value when the object is a binary object, such
   *                     as an image.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source</code>: The source of the object is the value. Use this
   *                     value when the object is a text value.</p>
   *             </li>
   *          </ul>
   *         <p>If you are a new user of Ground Truth, it is recommended you review <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-input-data-input-manifest.html">Use an Input Manifest File </a> in the Amazon SageMaker Developer Guide to learn how to
   *             create an input manifest file.</p>
   */
  ManifestS3Uri: string | undefined;
}

export namespace LabelingJobS3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SNS data source used for streaming labeling jobs.</p>
 */
export interface LabelingJobSnsDataSource {
  /**
   * <p>The Amazon SNS input topic Amazon Resource Name (ARN). Specify the ARN of the input topic
   *       you will use to send new data objects to a streaming labeling job.</p>
   */
  SnsTopicArn: string | undefined;
}

export namespace LabelingJobSnsDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobSnsDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location of input data.</p>
 *
 *          <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p>
 *          <p>Use <code>SnsDataSource</code> to specify an SNS input topic
 *     for a streaming labeling job. If you do not specify
 *     and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p>
 *          <p>Use <code>S3DataSource</code> to specify an input
 *     manifest file for both streaming and one-time labeling jobs.
 *     Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
 */
export interface LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource?: LabelingJobS3DataSource;

  /**
   * <p>An Amazon SNS data source used for streaming labeling jobs. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-send-data">Send Data to a Streaming Labeling Job</a>. </p>
   */
  SnsDataSource?: LabelingJobSnsDataSource;
}

export namespace LabelingJobDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Configure encryption on the storage volume attached to the ML compute instance used to
 *             run automated data labeling model training and inference. </p>
 */
export interface LabelingJobResourceConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training and inference jobs used for
   *             automated data labeling. </p>
   *         <p>You can only specify a <code>VolumeKmsKeyId</code> when you create a labeling job with
   *             automated data labeling enabled using the API operation <code>CreateLabelingJob</code>.
   *             You cannot specify an Amazon Web Services KMS key to encrypt the storage volume used for
   *             automated data labeling model training and inference when you create a labeling job
   *             using the console. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security.html">Output Data and Storage Volume
   *                 Encryption</a>.</p>
   *         <p>The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

export namespace LabelingJobResourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobResourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The ground truth labels for the dataset used for the monitoring job.</p>
 */
export interface MonitoringGroundTruthS3Input {
  /**
   * <p>The address of the Amazon S3 location of the ground truth labels.</p>
   */
  S3Uri?: string;
}

export namespace MonitoringGroundTruthS3Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringGroundTruthS3Input): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details regarding the file source.</p>
 */
export interface FileSource {
  /**
   * <p>The type of content stored in the file source.</p>
   */
  ContentType?: string;

  /**
   * <p>The digest of the file source.</p>
   */
  ContentDigest?: string;

  /**
   * <p>The Amazon S3 URI for the file source.</p>
   */
  S3Uri: string | undefined;
}

export namespace FileSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSource): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the
 *             model package.</p>
 */
export interface DriftCheckBias {
  /**
   * <p>The bias config file for a model.</p>
   */
  ConfigFile?: FileSource;

  /**
   * <p></p>
   */
  PreTrainingConstraints?: MetricsSource;

  /**
   * <p></p>
   */
  PostTrainingConstraints?: MetricsSource;
}

export namespace DriftCheckBias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckBias): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check explainability baselines that can be used when the model monitor is set
 *             using the model package. </p>
 */
export interface DriftCheckExplainability {
  /**
   * <p></p>
   */
  Constraints?: MetricsSource;

  /**
   * <p>The explainability config file for the model.</p>
   */
  ConfigFile?: FileSource;
}

export namespace DriftCheckExplainability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckExplainability): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check data quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelDataQuality {
  /**
   * <p></p>
   */
  Statistics?: MetricsSource;

  /**
   * <p></p>
   */
  Constraints?: MetricsSource;
}

export namespace DriftCheckModelDataQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckModelDataQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelQuality {
  /**
   * <p></p>
   */
  Statistics?: MetricsSource;

  /**
   * <p></p>
   */
  Constraints?: MetricsSource;
}

export namespace DriftCheckModelQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckModelQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Contains explainability metrics for a model.</p>
 */
export interface Explainability {
  /**
   * <p>The explainability report for a model.</p>
   */
  Report?: MetricsSource;
}

export namespace Explainability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Explainability): any => ({
    ...obj,
  });
}

/**
 * <p>Data quality constraints and statistics for a model.</p>
 */
export interface ModelDataQuality {
  /**
   * <p>Data quality statistics for a model.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Data quality constraints for a model.</p>
   */
  Constraints?: MetricsSource;
}

export namespace ModelDataQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDataQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Model quality statistics and constraints.</p>
 */
export interface ModelQuality {
  /**
   * <p>Model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

export namespace ModelQuality {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQuality): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you
 *             are subscribed to.</p>
 */
export interface SourceAlgorithm {
  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 algorithm.</p>
   *         </note>
   */
  ModelDataUrl?: string;

  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you
   *             are subscribed to.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace SourceAlgorithm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceAlgorithm): any => ({
    ...obj,
  });
}

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

export namespace ModelPackageValidationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageValidationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface MonitoringBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should be
   *          validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

export namespace MonitoringBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface MonitoringAppSpecification {
  /**
   * <p>The container image to be run by the monitoring job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container used to run the monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
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
}

export namespace MonitoringAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The inputs for a monitoring job.</p>
 */
export interface MonitoringInput {
  /**
   * <p>The endpoint for a monitoring job.</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace MonitoringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringInput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
  /**
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker
   *          Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * <p>The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage
   *          Service (Amazon S3).</p>
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *          monitoring job. In distributed processing, you specify more than one instance.</p>
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * <p>Configures the monitoring job to run a specified Docker container image.</p>
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *          your behalf.</p>
   */
  RoleArn: string | undefined;
}

export namespace MonitoringJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration details about the monitoring schedule.</p>
 */
export interface ScheduleConfig {
  /**
   * <p>A cron expression that describes details about the monitoring schedule.</p>
   *
   *          <p>Currently the only supported cron expressions are:</p>
   *          <ul>
   *             <li>
   *                <p>If you want to set the job to start every hour, please use the following:</p>
   *                <p>
   *                   <code>Hourly: cron(0 * ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to start the job daily:</p>
   *                <p>
   *                   <code>cron(0 [00-23] ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Daily at noon UTC: <code>cron(0 12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Daily at midnight UTC: <code>cron(0 0 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>To support running every 6, 12 hours, the following are also supported:</p>
   *          <p>
   *             <code>cron(0 [00-23]/[01-24] ? * * *)</code>
   *          </p>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Every 12 hours, starting at 5pm UTC: <code>cron(0 17/12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Every two hours starting at midnight: <code>cron(0 0/2 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Even though the cron expression is set to start at 5PM UTC, note that there
   *                   could be a delay of 0-20 minutes from the actual requested time to run the
   *                   execution. </p>
   *                </li>
   *                <li>
   *                   <p>We recommend that if you would like a daily schedule, you do not provide this
   *                   parameter. Amazon SageMaker will pick a time for running every day.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ScheduleExpression: string | undefined;
}

export namespace ScheduleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for Redshift Dataset Definition input.</p>
 */
export interface RedshiftDatasetDefinition {
  /**
   * <p>The Redshift cluster Identifier.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The name of the Redshift database used in Redshift query execution.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name used in Redshift query execution.</p>
   */
  DbUser: string | undefined;

  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.</p>
   */
  ClusterRoleArn: string | undefined;

  /**
   * <p>The location in Amazon S3 where the Redshift query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data from a
   *             Redshift execution.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Redshift query results.</p>
   */
  OutputFormat: RedshiftResultFormat | string | undefined;

  /**
   * <p>The compression used for Redshift query results.</p>
   */
  OutputCompression?: RedshiftResultCompressionType | string;
}

export namespace RedshiftDatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDatasetDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for Dataset Definition inputs. The Dataset Definition input must specify
 *             exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code>
 *             types.</p>
 */
export interface DatasetDefinition {
  /**
   * <p>Configuration for Athena Dataset Definition input.</p>
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition;

  /**
   * <p>Configuration for Redshift Dataset Definition input.</p>
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;

  /**
   * <p>The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a
   *             processing job. <code>LocalPath</code> is an absolute path to the input data. This is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether the generated dataset is <code>FullyReplicated</code> or
   *             <code>ShardedByS3Key</code> (default).</p>
   */
  DataDistributionType?: DataDistributionType | string;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In <code>File</code> (default) mode,
   *             Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store
   *             (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used
   *             input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  InputMode?: InputMode | string;
}

export namespace DatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
 */
export interface ProcessingS3Input {
  /**
   * <p>The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path in your container where you want Amazon SageMaker to write input data to.
   *             <code>LocalPath</code> is an absolute path to the input data and must begin with
   *             <code>/opt/ml/processing/</code>. <code>LocalPath</code> is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether you use an <code>S3Prefix</code> or a <code>ManifestFile</code> for
   *             the data type. If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key
   *             name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing
   *             job. If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *             that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for
   *             the processing job.</p>
   */
  S3DataType: ProcessingS3DataType | string | undefined;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In File mode, Amazon SageMaker copies the data
   *             from the input source onto the local ML storage volume before starting your processing
   *             container. This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker
   *             streams input data from the source directly to your processing container into named
   *             pipes without using the ML storage volume.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether to distribute the data from Amazon S3 to all processing instances with
   *             <code>FullyReplicated</code>, or whether the data from Amazon S3 is shared by Amazon S3 key,
   *             downloading one shard of data to each processing instance.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing
   *             container. <code>Gzip</code> can only be used when <code>Pipe</code> mode is
   *             specified as the <code>S3InputMode</code>. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your container without using the EBS volume.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType | string;
}

export namespace ProcessingS3Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingS3Input): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store.</p>
 */
export interface ProcessingFeatureStoreOutput {
  /**
   * <p>The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your
   *             processing script is responsible for putting records into your Feature Store.</p>
   */
  FeatureGroupName: string | undefined;
}

export namespace ProcessingFeatureStoreOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingFeatureStoreOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for uploading output data to Amazon S3 from the processing container.</p>
 */
export interface ProcessingS3Output {
  /**
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.
   *             <code>LocalPath</code> is an absolute path to a directory containing output files.
   *             This directory will be created by the platform and exist when your container's
   *             entrypoint is invoked.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | string | undefined;
}

export namespace ProcessingS3Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingS3Output): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the results of a processing job. The processing output must specify exactly one of
 *             either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.</p>
 */
export interface ProcessingOutput {
  /**
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output?: ProcessingS3Output;

  /**
   * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store. This processing output
   *             type is only supported when <code>AppManaged</code> is specified. </p>
   */
  FeatureStoreOutput?: ProcessingFeatureStoreOutput;

  /**
   * <p>When <code>True</code>, output operations such as data upload are managed natively by the
   *             processing job application. When <code>False</code> (default), output operations are managed by
   *             Amazon SageMaker.</p>
   */
  AppManaged?: boolean;
}

export namespace ProcessingOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for the cluster used to run a processing job.</p>
 */
export interface ProcessingClusterConfig {
  /**
   * <p>The number of ML compute instances to use in the processing job. For distributed
   *             processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for processing, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                 <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeKmsKeyId?: string;
}

export namespace ProcessingClusterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingClusterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A key value pair used when you provision a project as a service catalog product. For
 *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ProvisioningParameter {
  /**
   * <p>The key that identifies a provisioning parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value of the provisioning parameter.</p>
   */
  Value?: string;
}

export namespace ProvisioningParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisioningParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
 */
export interface TensorBoardOutputConfig {
  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace TensorBoardOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TensorBoardOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The data structure used to specify the data to be used for inference in a batch
 *             transform job and to associate the data that is relevant to the prediction results in
 *             the output. The input filter provided allows you to exclude input data that is not
 *             needed for inference in a batch transform job. The output filter provided allows you to
 *             include input data relevant to interpreting the predictions in the output from the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
 *                 Results with their Corresponding Input Records</a>.</p>
 */
export interface DataProcessing {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. You can specify
   *                 <code>OutputFilter</code> as an additional filter to select a portion of the joined
   *             dataset and store it in the output file.</p>
   *         <p>For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *         <p>For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with
   *             the input by appending each transformed row to the end of the input. The joined data has
   *             the original input data followed by the transformed data and the output is a CSV
   *             file.</p>
   *         <p>For information on how joining in applied, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow">Workflow for Associating Inferences with Input Records</a>.</p>
   */
  JoinSource?: JoinSource | string;
}

export namespace DataProcessing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataProcessing): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the timeout and maximum number of retries for processing a transform job
 *             invocation.</p>
 */
export interface ModelClientConfig {
  /**
   * <p>The timeout value in seconds for an invocation request. The default value is 600.</p>
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * <p>The maximum number of retries when invocation requests are failing. The default value is 3.</p>
   */
  InvocationsMaxRetries?: number;
}

export namespace ModelClientConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelClientConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an input or output artifact of a trial component. You specify
 *         <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and
 *         <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a>
 *       request.</p>
 *          <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 */
export interface TrialComponentArtifact {
  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;

  /**
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;
}

export namespace TrialComponentArtifact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentArtifact): any => ({
    ...obj,
  });
}

/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
 */
export type TrialComponentParameterValue =
  | TrialComponentParameterValue.NumberValueMember
  | TrialComponentParameterValue.StringValueMember
  | TrialComponentParameterValue.$UnknownMember;

export namespace TrialComponentParameterValue {
  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    $unknown?: never;
  }

  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrialComponentParameterValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentParameterValue): any => {
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The status of the trial component.</p>
 */
export interface TrialComponentStatus {
  /**
   * <p>The status of the trial component.</p>
   */
  PrimaryStatus?: TrialComponentPrimaryStatus | string;

  /**
   * <p>If the component failed, a message describing why.</p>
   */
  Message?: string;
}

export namespace TrialComponentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 */
export interface OidcConfig {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   */
  ClientSecret: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri: string | undefined;
}

export namespace OidcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcConfig): any => ({
    ...obj,
    ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
  });
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
 *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
 */
export interface SourceIpConfig {
  /**
   * <p>A list of one to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *         <p>Maximum: Ten CIDR values</p>
   *         <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *         </note>
   */
  Cidrs: string[] | undefined;
}

export namespace SourceIpConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceIpConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP).
 *             One to ten groups can be used to create a single private work team.
 *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *             private work teams. If you add a user group to a private work team, all workers in that user group
 *             are added to the work team.</p>
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies
   *             user groups in your OIDC IdP. Each user group is
   *             made up of a group of private workers.</p>
   */
  Groups: string[] | undefined;
}

export namespace OidcMemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *             One to ten groups can be used to create a single private work team.
   *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *             private work teams. If you add a user group to a private work team, all workers in that user group
   *             are added to the work team.</p>
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

export namespace MemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configures Amazon SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export namespace NotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 */
export interface DataCaptureConfigSummary {
  /**
   * <p>Whether data capture is enabled or disabled.</p>
   */
  EnableCapture: boolean | undefined;

  /**
   * <p>Whether data capture is currently functional.</p>
   */
  CaptureStatus: CaptureStatus | string | undefined;

  /**
   * <p>The percentage of requests being captured by your Endpoint.</p>
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   */
  KmsKeyId: string | undefined;
}

export namespace DataCaptureConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCaptureConfigSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace DebugRuleEvaluationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugRuleEvaluationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The retention policy for data stored on an Amazon Elastic File System (EFS) volume.</p>
 */
export interface RetentionPolicy {
  /**
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the EFS volume.</p>
   *          <p>Specify <code>Delete</code> to delete the data stored on the EFS volume.</p>
   */
  HomeEfsFileSystem?: RetentionType | string;
}

export namespace RetentionPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p>
 *         <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;
}

export namespace DeployedImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeployedImage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   */
  EndpointName?: string;
}

export namespace ModelDeployResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDeployResult): any => ({
    ...obj,
  });
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

export namespace ResolvedAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResolvedAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *         <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model definition that describes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

export namespace ModelArtifacts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelArtifacts): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   */
  ArtifactDigest?: string;
}

export namespace ModelDigests {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDigests): any => ({
    ...obj,
  });
}

/**
 * <p>The model on the edge device.</p>
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;
}

export namespace EdgeModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModel): any => ({
    ...obj,
  });
}

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  Type: EdgePresetDeploymentType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   */
  Artifact?: string;

  /**
   * <p>The status of the deployable resource.</p>
   */
  Status?: EdgePresetDeploymentStatus | string;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   */
  StatusMessage?: string;
}

export namespace EdgePresetDeploymentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgePresetDeploymentOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of the production variant.</p>
 */
export interface ProductionVariantStatus {
  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: Creating inference resources for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: Terminating inference resources for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: Updating capacity for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ActivatingTraffic</code>: Turning on traffic for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the
   *                 automatic rollback configuration.</p>
   *             </li>
   *          </ul>
   */
  Status: VariantStatus | string | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The start time of the current status change.</p>
   */
  StartTime?: Date;
}

export namespace ProductionVariantStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The production variant summary for a deployment when an endpoint is
 *             creating or updating with the <code>
 *                <a>CreateEndpoint</a>
 *             </code>
 *             or <code>
 *                <a>UpdateEndpoint</a>
 *             </code> operations.
 *             Describes the <code>VariantStatus </code>, weight and capacity for a production
 *             variant associated with an endpoint.
 *            </p>
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2
   *             Container Registry paths of the inference images deployed on instances of this
   *             <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint configuration
   *             for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint configuration
   *             for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The type of instances associated with the variant.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export namespace PendingProductionVariantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingProductionVariantSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or
 *             updating with a new endpoint configuration.</p>
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>List of <code>PendingProductionVariantSummary</code> objects.</p>
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * <p>The start time of the deployment.</p>
   */
  StartTime?: Date;
}

export namespace PendingDeploymentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingDeploymentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export namespace ProductionVariantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariantSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export namespace ExperimentSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSource): any => ({
    ...obj,
  });
}

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   */
  Status: OfflineStoreStatusValue | string | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   */
  BlockedReason?: string;
}

export namespace OfflineStoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OfflineStoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;
}

export namespace UiTemplateInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiTemplateInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalHyperParameterTuningJobObjectiveMetric): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *         <ul>
   *             <li>
   *                 <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus | string;
}

export namespace HyperParameterTrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

export namespace ObjectiveStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
    ...obj,
  });
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export namespace TrainingJobStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;
}

export namespace EndpointOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointOutputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The metrics of recommendations.</p>
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   */
  CostPerHour: number | undefined;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   */
  CostPerInference: number | undefined;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   */
  ModelLatency: number | undefined;
}

export namespace RecommendationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 */
export interface EnvironmentParameter {
  /**
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  ValueType: string | undefined;

  /**
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Value: string | undefined;
}

export namespace EnvironmentParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 */
export interface ModelConfiguration {
  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   */
  EnvironmentParameters?: EnvironmentParameter[];
}

export namespace ModelConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 */
export interface InferenceRecommendation {
  /**
   * <p>The metrics used to decide what recommendation to make.</p>
   */
  Metrics: RecommendationMetrics | undefined;

  /**
   * <p>Defines the endpoint configuration parameters.</p>
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;
}

export namespace InferenceRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceRecommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

export namespace LabelCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelCounters): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

export namespace LabelingJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

export namespace ModelPackageStatusItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageStatusItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

export namespace ModelPackageStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageStatusDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringExecutionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 */
export interface PipelineExperimentConfig {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace PipelineExperimentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExperimentConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Details of a provisioned service catalog product. For information about service catalog,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * <p>The ID of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The current status of the product.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *          </ul>
   */
  ProvisionedProductStatusMessage?: string;
}

export namespace ServiceCatalogProvisionedProductDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisionedProductDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;
}

export namespace SubscribedWorkteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscribedWorkteam): any => ({
    ...obj,
  });
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}

export namespace MetricData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricData): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ProfilerRuleEvaluationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerRuleEvaluationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides
 *             additional details about a status that the training job has transitioned through. A
 *             training job can be in one of several states, for example, starting, downloading,
 *             training, or uploading. Within each state, there are a number of intermediate states.
 *             For example, within the starting state, SageMaker could be starting the training job or
 *             launching the ML instances. These transitional states are referred to as the job's
 *             secondary
 *             status.
 *             </p>
 *         <p></p>
 */
export interface SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *         <p>Status might be one of the following secondary statuses:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Status: SecondaryStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *         <p>SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>Launching requested ML
   *                                 instances.</p>
   *                         </li>
   *                   <li>
   *                             <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                         </li>
   *                   <li>
   *                             <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                         </li>
   *                   <li>
   *                             <p>Preparing the instances for training.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Downloading the training image.</p>
   *                         </li>
   *                   <li>
   *                             <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *         </important>
   *         <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For
   *             example, at the start of a training job, you might see the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

export namespace SecondaryStatusTransition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialSource): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;
}

export namespace TrialComponentMetricSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentMetricSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 */
export interface TrialComponentSource {
  /**
   * <p>The source ARN.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialComponentSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSource): any => ({
    ...obj,
  });
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId?: string;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer?: string;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;
}

export namespace OidcConfigForResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcConfigForResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   */
  SubDomain?: string;

  /**
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;
}

export namespace Workforce {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workforce): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace Workteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workteam): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  /**
   * <p>The name of the variant to update.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;
}

export namespace DesiredWeightAndCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Information of a particular device.</p>
 */
export interface Device {
  /**
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Description of the device.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Web Services Internet of Things (IoT) object name.</p>
   */
  IotThingName?: string;
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of the device fleet.</p>
 */
export interface DeviceFleetSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the device fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>Name of the device fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace DeviceFleetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceFleetSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Status of devices.</p>
 */
export interface DeviceStats {
  /**
   * <p>The number of devices connected with a heartbeat.</p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of registered devices.</p>
   */
  RegisteredDeviceCount: number | undefined;
}

export namespace DeviceStats {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceStats): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of model on edge device.</p>
 */
export interface EdgeModelSummary {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The version model.</p>
   */
  ModelVersion: string | undefined;
}

export namespace EdgeModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModelSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime?: Date;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModelSummary[];

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export namespace DeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

export namespace DomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that update the current configuration for the <code>RStudioServerPro</code> Domain-level app.</p>
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * <p>The execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace RStudioServerProDomainSettingsForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RStudioServerProDomainSettingsForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of <code>Domain</code> configuration settings to update.</p>
 */
export interface DomainSettingsForUpdate {
  /**
   * <p>A collection of <code>RStudioServerPro</code> Domain-level app settings to update.</p>
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;
}

export namespace DomainSettingsForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainSettingsForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A directed edge connecting two lineage entities.</p>
 */
export interface Edge {
  /**
   * <p>The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The type of the Association(Edge) between the source and destination. For example <code>ContributedTo</code>,
   *          <code>Produced</code>, or <code>DerivedFrom</code>.</p>
   */
  AssociationType?: AssociationEdgeType | string;
}

export namespace Edge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
}

/**
 * <p>Status of edge devices with this model.</p>
 */
export interface EdgeModelStat {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The number of devices that have this model version and do not have a heart beat.</p>
   */
  OfflineDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version and have a heart beat. </p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version, a heart beat, and are currently running.</p>
   */
  ActiveDeviceCount: number | undefined;

  /**
   * <p>The number of devices with this model version and are producing sample data.</p>
   */
  SamplingDeviceCount: number | undefined;
}

export namespace EdgeModelStat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModelStat): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of edge packaging job.</p>
 */
export interface EdgePackagingJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The status of the edge packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The timestamp of when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the edge packaging job was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace EdgePackagingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgePackagingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
 */
export interface EMRStepMetadata {
  /**
   * <p>The identifier of the EMR cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The identifier of the EMR cluster step.</p>
   */
  StepId?: string;

  /**
   * <p>The name of the EMR cluster step.</p>
   */
  StepName?: string;

  /**
   * <p>The path to the log file where the cluster step's failure root cause
   *             is recorded.</p>
   */
  LogFilePath?: string;
}

export namespace EMRStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EMRStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>A schedule for a model monitoring job. For information about model monitor, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model
 *                 Monitor</a>.</p>
 */
export interface MonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The status of the monitoring schedule. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The schedule is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The schedule failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SCHEDULED</code> - The schedule was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STOPPED</code> - The schedule was stopped.</p>
   *             </li>
   *          </ul>
   */
  MonitoringScheduleStatus?: ScheduleStatus | string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>If the monitoring schedule failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time the monitoring schedule was changed.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * <p>The endpoint that hosts the model being monitored.</p>
   */
  EndpointName?: string;

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>A list of the tags associated with the monitoring schedlue. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace MonitoringSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>A hosted endpoint for real-time inference.</p>
 */
export interface Endpoint {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The endpoint configuration associated with the endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>A list of the production variants hosted on the endpoint. Each production variant is a
   *             model.</p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the endpoint failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A list of monitoring schedules for the endpoint. For information about model
   *             monitoring, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
   */
  MonitoringSchedules?: MonitoringSchedule[];

  /**
   * <p>A list of the tags associated with the endpoint. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace EndpointConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointConfigSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   *         <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;
}

export namespace EndpointSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of an experiment as returned by the <a>Search</a> API.</p>
 */
export interface Experiment {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The list of tags that are associated with the experiment. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace Experiment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a>DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ExperimentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the metadata for Fail step.</p>
 */
export interface FailStepMetadata {
  /**
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   */
  ErrorMessage?: string;
}

export namespace FailStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
 *          A Feature Group can be visualized as a table which has rows,
 *          with a unique identifier for each row where each column in the table is a feature.
 *          In principle, a Feature Group is composed of features and values per features.</p>
 */
export interface FeatureGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn?: string;

  /**
   * <p>The name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName?: string;

  /**
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *       <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   */
  RecordIdentifierFeatureName?: string;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event
   *          occurs that corresponds to the creation or update of a <code>Record</code> in
   *          <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          must have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName?: string;

  /**
   * <p>A list of <code>Feature</code>s. Each <code>Feature</code> must include a
   *             <code>FeatureName</code> and a <code>FeatureType</code>. </p>
   *          <p>Valid <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and
   *             <code>String</code>. </p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>.</p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions?: FeatureDefinition[];

  /**
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly; the default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key
   *          Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *          <code>S3StorageConfig</code>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A <code>FeatureGroup</code> status.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of <code>OfflineStore</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to
   *          be replicated in the <code>OfflineStore</code>. This is
   *          failure may be due to a failure to create a <code>FeatureGroup</code> in
   *          or delete a <code>FeatureGroup</code> from the <code>OfflineStore</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

export namespace FeatureGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 */
export interface FeatureGroupSummary {
  /**
   * <p>The name of <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>A timestamp indicating the time of creation time of the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;
}

export namespace FeatureGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureGroupSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a>Search</a> API.</p>
 *
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the
 *       equals operator.</p>
 *          <p>In search, there are several property types:</p>
 *          <dl>
 *             <dt>Metrics</dt>
 *             <dd>
 *                <p>To define a metric filter, enter a value using the form
 *             <code>"Metrics.<name>"</code>, where <code><name></code> is
 *             a metric name. For example, the following filter searches for training jobs
 *             with an <code>"accuracy"</code> metric greater than
 *             <code>"0.9"</code>:</p>
 *                <p>
 *                   <code>{</code>
 *                </p>
 *                <p>
 *                   <code>"Name": "Metrics.accuracy",</code>
 *                </p>
 *                <p>
 *                   <code>"Operator": "GreaterThan",</code>
 *                </p>
 *                <p>
 *                   <code>"Value": "0.9"</code>
 *                </p>
 *                <p>
 *                   <code>}</code>
 *                </p>
 *             </dd>
 *             <dt>HyperParameters</dt>
 *             <dd>
 *                <p>To define a hyperparameter filter, enter a value with the form
 *             <code>"HyperParameters.<name>"</code>. Decimal hyperparameter
 *             values are treated as a decimal in a comparison if the specified
 *             <code>Value</code> is also a decimal value. If the specified
 *             <code>Value</code> is an integer, the decimal hyperparameter values are
 *             treated as integers. For example, the following filter is satisfied by
 *             training jobs with a <code>"learning_rate"</code> hyperparameter that is
 *             less than <code>"0.5"</code>:</p>
 *                <p>
 *                   <code> {</code>
 *                </p>
 *                <p>
 *                   <code> "Name": "HyperParameters.learning_rate",</code>
 *                </p>
 *                <p>
 *                   <code> "Operator": "LessThan",</code>
 *                </p>
 *                <p>
 *                   <code> "Value": "0.5"</code>
 *                </p>
 *                <p>
 *                   <code> }</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>Tags.<key></code>.</p>
 *             </dd>
 *          </dl>
 */
export interface Filter {
  /**
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a>SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>A Boolean binary operator that is used to evaluate the filter. The operator field
   *       contains one of the following values:</p>
   *          <dl>
   *             <dt>Equals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> equals <code>Value</code>.</p>
   *             </dd>
   *             <dt>NotEquals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> doesn't equal <code>Value</code>.</p>
   *             </dd>
   *             <dt>Exists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property exists.</p>
   *             </dd>
   *             <dt>NotExists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property does not exist.</p>
   *             </dd>
   *             <dt>GreaterThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>GreaterThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>In</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is one of the comma delimited strings in
   *             <code>Value</code>. Only supported for text properties.</p>
   *             </dd>
   *             <dt>Contains</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> contains the string <code>Value</code>.
   *             Only supported for text properties.</p>
   *                <p>A <code>SearchExpression</code> can include the <code>Contains</code> operator
   *             multiple times when the value of <code>Name</code> is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.ExperimentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.TrialName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.TrialComponentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.InputArtifacts</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.OutputArtifacts</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>A <code>SearchExpression</code> can include only one <code>Contains</code> operator
   *             for all other values of <code>Name</code>. In these cases, if you include multiple
   *             <code>Contains</code> operators in the <code>SearchExpression</code>, the result is
   *             the following error message: "<code>'CONTAINS' operator usage limit of 1
   *             exceeded.</code>"</p>
   *             </dd>
   *          </dl>
   */
  Operator?: Operator | string;

  /**
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

export namespace FlowDefinitionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinitionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

export namespace PropertyNameQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyNameQuery): any => ({
    ...obj,
  });
}

/**
 * <p>Specified in the <a>GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

export namespace SuggestionQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuggestionQuery): any => ({
    ...obj,
  });
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the Amazon SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

export namespace PropertyNameSuggestion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyNameSuggestion): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;
}

export namespace GitConfigForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GitConfigForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

export namespace HumanTaskUiSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanTaskUiSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             use
   *             for each iteration. Currently, the only valid value is
   *             Bayesian.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

export namespace HyperParameterTuningJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | string | undefined;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

/**
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | string | undefined;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

export namespace ImageVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageVersion): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains a list of recommendation jobs.</p>
 */
export interface InferenceRecommendationsJob {
  /**
   * <p>The name of the job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The job description.</p>
   */
  JobDescription: string | undefined;

  /**
   * <p>The recommendation job type.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;
}

export namespace InferenceRecommendationsJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceRecommendationsJob): any => ({
    ...obj,
  });
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

export namespace LabelCountersForWorkteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelCountersForWorkteam): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account used to start the labeling job.</p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

export namespace LabelingJobForWorkteamSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobForWorkteamSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

export namespace LabelingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a Lambda step.</p>
 */
export interface LambdaStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   */
  Arn?: string;

  /**
   * <p>A list of the output parameters of the Lambda step.</p>
   */
  OutputParameters?: OutputParameter[];
}

export namespace LambdaStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 */
export interface LineageGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * <p>The display name of the lineage group summary.</p>
   */
  DisplayName?: string;

  /**
   * <p>The creation time of the lineage group summary.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time of the lineage group summary.</p>
   */
  LastModifiedTime?: Date;
}

export namespace LineageGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineageGroupSummary): any => ({
    ...obj,
  });
}

export enum LineageType {
  ACTION = "Action",
  ARTIFACT = "Artifact",
  CONTEXT = "Context",
  TRIAL_COMPONENT = "TrialComponent",
}

/**
 * <p>Summary information about a monitoring job.</p>
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * <p>The time that the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint that the job monitors.</p>
   */
  EndpointName: string | undefined;
}

export namespace MonitoringJobDefinitionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringJobDefinitionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 */
export interface ModelMetadataFilter {
  /**
   * <p>The name of the of the model to filter by.</p>
   */
  Name: ModelMetadataFilterType | string | undefined;

  /**
   * <p>The value to filter the model metadata.</p>
   */
  Value: string | undefined;
}

export namespace ModelMetadataFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataFilter): any => ({
    ...obj,
  });
}

/**
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 */
export interface ModelMetadataSearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: ModelMetadataFilter[];
}

export namespace ModelMetadataSearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataSearchExpression): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the model metadata.</p>
 */
export interface ModelMetadataSummary {
  /**
   * <p>The machine learning domain of the model.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The machine learning framework of the model.</p>
   */
  Framework: string | undefined;

  /**
   * <p>The machine learning task of the model.</p>
   */
  Task: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  Model: string | undefined;

  /**
   * <p>The framework version of the model.</p>
   */
  FrameworkVersion: string | undefined;
}

export namespace ModelMetadataSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a model group.</p>
 */
export interface ModelPackageGroupSummary {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | string | undefined;
}

export namespace ModelPackageGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageGroupSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>If the model package is a versioned model, the version of the model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>The approval status of the model. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;
}

export namespace ModelPackageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace ModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringScheduleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringScheduleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace NotebookInstanceLifecycleConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleConfigSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

export namespace NotebookInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A pipeline execution summary.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The start time of the pipeline execution.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   */
  PipelineExecutionFailureReason?: string;
}

export namespace PipelineExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
}

export namespace ModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a processing job step.</p>
 */
export interface ProcessingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  Arn?: string;
}

export namespace ProcessingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the metadata for a Quality check step. For more information, see
 *          the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *       </p>
 */
export interface QualityCheckStepMetadata {
  /**
   * <p>The type of the Quality check step.</p>
   */
  CheckType?: string;

  /**
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   */
  CalculatedBaselineStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   */
  CalculatedBaselineConstraints?: string;

  /**
   * <p>The model package group name.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   */
  ViolationReport?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   */
  CheckJobArn?: string;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   */
  SkipCheck?: boolean;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *          <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *          These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code>
   *             BaselineUsedForDriftCheckStatistics</code> properties. </p>
   */
  RegisterNewBaseline?: boolean;
}

export namespace QualityCheckStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QualityCheckStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
}

export namespace RegisterModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a training job step.</p>
 */
export interface TrainingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TrainingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TransformJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a tuning step.</p>
 */
export interface TuningJobStepMetaData {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TuningJobStepMetaData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TuningJobStepMetaData): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a step execution.</p>
 */
export interface PipelineExecutionStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   */
  Model?: ModelStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package the model was registered to by this step execution.</p>
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   */
  Condition?: ConditionStepMetadata;

  /**
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   */
  Callback?: CallbackStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   */
  Lambda?: LambdaStepMetadata;

  /**
   * <p>The configurations and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted,</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  QualityCheck?: QualityCheckStepMetadata;

  /**
   * <p>Container for the metadata for a Clarify check step. The configurations
   *          and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted,</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  ClarifyCheck?: ClarifyCheckStepMetadata;

  /**
   * <p>The configurations and outcomes of an EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

  /**
   * <p>The configurations and outcomes of a Fail step execution.</p>
   */
  Fail?: FailStepMetadata;
}

export namespace PipelineExecutionStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An execution of a step in a pipeline.</p>
 */
export interface PipelineExecutionStep {
  /**
   * <p>The name of the step that is executed.</p>
   */
  StepName?: string;

  /**
   * <p>The display name of the step.</p>
   */
  StepDisplayName?: string;

  /**
   * <p>The description of the step.</p>
   */
  StepDescription?: string;

  /**
   * <p>The time that the step started executing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the step stopped executing.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the step execution.</p>
   */
  StepStatus?: StepStatus | string;

  /**
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   */
  CacheHitResult?: CacheHitResult;

  /**
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   */
  AttemptCount?: number;

  /**
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   */
  FailureReason?: string;

  /**
   * <p>Metadata for the step execution.</p>
   */
  Metadata?: PipelineExecutionStepMetadata;
}

export namespace PipelineExecutionStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStep): any => ({
    ...obj,
  });
}

/**
 * <p>Assigns a value to a named Pipeline parameter.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter to assign a value to. This
   *          parameter name must match a named parameter in the
   *          pipeline definition.</p>
   */
  Name: string | undefined;

  /**
   * <p>The literal value for the parameter.</p>
   */
  Value: string | undefined;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The last time that a pipeline execution began.</p>
   */
  LastExecutionTime?: Date;
}

export namespace PipelineSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of information about a processing job.</p>
 */
export interface ProcessingJobSummary {
  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;
}

export namespace ProcessingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * <p>The time that the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | string | undefined;
}

export namespace ProjectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the Studio Lifecycle Configuration.</p>
 */
export interface StudioLifecycleConfigDetails {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * <p>The name of the Studio Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The App type to which the Lifecycle Configuration is attached.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | string;
}

export namespace StudioLifecycleConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioLifecycleConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a training job.</p>
 */
export interface TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;
}

export namespace TrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a>ListTransformJobs</a> call.</p>
 */
export interface TransformJobSummary {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform
   *             job
   *             ends on compute instances. For successful jobs and stopped jobs, this
   *             is the exact time
   *             recorded
   *             after the results are uploaded. For failed jobs, this is when Amazon SageMaker
   *             detected that the job failed.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace TransformJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of a trial component. To get all the properties, call the
 *         <a>DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 */
export interface TrialComponentSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace TrialComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the
 *         <a>DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 */
export interface TrialSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  TrialSource?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace TrialSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The user profile details.</p>
 */
export interface UserProfileDetails {
  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;
}

export namespace UserProfileDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserProfileDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A versioned model that can be deployed for SageMaker inference.</p>
 */
export interface ModelPackage {
  /**
   * <p>The name of the model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The model group to which the model belongs.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version number of a versioned model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn?: string;

  /**
   * <p>The description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The time that the model package was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>A list of algorithms that were used to create a model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The status of the model package. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model package is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model package is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model package was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model package failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model package is in the process of being deleted.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageStatus?: ModelPackageStatus | string;

  /**
   * <p>Specifies the validation and image scan statuses of the model package.</p>
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;

  /**
   * <p>Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For
   *             information about listing model packages on Amazon Web Services Marketplace, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html">List Your
   *                 Algorithm or Model Package on Amazon Web Services Marketplace</a>.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The approval status of the model. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided when the model approval is set.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The machine learning domain of your model package and its components. Common
   *            machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task your model package accomplishes. Common machine
   *      learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service path where the sample payload are stored. This path must point to
   *            a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * <p>A list of the tags associated with the model package. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The metadata properties for the model package. </p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.</p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;
}

export namespace ModelPackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackage): any => ({
    ...obj,
  });
}

/**
 * <p>A group of versioned models in the model registry.</p>
 */
export interface ModelPackageGroup {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn?: string;

  /**
   * <p>The description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The status of the model group. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model group is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model group is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model group was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model group failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_FAILED</code> - SageMaker failed to delete the model group.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus | string;

  /**
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ModelPackageGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions
 *       of all filters to be included in the results returned from the <a>Search</a> API.</p>
 *          <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a
 *       specific channel name and <code>S3Uri</code> prefix, define the following filters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains",
 *             "Value":"mybucket/catdata"}'</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface NestedFilters {
  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;

  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;
}

export namespace NestedFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedFilters): any => ({
    ...obj,
  });
}

/**
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be associated with
 *       multiple trials.</p>
 */
export interface Parent {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;
}

export namespace Parent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parent): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker Model Building Pipeline instance.</p>
 */
export interface Pipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that created the pipeline.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline.</p>
   */
  PipelineStatus?: PipelineStatus | string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>A list of tags that apply to the pipeline.</p>
   */
  Tags?: Tag[];
}

export namespace Pipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Pipeline): any => ({
    ...obj,
  });
}

/**
 * <p>An execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline that was executed.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>The status of the pipeline status.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * <p>The creation time of the pipeline execution.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline execution was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline execution.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];
}

export namespace PipelineExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecution): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process
 *                 Data and Evaluate Models</a>.</p>
 */
export interface ProcessingJob {
  /**
   * <p>List of input configurations for the processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Configuration for uploading output from the processing container.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName?: string;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources?: ProcessingResources;

  /**
   * <p>Configures conditions under which the processing job should be stopped, such as how long
   *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The ARN of the role used to create the processing job.</p>
   */
  RoleArn?: string;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The ARN of the processing job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus?: ProcessingJobStatus | string;

  /**
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the processing job ended.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time that the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time the processing job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of the training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ProcessingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJob): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and
 *             storage paths.</p>
 */
export interface ProfilerConfigForUpdate {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * <p>To disable Debugger monitoring and profiling, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
}

export namespace ProfilerConfigForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerConfigForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a project as returned by the Search API.</p>
 */
export interface Project {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName?: string;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId?: string;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>Details that you specify to provision a service catalog product. For information about
   *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;

  /**
   * <p>Details of a provisioned service catalog product. For information about service catalog,
   *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus?: ProjectStatus | string;

  /**
   * <p>Who created the project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>A timestamp specifying when the project was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A timestamp container for when the project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace Project {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
}

/**
 * <p>A set of filters to narrow the set of lineage entities connected to the <code>StartArn</code>(s) returned by the
 *          <code>QueryLineage</code> API action.</p>
 */
export interface QueryFilters {
  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code> by type. For example: <code>DataSet</code>,
   *          <code>Model</code>, <code>Endpoint</code>, or <code>ModelDeployment</code>.</p>
   */
  Types?: string[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by the type of the lineage entity.</p>
   */
  LineageTypes?: (LineageType | string)[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by created date.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the create date.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) before the last modified date.</p>
   */
  ModifiedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the last modified date.</p>
   */
  ModifiedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by a set if property key value pairs.
   *          If multiple pairs are provided, an entity is included in the results if it matches any of the provided pairs.</p>
   */
  Properties?: Record<string, string>;
}

export namespace QueryFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryFilters): any => ({
    ...obj,
  });
}

/**
 * <p>A lineage entity connected to the starting entity(ies).</p>
 */
export interface Vertex {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage entity resource.</p>
   */
  Arn?: string;

  /**
   * <p>The type of the lineage entity resource. For example: <code>DataSet</code>, <code>Model</code>, <code>Endpoint</code>,
   *          etc...</p>
   */
  Type?: string;

  /**
   * <p>The type of resource of the lineage entity.</p>
   */
  LineageType?: LineageType | string;
}

export namespace Vertex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vertex): any => ({
    ...obj,
  });
}

/**
 * <p>Contains input values for a task.</p>
 */
export interface RenderableTask {
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string | undefined;
}

export namespace RenderableTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderableTask): any => ({
    ...obj,
  });
}

/**
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface RenderingError {
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;
}

export namespace RenderingError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderingError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a training job.</p>
 */
export interface TrainingJob {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *         <p>Training job statuses are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *         <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus | string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p>
   *         <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *         </important>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus?: SecondaryStatus | string;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace TrainingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJob): any => ({
    ...obj,
  });
}

/**
 * <p>A short summary of a trial component.</p>
 */
export interface TrialComponentSimpleSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;
}

export namespace TrialComponentSimpleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSimpleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial as returned by the <a>Search</a> API.</p>
 */
export interface Trial {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The list of tags that are associated with the trial. You can use <a>Search</a>
   *       API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

export namespace Trial {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trial): any => ({
    ...obj,
  });
}

/**
 * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
 *         Transform</a>.</p>
 */
export interface TransformJob {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn?: string;

  /**
   * <p>The status of the transform job.</p>
   *          <p>Transform job statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The job is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The transform job has failed. To see the reason for the failure,
   *           see the <code>FailureReason</code> field in the response to a
   *             <code>DescribeTransformJob</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The transform job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The transform job has stopped.</p>
   *             </li>
   *          </ul>
   */
  TransformJobStatus?: TransformJobStatus | string;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model associated with the transform job.</p>
   */
  ModelName?: string;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum allowed size of the payload, in MB. A payload is the data portion of a record
   *       (without metadata). The value in <code>MaxPayloadInMB</code> must be greater than, or equal
   *       to, the size of a single record. To estimate the size of a record in MB, divide the size of
   *       your dataset by the number of records. To ensure that the records fit within the maximum
   *       payload size, we recommend using a slightly larger value. The default value is 6 MB. For cases
   *       where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding,
   *       set the value to 0. This feature works only in supported algorithms. Currently, SageMaker built-in
   *       algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   */
  TransformInput?: TransformInput;

  /**
   * <p>Describes the results of a transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   */
  TransformResources?: TransformResources;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>A list of tags associated with the transform job.</p>
   */
  Tags?: Tag[];
}

export namespace TransformJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJob): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the source of a trial component. Either
 *         <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.</p>
 */
export interface TrialComponentSourceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>Information about a training job that's the source of a trial component.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>Information about a processing job that's the source of a trial component.</p>
   */
  ProcessingJob?: ProcessingJob;

  /**
   * <p>Information about a transform job that's the source of a trial component.</p>
   */
  TransformJob?: TransformJob;
}

export namespace TrialComponentSourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial component as returned by the <a>Search</a>
 *       API.</p>
 */
export interface TrialComponent {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The list of tags that are associated with the component. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];
}

export namespace TrialComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponent): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>A single resource returned as part of the <a>Search</a> API response.</p>
 */
export interface SearchRecord {
  /**
   * <p>The properties of a training job.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>The properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * <p>The properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * <p>The properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;

  /**
   * <p>A hosted endpoint for real-time inference.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>A versioned model that can be deployed for SageMaker inference.</p>
   */
  ModelPackage?: ModelPackage;

  /**
   * <p>A group of versioned models in the model registry.</p>
   */
  ModelPackageGroup?: ModelPackageGroup;

  /**
   * <p>A SageMaker Model Building Pipeline instance.</p>
   */
  Pipeline?: Pipeline;

  /**
   * <p>An execution of a pipeline.</p>
   */
  PipelineExecution?: PipelineExecution;

  /**
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
   *          A Feature Group can be visualized as a table which has rows,
   *          with a unique identifier for each row where each column in the table is a feature.
   *          In principle, a Feature Group is composed of features and values per features.</p>
   */
  FeatureGroup?: FeatureGroup;

  /**
   * <p>The properties of a project.</p>
   */
  Project?: Project;
}

export namespace SearchRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRecord): any => ({
    ...obj,
    ...(obj.TrialComponent && { TrialComponent: TrialComponent.filterSensitiveLog(obj.TrialComponent) }),
  });
}

/**
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *         <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to
 *                 <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the
 *             existing variant properties of the endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <a>ProductionVariant$InitialInstanceCount</a> values
   *                     in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <a>ProductionVariant$InitialVariantWeight</a> values in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
}

export namespace VariantProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariantProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Details that you specify to provision a service catalog product.
 *             For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
 *         </p>
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

export namespace ServiceCatalogProvisioningUpdateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisioningUpdateDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;
}

export namespace SearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj,
  });
}
