import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Describes a tag. </p>
 */
export interface Tag {
  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;

  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface AddTagsInput {
  /**
   * <p>An array of <code>Tag</code> objects. Each tag is a key-value pair. Only the
   *                 <code>key</code> parameter is required. If you don't specify a value, Amazon SageMaker sets the
   *             value to an empty string. </p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace AddTagsInput {
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
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
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
 *             to <code>stderr</code> or <code>stdout</code>
 *          . Amazon SageMakerhyperparameter
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

  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an
   *             algorithm resource that you created or subscribe to on AWS Marketplace. If you specify a value for
   *             this parameter, you can't specify a value for <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: MetricDefinition[];

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
}

export namespace AlgorithmSpecification {
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
   * <p>The current status.</p>
   */
  Status: DetailedAlgorithmStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the algorithm for which the overall status is being reported.</p>
   */
  Name: string | undefined;
}

export namespace AlgorithmStatusItem {
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
  export const filterSensitiveLog = (obj: AlgorithmStatusDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about an algorithm.</p>
 */
export interface AlgorithmSummary {
  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A brief description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>The overall status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>The name of the algorithm that is described by the summary.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace AlgorithmSummary {
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
   * <p>The full path to the directory to associate with the channel.</p>
   */
  DirectoryPath: string | undefined;

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
   * <p>The file system id.</p>
   */
  FileSystemId: string | undefined;
}

export namespace FileSystemDataSource {
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
   *                 <p> This JSON is equivalent to the following <code>S3Uri</code> list:</p>
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
}

export namespace S3DataSource {
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
  export const filterSensitiveLog = (obj: ShuffleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A channel is a named input source that training algorithms can consume. </p>
 */
export interface Channel {
  /**
   * <p>The MIME type of the data.</p>
   */
  ContentType?: string;

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
   * <p>The name of the channel. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>If training data is compressed, the compression type. The default value is
   *                 <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In
   *             File mode, leave this field unset or set it to None.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The location of the channel data.</p>
   */
  DataSource: DataSource | undefined;
}

export namespace Channel {
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
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
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
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
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
}

/**
 * <p>Describes the resources, including ML compute instances and ML storage volumes, to
 *             use for model training. </p>
 */
export interface ResourceConfig {
  /**
   * <p>The AWS KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML
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
}

export namespace ResourceConfig {
  export const filterSensitiveLog = (obj: ResourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a limit to how long a model training or compilation job can run. It also
 *             specifies how long you are willing to wait for a managed spot training job to complete.
 *             When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this
 *             API to cap model training costs.</p>
 *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
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
   * <p>The maximum length of time, in seconds, how long you are willing to wait for a managed
   *             spot training job to complete. It is the amount of time spent waiting for Spot capacity
   *             plus the amount of time the training job runs. It must be equal to or greater than
   *                 <code>MaxRuntimeInSeconds</code>. </p>
   */
  MaxWaitTimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, that the training or compilation job can run.
   *             If job does not complete during this time, Amazon SageMaker ends the job. If value is not specified,
   *             default value is 1 day. The maximum value is 28 days.</p>
   */
  MaxRuntimeInSeconds?: number;
}

export namespace StoppingCondition {
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
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export namespace TrainingJobDefinition {
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
}

export namespace TransformS3DataSource {
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
   * <p>If your transform data
   *             is
   *             compressed, specify the compression type. Amazon SageMaker automatically
   *             decompresses the data for the transform job accordingly. The default value is
   *                 <code>None</code>.</p>
   */
  CompressionType?: CompressionType | string;

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
   * <p>The method to use to split the transform job's data files into smaller batches.
   *             Splitting is necessary when the total size of each object is too large to fit in a
   *             single request. You can also use data splitting to improve performance by processing
   *             multiple concurrent mini-batches. The default value for <code>SplitType</code> is
   *                 <code>None</code>, which indicates that input data files are not split, and request
   *             payloads contain the entire contents of an input object. Set the value of this parameter
   *             to <code>Line</code> to split records on a newline character boundary.
   *                 <code>SplitType</code> also supports a number of record-oriented binary data
   *             formats.</p>
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
   *                     <code>TFRecord</code>, see <a href="https://www.tensorflow.org/guide/datasets#consuming_tfrecord_data">Consuming TFRecord data</a> in the TensorFlow documentation.</p>
   *         </note>
   */
  SplitType?: SplitType | string;
}

export namespace TransformInput {
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
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
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
   *
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <a>CreateModel</a> request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Defines how to assemble the results of the transform job as a single S3 object. Choose
   *             a format that is most convenient to you. To concatenate the results in binary format,
   *             specify <code>None</code>. To add a newline character at the end of every transformed
   *             record, specify
   *             <code>Line</code>.</p>
   */
  AssembleWith?: AssemblyType | string;

  /**
   * <p>The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http
   *             call to transfer data from the transform job.</p>
   */
  Accept?: string;

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
}

export namespace TransformOutput {
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
   * <p>The number of
   *             ML
   *             compute instances to use in the transform job. For distributed
   *             transform jobs, specify a value greater than 1. The default value is
   *             <code>1</code>.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume
   *             attached to the ML compute instance(s) that run the batch transform job. The
   *                 <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
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

  /**
   * <p>The ML compute instance type for the transform job. If you are using built-in
   *             algorithms to
   *             transform
   *             moderately sized datasets, we recommend using ml.m4.xlarge or
   *             <code>ml.m5.large</code>
   *          instance types.</p>
   */
  InstanceType: TransformInstanceType | string | undefined;
}

export namespace TransformResources {
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
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p>
   *         <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results
   *             from the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record
   *             (without metadata).</p>
   */
  MaxPayloadInMB?: number;
}

export namespace TransformJobDefinition {
  export const filterSensitiveLog = (obj: TransformJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your
 *             algorithm.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on AWS
 *             Marketplace.</p>
 */
export interface AlgorithmValidationProfile {
  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: TransformJobDefinition;
}

export namespace AlgorithmValidationProfile {
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
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;

  /**
   * <p>The IAM roles that Amazon SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string | undefined;
}

export namespace AlgorithmValidationSpecification {
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
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox</code>
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
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass</code>
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
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image
   *             as a multi-class classification and treats pixel annotations from workers as "votes" for
   *             the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Text classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Multi-label text classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Named entity recognition</b> - Groups similar selections
   *             and calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>
   *             <b>Named entity recognition</b> - Groups similar selections
   *             and calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition</code>
   *                 </p>
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
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoMultiClass</code>
   *                </p>
   *                 <p>
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
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectDetection</code>
   *                </p>
   *                 <p>
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
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>
   *             <b>3D point cloud object detection</b> - Use this task type
   *             when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids
   *             around objects. For example, you can use this task type to ask workers to identify
   *             different types of objects in a point cloud, such as cars, bikes, and
   *             pedestrians.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D point cloud object tracking</b> - Use this task type
   *             when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D
   *             point cloud frames. For example, you can use this task type to ask workers to track the
   *             movement of vehicles across multiple point cloud frames. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D point cloud semantic segmentation</b> - Use this task
   *             type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned
   *             to one of the classes you specify.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                 </p>
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
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel
   *             in an image as a multi-class classification and treats pixel adjusted annotations from
   *             workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant
   *             of the Expectation Maximization approach to estimate the true class of verification
   *             judgment for semantic segmentation labels based on annotations from individual
   *             workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of verification judgement
   *             for bounding box labels based on annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar
   *             boxes from different workers based on the Jaccard index of the adjusted
   *             annotations.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
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
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *                 <p>
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
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D point cloud object detection adjustment</b> - Use this task type
   *             when you want workers to adjust 3D cuboids around objects in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D point cloud object tracking adjustment</b> - Use this task type
   *             when you want workers to adjust 3D cuboids around objects that appear in a sequence of 3D
   *             point cloud frames.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> - Use this task
   *             type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

export namespace AnnotationConsolidationConfig {
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
 * <p>The app's details.</p>
 */
export interface AppDetails {
  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;
}

export namespace AppDetails {
  export const filterSensitiveLog = (obj: AppDetails): any => ({
    ...obj,
  });
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
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_16XLARGE = "ml.m5.16xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_8XLARGE = "ml.m5.8xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_MICRO = "ml.t3.micro",
  ML_T3_SMALL = "ml.t3.small",
  ML_T3_XLARGE = "ml.t3.xlarge",
  SYSTEM = "system",
}

export enum AppSortKey {
  CreationTime = "CreationTime",
}

/**
 * <p>Configuration to run a processing job in a specified container image.</p>
 */
export interface AppSpecification {
  /**
   * <p>The arguments for a container used to run a processing job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>The container image to be run by the processing job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a processing job.</p>
   */
  ContainerEntrypoint?: string[];
}

export namespace AppSpecification {
  export const filterSensitiveLog = (obj: AppSpecification): any => ({
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
  export const filterSensitiveLog = (obj: AssociateTrialComponentResponse): any => ({
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
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

export enum AuthMode {
  IAM = "IAM",
  SSO = "SSO",
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
 * <p>Information about the steps for a Candidate, and what step it is working on.</p>
 */
export interface AutoMLCandidateStep {
  /**
   * <p>The name for the Candidate's step.</p>
   */
  CandidateStepName: string | undefined;

  /**
   * <p>Whether the Candidate is at the transform, training, or processing step.</p>
   */
  CandidateStepType: CandidateStepType | string | undefined;

  /**
   * <p>The ARN for the Candidate's step.</p>
   */
  CandidateStepArn: string | undefined;
}

export namespace AutoMLCandidateStep {
  export const filterSensitiveLog = (obj: AutoMLCandidateStep): any => ({
    ...obj,
  });
}

export enum AutoMLMetricEnum {
  ACCURACY = "Accuracy",
  F1 = "F1",
  F1_MACRO = "F1macro",
  MSE = "MSE",
}

export enum AutoMLJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize",
}

/**
 * <p>The candidate result from a job.</p>
 */
export interface FinalAutoMLJobObjectiveMetric {
  /**
   * <p>The value of the metric.</p>
   */
  Value: number | undefined;

  /**
   * <p>The metric type used.</p>
   */
  Type?: AutoMLJobObjectiveType | string;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName: AutoMLMetricEnum | string | undefined;
}

export namespace FinalAutoMLJobObjectiveMetric {
  export const filterSensitiveLog = (obj: FinalAutoMLJobObjectiveMetric): any => ({
    ...obj,
  });
}

/**
 * <p>A list of container definitions that describe the different containers that make up one
 *          AutoML candidate. Refer to ContainerDefinition for more details.</p>
 */
export interface AutoMLContainerDefinition {
  /**
   * <p>Environment variables to set in the container. Refer to ContainerDefinition for more
   *          details.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The location of the model artifacts. Refer to ContainerDefinition for more
   *          details.</p>
   */
  ModelDataUrl: string | undefined;

  /**
   * <p>The ECR path of the container. Refer to ContainerDefinition for more details.</p>
   */
  Image: string | undefined;
}

export namespace AutoMLContainerDefinition {
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
 * <p>An AutoPilot job will return recommendations, or candidates. Each candidate has futher details
 *          about the steps involed, and the status.</p>
 */
export interface AutoMLCandidate {
  /**
   * <p>The candidate name.</p>
   */
  CandidateName: string | undefined;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The candidate's status.</p>
   */
  CandidateStatus: CandidateStatus | string | undefined;

  /**
   * <p>The objective status.</p>
   */
  ObjectiveStatus: ObjectiveStatus | string | undefined;

  /**
   * <p>The candidate result from a job.</p>
   */
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;

  /**
   * <p>The end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The inference containers.</p>
   */
  InferenceContainers?: AutoMLContainerDefinition[];

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The candidate's steps.</p>
   */
  CandidateSteps: AutoMLCandidateStep[] | undefined;
}

export namespace AutoMLCandidate {
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
  export const filterSensitiveLog = (obj: AutoMLS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>The data source for the AutoPilot job.</p>
 */
export interface AutoMLDataSource {
  /**
   * <p>The Amazon S3 location of the input data.</p>
   *          <note>
   *             <p>The input data must be in CSV format and contain at least 1000 rows.</p>
   *          </note>
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

export namespace AutoMLDataSource {
  export const filterSensitiveLog = (obj: AutoMLDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Similar to Channel. A channel is a named input source that training algorithms can
 *          consume. Refer to Channel for detailed descriptions.</p>
 */
export interface AutoMLChannel {
  /**
   * <p>The name of the target variable in supervised learning, a.k.a. 'y'.</p>
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The data source.</p>
   */
  DataSource: AutoMLDataSource | undefined;

  /**
   * <p>You can use Gzip or None. The default value is None.</p>
   */
  CompressionType?: CompressionType | string;
}

export namespace AutoMLChannel {
  export const filterSensitiveLog = (obj: AutoMLChannel): any => ({
    ...obj,
  });
}

/**
 * <p>Artifacts that are generation during a job.</p>
 */
export interface AutoMLJobArtifacts {
  /**
   * <p>The URL to the notebook location.</p>
   */
  DataExplorationNotebookLocation?: string;

  /**
   * <p>The URL to the notebook location.</p>
   */
  CandidateDefinitionNotebookLocation?: string;
}

export namespace AutoMLJobArtifacts {
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
   * <p>The maximum time, in seconds, a job is allowed to run.</p>
   */
  MaxRuntimePerTrainingJobInSeconds?: number;

  /**
   * <p>The maximum number of times a training job is allowed to run.</p>
   */
  MaxCandidates?: number;

  /**
   * <p>The maximum time, in seconds, an AutoML job is allowed to wait for a trial to complete.
   *          It must be equal to or greater than MaxRuntimePerTrainingJobInSeconds.</p>
   */
  MaxAutoMLJobRuntimeInSeconds?: number;
}

export namespace AutoMLJobCompletionCriteria {
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
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or
   *             model. For information about the availability of specific instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html">Supported
   *                 Instance Types and Availability Zones</a>.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for
   *             the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace VpcConfig {
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Security options.</p>
 */
export interface AutoMLSecurityConfig {
  /**
   * <p>VPC configuration.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Whether to use traffic encryption between the container layers.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The key used to encrypt stored data.</p>
   */
  VolumeKmsKeyId?: string;
}

export namespace AutoMLSecurityConfig {
  export const filterSensitiveLog = (obj: AutoMLSecurityConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings used for a job.</p>
 */
export interface AutoMLJobConfig {
  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>Security configuration for traffic encryption or Amazon VPC settings.</p>
   */
  SecurityConfig?: AutoMLSecurityConfig;
}

export namespace AutoMLJobConfig {
  export const filterSensitiveLog = (obj: AutoMLJobConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Applies a metric to minimize or maximize for the job's objective.</p>
 */
export interface AutoMLJobObjective {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: AutoMLMetricEnum | string | undefined;
}

export namespace AutoMLJobObjective {
  export const filterSensitiveLog = (obj: AutoMLJobObjective): any => ({
    ...obj,
  });
}

export enum AutoMLJobSecondaryStatus {
  ANALYZING_DATA = "AnalyzingData",
  CANDIDATE_DEFINITIONS_GENERATED = "CandidateDefinitionsGenerated",
  FAILED = "Failed",
  FEATURE_ENGINEERING = "FeatureEngineering",
  MAX_AUTO_ML_JOB_RUNTIME_REACHED = "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED = "MaxCandidatesReached",
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
 * <p>Provides a summary about a job.</p>
 */
export interface AutoMLJobSummary {
  /**
   * <p>The ARN of the job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>The end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>When the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The job's secondary status.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>The job's status.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;
}

export namespace AutoMLJobSummary {
  export const filterSensitiveLog = (obj: AutoMLJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The output data configuration.</p>
 */
export interface AutoMLOutputDataConfig {
  /**
   * <p>The AWS KMS encryption key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace AutoMLOutputDataConfig {
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

export enum AwsManagedHumanLoopRequestSource {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1",
}

export enum BooleanOperator {
  AND = "And",
  OR = "Or",
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
   * <p>A list of the categories
   *             for
   *             the hyperparameter.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;
}

export namespace CategoricalParameterRange {
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
  export const filterSensitiveLog = (obj: CategoricalParameterRangeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 */
export interface ChannelSpecification {
  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?: (CompressionType | string)[];

  /**
   * <p>A brief description of the channel.</p>
   */
  Description?: string;

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p>
   *         <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode.</p>
   *         <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: (TrainingInputMode | string)[] | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;
}

export namespace ChannelSpecification {
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
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   */
  LocalPath?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3Uri: string | undefined;
}

export namespace CheckpointConfig {
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
 * <p>Specifies configuration details for a Git repository in your AWS account.</p>
 */
export interface GitConfig {
  /**
   * <p>The default branch for the Git repository.</p>
   */
  Branch?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;

  /**
   * <p>The URL where the Git repository is located.</p>
   */
  RepositoryUrl: string | undefined;
}

export namespace GitConfig {
  export const filterSensitiveLog = (obj: GitConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies summary information about a Git repository.</p>
 */
export interface CodeRepositorySummary {
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
   *             and the ARN of the AWS Secrets Manager secret that contains the credentials used to
   *             access the repository.</p>
   */
  GitConfig?: GitConfig;

  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace CodeRepositorySummary {
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
   * <p>The client ID for your Amazon Cognito user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       user pool</a> is a user directory in Amazon Cognito.
   *       With a user pool, your users can sign in to your web or mobile app through Amazon Cognito.
   *       Your users can also sign in through social identity providers like
   *       Google, Facebook, Amazon, or Apple, and through SAML identity providers.</p>
   */
  UserPool: string | undefined;
}

export namespace CognitoConfig {
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
   * <p>An identifier for an application client. You must create the app client ID using
   *             Amazon Cognito.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service
   *             that you are calling.</p>
   */
  UserPool: string | undefined;

  /**
   * <p>An identifier for a user group.</p>
   */
  UserGroup: string | undefined;
}

export namespace CognitoMemberDefinition {
  export const filterSensitiveLog = (obj: CognitoMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for tensor collections.</p>
 */
export interface CollectionConfiguration {
  /**
   * <p>Parameter values for the tensor collection. The allowed parameters are
   *                 <code>"name"</code>, <code>"include_regex"</code>, <code>"reduction_config"</code>,
   *                 <code>"save_config"</code>, <code>"tensor_names"</code>, and
   *                 <code>"save_histogram"</code>.</p>
   */
  CollectionParameters?: { [key: string]: string };

  /**
   * <p>The name of the tensor collection. The name must be unique relative to other rule configuration names.</p>
   */
  CollectionName?: string;
}

export namespace CollectionConfiguration {
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
  DEEPLENS = "deeplens",
  IMX8QM = "imx8qm",
  JETSON_NANO = "jetson_nano",
  JETSON_TX1 = "jetson_tx1",
  JETSON_TX2 = "jetson_tx2",
  JETSON_XAVIER = "jetson_xavier",
  LAMBDA = "lambda",
  ML_C4 = "ml_c4",
  ML_C5 = "ml_c5",
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
   * <p>The type of OS that the model will run on after the compilation job has completed.</p>
   */
  CompilationTargetPlatformOs?: TargetPlatformOs | string;

  /**
   * <p>The type of device that the model will run on after the compilation job has completed.</p>
   */
  CompilationTargetDevice?: TargetDevice | string;

  /**
   * <p>The type of architecture that the model will run on after the compilation job has completed.</p>
   */
  CompilationTargetPlatformArch?: TargetPlatformArch | string;

  /**
   * <p>The time when the model compilation job completed.</p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>The type of accelerator that the model will run on after the compilation job has completed.</p>
   */
  CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator | string;

  /**
   * <p>The time when the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the model compilation job started.</p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The name of the model compilation job that you want a summary for.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;
}

export namespace CompilationJobSummary {
  export const filterSensitiveLog = (obj: CompilationJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict when you attempted to modify an experiment, trial, or trial
 *       component.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ContainerMode {
  MULTI_MODEL = "MultiModel",
  SINGLE_MODEL = "SingleModel",
}

/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface ContainerDefinition {
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
   * <p>Whether the container hosts a single model or multiple models.</p>
   */
  Mode?: ContainerMode | string;

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
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your
   *             own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must
   *             meet Amazon SageMaker requirements. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and
   *                 <code>registry/repository[@digest]</code> image path formats. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using
   *                 Your Own Algorithms with Amazon SageMaker</a>
   *         </p>
   */
  Image?: string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3
   *             path is required for Amazon SageMaker built-in algorithms, but not if you use your own algorithms.
   *             For more information on built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common
   *                 Parameters</a>. </p>
   *         <p>If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to
   *             download model artifacts from the S3 path you provide. AWS STS is activated in your
   *             IAM user account by default. If you previously deactivated AWS STS for a region, you
   *             need to reactivate AWS STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User
   *                 Guide</i>.</p>
   *         <important>
   *             <p>If you use a built-in algorithm to create a model, Amazon SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *         </important>
   */
  ModelDataUrl?: string;
}

export namespace ContainerDefinition {
  export const filterSensitiveLog = (obj: ContainerDefinition): any => ({
    ...obj,
  });
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
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
}

export namespace ContinuousParameterRange {
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
  export const filterSensitiveLog = (obj: ContinuousParameterRangeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Docker container for the model package.</p>
 */
export interface ModelPackageContainerDefinition {
  /**
   * <p>The AWS Marketplace product ID of the model package.</p>
   */
  ProductId?: string;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;

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
}

export namespace ModelPackageContainerDefinition {
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
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes: (ProductionVariantInstanceType | string)[] | undefined;

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an
   *             endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes: (TransformInstanceType | string)[] | undefined;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: string[] | undefined;

  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;
}

export namespace InferenceSpecification {
  export const filterSensitiveLog = (obj: InferenceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the possible values for an integer hyperparameter.</p>
 */
export interface IntegerParameterRangeSpecification {
  /**
   * <p>The maximum integer value allowed.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum integer value allowed.</p>
   */
  MinValue: string | undefined;
}

export namespace IntegerParameterRangeSpecification {
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
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible
   *             values for a categorical hyperparameter.</p>
   */
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible
   *             values for a continuous hyperparameter.</p>
   */
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;
}

export namespace ParameterRange {
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
   * <p>The type of this hyperparameter. The valid types are <code>Integer</code>,
   *                 <code>Continuous</code>, <code>Categorical</code>, and <code>FreeText</code>.</p>
   */
  Type: ParameterType | string | undefined;

  /**
   * <p>A brief description of the hyperparameter.</p>
   */
  Description?: string;

  /**
   * <p>The allowed range for this hyperparameter.</p>
   */
  Range?: ParameterRange;

  /**
   * <p>The name of this hyperparameter. The name must be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>The default value for this hyperparameter. If a default value is specified, a
   *             hyperparameter cannot be required.</p>
   */
  DefaultValue?: string;

  /**
   * <p>Indicates whether this hyperparameter is tunable in a hyperparameter tuning
   *             job.</p>
   */
  IsTunable?: boolean;

  /**
   * <p>Indicates whether this hyperparameter is required.</p>
   */
  IsRequired?: boolean;
}

export namespace HyperParameterSpecification {
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
   * <p>The
   *             name of the metric to use for the objective metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric.</p>
   */
  Type: HyperParameterTuningJobObjectiveType | string | undefined;
}

export namespace HyperParameterTuningJobObjective {
  export const filterSensitiveLog = (obj: HyperParameterTuningJobObjective): any => ({
    ...obj,
  });
}

/**
 * <p>Defines how the algorithm is used for a training job.</p>
 */
export interface TrainingSpecification {
  /**
   * <p>A list of the metrics that the algorithm emits that can be used as the objective
   *             metric in a hyperparameter tuning job.</p>
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

  /**
   * <p>A list of <code>ChannelSpecification</code> objects, which specify the input sources
   *             to be used by the algorithm.</p>
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * <p>Indicates whether the algorithm supports distributed training. If set to false, buyers
   *             can't request more than one instance during training.</p>
   */
  SupportsDistributedTraining?: boolean;

  /**
   * <p>A list of the <code>HyperParameterSpecification</code> objects, that define the
   *             supported hyperparameters. This is required if the algorithm supports automatic model
   *             tuning.></p>
   */
  SupportedHyperParameters?: HyperParameterSpecification[];

  /**
   * <p>A list of <code>MetricDefinition</code> objects, which are used for parsing metrics
   *             generated by the algorithm.</p>
   */
  MetricDefinitions?: MetricDefinition[];

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
   * <p>A list of the instance types that this algorithm can use for training.</p>
   */
  SupportedTrainingInstanceTypes: (TrainingInstanceType | string)[] | undefined;
}

export namespace TrainingSpecification {
  export const filterSensitiveLog = (obj: TrainingSpecification): any => ({
    ...obj,
  });
}

export interface CreateAlgorithmInput {
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
   * <p>A description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>Whether to certify the algorithm so that it can be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The name of the algorithm.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>Specifies configurations for one or more training jobs and that Amazon SageMaker runs to test the
   *             algorithm's training code and, optionally, one or more batch transform jobs that Amazon SageMaker
   *             runs to test the algorithm's inference code.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;
}

export namespace CreateAlgorithmInput {
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
  export const filterSensitiveLog = (obj: CreateAlgorithmOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
 *      The ARN is stored as metadata in SageMaker Studio notebooks.</p>
 */
export interface ResourceSpec {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  SageMakerImageArn?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: AppInstanceType | string;
}

export namespace ResourceSpec {
  export const filterSensitiveLog = (obj: ResourceSpec): any => ({
    ...obj,
  });
}

export interface CreateAppRequest {
  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
}

export interface CreateAppResponse {
  /**
   * <p>The App's Amazon Resource Name (ARN).</p>
   */
  AppArn?: string;
}

export namespace CreateAppResponse {
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
  export const filterSensitiveLog = (obj: ResourceInUse): any => ({
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
   * <p>Identifies an AutoPilot job. Must be unique to your account and is case-insensitive.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Defines the job's objective. You provide a MetricName and AutoML will infer minimize or
   *          maximize. If this is not provided, the most commonly used ObjectiveMetric for problem type
   *          will be selected.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Defines the kind of preprocessing and algorithms intended for the candidates. Options
   *          include: BinaryClassification, MulticlassClassification, and Regression.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Similar to InputDataConfig supported by Tuning. Format(s) supported: CSV. Minimum of
   *          1000 rows.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>The ARN of the role that will be used to access the data.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Contains CompletionCriteria and SecurityConfig.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>This will generate possible candidates without training a model. A candidate is a
   *          combination of data preprocessors, algorithms, and algorithm parameter settings.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Similar to OutputDataConfig supported by Tuning. Format(s) supported: CSV.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Each tag consists of a key and an optional value. Tag keys must be unique per
   *          resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAutoMLJobRequest {
  export const filterSensitiveLog = (obj: CreateAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface CreateAutoMLJobResponse {
  /**
   * <p>When a job is created, it is assigned a unique ARN.</p>
   */
  AutoMLJobArn: string | undefined;
}

export namespace CreateAutoMLJobResponse {
  export const filterSensitiveLog = (obj: CreateAutoMLJobResponse): any => ({
    ...obj,
  });
}

export interface CreateCodeRepositoryInput {
  /**
   * <p>Specifies details about the repository, including the URL where the repository is
   *             located, the default branch, and credentials to use to access the repository.</p>
   */
  GitConfig: GitConfig | undefined;

  /**
   * <p>The name of the Git repository. The name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace CreateCodeRepositoryInput {
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
  export const filterSensitiveLog = (obj: CreateCodeRepositoryOutput): any => ({
    ...obj,
  });
}

export enum Framework {
  KERAS = "KERAS",
  MXNET = "MXNET",
  ONNX = "ONNX",
  PYTORCH = "PYTORCH",
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
   * <p>Identifies the framework in which the model was trained. For example:
   *             TENSORFLOW.</p>
   */
  Framework: Framework | string | undefined;

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
   *                   <code>MXNET/ONNX</code>: You must specify the name and shape (NCHW format) of
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
   */
  DataInputConfig: string | undefined;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  S3Uri: string | undefined;
}

export namespace InputConfig {
  export const filterSensitiveLog = (obj: InputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a target platform that you want your model to run on,
 *             such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.</p>
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
   *                   <code>ANDROID</code>: Android operating systems. Android API level can be specified
   *                     using the <code>ANDROID_PLATFORM</code> compiler option.
   *                     For example, <code>"CompilerOptions": {'ANDROID_PLATFORM': 28}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Os: TargetPlatformOs | string | undefined;

  /**
   * <p>Specifies a target platform accelerator (optional).</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NVIDIA</code>: Nvidia graphics processing unit. It also requires <code>gpu-code</code>,
   *                     <code>trt-ver</code>, <code>cuda-ver</code> compiler options</p>
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
   *                   <code>ARM_EABI</code>: ARMv7 32-bit, Soft Float. Used by Android 32-bit ARM platform.</p>
   *             </li>
   *          </ul>
   */
  Arch: TargetPlatformArch | string | undefined;
}

export namespace TargetPlatform {
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
   * <p>Specifies additional parameters for compiler options in JSON format. The compiler
   *             options are <code>TargetPlatform</code> specific. It is required for NVIDIA
   *             accelerators and highly recommended for CPU compliations. For any other cases, it is
   *             optional to specify <code>CompilerOptions.</code>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CPU</code>: Compilation for CPU supports the following compiler options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>mcpu</code>: CPU micro-architecture. For example,
   *                             <code>{'mcpu': 'skylake-avx512'}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon', '+vfpv4']}</code>
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
   *                         <code>NEON</code>: NEON is an implementation of the Advanced SIMD extension used in ARMv7 processors.</p>
   *                         <p>For example, add <code>{'mattr': ['+neon']}</code> to the compiler options if compiling
   *                             for ARM 32-bit platform with the NEON support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NVIDIA</code>: Compilation for NVIDIA GPU supports the following compiler options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>gpu_code</code>: Specifies the targeted architecture.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>trt-ver</code>: Specifies the TensorRT versions in x.y.z. format.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>cuda-ver</code>: Specifies the CUDA version in x.y format.</p>
   *                     </li>
   *                </ul>
   *                 <p>For example, <code>{'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver': '10.1'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ANDROID</code>: Compilation for the Android OS supports the following compiler options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>ANDROID_PLATFORM</code>: Specifies the Android API levels. Available levels range
   *                             from 21 to 29. For example, <code>{'ANDROID_PLATFORM': 28}</code>.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: Add <code>{'mattr': ['+neon']}</code> to compiler options if compiling
   *                             for ARM 32-bit platform with NEON support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  CompilerOptions?: string;

  /**
   * <p>Identifies the S3 bucket where you want Amazon SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>Contains information about a target platform that you want your model to run on, such
   *             as OS, architecture, and accelerators. It is an alternative of
   *             <code>TargetDevice</code>.</p>
   *         <p>The following examples show how to configure the <code>TargetPlatform</code> and <code>CompilerOptions</code> JSON strings
   *             for popular target platforms:
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>Raspberry Pi 3 Model B+</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX",
   *                     "Arch": "ARM_EABIHF"},</code>
   *                </p>
   *                 <p>
   *                   <code>
   *                     "CompilerOptions": {'mattr': ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Jetson TX2</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX",
   *                     "Arch": "ARM64",
   *                     "Accelerator": "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code>
   *                     "CompilerOptions": {'gpu-code': 'sm_62', 'trt-ver': '6.0.1', 'cuda-ver': '10.0'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>EC2 m5.2xlarge instance OS</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "X86_64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code>
   *                     "CompilerOptions": {'mcpu': 'skylake-avx512'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>RK3399</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX",
   *                     "Arch": "ARM64",
   *                     "Accelerator": "MALI"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv7 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID",
   *                     "Arch": "ARM_EABI"},</code>
   *                </p>
   *                 <p>
   *                   <code>
   *                     "CompilerOptions": {'ANDROID_PLATFORM': 25, 'mattr': ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv8 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID",
   *                     "Arch": "ARM64"},</code>
   *                </p>
   *                 <p>
   *                   <code>
   *                     "CompilerOptions": {'ANDROID_PLATFORM': 29}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TargetPlatform?: TargetPlatform;

  /**
   * <p>Identifies the target device or the machine learning instance that you want to run
   *             your model on after the compilation has completed. Alternatively, you can specify OS,
   *             architecture, and accelerator using <a>TargetPlatform</a> fields. It can be
   *             used instead of <code>TargetPlatform</code>.</p>
   */
  TargetDevice?: TargetDevice | string;
}

export namespace OutputConfig {
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj,
  });
}

export interface CreateCompilationJobRequest {
  /**
   * <p>Provides information about the output location for the compiled model and the target
   *             device the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Provides information about the location of input model artifacts, the name and shape
   *             of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig: InputConfig | undefined;

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
   * <p>A name for the model compilation job. The name must be unique within the AWS Region
   *             and within your AWS account. </p>
   */
  CompilationJobName: string | undefined;
}

export namespace CreateCompilationJobRequest {
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
  export const filterSensitiveLog = (obj: CreateCompilationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Jupyter server's app settings.</p>
 */
export interface JupyterServerAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace JupyterServerAppSettings {
  export const filterSensitiveLog = (obj: JupyterServerAppSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The kernel gateway app settings.</p>
 */
export interface KernelGatewayAppSettings {
  /**
   * <p>The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace KernelGatewayAppSettings {
  export const filterSensitiveLog = (obj: KernelGatewayAppSettings): any => ({
    ...obj,
  });
}

export enum NotebookOutputOption {
  Allowed = "Allowed",
  Disabled = "Disabled",
}

/**
 * <p>Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified
 *      as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is
 *      called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a>
 *      API is called.</p>
 */
export interface SharingSettings {
  /**
   * <p>Whether to include the notebook cell output when sharing the notebook. The default
   *          is <code>Disabled</code>.</p>
   */
  NotebookOutputOption?: NotebookOutputOption | string;

  /**
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the Amazon S3 bucket used
   *          to save the notebook cell output. If <code>S3OutputPath</code> isn't specified, a default
   *          bucket is used.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the AWS Key Management Service (KMS)
   *          encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.</p>
   */
  S3KmsKeyId?: string;
}

export namespace SharingSettings {
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
  export const filterSensitiveLog = (obj: TensorBoardAppSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings.</p>
 */
export interface UserSettings {
  /**
   * <p>The execution role for the user.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The Jupyter server's app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The TensorBoard app settings.</p>
   */
  TensorBoardAppSettings?: TensorBoardAppSettings;

  /**
   * <p>The kernel gateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * <p>The sharing settings.</p>
   */
  SharingSettings?: SharingSettings;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: string[];
}

export namespace UserSettings {
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
}

export interface CreateDomainRequest {
  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) to use for communication with the EFS volume.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The default user settings.</p>
   */
  DefaultUserSettings: UserSettings | undefined;

  /**
   * <p>The mode of authentication that members use to access the domain.</p>
   */
  AuthMode: AuthMode | string | undefined;

  /**
   * <p>The VPC subnets to use for communication with the EFS volume.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The AWS Key Management Service (KMS) encryption key ID.
   *           Encryption with a customer master key (CMK) is not supported.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>Tags to associated with the Domain. Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource. Tags are searchable using the
   *          <a>Search</a> API.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A name for the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace CreateDomainRequest {
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainResponse {
  /**
   * <p>The URL to the created domain.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the created domain.</p>
   */
  DomainArn?: string;
}

export namespace CreateDomainResponse {
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj,
  });
}

export interface CreateEndpointInput {
  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a>in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the endpoint. The name must be unique within an AWS Region in your AWS
   *             account.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of an endpoint configuration. For more information, see
   *             <a>CreateEndpointConfig</a>. </p>
   */
  EndpointConfigName: string | undefined;
}

export namespace CreateEndpointInput {
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
  KmsKeyId?: string;

  /**
   * <p></p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p></p>
   */
  InitialSamplingPercentage: number | undefined;

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
 * <p>Identifies
 *             a model that you want to host and the resources to deploy for hosting
 *             it. If you are deploying multiple models, tell Amazon SageMaker how to distribute
 *             traffic among the models by specifying variant weights. </p>
 */
export interface ProductionVariant {
  /**
   * <p>The name of the model that you want to host. This is the name that you specified
   *             when creating the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;

  /**
   * <p>The name of the production variant.</p>
   */
  VariantName: string | undefined;

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
}

export namespace ProductionVariant {
  export const filterSensitiveLog = (obj: ProductionVariant): any => ({
    ...obj,
  });
}

export interface CreateEndpointConfigInput {
  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on
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
   *             information, refer to the AWS Key Management Service section<a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"> Using Key
   *                 Policies in AWS KMS </a>
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

  /**
   * <p>The name of the endpoint configuration. You specify this name in a <a>CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>A list of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i> AWS Billing and Cost Management User
   *                 Guide</i>. </p>
   */
  Tags?: Tag[];

  /**
   * <p>An list of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;
}

export namespace CreateEndpointConfigInput {
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
  export const filterSensitiveLog = (obj: CreateEndpointConfigOutput): any => ({
    ...obj,
  });
}

export interface CreateExperimentRequest {
  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment. The name must be unique in your AWS account and is not
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
   * <p>A list of tags to associate with the experiment. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateExperimentRequest {
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
  export const filterSensitiveLog = (obj: CreateExperimentResponse): any => ({
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
  export const filterSensitiveLog = (obj: HumanLoopActivationConditionsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.</p>
 */
export interface HumanLoopActivationConfig {
  /**
   * <p>Container structure for defining under what conditions SageMaker creates a human loop.</p>
   */
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig | undefined;
}

export namespace HumanLoopActivationConfig {
  export const filterSensitiveLog = (obj: HumanLoopActivationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an amount of money in United States dollars/</p>
 */
export interface USD {
  /**
   * <p>The whole number of dollars in the amount.</p>
   */
  Dollars?: number;

  /**
   * <p>Fractions of a cent, in tenths.</p>
   */
  TenthFractionsOfACent?: number;

  /**
   * <p>The fractional portion, in cents, of the amount. </p>
   */
  Cents?: number;
}

export namespace USD {
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
  export const filterSensitiveLog = (obj: PublicWorkforceTaskPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the work to be performed by human workers.</p>
 */
export interface HumanLoopConfig {
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

  /**
   * <p>The amount of time that a worker has to complete a task.</p>
   */
  TaskTimeLimitInSeconds?: number;

  /**
   * <p>The number of distinct workers who will perform the same task on each object.
   *       For example, if <code>TaskCount</code> is set to <code>3</code> for an image classification
   *       labeling job, three workers will classify each input image.
   *       Increasing <code>TaskCount</code> can improve label accuracy.</p>
   */
  TaskCount: number | undefined;

  /**
   * <p>Keywords used to describe the task so that workers can discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>The length of time that a task remains available for labeling by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>A title for the human worker task.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A description for the human worker task.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of a team of workers.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace HumanLoopConfig {
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
  export const filterSensitiveLog = (obj: HumanLoopRequestSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about where human output will be stored.</p>
 */
export interface FlowDefinitionOutputConfig {
  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 path where the object containing human output will be made available.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace FlowDefinitionOutputConfig {
  export const filterSensitiveLog = (obj: FlowDefinitionOutputConfig): any => ({
    ...obj,
  });
}

export interface CreateFlowDefinitionRequest {
  /**
   * <p>An object containing information about the tasks the human reviewers will perform.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Use to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>The name of your flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>An object containing information about the events that trigger a human workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, <code>arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An object containing information about where the human review results will be uploaded.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;
}

export namespace CreateFlowDefinitionRequest {
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
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Liquid template for the worker user interface.</p>
   */
  UiTemplate: UiTemplate | undefined;
}

export namespace CreateHumanTaskUiRequest {
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

  /**
   * <p>The maximum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The name of the hyperparameter to search.</p>
   */
  Name: string | undefined;
}

export namespace IntegerParameterRange {
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
   * <p>The array of <a>CategoricalParameterRange</a> objects that specify ranges
   *             of categorical hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];

  /**
   * <p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of
   *             continuous hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * <p>The array of <a>IntegerParameterRange</a> objects that specify ranges of
   *             integer hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];
}

export namespace ParameterRanges {
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
   *             number of concurrent training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxParallelTrainingJobs: number | undefined;

  /**
   * <p>The
   *             maximum
   *             number of training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxNumberOfTrainingJobs: number | undefined;
}

export namespace ResourceLimits {
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
   * <p>The objective metric's value.</p>
   */
  TargetObjectiveMetricValue: number | undefined;
}

export namespace TuningJobCompletionCriteria {
  export const filterSensitiveLog = (obj: TuningJobCompletionCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the
   *             objective
   *             metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the
   *             maximum
   *             number of training jobs and parallel training jobs for this tuning
   *             job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. To use the Bayesian search strategy, set this
   *             to <code>Bayesian</code>. To randomly search, set it to <code>Random</code>. For
   *             information about search strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

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
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of
   *             hyperparameters
   *             that this tuning job searches.</p>
   */
  ParameterRanges?: ParameterRanges;
}

export namespace HyperParameterTuningJobConfig {
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
   * <p>An array of <a>MetricDefinition</a> objects that specify the
   *             metrics
   *             that the algorithm emits.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you
   *             specify a value for this parameter, do not specify a value for
   *                 <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p> The registry path of the Docker image that contains the training algorithm. For
   *             information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;
}

export namespace HyperParameterAlgorithmSpecification {
  export const filterSensitiveLog = (obj: HyperParameterAlgorithmSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long you are willing to wait for a managed spot training job to complete.
   *             When the job reaches the a limit, Amazon SageMaker ends the training job. Use this API to cap model
   *             training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: { [key: string]: string };

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
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

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
   * <p>An array of <a>Channel</a> objects that specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;
}

export namespace HyperParameterTrainingJobDefinition {
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
  export const filterSensitiveLog = (obj: HyperParameterTuningJobWarmStartConfig): any => ({
    ...obj,
  });
}

export interface CreateHyperParameterTuningJobRequest {
  /**
   * <p>An array of key-value pairs. You can use tags to categorize your AWS resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *                 Tagging Strategies</a>.</p>
   *         <p>Tags that you specify for the tuning job are also added to all training jobs that the
   *             tuning job launches.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the tuning job. This name is the prefix for the names of all training jobs
   *             that this tuning job launches. The name must be unique within the same AWS account and
   *             AWS Region. The name must have { } to { } characters. Valid characters are a-z, A-Z,
   *             0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that describes the
   *             training jobs that this tuning job launches,
   *             including
   *             static hyperparameters, input data configuration, output data configuration, resource
   *             configuration, and stopping condition.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that describes the tuning
   *             job, including the search strategy, the objective metric used to evaluate training jobs,
   *             ranges of parameters to search, and resource limits for the tuning job. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

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
}

export namespace CreateHyperParameterTuningJobRequest {
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
  export const filterSensitiveLog = (obj: CreateHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provided configuration information for the worker UI for a labeling job. </p>
 */
export interface UiConfig {
  /**
   * <p>The ARN of the worker task template used to render the worker UI and tools for
   *             labeling job tasks.</p>
   *         <p>Use this parameter when you are creating a labeling job for 3D point cloud
   *         and video fram labeling jobs. Use your labeling job task type to select one of the following ARN's and use
   *             it with this parameter when you create a labeling job. Replace <code>aws-region</code>
   *             with the AWS region you are creating your labeling job in.</p>
   *
   *             <p>
   *             <b>3D Point Cloud HumanTaskUiArns</b>
   *          </p>
   *
   *             <p>Use this <code>HumanTaskUiArn</code> for 3D point cloud object detection and
   *                 3D point cloud object detection adjustment labeling jobs. </p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud object tracking and
   *                     3D point cloud object tracking adjustment labeling jobs. </p>
   *             <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud semantic segmentation
   *                     and 3D point cloud semantic segmentation adjustment labeling jobs.</p>
   *             <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Video Frame HumanTaskUiArns</b>
   *          </p>
   *
   *             <p>Use this <code>HumanTaskUiArn</code> for video frame object detection and
   *                 video frame object detection adjustment labeling jobs. </p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p> Use this <code>HumanTaskUiArn</code> for video frame object tracking and
   *                     video frame object tracking adjustment labeling jobs. </p>
   *             <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  HumanTaskUiArn?: string;

  /**
   * <p>The Amazon S3 bucket location of the UI template, or worker task template. This is the
   *             template used to render the worker UI and tools for labeling job tasks. For more
   *             information about the contents of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri?: string;
}

export namespace UiConfig {
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
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>The amount of time that a worker has to complete a task.</p>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

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
   * <p>The length of time that a task remains available for labeling by human workers.
   *                 <b>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours
   *                 (43200)</b>. The default value is 864000 seconds (10 days). For private and vendor workforces, the maximum is as
   *             listed.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;
}

export namespace HumanTaskConfig {
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
  export const filterSensitiveLog = (obj: LabelingJobDataAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects.</p>
   */
  ManifestS3Uri: string | undefined;
}

export namespace LabelingJobS3DataSource {
  export const filterSensitiveLog = (obj: LabelingJobS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location of input data.</p>
 */
export interface LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource?: LabelingJobS3DataSource;
}

export namespace LabelingJobDataSource {
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
  export const filterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for labeling jobs.</p>
 */
export interface LabelingJobResourceConfig {
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training job. The
   *                 <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
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

export namespace LabelingJobResourceConfig {
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
   * <p>At the end of an auto-label job Amazon SageMaker Ground Truth sends the Amazon Resource Nam (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;

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
}

export namespace LabelingJobAlgorithmsConfig {
  export const filterSensitiveLog = (obj: LabelingJobAlgorithmsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * <p>The AWS Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>LabelingJobOutputConfig</code>. If you use a
   *             bucket policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateLabelingJob</code> request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace LabelingJobOutputConfig {
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
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;

  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;
}

export namespace LabelingJobStoppingConditions {
  export const filterSensitiveLog = (obj: LabelingJobStoppingConditions): any => ({
    ...obj,
  });
}

export interface CreateLabelingJobRequest {
  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The S3 URL of the file that defines the categories used to label the data
   *             objects.</p>
   *         <p>For 3D point cloud task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html">Create a
   *                 Labeling Category Configuration File for 3D Point Cloud Labeling Jobs</a>. </p>
   *         <p>For all other <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html">custom tasks</a>, your label category configuration file must be a JSON
   *             file in the following format. Identify the labels you want to use by replacing
   *                 <code>label_1</code>, <code>label_2</code>,<code>...</code>,<code>label_n</code>
   *             with your label categories.</p>
   *         <p>
   *             <code>{</code>
   *         </p>
   *         <p>
   *             <code> "document-version": "2018-11-28"</code>
   *         </p>
   *         <p>
   *             <code> "labels": [</code>
   *         </p>
   *         <p>
   *             <code>   {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label_1</i>"</code>
   *         </p>
   *         <p>
   *             <code>   },</code>
   *         </p>
   *         <p>
   *             <code>   {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label_2</i>"</code>
   *         </p>
   *         <p>
   *             <code>   },</code>
   *         </p>
   *         <p>
   *             <code>   ...</code>
   *         </p>
   *         <p>
   *             <code>   {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label_n</i>"</code>
   *         </p>
   *         <p>
   *             <code>   }</code>
   *         </p>
   *         <p>
   *             <code> ]</code>
   *         </p>
   *         <p>
   *             <code>}</code>
   *         </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *             name can't end with "-metadata". If you are running a semantic segmentation labeling
   *             job, the attribute name must end with "-ref". If you are running any other kind of
   *             labeling job, the attribute name must not end with "-ref".</p>
   */
  LabelAttributeName: string | undefined;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>The location of the output data and the AWS Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;
}

export namespace CreateLabelingJobRequest {
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
  export const filterSensitiveLog = (obj: CreateLabelingJobResponse): any => ({
    ...obj,
  });
}

export interface CreateModelInput {
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

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *         </p>
   */
  Tags?: Tag[];

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
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];
}

export namespace CreateModelInput {
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
  export const filterSensitiveLog = (obj: CreateModelOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you
 *             are subscribed to.</p>
 */
export interface SourceAlgorithm {
  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you
   *             are subscribed to.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;
}

export namespace SourceAlgorithm {
  export const filterSensitiveLog = (obj: SourceAlgorithm): any => ({
    ...obj,
  });
}

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

export namespace SourceAlgorithmSpecification {
  export const filterSensitiveLog = (obj: SourceAlgorithmSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on AWS
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;

  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;
}

export namespace ModelPackageValidationProfile {
  export const filterSensitiveLog = (obj: ModelPackageValidationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that Amazon SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;

  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;
}

export namespace ModelPackageValidationSpecification {
  export const filterSensitiveLog = (obj: ModelPackageValidationSpecification): any => ({
    ...obj,
  });
}

export interface CreateModelPackageInput {
  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the
   *             model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>Specifies details about inference jobs that can be run with models based on this model
   *             package, including the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>Whether to certify the model package for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export namespace CreateModelPackageInput {
  export const filterSensitiveLog = (obj: CreateModelPackageInput): any => ({
    ...obj,
  });
}

export interface CreateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace CreateModelPackageOutput {
  export const filterSensitiveLog = (obj: CreateModelPackageOutput): any => ({
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
  export const filterSensitiveLog = (obj: MonitoringStatisticsResource): any => ({
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
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should be
   *          validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;

  /**
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace MonitoringBaselineConfig {
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
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

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
}

export namespace MonitoringAppSpecification {
  export const filterSensitiveLog = (obj: MonitoringAppSpecification): any => ({
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
   * <p>Whether the <code>Pipe</code> or <code>File</code> is used as the input mode for
   *          transfering data for the monitoring job. <code>Pipe</code> mode is recommended for large
   *          datasets. <code>File</code> mode is useful for small files that fit in memory. Defaults to
   *             <code>File</code>.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
   *          Defauts to <code>FullyReplicated</code>
   *          </p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Path to the filesystem where the endpoint data is available to the container.</p>
   */
  LocalPath: string | undefined;
}

export namespace EndpointInput {
  export const filterSensitiveLog = (obj: EndpointInput): any => ({
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
  export const filterSensitiveLog = (obj: MonitoringInput): any => ({
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
   * <p>The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job. LocalPath is an absolute path for the output data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the monitoring job continuously or after the job
   *          completes.</p>
   */
  S3UploadMode?: ProcessingS3UploadMode | string;

  /**
   * <p>A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job.</p>
   */
  S3Uri: string | undefined;
}

export namespace MonitoringS3Output {
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
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model
   *          artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  KmsKeyId?: string;
}

export namespace MonitoringOutputConfig {
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
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data
   *          on the storage volume attached to the ML compute instance(s) that run the model monitoring
   *          job.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The size of the ML storage volume, in gigabytes, that you want to provision. You must
   *          specify sufficient ML storage for your scenario.</p>
   */
  VolumeSizeInGB: number | undefined;
}

export namespace MonitoringClusterConfig {
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
  export const filterSensitiveLog = (obj: MonitoringResources): any => ({
    ...obj,
  });
}

/**
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Whether to encrypt all communications between distributed processing jobs. Choose
   *             <code>True</code> to encrypt communications. Encryption provides greater security for distributed
   *             processing jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace NetworkConfig {
  export const filterSensitiveLog = (obj: NetworkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
 */
export interface MonitoringStoppingCondition {
  /**
   * <p>The maximum runtime allowed in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace MonitoringStoppingCondition {
  export const filterSensitiveLog = (obj: MonitoringStoppingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
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
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *          your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker
   *          Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;
}

export namespace MonitoringJobDefinition {
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
  export const filterSensitiveLog = (obj: ScheduleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  /**
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition: MonitoringJobDefinition | undefined;

  /**
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;
}

export namespace MonitoringScheduleConfig {
  export const filterSensitiveLog = (obj: MonitoringScheduleConfig): any => ({
    ...obj,
  });
}

export interface CreateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an AWS Region within
   *          an AWS account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href=" https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMonitoringScheduleRequest {
  export const filterSensitiveLog = (obj: CreateMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface CreateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace CreateMonitoringScheduleResponse {
  export const filterSensitiveLog = (obj: CreateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export enum NotebookInstanceAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

export enum DirectInternetAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum _InstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge",
}

export enum RootAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export interface CreateNotebookInstanceInput {
  /**
   * <p>A Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Sets whether Amazon SageMaker provides internet access to the notebook instance. If you set this
   *             to <code>Disabled</code> this notebook instance will be able to access resources only in
   *             your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless
   *             your configure a NAT Gateway in your VPC.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>. You can set the value
   *             of this parameter to <code>Disabled</code> only if you set a value for the
   *                 <code>SubnetId</code> parameter.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The ID of the subnet in a VPC to which you would like to have a connectivity from
   *             your ML compute instance. </p>
   */
  SubnetId?: string;

  /**
   * <p>A list of Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently, only one instance type can be associated with a notebook instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The type of ML compute instance to launch for the notebook instance.</p>
   */
  InstanceType: _InstanceType | string | undefined;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of tags to associate with the notebook instance. You can add tags later by
   *             using the <code>CreateTags</code> API.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the new notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on
   *             the storage volume attached to your notebook instance. The KMS key you provide must be
   *             enabled. For information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and Disabling
   *                 Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> When you send any requests to AWS resources from the notebook instance, Amazon SageMaker
   *             assumes this role to perform tasks on your behalf. You must grant this role necessary
   *             permissions so Amazon SageMaker can perform these tasks. The policy must allow the Amazon SageMaker service
   *             principal (sagemaker.amazonaws.com) permissions to assume this role. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be
   *             for the same VPC as specified in the subnet. </p>
   */
  SecurityGroupIds?: string[];
}

export namespace CreateNotebookInstanceInput {
  export const filterSensitiveLog = (obj: CreateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance. </p>
   */
  NotebookInstanceArn?: string;
}

export namespace CreateNotebookInstanceOutput {
  export const filterSensitiveLog = (obj: CreateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

export namespace NotebookInstanceLifecycleHook {
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleHook): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>A shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A shell script that runs every time you start a notebook instance, including when you
   *             create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace CreateNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (obj: CreateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;
}

export namespace CreateNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (obj: CreateNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

export interface CreatePresignedDomainUrlRequest {
  /**
   * <p>The name of the UserProfile to sign-in as.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The session expiration duration in seconds.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export namespace CreatePresignedDomainUrlRequest {
  export const filterSensitiveLog = (obj: CreatePresignedDomainUrlRequest): any => ({
    ...obj,
  });
}

export interface CreatePresignedDomainUrlResponse {
  /**
   * <p>The presigned URL.</p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedDomainUrlResponse {
  export const filterSensitiveLog = (obj: CreatePresignedDomainUrlResponse): any => ({
    ...obj,
  });
}

export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * <p>The name of the notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The duration of the session, in seconds. The default is 12 hours.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export namespace CreatePresignedNotebookInstanceUrlInput {
  export const filterSensitiveLog = (obj: CreatePresignedNotebookInstanceUrlInput): any => ({
    ...obj,
  });
}

export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * <p>A JSON object that contains the URL string. </p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedNotebookInstanceUrlOutput {
  export const filterSensitiveLog = (obj: CreatePresignedNotebookInstanceUrlOutput): any => ({
    ...obj,
  });
}

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
export interface ExperimentConfig {
  /**
   * <p>The name of an existing trial to associate the trial component with. If not specified, a
   *       new trial is created.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of an existing experiment to associate the trial component with.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The display name for the trial component. If this key isn't specified, the display name is
   *       the trial component name.</p>
   */
  TrialComponentDisplayName?: string;
}

export namespace ExperimentConfig {
  export const filterSensitiveLog = (obj: ExperimentConfig): any => ({
    ...obj,
  });
}

export enum ProcessingS3CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

export enum ProcessingS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

/**
 * <p>Information about where and how you want to obtain the inputs for an processing
 *             job.</p>
 */
export interface ProcessingS3Input {
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
   * <p>Whether the data stored in Amazon S3 is <code>FullyReplicated</code> or
   *                 <code>ShardedByS3Key</code>.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In
   *                 <code>File</code> mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your algorithm without using the EBS volume.</p>
   */
  S3InputMode: ProcessingS3InputMode | string | undefined;

  /**
   * <p>Whether to use <code>Gzip</code> compression for Amazon S3 storage.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType | string;

  /**
   * <p>The URI for the Amazon S3 storage where you want Amazon SageMaker to download the artifacts needed
   *             to run a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path to the Amazon S3 bucket where you want Amazon SageMaker to download the inputs to
   *             run a processing job. <code>LocalPath</code> is an absolute path to the input
   *             data.</p>
   */
  LocalPath: string | undefined;
}

export namespace ProcessingS3Input {
  export const filterSensitiveLog = (obj: ProcessingS3Input): any => ({
    ...obj,
  });
}

/**
 * <p>The inputs for a processing job.</p>
 */
export interface ProcessingInput {
  /**
   * <p>The name of the inputs for the processing job.</p>
   */
  InputName: string | undefined;

  /**
   * <p>The S3 inputs for the processing job. </p>
   */
  S3Input: ProcessingS3Input | undefined;
}

export namespace ProcessingInput {
  export const filterSensitiveLog = (obj: ProcessingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about where and how you want to store the results of an
 *             processing job.</p>
 */
export interface ProcessingS3Output {
  /**
   * <p>The local path to the Amazon S3 bucket where you want Amazon SageMaker to save the results of an
   *             processing job. <code>LocalPath</code> is an absolute path to the input data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | string | undefined;

  /**
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;
}

export namespace ProcessingS3Output {
  export const filterSensitiveLog = (obj: ProcessingS3Output): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the results of a processing job.</p>
 */
export interface ProcessingOutput {
  /**
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output: ProcessingS3Output | undefined;
}

export namespace ProcessingOutput {
  export const filterSensitiveLog = (obj: ProcessingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The output configuration for the processing job.</p>
 */
export interface ProcessingOutputConfig {
  /**
   * <p>Output configuration information for a processing job.</p>
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;
}

export namespace ProcessingOutputConfig {
  export const filterSensitiveLog = (obj: ProcessingOutputConfig): any => ({
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
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;
}

export namespace ProcessingClusterConfig {
  export const filterSensitiveLog = (obj: ProcessingClusterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  /**
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

export namespace ProcessingResources {
  export const filterSensitiveLog = (obj: ProcessingResources): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a time limit for how long the processing job is allowed to run.</p>
 */
export interface ProcessingStoppingCondition {
  /**
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace ProcessingStoppingCondition {
  export const filterSensitiveLog = (obj: ProcessingStoppingCondition): any => ({
    ...obj,
  });
}

export interface CreateProcessingJobRequest {
  /**
   * <p> The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Configures the processing job to run a specified Docker container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>For each input, data is downloaded from S3 into the processing container before the
   *             processing job begins running if "S3InputMode" is set to <code>File</code>.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

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
}

export namespace CreateProcessingJobRequest {
  export const filterSensitiveLog = (obj: CreateProcessingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateProcessingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;
}

export namespace CreateProcessingJobResponse {
  export const filterSensitiveLog = (obj: CreateProcessingJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for the debug hook parameters, collection configuration, and
 *             storage paths.</p>
 */
export interface DebugHookConfig {
  /**
   * <p>Configuration information for tensor collections.</p>
   */
  CollectionConfigurations?: CollectionConfiguration[];

  /**
   * <p>Path to local storage location for tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Configuration information for the debug hook parameters.</p>
   */
  HookParameters?: { [key: string]: string };

  /**
   * <p>Path to Amazon S3 storage location for tensors.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace DebugHookConfig {
  export const filterSensitiveLog = (obj: DebugHookConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for debugging rules.</p>
 */
export interface DebugRuleConfiguration {
  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The instance type to deploy for a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p> Runtime configuration for rule container.</p>
   */
  RuleParameters?: { [key: string]: string };

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;
}

export namespace DebugRuleConfiguration {
  export const filterSensitiveLog = (obj: DebugRuleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of storage locations for TensorBoard output.</p>
 */
export interface TensorBoardOutputConfig {
  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;
}

export namespace TensorBoardOutputConfig {
  export const filterSensitiveLog = (obj: TensorBoardOutputConfig): any => ({
    ...obj,
  });
}

export interface CreateTrainingJobRequest {
  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *         <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>Configuration information for debugging rules.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>. </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

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
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code>
   *
   *             describes the input data and its location. </p>
   *         <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *         <p>Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files will be made available as input streams. They do not need to be
   *             downloaded.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *         <p>During model training, Amazon SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *         <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want Amazon SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Specifies the path to the S3 location where you want to store model artifacts. Amazon SageMaker
   *             creates subfolders for the artifacts. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             training job to connect to. Control access to and from your training container by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The name of the training job. The name must be unique within an AWS Region in an
   *             AWS account. </p>
   */
  TrainingJobName: string | undefined;
}

export namespace CreateTrainingJobRequest {
  export const filterSensitiveLog = (obj: CreateTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface CreateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace CreateTrainingJobResponse {
  export const filterSensitiveLog = (obj: CreateTrainingJobResponse): any => ({
    ...obj,
  });
}

export enum JoinSource {
  INPUT = "Input",
  NONE = "None",
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
   *             ID column, from the input. If you want Amazon SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. </p>
   *
   *         <p>For JSON or JSONLines objects, such as a JSON array, Amazon SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, Amazon SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *         <p>For CSV files, Amazon SageMaker combines the transformed data with the input data at the end of
   *             the input data and stores it in the output file. The joined data has the joined input
   *             data followed by the transformed data and the output is a CSV file. </p>
   */
  JoinSource?: JoinSource | string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want Amazon SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;
}

export namespace DataProcessing {
  export const filterSensitiveLog = (obj: DataProcessing): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the timeout and maximum number of retries for processing a transform job invocation.</p>
 */
export interface ModelClientConfig {
  /**
   * <p>The timeout value in seconds for an invocation request.</p>
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * <p>The maximum number of retries when invocation requests are failing.</p>
   */
  InvocationsMaxRetries?: number;
}

export namespace ModelClientConfig {
  export const filterSensitiveLog = (obj: ModelClientConfig): any => ({
    ...obj,
  });
}

export interface CreateTransformJobRequest {
  /**
   * <p>The name of the model that you want to use for the transform job.
   *                 <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an AWS
   *             Region in an AWS account.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

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
   * <p>The name of the transform job. The name must be unique within an AWS Region in an
   *             AWS account. </p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *         <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set the <code>SplitType</code> property to
   *                 <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   *         <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *         <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   */
  TransformResources: TransformResources | undefined;

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
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;
}

export namespace CreateTransformJobRequest {
  export const filterSensitiveLog = (obj: CreateTransformJobRequest): any => ({
    ...obj,
  });
}

export interface CreateTransformJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;
}

export namespace CreateTransformJobResponse {
  export const filterSensitiveLog = (obj: CreateTransformJobResponse): any => ({
    ...obj,
  });
}

export interface CreateTrialRequest {
  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to associate the trial with.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the trial. The name must be unique in your AWS account and is not
   *       case-sensitive.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>A list of tags to associate with the trial. You can use <a>Search</a> API to
   *       search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateTrialRequest {
  export const filterSensitiveLog = (obj: CreateTrialRequest): any => ({
    ...obj,
  });
}

export interface CreateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace CreateTrialResponse {
  export const filterSensitiveLog = (obj: CreateTrialResponse): any => ({
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
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;

  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;
}

export namespace TrialComponentArtifact {
  export const filterSensitiveLog = (obj: TrialComponentArtifact): any => ({
    ...obj,
  });
}

/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
 */
export interface TrialComponentParameterValue {
  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  StringValue?: string;

  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   */
  NumberValue?: number;
}

export namespace TrialComponentParameterValue {
  export const filterSensitiveLog = (obj: TrialComponentParameterValue): any => ({
    ...obj,
  });
}

export enum TrialComponentPrimaryStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
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
  export const filterSensitiveLog = (obj: TrialComponentStatus): any => ({
    ...obj,
  });
}

export interface CreateTrialComponentRequest {
  /**
   * <p>The hyperparameters for the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

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
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the component. The name must be unique in your AWS account and is not
   *       case-sensitive.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>A list of tags to associate with the component. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };
}

export namespace CreateTrialComponentRequest {
  export const filterSensitiveLog = (obj: CreateTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface CreateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace CreateTrialComponentResponse {
  export const filterSensitiveLog = (obj: CreateTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface CreateUserProfileRequest {
  /**
   * <p>The username of the associated AWS Single Sign-On User for this UserProfile.  If the Domain's AuthMode is SSO, this field is
   *            required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;

  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *            If the Domain's AuthMode is SSO, this field is required.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>A name for the UserProfile.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateUserProfileRequest {
  export const filterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace CreateUserProfileResponse {
  export const filterSensitiveLog = (obj: CreateUserProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 */
export interface OidcConfig {
  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   */
  ClientSecret: string | undefined;
}

export namespace OidcConfig {
  export const filterSensitiveLog = (obj: OidcConfig): any => ({
    ...obj,
    ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
  });
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. For more information, see .</p>
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
  export const filterSensitiveLog = (obj: SourceIpConfig): any => ({
    ...obj,
  });
}

export interface CreateWorkforceRequest {
  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and
   *       organize our workforce. Each tag consists of a key and a value,
   *       both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.
   *       Do not use <code>CognitoConfig</code> if you specify values for
   *       <code>OidcConfig</code>.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>Use this parameter to configure an Amazon Cognito private workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   *
   *          <p>Do not use <code>OidcConfig</code> if you specify values for
   *       <code>CognitoConfig</code>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
   *             list of IP addresses for a private workforce. For more information, see .</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;
}

export namespace CreateWorkforceRequest {
  export const filterSensitiveLog = (obj: CreateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface CreateWorkforceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn: string | undefined;
}

export namespace CreateWorkforceResponse {
  export const filterSensitiveLog = (obj: CreateWorkforceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
 *       One to ten groups can be used to create a single private work team.
 *       When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *       private work teams. If you add a user group to a private work team, all workers in that user group
 *       are added to the work team.</p>
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies
   *       user groups in your OIDC IdP. Each user group is
   *       made up of a group of private workers.</p>
   */
  Groups: string[] | undefined;
}

export namespace OidcMemberDefinition {
  export const filterSensitiveLog = (obj: OidcMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the Amazon Cognito user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *       One to ten groups can be used to create a single private work team.
   *       When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *       private work teams. If you add a user group to a private work team, all workers in that user group
   *       are added to the work team.</p>
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

export namespace MemberDefinition {
  export const filterSensitiveLog = (obj: MemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configures SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

export interface CreateWorkteamRequest {
  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the Amazon Cognito user pool that makes up the work team. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>All of the <code>CognitoMemberDefinition</code> objects that make up the member
   *             definition must have the same <code>ClientId</code> and <code>UserPool</code>
   *             values.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName?: string;

  /**
   * <p>An array of key-value pairs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i> AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateWorkteamRequest {
  export const filterSensitiveLog = (obj: CreateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkteamResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   */
  WorkteamArn?: string;
}

export namespace CreateWorkteamResponse {
  export const filterSensitiveLog = (obj: CreateWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DataCaptureConfigSummary {
  /**
   * <p></p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p></p>
   */
  CaptureStatus: CaptureStatus | string | undefined;

  /**
   * <p></p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p></p>
   */
  EnableCapture: boolean | undefined;

  /**
   * <p></p>
   */
  CurrentSamplingPercentage: number | undefined;
}

export namespace DataCaptureConfigSummary {
  export const filterSensitiveLog = (obj: DataCaptureConfigSummary): any => ({
    ...obj,
  });
}

export enum RuleEvaluationStatus {
  ERROR = "Error",
  IN_PROGRESS = "InProgress",
  ISSUES_FOUND = "IssuesFound",
  NO_ISSUES_FOUND = "NoIssuesFound",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>The name of the rule configuration</p>
   */
  RuleConfigurationName?: string;
}

export namespace DebugRuleEvaluationStatus {
  export const filterSensitiveLog = (obj: DebugRuleEvaluationStatus): any => ({
    ...obj,
  });
}

export interface DeleteAlgorithmInput {
  /**
   * <p>The name of the algorithm to delete.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DeleteAlgorithmInput {
  export const filterSensitiveLog = (obj: DeleteAlgorithmInput): any => ({
    ...obj,
  });
}

export interface DeleteAppRequest {
  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DeleteAppRequest {
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
}

export interface DeleteCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to delete.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DeleteCodeRepositoryInput {
  export const filterSensitiveLog = (obj: DeleteCodeRepositoryInput): any => ({
    ...obj,
  });
}

export enum RetentionType {
  Delete = "Delete",
  Retain = "Retain",
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
  export const filterSensitiveLog = (obj: RetentionPolicy): any => ({
    ...obj,
  });
}

export interface DeleteDomainRequest {
  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteEndpointInput {
  export const filterSensitiveLog = (obj: DeleteEndpointInput): any => ({
    ...obj,
  });
}

export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DeleteEndpointConfigInput {
  export const filterSensitiveLog = (obj: DeleteEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DeleteExperimentRequest {
  export const filterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
    ...obj,
  });
}

export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

export namespace DeleteExperimentResponse {
  export const filterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DeleteFlowDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionResponse {}

export namespace DeleteFlowDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DeleteHumanTaskUiRequest {
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiResponse {}

export namespace DeleteHumanTaskUiResponse {
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiResponse): any => ({
    ...obj,
  });
}

export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

export namespace DeleteModelInput {
  export const filterSensitiveLog = (obj: DeleteModelInput): any => ({
    ...obj,
  });
}

export interface DeleteModelPackageInput {
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DeleteModelPackageInput {
  export const filterSensitiveLog = (obj: DeleteModelPackageInput): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DeleteMonitoringScheduleRequest {
  export const filterSensitiveLog = (obj: DeleteMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the Amazon SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DeleteNotebookInstanceInput {
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DeleteNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface DeleteTagsInput {
  /**
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteTagsInput {
  export const filterSensitiveLog = (obj: DeleteTagsInput): any => ({
    ...obj,
  });
}

export interface DeleteTagsOutput {}

export namespace DeleteTagsOutput {
  export const filterSensitiveLog = (obj: DeleteTagsOutput): any => ({
    ...obj,
  });
}

export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

export namespace DeleteTrialRequest {
  export const filterSensitiveLog = (obj: DeleteTrialRequest): any => ({
    ...obj,
  });
}
