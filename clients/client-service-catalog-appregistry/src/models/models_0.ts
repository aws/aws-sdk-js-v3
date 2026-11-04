// smithy-typescript generated code
import type {
  ApplicationTagStatus,
  AssociationOption,
  ResourceGroupState,
  ResourceItemStatus,
  ResourceType,
  SyncAction,
} from "./enums";

/**
 * Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.
 *
 * @public
 */
export interface Application {
  /**
   * The identifier of the application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the application across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the application. The name must be unique in the region in which you are creating the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was last updated.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * Key-value pairs you can use to associate with the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A key-value pair that identifies an associated resource.
   *
   * @public
   */
  applicationTag?: Record<string, string> | undefined;
}

/**
 * Summary of a Amazon Web Services Service Catalog AppRegistry application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The identifier of the application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the application across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the application. The name must be unique in the region in which you are creating the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was last updated.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * The resource in a list of resources.
 *
 * @public
 */
export interface ResourcesListItem {
  /**
   * The Amazon resource name (ARN) of the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The message returned if the call fails.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The status of the list item.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Provides information about the AppRegistry resource type.
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * The result of the application tag that's applied to a resource.
 *
 * @public
 */
export interface ApplicationTagResult {
  /**
   * The application tag is in the process of being applied to a resource, was successfully applied to a resource, or failed to apply to a resource.
   *
   * @public
   */
  applicationTagStatus?: ApplicationTagStatus | undefined;

  /**
   * The message returned if the call fails.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The resources associated with an application
   *
   * @public
   */
  resources?: ResourcesListItem[] | undefined;

  /**
   * A unique pagination token for each page of results. Make the call again with the returned token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The definition of `tagQuery`. Specifies which resources are associated with an application.
 *
 * @public
 */
export interface TagQueryConfiguration {
  /**
   * Condition in the IAM policy that associates resources to an application.
   *
   * @public
   */
  tagKey?: string | undefined;
}

/**
 * Includes all of the AppRegistry settings.
 *
 * @public
 */
export interface AppRegistryConfiguration {
  /**
   * Includes the definition of a `tagQuery`.
   *
   * @public
   */
  tagQueryConfiguration?: TagQueryConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociateAttributeGroupRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
   *
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface AssociateAttributeGroupResponse {
  /**
   * The Amazon resource name (ARN) of the application that was augmented with attributes.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.
   *
   * @public
   */
  attributeGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The type of resource of which the application will be associated.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The name or ID of the resource of which the application will be associated.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * Determines whether an application tag is applied or skipped.
   *
   * @public
   */
  options?: AssociationOption[] | undefined;
}

/**
 * @public
 */
export interface AssociateResourceResponse {
  /**
   * The Amazon resource name (ARN) of the application that was augmented with attributes.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * Determines whether an application tag is applied or skipped.
   *
   * @public
   */
  options?: AssociationOption[] | undefined;
}

/**
 * Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.
 *
 * @public
 */
export interface AttributeGroup {
  /**
   * The globally unique attribute group identifier of the attribute group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the attribute group across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the attribute group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the attribute group that the user provides.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * Key-value pairs you can use to associate with the attribute group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The details related to a specific AttributeGroup.
 *
 * @public
 */
export interface AttributeGroupDetails {
  /**
   * The unique identifier of the attribute group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the attribute group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * > **Important:** This field is no longer supported. We recommend you don't use the field when using `ListAttributeGroupsForApplication`.
   *
   * The name of the attribute group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The service principal that created the attribute group.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.
 *
 * @public
 */
export interface AttributeGroupSummary {
  /**
   * The globally unique attribute group identifier of the attribute group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the attribute group across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the attribute group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the attribute group that the user provides.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The service principal that created the attribute group.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the application. The name must be unique in the region in which you are creating the application.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Key-value pairs you can use to associate with the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * Information about the application.
   *
   * @public
   */
  application?: Application | undefined;
}

/**
 * @public
 */
export interface CreateAttributeGroupRequest {
  /**
   * The name of the attribute group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the attribute group that the user provides.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
   *
   * @public
   */
  attributes: string | undefined;

  /**
   * Key-value pairs you can use to associate with the attribute group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAttributeGroupResponse {
  /**
   * Information about the attribute group.
   *
   * @public
   */
  attributeGroup?: AttributeGroup | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * Information about the deleted application.
   *
   * @public
   */
  application?: ApplicationSummary | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeGroupRequest {
  /**
   * The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
   *
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttributeGroupResponse {
  /**
   * Information about the deleted attribute group.
   *
   * @public
   */
  attributeGroup?: AttributeGroupSummary | undefined;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
   *
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAttributeGroupResponse {
  /**
   * The Amazon resource name (ARN) that specifies the application.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the attribute group.
   *
   * @public
   */
  attributeGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * The name or ID of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The type of the resource that is being disassociated.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The name or ID of the resource.
   *
   * @public
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceResponse {
  /**
   * The Amazon resource name (ARN) that specifies the application.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;
}

/**
 * The information about the resource group integration.
 *
 * @public
 */
export interface ResourceGroup {
  /**
   * The state of the propagation process for the resource group. The states includes:
   *
   * `CREATING`if the resource group is in the process of being created.
   *
   * `CREATE_COMPLETE` if the resource group was created successfully.
   *
   * `CREATE_FAILED` if the resource group failed to be created.
   *
   * `UPDATING` if the resource group is in the process of being updated.
   *
   * `UPDATE_COMPLETE` if the resource group updated successfully.
   *
   * `UPDATE_FAILED` if the resource group could not update successfully.
   *
   * @public
   */
  state?: ResourceGroupState | undefined;

  /**
   * The Amazon resource name (ARN) of the resource group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The error message that generates when the propagation process for the resource group fails.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The information about the service integration.
 *
 * @public
 */
export interface Integrations {
  /**
   * The information about the resource group integration.
   *
   * @public
   */
  resourceGroup?: ResourceGroup | undefined;

  /**
   * The information about the resource group integration.
   *
   * @public
   */
  applicationTagResourceGroup?: ResourceGroup | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The identifier of the application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the application across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the application. The name must be unique in the region in which you are creating the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment when the application was last updated.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The number of top-level resources that were registered as part of this application.
   *
   * @public
   */
  associatedResourceCount?: number | undefined;

  /**
   * Key-value pairs associated with the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The information about the integration of the application with other services, such as Resource Groups.
   *
   * @public
   */
  integrations?: Integrations | undefined;

  /**
   * A key-value pair that identifies an associated resource.
   *
   * @public
   */
  applicationTag?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetAssociatedResourceRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The type of resource associated with the application.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The name or ID of the resource associated with the application.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * A unique pagination token for each page of results. Make the call again with the returned token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * States whether an application tag is applied, not applied, in the process of being applied, or skipped.
   *
   * @public
   */
  resourceTagStatus?: ResourceItemStatus[] | undefined;

  /**
   * The maximum number of results to return. If the parameter is omitted, it defaults to 25. The value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The service integration information about the resource.
 *
 * @public
 */
export interface ResourceIntegrations {
  /**
   * The information about the integration of Resource Groups.
   *
   * @public
   */
  resourceGroup?: ResourceGroup | undefined;
}

/**
 * The information about the resource.
 *
 * @public
 */
export interface Resource {
  /**
   * The name of the resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The time the resource was associated with the application.
   *
   * @public
   */
  associationTime?: Date | undefined;

  /**
   * The service integration information about the resource.
   *
   * @public
   */
  integrations?: ResourceIntegrations | undefined;
}

/**
 * @public
 */
export interface GetAssociatedResourceResponse {
  /**
   * The resource associated with the application.
   *
   * @public
   */
  resource?: Resource | undefined;

  /**
   * Determines whether an application tag is applied or skipped.
   *
   * @public
   */
  options?: AssociationOption[] | undefined;

  /**
   * The result of the application that's tag applied to a resource.
   *
   * @public
   */
  applicationTagResult?: ApplicationTagResult | undefined;
}

/**
 * @public
 */
export interface GetAttributeGroupRequest {
  /**
   * The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
   *
   * @public
   */
  attributeGroup: string | undefined;
}

/**
 * @public
 */
export interface GetAttributeGroupResponse {
  /**
   * The identifier of the attribute group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the attribute group across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the attribute group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the attribute group that the user provides.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
   *
   * @public
   */
  attributes?: string | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * Key-value pairs associated with the attribute group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The service principal that created the attribute group.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * Retrieves `TagKey` configuration from an account.
   *
   * @public
   */
  configuration?: AppRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * This list of applications.
   *
   * @public
   */
  applications?: ApplicationSummary[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsRequest {
  /**
   * The name or ID of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAttributeGroupsResponse {
  /**
   * A list of attribute group IDs.
   *
   * @public
   */
  attributeGroups?: string[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedResourcesRequest {
  /**
   * The name, ID, or ARN of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details related to the resource.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * The value of the tag.
   *
   * @public
   */
  tagValue?: string | undefined;
}

/**
 * The information about the resource.
 *
 * @public
 */
export interface ResourceInfo {
  /**
   * The name of the resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the resource across services.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Provides information about the Service Catalog App Registry resource type.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The details related to the resource.
   *
   * @public
   */
  resourceDetails?: ResourceDetails | undefined;

  /**
   * Determines whether an application tag is applied or skipped.
   *
   * @public
   */
  options?: AssociationOption[] | undefined;
}

/**
 * @public
 */
export interface ListAssociatedResourcesResponse {
  /**
   * Information about the resources.
   *
   * @public
   */
  resources?: ResourceInfo[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttributeGroupsRequest {
  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttributeGroupsResponse {
  /**
   * This list of attribute groups.
   *
   * @public
   */
  attributeGroups?: AttributeGroupSummary[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationRequest {
  /**
   * The name or ID of the application.
   *
   * @public
   */
  application: string | undefined;

  /**
   * This token retrieves the next page of results after a previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttributeGroupsForApplicationResponse {
  /**
   * The details related to a specific attribute group.
   *
   * @public
   */
  attributeGroupsDetails?: AttributeGroupDetails[] | undefined;

  /**
   * The token to use to get the next page of results after a previous API call.
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
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags on the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutConfigurationRequest {
  /**
   * Associates a `TagKey` configuration to an account.
   *
   * @public
   */
  configuration: AppRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface SyncResourceRequest {
  /**
   * The type of resource of which the application will be associated.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.
   *
   * @public
   */
  resource: string | undefined;
}

/**
 * @public
 */
export interface SyncResourceResponse {
  /**
   * The Amazon resource name (ARN) that specifies the application.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The results of the output if an application is associated with an ARN value, which could be `syncStarted` or None.
   *
   * @public
   */
  actionTaken?: SyncAction | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The new or modified tags for the resource.
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
   * The Amazon resource name (ARN) that specifies the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of the tag keys to remove from the specified resource.
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
export interface UpdateApplicationRequest {
  /**
   * The name, ID, or ARN of the application that will be updated.
   *
   * @public
   */
  application: string | undefined;

  /**
   * Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.
   *
   * @deprecated Name update for application is deprecated.
   * @public
   */
  name?: string | undefined;

  /**
   * The new description of the application.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * The updated information of the application.
   *
   * @public
   */
  application?: Application | undefined;
}

/**
 * @public
 */
export interface UpdateAttributeGroupRequest {
  /**
   * The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
   *
   * @public
   */
  attributeGroup: string | undefined;

  /**
   * Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.
   *
   * @deprecated Name update for attribute group is deprecated.
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the attribute group that the user provides.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
   *
   * @public
   */
  attributes?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAttributeGroupResponse {
  /**
   * The updated information of the attribute group.
   *
   * @public
   */
  attributeGroup?: AttributeGroup | undefined;
}
