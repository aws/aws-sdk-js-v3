import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         <p>Information that shows whether a resource is compliant with the effective tag policy,
 *             including details on any noncompliant tag keys.</p>
 *
 */
export interface ComplianceDetails {
  __type?: "ComplianceDetails";
  /**
   *
   *         <p>Whether a resource is compliant with the effective tag policy.</p>
   *
   */
  ComplianceStatus?: boolean;

  /**
   *
   *         <p>The tag value is noncompliant with the effective tag policy.</p>
   *
   */
  KeysWithNoncompliantValues?: Array<string>;

  /**
   *
   *         <p>The tag key is noncompliant with the effective tag policy.</p>
   *
   */
  NoncompliantKeys?: Array<string>;
}

export namespace ComplianceDetails {
  export function isa(o: any): o is ComplianceDetails {
    return _smithy.isa(o, "ComplianceDetails");
  }
}

export enum ErrorCode {
  INTERNAL_SERVICE_EXCEPTION = "InternalServiceException",
  INVALID_PARAMETER_EXCEPTION = "InvalidParameterException"
}

/**
 *
 *         <p>Details of the common errors that all actions return.</p>
 *
 */
export interface FailureInfo {
  __type?: "FailureInfo";
  /**
   *
   *         <p>The code of the common error. Valid values include
   *                 <code>InternalServiceException</code>, <code>InvalidParameterException</code>, and
   *             any valid error code returned by the AWS service that hosts the resource that you want
   *             to tag.</p>
   *
   */
  ErrorCode?: ErrorCode | string;

  /**
   *
   *         <p>The message of the common error.</p>
   *
   */
  ErrorMessage?: string;

  /**
   *
   *         <p>The HTTP status code of the common error.</p>
   *
   */
  StatusCode?: number;
}

export namespace FailureInfo {
  export function isa(o: any): o is FailureInfo {
    return _smithy.isa(o, "FailureInfo");
  }
}

export interface GetResourcesInput {
  __type?: "GetResourcesInput";
  /**
   *
   *         <p>Specifies whether to exclude resources that are compliant with the tag policy. Set
   *             this to <code>true</code> if you are interested in retrieving information on
   *             noncompliant resources only.</p>
   *         <p>You can use this parameter only if the <code>IncludeComplianceDetails</code> parameter
   *             is also set to <code>true</code>.</p>
   *
   */
  ExcludeCompliantResources?: boolean;

  /**
   *
   *         <p>Specifies whether to include details regarding the compliance with the effective tag
   *             policy. Set this to <code>true</code> to determine whether resources are compliant with
   *             the tag policy and to get details.</p>
   *
   */
  IncludeComplianceDetails?: boolean;

  /**
   *
   *         <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   *
   */
  PaginationToken?: string;

  /**
   *
   *         <p>The constraints on the resources that you want returned. The format of each resource
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
   *
   */
  ResourceTypeFilters?: Array<string>;

  /**
   *
   *         <p>A limit that restricts the number of resources returned by GetResources in paginated
   *             output. You can set ResourcesPerPage to a minimum of 1 item and the maximum of 100
   *             items. </p>
   *
   */
  ResourcesPerPage?: number;

  /**
   *
   *         <p>A list of TagFilters (keys and values). Each TagFilter specified must contain a key
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
   *
   */
  TagFilters?: Array<TagFilter>;

  /**
   *
   *         <p>AWS recommends using <code>ResourcesPerPage</code> instead of this parameter.</p>
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
   *
   */
  TagsPerPage?: number;
}

export namespace GetResourcesInput {
  export function isa(o: any): o is GetResourcesInput {
    return _smithy.isa(o, "GetResourcesInput");
  }
}

export interface GetResourcesOutput extends $MetadataBearer {
  __type?: "GetResourcesOutput";
  /**
   *
   *         <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   *
   */
  PaginationToken?: string;

  /**
   *
   *          <p>A list of resource ARNs and the tags (keys and values) associated with each.</p>
   *
   */
  ResourceTagMappingList?: Array<ResourceTagMapping>;
}

export namespace GetResourcesOutput {
  export function isa(o: any): o is GetResourcesOutput {
    return _smithy.isa(o, "GetResourcesOutput");
  }
}

export interface GetTagKeysInput {
  __type?: "GetTagKeysInput";
  MaxResults?: number;
  /**
   *
   *         <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   *
   */
  PaginationToken?: string;
}

export namespace GetTagKeysInput {
  export function isa(o: any): o is GetTagKeysInput {
    return _smithy.isa(o, "GetTagKeysInput");
  }
}

export interface GetTagKeysOutput extends $MetadataBearer {
  __type?: "GetTagKeysOutput";
  /**
   *
   *         <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   *
   */
  PaginationToken?: string;

  /**
   *
   *         <p>A list of all tag keys in the AWS account.</p>
   *
   */
  TagKeys?: Array<string>;
}

export namespace GetTagKeysOutput {
  export function isa(o: any): o is GetTagKeysOutput {
    return _smithy.isa(o, "GetTagKeysOutput");
  }
}

export interface GetTagValuesInput {
  __type?: "GetTagValuesInput";
  /**
   *
   *         <p>The key for which you want to list all existing values in the specified Region for the
   *             AWS account.</p>
   *
   */
  Key: string | undefined;

  MaxResults?: number;
  /**
   *
   *         <p>A string that indicates that additional data is available. Leave this value empty for
   *             your initial request. If the response includes a <code>PaginationToken</code>, use that
   *             string for this value to request an additional page of data.</p>
   *
   */
  PaginationToken?: string;
}

export namespace GetTagValuesInput {
  export function isa(o: any): o is GetTagValuesInput {
    return _smithy.isa(o, "GetTagValuesInput");
  }
}

export interface GetTagValuesOutput extends $MetadataBearer {
  __type?: "GetTagValuesOutput";
  /**
   *
   *         <p>A string that indicates that the response contains more data than can be returned in a
   *             single response. To receive additional data, specify this string for the
   *                 <code>PaginationToken</code> value in a subsequent request.</p>
   *
   */
  PaginationToken?: string;

  /**
   *
   *         <p>A list of all tag values for the specified key in the AWS account.</p>
   *
   */
  TagValues?: Array<string>;
}

export namespace GetTagValuesOutput {
  export function isa(o: any): o is GetTagValuesOutput {
    return _smithy.isa(o, "GetTagValuesOutput");
  }
}

/**
 *
 *         <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 */
export interface InternalServiceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServiceException";
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return _smithy.isa(o, "InternalServiceException");
  }
}

/**
 *
 *         <p>This error indicates one of the following:</p>
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
 *
 */
export interface InvalidParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterException";
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 *
 *         <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was
 *             denied because the specified <code>PaginationToken</code> has expired.</p>
 *
 */
export interface PaginationTokenExpiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PaginationTokenExpiredException";
  name: "PaginationTokenExpiredException";
  $fault: "client";
  Message?: string;
}

export namespace PaginationTokenExpiredException {
  export function isa(o: any): o is PaginationTokenExpiredException {
    return _smithy.isa(o, "PaginationTokenExpiredException");
  }
}

/**
 *
 *         <p>A list of resource ARNs and the tags (keys and values) that are associated with
 *             each.</p>
 *
 */
export interface ResourceTagMapping {
  __type?: "ResourceTagMapping";
  /**
   *
   *         <p>Information that shows whether a resource is compliant with the effective tag policy,
   *             including details on any noncompliant tag keys.</p>
   *
   */
  ComplianceDetails?: ComplianceDetails;

  /**
   *
   *         <p>The ARN of the resource.</p>
   *
   */
  ResourceARN?: string;

  /**
   *
   *         <p>The tags that have been applied to one or more AWS resources.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ResourceTagMapping {
  export function isa(o: any): o is ResourceTagMapping {
    return _smithy.isa(o, "ResourceTagMapping");
  }
}

/**
 *
 *         <p>The metadata that you apply to AWS resources to help you categorize and organize
 *             them. Each tag consists of a key and an optional value, both of which you define. For
 *             more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
 *                 Resources</a> in the <i>AWS General Reference</i>.</p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *          <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *          <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   *
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 *
 *         <p>A list of tags (keys and values) that are used to specify the associated
 *             resources.</p>
 *
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   *
   *          <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   *
   */
  Key?: string;

  /**
   *
   *          <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   *
   */
  Values?: Array<string>;
}

export namespace TagFilter {
  export function isa(o: any): o is TagFilter {
    return _smithy.isa(o, "TagFilter");
  }
}

export interface TagResourcesInput {
  __type?: "TagResourcesInput";
  /**
   *
   *         <p>A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can
   *             specify a minimum of 1 and a maximum of 20 ARNs (resources) to tag. An ARN can be set to
   *             a maximum of 1600 characters. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *                 Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General
   *                 Reference</i>.</p>
   *
   */
  ResourceARNList: Array<string> | undefined;

  /**
   *
   *         <p>The tags that you want to add to the specified resources. A tag consists of a key and
   *             a value that you define.</p>
   *
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourcesInput {
  export function isa(o: any): o is TagResourcesInput {
    return _smithy.isa(o, "TagResourcesInput");
  }
}

export interface TagResourcesOutput extends $MetadataBearer {
  __type?: "TagResourcesOutput";
  /**
   *
   *         <p>Details of resources that could not be tagged. An error code, status code, and error
   *             message are returned for each failed item.</p>
   *
   */
  FailedResourcesMap?: { [key: string]: FailureInfo };
}

export namespace TagResourcesOutput {
  export function isa(o: any): o is TagResourcesOutput {
    return _smithy.isa(o, "TagResourcesOutput");
  }
}

/**
 *
 *         <p>The request was denied to limit the frequency of submitted requests.</p>
 *
 */
export interface ThrottledException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottledException";
  name: "ThrottledException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottledException {
  export function isa(o: any): o is ThrottledException {
    return _smithy.isa(o, "ThrottledException");
  }
}

export interface UntagResourcesInput {
  __type?: "UntagResourcesInput";
  /**
   *
   *         <p>A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can
   *             specify a minimum of 1 and a maximum of 20 ARNs (resources) to untag. An ARN can be set
   *             to a maximum of 1600 characters. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *                 Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General
   *                 Reference</i>.</p>
   *
   */
  ResourceARNList: Array<string> | undefined;

  /**
   *
   *         <p>A list of the tag keys that you want to remove from the specified resources.</p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourcesInput {
  export function isa(o: any): o is UntagResourcesInput {
    return _smithy.isa(o, "UntagResourcesInput");
  }
}

export interface UntagResourcesOutput extends $MetadataBearer {
  __type?: "UntagResourcesOutput";
  /**
   *
   *         <p>Details of resources that could not be untagged. An error code, status code, and error
   *             message are returned for each failed item. </p>
   *
   */
  FailedResourcesMap?: { [key: string]: FailureInfo };
}

export namespace UntagResourcesOutput {
  export function isa(o: any): o is UntagResourcesOutput {
    return _smithy.isa(o, "UntagResourcesOutput");
  }
}
