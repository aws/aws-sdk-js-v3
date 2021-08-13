import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace ActionSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionSource): any => ({
    ...obj,
  });
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

export namespace AddAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddAssociationRequest): any => ({
    ...obj,
  });
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

export namespace AddAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddAssociationResponse): any => ({
    ...obj,
  });
}

/**
 * <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 */
export interface ResourceLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Resource being access is not found.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>A tag object that consists of a key and an optional value, used to manage metadata
 *             for Amazon SageMaker Amazon Web Services resources.</p>
 *         <p>You can add tags to notebook instances, training jobs, hyperparameter tuning jobs,
 *             batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints. For more information on adding tags to Amazon SageMaker resources, see <a>AddTags</a>.</p>
 *         <p>For more information on adding metadata to your Amazon Web Services resources with tagging, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
 *                 resources</a>. For advice on best practices for managing Amazon Web Services resources with
 *             tagging, see <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
 *                 Best Practices: Implement an Effective Amazon Web Services Resource Tagging Strategy</a>.</p>
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface AddTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj,
  });
}

export interface AddTagsOutput {
  /**
   * <p>A list of tags associated with the Amazon SageMaker resource.</p>
   */
  Tags?: Tag[];
}

export namespace AddTagsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
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

/**
 * <p>This API is not supported.</p>
 */
export interface Alarm {
  /**
   * <p></p>
   */
  AlarmName?: string;
}

export namespace Alarm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
}

export enum AlgorithmSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

/**
 * <p>Specifies a metric that the training algorithm
 *             writes
 *             to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerhyperparameter
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

export namespace MetricDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDefinition): any => ({
    ...obj,
  });
}

export enum TrainingInputMode {
  FILE = "File",
  PIPE = "Pipe",
}

/**
 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a>
 *             request.</p>
 *         <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For
 *             information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
 *                 SageMaker</a>. </p>
 */
export interface AlgorithmSpecification {
  /**
   * <p>The registry path of the Docker image
   *              that contains the training algorithm.
   *             For information about docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an
   *             algorithm resource that you created or subscribe to on Amazon Web Services Marketplace. If you specify a value for
   *             this parameter, you can't specify a value for <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>The input mode that the algorithm supports. For the input modes that Amazon SageMaker
   *             algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. If an algorithm supports the <code>File</code> input mode, Amazon SageMaker
   *             downloads the training data from S3 to the provisioned ML storage Volume, and mounts the
   *             directory to docker volume for training container. If an algorithm supports the
   *                 <code>Pipe</code> input mode, Amazon SageMaker streams data directly from S3 to the container. </p>
   *         <p> In File mode, make sure you provision ML storage volume with sufficient capacity
   *             to accommodate the data download from S3. In addition to the training data, the ML
   *             storage volume also stores the output model. The algorithm container use ML storage
   *             volume to also store intermediate information, if any. </p>
   *         <p> For distributed algorithms using File mode, training data is distributed
   *             uniformly, and your training duration is predictable if the input data objects size is
   *             approximately same. Amazon SageMaker does not split the files any further for model training. If the
   *             object sizes are skewed, training won't be optimal as the data distribution is also
   *             skewed where one host in a training cluster is overloaded, thus becoming bottleneck in
   *             training. </p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>To generate and save time-series metrics during training, set to <code>true</code>.
   *             The default is <code>false</code> and time-series metrics aren't generated except in the
   *             following cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You use one of the Amazon SageMaker built-in algorithms</p>
   *             </li>
   *             <li>
   *                 <p>You use one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pre-built-containers-frameworks-deep-learning.html">Prebuilt Amazon SageMaker Docker Images</a>:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Tensorflow (version >= 1.15)</p>
   *                     </li>
   *                   <li>
   *                         <p>MXNet (version >= 1.6)</p>
   *                     </li>
   *                   <li>
   *                         <p>PyTorch (version >= 1.3)</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>You specify at least one <a>MetricDefinition</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EnableSageMakerMetricsTimeSeries?: boolean;
}

export namespace AlgorithmSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmSpecification): any => ({
    ...obj,
  });
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
   *             Amazon SageMaker uses all objects that match the specified key name prefix for model training. </p>
   *         <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model
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
   *                     points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on
   *                     your behalf. </p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;

  /**
   * <p>If you want Amazon SageMaker to replicate the entire dataset on each ML compute instance that
   *             is launched for model training, specify <code>FullyReplicated</code>. </p>
   *         <p>If you want Amazon SageMaker to replicate a subset of data on each ML compute instance that is
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

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
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
 *         <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at
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

export namespace ShuffleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShuffleConfig): any => ({
    ...obj,
  });
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
   *         <p>Specify RecordIO as the value when input data is in raw format but the training
   *             algorithm requires the RecordIO format. In this case, Amazon SageMaker wraps each individual S3
   *             object in a RecordIO record. If the input data is already in RecordIO format, you don't
   *             need to set this attribute. For more information, see <a href="https://mxnet.apache.org/api/architecture/note_data_loading#data-format">Create
   *                 a Dataset Using RecordIO</a>. </p>
   *         <p>In File mode, leave this field unset or set it to None.</p>
   */
  RecordWrapperType?: RecordWrapper | string;

  /**
   * <p>(Optional) The input mode to use for the data channel in a training job. If you don't
   *             set a value for <code>InputMode</code>, Amazon SageMaker uses the value set for
   *                 <code>TrainingInputMode</code>. Use this parameter to override the
   *                 <code>TrainingInputMode</code> setting in a <a>AlgorithmSpecification</a>
   *             request when you have a channel that needs a different input mode from the training
   *             job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML
   *             storage volume, and mount the directory to a Docker volume, use <code>File</code> input
   *             mode. To stream data directly from Amazon S3 to the container, choose <code>Pipe</code> input
   *             mode.</p>
   *         <p>To use a model for incremental training, choose <code>File</code> input model.</p>
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
   *         <p>For Pipe input mode, shuffling is done at the start of every epoch. With large
   *             datasets this ensures that the order of the training data is different for each epoch,
   *             it helps reduce bias and possible overfitting. In a multi-node training job when
   *             ShuffleConfig is combined with <code>S3DataDistributionType</code> of
   *                 <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content
   *             sent to a particular node on the first epoch might be sent to a different node on the
   *             second epoch.</p>
   */
  ShuffleConfig?: ShuffleConfig;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how to store model training results (model
 *             artifacts).</p>
 */
export interface OutputDataConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
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
   *         <p>If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                     Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>. </p>
   */
  S3OutputPath: string | undefined;
}

export namespace OutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
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
   *             <p> Amazon SageMaker supports only the General Purpose SSD (gp2) ML storage volume type.
   *             </p>
   *         </note>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for training, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                     <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML
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

/**
 * <p>Specifies a limit to how long a model training job, model compilation job, or
 *             hyperparameter tuning job can run. It also specifies how long a managed Spot training
 *             job has to complete. When the job reaches the time limit, Amazon SageMaker ends the training or
 *             compilation job. Use this API to cap model training costs.</p>
 *         <p>To stop a training job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
 *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
 *             model artifacts, so the results of training are not lost. </p>
 *         <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results
 *             of a model training job when possible. This attempt to save artifacts is only a best
 *             effort case as model might not be in a state from which it can be saved. For example, if
 *             training has just started, the model might not be ready to save. When saved, this
 *             intermediate data is a valid model artifact. You can use it to create a model with
 *                 <code>CreateModel</code>.</p>
 *         <note>
 *             <p>The Neural Topic Model (NTM) currently does not support saving intermediate model
 *                 artifacts. When training NTMs, make sure that the maximum runtime is sufficient for
 *                 the training job to complete.</p>
 *         </note>
 */
export interface StoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that a training or compilation job can run.</p>
   *         <p>For compilation jobs, if the job does not complete during this time, you will
   *             receive a <code>TimeOut</code> error. We recommend starting with 900 seconds and increase as
   *             necessary based on your model.</p>
   *         <p>For all other jobs, if the job does not complete during this time, Amazon SageMaker ends the job. When
   *             <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxRuntimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.</p>
   */
  MaxRuntimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, that a managed Spot training job has to
   *             complete. It is the amount of time spent waiting for Spot capacity plus the amount of
   *             time the job can run. It must be equal to or greater than
   *                 <code>MaxRuntimeInSeconds</code>. If the job does not complete during this time,
   *             Amazon SageMaker ends the job.</p>
   *         <p>When <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxWaitTimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt.</p>
   */
  MaxWaitTimeInSeconds?: number;
}

export namespace StoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoppingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 */
export interface TrainingJobDefinition {
  /**
   * <p>The input mode used by the algorithm for the training job. For the input modes that
   *             Amazon SageMaker algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *         <p>If an algorithm supports the <code>File</code> input mode, Amazon SageMaker downloads the training
   *             data from S3 to the provisioned ML storage Volume, and mounts the directory to docker
   *             volume for training container. If an algorithm supports the <code>Pipe</code> input
   *             mode, Amazon SageMaker streams data directly from S3 to the container.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input
   *             source.</p>
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates
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
   *             a managed Spot training job has to complete. When the job reaches the time limit, Amazon SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export namespace TrainingJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobDefinition): any => ({
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
   *                 <a>CreateModel</a> request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
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
   *         <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

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

export namespace TransformJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your
 *             algorithm.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface AlgorithmValidationProfile {
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: TransformJobDefinition;
}

export namespace AlgorithmValidationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmValidationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the
 *             algorithm.</p>
 */
export interface AlgorithmValidationSpecification {
  /**
   * <p>The IAM roles that Amazon SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;
}

export namespace AlgorithmValidationSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmValidationSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configures how labels are consolidated across human workers and processes output data.
 *          </p>
 */
export interface AnnotationConsolidationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function implements the logic for <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">annotation consolidation</a> and to process output data.</p>
   *         <p>This parameter is required for all labeling jobs. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>, use one
   *             of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>AnnotationConsolidationLambdaArn</code>. For custom labeling workflows, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-postlambda">Post-annotation Lambda</a>. </p>
   *
   *         <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *             different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Image classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of an image based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Multi-label image classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of an image based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image
   *             as a multi-class classification and treats pixel annotations from workers as "votes" for
   *             the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Text classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Multi-label text classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Named entity recognition</b> - Groups similar selections
   *             and calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
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
   *
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *         <ul>
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
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *         <ul>
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
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
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
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> - Use this task type
   *             when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids
   *             around objects. For example, you can use this task type to ask workers to identify
   *             different types of objects in a point cloud, such as cars, bikes, and
   *             pedestrians.</p>
   *         <ul>
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
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> - Use this task type
   *             when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D
   *             point cloud frames. For example, you can use this task type to ask workers to track the
   *             movement of vehicles across multiple point cloud frames. </p>
   *         <ul>
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
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> - Use this task
   *             type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned
   *             to one of the classes you specify.</p>
   *         <ul>
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
   *
   *
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *         <p>
   *             <b>Semantic Segmentation Adjustment</b> - Treats each pixel
   *             in an image as a multi-class classification and treats pixel adjusted annotations from
   *             workers as "votes" for the correct label.</p>
   *         <ul>
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
   *
   *         <p>
   *             <b>Semantic Segmentation Verification</b> - Uses a variant
   *             of the Expectation Maximization approach to estimate the true class of verification
   *             judgment for semantic segmentation labels based on annotations from individual
   *             workers.</p>
   *         <ul>
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
   *
   *         <p>
   *             <b>Bounding Box Adjustment</b> - Finds the most similar
   *             boxes from different workers based on the Jaccard index of the adjusted
   *             annotations.</p>
   *         <ul>
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
   *         <p>
   *             <b>Bounding Box Verification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of verification judgement
   *             for bounding box labels based on annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
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
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
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
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D Point Cloud Object Tracking Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects that appear in a
   *             sequence of 3D point cloud frames.</p>
   *         <ul>
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
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation Adjustment</b> - Use this task
   *             type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.</p>
   *         <ul>
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

export namespace AnnotationConsolidationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnnotationConsolidationConfig): any => ({
    ...obj,
  });
}

export enum AppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
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

export namespace KernelGatewayImageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelGatewayImageConfig): any => ({
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

export namespace AppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppSpecification): any => ({
    ...obj,
  });
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

export namespace ArtifactSourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactSourceType): any => ({
    ...obj,
  });
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

export namespace ArtifactSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactSource): any => ({
    ...obj,
  });
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

export namespace AssociateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface AssociateTrialComponentResponse {
  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace AssociateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrialComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user who created or modified an experiment, trial, or trial
 *       component.</p>
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
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

export namespace AthenaDatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaDatasetDefinition): any => ({
    ...obj,
  });
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
  Environment?: { [key: string]: string };
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
   */
  S3DataType: AutoMLS3DataType | string | undefined;

  /**
   * <p>The URL to the Amazon S3 data source.</p>
   */
  S3Uri: string | undefined;
}

export namespace AutoMLS3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>The data source for the Autopilot job.</p>
 */
export interface AutoMLDataSource {
  /**
   * <p>The Amazon S3 location of the input data.</p>
   *          <note>
   *             <p>The input data must be in CSV format and contain at least 500 rows.</p>
   *          </note>
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

export namespace AutoMLDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>A channel is a named input source that training algorithms can consume. For more
 *          information, see .</p>
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
}

export namespace AutoMLChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLChannel): any => ({
    ...obj,
  });
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
   * <p>The maximum time, in seconds, a training job is allowed to run as part of an AutoML
   *          job.</p>
   */
  MaxRuntimePerTrainingJobInSeconds?: number;

  /**
   * <p>The maximum runtime, in seconds, an AutoML job has to complete.</p>
   */
  MaxAutoMLJobRuntimeInSeconds?: number;
}

export namespace AutoMLJobCompletionCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobCompletionCriteria): any => ({
    ...obj,
  });
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

export namespace VpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
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

export namespace AutoMLSecurityConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLSecurityConfig): any => ({
    ...obj,
  });
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
}

export namespace AutoMLJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobConfig): any => ({
    ...obj,
  });
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MSE</code>: The mean squared error (MSE) is the average of the squared
   *                differences between the predicted and actual values. It is used for regression. MSE
   *                values are always positive: the better a model is at predicting the actual values,
   *                the smaller the MSE value is. When the data contains outliers, they tend to dominate
   *                the MSE, which might cause subpar prediction performance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Accuracy</code>: The ratio of the number of correctly classified items to
   *                the total number of (correctly and incorrectly) classified items. It is used for
   *                binary and multiclass classification. It measures how close the predicted class
   *                values are to the actual values. Accuracy values vary between zero and one: one
   *                indicates perfect accuracy and zero indicates perfect inaccuracy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1</code>: The F1 score is the harmonic mean of the precision and recall. It
   *                is used for binary classification into classes traditionally referred to as positive
   *                and negative. Predictions are said to be true when they match their actual (correct)
   *                class and false when they do not. Precision is the ratio of the true positive
   *                predictions to all positive predictions (including the false positives) in a data set
   *                and measures the quality of the prediction when it predicts the positive class.
   *                Recall (or sensitivity) is the ratio of the true positive predictions to all actual
   *                positive instances and measures how completely a model predicts the actual class
   *                members in a data set. The standard F1 score weighs precision and recall equally. But
   *                which metric is paramount typically depends on specific aspects of a problem. F1
   *                scores vary between zero and one: one indicates the best possible performance and
   *                zero the worst.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUC</code>: The area under the curve (AUC) metric is used to compare and
   *                evaluate binary classification by algorithms such as logistic regression that return
   *                probabilities. A threshold is needed to map the probabilities into classifications.
   *                The relevant curve is the receiver operating characteristic curve that plots the true
   *                positive rate (TPR) of predictions (or recall) against the false positive rate (FPR)
   *                as a function of the threshold value, above which a prediction is considered
   *                positive. Increasing the threshold results in fewer false positives but more false
   *                negatives. AUC is the area under this receiver operating characteristic curve and so
   *                provides an aggregated measure of the model performance across all possible
   *                classification thresholds. The AUC score can also be interpreted as the probability
   *                that a randomly selected positive data point is more likely to be predicted positive
   *                than a randomly selected negative example. AUC scores vary between zero and one: a
   *                score of one indicates perfect accuracy and a score of one half indicates that the
   *                prediction is not better than a random classifier. Values under one half predict less
   *                accurately than a random predictor. But such consistently bad predictors can simply
   *                be inverted to obtain better than random predictors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1macro</code>: The F1macro score applies F1 scoring to multiclass
   *                classification. In this context, you have multiple classes to predict. You just
   *                calculate the precision and recall for each class as you did for the positive class
   *                in binary classification. Then, use these values to calculate the F1 score for each
   *                class and average them to obtain the F1macro score. F1macro scores vary between zero
   *                and one: one indicates the best possible performance and zero the worst.</p>
   *             </li>
   *          </ul>
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

export namespace AutoMLJobObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobObjective): any => ({
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
  MAX_AUTO_ML_JOB_RUNTIME_REACHED = "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED = "MaxCandidatesReached",
  MODEL_DEPLOYMENT_ERROR = "ModelDeploymentError",
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

/**
 * <p>The output data configuration.</p>
 */
export interface AutoMLOutputDataConfig {
  /**
   * <p>The Amazon Web Services KMS encryption key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace AutoMLOutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLOutputDataConfig): any => ({
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

/**
 * <p>Currently, the <code>AutoRollbackConfig</code> API is not supported.</p>
 */
export interface AutoRollbackConfig {
  /**
   * <p></p>
   */
  Alarms?: Alarm[];
}

export namespace AutoRollbackConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoRollbackConfig): any => ({
    ...obj,
  });
}

export enum AwsManagedHumanLoopRequestSource {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1",
}

/**
 * <p></p>
 */
export interface MetricsSource {
  /**
   * <p></p>
   */
  ContentType: string | undefined;

  /**
   * <p></p>
   */
  ContentDigest?: string;

  /**
   * <p></p>
   */
  S3Uri: string | undefined;
}

export namespace MetricsSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricsSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains bias metrics for a model.</p>
 */
export interface Bias {
  /**
   * <p>The bias report for a model</p>
   */
  Report?: MetricsSource;
}

export namespace Bias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bias): any => ({
    ...obj,
  });
}

export enum CapacitySizeType {
  CAPACITY_PERCENT = "CAPACITY_PERCENT",
  INSTANCE_COUNT = "INSTANCE_COUNT",
}

/**
 * <p>Currently, the <code>CapacitySize</code> API is not supported.</p>
 */
export interface CapacitySize {
  /**
   * <p>This API is not supported.</p>
   */
  Type: CapacitySizeType | string | undefined;

  /**
   * <p></p>
   */
  Value: number | undefined;
}

export namespace CapacitySize {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacitySize): any => ({
    ...obj,
  });
}

export enum TrafficRoutingConfigType {
  ALL_AT_ONCE = "ALL_AT_ONCE",
  CANARY = "CANARY",
}

/**
 * <p>Currently, the <code>TrafficRoutingConfig</code> API is not supported.</p>
 */
export interface TrafficRoutingConfig {
  /**
   * <p></p>
   */
  Type: TrafficRoutingConfigType | string | undefined;

  /**
   * <p></p>
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * <p></p>
   */
  CanarySize?: CapacitySize;
}

export namespace TrafficRoutingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficRoutingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.</p>
 */
export interface BlueGreenUpdatePolicy {
  /**
   * <p></p>
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig | undefined;

  /**
   * <p></p>
   */
  TerminationWaitInSeconds?: number;

  /**
   * <p></p>
   */
  MaximumExecutionTimeoutInSeconds?: number;
}

export namespace BlueGreenUpdatePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlueGreenUpdatePolicy): any => ({
    ...obj,
  });
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

export enum CandidateSortBy {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Status = "Status",
}

/**
 * <p></p>
 */
export interface CaptureContentTypeHeader {
  /**
   * <p></p>
   */
  CsvContentTypes?: string[];

  /**
   * <p></p>
   */
  JsonContentTypes?: string[];
}

export namespace CaptureContentTypeHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptureContentTypeHeader): any => ({
    ...obj,
  });
}

export enum CaptureMode {
  INPUT = "Input",
  OUTPUT = "Output",
}

/**
 * <p></p>
 */
export interface CaptureOption {
  /**
   * <p></p>
   */
  CaptureMode: CaptureMode | string | undefined;
}

export namespace CaptureOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptureOption): any => ({
    ...obj,
  });
}

export enum CaptureStatus {
  STARTED = "Started",
  STOPPED = "Stopped",
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

export namespace CategoricalParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameterRange): any => ({
    ...obj,
  });
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

export namespace CategoricalParameterRangeSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameterRangeSpecification): any => ({
    ...obj,
  });
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
   *         <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode.</p>
   *         <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: (TrainingInputMode | string)[] | undefined;
}

export namespace ChannelSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the output location for managed spot training checkpoint
 *             data. </p>
 */
export interface CheckpointConfig {
  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   */
  LocalPath?: string;
}

export namespace CheckpointConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CheckpointConfig): any => ({
    ...obj,
  });
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
 * <p>Specifies configuration details for a Git repository in your Amazon Web Services account.</p>
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

export namespace GitConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GitConfig): any => ({
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

export namespace CognitoConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoConfig): any => ({
    ...obj,
  });
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

export namespace CognitoMemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for the Debugger output tensor collections.</p>
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
  CollectionParameters?: { [key: string]: string };
}

export namespace CollectionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CollectionConfiguration): any => ({
    ...obj,
  });
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
  AMBA_CV22 = "amba_cv22",
  AMBA_CV25 = "amba_cv25",
  COREML = "coreml",
  DEEPLENS = "deeplens",
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

export namespace CompilationJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompilationJobSummary): any => ({
    ...obj,
  });
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

export namespace ConditionStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum RepositoryAccessMode {
  PLATFORM = "Platform",
  VPC = "Vpc",
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
 * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
 *             accessible from your Amazon Virtual Private Cloud (VPC).</p>
 */
export interface ImageConfig {
  /**
   * <p>Set this to one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Platform</code> - The model image is hosted in Amazon ECR.</p>
   *             </li>
   *             <li>
   *                 <p>
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

export namespace ImageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfig): any => ({
    ...obj,
  });
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

export namespace MultiModelConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiModelConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface ContainerDefinition {
  /**
   * <p>This parameter is ignored for models that contain only a
   *             <code>PrimaryContainer</code>.</p>
   *         <p>When a <code>ContainerDefinition</code> is part of an inference pipeline, the value of
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
   *             Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>
   *         </p>
   */
  Image?: string;

  /**
   * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
   *             accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a
   *             private Docker registry, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html">Use a
   *                 Private Docker Registry for Real-Time Inference Containers</a>
   *         </p>
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>Whether the container hosts a single model or multiple models.</p>
   */
  Mode?: ContainerMode | string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3
   *             path is required for Amazon SageMaker built-in algorithms, but not if you use your own algorithms.
   *             For more information on built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common
   *                 Parameters</a>. </p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model or endpoint you are creating.</p>
   *         </note>
   *         <p>If you provide a value for this parameter, Amazon SageMaker uses Amazon Web Services Security Token Service to
   *             download model artifacts from the S3 path you provide. Amazon Web Services STS is activated in your
   *             IAM user account by default. If you previously deactivated Amazon Web Services STS for a region, you
   *             need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User
   *                 Guide</i>.</p>
   *         <important>
   *             <p>If you use a built-in algorithm to create a model, Amazon SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *         </important>
   */
  ModelDataUrl?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *                 <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map. </p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the
   *             model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>Specifies additional configuration for multi-model endpoints.</p>
   */
  MultiModelConfig?: MultiModelConfig;
}

export namespace ContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDefinition): any => ({
    ...obj,
  });
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

export namespace ContextSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContextSource): any => ({
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
   *         <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                     <p>Amazon SageMaker hyperparameter tuning chooses the best scale for the
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
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a reverse logarithmic scale.</p>
   *                     <p>Reverse logarithmic scaling works only for ranges that are entirely within
   *                         the range 0<=x<1.0.</p>
   *                 </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

export namespace ContinuousParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousParameterRange): any => ({
    ...obj,
  });
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

export namespace ContinuousParameterRangeSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousParameterRangeSpecification): any => ({
    ...obj,
  });
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

export namespace MetadataProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataProperties): any => ({
    ...obj,
  });
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
  Properties?: { [key: string]: string };

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the action.</p>
   */
  Tags?: Tag[];
}

export namespace CreateActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionRequest): any => ({
    ...obj,
  });
}

export interface CreateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

export namespace CreateActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionResponse): any => ({
    ...obj,
  });
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
   *         <p>If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker,
   *             the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
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
   *                 (<code>.tar.gz</code> suffix).</p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model package.</p>
   *         </note>
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
  Environment?: { [key: string]: string };
}

export namespace ModelPackageContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageContainerDefinition): any => ({
    ...obj,
  });
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
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
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
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
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
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
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
   *         <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   */
  SupportedTransformInstanceTypes?: (TransformInstanceType | string)[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   *         <p>This parameter is required for unversioned models, and optional for versioned
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

export namespace InferenceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceSpecification): any => ({
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

export namespace HyperParameterSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterSpecification): any => ({
    ...obj,
  });
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

export namespace HyperParameterTuningJobObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobObjective): any => ({
    ...obj,
  });
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

export namespace TrainingSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingSpecification): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR path of the container and the version digest of the
   *                     algorithm.</p>
   *             </li>
   *             <li>
   *                 <p>The hyperparameters that the algorithm supports.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the algorithm supports for training.</p>
   *             </li>
   *             <li>
   *                 <p>Whether the algorithm supports distributed training.</p>
   *             </li>
   *             <li>
   *                 <p>The metrics that the algorithm emits to Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                 <p>Which metrics that the algorithm emits can be used as the objective metric for
   *                     hyperparameter tuning jobs.</p>
   *             </li>
   *             <li>
   *                 <p>The input channels that the algorithm supports for training data. For example,
   *                     an algorithm might support <code>train</code>, <code>validation</code>, and
   *                         <code>test</code> channels.</p>
   *             </li>
   *          </ul>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Specifies details about inference jobs that the algorithm runs, including the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the algorithm supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the algorithm supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more training jobs and that Amazon SageMaker runs to test the
   *             algorithm's training code and, optionally, one or more batch transform jobs that Amazon SageMaker
   *             runs to test the algorithm's inference code.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAlgorithmInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlgorithmInput): any => ({
    ...obj,
  });
}

export interface CreateAlgorithmOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new algorithm.</p>
   */
  AlgorithmArn: string | undefined;
}

export namespace CreateAlgorithmOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlgorithmOutput): any => ({
    ...obj,
  });
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
   */
  InstanceType?: AppInstanceType | string;
}

export namespace ResourceSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSpec): any => ({
    ...obj,
  });
}

export interface CreateAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app. Supported apps are <code>JupyterServer</code> and
   *         <code>KernelGateway</code>. <code>TensorBoard</code> is not supported.</p>
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
   */
  ResourceSpec?: ResourceSpec;
}

export namespace CreateAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
}

export interface CreateAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;
}

export namespace CreateAppResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Resource being accessed is in use.</p>
 */
export interface ResourceInUse extends __SmithyException, $MetadataBearer {
  name: "ResourceInUse";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUse): any => ({
    ...obj,
  });
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
   * <p>The KernelGatewayImageConfig.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export namespace CreateAppImageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface CreateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

export namespace CreateAppImageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppImageConfigResponse): any => ({
    ...obj,
  });
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
  Properties?: { [key: string]: string };

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to apply to the artifact.</p>
   */
  Tags?: Tag[];
}

export namespace CreateArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateArtifactRequest): any => ({
    ...obj,
  });
}

export interface CreateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export namespace CreateArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateArtifactResponse): any => ({
    ...obj,
  });
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

export namespace ModelDeployConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDeployConfig): any => ({
    ...obj,
  });
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
   *          is a named input source. Similar to <code>InputDataConfig</code> supported by . Format(s) supported: CSV. Minimum
   *          of 500 rows.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Provides information about encryption and the Amazon S3 output path needed to store artifacts
   *          from an AutoML job. Format(s) supported: CSV.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Defines the type of supervised learning available for the candidates. Options include:
   *             <code>BinaryClassification</code>, <code>MulticlassClassification</code>, and
   *             <code>Regression</code>. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development-problem-types.html">
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
   * <p>Contains <code>CompletionCriteria</code> and <code>SecurityConfig</code> settings for
   *          the AutoML job.</p>
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

export namespace CreateAutoMLJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface CreateAutoMLJobResponse {
  /**
   * <p>The unique ARN assigned to the AutoML job when it is created.</p>
   */
  AutoMLJobArn: string | undefined;
}

export namespace CreateAutoMLJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAutoMLJobResponse): any => ({
    ...obj,
  });
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
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface CreateCodeRepositoryOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace CreateCodeRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCodeRepositoryOutput): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TensorFlow</code>: You must specify the name and shape (NHWC format) of
   *                     the expected data inputs using a dictionary format for your trained model. The
   *                     dictionary formats required for the console and CLI are different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input\":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"data1": [1,28,28,1],
   *                                         "data2":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"data1\": [1,28,28,1],
   *                                         \"data2\":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KERAS</code>: You must specify the name and shape (NCHW format) of
   *                     expected data inputs using a dictionary format for your trained model. Note that
   *                     while Keras model artifacts should be uploaded in NHWC (channel-last) format,
   *                         <code>DataInputConfig</code> should be specified in NCHW (channel-first)
   *                     format. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input_1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input_1\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input_1": [1,3,224,224],
   *                                         "input_2":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input_1\": [1,3,224,224],
   *                                         \"input_2\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MXNET/ONNX/DARKNET</code>: You must specify the name and shape (NCHW format) of
   *                     the expected data inputs in order using a dictionary format for your trained
   *                     model. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"data":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"data\":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"var1": [1,1,28,28],
   *                                         "var2":[1,1,28,28]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"var1\": [1,1,28,28],
   *                                         \"var2\":[1,1,28,28]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PyTorch</code>: You can either specify the name and shape (NCHW format)
   *                     of expected data inputs in order using a dictionary format for your trained
   *                     model or you can specify the shape only using a list format. The dictionary
   *                     formats required for the console and CLI are different. The list formats for the
   *                     console and CLI are the same.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input0":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input0\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for one input in list format:
   *                             <code>[[1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input0":[1,3,224,224],
   *                                         "input1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input0\":[1,3,224,224],
   *                                         \"input1\":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for two inputs in list format: <code>[[1,3,224,224],
   *                                 [1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>XGBOOST</code>: input data name and shape are not needed.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>DataInputConfig</code> supports the following parameters for <code>CoreML</code>
   *             <a>OutputConfig$TargetDevice</a> (ML Model format):</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>shape</code>: Input shape, for example <code>{"input_1": {"shape": [1,224,224,3]}}</code>.
   *                     In addition to static input shapes, CoreML converter supports Flexible input shapes:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Range Dimension. You can use the Range Dimension feature if you know the input shape
   *                             will be within some specific interval in that dimension,
   *                             for example: <code>{"input_1": {"shape": ["1..10", 224, 224, 3]}}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Enumerated shapes. Sometimes, the models are trained to work only on a select
   *                             set of inputs. You can enumerate all supported input shapes,
   *                             for example: <code>{"input_1": {"shape": [[1, 224, 224, 3], [1, 160, 160, 3]]}}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>default_shape</code>: Default input shape. You can set a default shape during
   *                     conversion for both Range Dimension and Enumerated Shapes. For example
   *                     <code>{"input_1": {"shape": ["1..10", 224, 224, 3], "default_shape": [1, 224, 224, 3]}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code>: Input type. Allowed values: <code>Image</code> and <code>Tensor</code>.
   *                     By default, the converter generates an ML Model with inputs of type Tensor (MultiArray).
   *                     User can set input type to be Image. Image input type requires additional input parameters
   *                     such as <code>bias</code> and <code>scale</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bias</code>: If the input type is an Image, you need to provide the bias vector.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>scale</code>: If the input type is an Image, you need to provide a scale factor.</p>
   *             </li>
   *          </ul>
   *         <p>CoreML <code>ClassifierConfig</code> parameters can be specified using
   *             <a>OutputConfig$CompilerOptions</a>. CoreML converter supports Tensorflow and PyTorch models.
   *             CoreML conversion examples:</p>
   *         <ul>
   *             <li>
   *                 <p>Tensor type input:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3]}}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Tensor type input without input name (PyTorch):</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224]}]</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Image type input:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Image type input without input name (PyTorch):</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}]</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>Depending on the model format, <code>DataInputConfig</code> requires the following parameters for
   *             <code>ml_eia2</code>
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-TargetDevice">OutputConfig:TargetDevice</a>.</p>
   *         <ul>
   *             <li>
   *                <p>For TensorFlow models saved in the SavedModel format, specify the input names
   *                 from <code>signature_def_key</code> and the input model shapes for <code>DataInputConfig</code>.
   *                 Specify the <code>signature_def_key</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a> if
   *                 the model does not use TensorFlow's default signature def key. For example:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"inputs": [1, 224, 224, 3]}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"signature_def_key": "serving_custom"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For TensorFlow models saved as a frozen graph, specify the input tensor names and shapes
   *                 in <code>DataInputConfig</code> and the output tensor names for <code>output_names</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a>.
   *                 For example:</p>
   *                 <ul>
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
   * <p>Specifies the framework version to use.</p>
   *         <p>This API field is only supported for PyTorch framework versions <code>1.4</code>,
   *             <code>1.5</code>, and <code>1.6</code> for
   *             cloud instance target devices: <code>ml_c4</code>, <code>ml_c5</code>, <code>ml_m4</code>,
   *             <code>ml_m5</code>, <code>ml_p2</code>, <code>ml_p3</code>, and <code>ml_g4dn</code>.</p>
   */
  FrameworkVersion?: string;
}

export namespace InputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfig): any => ({
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
   *         <p>The following examples show how to configure the <code>TargetPlatform</code> and
   *                 <code>CompilerOptions</code> JSON strings for popular target platforms: </p>
   *         <ul>
   *             <li>
   *                 <p>Raspberry Pi 3 Model B+</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM_EABIHF"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'mattr': ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Jetson TX2</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'gpu-code': 'sm_62', 'trt-ver': '6.0.1',
   *                         'cuda-ver': '10.0'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>EC2 m5.2xlarge instance OS</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "X86_64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'mcpu': 'skylake-avx512'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>RK3399</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "MALI"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv7 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM_EABI"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'ANDROID_PLATFORM': 25, 'mattr':
   *                     ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv8 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM64"},</code>
   *                </p>
   *                 <p>
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DTYPE</code>: Specifies the data type for the input. When compiling for
   *                     <code>ml_*</code> (except for <code>ml_inf</code>) instances using PyTorch
   *                     framework, provide the data type (dtype) of the model's input.
   *                         <code>"float32"</code> is used if <code>"DTYPE"</code> is not specified.
   *                     Options for data type are:</p>
   *                 <ul>
   *                   <li>
   *                      <p>float32: Use either <code>"float"</code> or <code>"float32"</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>int64: Use either <code>"int64"</code> or <code>"long"</code>.</p>
   *                   </li>
   *                </ul>
   *                 <p> For example, <code>{"dtype" : "float32"}</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CPU</code>: Compilation for CPU supports the following compiler
   *                     options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>mcpu</code>: CPU micro-architecture. For example, <code>{'mcpu':
   *                                 'skylake-avx512'}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon',
   *                                 '+vfpv4']}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ARM</code>: Details of ARM CPU compilations.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>NEON</code>: NEON is an implementation of the Advanced SIMD
   *                             extension used in ARMv7 processors.</p>
   *                         <p>For example, add <code>{'mattr': ['+neon']}</code> to the compiler
   *                             options if compiling for ARM 32-bit platform with the NEON
   *                             support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NVIDIA</code>: Compilation for NVIDIA GPU supports the following
   *                     compiler options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>gpu_code</code>: Specifies the targeted architecture.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>trt-ver</code>: Specifies the TensorRT versions in x.y.z.
   *                             format.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>cuda-ver</code>: Specifies the CUDA version in x.y
   *                             format.</p>
   *                     </li>
   *                </ul>
   *                 <p>For example, <code>{'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver':
   *                         '10.1'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ANDROID</code>: Compilation for the Android OS supports the following
   *                     compiler options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>ANDROID_PLATFORM</code>: Specifies the Android API levels.
   *                             Available levels range from 21 to 29. For example,
   *                                 <code>{'ANDROID_PLATFORM': 28}</code>.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: Add <code>{'mattr': ['+neon']}</code> to compiler
   *                             options if compiling for ARM 32-bit platform with NEON support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>INFERENTIA</code>: Compilation for target ml_inf1 uses compiler options
   *                     passed in as a JSON string. For example,
   *                     <code>"CompilerOptions": "\"--verbose 1 --num-neuroncores 2 -O2\""</code>.
   *                 </p>
   *                 <p>For information about supported compiler options, see
   *                     <a href="https://github.com/aws/aws-neuron-sdk/blob/master/docs/neuron-cc/command-line-reference.md">
   *                         Neuron Compiler CLI</a>.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CoreML</code>: Compilation for the CoreML <a>OutputConfig$TargetDevice</a>
   *                     supports the following compiler options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>class_labels</code>: Specifies the classification labels file
   *                             name inside input tar.gz file. For example,
   *                                 <code>{"class_labels": "imagenet_labels_1000.txt"}</code>.
   *                             Labels inside the txt file should be separated by newlines.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EIA</code>: Compilation for the Elastic Inference Accelerator supports the following
   *                     compiler options:</p>
   *                 <ul>
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
   *                 <p>For example:
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
   *         </p>
   * 	        <p>The KmsKeyId can be any of the following formats: </p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
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
  KmsKeyId?: string;
}

export namespace OutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj,
  });
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

export namespace NeoVpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NeoVpcConfig): any => ({
    ...obj,
  });
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
   *         <p>During model compilation, Amazon SageMaker needs your permission to:</p>
   *         <ul>
   *             <li>
   *                 <p>Read input data from an S3 bucket</p>
   *             </li>
   *             <li>
   *                 <p>Write model artifacts to an S3 bucket</p>
   *             </li>
   *             <li>
   *                 <p>Write logs to Amazon CloudWatch Logs</p>
   *             </li>
   *             <li>
   *                 <p>Publish metrics to Amazon CloudWatch</p>
   *             </li>
   *          </ul>
   *         <p>You grant permissions for all of these tasks to an IAM role. To pass this role to
   *             Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles.</a>
   *          </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides information about the location of input model artifacts, the name and shape
   *             of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig: InputConfig | undefined;

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

export namespace CreateCompilationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCompilationJobRequest): any => ({
    ...obj,
  });
}

export interface CreateCompilationJobResponse {
  /**
   * <p>If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns
   *             the following data in JSON format:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CompilationJobArn</code>: The Amazon Resource Name (ARN) of the compiled
   *                     job.</p>
   *             </li>
   *          </ul>
   */
  CompilationJobArn: string | undefined;
}

export namespace CreateCompilationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCompilationJobResponse): any => ({
    ...obj,
  });
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
  Properties?: { [key: string]: string };

  /**
   * <p>A list of tags to apply to the context.</p>
   */
  Tags?: Tag[];
}

export namespace CreateContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContextRequest): any => ({
    ...obj,
  });
}

export interface CreateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export namespace CreateContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContextResponse): any => ({
    ...obj,
  });
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
  Environment?: { [key: string]: string };
}

export namespace DataQualityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityAppSpecification): any => ({
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

export namespace DataQualityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityBaselineConfig): any => ({
    ...obj,
  });
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
   *          transfering data for the monitoring job. <code>Pipe</code> mode is recommended for large
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
 * <p>The input for the data quality monitoring job. Currently endpoints are supported for
 *          input.</p>
 */
export interface DataQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace DataQualityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityJobInput): any => ({
    ...obj,
  });
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

export namespace MonitoringOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringOutputConfig): any => ({
    ...obj,
  });
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

export namespace MonitoringClusterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringClusterConfig): any => ({
    ...obj,
  });
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

export namespace MonitoringResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringResources): any => ({
    ...obj,
  });
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

export namespace MonitoringNetworkConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringNetworkConfig): any => ({
    ...obj,
  });
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

export namespace MonitoringStoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringStoppingCondition): any => ({
    ...obj,
  });
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

export namespace CreateDataQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   */
  JobDefinitionArn: string | undefined;
}

export namespace CreateDataQualityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataQualityJobDefinitionResponse): any => ({
    ...obj,
  });
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

export namespace EdgeOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeOutputConfig): any => ({
    ...obj,
  });
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

export namespace CreateDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceFleetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The JupyterServer app settings.</p>
 */
export interface JupyterServerAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
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
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A list of custom SageMaker images that are configured to run as a KernelGateway app.</p>
   */
  CustomImages?: CustomImage[];
}

export namespace KernelGatewayAppSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelGatewayAppSettings): any => ({
    ...obj,
  });
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
}

export namespace UserSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
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
   * <p>This member is deprecated and replaced with <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>SageMaker uses Amazon Web Services KMS to encrypt the EFS volume attached to the domain with an Amazon Web Services managed
   *          customer master key (CMK) by default. For more control, specify a customer managed CMK.</p>
   */
  KmsKeyId?: string;
}

export namespace CreateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
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

export namespace CreateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj,
  });
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
   * <p>The CMK to use when encrypting the EBS volume the edge packaging job runs on.</p>
   */
  ResourceKey?: string;

  /**
   * <p>Creates tags for the packaging job.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEdgePackagingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEdgePackagingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateEndpointInput {
  /**
   * <p>The name of the endpoint.The name must be unique within an Amazon Web Services Region in your Amazon Web Services
   *             account. The name is case-insensitive in <code>CreateEndpoint</code>, but the case is
   *             preserved and must be matched in .</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of an endpoint configuration. For more information, see <a>CreateEndpointConfig</a>. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointInput): any => ({
    ...obj,
  });
}

export interface CreateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace CreateEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointOutput): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DataCaptureConfig {
  /**
   * <p></p>
   */
  EnableCapture?: boolean;

  /**
   * <p></p>
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * <p></p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p></p>
   */
  KmsKeyId?: string;

  /**
   * <p></p>
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * <p></p>
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
}

export namespace DataCaptureConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCaptureConfig): any => ({
    ...obj,
  });
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
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the core dump data at rest using
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
   *         <p>If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side
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
 * <p>Identifies a model that you want to host and the resources chosen to deploy for
 *             hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic
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
  InitialInstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

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
}

export namespace ProductionVariant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariant): any => ({
    ...obj,
  });
}

export interface CreateEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration. You specify this name in a <a>CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An list of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that Amazon SageMaker uses to encrypt data on
   *             the storage volume attached to the ML compute instance that hosts the endpoint.</p>
   *         <p>The KmsKeyId can be any of the following formats: </p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
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
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code>, <code>UpdateEndpoint</code> requests. For more
   *             information, refer to the Amazon Web Services Key Management Service section<a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"> Using Key
   *                 Policies in Amazon Web Services KMS </a>
   *          </p>
   *         <note>
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
   *         </note>
   */
  KmsKeyId?: string;
}

export namespace CreateEndpointConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface CreateEndpointConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration. </p>
   */
  EndpointConfigArn: string | undefined;
}

export namespace CreateEndpointConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointConfigOutput): any => ({
    ...obj,
  });
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

export namespace CreateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentRequest): any => ({
    ...obj,
  });
}

export interface CreateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace CreateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentResponse): any => ({
    ...obj,
  });
}

export enum FeatureType {
  FRACTIONAL = "Fractional",
  INTEGRAL = "Integral",
  STRING = "String",
}

/**
 * <p>A list of features. You must include <code>FeatureName</code> and
 *             <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are
 *             <code>Integral</code>, <code>Fractional</code> and <code>String</code>. </p>
 */
export interface FeatureDefinition {
  /**
   * <p>The name of a feature. The type must be a string. <code>FeatureName</code> cannot be any
   *          of the following: <code>is_deleted</code>, <code>write_time</code>,
   *             <code>api_invocation_time</code>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The value type of a feature. Valid values are Integral, Fractional, or String.</p>
   */
  FeatureType?: FeatureType | string;
}

export namespace FeatureDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureDefinition): any => ({
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
 * <p>The configuration of an <code>OfflineStore</code>.</p>
 *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
 *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
 *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key
 *          Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
 *          <code>S3StorageConfig</code>.</p>
 */
export interface OfflineStoreConfig {
  /**
   * <p>The Amazon Simple Storage (Amazon S3) location of <code>OfflineStore</code>.</p>
   */
  S3StorageConfig: S3StorageConfig | undefined;

  /**
   * <p>Set to <code>True</code> to disable the automatic creation of an Amazon Web Services Glue table when
   *        configuring an <code>OfflineStore</code>.</p>
   */
  DisableGlueTableCreation?: boolean;

  /**
   * <p>The meta data of the Glue table that is autogenerated when an <code>OfflineStore</code>
   *          is created. </p>
   */
  DataCatalogConfig?: DataCatalogConfig;
}

export namespace OfflineStoreConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OfflineStoreConfig): any => ({
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
 * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
 *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
 *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
 *          at General Assembly; the default value is <code>False</code>.</p>
 */
export interface OnlineStoreConfig {
  /**
   * <p>Use to specify KMS Key ID (<code>KMSKeyId</code>) for at-rest encryption of your
   *             <code>OnlineStore</code>.</p>
   */
  SecurityConfig?: OnlineStoreSecurityConfig;

  /**
   * <p>Turn <code>OnlineStore</code> off by specifying <code>False</code>
   *       for the <code>EnableOnlineStore</code> flag. Turn <code>OnlineStore</code>
   *       on by specifying <code>True</code>
   *       for the <code>EnableOnlineStore</code> flag. </p>
   *          <p>The default value is <code>False</code>.</p>
   */
  EnableOnlineStore?: boolean;
}

export namespace OnlineStoreConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnlineStoreConfig): any => ({
    ...obj,
  });
}

export interface CreateFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code>. The name must be unique within an Amazon Web Services Region
   *          in an Amazon Web Services account. The name:</p>
   *          <ul>
   *             <li>
   *                <p>Must start and end with an alphanumeric character.</p>
   *             </li>
   *             <li>
   *                <p>Can only contain alphanumeric character and hyphens. Spaces are not allowed.
   *             </p>
   *             </li>
   *          </ul>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *             <code>Record</code> defined in the <code>FeatureStore</code>. Only the latest record per
   *          identifier value will be stored in the <code>OnlineStore</code>.
   *             <code>RecordIdentifierFeatureName</code> must be one of feature definitions'
   *          names.</p>
   *          <p>You use the <code>RecordIdentifierFeatureName</code> to access data in a
   *             <code>FeatureStore</code>.</p>
   *          <p>This name:</p>
   *          <ul>
   *             <li>
   *                <p>Must start and end with an alphanumeric character.</p>
   *             </li>
   *             <li>
   *                <p>Can only contains alphanumeric characters, hyphens, underscores. Spaces are not
   *                allowed. </p>
   *             </li>
   *          </ul>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a <code>Record</code>
   *          in a <code>FeatureGroup</code>.</p>
   *          <p>An <code>EventTime</code> is a point in time when a new event occurs that corresponds to
   *          the creation or update of a <code>Record</code> in a <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> must have a corresponding
   *             <code>EventTime</code>.</p>
   *          <p>An <code>EventTime</code> can be a <code>String</code> or <code>Fractional</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Fractional</code>: <code>EventTime</code> feature values must be a Unix
   *                timestamp in seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>String</code>: <code>EventTime</code> feature values must be an ISO-8601
   *                string in the format. The following formats are supported
   *                   <code>yyyy-MM-dd'T'HH:mm:ssZ</code> and <code>yyyy-MM-dd'T'HH:mm:ss.SSSZ</code>
   *                where <code>yyyy</code>, <code>MM</code>, and <code>dd</code> represent the year,
   *                month, and day respectively and <code>HH</code>, <code>mm</code>, <code>ss</code>,
   *                and if applicable, <code>SSS</code> represent the hour, month, second and
   *                milliseconds respsectively. <code>'T'</code> and <code>Z</code> are constants.</p>
   *             </li>
   *          </ul>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of <code>Feature</code> names and types. <code>Name</code> and <code>Type</code>
   *          is compulsory per <code>Feature</code>. </p>
   *          <p>Valid feature <code>FeatureType</code>s are <code>Integral</code>,
   *             <code>Fractional</code> and <code>String</code>.</p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>
   *          </p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>You can turn the <code>OnlineStore</code> on or off by specifying <code>True</code> for
   *          the <code>EnableOnlineStore</code> flag in <code>OnlineStoreConfig</code>; the default
   *          value is <code>False</code>.</p>
   *          <p>You can also include an Amazon Web Services KMS key ID (<code>KMSKeyId</code>) for at-rest encryption of
   *          the <code>OnlineStore</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>Use this to configure an <code>OfflineFeatureStore</code>. This parameter allows you to
   *          specify:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon Simple Storage Service (Amazon S3) location of an
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data cataolgue. </p>
   *             </li>
   *             <li>
   *                <p>An KMS encryption key to encrypt the Amazon S3 location used for
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn more about this parameter, see <a>OfflineStoreConfig</a>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *             <code>OfflineStore</code> if an <code>OfflineStoreConfig</code> is provided.</p>
   */
  RoleArn?: string;

  /**
   * <p>A free-form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * <p>Tags used to identify <code>Features</code> in each <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFeatureGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFeatureGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>. This is a unique
   *          identifier for the feature group. </p>
   */
  FeatureGroupArn: string | undefined;
}

export namespace CreateFeatureGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFeatureGroupResponse): any => ({
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
 * <p>Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.</p>
 */
export interface HumanLoopActivationConfig {
  /**
   * <p>Container structure for defining under what conditions SageMaker creates a human
   *          loop.</p>
   */
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig | undefined;
}

export namespace HumanLoopActivationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopActivationConfig): any => ({
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
 * <p>Describes the work to be performed by human workers.</p>
 */
export interface HumanLoopConfig {
  /**
   * <p>Amazon Resource Name (ARN) of a team of workers. To learn more about the types of
   *          workforces and work teams you can create and use with Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html">Create
   *             and Manage Workforces</a>.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   *          <p>You can use standard HTML and Crowd HTML Elements to create a custom worker task
   *          template. You use this template to create a human task UI.</p>
   *          <p>To learn how to create a custom HTML template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html">Create Custom Worker
   *             Task Template</a>.</p>
   *          <p>To learn how to create a human task UI, which is a worker task template that can be used
   *          in a flow definition, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-worker-template-console.html">Create and Delete a Worker Task Templates</a>.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A title for the human worker task.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description for the human worker task.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of distinct workers who will perform the same task on each object.
   *       For example, if <code>TaskCount</code> is set to <code>3</code> for an image classification
   *       labeling job, three workers will classify each input image.
   *       Increasing <code>TaskCount</code> can improve label accuracy.</p>
   */
  TaskCount: number | undefined;

  /**
   * <p>The length of time that a task remains available for review by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>The amount of time that a worker has to complete a task. The default value is 3,600
   *          seconds (1 hour).</p>
   */
  TaskTimeLimitInSeconds?: number;

  /**
   * <p>Keywords used to describe the task so that workers can discover the task.</p>
   */
  TaskKeywords?: string[];

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
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

export namespace HumanLoopConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Container for configuring the source of human task requests.</p>
 */
export interface HumanLoopRequestSource {
  /**
   * <p>Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source.
   *       The default field settings and JSON parsing rules are different based on the integration source. Valid values:</p>
   */
  AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource | string | undefined;
}

export namespace HumanLoopRequestSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopRequestSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about where human output will be stored.</p>
 */
export interface FlowDefinitionOutputConfig {
  /**
   * <p>The Amazon S3 path where the object containing human output will be made available.</p>
   *          <p>To learn more about the format of Amazon A2I output data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-output-data.html">Amazon A2I
   *             Output Data</a>.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

export namespace FlowDefinitionOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinitionOutputConfig): any => ({
    ...obj,
  });
}

export interface CreateFlowDefinitionRequest {
  /**
   * <p>The name of your flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Use to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about the events that trigger a human workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about the tasks the human reviewers will perform.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about where the human review results will be uploaded.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, <code>arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFlowDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition you create.</p>
   */
  FlowDefinitionArn: string | undefined;
}

export namespace CreateFlowDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Liquid template for the worker user interface.</p>
 */
export interface UiTemplate {
  /**
   * <p>The content of the Liquid template for the worker user interface.</p>
   */
  Content: string | undefined;
}

export namespace UiTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiTemplate): any => ({
    ...obj,
  });
}

export interface CreateHumanTaskUiRequest {
  /**
   * <p>The name of the user interface you are creating.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Liquid template for the worker user interface.</p>
   */
  UiTemplate: UiTemplate | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHumanTaskUiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export interface CreateHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human review workflow user interface you create.</p>
   */
  HumanTaskUiArn: string | undefined;
}

export namespace CreateHumanTaskUiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHumanTaskUiResponse): any => ({
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
   *                     <p>Amazon SageMaker hyperparameter tuning chooses the best scale for the
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

export enum HyperParameterTuningJobStrategyType {
  BAYESIAN = "Bayesian",
  RANDOM = "Random",
}

export enum TrainingJobEarlyStoppingType {
  AUTO = "Auto",
  OFF = "Off",
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
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. To use the Bayesian search strategy, set this
   *             to <code>Bayesian</code>. To randomly search, set it to <code>Random</code>. For
   *             information about search strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the
   *             objective
   *             metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the
   *             maximum
   *             number of training jobs and parallel training jobs for this tuning
   *             job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of
   *             hyperparameters
   *             that this tuning job searches.</p>
   */
  ParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies whether to use early stopping for training jobs launched by the
   *             hyperparameter tuning job. This can be one of the following values (the default value is
   *                 <code>OFF</code>):</p>
   *         <dl>
   *             <dt>OFF</dt>
   *             <dd>
   *                     <p>Training jobs launched by the hyperparameter tuning job do not use early
   *                         stopping.</p>
   *                 </dd>
   *             <dt>AUTO</dt>
   *             <dd>
   *                     <p>Amazon SageMaker stops training jobs launched by the hyperparameter tuning job when
   *                         they are unlikely to perform better than previously completed training jobs.
   *                         For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p>
   *                 </dd>
   *          </dl>
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType | string;

  /**
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}

export namespace HyperParameterTuningJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobConfig): any => ({
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
   *                 Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The input mode that the algorithm supports:
   *             File
   *             or Pipe. In File input mode, Amazon SageMaker downloads the training data from
   *             Amazon S3 to the
   *             storage
   *             volume that is attached to the training instance and mounts the directory to the Docker
   *             volume for the training container. In Pipe input mode, Amazon SageMaker streams
   *             data directly from Amazon S3 to the container. </p>
   *         <p>If you specify File mode, make sure that
   *             you
   *             provision the storage volume that is attached to the training instance with enough
   *             capacity to accommodate the training data downloaded from Amazon S3, the model artifacts, and
   *             intermediate
   *             information.</p>
   *         <p></p>
   *         <p>For more information about input modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
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
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

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
  HyperParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: { [key: string]: string };

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <a>Channel</a> objects that specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The <a>VpcConfig</a> object that
   *             specifies
   *             the VPC that you want the training jobs that this hyperparameter
   *             tuning job launches to connect to. Control access to and from your
   *             training
   *             container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you
   *             store
   *             model artifacts from the training jobs that the tuning job
   *             launches.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources,
   *             including
   *             the compute instances and storage volumes, to use for the training
   *             jobs that the tuning job launches.</p>
   *         <p>Storage
   *             volumes store model artifacts and
   *             incremental
   *             states. Training algorithms might also use storage volumes for
   *             scratch
   *             space. If you want Amazon SageMaker to use the storage volume
   *             to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long a managed spot training job has to complete. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
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
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;
}

export namespace HyperParameterTrainingJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobDefinition): any => ({
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

export enum HyperParameterTuningJobWarmStartType {
  IDENTICAL_DATA_AND_ALGORITHM = "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING = "TransferLearning",
}

/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
 *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
 *             jobs are used to inform which combinations of hyperparameters to search over in the new
 *             tuning job.</p>
 *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
 *             the objective metric, and the training job that performs the best is compared to the
 *             best training jobs from the parent tuning jobs. From these, the training job that
 *             performs the best as measured by the objective metric is returned as the overall best
 *             training job.</p>
 *         <note>
 *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
 *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
 *                 job.</p>
 *         </note>
 */
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new
   *             hyperparameter tuning job. For more information about warm starting a hyperparameter
   *             tuning job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous
   *                 Hyperparameter Tuning Job as a Starting Point</a>.</p>
   *         <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent
   *             jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * <p>Specifies one of the following:</p>
   *         <dl>
   *             <dt>IDENTICAL_DATA_AND_ALGORITHM</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job uses the same input data and training
   *                         image as the parent tuning jobs. You can change the hyperparameter ranges to
   *                         search and the maximum number of training jobs that the hyperparameter
   *                         tuning job launches. You cannot use a new version of the training algorithm,
   *                         unless the changes in the new version do not affect the algorithm itself.
   *                         For example, changes that improve logging or adding support for a different
   *                         data format are allowed. You can also change hyperparameters from tunable to
   *                         static, and from static to tunable, but the total number of static plus
   *                         tunable hyperparameters must remain the same as it is in all parent jobs.
   *                         The objective metric for the new tuning job must be the same as for all
   *                         parent jobs.</p>
   *                 </dd>
   *             <dt>TRANSFER_LEARNING</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job can include input data, hyperparameter
   *                         ranges, maximum number of concurrent training jobs, and maximum number of
   *                         training jobs that are different than those of its parent hyperparameter
   *                         tuning jobs. The training image can also be a different version from the
   *                         version used in the parent hyperparameter tuning job. You can also change
   *                         hyperparameters from tunable to static, and from static to tunable, but the
   *                         total number of static plus tunable hyperparameters must remain the same as
   *                         it is in all parent jobs. The objective metric for the new tuning job must
   *                         be the same as for all parent jobs.</p>
   *                 </dd>
   *          </dl>
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | string | undefined;
}

export namespace HyperParameterTuningJobWarmStartConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobWarmStartConfig): any => ({
    ...obj,
  });
}

export interface CreateHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job. This name is the prefix for the names of all training jobs
   *             that this tuning job launches. The name must be unique within the same Amazon Web Services account and
   *             Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9,
   *             and : + = @ _ % - (hyphen). The name is not case sensitive.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that describes the tuning
   *             job, including the search strategy, the objective metric used to evaluate training jobs,
   *             ranges of parameters to search, and resource limits for the tuning job. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that describes the
   *             training jobs that this tuning job launches,
   *             including
   *             static hyperparameters, input data configuration, output data configuration, resource
   *             configuration, and stopping condition.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>Specifies the configuration for starting the hyperparameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric. If you specify <code>IDENTICAL_DATA_AND_ALGORITHM</code> as the
   *                 <code>WarmStartType</code> value for the warm start configuration, the training job
   *             that performs the best in the new tuning job is compared to the best training jobs from
   *             the parent tuning jobs. From these, the training job that performs the best as measured
   *             by the objective metric is returned as the overall best training job.</p>
   *         <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *         </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   *         <p>Tags that you specify for the tuning job are also added to all training jobs that the
   *             tuning job launches.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

export interface CreateHyperParameterTuningJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job. Amazon SageMaker assigns an ARN to a
   *             hyperparameter tuning job when you create it.</p>
   */
  HyperParameterTuningJobArn: string | undefined;
}

export namespace CreateHyperParameterTuningJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface CreateImageRequest {
  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The display name of the image. If not provided, <code>ImageName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the image. Must be unique to your account.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of tags to apply to the image.</p>
   */
  Tags?: Tag[];
}

export namespace CreateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
}

export interface CreateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export namespace CreateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageResponse): any => ({
    ...obj,
  });
}

export interface CreateImageVersionRequest {
  /**
   * <p>The registry path of the container image to use as the starting point for this
   *         version. The path is an Amazon Container Registry (ECR) URI in the following format:</p>
   *          <p>
   *             <code><acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]></code>
   *          </p>
   */
  BaseImage: string | undefined;

  /**
   * <p>A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python
   *         (Boto3), add a unique value to the call.</p>
   */
  ClientToken?: string;

  /**
   * <p>The <code>ImageName</code> of the <code>Image</code> to create a version of.</p>
   */
  ImageName: string | undefined;
}

export namespace CreateImageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateImageVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image version.</p>
   */
  ImageVersionArn?: string;
}

export namespace CreateImageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageVersionResponse): any => ({
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
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *         <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in
   *                 task types</a>, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>PreHumanTaskLambdaArn</code>. For custom labeling workflows, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda">Pre-annotation Lambda</a>. </p>
   *
   *
   *
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *           <p>
   *             <b>Image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true classes of an image based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Text classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label text classification</b> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true classes of text based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Named entity recognition</b> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Modalities</b>
   *          </p>
   *         <p>Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks.
   *             See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html">3D Point Cloud Task types
   *             </a> to learn more. </p>
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> -
   *         Use this task type when you want workers to classify objects in a 3D point cloud by
   *         drawing 3D cuboids around objects. For example, you can use this task type to ask workers
   *         to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.</p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> -
   *         Use this task type when you want workers to draw 3D cuboids around objects
   *         that appear in a sequence of 3D point cloud frames.
   *         For example, you can use this task type to ask workers to track
   *         the movement of vehicles across multiple point cloud frames.
   *         </p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> -
   *             Use this task type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned to one of
   *             the classes you specify.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *             <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *                 Expectation Maximization approach to estimate the true class of verification
   *                 judgement for bounding box labels based on annotations from individual
   *                 workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgment for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D point cloud object detection adjustment</b> - Adjust
   *             3D cuboids in a point cloud frame. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud object tracking adjustment</b> - Adjust 3D
   *             cuboids across a sequence of point cloud frames. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> -
   *             Adjust semantic segmentation masks in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>The amount of time that a worker has to complete a task. </p>
   *         <p>If you create a custom labeling job, the maximum value for this parameter is 8 hours
   *             (28,800 seconds).</p>
   *         <p>If you create a labeling job using a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task type</a> the maximum
   *             for this parameter depends on the task type you use:</p>
   *         <ul>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html">image</a> and
   *                     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html">text</a> labeling jobs,
   *                     the maximum is 8 hours (28,800 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html">3D point cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html">video frame</a> labeling jobs,
   *                     the maximum is 7 days (604,800 seconds). If you want to change these limits,
   *                     contact Amazon Web Services Support.</p>
   *             </li>
   *          </ul>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>The length of time that a task remains available for labeling by human workers. The
   *             default and maximum values for this parameter depend on the type of workforce you
   *             use.</p>
   *         <ul>
   *             <li>
   *                 <p>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds).
   *                     The default is 6 hours (21,600 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>If you choose a private or vendor workforce, the default value is 10 days
   *                     (864,000 seconds). For most users, the maximum is also 10 days. If you want to
   *                     change this limit, contact Amazon Web Services Support.</p>
   *             </li>
   *          </ul>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

export namespace HumanTaskConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanTaskConfig): any => ({
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
   *             content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
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
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;
}

export namespace LabelingJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
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
   *             You cannot specify an Amazon Web Services KMS customer managed CMK to encrypt the storage volume used for
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
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Image classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Text classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Object detection</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Semantic Segmentation</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * <p>At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

export namespace LabelingJobAlgorithmsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobAlgorithmsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you provide your own KMS key ID, you must add the required permissions to your KMS
   *             key described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions">Encrypt Output Data and Storage Volume with Amazon Web Services KMS</a>.</p>
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your
   *             role's account to encrypt your output data.</p>
   *         <p>If you use a bucket policy with an <code>s3:PutObject</code> permission that only
   *             allows objects with server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a <code>SnsTopicArn</code> if you want to
   *             do real time chaining to another streaming job and receive an Amazon SNS notifications each
   *             time a data object is submitted by a worker.</p>
   *          <p>If you provide an <code>SnsTopicArn</code> in <code>OutputConfig</code>, when workers
   *             complete labeling tasks, Ground Truth will send labeling task output data to the SNS output
   *             topic you specify here. </p>
   *         <p>To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data">Receive Output Data from a Streaming Labeling
   *                 Job</a>. </p>
   */
  SnsTopicArn?: string;
}

export namespace LabelingJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *         <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *         </note>
 */
export interface LabelingJobStoppingConditions {
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export namespace LabelingJobStoppingConditions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobStoppingConditions): any => ({
    ...obj,
  });
}

export interface CreateLabelingJobRequest {
  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region.
   *                 <code>LabelingJobName</code> is not case sensitive. For example, Example-job and
   *             example-job are considered the same labeling job name by Ground Truth.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *                 <code>LabelAttributeName</code> must meet the following requirements.</p>
   *         <ul>
   *             <li>
   *                 <p>The name can't end with "-metadata". </p>
   *             </li>
   *             <li>
   *                 <p>If you are using one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>,
   *                     the attribute name <i>must</i> end with "-ref". If the task type
   *                     you are using is not listed below, the attribute name <i>must
   *                         not</i> end with "-ref".</p>
   *                 <ul>
   *                   <li>
   *                         <p>Image semantic segmentation (<code>SemanticSegmentation)</code>, and
   *                             adjustment (<code>AdjustmentSemanticSegmentation</code>) and
   *                             verification (<code>VerificationSemanticSegmentation</code>) labeling
   *                             jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object detection (<code>VideoObjectDetection</code>), and
   *                             adjustment and verification
   *                             (<code>AdjustmentVideoObjectDetection</code>) labeling jobs for this
   *                             task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object tracking (<code>VideoObjectTracking</code>), and
   *                             adjustment and verification (<code>AdjustmentVideoObjectTracking</code>)
   *                             labeling jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud semantic segmentation
   *                                 (<code>3DPointCloudSemanticSegmentation</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudSemanticSegmentation</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud object tracking
   *                                 (<code>3DPointCloudObjectTracking</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudObjectTracking</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p></p>
   *         <important>
   *             <p>If you are creating an adjustment or verification labeling job, you must use a
   *                     <i>different</i>
   *                 <code>LabelAttributeName</code> than the one used in the original labeling job. The
   *                 original labeling job is the Ground Truth labeling job that produced the labels that you
   *                 want verified or adjusted. To learn more about adjustment and verification labeling
   *                 jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust
   *                     Labels</a>.</p>
   *         </important>
   */
  LabelAttributeName: string | undefined;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   *         <p>You must specify at least one of the following: <code>S3DataSource</code> or
   *                 <code>SnsDataSource</code>. </p>
   *         <ul>
   *             <li>
   *                 <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming
   *                     labeling job. If you do not specify and SNS input topic ARN, Ground Truth will
   *                     create a one-time labeling job that stops after all data objects in the input
   *                     manifest file have been labeled.</p>
   *             </li>
   *             <li>
   *                 <p>Use <code>S3DataSource</code> to specify an input manifest file for both
   *                     streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is
   *                     optional if you use <code>SnsDataSource</code> to create a streaming labeling
   *                     job.</p>
   *             </li>
   *          </ul>
   *         <p>If you use the Amazon Mechanical Turk workforce, your input data should not include
   *             confidential information, personal information or protected health information. Use
   *                 <code>ContentClassifiers</code> to specify that your data is free of personally
   *             identifiable information and adult content.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 URI of the file, referred to as a <i>label category configuration
   *                 file</i>, that defines the categories used to label the data objects.</p>
   *         <p>For 3D point cloud and video frame task types, you can add label category attributes
   *             and frame attributes to your label category configuration file. To learn how, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html">Create a
   *                 Labeling Category Configuration File for 3D Point Cloud Labeling Jobs</a>. </p>
   *         <p>For named entity recognition jobs, in addition to <code>"labels"</code>, you must
   *             provide worker instructions in the label category configuration file using the
   *                 <code>"instructions"</code> parameter: <code>"instructions":
   *                 {"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>",
   *                 "fullInstruction":"<p>Add additional instructions.</p>"}</code>. For details
   *             and an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-named-entity-recg.html#sms-creating-ner-api">Create a
   *                 Named Entity Recognition Labeling Job (API) </a>.</p>
   *         <p>For all other <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html">custom
   *                 tasks</a>, your label category configuration file must be a JSON file in the
   *             following format. Identify the labels you want to use by replacing <code>label_1</code>,
   *                 <code>label_2</code>,<code>...</code>,<code>label_n</code> with your label
   *             categories.</p>
   *         <p>
   *             <code>{ </code>
   *          </p>
   *         <p>
   *             <code>"document-version": "2018-11-28",</code>
   *          </p>
   *         <p>
   *             <code>"labels": [{"label": "label_1"},{"label": "label_2"},...{"label":
   *                 "label_n"}]</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   *         <p>Note the following about the label category configuration file:</p>
   *         <ul>
   *             <li>
   *                 <p>For image classification and text classification (single and multi-label) you
   *                     must specify at least two label categories. For all other task types, the
   *                     minimum number of label categories required is one. </p>
   *             </li>
   *             <li>
   *                 <p>Each label category must be unique, you cannot specify duplicate label
   *                     categories.</p>
   *             </li>
   *             <li>
   *                 <p>If you create a 3D point cloud or video frame adjustment or verification
   *                     labeling job, you must include <code>auditLabelAttributeName</code> in the label
   *                     category configuration. Use this parameter to enter the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateLabelingJob.html#sagemaker-CreateLabelingJob-request-LabelAttributeName">
   *                      <code>LabelAttributeName</code>
   *                   </a> of the labeling job you want to
   *                     adjust or verify annotations of.</p>
   *             </li>
   *          </ul>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLabelingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLabelingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateLabelingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the
   *             labeling job.</p>
   */
  LabelingJobArn: string | undefined;
}

export namespace CreateLabelingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLabelingJobResponse): any => ({
    ...obj,
  });
}

export enum InferenceExecutionMode {
  DIRECT = "Direct",
  SERIAL = "Serial",
}

/**
 * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
 */
export interface InferenceExecutionConfig {
  /**
   * <p>How containers in a multi-container are run. The following values are valid.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SERIAL</code> - Containers run as a serial pipeline.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DIRECT</code> - Only the individual container that you specify is
   *                     run.</p>
   *             </li>
   *          </ul>
   */
  Mode: InferenceExecutionMode | string | undefined;
}

export namespace InferenceExecutionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceExecutionConfig): any => ({
    ...obj,
  });
}

export interface CreateModelInput {
  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model
   *             artifacts and docker image for deployment on ML compute instances or for batch transform
   *             jobs. Deploying on ML compute instances is part of model hosting. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your model
   *             to connect to. Control access to and from your model container by configuring the VPC.
   *                 <code>VpcConfig</code> is used in hosting services and in batch transform. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch
   *                 Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export namespace CreateModelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelInput): any => ({
    ...obj,
  });
}

export interface CreateModelOutput {
  /**
   * <p>The ARN of the model created in Amazon SageMaker.</p>
   */
  ModelArn: string | undefined;
}

export namespace CreateModelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model bias job.</p>
 */
export interface ModelBiasAppSpecification {
  /**
   * <p>The container image to be run by the model bias job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines bias parameters. For more information on this JSON
   *          configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/json-bias-parameter-config.html">Configure bias
   *          parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };
}

export namespace ModelBiasAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a baseline model bias job.</p>
 */
export interface ModelBiasBaselineConfig {
  /**
   * <p>The name of the baseline model bias job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelBiasBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasBaselineConfig): any => ({
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
 * <p>Inputs for the model bias job.</p>
 */
export interface ModelBiasJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>Location of ground truth labels to use in model bias job.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export namespace ModelBiasJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasJobInput): any => ({
    ...obj,
  });
}

export interface CreateModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
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

export namespace CreateModelBiasJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelBiasJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;
}

export namespace CreateModelBiasJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelBiasJobDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model explainability job.</p>
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * <p>The container image to be run by the model explainability job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines explainability parameters. For more information on
   *          this JSON configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/json-model-explainability-parameter-config.html">Configure model
   *             explainability parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };
}

export namespace ModelExplainabilityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityAppSpecification): any => ({
    ...obj,
  });
}
