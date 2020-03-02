import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>In order to grant the necessary access to the DDoS Response Team, the user submitting  <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
 */
export interface AccessDeniedForDependencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedForDependencyException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedForDependencyException {
  export function isa(o: any): o is AccessDeniedForDependencyException {
    return __isa(o, "AccessDeniedForDependencyException");
  }
}

export interface AssociateDRTLogBucketRequest {
  __type?: "AssociateDRTLogBucketRequest";
  /**
   * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
   */
  LogBucket: string | undefined;
}

export namespace AssociateDRTLogBucketRequest {
  export function isa(o: any): o is AssociateDRTLogBucketRequest {
    return __isa(o, "AssociateDRTLogBucketRequest");
  }
}

export interface AssociateDRTLogBucketResponse {
  __type?: "AssociateDRTLogBucketResponse";
}

export namespace AssociateDRTLogBucketResponse {
  export function isa(o: any): o is AssociateDRTLogBucketResponse {
    return __isa(o, "AssociateDRTLogBucketResponse");
  }
}

export interface AssociateDRTRoleRequest {
  __type?: "AssociateDRTRoleRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the role the DRT will use to access your AWS account.</p>
   * 	        <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role.  For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>
   */
  RoleArn: string | undefined;
}

export namespace AssociateDRTRoleRequest {
  export function isa(o: any): o is AssociateDRTRoleRequest {
    return __isa(o, "AssociateDRTRoleRequest");
  }
}

export interface AssociateDRTRoleResponse {
  __type?: "AssociateDRTRoleResponse";
}

export namespace AssociateDRTRoleResponse {
  export function isa(o: any): o is AssociateDRTRoleResponse {
    return __isa(o, "AssociateDRTRoleResponse");
  }
}

/**
 * <p>The details of a DDoS attack.</p>
 */
export interface AttackDetail {
  __type?: "AttackDetail";
  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   */
  AttackCounters?: Array<SummarizedCounter>;

  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The array of <a>AttackProperty</a> objects.</p>
   */
  AttackProperties?: Array<AttackProperty>;

  /**
   * <p>The time the attack ended, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   */
  Mitigations?: Array<Mitigation>;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The time the attack started, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>If applicable, additional detail about the resource being attacked, for example, IP
   *          address or URL.</p>
   */
  SubResources?: Array<SubResourceSummary>;
}

export namespace AttackDetail {
  export function isa(o: any): o is AttackDetail {
    return __isa(o, "AttackDetail");
  }
}

export enum AttackLayer {
  APPLICATION = "APPLICATION",
  NETWORK = "NETWORK"
}

/**
 * <p>Details of the described attack.</p>
 */
export interface AttackProperty {
  __type?: "AttackProperty";
  /**
   * <p>The type of distributed denial of service (DDoS) event that was observed.
   *             <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code>
   *          indicates layer 7 events.</p>
   */
  AttackLayer?: AttackLayer | string;

  /**
   * <p>Defines the DDoS attack property information that is provided. The
   *             <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code>
   *          values are valid only for WordPress reflective pingback DDoS attacks.</p>
   */
  AttackPropertyIdentifier?: AttackPropertyIdentifier | string;

  /**
   * <p>The array of <a>Contributor</a> objects that includes the top five contributors to an attack. </p>
   */
  TopContributors?: Array<Contributor>;

  /**
   * <p>The total contributions made to this attack by all contributors, not just the five listed in the <code>TopContributors</code> list.</p>
   */
  Total?: number;

  /**
   * <p>The unit of the <code>Value</code> of the contributions.</p>
   */
  Unit?: Unit | string;
}

export namespace AttackProperty {
  export function isa(o: any): o is AttackProperty {
    return __isa(o, "AttackProperty");
  }
}

export enum AttackPropertyIdentifier {
  DESTINATION_URL = "DESTINATION_URL",
  REFERRER = "REFERRER",
  SOURCE_ASN = "SOURCE_ASN",
  SOURCE_COUNTRY = "SOURCE_COUNTRY",
  SOURCE_IP_ADDRESS = "SOURCE_IP_ADDRESS",
  SOURCE_USER_AGENT = "SOURCE_USER_AGENT",
  WORDPRESS_PINGBACK_REFLECTOR = "WORDPRESS_PINGBACK_REFLECTOR",
  WORDPRESS_PINGBACK_SOURCE = "WORDPRESS_PINGBACK_SOURCE"
}

/**
 * <p>Summarizes all DDoS attacks for a specified time period.</p>
 */
export interface AttackSummary {
  __type?: "AttackSummary";
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The list of attacks for a specified time period.</p>
   */
  AttackVectors?: Array<AttackVectorDescription>;

  /**
   * <p>The end time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The start time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;
}

export namespace AttackSummary {
  export function isa(o: any): o is AttackSummary {
    return __isa(o, "AttackSummary");
  }
}

/**
 * <p>Describes the attack.</p>
 */
export interface AttackVectorDescription {
  __type?: "AttackVectorDescription";
  /**
   * <p>The attack type. Valid values:</p>
   * 	        <ul>
   *             <li>
   *                <p>UDP_TRAFFIC</p>
   *             </li>
   *             <li>
   *                <p>UDP_FRAGMENT</p>
   *             </li>
   *             <li>
   *                <p>GENERIC_UDP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>DNS_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>NTP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>CHARGEN_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>SSDP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>PORT_MAPPER</p>
   *             </li>
   *             <li>
   *                <p>RIP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>SNMP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>MSSQL_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>NET_BIOS_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>SYN_FLOOD</p>
   *             </li>
   *             <li>
   *                <p>ACK_FLOOD</p>
   *             </li>
   *             <li>
   *                <p>REQUEST_FLOOD</p>
   *             </li>
   *             <li>
   *                <p>HTTP_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>UDS_REFLECTION</p>
   *             </li>
   *             <li>
   *                <p>MEMCACHED_REFLECTION</p>
   *             </li>
   *          </ul>
   */
  VectorType: string | undefined;
}

export namespace AttackVectorDescription {
  export function isa(o: any): o is AttackVectorDescription {
    return __isa(o, "AttackVectorDescription");
  }
}

export enum AutoRenew {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>A contributor to the attack and their contribution.</p>
 */
export interface Contributor {
  __type?: "Contributor";
  /**
   * <p>The name of the contributor. This is dependent on the <code>AttackPropertyIdentifier</code>. For example, if the <code>AttackPropertyIdentifier</code> is <code>SOURCE_COUNTRY</code>, the <code>Name</code> could be <code>United States</code>.</p>
   */
  Name?: string;

  /**
   * <p>The contribution of this contributor expressed in <a>Protection</a> units. For example <code>10,000</code>.</p>
   */
  Value?: number;
}

export namespace Contributor {
  export function isa(o: any): o is Contributor {
    return __isa(o, "Contributor");
  }
}

export interface CreateProtectionRequest {
  __type?: "CreateProtectionRequest";
  /**
   * <p>Friendly name for the <code>Protection</code> you are creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource to be protected.</p>
   *          <p>The ARN should be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Elastic Load Balancer (Classic Load Balancer): <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/<i>load-balancer-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AWS CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AWS Global Accelerator accelerator: <code>arn:aws:globalaccelerator::<i>account-id</i>:accelerator/<i>accelerator-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For Amazon Route 53: <code>arn:aws:route53:::hostedzone/<i>hosted-zone-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Elastic IP address: <code>arn:aws:ec2:<i>region</i>:<i>account-id</i>:eip-allocation/<i>allocation-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

export namespace CreateProtectionRequest {
  export function isa(o: any): o is CreateProtectionRequest {
    return __isa(o, "CreateProtectionRequest");
  }
}

export interface CreateProtectionResponse {
  __type?: "CreateProtectionResponse";
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is
   *          created.</p>
   */
  ProtectionId?: string;
}

export namespace CreateProtectionResponse {
  export function isa(o: any): o is CreateProtectionResponse {
    return __isa(o, "CreateProtectionResponse");
  }
}

export interface CreateSubscriptionRequest {
  __type?: "CreateSubscriptionRequest";
}

export namespace CreateSubscriptionRequest {
  export function isa(o: any): o is CreateSubscriptionRequest {
    return __isa(o, "CreateSubscriptionRequest");
  }
}

export interface CreateSubscriptionResponse {
  __type?: "CreateSubscriptionResponse";
}

export namespace CreateSubscriptionResponse {
  export function isa(o: any): o is CreateSubscriptionResponse {
    return __isa(o, "CreateSubscriptionResponse");
  }
}

export interface DeleteProtectionRequest {
  __type?: "DeleteProtectionRequest";
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to be
   *          deleted.</p>
   */
  ProtectionId: string | undefined;
}

export namespace DeleteProtectionRequest {
  export function isa(o: any): o is DeleteProtectionRequest {
    return __isa(o, "DeleteProtectionRequest");
  }
}

export interface DeleteProtectionResponse {
  __type?: "DeleteProtectionResponse";
}

export namespace DeleteProtectionResponse {
  export function isa(o: any): o is DeleteProtectionResponse {
    return __isa(o, "DeleteProtectionResponse");
  }
}

export interface DeleteSubscriptionRequest {
  __type?: "DeleteSubscriptionRequest";
}

export namespace DeleteSubscriptionRequest {
  export function isa(o: any): o is DeleteSubscriptionRequest {
    return __isa(o, "DeleteSubscriptionRequest");
  }
}

export interface DeleteSubscriptionResponse {
  __type?: "DeleteSubscriptionResponse";
}

export namespace DeleteSubscriptionResponse {
  export function isa(o: any): o is DeleteSubscriptionResponse {
    return __isa(o, "DeleteSubscriptionResponse");
  }
}

export interface DescribeAttackRequest {
  __type?: "DescribeAttackRequest";
  /**
   * <p>The unique identifier (ID) for the attack that to be described.</p>
   */
  AttackId: string | undefined;
}

export namespace DescribeAttackRequest {
  export function isa(o: any): o is DescribeAttackRequest {
    return __isa(o, "DescribeAttackRequest");
  }
}

export interface DescribeAttackResponse {
  __type?: "DescribeAttackResponse";
  /**
   * <p>The attack that is described.</p>
   */
  Attack?: AttackDetail;
}

export namespace DescribeAttackResponse {
  export function isa(o: any): o is DescribeAttackResponse {
    return __isa(o, "DescribeAttackResponse");
  }
}

export interface DescribeDRTAccessRequest {
  __type?: "DescribeDRTAccessRequest";
}

export namespace DescribeDRTAccessRequest {
  export function isa(o: any): o is DescribeDRTAccessRequest {
    return __isa(o, "DescribeDRTAccessRequest");
  }
}

export interface DescribeDRTAccessResponse {
  __type?: "DescribeDRTAccessResponse";
  /**
   * <p>The list of Amazon S3 buckets accessed by the DRT.</p>
   */
  LogBucketList?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the role the DRT used to access your AWS account.</p>
   */
  RoleArn?: string;
}

export namespace DescribeDRTAccessResponse {
  export function isa(o: any): o is DescribeDRTAccessResponse {
    return __isa(o, "DescribeDRTAccessResponse");
  }
}

export interface DescribeEmergencyContactSettingsRequest {
  __type?: "DescribeEmergencyContactSettingsRequest";
}

export namespace DescribeEmergencyContactSettingsRequest {
  export function isa(o: any): o is DescribeEmergencyContactSettingsRequest {
    return __isa(o, "DescribeEmergencyContactSettingsRequest");
  }
}

export interface DescribeEmergencyContactSettingsResponse {
  __type?: "DescribeEmergencyContactSettingsResponse";
  /**
   * <p>A list of email addresses that the DRT can use to contact you during a suspected attack.</p>
   */
  EmergencyContactList?: Array<EmergencyContact>;
}

export namespace DescribeEmergencyContactSettingsResponse {
  export function isa(o: any): o is DescribeEmergencyContactSettingsResponse {
    return __isa(o, "DescribeEmergencyContactSettingsResponse");
  }
}

export interface DescribeProtectionRequest {
  __type?: "DescribeProtectionRequest";
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is
   *          described. When submitting the <code>DescribeProtection</code> request you must provide either the <code>ResourceArn</code> or the <code>ProtectionID</code>, but not both.</p>
   */
  ProtectionId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the AWS resource for the <a>Protection</a> object that is
   *          described. When submitting the <code>DescribeProtection</code> request you must provide either the <code>ResourceArn</code> or the <code>ProtectionID</code>, but not both.</p>
   */
  ResourceArn?: string;
}

export namespace DescribeProtectionRequest {
  export function isa(o: any): o is DescribeProtectionRequest {
    return __isa(o, "DescribeProtectionRequest");
  }
}

export interface DescribeProtectionResponse {
  __type?: "DescribeProtectionResponse";
  /**
   * <p>The <a>Protection</a> object that is described.</p>
   */
  Protection?: Protection;
}

export namespace DescribeProtectionResponse {
  export function isa(o: any): o is DescribeProtectionResponse {
    return __isa(o, "DescribeProtectionResponse");
  }
}

export interface DescribeSubscriptionRequest {
  __type?: "DescribeSubscriptionRequest";
}

export namespace DescribeSubscriptionRequest {
  export function isa(o: any): o is DescribeSubscriptionRequest {
    return __isa(o, "DescribeSubscriptionRequest");
  }
}

export interface DescribeSubscriptionResponse {
  __type?: "DescribeSubscriptionResponse";
  /**
   * <p>The AWS Shield Advanced subscription details for an account.</p>
   */
  Subscription?: Subscription;
}

export namespace DescribeSubscriptionResponse {
  export function isa(o: any): o is DescribeSubscriptionResponse {
    return __isa(o, "DescribeSubscriptionResponse");
  }
}

export interface DisassociateDRTLogBucketRequest {
  __type?: "DisassociateDRTLogBucketRequest";
  /**
   * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
   */
  LogBucket: string | undefined;
}

export namespace DisassociateDRTLogBucketRequest {
  export function isa(o: any): o is DisassociateDRTLogBucketRequest {
    return __isa(o, "DisassociateDRTLogBucketRequest");
  }
}

export interface DisassociateDRTLogBucketResponse {
  __type?: "DisassociateDRTLogBucketResponse";
}

export namespace DisassociateDRTLogBucketResponse {
  export function isa(o: any): o is DisassociateDRTLogBucketResponse {
    return __isa(o, "DisassociateDRTLogBucketResponse");
  }
}

export interface DisassociateDRTRoleRequest {
  __type?: "DisassociateDRTRoleRequest";
}

export namespace DisassociateDRTRoleRequest {
  export function isa(o: any): o is DisassociateDRTRoleRequest {
    return __isa(o, "DisassociateDRTRoleRequest");
  }
}

export interface DisassociateDRTRoleResponse {
  __type?: "DisassociateDRTRoleResponse";
}

export namespace DisassociateDRTRoleResponse {
  export function isa(o: any): o is DisassociateDRTRoleResponse {
    return __isa(o, "DisassociateDRTRoleResponse");
  }
}

/**
 * <p>Contact information that the DRT can use to contact you during a suspected attack.</p>
 */
export interface EmergencyContact {
  __type?: "EmergencyContact";
  /**
   * <p>An email address that the DRT can use to contact you during a suspected attack.</p>
   */
  EmailAddress: string | undefined;
}

export namespace EmergencyContact {
  export function isa(o: any): o is EmergencyContact {
    return __isa(o, "EmergencyContact");
  }
}

export interface GetSubscriptionStateRequest {
  __type?: "GetSubscriptionStateRequest";
}

export namespace GetSubscriptionStateRequest {
  export function isa(o: any): o is GetSubscriptionStateRequest {
    return __isa(o, "GetSubscriptionStateRequest");
  }
}

export interface GetSubscriptionStateResponse {
  __type?: "GetSubscriptionStateResponse";
  /**
   * <p>The status of the subscription.</p>
   */
  SubscriptionState: SubscriptionState | string | undefined;
}

export namespace GetSubscriptionStateResponse {
  export function isa(o: any): o is GetSubscriptionStateResponse {
    return __isa(o, "GetSubscriptionStateResponse");
  }
}

/**
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You
 *          can retry the request.</p>
 */
export interface InternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalErrorException {
  export function isa(o: any): o is InternalErrorException {
    return __isa(o, "InternalErrorException");
  }
}

/**
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
 */
export interface InvalidOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOperationException {
  export function isa(o: any): o is InvalidOperationException {
    return __isa(o, "InvalidOperationException");
  }
}

/**
 * <p>Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.</p>
 */
export interface InvalidPaginationTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationTokenException {
  export function isa(o: any): o is InvalidPaginationTokenException {
    return __isa(o, "InvalidPaginationTokenException");
  }
}

/**
 * <p>Exception that indicates that the parameters passed to the API are invalid. </p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 */
export interface InvalidResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceException";
  $fault: "client";
  message?: string;
}

export namespace InvalidResourceException {
  export function isa(o: any): o is InvalidResourceException {
    return __isa(o, "InvalidResourceException");
  }
}

/**
 * <p>Specifies how many protections of a given type you can create.</p>
 */
export interface Limit {
  __type?: "Limit";
  /**
   * <p>The maximum number of protections that can be created for the specified <code>Type</code>.</p>
   */
  Max?: number;

  /**
   * <p>The type of protection.</p>
   */
  Type?: string;
}

export namespace Limit {
  export function isa(o: any): o is Limit {
    return __isa(o, "Limit");
  }
}

/**
 * <p>Exception that indicates that the operation would exceed a limit.</p>
 *          <p>
 *             <code>Type</code> is the type of limit that would be exceeded.</p>
 *          <p>
 *             <code>Limit</code> is the threshold that would be exceeded.</p>
 */
export interface LimitsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitsExceededException";
  $fault: "client";
  Limit?: number;
  Type?: string;
  message?: string;
}

export namespace LimitsExceededException {
  export function isa(o: any): o is LimitsExceededException {
    return __isa(o, "LimitsExceededException");
  }
}

export interface ListAttacksRequest {
  __type?: "ListAttacksRequest";
  /**
   * <p>The end of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
   */
  EndTime?: TimeRange;

  /**
   * <p>The maximum number of <a>AttackSummary</a> objects to be returned. If this is left blank, the first 20 results will be returned.</p>
   *          <p>This is a maximum value; it is possible that AWS WAF will return the results in smaller batches. That is, the number of <a>AttackSummary</a> objects returned could be less than <code>MaxResults</code>, even if there are still more <a>AttackSummary</a> objects yet to return. If there are more <a>AttackSummary</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>ListAttacksRequest.NextMarker</code> value from a previous call to <code>ListAttacksRequest</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked. If this is left
   *          blank, all applicable resources for this account will be included.</p>
   */
  ResourceArns?: Array<string>;

  /**
   * <p>The start of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
   */
  StartTime?: TimeRange;
}

export namespace ListAttacksRequest {
  export function isa(o: any): o is ListAttacksRequest {
    return __isa(o, "ListAttacksRequest");
  }
}

export interface ListAttacksResponse {
  __type?: "ListAttacksResponse";
  /**
   * <p>The attack information for the specified time range.</p>
   */
  AttackSummaries?: Array<AttackSummary>;

  /**
   * <p>The token returned by a previous call to indicate that there is more data available.
   *          If not null, more results are available. Pass this value for the <code>NextMarker</code>
   *          parameter in a subsequent call to <code>ListAttacks</code> to retrieve the next set of
   *          items.</p>
   *          <p>AWS WAF might return the list of <a>AttackSummary</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>AttackSummary</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAttacksResponse {
  export function isa(o: any): o is ListAttacksResponse {
    return __isa(o, "ListAttacksResponse");
  }
}

export interface ListProtectionsRequest {
  __type?: "ListProtectionsRequest";
  /**
   * <p>The maximum number of <a>Protection</a> objects to be returned. If this is
   *          left blank the first 20 results will be returned.</p>
   *          <p>This is a maximum value; it is possible that AWS WAF will return the results in smaller batches. That is, the number of <a>Protection</a> objects returned could be less than <code>MaxResults</code>, even if there are still more <a>Protection</a> objects yet to return. If there are more <a>Protection</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>ListProtectionsRequest.NextToken</code> value from a previous call to <code>ListProtections</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListProtectionsRequest {
  export function isa(o: any): o is ListProtectionsRequest {
    return __isa(o, "ListProtectionsRequest");
  }
}

export interface ListProtectionsResponse {
  __type?: "ListProtectionsResponse";
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more Protections than the value of MaxResults, AWS Shield Advanced returns a NextToken value in the response that allows you to list another group of Protections. For the second and subsequent ListProtections requests, specify the value of NextToken from the previous response to get information about another batch of Protections.</p>
   *          <p>AWS WAF might return the list of <a>Protection</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>Protection</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The array of enabled <a>Protection</a> objects.</p>
   */
  Protections?: Array<Protection>;
}

export namespace ListProtectionsResponse {
  export function isa(o: any): o is ListProtectionsResponse {
    return __isa(o, "ListProtectionsResponse");
  }
}

/**
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 */
export interface LockedSubscriptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "LockedSubscriptionException";
  $fault: "client";
  message?: string;
}

export namespace LockedSubscriptionException {
  export function isa(o: any): o is LockedSubscriptionException {
    return __isa(o, "LockedSubscriptionException");
  }
}

/**
 * <p>The mitigation applied to a DDoS attack.</p>
 */
export interface Mitigation {
  __type?: "Mitigation";
  /**
   * <p>The name of the mitigation taken for this attack.</p>
   */
  MitigationName?: string;
}

export namespace Mitigation {
  export function isa(o: any): o is Mitigation {
    return __isa(o, "Mitigation");
  }
}

/**
 * <p>The ARN of the role that you specifed does not exist.</p>
 */
export interface NoAssociatedRoleException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAssociatedRoleException";
  $fault: "client";
  message?: string;
}

export namespace NoAssociatedRoleException {
  export function isa(o: any): o is NoAssociatedRoleException {
    return __isa(o, "NoAssociatedRoleException");
  }
}

/**
 * <p>Exception that indicates that the protection state has been modified by another
 *          client. You can retry the request.</p>
 */
export interface OptimisticLockException
  extends __SmithyException,
    $MetadataBearer {
  name: "OptimisticLockException";
  $fault: "client";
  message?: string;
}

export namespace OptimisticLockException {
  export function isa(o: any): o is OptimisticLockException {
    return __isa(o, "OptimisticLockException");
  }
}

/**
 * <p>An object that represents a resource that is under DDoS protection.</p>
 */
export interface Protection {
  __type?: "Protection";
  /**
   * <p>The unique identifier (ID) of the protection.</p>
   */
  Id?: string;

  /**
   * <p>The friendly name of the protection. For example, <code>My CloudFront distributions</code>.</p>
   */
  Name?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the AWS resource that is protected.</p>
   */
  ResourceArn?: string;
}

export namespace Protection {
  export function isa(o: any): o is Protection {
    return __isa(o, "Protection");
  }
}

/**
 * <p>Exception indicating the specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>Exception indicating the specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The attack information for the specified SubResource.</p>
 */
export interface SubResourceSummary {
  __type?: "SubResourceSummary";
  /**
   * <p>The list of attack types and associated counters.</p>
   */
  AttackVectors?: Array<SummarizedAttackVector>;

  /**
   * <p>The counters that describe the details of the attack.</p>
   */
  Counters?: Array<SummarizedCounter>;

  /**
   * <p>The unique identifier (ID) of the <code>SubResource</code>.</p>
   */
  Id?: string;

  /**
   * <p>The <code>SubResource</code> type.</p>
   */
  Type?: SubResourceType | string;
}

export namespace SubResourceSummary {
  export function isa(o: any): o is SubResourceSummary {
    return __isa(o, "SubResourceSummary");
  }
}

export enum SubResourceType {
  IP = "IP",
  URL = "URL"
}

/**
 * <p>Information about the AWS Shield Advanced subscription for an account.</p>
 */
export interface Subscription {
  __type?: "Subscription";
  /**
   * <p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p>
   *          <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: AutoRenew | string;

  /**
   * <p>The date and time your subscription will end.</p>
   */
  EndTime?: Date;

  /**
   * <p>Specifies how many protections of a given type you can create.</p>
   */
  Limits?: Array<Limit>;

  /**
   * <p>The start time of the subscription, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The length, in seconds, of the AWS Shield Advanced subscription for the account.</p>
   */
  TimeCommitmentInSeconds?: number;
}

export namespace Subscription {
  export function isa(o: any): o is Subscription {
    return __isa(o, "Subscription");
  }
}

export enum SubscriptionState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

/**
 * <p>A summary of information about the attack.</p>
 */
export interface SummarizedAttackVector {
  __type?: "SummarizedAttackVector";
  /**
   * <p>The list of counters that describe the details of the attack.</p>
   */
  VectorCounters?: Array<SummarizedCounter>;

  /**
   * <p>The attack type, for example, SNMP reflection or SYN flood.</p>
   */
  VectorType: string | undefined;
}

export namespace SummarizedAttackVector {
  export function isa(o: any): o is SummarizedAttackVector {
    return __isa(o, "SummarizedAttackVector");
  }
}

/**
 * <p>The counter that describes a DDoS attack.</p>
 */
export interface SummarizedCounter {
  __type?: "SummarizedCounter";
  /**
   * <p>The average value of the counter for a specified time period.</p>
   */
  Average?: number;

  /**
   * <p>The maximum value of the counter for a specified time period.</p>
   */
  Max?: number;

  /**
   * <p>The number of counters for a specified time period.</p>
   */
  N?: number;

  /**
   * <p>The counter name.</p>
   */
  Name?: string;

  /**
   * <p>The total of counter values for a specified time period.</p>
   */
  Sum?: number;

  /**
   * <p>The unit of the counters.</p>
   */
  Unit?: string;
}

export namespace SummarizedCounter {
  export function isa(o: any): o is SummarizedCounter {
    return __isa(o, "SummarizedCounter");
  }
}

/**
 * <p>The time range.</p>
 */
export interface TimeRange {
  __type?: "TimeRange";
  /**
   * <p>The start time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  FromInclusive?: Date;

  /**
   * <p>The end time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  ToExclusive?: Date;
}

export namespace TimeRange {
  export function isa(o: any): o is TimeRange {
    return __isa(o, "TimeRange");
  }
}

export enum Unit {
  BITS = "BITS",
  BYTES = "BYTES",
  PACKETS = "PACKETS",
  REQUESTS = "REQUESTS"
}

export interface UpdateEmergencyContactSettingsRequest {
  __type?: "UpdateEmergencyContactSettingsRequest";
  /**
   * <p>A list of email addresses that the DRT can use to contact you during a suspected attack.</p>
   */
  EmergencyContactList?: Array<EmergencyContact>;
}

export namespace UpdateEmergencyContactSettingsRequest {
  export function isa(o: any): o is UpdateEmergencyContactSettingsRequest {
    return __isa(o, "UpdateEmergencyContactSettingsRequest");
  }
}

export interface UpdateEmergencyContactSettingsResponse {
  __type?: "UpdateEmergencyContactSettingsResponse";
}

export namespace UpdateEmergencyContactSettingsResponse {
  export function isa(o: any): o is UpdateEmergencyContactSettingsResponse {
    return __isa(o, "UpdateEmergencyContactSettingsResponse");
  }
}

export interface UpdateSubscriptionRequest {
  __type?: "UpdateSubscriptionRequest";
  /**
   * <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: AutoRenew | string;
}

export namespace UpdateSubscriptionRequest {
  export function isa(o: any): o is UpdateSubscriptionRequest {
    return __isa(o, "UpdateSubscriptionRequest");
  }
}

export interface UpdateSubscriptionResponse {
  __type?: "UpdateSubscriptionResponse";
}

export namespace UpdateSubscriptionResponse {
  export function isa(o: any): o is UpdateSubscriptionResponse {
    return __isa(o, "UpdateSubscriptionResponse");
  }
}
