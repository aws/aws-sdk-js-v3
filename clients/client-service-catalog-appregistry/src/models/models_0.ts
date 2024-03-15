// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceCatalogAppRegistryServiceException as __BaseException } from "./ServiceCatalogAppRegistryServiceException";

/**
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related
 *        cloud resource abstractions.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs you can use to associate with the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       A key-value pair that identifies an associated resource.
   *     </p>
   * @public
   */
  applicationTag?: Record<string, string>;
}

/**
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   * @public
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
 * <p>
 *       The resource in a list of resources.
 *     </p>
 * @public
 */
export interface ResourcesListItem {
  /**
   * <p>
   *       The Amazon resource name (ARN) of the resource.
   *     </p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>
   *       The message returned if the call fails.
   *     </p>
   * @public
   */
  errorMessage?: string;

  /**
   * <p>
   *       The status of the list item.
   *     </p>
   * @public
   */
  status?: string;

  /**
   * <p>
   *       Provides information about the AppRegistry resource type.
   *     </p>
   * @public
   */
  resourceType?: string;
}

/**
 * <p>
 *       The result of the application tag that's applied to a resource.
 *     </p>
 * @public
 */
export interface ApplicationTagResult {
  /**
   * <p>
   *       The application tag is in the process of being applied to a resource, was successfully applied to a resource, or failed to apply to a resource.
   *     </p>
   * @public
   */
  applicationTagStatus?: ApplicationTagStatus;

  /**
   * <p>
   *       The message returned if the call fails.
   *     </p>
   * @public
   */
  errorMessage?: string;

  /**
   * <p>
   *       The resources associated with an application
   *     </p>
   * @public
   */
  resources?: ResourcesListItem[];

  /**
   * <p>
   *       A unique pagination token for each page of results. Make the call again with the returned token to retrieve the next page of results.
   *     </p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>
 *       The
 *       definition
 *       of <code>tagQuery</code>.
 *       Specifies which resources are associated with an
 *       application.
 *     </p>
 * @public
 */
export interface TagQueryConfiguration {
  /**
   * <p>
   *       Condition
   *       in the IAM policy
   *       that associates resources
   *       to an application.
   *     </p>
   * @public
   */
  tagKey?: string;
}

/**
 * <p>
 *       Includes all
 *       of the AppRegistry settings.
 *     </p>
 * @public
 */
export interface AppRegistryConfiguration {
  /**
   * <p>
   *       Includes the definition
   *       of a <code>tagQuery</code>.
   *     </p>
   * @public
   */
  tagQueryConfiguration?: TagQueryConfiguration;
}

/**
 * @public
 */
export interface AssociateAttributeGroupRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface AssociateAttributeGroupResponse {
  /**
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   * @public
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.</p>
   * @public
   */
  attributeGroupArn?: string;
}

/**
 * <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
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
 * <p>The service is experiencing internal problems.</p>
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
 * <p>The specified resource does not exist.</p>
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
 * <p>
 *       The maximum number
 *       of resources per account
 *       has been reached.</p>
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
 * <p>The request has invalid or missing parameters.</p>
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
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The type of resource of which the application will be associated.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The name or ID of the resource of which the application will be associated.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   * @public
   */
  options?: AssociationOption[];
}

/**
 * @public
 */
export interface AssociateResourceResponse {
  /**
   * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
   * @public
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   * @public
   */
  options?: AssociationOption[];
}

/**
 * <p>
 *       The maximum number
 *       of API requests
 *       has been exceeded.
 *     </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The originating service code.</p>
   * @public
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
 * <p>Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.</p>
 * @public
 */
export interface AttributeGroup {
  /**
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>
 *       The details related to a specific AttributeGroup.
 *     </p>
 * @public
 */
export interface AttributeGroupDetails {
  /**
   * <p>The unique identifier of the attribute group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   * @public
   */
  arn?: string;

  /**
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
   * @public
   */
  name?: string;

  /**
   * <p>The service principal that created the attribute group.</p>
   * @public
   */
  createdBy?: string;
}

/**
 * <p>Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.</p>
 * @public
 */
export interface AttributeGroupSummary {
  /**
   * <p>The globally unique attribute group identifier of the attribute group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>The service principal that created the attribute group.</p>
   * @public
   */
  createdBy?: string;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Key-value pairs you can use to associate with the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>Information about the application.</p>
   * @public
   */
  application?: Application;
}

/**
 * @public
 */
export interface CreateAttributeGroupRequest {
  /**
   * <p>The name of the attribute group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   * @public
   */
  attributes: string | undefined;

  /**
   * <p>Key-value pairs you can use to associate with the attribute group.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAttributeGroupResponse {
  /**
   * <p>Information about the attribute group.</p>
   * @public
   */
  attributeGroup?: AttributeGroup;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * <p>Information about the deleted application.</p>
   * @public
   */
  application?: ApplicationSummary;
}

/**
 * @public
 */
export interface DeleteAttributeGroupRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeGroupResponse {
  /**
   * <p>Information about the deleted attribute group.</p>
   * @public
   */
  attributeGroup?: AttributeGroupSummary;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupResponse {
  /**
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   * @public
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
   * @public
   */
  attributeGroupArn?: string;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * <p>The name or ID of the application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The type of the resource that is being disassociated.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The name or ID of the resource.</p>
   * @public
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceResponse {
  /**
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   * @public
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn?: string;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
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
 * <p>The information about the resource group integration.</p>
 * @public
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
   * @public
   */
  state?: ResourceGroupState;

  /**
   * <p>The Amazon resource name (ARN) of the resource group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The error message that generates when the propagation process for the resource group fails.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * <p> The information about the service integration.</p>
 * @public
 */
export interface Integrations {
  /**
   * <p> The information about the resource group integration.</p>
   * @public
   */
  resourceGroup?: ResourceGroup;

  /**
   * <p>The information about the resource group integration.</p>
   * @public
   */
  applicationTagResourceGroup?: ResourceGroup;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>The number of top-level resources that were registered as part of this application.</p>
   * @public
   */
  associatedResourceCount?: number;

  /**
   * <p>Key-value pairs associated with the application.</p>
   * @public
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
   * @public
   */
  integrations?: Integrations;

  /**
   * <p>
   *       A key-value pair that identifies an associated resource.
   *     </p>
   * @public
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
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The type of resource associated with the application.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The name or ID of the resource associated with the application.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>
   *       A unique pagination token for each page of results.
   *       Make the call again with the returned token to retrieve the next page of results.
   *     </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>
   *       States whether an application tag is applied, not applied, in the process of being applied, or skipped.
   *     </p>
   * @public
   */
  resourceTagStatus?: ResourceItemStatus[];

  /**
   * <p>
   *       The maximum number of results to return. If the parameter is omitted, it defaults to 25. The value is optional.
   *     </p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The service integration information about the resource.</p>
 * @public
 */
export interface ResourceIntegrations {
  /**
   * <p>The information about the integration of Resource Groups.</p>
   * @public
   */
  resourceGroup?: ResourceGroup;
}

/**
 * <p> The information about the resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon resource name (ARN) of the resource.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The time the resource was associated with the application.</p>
   * @public
   */
  associationTime?: Date;

  /**
   * <p>The service integration information about the resource.
   *      </p>
   * @public
   */
  integrations?: ResourceIntegrations;
}

/**
 * @public
 */
export interface GetAssociatedResourceResponse {
  /**
   * <p>The resource associated with the application.</p>
   * @public
   */
  resource?: Resource;

  /**
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   * @public
   */
  options?: AssociationOption[];

  /**
   * <p>
   *       The result of the application that's tag applied to a resource.
   *     </p>
   * @public
   */
  applicationTagResult?: ApplicationTagResult;
}

/**
 * @public
 */
export interface GetAttributeGroupRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface GetAttributeGroupResponse {
  /**
   * <p>The identifier of the attribute group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the attribute group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   * @public
   */
  attributes?: string;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>Key-value pairs associated with the attribute group.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The service principal that created the attribute group.</p>
   * @public
   */
  createdBy?: string;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * <p>
   *       Retrieves <code>TagKey</code> configuration
   *       from an account.
   *     </p>
   * @public
   */
  configuration?: AppRegistryConfiguration;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>This list of applications.</p>
   * @public
   */
  applications?: ApplicationSummary[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsRequest {
  /**
   * <p>The name or ID of the application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsResponse {
  /**
   * <p>A list of attribute group IDs.</p>
   * @public
   */
  attributeGroups?: string[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedResourcesRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   * @public
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
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>The value of the tag.</p>
   * @public
   */
  tagValue?: string;
}

/**
 * <p>The information about the resource.</p>
 * @public
 */
export interface ResourceInfo {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource across services.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>
   *       Provides information
   *       about the Service Catalog App Registry resource type.
   *     </p>
   * @public
   */
  resourceType?: ResourceType;

  /**
   * <p>
   *       The details related
   *       to
   *       the resource.
   *     </p>
   * @public
   */
  resourceDetails?: ResourceDetails;

  /**
   * <p>
   *       Determines whether an application tag is applied or skipped.
   *     </p>
   * @public
   */
  options?: AssociationOption[];
}

/**
 * @public
 */
export interface ListAssociatedResourcesResponse {
  /**
   * <p>Information about the resources.</p>
   * @public
   */
  resources?: ResourceInfo[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAttributeGroupsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAttributeGroupsResponse {
  /**
   * <p>This list of attribute groups.</p>
   * @public
   */
  attributeGroups?: AttributeGroupSummary[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>This token retrieves the next page of results after a previous API call.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationResponse {
  /**
   * <p> The details related to a specific attribute group. </p>
   * @public
   */
  attributeGroupsDetails?: AttributeGroupDetails[];

  /**
   * <p>The token to use to get the next page of results after a previous API call.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags on the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutConfigurationRequest {
  /**
   * <p>
   *       Associates a <code>TagKey</code> configuration
   *       to an account.
   *     </p>
   * @public
   */
  configuration: AppRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface SyncResourceRequest {
  /**
   * <p>The type of resource of which the application will be associated.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.</p>
   * @public
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
   * <p>The Amazon resource name (ARN) that specifies the application.</p>
   * @public
   */
  applicationArn?: string;

  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The results of the output if an application is associated with an ARN value, which could be <code>syncStarted</code> or None.</p>
   * @public
   */
  actionTaken?: SyncAction;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
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
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the tag keys to remove from the specified resource.</p>
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
export interface UpdateApplicationRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the application
   *        that will be updated.
   *      </p>
   * @public
   */
  application: string | undefined;

  /**
   * @deprecated
   *
   * <p>Deprecated: The new name of the application. The name must be unique in the region in which you are
   *        updating the application. Please do not use this field as we have stopped supporting name updates.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The new description of the application.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>The updated information of the application.</p>
   * @public
   */
  application?: Application;
}

/**
 * @public
 */
export interface UpdateAttributeGroupRequest {
  /**
   * <p>
   *        The name, ID, or ARN
   *        of the attribute group
   *        that holds the attributes
   *        to describe the application.
   *      </p>
   * @public
   */
  attributeGroup: string | undefined;

  /**
   * @deprecated
   *
   * <p>Deprecated: The new name of the attribute group. The name must be unique in the region in which you are
   *        updating the attribute group. Please do not use this field as we have stopped supporting name updates.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the attribute group that the user provides.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
   * @public
   */
  attributes?: string;
}

/**
 * @public
 */
export interface UpdateAttributeGroupResponse {
  /**
   * <p>The updated information of the attribute group.</p>
   * @public
   */
  attributeGroup?: AttributeGroup;
}
