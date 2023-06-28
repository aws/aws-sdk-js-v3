// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { IoTTwinMakerServiceException as __BaseException } from "./IoTTwinMakerServiceException";

/**
 * @public
 * <p>Access is denied.</p>
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
 * @public
 * <p>An object that uniquely identifies an entity property.</p>
 */
export interface EntityPropertyReference {
  /**
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * <p>A mapping of external IDs to property names. External IDs uniquely identify properties
   *          from external data stores.</p>
   */
  externalIdProperty?: Record<string, string>;

  /**
   * <p>The ID of the entity.</p>
   */
  entityId?: string;

  /**
   * <p>The name of the property.</p>
   */
  propertyName: string | undefined;
}

/**
 * @public
 * <p>A value that associates a component and an entity.</p>
 */
export interface RelationshipValue {
  /**
   * <p>The ID of the target entity associated with this relationship value.</p>
   */
  targetEntityId?: string;

  /**
   * <p>The name of the target component associated with the relationship value.</p>
   */
  targetComponentName?: string;
}

/**
 * @public
 * <p>An unexpected error has occurred.</p>
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
 * @public
 * <p>The resource wasn't found.</p>
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
 * @public
 * <p>The rate exceeds the limit.</p>
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
 * @public
 * <p>Failed</p>
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
 * <p>A conflict occurred.</p>
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
 * @public
 * <p>The Lambda function.</p>
 */
export interface LambdaFunction {
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>The data connector.</p>
 */
export interface DataConnector {
  /**
   * <p>The Lambda function associated with this data connector.</p>
   */
  lambda?: LambdaFunction;

  /**
   * <p>A Boolean value that specifies whether the data connector is native to IoT
   *          TwinMaker.</p>
   */
  isNative?: boolean;
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
 * @public
 * <p>The function request body.</p>
 */
export interface FunctionRequest {
  /**
   * <p>The required properties of the function.</p>
   */
  requiredProperties?: string[];

  /**
   * <p>The scope of the function.</p>
   */
  scope?: Scope | string;

  /**
   * <p>The data connector.</p>
   */
  implementedBy?: DataConnector;
}

/**
 * @public
 * <p>An object that specifies a relationship with another component type.</p>
 */
export interface Relationship {
  /**
   * <p>The ID of the target component type associated with this relationship.</p>
   */
  targetComponentTypeId?: string;

  /**
   * <p>The type of the relationship.</p>
   */
  relationshipType?: string;
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
 * @public
 * <p/>
 */
export interface PropertyGroupRequest {
  /**
   * <p>The group type.</p>
   */
  groupType?: GroupType | string;

  /**
   * <p>The names of properties.</p>
   */
  propertyNames?: string[];
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
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The current state of the component type.</p>
   */
  state: State | string | undefined;
}

/**
 * @public
 * <p>The service quota was exceeded.</p>
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
 * @public
 * <p>The component property group request.</p>
 */
export interface ComponentPropertyGroupRequest {
  /**
   * <p>The group type.</p>
   */
  groupType?: GroupType | string;

  /**
   * <p>The property names.</p>
   */
  propertyNames?: string[];

  /**
   * <p>The update type.</p>
   */
  updateType?: PropertyGroupUpdateType | string;
}

/**
 * @public
 */
export interface CreateEntityResponse {
  /**
   * <p>The ID of the entity.</p>
   */
  entityId: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The current state of the entity.</p>
   */
  state: State | string | undefined;
}

/**
 * @public
 */
export interface CreateSceneRequest {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   */
  contentLocation: string | undefined;

  /**
   * <p>The description for this scene.</p>
   */
  description?: string;

  /**
   * <p>A list of capabilities that the scene uses to render itself.</p>
   */
  capabilities?: string[];

  /**
   * <p>Metadata that you can use to manage the scene.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The request metadata.</p>
   */
  sceneMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSceneResponse {
  /**
   * <p>The ARN of the scene.</p>
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateSyncJobRequest {
  /**
   * <p>The workspace ID.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSoource is <code>SITEWISE </code>.</p>
   *          </note>
   */
  syncSource: string | undefined;

  /**
   * <p>The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource,
   *          and create, update, or delete the corresponding resources.</p>
   */
  syncRole: string | undefined;

  /**
   * <p>The SyncJob tags.</p>
   */
  tags?: Record<string, string>;
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
   */
  arn: string | undefined;

  /**
   * <p>The date and time for the SyncJob creation.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The SyncJob response state.</p>
   */
  state: SyncJobState | string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the S3 bucket where resources associated with the workspace are
   *          stored.</p>
   */
  s3Location: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   */
  role: string | undefined;

  /**
   * <p>Metadata that you can use to manage the workspace</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>The ARN of the workspace.</p>
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the workspace was created.</p>
   */
  creationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the component type to delete.</p>
   */
  componentTypeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentTypeResponse {
  /**
   * <p>The current state of the component type to be deleted.</p>
   */
  state: State | string | undefined;
}

/**
 * @public
 */
export interface DeleteEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity to delete.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity to delete.</p>
   */
  entityId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the operation deletes child entities.</p>
   */
  isRecursive?: boolean;
}

/**
 * @public
 */
export interface DeleteEntityResponse {
  /**
   * <p>The current state of the deleted entity.</p>
   */
  state: State | string | undefined;
}

/**
 * @public
 */
export interface DeleteSceneRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene to delete.</p>
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
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   */
  syncSource: string | undefined;
}

/**
 * @public
 */
export interface DeleteSyncJobResponse {
  /**
   * <p>The SyncJob response state.</p>
   */
  state: SyncJobState | string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * <p>The ID of the workspace to delete.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The query statement.</p>
   */
  queryStatement: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
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
 * @public
 * <p>A description of the column in the query results.</p>
 */
export interface ColumnDescription {
  /**
   * <p>The name of the column description.</p>
   */
  name?: string;

  /**
   * <p>The type of the column description.</p>
   */
  type?: ColumnType | string;
}

/**
 * @public
 * <p>Represents a single row in the query results.</p>
 */
export interface Row {
  /**
   * <p>The data in a row of query results.</p>
   */
  rowData?: __DocumentType[];
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * <p>A list of ColumnDescription objects.</p>
   */
  columnDescriptions?: ColumnDescription[];

  /**
   * <p>Represents a single row in the query results.</p>
   */
  rows?: Row[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The query timeout exception.</p>
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
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;
}

/**
 * @public
 * <p>The function response.</p>
 */
export interface FunctionResponse {
  /**
   * <p>The required properties of the function.</p>
   */
  requiredProperties?: string[];

  /**
   * <p>The scope of the function.</p>
   */
  scope?: Scope | string;

  /**
   * <p>The data connector.</p>
   */
  implementedBy?: DataConnector;

  /**
   * <p>Indicates whether this function is inherited.</p>
   */
  isInherited?: boolean;
}

/**
 * @public
 * <p>The property group response</p>
 */
export interface PropertyGroupResponse {
  /**
   * <p>The group types.</p>
   */
  groupType: GroupType | string | undefined;

  /**
   * <p>The names of properties.</p>
   */
  propertyNames: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether the property group is inherited from a parent
   *          entity</p>
   */
  isInherited: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  SYNC_CREATING_ERROR: "SYNC_CREATING_ERROR",
  SYNC_INITIALIZING_ERROR: "SYNC_INITIALIZING_ERROR",
  SYNC_PROCESSING_ERROR: "SYNC_PROCESSING_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>The error details.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The error code.</p>
   */
  code?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>An object that represents the status of an entity, component, component type, or
 *          workspace.</p>
 */
export interface Status {
  /**
   * <p>The current state of the entity, component, component type, or workspace.</p>
   */
  state?: State | string;

  /**
   * <p>The error message.</p>
   */
  error?: ErrorDetails;
}

/**
 * @public
 */
export interface GetEntityRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   */
  entityId: string | undefined;
}

/**
 * @public
 * <p>The component property group response.</p>
 */
export interface ComponentPropertyGroupResponse {
  /**
   * <p>The group type.</p>
   */
  groupType: GroupType | string | undefined;

  /**
   * <p>The names of properties</p>
   */
  propertyNames: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether the property group is inherited from a parent
   *          entity</p>
   */
  isInherited: boolean | undefined;
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
 * @public
 * <p>Information about the pricing bundle.</p>
 */
export interface BundleInformation {
  /**
   * <p>The bundle names.</p>
   */
  bundleNames: string[] | undefined;

  /**
   * <p>The pricing tier.</p>
   */
  pricingTier?: PricingTier | string;
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
 * @public
 * <p>The pricing plan.</p>
 */
export interface PricingPlan {
  /**
   * <p>The billable entity count.</p>
   */
  billableEntityCount?: number;

  /**
   * <p>The pricing plan's bundle information.</p>
   */
  bundleInformation?: BundleInformation;

  /**
   * <p>The effective date and time of the pricing plan.</p>
   */
  effectiveDateTime: Date | undefined;

  /**
   * <p>The pricing mode.</p>
   */
  pricingMode: PricingMode | string | undefined;

  /**
   * <p>The set date and time for updating a pricing plan.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The update reason for changing a pricing plan.</p>
   */
  updateReason: UpdateReason | string | undefined;
}

/**
 * @public
 */
export interface GetPricingPlanResponse {
  /**
   * <p>The chosen pricing plan for the current billing cycle.</p>
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * <p>The pending pricing plan.</p>
   */
  pendingPricingPlan?: PricingPlan;
}

/**
 * @public
 * <p>The connector failed.</p>
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
 * @public
 * <p>The connector timed out.</p>
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
 * @public
 * <p>Filter criteria that orders the return output. It can be sorted in ascending or
 *          descending order.</p>
 */
export interface OrderBy {
  /**
   * <p>The set order that filters results.</p>
   */
  order?: Order | string;

  /**
   * <p>The property name.</p>
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
 * @public
 * <p>An object that specifies how to interpolate data in a list.</p>
 */
export interface InterpolationParameters {
  /**
   * <p>The interpolation type.</p>
   */
  interpolationType?: InterpolationType | string;

  /**
   * <p>The interpolation time interval in seconds.</p>
   */
  intervalInSeconds?: number;
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
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
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
 * @public
 * <p>The scene error.</p>
 */
export interface SceneError {
  /**
   * <p>The SceneError code.</p>
   */
  code?: SceneErrorCode | string;

  /**
   * <p>The SceneError message.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface GetSceneResponse {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   */
  contentLocation: string | undefined;

  /**
   * <p>The ARN of the scene.</p>
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the scene was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The description of the scene.</p>
   */
  description?: string;

  /**
   * <p>A list of capabilities that the scene uses to render.</p>
   */
  capabilities?: string[];

  /**
   * <p>The response metadata.</p>
   */
  sceneMetadata?: Record<string, string>;

  /**
   * <p>The generated scene metadata.</p>
   */
  generatedSceneMetadata?: Record<string, string>;

  /**
   * <p>The SceneResponse error.</p>
   */
  error?: SceneError;
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
   */
  syncSource: string | undefined;

  /**
   * <p>The workspace ID.</p>
   */
  workspaceId?: string;
}

/**
 * @public
 * <p>The SyncJob status.</p>
 */
export interface SyncJobStatus {
  /**
   * <p>The SyncJob status state.</p>
   */
  state?: SyncJobState | string;

  /**
   * <p>The SyncJob error.</p>
   */
  error?: ErrorDetails;
}

/**
 * @public
 */
export interface GetSyncJobResponse {
  /**
   * <p>The sync job ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync soucre.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
   */
  syncSource: string | undefined;

  /**
   * <p>The sync IAM role.</p>
   */
  syncRole: string | undefined;

  /**
   * <p>The SyncJob response status.</p>
   */
  status: SyncJobStatus | undefined;

  /**
   * <p>The creation date and time.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The update date and time.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkspaceResponse {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   */
  arn: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the S3 bucket where resources associated with the workspace are
   *          stored.</p>
   */
  s3Location: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   */
  role: string | undefined;

  /**
   * <p>The date and time when the workspace was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the workspace was last updated.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 * <p>An object that filters items in a list of component types.</p>
 *          <note>
 *             <p>Only one object is accepted as a valid input.</p>
 *          </note>
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
   */
  export interface ExtendsFromMember {
    extendsFrom: string;
    namespace?: never;
    isAbstract?: never;
    $unknown?: never;
  }

  /**
   * <p>The namespace to which the component types in the list belong.</p>
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
   */
  export interface IsAbstractMember {
    extendsFrom?: never;
    namespace?: never;
    isAbstract: boolean;
    $unknown?: never;
  }

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
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that filter the request.</p>
   */
  filters?: ListComponentTypesFilter[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object that contains information about a component type.</p>
 */
export interface ComponentTypeSummary {
  /**
   * <p>The ARN of the component type.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;

  /**
   * <p>The date and time when the component type was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the component type was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>The current status of the component type.</p>
   */
  status?: Status;

  /**
   * <p>The component type name.</p>
   */
  componentTypeName?: string;
}

/**
 * @public
 */
export interface ListComponentTypesResponse {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that contain information about the component types.</p>
   */
  componentTypeSummaries: ComponentTypeSummary[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the maximum number of results to display.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object that filters items in a list of entities.</p>
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
   */
  export interface ParentEntityIdMember {
    parentEntityId: string;
    componentTypeId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the component type in the entities in the list.</p>
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
   */
  export interface ExternalIdMember {
    parentEntityId?: never;
    componentTypeId?: never;
    externalId: string;
    $unknown?: never;
  }

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
   */
  workspaceId: string | undefined;

  /**
   * <p>A list of objects that filter the request.</p>
   *          <note>
   *             <p>Only one object is accepted as a valid input.</p>
   *          </note>
   */
  filters?: ListEntitiesFilter[];

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about an entity.</p>
 */
export interface EntitySummary {
  /**
   * <p>The ID of the entity.</p>
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   */
  entityName: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the parent entity.</p>
   */
  parentEntityId?: string;

  /**
   * <p>The current status of the entity.</p>
   */
  status: Status | undefined;

  /**
   * <p>The description of the entity.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value that specifies whether the entity has child entities or not.</p>
   */
  hasChildEntities?: boolean;

  /**
   * <p>The date and time when the entity was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The last date and time when the entity was updated.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * <p>A list of objects that contain information about the entities.</p>
   */
  entitySummaries?: EntitySummary[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListScenesRequest {
  /**
   * <p>The ID of the workspace that contains the scenes.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>Specifies the maximum number of results to display.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about a scene.</p>
 */
export interface SceneSummary {
  /**
   * <p>The ID of the scene.</p>
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   */
  contentLocation: string | undefined;

  /**
   * <p>The ARN of the scene.</p>
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the scene was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the scene was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The scene description.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListScenesResponse {
  /**
   * <p>A list of objects that contain information about the scenes.</p>
   */
  sceneSummaries?: SceneSummary[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSyncJobsRequest {
  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 50.</p>
   *          <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The SyncJob summary.</p>
 */
export interface SyncJobSummary {
  /**
   * <p>The SyncJob summary ARN.</p>
   */
  arn?: string;

  /**
   * <p>The ID of the workspace that contains the sync job.</p>
   */
  workspaceId?: string;

  /**
   * <p>The sync source.</p>
   */
  syncSource?: string;

  /**
   * <p>The SyncJob summaries status.</p>
   */
  status?: SyncJobStatus;

  /**
   * <p>The creation date and time.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The update date and time.</p>
   */
  updateDateTime?: Date;
}

/**
 * @public
 */
export interface ListSyncJobsResponse {
  /**
   * <p>The listed SyncJob summaries.</p>
   */
  syncJobSummaries?: SyncJobSummary[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
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
 * @public
 * <p>The sync resource filter.</p>
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
   */
  export interface StateMember {
    state: SyncResourceState | string;
    resourceType?: never;
    resourceId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The sync resource filter resource type</p>
   */
  export interface ResourceTypeMember {
    state?: never;
    resourceType: SyncResourceType | string;
    resourceId?: never;
    externalId?: never;
    $unknown?: never;
  }

  /**
   * <p>The sync resource filter resource ID.</p>
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
   */
  export interface ExternalIdMember {
    state?: never;
    resourceType?: never;
    resourceId?: never;
    externalId: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    state?: never;
    resourceType?: never;
    resourceId?: never;
    externalId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    state: (value: SyncResourceState | string) => T;
    resourceType: (value: SyncResourceType | string) => T;
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
   */
  workspaceId: string | undefined;

  /**
   * <p>The sync source.</p>
   *          <note>
   *             <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p>
   *          </note>
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
   */
  filters?: SyncResourceFilter[];

  /**
   * <p>The maximum number of results to return at one time. The default is 50.</p>
   *          <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The sync resource status.</p>
 */
export interface SyncResourceStatus {
  /**
   * <p>The sync resource status state.</p>
   */
  state?: SyncResourceState | string;

  /**
   * <p>The status error.</p>
   */
  error?: ErrorDetails;
}

/**
 * @public
 * <p>The sync resource summary.</p>
 */
export interface SyncResourceSummary {
  /**
   * <p>The resource type.</p>
   */
  resourceType?: SyncResourceType | string;

  /**
   * <p>The external ID.</p>
   */
  externalId?: string;

  /**
   * <p>The resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>The sync resource summary status.</p>
   */
  status?: SyncResourceStatus;

  /**
   * <p>The update date and time.</p>
   */
  updateDateTime?: Date;
}

/**
 * @public
 */
export interface ListSyncResourcesResponse {
  /**
   * <p>The sync resources.</p>
   */
  syncResources?: SyncResourceSummary[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Metadata that you can use to manage a resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about a workspace.</p>
 */
export interface WorkspaceSummary {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   */
  arn: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   */
  description?: string;

  /**
   * <p>The date and time when the workspace was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the workspace was last updated.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>A list of objects that contain information about the workspaces.</p>
   */
  workspaceSummaries?: WorkspaceSummary[];

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>Metadata to add to this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The number of tags exceeds the limit.</p>
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
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both
   *          the key and its associated value are removed.</p>
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
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the component type.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;

  /**
   * <p>The current state of the component type.</p>
   */
  state: State | string | undefined;
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
 * @public
 * <p>The parent entity update request.</p>
 */
export interface ParentEntityUpdateRequest {
  /**
   * <p>The type of the update.</p>
   */
  updateType: ParentEntityUpdateType | string | undefined;

  /**
   * <p>The ID of the parent entity.</p>
   */
  parentEntityId?: string;
}

/**
 * @public
 */
export interface UpdateEntityResponse {
  /**
   * <p>The date and time when the entity was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The current state of the entity update.</p>
   */
  state: State | string | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanRequest {
  /**
   * <p>The pricing mode.</p>
   */
  pricingMode: PricingMode | string | undefined;

  /**
   * <p>The bundle names.</p>
   */
  bundleNames?: string[];
}

/**
 * @public
 */
export interface UpdatePricingPlanResponse {
  /**
   * <p>Update the current pricing plan.</p>
   */
  currentPricingPlan: PricingPlan | undefined;

  /**
   * <p>Update the pending pricing plan.</p>
   */
  pendingPricingPlan?: PricingPlan;
}

/**
 * @public
 */
export interface UpdateSceneRequest {
  /**
   * <p>The ID of the workspace that contains the scene.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the scene.</p>
   */
  sceneId: string | undefined;

  /**
   * <p>The relative path that specifies the location of the content definition file.</p>
   */
  contentLocation?: string;

  /**
   * <p>The description of this scene.</p>
   */
  description?: string;

  /**
   * <p>A list of capabilities that the scene uses to render.</p>
   */
  capabilities?: string[];

  /**
   * <p>The scene metadata.</p>
   */
  sceneMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSceneResponse {
  /**
   * <p>The date and time when the scene was last updated.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   */
  role?: string;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * <p>The date and time of the current update.</p>
   */
  updateDateTime: Date | undefined;
}

/**
 * @public
 * <p>An object that specifies a value for a property.</p>
 */
export interface DataValue {
  /**
   * <p>A Boolean value.</p>
   */
  booleanValue?: boolean;

  /**
   * <p>A double value.</p>
   */
  doubleValue?: number;

  /**
   * <p>An integer value.</p>
   */
  integerValue?: number;

  /**
   * <p>A long value.</p>
   */
  longValue?: number;

  /**
   * <p>A string value.</p>
   */
  stringValue?: string;

  /**
   * <p>A list of multiple values.</p>
   */
  listValue?: DataValue[];

  /**
   * <p>An object that maps strings to multiple <code>DataValue</code> objects.</p>
   */
  mapValue?: Record<string, DataValue>;

  /**
   * <p>A value that relates a component to another component.</p>
   */
  relationshipValue?: RelationshipValue;

  /**
   * <p>An expression that produces the value.</p>
   */
  expression?: string;
}

/**
 * @public
 * <p>An object that filters items returned by a property request.</p>
 */
export interface PropertyFilter {
  /**
   * <p>The property name associated with this property filter.</p>
   */
  propertyName?: string;

  /**
   * <p>The operator associated with this property filter.</p>
   */
  operator?: string;

  /**
   * <p>The value associated with this property filter.</p>
   */
  value?: DataValue;
}

/**
 * @public
 * <p>The latest value of the property.</p>
 */
export interface PropertyLatestValue {
  /**
   * <p>An object that specifies information about a property.</p>
   */
  propertyReference: EntityPropertyReference | undefined;

  /**
   * <p>The value of the property.</p>
   */
  propertyValue?: DataValue;
}

/**
 * @public
 * <p>An object that contains information about a value for a time series property.</p>
 */
export interface PropertyValue {
  /**
   * @deprecated
   *
   * <p>The timestamp of a value for a time series property.</p>
   */
  timestamp?: Date;

  /**
   * <p>An object that specifies a value for a time series property.</p>
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
   */
  time?: string;
}

/**
 * @public
 * <p>An object that specifies the data type of a property.</p>
 */
export interface DataType {
  /**
   * <p>The underlying type of the data type.</p>
   */
  type: Type | string | undefined;

  /**
   * <p>The nested type in the data type.</p>
   */
  nestedType?: DataType;

  /**
   * <p>The allowed values for this data type.</p>
   */
  allowedValues?: DataValue[];

  /**
   * <p>The unit of measure used in this data type.</p>
   */
  unitOfMeasure?: string;

  /**
   * <p>A relationship that associates a component with another component.</p>
   */
  relationship?: Relationship;
}

/**
 * @public
 */
export interface GetPropertyValueHistoryRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   */
  entityId?: string;

  /**
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId?: string;

  /**
   * <p>A list of properties whose value histories the request retrieves.</p>
   */
  selectedProperties: string[] | undefined;

  /**
   * <p>A list of objects that filter the property value history request.</p>
   */
  propertyFilters?: PropertyFilter[];

  /**
   * @deprecated
   *
   * <p>The date and time of the earliest property value to return.</p>
   */
  startDateTime?: Date;

  /**
   * @deprecated
   *
   * <p>The date and time of the latest property value to return.</p>
   */
  endDateTime?: Date;

  /**
   * <p>An object that specifies the interpolation type and the interval over which to
   *          interpolate data.</p>
   */
  interpolation?: InterpolationParameters;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The time direction to use in the result order.</p>
   */
  orderByTime?: OrderByTime | string;

  /**
   * <p>The ISO8601 DateTime of the earliest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html">PropertyValue</a>.</p>
   */
  startTime?: string;

  /**
   * <p>The ISO8601 DateTime of the latest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html">PropertyValue</a>.</p>
   */
  endTime?: string;
}

/**
 * @public
 * <p>An object that specifies information about time series property values. This object is
 *          used and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action.</p>
 */
export interface PropertyValueEntry {
  /**
   * <p>An object that contains information about the entity that has the property.</p>
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * <p>A list of objects that specify time series property values.</p>
   */
  propertyValues?: PropertyValue[];
}

/**
 * @public
 * <p>The history of values for a time series property.</p>
 */
export interface PropertyValueHistory {
  /**
   * <p>An object that uniquely identifies an entity property.</p>
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * <p>A list of objects that contain information about the values in the history of a time
   *          series property.</p>
   */
  values?: PropertyValue[];
}

/**
 * @public
 * <p>The tabular conditions.</p>
 */
export interface TabularConditions {
  /**
   * <p>Filter criteria that orders the output. It can be sorted in ascending or descending
   *          order.</p>
   */
  orderBy?: OrderBy[];

  /**
   * <p>You can filter the request using various logical operators and a key-value format. For
   *          example:</p>
   *          <p>
   *             <code>\{"key": "serverType", "value": "webServer"\}</code>
   *          </p>
   */
  propertyFilters?: PropertyFilter[];
}

/**
 * @public
 * <p>An error returned by the <code>BatchPutProperty</code> action.</p>
 */
export interface BatchPutPropertyError {
  /**
   * <p>The error code.</p>
   */
  errorCode: string | undefined;

  /**
   * <p>The error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * <p>An object that contains information about errors returned by the
   *             <code>BatchPutProperty</code> action.</p>
   */
  entry: PropertyValueEntry | undefined;
}

/**
 * @public
 */
export interface GetPropertyValueRequest {
  /**
   * <p>The name of the component whose property values the operation returns.</p>
   */
  componentName?: string;

  /**
   * <p>The ID of the component type whose property values the operation returns.</p>
   */
  componentTypeId?: string;

  /**
   * <p>The ID of the entity whose property values the operation returns.</p>
   */
  entityId?: string;

  /**
   * <p>The properties whose values the operation returns.</p>
   */
  selectedProperties: string[] | undefined;

  /**
   * <p>The ID of the workspace whose values the operation returns.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The property group name.</p>
   */
  propertyGroupName?: string;

  /**
   * <p>The tabular conditions.</p>
   */
  tabularConditions?: TabularConditions;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesRequest {
  /**
   * <p>The ID of the workspace that contains the properties to set.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>An object that maps strings to the property value entries to set. Each string in the
   *          mapping must be unique to this object.</p>
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
   */
  propertyValues: PropertyValueHistory[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about errors returned by the
 *             <code>BatchPutProperty</code> action.</p>
 */
export interface BatchPutPropertyErrorEntry {
  /**
   * <p>A list of objects that contain information about errors returned by the
   *             <code>BatchPutProperty</code> action.</p>
   */
  errors: BatchPutPropertyError[] | undefined;
}

/**
 * @public
 * <p>An object that sets information about a property.</p>
 */
export interface PropertyDefinitionRequest {
  /**
   * <p>An object that contains information about the data type.</p>
   */
  dataType?: DataType;

  /**
   * <p>A Boolean value that specifies whether the property is required.</p>
   */
  isRequiredInEntity?: boolean;

  /**
   * <p>A Boolean value that specifies whether the property ID comes from an external data
   *          store.</p>
   */
  isExternalId?: boolean;

  /**
   * <p>A Boolean value that specifies whether the property is stored externally.</p>
   */
  isStoredExternally?: boolean;

  /**
   * <p>A Boolean value that specifies whether the property consists of time series data.</p>
   */
  isTimeSeries?: boolean;

  /**
   * <p>An object that contains the default value.</p>
   */
  defaultValue?: DataValue;

  /**
   * <p>A mapping that specifies configuration information about the property. Use this field to
   *          specify information that you read from and write to an external source.</p>
   */
  configuration?: Record<string, string>;

  /**
   * <p>A friendly name for the property.</p>
   */
  displayName?: string;
}

/**
 * @public
 * <p>An object that contains response data from a property definition request.</p>
 */
export interface PropertyDefinitionResponse {
  /**
   * <p>An object that contains information about the data type.</p>
   */
  dataType: DataType | undefined;

  /**
   * <p>A Boolean value that specifies whether the property consists of time series data.</p>
   */
  isTimeSeries: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is required in an entity.</p>
   */
  isRequiredInEntity: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property ID comes from an external data
   *          store.</p>
   */
  isExternalId: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is stored externally.</p>
   */
  isStoredExternally: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is imported from an
   *          external data store.</p>
   */
  isImported: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition can be updated.</p>
   */
  isFinal: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is inherited from a
   *          parent entity.</p>
   */
  isInherited: boolean | undefined;

  /**
   * <p>An object that contains the default value.</p>
   */
  defaultValue?: DataValue;

  /**
   * <p>A mapping that specifies configuration information about the property.</p>
   */
  configuration?: Record<string, string>;

  /**
   * <p>A friendly name for the property.</p>
   */
  displayName?: string;
}

/**
 * @public
 */
export interface BatchPutPropertyValuesResponse {
  /**
   * <p>Entries that caused errors in the batch put operation.</p>
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
   */
  propertyValues?: Record<string, PropertyLatestValue>;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A table of property values.</p>
   */
  tabularPropertyValues?: Record<string, DataValue>[][];
}

/**
 * @public
 */
export interface CreateComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   */
  isSingleton?: boolean;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest>;

  /**
   * <p>Specifies the parent component type to extend.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   */
  functions?: Record<string, FunctionRequest>;

  /**
   * <p>Metadata that you can use to manage the component type.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p/>
   */
  propertyGroups?: Record<string, PropertyGroupRequest>;

  /**
   * <p>A friendly name for the component type.</p>
   */
  componentTypeName?: string;
}

/**
 * @public
 */
export interface GetComponentTypeResponse {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   */
  isSingleton?: boolean;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: Record<string, PropertyDefinitionResponse>;

  /**
   * <p>The name of the parent component type that this component type extends.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   */
  functions?: Record<string, FunctionResponse>;

  /**
   * <p>The date and time when the component type was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the component was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The ARN of the component type.</p>
   */
  arn: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the component type is abstract.</p>
   */
  isAbstract?: boolean;

  /**
   * <p>A Boolean value that specifies whether the component type has a schema initializer and
   *          that the schema initializer has run.</p>
   */
  isSchemaInitialized?: boolean;

  /**
   * <p>The current status of the component type.</p>
   */
  status?: Status;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
   */
  propertyGroups?: Record<string, PropertyGroupResponse>;

  /**
   * <p>The syncSource of the SyncJob, if this entity was created by a SyncJob.</p>
   */
  syncSource?: string;

  /**
   * <p>The component type name.</p>
   */
  componentTypeName?: string;
}

/**
 * @public
 */
export interface UpdateComponentTypeRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of
   *          this type.</p>
   */
  isSingleton?: boolean;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId: string | undefined;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the property definitions in the component type. Each
   *          string in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: Record<string, PropertyDefinitionRequest>;

  /**
   * <p>Specifies the component type that this component type extends.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   */
  functions?: Record<string, FunctionRequest>;

  /**
   * <p>The property groups.</p>
   */
  propertyGroups?: Record<string, PropertyGroupRequest>;

  /**
   * <p>The component type name.</p>
   */
  componentTypeName?: string;
}

/**
 * @public
 * <p>An object that sets information about a property.</p>
 */
export interface PropertyRequest {
  /**
   * <p>An object that specifies information about a property.</p>
   */
  definition?: PropertyDefinitionRequest;

  /**
   * <p>The value of the property.</p>
   */
  value?: DataValue;

  /**
   * <p>The update type of the update property request.</p>
   */
  updateType?: PropertyUpdateType | string;
}

/**
 * @public
 * <p>An object that contains information about a property response.</p>
 */
export interface PropertyResponse {
  /**
   * <p>An object that specifies information about a property.</p>
   */
  definition?: PropertyDefinitionResponse;

  /**
   * <p>The value of the property.</p>
   */
  value?: DataValue;
}

/**
 * @public
 * <p>An object that sets information about a component type create or update request.</p>
 */
export interface ComponentRequest {
  /**
   * <p>The description of the component request.</p>
   */
  description?: string;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId?: string;

  /**
   * <p>An object that maps strings to the properties to set in the component type. Each string
   *          in the mapping must be unique to this object.</p>
   */
  properties?: Record<string, PropertyRequest>;

  /**
   * <p>The property groups.</p>
   */
  propertyGroups?: Record<string, ComponentPropertyGroupRequest>;
}

/**
 * @public
 * <p>An object that returns information about a component type create or update
 *          request.</p>
 */
export interface ComponentResponse {
  /**
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId?: string;

  /**
   * <p>The status of the component type.</p>
   */
  status?: Status;

  /**
   * <p>The name of the property definition set in the request.</p>
   */
  definedIn?: string;

  /**
   * <p>An object that maps strings to the properties to set in the component type. Each string
   *          in the mapping must be unique to this object.</p>
   */
  properties?: Record<string, PropertyResponse>;

  /**
   * <p>The property groups.</p>
   */
  propertyGroups?: Record<string, ComponentPropertyGroupResponse>;

  /**
   * <p>The syncSource of the sync job, if this entity was created by a sync job.</p>
   */
  syncSource?: string;
}

/**
 * @public
 * <p>The component update request.</p>
 */
export interface ComponentUpdateRequest {
  /**
   * <p>The update type of the component update request.</p>
   */
  updateType?: ComponentUpdateType | string;

  /**
   * <p>The description of the component type.</p>
   */
  description?: string;

  /**
   * <p>The ID of the component type.</p>
   */
  componentTypeId?: string;

  /**
   * <p>An object that maps strings to the properties to set in the component type update. Each
   *          string in the mapping must be unique to this object.</p>
   */
  propertyUpdates?: Record<string, PropertyRequest>;

  /**
   * <p>The property group updates.</p>
   */
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest>;
}

/**
 * @public
 */
export interface CreateEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   */
  entityId?: string;

  /**
   * <p>The name of the entity.</p>
   */
  entityName: string | undefined;

  /**
   * <p>The description of the entity.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the components in the entity. Each string in the mapping
   *          must be unique to this object.</p>
   */
  components?: Record<string, ComponentRequest>;

  /**
   * <p>The ID of the entity's parent entity.</p>
   */
  parentEntityId?: string;

  /**
   * <p>Metadata that you can use to manage the entity.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetEntityResponse {
  /**
   * <p>The ID of the entity.</p>
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   */
  entityName: string | undefined;

  /**
   * <p>The ARN of the entity.</p>
   */
  arn: string | undefined;

  /**
   * <p>The current status of the entity.</p>
   */
  status: Status | undefined;

  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The description of the entity.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the components in the entity. Each string in the mapping
   *          must be unique to this object.</p>
   */
  components?: Record<string, ComponentResponse>;

  /**
   * <p>The ID of the parent entity for this entity.</p>
   */
  parentEntityId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the entity has associated child entities.</p>
   */
  hasChildEntities: boolean | undefined;

  /**
   * <p>The date and time when the entity was created.</p>
   */
  creationDateTime: Date | undefined;

  /**
   * <p>The date and time when the entity was last updated.</p>
   */
  updateDateTime: Date | undefined;

  /**
   * <p>The syncSource of the sync job, if this entity was created by a sync job.</p>
   */
  syncSource?: string;
}

/**
 * @public
 */
export interface UpdateEntityRequest {
  /**
   * <p>The ID of the workspace that contains the entity.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   */
  entityId: string | undefined;

  /**
   * <p>The name of the entity.</p>
   */
  entityName?: string;

  /**
   * <p>The description of the entity.</p>
   */
  description?: string;

  /**
   * <p>An object that maps strings to the component updates in the request. Each string in the
   *          mapping must be unique to this object.</p>
   */
  componentUpdates?: Record<string, ComponentUpdateRequest>;

  /**
   * <p>An object that describes the update request for a parent entity.</p>
   */
  parentEntityUpdate?: ParentEntityUpdateRequest;
}
