// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ResourceGroupsServiceException as __BaseException } from "./ResourceGroupsServiceException";

export enum GroupLifecycleEventsDesiredStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum GroupLifecycleEventsStatus {
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  INACTIVE = "INACTIVE",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The Resource Groups settings for this Amazon Web Services account.</p>
 */
export interface AccountSettings {
  /**
   * <p>The desired target status of the group lifecycle events feature. If</p>
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | string;

  /**
   * <p>The current status of the group lifecycle events feature.</p>
   */
  GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus | string;

  /**
   * <p>The text of any error message occurs during an attempt to turn group lifecycle events on or off.</p>
   */
  GroupLifecycleEventsStatusMessage?: string;
}

/**
 * <p>The request includes one or more parameters that violate validation rules.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A parameter for a group configuration item. For details about group service
 *             configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
 *                 groups</a>.</p>
 */
export interface GroupConfigurationParameter {
  /**
   * <p>The name of the group configuration parameter. For the list of parameters that you can
   *             use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value or values to be used for the specified parameter. For the list of values you
   *             can use with each parameter, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   */
  Values?: string[];
}

/**
 * <p>An item in a group configuration. A group service configuration can have one or more
 *             items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for
 *                 resource groups</a>.</p>
 */
export interface GroupConfigurationItem {
  /**
   * <p>Specifies the type of group configuration item. Each item must have a unique value for
   *                 <code>type</code>. For the list of types that you can specify for a configuration
   *             item, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   */
  Type: string | undefined;

  /**
   * <p>A collection of parameters for this group configuration item. For the list of
   *             parameters that you can use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported
   *                 resource types and parameters</a>.</p>
   */
  Parameters?: GroupConfigurationParameter[];
}

export enum QueryType {
  CLOUDFORMATION_STACK_1_0 = "CLOUDFORMATION_STACK_1_0",
  TAG_FILTERS_1_0 = "TAG_FILTERS_1_0",
}

/**
 * <p>The query you can use to define a resource group or a search for resources. A
 *                 <code>ResourceQuery</code> specifies both a query <code>Type</code> and a
 *                 <code>Query</code> string as JSON string objects. See the examples section for
 *             example JSON strings. For more information about creating a resource group with a
 *             resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in
 *                 Resource Groups</a> in the <i>Resource Groups User Guide</i>
 *          </p>
 *          <p>When you combine all of the elements together into a single string, any double quotes
 *             that are embedded inside another double quote pair must be escaped by preceding the
 *             embedded double quote with a backslash character (\). For example, a complete
 *                 <code>ResourceQuery</code> parameter must be formatted like the following CLI
 *             parameter example:</p>
 *          <p>
 *             <code>--resource-query
 *                 '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code>
 *          </p>
 *          <p>In the preceding example, all of the double quote characters in the value part of the
 *                 <code>Query</code> element must be escaped because the value itself is surrounded by
 *             double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting
 *                 strings</a> in the <i>Command Line Interface User Guide</i>.</p>
 *          <p>For the complete list of resource types that you can use in the array value for
 *                 <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources
 *                 you can use with Resource Groups and Tag Editor</a> in the
 *                 <i>Resource Groups User Guide</i>. For example:</p>
 *          <p>
 *             <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code>
 *          </p>
 */
export interface ResourceQuery {
  /**
   * <p>The type of the query to perform. This can have one of two values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>CLOUDFORMATION_STACK_1_0:</code>
   *                   </i> Specifies that you
   *                     want the group to contain the members of an CloudFormation stack. The <code>Query</code>
   *                     contains a <code>StackIdentifier</code> element with an ARN for a CloudFormation
   *                     stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>TAG_FILTERS_1_0:</code>
   *                   </i> Specifies that you want the
   *                     group to include resource that have tags that match the query. </p>
   *             </li>
   *          </ul>
   */
  Type: QueryType | string | undefined;

  /**
   * <p>The query that defines a group or a search. The contents depends on the value of the
   *                 <code>Type</code> element.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceTypeFilters</code> – Applies to all
   *                         <code>ResourceQuery</code> objects of either <code>Type</code>. This element
   *                     contains one of the following two items:</p>
   *                <ul>
   *                   <li>
   *                      <p>The value <code>AWS::AllSupported</code>. This causes the
   *                             ResourceQuery to match resources of any resource type that also match
   *                             the query.</p>
   *                   </li>
   *                   <li>
   *                      <p>A list (a JSON array) of resource type identifiers that limit the
   *                             query to only resources of the specified types. For the complete list of
   *                             resource types that you can use in the array value for
   *                                 <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag
   *                                 Editor</a> in the <i>Resource Groups User Guide</i>.</p>
   *                   </li>
   *                </ul>
   *                <p>Example: <code>"ResourceTypeFilters": ["AWS::AllSupported"]</code> or
   *                         <code>"ResourceTypeFilters": ["AWS::EC2::Instance",
   *                         "AWS::S3::Bucket"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TagFilters</code> – applicable only if <code>Type</code> =
   *                         <code>TAG_FILTERS_1_0</code>. The <code>Query</code> contains a JSON string
   *                     that represents a collection of simple tag filters. The JSON string uses a
   *                     syntax similar to the <code>
   *                      <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a>
   *                   </code> operation, but uses only the <code>
   *                      <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-ResourceTypeFilters"> ResourceTypeFilters</a>
   *                   </code> and <code>
   *                      <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-TagFiltersTagFilters">TagFilters</a>
   *                   </code> fields. If you specify more than one tag key,
   *                     only resources that match all tag keys, and at least one value of each specified
   *                     tag key, are returned in your query. If you specify more than one value for a
   *                     tag key, a resource matches the filter if it has a tag key value that matches
   *                         <i>any</i> of the specified values.</p>
   *                <p>For example, consider the following sample query for resources that have two
   *                     tags, <code>Stage</code> and <code>Version</code>, with two values each:</p>
   *                <p>
   *                   <code>[{"Stage":["Test","Deploy"]},{"Version":["1","2"]}]</code>
   *                </p>
   *                <p>The results of this resource query could include the following.</p>
   *                <ul>
   *                   <li>
   *                      <p>An Amazon EC2 instance that has the following two tags:
   *                                 <code>{"Stage":"Deploy"}</code>, and
   *                             <code>{"Version":"2"}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>An S3 bucket that has the following two tags:
   *                                 <code>{"Stage":"Test"}</code>, and
   *                             <code>{"Version":"1"}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>The resource query results would <i>not</i> include the
   *                     following items in the results, however. </p>
   *                <ul>
   *                   <li>
   *                      <p>An Amazon EC2 instance that has only the following tag:
   *                                 <code>{"Stage":"Deploy"}</code>.</p>
   *                      <p>The instance does not have <b>all</b> of the
   *                             tag keys specified in the filter, so it is excluded from the
   *                             results.</p>
   *                   </li>
   *                   <li>
   *                      <p>An RDS database that has the following two tags:
   *                                 <code>{"Stage":"Archived"}</code> and
   *                             <code>{"Version":"4"}</code>
   *                      </p>
   *                      <p>The database has all of the tag keys, but none of those keys has an
   *                             associated value that matches at least one of the specified values in
   *                             the filter.</p>
   *                   </li>
   *                </ul>
   *                <p>Example: <code>"TagFilters": [ { "Key": "Stage", "Values": [ "Gamma", "Beta" ]
   *                         }</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StackIdentifier</code> – applicable only if <code>Type</code> =
   *                         <code>CLOUDFORMATION_STACK_1_0</code>. The value of this parameter is the
   *                     Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included
   *                     in the group.</p>
   *             </li>
   *          </ul>
   */
  Query: string | undefined;
}

export interface CreateGroupInput {
  /**
   * <p>The name of the group, which is the identifier of the group in other operations. You
   *             can't change the name of a resource group after you create it. A resource group name can
   *             consist of letters, numbers, hyphens, periods, and underscores. The name cannot start
   *             with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name
   *             must be unique within each Amazon Web Services Region in your Amazon Web Services account.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the resource group. Descriptions can consist of letters, numbers,
   *             hyphens, underscores, periods, and spaces.</p>
   */
  Description?: string;

  /**
   * <p>The resource query that determines which Amazon Web Services resources are members of this group.
   *             For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>. </p>
   *          <note>
   *             <p>A resource group can contain either a <code>ResourceQuery</code> or a
   *                     <code>Configuration</code>, but not both.</p>
   *          </note>
   */
  ResourceQuery?: ResourceQuery;

  /**
   * <p>The tags to add to the group. A tag is key-value pair string.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A configuration associates the resource group with an Amazon Web Services service and specifies how
   *             the service can interact with the resources in the group. A configuration is an array of
   *                 <a>GroupConfigurationItem</a> elements. For details about the syntax of
   *             service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   *          <note>
   *             <p>A resource group can contain either a <code>Configuration</code> or a
   *                     <code>ResourceQuery</code>, but not both.</p>
   *          </note>
   */
  Configuration?: GroupConfigurationItem[];
}

/**
 * <p>A resource group that contains Amazon Web Services resources. You can assign resources to the group
 *             by associating either of the following elements with the group:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ResourceQuery</a> - Use a resource query to specify a set of tag
 *                     keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that
 *                     have those keys with the same values are included in the group. You can add a
 *                     resource query when you create the group, or later by using the <a>PutGroupConfiguration</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GroupConfiguration</a> - Use a service configuration to
 *                     associate the group with an Amazon Web Services service. The configuration specifies which
 *                     resource types can be included in the group.</p>
 *             </li>
 *          </ul>
 */
export interface Group {
  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the resource group.</p>
   */
  Description?: string;
}

export enum GroupConfigurationStatus {
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>A service configuration associated with a resource group. The configuration options
 *             are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies
 *             which resources can be included in the group. You can add a service configuration when
 *             you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service
 *             configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
 *                 groups</a>.</p>
 */
export interface GroupConfiguration {
  /**
   * <p>The configuration currently associated with the group and in effect.</p>
   */
  Configuration?: GroupConfigurationItem[];

  /**
   * <p>If present, the new configuration that is in the process of being applied to the
   *             group.</p>
   */
  ProposedConfiguration?: GroupConfigurationItem[];

  /**
   * <p>The current status of an attempt to update the group configuration.</p>
   */
  Status?: GroupConfigurationStatus | string;

  /**
   * <p>If present, the reason why a request to update the group configuration failed.</p>
   */
  FailureReason?: string;
}

export interface CreateGroupOutput {
  /**
   * <p>The description of the resource group.</p>
   */
  Group?: Group;

  /**
   * <p>The resource query associated with the group. For more information about resource
   *             queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>. </p>
   */
  ResourceQuery?: ResourceQuery;

  /**
   * <p>The tags associated with the group.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The service configuration associated with the resource group. For details about the
   *             syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   */
  GroupConfiguration?: GroupConfiguration;
}

/**
 * <p>The caller isn't authorized to make the request. Check permissions.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal error occurred while processing the request. Try again later.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteGroupInput {
  /**
   * @deprecated
   *
   * <p>Deprecated - don't use this parameter. Use <code>Group</code> instead.</p>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group to delete.</p>
   */
  Group?: string;
}

export interface DeleteGroupOutput {
  /**
   * <p>A full description of the deleted resource group.</p>
   */
  Group?: Group;
}

/**
 * <p>One or more of the specified resources don't exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export interface GetAccountSettingsOutput {
  /**
   * <p>The current settings for the optional features in Resource Groups.</p>
   */
  AccountSettings?: AccountSettings;
}

export interface GetGroupInput {
  /**
   * @deprecated
   *
   * <p>Deprecated - don't use this parameter. Use <code>Group</code> instead.</p>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group to retrieve.</p>
   */
  Group?: string;
}

export interface GetGroupOutput {
  /**
   * <p>A structure that contains the metadata details for the specified resource group. Use
   *                 <a>GetGroupQuery</a> and <a>GetGroupConfiguration</a> to get
   *             those additional details of the resource group.</p>
   */
  Group?: Group;
}

export interface GetGroupConfigurationInput {
  /**
   * <p>The name or the ARN of the resource group for which you want to retrive the service
   *             configuration.</p>
   */
  Group?: string;
}

export interface GetGroupConfigurationOutput {
  /**
   * <p>A structure that describes the service configuration attached with the specified
   *             group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for
   *                 Resource Groups</a>.</p>
   */
  GroupConfiguration?: GroupConfiguration;
}

export interface GetGroupQueryInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group to query.</p>
   */
  Group?: string;
}

/**
 * <p>A mapping of a query attached to a resource group that determines the Amazon Web Services resources
 *             that are members of the group.</p>
 */
export interface GroupQuery {
  /**
   * <p>The name of the resource group that is associated with the specified resource
   *             query.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The resource query that determines which Amazon Web Services resources are members of the associated
   *             resource group.</p>
   */
  ResourceQuery: ResourceQuery | undefined;
}

export interface GetGroupQueryOutput {
  /**
   * <p>The resource query associated with the specified group. For more information about
   *             resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>.</p>
   */
  GroupQuery?: GroupQuery;
}

export interface GetTagsInput {
  /**
   * <p>The ARN of the resource group whose tags you want to retrieve.</p>
   */
  Arn: string | undefined;
}

export interface GetTagsOutput {
  /**
   * <p>The ARN of the tagged resource group.</p>
   */
  Arn?: string;

  /**
   * <p>The tags associated with the specified resource group.</p>
   */
  Tags?: Record<string, string>;
}

export interface GroupResourcesInput {
  /**
   * <p>The name or the ARN of the resource group to add resources to.</p>
   */
  Group: string | undefined;

  /**
   * <p>The list of ARNs of the resources to be added to the group. </p>
   */
  ResourceArns: string[] | undefined;
}

/**
 * <p>A resource that failed to be added to or removed from a group.</p>
 */
export interface FailedResource {
  /**
   * <p>The ARN of the resource that failed to be added or removed.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The error message text associated with the failure.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code associated with the failure.</p>
   */
  ErrorCode?: string;
}

/**
 * <p>A structure that identifies a resource that is currently pending addition to the group
 *             as a member. Adding a resource to a resource group happens asynchronously as a
 *             background task and this one isn't completed yet.</p>
 */
export interface PendingResource {
  /**
   * <p>The Amazon resource name (ARN) of the resource that's in a pending state.</p>
   */
  ResourceArn?: string;
}

export interface GroupResourcesOutput {
  /**
   * <p>A list of ARNs of the resources that this operation successfully added to the
   *             group.</p>
   */
  Succeeded?: string[];

  /**
   * <p>A list of ARNs of any resources that this operation failed to add to the group.</p>
   */
  Failed?: FailedResource[];

  /**
   * <p>A list of ARNs of any resources that this operation is still in the process adding to
   *             the group. These pending additions continue asynchronously. You can check the status of
   *             pending additions by using the <code>
   *                <a>ListGroupResources</a>
   *             </code>
   *             operation, and checking the <code>Resources</code> array in the response and the
   *                 <code>Status</code> field of each object in that array. </p>
   */
  Pending?: PendingResource[];
}

export enum ResourceFilterName {
  ResourceType = "resource-type",
}

/**
 * <p>A filter name and value pair that is used to obtain more specific results from a list
 *             of resources.</p>
 */
export interface ResourceFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: ResourceFilterName | string | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by resource filter name, and are
   *             case-sensitive.</p>
   */
  Values: string[] | undefined;
}

export interface ListGroupResourcesInput {
  /**
   * @deprecated
   *
   * <important>
   *             <p>
   *                <i>
   *                   <b>Deprecated - don't use this parameter. Use the
   *                             <code>Group</code> request field instead.</b>
   *                </i>
   *             </p>
   *          </important>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group</p>
   */
  Group?: string;

  /**
   * <p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply
   *             to a <code>ListGroupResources</code> operation. Filters the results to include only
   *             those of the specified resource types.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - Filter resources by their type. Specify up to
   *                     five resource types in the format <code>AWS::ServiceCode::ResourceType</code>.
   *                     For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.
   *                 </p>
   *             </li>
   *          </ul>
   *          <p>When you specify a <code>resource-type</code> filter for
   *                 <code>ListGroupResources</code>, Resource Groups validates your filter resource types
   *             against the types that are defined in the query associated with the group. For example,
   *             if a group contains only S3 buckets because its query specifies only that resource type,
   *             but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not
   *             filter for EC2 instances. In this case, a <code>ListGroupResources</code> request
   *             returns a <code>BadRequestException</code> error with a message similar to the
   *             following:</p>
   *          <p>
   *             <code>The resource types specified as filters in the request are not
   *             valid.</code>
   *          </p>
   *          <p>The error includes a list of resource types that failed the validation because they
   *             are not part of the query associated with the group. This validation doesn't occur when
   *             the group query specifies <code>AWS::AllSupported</code>, because a group based on such
   *             a query can contain any of the allowed resource types for the query type (tag-based or
   *             Amazon CloudFront stack-based queries).</p>
   */
  Filters?: ResourceFilter[];

  /**
   * <p>The total number of results that you want included on each page of the
   * response. If you do not include this parameter, it defaults to a value that is specific to the
   * operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   * response element is present and has a value (is not null). Include that value as the
   * <code>NextToken</code> request parameter in the next call to the operation to get the next part
   * of the results. Note that the service might return fewer results than the maximum even when there
   * are more results available. You should check <code>NextToken</code> after every operation to
   * ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;
}

export enum QueryErrorCode {
  CLOUDFORMATION_STACK_INACTIVE = "CLOUDFORMATION_STACK_INACTIVE",
  CLOUDFORMATION_STACK_NOT_EXISTING = "CLOUDFORMATION_STACK_NOT_EXISTING",
  CLOUDFORMATION_STACK_UNASSUMABLE_ROLE = "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE",
}

/**
 * <p>A two-part error structure that can occur in <code>ListGroupResources</code> or
 *                 <code>SearchResources</code> operations on CloudFront stack-based queries. The error
 *             occurs if the CloudFront stack on which the query is based either does not exist, or has a
 *             status that renders the stack inactive. A <code>QueryError</code> occurrence does not
 *             necessarily mean that Resource Groups could not complete the operation, but the resulting
 *             group might have no member resources.</p>
 */
export interface QueryError {
  /**
   * <p>Specifies the error code that was raised.</p>
   */
  ErrorCode?: QueryErrorCode | string;

  /**
   * <p>A message that explains the <code>ErrorCode</code> value. Messages might state that
   *             the specified CloudFront stack does not exist (or no longer exists). For
   *                 <code>CLOUDFORMATION_STACK_INACTIVE</code>, the message typically states that the
   *             CloudFront stack has a status that is not (or no longer) active, such as
   *                 <code>CREATE_FAILED</code>.</p>
   */
  Message?: string;
}

/**
 * <p>A structure that contains the ARN of a resource and its resource type.</p>
 */
export interface ResourceIdentifier {
  /**
   * <p>The ARN of a resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type of a resource, such as <code>AWS::EC2::Instance</code>.</p>
   */
  ResourceType?: string;
}

export enum ResourceStatusValue {
  Pending = "PENDING",
}

/**
 * <p>A structure that identifies the current group membership status for a resource. Adding
 *             a resource to a resource group is performed asynchronously as a background task. A
 *                 <code>PENDING</code> status indicates, for this resource, that the process isn't
 *             completed yet.</p>
 */
export interface ResourceStatus {
  /**
   * <p>The current status.</p>
   */
  Name?: ResourceStatusValue | string;
}

/**
 * <p>A structure returned by the <a>ListGroupResources</a> operation that
 *             contains identity and group membership status information for one of the resources in
 *             the group.</p>
 */
export interface ListGroupResourcesItem {
  /**
   * <p>A structure that contains the ARN of a resource and its resource type.</p>
   */
  Identifier?: ResourceIdentifier;

  /**
   * <p>A structure that contains the status of this resource's membership in the
   *             group.</p>
   *          <note>
   *             <p>This field is present in the response only if the group is of type
   *                     <code>AWS::EC2::HostManagement</code>.</p>
   *          </note>
   */
  Status?: ResourceStatus;
}

export interface ListGroupResourcesOutput {
  /**
   * <p>An array of resources from which you can determine each resource's identity, type, and
   *             group membership status.</p>
   */
  Resources?: ListGroupResourcesItem[];

  /**
   * @deprecated
   *
   * <important>
   *             <p>
   *                <b>
   *                   <i>Deprecated - don't use this parameter. Use the
   *                             <code>Resources</code> response field
   *                 instead.</i>
   *                </b>
   *             </p>
   *          </important>
   */
  ResourceIdentifiers?: ResourceIdentifier[];

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error is an object that contains
   *                 <code>ErrorCode</code> and <code>Message</code> structures. Possible values for
   *                 <code>ErrorCode</code> are <code>CLOUDFORMATION_STACK_INACTIVE</code> and
   *                 <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  QueryErrors?: QueryError[];
}

/**
 * <p>The request was rejected because it doesn't have valid credentials for the target
 *             resource.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

export enum GroupFilterName {
  ConfigurationType = "configuration-type",
  ResourceType = "resource-type",
}

/**
 * <p>A filter collection that you can use to restrict the results from a <code>List</code>
 *             operation to only those you want to include.</p>
 */
export interface GroupFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: GroupFilterName | string | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by group filter name, and are
   *             case-sensitive.</p>
   */
  Values: string[] | undefined;
}

export interface ListGroupsInput {
  /**
   * <p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to
   *             a <code>ListGroups</code> operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - Filter the results to include only those of the
   *                     specified resource types. Specify up to five resource types in the format
   *                             <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i>
   *                   </code>.
   *                     For example, <code>AWS::EC2::Instance</code>, or
   *                     <code>AWS::S3::Bucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>configuration-type</code> - Filter the results to include only those
   *                     groups that have the specified configuration types attached. The current
   *                     supported values are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::CapacityReservationPool</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::HostManagement</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Filters?: GroupFilter[];

  /**
   * <p>The total number of results that you want included on each page of the
   * response. If you do not include this parameter, it defaults to a value that is specific to the
   * operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   * response element is present and has a value (is not null). Include that value as the
   * <code>NextToken</code> request parameter in the next call to the operation to get the next part
   * of the results. Note that the service might return fewer results than the maximum even when there
   * are more results available. You should check <code>NextToken</code> after every operation to
   * ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;
}

/**
 * <p>The unique identifiers for a resource group.</p>
 */
export interface GroupIdentifier {
  /**
   * <p>The name of the resource group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;
}

export interface ListGroupsOutput {
  /**
   * <p>A list of <a>GroupIdentifier</a> objects. Each identifier is an object that
   *             contains both the <code>Name</code> and the <code>GroupArn</code>.</p>
   */
  GroupIdentifiers?: GroupIdentifier[];

  /**
   * @deprecated
   *
   * <important>
   *             <p>
   *                <i>
   *                   <b>Deprecated - don't use this field. Use the
   *                             <code>GroupIdentifiers</code> response field
   *                     instead.</b>
   *                </i>
   *             </p>
   *          </important>
   */
  Groups?: Group[];

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;
}

export interface PutGroupConfigurationInput {
  /**
   * <p>The name or ARN of the resource group with the configuration that you want to
   *             update.</p>
   */
  Group?: string;

  /**
   * <p>The new configuration to associate with the specified group. A configuration
   *             associates the resource group with an Amazon Web Services service and specifies how the service can
   *             interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p>
   *          <p>For information about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for
   *                 Resource Groups</a>.</p>
   *          <note>
   *             <p>A resource group can contain either a <code>Configuration</code> or a
   *                     <code>ResourceQuery</code>, but not both.</p>
   *          </note>
   */
  Configuration?: GroupConfigurationItem[];
}

export interface PutGroupConfigurationOutput {}

export interface SearchResourcesInput {
  /**
   * <p>The search query, using the same formats that are supported for resource group
   *             definition. For more information, see <a>CreateGroup</a>.</p>
   */
  ResourceQuery: ResourceQuery | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   * response. If you do not include this parameter, it defaults to a value that is specific to the
   * operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   * response element is present and has a value (is not null). Include that value as the
   * <code>NextToken</code> request parameter in the next call to the operation to get the next part
   * of the results. Note that the service might return fewer results than the maximum even when there
   * are more results available. You should check <code>NextToken</code> after every operation to
   * ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;
}

export interface SearchResourcesOutput {
  /**
   * <p>The ARNs and resource types of resources that are members of the group that you
   *             specified.</p>
   */
  ResourceIdentifiers?: ResourceIdentifier[];

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error is an object that contains
   *                 <code>ErrorCode</code> and <code>Message</code> structures.</p>
   *          <p>Possible values for <code>ErrorCode</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUDFORMATION_STACK_INACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  QueryErrors?: QueryError[];
}

export interface TagInput {
  /**
   * <p>The ARN of the resource group to which to add tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The tags to add to the specified resource group. A tag is a string-to-string map of
   *             key-value pairs.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagOutput {
  /**
   * <p>The ARN of the tagged resource.</p>
   */
  Arn?: string;

  /**
   * <p>The tags that have been added to the specified resource group.</p>
   */
  Tags?: Record<string, string>;
}

export interface UngroupResourcesInput {
  /**
   * <p>The name or the ARN of the resource group from which to remove the resources.</p>
   */
  Group: string | undefined;

  /**
   * <p>The ARNs of the resources to be removed from the group.</p>
   */
  ResourceArns: string[] | undefined;
}

export interface UngroupResourcesOutput {
  /**
   * <p>A list of resources that were successfully removed from the group by this
   *             operation.</p>
   */
  Succeeded?: string[];

  /**
   * <p>A list of any resources that failed to be removed from the group by this
   *             operation.</p>
   */
  Failed?: FailedResource[];

  /**
   * <p>A list of any resources that are still in the process of being removed from the group
   *             by this operation. These pending removals continue asynchronously. You can check the
   *             status of pending removals by using the <code>
   *                <a>ListGroupResources</a>
   *             </code> operation. After the resource is successfully removed, it no longer
   *             appears in the response.</p>
   */
  Pending?: PendingResource[];
}

export interface UntagInput {
  /**
   * <p>The ARN of the resource group from which to remove tags. The command removed both the
   *             specified keys and any values associated with those keys.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  Keys: string[] | undefined;
}

export interface UntagOutput {
  /**
   * <p>The ARN of the resource group from which tags have been removed.</p>
   */
  Arn?: string;

  /**
   * <p>The keys of the tags that were removed.</p>
   */
  Keys?: string[];
}

export interface UpdateAccountSettingsInput {
  /**
   * <p>Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off.</p>
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | string;
}

export interface UpdateAccountSettingsOutput {
  /**
   * <p>A structure that displays the status of the optional features in the account.</p>
   */
  AccountSettings?: AccountSettings;
}

export interface UpdateGroupInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group to modify.</p>
   */
  Group?: string;

  /**
   * <p>The new description that you want to update the resource group with. Descriptions can
   *             contain letters, numbers, hyphens, underscores, periods, and spaces.</p>
   */
  Description?: string;
}

export interface UpdateGroupOutput {
  /**
   * <p>The update description of the resource group.</p>
   */
  Group?: Group;
}

export interface UpdateGroupQueryInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   */
  GroupName?: string;

  /**
   * <p>The name or the ARN of the resource group to query.</p>
   */
  Group?: string;

  /**
   * <p>The resource query to determine which Amazon Web Services resources are members of this resource
   *             group.</p>
   *          <note>
   *             <p>A resource group can contain either a <code>Configuration</code> or a
   *                     <code>ResourceQuery</code>, but not both.</p>
   *          </note>
   */
  ResourceQuery: ResourceQuery | undefined;
}

export interface UpdateGroupQueryOutput {
  /**
   * <p>The updated resource query associated with the resource group after the update.</p>
   */
  GroupQuery?: GroupQuery;
}

/**
 * @internal
 */
export const AccountSettingsFilterSensitiveLog = (obj: AccountSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupConfigurationParameterFilterSensitiveLog = (obj: GroupConfigurationParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupConfigurationItemFilterSensitiveLog = (obj: GroupConfigurationItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceQueryFilterSensitiveLog = (obj: ResourceQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupInputFilterSensitiveLog = (obj: CreateGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupConfigurationFilterSensitiveLog = (obj: GroupConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupOutputFilterSensitiveLog = (obj: CreateGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupInputFilterSensitiveLog = (obj: DeleteGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupOutputFilterSensitiveLog = (obj: DeleteGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountSettingsOutputFilterSensitiveLog = (obj: GetAccountSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupInputFilterSensitiveLog = (obj: GetGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupOutputFilterSensitiveLog = (obj: GetGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupConfigurationInputFilterSensitiveLog = (obj: GetGroupConfigurationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupConfigurationOutputFilterSensitiveLog = (obj: GetGroupConfigurationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupQueryInputFilterSensitiveLog = (obj: GetGroupQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupQueryFilterSensitiveLog = (obj: GroupQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupQueryOutputFilterSensitiveLog = (obj: GetGroupQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagsInputFilterSensitiveLog = (obj: GetTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagsOutputFilterSensitiveLog = (obj: GetTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupResourcesInputFilterSensitiveLog = (obj: GroupResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedResourceFilterSensitiveLog = (obj: FailedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingResourceFilterSensitiveLog = (obj: PendingResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupResourcesOutputFilterSensitiveLog = (obj: GroupResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterFilterSensitiveLog = (obj: ResourceFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupResourcesInputFilterSensitiveLog = (obj: ListGroupResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryErrorFilterSensitiveLog = (obj: QueryError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceIdentifierFilterSensitiveLog = (obj: ResourceIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceStatusFilterSensitiveLog = (obj: ResourceStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupResourcesItemFilterSensitiveLog = (obj: ListGroupResourcesItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupResourcesOutputFilterSensitiveLog = (obj: ListGroupResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterFilterSensitiveLog = (obj: GroupFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsInputFilterSensitiveLog = (obj: ListGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupIdentifierFilterSensitiveLog = (obj: GroupIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsOutputFilterSensitiveLog = (obj: ListGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutGroupConfigurationInputFilterSensitiveLog = (obj: PutGroupConfigurationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutGroupConfigurationOutputFilterSensitiveLog = (obj: PutGroupConfigurationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesInputFilterSensitiveLog = (obj: SearchResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesOutputFilterSensitiveLog = (obj: SearchResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagInputFilterSensitiveLog = (obj: TagInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagOutputFilterSensitiveLog = (obj: TagOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UngroupResourcesInputFilterSensitiveLog = (obj: UngroupResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UngroupResourcesOutputFilterSensitiveLog = (obj: UngroupResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagInputFilterSensitiveLog = (obj: UntagInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagOutputFilterSensitiveLog = (obj: UntagOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsInputFilterSensitiveLog = (obj: UpdateAccountSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsOutputFilterSensitiveLog = (obj: UpdateAccountSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupInputFilterSensitiveLog = (obj: UpdateGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupOutputFilterSensitiveLog = (obj: UpdateGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupQueryInputFilterSensitiveLog = (obj: UpdateGroupQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupQueryOutputFilterSensitiveLog = (obj: UpdateGroupQueryOutput): any => ({
  ...obj,
});
