// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ResourceGroupsTaggingAPIServiceException as __BaseException } from "./ResourceGroupsTaggingAPIServiceException";

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

/**
 * <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied because performing this operation violates a constraint. </p>
 *         <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *         <ul>
 *             <li>
 *                 <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html">Prerequisites and Permissions for Using Tag Policies</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with Organizations For
 *                     information, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                 <p>You must have a tag policy attached to the organization root, an OU, or an
 *                     account.</p>
 *             </li>
 *          </ul>
 */
export class ConstraintViolationException extends __BaseException {
  readonly name: "ConstraintViolationException" = "ConstraintViolationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConstraintViolationException, __BaseException>) {
    super({
      name: "ConstraintViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConstraintViolationException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeReportCreationInput {}

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

/**
 * <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
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
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html#bucket-policies-org-report">Additional Requirements for Organization-wide Tag Compliance
 *                         Reports</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied to limit the frequency of submitted requests.</p>
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
  }
}

export enum ErrorCode {
  INTERNAL_SERVICE_EXCEPTION = "InternalServiceException",
  INVALID_PARAMETER_EXCEPTION = "InvalidParameterException",
}

/**
 * <p>Information about the errors that are returned for each failed resource. This
 *             information can include <code>InternalServiceException</code> and
 *                 <code>InvalidParameterException</code> errors. It can also include any valid error
 *             code returned by the Amazon Web Services service that hosts the resource that the ARN key
 *             represents.</p>
 *         <p>The following are common error codes that you might receive from other Amazon Web Services
 *             services:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>InternalServiceException</b> – This can
 *                     mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It
 *                     can also mean that the resource type in the request is not supported by the
 *                     Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>AccessDeniedException</b> – This can mean
 *                     that you need permission to call the tagging operations in the Amazon Web Services service
 *                     that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch
 *                     alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html">
 *                      <code>TagResources</code>
 *                   </a>
 *                     <i>and</i>
 *                     <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">
 *                      <code>TagResource</code>
 *                   </a> in the CloudWatch API. </p>
 *             </li>
 *          </ul>
 *         <p>For more information on errors that are generated from other Amazon Web Services services, see the
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
   *             any valid error code returned by the Amazon Web Services service that hosts the resource that you want
   *             to tag.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The message of the common error.</p>
   */
  ErrorMessage?: string;
}

export enum GroupByAttribute {
  REGION = "REGION",
  RESOURCE_TYPE = "RESOURCE_TYPE",
  TARGET_ID = "TARGET_ID",
}

export interface GetComplianceSummaryInput {
  /**
   * <p>Specifies target identifiers (usually, specific account IDs) to limit the output by.
   *             If you use this parameter, the count of returned noncompliant resources includes only
   *             resources with the specified target IDs.</p>
   */
  TargetIdFilters?: string[];

  /**
   * <p>Specifies a list of Amazon Web Services Regions to limit the output to. If you use this parameter,
   *             the count of returned noncompliant resources includes only resources in the specified
   *             Regions.</p>
   */
  RegionFilters?: string[];

  /**
   * <p>Specifies that you want the response to include information for only resources of the
   *             specified types. The format of each resource type is
   *             <code>service[:resourceType]</code>. For example, specifying a resource type of
   *                 <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances).
   *             Specifying a resource type of <code>ec2:instance</code> returns only EC2
   *             instances.</p>
   *         <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN). Consult the <i>
   *                <a href="https://docs.aws.amazon.com/general/latest/gr/">Amazon Web Services General Reference</a>
   *             </i>
   *             for the following:</p>
   *         <ul>
   *             <li>
   *                 <p>For a list of service name strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services Service Namespaces</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For resource type strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax">Example
   *                         ARNs</a>.</p>
   *             </li>
   *             <li>
   *                 <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names
   *                         (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   *             </li>
   *          </ul>
   *         <p>You can specify multiple resource types by using a comma separated array. The array
   *             can include up to 100 items. Note that the length constraint requirement applies to each
   *             resource type filter. </p>
   */
  ResourceTypeFilters?: string[];

  /**
   * <p>Specifies that you want the response to include information for only resources that
   *             have tags with the specified tag keys. If you use this parameter, the count of returned
   *             noncompliant resources includes only resources that have the specified tag keys.</p>
   */
  TagKeyFilters?: string[];

  /**
   * <p>Specifies a list of attributes to group the counts of noncompliant resources by. If
   *             supplied, the counts are sorted by those attributes.</p>
   */
  GroupBy?: (GroupByAttribute | string)[];

  /**
   * <p>Specifies the maximum number of results to be returned in each page. A
   *     query can return fewer than this maximum, even if there are more results still to return. You
   *     should always check the <code>PaginationToken</code> response value to see if there are more
   *     results. You can specify a minimum of 1 and a maximum value of 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   */
  PaginationToken?: string;
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
   *             the root ID, you can call the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html">ListRoots</a> API.</p>
   */
  TargetId?: string;

  /**
   * <p>Whether the target is an account, an OU, or the organization root.</p>
   */
  TargetIdType?: TargetIdType | string;

  /**
   * <p>The Amazon Web Services Region that the summary applies to.</p>
   */
  Region?: string;

  /**
   * <p>The Amazon Web Services resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The count of noncompliant resources.</p>
   */
  NonCompliantResources?: number;
}

export interface GetComplianceSummaryOutput {
  /**
   * <p>A table that shows counts of noncompliant resources.</p>
   */
  SummaryList?: Summary[];

  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   */
  PaginationToken?: string;
}

/**
 * <p>A list of tags (keys and values) that are used to specify the associated
 *             resources.</p>
 */
export interface TagFilter {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label
   *     that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a
   *     descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Values?: string[];
}

export interface GetResourcesInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>Specifies a list of TagFilters (keys and values) to restrict the output to only those
   *             resources that have tags with the specified keys and, if included, the specified values.
   *             Each <code>TagFilter</code> must contain a key with values optional. A request can
   *             include up to 50 keys, and each key can include up to 20 values. </p>
   *         <p>Note the following when deciding how to use TagFilters:</p>
   *         <ul>
   *             <li>
   *                 <p>If you <i>don't</i> specify a <code>TagFilter</code>, the
   *                     response includes all resources that are currently tagged or ever had a tag.
   *                     Resources that currently don't have tags are shown with an empty tag set, like
   *                     this: <code>"Tags": []</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify more than one filter in a single request, the response returns
   *                     only those resources that satisfy all filters.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a filter that contains more than one value for a key, the
   *                     response returns resources that match <i>any</i> of the specified
   *                     values for that key.</p>
   *             </li>
   *             <li>
   *                 <p>If you don't specify a value for a key, the response returns all resources
   *                     that are tagged with that key, with any or no value.</p>
   *                 <p>For example, for the following filters: <code>filter1= {keyA,{value1}}</code>,
   *                         <code>filter2={keyB,{value2,value3,value4}}</code>, <code>filter3=
   *                         {keyC}</code>:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>GetResources({filter1})</code> returns resources tagged with
   *                                 <code>key1=value1</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>GetResources({filter2})</code> returns resources tagged with
   *                                 <code>key2=value2</code> or <code>key2=value3</code> or
   *                                 <code>key2=value4</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>GetResources({filter3})</code> returns resources tagged with any
   *                             tag with the key <code>key3</code>, and with any or no value</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>GetResources({filter1,filter2,filter3})</code> returns resources
   *                             tagged with <code>(key1=value1) and (key2=value2 or key2=value3 or
   *                                 key2=value4) and (key3, any or no value)</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  TagFilters?: TagFilter[];

  /**
   * <p>Specifies the maximum number of results to be returned in each page. A
   *     query can return fewer than this maximum, even if there are more results still to return. You
   *     should always check the <code>PaginationToken</code> response value to see if there are more
   *     results. You can specify a minimum of 1 and a maximum value of 100.</p>
   */
  ResourcesPerPage?: number;

  /**
   * <p>Amazon Web Services recommends using <code>ResourcesPerPage</code> instead of this parameter.</p>
   *         <p>A limit that restricts the number of tags (key and value pairs) returned by
   *                 <code>GetResources</code> in paginated output. A resource with no tags is counted as
   *             having one tag (one key and value pair).</p>
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
   *         <p>You can set <code>TagsPerPage</code> to a minimum of 100 items up to a maximum of 500
   *             items.</p>
   */
  TagsPerPage?: number;

  /**
   * <p>Specifies the resource types that you want included in the response. The format of
   *             each resource type is <code>service[:resourceType]</code>. For example, specifying a
   *             resource type of <code>ec2</code> returns all Amazon EC2 resources (which includes EC2
   *             instances). Specifying a resource type of <code>ec2:instance</code> returns only EC2
   *             instances. </p>
   *         <p>The string for each service name and resource type is the same as that embedded in a
   *             resource's Amazon Resource Name (ARN). For the list of services whose resources you can
   *             use in this parameter, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>.</p>
   *         <p>You can specify multiple resource types by using an array. The array can include up to
   *             100 items. Note that the length constraint requirement applies to each resource type
   *             filter. For example, the following string would limit the response to only Amazon EC2
   *             instances, Amazon S3 buckets, or any Audit Manager resource:</p>
   *         <p>
   *             <code>ec2:instance,s3:bucket,auditmanager</code>
   *          </p>
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

  /**
   * <p>Specifies a list of ARNs of resources for which you want to retrieve tag data. You
   *             can't specify both this parameter and any of the pagination parameters
   *                 (<code>ResourcesPerPage</code>, <code>TagsPerPage</code>,
   *                 <code>PaginationToken</code>) in the same request. If you specify both, you get an
   *                 <code>Invalid Parameter</code> exception.</p>
   *         <p>If a resource specified by this parameter doesn't exist, it doesn't generate an error;
   *             it simply isn't included in the response.</p>
   *         <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARNList?: string[];
}

/**
 * <p>The metadata that you apply to Amazon Web Services resources to help you categorize and organize
 *             them. Each tag consists of a key and a value, both of which you define. For more
 *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label
   *     that acts like a category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * <p>One part of a key-value pair that make up a tag. A value acts as a
   *     descriptor within a tag category (key). The value can be empty or null.</p>
   */
  Value: string | undefined;
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
   * <p>The tags that have been applied to one or more Amazon Web Services resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information that shows whether a resource is compliant with the effective tag policy,
   *             including details on any noncompliant tag keys.</p>
   */
  ComplianceDetails?: ComplianceDetails;
}

export interface GetResourcesOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of resource ARNs and the tags (keys and values) associated with
   *     each.</p>
   */
  ResourceTagMappingList?: ResourceTagMapping[];
}

/**
 * <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was
 *             denied because the specified <code>PaginationToken</code> has expired.</p>
 */
export class PaginationTokenExpiredException extends __BaseException {
  readonly name: "PaginationTokenExpiredException" = "PaginationTokenExpiredException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PaginationTokenExpiredException, __BaseException>) {
    super({
      name: "PaginationTokenExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PaginationTokenExpiredException.prototype);
    this.Message = opts.Message;
  }
}

export interface GetTagKeysInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   */
  PaginationToken?: string;
}

export interface GetTagKeysOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of all tag keys in the Amazon Web Services account.</p>
   */
  TagKeys?: string[];
}

export interface GetTagValuesInput {
  /**
   * <p>Specifies a <code>PaginationToken</code> response value from a
   *     previous request to indicate that you want the next page of results. Leave this parameter empty
   *     in your initial request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>Specifies the tag key for which you want to list all existing values that are
   *             currently used in the specified Amazon Web Services Region for the calling account.</p>
   */
  Key: string | undefined;
}

export interface GetTagValuesOutput {
  /**
   * <p>A string that indicates that there is more data available than this
   *     response contains. To receive the next part of the response, specify this response value
   *     as the <code>PaginationToken</code> value in the request for the next page.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of all tag values for the specified key currently used in the specified Amazon Web Services
   *             Region for the calling account.</p>
   */
  TagValues?: string[];
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

export interface StartReportCreationOutput {}

export interface TagResourcesInput {
  /**
   * <p>Specifies the list of ARNs of the resources that you want to apply tags to.</p>
   *         <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services
   *                 General Reference</i>.</p>
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>Specifies a list of tags that you want to add to the specified resources. A tag
   *             consists of a key and a value that you define.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourcesOutput {
  /**
   * <p>A map containing a key-value pair for each failed item that couldn't be tagged. The
   *             key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object
   *             that contains an error code, a status code, and an error message. If there are no
   *             errors, the <code>FailedResourcesMap</code> is empty.</p>
   */
  FailedResourcesMap?: Record<string, FailureInfo>;
}

export interface UntagResourcesInput {
  /**
   * <p>Specifies a list of ARNs of the resources that you want to remove tags from.</p>
   *         <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *                 Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services
   *                 General Reference</i>.</p>
   */
  ResourceARNList: string[] | undefined;

  /**
   * <p>Specifies a list of tag keys that you want to remove from the specified
   *             resources.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourcesOutput {
  /**
   * <p>A map containing a key-value pair for each failed item that couldn't be untagged. The
   *             key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object
   *             that contains an error code, a status code, and an error message. If there are no
   *             errors, the <code>FailedResourcesMap</code> is empty.</p>
   */
  FailedResourcesMap?: Record<string, FailureInfo>;
}

/**
 * @internal
 */
export const ComplianceDetailsFilterSensitiveLog = (obj: ComplianceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportCreationInputFilterSensitiveLog = (obj: DescribeReportCreationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportCreationOutputFilterSensitiveLog = (obj: DescribeReportCreationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailureInfoFilterSensitiveLog = (obj: FailureInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComplianceSummaryInputFilterSensitiveLog = (obj: GetComplianceSummaryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SummaryFilterSensitiveLog = (obj: Summary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComplianceSummaryOutputFilterSensitiveLog = (obj: GetComplianceSummaryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterFilterSensitiveLog = (obj: TagFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcesInputFilterSensitiveLog = (obj: GetResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceTagMappingFilterSensitiveLog = (obj: ResourceTagMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcesOutputFilterSensitiveLog = (obj: GetResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagKeysInputFilterSensitiveLog = (obj: GetTagKeysInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagKeysOutputFilterSensitiveLog = (obj: GetTagKeysOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagValuesInputFilterSensitiveLog = (obj: GetTagValuesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTagValuesOutputFilterSensitiveLog = (obj: GetTagValuesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReportCreationInputFilterSensitiveLog = (obj: StartReportCreationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReportCreationOutputFilterSensitiveLog = (obj: StartReportCreationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourcesInputFilterSensitiveLog = (obj: TagResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourcesOutputFilterSensitiveLog = (obj: TagResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourcesInputFilterSensitiveLog = (obj: UntagResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourcesOutputFilterSensitiveLog = (obj: UntagResourcesOutput): any => ({
  ...obj,
});
