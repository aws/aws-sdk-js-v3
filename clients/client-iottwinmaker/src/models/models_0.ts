// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { IoTTwinMakerServiceException as __BaseException } from "./IoTTwinMakerServiceException";

/**
 * <p>Access is denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>An object that uniquely identifies an entity property.</p>
 * @public
 */
export interface EntityPropertyReference {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;

  /**
   * <p>A mapping of external IDs to property names. External IDs uniquely identify properties
   *          from external data stores.</p>
   * @public
   */
  externalIdProperty?: Record<string, string> | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The name of the property.</p>
   * @public
   */
  propertyName: string | undefined;
}

/**
 * <p>A value that associates a component and an entity.</p>
 * @public
 */
export interface RelationshipValue {
  /**
   * <p>The ID of the target entity associated with this relationship value.</p>
   * @public
   */
  targetEntityId?: string | undefined;

  /**
   * <p>The name of the target component associated with the relationship value.</p>
   * @public
   */
  targetComponentName?: string | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The resource wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Failed</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface CancelMetadataTransferJobRequest {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;
}

/**
 * <p>The metadata transfer job's progress.</p>
 * @public
 */
export interface MetadataTransferJobProgress {
  /**
   * <p>The total count. [of what]</p>
   * @public
   */
  totalCount?: number | undefined;

  /**
   * <p>The succeeded count.</p>
   * @public
   */
  succeededCount?: number | undefined;

  /**
   * <p>The skipped count.</p>
   * @public
   */
  skippedCount?: number | undefined;

  /**
   * <p>The failed count.</p>
   * @public
   */
  failedCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  COMPOSITE_COMPONENT_FAILURE: "COMPOSITE_COMPONENT_FAILURE",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PROCESSING_ERROR: "PROCESSING_ERROR",
  SYNC_CREATING_ERROR: "SYNC_CREATING_ERROR",
  SYNC_DELETING_ERROR: "SYNC_DELETING_ERROR",
  SYNC_INITIALIZING_ERROR: "SYNC_INITIALIZING_ERROR",
  SYNC_PROCESSING_ERROR: "SYNC_PROCESSING_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>The error details.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataTransferJobState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type MetadataTransferJobState = (typeof MetadataTransferJobState)[keyof typeof MetadataTransferJobState];

/**
 * <p>The metadata transfer job status.</p>
 * @public
 */
export interface MetadataTransferJobStatus {
  /**
   * <p>The metadata transfer job state.</p>
   * @public
   */
  state?: MetadataTransferJobState | undefined;

  /**
   * <p>The metadata transfer job error.</p>
   * @public
   */
  error?: ErrorDetails | undefined;

  /**
   * <p>The queued position.</p>
   * @public
   */
  queuedPosition?: number | undefined;
}

/**
 * @public
 */
export interface CancelMetadataTransferJobResponse {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * <p>The metadata transfer job ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Used to update the DateTime property.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job's status.</p>
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * <p>The metadata transfer job's progress.</p>
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * <p>A conflict occurred.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>An object that sets information about the composite component types of a component type.</p>
 * @public
 */
export interface CompositeComponentTypeRequest {
  /**
   * <p>This is the <code>componentTypeId</code> that the <code>compositeComponentType</code> refers to.</p>
   * @public
   */
  componentTypeId?: string | undefined;
}

/**
 * <p>The Lambda function.</p>
 * @public
 */
export interface LambdaFunction {
  /**
   * <p>The ARN of the Lambda function.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The data connector.</p>
 * @public
 */
export interface DataConnector {
  /**
   * <p>The Lambda function associated with this data connector.</p>
   * @public
   */
  lambda?: LambdaFunction | undefined;

  /**
   * <p>A Boolean value that specifies whether the data connector is native to IoT
   *          TwinMaker.</p>
   * @public
   */
  isNative?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const Scope = {
  ENTITY: "ENTITY",
  WORKSPACE: "WORKSPACE",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * <p>The function request body.</p>
 * @public
 */
export interface FunctionRequest {
  /**
   * <p>The required properties of the function.</p>
   * @public
   */
  requiredProperties?: string[] | undefined;

  /**
   * <p>The scope of the function.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The data connector.</p>
   * @public
   */
  implementedBy?: DataConnector | undefined;
}

/**
 * <p>An object that specifies a relationship with another component type.</p>
 * @public
 */
export interface Relationship {
  /**
   * <p>The ID of the target component type associated with this relationship.</p>
   * @public
   */
  targetComponentTypeId?: string | undefined;

  /**
   * <p>The type of the relationship.</p>
   * @public
   */
  relationshipType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  LIST: "LIST",
  LONG: "LONG",
  MAP: "MAP",
  RELATIONSHIP: "RELATIONSHIP",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const GroupType = {
  TABULAR: "TABULAR",
} as const;

/**
 * @public
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/**
 * <p/>
 * @public
 */
export interface PropertyGroupRequest {
  /**
   * <p>The group type.</p>
   * @public
   */
  groupType?: GroupType | undefined;

  /**
   * <p>The names of properties.</p>
   * @public
   */
  propertyNames?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 */
export interface CreateComponentTypeResponse {
  /**
   * <p>The ARN of the component type.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The current state of the component type.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * <p>The service quota was exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const PropertyUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  RESET_VALUE: "RESET_VALUE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type PropertyUpdateType = (typeof PropertyUpdateType)[keyof typeof PropertyUpdateType];

/**
 * @public
 * @enum
 */
export const PropertyGroupUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type PropertyGroupUpdateType = (typeof PropertyGroupUpdateType)[keyof typeof PropertyGroupUpdateType];

/**
 * <p>The component property group request.</p>
 * @public
 */
export interface ComponentPropertyGroupRequest {
  /**
   * <p>The group type.</p>
   * @public
   */
  groupType?: GroupType | undefined;

  /**
   * <p>The property names.</p>
   * @public
   */
  propertyNames?: string[] | undefined;

  /**
   * <p>The update type.</p>
   * @public
   */
  updateType?: PropertyGroupUpdateType | undefined;
}

/**
 * @public
 */
export interface CreateEntityResponse {
  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The current state of the entity.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * <p>The metadata transfer job AWS IoT TwinMaker destination configuration.</p>
 * @public
 */
export interface IotTwinMakerDestinationConfiguration {
  /**
   * <p>The IoT TwinMaker workspace.</p>
   * @public
   */
  workspace: string | undefined;
}

/**
 * <p>The S3 destination configuration.</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>The S3 destination configuration location.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  IOTSITEWISE: "iotsitewise",
  IOTTWINMAKER: "iottwinmaker",
  S3: "s3",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * <p>The [link to action] metadata transfer job destination configuration.</p>
 * @public
 */
export interface DestinationConfiguration {
  /**
   * <p>The destination type.</p>
   * @public
   */
  type: DestinationType | undefined;

  /**
   * <p>The metadata transfer job S3 configuration. [need to add S3 entity]</p>
   * @public
   */
  s3Configuration?: S3DestinationConfiguration | undefined;

  /**
   * <p>The metadata transfer job Amazon Web Services IoT TwinMaker configuration.</p>
   * @public
   */
  iotTwinMakerConfiguration?: IotTwinMakerDestinationConfiguration | undefined;
}

/**
 * <p>Filter by asset. [TwinMaker asset]</p>
 * @public
 */
export interface FilterByAsset {
  /**
   * <p>Filter by asset Id.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The external-Id property of an asset. </p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>Includes sub-assets.[need description hekp for this]</p>
   * @public
   */
  includeOffspring?: boolean | undefined;

  /**
   * <p>Boolean to include the asset model.</p>
   * @public
   */
  includeAssetModel?: boolean | undefined;
}

/**
 * <p>Filter by asset model.</p>
 * @public
 */
export interface FilterByAssetModel {
  /**
   * <p>The asset model Id.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>The external-Id property of an asset model.</p>
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * <p>Include asset offspring. [need desc.]</p>
   * @public
   */
  includeOffspring?: boolean | undefined;

  /**
   * <p>Bolean to include assets.</p>
   * @public
   */
  includeAssets?: boolean | undefined;
}

/**
 * <p>The AWS IoT SiteWise soucre configuration filter.[need held with desc here]</p>
 * @public
 */
export type IotSiteWiseSourceConfigurationFilter =
  | IotSiteWiseSourceConfigurationFilter.FilterByAssetMember
  | IotSiteWiseSourceConfigurationFilter.FilterByAssetModelMember
  | IotSiteWiseSourceConfigurationFilter.$UnknownMember;

/**
 * @public
 */
export namespace IotSiteWiseSourceConfigurationFilter {
  /**
   * <p>Filter by asset model.</p>
   * @public
   */
  export interface FilterByAssetModelMember {
    filterByAssetModel: FilterByAssetModel;
    filterByAsset?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by asset.</p>
   * @public
   */
  export interface FilterByAssetMember {
    filterByAssetModel?: never;
    filterByAsset: FilterByAsset;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    filterByAssetModel?: never;
    filterByAsset?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    filterByAssetModel: (value: FilterByAssetModel) => T;
    filterByAsset: (value: FilterByAsset) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IotSiteWiseSourceConfigurationFilter, visitor: Visitor<T>): T => {
    if (value.filterByAssetModel !== undefined) return visitor.filterByAssetModel(value.filterByAssetModel);
    if (value.filterByAsset !== undefined) return visitor.filterByAsset(value.filterByAsset);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The metadata transfer job AWS IoT SiteWise source configuration.</p>
 * @public
 */
export interface IotSiteWiseSourceConfiguration {
  /**
   * <p>The AWS IoT SiteWise soucre configuration filters.</p>
   * @public
   */
  filters?: IotSiteWiseSourceConfigurationFilter[] | undefined;
}

/**
 * <p>Filter by component type.</p>
 * @public
 */
export interface FilterByComponentType {
  /**
   * <p>The component type Id.</p>
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * <p>Vilter by entity.</p>
 * @public
 */
export interface FilterByEntity {
  /**
   * <p>The entity Id.</p>
   * @public
   */
  entityId: string | undefined;
}

/**
 * <p>The metadata transfer job AWS IoT TwinMaker source configuration filter.</p>
 * @public
 */
export type IotTwinMakerSourceConfigurationFilter =
  | IotTwinMakerSourceConfigurationFilter.FilterByComponentTypeMember
  | IotTwinMakerSourceConfigurationFilter.FilterByEntityMember
  | IotTwinMakerSourceConfigurationFilter.$UnknownMember;

/**
 * @public
 */
export namespace IotTwinMakerSourceConfigurationFilter {
  /**
   * <p>Filter by component type.</p>
   * @public
   */
  export interface FilterByComponentTypeMember {
    filterByComponentType: FilterByComponentType;
    filterByEntity?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by entity.</p>
   * @public
   */
  export interface FilterByEntityMember {
    filterByComponentType?: never;
    filterByEntity: FilterByEntity;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    filterByComponentType?: never;
    filterByEntity?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    filterByComponentType: (value: FilterByComponentType) => T;
    filterByEntity: (value: FilterByEntity) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IotTwinMakerSourceConfigurationFilter, visitor: Visitor<T>): T => {
    if (value.filterByComponentType !== undefined) return visitor.filterByComponentType(value.filterByComponentType);
    if (value.filterByEntity !== undefined) return visitor.filterByEntity(value.filterByEntity);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The metadata transfer job AWS IoT TwinMaker source configuration.</p>
 * @public
 */
export interface IotTwinMakerSourceConfiguration {
  /**
   * <p>The IoT TwinMaker workspace.</p>
   * @public
   */
  workspace: string | undefined;

  /**
   * <p>The metadata transfer job AWS IoT TwinMaker source configuration filters.</p>
   * @public
   */
  filters?: IotTwinMakerSourceConfigurationFilter[] | undefined;
}

/**
 * <p>The S3 destination source configuration.</p>
 * @public
 */
export interface S3SourceConfiguration {
  /**
   * <p>The S3 destination source configuration location.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  IOTSITEWISE: "iotsitewise",
  IOTTWINMAKER: "iottwinmaker",
  S3: "s3",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p>The source configuration.</p>
 * @public
 */
export interface SourceConfiguration {
  /**
   * <p>The source configuration type.</p>
   * @public
   */
  type: SourceType | undefined;

  /**
   * <p>The source configuration S3 configuration.</p>
   * @public
   */
  s3Configuration?: S3SourceConfiguration | undefined;

  /**
   * <p>The source configuration IoT SiteWise configuration.</p>
   * @public
   */
  iotSiteWiseConfiguration?: IotSiteWiseSourceConfiguration | undefined;

  /**
   * <p>The source configuration IoT TwinMaker configuration.</p>
   * @public
   */
  iotTwinMakerConfiguration?: IotTwinMakerSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMetadataTransferJobRequest {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId?: string | undefined;

  /**
   * <p>The metadata transfer job description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata transfer job sources.</p>
   * @public
   */
  sources: SourceConfiguration[] | undefined;

  /**
   * <p>The metadata transfer job destination.</p>
   * @public
   */
  destination: DestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMetadataTransferJobResponse {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * <p>The metadata transfer job ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The The metadata transfer job creation DateTime property.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job response status.</p>
   * @public
   */
  status: MetadataTransferJobStatus | undefined;
}

/**
 * @public
 */
export interface CreateSceneRequest {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   * @public
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   * @public
   */
  contentLocation: string | undefined;

  /**
   * <p>The description for this scene.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of capabilities that the scene uses to render itself.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>Metadata that you can use to manage the scene.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The request metadata.</p>
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSceneResponse {
  /**
   * <p>The ARN of the scene.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateSyncJobRequest {
  /**
   * <p>The workspace ID.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSoource is <code>SITEWISE </code>.</p>
   *          </note>
   * @public
   */
  syncSource: string | undefined;

  /**
   * <p>The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource,
   *          and create, update, or delete the corresponding resources.</p>
   * @public
   */
  syncRole: string | undefined;

  /**
   * <p>The SyncJob tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncJobState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INITIALIZING: "INITIALIZING",
} as const;

/**
 * @public
 */
export type SyncJobState = (typeof SyncJobState)[keyof typeof SyncJobState];

/**
 * @public
 */
export interface CreateSyncJobResponse {
  /**
   * <p>The SyncJob ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time for the SyncJob creation.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The SyncJob response state.</p>
   * @public
   */
  state: SyncJobState | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the S3 bucket where resources associated with the workspace are
   *          stored.</p>
   * @public
   */
  s3Location?: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>Metadata that you can use to manage the workspace</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the workspace was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the component type to delete.</p>
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeResponse {
  /**
   * <p>The current state of the component type to be deleted.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface DeleteEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity to delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity to delete.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the operation deletes child entities.</p>
   * @public
   */
  isRecursive?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteEntityResponse {
  /**
   * <p>The current state of the deleted entity.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface DeleteSceneRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene to delete.</p>
   * @public
   */
  sceneId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSceneResponse {}

/**
 * @public
 */
export interface DeleteSyncJobRequest {
  /**
   * <p>The workspace ID.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   * @public
   */
  syncSource: string | undefined;
}

/**
 * @public
 */
export interface DeleteSyncJobResponse {
  /**
   * <p>The SyncJob response state.</p>
   * @public
   */
  state: SyncJobState | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * <p>The ID of the workspace to delete.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * <p>The string that specifies the delete result for the workspace.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The query statement.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnType = {
  EDGE: "EDGE",
  NODE: "NODE",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

/**
 * <p>A description of the column in the query results.</p>
 * @public
 */
export interface ColumnDescription {
  /**
   * <p>The name of the column description.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the column description.</p>
   * @public
   */
  type?: ColumnType | undefined;
}

/**
 * <p>Represents a single row in the query results.</p>
 * @public
 */
export interface Row {
  /**
   * <p>The data in a row of query results.</p>
   * @public
   */
  rowData?: __DocumentType[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * <p>A list of ColumnDescription objects.</p>
   * @public
   */
  columnDescriptions?: ColumnDescription[] | undefined;

  /**
   * <p>Represents a single row in the query results.</p>
   * @public
   */
  rows?: Row[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The query timeout exception.</p>
 * @public
 */
export class QueryTimeoutException extends __BaseException {
  readonly name: "QueryTimeoutException" = "QueryTimeoutException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTimeoutException, __BaseException>) {
    super({
      name: "QueryTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTimeoutException.prototype);
  }
}

/**
 * @public
 */
export interface GetComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * <p>An object that returns information about the composite component types of a component type.</p>
 * @public
 */
export interface CompositeComponentTypeResponse {
  /**
   * <p>This is the <code>componentTypeId</code> that this <code>compositeComponentType</code> refers to.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>This boolean indicates whether this <code>compositeComponentType</code> is inherited from its parent.</p>
   * @public
   */
  isInherited?: boolean | undefined;
}

/**
 * <p>The function response.</p>
 * @public
 */
export interface FunctionResponse {
  /**
   * <p>The required properties of the function.</p>
   * @public
   */
  requiredProperties?: string[] | undefined;

  /**
   * <p>The scope of the function.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The data connector.</p>
   * @public
   */
  implementedBy?: DataConnector | undefined;

  /**
   * <p>Indicates whether this function is inherited.</p>
   * @public
   */
  isInherited?: boolean | undefined;
}

/**
 * <p>The property group response</p>
 * @public
 */
export interface PropertyGroupResponse {
  /**
   * <p>The group types.</p>
   * @public
   */
  groupType: GroupType | undefined;

  /**
   * <p>The names of properties.</p>
   * @public
   */
  propertyNames: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether the property group is inherited from a parent
   *          entity</p>
   * @public
   */
  isInherited: boolean | undefined;
}

/**
 * <p>An object that represents the status of an entity, component, component type, or
 *          workspace.</p>
 * @public
 */
export interface Status {
  /**
   * <p>The current state of the entity, component, component type, or workspace.</p>
   * @public
   */
  state?: State | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetEntityRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId: string | undefined;
}

/**
 * <p>The component property group response.</p>
 * @public
 */
export interface ComponentPropertyGroupResponse {
  /**
   * <p>The group type.</p>
   * @public
   */
  groupType: GroupType | undefined;

  /**
   * <p>The names of properties</p>
   * @public
   */
  propertyNames: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether the property group is inherited from a parent
   *          entity</p>
   * @public
   */
  isInherited: boolean | undefined;
}

/**
 * <p>An object that returns information about a component summary.</p>
 * @public
 */
export interface ComponentSummary {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  componentName: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The name of the property definition set in the request.</p>
   * @public
   */
  definedIn?: string | undefined;

  /**
   * <p>The description of the component request.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The property groups.</p>
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupResponse> | undefined;

  /**
   * <p>The status of the component type.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The <code>syncSource</code> of the sync job, if this entity was created by a sync job.</p>
   * @public
   */
  syncSource?: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataTransferJobRequest {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataTransferJobResponse {
  /**
   * <p>The metadata transfer job Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * <p>The metadata transfer job ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The metadata transfer job description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata transfer job's sources.</p>
   * @public
   */
  sources: SourceConfiguration[] | undefined;

  /**
   * <p>The metadata transfer job's destination.</p>
   * @public
   */
  destination: DestinationConfiguration | undefined;

  /**
   * <p>The metadata transfer job's role.</p>
   * @public
   */
  metadataTransferJobRole: string | undefined;

  /**
   * <p>The metadata transfer job's report URL.</p>
   * @public
   */
  reportUrl?: string | undefined;

  /**
   * <p>The metadata transfer job's creation DateTime property.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job's update DateTime property.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job's status.</p>
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * <p>The metadata transfer job's progress.</p>
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * @public
 */
export interface GetPricingPlanRequest {}

/**
 * @public
 * @enum
 */
export const PricingTier = {
  TIER_1: "TIER_1",
  TIER_2: "TIER_2",
  TIER_3: "TIER_3",
  TIER_4: "TIER_4",
} as const;

/**
 * @public
 */
export type PricingTier = (typeof PricingTier)[keyof typeof PricingTier];

/**
 * <p>Information about the pricing bundle.</p>
 * @public
 */
export interface BundleInformation {
  /**
   * <p>The bundle names.</p>
   * @public
   */
  bundleNames: string[] | undefined;

  /**
   * <p>The pricing tier.</p>
   * @public
   */
  pricingTier?: PricingTier | undefined;
}

/**
 * @public
 * @enum
 */
export const PricingMode = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
  TIERED_BUNDLE: "TIERED_BUNDLE",
} as const;

/**
 * @public
 */
export type PricingMode = (typeof PricingMode)[keyof typeof PricingMode];

/**
 * @public
 * @enum
 */
export const UpdateReason = {
  DEFAULT: "DEFAULT",
  ENTITY_COUNT_UPDATE: "ENTITY_COUNT_UPDATE",
  OVERWRITTEN: "OVERWRITTEN",
  PRICING_MODE_UPDATE: "PRICING_MODE_UPDATE",
  PRICING_TIER_UPDATE: "PRICING_TIER_UPDATE",
} as const;

/**
 * @public
 */
export type UpdateReason = (typeof UpdateReason)[keyof typeof UpdateReason];

/**
 * <p>The pricing plan.</p>
 * @public
 */
export interface PricingPlan {
  /**
   * <p>The billable entity count.</p>
   * @public
   */
  billableEntityCount?: number | undefined;

  /**
   * <p>The pricing plan's bundle information.</p>
   * @public
   */
  bundleInformation?: BundleInformation | undefined;

  /**
   * <p>The effective date and time of the pricing plan.</p>
   * @public
   */
  effectiveDateTime: Date | undefined;

  /**
   * <p>The pricing mode.</p>
   * @public
   */
  pricingMode: PricingMode | undefined;

  /**
   * <p>The set date and time for updating a pricing plan.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The update reason for changing a pricing plan.</p>
   * @public
   */
  updateReason: UpdateReason | undefined;
}

/**
 * @public
 */
export interface GetPricingPlanResponse {
  /**
   * <p>The chosen pricing plan for the current billing cycle.</p>
   * @public
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * <p>The pending pricing plan.</p>
   * @public
   */
  pendingPricingPlan?: PricingPlan | undefined;
}

/**
 * <p>The connector failed.</p>
 * @public
 */
export class ConnectorFailureException extends __BaseException {
  readonly name: "ConnectorFailureException" = "ConnectorFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorFailureException, __BaseException>) {
    super({
      name: "ConnectorFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorFailureException.prototype);
  }
}

/**
 * <p>The connector timed out.</p>
 * @public
 */
export class ConnectorTimeoutException extends __BaseException {
  readonly name: "ConnectorTimeoutException" = "ConnectorTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorTimeoutException, __BaseException>) {
    super({
      name: "ConnectorTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorTimeoutException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * <p>Filter criteria that orders the return output. It can be sorted in ascending or
 *          descending order.</p>
 * @public
 */
export interface OrderBy {
  /**
   * <p>The set order that filters results.</p>
   * @public
   */
  order?: Order | undefined;

  /**
   * <p>The property name.</p>
   * @public
   */
  propertyName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InterpolationType = {
  LINEAR: "LINEAR",
} as const;

/**
 * @public
 */
export type InterpolationType = (typeof InterpolationType)[keyof typeof InterpolationType];

/**
 * <p>An object that specifies how to interpolate data in a list.</p>
 * @public
 */
export interface InterpolationParameters {
  /**
   * <p>The interpolation type.</p>
   * @public
   */
  interpolationType?: InterpolationType | undefined;

  /**
   * <p>The interpolation time interval in seconds.</p>
   * @public
   */
  intervalInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderByTime = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type OrderByTime = (typeof OrderByTime)[keyof typeof OrderByTime];

/**
 * @public
 */
export interface GetSceneRequest {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   * @public
   */
  sceneId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SceneErrorCode = {
  MATTERPORT_ERROR: "MATTERPORT_ERROR",
} as const;

/**
 * @public
 */
export type SceneErrorCode = (typeof SceneErrorCode)[keyof typeof SceneErrorCode];

/**
 * <p>The scene error.</p>
 * @public
 */
export interface SceneError {
  /**
   * <p>The SceneError code.</p>
   * @public
   */
  code?: SceneErrorCode | undefined;

  /**
   * <p>The SceneError message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetSceneResponse {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   * @public
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   * @public
   */
  contentLocation: string | undefined;

  /**
   * <p>The ARN of the scene.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the scene was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The description of the scene.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of capabilities that the scene uses to render.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>The response metadata.</p>
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;

  /**
   * <p>The generated scene metadata.</p>
   * @public
   */
  generatedSceneMetadata?: Record<string, string> | undefined;

  /**
   * <p>The SceneResponse error.</p>
   * @public
   */
  error?: SceneError | undefined;
}

/**
 * @public
 */
export interface GetSyncJobRequest {
  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   * @public
   */
  syncSource: string | undefined;

  /**
   * <p>The workspace ID.</p>
   * @public
   */
  workspaceId?: string | undefined;
}

/**
 * <p>The SyncJob status.</p>
 * @public
 */
export interface SyncJobStatus {
  /**
   * <p>The SyncJob status state.</p>
   * @public
   */
  state?: SyncJobState | undefined;

  /**
   * <p>The SyncJob error.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetSyncJobResponse {
  /**
   * <p>The sync job ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync soucre.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   * @public
   */
  syncSource: string | undefined;

  /**
   * <p>The sync IAM role.</p>
   * @public
   */
  syncRole: string | undefined;

  /**
   * <p>The SyncJob response status.</p>
   * @public
   */
  status: SyncJobStatus | undefined;

  /**
   * <p>The creation date and time.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The update date and time.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceResponse {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of services that are linked to the workspace.</p>
   * @public
   */
  linkedServices?: string[] | undefined;

  /**
   * <p>The ARN of the S3 bucket where resources associated with the workspace are
   *          stored.</p>
   * @public
   */
  s3Location?: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>The date and time when the workspace was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the workspace was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * <p>The workspace ID.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID for the entity whose metadata (component/properties) is returned by the operation.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;

  /**
   * <p>The maximum number of results returned at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * <p>A list of objects that contain information about the components.</p>
   * @public
   */
  componentSummaries: ComponentSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of component results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that filters items in a list of component types.</p>
 *          <note>
 *             <p>Only one object is accepted as a valid input.</p>
 *          </note>
 * @public
 */
export type ListComponentTypesFilter =
  | ListComponentTypesFilter.ExtendsFromMember
  | ListComponentTypesFilter.IsAbstractMember
  | ListComponentTypesFilter.NamespaceMember
  | ListComponentTypesFilter.$UnknownMember;

/**
 * @public
 */
export namespace ListComponentTypesFilter {
  /**
   * <p>The component type that the component types in the list extend.</p>
   * @public
   */
  export interface ExtendsFromMember {
    extendsFrom: string;
    namespace?: never;
    isAbstract?: never;
    $unknown?: never;
  }

  /**
   * <p>The namespace to which the component types in the list belong.</p>
   * @public
   */
  export interface NamespaceMember {
    extendsFrom?: never;
    namespace: string;
    isAbstract?: never;
    $unknown?: never;
  }

  /**
   * <p>A Boolean value that specifies whether the component types in the list are
   *          abstract.</p>
   * @public
   */
  export interface IsAbstractMember {
    extendsFrom?: never;
    namespace?: never;
    isAbstract: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    extendsFrom?: never;
    namespace?: never;
    isAbstract?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    extendsFrom: (value: string) => T;
    namespace: (value: string) => T;
    isAbstract: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListComponentTypesFilter, visitor: Visitor<T>): T => {
    if (value.extendsFrom !== undefined) return visitor.extendsFrom(value.extendsFrom);
    if (value.namespace !== undefined) return visitor.namespace(value.namespace);
    if (value.isAbstract !== undefined) return visitor.isAbstract(value.isAbstract);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListComponentTypesRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that filter the request.</p>
   * @public
   */
  filters?: ListComponentTypesFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object that contains information about a component type.</p>
 * @public
 */
export interface ComponentTypeSummary {
  /**
   * <p>The ARN of the component type.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The date and time when the component type was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the component type was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the component type.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The component type name.</p>
   * @public
   */
  componentTypeName?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentTypesResponse {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that contain information about the component types.</p>
   * @public
   */
  componentTypeSummaries: ComponentTypeSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to display.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object that filters items in a list of entities.</p>
 * @public
 */
export type ListEntitiesFilter =
  | ListEntitiesFilter.ComponentTypeIdMember
  | ListEntitiesFilter.ExternalIdMember
  | ListEntitiesFilter.ParentEntityIdMember
  | ListEntitiesFilter.$UnknownMember;

/**
 * @public
 */
export namespace ListEntitiesFilter {
  /**
   * <p>The parent of the entities in the list.</p>
   * @public
   */
  export interface ParentEntityIdMember {
    parentEntityId: string;
    componentTypeId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the component type in the entities in the list.</p>
   * @public
   */
  export interface ComponentTypeIdMember {
    parentEntityId?: never;
    componentTypeId: string;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The external-Id property of a component. The external-Id property is the primary key of
   *          an external storage system.</p>
   * @public
   */
  export interface ExternalIdMember {
    parentEntityId?: never;
    componentTypeId?: never;
    externalId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    parentEntityId?: never;
    componentTypeId?: never;
    externalId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    parentEntityId: (value: string) => T;
    componentTypeId: (value: string) => T;
    externalId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListEntitiesFilter, visitor: Visitor<T>): T => {
    if (value.parentEntityId !== undefined) return visitor.parentEntityId(value.parentEntityId);
    if (value.componentTypeId !== undefined) return visitor.componentTypeId(value.componentTypeId);
    if (value.externalId !== undefined) return visitor.externalId(value.externalId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that filter the request.</p>
   *          <note>
   *             <p>Only one object is accepted as a valid input.</p>
   *          </note>
   * @public
   */
  filters?: ListEntitiesFilter[] | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains information about an entity.</p>
 * @public
 */
export interface EntitySummary {
  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   * @public
   */
  entityName: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the parent entity.</p>
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * <p>The current status of the entity.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The description of the entity.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An <b>eventual</b> Boolean value that specifies whether the entity has child entities or not.</p>
   * @public
   */
  hasChildEntities?: boolean | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The last date and time when the entity was updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * <p>A list of objects that contain information about the entities.</p>
   * @public
   */
  entitySummaries?: EntitySummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The ListMetadataTransferJobs filter.</p>
 * @public
 */
export type ListMetadataTransferJobsFilter =
  | ListMetadataTransferJobsFilter.StateMember
  | ListMetadataTransferJobsFilter.WorkspaceIdMember
  | ListMetadataTransferJobsFilter.$UnknownMember;

/**
 * @public
 */
export namespace ListMetadataTransferJobsFilter {
  /**
   * <p>The workspace Id.</p>
   * @public
   */
  export interface WorkspaceIdMember {
    workspaceId: string;
    state?: never;
    $unknown?: never;
  }

  /**
   * <p>The filter state.</p>
   * @public
   */
  export interface StateMember {
    workspaceId?: never;
    state: MetadataTransferJobState;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    workspaceId?: never;
    state?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    workspaceId: (value: string) => T;
    state: (value: MetadataTransferJobState) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListMetadataTransferJobsFilter, visitor: Visitor<T>): T => {
    if (value.workspaceId !== undefined) return visitor.workspaceId(value.workspaceId);
    if (value.state !== undefined) return visitor.state(value.state);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListMetadataTransferJobsRequest {
  /**
   * <p>The metadata transfer job's source type.</p>
   * @public
   */
  sourceType: SourceType | undefined;

  /**
   * <p>The metadata transfer job's destination type.</p>
   * @public
   */
  destinationType: DestinationType | undefined;

  /**
   * <p>An object that filters metadata transfer jobs.</p>
   * @public
   */
  filters?: ListMetadataTransferJobsFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The metadata transfer job summary.</p>
 * @public
 */
export interface MetadataTransferJobSummary {
  /**
   * <p>The metadata transfer job summary Id.</p>
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * <p>The metadata transfer job summary ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The metadata transfer job summary creation DateTime object.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job summary update DateTime object</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The metadata transfer job summary status.</p>
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * <p>The metadata transfer job summary progess.</p>
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * @public
 */
export interface ListMetadataTransferJobsResponse {
  /**
   * <p>The metadata transfer job summaries.</p>
   * @public
   */
  metadataTransferJobSummaries: MetadataTransferJobSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPropertiesRequest {
  /**
   * <p>The workspace ID.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name of the component whose properties are returned by the operation.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;

  /**
   * <p>The ID for the entity whose metadata (component/properties) is returned by the operation.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The maximum number of results returned at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScenesRequest {
  /**
   * <p>The ID of the workspace that contains the scenes.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Specifies the maximum number of results to display.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains information about a scene.</p>
 * @public
 */
export interface SceneSummary {
  /**
   * <p>The ID of the scene.</p>
   * @public
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   * @public
   */
  contentLocation: string | undefined;

  /**
   * <p>The ARN of the scene.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the scene was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The scene description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListScenesResponse {
  /**
   * <p>A list of objects that contain information about the scenes.</p>
   * @public
   */
  sceneSummaries?: SceneSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSyncJobsRequest {
  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 50.</p>
   *          <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The SyncJob summary.</p>
 * @public
 */
export interface SyncJobSummary {
  /**
   * <p>The SyncJob summary ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * <p>The sync source.</p>
   * @public
   */
  syncSource?: string | undefined;

  /**
   * <p>The SyncJob summaries status.</p>
   * @public
   */
  status?: SyncJobStatus | undefined;

  /**
   * <p>The creation date and time.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The update date and time.</p>
   * @public
   */
  updateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSyncJobsResponse {
  /**
   * <p>The listed SyncJob summaries.</p>
   * @public
   */
  syncJobSummaries?: SyncJobSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncResourceType = {
  COMPONENT_TYPE: "COMPONENT_TYPE",
  ENTITY: "ENTITY",
} as const;

/**
 * @public
 */
export type SyncResourceType = (typeof SyncResourceType)[keyof typeof SyncResourceType];

/**
 * @public
 * @enum
 */
export const SyncResourceState = {
  DELETED: "DELETED",
  ERROR: "ERROR",
  INITIALIZING: "INITIALIZING",
  IN_SYNC: "IN_SYNC",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type SyncResourceState = (typeof SyncResourceState)[keyof typeof SyncResourceState];

/**
 * <p>The sync resource filter.</p>
 * @public
 */
export type SyncResourceFilter =
  | SyncResourceFilter.ExternalIdMember
  | SyncResourceFilter.ResourceIdMember
  | SyncResourceFilter.ResourceTypeMember
  | SyncResourceFilter.StateMember
  | SyncResourceFilter.$UnknownMember;

/**
 * @public
 */
export namespace SyncResourceFilter {
  /**
   * <p>The sync resource filter's state.</p>
   * @public
   */
  export interface StateMember {
    state: SyncResourceState;
    resourceType?: never;
    resourceId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The sync resource filter resource type</p>
   * @public
   */
  export interface ResourceTypeMember {
    state?: never;
    resourceType: SyncResourceType;
    resourceId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The sync resource filter resource ID.</p>
   * @public
   */
  export interface ResourceIdMember {
    state?: never;
    resourceType?: never;
    resourceId: string;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The external ID.</p>
   * @public
   */
  export interface ExternalIdMember {
    state?: never;
    resourceType?: never;
    resourceId?: never;
    externalId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    state?: never;
    resourceType?: never;
    resourceId?: never;
    externalId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    state: (value: SyncResourceState) => T;
    resourceType: (value: SyncResourceType) => T;
    resourceId: (value: string) => T;
    externalId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SyncResourceFilter, visitor: Visitor<T>): T => {
    if (value.state !== undefined) return visitor.state(value.state);
    if (value.resourceType !== undefined) return visitor.resourceType(value.resourceType);
    if (value.resourceId !== undefined) return visitor.resourceId(value.resourceId);
    if (value.externalId !== undefined) return visitor.externalId(value.externalId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListSyncResourcesRequest {
  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   * @public
   */
  syncSource: string | undefined;

  /**
   * <p>A list of objects that filter the request.</p>
   *          <p>The following filter combinations are supported:</p>
   *          <ul>
   *             <li>
   *                <p>Filter with state</p>
   *             </li>
   *             <li>
   *                <p>Filter with ResourceType and ResourceId</p>
   *             </li>
   *             <li>
   *                <p>Filter with ResourceType and ExternalId</p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: SyncResourceFilter[] | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 50.</p>
   *          <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The sync resource status.</p>
 * @public
 */
export interface SyncResourceStatus {
  /**
   * <p>The sync resource status state.</p>
   * @public
   */
  state?: SyncResourceState | undefined;

  /**
   * <p>The status error.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * <p>The sync resource summary.</p>
 * @public
 */
export interface SyncResourceSummary {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: SyncResourceType | undefined;

  /**
   * <p>The external ID.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The resource ID.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The sync resource summary status.</p>
   * @public
   */
  status?: SyncResourceStatus | undefined;

  /**
   * <p>The update date and time.</p>
   * @public
   */
  updateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSyncResourcesResponse {
  /**
   * <p>The sync resources.</p>
   * @public
   */
  syncResources?: SyncResourceSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Metadata that you can use to manage a resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains information about a workspace.</p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of services that are linked to the workspace.</p>
   * @public
   */
  linkedServices?: string[] | undefined;

  /**
   * <p>The date and time when the workspace was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the workspace was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>A list of objects that contain information about the workspaces.</p>
   * @public
   */
  workspaceSummaries?: WorkspaceSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>Metadata to add to this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The number of tags exceeds the limit.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both
   *          the key and its associated value are removed.</p>
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
export interface UpdateComponentTypeResponse {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the component type.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The current state of the component type.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 * @enum
 */
export const ComponentUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type ComponentUpdateType = (typeof ComponentUpdateType)[keyof typeof ComponentUpdateType];

/**
 * @public
 * @enum
 */
export const ParentEntityUpdateType = {
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type ParentEntityUpdateType = (typeof ParentEntityUpdateType)[keyof typeof ParentEntityUpdateType];

/**
 * <p>The parent entity update request.</p>
 * @public
 */
export interface ParentEntityUpdateRequest {
  /**
   * <p>The type of the update.</p>
   * @public
   */
  updateType: ParentEntityUpdateType | undefined;

  /**
   * <p>The ID of the parent entity.</p>
   * @public
   */
  parentEntityId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEntityResponse {
  /**
   * <p>The date and time when the entity was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The current state of the entity update.</p>
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanRequest {
  /**
   * <p>The pricing mode.</p>
   * @public
   */
  pricingMode: PricingMode | undefined;

  /**
   * <p>The bundle names.</p>
   * @public
   */
  bundleNames?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanResponse {
  /**
   * <p>Update the current pricing plan.</p>
   * @public
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * <p>Update the pending pricing plan.</p>
   * @public
   */
  pendingPricingPlan?: PricingPlan | undefined;
}

/**
 * @public
 */
export interface UpdateSceneRequest {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   * @public
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   * @public
   */
  contentLocation?: string | undefined;

  /**
   * <p>The description of this scene.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of capabilities that the scene uses to render.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>The scene metadata.</p>
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSceneResponse {
  /**
   * <p>The date and time when the scene was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>The ARN of the S3 bucket where resources associated with the workspace are
   *          stored.</p>
   * @public
   */
  s3Location?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * <p>The date and time of the current update.</p>
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * <p>An object that specifies a value for a property.</p>
 * @public
 */
export interface DataValue {
  /**
   * <p>A Boolean value.</p>
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * <p>A double value.</p>
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * <p>An integer value.</p>
   * @public
   */
  integerValue?: number | undefined;

  /**
   * <p>A long value.</p>
   * @public
   */
  longValue?: number | undefined;

  /**
   * <p>A string value.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>A list of multiple values.</p>
   * @public
   */
  listValue?: DataValue[] | undefined;

  /**
   * <p>An object that maps strings to multiple <code>DataValue</code> objects.</p>
   * @public
   */
  mapValue?: Record<string, DataValue> | undefined;

  /**
   * <p>A value that relates a component to another component.</p>
   * @public
   */
  relationshipValue?: RelationshipValue | undefined;

  /**
   * <p>An expression that produces the value.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * <p>An object that filters items returned by a property request.</p>
 * @public
 */
export interface PropertyFilter {
  /**
   * <p>The property name associated with this property filter.</p>
   * @public
   */
  propertyName?: string | undefined;

  /**
   * <p>The operator associated with this property filter.</p>
   * @public
   */
  operator?: string | undefined;

  /**
   * <p>The value associated with this property filter.</p>
   * @public
   */
  value?: DataValue | undefined;
}

/**
 * <p>The latest value of the property.</p>
 * @public
 */
export interface PropertyLatestValue {
  /**
   * <p>An object that specifies information about a property.</p>
   * @public
   */
  propertyReference: EntityPropertyReference | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  propertyValue?: DataValue | undefined;
}

/**
 * <p>An object that contains information about a value for a time series property.</p>
 * @public
 */
export interface PropertyValue {
  /**
   * <p>The timestamp of a value for a time series property.</p>
   *
   * @deprecated
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>An object that specifies a value for a time series property.</p>
   * @public
   */
  value: DataValue | undefined;

  /**
   * <p>ISO8601 DateTime of a value for a time series property.</p>
   *          <p>The time for when the property value was recorded in ISO 8601 format:
   *             <i>YYYY-MM-DDThh:mm:ss[.SSSSSSSSS][Z/±HH:mm]</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>[YYYY]</i>: year</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[MM]</i>: month</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[DD]</i>: day</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[hh]</i>: hour</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[mm]</i>: minute</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[ss]</i>: seconds</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>[.SSSSSSSSS]</i>: additional precision, where precedence is
   *                maintained. For example: [.573123] is equal to 573123000 nanoseconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Z</i>: default timezone UTC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>± HH:mm</i>: time zone offset in Hours and Minutes.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <i>Required sub-fields</i>: YYYY-MM-DDThh:mm:ss and [Z/±HH:mm]</p>
   * @public
   */
  time?: string | undefined;
}

/**
 * <p>An object that specifies the data type of a property.</p>
 * @public
 */
export interface DataType {
  /**
   * <p>The underlying type of the data type.</p>
   * @public
   */
  type: Type | undefined;

  /**
   * <p>The nested type in the data type.</p>
   * @public
   */
  nestedType?: DataType | undefined;

  /**
   * <p>The allowed values for this data type.</p>
   * @public
   */
  allowedValues?: DataValue[] | undefined;

  /**
   * <p>The unit of measure used in this data type.</p>
   * @public
   */
  unitOfMeasure?: string | undefined;

  /**
   * <p>A relationship that associates a component with another component.</p>
   * @public
   */
  relationship?: Relationship | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueHistoryRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>A list of properties whose value histories the request retrieves.</p>
   * @public
   */
  selectedProperties: string[] | undefined;

  /**
   * <p>A list of objects that filter the property value history request.</p>
   * @public
   */
  propertyFilters?: PropertyFilter[] | undefined;

  /**
   * <p>The date and time of the earliest property value to return.</p>
   *
   * @deprecated
   * @public
   */
  startDateTime?: Date | undefined;

  /**
   * <p>The date and time of the latest property value to return.</p>
   *
   * @deprecated
   * @public
   */
  endDateTime?: Date | undefined;

  /**
   * <p>An object that specifies the interpolation type and the interval over which to
   *          interpolate data.</p>
   * @public
   */
  interpolation?: InterpolationParameters | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The time direction to use in the result order.</p>
   * @public
   */
  orderByTime?: OrderByTime | undefined;

  /**
   * <p>The ISO8601 DateTime of the earliest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html">PropertyValue</a>.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The ISO8601 DateTime of the latest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html">PropertyValue</a>.</p>
   * @public
   */
  endTime?: string | undefined;
}

/**
 * <p>An object that specifies information about time series property values. This object is
 *          used and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action.</p>
 * @public
 */
export interface PropertyValueEntry {
  /**
   * <p>An object that contains information about the entity that has the property.</p>
   * @public
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * <p>A list of objects that specify time series property values.</p>
   * @public
   */
  propertyValues?: PropertyValue[] | undefined;
}

/**
 * <p>The history of values for a time series property.</p>
 * @public
 */
export interface PropertyValueHistory {
  /**
   * <p>An object that uniquely identifies an entity property.</p>
   * @public
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * <p>A list of objects that contain information about the values in the history of a time
   *          series property.</p>
   * @public
   */
  values?: PropertyValue[] | undefined;
}

/**
 * <p>The tabular conditions.</p>
 * @public
 */
export interface TabularConditions {
  /**
   * <p>Filter criteria that orders the output. It can be sorted in ascending or descending
   *          order.</p>
   * @public
   */
  orderBy?: OrderBy[] | undefined;

  /**
   * <p>You can filter the request using various logical operators and a key-value format. For
   *          example:</p>
   *          <p>
   *             <code>\{"key": "serverType", "value": "webServer"\}</code>
   *          </p>
   * @public
   */
  propertyFilters?: PropertyFilter[] | undefined;
}

/**
 * <p>An error returned by the <code>BatchPutProperty</code> action.</p>
 * @public
 */
export interface BatchPutPropertyError {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>An object that contains information about errors returned by the
   *             <code>BatchPutProperty</code> action.</p>
   * @public
   */
  entry: PropertyValueEntry | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueRequest {
  /**
   * <p>The name of the component whose property values the operation returns.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>This string specifies the path to the composite component, starting from the top-level component.</p>
   * @public
   */
  componentPath?: string | undefined;

  /**
   * <p>The ID of the component type whose property values the operation returns.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>The ID of the entity whose property values the operation returns.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The properties whose values the operation returns.</p>
   * @public
   */
  selectedProperties: string[] | undefined;

  /**
   * <p>The ID of the workspace whose values the operation returns.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The property group name.</p>
   * @public
   */
  propertyGroupName?: string | undefined;

  /**
   * <p>The tabular conditions.</p>
   * @public
   */
  tabularConditions?: TabularConditions | undefined;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesRequest {
  /**
   * <p>The ID of the workspace that contains the properties to set.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>An object that maps strings to the property value entries to set. Each string in the
   *          mapping must be unique to this object.</p>
   * @public
   */
  entries: PropertyValueEntry[] | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueHistoryResponse {
  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyValues: PropertyValueHistory[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains information about errors returned by the
 *             <code>BatchPutProperty</code> action.</p>
 * @public
 */
export interface BatchPutPropertyErrorEntry {
  /**
   * <p>A list of objects that contain information about errors returned by the
   *             <code>BatchPutProperty</code> action.</p>
   * @public
   */
  errors: BatchPutPropertyError[] | undefined;
}

/**
 * <p>An object that sets information about a property.</p>
 * @public
 */
export interface PropertyDefinitionRequest {
  /**
   * <p>An object that contains information about the data type.</p>
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is required.</p>
   * @public
   */
  isRequiredInEntity?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property ID comes from an external data
   *          store.</p>
   * @public
   */
  isExternalId?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is stored externally.</p>
   * @public
   */
  isStoredExternally?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property consists of time series data.</p>
   * @public
   */
  isTimeSeries?: boolean | undefined;

  /**
   * <p>An object that contains the default value.</p>
   * @public
   */
  defaultValue?: DataValue | undefined;

  /**
   * <p>A mapping that specifies configuration information about the property. Use this field to
   *          specify information that you read from and write to an external source.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>A friendly name for the property.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * <p>An object that contains response data from a property definition request.</p>
 * @public
 */
export interface PropertyDefinitionResponse {
  /**
   * <p>An object that contains information about the data type.</p>
   * @public
   */
  dataType: DataType | undefined;

  /**
   * <p>A Boolean value that specifies whether the property consists of time series data.</p>
   * @public
   */
  isTimeSeries: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is required in an entity.</p>
   * @public
   */
  isRequiredInEntity: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property ID comes from an external data
   *          store.</p>
   * @public
   */
  isExternalId: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is stored externally.</p>
   * @public
   */
  isStoredExternally: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is imported from an
   *          external data store.</p>
   * @public
   */
  isImported: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition can be updated.</p>
   * @public
   */
  isFinal: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is inherited from a
   *          parent entity.</p>
   * @public
   */
  isInherited: boolean | undefined;

  /**
   * <p>An object that contains the default value.</p>
   * @public
   */
  defaultValue?: DataValue | undefined;

  /**
   * <p>A mapping that specifies configuration information about the property.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>A friendly name for the property.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesResponse {
  /**
   * <p>Entries that caused errors in the batch put operation.</p>
   * @public
   */
  errorEntries: BatchPutPropertyErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueResponse {
  /**
   * <p>An object that maps strings to the properties and latest property values in the
   *          response. Each string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyValues?: Record<string, PropertyLatestValue> | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A table of property values.</p>
   * @public
   */
  tabularPropertyValues?: Record<string, DataValue>[][] | undefined;
}

/**
 * @public
 */
export interface CreateComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest> | undefined;

  /**
   * <p>Specifies the parent component type to extend.</p>
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   * @public
   */
  functions?: Record<string, FunctionRequest> | undefined;

  /**
   * <p>Metadata that you can use to manage the component type.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p/>
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupRequest> | undefined;

  /**
   * <p>A friendly name for the component type.</p>
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * <p>This is an object that maps strings to <code>compositeComponentTypes</code> of the <code>componentType</code>.
   *           <code>CompositeComponentType</code> is referenced by <code>componentTypeId</code>.</p>
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest> | undefined;
}

/**
 * @public
 */
export interface GetComponentTypeResponse {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionResponse> | undefined;

  /**
   * <p>The name of the parent component type that this component type extends.</p>
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   * @public
   */
  functions?: Record<string, FunctionResponse> | undefined;

  /**
   * <p>The date and time when the component type was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the component was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The ARN of the component type.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the component type is abstract.</p>
   * @public
   */
  isAbstract?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the component type has a schema initializer and
   *          that the schema initializer has run.</p>
   * @public
   */
  isSchemaInitialized?: boolean | undefined;

  /**
   * <p>The current status of the component type.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupResponse> | undefined;

  /**
   * <p>The syncSource of the SyncJob, if this entity was created by a SyncJob.</p>
   * @public
   */
  syncSource?: string | undefined;

  /**
   * <p>The component type name.</p>
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * <p>This is an object that maps strings to <code>compositeComponentTypes</code> of the <code>componentType</code>. <code>CompositeComponentType</code> is referenced by <code>componentTypeId</code>.</p>
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeResponse> | undefined;
}

/**
 * @public
 */
export interface UpdateComponentTypeRequest {
  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest> | undefined;

  /**
   * <p>Specifies the component type that this component type extends.</p>
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   * @public
   */
  functions?: Record<string, FunctionRequest> | undefined;

  /**
   * <p>The property groups.</p>
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupRequest> | undefined;

  /**
   * <p>The component type name.</p>
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * <p>This is an object that maps strings to <code>compositeComponentTypes</code> of the <code>componentType</code>.
   *           <code>CompositeComponentType</code> is referenced by <code>componentTypeId</code>.</p>
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest> | undefined;
}

/**
 * <p>An object that sets information about a property.</p>
 * @public
 */
export interface PropertyRequest {
  /**
   * <p>An object that specifies information about a property.</p>
   * @public
   */
  definition?: PropertyDefinitionRequest | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  value?: DataValue | undefined;

  /**
   * <p>The update type of the update property request.</p>
   * @public
   */
  updateType?: PropertyUpdateType | undefined;
}

/**
 * <p>An object that contains information about a property response.</p>
 * @public
 */
export interface PropertyResponse {
  /**
   * <p>An object that specifies information about a property.</p>
   * @public
   */
  definition?: PropertyDefinitionResponse | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  value?: DataValue | undefined;

  /**
   * <p>This flag notes whether all values of a list or map type property are returned in the API response. The maximum number of values per property returned is 50.</p>
   * @public
   */
  areAllPropertyValuesReturned?: boolean | undefined;
}

/**
 * <p>This is an object that contains the information of a property.</p>
 * @public
 */
export interface PropertySummary {
  /**
   * <p>This is the schema for the property.</p>
   * @public
   */
  definition?: PropertyDefinitionResponse | undefined;

  /**
   * <p>This is the name of the property.</p>
   * @public
   */
  propertyName: string | undefined;

  /**
   * <p>This is the value for the property.</p>
   * @public
   */
  value?: DataValue | undefined;

  /**
   * <p>This flag notes whether all values of a list or map type property are returned in the API
   *           response. The maximum number of values per property returned is 50.</p>
   * @public
   */
  areAllPropertyValuesReturned?: boolean | undefined;
}

/**
 * <p>An object that sets information about a component type create or update request.</p>
 * @public
 */
export interface ComponentRequest {
  /**
   * <p>The description of the component request.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>An object that maps strings to the properties to set in the component type. Each string
   *          in the mapping must be unique to this object.</p>
   * @public
   */
  properties?: Record<string, PropertyRequest> | undefined;

  /**
   * <p>The property groups.</p>
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * <p>An object that returns information about a component type create or update
 *          request.</p>
 * @public
 */
export interface ComponentResponse {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>The status of the component type.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The name of the property definition set in the request.</p>
   * @public
   */
  definedIn?: string | undefined;

  /**
   * <p>An object that maps strings to the properties to set in the component type. Each string
   *          in the mapping must be unique to this object.</p>
   * @public
   */
  properties?: Record<string, PropertyResponse> | undefined;

  /**
   * <p>The property groups.</p>
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupResponse> | undefined;

  /**
   * <p>The syncSource of the sync job, if this entity was created by a sync job.</p>
   * @public
   */
  syncSource?: string | undefined;

  /**
   * <p>This flag notes whether all properties of the component are returned in the API response.
   *           The maximum number of properties returned is 800.</p>
   * @public
   */
  areAllPropertiesReturned?: boolean | undefined;

  /**
   * <p>This lists objects that contain information about the <code>compositeComponents</code>.</p>
   * @public
   */
  compositeComponents?: Record<string, ComponentSummary> | undefined;

  /**
   * <p>This flag notes whether all <code>compositeComponents</code> are returned in the API
   *           response.</p>
   * @public
   */
  areAllCompositeComponentsReturned?: boolean | undefined;
}

/**
 * <p>The component update request.</p>
 * @public
 */
export interface ComponentUpdateRequest {
  /**
   * <p>The update type of the component update request.</p>
   * @public
   */
  updateType?: ComponentUpdateType | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * <p>An object that maps strings to the properties to set in the component type update. Each
   *          string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyUpdates?: Record<string, PropertyRequest> | undefined;

  /**
   * <p>The property group updates.</p>
   * @public
   */
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * <p>An object that sets information about the composite component update request.</p>
 * @public
 */
export interface CompositeComponentRequest {
  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is an object that maps strings to the properties to set in the component type. Each string in
   *           the mapping must be unique to this object.</p>
   * @public
   */
  properties?: Record<string, PropertyRequest> | undefined;

  /**
   * <p>The property groups.</p>
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * <p>An object that sets information about the composite component update request.</p>
 * @public
 */
export interface CompositeComponentUpdateRequest {
  /**
   * <p>The update type of the component update request.</p>
   * @public
   */
  updateType?: ComponentUpdateType | undefined;

  /**
   * <p>The description of the component type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the properties to set in the component type update. Each string in the mapping must be unique to this object.</p>
   * @public
   */
  propertyUpdates?: Record<string, PropertyRequest> | undefined;

  /**
   * <p>The property group updates.</p>
   * @public
   */
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * @public
 */
export interface ListPropertiesResponse {
  /**
   * <p>A list of objects that contain information about the properties.</p>
   * @public
   */
  propertySummaries: PropertySummary[] | undefined;

  /**
   * <p>The string that specifies the next page of property results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityResponse {
  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   * @public
   */
  entityName: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the entity.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The ID of the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the entity.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the components in the entity. Each string in the mapping
   *          must be unique to this object.</p>
   * @public
   */
  components?: Record<string, ComponentResponse> | undefined;

  /**
   * <p>The ID of the parent entity for this entity.</p>
   * @public
   */
  parentEntityId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the entity has associated child entities.</p>
   * @public
   */
  hasChildEntities: boolean | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the entity was last updated.</p>
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The syncSource of the sync job, if this entity was created by a sync job.</p>
   * @public
   */
  syncSource?: string | undefined;

  /**
   * <p>This flag notes whether all components are returned in the API response. The maximum number of components returned is 30.</p>
   * @public
   */
  areAllComponentsReturned?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The name of the entity.</p>
   * @public
   */
  entityName: string | undefined;

  /**
   * <p>The description of the entity.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the components in the entity. Each string in the mapping
   *          must be unique to this object.</p>
   * @public
   */
  components?: Record<string, ComponentRequest> | undefined;

  /**
   * <p>This is an object that maps strings to <code>compositeComponent</code> updates in the request.
   *           Each key of the map represents the <code>componentPath</code> of the <code>compositeComponent</code>.</p>
   * @public
   */
  compositeComponents?: Record<string, CompositeComponentRequest> | undefined;

  /**
   * <p>The ID of the entity's parent entity.</p>
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * <p>Metadata that you can use to manage the entity.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   * @public
   */
  entityName?: string | undefined;

  /**
   * <p>The description of the entity.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that maps strings to the component updates in the request. Each string in the
   *          mapping must be unique to this object.</p>
   * @public
   */
  componentUpdates?: Record<string, ComponentUpdateRequest> | undefined;

  /**
   * <p>This is an object that maps strings to <code>compositeComponent</code> updates in the request. Each key
   *           of the map represents the <code>componentPath</code> of the <code>compositeComponent</code>.</p>
   * @public
   */
  compositeComponentUpdates?: Record<string, CompositeComponentUpdateRequest> | undefined;

  /**
   * <p>An object that describes the update request for a parent entity.</p>
   * @public
   */
  parentEntityUpdate?: ParentEntityUpdateRequest | undefined;
}
