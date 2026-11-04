// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ColumnType,
  ComponentUpdateType,
  DestinationType,
  ErrorCode,
  GroupType,
  InterpolationType,
  MetadataTransferJobState,
  Order,
  OrderByTime,
  ParentEntityUpdateType,
  PricingMode,
  PricingTier,
  PropertyGroupUpdateType,
  PropertyUpdateType,
  SceneErrorCode,
  Scope,
  SourceType,
  State,
  SyncJobState,
  SyncResourceState,
  SyncResourceType,
  Type,
  UpdateReason,
} from "./enums";

/**
 * An object that uniquely identifies an entity property.
 *
 * @public
 */
export interface EntityPropertyReference {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;

  /**
   * A mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.
   *
   * @public
   */
  externalIdProperty?: Record<string, string> | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The name of the property.
   *
   * @public
   */
  propertyName: string | undefined;
}

/**
 * A value that associates a component and an entity.
 *
 * @public
 */
export interface RelationshipValue {
  /**
   * The ID of the target entity associated with this relationship value.
   *
   * @public
   */
  targetEntityId?: string | undefined;

  /**
   * The name of the target component associated with the relationship value.
   *
   * @public
   */
  targetComponentName?: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataTransferJobRequest {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;
}

/**
 * The metadata transfer job's progress.
 *
 * @public
 */
export interface MetadataTransferJobProgress {
  /**
   * The total count. [of what]
   *
   * @public
   */
  totalCount?: number | undefined;

  /**
   * The succeeded count.
   *
   * @public
   */
  succeededCount?: number | undefined;

  /**
   * The skipped count.
   *
   * @public
   */
  skippedCount?: number | undefined;

  /**
   * The failed count.
   *
   * @public
   */
  failedCount?: number | undefined;
}

/**
 * The error details.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The metadata transfer job status.
 *
 * @public
 */
export interface MetadataTransferJobStatus {
  /**
   * The metadata transfer job state.
   *
   * @public
   */
  state?: MetadataTransferJobState | undefined;

  /**
   * The metadata transfer job error.
   *
   * @public
   */
  error?: ErrorDetails | undefined;

  /**
   * The queued position.
   *
   * @public
   */
  queuedPosition?: number | undefined;
}

/**
 * @public
 */
export interface CancelMetadataTransferJobResponse {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * The metadata transfer job ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Used to update the DateTime property.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The metadata transfer job's status.
   *
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * The metadata transfer job's progress.
   *
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * An object that sets information about the composite component types of a component type.
 *
 * @public
 */
export interface CompositeComponentTypeRequest {
  /**
   * This is the `componentTypeId` that the `compositeComponentType` refers to.
   *
   * @public
   */
  componentTypeId?: string | undefined;
}

/**
 * The Lambda function.
 *
 * @public
 */
export interface LambdaFunction {
  /**
   * The ARN of the Lambda function.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The data connector.
 *
 * @public
 */
export interface DataConnector {
  /**
   * The Lambda function associated with this data connector.
   *
   * @public
   */
  lambda?: LambdaFunction | undefined;

  /**
   * A Boolean value that specifies whether the data connector is native to IoT TwinMaker.
   *
   * @public
   */
  isNative?: boolean | undefined;
}

/**
 * The function request body.
 *
 * @public
 */
export interface FunctionRequest {
  /**
   * The required properties of the function.
   *
   * @public
   */
  requiredProperties?: string[] | undefined;

  /**
   * The scope of the function.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The data connector.
   *
   * @public
   */
  implementedBy?: DataConnector | undefined;
}

/**
 * An object that specifies a relationship with another component type.
 *
 * @public
 */
export interface Relationship {
  /**
   * The ID of the target component type associated with this relationship.
   *
   * @public
   */
  targetComponentTypeId?: string | undefined;

  /**
   * The type of the relationship.
   *
   * @public
   */
  relationshipType?: string | undefined;
}

/**
 * @public
 */
export interface PropertyGroupRequest {
  /**
   * The group type.
   *
   * @public
   */
  groupType?: GroupType | undefined;

  /**
   * The names of properties.
   *
   * @public
   */
  propertyNames?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateComponentTypeResponse {
  /**
   * The ARN of the component type.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the entity was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The current state of the component type.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * The component property group request.
 *
 * @public
 */
export interface ComponentPropertyGroupRequest {
  /**
   * The group type.
   *
   * @public
   */
  groupType?: GroupType | undefined;

  /**
   * The property names.
   *
   * @public
   */
  propertyNames?: string[] | undefined;

  /**
   * The update type.
   *
   * @public
   */
  updateType?: PropertyGroupUpdateType | undefined;
}

/**
 * @public
 */
export interface CreateEntityResponse {
  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The ARN of the entity.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the entity was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The current state of the entity.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * The metadata transfer job AWS IoT TwinMaker destination configuration.
 *
 * @public
 */
export interface IotTwinMakerDestinationConfiguration {
  /**
   * The IoT TwinMaker workspace.
   *
   * @public
   */
  workspace: string | undefined;
}

/**
 * The S3 destination configuration.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * The S3 destination configuration location.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * The [link to action] metadata transfer job destination configuration.
 *
 * @public
 */
export interface DestinationConfiguration {
  /**
   * The destination type.
   *
   * @public
   */
  type: DestinationType | undefined;

  /**
   * The metadata transfer job S3 configuration. [need to add S3 entity]
   *
   * @public
   */
  s3Configuration?: S3DestinationConfiguration | undefined;

  /**
   * The metadata transfer job Amazon Web Services IoT TwinMaker configuration.
   *
   * @public
   */
  iotTwinMakerConfiguration?: IotTwinMakerDestinationConfiguration | undefined;
}

/**
 * Filter by asset. [TwinMaker asset]
 *
 * @public
 */
export interface FilterByAsset {
  /**
   * Filter by asset Id.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The external-Id property of an asset.
   *
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * Includes sub-assets.[need description hekp for this]
   *
   * @public
   */
  includeOffspring?: boolean | undefined;

  /**
   * Boolean to include the asset model.
   *
   * @public
   */
  includeAssetModel?: boolean | undefined;
}

/**
 * Filter by asset model.
 *
 * @public
 */
export interface FilterByAssetModel {
  /**
   * The asset model Id.
   *
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * The external-Id property of an asset model.
   *
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * Include asset offspring. [need desc.]
   *
   * @public
   */
  includeOffspring?: boolean | undefined;

  /**
   * Bolean to include assets.
   *
   * @public
   */
  includeAssets?: boolean | undefined;
}

/**
 * The AWS IoT SiteWise soucre configuration filter.[need held with desc here]
 *
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
   * Filter by asset model.
   *
   * @public
   */
  export interface FilterByAssetModelMember {
    filterByAssetModel: FilterByAssetModel;
    filterByAsset?: never;
    $unknown?: never;
  }

  /**
   * Filter by asset.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    filterByAssetModel: (value: FilterByAssetModel) => T;
    filterByAsset: (value: FilterByAsset) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The metadata transfer job AWS IoT SiteWise source configuration.
 *
 * @public
 */
export interface IotSiteWiseSourceConfiguration {
  /**
   * The AWS IoT SiteWise soucre configuration filters.
   *
   * @public
   */
  filters?: IotSiteWiseSourceConfigurationFilter[] | undefined;
}

/**
 * Filter by component type.
 *
 * @public
 */
export interface FilterByComponentType {
  /**
   * The component type Id.
   *
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * Vilter by entity.
 *
 * @public
 */
export interface FilterByEntity {
  /**
   * The entity Id.
   *
   * @public
   */
  entityId: string | undefined;
}

/**
 * The metadata transfer job AWS IoT TwinMaker source configuration filter.
 *
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
   * Filter by component type.
   *
   * @public
   */
  export interface FilterByComponentTypeMember {
    filterByComponentType: FilterByComponentType;
    filterByEntity?: never;
    $unknown?: never;
  }

  /**
   * Filter by entity.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    filterByComponentType: (value: FilterByComponentType) => T;
    filterByEntity: (value: FilterByEntity) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The metadata transfer job AWS IoT TwinMaker source configuration.
 *
 * @public
 */
export interface IotTwinMakerSourceConfiguration {
  /**
   * The IoT TwinMaker workspace.
   *
   * @public
   */
  workspace: string | undefined;

  /**
   * The metadata transfer job AWS IoT TwinMaker source configuration filters.
   *
   * @public
   */
  filters?: IotTwinMakerSourceConfigurationFilter[] | undefined;
}

/**
 * The S3 destination source configuration.
 *
 * @public
 */
export interface S3SourceConfiguration {
  /**
   * The S3 destination source configuration location.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * The source configuration.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The source configuration type.
   *
   * @public
   */
  type: SourceType | undefined;

  /**
   * The source configuration S3 configuration.
   *
   * @public
   */
  s3Configuration?: S3SourceConfiguration | undefined;

  /**
   * The source configuration IoT SiteWise configuration.
   *
   * @public
   */
  iotSiteWiseConfiguration?: IotSiteWiseSourceConfiguration | undefined;

  /**
   * The source configuration IoT TwinMaker configuration.
   *
   * @public
   */
  iotTwinMakerConfiguration?: IotTwinMakerSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMetadataTransferJobRequest {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId?: string | undefined;

  /**
   * The metadata transfer job description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metadata transfer job sources.
   *
   * @public
   */
  sources: SourceConfiguration[] | undefined;

  /**
   * The metadata transfer job destination.
   *
   * @public
   */
  destination: DestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMetadataTransferJobResponse {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * The metadata transfer job ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The The metadata transfer job creation DateTime property.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The metadata transfer job response status.
   *
   * @public
   */
  status: MetadataTransferJobStatus | undefined;
}

/**
 * @public
 */
export interface CreateSceneRequest {
  /**
   * The ID of the workspace that contains the scene.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the scene.
   *
   * @public
   */
  sceneId: string | undefined;

  /**
   * The relative path that specifies the location of the content definition file.
   *
   * @public
   */
  contentLocation: string | undefined;

  /**
   * The description for this scene.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of capabilities that the scene uses to render itself.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * Metadata that you can use to manage the scene.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The request metadata.
   *
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSceneResponse {
  /**
   * The ARN of the scene.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the scene was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateSyncJobRequest {
  /**
   * The workspace ID.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The sync source.
   *
   * > **Note:** Currently the only supported syncSoource is `SITEWISE`.
   *
   * @public
   */
  syncSource: string | undefined;

  /**
   * The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource, and create, update, or delete the corresponding resources.
   *
   * @public
   */
  syncRole: string | undefined;

  /**
   * The SyncJob tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSyncJobResponse {
  /**
   * The SyncJob ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time for the SyncJob creation.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The SyncJob response state.
   *
   * @public
   */
  state: SyncJobState | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the S3 bucket where resources associated with the workspace are stored.
   *
   * @public
   */
  s3Location?: string | undefined;

  /**
   * The ARN of the execution role associated with the workspace.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * Metadata that you can use to manage the workspace
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * The ARN of the workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the workspace was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeRequest {
  /**
   * The ID of the workspace that contains the component type.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the component type to delete.
   *
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeResponse {
  /**
   * The current state of the component type to be deleted.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface DeleteEntityRequest {
  /**
   * The ID of the workspace that contains the entity to delete.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the entity to delete.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * A Boolean value that specifies whether the operation deletes child entities.
   *
   * @public
   */
  isRecursive?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteEntityResponse {
  /**
   * The current state of the deleted entity.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface DeleteSceneRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the scene to delete.
   *
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
   * The workspace ID.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The sync source.
   *
   * > **Note:** Currently the only supported syncSource is `SITEWISE`.
   *
   * @public
   */
  syncSource: string | undefined;
}

/**
 * @public
 */
export interface DeleteSyncJobResponse {
  /**
   * The SyncJob response state.
   *
   * @public
   */
  state: SyncJobState | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * The ID of the workspace to delete.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * The string that specifies the delete result for the workspace.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The query statement.
   *
   * @public
   */
  queryStatement: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A description of the column in the query results.
 *
 * @public
 */
export interface ColumnDescription {
  /**
   * The name of the column description.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the column description.
   *
   * @public
   */
  type?: ColumnType | undefined;
}

/**
 * Represents a single row in the query results.
 *
 * @public
 */
export interface Row {
  /**
   * The data in a row of query results.
   *
   * @public
   */
  rowData?: __DocumentType[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * A list of ColumnDescription objects.
   *
   * @public
   */
  columnDescriptions?: ColumnDescription[] | undefined;

  /**
   * Represents a single row in the query results.
   *
   * @public
   */
  rows?: Row[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetComponentTypeRequest {
  /**
   * The ID of the workspace that contains the component type.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;
}

/**
 * An object that returns information about the composite component types of a component type.
 *
 * @public
 */
export interface CompositeComponentTypeResponse {
  /**
   * This is the `componentTypeId` that this `compositeComponentType` refers to.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * This boolean indicates whether this `compositeComponentType` is inherited from its parent.
   *
   * @public
   */
  isInherited?: boolean | undefined;
}

/**
 * The function response.
 *
 * @public
 */
export interface FunctionResponse {
  /**
   * The required properties of the function.
   *
   * @public
   */
  requiredProperties?: string[] | undefined;

  /**
   * The scope of the function.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The data connector.
   *
   * @public
   */
  implementedBy?: DataConnector | undefined;

  /**
   * Indicates whether this function is inherited.
   *
   * @public
   */
  isInherited?: boolean | undefined;
}

/**
 * The property group response
 *
 * @public
 */
export interface PropertyGroupResponse {
  /**
   * The group types.
   *
   * @public
   */
  groupType: GroupType | undefined;

  /**
   * The names of properties.
   *
   * @public
   */
  propertyNames: string[] | undefined;

  /**
   * A Boolean value that specifies whether the property group is inherited from a parent entity
   *
   * @public
   */
  isInherited: boolean | undefined;
}

/**
 * An object that represents the status of an entity, component, component type, or workspace.
 *
 * @public
 */
export interface Status {
  /**
   * The current state of the entity, component, component type, or workspace.
   *
   * @public
   */
  state?: State | undefined;

  /**
   * The error message.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetEntityRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId: string | undefined;
}

/**
 * The component property group response.
 *
 * @public
 */
export interface ComponentPropertyGroupResponse {
  /**
   * The group type.
   *
   * @public
   */
  groupType: GroupType | undefined;

  /**
   * The names of properties
   *
   * @public
   */
  propertyNames: string[] | undefined;

  /**
   * A Boolean value that specifies whether the property group is inherited from a parent entity
   *
   * @public
   */
  isInherited: boolean | undefined;
}

/**
 * An object that returns information about a component summary.
 *
 * @public
 */
export interface ComponentSummary {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The name of the property definition set in the request.
   *
   * @public
   */
  definedIn?: string | undefined;

  /**
   * The description of the component request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The property groups.
   *
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupResponse> | undefined;

  /**
   * The status of the component type.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The `syncSource` of the sync job, if this entity was created by a sync job.
   *
   * @public
   */
  syncSource?: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataTransferJobRequest {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;
}

/**
 * @public
 */
export interface GetMetadataTransferJobResponse {
  /**
   * The metadata transfer job Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * The metadata transfer job ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The metadata transfer job description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metadata transfer job's sources.
   *
   * @public
   */
  sources: SourceConfiguration[] | undefined;

  /**
   * The metadata transfer job's destination.
   *
   * @public
   */
  destination: DestinationConfiguration | undefined;

  /**
   * The metadata transfer job's role.
   *
   * @public
   */
  metadataTransferJobRole: string | undefined;

  /**
   * The metadata transfer job's report URL.
   *
   * @public
   */
  reportUrl?: string | undefined;

  /**
   * The metadata transfer job's creation DateTime property.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The metadata transfer job's update DateTime property.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The metadata transfer job's status.
   *
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * The metadata transfer job's progress.
   *
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * @public
 */
export interface GetPricingPlanRequest {}

/**
 * Information about the pricing bundle.
 *
 * @public
 */
export interface BundleInformation {
  /**
   * The bundle names.
   *
   * @public
   */
  bundleNames: string[] | undefined;

  /**
   * The pricing tier.
   *
   * @public
   */
  pricingTier?: PricingTier | undefined;
}

/**
 * The pricing plan.
 *
 * @public
 */
export interface PricingPlan {
  /**
   * The billable entity count.
   *
   * @public
   */
  billableEntityCount?: number | undefined;

  /**
   * The pricing plan's bundle information.
   *
   * @public
   */
  bundleInformation?: BundleInformation | undefined;

  /**
   * The effective date and time of the pricing plan.
   *
   * @public
   */
  effectiveDateTime: Date | undefined;

  /**
   * The pricing mode.
   *
   * @public
   */
  pricingMode: PricingMode | undefined;

  /**
   * The set date and time for updating a pricing plan.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The update reason for changing a pricing plan.
   *
   * @public
   */
  updateReason: UpdateReason | undefined;
}

/**
 * @public
 */
export interface GetPricingPlanResponse {
  /**
   * The chosen pricing plan for the current billing cycle.
   *
   * @public
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * The pending pricing plan.
   *
   * @public
   */
  pendingPricingPlan?: PricingPlan | undefined;
}

/**
 * Filter criteria that orders the return output. It can be sorted in ascending or descending order.
 *
 * @public
 */
export interface OrderBy {
  /**
   * The set order that filters results.
   *
   * @public
   */
  order?: Order | undefined;

  /**
   * The property name.
   *
   * @public
   */
  propertyName: string | undefined;
}

/**
 * An object that specifies how to interpolate data in a list.
 *
 * @public
 */
export interface InterpolationParameters {
  /**
   * The interpolation type.
   *
   * @public
   */
  interpolationType?: InterpolationType | undefined;

  /**
   * The interpolation time interval in seconds.
   *
   * @public
   */
  intervalInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetSceneRequest {
  /**
   * The ID of the workspace that contains the scene.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the scene.
   *
   * @public
   */
  sceneId: string | undefined;
}

/**
 * The scene error.
 *
 * @public
 */
export interface SceneError {
  /**
   * The SceneError code.
   *
   * @public
   */
  code?: SceneErrorCode | undefined;

  /**
   * The SceneError message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetSceneResponse {
  /**
   * The ID of the workspace that contains the scene.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the scene.
   *
   * @public
   */
  sceneId: string | undefined;

  /**
   * The relative path that specifies the location of the content definition file.
   *
   * @public
   */
  contentLocation: string | undefined;

  /**
   * The ARN of the scene.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the scene was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the scene was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The description of the scene.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of capabilities that the scene uses to render.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * The response metadata.
   *
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;

  /**
   * The generated scene metadata.
   *
   * @public
   */
  generatedSceneMetadata?: Record<string, string> | undefined;

  /**
   * The SceneResponse error.
   *
   * @public
   */
  error?: SceneError | undefined;
}

/**
 * @public
 */
export interface GetSyncJobRequest {
  /**
   * The sync source.
   *
   * > **Note:** Currently the only supported syncSource is `SITEWISE`.
   *
   * @public
   */
  syncSource: string | undefined;

  /**
   * The workspace ID.
   *
   * @public
   */
  workspaceId?: string | undefined;
}

/**
 * The SyncJob status.
 *
 * @public
 */
export interface SyncJobStatus {
  /**
   * The SyncJob status state.
   *
   * @public
   */
  state?: SyncJobState | undefined;

  /**
   * The SyncJob error.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetSyncJobResponse {
  /**
   * The sync job ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the workspace that contains the sync job.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The sync soucre.
   *
   * > **Note:** Currently the only supported syncSource is `SITEWISE`.
   *
   * @public
   */
  syncSource: string | undefined;

  /**
   * The sync IAM role.
   *
   * @public
   */
  syncRole: string | undefined;

  /**
   * The SyncJob response status.
   *
   * @public
   */
  status: SyncJobStatus | undefined;

  /**
   * The creation date and time.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The update date and time.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceResponse {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of services that are linked to the workspace.
   *
   * @public
   */
  linkedServices?: string[] | undefined;

  /**
   * The ARN of the S3 bucket where resources associated with the workspace are stored.
   *
   * @public
   */
  s3Location?: string | undefined;

  /**
   * The ARN of the execution role associated with the workspace.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * The date and time when the workspace was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the workspace was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * The workspace ID.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID for the entity whose metadata (component/properties) is returned by the operation.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;

  /**
   * The maximum number of results returned at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * A list of objects that contain information about the components.
   *
   * @public
   */
  componentSummaries: ComponentSummary[] | undefined;

  /**
   * The string that specifies the next page of component results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that filters items in a list of component types.
 *
 * > **Note:** Only one object is accepted as a valid input.
 *
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
   * The component type that the component types in the list extend.
   *
   * @public
   */
  export interface ExtendsFromMember {
    extendsFrom: string;
    namespace?: never;
    isAbstract?: never;
    $unknown?: never;
  }

  /**
   * The namespace to which the component types in the list belong.
   *
   * @public
   */
  export interface NamespaceMember {
    extendsFrom?: never;
    namespace: string;
    isAbstract?: never;
    $unknown?: never;
  }

  /**
   * A Boolean value that specifies whether the component types in the list are abstract.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    extendsFrom: (value: string) => T;
    namespace: (value: string) => T;
    isAbstract: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListComponentTypesRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A list of objects that filter the request.
   *
   * @public
   */
  filters?: ListComponentTypesFilter[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that contains information about a component type.
 *
 * @public
 */
export interface ComponentTypeSummary {
  /**
   * The ARN of the component type.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The date and time when the component type was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the component type was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the component type.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The component type name.
   *
   * @public
   */
  componentTypeName?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentTypesResponse {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A list of objects that contain information about the component types.
   *
   * @public
   */
  componentTypeSummaries: ComponentTypeSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to display.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that filters items in a list of entities.
 *
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
   * The parent of the entities in the list.
   *
   * @public
   */
  export interface ParentEntityIdMember {
    parentEntityId: string;
    componentTypeId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * The ID of the component type in the entities in the list.
   *
   * @public
   */
  export interface ComponentTypeIdMember {
    parentEntityId?: never;
    componentTypeId: string;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * The external-Id property of a component. The external-Id property is the primary key of an external storage system.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    parentEntityId: (value: string) => T;
    componentTypeId: (value: string) => T;
    externalId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A list of objects that filter the request.
   *
   * > **Note:** Only one object is accepted as a valid input.
   *
   * @public
   */
  filters?: ListEntitiesFilter[] | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about an entity.
 *
 * @public
 */
export interface EntitySummary {
  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The name of the entity.
   *
   * @public
   */
  entityName: string | undefined;

  /**
   * The ARN of the entity.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the parent entity.
   *
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * The current status of the entity.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The description of the entity.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An **eventual** Boolean value that specifies whether the entity has child entities or not.
   *
   * @public
   */
  hasChildEntities?: boolean | undefined;

  /**
   * The date and time when the entity was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The last date and time when the entity was updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * A list of objects that contain information about the entities.
   *
   * @public
   */
  entitySummaries?: EntitySummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The ListMetadataTransferJobs filter.
 *
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
   * The workspace Id.
   *
   * @public
   */
  export interface WorkspaceIdMember {
    workspaceId: string;
    state?: never;
    $unknown?: never;
  }

  /**
   * The filter state.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    workspaceId: (value: string) => T;
    state: (value: MetadataTransferJobState) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListMetadataTransferJobsRequest {
  /**
   * The metadata transfer job's source type.
   *
   * @public
   */
  sourceType: SourceType | undefined;

  /**
   * The metadata transfer job's destination type.
   *
   * @public
   */
  destinationType: DestinationType | undefined;

  /**
   * An object that filters metadata transfer jobs.
   *
   * @public
   */
  filters?: ListMetadataTransferJobsFilter[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The metadata transfer job summary.
 *
 * @public
 */
export interface MetadataTransferJobSummary {
  /**
   * The metadata transfer job summary Id.
   *
   * @public
   */
  metadataTransferJobId: string | undefined;

  /**
   * The metadata transfer job summary ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The metadata transfer job summary creation DateTime object.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The metadata transfer job summary update DateTime object
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The metadata transfer job summary status.
   *
   * @public
   */
  status: MetadataTransferJobStatus | undefined;

  /**
   * The metadata transfer job summary progess.
   *
   * @public
   */
  progress?: MetadataTransferJobProgress | undefined;
}

/**
 * @public
 */
export interface ListMetadataTransferJobsResponse {
  /**
   * The metadata transfer job summaries.
   *
   * @public
   */
  metadataTransferJobSummaries: MetadataTransferJobSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPropertiesRequest {
  /**
   * The workspace ID.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The name of the component whose properties are returned by the operation.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;

  /**
   * The ID for the entity whose metadata (component/properties) is returned by the operation.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The maximum number of results returned at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScenesRequest {
  /**
   * The ID of the workspace that contains the scenes.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Specifies the maximum number of results to display.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about a scene.
 *
 * @public
 */
export interface SceneSummary {
  /**
   * The ID of the scene.
   *
   * @public
   */
  sceneId: string | undefined;

  /**
   * The relative path that specifies the location of the content definition file.
   *
   * @public
   */
  contentLocation: string | undefined;

  /**
   * The ARN of the scene.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the scene was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the scene was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The scene description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListScenesResponse {
  /**
   * A list of objects that contain information about the scenes.
   *
   * @public
   */
  sceneSummaries?: SceneSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSyncJobsRequest {
  /**
   * The ID of the workspace that contains the sync job.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 50.
   *
   * Valid Range: Minimum value of 0. Maximum value of 200.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The SyncJob summary.
 *
 * @public
 */
export interface SyncJobSummary {
  /**
   * The SyncJob summary ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the workspace that contains the sync job.
   *
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * The sync source.
   *
   * @public
   */
  syncSource?: string | undefined;

  /**
   * The SyncJob summaries status.
   *
   * @public
   */
  status?: SyncJobStatus | undefined;

  /**
   * The creation date and time.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The update date and time.
   *
   * @public
   */
  updateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSyncJobsResponse {
  /**
   * The listed SyncJob summaries.
   *
   * @public
   */
  syncJobSummaries?: SyncJobSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The sync resource filter.
 *
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
   * The sync resource filter's state.
   *
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
   * The sync resource filter resource type
   *
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
   * The sync resource filter resource ID.
   *
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
   * The external ID.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    state: (value: SyncResourceState) => T;
    resourceType: (value: SyncResourceType) => T;
    resourceId: (value: string) => T;
    externalId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListSyncResourcesRequest {
  /**
   * The ID of the workspace that contains the sync job.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The sync source.
   *
   * > **Note:** Currently the only supported syncSource is `SITEWISE`.
   *
   * @public
   */
  syncSource: string | undefined;

  /**
   * A list of objects that filter the request.
   *
   * The following filter combinations are supported:
   *
   * - Filter with state
   * - Filter with ResourceType and ResourceId
   * - Filter with ResourceType and ExternalId
   *
   * @public
   */
  filters?: SyncResourceFilter[] | undefined;

  /**
   * The maximum number of results to return at one time. The default is 50.
   *
   * Valid Range: Minimum value of 0. Maximum value of 200.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The sync resource status.
 *
 * @public
 */
export interface SyncResourceStatus {
  /**
   * The sync resource status state.
   *
   * @public
   */
  state?: SyncResourceState | undefined;

  /**
   * The status error.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * The sync resource summary.
 *
 * @public
 */
export interface SyncResourceSummary {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: SyncResourceType | undefined;

  /**
   * The external ID.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The resource ID.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The sync resource summary status.
   *
   * @public
   */
  status?: SyncResourceStatus | undefined;

  /**
   * The update date and time.
   *
   * @public
   */
  updateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSyncResourcesResponse {
  /**
   * The sync resources.
   *
   * @public
   */
  syncResources?: SyncResourceSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Metadata that you can use to manage a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about a workspace.
 *
 * @public
 */
export interface WorkspaceSummary {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of services that are linked to the workspace.
   *
   * @public
   */
  linkedServices?: string[] | undefined;

  /**
   * The date and time when the workspace was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the workspace was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * A list of objects that contain information about the workspaces.
   *
   * @public
   */
  workspaceSummaries?: WorkspaceSummary[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * Metadata to add to this resource.
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
   * The ARN of the resource.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed.
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
export interface UpdateComponentTypeResponse {
  /**
   * The ID of the workspace that contains the component type.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the component type.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The current state of the component type.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * The parent entity update request.
 *
 * @public
 */
export interface ParentEntityUpdateRequest {
  /**
   * The type of the update.
   *
   * @public
   */
  updateType: ParentEntityUpdateType | undefined;

  /**
   * The ID of the parent entity.
   *
   * @public
   */
  parentEntityId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEntityResponse {
  /**
   * The date and time when the entity was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The current state of the entity update.
   *
   * @public
   */
  state: State | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanRequest {
  /**
   * The pricing mode.
   *
   * @public
   */
  pricingMode: PricingMode | undefined;

  /**
   * The bundle names.
   *
   * @public
   */
  bundleNames?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanResponse {
  /**
   * Update the current pricing plan.
   *
   * @public
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * Update the pending pricing plan.
   *
   * @public
   */
  pendingPricingPlan?: PricingPlan | undefined;
}

/**
 * @public
 */
export interface UpdateSceneRequest {
  /**
   * The ID of the workspace that contains the scene.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the scene.
   *
   * @public
   */
  sceneId: string | undefined;

  /**
   * The relative path that specifies the location of the content definition file.
   *
   * @public
   */
  contentLocation?: string | undefined;

  /**
   * The description of this scene.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of capabilities that the scene uses to render.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * The scene metadata.
   *
   * @public
   */
  sceneMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSceneResponse {
  /**
   * The date and time when the scene was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the execution role associated with the workspace.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * The ARN of the S3 bucket where resources associated with the workspace are stored.
   *
   * @public
   */
  s3Location?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * The date and time of the current update.
   *
   * @public
   */
  updateDateTime: Date | undefined;
}

/**
 * An object that specifies a value for a property.
 *
 * @public
 */
export interface DataValue {
  /**
   * A Boolean value.
   *
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * A double value.
   *
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * An integer value.
   *
   * @public
   */
  integerValue?: number | undefined;

  /**
   * A long value.
   *
   * @public
   */
  longValue?: number | undefined;

  /**
   * A string value.
   *
   * @public
   */
  stringValue?: string | undefined;

  /**
   * A list of multiple values.
   *
   * @public
   */
  listValue?: DataValue[] | undefined;

  /**
   * An object that maps strings to multiple `DataValue` objects.
   *
   * @public
   */
  mapValue?: Record<string, DataValue> | undefined;

  /**
   * A value that relates a component to another component.
   *
   * @public
   */
  relationshipValue?: RelationshipValue | undefined;

  /**
   * An expression that produces the value.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * An object that filters items returned by a property request.
 *
 * @public
 */
export interface PropertyFilter {
  /**
   * The property name associated with this property filter.
   *
   * @public
   */
  propertyName?: string | undefined;

  /**
   * The operator associated with this property filter.
   *
   * @public
   */
  operator?: string | undefined;

  /**
   * The value associated with this property filter.
   *
   * @public
   */
  value?: DataValue | undefined;
}

/**
 * The latest value of the property.
 *
 * @public
 */
export interface PropertyLatestValue {
  /**
   * An object that specifies information about a property.
   *
   * @public
   */
  propertyReference: EntityPropertyReference | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  propertyValue?: DataValue | undefined;
}

/**
 * An object that contains information about a value for a time series property.
 *
 * @public
 */
export interface PropertyValue {
  /**
   * The timestamp of a value for a time series property.
   *
   * @deprecated This field is deprecated and will throw an error in the future. Use time instead.
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * An object that specifies a value for a time series property.
   *
   * @public
   */
  value: DataValue | undefined;

  /**
   * ISO8601 DateTime of a value for a time series property.
   *
   * The time for when the property value was recorded in ISO 8601 format: *YYYY-MM-DDThh:mm:ss[.SSSSSSSSS][Z/±HH:mm]*.
   *
   * - *[YYYY]*: year
   * - *[MM]*: month
   * - *[DD]*: day
   * - *[hh]*: hour
   * - *[mm]*: minute
   * - *[ss]*: seconds
   * - *[.SSSSSSSSS]*: additional precision, where precedence is maintained. For example: [.573123] is equal to 573123000 nanoseconds.
   * - *Z*: default timezone UTC
   * - *± HH:mm*: time zone offset in Hours and Minutes.
   *
   * *Required sub-fields*: YYYY-MM-DDThh:mm:ss and [Z/±HH:mm]
   *
   * @public
   */
  time?: string | undefined;
}

/**
 * An object that specifies the data type of a property.
 *
 * @public
 */
export interface DataType {
  /**
   * The underlying type of the data type.
   *
   * @public
   */
  type: Type | undefined;

  /**
   * The nested type in the data type.
   *
   * @public
   */
  nestedType?: DataType | undefined;

  /**
   * The allowed values for this data type.
   *
   * @public
   */
  allowedValues?: DataValue[] | undefined;

  /**
   * The unit of measure used in this data type.
   *
   * @public
   */
  unitOfMeasure?: string | undefined;

  /**
   * A relationship that associates a component with another component.
   *
   * @public
   */
  relationship?: Relationship | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueHistoryRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * A list of properties whose value histories the request retrieves.
   *
   * @public
   */
  selectedProperties: string[] | undefined;

  /**
   * A list of objects that filter the property value history request.
   *
   * @public
   */
  propertyFilters?: PropertyFilter[] | undefined;

  /**
   * The date and time of the earliest property value to return.
   *
   * @deprecated This field is deprecated and will throw an error in the future. Use startTime instead.
   * @public
   */
  startDateTime?: Date | undefined;

  /**
   * The date and time of the latest property value to return.
   *
   * @deprecated This field is deprecated and will throw an error in the future. Use endTime instead.
   * @public
   */
  endDateTime?: Date | undefined;

  /**
   * An object that specifies the interpolation type and the interval over which to interpolate data.
   *
   * @public
   */
  interpolation?: InterpolationParameters | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The time direction to use in the result order.
   *
   * @public
   */
  orderByTime?: OrderByTime | undefined;

  /**
   * The ISO8601 DateTime of the earliest property value to return.
   *
   * For more information about the ISO8601 DateTime format, see the data type [PropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html).
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The ISO8601 DateTime of the latest property value to return.
   *
   * For more information about the ISO8601 DateTime format, see the data type [PropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html).
   *
   * @public
   */
  endTime?: string | undefined;
}

/**
 * An object that specifies information about time series property values. This object is used and consumed by the [BatchPutPropertyValues](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html) action.
 *
 * @public
 */
export interface PropertyValueEntry {
  /**
   * An object that contains information about the entity that has the property.
   *
   * @public
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * A list of objects that specify time series property values.
   *
   * @public
   */
  propertyValues?: PropertyValue[] | undefined;
}

/**
 * The history of values for a time series property.
 *
 * @public
 */
export interface PropertyValueHistory {
  /**
   * An object that uniquely identifies an entity property.
   *
   * @public
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * A list of objects that contain information about the values in the history of a time series property.
   *
   * @public
   */
  values?: PropertyValue[] | undefined;
}

/**
 * The tabular conditions.
 *
 * @public
 */
export interface TabularConditions {
  /**
   * Filter criteria that orders the output. It can be sorted in ascending or descending order.
   *
   * @public
   */
  orderBy?: OrderBy[] | undefined;

  /**
   * You can filter the request using various logical operators and a key-value format. For example:
   *
   * `\{"key": "serverType", "value": "webServer"\}`
   *
   * @public
   */
  propertyFilters?: PropertyFilter[] | undefined;
}

/**
 * An error returned by the `BatchPutProperty` action.
 *
 * @public
 */
export interface BatchPutPropertyError {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * An object that contains information about errors returned by the `BatchPutProperty` action.
   *
   * @public
   */
  entry: PropertyValueEntry | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueRequest {
  /**
   * The name of the component whose property values the operation returns.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * This string specifies the path to the composite component, starting from the top-level component.
   *
   * @public
   */
  componentPath?: string | undefined;

  /**
   * The ID of the component type whose property values the operation returns.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * The ID of the entity whose property values the operation returns.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The properties whose values the operation returns.
   *
   * @public
   */
  selectedProperties: string[] | undefined;

  /**
   * The ID of the workspace whose values the operation returns.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The property group name.
   *
   * @public
   */
  propertyGroupName?: string | undefined;

  /**
   * The tabular conditions.
   *
   * @public
   */
  tabularConditions?: TabularConditions | undefined;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesRequest {
  /**
   * The ID of the workspace that contains the properties to set.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * An object that maps strings to the property value entries to set. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  entries: PropertyValueEntry[] | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueHistoryResponse {
  /**
   * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyValues: PropertyValueHistory[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about errors returned by the `BatchPutProperty` action.
 *
 * @public
 */
export interface BatchPutPropertyErrorEntry {
  /**
   * A list of objects that contain information about errors returned by the `BatchPutProperty` action.
   *
   * @public
   */
  errors: BatchPutPropertyError[] | undefined;
}

/**
 * An object that sets information about a property.
 *
 * @public
 */
export interface PropertyDefinitionRequest {
  /**
   * An object that contains information about the data type.
   *
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * A Boolean value that specifies whether the property is required.
   *
   * @public
   */
  isRequiredInEntity?: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property ID comes from an external data store.
   *
   * @public
   */
  isExternalId?: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property is stored externally.
   *
   * @public
   */
  isStoredExternally?: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property consists of time series data.
   *
   * @public
   */
  isTimeSeries?: boolean | undefined;

  /**
   * An object that contains the default value.
   *
   * @public
   */
  defaultValue?: DataValue | undefined;

  /**
   * A mapping that specifies configuration information about the property. Use this field to specify information that you read from and write to an external source.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * A friendly name for the property.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * An object that contains response data from a property definition request.
 *
 * @public
 */
export interface PropertyDefinitionResponse {
  /**
   * An object that contains information about the data type.
   *
   * @public
   */
  dataType: DataType | undefined;

  /**
   * A Boolean value that specifies whether the property consists of time series data.
   *
   * @public
   */
  isTimeSeries: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property is required in an entity.
   *
   * @public
   */
  isRequiredInEntity: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property ID comes from an external data store.
   *
   * @public
   */
  isExternalId: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property is stored externally.
   *
   * @public
   */
  isStoredExternally: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property definition is imported from an external data store.
   *
   * @public
   */
  isImported: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property definition can be updated.
   *
   * @public
   */
  isFinal: boolean | undefined;

  /**
   * A Boolean value that specifies whether the property definition is inherited from a parent entity.
   *
   * @public
   */
  isInherited: boolean | undefined;

  /**
   * An object that contains the default value.
   *
   * @public
   */
  defaultValue?: DataValue | undefined;

  /**
   * A mapping that specifies configuration information about the property.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * A friendly name for the property.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesResponse {
  /**
   * Entries that caused errors in the batch put operation.
   *
   * @public
   */
  errorEntries: BatchPutPropertyErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueResponse {
  /**
   * An object that maps strings to the properties and latest property values in the response. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyValues?: Record<string, PropertyLatestValue> | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A table of property values.
   *
   * @public
   */
  tabularPropertyValues?: Record<string, DataValue>[][] | undefined;
}

/**
 * @public
 */
export interface CreateComponentTypeRequest {
  /**
   * The ID of the workspace that contains the component type.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A Boolean value that specifies whether an entity can have more than one component of this type.
   *
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest> | undefined;

  /**
   * Specifies the parent component type to extend.
   *
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  functions?: Record<string, FunctionRequest> | undefined;

  /**
   * Metadata that you can use to manage the component type.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupRequest> | undefined;

  /**
   * A friendly name for the component type.
   *
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * This is an object that maps strings to `compositeComponentTypes` of the `componentType`. `CompositeComponentType` is referenced by `componentTypeId`.
   *
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest> | undefined;
}

/**
 * @public
 */
export interface GetComponentTypeResponse {
  /**
   * The ID of the workspace that contains the component type.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A Boolean value that specifies whether an entity can have more than one component of this type.
   *
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionResponse> | undefined;

  /**
   * The name of the parent component type that this component type extends.
   *
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  functions?: Record<string, FunctionResponse> | undefined;

  /**
   * The date and time when the component type was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the component was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The ARN of the component type.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A Boolean value that specifies whether the component type is abstract.
   *
   * @public
   */
  isAbstract?: boolean | undefined;

  /**
   * A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
   *
   * @public
   */
  isSchemaInitialized?: boolean | undefined;

  /**
   * The current status of the component type.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * Valid Range: Minimum value of 1. Maximum value of 250.
   *
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupResponse> | undefined;

  /**
   * The syncSource of the SyncJob, if this entity was created by a SyncJob.
   *
   * @public
   */
  syncSource?: string | undefined;

  /**
   * The component type name.
   *
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * This is an object that maps strings to `compositeComponentTypes` of the `componentType`. `CompositeComponentType` is referenced by `componentTypeId`.
   *
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeResponse> | undefined;
}

/**
 * @public
 */
export interface UpdateComponentTypeRequest {
  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A Boolean value that specifies whether an entity can have more than one component of this type.
   *
   * @public
   */
  isSingleton?: boolean | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId: string | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest> | undefined;

  /**
   * Specifies the component type that this component type extends.
   *
   * @public
   */
  extendsFrom?: string[] | undefined;

  /**
   * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  functions?: Record<string, FunctionRequest> | undefined;

  /**
   * The property groups.
   *
   * @public
   */
  propertyGroups?: Record<string, PropertyGroupRequest> | undefined;

  /**
   * The component type name.
   *
   * @public
   */
  componentTypeName?: string | undefined;

  /**
   * This is an object that maps strings to `compositeComponentTypes` of the `componentType`. `CompositeComponentType` is referenced by `componentTypeId`.
   *
   * @public
   */
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest> | undefined;
}

/**
 * An object that sets information about a property.
 *
 * @public
 */
export interface PropertyRequest {
  /**
   * An object that specifies information about a property.
   *
   * @public
   */
  definition?: PropertyDefinitionRequest | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  value?: DataValue | undefined;

  /**
   * The update type of the update property request.
   *
   * @public
   */
  updateType?: PropertyUpdateType | undefined;
}

/**
 * An object that contains information about a property response.
 *
 * @public
 */
export interface PropertyResponse {
  /**
   * An object that specifies information about a property.
   *
   * @public
   */
  definition?: PropertyDefinitionResponse | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  value?: DataValue | undefined;

  /**
   * This flag notes whether all values of a list or map type property are returned in the API response. The maximum number of values per property returned is 50.
   *
   * @public
   */
  areAllPropertyValuesReturned?: boolean | undefined;
}

/**
 * This is an object that contains the information of a property.
 *
 * @public
 */
export interface PropertySummary {
  /**
   * This is the schema for the property.
   *
   * @public
   */
  definition?: PropertyDefinitionResponse | undefined;

  /**
   * This is the name of the property.
   *
   * @public
   */
  propertyName: string | undefined;

  /**
   * This is the value for the property.
   *
   * @public
   */
  value?: DataValue | undefined;

  /**
   * This flag notes whether all values of a list or map type property are returned in the API response. The maximum number of values per property returned is 50.
   *
   * @public
   */
  areAllPropertyValuesReturned?: boolean | undefined;
}

/**
 * An object that sets information about a component type create or update request.
 *
 * @public
 */
export interface ComponentRequest {
  /**
   * The description of the component request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  properties?: Record<string, PropertyRequest> | undefined;

  /**
   * The property groups.
   *
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * An object that returns information about a component type create or update request.
 *
 * @public
 */
export interface ComponentResponse {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * The status of the component type.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The name of the property definition set in the request.
   *
   * @public
   */
  definedIn?: string | undefined;

  /**
   * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  properties?: Record<string, PropertyResponse> | undefined;

  /**
   * The property groups.
   *
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupResponse> | undefined;

  /**
   * The syncSource of the sync job, if this entity was created by a sync job.
   *
   * @public
   */
  syncSource?: string | undefined;

  /**
   * This flag notes whether all properties of the component are returned in the API response. The maximum number of properties returned is 800.
   *
   * @public
   */
  areAllPropertiesReturned?: boolean | undefined;

  /**
   * This lists objects that contain information about the `compositeComponents`.
   *
   * @public
   */
  compositeComponents?: Record<string, ComponentSummary> | undefined;

  /**
   * This flag notes whether all `compositeComponents` are returned in the API response.
   *
   * @public
   */
  areAllCompositeComponentsReturned?: boolean | undefined;
}

/**
 * The component update request.
 *
 * @public
 */
export interface ComponentUpdateRequest {
  /**
   * The update type of the component update request.
   *
   * @public
   */
  updateType?: ComponentUpdateType | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the component type.
   *
   * @public
   */
  componentTypeId?: string | undefined;

  /**
   * An object that maps strings to the properties to set in the component type update. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyUpdates?: Record<string, PropertyRequest> | undefined;

  /**
   * The property group updates.
   *
   * @public
   */
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * An object that sets information about the composite component update request.
 *
 * @public
 */
export interface CompositeComponentRequest {
  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is an object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  properties?: Record<string, PropertyRequest> | undefined;

  /**
   * The property groups.
   *
   * @public
   */
  propertyGroups?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * An object that sets information about the composite component update request.
 *
 * @public
 */
export interface CompositeComponentUpdateRequest {
  /**
   * The update type of the component update request.
   *
   * @public
   */
  updateType?: ComponentUpdateType | undefined;

  /**
   * The description of the component type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the properties to set in the component type update. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  propertyUpdates?: Record<string, PropertyRequest> | undefined;

  /**
   * The property group updates.
   *
   * @public
   */
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest> | undefined;
}

/**
 * @public
 */
export interface ListPropertiesResponse {
  /**
   * A list of objects that contain information about the properties.
   *
   * @public
   */
  propertySummaries: PropertySummary[] | undefined;

  /**
   * The string that specifies the next page of property results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityResponse {
  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The name of the entity.
   *
   * @public
   */
  entityName: string | undefined;

  /**
   * The ARN of the entity.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the entity.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The ID of the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The description of the entity.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  components?: Record<string, ComponentResponse> | undefined;

  /**
   * The ID of the parent entity for this entity.
   *
   * @public
   */
  parentEntityId: string | undefined;

  /**
   * A Boolean value that specifies whether the entity has associated child entities.
   *
   * @public
   */
  hasChildEntities: boolean | undefined;

  /**
   * The date and time when the entity was created.
   *
   * @public
   */
  creationDateTime: Date | undefined;

  /**
   * The date and time when the entity was last updated.
   *
   * @public
   */
  updateDateTime: Date | undefined;

  /**
   * The syncSource of the sync job, if this entity was created by a sync job.
   *
   * @public
   */
  syncSource?: string | undefined;

  /**
   * This flag notes whether all components are returned in the API response. The maximum number of components returned is 30.
   *
   * @public
   */
  areAllComponentsReturned?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEntityRequest {
  /**
   * The ID of the workspace that contains the entity.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The name of the entity.
   *
   * @public
   */
  entityName: string | undefined;

  /**
   * The description of the entity.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  components?: Record<string, ComponentRequest> | undefined;

  /**
   * This is an object that maps strings to `compositeComponent` updates in the request. Each key of the map represents the `componentPath` of the `compositeComponent`.
   *
   * @public
   */
  compositeComponents?: Record<string, CompositeComponentRequest> | undefined;

  /**
   * The ID of the entity's parent entity.
   *
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * Metadata that you can use to manage the entity.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEntityRequest {
  /**
   * The ID of the workspace that contains the entity.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The name of the entity.
   *
   * @public
   */
  entityName?: string | undefined;

  /**
   * The description of the entity.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object.
   *
   * @public
   */
  componentUpdates?: Record<string, ComponentUpdateRequest> | undefined;

  /**
   * This is an object that maps strings to `compositeComponent` updates in the request. Each key of the map represents the `componentPath` of the `compositeComponent`.
   *
   * @public
   */
  compositeComponentUpdates?: Record<string, CompositeComponentUpdateRequest> | undefined;

  /**
   * An object that describes the update request for a parent entity.
   *
   * @public
   */
  parentEntityUpdate?: ParentEntityUpdateRequest | undefined;
}
