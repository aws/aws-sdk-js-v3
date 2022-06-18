// smithy-typescript generated code
export enum CapacitySizeType {
  CAPACITY_PERCENT = "CAPACITY_PERCENT",
  INSTANCE_COUNT = "INSTANCE_COUNT",
}

export enum TrafficRoutingConfigType {
  ALL_AT_ONCE = "ALL_AT_ONCE",
  CANARY = "CANARY",
  LINEAR = "LINEAR",
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

export enum CaptureMode {
  INPUT = "Input",
  OUTPUT = "Output",
}

export enum CaptureStatus {
  STARTED = "Started",
  STOPPED = "Stopped",
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

export enum ConditionOutcome {
  FALSE = "False",
  TRUE = "True",
}

export enum RepositoryAccessMode {
  PLATFORM = "Platform",
  VPC = "Vpc",
}

export enum ContainerMode {
  MULTI_MODEL = "MultiModel",
  SINGLE_MODEL = "SingleModel",
}

export enum ModelCacheSetting {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum HyperParameterScalingType {
  AUTO = "Auto",
  LINEAR = "Linear",
  LOGARITHMIC = "Logarithmic",
  REVERSE_LOGARITHMIC = "ReverseLogarithmic",
}

export enum ParameterType {
  CATEGORICAL = "Categorical",
  CONTINUOUS = "Continuous",
  FREE_TEXT = "FreeText",
  INTEGER = "Integer",
}

export enum HyperParameterTuningJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize",
}

export enum ProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression",
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

export enum ProcessingS3DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key",
}

export enum ProcessingS3InputMode {
  FILE = "File",
  PIPE = "Pipe",
}

export enum ProcessingS3UploadMode {
  CONTINUOUS = "Continuous",
  END_OF_JOB = "EndOfJob",
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

export enum EdgePresetDeploymentType {
  GreengrassV2Component = "GreengrassV2Component",
}

export enum RStudioServerProAccessStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export enum RStudioServerProUserGroup {
  Admin = "R_STUDIO_ADMIN",
  User = "R_STUDIO_USER",
}

export enum NotebookOutputOption {
  Allowed = "Allowed",
  Disabled = "Disabled",
}

export enum ProductionVariantAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

export enum FeatureType {
  FRACTIONAL = "Fractional",
  INTEGRAL = "Integral",
  STRING = "String",
}

export enum HyperParameterTuningJobStrategyType {
  BAYESIAN = "Bayesian",
  RANDOM = "Random",
}

export enum TrainingJobEarlyStoppingType {
  AUTO = "Auto",
  OFF = "Off",
}

export enum HyperParameterTuningJobWarmStartType {
  IDENTICAL_DATA_AND_ALGORITHM = "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING = "TransferLearning",
}

export enum TrafficType {
  PHASES = "PHASES",
}

export enum RecommendationJobType {
  ADVANCED = "Advanced",
  DEFAULT = "Default",
}

export enum InferenceExecutionMode {
  DIRECT = "Direct",
  SERIAL = "Serial",
}

export enum MonitoringProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression",
}

export enum MonitoringType {
  DATA_QUALITY = "DataQuality",
  MODEL_BIAS = "ModelBias",
  MODEL_EXPLAINABILITY = "ModelExplainability",
  MODEL_QUALITY = "ModelQuality",
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
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_16XLARGE = "ml.m5d.16xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_8XLARGE = "ml.m5d.8xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
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

export enum DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key",
}

export enum InputMode {
  FILE = "File",
  PIPE = "Pipe",
}

export enum RedshiftResultCompressionType {
  BZIP2 = "BZIP2",
  GZIP = "GZIP",
  NONE = "None",
  SNAPPY = "SNAPPY",
  ZSTD = "ZSTD",
}

export enum RedshiftResultFormat {
  CSV = "CSV",
  PARQUET = "PARQUET",
}

export enum ProcessingS3CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

export enum ProcessingS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

export enum StudioLifecycleConfigAppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
}

export enum JoinSource {
  INPUT = "Input",
  NONE = "None",
}

export enum TrialComponentPrimaryStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum RuleEvaluationStatus {
  ERROR = "Error",
  IN_PROGRESS = "InProgress",
  ISSUES_FOUND = "IssuesFound",
  NO_ISSUES_FOUND = "NoIssuesFound",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum RetentionType {
  Delete = "Delete",
  Retain = "Retain",
}

export enum DomainStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export enum EdgePackagingJobStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  Starting = "STARTING",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

export enum EdgePresetDeploymentStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating",
}

export enum VariantStatus {
  ACTIVATING_TRAFFIC = "ActivatingTraffic",
  BAKING = "Baking",
  CREATING = "Creating",
  DELETING = "Deleting",
  UPDATING = "Updating",
}

export enum FeatureGroupStatus {
  CREATED = "Created",
  CREATE_FAILED = "CreateFailed",
  CREATING = "Creating",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
}

export enum OfflineStoreStatusValue {
  ACTIVE = "Active",
  BLOCKED = "Blocked",
  DISABLED = "Disabled",
}

export enum FlowDefinitionStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
}

export enum HumanTaskUiStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum ImageStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export enum ImageVersionStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

export enum RecommendationJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export enum LabelingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum DetailedModelPackageStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted",
}

export enum ModelPackageGroupStatus {
  COMPLETED = "Completed",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

export enum ExecutionStatus {
  COMPLETED = "Completed",
  COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum ScheduleStatus {
  FAILED = "Failed",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  STOPPED = "Stopped",
}

export enum NotebookInstanceStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Updating = "Updating",
}

export enum PipelineStatus {
  ACTIVE = "Active",
}

export enum PipelineExecutionStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

export enum ProcessingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum ProjectStatus {
  CREATE_COMPLETED = "CreateCompleted",
  CREATE_FAILED = "CreateFailed",
  CREATE_IN_PROGRESS = "CreateInProgress",
  DELETE_COMPLETED = "DeleteCompleted",
  DELETE_FAILED = "DeleteFailed",
  DELETE_IN_PROGRESS = "DeleteInProgress",
  PENDING = "Pending",
  UPDATE_COMPLETED = "UpdateCompleted",
  UPDATE_FAILED = "UpdateFailed",
  UPDATE_IN_PROGRESS = "UpdateInProgress",
}

export enum ProfilingStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum SecondaryStatus {
  COMPLETED = "Completed",
  DOWNLOADING = "Downloading",
  DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage",
  FAILED = "Failed",
  INTERRUPTED = "Interrupted",
  LAUNCHING_ML_INSTANCES = "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded",
  PREPARING_TRAINING_STACK = "PreparingTrainingStack",
  RESTARTING = "Restarting",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  TRAINING = "Training",
  UPDATING = "Updating",
  UPLOADING = "Uploading",
}

export enum TransformJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export enum UserProfileStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export enum Direction {
  ASCENDANTS = "Ascendants",
  BOTH = "Both",
  DESCENDANTS = "Descendants",
}

export enum EndpointConfigSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

export enum EndpointSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

export enum FeatureGroupSortBy {
  CREATION_TIME = "CreationTime",
  FEATURE_GROUP_STATUS = "FeatureGroupStatus",
  NAME = "Name",
  OFFLINE_STORE_STATUS = "OfflineStoreStatus",
}

export enum FeatureGroupSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum Operator {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo",
  IN = "In",
  LESS_THAN = "LessThan",
  LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo",
  NOT_EQUALS = "NotEquals",
  NOT_EXISTS = "NotExists",
}

export enum SagemakerServicecatalogStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum ResourceType {
  ENDPOINT = "Endpoint",
  EXPERIMENT = "Experiment",
  EXPERIMENT_TRIAL = "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent",
  FEATURE_GROUP = "FeatureGroup",
  MODEL_PACKAGE = "ModelPackage",
  MODEL_PACKAGE_GROUP = "ModelPackageGroup",
  PIPELINE = "Pipeline",
  PIPELINE_EXECUTION = "PipelineExecution",
  PROJECT = "Project",
  TRAINING_JOB = "TrainingJob",
}

export enum HyperParameterTuningJobSortByOptions {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

export enum ImageSortBy {
  CREATION_TIME = "CREATION_TIME",
  IMAGE_NAME = "IMAGE_NAME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
}

export enum ImageSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum ImageVersionSortBy {
  CREATION_TIME = "CREATION_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  VERSION = "VERSION",
}

export enum ImageVersionSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum SortActionsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum SortArtifactsBy {
  CREATION_TIME = "CreationTime",
}

export enum SortAssociationsBy {
  CREATION_TIME = "CreationTime",
  DESTINATION_ARN = "DestinationArn",
  DESTINATION_TYPE = "DestinationType",
  SOURCE_ARN = "SourceArn",
  SOURCE_TYPE = "SourceType",
}

export enum ListCompilationJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum SortContextsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum MonitoringJobDefinitionSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ListDeviceFleetsSortBy {
  CreationTime = "CREATION_TIME",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  Name = "NAME",
}

export enum ListEdgePackagingJobsSortBy {
  CreationTime = "CREATION_TIME",
  EdgePackagingJobStatus = "STATUS",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  ModelName = "MODEL_NAME",
  Name = "NAME",
}

export enum OrderKey {
  Ascending = "Ascending",
  Descending = "Descending",
}

export enum SortExperimentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ListInferenceRecommendationsJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum SortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum ListLabelingJobsForWorkteamSortByOptions {
  CREATION_TIME = "CreationTime",
}

export enum SortLineageGroupsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ModelMetadataFilterType {
  DOMAIN = "Domain",
  FRAMEWORK = "Framework",
  FRAMEWORKVERSION = "FrameworkVersion",
  TASK = "Task",
}

export enum ModelPackageGroupSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ModelPackageType {
  BOTH = "Both",
  UNVERSIONED = "Unversioned",
  VERSIONED = "Versioned",
}

export enum ModelPackageSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ModelSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

export enum MonitoringExecutionSortKey {
  CREATION_TIME = "CreationTime",
  SCHEDULED_TIME = "ScheduledTime",
  STATUS = "Status",
}

export enum MonitoringScheduleSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum NotebookInstanceLifecycleConfigSortKey {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name",
}

export enum NotebookInstanceLifecycleConfigSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum NotebookInstanceSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum NotebookInstanceSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum SortPipelineExecutionsBy {
  CREATION_TIME = "CreationTime",
  PIPELINE_EXECUTION_ARN = "PipelineExecutionArn",
}

export enum StepStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

export enum SortPipelinesBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ProjectSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ProjectSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum StudioLifecycleConfigSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
  Name = "Name",
}

export enum TrainingJobSortByOptions {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Name = "Name",
  Status = "Status",
}

export enum SortTrialComponentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum SortTrialsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum UserProfileSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
}

export enum ListWorkforcesSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
}

export enum ListWorkteamsSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
}

export enum SearchSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum VariantPropertyType {
  DataCaptureConfig = "DataCaptureConfig",
  DesiredInstanceCount = "DesiredInstanceCount",
  DesiredWeight = "DesiredWeight",
}
