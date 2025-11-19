// smithy-typescript generated code
import { ErrorCode, GroupByAttribute, TargetIdType } from "./enums";

/**
 * <p>Information that shows whether a resource is compliant with the effective tag policy,
 *             including details on any noncompliant tag keys.</p>
 * @public
 */
export interface ComplianceDetails {
  /**
   * <p>These tag keys on the resource are noncompliant with the effective tag policy.</p>
   * @public
   */
  NoncompliantKeys?: string[] | undefined;

  /**
   * <p>These are keys defined in the effective policy that are on the resource with either
   *             incorrect case treatment or noncompliant values. </p>
   * @public
   */
  KeysWithNoncompliantValues?: string[] | undefined;

  /**
   * <p>Whether a resource is compliant with the effective tag policy.</p>
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
   * <p>Reports the status of the operation.</p>
   *          <p>The operation status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - Report creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - Report creation is complete. You can open the report
   *                     from the Amazon S3 bucket that you specified when you ran
   *                         <code>StartReportCreation</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Report creation timed out or the Amazon S3 bucket is not
   *                     accessible. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO REPORT</code> - No report was generated in the last 90 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the report was stored on creation.</p>
   * @public
   */
  S3Location?: string | undefined;

  /**
   * <p>The date and time that the report was started. </p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>Details of the common errors that all operations return.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Information about the errors that are returned for each failed resource. This
 *             information can include <code>InternalServiceException</code> and
 *                 <code>InvalidParameterException</code> errors. It can also include any valid error
 *             code returned by the Amazon Web Services service that hosts the resource that the ARN key
 *             represents.</p>
 *          <p>The following are common error codes that you might receive from other Amazon Web Services
 *             services:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>InternalServiceException</b> – This can
 *                     mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It
 *                     can also mean that the resource type in the request is not supported by the
 *                     Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>AccessDeniedException</b> – This can mean
 *                     that you need permission to call the tagging operations in the Amazon Web Services service
 *                     that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch
 *                     alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html">
 *                      <code>TagResources</code>
 *                   </a>
 *                   <i>and</i>
 *                   <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">
 *                      <code>TagResource</code>
 *                   </a> in the CloudWatch API. </p>
 *             </li>
 *          </ul>
 *          <p>For more information on errors that are generated from other Amazon Web Services services, see the
 *             documentation for that service. </p>
 * @public
 */
export interface FailureInfo {
  /**
   * <p>The HTTP status code of the common error.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>The code of the common error. Valid values include
   *                 <code>InternalServiceException</code>, <code>InvalidParameterException</code>, and
   *             any valid error code returned by the Amazon Web Services service that hosts the resource that you want
   *             to tag.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The message of the common error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryInput {
  /**
   * <p>Specifies target identifiers (usually, specific account IDs) to limit the output by.
   *             If you use this parameter, the count of returned noncompliant resources includes only
   *             resources with the specified target IDs.</p>
   * @public
   */
  TargetIdFilters?: string[] | undefined;

  /**
   * <p>Specifies a list of Amazon Web Services Regions to limit the output to. If you use this parameter,
   *             the count of returned noncompliant resources includes only resources in the specified
   *             Regions.</p>
   * @public
   */
  RegionFilters?: string[] | undefined;

  /**
   * <p>Specifies that you want the response to include information for only resources of the
   *             specified types. The format of each resource type is
   *             <code>service[:resourceType]</code>. For example, specifying a resource type of
   *                 <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances).
   *             Specifying a resource type of <code>ec2:instance</code> returns only EC2
   *             instances.</p>
   *          <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN). Consult the <i>
   *                <a href="https://docs.aws.amazon.com/general/latest/gr/">Amazon Web Services General Reference</a>
   *             </i>
   *             for the following:</p>
   *          <ul>
   *             <li>
   *                <p>For a list of service name strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services Service Namespaces</a>.</p>
   *             </li>
   *             <li>
   *                <p>For resource type strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax">Example
   *                         ARNs</a>.</p>
   *             </li>
   *             <li>
   *                <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names
   *                         (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the list of services whose resources you can tag using the Resource Groups Tagging API, see
   *                     <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If an Amazon Web Services
   *                 service isn't listed on that page, you might still be able to tag that service's
   *                 resources by using that service's native tagging operations instead of using
   *                 Resource Groups Tagging API operations. All tagged resources, whether the tagging used the Resource Groups Tagging API
   *                 or not, are returned by the <code>Get*</code> operation.</p>
   *          </note>
   *          <p>You can specify multiple resource types by using a comma separated array. The array
   *             can include up to 100 items. Note that the length constraint requirement applies to each
   *             resource type filter. </p>
   * @public
   */
  ResourceTypeFilters?: string[] | undefined;

  /**
   * <p>Specifies that you want the response to include information for only resources that
   *             have tags with the specified tag keys. If you use this parameter, the count of returned
   *             noncompliant resources includes only resources that have the specified tag keys.</p>
   * @public
   */
  TagKeyFilters?: string[] | undefined;

  /**
   * <p>Specifies a list of attributes to group the counts of noncompliant resources by. If
   *             supplied, the counts are sorted by those attributes.</p>
   * @public
   */
  GroupBy?: GroupByAttribute[] | undefined;

  /**
   * <p>Specifies the maximum number of results to be returned in each page. A
   *     query can return fewer than this maximum, even if there are more results still to return. You
   *     should always check the <code>PaginationToken</code> response value to see if there are more
   *     results. You can specify a minimum of 1 and a maximum value of 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>A count of noncompliant resources.</p>
 * @public
 */
export interface Summary {
  /**
   * <p>The timestamp that shows when this summary was generated in this Region. </p>
   * @public
   */
  LastUpdated?: string | undefined;

  /**
   * <p>The account identifier or the root identifier of the organization. If you don't know
   *             the root ID, you can call the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html">ListRoots</a> API.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>Whether the target is an account, an OU, or the organization root.</p>
   * @public
   */
  TargetIdType?: TargetIdType | undefined;

  /**
   * <p>The Amazon Web Services Region that the summary applies to.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Amazon Web Services resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The count of noncompliant resources.</p>
   * @public
   */
  NonCompliantResources?: number | undefined;
}

/**
 * @public
 */
export interface GetComplianceSummaryOutput {
  /**
   * <p>A table that shows counts of noncompliant resources.</p>
   * @public
   */
  SummaryList?: Summary[] | undefined;

  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>A list of tags (keys and values) that are used to specify the associated
 *             resources.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label
   *     that acts like a category for more specific tag values.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a
   *     descriptor within a tag category (key). The value can be empty or null.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>Specifies a list of TagFilters (keys and values) to restrict the output to only those
   *             resources that have tags with the specified keys and, if included, the specified values.
   *             Each <code>TagFilter</code> must contain a key with values optional. A request can
   *             include up to 50 keys, and each key can include up to 20 values. </p>
   *          <p>You can't specify both this parameter and the <code>ResourceArnList</code> parameter
   *             in the same request. If you do, you get an <code>Invalid Parameter</code>
   *             exception.</p>
   *          <p>Note the following when deciding how to use TagFilters:</p>
   *          <ul>
   *             <li>
   *                <p>If you <i>don't</i> specify a <code>TagFilter</code>, the
   *                     response includes all resources that are currently tagged or ever had a tag.
   *                     Resources that were previously tagged, <i>but do not currently</i>
   *                     have tags, are shown with an empty tag set, like this: <code>"Tags":
   *                     []</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify more than one filter in a single request, the response returns
   *                     only those resources that satisfy all filters.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter that contains more than one value for a key, the
   *                     response returns resources that match <i>any</i> of the specified
   *                     values for that key.</p>
   *             </li>
   *             <li>
   *                <p>If you don't specify a value for a key, the response returns all resources
   *                     that are tagged with that key, with any or no value.</p>
   *                <p>For example, for the following filters: <code>filter1= \{key1,\{value1\}\}</code>,
   *                         <code>filter2=\{key2,\{value2,value3,value4\}\}</code>, <code>filter3=
   *                         \{key3\}</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>GetResources(\{filter1\})</code> returns resources tagged with
   *                                 <code>key1=value1</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>GetResources(\{filter2\})</code> returns resources tagged with
   *                                 <code>key2=value2</code> or <code>key2=value3</code> or
   *                                 <code>key2=value4</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>GetResources(\{filter3\})</code> returns resources tagged with any
   *                             tag with the key <code>key3</code>, and with any or no value</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>GetResources(\{filter1,filter2,filter3\})</code> returns resources
   *                             tagged with <code>(key1=value1) and (key2=value2 or key2=value3 or
   *                                 key2=value4) and (key3, any or no value)</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilters?: TagFilter[] | undefined;

  /**
   * <p>Specifies the maximum number of results to be returned in each page. A
   *     query can return fewer than this maximum, even if there are more results still to return. You
   *     should always check the <code>PaginationToken</code> response value to see if there are more
   *     results. You can specify a minimum of 1 and a maximum value of 100.</p>
   * @public
   */
  ResourcesPerPage?: number | undefined;

  /**
   * <p>Amazon Web Services recommends using <code>ResourcesPerPage</code> instead of this parameter.</p>
   *          <p>A limit that restricts the number of tags (key and value pairs) returned by
   *                 <code>GetResources</code> in paginated output. A resource with no tags is counted as
   *             having one tag (one key and value pair).</p>
   *          <p>
   *             <code>GetResources</code> does not split a resource and its associated tags across
   *             pages. If the specified <code>TagsPerPage</code> would cause such a break, a
   *                 <code>PaginationToken</code> is returned in place of the affected resource and its
   *             tags. Use that token in another request to get the remaining data. For example, if you
   *             specify a <code>TagsPerPage</code> of <code>100</code> and the account has 22 resources
   *             with 10 tags each (meaning that each resource has 10 key and value pairs), the output
   *             will consist of three pages. The first page displays the first 10 resources, each with
   *             its 10 tags. The second page displays the next 10 resources, each with its 10 tags. The
   *             third page displays the remaining 2 resources, each with its 10 tags.</p>
   *          <p>You can set <code>TagsPerPage</code> to a minimum of 100 items up to a maximum of 500
   *             items.</p>
   * @public
   */
  TagsPerPage?: number | undefined;

  /**
   * <p>Specifies the resource types that you want included in the response. The format of
   *             each resource type is <code>service[:resourceType]</code>. For example, specifying a
   *             service of <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances).
   *             Specifying a resource type of <code>ec2:instance</code> returns only EC2 instances. </p>
   *          <p>You can't specify both this parameter and the <code>ResourceArnList</code> parameter
   *             in the same request. If you do, you get an <code>Invalid Parameter</code>
   *             exception.</p>
   *          <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN).</p>
   *          <note>
   *             <p>For the list of services whose resources you can tag using the Resource Groups Tagging API, see
   *                     <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If an Amazon Web Services
   *                 service isn't listed on that page, you might still be able to tag that service's
   *                 resources by using that service's native tagging operations instead of using
   *                 Resource Groups Tagging API operations. All tagged resources, whether the tagging used the Resource Groups Tagging API
   *                 or not, are returned by the <code>Get*</code> operation.</p>
   *          </note>
   *          <p>You can specify multiple resource types by using an array. The array can include up to
   *             100 items. Note that the length constraint requirement applies to each resource type
   *             filter. For example, the following string would limit the response to only Amazon EC2
   *             instances, Amazon S3 buckets, or any Audit Manager resource:</p>
   *          <p>
   *             <code>ec2:instance,s3:bucket,auditmanager</code>
   *          </p>
   * @public
   */
  ResourceTypeFilters?: string[] | undefined;

  /**
   * <p>Specifies whether to include details regarding the compliance with the effective tag
   *             policy. Set this to <code>true</code> to determine whether resources are compliant with
   *             the tag policy and to get details.</p>
   * @public
   */
  IncludeComplianceDetails?: boolean | undefined;

  /**
   * <p>Specifies whether to exclude resources that are compliant with the tag policy. Set
   *             this to <code>true</code> if you are interested in retrieving information on
   *             noncompliant resources only.</p>
   *          <p>You can use this parameter only if the <code>IncludeComplianceDetails</code> parameter
   *             is also set to <code>true</code>.</p>
   * @public
   */
  ExcludeCompliantResources?: boolean | undefined;

  /**
   * <p>Specifies a list of ARNs of resources for which you want to retrieve tag data.</p>
   *          <p>You can't specify both this parameter and the <code>ResourceTypeFilters</code>
   *             parameter in the same request. If you do, you get an <code>Invalid Parameter</code>
   *             exception.</p>
   *          <p>You can't specify both this parameter and the <code>TagFilters</code> parameter in the
   *             same request. If you do, you get an <code>Invalid Parameter</code> exception.</p>
   *          <p>You can't specify both this parameter and any of the pagination parameters
   *                 (<code>ResourcesPerPage</code>, <code>TagsPerPage</code>,
   *                 <code>PaginationToken</code>) in the same request. If you do, you get an
   *                 <code>Invalid Parameter</code> exception.</p>
   *          <p>If a resource specified by this parameter doesn't exist, it doesn't generate an error;
   *             it simply isn't included in the response.</p>
   *          <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceARNList?: string[] | undefined;
}

/**
 * <p>The metadata that you apply to Amazon Web Services resources to help you categorize and organize
 *             them. Each tag consists of a key and a value, both of which you define. For more
 *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label
   *     that acts like a category for more specific tag values.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a
   *     descriptor within a tag category (key). The value can be empty or null.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A list of resource ARNs and the tags (keys and values) that are associated with
 *             each.</p>
 * @public
 */
export interface ResourceTagMapping {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>The tags that have been applied to one or more Amazon Web Services resources.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information that shows whether a resource is compliant with the effective tag policy,
   *             including details on any noncompliant tag keys.</p>
   * @public
   */
  ComplianceDetails?: ComplianceDetails | undefined;
}

/**
 * @public
 */
export interface GetResourcesOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>A list of resource ARNs and the tags (keys and values) associated with
   *     each.</p>
   * @public
   */
  ResourceTagMappingList?: ResourceTagMapping[] | undefined;
}

/**
 * @public
 */
export interface GetTagKeysInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagKeysOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>A list of all tag keys in the Amazon Web Services account.</p>
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface GetTagValuesInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>Specifies the tag key for which you want to list all existing values that are
   *             currently used in the specified Amazon Web Services Region for the calling account.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface GetTagValuesOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>A list of all tag values for the specified key currently used in the specified Amazon Web Services
   *             Region for the calling account.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRequiredTagsInput {
  /**
   * <p>A token for requesting another page of required tags if the <code>NextToken</code> response element
   *             indicates that more required tags are available. Use the value of the returned <code>NextToken</code>
   *             element in your request until the token comes back as null. Pass null if this is the
   *             first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of required tags.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information that describes the required tags for a given resource type.</p>
 * @public
 */
export interface RequiredTag {
  /**
   * <p>Describes the resource type for the required tag keys.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Describes the CloudFormation resource type assigned the required tag keys.</p>
   * @public
   */
  CloudFormationResourceTypes?: string[] | undefined;

  /**
   * <p>These tag keys are marked as <code>required</code> in the <code>report_required_tag_for</code> block of the effective tag policy.</p>
   * @public
   */
  ReportingTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRequiredTagsOutput {
  /**
   * <p>The required tags.</p>
   * @public
   */
  RequiredTags?: RequiredTag[] | undefined;

  /**
   * <p>A token for requesting another page of required tags if the <code>NextToken</code> response element
   *             indicates that more required tags are available. Use the value of the returned <code>NextToken</code>
   *             element in your request until the token comes back as null. Pass null if this is the
   *             first call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartReportCreationInput {
  /**
   * <p>The name of the Amazon S3 bucket where the report will be stored; for example:</p>
   *          <p>
   *             <code>amzn-s3-demo-bucket</code>
   *          </p>
   *          <p>For more information on S3 bucket requirements, including an example bucket policy,
   *             see the example Amazon S3 bucket policy on this page.</p>
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
   * <p>Specifies the list of ARNs of the resources that you want to apply tags to.</p>
   *          <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services
   *                 General Reference</i>.</p>
   * @public
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>Specifies a list of tags that you want to add to the specified resources. A tag
   *             consists of a key and a value that you define.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourcesOutput {
  /**
   * <p>A map containing a key-value pair for each failed item that couldn't be tagged. The
   *             key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object
   *             that contains an error code, a status code, and an error message. If there are no
   *             errors, the <code>FailedResourcesMap</code> is empty.</p>
   * @public
   */
  FailedResourcesMap?: Record<string, FailureInfo> | undefined;
}

/**
 * @public
 */
export interface UntagResourcesInput {
  /**
   * <p>Specifies a list of ARNs of the resources that you want to remove tags from.</p>
   *          <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services
   *                 General Reference</i>.</p>
   * @public
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>Specifies a list of tag keys that you want to remove from the specified
   *             resources.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourcesOutput {
  /**
   * <p>A map containing a key-value pair for each failed item that couldn't be untagged. The
   *             key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object
   *             that contains an error code, a status code, and an error message. If there are no
   *             errors, the <code>FailedResourcesMap</code> is empty.</p>
   * @public
   */
  FailedResourcesMap?: Record<string, FailureInfo> | undefined;
}
