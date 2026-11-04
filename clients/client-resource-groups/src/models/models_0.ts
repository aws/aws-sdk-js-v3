// smithy-typescript generated code
import type {
  GroupConfigurationStatus,
  GroupFilterName,
  GroupingStatus,
  GroupingType,
  GroupLifecycleEventsDesiredStatus,
  GroupLifecycleEventsStatus,
  ListGroupingStatusesFilterName,
  QueryErrorCode,
  QueryType,
  ResourceFilterName,
  ResourceStatusValue,
  TagSyncTaskStatus,
} from "./enums";

/**
 * The Resource Groups settings for this Amazon Web Services account.
 *
 * @public
 */
export interface AccountSettings {
  /**
   * The desired target status of the group lifecycle events feature. If
   *
   * @public
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | undefined;

  /**
   * The current status of the group lifecycle events feature.
   *
   * @public
   */
  GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus | undefined;

  /**
   * The text of any error message occurs during an attempt to turn group lifecycle events on or off.
   *
   * @public
   */
  GroupLifecycleEventsStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface CancelTagSyncTaskInput {
  /**
   * The Amazon resource name (ARN) of the tag-sync task.
   *
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * A parameter for a group configuration item. For details about group service configuration syntax, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
 *
 * @public
 */
export interface GroupConfigurationParameter {
  /**
   * The name of the group configuration parameter. For the list of parameters that you can use with each configuration item type, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value or values to be used for the specified parameter. For the list of values you can use with each parameter, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * An item in a group configuration. A group service configuration can have one or more items. For details about group service configuration syntax, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
 *
 * @public
 */
export interface GroupConfigurationItem {
  /**
   * Specifies the type of group configuration item. Each item must have a unique value for `type`. For the list of types that you can specify for a configuration item, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
   *
   * @public
   */
  Type: string | undefined;

  /**
   * A collection of parameters for this group configuration item. For the list of parameters that you can use with each configuration item type, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
   *
   * @public
   */
  Parameters?: GroupConfigurationParameter[] | undefined;
}

/**
 * The query you can use to define a resource group or a search for resources. A `ResourceQuery` specifies both a query `Type` and a `Query` string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see [Build queries and groups in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the *Resource Groups User Guide*
 *
 * When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete `ResourceQuery` parameter must be formatted like the following CLI parameter example:
 *
 * `--resource-query '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'`
 *
 * In the preceding example, all of the double quote characters in the value part of the `Query` element must be escaped because the value itself is surrounded by double quotes. For more information, see [Quoting strings](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html) in the *Command Line Interface User Guide*.
 *
 * For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*. For example:
 *
 * `"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]`
 *
 * @public
 */
export interface ResourceQuery {
  /**
   * The type of the query to perform. This can have one of two values:
   *
   * - *`CLOUDFORMATION_STACK_1_0:`* Specifies that you want the group to contain the members of an CloudFormation stack. The `Query` contains a `StackIdentifier` element with an Amazon resource name (ARN) for a CloudFormation stack.
   * - *`TAG_FILTERS_1_0:`* Specifies that you want the group to include resource that have tags that match the query.
   *
   * @public
   */
  Type: QueryType | undefined;

  /**
   * The query that defines a group or a search. The contents depends on the value of the `Type` element.
   *
   * - `ResourceTypeFilters` – Applies to all `ResourceQuery` objects of either `Type`. This element contains one of the following two items:
   *
   *   - The value `AWS::AllSupported`. This causes the ResourceQuery to match resources of any resource type that also match the query.
   *   - A list (a JSON array) of resource type identifiers that limit the query to only resources of the specified types. For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*.
   *
   *   Example: `"ResourceTypeFilters": ["AWS::AllSupported"]` or `"ResourceTypeFilters": ["AWS::EC2::Instance", "AWS::S3::Bucket"]`
   * - `TagFilters` – applicable only if `Type` = `TAG_FILTERS_1_0`. The `Query` contains a JSON string that represents a collection of simple tag filters. The JSON string uses a syntax similar to the `GetResources` operation, but uses only the `ResourceTypeFilters` and `TagFilters` fields. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches *any* of the specified values.
   *
   *   For example, consider the following sample query for resources that have two tags, `Stage` and `Version`, with two values each:
   *
   *   `[\{"Stage":["Test","Deploy"]\},\{"Version":["1","2"]\}]`
   *
   *   The results of this resource query could include the following.
   *
   *   - An Amazon EC2 instance that has the following two tags: `\{"Stage":"Deploy"\}`, and `\{"Version":"2"\}`
   *   - An S3 bucket that has the following two tags: `\{"Stage":"Test"\}`, and `\{"Version":"1"\}`
   *
   *   The resource query results would *not* include the following items in the results, however.
   *
   *   - An Amazon EC2 instance that has only the following tag: `\{"Stage":"Deploy"\}`.
   *
   *     The instance does not have **all** of the tag keys specified in the filter, so it is excluded from the results.
   *   - An RDS database that has the following two tags: `\{"Stage":"Archived"\}` and `\{"Version":"4"\}`
   *
   *     The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.
   *
   *   Example: `"TagFilters": [ \{ "Key": "Stage", "Values": [ "Gamma", "Beta" ] \}`
   * - `StackIdentifier` – applicable only if `Type` = `CLOUDFORMATION_STACK_1_0`. The value of this parameter is the Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included in the group.
   *
   * @public
   */
  Query: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupInput {
  /**
   * The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with `AWS`, `aws`, or any other possible capitalization; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource query that determines which Amazon Web Services resources are members of this group. For more information about resource queries, see [Create a tag-based group in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag).
   *
   * > **Note:** A resource group can contain either a `ResourceQuery` or a `Configuration`, but not both.
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The tags to add to the group. A tag is key-value pair string.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of GroupConfigurationItem elements. For details about the syntax of service configurations, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
   *
   * > **Note:** A resource group can contain either a `Configuration` or a `ResourceQuery`, but not both.
   *
   * @public
   */
  Configuration?: GroupConfigurationItem[] | undefined;

  /**
   * The critical rank of the application group on a scale of 1 to 10, with a rank of 1 being the most critical, and a rank of 10 being least critical.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A name, email address or other identifier for the person or group who is considered as the owner of this application group within your organization.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The name of the application group, which you can change at any time.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * A resource group that contains Amazon Web Services resources. You can assign resources to the group by associating either of the following elements with the group:
 *
 * - ResourceQuery - Use a resource query to specify a set of tag keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that have those keys with the same values are included in the group. You can add a resource query when you create the group, or later by using the PutGroupConfiguration operation.
 * - GroupConfiguration - Use a service configuration to associate the group with an Amazon Web Services service. The configuration specifies which resource types can be included in the group.
 *
 * @public
 */
export interface Group {
  /**
   * The Amazon resource name (ARN) of the resource group.
   *
   * @public
   */
  GroupArn: string | undefined;

  /**
   * The name of the resource group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the resource group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The critical rank of the application group on a scale of 1 to 10, with a rank of 1 being the most critical, and a rank of 10 being least critical.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A name, email address or other identifier for the person or group who is considered as the owner of this application group within your organization.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The name of the application group, which you can change at any time.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A tag that defines the application group membership. This tag is only supported for application groups.
   *
   * @public
   */
  ApplicationTag?: Record<string, string> | undefined;
}

/**
 * A service configuration associated with a resource group. The configuration options are determined by the Amazon Web Services service that defines the `Type`, and specifies which resources can be included in the group. You can add a service configuration when you create the group by using CreateGroup, or later by using the PutGroupConfiguration operation. For details about group service configuration syntax, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
 *
 * @public
 */
export interface GroupConfiguration {
  /**
   * The configuration currently associated with the group and in effect.
   *
   * @public
   */
  Configuration?: GroupConfigurationItem[] | undefined;

  /**
   * If present, the new configuration that is in the process of being applied to the group.
   *
   * @public
   */
  ProposedConfiguration?: GroupConfigurationItem[] | undefined;

  /**
   * The current status of an attempt to update the group configuration.
   *
   * @public
   */
  Status?: GroupConfigurationStatus | undefined;

  /**
   * If present, the reason why a request to update the group configuration failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupOutput {
  /**
   * The description of the resource group.
   *
   * @public
   */
  Group?: Group | undefined;

  /**
   * The resource query associated with the group. For more information about resource queries, see [Create a tag-based group in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag).
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The tags associated with the group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The service configuration associated with the resource group. For details about the syntax of a service configuration, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
   *
   * @public
   */
  GroupConfiguration?: GroupConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteGroupInput {
  /**
   * Deprecated - don't use this parameter. Use `Group` instead.
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the Amazon resource name (ARN) of the resource group to delete.
   *
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupOutput {
  /**
   * A full description of the deleted resource group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsOutput {
  /**
   * The current settings for the optional features in Resource Groups.
   *
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetGroupInput {
  /**
   * Deprecated - don't use this parameter. Use `Group` instead.
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the Amazon resource name (ARN) of the resource group to retrieve.
   *
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupOutput {
  /**
   * A structure that contains the metadata details for the specified resource group. Use GetGroupQuery and GetGroupConfiguration to get those additional details of the resource group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface GetGroupConfigurationInput {
  /**
   * The name or the Amazon resource name (ARN) of the resource group for which you want to retrive the service configuration.
   *
   * @public
   */
  Group?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupConfigurationOutput {
  /**
   * A structure that describes the service configuration attached with the specified group. For details about the service configuration syntax, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
   *
   * @public
   */
  GroupConfiguration?: GroupConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGroupQueryInput {
  /**
   * Don't use this parameter. Use `Group` instead.
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the Amazon resource name (ARN) of the resource group to query.
   *
   * @public
   */
  Group?: string | undefined;
}

/**
 * A mapping of a query attached to a resource group that determines the Amazon Web Services resources that are members of the group.
 *
 * @public
 */
export interface GroupQuery {
  /**
   * The name of the resource group that is associated with the specified resource query.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The resource query that determines which Amazon Web Services resources are members of the associated resource group.
   *
   * @public
   */
  ResourceQuery: ResourceQuery | undefined;
}

/**
 * @public
 */
export interface GetGroupQueryOutput {
  /**
   * The resource query associated with the specified group. For more information about resource queries, see [Create a tag-based group in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag).
   *
   * @public
   */
  GroupQuery?: GroupQuery | undefined;
}

/**
 * @public
 */
export interface GetTagsInput {
  /**
   * The Amazon resource name (ARN) of the resource group whose tags you want to retrieve.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsOutput {
  /**
   * TheAmazon resource name (ARN) of the tagged resource group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags associated with the specified resource group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTagSyncTaskInput {
  /**
   * The Amazon resource name (ARN) of the tag-sync task.
   *
   * @public
   */
  TaskArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagSyncTaskOutput {
  /**
   * The Amazon resource name (ARN) of the application group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The name of the application group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the tag-sync task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The tag key.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The query you can use to define a resource group or a search for resources. A `ResourceQuery` specifies both a query `Type` and a `Query` string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see [Build queries and groups in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the *Resource Groups User Guide*
   *
   * When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete `ResourceQuery` parameter must be formatted like the following CLI parameter example:
   *
   * `--resource-query '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'`
   *
   * In the preceding example, all of the double quote characters in the value part of the `Query` element must be escaped because the value itself is surrounded by double quotes. For more information, see [Quoting strings](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html) in the *Command Line Interface User Guide*.
   *
   * For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*. For example:
   *
   * `"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]`
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The Amazon resource name (ARN) of the role assumed by Resource Groups to tag and untag resources on your behalf.
   *
   * For more information about this role, review [Tag-sync required permissions](https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#tag-sync-role).
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the tag-sync task.
   *
   * Valid values include:
   *
   * - `ACTIVE` - The tag-sync task is actively managing resources in the application by adding or removing the `awsApplication` tag from resources when they are tagged or untagged with the specified tag key-value pair.
   * - `ERROR` - The tag-sync task is not actively managing resources in the application. Review the `ErrorMessage` for more information about resolving the error.
   *
   * @public
   */
  Status?: TagSyncTaskStatus | undefined;

  /**
   * The specific error message in cases where the tag-sync task status is `ERROR`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of when the tag-sync task was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GroupResourcesInput {
  /**
   * The name or the Amazon resource name (ARN) of the resource group to add resources to.
   *
   * @public
   */
  Group: string | undefined;

  /**
   * The list of Amazon resource names (ARNs) of the resources to be added to the group.
   *
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * A resource that failed to be added to or removed from a group.
 *
 * @public
 */
export interface FailedResource {
  /**
   * The Amazon resource name (ARN) of the resource that failed to be added or removed.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The error message text associated with the failure.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error code associated with the failure.
   *
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * A structure that identifies a resource that is currently pending addition to the group as a member. Adding a resource to a resource group happens asynchronously as a background task and this one isn't completed yet.
 *
 * @public
 */
export interface PendingResource {
  /**
   * The Amazon resource name (ARN) of the resource that's in a pending state.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GroupResourcesOutput {
  /**
   * A list of Amazon resource names (ARNs) of the resources that this operation successfully added to the group.
   *
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * A list of Amazon resource names (ARNs) of any resources that this operation failed to add to the group.
   *
   * @public
   */
  Failed?: FailedResource[] | undefined;

  /**
   * A list of Amazon resource names (ARNs) of any resources that this operation is still in the process adding to the group. These pending additions continue asynchronously. You can check the status of pending additions by using the `ListGroupResources` operation, and checking the `Resources` array in the response and the `Status` field of each object in that array.
   *
   * @public
   */
  Pending?: PendingResource[] | undefined;
}

/**
 * A filter name and value pair that is used to obtain more specific results from the list of grouping statuses.
 *
 * @public
 */
export interface ListGroupingStatusesFilter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name: ListGroupingStatusesFilterName | undefined;

  /**
   * One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListGroupingStatusesInput {
  /**
   * The application group identifier, expressed as an Amazon resource name (ARN) or the application group name.
   *
   * @public
   */
  Group: string | undefined;

  /**
   * The maximum number of resources and their statuses returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter name and value pair that is used to return more specific results from a list of resources.
   *
   * @public
   */
  Filters?: ListGroupingStatusesFilter[] | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value provided by a previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information about a grouping or ungrouping resource action.
 *
 * @public
 */
export interface GroupingStatusesItem {
  /**
   * The Amazon resource name (ARN) of a resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Describes the resource grouping action with values of `GROUP` or `UNGROUP`.
   *
   * @public
   */
  Action?: GroupingType | undefined;

  /**
   * Describes the resource grouping status with values of `SUCCESS`, `FAILED`, `IN_PROGRESS`, or `SKIPPED`.
   *
   * @public
   */
  Status?: GroupingStatus | undefined;

  /**
   * A message that explains the `ErrorCode`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Specifies the error code that was raised.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A timestamp of when the status was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGroupingStatusesOutput {
  /**
   * The application group identifier, expressed as an Amazon resource name (ARN) or the application group name.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * Returns details about the grouping or ungrouping status of the resources in the specified application group.
   *
   * @public
   */
  GroupingStatuses?: GroupingStatusesItem[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter name and value pair that is used to obtain more specific results from a list of resources.
 *
 * @public
 */
export interface ResourceFilter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name: ResourceFilterName | undefined;

  /**
   * One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesInput {
  /**
   * > **Important:** ***Deprecated - don't use this parameter. Use the `Group` request field instead.***
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the Amazon resource name (ARN) of the resource group.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * Filters, formatted as ResourceFilter objects, that you want to apply to a `ListGroupResources` operation. Filters the results to include only those of the specified resource types.
   *
   * - `resource-type` - Filter resources by their type. Specify up to five resource types in the format `AWS::ServiceCode::ResourceType`. For example, `AWS::EC2::Instance`, or `AWS::S3::Bucket`.
   *
   * When you specify a `resource-type` filter for `ListGroupResources`, Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your `resource-type` filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a `ListGroupResources` request returns a `BadRequestException` error with a message similar to the following:
   *
   * `The resource types specified as filters in the request are not valid.`
   *
   * The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies `AWS::AllSupported`, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or Amazon CloudFront stack-based queries).
   *
   * @public
   */
  Filters?: ResourceFilter[] | undefined;

  /**
   * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value provided by a previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A two-part error structure that can occur in `ListGroupResources` or `SearchResources`.
 *
 * @public
 */
export interface QueryError {
  /**
   * Specifies the error code that was raised.
   *
   * @public
   */
  ErrorCode?: QueryErrorCode | undefined;

  /**
   * A message that explains the `ErrorCode`.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A structure that contains the ARN of a resource and its resource type.
 *
 * @public
 */
export interface ResourceIdentifier {
  /**
   * The Amazon resource name (ARN) of a resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource type of a resource, such as `AWS::EC2::Instance`.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * A structure that identifies the current group membership status for a resource. Adding a resource to a resource group is performed asynchronously as a background task. A `PENDING` status indicates, for this resource, that the process isn't completed yet.
 *
 * @public
 */
export interface ResourceStatus {
  /**
   * The current status.
   *
   * @public
   */
  Name?: ResourceStatusValue | undefined;
}

/**
 * A structure returned by the ListGroupResources operation that contains identity and group membership status information for one of the resources in the group.
 *
 * @public
 */
export interface ListGroupResourcesItem {
  /**
   * A structure that contains the ARN of a resource and its resource type.
   *
   * @public
   */
  Identifier?: ResourceIdentifier | undefined;

  /**
   * A structure that contains the status of this resource's membership in the group.
   *
   * > **Note:** This field is present in the response only if the group is of type `AWS::EC2::HostManagement`.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesOutput {
  /**
   * An array of resources from which you can determine each resource's identity, type, and group membership status.
   *
   * @public
   */
  Resources?: ListGroupResourcesItem[] | undefined;

  /**
   * > **Important:** ***Deprecated - don't use this parameter. Use the `Resources` response field instead.***
   *
   * @deprecated This field is deprecated, use Resources instead.
   * @public
   */
  ResourceIdentifiers?: ResourceIdentifier[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of `QueryError` objects. Each error contains an `ErrorCode` and `Message`. Possible values for ErrorCode are `CLOUDFORMATION_STACK_INACTIVE`, `CLOUDFORMATION_STACK_NOT_EXISTING`, `CLOUDFORMATION_STACK_UNASSUMABLE_ROLE` and `RESOURCE_TYPE_NOT_SUPPORTED`.
   *
   * @public
   */
  QueryErrors?: QueryError[] | undefined;
}

/**
 * A filter collection that you can use to restrict the results from a `List` operation to only those you want to include.
 *
 * @public
 */
export interface GroupFilter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name: GroupFilterName | undefined;

  /**
   * One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListGroupsInput {
  /**
   * Filters, formatted as GroupFilter objects, that you want to apply to a `ListGroups` operation.
   *
   * - `resource-type` - Filter the results to include only those resource groups that have the specified resource type in their `ResourceTypeFilter`. For example, `AWS::EC2::Instance` would return any resource group with a `ResourceTypeFilter` that includes `AWS::EC2::Instance`.
   * - `configuration-type` - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:
   *
   *   - `AWS::ResourceGroups::ApplicationGroup`
   *   - `AWS::AppRegistry::Application`
   *   - `AWS::AppRegistry::ApplicationResourceGroup`
   *   - `AWS::CloudFormation::Stack`
   *   - `AWS::EC2::CapacityReservationPool`
   *   - `AWS::EC2::HostManagement`
   *   - `AWS::NetworkFirewall::RuleGroup`
   *
   * @public
   */
  Filters?: GroupFilter[] | undefined;

  /**
   * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value provided by a previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The unique identifiers for a resource group.
 *
 * @public
 */
export interface GroupIdentifier {
  /**
   * The name of the resource group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the resource group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The description of the application group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The critical rank of the application group on a scale of 1 to 10, with a rank of 1 being the most critical, and a rank of 10 being least critical.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A name, email address or other identifier for the person or group who is considered as the owner of this group within your organization.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The name of the application group, which you can change at any time.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsOutput {
  /**
   * A list of GroupIdentifier objects. Each identifier is an object that contains both the `Name` and the `GroupArn`.
   *
   * @public
   */
  GroupIdentifiers?: GroupIdentifier[] | undefined;

  /**
   * > **Important:** ***Deprecated - don't use this field. Use the `GroupIdentifiers` response field instead.***
   *
   * @deprecated This field is deprecated, use GroupIdentifiers instead.
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns tag-sync tasks filtered by the Amazon resource name (ARN) or name of a specified application group.
 *
 * @public
 */
export interface ListTagSyncTasksFilter {
  /**
   * The Amazon resource name (ARN) of the application group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The name of the application group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListTagSyncTasksInput {
  /**
   * The Amazon resource name (ARN) or name of the application group for which you want to return a list of tag-sync tasks.
   *
   * @public
   */
  Filters?: ListTagSyncTasksFilter[] | undefined;

  /**
   * The maximum number of results to be included in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value provided by a previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The Amazon resource name (ARN) of the tag-sync task.
 *
 * @public
 */
export interface TagSyncTaskItem {
  /**
   * The Amazon resource name (ARN) of the application group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The name of the application group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the tag-sync task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The tag key.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The query you can use to define a resource group or a search for resources. A `ResourceQuery` specifies both a query `Type` and a `Query` string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see [Build queries and groups in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the *Resource Groups User Guide*
   *
   * When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete `ResourceQuery` parameter must be formatted like the following CLI parameter example:
   *
   * `--resource-query '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'`
   *
   * In the preceding example, all of the double quote characters in the value part of the `Query` element must be escaped because the value itself is surrounded by double quotes. For more information, see [Quoting strings](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html) in the *Command Line Interface User Guide*.
   *
   * For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*. For example:
   *
   * `"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]`
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the tag-sync task.
   *
   * Valid values include:
   *
   * - `ACTIVE` - The tag-sync task is actively managing resources in the application by adding or removing the `awsApplication` tag from resources when they are tagged or untagged with the specified tag key-value pair.
   * - `ERROR` - The tag-sync task is not actively managing resources in the application. Review the `ErrorMessage` for more information about resolving the error.
   *
   * @public
   */
  Status?: TagSyncTaskStatus | undefined;

  /**
   * The specific error message in cases where the tag-sync task status is `Error`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The timestamp of when the tag-sync task was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTagSyncTasksOutput {
  /**
   * A list of tag-sync tasks and information about each task.
   *
   * @public
   */
  TagSyncTasks?: TagSyncTaskItem[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutGroupConfigurationInput {
  /**
   * The name or Amazon resource name (ARN) of the resource group with the configuration that you want to update.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The new configuration to associate with the specified group. A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of GroupConfigurationItem elements.
   *
   * For information about the syntax of a service configuration, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
   *
   * > **Note:** A resource group can contain either a `Configuration` or a `ResourceQuery`, but not both.
   *
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
   * The search query, using the same formats that are supported for resource group definition. For more information, see CreateGroup.
   *
   * @public
   */
  ResourceQuery: ResourceQuery | undefined;

  /**
   * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value provided by a previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchResourcesOutput {
  /**
   * The ARNs and resource types of resources that are members of the group that you specified.
   *
   * @public
   */
  ResourceIdentifiers?: ResourceIdentifier[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of `QueryError` objects. Each error contains an `ErrorCode` and `Message`.
   *
   * Possible values for `ErrorCode`:
   *
   * - `CLOUDFORMATION_STACK_INACTIVE`
   * - `CLOUDFORMATION_STACK_NOT_EXISTING`
   * - `CLOUDFORMATION_STACK_UNASSUMABLE_ROLE`
   *
   * @public
   */
  QueryErrors?: QueryError[] | undefined;
}

/**
 * @public
 */
export interface StartTagSyncTaskInput {
  /**
   * The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.
   *
   * @public
   */
  Group: string | undefined;

  /**
   * The tag key. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
   *
   * When using the `TagKey` parameter, you must also specify the `TagValue` parameter. If you specify a tag key-value pair, you can't use the `ResourceQuery` parameter.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
   *
   * When using the `TagValue` parameter, you must also specify the `TagKey` parameter. If you specify a tag key-value pair, you can't use the `ResourceQuery` parameter.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The query you can use to create the tag-sync task. With this method, all resources matching the query are added to the specified application group. A `ResourceQuery` specifies both a query `Type` and a `Query` string as JSON string objects. For more information on defining a resource query for a tag-sync task, see the tag-based query type in [Types of resource group queries](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#getting_started-query_types) in *Resource Groups User Guide*.
   *
   * When using the `ResourceQuery` parameter, you cannot use the `TagKey` and `TagValue` parameters.
   *
   * When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete `ResourceQuery` parameter must be formatted like the following CLI parameter example:
   *
   * `--resource-query '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'`
   *
   * In the preceding example, all of the double quote characters in the value part of the `Query` element must be escaped because the value itself is surrounded by double quotes. For more information, see [Quoting strings](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html) in the *Command Line Interface User Guide*.
   *
   * For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*. For example:
   *
   * `"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]`
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartTagSyncTaskOutput {
  /**
   * The Amazon resource name (ARN) of the application group for which you want to add or remove resources.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The name of the application group to onboard and sync resources.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the new tag-sync task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The tag key of the tag-sync task.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value of the tag-sync task.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The query you can use to define a resource group or a search for resources. A `ResourceQuery` specifies both a query `Type` and a `Query` string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see [Build queries and groups in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the *Resource Groups User Guide*
   *
   * When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete `ResourceQuery` parameter must be formatted like the following CLI parameter example:
   *
   * `--resource-query '\{"Type":"TAG_FILTERS_1_0","Query":"\{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[\{\"Key\":\"Stage\",\"Values\":[\"Test\"]\}]\}"\}'`
   *
   * In the preceding example, all of the double quote characters in the value part of the `Query` element must be escaped because the value itself is surrounded by double quotes. For more information, see [Quoting strings](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html) in the *Command Line Interface User Guide*.
   *
   * For the complete list of resource types that you can use in the array value for `ResourceTypeFilters`, see [Resources you can use with Resource Groups and Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) in the *Resource Groups User Guide*. For example:
   *
   * `"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]`
   *
   * @public
   */
  ResourceQuery?: ResourceQuery | undefined;

  /**
   * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface TagInput {
  /**
   * The Amazon resource name (ARN) of the resource group to which to add tags.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagOutput {
  /**
   * The Amazon resource name (ARN) of the tagged resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags that have been added to the specified resource group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UngroupResourcesInput {
  /**
   * The name or the Amazon resource name (ARN) of the resource group from which to remove the resources.
   *
   * @public
   */
  Group: string | undefined;

  /**
   * The Amazon resource names (ARNs) of the resources to be removed from the group.
   *
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * @public
 */
export interface UngroupResourcesOutput {
  /**
   * A list of resources that were successfully removed from the group by this operation.
   *
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * A list of any resources that failed to be removed from the group by this operation.
   *
   * @public
   */
  Failed?: FailedResource[] | undefined;

  /**
   * A list of any resources that are still in the process of being removed from the group by this operation. These pending removals continue asynchronously. You can check the status of pending removals by using the `ListGroupResources` operation. After the resource is successfully removed, it no longer appears in the response.
   *
   * @public
   */
  Pending?: PendingResource[] | undefined;
}

/**
 * @public
 */
export interface UntagInput {
  /**
   * The Amazon resource name (ARN) of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  Keys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagOutput {
  /**
   * The Amazon resource name (ARN) of the resource group from which tags have been removed.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The keys of the tags that were removed.
   *
   * @public
   */
  Keys?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * Specifies whether you want to turn [group lifecycle events](https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html) on or off.
   *
   * You can't turn on group lifecycle events if your resource groups quota is greater than 2,000.
   *
   * @public
   */
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * A structure that displays the status of the optional features in the account.
   *
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface UpdateGroupInput {
  /**
   * Don't use this parameter. Use `Group` instead.
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the ARN of the resource group to update.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The critical rank of the application group on a scale of 1 to 10, with a rank of 1 being the most critical, and a rank of 10 being least critical.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A name, email address or other identifier for the person or group who is considered as the owner of this application group within your organization.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The name of the application group, which you can change at any time.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupOutput {
  /**
   * The update description of the resource group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface UpdateGroupQueryInput {
  /**
   * Don't use this parameter. Use `Group` instead.
   *
   * @deprecated This field is deprecated, use Group instead.
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name or the Amazon resource name (ARN) of the resource group to query.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The resource query to determine which Amazon Web Services resources are members of this resource group.
   *
   * > **Note:** A resource group can contain either a `Configuration` or a `ResourceQuery`, but not both.
   *
   * @public
   */
  ResourceQuery: ResourceQuery | undefined;
}

/**
 * @public
 */
export interface UpdateGroupQueryOutput {
  /**
   * The updated resource query associated with the resource group after the update.
   *
   * @public
   */
  GroupQuery?: GroupQuery | undefined;
}
