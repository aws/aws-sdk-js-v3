// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ServiceCatalogAppRegistryServiceException as __BaseException } from "./ServiceCatalogAppRegistryServiceException";

/**
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related
 *        cloud resource abstractions.</p>
 */
export interface Application {
  /**
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs you can use to associate with the application.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry application.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;
}

/**
 * <p>
 *       The
 *       definition
 *       of <code>tagQuery</code>.
 *       Specifies which resources are associated with an
 *       application.
 *     </p>
 */
export interface TagQueryConfiguration {
  /**
   * <p>
   *       Condition
   *       in the IAM policy
   *       that associates resources
   *       to an application.
   *     </p>
   */
  tagKey?: string;
}

/**
 * <p>
 *       Includes all
 *       of the Service Catalog AppRegistry settings.
 *     </p>
 */
export interface AppRegistryConfiguration {
  /**
   * <p>
   *       Includes the definition
   *       of a <code>tagQuery</code>.
   *     </p>
   */
  tagQueryConfiguration?: TagQueryConfiguration;
}

export interface AssociateAttributeGroupRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export interface AssociateAttributeGroupResponse {
  /**
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.</p>
   */
  attributeGroupArn?: string;
}

/**
 * <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
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
 * <p>The service is experiencing internal problems.</p>
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
 * <p>The specified resource does not exist.</p>
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
 * <p>The maximum number of resources per account has been reached.</p>
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
 * <p>The request has invalid or missing parameters.</p>
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

export enum ResourceType {
  CFN_STACK = "CFN_STACK",
  RESOURCE_TAG_VALUE = "RESOURCE_TAG_VALUE",
}

export interface AssociateResourceRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The type of resource of which the application will be associated.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The name or ID of the resource of which the application will be associated.</p>
   */
  resource: string | undefined;
}

export interface AssociateResourceResponse {
  /**
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;
}

/**
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.</p>
 */
export interface AttributeGroup {
  /**
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>
 *       The details related to a specific AttributeGroup.
 *     </p>
 */
export interface AttributeGroupDetails {
  /**
   * <p>The unique identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   */
  arn?: string;

  /**
   * @deprecated
   *
   * <important>
   *             <p>
   *         This field is no longer supported.
   *         We recommend
   *         you don't use the field when using <code>ListAttributeGroupsForApplication</code>.
   *       </p>
   *          </important>
   *          <p>
   *       The name of the attribute group.
   *     </p>
   */
  name?: string;
}

/**
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.</p>
 */
export interface AttributeGroupSummary {
  /**
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;
}

export interface CreateApplicationRequest {
  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>Key-value pairs you can use to associate with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

export interface CreateApplicationResponse {
  /**
   * <p>Information about the application.</p>
   */
  application?: Application;
}

export interface CreateAttributeGroupRequest {
  /**
   * <p>The name of the attribute group.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes: string | undefined;

  /**
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

export interface CreateAttributeGroupResponse {
  /**
   * <p>Information about the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}

export interface DeleteApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;
}

export interface DeleteApplicationResponse {
  /**
   * <p>Information about the deleted application.</p>
   */
  application?: ApplicationSummary;
}

export interface DeleteAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export interface DeleteAttributeGroupResponse {
  /**
   * <p>Information about the deleted attribute group.</p>
   */
  attributeGroup?: AttributeGroupSummary;
}

export interface DisassociateAttributeGroupRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export interface DisassociateAttributeGroupResponse {
  /**
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   */
  attributeGroupArn?: string;
}

export interface DisassociateResourceRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The type of the resource that is being disassociated.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The name or ID of the resource.</p>
   */
  resource: string | undefined;
}

export interface DisassociateResourceResponse {
  /**
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;
}

export interface GetApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;
}

export enum ResourceGroupState {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>The information about the resource group integration.</p>
 */
export interface ResourceGroup {
  /**
   * <p>The state of the propagation process for the resource group. The states includes:</p>
   *          <p>
   *             <code>CREATING </code>if the resource group is in the process of being created.</p>
   *          <p>
   *             <code>CREATE_COMPLETE</code> if the resource group was created successfully.</p>
   *          <p>
   *             <code>CREATE_FAILED</code> if the resource group failed to be created.</p>
   *          <p>
   *             <code>UPDATING</code> if the resource group is in the process of being updated.</p>
   *          <p>
   *             <code>UPDATE_COMPLETE</code> if the resource group updated successfully.</p>
   *          <p>
   *             <code>UPDATE_FAILED</code> if the resource group could not update successfully.</p>
   */
  state?: ResourceGroupState | string;

  /**
   * <p>The Amazon resource name (ARN) of the resource group.</p>
   */
  arn?: string;

  /**
   * <p>The error message that generates when the propagation process for the resource group fails.</p>
   */
  errorMessage?: string;
}

/**
 * <p> The information about the service integration.</p>
 */
export interface Integrations {
  /**
   * <p> The information about the resource group integration.</p>
   */
  resourceGroup?: ResourceGroup;
}

export interface GetApplicationResponse {
  /**
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The number of top-level resources that were registered as part of this application.</p>
   */
  associatedResourceCount?: number;

  /**
   * <p>Key-value pairs associated with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *        The information
   *        about the integration
   *        of the application
   *        with other services,
   *        such as
   *         Resource Groups.
   *      </p>
   */
  integrations?: Integrations;
}

export interface GetAssociatedResourceRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The type of resource associated with the application.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The name or ID of the resource associated with the application.</p>
   */
  resource: string | undefined;
}

/**
 * <p>The service integration information about the resource.</p>
 */
export interface ResourceIntegrations {
  /**
   * <p>The information about the integration of Resource Groups.</p>
   */
  resourceGroup?: ResourceGroup;
}

/**
 * <p> The information about the resource.</p>
 */
export interface Resource {
  /**
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * <p>The Amazon resource name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The time the resource was associated with the application.</p>
   */
  associationTime?: Date;

  /**
   * <p>The service integration information about the resource.
   *      </p>
   */
  integrations?: ResourceIntegrations;
}

export interface GetAssociatedResourceResponse {
  /**
   * <p>The resource associated with the application.</p>
   */
  resource?: Resource;
}

export interface GetAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export interface GetAttributeGroupResponse {
  /**
   * <p>The identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs associated with the attribute group.</p>
   */
  tags?: Record<string, string>;
}

export interface GetConfigurationResponse {
  /**
   * <p>
   *       Retrieves <code>TagKey</code> configuration
   *       from an account.
   *     </p>
   */
  configuration?: AppRegistryConfiguration;
}

export interface ListApplicationsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

export interface ListApplicationsResponse {
  /**
   * <p>This list of applications.</p>
   */
  applications?: ApplicationSummary[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

export interface ListAssociatedAttributeGroupsRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

export interface ListAssociatedAttributeGroupsResponse {
  /**
   * <p>A list of attribute group IDs.</p>
   */
  attributeGroups?: string[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

export interface ListAssociatedResourcesRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * <p>
 *       The details
 *       related
 *       to the
 *       resource.
 *     </p>
 */
export interface ResourceDetails {
  /**
   * <p>The value of the tag.</p>
   */
  tagValue?: string;
}

/**
 * <p>The information about the resource.</p>
 */
export interface ResourceInfo {
  /**
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource across services.</p>
   */
  arn?: string;

  /**
   * <p>
   *       Provides information
   *       about the Service Catalog App Registry resource type.
   *     </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>
   *       The details related
   *       to
   *       the resource.
   *     </p>
   */
  resourceDetails?: ResourceDetails;
}

export interface ListAssociatedResourcesResponse {
  /**
   * <p>Information about the resources.</p>
   */
  resources?: ResourceInfo[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

export interface ListAttributeGroupsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

export interface ListAttributeGroupsResponse {
  /**
   * <p>This list of attribute groups.</p>
   */
  attributeGroups?: AttributeGroupSummary[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

export interface ListAttributeGroupsForApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * <p>This token retrieves the next page of results after a previous API call.</p>
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

export interface ListAttributeGroupsForApplicationResponse {
  /**
   * <p> The details related to a specific attribute group. </p>
   */
  attributeGroupsDetails?: AttributeGroupDetails[];

  /**
   * <p>The token to use to get the next page of results after a previous API call.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags on the resource.</p>
   */
  tags?: Record<string, string>;
}

export interface PutConfigurationRequest {
  /**
   * <p>
   *       Associates a <code>TagKey</code> configuration
   *       to an account.
   *     </p>
   */
  configuration: AppRegistryConfiguration | undefined;
}

export interface SyncResourceRequest {
  /**
   * <p>The type of resource of which the application will be associated.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.</p>
   */
  resource: string | undefined;
}

export enum SyncAction {
  NO_ACTION = "NO_ACTION",
  START_SYNC = "START_SYNC",
}

export interface SyncResourceResponse {
  /**
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The results of the output if an application is associated with an ARN value, which could be <code>syncStarted</code> or None.</p>
   */
  actionTaken?: SyncAction | string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the tag keys to remove from the specified resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateApplicationRequest {
  /**
   * <p>The name or ID of the application that will be updated.</p>
   */
  application: string | undefined;

  /**
   * @deprecated
   *
   * <p>Deprecated: The new name of the application. The name must be unique in the region in which you are
   *        updating the application. Please do not use this field as we have stopped supporting name updates.</p>
   */
  name?: string;

  /**
   * <p>The new description of the application.</p>
   */
  description?: string;
}

export interface UpdateApplicationResponse {
  /**
   * <p>The updated information of the application.</p>
   */
  application?: Application;
}

export interface UpdateAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;

  /**
   * @deprecated
   *
   * <p>Deprecated: The new name of the attribute group. The name must be unique in the region in which you are
   *        updating the attribute group. Please do not use this field as we have stopped supporting name updates.</p>
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes?: string;
}

export interface UpdateAttributeGroupResponse {
  /**
   * <p>The updated information of the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagQueryConfigurationFilterSensitiveLog = (obj: TagQueryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppRegistryConfigurationFilterSensitiveLog = (obj: AppRegistryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAttributeGroupRequestFilterSensitiveLog = (obj: AssociateAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAttributeGroupResponseFilterSensitiveLog = (obj: AssociateAttributeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceRequestFilterSensitiveLog = (obj: AssociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceResponseFilterSensitiveLog = (obj: AssociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeGroupFilterSensitiveLog = (obj: AttributeGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeGroupDetailsFilterSensitiveLog = (obj: AttributeGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeGroupSummaryFilterSensitiveLog = (obj: AttributeGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAttributeGroupRequestFilterSensitiveLog = (obj: CreateAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAttributeGroupResponseFilterSensitiveLog = (obj: CreateAttributeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationRequestFilterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationResponseFilterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAttributeGroupRequestFilterSensitiveLog = (obj: DeleteAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAttributeGroupResponseFilterSensitiveLog = (obj: DeleteAttributeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAttributeGroupRequestFilterSensitiveLog = (obj: DisassociateAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAttributeGroupResponseFilterSensitiveLog = (obj: DisassociateAttributeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceRequestFilterSensitiveLog = (obj: DisassociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceResponseFilterSensitiveLog = (obj: DisassociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationRequestFilterSensitiveLog = (obj: GetApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceGroupFilterSensitiveLog = (obj: ResourceGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntegrationsFilterSensitiveLog = (obj: Integrations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedResourceRequestFilterSensitiveLog = (obj: GetAssociatedResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceIntegrationsFilterSensitiveLog = (obj: ResourceIntegrations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedResourceResponseFilterSensitiveLog = (obj: GetAssociatedResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttributeGroupRequestFilterSensitiveLog = (obj: GetAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttributeGroupResponseFilterSensitiveLog = (obj: GetAttributeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationResponseFilterSensitiveLog = (obj: GetConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsRequestFilterSensitiveLog = (obj: ListApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedAttributeGroupsRequestFilterSensitiveLog = (
  obj: ListAssociatedAttributeGroupsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedAttributeGroupsResponseFilterSensitiveLog = (
  obj: ListAssociatedAttributeGroupsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedResourcesRequestFilterSensitiveLog = (obj: ListAssociatedResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDetailsFilterSensitiveLog = (obj: ResourceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceInfoFilterSensitiveLog = (obj: ResourceInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedResourcesResponseFilterSensitiveLog = (obj: ListAssociatedResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttributeGroupsRequestFilterSensitiveLog = (obj: ListAttributeGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttributeGroupsResponseFilterSensitiveLog = (obj: ListAttributeGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttributeGroupsForApplicationRequestFilterSensitiveLog = (
  obj: ListAttributeGroupsForApplicationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttributeGroupsForApplicationResponseFilterSensitiveLog = (
  obj: ListAttributeGroupsForApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationRequestFilterSensitiveLog = (obj: PutConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SyncResourceRequestFilterSensitiveLog = (obj: SyncResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SyncResourceResponseFilterSensitiveLog = (obj: SyncResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAttributeGroupRequestFilterSensitiveLog = (obj: UpdateAttributeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAttributeGroupResponseFilterSensitiveLog = (obj: UpdateAttributeGroupResponse): any => ({
  ...obj,
});
