import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { IoTTwinMakerServiceException as __BaseException } from "./IoTTwinMakerServiceException";

/**
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
 * <p>An object that uniquely identifies an entity property.</p>
 */
export interface EntityPropertyReference {
  /**
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * <p>A mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.</p>
   */
  externalIdProperty?: { [key: string]: string };

  /**
   * <p>The ID of the entity.</p>
   */
  entityId?: string;

  /**
   * <p>The name of the property.</p>
   */
  propertyName: string | undefined;
}

export namespace EntityPropertyReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityPropertyReference): any => ({
    ...obj,
  });
}

/**
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

export namespace RelationshipValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationshipValue): any => ({
    ...obj,
  });
}

/**
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
 * <p>The Lambda function.</p>
 */
export interface LambdaFunction {
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  arn: string | undefined;
}

export namespace LambdaFunction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunction): any => ({
    ...obj,
  });
}

/**
 * <p>The data connector.</p>
 */
export interface DataConnector {
  /**
   * <p>The Lambda function associated with this data connector.</p>
   */
  lambda?: LambdaFunction;

  /**
   * <p>A Boolean value that specifies whether the data connector is native to IoT TwinMaker.</p>
   */
  isNative?: boolean;
}

export namespace DataConnector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataConnector): any => ({
    ...obj,
  });
}

export enum Scope {
  ENTITY = "ENTITY",
  WORKSPACE = "WORKSPACE",
}

/**
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

export namespace FunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Relationship {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Relationship): any => ({
    ...obj,
  });
}

export enum Type {
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  INTEGER = "INTEGER",
  LIST = "LIST",
  LONG = "LONG",
  MAP = "MAP",
  RELATIONSHIP = "RELATIONSHIP",
  STRING = "STRING",
}

export enum State {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  ERROR = "ERROR",
  UPDATING = "UPDATING",
}

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

export namespace CreateComponentTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentTypeResponse): any => ({
    ...obj,
  });
}

/**
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

export enum PropertyUpdateType {
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

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

export namespace CreateEntityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEntityResponse): any => ({
    ...obj,
  });
}

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
  tags?: { [key: string]: string };
}

export namespace CreateSceneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSceneRequest): any => ({
    ...obj,
  });
}

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

export namespace CreateSceneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSceneResponse): any => ({
    ...obj,
  });
}

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
   * <p>The ARN of the S3 bucket where resources associated with the workspace are stored.</p>
   */
  s3Location: string | undefined;

  /**
   * <p>The ARN of the execution role associated with the workspace.</p>
   */
  role: string | undefined;

  /**
   * <p>Metadata that you can use to manage the workspace</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceRequest): any => ({
    ...obj,
  });
}

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

export namespace CreateWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteComponentTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteComponentTypeResponse {
  /**
   * <p>The current state of the component type to be deleted.</p>
   */
  state: State | string | undefined;
}

export namespace DeleteComponentTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentTypeResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteEntityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityRequest): any => ({
    ...obj,
  });
}

export interface DeleteEntityResponse {
  /**
   * <p>The current state of the deleted entity.</p>
   */
  state: State | string | undefined;
}

export namespace DeleteEntityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteSceneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSceneRequest): any => ({
    ...obj,
  });
}

export interface DeleteSceneResponse {}

export namespace DeleteSceneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSceneResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceRequest {
  /**
   * <p>The ID of the workspace to delete.</p>
   */
  workspaceId: string | undefined;
}

export namespace DeleteWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceResponse {}

export namespace DeleteWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceResponse): any => ({
    ...obj,
  });
}

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

export namespace GetComponentTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentTypeRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace FunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionResponse): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
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

export namespace ErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the status of an entity, component, component type, or workspace.</p>
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

export namespace Status {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Status): any => ({
    ...obj,
  });
}

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

export namespace GetEntityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEntityRequest): any => ({
    ...obj,
  });
}

/**
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
}

export namespace GetPropertyValueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPropertyValueRequest): any => ({
    ...obj,
  });
}

export enum InterpolationType {
  LINEAR = "LINEAR",
}

/**
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

export namespace InterpolationParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InterpolationParameters): any => ({
    ...obj,
  });
}

export enum OrderByTime {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

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

export namespace GetSceneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSceneRequest): any => ({
    ...obj,
  });
}

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
}

export namespace GetSceneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSceneResponse): any => ({
    ...obj,
  });
}

export interface GetWorkspaceRequest {
  /**
   * <p>The ID of the workspace.</p>
   */
  workspaceId: string | undefined;
}

export namespace GetWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkspaceRequest): any => ({
    ...obj,
  });
}

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
   * <p>The ARN of the S3 bucket where resources associated with the workspace are stored.</p>
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

export namespace GetWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkspaceResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>A Boolean value that specifies whether the component types in the list are abstract.</p>
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentTypesFilter): any => {
    if (obj.extendsFrom !== undefined) return { extendsFrom: obj.extendsFrom };
    if (obj.namespace !== undefined) return { namespace: obj.namespace };
    if (obj.isAbstract !== undefined) return { isAbstract: obj.isAbstract };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

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
   * <p>The maximum number of results to display.</p>
   */
  maxResults?: number;
}

export namespace ListComponentTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentTypesRequest): any => ({
    ...obj,
    ...(obj.filters && { filters: obj.filters.map((item) => ListComponentTypesFilter.filterSensitiveLog(item)) }),
  });
}

/**
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
}

export namespace ComponentTypeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentTypeSummary): any => ({
    ...obj,
  });
}

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

export namespace ListComponentTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentTypesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object that filters items in a list of entities.</p>
 */
export type ListEntitiesFilter =
  | ListEntitiesFilter.ComponentTypeIdMember
  | ListEntitiesFilter.ExternalIdMember
  | ListEntitiesFilter.ParentEntityIdMember
  | ListEntitiesFilter.$UnknownMember;

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
   * <p>The external-Id property of a component. The external-Id property is the primary key of an external storage system.</p>
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesFilter): any => {
    if (obj.parentEntityId !== undefined) return { parentEntityId: obj.parentEntityId };
    if (obj.componentTypeId !== undefined) return { componentTypeId: obj.componentTypeId };
    if (obj.externalId !== undefined) return { externalId: obj.externalId };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

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
   * <p>The maximum number of results to display.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesRequest): any => ({
    ...obj,
    ...(obj.filters && { filters: obj.filters.map((item) => ListEntitiesFilter.filterSensitiveLog(item)) }),
  });
}

/**
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

export namespace EntitySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntitySummary): any => ({
    ...obj,
  });
}

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

export namespace ListEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesResponse): any => ({
    ...obj,
  });
}

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

export namespace ListScenesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScenesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace SceneSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SceneSummary): any => ({
    ...obj,
  });
}

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

export namespace ListScenesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScenesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>The maximum number of results to display.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Metadata that you can use to manage a resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListWorkspacesRequest {
  /**
   * <p>The maximum number of results to display.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkspacesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace WorkspaceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceSummary): any => ({
    ...obj,
  });
}

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

export namespace ListWorkspacesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkspacesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>Metadata to add to this resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
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

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateComponentTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentTypeResponse): any => ({
    ...obj,
  });
}

export enum ComponentUpdateType {
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

export enum ParentEntityUpdateType {
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

/**
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

export namespace ParentEntityUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParentEntityUpdateRequest): any => ({
    ...obj,
  });
}

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

export namespace UpdateEntityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEntityResponse): any => ({
    ...obj,
  });
}

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
}

export namespace UpdateSceneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSceneRequest): any => ({
    ...obj,
  });
}

export interface UpdateSceneResponse {
  /**
   * <p>The date and time when the scene was last updated.</p>
   */
  updateDateTime: Date | undefined;
}

export namespace UpdateSceneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSceneResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceResponse {
  /**
   * <p>The date and time of the current update.</p>
   */
  updateDateTime: Date | undefined;
}

export namespace UpdateWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceResponse): any => ({
    ...obj,
  });
}

/**
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
  mapValue?: { [key: string]: DataValue };

  /**
   * <p>A value that relates a component to another component.</p>
   */
  relationshipValue?: RelationshipValue;

  /**
   * <p>An expression that produces the value.</p>
   */
  expression?: string;
}

export namespace DataValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataValue): any => ({
    ...obj,
  });
}

/**
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

export namespace PropertyFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The latest value of the property.</p>
 */
export interface PropertyLatestValue {
  /**
   * <p>An object that specifies information about a property.&gt;</p>
   */
  propertyReference: EntityPropertyReference | undefined;

  /**
   * <p>The value of the property.</p>
   */
  propertyValue?: DataValue;
}

export namespace PropertyLatestValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyLatestValue): any => ({
    ...obj,
  });
}

/**
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
   *          <p>The time for when the property value was recorded in ISO 8601 format: <i>YYYY-MM-DDThh:mm:ss[.SSSSSSSSS][Z/±HH:mm]</i>.</p>
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
   *                   <i>[.SSSSSSSSS]</i>: additional precision, where precedence is maintained. For
   *                example: [.573123] is equal to 573123000 nanoseconds.</p>
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

export namespace PropertyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyValue): any => ({
    ...obj,
  });
}

/**
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

export namespace DataType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataType): any => ({
    ...obj,
  });
}

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
   * <p>An object that specifies the interpolation type and the interval over which to interpolate data.</p>
   */
  interpolation?: InterpolationParameters;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The time direction to use in the result order.</p>
   */
  orderByTime?: OrderByTime | string;

  /**
   * <p>The ISO8601 DateTime of the earliest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/roci/latest/roci-api/API_PropertyValue.html">PropertyValue</a>.</p>
   */
  startTime?: string;

  /**
   * <p>The ISO8601 DateTime of the latest property value to return.</p>
   *          <p>For more information about the ISO8601 DateTime format, see the data type <a href="https://docs.aws.amazon.com/roci/latest/roci-api/API_PropertyValue.html">PropertyValue</a>.</p>
   */
  endTime?: string;
}

export namespace GetPropertyValueHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPropertyValueHistoryRequest): any => ({
    ...obj,
  });
}

export interface GetPropertyValueResponse {
  /**
   * <p>An object that maps strings to the properties and latest property values in the response. Each string
   *        in the mapping must be unique to this object.</p>
   */
  propertyValues: { [key: string]: PropertyLatestValue } | undefined;
}

export namespace GetPropertyValueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPropertyValueResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object that specifies information about time series property values. This object is used  and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action.</p>
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

export namespace PropertyValueEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyValueEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The history of values for a time series property.</p>
 */
export interface PropertyValueHistory {
  /**
   * <p>An object that uniquely identifies an entity property.</p>
   */
  entityPropertyReference: EntityPropertyReference | undefined;

  /**
   * <p>A list of objects that contain information about the values in the history of a time series property.</p>
   */
  values?: PropertyValue[];
}

export namespace PropertyValueHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyValueHistory): any => ({
    ...obj,
  });
}

/**
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
   * <p>An object that contains information about errors returned by the <code>BatchPutProperty</code> action.</p>
   */
  entry: PropertyValueEntry | undefined;
}

export namespace BatchPutPropertyError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutPropertyError): any => ({
    ...obj,
  });
}

export interface BatchPutPropertyValuesRequest {
  /**
   * <p>The ID of the workspace that contains the properties to set.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>An object that maps strings to the property value entries to set. Each string
   *        in the mapping must be unique to this object.</p>
   */
  entries: PropertyValueEntry[] | undefined;
}

export namespace BatchPutPropertyValuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutPropertyValuesRequest): any => ({
    ...obj,
  });
}

export interface GetPropertyValueHistoryResponse {
  /**
   * <p>An object that maps strings to the property definitions in the component type. Each string
   *        in the mapping must be unique to this object.</p>
   */
  propertyValues: PropertyValueHistory[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}

export namespace GetPropertyValueHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPropertyValueHistoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains information about errors returned by the <code>BatchPutProperty</code> action.</p>
 */
export interface BatchPutPropertyErrorEntry {
  /**
   * <p>A list of objects that contain information about errors returned by the
   *             <code>BatchPutProperty</code> action.</p>
   */
  errors: BatchPutPropertyError[] | undefined;
}

export namespace BatchPutPropertyErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutPropertyErrorEntry): any => ({
    ...obj,
  });
}

/**
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
   * <p>A Boolean value that specifies whether the property ID comes from an external data store.</p>
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
  configuration?: { [key: string]: string };
}

export namespace PropertyDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyDefinitionRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>A Boolean value that specifies whether the property ID comes from an external data store.</p>
   */
  isExternalId: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property is stored externally.</p>
   */
  isStoredExternally: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is imported from an external data store.</p>
   */
  isImported: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition can be updated.</p>
   */
  isFinal: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether the property definition is inherited from a parent entity.</p>
   */
  isInherited: boolean | undefined;

  /**
   * <p>An object that contains the default value.</p>
   */
  defaultValue?: DataValue;

  /**
   * <p>A mapping that specifies configuration information about the property.</p>
   */
  configuration?: { [key: string]: string };
}

export namespace PropertyDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyDefinitionResponse): any => ({
    ...obj,
  });
}

export interface BatchPutPropertyValuesResponse {
  /**
   * <p>Entries that caused errors in the batch put operation.</p>
   */
  errorEntries: BatchPutPropertyErrorEntry[] | undefined;
}

export namespace BatchPutPropertyValuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutPropertyValuesResponse): any => ({
    ...obj,
  });
}

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
   * <p>An object that maps strings to the property definitions in the component type. Each string
   *       in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: { [key: string]: PropertyDefinitionRequest };

  /**
   * <p>Specifies the parent component type to extend.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string in the
   *          mapping must be unique to this object.</p>
   */
  functions?: { [key: string]: FunctionRequest };

  /**
   * <p>Metadata that you can use to manage the component type.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateComponentTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentTypeRequest): any => ({
    ...obj,
  });
}

export interface GetComponentTypeResponse {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of this
   *          type.</p>
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
   * <p>An object that maps strings to the property definitions in the component type. Each string
   *        in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: { [key: string]: PropertyDefinitionResponse };

  /**
   * <p>The name of the parent component type that this component type extends.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string
   *        in the mapping must be unique to this object.</p>
   */
  functions?: { [key: string]: FunctionResponse };

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
   * <p>A Boolean value that specifies whether the component type has a schema initializer and that the
   *       schema initializer has run.</p>
   */
  isSchemaInitialized?: boolean;

  /**
   * <p>The current status of the component type.</p>
   */
  status?: Status;
}

export namespace GetComponentTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentTypeResponse): any => ({
    ...obj,
  });
}

export interface UpdateComponentTypeRequest {
  /**
   * <p>The ID of the workspace that contains the component type.</p>
   */
  workspaceId: string | undefined;

  /**
   * <p>A Boolean value that specifies whether an entity can have more than one component of this
   *          type.</p>
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
   * <p>An object that maps strings to the property definitions in the component type. Each string
   *        in the mapping must be unique to this object.</p>
   */
  propertyDefinitions?: { [key: string]: PropertyDefinitionRequest };

  /**
   * <p>Specifies the component type that this component type extends.</p>
   */
  extendsFrom?: string[];

  /**
   * <p>An object that maps strings to the functions in the component type. Each string
   *        in the mapping must be unique to this object.</p>
   */
  functions?: { [key: string]: FunctionRequest };
}

export namespace UpdateComponentTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentTypeRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace PropertyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace PropertyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyResponse): any => ({
    ...obj,
  });
}

/**
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
   *        in the mapping must be unique to this object.</p>
   */
  properties?: { [key: string]: PropertyRequest };
}

export namespace ComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that returns information about a component type create or update request.</p>
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
   *        in the mapping must be unique to this object.</p>
   */
  properties?: { [key: string]: PropertyResponse };
}

export namespace ComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>An object that maps strings to the properties to set in the component type update. Each string
   *        in the mapping must be unique to this object.</p>
   */
  propertyUpdates?: { [key: string]: PropertyRequest };
}

export namespace ComponentUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentUpdateRequest): any => ({
    ...obj,
  });
}

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
   * <p>An object that maps strings to the components in the entity. Each string
   *        in the mapping must be unique to this object.</p>
   */
  components?: { [key: string]: ComponentRequest };

  /**
   * <p>The ID of the entity's parent entity.</p>
   */
  parentEntityId?: string;

  /**
   * <p>Metadata that you can use to manage the entity.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateEntityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEntityRequest): any => ({
    ...obj,
  });
}

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
   * <p>An object that maps strings to the components in the entity. Each string
   *        in the mapping must be unique to this object.</p>
   */
  components?: { [key: string]: ComponentResponse };

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
}

export namespace GetEntityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEntityResponse): any => ({
    ...obj,
  });
}

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
   * <p>An object that maps strings to the component updates in the request. Each string
   *        in the mapping must be unique to this object.</p>
   */
  componentUpdates?: { [key: string]: ComponentUpdateRequest };

  /**
   * <p>An object that describes the update request for a parent entity.</p>
   */
  parentEntityUpdate?: ParentEntityUpdateRequest;
}

export namespace UpdateEntityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEntityRequest): any => ({
    ...obj,
  });
}
