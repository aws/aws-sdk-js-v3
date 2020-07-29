import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The request does not comply with validation rules that are defined for the request parameters.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export interface CreateGroupInput {
  __type?: "CreateGroupInput";
  /**
   * <p>The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores,
   *        punctuation, and spaces.</p>
   */
  Description?: string;

  /**
   * <p>The name of the group, which is the identifier of the group in other operations. A resource group name cannot be updated after it is created.
   *        A resource group name can have a maximum of 128 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with
   *        <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>The resource query that determines which AWS resources are members of this group.</p>
   */
  ResourceQuery: ResourceQuery | undefined;

  /**
   * <p>The tags to add to the group. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters,
   *        and tag values can have a maximum length of 256 characters.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateGroupInput {
  export const filterSensitiveLog = (obj: CreateGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateGroupInput => __isa(o, "CreateGroupInput");
}

export interface CreateGroupOutput {
  __type?: "CreateGroupOutput";
  /**
   * <p>A full description of the resource group after it is created.</p>
   */
  Group?: Group;

  /**
   * <p>The resource query associated with the group.</p>
   */
  ResourceQuery?: ResourceQuery;

  /**
   * <p>The tags associated with the group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateGroupOutput {
  export const filterSensitiveLog = (obj: CreateGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateGroupOutput => __isa(o, "CreateGroupOutput");
}

export interface DeleteGroupInput {
  __type?: "DeleteGroupInput";
  /**
   * <p>The name of the resource group to delete.</p>
   */
  GroupName: string | undefined;
}

export namespace DeleteGroupInput {
  export const filterSensitiveLog = (obj: DeleteGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGroupInput => __isa(o, "DeleteGroupInput");
}

export interface DeleteGroupOutput {
  __type?: "DeleteGroupOutput";
  /**
   * <p>A full description of the deleted resource group.</p>
   */
  Group?: Group;
}

export namespace DeleteGroupOutput {
  export const filterSensitiveLog = (obj: DeleteGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGroupOutput => __isa(o, "DeleteGroupOutput");
}

/**
 * <p>The caller is not authorized to make the request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export interface GetGroupInput {
  __type?: "GetGroupInput";
  /**
   * <p>The name of the resource group.</p>
   */
  GroupName: string | undefined;
}

export namespace GetGroupInput {
  export const filterSensitiveLog = (obj: GetGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGroupInput => __isa(o, "GetGroupInput");
}

export interface GetGroupOutput {
  __type?: "GetGroupOutput";
  /**
   * <p>A full description of the resource group.</p>
   */
  Group?: Group;
}

export namespace GetGroupOutput {
  export const filterSensitiveLog = (obj: GetGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGroupOutput => __isa(o, "GetGroupOutput");
}

export interface GetGroupQueryInput {
  __type?: "GetGroupQueryInput";
  /**
   * <p>The name of the resource group.</p>
   */
  GroupName: string | undefined;
}

export namespace GetGroupQueryInput {
  export const filterSensitiveLog = (obj: GetGroupQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGroupQueryInput => __isa(o, "GetGroupQueryInput");
}

export interface GetGroupQueryOutput {
  __type?: "GetGroupQueryOutput";
  /**
   * <p>The resource query associated with the specified group.</p>
   */
  GroupQuery?: GroupQuery;
}

export namespace GetGroupQueryOutput {
  export const filterSensitiveLog = (obj: GetGroupQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGroupQueryOutput => __isa(o, "GetGroupQueryOutput");
}

export interface GetTagsInput {
  __type?: "GetTagsInput";
  /**
   * <p>The ARN of the resource group for which you want a list of tags. The resource must exist within the account you are using.</p>
   */
  Arn: string | undefined;
}

export namespace GetTagsInput {
  export const filterSensitiveLog = (obj: GetTagsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTagsInput => __isa(o, "GetTagsInput");
}

export interface GetTagsOutput {
  __type?: "GetTagsOutput";
  /**
   * <p>The ARN of the tagged resource group.</p>
   */
  Arn?: string;

  /**
   * <p>The tags associated with the specified resource group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetTagsOutput {
  export const filterSensitiveLog = (obj: GetTagsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTagsOutput => __isa(o, "GetTagsOutput");
}

/**
 * <p>A resource group.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The description of the resource group.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of a resource group.</p>
   */
  GroupArn: string | undefined;

  /**
   * <p>The name of a resource group.</p>
   */
  Name: string | undefined;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>A filter name and value pair that is used to obtain more specific results from a list of groups.</p>
 */
export interface GroupFilter {
  __type?: "GroupFilter";
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: GroupFilterName | string | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.</p>
   */
  Values: string[] | undefined;
}

export namespace GroupFilter {
  export const filterSensitiveLog = (obj: GroupFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GroupFilter => __isa(o, "GroupFilter");
}

export enum GroupFilterName {
  ResourceType = "resource-type",
}

/**
 * <p>The ARN and group name of a group.</p>
 */
export interface GroupIdentifier {
  __type?: "GroupIdentifier";
  /**
   * <p>The ARN of a resource group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The name of a resource group.</p>
   */
  GroupName?: string;
}

export namespace GroupIdentifier {
  export const filterSensitiveLog = (obj: GroupIdentifier): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GroupIdentifier => __isa(o, "GroupIdentifier");
}

/**
 * <p>The underlying resource query of a resource group. Resources that match query results are part of the group.</p>
 */
export interface GroupQuery {
  __type?: "GroupQuery";
  /**
   * <p>The name of a resource group that is associated with a specific resource query.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The resource query which determines which AWS resources are members of the associated resource group.</p>
   */
  ResourceQuery: ResourceQuery | undefined;
}

export namespace GroupQuery {
  export const filterSensitiveLog = (obj: GroupQuery): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GroupQuery => __isa(o, "GroupQuery");
}

/**
 * <p>An internal error occurred while processing the request.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

export interface ListGroupResourcesInput {
  __type?: "ListGroupResourcesInput";
  /**
   * <p>Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p>
   *             </li>
   *          </ul>
   */
  Filters?: ResourceFilter[];

  /**
   * <p>The name of the resource group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The maximum number of group member ARNs that are returned in a single call by ListGroupResources, in paginated output. By default, this number is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The NextToken value that is returned in a paginated ListGroupResources request. To get the next page of results,
   *        run the call again, add the NextToken parameter, and specify the NextToken value.</p>
   */
  NextToken?: string;
}

export namespace ListGroupResourcesInput {
  export const filterSensitiveLog = (obj: ListGroupResourcesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupResourcesInput => __isa(o, "ListGroupResourcesInput");
}

export interface ListGroupResourcesOutput {
  __type?: "ListGroupResourcesOutput";
  /**
   * <p>The NextToken value to include in a subsequent <code>ListGroupResources</code> request, to get more results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error is an object that contains
   *        <code>ErrorCode</code> and <code>Message</code> structures. Possible values
   *        for <code>ErrorCode</code> are <code>CLOUDFORMATION_STACK_INACTIVE</code> and <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  QueryErrors?: QueryError[];

  /**
   * <p>The ARNs and resource types of resources that are members of the group that you specified.</p>
   */
  ResourceIdentifiers?: ResourceIdentifier[];
}

export namespace ListGroupResourcesOutput {
  export const filterSensitiveLog = (obj: ListGroupResourcesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupResourcesOutput => __isa(o, "ListGroupResourcesOutput");
}

export interface ListGroupsInput {
  __type?: "ListGroupsInput";
  /**
   * <p>Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - Filter groups by resource type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p>
   *             </li>
   *          </ul>
   */
  Filters?: GroupFilter[];

  /**
   * <p>The maximum number of resource group results that are returned by ListGroups in paginated output. By default, this number is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The NextToken value that is returned in a paginated <code>ListGroups</code> request. To get the next page of results,
   *        run the call again, add the NextToken parameter, and specify the NextToken value.</p>
   */
  NextToken?: string;
}

export namespace ListGroupsInput {
  export const filterSensitiveLog = (obj: ListGroupsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupsInput => __isa(o, "ListGroupsInput");
}

export interface ListGroupsOutput {
  __type?: "ListGroupsOutput";
  /**
   * <p>A list of GroupIdentifier objects. Each identifier is an object that contains both the GroupName and the GroupArn.</p>
   */
  GroupIdentifiers?: GroupIdentifier[];

  /**
   * <p>A list of resource groups.</p>
   */
  Groups?: Group[];

  /**
   * <p>The NextToken value to include in a subsequent <code>ListGroups</code> request, to get more results.</p>
   */
  NextToken?: string;
}

export namespace ListGroupsOutput {
  export const filterSensitiveLog = (obj: ListGroupsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupsOutput => __isa(o, "ListGroupsOutput");
}

/**
 * <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
 */
export interface MethodNotAllowedException extends __SmithyException, $MetadataBearer {
  name: "MethodNotAllowedException";
  $fault: "client";
  Message?: string;
}

export namespace MethodNotAllowedException {
  export const filterSensitiveLog = (obj: MethodNotAllowedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MethodNotAllowedException => __isa(o, "MethodNotAllowedException");
}

/**
 * <p>One or more resources specified in the request do not exist.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>A two-part error structure that can occur in <code>ListGroupResources</code> or
 *        <code>SearchResources</code> operations on CloudFormation stack-based queries. The error
 *        occurs if the CloudFormation stack on which the query is based either does not exist, or
 *        has a status that renders the stack inactive. A <code>QueryError</code> occurrence does
 *        not necessarily mean that AWS Resource Groups could not complete the operation, but the
 *        resulting group might have no member resources.</p>
 */
export interface QueryError {
  __type?: "QueryError";
  /**
   * <p>Possible values are <code>CLOUDFORMATION_STACK_INACTIVE</code> and <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  ErrorCode?: QueryErrorCode | string;

  /**
   * <p>A message that explains the <code>ErrorCode</code> value. Messages might state
   *        that the specified CloudFormation stack does not exist (or no longer exists).
   *        For <code>CLOUDFORMATION_STACK_INACTIVE</code>, the message typically states that the
   *        CloudFormation stack has a status that is not (or no longer) active, such as
   *        <code>CREATE_FAILED</code>.</p>
   */
  Message?: string;
}

export namespace QueryError {
  export const filterSensitiveLog = (obj: QueryError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryError => __isa(o, "QueryError");
}

export enum QueryErrorCode {
  CLOUDFORMATION_STACK_INACTIVE = "CLOUDFORMATION_STACK_INACTIVE",
  CLOUDFORMATION_STACK_NOT_EXISTING = "CLOUDFORMATION_STACK_NOT_EXISTING",
}

export enum QueryType {
  CLOUDFORMATION_STACK_1_0 = "CLOUDFORMATION_STACK_1_0",
  TAG_FILTERS_1_0 = "TAG_FILTERS_1_0",
}

/**
 * <p>A filter name and value pair that is used to obtain more specific results from a list of resources.</p>
 */
export interface ResourceFilter {
  __type?: "ResourceFilter";
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: ResourceFilterName | string | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.</p>
   */
  Values: string[] | undefined;
}

export namespace ResourceFilter {
  export const filterSensitiveLog = (obj: ResourceFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceFilter => __isa(o, "ResourceFilter");
}

export enum ResourceFilterName {
  ResourceType = "resource-type",
}

/**
 * <p>The ARN of a resource, and its resource type.</p>
 */
export interface ResourceIdentifier {
  __type?: "ResourceIdentifier";
  /**
   * <p>The ARN of a resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type of a resource, such as <code>AWS::EC2::Instance</code>.</p>
   */
  ResourceType?: string;
}

export namespace ResourceIdentifier {
  export const filterSensitiveLog = (obj: ResourceIdentifier): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceIdentifier => __isa(o, "ResourceIdentifier");
}

/**
 * <p>The query that is used to define a resource group or a search for resources.</p>
 */
export interface ResourceQuery {
  __type?: "ResourceQuery";
  /**
   * <p>The query that defines a group or a search.</p>
   */
  Query: string | undefined;

  /**
   * <p>The type of the query. The valid values in this release are <code>TAG_FILTERS_1_0</code> and <code>CLOUDFORMATION_STACK_1_0</code>.</p>
   *          <p>
   *             <i>
   *                <code>TAG_FILTERS_1_0:</code>
   *             </i> A JSON syntax that lets you specify a collection of simple tag filters for resource types and tags,
   *        as supported by the AWS Tagging API <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> operation.
   *        If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you
   *        specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p>
   *          <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each.
   *        (<code>[{"Key":"Stage","Values":["Test","Deploy"]},{"Key":"Version","Values":["1","2"]}]</code>) The results of this query might include the following.</p>
   *          <ul>
   *             <li>
   *                <p>An EC2 instance that has the following two tags: <code>{"Key":"Stage","Value":"Deploy"}</code>, and <code>{"Key":"Version","Value":"2"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An S3 bucket that has the following two tags: {"Key":"Stage","Value":"Test"}, and {"Key":"Version","Value":"1"}</p>
   *             </li>
   *          </ul>
   *          <p>The query would not return the following results, however. The following EC2 instance does not have all tag keys specified in the filter, so it is rejected.
   *        The RDS database has all of the tag keys, but no values that match at least one of the specified tag key values in the filter.</p>
   *          <ul>
   *             <li>
   *                <p>An EC2 instance that has only the following tag: <code>{"Key":"Stage","Value":"Deploy"}</code>.</p>
   *             </li>
   *             <li>
   *                <p>An RDS database that has the following two tags: <code>{"Key":"Stage","Value":"Archived"}</code>, and <code>{"Key":"Version","Value":"4"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <i>
   *                <code>CLOUDFORMATION_STACK_1_0:</code>
   *             </i> A JSON syntax that lets you specify a CloudFormation stack ARN.</p>
   */
  Type: QueryType | string | undefined;
}

export namespace ResourceQuery {
  export const filterSensitiveLog = (obj: ResourceQuery): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceQuery => __isa(o, "ResourceQuery");
}

export interface SearchResourcesInput {
  __type?: "SearchResourcesInput";
  /**
   * <p>The maximum number of group member ARNs returned by <code>SearchResources</code> in paginated output. By default, this number is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The NextToken value that is returned in a paginated <code>SearchResources</code> request. To get the next page of results,
   *        run the call again, add the NextToken parameter, and specify the NextToken value.</p>
   */
  NextToken?: string;

  /**
   * <p>The search query, using the same formats that are supported for resource group definition.</p>
   */
  ResourceQuery: ResourceQuery | undefined;
}

export namespace SearchResourcesInput {
  export const filterSensitiveLog = (obj: SearchResourcesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchResourcesInput => __isa(o, "SearchResourcesInput");
}

export interface SearchResourcesOutput {
  __type?: "SearchResourcesOutput";
  /**
   * <p>The NextToken value to include in a subsequent <code>SearchResources</code> request, to get more results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error is an object that
   *        contains <code>ErrorCode</code> and <code>Message</code> structures. Possible values
   *        for <code>ErrorCode</code> are <code>CLOUDFORMATION_STACK_INACTIVE</code> and
   *        <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  QueryErrors?: QueryError[];

  /**
   * <p>The ARNs and resource types of resources that are members of the group that you specified.</p>
   */
  ResourceIdentifiers?: ResourceIdentifier[];
}

export namespace SearchResourcesOutput {
  export const filterSensitiveLog = (obj: SearchResourcesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchResourcesOutput => __isa(o, "SearchResourcesOutput");
}

export interface TagInput {
  __type?: "TagInput";
  /**
   * <p>The ARN of the resource to which to add tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters,
   *        and tag values can have a maximum length of 256 characters.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagInput {
  export const filterSensitiveLog = (obj: TagInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagInput => __isa(o, "TagInput");
}

export interface TagOutput {
  __type?: "TagOutput";
  /**
   * <p>The ARN of the tagged resource.</p>
   */
  Arn?: string;

  /**
   * <p>The tags that have been added to the specified resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace TagOutput {
  export const filterSensitiveLog = (obj: TagOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagOutput => __isa(o, "TagOutput");
}

/**
 * <p>The caller has exceeded throttling limits.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

/**
 * <p>The request has not been applied because it lacks valid authentication credentials for the target resource.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthorizedException => __isa(o, "UnauthorizedException");
}

export interface UntagInput {
  __type?: "UntagInput";
  /**
   * <p>The ARN of the resource from which to remove tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  Keys: string[] | undefined;
}

export namespace UntagInput {
  export const filterSensitiveLog = (obj: UntagInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagInput => __isa(o, "UntagInput");
}

export interface UntagOutput {
  __type?: "UntagOutput";
  /**
   * <p>The ARN of the resource from which tags have been removed.</p>
   */
  Arn?: string;

  /**
   * <p>The keys of tags that have been removed.</p>
   */
  Keys?: string[];
}

export namespace UntagOutput {
  export const filterSensitiveLog = (obj: UntagOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagOutput => __isa(o, "UntagOutput");
}

export interface UpdateGroupInput {
  __type?: "UpdateGroupInput";
  /**
   * <p>The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores,
   *        punctuation, and spaces.</p>
   */
  Description?: string;

  /**
   * <p>The name of the resource group for which you want to update its description.</p>
   */
  GroupName: string | undefined;
}

export namespace UpdateGroupInput {
  export const filterSensitiveLog = (obj: UpdateGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGroupInput => __isa(o, "UpdateGroupInput");
}

export interface UpdateGroupOutput {
  __type?: "UpdateGroupOutput";
  /**
   * <p>The full description of the resource group after it has been updated.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupOutput {
  export const filterSensitiveLog = (obj: UpdateGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGroupOutput => __isa(o, "UpdateGroupOutput");
}

export interface UpdateGroupQueryInput {
  __type?: "UpdateGroupQueryInput";
  /**
   * <p>The name of the resource group for which you want to edit the query.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The resource query that determines which AWS resources are members of the resource group.</p>
   */
  ResourceQuery: ResourceQuery | undefined;
}

export namespace UpdateGroupQueryInput {
  export const filterSensitiveLog = (obj: UpdateGroupQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGroupQueryInput => __isa(o, "UpdateGroupQueryInput");
}

export interface UpdateGroupQueryOutput {
  __type?: "UpdateGroupQueryOutput";
  /**
   * <p>The resource query associated with the resource group after the update.</p>
   */
  GroupQuery?: GroupQuery;
}

export namespace UpdateGroupQueryOutput {
  export const filterSensitiveLog = (obj: UpdateGroupQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateGroupQueryOutput => __isa(o, "UpdateGroupQueryOutput");
}
