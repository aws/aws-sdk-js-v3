import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
  tags?: { [key: string]: string };
}

export namespace Application {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Application): any => ({
    ...obj,
  });
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

export namespace ApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj,
  });
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

export namespace AssociateAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAttributeGroupRequest): any => ({
    ...obj,
  });
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

export namespace AssociateAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAttributeGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The service is experiencing internal problems.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of resources per account has been reached.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has invalid or missing parameters.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum ResourceType {
  CFN_STACK = "CFN_STACK",
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

export namespace AssociateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceRequest): any => ({
    ...obj,
  });
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

export namespace AssociateResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict when processing the request (for example, a resource with the given name already
 *       exists within the account).</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace AttributeGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeGroup): any => ({
    ...obj,
  });
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

export namespace AttributeGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeGroupSummary): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
}

export interface CreateApplicationResponse {
  /**
   * <p>Information about the application.</p>
   */
  application?: Application;
}

export namespace CreateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
   *       completed successfully using the same client token and the same parameters, the retry succeeds
   *       without performing any further actions. If you retry a successful request using the same
   *       client token, but one or more of the parameters are different, the retry fails.</p>
   */
  clientToken?: string;
}

export namespace CreateAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttributeGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateAttributeGroupResponse {
  /**
   * <p>Information about the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}

export namespace CreateAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttributeGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;
}

export namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationResponse {
  /**
   * <p>Information about the deleted application.</p>
   */
  application?: ApplicationSummary;
}

export namespace DeleteApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export namespace DeleteAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttributeGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteAttributeGroupResponse {
  /**
   * <p>Information about the deleted attribute group.</p>
   */
  attributeGroup?: AttributeGroupSummary;
}

export namespace DeleteAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttributeGroupResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAttributeGroupRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAttributeGroupResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceResponse): any => ({
    ...obj,
  });
}

export interface GetApplicationRequest {
  /**
   * <p>The name or ID of the application.</p>
   */
  application: string | undefined;
}

export namespace GetApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationRequest): any => ({
    ...obj,
  });
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

export namespace ResourceGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceGroup): any => ({
    ...obj,
  });
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

export namespace Integrations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Integrations): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>The information about the integration of the application with other services, such as Resource Groups.</p>
   */
  integrations?: Integrations;
}

export namespace GetApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationResponse): any => ({
    ...obj,
  });
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

export namespace GetAssociatedResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedResourceRequest): any => ({
    ...obj,
  });
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

export namespace ResourceIntegrations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceIntegrations): any => ({
    ...obj,
  });
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

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

export interface GetAssociatedResourceResponse {
  /**
   * <p>The resource associated with the application.</p>
   */
  resource?: Resource;
}

export namespace GetAssociatedResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssociatedResourceResponse): any => ({
    ...obj,
  });
}

export interface GetAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;
}

export namespace GetAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttributeGroupRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace GetAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttributeGroupResponse): any => ({
    ...obj,
  });
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

export namespace ListApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
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

export namespace ListApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssociatedAttributeGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedAttributeGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssociatedAttributeGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedAttributeGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssociatedResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedResourcesRequest): any => ({
    ...obj,
  });
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
}

export namespace ResourceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInfo): any => ({
    ...obj,
  });
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

export namespace ListAssociatedResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedResourcesResponse): any => ({
    ...obj,
  });
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

export namespace ListAttributeGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttributeGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListAttributeGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttributeGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;
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
   * <p>The tags on the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace SyncResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyncResourceRequest): any => ({
    ...obj,
  });
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

export namespace SyncResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyncResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon resource name (ARN) that specifies the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
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

export interface UpdateApplicationRequest {
  /**
   * <p>The name or ID of the application that will be updated.</p>
   */
  application: string | undefined;

  /**
   * <p>The new name of the application. The name must be unique in the region in which you are updating the application.</p>
   */
  name?: string;

  /**
   * <p>The new description of the application.</p>
   */
  description?: string;
}

export namespace UpdateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationResponse {
  /**
   * <p>The updated information of the application.</p>
   */
  application?: Application;
}

export namespace UpdateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAttributeGroupRequest {
  /**
   * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
   */
  attributeGroup: string | undefined;

  /**
   * <p>The new name of the attribute group. The name must be unique in the region in which you are
   *        updating the attribute group.</p>
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

export namespace UpdateAttributeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAttributeGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateAttributeGroupResponse {
  /**
   * <p>The updated information of the attribute group.</p>
   */
  attributeGroup?: AttributeGroup;
}

export namespace UpdateAttributeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAttributeGroupResponse): any => ({
    ...obj,
  });
}
