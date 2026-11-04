// smithy-typescript generated code
import type {
  BlueprintCategory,
  ConnectionScope,
  ConnectionType,
  DataZoneEntityType,
  DesignationType,
  EnvironmentStatus,
  FileFormat,
  FilterOperator,
  FilterStatus,
  FormTypeStatus,
  GlossaryStatus,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GraphEntityType,
  GroupProfileStatus,
  GroupSearchType,
  InventorySearchScope,
  ManagedPolicyType,
  NetworkAccessType,
  NotebookExportStatus,
  NotebookRunStatus,
  NotebookStatus,
  NotebookType,
  NotifyOnState,
  ProjectStatus,
  RejectRuleBehavior,
  RelationDirection,
  RelationType,
  ResolutionStrategy,
  RuleAction,
  RuleTargetType,
  RuleType,
  SearchOutputAdditionalAttribute,
  SortKey,
  SortOrder,
  Status,
  SubscriptionGrantCreationMode,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TargetEntityType,
  TimeSeriesEntityType,
  TriggerSourceType,
  TypesSearchScope,
  UserProfileStatus,
  UserProfileType,
  UserSearchType,
} from "./enums";
import type {
  AccountSource,
  ActionParameters,
  AdditionalAttributes,
  AggregationListItem,
  AggregationOutput,
  AssetItem,
  AssetListingItem,
  AssetTypeItem,
  AwsLocation,
  CellInformation,
  ColumnFilterConfiguration,
  ComputeConfig,
  ConfigurableEnvironmentAction,
  Configuration,
  ConnectionPropertiesOutput,
  ConnectionPropertiesPatch,
  CustomParameter,
  Deployment,
  DeploymentProperties,
  EnvironmentConfig,
  EnvironmentConfiguration,
  EnvironmentConfigurationUserParameter,
  EnvironmentDeploymentDetails,
  EnvironmentParameter,
  FormEntryOutput,
  FormOutput,
  GitMetadata,
  MatchRationaleItem,
  Model,
  NotebookError,
  OwnerProperties,
  PhysicalEndpoint,
  PolicyGrantPrincipal,
  ProjectDeletionError,
  ProvisioningProperties,
  Resource,
  ResourceTag,
  ResourceTagParameter,
  RowFilterExpression,
  SubscribedListing,
  SubscribedPrincipal,
  TermRelations,
  UserProfileDetails,
} from "./models_0";
import type {
  DataProductListingItem,
  DataProductResultItem,
  EncryptionConfiguration,
  FailureCause,
  GrantedEntity,
  Import,
  RuleDetail,
  RuleScope,
  RuleTarget,
  SubscribedAsset,
  SubscriptionTargetForm,
  TimeSeriesDataPointFormOutput,
} from "./models_1";

/**
 * @public
 */
export interface GetNotebookInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookOutput {
  /**
   * The identifier of the notebook.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the notebook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ordered list of cells in the notebook.
   *
   * @public
   */
  cellOrder: CellInformation[] | undefined;

  /**
   * The status of the notebook.
   *
   * @public
   */
  status: NotebookStatus | undefined;

  /**
   * The type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the notebook was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the user who locked the notebook.
   *
   * @public
   */
  lockedBy?: string | undefined;

  /**
   * The timestamp of when the notebook was locked.
   *
   * @public
   */
  lockedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook lock expires.
   *
   * @public
   */
  lockExpiresAt?: Date | undefined;

  /**
   * The identifier of the compute associated with the notebook.
   *
   * @public
   */
  computeId?: string | undefined;

  /**
   * The metadata of the notebook.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters of the notebook.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The environment configuration of the notebook.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * The error details if the notebook is in a failed state.
   *
   * @public
   */
  error?: NotebookError | undefined;

  /**
   * The Git metadata associated with the notebook.
   *
   * @public
   */
  gitMetadata?: GitMetadata | undefined;
}

/**
 * @public
 */
export interface ListNotebooksInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to list notebooks.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that owns the notebooks.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The maximum number of notebooks to return in a single call. When the number of notebooks exceeds the value of `MaxResults`, the response contains a `NextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The sort order for the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The field to sort the results by.
   *
   * @public
   */
  sortBy?: SortKey | undefined;

  /**
   * The status to filter notebooks by.
   *
   * @public
   */
  status?: NotebookStatus | undefined;

  /**
   * The type to filter notebooks by.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * When the number of notebooks is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notebooks, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotebooks` to list the next set of notebooks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of a notebook in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotebookSummary {
  /**
   * The identifier of the notebook.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the notebook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the notebook.
   *
   * @public
   */
  status: NotebookStatus | undefined;

  /**
   * The type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the notebook was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebooksOutput {
  /**
   * The results of the `ListNotebooks` action.
   *
   * @public
   */
  items?: NotebookSummary[] | undefined;

  /**
   * When the number of notebooks is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notebooks, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotebooks` to list the next set of notebooks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The updated description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated status of the notebook.
   *
   * @public
   */
  status?: NotebookStatus | undefined;

  /**
   * The updated name of the notebook.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated ordered list of cells in the notebook.
   *
   * @public
   */
  cellOrder?: CellInformation[] | undefined;

  /**
   * The updated type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The updated metadata for the notebook, specified as key-value pairs.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The updated sensitive parameters for the notebook, specified as key-value pairs.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The updated environment configuration for the notebook.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookOutput {
  /**
   * The identifier of the notebook.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the notebook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ordered list of cells in the notebook.
   *
   * @public
   */
  cellOrder: CellInformation[] | undefined;

  /**
   * The status of the notebook.
   *
   * @public
   */
  status: NotebookStatus | undefined;

  /**
   * The type of the notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the notebook was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the user who locked the notebook.
   *
   * @public
   */
  lockedBy?: string | undefined;

  /**
   * The timestamp of when the notebook was locked.
   *
   * @public
   */
  lockedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook lock expires.
   *
   * @public
   */
  lockExpiresAt?: Date | undefined;

  /**
   * The identifier of the compute associated with the notebook.
   *
   * @public
   */
  computeId?: string | undefined;

  /**
   * The metadata of the notebook.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters of the notebook.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The environment configuration of the notebook.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * The error details if the notebook is in a failed state.
   *
   * @public
   */
  error?: NotebookError | undefined;

  /**
   * The Git metadata associated with the notebook.
   *
   * @public
   */
  gitMetadata?: GitMetadata | undefined;
}

/**
 * @public
 */
export interface GetNotebookExportInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook export exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook export.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The error details of a failed notebook export in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotebookExportError {
  /**
   * The error message. The maximum length is 256 characters.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The Amazon Simple Storage Service destination for a notebook export in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The Amazon Simple Storage Service URI of the exported notebook.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * The output location for a notebook export in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export type OutputLocation =
  | OutputLocation.S3Member
  | OutputLocation.$UnknownMember;

/**
 * @public
 */
export namespace OutputLocation {
  /**
   * The Amazon Simple Storage Service destination for the notebook export.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Destination;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Destination) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetNotebookExportOutput {
  /**
   * The identifier of the notebook export.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  notebookId: string | undefined;

  /**
   * The file format of the notebook export.
   *
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * The status of the notebook export.
   *
   * @public
   */
  status: NotebookExportStatus | undefined;

  /**
   * The output location of the exported notebook in Amazon Simple Storage Service.
   *
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * The error details if the notebook export failed.
   *
   * @public
   */
  error?: NotebookExportError | undefined;

  /**
   * The timestamp of when the notebook export completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook export was started.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who started the notebook export.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookExportInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to export the notebook.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook to export.
   *
   * @public
   */
  notebookIdentifier: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The file format for the notebook export. Valid values are `PDF` and `IPYNB`.
   *
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookExportOutput {
  /**
   * The identifier of the notebook export.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  notebookId: string | undefined;

  /**
   * The file format of the notebook export.
   *
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * The status of the notebook export.
   *
   * @public
   */
  status: NotebookExportStatus | undefined;

  /**
   * The timestamp of when the notebook export was started.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who started the notebook export.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookRunInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run exists.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook run.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * The error details of a failed notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotebookRunError {
  /**
   * The error message. The maximum length is 1024 characters.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The network configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NetworkConfig {
  /**
   * The network access type for the notebook run. Valid values are `PUBLIC_INTERNET_ONLY` and `VPC_ONLY`.
   *
   * @public
   */
  networkAccessType: NetworkAccessType | undefined;

  /**
   * The identifier of the VPC for the notebook run. This is required when the network access type is `VPC_ONLY`.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifiers of the subnets for the notebook run. You can specify up to 10 subnets.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The identifiers of the security groups for the notebook run. You can specify up to 5 security groups.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * The notification configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotificationConfig {
  /**
   * The notebook run states that trigger notifications. You can specify up to 7 states, and the ordering of the states is not significant.
   *
   * @public
   */
  notifyOn: NotifyOnState[] | undefined;
}

/**
 * The storage configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface StorageConfig {
  /**
   * The Amazon Simple Storage Service path for the project storage.
   *
   * @public
   */
  projectS3Path?: string | undefined;

  /**
   * The ARN of the KMS key used for encryption.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * The timeout configuration for a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface TimeoutConfig {
  /**
   * The timeout for the notebook run, in minutes. The minimum value is 60 minutes (1 hour), the maximum value is 1440 minutes (24 hours), and the default value is 720 minutes (12 hours).
   *
   * @public
   */
  runTimeoutInMinutes?: number | undefined;
}

/**
 * The source that triggered a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface TriggerSource {
  /**
   * The type of the trigger source. Valid values are `MANUAL`, `SCHEDULED`, and `WORKFLOW`.
   *
   * @public
   */
  type?: TriggerSourceType | undefined;

  /**
   * The name of the trigger source.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookRunOutput {
  /**
   * The identifier of the notebook run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook run.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  notebookId: string | undefined;

  /**
   * The identifier of the schedule associated with the notebook run.
   *
   * @public
   */
  scheduleId?: string | undefined;

  /**
   * The status of the notebook run.
   *
   * @public
   */
  status: NotebookRunStatus | undefined;

  /**
   * The ordered list of cells in the notebook run.
   *
   * @public
   */
  cellOrder?: CellInformation[] | undefined;

  /**
   * The metadata of the notebook run.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters of the notebook run.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The compute configuration of the notebook run.
   *
   * @public
   */
  computeConfiguration?: ComputeConfig | undefined;

  /**
   * The network configuration of the notebook run.
   *
   * @public
   */
  networkConfiguration?: NetworkConfig | undefined;

  /**
   * The timeout configuration of the notebook run.
   *
   * @public
   */
  timeoutConfiguration?: TimeoutConfig | undefined;

  /**
   * The environment configuration of the notebook run, including image version and package settings.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * The storage configuration of the notebook run, including the Amazon Simple Storage Service path and KMS key ARN.
   *
   * @public
   */
  storageConfiguration?: StorageConfig | undefined;

  /**
   * The notification configuration of the notebook run, including the notebook run states that trigger notifications.
   *
   * @public
   */
  notificationConfiguration?: NotificationConfig | undefined;

  /**
   * The source that triggered the notebook run.
   *
   * @public
   */
  triggerSource?: TriggerSource | undefined;

  /**
   * The error details if the notebook run failed.
   *
   * @public
   */
  error?: NotebookRunError | undefined;

  /**
   * The timestamp of when the notebook run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook run was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook run.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the notebook run started executing.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook run completed.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookRunsInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to list notebook runs.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that owns the notebook runs.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The identifier of the notebook to filter runs by.
   *
   * @public
   */
  notebookIdentifier?: string | undefined;

  /**
   * The status to filter notebook runs by.
   *
   * @public
   */
  status?: NotebookRunStatus | undefined;

  /**
   * The identifier of the schedule to filter notebook runs by.
   *
   * @public
   */
  scheduleIdentifier?: string | undefined;

  /**
   * The maximum number of notebook runs to return in a single call. When the number of notebook runs exceeds the value of `MaxResults`, the response contains a `NextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The sort order for the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * When the number of notebook runs is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notebook runs, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotebookRuns` to list the next set of notebook runs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of a notebook run in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface NotebookRunSummary {
  /**
   * The identifier of the notebook run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook run.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  notebookId: string | undefined;

  /**
   * The identifier of the schedule associated with the notebook run.
   *
   * @public
   */
  scheduleId?: string | undefined;

  /**
   * The status of the notebook run.
   *
   * @public
   */
  status: NotebookRunStatus | undefined;

  /**
   * The source that triggered the notebook run.
   *
   * @public
   */
  triggerSource?: TriggerSource | undefined;

  /**
   * The timestamp of when the notebook run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook run was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook run.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the notebook run started executing.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook run completed.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookRunsOutput {
  /**
   * The results of the `ListNotebookRuns` action.
   *
   * @public
   */
  items?: NotebookRunSummary[] | undefined;

  /**
   * When the number of notebook runs is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of notebook runs, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListNotebookRuns` to list the next set of notebook runs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookRunInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run is started.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that owns the notebook run.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The identifier of the notebook to run.
   *
   * @public
   */
  notebookIdentifier: string | undefined;

  /**
   * The identifier of the schedule associated with the notebook run.
   *
   * @public
   */
  scheduleIdentifier?: string | undefined;

  /**
   * The compute configuration for the notebook run, including instance type and environment version.
   *
   * @public
   */
  computeConfiguration?: ComputeConfig | undefined;

  /**
   * The network configuration for the notebook run, including network access type and optional VPC settings.
   *
   * @public
   */
  networkConfiguration?: NetworkConfig | undefined;

  /**
   * The timeout configuration for the notebook run. The default timeout is 720 minutes (12 hours) and the maximum is 1440 minutes (24 hours).
   *
   * @public
   */
  timeoutConfiguration?: TimeoutConfig | undefined;

  /**
   * The notification configuration for the notebook run. Use this to specify the notebook run states that trigger notifications.
   *
   * @public
   */
  notificationConfiguration?: NotificationConfig | undefined;

  /**
   * The source that triggered the notebook run.
   *
   * @public
   */
  triggerSource?: TriggerSource | undefined;

  /**
   * The metadata for the notebook run, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters for the notebook run, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookRunOutput {
  /**
   * The identifier of the notebook run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook run.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The identifier of the notebook.
   *
   * @public
   */
  notebookId: string | undefined;

  /**
   * The identifier of the schedule associated with the notebook run.
   *
   * @public
   */
  scheduleId?: string | undefined;

  /**
   * The status of the notebook run.
   *
   * @public
   */
  status: NotebookRunStatus | undefined;

  /**
   * The ordered list of cells in the notebook run.
   *
   * @public
   */
  cellOrder?: CellInformation[] | undefined;

  /**
   * The metadata of the notebook run.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The sensitive parameters of the notebook run.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The compute configuration of the notebook run.
   *
   * @public
   */
  computeConfiguration?: ComputeConfig | undefined;

  /**
   * The network configuration of the notebook run.
   *
   * @public
   */
  networkConfiguration?: NetworkConfig | undefined;

  /**
   * The timeout configuration of the notebook run.
   *
   * @public
   */
  timeoutConfiguration?: TimeoutConfig | undefined;

  /**
   * The environment configuration of the notebook run, including image version and package settings.
   *
   * @public
   */
  environmentConfiguration?: EnvironmentConfig | undefined;

  /**
   * The storage configuration of the notebook run, including the Amazon Simple Storage Service path and KMS key ARN.
   *
   * @public
   */
  storageConfiguration?: StorageConfig | undefined;

  /**
   * The notification configuration of the notebook run, including the notebook run states that trigger notifications.
   *
   * @public
   */
  notificationConfiguration?: NotificationConfig | undefined;

  /**
   * The source that triggered the notebook run.
   *
   * @public
   */
  triggerSource?: TriggerSource | undefined;

  /**
   * The error details if the notebook run failed.
   *
   * @public
   */
  error?: NotebookRunError | undefined;

  /**
   * The timestamp of when the notebook run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who created the notebook run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the notebook run was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the user who last updated the notebook run.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when the notebook run started executing.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp of when the notebook run completed.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StopNotebookRunInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run is stopped.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the notebook run to stop.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopNotebookRunOutput {
  /**
   * The identifier of the notebook run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that owns the notebook run.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The status of the notebook run.
   *
   * @public
   */
  status: NotebookRunStatus | undefined;
}

/**
 * @public
 */
export interface PostLineageEventInput {
  /**
   * The ID of the domain where you want to post a data lineage event.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The data lineage event that you want to post. Only open-lineage run event are supported as events.
   *
   * @public
   */
  event: Uint8Array | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PostLineageEventOutput {
  /**
   * The ID of the lineage event.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the domain.
   *
   * @public
   */
  domainId?: string | undefined;
}

/**
 * The time series data points form.
 *
 * @public
 */
export interface TimeSeriesDataPointFormInput {
  /**
   * The name of the time series data points form.
   *
   * @public
   */
  formName: string | undefined;

  /**
   * The ID of the type of the time series data points form.
   *
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * The revision type of the time series data points form.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The timestamp of the time series data points form.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The content of the time series data points form.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsInput {
  /**
   * The ID of the Amazon DataZone domain in which you want to post time series data points.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the asset for which you want to post time series data points.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the asset for which you want to post data points.
   *
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * The forms that contain the data points that you want to post.
   *
   * @public
   */
  forms: TimeSeriesDataPointFormInput[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PostTimeSeriesDataPointsOutput {
  /**
   * The ID of the Amazon DataZone domain in which you want to post time series data points.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the asset for which you want to post time series data points.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The type of the asset for which you want to post data points.
   *
   * @public
   */
  entityType?: TimeSeriesEntityType | undefined;

  /**
   * The forms that contain the data points that you have posted.
   *
   * @public
   */
  forms?: TimeSeriesDataPointFormOutput[] | undefined;
}

/**
 * @public
 */
export interface PutDataExportConfigurationInput {
  /**
   * The domain ID for which you want to create data export configuration details.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * Specifies that the export is to be enabled as part of creating data export configuration details.
   *
   * @public
   */
  enableExport: boolean | undefined;

  /**
   * The encryption configuration as part of creating data export configuration details.
   *
   * The KMS key provided here as part of encryptionConfiguration must have the required permissions as described in [KMS permissions for exporting asset metadata in Amazon SageMaker Unified Studio](https://docs.aws.amazon.com/sagemaker-unified-studio/latest/adminguide/sagemaker-unified-studio-export-asset-metadata-kms-permissions.html).
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDataExportConfigurationOutput {}

/**
 * A search filter in Amazon DataZone.
 *
 * @public
 */
export interface Filter {
  /**
   * A search filter attribute in Amazon DataZone.
   *
   * @public
   */
  attribute: string | undefined;

  /**
   * A search filter string value in Amazon DataZone.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * A search filter integer value in Amazon DataZone.
   *
   * @public
   */
  intValue?: number | undefined;

  /**
   * Specifies the search filter operator.
   *
   * @public
   */
  operator?: FilterOperator | undefined;
}

/**
 * The pattern describing the query's relational traversal.
 *
 * @public
 */
export interface RelationPattern {
  /**
   * The type of relation to query.
   *
   * @public
   */
  relationType: RelationType | undefined;

  /**
   * The direction to query.
   *
   * @public
   */
  relationDirection: RelationDirection | undefined;

  /**
   * The number of hops to query.
   *
   * @public
   */
  maxPathLength?: number | undefined;
}

/**
 * The summary and output forms of a LineageNode
 *
 * @public
 */
export interface LineageNodeItem {
  /**
   * The ID of the domain of the data lineage node.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the data lineage node.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data lineage node.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the data lineage node was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data lineage node.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the data lineage node was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who updated the data lineage node.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The ID of the data lineage node.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the type of the data lineage node.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The type of the revision of the data lineage node.
   *
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * The alternate ID of the data lineage node.
   *
   * @public
   */
  sourceIdentifier?: string | undefined;

  /**
   * The event timestamp of the data lineage node.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * The forms included in the additional attributes of a data lineage node.
   *
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * The IDs of the upstream data lineage nodes.
   *
   * @public
   */
  upstreamLineageNodeIds?: string[] | undefined;

  /**
   * The IDs of the downstream data lineage nodes.
   *
   * @public
   */
  downstreamLineageNodeIds?: string[] | undefined;
}

/**
 * Resulting entity from the query.
 *
 * @public
 */
export type ResultItem =
  | ResultItem.LineageNodeMember
  | ResultItem.$UnknownMember;

/**
 * @public
 */
export namespace ResultItem {
  /**
   * Resulting data lineage node from the query.
   *
   * @public
   */
  export interface LineageNodeMember {
    lineageNode: LineageNodeItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lineageNode?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lineageNode: (value: LineageNodeItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface QueryGraphOutput {
  /**
   * The results of the `QueryGraph` action.
   *
   * @public
   */
  items?: ResultItem[] | undefined;

  /**
   * When the number of entities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of entities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `QueryGraph` to list the next set of entities.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the automatically generated business metadata that is rejected.
 *
 * @public
 */
export interface RejectChoice {
  /**
   * Specifies the target (for example, a column name) where a prediction can be rejected.
   *
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * Specifies the the automatically generated business metadata that can be rejected.
   *
   * @public
   */
  predictionChoices?: number[] | undefined;
}

/**
 * Specifies the rule and the threshold under which a prediction can be rejected.
 *
 * @public
 */
export interface RejectRule {
  /**
   * Specifies whether you want to reject the top prediction for all targets or none.
   *
   * @public
   */
  rule?: RejectRuleBehavior | undefined;

  /**
   * The confidence score that specifies the condition at which a prediction can be rejected.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 */
export interface RejectPredictionsInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the prediction.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision that is to be made to the asset.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * Specifies the rule (or the conditions) under which a prediction can be rejected.
   *
   * @public
   */
  rejectRule?: RejectRule | undefined;

  /**
   * Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be rejected.
   *
   * @public
   */
  rejectChoices?: RejectChoice[] | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectPredictionsOutput {
  /**
   * The ID of the Amazon DataZone domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The revision that is to be made to the asset.
   *
   * @public
   */
  assetRevision: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestInput {
  /**
   * The identifier of the Amazon DataZone domain in which the subscription request was rejected.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the subscription request that was rejected.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The decision comment of the rejected subscription request.
   *
   * @public
   */
  decisionComment?: string | undefined;
}

/**
 * @public
 */
export interface RejectSubscriptionRequestOutput {
  /**
   * The identifier of the subscription request that was rejected.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The timestamp of when the subscription request was rejected.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the subscription request was rejected.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * The timestamp of when the subscription request was rejected.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the subscription request.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * The subscribed principals of the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * The subscribed listings of the subscription request.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * The identifier of the subscription request reviewer.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * The decision comment of the rejected subscription request.
   *
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * The ID of the existing subscription.
   *
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * Metadata forms included in the subscription request.
   *
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface RemoveEntityOwnerInput {
  /**
   * The ID of the domain where you want to remove an owner from an entity.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of the entity from which you want to remove an owner.
   *
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * The ID of the entity from which you want to remove an owner.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The owner that you want to remove from an entity.
   *
   * @public
   */
  owner: OwnerProperties | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveEntityOwnerOutput {}

/**
 * @public
 */
export interface RemovePolicyGrantInput {
  /**
   * The ID of the domain where you want to remove a policy grant.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The type of the entity from which you want to remove a policy grant.
   *
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * The ID of the entity from which you want to remove a policy grant.
   *
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * The type of the policy that you want to remove.
   *
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * The principal from which you want to remove a policy grant.
   *
   * @public
   */
  principal: PolicyGrantPrincipal | undefined;

  /**
   * The ID of the policy grant that is to be removed from a specified entity.
   *
   * @public
   */
  grantIdentifier?: string | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RemovePolicyGrantOutput {}

/**
 * @public
 */
export interface RevokeSubscriptionInput {
  /**
   * The identifier of the Amazon DataZone domain where you want to revoke a subscription.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the revoked subscription.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies whether permissions are retained when the subscription is revoked.
   *
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeSubscriptionOutput {
  /**
   * The identifier of the revoked subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the user who revoked the subscription.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who revoked the subscription.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain where you want to revoke a subscription.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the revoked subscription.
   *
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * The timestamp of when the subscription was revoked.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription was revoked.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The subscribed principal of the revoked subscription.
   *
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * The subscribed listing of the revoked subscription.
   *
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * The identifier of the subscription request for the revoked subscription.
   *
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * Specifies whether permissions are retained when the subscription is revoked.
   *
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRuleInput {
  /**
   * The ID of the domain that where the rule is to be deleted.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the rule that is to be deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleOutput {}

/**
 * @public
 */
export interface GetRuleInput {
  /**
   * The ID of the domain where the `GetRule` action is to be invoked.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the rule.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the rule.
   *
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetRuleOutput {
  /**
   * The ID of the rule.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the rule.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The target of the rule.
   *
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action: RuleAction | undefined;

  /**
   * The scope of the rule.
   *
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * The detail of the rule.
   *
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * The target type of the rule.
   *
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user who created the rule.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  lastUpdatedBy: string | undefined;
}

/**
 * @public
 */
export interface ListRulesInput {
  /**
   * The ID of the domain in which the rules are to be listed.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The target type of the rule.
   *
   * @public
   */
  targetType: RuleTargetType | undefined;

  /**
   * The target ID of the rule.
   *
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * The type of the rule.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * The IDs of projects in which rules are to be listed.
   *
   * @public
   */
  projectIds?: string[] | undefined;

  /**
   * The asset types of the rule.
   *
   * @public
   */
  assetTypes?: string[] | undefined;

  /**
   * The data product of the rule.
   *
   * @public
   */
  dataProduct?: boolean | undefined;

  /**
   * Specifies whether to include cascading rules in the results.
   *
   * @public
   */
  includeCascaded?: boolean | undefined;

  /**
   * The maximum number of rules to return in a single call to `ListRules`. When the number of rules to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListRules` to list the next set of rules.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of rules is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of rules, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListRules` to list the next set of rules.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of the rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The ID of the rule.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The revision of the rule.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The type of the rule.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The target type of the rule.
   *
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * The target of the rule.
   *
   * @public
   */
  target?: RuleTarget | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * The scope of the rule.
   *
   * @public
   */
  scope?: RuleScope | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesOutput {
  /**
   * The results of the `ListRules` action.
   *
   * @public
   */
  items: RuleSummary[] | undefined;

  /**
   * When the number of rules is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of rules, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListRules` to list the next set of rules.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleInput {
  /**
   * The ID of the domain in which a rule is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the rule that is to be updated
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The scrope of the rule.
   *
   * @public
   */
  scope?: RuleScope | undefined;

  /**
   * The detail of the rule.
   *
   * @public
   */
  detail?: RuleDetail | undefined;

  /**
   * Specifies whether to update this rule in the child domain units.
   *
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRuleOutput {
  /**
   * The ID of the rule.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The revision of the rule.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The target of the rule.
   *
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * The action of the rule.
   *
   * @public
   */
  action: RuleAction | undefined;

  /**
   * The scope of the rule.
   *
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * The detail of the rule.
   *
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user who created the rule.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp at which the rule was last updated.
   *
   * @public
   */
  lastUpdatedBy: string | undefined;
}

/**
 * The details of the search.
 *
 * @public
 */
export interface SearchInItem {
  /**
   * The search attribute.
   *
   * @public
   */
  attribute: string | undefined;
}

/**
 * The details of the way to sort search results.
 *
 * @public
 */
export interface SearchSort {
  /**
   * The attribute detail of the way to sort search results.
   *
   * @public
   */
  attribute: string | undefined;

  /**
   * The order detail of the wya to sort search results.
   *
   * @public
   */
  order?: SortOrder | undefined;
}

/**
 * The additional attributes of an Amazon DataZone glossary.
 *
 * @public
 */
export interface GlossaryItemAdditionalAttributes {
  /**
   * List of rationales indicating why this item was matched by search.
   *
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * The details of a business glossary.
 *
 * @public
 */
export interface GlossaryItem {
  /**
   * The identifier of the Amazon DataZone domain in which the business glossary exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the glossary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the glossary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the project that owns the business glosary.
   *
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * The business glossary description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business glossary status.
   *
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * The usage restrictions associated with a goverened glossary term.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * The timestamp of when the glossary was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the glossary.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when the business glossary was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who updated the business glossary.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The additional attributes of an Amazon DataZone glossary.
   *
   * @public
   */
  additionalAttributes?: GlossaryItemAdditionalAttributes | undefined;
}

/**
 * The additional attributes of an Amazon DataZone glossary term.
 *
 * @public
 */
export interface GlossaryTermItemAdditionalAttributes {
  /**
   * List of rationales indicating why this item was matched by search.
   *
   * @public
   */
  matchRationale?: MatchRationaleItem[] | undefined;
}

/**
 * The details of a business glossary term.
 *
 * @public
 */
export interface GlossaryTermItem {
  /**
   * The identifier of the Amazon DataZone domain in which the business glossary exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the business glossary to which the term belongs.
   *
   * @public
   */
  glossaryId: string | undefined;

  /**
   * The identifier of the business glossary term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the business glossary term.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The short description of the business glossary term.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * The usage restrictions associated with a goverened glossary term.
   *
   * @public
   */
  usageRestrictions?: GlossaryUsageRestriction[] | undefined;

  /**
   * The long description of the business glossary term.
   *
   * @public
   */
  longDescription?: string | undefined;

  /**
   * The relations of the business glossary term.
   *
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * The status of the business glossary term.
   *
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * The timestamp of when a business glossary term was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created the business glossary.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp of when a business glossary term was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon DataZone user who updated the business glossary term.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The additional attributes of an Amazon DataZone glossary term.
   *
   * @public
   */
  additionalAttributes?: GlossaryTermItemAdditionalAttributes | undefined;
}

/**
 * The details of the search results.
 *
 * @public
 */
export type SearchInventoryResultItem =
  | SearchInventoryResultItem.AssetItemMember
  | SearchInventoryResultItem.DataProductItemMember
  | SearchInventoryResultItem.GlossaryItemMember
  | SearchInventoryResultItem.GlossaryTermItemMember
  | SearchInventoryResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchInventoryResultItem {
  /**
   * The glossary item included in the search results.
   *
   * @public
   */
  export interface GlossaryItemMember {
    glossaryItem: GlossaryItem;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * The glossary term item included in the search results.
   *
   * @public
   */
  export interface GlossaryTermItemMember {
    glossaryItem?: never;
    glossaryTermItem: GlossaryTermItem;
    assetItem?: never;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * The asset item included in the search results.
   *
   * @public
   */
  export interface AssetItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem: AssetItem;
    dataProductItem?: never;
    $unknown?: never;
  }

  /**
   * The data product.
   *
   * @public
   */
  export interface DataProductItemMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem: DataProductResultItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glossaryItem?: never;
    glossaryTermItem?: never;
    assetItem?: never;
    dataProductItem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glossaryItem: (value: GlossaryItem) => T;
    glossaryTermItem: (value: GlossaryTermItem) => T;
    assetItem: (value: AssetItem) => T;
    dataProductItem: (value: DataProductResultItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * The results of the `Search` action.
   *
   * @public
   */
  items?: SearchInventoryResultItem[] | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `Search` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Total number of search results.
   *
   * @public
   */
  totalMatchCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchGroupProfilesInput {
  /**
   * The identifier of the Amazon DataZone domain in which you want to search group profiles.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The group type for which to search.
   *
   * @public
   */
  groupType: GroupSearchType | undefined;

  /**
   * Specifies the text for which to search.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * The maximum number of results to return in a single call to `SearchGroupProfiles`. When the number of results to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `SearchGroupProfiles` to list the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchGroupProfiles` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of a group profile.
 *
 * @public
 */
export interface GroupProfileSummary {
  /**
   * The ID of the Amazon DataZone domain of a group profile.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of a group profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of a group profile.
   *
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * The group name of a group profile.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The ARN of the IAM role principal. This role is associated with the group profile.
   *
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * The unique identifier of the IAM role principal. This principal is associated with the group profile.
   *
   * @public
   */
  rolePrincipalId?: string | undefined;
}

/**
 * @public
 */
export interface SearchGroupProfilesOutput {
  /**
   * The results of the `SearchGroupProfiles` action.
   *
   * @public
   */
  items?: GroupProfileSummary[] | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchGroupProfiles` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the results of the `SearchListings` action.
 *
 * @public
 */
export type SearchResultItem =
  | SearchResultItem.AssetListingMember
  | SearchResultItem.DataProductListingMember
  | SearchResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchResultItem {
  /**
   * The asset listing included in the results of the `SearchListings` action.
   *
   * @public
   */
  export interface AssetListingMember {
    assetListing: AssetListingItem;
    dataProductListing?: never;
    $unknown?: never;
  }

  /**
   * The data product listing.
   *
   * @public
   */
  export interface DataProductListingMember {
    assetListing?: never;
    dataProductListing: DataProductListingItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    dataProductListing?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assetListing: (value: AssetListingItem) => T;
    dataProductListing: (value: DataProductListingItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * The results of the `SearchListings` action.
   *
   * @public
   */
  items?: SearchResultItem[] | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchListings` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Total number of search results.
   *
   * @public
   */
  totalMatchCount?: number | undefined;

  /**
   * Contains computed counts grouped by field values based on the requested aggregation attributes for the matching listings.
   *
   * @public
   */
  aggregates?: AggregationOutput[] | undefined;
}

/**
 * The details of the metadata form type.
 *
 * @public
 */
export interface FormTypeData {
  /**
   * The identifier of the Amazon DataZone domain in which the form type exists.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the form type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The revision of the form type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The model of the form type.
   *
   * @public
   */
  model?: Model | undefined;

  /**
   * The status of the form type.
   *
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * The identifier of the project that owns the form type.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the form type was originally created.
   *
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * The identifier of the project in which the form type was originally created.
   *
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * The timestamp of when the metadata form type was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon DataZone user who created teh metadata form type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The description of the metadata form type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The imports specified in the form type.
   *
   * @public
   */
  imports?: Import[] | undefined;
}

/**
 * The details of a data lineage node type.
 *
 * @public
 */
export interface LineageNodeTypeItem {
  /**
   * The ID of the domain where the data lineage node type lives.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the data lineage node type.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data lineage node type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp at which the data lineage node type was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the data lineage node type.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The timestamp at which the data lineage node type was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who updated the data lineage node type.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The revision of the data lineage node type.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The forms output of the data lineage node type.
   *
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;
}

/**
 * The details of the results of the `SearchTypes` action.
 *
 * @public
 */
export type SearchTypesResultItem =
  | SearchTypesResultItem.AssetTypeItemMember
  | SearchTypesResultItem.FormTypeItemMember
  | SearchTypesResultItem.LineageNodeTypeItemMember
  | SearchTypesResultItem.$UnknownMember;

/**
 * @public
 */
export namespace SearchTypesResultItem {
  /**
   * The asset type included in the results of the `SearchTypes` action.
   *
   * @public
   */
  export interface AssetTypeItemMember {
    assetTypeItem: AssetTypeItem;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * The form type included in the results of the `SearchTypes` action.
   *
   * @public
   */
  export interface FormTypeItemMember {
    assetTypeItem?: never;
    formTypeItem: FormTypeData;
    lineageNodeTypeItem?: never;
    $unknown?: never;
  }

  /**
   * The details of a data lineage node type.
   *
   * @public
   */
  export interface LineageNodeTypeItemMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem: LineageNodeTypeItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetTypeItem?: never;
    formTypeItem?: never;
    lineageNodeTypeItem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assetTypeItem: (value: AssetTypeItem) => T;
    formTypeItem: (value: FormTypeData) => T;
    lineageNodeTypeItem: (value: LineageNodeTypeItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchTypesOutput {
  /**
   * The results of the `SearchTypes` action.
   *
   * @public
   */
  items?: SearchTypesResultItem[] | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchTypes` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Total number of search results.
   *
   * @public
   */
  totalMatchCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchUserProfilesInput {
  /**
   * The identifier of the Amazon DataZone domain in which you want to search user profiles.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * Specifies the user type for the `SearchUserProfiles` action.
   *
   * @public
   */
  userType: UserSearchType | undefined;

  /**
   * Specifies the text for which to search.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * The maximum number of results to return in a single call to `SearchUserProfiles`. When the number of results to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `SearchUserProfiles` to list the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchUserProfiles` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the user profile.
 *
 * @public
 */
export interface UserProfileSummary {
  /**
   * The ID of the Amazon DataZone domain of the user profile.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The ID of the user profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the user profile.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The status of the user profile.
   *
   * @public
   */
  status?: UserProfileStatus | undefined;

  /**
   * The details of the user profile.
   *
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * @public
 */
export interface SearchUserProfilesOutput {
  /**
   * The results of the `SearchUserProfiles` action.
   *
   * @public
   */
  items?: UserProfileSummary[] | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchUserProfiles` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A single Amazon Simple Storage Service object to import as a notebook cell.
 *
 * @public
 */
export interface S3File {
  /**
   * The key of the Amazon Simple Storage Service object to import.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * The Amazon Simple Storage Service objects to import as the cells of a notebook, specified as a bucket and an ordered list of object keys.
 *
 * @public
 */
export interface S3FilesLocation {
  /**
   * The name of the Amazon Simple Storage Service bucket that contains the files to import.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The files to import. Cells are created in the order in which you list the files. You can specify between 1 and 100 files.
   *
   * @public
   */
  fileList: S3File[] | undefined;
}

/**
 * The source location for a notebook import in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export type SourceLocation =
  | SourceLocation.S3Member
  | SourceLocation.S3FilesMember
  | SourceLocation.$UnknownMember;

/**
 * @public
 */
export namespace SourceLocation {
  /**
   * The Amazon Simple Storage Service URI of the notebook source file.
   *
   * @public
   */
  export interface S3Member {
    s3: string;
    s3Files?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Simple Storage Service objects to import as the notebook's cells. One cell is created for each object, in the order in which you list them.
   *
   * @public
   */
  export interface S3FilesMember {
    s3?: never;
    s3Files: S3FilesLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    s3Files?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: string) => T;
    s3Files: (value: S3FilesLocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartNotebookImportInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to import the notebook.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that will own the imported notebook.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The source location of the notebook to import. Specify either a single Amazon Simple Storage Service URI, or a list of objects to import as the notebook's cells.
   *
   * @public
   */
  sourceLocation: SourceLocation | undefined;

  /**
   * The name of the imported notebook. The name must be between 1 and 256 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the imported notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the notebook to import. If not specified, defaults to `DATA`.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookImportOutput {
  /**
   * The identifier of the imported notebook.
   *
   * @public
   */
  notebookId?: string | undefined;

  /**
   * The status of the notebook import.
   *
   * @public
   */
  status?: NotebookStatus | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the project that owns the imported notebook.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The name of the imported notebook.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the imported notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the imported notebook.
   *
   * @public
   */
  type?: NotebookType | undefined;

  /**
   * The source location from which the notebook was imported.
   *
   * @public
   */
  sourceLocation?: SourceLocation | undefined;

  /**
   * The timestamp of when the notebook import was started.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who started the notebook import.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookSyncInput {
  /**
   * The identifier of the Amazon SageMaker Unified Studio domain in which to sync the notebook.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that will own the synced notebook.
   *
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * The source location of the notebook to sync. This specifies the Amazon Simple Storage Service URI of the notebook file.
   *
   * @public
   */
  sourceLocation: SourceLocation | undefined;

  /**
   * The Git metadata for the notebook sync, including repository, branch, and commit information.
   *
   * @public
   */
  gitMetadata?: GitMetadata | undefined;

  /**
   * The identifier of an existing notebook to sync. If not specified, a new notebook is created.
   *
   * @public
   */
  notebookId?: string | undefined;

  /**
   * The name of the notebook. The name must be between 1 and 256 characters.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookSyncOutput {
  /**
   * The identifier of the synced notebook.
   *
   * @public
   */
  notebookId?: string | undefined;

  /**
   * The status of the notebook sync.
   *
   * @public
   */
  status?: NotebookStatus | undefined;

  /**
   * The identifier of the Amazon SageMaker Unified Studio domain.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the project that owns the synced notebook.
   *
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * The source location from which the notebook was synced.
   *
   * @public
   */
  sourceLocation?: SourceLocation | undefined;

  /**
   * The Git metadata associated with the synced notebook.
   *
   * @public
   */
  gitMetadata?: GitMetadata | undefined;

  /**
   * The name of the synced notebook.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the synced notebook.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the notebook sync was started.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The identifier of the user who started the notebook sync.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to be tagged in Amazon DataZone.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specifies the tags for the `TagResource` action.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to be untagged in Amazon DataZone.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specifies the tag keys for the `UntagResource` action.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountPoolInput {
  /**
   * The domain ID where the account pool that is to be updated lives.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the account pool that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the account pool that is to be updated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the account pool that is to be udpated.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The mechanism used to resolve the account selection from the account pool.
   *
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
   *
   * @public
   */
  accountSource?: AccountSource | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPoolOutput {
  /**
   * The domain ID where the account pool that is to be updated lives.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The name of the account pool that is to be updated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the account pool that is to be updated.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description of the account pool that is to be udpated.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The mechanism used to resolve the account selection from the account pool.
   *
   * @public
   */
  resolutionStrategy?: ResolutionStrategy | undefined;

  /**
   * The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
   *
   * @public
   */
  accountSource: AccountSource | undefined;

  /**
   * The user who created the account pool.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp at which the account pool was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which the account pool was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user who last updated the account pool.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The domain ID in which the account pool that is to be updated lives.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionInput {
  /**
   * The configurations of the connection.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * The ID of the domain where a connection is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the connection to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The description of a connection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The location where a connection is to be updated.
   *
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * The connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesPatch | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionOutput {
  /**
   * The configurations of the connection.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The connection description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the domain where a connection is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the domain unit where a connection is to be updated.
   *
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * The ID of the environment where a connection is to be updated.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The physical endpoints of the connection.
   *
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * The project ID of the connection.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * The connection props.
   *
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * The connection type.
   *
   * @public
   */
  type: ConnectionType | undefined;

  /**
   * The scope of the connection.
   *
   * @public
   */
  scope?: ConnectionScope | undefined;
}

/**
 * @public
 */
export interface UpdateDesignationInput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation to update.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The unique ID of the designation to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The updated name of the designation. The name must be unique within the domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated human-readable description of the designation and its intended use.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated Cedar permit policy.
   * @public
   */
  policy?: string | undefined;

  /**
   * Whether deletion protection is enabled for this designation. Omit to keep the existing value.
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * A designation defines a named role with a Cedar permit policy that controls
 * what actions members holding this designation can perform within a project.
 * @public
 */
export interface UpdateDesignationOutput {
  /**
   * The identifier of the Amazon DataZone domain that contains the designation.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique ID of the designation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the designation. The name is unique within the domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the designation and its intended use.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The classification of this designation. MANAGED designations are
   * system-defined and cannot be modified or deleted.
   * @public
   */
  designationType: DesignationType | undefined;

  /**
   * The Cedar permit policy that governs what actions holders of this
   * designation are allowed to perform.
   * @public
   */
  policy: string | undefined;

  /**
   * Whether deletion protection is enabled for this designation. When true,
   * DeleteDesignation is rejected until protection is disabled via UpdateDesignation.
   * @public
   */
  deletionProtection: boolean | undefined;

  /**
   * The identifier of the Amazon DataZone user who created the designation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time when the designation was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the designation was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * The identifier of the domain in which the environment is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The glossary terms to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The blueprint version to which the environment should be updated. You can only specify the following string for this parameter: `latest`.
   *
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * The user parameters of the environment.
   *
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * The configuration name of the environment.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * The project identifier of the environment.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the environment that is to be updated.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The identifier of the domain in which the environment is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon DataZone user who created the environment.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the environment was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The profile identifier of the environment.
   *
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account in which the environment is to be updated.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which the environment is updated.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The provider identifier of the environment.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The provisioned resources to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * The status to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * The environment actions to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * The glossary terms to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The user parameters to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The last deployment of the environment.
   *
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * The provisioning properties to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * The deployment properties to be updated as part of the `UpdateEnvironment` action.
   *
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * The blueprint identifier of the environment.
   *
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * The configuration ID of the environment.
   *
   * @public
   */
  environmentConfigurationId?: string | undefined;

  /**
   * The configuration name of the environment.
   *
   * @public
   */
  environmentConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionInput {
  /**
   * The domain ID of the environment action.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The environment ID of the environment action.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * The ID of the environment action.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The parameters of the environment action.
   *
   * @public
   */
  parameters?: ActionParameters | undefined;

  /**
   * The name of the environment action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the environment action.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentActionOutput {
  /**
   * The domain ID of the environment action.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The environment ID of the environment action.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ID of the environment action.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the environment action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The parameters of the environment action.
   *
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * The description of the environment action.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentBlueprintInput {
  /**
   * The identifier of the Amazon DataZone domain in which an environment blueprint is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment blueprint to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provisioning properties to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * The user parameters to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The category to update. The only valid value is `TOOLING`.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentBlueprintOutput {
  /**
   * The identifier of the blueprint to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provider of the blueprint to be udpated.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The provisioning properties to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * The deployment properties to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * The user parameters to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * The glossary terms to be updated as part of the `UpdateEnvironmentBlueprint` action.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The category of the environment blueprint. The only valid value is `TOOLING`.
   *
   * @public
   */
  blueprintCategory?: BlueprintCategory | undefined;

  /**
   * The timestamp of when the environment blueprint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the blueprint was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which an environment profile is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment profile that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The user parameters to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * The Amazon Web Services account in which a specified environment profile is to be udpated.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which a specified environment profile is to be updated.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentProfileOutput {
  /**
   * The identifier of the environment profile that is to be udpated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which the environment profile is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Web Services account in which a specified environment profile is to be udpated.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which a specified environment profile is to be updated.
   *
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * The Amazon DataZone user who created the environment profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the environment profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the environment profile was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the blueprint of the environment profile that is to be updated.
   *
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * The identifier of the project of the environment profile that is to be updated.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * The user parameters to be updated as part of the `UpdateEnvironmentProfile` action.
   *
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which a group profile is updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the group profile that is updated.
   *
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * The status of the group profile that is updated.
   *
   * @public
   */
  status: GroupProfileStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGroupProfileOutput {
  /**
   * The identifier of the Amazon DataZone domain in which a group profile is updated.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the group profile that is updated.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the group profile that is updated.
   *
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * The name of the group profile that is updated.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The ARN of the IAM role principal. This role is associated with the updated group profile.
   *
   * @public
   */
  rolePrincipalArn?: string | undefined;

  /**
   * The unique identifier of the IAM role principal. This principal is associated with the updated group profile.
   *
   * @public
   */
  rolePrincipalId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * The ID of the Amazon DataZone domain where a project is being updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the project that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateProject` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to be updated as part of the `UpdateProject` action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The resource tags of the project.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The glossary terms to be updated as part of the `UpdateProject` action.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * The environment deployment details of the project.
   *
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;

  /**
   * The user parameters of the project.
   *
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * The project profile version to which the project should be updated. You can only specify the following string for this parameter: `latest`.
   *
   * @public
   */
  projectProfileVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * The identifier of the Amazon DataZone domain in which a project is updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project that is to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project that is to be updated.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the project that is to be updated.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the project.
   *
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  failureReasons?: ProjectDeletionError[] | undefined;

  /**
   * The Amazon DataZone user who created the project.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp of when the project was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the project was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The resource tags of the project.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;

  /**
   * The glossary terms of the project that are to be updated.
   *
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * The ID of the domain unit.
   *
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * The user parameters of the project.
   *
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * The environment deployment details of the project.
   *
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;

  /**
   * The category of the project.
   *
   * @public
   */
  projectCategory?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectProfileInput {
  /**
   * The ID of the domain where a project profile is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of a project profile that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of a project profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of a project profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of a project profile.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The resource tags of the project profile.
   *
   * @public
   */
  projectResourceTags?: ResourceTagParameter[] | undefined;

  /**
   * Specifies whether custom project resource tags are supported.
   *
   * @public
   */
  allowCustomProjectResourceTags?: boolean | undefined;

  /**
   * Field viewable through the UI that provides a project user with the allowed resource tag specifications.
   *
   * @public
   */
  projectResourceTagsDescription?: string | undefined;

  /**
   * The environment configurations of a project profile.
   *
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * The ID of the domain unit where a project profile is to be updated.
   *
   * @public
   */
  domainUnitIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectProfileOutput {
  /**
   * The ID of the domain where project profile is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the project profile.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of a project profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the project profile.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The resource tags of the project profile.
   *
   * @public
   */
  projectResourceTags?: ResourceTagParameter[] | undefined;

  /**
   * Specifies whether custom project resource tags are supported.
   *
   * @public
   */
  allowCustomProjectResourceTags?: boolean | undefined;

  /**
   * Field viewable through the UI that provides a project user with the allowed resource tag specifications.
   *
   * @public
   */
  projectResourceTagsDescription?: string | undefined;

  /**
   * The environment configurations of a project profile.
   *
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * The user who created a project profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp at which a project profile is created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp at which a project profile was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The domain unit ID of the project profile to be updated.
   *
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRootDomainUnitOwnerInput {
  /**
   * The ID of the domain where the root domain unit owner is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The current owner of the root domain unit.
   *
   * @public
   */
  currentOwner: string | undefined;

  /**
   * The new owner of the root domain unit.
   *
   * @public
   */
  newOwner: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRootDomainUnitOwnerOutput {}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusInput {
  /**
   * The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the subscription grant the status of which is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The identifier of the asset the subscription grant status of which is to be updated.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The status to be updated as part of the `UpdateSubscriptionGrantStatus` action.
   *
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * Specifies the error message that is returned if the operation cannot be successfully completed.
   *
   * @public
   */
  failureCause?: FailureCause | undefined;

  /**
   * The target name to be updated as part of the `UpdateSubscriptionGrantStatus` action.
   *
   * @public
   */
  targetName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionGrantStatusOutput {
  /**
   * The identifier of the subscription grant.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone domain user who created the subscription grant status.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription grant status.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The timestamp of when the subscription grant status was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription grant status is to be updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ID of the environment in which the subscription grant is updated.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The identifier of the subscription target whose subscription grant status is to be updated.
   *
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * The granted entity to be updated as part of the `UpdateSubscriptionGrantStatus` action.
   *
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * The status to be updated as part of the `UpdateSubscriptionGrantStatus` action.
   *
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * The details of the asset for which the subscription grant is created.
   *
   * @public
   */
  assets?: SubscribedAsset[] | undefined;

  /**
   * The identifier of the subscription.
   *
   * @deprecated Multiple subscriptions can exist for a single grant.
   * @public
   */
  subscriptionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestInput {
  /**
   * The identifier of the Amazon DataZone domain in which a subscription request is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the subscription request that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The reason for the `UpdateSubscriptionRequest` action.
   *
   * @public
   */
  requestReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionRequestOutput {
  /**
   * The identifier of the subscription request that is to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription request.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription request.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription request is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The status of the subscription request.
   *
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * The timestamp of when the subscription request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription request was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the `UpdateSubscriptionRequest` action.
   *
   * @public
   */
  requestReason: string | undefined;

  /**
   * The subscribed principals of the subscription request.
   *
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * The subscribed listings of the subscription request.
   *
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * The identifier of the Amazon DataZone user who reviews the subscription request.
   *
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * The decision comment of the `UpdateSubscriptionRequest` action.
   *
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * The ID of the existing subscription.
   *
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * Metadata forms included in the subscription request.
   *
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetInput {
  /**
   * The identifier of the Amazon DataZone domain in which a subscription target is to be updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the environment in which a subscription target is to be updated.
   *
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * Identifier of the subscription target that is to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The authorized principals to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  authorizedPrincipals?: string[] | undefined;

  /**
   * The applicable asset types to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  applicableAssetTypes?: string[] | undefined;

  /**
   * The configuration to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  subscriptionTargetConfig?: SubscriptionTargetForm[] | undefined;

  /**
   * The manage access role to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * The provider to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionTargetOutput {
  /**
   * Identifier of the subscription target that is to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The authorized principals to be updated as part of the `UpdateSubscriptionTarget` action. Updates are supported in batches of 5 at a time.
   *
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * The identifier of the Amazon DataZone domain in which a subscription target is to be updated.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The identifier of the project in which a subscription target is to be updated.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The identifier of the environment in which a subscription target is to be updated.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The Amazon DataZone user who created the subscription target.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Amazon DataZone user who updated the subscription target.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The timestamp of when a subscription target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the subscription target was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The manage access role to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  manageAccessRole?: string | undefined;

  /**
   * The applicable asset types to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * The configuration to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * The provider to be updated as part of the `UpdateSubscriptionTarget` action.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually.
   *
   * @public
   */
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileInput {
  /**
   * The identifier of the Amazon DataZone domain in which a user profile is updated.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the user whose user profile is to be updated.
   *
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * The type of the user profile that are to be updated.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The status of the user profile that are to be updated.
   *
   * @public
   */
  status: UserProfileStatus | undefined;

  /**
   * The session name for IAM role sessions.
   *
   * @public
   */
  sessionName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileOutput {
  /**
   * The identifier of the Amazon DataZone domain in which a user profile is updated.
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The identifier of the user profile.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the user profile.
   *
   * @public
   */
  type?: UserProfileType | undefined;

  /**
   * The status of the user profile.
   *
   * @public
   */
  status?: UserProfileStatus | undefined;

  /**
   * The results of the UpdateUserProfile action.
   *
   * @public
   */
  details?: UserProfileDetails | undefined;
}

/**
 * A search filter clause in Amazon DataZone.
 *
 * @public
 */
export type FilterClause =
  | FilterClause.AndMember
  | FilterClause.FilterMember
  | FilterClause.OrMember
  | FilterClause.$UnknownMember;

/**
 * @public
 */
export namespace FilterClause {
  /**
   * A search filter in Amazon DataZone.
   *
   * @public
   */
  export interface FilterMember {
    filter: Filter;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * The 'and' search filter clause in Amazon DataZone.
   *
   * @public
   */
  export interface AndMember {
    filter?: never;
    and: FilterClause[];
    or?: never;
    $unknown?: never;
  }

  /**
   * The 'or' search filter clause in Amazon DataZone.
   *
   * @public
   */
  export interface OrMember {
    filter?: never;
    and?: never;
    or: FilterClause[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    filter?: never;
    and?: never;
    or?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    filter: (value: Filter) => T;
    and: (value: FilterClause[]) => T;
    or: (value: FilterClause[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The row filter.
 *
 * @public
 */
export type RowFilter =
  | RowFilter.AndMember
  | RowFilter.ExpressionMember
  | RowFilter.OrMember
  | RowFilter.$UnknownMember;

/**
 * @public
 */
export namespace RowFilter {
  /**
   * The expression of the row filter.
   *
   * @public
   */
  export interface ExpressionMember {
    expression: RowFilterExpression;
    and?: never;
    or?: never;
    $unknown?: never;
  }

  /**
   * The 'and' clause of the row filter.
   *
   * @public
   */
  export interface AndMember {
    expression?: never;
    and: RowFilter[];
    or?: never;
    $unknown?: never;
  }

  /**
   * The 'or' clause of the row filter.
   *
   * @public
   */
  export interface OrMember {
    expression?: never;
    and?: never;
    or: RowFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    expression?: never;
    and?: never;
    or?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    expression: (value: RowFilterExpression) => T;
    and: (value: RowFilter[]) => T;
    or: (value: RowFilter[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The pattern describing the entities to be matched during the graph query.
 *
 * @public
 */
export interface EntityPattern {
  /**
   * The type of entity to be matched during the graph query.
   *
   * @public
   */
  entityType: GraphEntityType | undefined;

  /**
   * The identifier of the root entity to start traversal from during the graph query.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A search filter clause in Amazon DataZone.
   *
   * @public
   */
  filters?: FilterClause | undefined;
}

/**
 * The row filter configuration details.
 *
 * @public
 */
export interface RowFilterConfiguration {
  /**
   * The row filter.
   *
   * @public
   */
  rowFilter: RowFilter | undefined;

  /**
   * Specifies whether the row filter is sensitive.
   *
   * @public
   */
  sensitive?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The identifier of the owning project specified for the search.
   *
   * @public
   */
  owningProjectIdentifier?: string | undefined;

  /**
   * The maximum number of results to return in a single call to `Search`. When the number of results to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `Search` to list the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `Search` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The scope of the search.
   *
   * @public
   */
  searchScope: InventorySearchScope | undefined;

  /**
   * Specifies the text for which to search.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * The details of the search.
   *
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * Specifies the search filters.
   *
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * Specifies the way in which the search results are to be sorted.
   *
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * Specifies additional attributes for the `Search` action.
   *
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[] | undefined;
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * The identifier of the domain in which to search listings.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * Specifies the text for which to search.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * The details of the search.
   *
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * The maximum number of results to return in a single call to `SearchListings`. When the number of results to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `SearchListings` to list the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchListings` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the filters for the search of listings.
   *
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * Enables you to specify one or more attributes to compute and return counts grouped by field values.
   *
   * @public
   */
  aggregations?: AggregationListItem[] | undefined;

  /**
   * Specifies the way for sorting the search results.
   *
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * Specifies additional attributes for the search.
   *
   * @public
   */
  additionalAttributes?: SearchOutputAdditionalAttribute[] | undefined;
}

/**
 * @public
 */
export interface SearchTypesInput {
  /**
   * The identifier of the Amazon DataZone domain in which to invoke the `SearchTypes` action.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call to `SearchTypes`. When the number of results to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `SearchTypes` to list the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of results is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of results, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `SearchTypes` to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the scope of the search for types.
   *
   * @public
   */
  searchScope: TypesSearchScope | undefined;

  /**
   * Specifies the text for which to search.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * The details of the search.
   *
   * @public
   */
  searchIn?: SearchInItem[] | undefined;

  /**
   * The filters for the `SearchTypes` action.
   *
   * @public
   */
  filters?: FilterClause | undefined;

  /**
   * The specifies the way to sort the `SearchTypes` results.
   *
   * @public
   */
  sort?: SearchSort | undefined;

  /**
   * Specifies whether the search is managed.
   *
   * @public
   */
  managed: boolean | undefined;
}

/**
 * The configuration details of the asset filter.
 *
 * @public
 */
export type AssetFilterConfiguration =
  | AssetFilterConfiguration.ColumnConfigurationMember
  | AssetFilterConfiguration.RowConfigurationMember
  | AssetFilterConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AssetFilterConfiguration {
  /**
   * The column configuration of the asset filter.
   *
   * @public
   */
  export interface ColumnConfigurationMember {
    columnConfiguration: ColumnFilterConfiguration;
    rowConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The row configuration of the asset filter.
   *
   * @public
   */
  export interface RowConfigurationMember {
    columnConfiguration?: never;
    rowConfiguration: RowFilterConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    columnConfiguration?: never;
    rowConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    columnConfiguration: (value: ColumnFilterConfiguration) => T;
    rowConfiguration: (value: RowFilterConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A clause to match a query pattern
 *
 * @public
 */
export type MatchClause =
  | MatchClause.EntityPatternMember
  | MatchClause.RelationPatternMember
  | MatchClause.$UnknownMember;

/**
 * @public
 */
export namespace MatchClause {
  /**
   * The pattern describing the query's relational traversal.
   *
   * @public
   */
  export interface RelationPatternMember {
    relationPattern: RelationPattern;
    entityPattern?: never;
    $unknown?: never;
  }

  /**
   * The pattern describing the entities for the query to traverse.
   *
   * @public
   */
  export interface EntityPatternMember {
    relationPattern?: never;
    entityPattern: EntityPattern;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    relationPattern?: never;
    entityPattern?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    relationPattern: (value: RelationPattern) => T;
    entityPattern: (value: EntityPattern) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAssetFilterInput {
  /**
   * The ID of the domain in which you want to create an asset filter.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration of the asset filter.
   *
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetFilterOutput {
  /**
   * The ID of the asset filter.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where the asset filter is created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the asset filter.
   *
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * The configuration of the asset filter.
   *
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * The timestamp at which the asset filter was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The error message that is displayed if the asset filter is not created successfully.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The column names in the asset filter.
   *
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * The row filter in the asset filter.
   *
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetFilterOutput {
  /**
   * The ID of the asset filter.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where you want to get an asset filter.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the asset filter.
   *
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * The configuration of the asset filter.
   *
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * The timestamp at which the asset filter was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The error message that is displayed if the action does not complete successfully.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The column names of the asset filter.
   *
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * The row filter of the asset filter.
   *
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetFilterInput {
  /**
   * The ID of the domain where you want to update an asset filter.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * The ID of the asset filter.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration of the asset filter.
   *
   * @public
   */
  configuration?: AssetFilterConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAssetFilterOutput {
  /**
   * The ID of the asset filter.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the domain where the asset filter was created.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ID of the data asset.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The name of the asset filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the asset filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the asset filter.
   *
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * The configuration of the asset filter.
   *
   * @public
   */
  configuration: AssetFilterConfiguration | undefined;

  /**
   * The timestamp at which the asset filter was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The error message that is displayed if the action is not completed successfully.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The column names of the asset filter.
   *
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * The row filter of the asset filter.
   *
   * @public
   */
  effectiveRowFilter?: string | undefined;
}

/**
 * @public
 */
export interface QueryGraphInput {
  /**
   * The identifier of the Amazon DataZone domain.
   *
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * List of query match clauses.
   *
   * @public
   */
  match: MatchClause[] | undefined;

  /**
   * The maximum number of entities to return in a single call to `QueryGraph`. When the number of entities to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `QueryGraph` to list the next set of entities.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When the number of entities is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of entities, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `QueryGraph` to list the next set of entities.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Additional details on the queried entity that can be requested in the response.
   *
   * @public
   */
  additionalAttributes?: AdditionalAttributes | undefined;
}
