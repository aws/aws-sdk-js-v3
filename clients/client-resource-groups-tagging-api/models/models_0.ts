import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information that shows whether a resource is compliant with the effective tag policy,
 *             including details on any noncompliant tag keys.</p>
 */
export interface ComplianceDetails {
  /**
   * <p>These tag keys on the resource are noncompliant with the effective tag policy.</p>
   */
  NoncompliantKeys?: string[];

  /**
   * <p>These are keys defined in the effective policy that are on the resource with either
   *             incorrect case treatment or noncompliant values. </p>
   */
  KeysWithNoncompliantValues?: string[];

  /**
   * <p>Whether a resource is compliant with the effective tag policy.</p>
   */
  ComplianceStatus?: boolean;
}

export namespace ComplianceDetails {
  export const filterSensitiveLog = (obj: ComplianceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied because performing this operation violates a constraint. </p>
 *         <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *         <ul>
 *             <li>
 *                 <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html">Prerequisites and Permissions for Using Tag Policies</a> in the
 *                         <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with AWS Organizations For
 *                     information, see <a href="http://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                 <p>You must have a tag policy attached to the organization root, an OU, or an
 *                     account.</p>
 *             </li>
 *          </ul>
 */
export interface ConstraintViolationException extends __SmithyException, $MetadataBearer {
  name: "ConstraintViolationException";
  $fault: "client";
  Message?: string;
}

export namespace ConstraintViolationException {
  export const filterSensitiveLog = (obj: ConstraintViolationException): any => ({
    ...obj,
  });
}

export interface DescribeReportCreationInput {}

export namespace DescribeReportCreationInput {
  export const filterSensitiveLog = (obj: DescribeReportCreationInput): any => ({
    ...obj,
  });
}

export interface DescribeReportCreationOutput {
  /**
   * <p>Reports the status of the operation.</p>
   *         <p>The operation status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>RUNNING</code> - Report creation is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCEEDED</code> - Report creation is complete. You can open the report
   *                     from the Amazon S3 bucket that you specified when you ran
   *                         <code>StartReportCreation</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - Report creation timed out or the Amazon S3 bucket is not
   *                     accessible. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NO REPORT</code> - No report was generated in the last 90 days.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The path to the Amazon S3 bucket where the report was stored on creation.</p>
   */
  S3Location?: string;

  /**
   * <p>The date and time that the report was started. </p>
   */
  StartDate?: string;

  /**
   * <p>Details of the common errors that all operations return.</p>
   */
  ErrorMessage?: string;
}

export namespace DescribeReportCreationOutput {
  export const filterSensitiveLog = (obj: DescribeReportCreationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>This error indicates one of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>A parameter is missing.</p>
 *             </li>
 *             <li>
 *                 <p>A malformed string was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                 <p>An out-of-range value was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                 <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                 <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html#bucket-policies-org-report">Additional Requirements for Organization-wide Tag Compliance
 *                         Reports</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied to limit the frequency of submitted requests.</p>
 */
export interface ThrottledException extends __SmithyException, $MetadataBearer {
  name: "ThrottledException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottledException {
  export const filterSensitiveLog = (obj: ThrottledException): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  INTERNAL_SERVICE_EXCEPTION = "InternalServiceException",
  INVALID_PARAMETER_EXCEPTION = "InvalidParameterException",
}

/**
 * <p>Information about the errors that are returned for each failed resource. This
 *             information can include <code>InternalServiceException</code> and
 *                 <code>InvalidParameterException</code> errors. It can also include any valid error
 *             code returned by the AWS service that hosts the resource that the ARN key
 *             represents.</p>
 *         <p>The following are common error codes that you might receive from other AWS
 *             services:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>InternalServiceException</b> – This can
 *                     mean that the Resource Groups Tagging API didn't receive a response from another
 *                     AWS service. It can also mean the the resource type in the request is not
 *                     supported by the Resource Groups Tagging API. In these cases, it's safe to retry
 *                     the request and then call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>AccessDeniedException</b> – This can mean
 *                     that you need permission to calling tagging operations in the AWS service that
 *                     contains the resource. For example, to use the Resource Groups Tagging API to
 *                     tag a CloudWatch alarm resource, you need permission to call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html">
 *                      <code>TagResources</code>
 *                   </a>
 *                     <i>and</i>
 *                     <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">
 *                      <code>TagResource</code>
 *                   </a> in the CloudWatch API. </p>
 *             </li>
 *          </ul>
 *         <p>For more information on errors that are generated from other AWS services, see the
 *             documentation for that service. </p>
 */
export interface FailureInfo {
  /**
   * <p>The HTTP status code of the common error.</p>
   */
  StatusCode?: number;

  /**
   * <p>The code of the common error. Valid values include
   *                 <code>InternalServiceException</code>, <code>InvalidParameterException</code>, and
   *             any valid error code returned by the AWS service that hosts the resource that you want
   *             to tag.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The message of the common error.</p>
   */
  ErrorMessage?: string;
}

export namespace FailureInfo {
  export const filterSensitiveLog = (obj: FailureInfo): any => ({
    ...obj,
  });
}

export enum GroupByAttribute {
  REGION = "REGION",
  RESOURCE_TYPE = "RESOURCE_TYPE",
  TARGET_ID = "TARGET_ID",
}

export interface GetComplianceSummaryInput {
  /**
   * <p>The target identifiers (usually, specific account IDs) to limit the output by. If you
   *             use this parameter, the count of returned noncompliant resources includes only resources
   *             with the specified target IDs.</p>
   */
  TargetIdFilters?: string[];

  /**
   * <p>A list of Regions to limit the output by. If you use this parameter, the count of
   *             returned noncompliant resources includes only resources in the specified Regions.</p>
   */
  RegionFilters?: string[];

  /**
   * <p>The constraints on the resources that you want returned. The format of each resource
   *             type is <code>service[:resourceType]</code>. For example, specifying a resource type of
   *                 <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances).
   *             Specifying a resource type of <code>ec2:instance</code> returns only EC2 instances. </p>
   *         <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN). Consult the <i>AWS General
   *                 Reference</i> for the following:</p>
   *         <ul>
   *             <li>
   *                 <p>For a list of service name strings, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For resource type strings, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax">Example ARNs</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For more information about ARNs, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                         Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   *             </li>
   *          </ul>
   *         <p>You can specify multiple resource types by using an array. The array can include up to
   *             100 items. Note that the length constraint requirement applies to each resource type
   *             filter. </p>
   */
  ResourceTypeFilters?: string[];

  /**
   * <p>A list of tag keys to limit the output by. If you use this parameter, the count of
   *             returned noncompliant resources includes only resources that have the specified tag
   *             keys.</p>
   */
  TagKeyFilters?: string[];

  /**
   * <p>A list of attributes to group the counts of noncompliant resources by. If supplied,
   *             the counts are sorted by those attributes.</p>
   */
  GroupBy?: (GroupByAttribute | string)[];

  /**
   * <p>A limit that restricts the number of results that are returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   */
  PaginationToken?: string;
}

export namespace GetComplianceSummaryInput {
  export const filterSensitiveLog = (obj: GetComplianceSummaryInput): any => ({
    ...obj,
  });
}

export enum TargetIdType {
  ACCOUNT = "ACCOUNT",
  OU = "OU",
  ROOT = "ROOT",
}

/**
 * <p>A count of noncompliant resources.</p>
 */
export interface Summary {
  /**
   * <p>The timestamp that shows when this summary was generated in this Region. </p>
   */
  LastUpdated?: string;

  /**
   * <p>The account identifier or the root identifier of the organization. If you don't know
   *             the root ID, you can call the AWS Organizations <a href="http://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html">ListRoots</a> API.</p>
   */
  TargetId?: string;

  /**
   * <p>Whether the target is an account, an OU, or the organization root.</p>
   */
  TargetIdType?: TargetIdType | string;

  /**
   * <p>The AWS Region that the summary applies to.</p>
   */
  Region?: string;

  /**
   * <p>The AWS resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The count of noncompliant resources.</p>
   */
  NonCompliantResources?: number;
}

export namespace Summary {
  export const filterSensitiveLog = (obj: Summary): any => ({
    ...obj,
  });
}

export interface GetComplianceSummaryOutput {
  /**
   * <p>A table that shows counts of noncompliant resources.</p>
   */
  SummaryList?: Summary[];

  /**
   * <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   */
  PaginationToken?: string;
}

export namespace GetComplianceSummaryOutput {
  export const filterSensitiveLog = (obj: GetComplianceSummaryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A list of tags (keys and values) that are used to specify the associated
 *             resources.</p>
 */
export interface TagFilter {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Values?: string[];
}

export namespace TagFilter {
  export const filterSensitiveLog = (obj: TagFilter): any => ({
    ...obj,
  });
}

export interface GetResourcesInput {
  /**
   * <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of TagFilters (keys and values). Each TagFilter specified must contain a key
   *             with values as optional. A request can include up to 50 keys, and each key can include
   *             up to 20 values. </p>
   *         <p>Note the following when deciding how to use TagFilters:</p>
   *         <ul>
   *             <li>
   *                 <p>If you <i>do</i> specify a TagFilter, the response returns only
   *                     those resources that are currently associated with the specified tag. </p>
   *             </li>
   *             <li>
   *                 <p>If you <i>don't</i> specify a TagFilter, the response includes
   *                     all resources that were ever associated with tags. Resources that currently
   *                     don't have associated tags are shown with an empty tag set, like this:
   *                         <code>"Tags": []</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify more than one filter in a single request, the response returns
   *                     only those resources that satisfy all specified filters.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a filter that contains more than one value for a key, the
   *                     response returns resources that match any of the specified values for that
   *                     key.</p>
   *             </li>
   *             <li>
   *                 <p>If you don't specify any values for a key, the response returns resources that
   *                     are tagged with that key irrespective of the value.</p>
   *                 <p>For example, for filters: filter1 = {key1, {value1}}, filter2 = {key2,
   *                     {value2,value3,value4}} , filter3 = {key3}:</p>
   *                 <ul>
   *                   <li>
   *                         <p>GetResources( {filter1} ) returns resources tagged with
   *                             key1=value1</p>
   *                     </li>
   *                   <li>
   *                         <p>GetResources( {filter2} ) returns resources tagged with key2=value2 or
   *                             key2=value3 or key2=value4</p>
   *                     </li>
   *                   <li>
   *                         <p>GetResources( {filter3} ) returns resources tagged with any tag
   *                             containing key3 as its tag key, irrespective of its value</p>
   *                     </li>
   *                   <li>
   *                         <p>GetResources( {filter1,filter2,filter3} ) returns resources tagged
   *                             with ( key1=value1) and ( key2=value2 or key2=value3 or key2=value4) and
   *                             (key3, irrespective of the value)</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  TagFilters?: TagFilter[];

  /**
   * <p>A limit that restricts the number of resources returned by GetResources in paginated
   *             output. You can set ResourcesPerPage to a minimum of 1 item and the maximum of 100
   *             items. </p>
   */
  ResourcesPerPage?: number;

  /**
   * <p>AWS recommends using <code>ResourcesPerPage</code> instead of this parameter.</p>
   *         <p>A limit that restricts the number of tags (key and value pairs) returned by
   *             GetResources in paginated output. A resource with no tags is counted as having one tag
   *             (one key and value pair).</p>
   *         <p>
   *             <code>GetResources</code> does not split a resource and its associated tags across
   *             pages. If the specified <code>TagsPerPage</code> would cause such a break, a
   *                 <code>PaginationToken</code> is returned in place of the affected resource and its
   *             tags. Use that token in another request to get the remaining data. For example, if you
   *             specify a <code>TagsPerPage</code> of <code>100</code> and the account has 22 resources
   *             with 10 tags each (meaning that each resource has 10 key and value pairs), the output
   *             will consist of three pages. The first page displays the first 10 resources, each with
   *             its 10 tags. The second page displays the next 10 resources, each with its 10 tags. The
   *             third page displays the remaining 2 resources, each with its 10 tags.</p>
   *         <p>You can set <code>TagsPerPage</code> to a minimum of 100 items and the maximum of 500
   *             items.</p>
   */
  TagsPerPage?: number;

  /**
   * <p>The constraints on the resources that you want returned. The format of each resource
   *             type is <code>service[:resourceType]</code>. For example, specifying a resource type of
   *                 <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances).
   *             Specifying a resource type of <code>ec2:instance</code> returns only EC2 instances. </p>
   *         <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN). Consult the <i>AWS General
   *                 Reference</i> for the following:</p>
   *         <ul>
   *             <li>
   *                 <p>For a list of service name strings, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For resource type strings, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax">Example ARNs</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For more information about ARNs, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                         Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   *             </li>
   *          </ul>
   *         <p>You can specify multiple resource types by using an array. The array can include up to
   *             100 items. Note that the length constraint requirement applies to each resource type
   *             filter. </p>
   */
  ResourceTypeFilters?: string[];

  /**
   * <p>Specifies whether to include details regarding the compliance with the effective tag
   *             policy. Set this to <code>true</code> to determine whether resources are compliant with
   *             the tag policy and to get details.</p>
   */
  IncludeComplianceDetails?: boolean;

  /**
   * <p>Specifies whether to exclude resources that are compliant with the tag policy. Set
   *             this to <code>true</code> if you are interested in retrieving information on
   *             noncompliant resources only.</p>
   *         <p>You can use this parameter only if the <code>IncludeComplianceDetails</code> parameter
   *             is also set to <code>true</code>.</p>
   */
  ExcludeCompliantResources?: boolean;
}

export namespace GetResourcesInput {
  export const filterSensitiveLog = (obj: GetResourcesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata that you apply to AWS resources to help you categorize and organize
 *             them. Each tag consists of a key and a value, both of which you define. For more
 *             information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
 *                 Resources</a> in the <i>AWS General Reference</i>.</p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>A list of resource ARNs and the tags (keys and values) that are associated with
 *             each.</p>
 */
export interface ResourceTagMapping {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags that have been applied to one or more AWS resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information that shows whether a resource is compliant with the effective tag policy,
   *             including details on any noncompliant tag keys.</p>
   */
  ComplianceDetails?: ComplianceDetails;
}

export namespace ResourceTagMapping {
  export const filterSensitiveLog = (obj: ResourceTagMapping): any => ({
    ...obj,
  });
}

export interface GetResourcesOutput {
  /**
   * <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of resource ARNs and the tags (keys and values) associated with each.</p>
   */
  ResourceTagMappingList?: ResourceTagMapping[];
}

export namespace GetResourcesOutput {
  export const filterSensitiveLog = (obj: GetResourcesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was
 *             denied because the specified <code>PaginationToken</code> has expired.</p>
 */
export interface PaginationTokenExpiredException extends __SmithyException, $MetadataBearer {
  name: "PaginationTokenExpiredException";
  $fault: "client";
  Message?: string;
}

export namespace PaginationTokenExpiredException {
  export const filterSensitiveLog = (obj: PaginationTokenExpiredException): any => ({
    ...obj,
  });
}

export interface GetTagKeysInput {
  /**
   * <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   */
  PaginationToken?: string;

  MaxResults?: number;
}

export namespace GetTagKeysInput {
  export const filterSensitiveLog = (obj: GetTagKeysInput): any => ({
    ...obj,
  });
}

export interface GetTagKeysOutput {
  /**
   * <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of all tag keys in the AWS account.</p>
   */
  TagKeys?: string[];
}

export namespace GetTagKeysOutput {
  export const filterSensitiveLog = (obj: GetTagKeysOutput): any => ({
    ...obj,
  });
}

export interface GetTagValuesInput {
  /**
   * <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   */
  PaginationToken?: string;

  /**
   * <p>The key for which you want to list all existing values in the specified Region for the
   *             AWS account.</p>
   */
  Key: string | undefined;

  MaxResults?: number;
}

export namespace GetTagValuesInput {
  export const filterSensitiveLog = (obj: GetTagValuesInput): any => ({
    ...obj,
  });
}

export interface GetTagValuesOutput {
  /**
   * <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of all tag values for the specified key in the AWS account.</p>
   */
  TagValues?: string[];
}

export namespace GetTagValuesOutput {
  export const filterSensitiveLog = (obj: GetTagValuesOutput): any => ({
    ...obj,
  });
}

export interface StartReportCreationInput {
  /**
   * <p>The name of the Amazon S3 bucket where the report will be stored; for example:</p>
   *         <p>
   *             <code>awsexamplebucket</code>
   *          </p>
   *         <p>For more information on S3 bucket requirements, including an example bucket policy,
   *             see the example S3 bucket policy on this page.</p>
   */
  S3Bucket: string | undefined;
}

export namespace StartReportCreationInput {
  export const filterSensitiveLog = (obj: StartReportCreationInput): any => ({
    ...obj,
  });
}

export interface StartReportCreationOutput {}

export namespace StartReportCreationOutput {
  export const filterSensitiveLog = (obj: StartReportCreationOutput): any => ({
    ...obj,
  });
}

export interface TagResourcesInput {
  /**
   * <p>A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. For more
   *             information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *                 Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General
   *                 Reference</i>.</p>
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>The tags that you want to add to the specified resources. A tag consists of a key and
   *             a value that you define.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourcesInput {
  export const filterSensitiveLog = (obj: TagResourcesInput): any => ({
    ...obj,
  });
}

export interface TagResourcesOutput {
  /**
   * <p>A map containing a key-value pair for each failed item that couldn't be tagged. The
   *             key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object
   *             that contains an error code, a status code, and an error message. If there are no
   *             errors, the <code>FailedResourcesMap</code> is empty.</p>
   */
  FailedResourcesMap?: { [key: string]: FailureInfo };
}

export namespace TagResourcesOutput {
  export const filterSensitiveLog = (obj: TagResourcesOutput): any => ({
    ...obj,
  });
}

export interface UntagResourcesInput {
  /**
   * <p>A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. For more
   *             information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *                 Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General
   *                 Reference</i>.</p>
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>A list of the tag keys that you want to remove from the specified resources.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourcesInput {
  export const filterSensitiveLog = (obj: UntagResourcesInput): any => ({
    ...obj,
  });
}

export interface UntagResourcesOutput {
  /**
   * <p>Details of resources that could not be untagged. An error code, status code, and error
   *             message are returned for each failed item. </p>
   */
  FailedResourcesMap?: { [key: string]: FailureInfo };
}

export namespace UntagResourcesOutput {
  export const filterSensitiveLog = (obj: UntagResourcesOutput): any => ({
    ...obj,
  });
}
