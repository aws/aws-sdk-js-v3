// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { AWSServiceAccessStatus, IndexState, IndexType, OperationStatus, RecorderType } from "./enums";

/**
 * @public
 */
export interface AssociateDefaultViewInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view to set as the default for the Amazon Web Services Region and Amazon Web Services account in which you call this operation. The specified view must already exist in the called Region.
   *
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDefaultViewOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that the operation set as the default for queries made in the Amazon Web Services Region and Amazon Web Services account in which you called this operation.
   *
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * A structure that describes a request field with a validation error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the request field that had a validation error.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The validation error caused by the request field.
   *
   * @public
   */
  ValidationIssue: string | undefined;
}

/**
 * @public
 */
export interface BatchGetViewInput {
  /**
   * A list of [Amazon resource names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) that identify the views you want details for.
   *
   * @public
   */
  ViewArns?: string[] | undefined;
}

/**
 * A collection of error messages for any views that Amazon Web Services Resource Explorer couldn't retrieve details.
 *
 * @public
 */
export interface BatchGetViewError {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view for which Resource Explorer failed to retrieve details.
   *
   * @public
   */
  ViewArn: string | undefined;

  /**
   * The description of the error for the specified view.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * A search filter defines which resources can be part of a search query result set.
 *
 * @public
 */
export interface SearchFilter {
  /**
   * The string that contains the search keywords, prefixes, and operators to control the results that can be returned by a Search operation. For more details, see [Search query syntax](https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html).
   *
   * @public
   */
  FilterString: string | undefined;
}

/**
 * Information about an additional property that describes a resource, that you can optionally include in the view. This lets you view that property in search results, and filter your search results based on the value of the property.
 *
 * @public
 */
export interface IncludedProperty {
  /**
   * The name of the property that is included in this view.
   *
   * You can specify the following property names for this field:
   *
   * - `tags`
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".
 *
 * @public
 */
export interface View {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view.
   *
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * The name of the view.
   *
   * @public
   */
  ViewName?: string | undefined;

  /**
   * The Amazon Web Services account that owns this view.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when this view was last modified.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * An [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services account, an organization, or an organizational unit (OU) that specifies whether this view includes resources from only the specified Amazon Web Services account, all accounts in the specified organization, or all accounts in the specified OU.
   *
   * If not specified, the value defaults to the Amazon Web Services account used to call this operation.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * A structure that contains additional information about the view.
   *
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * An array of SearchFilter objects that specify which resources can be included in the results of queries made using this view.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;
}

/**
 * @public
 */
export interface BatchGetViewOutput {
  /**
   * A structure with a list of objects with details for each of the specified views.
   *
   * @public
   */
  Views?: View[] | undefined;

  /**
   * If any of the specified ARNs result in an error, then this structure describes the error.
   *
   * @public
   */
  Errors?: BatchGetViewError[] | undefined;
}

/**
 * @public
 */
export interface CreateIndexInput {
  /**
   * This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a [UUID-type value](https://wikipedia.org/wiki/Universally_unique_identifier) to ensure the uniqueness of your index.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The specified tags are attached only to the index created in this Amazon Web Services Region. The tags aren't attached to any of the resources listed in the index.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIndexOutput {
  /**
   * The ARN of the new local index for the Region. You can reference this ARN in IAM permission policies to authorize the following operations: DeleteIndex | GetIndex | UpdateIndexType | CreateView
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates the current state of the index. You can check for changes to the state for asynchronous operations by calling the GetIndex operation.
   *
   * > **Note:** The state can remain in the `CREATING` or `UPDATING` state for several hours as Resource Explorer discovers the information about your resources and populates the index.
   *
   * @public
   */
  State?: IndexState | undefined;

  /**
   * The date and timestamp when the index was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIndexInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index that you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index that you successfully started the deletion process.
   *
   * > **Note:** This operation is asynchronous. To check its status, call the GetIndex operation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates the current state of the index.
   *
   * @public
   */
  State?: IndexState | undefined;

  /**
   * The date and time when you last updated this index.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListIndexesInput {
  /**
   * If specified, limits the output to only indexes of the specified Type, either `LOCAL` or `AGGREGATOR`.
   *
   * Use this option to discover the aggregator index for your account.
   *
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * If specified, limits the response to only information about the index in the specified list of Amazon Web Services Regions.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.
 *
 * By default, an index is *local*, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling UpdateIndexType to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.
 *
 * @public
 */
export interface Index {
  /**
   * The Amazon Web Services Region in which the index exists.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of index. It can be one of the following values:
   *
   * - `LOCAL` – The index contains information about resources from only the same Amazon Web Services Region.
   * - `AGGREGATOR` – Resource Explorer replicates copies of the indexed information about resources in all other Amazon Web Services Regions to the aggregator index. This lets search results in the Region with the aggregator index to include resources from all Regions in the account where Resource Explorer is turned on.
   *
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface ListIndexesOutput {
  /**
   * A structure that contains the details and status of each index.
   *
   * @public
   */
  Indexes?: Index[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIndexTypeInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index that you want to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of the index. To understand the difference between `LOCAL` and `AGGREGATOR`, see [Turning on cross-Region search](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html) in the *Amazon Web Services Resource Explorer User Guide*.
   *
   * @public
   */
  Type: IndexType | undefined;
}

/**
 * @public
 */
export interface UpdateIndexTypeOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index that you updated.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specifies the type of the specified index after the operation completes.
   *
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * Indicates the state of the request to update the index. This operation is asynchronous. Call the GetIndex operation to check for changes.
   *
   * @public
   */
  State?: IndexState | undefined;

  /**
   * The date and timestamp when the index was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateViewInput {
  /**
   * This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a [UUID-type value](https://wikipedia.org/wiki/Universally_unique_identifier) to ensure the uniqueness of your views.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the new view. This name appears in the list of views in Resource Explorer.
   *
   * The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its Amazon Web Services Region.
   *
   * @public
   */
  ViewName: string | undefined;

  /**
   * Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.
   *
   * The default is an empty list, with no optional fields included in the results.
   *
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * The root ARN of the account, an organizational unit (OU), or an organization ARN. If left empty, the default is account.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a Search operation, the filter string is combined with the search's `QueryString` parameter using a logical `AND` operator.
   *
   * For information about the supported syntax, see [Search query reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the *Amazon Web Services Resource Explorer User Guide*.
   *
   * > **Important:** This query string in the context of this operation supports only [filter prefixes](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters) with optional [operators](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators). It doesn't support free-form text. For example, the string `region:us* service:ec2 -tag:stage=prod` includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters `us` and is *not* tagged with a key `Stage` that has the value `prod`.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * Tag key and value pairs that are attached to the view.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateViewOutput {
  /**
   * A structure that contains the details about the new view.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DeleteViewInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that you want to delete.
   *
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteViewOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that you successfully deleted.
   *
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface GetViewInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that you want information about.
   *
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface GetViewOutput {
  /**
   * A structure that contains the details for the requested view.
   *
   * @public
   */
  View?: View | undefined;

  /**
   * Tag key and value pairs that are attached to the view.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListViewsInput {
  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListViewsOutput {
  /**
   * The list of views available in the Amazon Web Services Region in which you called this operation.
   *
   * @public
   */
  Views?: string[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that you want to modify.
   *
   * @public
   */
  ViewArn: string | undefined;

  /**
   * Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.
   *
   * The default is an empty list, with no optional fields included in the results.
   *
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a Search operation, the filter string is combined with the search's `QueryString` parameter using a logical `AND` operator.
   *
   * For information about the supported syntax, see [Search query reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the *Amazon Web Services Resource Explorer User Guide*.
   *
   * > **Important:** This query string in the context of this operation supports only [filter prefixes](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters) with optional [operators](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators). It doesn't support free-form text. For example, the string `region:us* service:ec2 -tag:stage=prod` includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters `us` and is *not* tagged with a key `Stage` that has the value `prod`.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;
}

/**
 * @public
 */
export interface UpdateViewOutput {
  /**
   * Details about the view that you changed with this operation.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateResourceExplorerSetupInput {
  /**
   * A list of Amazon Web Services Regions where Resource Explorer should be configured. Each Region in the list will have a user-owned index created.
   *
   * @public
   */
  RegionList: string[] | undefined;

  /**
   * A list of Amazon Web Services Regions that should be configured as aggregator Regions. Aggregator Regions receive replicated index information from all other Regions where there is a user-owned index.
   *
   * @public
   */
  AggregatorRegions?: string[] | undefined;

  /**
   * The name for the view to be created as part of the Resource Explorer setup. The view name must be unique within the Amazon Web Services account and Region.
   *
   * @public
   */
  ViewName: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceExplorerSetupOutput {
  /**
   * The unique identifier for the setup task. Use this ID with `GetResourceExplorerSetup` to monitor the progress of the configuration operation.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceExplorerSetupInput {
  /**
   * A list of Amazon Web Services Regions from which to delete the Resource Explorer configuration. If not specified, the operation uses the `DeleteInAllRegions` parameter to determine scope.
   *
   * @public
   */
  RegionList?: string[] | undefined;

  /**
   * Specifies whether to delete Resource Explorer configuration from all Regions where it is currently enabled. If this parameter is set to `true`, a value for `RegionList` must not be provided. Otherwise, the operation fails with a `ValidationException` error.
   *
   * @public
   */
  DeleteInAllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteResourceExplorerSetupOutput {
  /**
   * The unique identifier for the deletion task. Use this ID with `GetResourceExplorerSetup` to monitor the progress of the deletion operation.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * Contains information about an error that occurred during a Resource Explorer setup operation.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code that identifies the type of error that occurred.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable description of the error that occurred.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * This is a structure that contains the status of Amazon Web Services service access, and whether you have a valid service-linked role to enable multi-account search for your organization.
 *
 * @public
 */
export interface OrgConfiguration {
  /**
   * This value displays whether your Amazon Web Services service access is `ENABLED` or `DISABLED`.
   *
   * @public
   */
  AWSServiceAccessStatus: AWSServiceAccessStatus | undefined;

  /**
   * This value shows whether or not you have a valid a service-linked role required to start the multi-account search feature.
   *
   * @public
   */
  ServiceLinkedRole?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLevelServiceConfigurationOutput {
  /**
   * Details about the organization, and whether configuration is `ENABLED` or `DISABLED`.
   *
   * @public
   */
  OrgConfiguration?: OrgConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDefaultViewOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that is the current default for the Amazon Web Services Region in which you called this operation.
   *
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface GetIndexOutput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of the index in this Region. For information about the aggregator index and how it differs from a local index, see [Turning on cross-Region search by creating an aggregator index](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html).
   *
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * The current state of the index in this Amazon Web Services Region.
   *
   * @public
   */
  State?: IndexState | undefined;

  /**
   * This response value is present only if this index is `Type=AGGREGATOR`.
   *
   * A list of the Amazon Web Services Regions that replicate their content to the index in this Region.
   *
   * @public
   */
  ReplicatingFrom?: string[] | undefined;

  /**
   * This response value is present only if this index is `Type=LOCAL`.
   *
   * The Amazon Web Services Region that contains the aggregator index, if one exists. If an aggregator index does exist then the Region in which you called this operation replicates its index information to the Region specified in this response value.
   *
   * @public
   */
  ReplicatingTo?: string[] | undefined;

  /**
   * The date and time when the index was originally created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the index was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Tag key and value pairs that are attached to the index.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedViewInput {
  /**
   * The Amazon resource name (ARN) of the managed view.
   *
   * @public
   */
  ManagedViewArn: string | undefined;
}

/**
 * An Amazon Web Services-managed view is how other Amazon Web Services services can access resource information indexed by Resource Explorer for your Amazon Web Services account or organization with your consent. For more information, see [Managed views](https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html).
 *
 * @public
 */
export interface ManagedView {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed view.
   *
   * @public
   */
  ManagedViewArn?: string | undefined;

  /**
   * The name of the managed view.
   *
   * @public
   */
  ManagedViewName?: string | undefined;

  /**
   * The service principal of the Amazon Web Services service that created and manages the managed view.
   *
   * @public
   */
  TrustedService?: string | undefined;

  /**
   * The date and time when this managed view was last modified.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The Amazon Web Services account that owns this managed view.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * An [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services account or organization that specifies whether this managed view includes resources from only the specified Amazon Web Services account or all accounts in the specified organization.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * A structure that contains additional information about the managed view.
   *
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * A search filter defines which resources can be part of a search query result set.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * The resource policy that defines access to the managed view. To learn more about this policy, review [Managed views](https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html).
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * The version of the managed view.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedViewOutput {
  /**
   * Details about the specified managed view.
   *
   * @public
   */
  ManagedView?: ManagedView | undefined;
}

/**
 * @public
 */
export interface GetResourceExplorerSetupInput {
  /**
   * The unique identifier of the setup task to retrieve status information for. This ID is returned by `CreateResourceExplorerSetup` or `DeleteResourceExplorerSetup` operations.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The maximum number of Region status results to return in a single response. Valid values are between `1` and `100`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous `GetResourceExplorerSetup` response. Use this token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about the status of a Resource Explorer index operation in a specific Region.
 *
 * @public
 */
export interface IndexStatus {
  /**
   * The current status of the index operation. Valid values are `SUCCEEDED`, `FAILED`, `IN_PROGRESS`, or `SKIPPED`.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.
   *
   * By default, an index is *local*, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling UpdateIndexType to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.
   *
   * @public
   */
  Index?: Index | undefined;

  /**
   * Details about any error that occurred during the index operation.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * Contains information about the status of a Resource Explorer view operation in a specific Region.
 *
 * @public
 */
export interface ViewStatus {
  /**
   * The current status of the view operation. Valid values are `SUCCEEDED`, `FAILED`, `IN_PROGRESS`, or `SKIPPED`.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".
   *
   * @public
   */
  View?: View | undefined;

  /**
   * Details about any error that occurred during the view operation.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * Contains information about the status of Resource Explorer configuration in a specific Amazon Web Services Region.
 *
 * @public
 */
export interface RegionStatus {
  /**
   * The Amazon Web Services Region for which this status information applies.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The status information for the Resource Explorer index in this Region.
   *
   * @public
   */
  Index?: IndexStatus | undefined;

  /**
   * The status information for the Resource Explorer view in this Region.
   *
   * @public
   */
  View?: ViewStatus | undefined;
}

/**
 * @public
 */
export interface GetResourceExplorerSetupOutput {
  /**
   * A list of Region status objects that describe the current state of Resource Explorer configuration in each Region.
   *
   * @public
   */
  Regions?: RegionStatus[] | undefined;

  /**
   * The pagination token to use in a subsequent `GetResourceExplorerSetup` request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceIndexOutput {
  /**
   * The Amazon Resource Name (ARN) of the Resource Explorer index in the current Region.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of the index. Valid values are `LOCAL` (contains resources from the current Region only) or `AGGREGATOR` (contains replicated resource information from all Regions).
   *
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface GetServiceViewInput {
  /**
   * The Amazon Resource Name (ARN) of the service view to retrieve details for.
   *
   * @public
   */
  ServiceViewArn: string | undefined;
}

/**
 * Contains information about the service-linked recorder paired with a service view.
 *
 * @public
 */
export interface ServiceLinkedRecorderInfo {
  /**
   * The service principal of the Amazon Web Services service that owns the service-linked recorder, such as `observabilityadmin.amazonaws.com`.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The name of the service-linked recorder, such as `AWSConfigurationRecorderForObservabilityAdmin`.
   *
   * @public
   */
  RecorderName?: string | undefined;

  /**
   * The type of the recorder. Valid values are `AWS` and `THIRD_PARTY`.
   *
   * @public
   */
  RecorderType?: RecorderType | undefined;
}

/**
 * Contains the configuration and properties of a Resource Explorer service view.
 *
 * @public
 */
export interface ServiceView {
  /**
   * The Amazon Resource Name (ARN) of the service view.
   *
   * @public
   */
  ServiceViewArn: string | undefined;

  /**
   * The name of the service view.
   *
   * @public
   */
  ServiceViewName?: string | undefined;

  /**
   * A search filter defines which resources can be part of a search query result set.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * A list of additional resource properties that are included in this view for search and filtering purposes.
   *
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * The Amazon Web Services service that has streaming access to this view's data.
   *
   * @public
   */
  StreamingAccessForService?: string | undefined;

  /**
   * The scope type of the service view, which determines what resources are included.
   *
   * @public
   */
  ScopeType?: string | undefined;

  /**
   * Information about the service-linked recorder associated with this service view. When a service view is paired with a service-linked recorder, Resource Explorer uses the recorder's resource type list to filter search results and streaming data.
   *
   * @public
   */
  ServiceLinkedRecorder?: ServiceLinkedRecorderInfo | undefined;
}

/**
 * @public
 */
export interface GetServiceViewOutput {
  /**
   * A `ServiceView` object that contains the details and configuration of the requested service view.
   *
   * @public
   */
  View: ServiceView | undefined;
}

/**
 * @public
 */
export interface ListIndexesForMembersInput {
  /**
   * The account IDs will limit the output to only indexes from these accounts.
   *
   * @public
   */
  AccountIdList: string[] | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers.
 *
 * @public
 */
export interface MemberIndex {
  /**
   * The account ID for the index.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which the index exists.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the index.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of index. It can be one of the following values:
   *
   * - `LOCAL` – The index contains information about resources from only the same Amazon Web Services Region.
   * - `AGGREGATOR` – Resource Explorer replicates copies of the indexed information about resources in all other Amazon Web Services Regions to the aggregator index. This lets search results in the Region with the aggregator index to include resources from all Regions in the account where Resource Explorer is turned on.
   *
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface ListIndexesForMembersOutput {
  /**
   * A structure that contains the details and status of each index.
   *
   * @public
   */
  Indexes?: MemberIndex[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedViewsInput {
  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies a service principal name. If specified, then the operation only returns the managed views that are managed by the input service.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedViewsOutput {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of managed views available in the Amazon Web Services Region in which you called this operation.
   *
   * @public
   */
  ManagedViews?: string[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesInput {
  /**
   * An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a Search operation, the filter string is combined with the search's `QueryString` parameter using a logical `AND` operator.
   *
   * For information about the supported syntax, see [Search query reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the *Amazon Web Services Resource Explorer User Guide*.
   *
   * > **Important:** This query string in the context of this operation supports only [filter prefixes](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters) with optional [operators](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators). It doesn't support free-form text. For example, the string `region:us* service:ec2 -tag:stage=prod` includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters `us` and is *not* tagged with a key `Stage` that has the value `prod`.
   *
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies the Amazon resource name (ARN) of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a 401 Unauthorized exception.
   *
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * > **Note:** The `ListResources` operation does not generate a `NextToken` if you set `MaxResults` to 1000.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that describes a property of a resource.
 *
 * @public
 */
export interface ResourceProperty {
  /**
   * The name of this property of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time that the information about this resource property was last updated.
   *
   * @public
   */
  LastReportedAt?: Date | undefined;

  /**
   * Details about this property. The content of this field is a JSON object that varies based on the resource type.
   *
   * @public
   */
  Data?: __DocumentType | undefined;
}

/**
 * A resource in Amazon Web Services that Amazon Web Services Resource Explorer has discovered, and for which it has stored information in the index of the Amazon Web Services Region that contains the resource.
 *
 * @public
 */
export interface Resource {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account that owns the resource.
   *
   * @public
   */
  OwningAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region in which the resource was created and exists.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The Amazon Web Services service that owns the resource and is responsible for creating and updating it.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The CloudFormation resource type identifier for the resource, such as `AWS::EC2::Instance` or `AWS::S3::Bucket`.
   *
   * @public
   */
  CfnResourceType?: string | undefined;

  /**
   * The date and time that Resource Explorer last queried this resource and updated the index with the latest information about the resource.
   *
   * @public
   */
  LastReportedAt?: Date | undefined;

  /**
   * A structure with additional type-specific details about the resource. These properties can be added by turning on integration between Resource Explorer and other Amazon Web Services services.
   *
   * @public
   */
  Properties?: ResourceProperty[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesOutput {
  /**
   * The list of structures that describe the resources that match the query.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the view that this operation used to perform the search.
   *
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceIndexesInput {
  /**
   * A list of Amazon Web Services Regions to include in the search for indexes. If not specified, indexes from all Regions are returned.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * The maximum number of index results to return in a single response. Valid values are between `1` and `100`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous `ListServiceIndexes` response. Use this token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceIndexesOutput {
  /**
   * A list of `Index` objects that describe the Resource Explorer indexes found in the specified Regions.
   *
   * @public
   */
  Indexes?: Index[] | undefined;

  /**
   * The pagination token to use in a subsequent `ListServiceIndexes` request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceViewsInput {
  /**
   * The maximum number of service view results to return in a single response. Valid values are between `1` and `50`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous `ListServiceViews` response. Use this token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceViewsOutput {
  /**
   * The pagination token to use in a subsequent `ListServiceViews` request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) for the service views available in the current Amazon Web Services account.
   *
   * @public
   */
  ServiceViews?: string[] | undefined;
}

/**
 * @public
 */
export interface ListStreamingAccessForServicesInput {
  /**
   * The maximum number of streaming access entries to return in the response. If there are more results available, the response includes a NextToken value that you can use in a subsequent call to get the next set of results. The value must be between 1 and 50. If you don't specify a value, the default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about an Amazon Web Services service that has been granted streaming access to your Resource Explorer data.
 *
 * @public
 */
export interface StreamingAccessDetails {
  /**
   * The service principal of the Amazon Web Services service that has streaming access to your Resource Explorer data. A service principal is a unique identifier for an Amazon Web Services service.
   *
   * @public
   */
  ServicePrincipal: string | undefined;

  /**
   * The date and time when streaming access was granted to the Amazon Web Services service, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListStreamingAccessForServicesOutput {
  /**
   * A list of Amazon Web Services services that have streaming access to your Resource Explorer data, including details about when the access was granted.
   *
   * @public
   */
  StreamingAccessForServices: StreamingAccessDetails[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedResourceTypesInput {
  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure that describes a resource type supported by Amazon Web Services Resource Explorer.
 *
 * @public
 */
export interface SupportedResourceType {
  /**
   * The Amazon Web Services service that is associated with the resource type. This is the primary service that lets you create and interact with resources of this type.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The unique identifier of the resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The CloudFormation resource type identifiers for this resource type, such as `AWS::EC2::Instance`.
   *
   * @public
   */
  CFNResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSupportedResourceTypesOutput {
  /**
   * The list of resource types supported by Resource Explorer.
   *
   * @public
   */
  ResourceTypes?: SupportedResourceType[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view or index that you want to attach tags to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tag key and value pairs that you want to attach to the specified view or index.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Information about the number of results that match the query. At this time, Amazon Web Services Resource Explorer doesn't count more than 1,000 matches for any query. This structure provides information about whether the query exceeded this limit.
 *
 * This field is included in every page when you paginate the results.
 *
 * @public
 */
export interface ResourceCount {
  /**
   * The number of resources that match the search query. This value can't exceed 1,000. If there are more than 1,000 resources that match the query, then only 1,000 are counted and the `Complete` field is set to false. We recommend that you refine your query to return a smaller number of results.
   *
   * @public
   */
  TotalResources?: number | undefined;

  /**
   * Indicates whether the `TotalResources` value represents an exhaustive count of search results.
   *
   * - If `True`, it indicates that the search was exhaustive. Every resource that matches the query was counted.
   * - If `False`, then the search reached the limit of 1,000 matching results, and stopped counting.
   *
   * @public
   */
  Complete?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * A string that includes keywords and filters that specify the resources that you want to include in the results.
   *
   * For the complete syntax supported by the `QueryString` parameter, see [Search query syntax reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html).
   *
   * The search is completely case insensitive. You can specify an empty string to return all results up to the limit of 1,000 total results.
   *
   * > **Note:** The operation can return only the first 1,000 results. If the resource you want is not included, then use a different value for `QueryString` to refine the results.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies the [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a `401 Unauthorized` exception.
   *
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * The list of structures that describe the resources that match the query.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. The pagination tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the view that this operation used to perform the search.
   *
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * The number of resources that match the query.
   *
   * @public
   */
  Count?: ResourceCount | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the view or index that you want to attach tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag key and value pairs that you want to attach to the specified view or index.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the view or index that you want to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of the keys for the tags that you want to remove from the specified view or index.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
