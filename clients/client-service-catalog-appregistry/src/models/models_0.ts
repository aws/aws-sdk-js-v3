// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceCatalogAppRegistryServiceException as __BaseException } from "./ServiceCatalogAppRegistryServiceException";

/**
 * @public
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related
 *        cloud resource abstractions.</p>
 */
export interface Application {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>Key-value pairs you can use to associate with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       A key-value pair that identifies an associated resource.
   *     </p>
   */
  applicationTag?: Record<string, string>;
}

/**
 * @public
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry application.</p>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ApplicationTagStatus = {
  FAILURE: "FAILURE",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ApplicationTagStatus = (typeof ApplicationTagStatus)[keyof typeof ApplicationTagStatus];

/**
 * @public
 * <p>
 *       The resource in a list of resources.
 *     </p>
 */
export interface ResourcesListItem {
  /**
   * @public
   * <p>
   *       The Amazon resource name (ARN) of the resource.
   *     </p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>
   *       The message returned if the call fails.
   *     </p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>
   *       The status of the list item.
   *     </p>
   */
  status?: string;

  /**
   * @public
   * <p>
   *       Provides information about the AppRegistry resource type.
   *     </p>
   */
  resourceType?: string;
}

/**
 * @public
 * <p>
 *       The result of the application tag that's applied to a resource.
 *     </p>
 */
export interface ApplicationTagResult {
  /**
   * @public
   * <p>
   *       The application tag is in the process of being applied to a resource, was successfully applied to a resource, or failed to apply to a resource.
   *     </p>
   */
  applicationTagStatus?: ApplicationTagStatus;

  /**
   * @public
   * <p>
   *       The message returned if the call fails.
   *     </p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>
   *       The resources associated with an application
   *     </p>
   */
  resources?: ResourcesListItem[];

  /**
   * @public
   * <p>
   *       A unique pagination token for each page of results. Make the call again with the returned token to retrieve the next page of results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
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
   * @public
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
 * @public
 * <p>
 *       Includes all
 *       of the AppRegistry settings.
 *     </p>
 */
export interface AppRegistryConfiguration {
  /**
   * @public
   * <p>
   *       Includes the definition
   *       of a <code>tagQuery</code>.
   *     </p>
   */
  tagQueryConfiguration?: TagQueryConfiguration;
}

/**
 * @public
 */
export interface AssociateAttributeGroupRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface AssociateAttributeGroupResponse {
  /**
   * @public
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.</p>
   */
  attributeGroupArn?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>
 *       The maximum number
 *       of resources per account
 *       has been reached.</p>
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

/**
 * @public
 * @enum
 */
export const AssociationOption = {
  APPLY_APPLICATION_TAG: "APPLY_APPLICATION_TAG",
  SKIP_APPLICATION_TAG: "SKIP_APPLICATION_TAG",
} as const;

/**
 * @public
 */
export type AssociationOption = (typeof AssociationOption)[keyof typeof AssociationOption];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CFN_STACK: "CFN_STACK",
  RESOURCE_TAG_VALUE: "RESOURCE_TAG_VALUE",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface AssociateResourceRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The type of resource of which the application will be associated.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The name or ID of the resource of which the application will be associated.</p>
   */
  resource: string | undefined;

  /**
   * @public
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   */
  options?: AssociationOption[];
}

/**
 * @public
 */
export interface AssociateResourceResponse {
  /**
   * @public
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   */
  options?: AssociationOption[];
}

/**
 * @public
 * <p>
 *       The maximum number
 *       of API requests
 *       has been exceeded.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The originating service code.</p>
   */
  serviceCode?: string;

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
    this.serviceCode = opts.serviceCode;
  }
}

/**
 * @public
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.</p>
 */
export interface AttributeGroup {
  /**
   * @public
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>
 *       The details related to a specific AttributeGroup.
 *     </p>
 */
export interface AttributeGroupDetails {
  /**
   * @public
   * <p>The unique identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   */
  arn?: string;

  /**
   * @public
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

  /**
   * @public
   * <p>The service principal that created the attribute group.</p>
   */
  createdBy?: string;
}

/**
 * @public
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.</p>
 */
export interface AttributeGroupSummary {
  /**
   * @public
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The service principal that created the attribute group.</p>
   */
  createdBy?: string;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Key-value pairs you can use to associate with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>Information about the application.</p>
   */
  application?: Application;
}

/**
 * @public
 */
export interface CreateAttributeGroupRequest {
  /**
   * @public
   * <p>The name of the attribute group.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes: string | undefined;

  /**
   * @public
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAttributeGroupResponse {
  /**
   * @public
   * <p>Information about the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * @public
   * <p>Information about the deleted application.</p>
   */
  application?: ApplicationSummary;
}

/**
 * @public
 */
export interface DeleteAttributeGroupRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeGroupResponse {
  /**
   * @public
   * <p>Information about the deleted attribute group.</p>
   */
  attributeGroup?: AttributeGroupSummary;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupResponse {
  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   */
  attributeGroupArn?: string;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * @public
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is being disassociated.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The name or ID of the resource.</p>
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceResponse {
  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceGroupState = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ResourceGroupState = (typeof ResourceGroupState)[keyof typeof ResourceGroupState];

/**
 * @public
 * <p>The information about the resource group integration.</p>
 */
export interface ResourceGroup {
  /**
   * @public
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
  state?: ResourceGroupState;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of the resource group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The error message that generates when the propagation process for the resource group fails.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p> The information about the service integration.</p>
 */
export interface Integrations {
  /**
   * @public
   * <p> The information about the resource group integration.</p>
   */
  resourceGroup?: ResourceGroup;

  /**
   * @public
   * <p>The information about the resource group integration.</p>
   */
  applicationTagResourceGroup?: ResourceGroup;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The number of top-level resources that were registered as part of this application.</p>
   */
  associatedResourceCount?: number;

  /**
   * @public
   * <p>Key-value pairs associated with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
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

  /**
   * @public
   * <p>
   *       A key-value pair that identifies an associated resource.
   *     </p>
   */
  applicationTag?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ResourceItemStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ResourceItemStatus = (typeof ResourceItemStatus)[keyof typeof ResourceItemStatus];

/**
 * @public
 */
export interface GetAssociatedResourceRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The type of resource associated with the application.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The name or ID of the resource associated with the application.</p>
   */
  resource: string | undefined;

  /**
   * @public
   * <p>
   *       A unique pagination token for each page of results.
   *       Make the call again with the returned token to retrieve the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       States whether an application tag is applied, not applied, in the process of being applied, or skipped.
   *     </p>
   */
  resourceTagStatus?: ResourceItemStatus[];

  /**
   * @public
   * <p>
   *       The maximum number of results to return. If the parameter is omitted, it defaults to 25. The value is optional.
   *     </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The service integration information about the resource.</p>
 */
export interface ResourceIntegrations {
  /**
   * @public
   * <p>The information about the integration of Resource Groups.</p>
   */
  resourceGroup?: ResourceGroup;
}

/**
 * @public
 * <p> The information about the resource.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time the resource was associated with the application.</p>
   */
  associationTime?: Date;

  /**
   * @public
   * <p>The service integration information about the resource.
   *      </p>
   */
  integrations?: ResourceIntegrations;
}

/**
 * @public
 */
export interface GetAssociatedResourceResponse {
  /**
   * @public
   * <p>The resource associated with the application.</p>
   */
  resource?: Resource;

  /**
   * @public
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   */
  options?: AssociationOption[];

  /**
   * @public
   * <p>
   *       The result of the application that's tag applied to a resource.
   *     </p>
   */
  applicationTagResult?: ApplicationTagResult;
}

/**
 * @public
 */
export interface GetAttributeGroupRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface GetAttributeGroupResponse {
  /**
   * @public
   * <p>The identifier of the attribute group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the attribute group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes?: string;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>Key-value pairs associated with the attribute group.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The service principal that created the attribute group.</p>
   */
  createdBy?: string;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * @public
   * <p>
   *       Retrieves <code>TagKey</code> configuration
   *       from an account.
   *     </p>
   */
  configuration?: AppRegistryConfiguration;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>This list of applications.</p>
   */
  applications?: ApplicationSummary[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsRequest {
  /**
   * @public
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsResponse {
  /**
   * @public
   * <p>A list of attribute group IDs.</p>
   */
  attributeGroups?: string[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedResourcesRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>
 *       The details
 *       related
 *       to the
 *       resource.
 *     </p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>The value of the tag.</p>
   */
  tagValue?: string;
}

/**
 * @public
 * <p>The information about the resource.</p>
 */
export interface ResourceInfo {
  /**
   * @public
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource across services.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>
   *       Provides information
   *       about the Service Catalog App Registry resource type.
   *     </p>
   */
  resourceType?: ResourceType;

  /**
   * @public
   * <p>
   *       The details related
   *       to
   *       the resource.
   *     </p>
   */
  resourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   */
  options?: AssociationOption[];
}

/**
 * @public
 */
export interface ListAssociatedResourcesResponse {
  /**
   * @public
   * <p>Information about the resources.</p>
   */
  resources?: ResourceInfo[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAttributeGroupsRequest {
  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAttributeGroupsResponse {
  /**
   * @public
   * <p>This list of attribute groups.</p>
   */
  attributeGroups?: AttributeGroupSummary[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationRequest {
  /**
   * @public
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>This token retrieves the next page of results after a previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationResponse {
  /**
   * @public
   * <p> The details related to a specific attribute group. </p>
   */
  attributeGroupsDetails?: AttributeGroupDetails[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags on the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutConfigurationRequest {
  /**
   * @public
   * <p>
   *       Associates a <code>TagKey</code> configuration
   *       to an account.
   *     </p>
   */
  configuration: AppRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface SyncResourceRequest {
  /**
   * @public
   * <p>The type of resource of which the application will be associated.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.</p>
   */
  resource: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncAction = {
  NO_ACTION: "NO_ACTION",
  START_SYNC: "START_SYNC",
} as const;

/**
 * @public
 */
export type SyncAction = (typeof SyncAction)[keyof typeof SyncAction];

/**
 * @public
 */
export interface SyncResourceResponse {
  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The results of the output if an application is associated with an ARN value, which could be <code>syncStarted</code> or None.</p>
   */
  actionTaken?: SyncAction;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The new or modified tags for the resource.</p>
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
   * @public
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the tag keys to remove from the specified resource.</p>
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
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the application
   *        that will be updated.
   *      </p>
   */
  application: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Deprecated: The new name of the application. The name must be unique in the region in which you are
   *        updating the application. Please do not use this field as we have stopped supporting name updates.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The new description of the application.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * @public
   * <p>The updated information of the application.</p>
   */
  application?: Application;
}

/**
 * @public
 */
export interface UpdateAttributeGroupRequest {
  /**
   * @public
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   */
  attributeGroup: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Deprecated: The new name of the attribute group. The name must be unique in the region in which you are
   *        updating the attribute group. Please do not use this field as we have stopped supporting name updates.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the attribute group that the user provides.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   */
  attributes?: string;
}

/**
 * @public
 */
export interface UpdateAttributeGroupResponse {
  /**
   * @public
   * <p>The updated information of the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}
