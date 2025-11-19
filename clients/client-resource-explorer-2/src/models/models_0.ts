// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

/**
 * @public
 */
export interface AssociateDefaultViewInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to set as the default for the Amazon Web Services Region and Amazon Web Services account in which you call this operation. The specified view must already exist in the called Region.</p>
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDefaultViewOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that the operation set as the default for queries made in the Amazon Web Services Region and Amazon Web Services account in which you called this operation.</p>
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * <p>A structure that describes a request field with a validation error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the request field that had a validation error.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The validation error caused by the request field.</p>
   * @public
   */
  ValidationIssue: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AWSServiceAccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AWSServiceAccessStatus = (typeof AWSServiceAccessStatus)[keyof typeof AWSServiceAccessStatus];

/**
 * @public
 */
export interface BatchGetViewInput {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> that identify the views you want details for.</p>
   * @public
   */
  ViewArns?: string[] | undefined;
}

/**
 * <p>A collection of error messages for any views that Amazon Web Services Resource Explorer couldn't retrieve details.</p>
 * @public
 */
export interface BatchGetViewError {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view for which Resource Explorer failed to retrieve details.</p>
   * @public
   */
  ViewArn: string | undefined;

  /**
   * <p>The description of the error for the specified view.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * <p>A search filter defines which resources can be part of a search query result set.</p>
 * @public
 */
export interface SearchFilter {
  /**
   * <p>The string that contains the search keywords, prefixes, and operators to control the results that can be returned by a <a>Search</a> operation. For more details, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax</a>.</p>
   * @public
   */
  FilterString: string | undefined;
}

/**
 * <p>Information about an additional property that describes a resource, that you can optionally include in the view. This lets you view that property in search results, and filter your search results based on the value of the property.</p>
 * @public
 */
export interface IncludedProperty {
  /**
   * <p>The name of the property that is included in this view.</p> <p>You can specify the following property names for this field:</p> <ul> <li> <p> <code>tags</code> </p> </li> </ul>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".</p>
 * @public
 */
export interface View {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view.</p>
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns this view.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when this view was last modified.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of an Amazon Web Services account, an organization, or an organizational unit (OU) that specifies whether this view includes resources from only the specified Amazon Web Services account, all accounts in the specified organization, or all accounts in the specified OU.</p> <p>If not specified, the value defaults to the Amazon Web Services account used to call this operation.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>A structure that contains additional information about the view.</p>
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * <p>An array of <a>SearchFilter</a> objects that specify which resources can be included in the results of queries made using this view.</p>
   * @public
   */
  Filters?: SearchFilter | undefined;
}

/**
 * @public
 */
export interface BatchGetViewOutput {
  /**
   * <p>A structure with a list of objects with details for each of the specified views.</p>
   * @public
   */
  Views?: View[] | undefined;

  /**
   * <p>If any of the specified ARNs result in an error, then this structure describes the error.</p>
   * @public
   */
  Errors?: BatchGetViewError[] | undefined;
}

/**
 * @public
 */
export interface CreateIndexInput {
  /**
   * <p>This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your index.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The specified tags are attached only to the index created in this Amazon Web Services Region. The tags aren't attached to any of the resources listed in the index.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexState = {
  /**
   * Index is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Explorer is creating the index.
   */
  CREATING: "CREATING",
  /**
   * Resource Explorer successfully deleted the index.
   */
  DELETED: "DELETED",
  /**
   * Resource Explorer is deleting the index.
   */
  DELETING: "DELETING",
  /**
   * Resource Explorer is switching the index type between local and aggregator.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type IndexState = (typeof IndexState)[keyof typeof IndexState];

/**
 * @public
 */
export interface CreateIndexOutput {
  /**
   * <p>The ARN of the new local index for the Region. You can reference this ARN in IAM permission policies to authorize the following operations: <a>DeleteIndex</a> | <a>GetIndex</a> | <a>UpdateIndexType</a> | <a>CreateView</a> </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates the current state of the index. You can check for changes to the state for asynchronous operations by calling the <a>GetIndex</a> operation.</p> <note> <p>The state can remain in the <code>CREATING</code> or <code>UPDATING</code> state for several hours as Resource Explorer discovers the information about your resources and populates the index.</p> </note>
   * @public
   */
  State?: IndexState | undefined;

  /**
   * <p>The date and timestamp when the index was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIndexInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you successfully started the deletion process.</p> <note> <p>This operation is asynchronous. To check its status, call the <a>GetIndex</a> operation.</p> </note>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates the current state of the index. </p>
   * @public
   */
  State?: IndexState | undefined;

  /**
   * <p>The date and time when you last updated this index.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexType = {
  /**
   * aggregator index
   */
  AGGREGATOR: "AGGREGATOR",
  /**
   * local index
   */
  LOCAL: "LOCAL",
} as const;

/**
 * @public
 */
export type IndexType = (typeof IndexType)[keyof typeof IndexType];

/**
 * @public
 */
export interface ListIndexesInput {
  /**
   * <p>If specified, limits the output to only indexes of the specified Type, either <code>LOCAL</code> or <code>AGGREGATOR</code>.</p> <p>Use this option to discover the aggregator index for your account.</p>
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * <p>If specified, limits the response to only information about the index in the specified list of Amazon Web Services Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.</p> <p>By default, an index is <i>local</i>, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling <a>UpdateIndexType</a> to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.</p>
 * @public
 */
export interface Index {
  /**
   * <p>The Amazon Web Services Region in which the index exists.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of index. It can be one of the following values:</p> <ul> <li> <p> <code>LOCAL</code> – The index contains information about resources from only the same Amazon Web Services Region.</p> </li> <li> <p> <code>AGGREGATOR</code> – Resource Explorer replicates copies of the indexed information about resources in all other Amazon Web Services Regions to the aggregator index. This lets search results in the Region with the aggregator index to include resources from all Regions in the account where Resource Explorer is turned on.</p> </li> </ul>
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface ListIndexesOutput {
  /**
   * <p>A structure that contains the details and status of each index.</p>
   * @public
   */
  Indexes?: Index[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIndexTypeInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The type of the index. To understand the difference between <code>LOCAL</code> and <code>AGGREGATOR</code>, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
   * @public
   */
  Type: IndexType | undefined;
}

/**
 * @public
 */
export interface UpdateIndexTypeOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you updated.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Specifies the type of the specified index after the operation completes.</p>
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * <p>Indicates the state of the request to update the index. This operation is asynchronous. Call the <a>GetIndex</a> operation to check for changes.</p>
   * @public
   */
  State?: IndexState | undefined;

  /**
   * <p>The date and timestamp when the index was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateViewInput {
  /**
   * <p>This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the new view. This name appears in the list of views in Resource Explorer.</p> <p>The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its Amazon Web Services Region.</p>
   * @public
   */
  ViewName: string | undefined;

  /**
   * <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p>
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * <p>The root ARN of the account, an organizational unit (OU), or an organization ARN. If left empty, the default is account.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a <a>Search</a> operation, the filter string is combined with the search's <code>QueryString</code> parameter using a logical <code>AND</code> operator.</p> <p>For information about the supported syntax, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query reference for Resource Explorer</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <important> <p>This query string in the context of this operation supports only <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters">filter prefixes</a> with optional <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators">operators</a>. It doesn't support free-form text. For example, the string <code>region:us* service:ec2 -tag:stage=prod</code> includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters <code>us</code> and is <i>not</i> tagged with a key <code>Stage</code> that has the value <code>prod</code>.</p> </important>
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * <p>Tag key and value pairs that are attached to the view.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateViewOutput {
  /**
   * <p>A structure that contains the details about the new view.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DeleteViewInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to delete.</p>
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteViewOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you successfully deleted.</p>
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface GetViewInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want information about.</p>
   * @public
   */
  ViewArn: string | undefined;
}

/**
 * @public
 */
export interface GetViewOutput {
  /**
   * <p>A structure that contains the details for the requested view.</p>
   * @public
   */
  View?: View | undefined;

  /**
   * <p>Tag key and value pairs that are attached to the view.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListViewsInput {
  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListViewsOutput {
  /**
   * <p>The list of views available in the Amazon Web Services Region in which you called this operation.</p>
   * @public
   */
  Views?: string[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to modify.</p>
   * @public
   */
  ViewArn: string | undefined;

  /**
   * <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p>
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * <p>An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a <a>Search</a> operation, the filter string is combined with the search's <code>QueryString</code> parameter using a logical <code>AND</code> operator.</p> <p>For information about the supported syntax, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query reference for Resource Explorer</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <important> <p>This query string in the context of this operation supports only <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters">filter prefixes</a> with optional <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators">operators</a>. It doesn't support free-form text. For example, the string <code>region:us* service:ec2 -tag:stage=prod</code> includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters <code>us</code> and is <i>not</i> tagged with a key <code>Stage</code> that has the value <code>prod</code>.</p> </important>
   * @public
   */
  Filters?: SearchFilter | undefined;
}

/**
 * @public
 */
export interface UpdateViewOutput {
  /**
   * <p>Details about the view that you changed with this operation.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateResourceExplorerSetupInput {
  /**
   * <p>A list of Amazon Web Services Regions where Resource Explorer should be configured. Each Region in the list will have a user-owned index created.</p>
   * @public
   */
  RegionList: string[] | undefined;

  /**
   * <p>A list of Amazon Web Services Regions that should be configured as aggregator Regions. Aggregator Regions receive replicated index information from all other Regions where there is a user-owned index.</p>
   * @public
   */
  AggregatorRegions?: string[] | undefined;

  /**
   * <p>The name for the view to be created as part of the Resource Explorer setup. The view name must be unique within the Amazon Web Services account and Region.</p>
   * @public
   */
  ViewName: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceExplorerSetupOutput {
  /**
   * <p>The unique identifier for the setup task. Use this ID with <code>GetResourceExplorerSetup</code> to monitor the progress of the configuration operation.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceExplorerSetupInput {
  /**
   * <p>A list of Amazon Web Services Regions from which to delete the Resource Explorer configuration. If not specified, the operation uses the <code>DeleteInAllRegions</code> parameter to determine scope.</p>
   * @public
   */
  RegionList?: string[] | undefined;

  /**
   * <p>Specifies whether to delete Resource Explorer configuration from all Regions where it is currently enabled. If this parameter is set to <code>true</code>, a value for <code>RegionList</code> must not be provided. Otherwise, the operation fails with a <code>ValidationException</code> error.</p>
   * @public
   */
  DeleteInAllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteResourceExplorerSetupOutput {
  /**
   * <p>The unique identifier for the deletion task. Use this ID with <code>GetResourceExplorerSetup</code> to monitor the progress of the deletion operation.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * <p>Contains information about an error that occurred during a Resource Explorer setup operation.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code that identifies the type of error that occurred.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable description of the error that occurred.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>This is a structure that contains the status of Amazon Web Services service access, and whether you have a valid service-linked role to enable multi-account search for your organization.</p>
 * @public
 */
export interface OrgConfiguration {
  /**
   * <p>This value displays whether your Amazon Web Services service access is <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  AWSServiceAccessStatus: AWSServiceAccessStatus | undefined;

  /**
   * <p>This value shows whether or not you have a valid a service-linked role required to start the multi-account search feature.</p>
   * @public
   */
  ServiceLinkedRole?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLevelServiceConfigurationOutput {
  /**
   * <p>Details about the organization, and whether configuration is <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  OrgConfiguration?: OrgConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDefaultViewOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that is the current default for the Amazon Web Services Region in which you called this operation.</p>
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface GetIndexOutput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of the index in this Region. For information about the aggregator index and how it differs from a local index, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a>.</p>
   * @public
   */
  Type?: IndexType | undefined;

  /**
   * <p>The current state of the index in this Amazon Web Services Region.</p>
   * @public
   */
  State?: IndexState | undefined;

  /**
   * <p>This response value is present only if this index is <code>Type=AGGREGATOR</code>.</p> <p>A list of the Amazon Web Services Regions that replicate their content to the index in this Region.</p>
   * @public
   */
  ReplicatingFrom?: string[] | undefined;

  /**
   * <p>This response value is present only if this index is <code>Type=LOCAL</code>.</p> <p>The Amazon Web Services Region that contains the aggregator index, if one exists. If an aggregator index does exist then the Region in which you called this operation replicates its index information to the Region specified in this response value. </p>
   * @public
   */
  ReplicatingTo?: string[] | undefined;

  /**
   * <p>The date and time when the index was originally created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the index was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>Tag key and value pairs that are attached to the index.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedViewInput {
  /**
   * <p>The Amazon resource name (ARN) of the managed view.</p>
   * @public
   */
  ManagedViewArn: string | undefined;
}

/**
 * <p>An Amazon Web Services-managed view is how other Amazon Web Services services can access resource information indexed by Resource Explorer for your Amazon Web Services account or organization with your consent. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html">Managed views</a>. </p>
 * @public
 */
export interface ManagedView {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the managed view.</p>
   * @public
   */
  ManagedViewArn?: string | undefined;

  /**
   * <p>The name of the managed view. </p>
   * @public
   */
  ManagedViewName?: string | undefined;

  /**
   * <p>The service principal of the Amazon Web Services service that created and manages the managed view. </p>
   * @public
   */
  TrustedService?: string | undefined;

  /**
   * <p>The date and time when this managed view was last modified.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The Amazon Web Services account that owns this managed view.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of an Amazon Web Services account or organization that specifies whether this managed view includes resources from only the specified Amazon Web Services account or all accounts in the specified organization. </p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>A structure that contains additional information about the managed view.</p>
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * <p>A search filter defines which resources can be part of a search query result set.</p>
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * <p>The resource policy that defines access to the managed view. To learn more about this policy, review <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html">Managed views</a>.</p>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>The version of the managed view. </p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedViewOutput {
  /**
   * <p>Details about the specified managed view. </p>
   * @public
   */
  ManagedView?: ManagedView | undefined;
}

/**
 * @public
 */
export interface GetResourceExplorerSetupInput {
  /**
   * <p>The unique identifier of the setup task to retrieve status information for. This ID is returned by <code>CreateResourceExplorerSetup</code> or <code>DeleteResourceExplorerSetup</code> operations.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The maximum number of Region status results to return in a single response. Valid values are between <code>1</code> and <code>100</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous <code>GetResourceExplorerSetup</code> response. Use this token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * <p>Contains information about the status of a Resource Explorer index operation in a specific Region.</p>
 * @public
 */
export interface IndexStatus {
  /**
   * <p>The current status of the index operation. Valid values are <code>SUCCEEDED</code>, <code>FAILED</code>, <code>IN_PROGRESS</code>, or <code>SKIPPED</code>.</p>
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.</p> <p>By default, an index is <i>local</i>, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling <a>UpdateIndexType</a> to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.</p>
   * @public
   */
  Index?: Index | undefined;

  /**
   * <p>Details about any error that occurred during the index operation.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * <p>Contains information about the status of a Resource Explorer view operation in a specific Region.</p>
 * @public
 */
export interface ViewStatus {
  /**
   * <p>The current status of the view operation. Valid values are <code>SUCCEEDED</code>, <code>FAILED</code>, <code>IN_PROGRESS</code>, or <code>SKIPPED</code>.</p>
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * <p>A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".</p>
   * @public
   */
  View?: View | undefined;

  /**
   * <p>Details about any error that occurred during the view operation.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * <p>Contains information about the status of Resource Explorer configuration in a specific Amazon Web Services Region.</p>
 * @public
 */
export interface RegionStatus {
  /**
   * <p>The Amazon Web Services Region for which this status information applies.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The status information for the Resource Explorer index in this Region.</p>
   * @public
   */
  Index?: IndexStatus | undefined;

  /**
   * <p>The status information for the Resource Explorer view in this Region.</p>
   * @public
   */
  View?: ViewStatus | undefined;
}

/**
 * @public
 */
export interface GetResourceExplorerSetupOutput {
  /**
   * <p>A list of Region status objects that describe the current state of Resource Explorer configuration in each Region.</p>
   * @public
   */
  Regions?: RegionStatus[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent <code>GetResourceExplorerSetup</code> request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceIndexOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Resource Explorer index in the current Region.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of the index. Valid values are <code>LOCAL</code> (contains resources from the current Region only) or <code>AGGREGATOR</code> (contains replicated resource information from all Regions).</p>
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface GetServiceViewInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the service view to retrieve details for.</p>
   * @public
   */
  ServiceViewArn: string | undefined;
}

/**
 * <p>Contains the configuration and properties of a Resource Explorer service view.</p>
 * @public
 */
export interface ServiceView {
  /**
   * <p>The Amazon Resource Name (ARN) of the service view.</p>
   * @public
   */
  ServiceViewArn: string | undefined;

  /**
   * <p>A search filter defines which resources can be part of a search query result set.</p>
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * <p>A list of additional resource properties that are included in this view for search and filtering purposes.</p>
   * @public
   */
  IncludedProperties?: IncludedProperty[] | undefined;

  /**
   * <p>The Amazon Web Services service that has streaming access to this view's data.</p>
   * @public
   */
  StreamingAccessForService?: string | undefined;

  /**
   * <p>The scope type of the service view, which determines what resources are included.</p>
   * @public
   */
  ScopeType?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceViewOutput {
  /**
   * <p>A <code>ServiceView</code> object that contains the details and configuration of the requested service view.</p>
   * @public
   */
  View: ServiceView | undefined;
}

/**
 * @public
 */
export interface ListIndexesForMembersInput {
  /**
   * <p>The account IDs will limit the output to only indexes from these accounts.</p>
   * @public
   */
  AccountIdList: string[] | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. </p>
 * @public
 */
export interface MemberIndex {
  /**
   * <p>The account ID for the index.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the index exists.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of index. It can be one of the following values: </p> <ul> <li> <p> <code>LOCAL</code> – The index contains information about resources from only the same Amazon Web Services Region.</p> </li> <li> <p> <code>AGGREGATOR</code> – Resource Explorer replicates copies of the indexed information about resources in all other Amazon Web Services Regions to the aggregator index. This lets search results in the Region with the aggregator index to include resources from all Regions in the account where Resource Explorer is turned on.</p> </li> </ul>
   * @public
   */
  Type?: IndexType | undefined;
}

/**
 * @public
 */
export interface ListIndexesForMembersOutput {
  /**
   * <p>A structure that contains the details and status of each index.</p>
   * @public
   */
  Indexes?: MemberIndex[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedViewsInput {
  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies a service principal name. If specified, then the operation only returns the managed views that are managed by the input service. </p>
   * @public
   */
  ServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedViewsOutput {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of managed views available in the Amazon Web Services Region in which you called this operation. </p>
   * @public
   */
  ManagedViews?: string[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesInput {
  /**
   * <p>An array of strings that specify which resources are included in the results of queries made using this view. When you use this view in a <a>Search</a> operation, the filter string is combined with the search's <code>QueryString</code> parameter using a logical <code>AND</code> operator.</p> <p>For information about the supported syntax, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query reference for Resource Explorer</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <important> <p>This query string in the context of this operation supports only <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters">filter prefixes</a> with optional <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators">operators</a>. It doesn't support free-form text. For example, the string <code>region:us* service:ec2 -tag:stage=prod</code> includes all Amazon EC2 resources in any Amazon Web Services Region that begins with the letters <code>us</code> and is <i>not</i> tagged with a key <code>Stage</code> that has the value <code>prod</code>.</p> </important>
   * @public
   */
  Filters?: SearchFilter | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies the Amazon resource name (ARN) of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a 401 Unauthorized exception.</p>
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p> <note> <p>The <code>ListResources</code> operation does not generate a <code>NextToken</code> if you set <code>MaxResults</code> to 1000. </p> </note>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes a property of a resource.</p>
 * @public
 */
export interface ResourceProperty {
  /**
   * <p>The name of this property of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date and time that the information about this resource property was last updated.</p>
   * @public
   */
  LastReportedAt?: Date | undefined;

  /**
   * <p>Details about this property. The content of this field is a JSON object that varies based on the resource type.</p>
   * @public
   */
  Data?: __DocumentType | undefined;
}

/**
 * <p>A resource in Amazon Web Services that Amazon Web Services Resource Explorer has discovered, and for which it has stored information in the index of the Amazon Web Services Region that contains the resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the resource.</p>
   * @public
   */
  OwningAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the resource was created and exists.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The Amazon Web Services service that owns the resource and is responsible for creating and updating it.</p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The date and time that Resource Explorer last queried this resource and updated the index with the latest information about the resource.</p>
   * @public
   */
  LastReportedAt?: Date | undefined;

  /**
   * <p>A structure with additional type-specific details about the resource. These properties can be added by turning on integration between Resource Explorer and other Amazon Web Services services.</p>
   * @public
   */
  Properties?: ResourceProperty[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesOutput {
  /**
   * <p>The list of structures that describe the resources that match the query. </p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the view that this operation used to perform the search. </p>
   * @public
   */
  ViewArn?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceIndexesInput {
  /**
   * <p>A list of Amazon Web Services Regions to include in the search for indexes. If not specified, indexes from all Regions are returned.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>The maximum number of index results to return in a single response. Valid values are between <code>1</code> and <code>100</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous <code>ListServiceIndexes</code> response. Use this token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceIndexesOutput {
  /**
   * <p>A list of <code>Index</code> objects that describe the Resource Explorer indexes found in the specified Regions.</p>
   * @public
   */
  Indexes?: Index[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent <code>ListServiceIndexes</code> request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceViewsInput {
  /**
   * <p>The maximum number of service view results to return in a single response. Valid values are between <code>1</code> and <code>50</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous <code>ListServiceViews</code> response. Use this token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceViewsOutput {
  /**
   * <p>The pagination token to use in a subsequent <code>ListServiceViews</code> request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARNs) for the service views available in the current Amazon Web Services account.</p>
   * @public
   */
  ServiceViews?: string[] | undefined;
}

/**
 * @public
 */
export interface ListStreamingAccessForServicesInput {
  /**
   * <p>The maximum number of streaming access entries to return in the response. If there are more results available, the response includes a NextToken value that you can use in a subsequent call to get the next set of results. The value must be between 1 and 50. If you don't specify a value, the default is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about an Amazon Web Services service that has been granted streaming access to your Resource Explorer data.</p>
 * @public
 */
export interface StreamingAccessDetails {
  /**
   * <p>The service principal of the Amazon Web Services service that has streaming access to your Resource Explorer data. A service principal is a unique identifier for an Amazon Web Services service.</p>
   * @public
   */
  ServicePrincipal: string | undefined;

  /**
   * <p>The date and time when streaming access was granted to the Amazon Web Services service, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListStreamingAccessForServicesOutput {
  /**
   * <p>A list of Amazon Web Services services that have streaming access to your Resource Explorer data, including details about when the access was granted.</p>
   * @public
   */
  StreamingAccessForServices: StreamingAccessDetails[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedResourceTypesInput {
  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure that describes a resource type supported by Amazon Web Services Resource Explorer.</p>
 * @public
 */
export interface SupportedResourceType {
  /**
   * <p>The Amazon Web Services service that is associated with the resource type. This is the primary service that lets you create and interact with resources of this type.</p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The unique identifier of the resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedResourceTypesOutput {
  /**
   * <p>The list of resource types supported by Resource Explorer.</p>
   * @public
   */
  ResourceTypes?: SupportedResourceType[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view or index that you want to attach tags to.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tag key and value pairs that you want to attach to the specified view or index.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about the number of results that match the query. At this time, Amazon Web Services Resource Explorer doesn't count more than 1,000 matches for any query. This structure provides information about whether the query exceeded this limit.</p> <p>This field is included in every page when you paginate the results.</p>
 * @public
 */
export interface ResourceCount {
  /**
   * <p>The number of resources that match the search query. This value can't exceed 1,000. If there are more than 1,000 resources that match the query, then only 1,000 are counted and the <code>Complete</code> field is set to false. We recommend that you refine your query to return a smaller number of results.</p>
   * @public
   */
  TotalResources?: number | undefined;

  /**
   * <p>Indicates whether the <code>TotalResources</code> value represents an exhaustive count of search results.</p> <ul> <li> <p>If <code>True</code>, it indicates that the search was exhaustive. Every resource that matches the query was counted.</p> </li> <li> <p>If <code>False</code>, then the search reached the limit of 1,000 matching results, and stopped counting.</p> </li> </ul>
   * @public
   */
  Complete?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchInput {
  /**
   * <p>A string that includes keywords and filters that specify the resources that you want to include in the results.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>The search is completely case insensitive. You can specify an empty string to return all results up to the limit of 1,000 total results.</p> <note> <p>The operation can return only the first 1,000 results. If the resource you want is not included, then use a different value for <code>QueryString</code> to refine the results.</p> </note>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a <code>401 Unauthorized</code> exception.</p>
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * <p>The list of structures that describe the resources that match the query.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. The pagination tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that this operation used to perform the search.</p>
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * <p>The number of resources that match the query.</p>
   * @public
   */
  Count?: ResourceCount | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the view or index that you want to attach tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag key and value pairs that you want to attach to the specified view or index.</p>
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
   * <p>The Amazon Resource Name (ARN) of the view or index that you want to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys for the tags that you want to remove from the specified view or index.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
