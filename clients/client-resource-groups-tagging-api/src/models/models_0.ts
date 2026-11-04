// smithy-typescript generated code
import type { ErrorCode, GroupByAttribute, TargetIdType } from "./enums";

/**
 * Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
 *
 * @public
 */
export interface ComplianceDetails {
  /**
   * These tag keys on the resource are noncompliant with the effective tag policy.
   *
   * @public
   */
  NoncompliantKeys?: string[] | undefined;

  /**
   * These are keys defined in the effective policy that are on the resource with either incorrect case treatment or noncompliant values.
   *
   * @public
   */
  KeysWithNoncompliantValues?: string[] | undefined;

  /**
   * These tag keys are defined as required in the `report_required_tag_for` block of the effective tag policy, but are missing from the resource.
   *
   * @public
   */
  MissingTagKeys?: string[] | undefined;

  /**
   * Whether a resource is compliant with the effective tag policy.
   *
   * @public
   */
  ComplianceStatus?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeReportCreationInput {}

/**
 * @public
 */
export interface DescribeReportCreationOutput {
  /**
   * Reports the status of the operation.
   *
   * The operation status can be one of the following:
   *
   * - `RUNNING` - Report creation is in progress.
   * - `SUCCEEDED` - Report creation is complete. You can open the report from the Amazon S3 bucket that you specified when you ran `StartReportCreation`.
   * - `FAILED` - Report creation timed out or the Amazon S3 bucket is not accessible.
   * - `NO REPORT` - No report was generated in the last 90 days.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The path to the Amazon S3 bucket where the report was stored on creation.
   *
   * @public
   */
  S3Location?: string | undefined;

  /**
   * The date and time that the report was started.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * Details of the common errors that all operations return.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Information about the errors that are returned for each failed resource. This information can include `InternalServiceException` and `InvalidParameterException` errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.
 *
 * The following are common error codes that you might receive from other Amazon Web Services services:
 *
 * - **InternalServiceException** – This can mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call [GetResources](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html) to verify the changes.
 * - **AccessDeniedException** – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both [`TagResources`](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html) *and* [`TagResource`](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html) in the CloudWatch API.
 *
 * For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service.
 *
 * @public
 */
export interface FailureInfo {
  /**
   * The HTTP status code of the common error.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * The code of the common error. Valid values include `InternalServiceException`, `InvalidParameterException`, and any valid error code returned by the Amazon Web Services service that hosts the resource that you want to tag.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The message of the common error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryInput {
  /**
   * Specifies target identifiers (usually, specific account IDs) to limit the output by. If you use this parameter, the count of returned noncompliant resources includes only resources with the specified target IDs.
   *
   * @public
   */
  TargetIdFilters?: string[] | undefined;

  /**
   * Specifies a list of Amazon Web Services Regions to limit the output to. If you use this parameter, the count of returned noncompliant resources includes only resources in the specified Regions.
   *
   * @public
   */
  RegionFilters?: string[] | undefined;

  /**
   * Specifies that you want the response to include information for only resources of the specified types. The format of each resource type is `service[:resourceType]`. For example, specifying a resource type of `ec2` returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of `ec2:instance` returns only EC2 instances.
   *
   * The string for each service name and resource type is the same as that embedded in a resource's Amazon Resource Name (ARN). Consult the *[Amazon Web Services General Reference](https://docs.aws.amazon.com/general/latest/gr/)* for the following:
   *
   * - For a list of service name strings, see [Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces).
   * - For resource type strings, see [Example ARNs](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax).
   * - For more information about ARNs, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * > **Note:** For the list of services whose resources you can tag using the Resource Groups Tagging API, see [Services that support the Resource Groups Tagging API](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html). If an Amazon Web Services service isn't listed on that page, you might still be able to tag that service's resources by using that service's native tagging operations instead of using Resource Groups Tagging API operations. All tagged resources, whether the tagging used the Resource Groups Tagging API or not, are returned by the `Get*` operation.
   *
   * You can specify multiple resource types by using a comma separated array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter.
   *
   * @public
   */
  ResourceTypeFilters?: string[] | undefined;

  /**
   * Specifies that you want the response to include information for only resources that have tags with the specified tag keys. If you use this parameter, the count of returned noncompliant resources includes only resources that have the specified tag keys.
   *
   * @public
   */
  TagKeyFilters?: string[] | undefined;

  /**
   * Specifies a list of attributes to group the counts of noncompliant resources by. If supplied, the counts are sorted by those attributes.
   *
   * @public
   */
  GroupBy?: GroupByAttribute[] | undefined;

  /**
   * Specifies the maximum number of results to be returned in each page. A query can return fewer than this maximum, even if there are more results still to return. You should always check the `PaginationToken` response value to see if there are more results. You can specify a minimum of 1 and a maximum value of 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies a `PaginationToken` response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * A count of noncompliant resources.
 *
 * @public
 */
export interface Summary {
  /**
   * The timestamp that shows when this summary was generated in this Region.
   *
   * @public
   */
  LastUpdated?: string | undefined;

  /**
   * The account identifier or the root identifier of the organization. If you don't know the root ID, you can call the Organizations [ListRoots](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html) API.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * Whether the target is an account, an OU, or the organization root.
   *
   * @public
   */
  TargetIdType?: TargetIdType | undefined;

  /**
   * The Amazon Web Services Region that the summary applies to.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The Amazon Web Services resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The count of noncompliant resources.
   *
   * @public
   */
  NonCompliantResources?: number | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryOutput {
  /**
   * A table that shows counts of noncompliant resources.
   *
   * @public
   */
  SummaryList?: Summary[] | undefined;

  /**
   * A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the `PaginationToken` value in the request for the next page.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * A list of tags (keys and values) that are used to specify the associated resources.
 *
 * @public
 */
export interface TagFilter {
  /**
   * One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesInput {
  /**
   * Specifies a `PaginationToken` response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * Specifies a list of TagFilters (keys and values) to restrict the output to only those resources that have tags with the specified keys and, if included, the specified values. Each `TagFilter` must contain a key with values optional. A request can include up to 50 keys, and each key can include up to 20 values.
   *
   * You can't specify both this parameter and the `ResourceArnList` parameter in the same request. If you do, you get an `Invalid Parameter` exception.
   *
   * Note the following when deciding how to use TagFilters:
   *
   * - If you *don't* specify a `TagFilter`, the response includes all resources that are currently tagged or ever had a tag. Resources that were previously tagged, *but do not currently* have tags, are shown with an empty tag set, like this: `"Tags": []`.
   * - If you specify more than one filter in a single request, the response returns only those resources that satisfy all filters.
   * - If you specify a filter that contains more than one value for a key, the response returns resources that match *any* of the specified values for that key.
   * - If you don't specify a value for a key, the response returns all resources that are tagged with that key, with any or no value.
   *
   *   For example, for the following filters: `filter1= \{key1,\{value1\}\}`, `filter2=\{key2,\{value2,value3,value4\}\}`, `filter3= \{key3\}`:
   *
   *   - `GetResources(\{filter1\})` returns resources tagged with `key1=value1`
   *   - `GetResources(\{filter2\})` returns resources tagged with `key2=value2` or `key2=value3` or `key2=value4`
   *   - `GetResources(\{filter3\})` returns resources tagged with any tag with the key `key3`, and with any or no value
   *   - `GetResources(\{filter1,filter2,filter3\})` returns resources tagged with `(key1=value1) and (key2=value2 or key2=value3 or key2=value4) and (key3, any or no value)`
   *
   * @public
   */
  TagFilters?: TagFilter[] | undefined;

  /**
   * Specifies the maximum number of results to be returned in each page. A query can return fewer than this maximum, even if there are more results still to return. You should always check the `PaginationToken` response value to see if there are more results. You can specify a minimum of 1 and a maximum value of 100.
   *
   * @public
   */
  ResourcesPerPage?: number | undefined;

  /**
   * Amazon Web Services recommends using `ResourcesPerPage` instead of this parameter.
   *
   * A limit that restricts the number of tags (key and value pairs) returned by `GetResources` in paginated output. A resource with no tags is counted as having one tag (one key and value pair).
   *
   * `GetResources` does not split a resource and its associated tags across pages. If the specified `TagsPerPage` would cause such a break, a `PaginationToken` is returned in place of the affected resource and its tags. Use that token in another request to get the remaining data. For example, if you specify a `TagsPerPage` of `100` and the account has 22 resources with 10 tags each (meaning that each resource has 10 key and value pairs), the output will consist of three pages. The first page displays the first 10 resources, each with its 10 tags. The second page displays the next 10 resources, each with its 10 tags. The third page displays the remaining 2 resources, each with its 10 tags.
   *
   * You can set `TagsPerPage` to a minimum of 100 items up to a maximum of 500 items.
   *
   * @public
   */
  TagsPerPage?: number | undefined;

  /**
   * Specifies the resource types that you want included in the response. The format of each resource type is `service[:resourceType]`. For example, specifying a service of `ec2` returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of `ec2:instance` returns only EC2 instances.
   *
   * You can't specify both this parameter and the `ResourceArnList` parameter in the same request. If you do, you get an `Invalid Parameter` exception.
   *
   * The string for each service name and resource type is the same as that embedded in a resource's Amazon Resource Name (ARN).
   *
   * > **Note:** For the list of services whose resources you can tag using the Resource Groups Tagging API, see [Services that support the Resource Groups Tagging API](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html). If an Amazon Web Services service isn't listed on that page, you might still be able to tag that service's resources by using that service's native tagging operations instead of using Resource Groups Tagging API operations. All tagged resources, whether the tagging used the Resource Groups Tagging API or not, are returned by the `Get*` operation.
   *
   * You can specify multiple resource types by using an array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter. For example, the following string would limit the response to only Amazon EC2 instances, Amazon S3 buckets, or any Audit Manager resource:
   *
   * `ec2:instance,s3:bucket,auditmanager`
   *
   * @public
   */
  ResourceTypeFilters?: string[] | undefined;

  /**
   * Specifies whether to include details regarding the compliance with the effective tag policy. Set this to `true` to determine whether resources are compliant with the tag policy and to get details.
   *
   * @public
   */
  IncludeComplianceDetails?: boolean | undefined;

  /**
   * Specifies whether to exclude resources that are compliant with the tag policy. Set this to `true` if you are interested in retrieving information on noncompliant resources only.
   *
   * You can use this parameter only if the `IncludeComplianceDetails` parameter is also set to `true`.
   *
   * @public
   */
  ExcludeCompliantResources?: boolean | undefined;

  /**
   * Specifies a list of ARNs of resources for which you want to retrieve tag data.
   *
   * You can't specify both this parameter and the `ResourceTypeFilters` parameter in the same request. If you do, you get an `Invalid Parameter` exception.
   *
   * You can't specify both this parameter and the `TagFilters` parameter in the same request. If you do, you get an `Invalid Parameter` exception.
   *
   * You can't specify both this parameter and any of the pagination parameters (`ResourcesPerPage`, `TagsPerPage`, `PaginationToken`) in the same request. If you do, you get an `Invalid Parameter` exception.
   *
   * If a resource specified by this parameter doesn't exist, it doesn't generate an error; it simply isn't included in the response.
   *
   * An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARNList?: string[] | undefined;
}

/**
 * The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A list of resource ARNs and the tags (keys and values) that are associated with each.
 *
 * @public
 */
export interface ResourceTagMapping {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The tags that have been applied to one or more Amazon Web Services resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
   *
   * @public
   */
  ComplianceDetails?: ComplianceDetails | undefined;
}

/**
 * @public
 */
export interface GetResourcesOutput {
  /**
   * A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the `PaginationToken` value in the request for the next page.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * A list of resource ARNs and the tags (keys and values) associated with each.
   *
   * @public
   */
  ResourceTagMappingList?: ResourceTagMapping[] | undefined;
}

/**
 * @public
 */
export interface GetTagKeysInput {
  /**
   * Specifies a `PaginationToken` response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagKeysOutput {
  /**
   * A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the `PaginationToken` value in the request for the next page.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * A list of all tag keys in the Amazon Web Services account.
   *
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface GetTagValuesInput {
  /**
   * Specifies a `PaginationToken` response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * Specifies the tag key for which you want to list all existing values that are currently used in the specified Amazon Web Services Region for the calling account.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface GetTagValuesOutput {
  /**
   * A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the `PaginationToken` value in the request for the next page.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * A list of all tag values for the specified key currently used in the specified Amazon Web Services Region for the calling account.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRequiredTagsInput {
  /**
   * A token for requesting another page of required tags if the `NextToken` response element indicates that more required tags are available. Use the value of the returned `NextToken` element in your request until the token comes back as null. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of required tags.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information that describes the required tags for a given resource type.
 *
 * @public
 */
export interface RequiredTag {
  /**
   * Describes the resource type for the required tag keys.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Describes the CloudFormation resource type assigned the required tag keys.
   *
   * @public
   */
  CloudFormationResourceTypes?: string[] | undefined;

  /**
   * These tag keys are marked as `required` in the `report_required_tag_for` block of the effective tag policy.
   *
   * @public
   */
  ReportingTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRequiredTagsOutput {
  /**
   * The required tags.
   *
   * @public
   */
  RequiredTags?: RequiredTag[] | undefined;

  /**
   * A token for requesting another page of required tags if the `NextToken` response element indicates that more required tags are available. Use the value of the returned `NextToken` element in your request until the token comes back as null. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartReportCreationInput {
  /**
   * The name of the Amazon S3 bucket where the report will be stored; for example:
   *
   * `amzn-s3-demo-bucket`
   *
   * For more information on S3 bucket requirements, including an example bucket policy, see the example Amazon S3 bucket policy on this page.
   *
   * @public
   */
  S3Bucket: string | undefined;
}

/**
 * @public
 */
export interface StartReportCreationOutput {}

/**
 * @public
 */
export interface TagResourcesInput {
  /**
   * Specifies the list of ARNs of the resources that you want to apply tags to.
   *
   * An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARNList: string[] | undefined;

  /**
   * Specifies a list of tags that you want to add to the specified resources. A tag consists of a key and a value that you define.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourcesOutput {
  /**
   * A map containing a key-value pair for each failed item that couldn't be tagged. The key is the ARN of the failed resource. The value is a `FailureInfo` object that contains an error code, a status code, and an error message. If there are no errors, the `FailedResourcesMap` is empty.
   *
   * @public
   */
  FailedResourcesMap?: Record<string, FailureInfo> | undefined;
}

/**
 * @public
 */
export interface UntagResourcesInput {
  /**
   * Specifies a list of ARNs of the resources that you want to remove tags from.
   *
   * An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARNList: string[] | undefined;

  /**
   * Specifies a list of tag keys that you want to remove from the specified resources.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourcesOutput {
  /**
   * A map containing a key-value pair for each failed item that couldn't be untagged. The key is the ARN of the failed resource. The value is a `FailureInfo` object that contains an error code, a status code, and an error message. If there are no errors, the `FailedResourcesMap` is empty.
   *
   * @public
   */
  FailedResourcesMap?: Record<string, FailureInfo> | undefined;
}
