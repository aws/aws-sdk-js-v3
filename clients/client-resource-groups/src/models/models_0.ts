// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ResourceGroupsServiceException as __BaseException } from "./ResourceGroupsServiceException";

/**
 * @public
 * @enum
 */
export const GroupLifecycleEventsDesiredStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type GroupLifecycleEventsDesiredStatus =
  (typeof GroupLifecycleEventsDesiredStatus)[keyof typeof GroupLifecycleEventsDesiredStatus];

/**
 * @public
 * @enum
 */
export const GroupLifecycleEventsStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type GroupLifecycleEventsStatus = (typeof GroupLifecycleEventsStatus)[keyof typeof GroupLifecycleEventsStatus];

/**
 * <p>The Resource Groups settings for this Amazon Web Services account.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>The desired target status of the group lifecycle events feature. If</p>
   * @public
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | undefined;

  /**
   * <p>The current status of the group lifecycle events feature.</p>
   * @public
   */
  GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus | undefined;

  /**
   * <p>The text of any error message occurs during an attempt to turn group lifecycle events on or off.</p>
   * @public
   */
  GroupLifecycleEventsStatusMessage?: string | undefined;
}

/**
 * <p>The request includes one or more parameters that violate validation rules.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface CancelTagSyncTaskInput {
  /**
   * <p>The Amazon resource name (ARN) of the tag-sync task. </p>
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * <p>The caller isn't authorized to make the request. Check permissions.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * <p>The request was rejected because it doesn't have valid credentials for the target
 *             resource.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * <p>A parameter for a group configuration item. For details about group service
 *             configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
 *                 groups</a>.</p>
 * @public
 */
export interface GroupConfigurationParameter {
  /**
   * <p>The name of the group configuration parameter. For the list of parameters that you can
   *             use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value or values to be used for the specified parameter. For the list of values you
   *             can use with each parameter, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>An item in a group configuration. A group service configuration can have one or more
 *             items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for
 *                 resource groups</a>.</p>
 * @public
 */
export interface GroupConfigurationItem {
  /**
   * <p>Specifies the type of group configuration item. Each item must have a unique value for
   *                 <code>type</code>. For the list of types that you can specify for a configuration
   *             item, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and
   *                 parameters</a>.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>A collection of parameters for this group configuration item. For the list of
   *             parameters that you can use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported
   *                 resource types and parameters</a>.</p>
   * @public
   */
  Parameters?: GroupConfigurationParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryType = {
  CLOUDFORMATION_STACK_1_0: "CLOUDFORMATION_STACK_1_0",
  TAG_FILTERS_1_0: "TAG_FILTERS_1_0",
} as const;

/**
 * @public
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];

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
 *                 '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'</code>
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
 * @public
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
   *                     contains a <code>StackIdentifier</code> element with an Amazon resource name (ARN) for a CloudFormation
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
   * @public
   */
  Type: QueryType | undefined;

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
   *                   <code>[\{"Stage":["Test","Deploy"]\},\{"Version":["1","2"]\}]</code>
   *                </p>
   *                <p>The results of this resource query could include the following.</p>
   *                <ul>
   *                   <li>
   *                      <p>An Amazon EC2 instance that has the following two tags:
   *                                 <code>\{"Stage":"Deploy"\}</code>, and
   *                             <code>\{"Version":"2"\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>An S3 bucket that has the following two tags:
   *                                 <code>\{"Stage":"Test"\}</code>, and
   *                             <code>\{"Version":"1"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>The resource query results would <i>not</i> include the
   *                     following items in the results, however. </p>
   *                <ul>
   *                   <li>
   *                      <p>An Amazon EC2 instance that has only the following tag:
   *                                 <code>\{"Stage":"Deploy"\}</code>.</p>
   *                      <p>The instance does not have <b>all</b> of the
   *                             tag keys specified in the filter, so it is excluded from the
   *                             results.</p>
   *                   </li>
   *                   <li>
   *                      <p>An RDS database that has the following two tags:
   *                                 <code>\{"Stage":"Archived"\}</code> and
   *                             <code>\{"Version":"4"\}</code>
   *                      </p>
   *                      <p>The database has all of the tag keys, but none of those keys has an
   *                             associated value that matches at least one of the specified values in
   *                             the filter.</p>
   *                   </li>
   *                </ul>
   *                <p>Example: <code>"TagFilters": [ \{ "Key": "Stage", "Values": [ "Gamma", "Beta" ]
   *                         \}</code>
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
   * @public
   */
  Query: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupInput {
  /**
   * <p>The name of the group, which is the identifier of the group in other operations. You
   *             can't change the name of a resource group after you create it. A resource group name can
   *             consist of letters, numbers, hyphens, periods, and underscores. The name cannot start
   *             with <code>AWS</code>, <code>aws</code>, or any other possible capitalization; these are
   *             reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services
   *             account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the resource group. Descriptions can consist of letters, numbers,
   *             hyphens, underscores, periods, and spaces.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource query that determines which Amazon Web Services resources are members of this group.
   *             For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>. </p>
   *          <note>
   *             <p>A resource group can contain either a <code>ResourceQuery</code> or a
   *                     <code>Configuration</code>, but not both.</p>
   *          </note>
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * <p>The tags to add to the group. A tag is key-value pair string.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A configuration associates the resource group with an Amazon Web Services service and specifies how
   *             the service can interact with the resources in the group. A configuration is an array of
   *                 <a>GroupConfigurationItem</a> elements. For details about the syntax of
   *             service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   *          <note>
   *             <p>A resource group can contain either a <code>Configuration</code> or a
   *                     <code>ResourceQuery</code>, but not both.</p>
   *          </note>
   * @public
   */
  Configuration?: GroupConfigurationItem[] | undefined;

  /**
   * <p>The critical rank of the application group on a scale of 1 to 10, with a
   *             rank of 1 being the most critical, and a rank of 10 being least critical.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A name, email address or other identifier for the person or group
   *             who is considered as the owner of this application group within your organization. </p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The name of the application group, which you can change at any time. </p>
   * @public
   */
  DisplayName?: string | undefined;
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
 * @public
 */
export interface Group {
  /**
   * <p>The Amazon resource name (ARN) of the resource group.</p>
   * @public
   */
  GroupArn: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the resource group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The critical rank of the application group on a scale of 1 to 10, with a
   *             rank of 1 being the most critical, and a rank of 10 being least critical.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A name, email address or other identifier for the person or group
   *             who is considered as the owner of this application group within your organization. </p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The name of the application group, which you can change at any time. </p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A tag that defines the application group membership. This tag is only supported
   *             for application groups. </p>
   * @public
   */
  ApplicationTag?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupConfigurationStatus = {
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type GroupConfigurationStatus = (typeof GroupConfigurationStatus)[keyof typeof GroupConfigurationStatus];

/**
 * <p>A service configuration associated with a resource group. The configuration options
 *             are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies
 *             which resources can be included in the group. You can add a service configuration when
 *             you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service
 *             configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
 *                 groups</a>.</p>
 * @public
 */
export interface GroupConfiguration {
  /**
   * <p>The configuration currently associated with the group and in effect.</p>
   * @public
   */
  Configuration?: GroupConfigurationItem[] | undefined;

  /**
   * <p>If present, the new configuration that is in the process of being applied to the
   *             group.</p>
   * @public
   */
  ProposedConfiguration?: GroupConfigurationItem[] | undefined;

  /**
   * <p>The current status of an attempt to update the group configuration.</p>
   * @public
   */
  Status?: GroupConfigurationStatus | undefined;

  /**
   * <p>If present, the reason why a request to update the group configuration failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupOutput {
  /**
   * <p>The description of the resource group.</p>
   * @public
   */
  Group?: Group | undefined;

  /**
   * <p>The resource query associated with the group. For more information about resource
   *             queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>. </p>
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * <p>The tags associated with the group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The service configuration associated with the resource group. For details about the
   *             syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   * @public
   */
  GroupConfiguration?: GroupConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteGroupInput {
  /**
   * @deprecated
   *
   * <p>Deprecated - don't use this parameter. Use <code>Group</code> instead.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group to delete.</p>
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupOutput {
  /**
   * <p>A full description of the deleted resource group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * <p>One or more of the specified resources don't exist.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface GetAccountSettingsOutput {
  /**
   * <p>The current settings for the optional features in Resource Groups.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetGroupInput {
  /**
   * @deprecated
   *
   * <p>Deprecated - don't use this parameter. Use <code>Group</code> instead.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group to retrieve.</p>
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupOutput {
  /**
   * <p>A structure that contains the metadata details for the specified resource group. Use
   *                 <a>GetGroupQuery</a> and <a>GetGroupConfiguration</a> to get
   *             those additional details of the resource group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface GetGroupConfigurationInput {
  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group for which you want to retrive the service
   *             configuration.</p>
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupConfigurationOutput {
  /**
   * <p>A structure that describes the service configuration attached with the specified
   *             group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for
   *                 Resource Groups</a>.</p>
   * @public
   */
  GroupConfiguration?: GroupConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGroupQueryInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group to query.</p>
   * @public
   */
  Group?: string | undefined;
}

/**
 * <p>A mapping of a query attached to a resource group that determines the Amazon Web Services resources
 *             that are members of the group.</p>
 * @public
 */
export interface GroupQuery {
  /**
   * <p>The name of the resource group that is associated with the specified resource
   *             query.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The resource query that determines which Amazon Web Services resources are members of the associated
   *             resource group.</p>
   * @public
   */
  ResourceQuery: ResourceQuery | undefined;
}

/**
 * @public
 */
export interface GetGroupQueryOutput {
  /**
   * <p>The resource query associated with the specified group. For more information about
   *             resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>.</p>
   * @public
   */
  GroupQuery?: GroupQuery | undefined;
}

/**
 * @public
 */
export interface GetTagsInput {
  /**
   * <p>The Amazon resource name (ARN) of the resource group whose tags you want to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsOutput {
  /**
   * <p>TheAmazon resource name (ARN) of the tagged resource group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The tags associated with the specified resource group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTagSyncTaskInput {
  /**
   * <p>The Amazon resource name (ARN) of the tag-sync task. </p>
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TagSyncTaskStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
} as const;

/**
 * @public
 */
export type TagSyncTaskStatus = (typeof TagSyncTaskStatus)[keyof typeof TagSyncTaskStatus];

/**
 * @public
 */
export interface GetTagSyncTaskOutput {
  /**
   * <p>The Amazon resource name (ARN) of the application group. </p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The name of the application group. </p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the tag-sync task. </p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The tag key. </p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value. </p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the role assumed by Resource Groups to tag and untag resources on your behalf. </p>
   *          <p>For more information about this role, review <a href="https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#tag-sync-role">Tag-sync required permissions</a>.
   *         </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the tag-sync task. </p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The tag-sync task is actively managing resources in
   *                     the application by adding or removing the <code>awsApplication</code> tag from resources
   *                     when they are tagged or untagged with the specified tag key-value pair.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The tag-sync task is not actively managing resources
   *                     in the application. Review the <code>ErrorMessage</code> for more information about
   *                     resolving the error.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TagSyncTaskStatus | undefined;

  /**
   * <p>The specific error message in cases where the tag-sync task status
   *             is <code>ERROR</code>. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of when the tag-sync task was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GroupResourcesInput {
  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group to add resources to.</p>
   * @public
   */
  Group: string | undefined;

  /**
   * <p>The list of Amazon resource names (ARNs) of the resources to be added to the group. </p>
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * <p>A resource that failed to be added to or removed from a group.</p>
 * @public
 */
export interface FailedResource {
  /**
   * <p>The Amazon resource name (ARN) of the resource that failed to be added or removed.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The error message text associated with the failure.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error code associated with the failure.</p>
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * <p>A structure that identifies a resource that is currently pending addition to the group
 *             as a member. Adding a resource to a resource group happens asynchronously as a
 *             background task and this one isn't completed yet.</p>
 * @public
 */
export interface PendingResource {
  /**
   * <p>The Amazon resource name (ARN) of the resource that's in a pending state.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GroupResourcesOutput {
  /**
   * <p>A list of Amazon resource names (ARNs) of the resources that this operation successfully added to the
   *             group.</p>
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * <p>A list of Amazon resource names (ARNs) of any resources that this operation failed to add to the group.</p>
   * @public
   */
  Failed?: FailedResource[] | undefined;

  /**
   * <p>A list of Amazon resource names (ARNs) of any resources that this operation is still in the process adding to
   *             the group. These pending additions continue asynchronously. You can check the status of
   *             pending additions by using the <code>
   *                <a>ListGroupResources</a>
   *             </code>
   *             operation, and checking the <code>Resources</code> array in the response and the
   *                 <code>Status</code> field of each object in that array. </p>
   * @public
   */
  Pending?: PendingResource[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ListGroupingStatusesFilterName = {
  ResourceArn: "resource-arn",
  Status: "status",
} as const;

/**
 * @public
 */
export type ListGroupingStatusesFilterName =
  (typeof ListGroupingStatusesFilterName)[keyof typeof ListGroupingStatusesFilterName];

/**
 * <p>A filter name and value pair that is used to obtain more specific results from the list of grouping statuses. </p>
 * @public
 */
export interface ListGroupingStatusesFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive. </p>
   * @public
   */
  Name: ListGroupingStatusesFilterName | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive. </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListGroupingStatusesInput {
  /**
   * <p>The application group identifier, expressed as an Amazon resource name (ARN) or the application group name. </p>
   * @public
   */
  Group: string | undefined;

  /**
   * <p>The maximum number of resources and their statuses returned in the
   *             response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter name and value pair that is used to return more
   *             specific results from a list of resources. </p>
   * @public
   */
  Filters?: ListGroupingStatusesFilter[] | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *             <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *             response indicates that more output is available. Set this parameter to the
   *             value provided by a previous call's <code>NextToken</code> response to indicate
   *             where the output should continue from. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupingType = {
  GROUP: "GROUP",
  UNGROUP: "UNGROUP",
} as const;

/**
 * @public
 */
export type GroupingType = (typeof GroupingType)[keyof typeof GroupingType];

/**
 * @public
 * @enum
 */
export const GroupingStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type GroupingStatus = (typeof GroupingStatus)[keyof typeof GroupingStatus];

/**
 * <p>The information about a grouping or ungrouping resource action. </p>
 * @public
 */
export interface GroupingStatusesItem {
  /**
   * <p>The Amazon resource name (ARN) of a resource. </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Describes the resource grouping action with values of
   *             <code>GROUP</code> or <code>UNGROUP</code>. </p>
   * @public
   */
  Action?: GroupingType | undefined;

  /**
   * <p>Describes the resource grouping status with values of
   *             <code>SUCCESS</code>, <code>FAILED</code>, <code>IN_PROGRESS</code>,
   *             or <code>SKIPPED</code>. </p>
   * @public
   */
  Status?: GroupingStatus | undefined;

  /**
   * <p>A message that explains the <code>ErrorCode</code>. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Specifies the error code that was raised. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A timestamp of when the status was last updated. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGroupingStatusesOutput {
  /**
   * <p>The application group identifier, expressed as an Amazon resource name (ARN) or the application group name.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>Returns details about the grouping or ungrouping status of the
   *             resources in the specified application group. </p>
   * @public
   */
  GroupingStatuses?: GroupingStatusesItem[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response.
   *             Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output.
   *             You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceFilterName = {
  ResourceType: "resource-type",
} as const;

/**
 * @public
 */
export type ResourceFilterName = (typeof ResourceFilterName)[keyof typeof ResourceFilterName];

/**
 * <p>A filter name and value pair that is used to obtain more specific results from a list
 *             of resources.</p>
 * @public
 */
export interface ResourceFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  Name: ResourceFilterName | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by resource filter name, and are
   *             case-sensitive.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group. </p>
   * @public
   */
  Group?: string | undefined;

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
   * @public
   */
  Filters?: ResourceFilter[] | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   * response. If you do not include this parameter, it defaults to a value that is specific to the
   * operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   * response element is present and has a value (is not null). Include that value as the
   * <code>NextToken</code> request parameter in the next call to the operation to get the next part
   * of the results. Note that the service might return fewer results than the maximum even when there
   * are more results available. You should check <code>NextToken</code> after every operation to
   * ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryErrorCode = {
  CLOUDFORMATION_STACK_INACTIVE: "CLOUDFORMATION_STACK_INACTIVE",
  CLOUDFORMATION_STACK_NOT_EXISTING: "CLOUDFORMATION_STACK_NOT_EXISTING",
  CLOUDFORMATION_STACK_UNASSUMABLE_ROLE: "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE",
  RESOURCE_TYPE_NOT_SUPPORTED: "RESOURCE_TYPE_NOT_SUPPORTED",
} as const;

/**
 * @public
 */
export type QueryErrorCode = (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

/**
 * <p>A two-part error structure that can occur in <code>ListGroupResources</code> or
 *                 <code>SearchResources</code>. </p>
 * @public
 */
export interface QueryError {
  /**
   * <p>Specifies the error code that was raised.</p>
   * @public
   */
  ErrorCode?: QueryErrorCode | undefined;

  /**
   * <p>A message that explains the <code>ErrorCode</code>. </p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A structure that contains the ARN of a resource and its resource type.</p>
 * @public
 */
export interface ResourceIdentifier {
  /**
   * <p>The Amazon resource name (ARN) of a resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource type of a resource, such as <code>AWS::EC2::Instance</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceStatusValue = {
  Pending: "PENDING",
} as const;

/**
 * @public
 */
export type ResourceStatusValue = (typeof ResourceStatusValue)[keyof typeof ResourceStatusValue];

/**
 * <p>A structure that identifies the current group membership status for a resource. Adding
 *             a resource to a resource group is performed asynchronously as a background task. A
 *                 <code>PENDING</code> status indicates, for this resource, that the process isn't
 *             completed yet.</p>
 * @public
 */
export interface ResourceStatus {
  /**
   * <p>The current status.</p>
   * @public
   */
  Name?: ResourceStatusValue | undefined;
}

/**
 * <p>A structure returned by the <a>ListGroupResources</a> operation that
 *             contains identity and group membership status information for one of the resources in
 *             the group.</p>
 * @public
 */
export interface ListGroupResourcesItem {
  /**
   * <p>A structure that contains the ARN of a resource and its resource type.</p>
   * @public
   */
  Identifier?: ResourceIdentifier | undefined;

  /**
   * <p>A structure that contains the status of this resource's membership in the
   *             group.</p>
   *          <note>
   *             <p>This field is present in the response only if the group is of type
   *                     <code>AWS::EC2::HostManagement</code>.</p>
   *          </note>
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesOutput {
  /**
   * <p>An array of resources from which you can determine each resource's identity, type, and
   *             group membership status.</p>
   * @public
   */
  Resources?: ListGroupResourcesItem[] | undefined;

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
   * @public
   */
  ResourceIdentifiers?: ResourceIdentifier[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error contains an
   *             <code>ErrorCode</code> and <code>Message</code>. Possible values for
   *             ErrorCode are <code>CLOUDFORMATION_STACK_INACTIVE</code>, <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>,
   *             <code>CLOUDFORMATION_STACK_UNASSUMABLE_ROLE</code> and <code>RESOURCE_TYPE_NOT_SUPPORTED</code>. </p>
   * @public
   */
  QueryErrors?: QueryError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupFilterName = {
  ConfigurationType: "configuration-type",
  Criticality: "criticality",
  DisplayName: "display-name",
  Owner: "owner",
  ResourceType: "resource-type",
} as const;

/**
 * @public
 */
export type GroupFilterName = (typeof GroupFilterName)[keyof typeof GroupFilterName];

/**
 * <p>A filter collection that you can use to restrict the results from a <code>List</code>
 *             operation to only those you want to include.</p>
 * @public
 */
export interface GroupFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  Name: GroupFilterName | undefined;

  /**
   * <p>One or more filter values. Allowed filter values vary by group filter name, and are
   *             case-sensitive.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListGroupsInput {
  /**
   * <p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to
   *             a <code>ListGroups</code> operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - Filter the results to include only those resource groups that have the specified
   *                     resource type in their <code>ResourceTypeFilter</code>. For example, <code>AWS::EC2::Instance</code> would
   *                     return any resource group with a <code>ResourceTypeFilter</code> that includes
   *                     <code>AWS::EC2::Instance</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>configuration-type</code> - Filter the results to include only those
   *                     groups that have the specified configuration types attached. The current
   *                     supported values are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ResourceGroups::ApplicationGroup</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::AppRegistry::Application</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::AppRegistry::ApplicationResourceGroups</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::CloudFormation::Stack</code>
   *                      </p>
   *                   </li>
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
   *                   <li>
   *                      <p>
   *                         <code>AWS::NetworkFirewall::RuleGroup</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: GroupFilter[] | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   * response. If you do not include this parameter, it defaults to a value that is specific to the
   * operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   * response element is present and has a value (is not null). Include that value as the
   * <code>NextToken</code> request parameter in the next call to the operation to get the next part
   * of the results. Note that the service might return fewer results than the maximum even when there
   * are more results available. You should check <code>NextToken</code> after every operation to
   * ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The unique identifiers for a resource group.</p>
 * @public
 */
export interface GroupIdentifier {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the resource group.</p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The description of the application group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The critical rank of the application group on a scale of 1 to 10, with a
   *             rank of 1 being the most critical, and a rank of 10 being least critical.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A name, email address or other identifier for the person or group
   *             who is considered as the owner of this group within your organization. </p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The name of the application group, which you can change at any time. </p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsOutput {
  /**
   * <p>A list of <a>GroupIdentifier</a> objects. Each identifier is an object that
   *             contains both the <code>Name</code> and the <code>GroupArn</code>.</p>
   * @public
   */
  GroupIdentifiers?: GroupIdentifier[] | undefined;

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
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns tag-sync tasks filtered by the Amazon resource name (ARN) or name of a
 *             specified application group. </p>
 * @public
 */
export interface ListTagSyncTasksFilter {
  /**
   * <p>The Amazon resource name (ARN) of the application group. </p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The name of the application group. </p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListTagSyncTasksInput {
  /**
   * <p>The Amazon resource name (ARN) or name of the application group for which you want to return a
   *             list of tag-sync tasks. </p>
   * @public
   */
  Filters?: ListTagSyncTasksFilter[] | undefined;

  /**
   * <p>The maximum number of results to be included in the response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *             <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *             response indicates that more output is available. Set this parameter to the
   *             value provided by a previous call's <code>NextToken</code> response to indicate
   *             where the output should continue from. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The Amazon resource name (ARN) of the tag-sync task. </p>
 * @public
 */
export interface TagSyncTaskItem {
  /**
   * <p>The Amazon resource name (ARN) of the application group. </p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The name of the application group. </p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the tag-sync task. </p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The tag key. </p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value. </p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the tag-sync task. </p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The tag-sync task is actively managing resources in
   *                     the application by adding or removing the <code>awsApplication</code> tag from resources
   *                     when they are tagged or untagged with the specified tag key-value pair.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The tag-sync task is not actively managing resources
   *                     in the application. Review the <code>ErrorMessage</code> for more information about
   *                     resolving the error.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TagSyncTaskStatus | undefined;

  /**
   * <p>The specific error message in cases where the tag-sync task status
   *             is <code>Error</code>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The timestamp of when the tag-sync task was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTagSyncTasksOutput {
  /**
   * <p>A list of tag-sync tasks and information about each task. </p>
   * @public
   */
  TagSyncTasks?: TagSyncTaskItem[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response.
   *             Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output.
   *             You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutGroupConfigurationInput {
  /**
   * <p>The name or Amazon resource name (ARN) of the resource group with the configuration that you want to
   *             update.</p>
   * @public
   */
  Group?: string | undefined;

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
   * @public
   */
  Configuration?: GroupConfigurationItem[] | undefined;
}

/**
 * @public
 */
export interface PutGroupConfigurationOutput {}

/**
 * @public
 */
export interface SearchResourcesInput {
  /**
   * <p>The search query, using the same formats that are supported for resource group
   *             definition. For more information, see <a>CreateGroup</a>.</p>
   * @public
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
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   * <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   * indicates that more output is available. Set this parameter to the value provided by a previous
   * call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchResourcesOutput {
  /**
   * <p>The ARNs and resource types of resources that are members of the group that you
   *             specified.</p>
   * @public
   */
  ResourceIdentifiers?: ResourceIdentifier[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   * included in the current response. Use this value in the <code>NextToken</code> request parameter
   * in a subsequent call to the operation to get the next part of the output. You should repeat this
   * until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error contains an
   *                 <code>ErrorCode</code> and <code>Message</code>.</p>
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
   *             <li>
   *                <p>
   *                   <code>CLOUDFORMATION_STACK_UNASSUMABLE_ROLE </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  QueryErrors?: QueryError[] | undefined;
}

/**
 * @public
 */
export interface StartTagSyncTaskInput {
  /**
   * <p>The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. </p>
   * @public
   */
  Group: string | undefined;

  /**
   * <p>The tag key. Resources tagged with this tag key-value pair will be added to
   *             the application. If a resource with this tag is later untagged, the tag-sync task removes
   *             the resource from the application. </p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The tag value. Resources tagged with this tag key-value pair will be added to
   *             the application. If a resource with this tag is later untagged, the tag-sync task removes
   *             the resource from the application. </p>
   * @public
   */
  TagValue: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartTagSyncTaskOutput {
  /**
   * <p>The Amazon resource name (ARN) of the application group for which you want to add or remove resources. </p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The name of the application group to onboard and sync resources.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the new tag-sync task. </p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The tag key of the tag-sync task. </p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value of the tag-sync task. </p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface TagInput {
  /**
   * <p>The Amazon resource name (ARN) of the resource group to which to add tags.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The tags to add to the specified resource group. A tag is a string-to-string map of
   *             key-value pairs.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagOutput {
  /**
   * <p>The Amazon resource name (ARN) of the tagged resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The tags that have been added to the specified resource group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UngroupResourcesInput {
  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group from which to remove the resources.</p>
   * @public
   */
  Group: string | undefined;

  /**
   * <p>The Amazon resource names (ARNs) of the resources to be removed from the group.</p>
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * @public
 */
export interface UngroupResourcesOutput {
  /**
   * <p>A list of resources that were successfully removed from the group by this
   *             operation.</p>
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * <p>A list of any resources that failed to be removed from the group by this
   *             operation.</p>
   * @public
   */
  Failed?: FailedResource[] | undefined;

  /**
   * <p>A list of any resources that are still in the process of being removed from the group
   *             by this operation. These pending removals continue asynchronously. You can check the
   *             status of pending removals by using the <code>
   *                <a>ListGroupResources</a>
   *             </code> operation. After the resource is successfully removed, it no longer
   *             appears in the response.</p>
   * @public
   */
  Pending?: PendingResource[] | undefined;
}

/**
 * @public
 */
export interface UntagInput {
  /**
   * <p>The Amazon resource name (ARN) of the resource group from which to remove tags. The command removed both the
   *             specified keys and any values associated with those keys.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  Keys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagOutput {
  /**
   * <p>The Amazon resource name (ARN) of the resource group from which tags have been removed.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The keys of the tags that were removed.</p>
   * @public
   */
  Keys?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * <p>Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off.</p>
   *          <p>You can't turn on group lifecycle events if your resource groups quota is greater than 2,000. </p>
   * @public
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * <p>A structure that displays the status of the optional features in the account.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface UpdateGroupInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the ARN of the resource group to update.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>The new description that you want to update the resource group with. Descriptions can
   *             contain letters, numbers, hyphens, underscores, periods, and spaces.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The critical rank of the application group on a scale of 1 to 10, with a
   *             rank of 1 being the most critical, and a rank of 10 being least critical.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A name, email address or other identifier for the person or group
   *             who is considered as the owner of this application group within your organization. </p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The name of the application group, which you can change at any time. </p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupOutput {
  /**
   * <p>The update description of the resource group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface UpdateGroupQueryInput {
  /**
   * @deprecated
   *
   * <p>Don't use this parameter. Use <code>Group</code> instead.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name or the Amazon resource name (ARN) of the resource group to query.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>The resource query to determine which Amazon Web Services resources are members of this resource
   *             group.</p>
   *          <note>
   *             <p>A resource group can contain either a <code>Configuration</code> or a
   *                     <code>ResourceQuery</code>, but not both.</p>
   *          </note>
   * @public
   */
  ResourceQuery: ResourceQuery | undefined;
}

/**
 * @public
 */
export interface UpdateGroupQueryOutput {
  /**
   * <p>The updated resource query associated with the resource group after the update.</p>
   * @public
   */
  GroupQuery?: GroupQuery | undefined;
}
