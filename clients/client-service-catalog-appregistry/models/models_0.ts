import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents a Service Catalog AppRegistry application that is the top-level node in a hierarchy of related
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
  export const filterSensitiveLog = (obj: Application): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of a Service Catalog AppRegistry application.</p>
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.</p>
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
  export const filterSensitiveLog = (obj: AttributeGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of a Service Catalog AppRegistry attribute group.</p>
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
  export const filterSensitiveLog = (obj: GetApplicationRequest): any => ({
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
}

export namespace GetApplicationResponse {
  export const filterSensitiveLog = (obj: GetApplicationResponse): any => ({
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
  export const filterSensitiveLog = (obj: ListAssociatedResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the resource.</p>
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
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
  export const filterSensitiveLog = (obj: UpdateAttributeGroupResponse): any => ({
    ...obj,
  });
}
