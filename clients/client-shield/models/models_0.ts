import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>In order to grant the necessary access to the DDoS Response Team (DRT), the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
 */
export interface AccessDeniedForDependencyException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedForDependencyException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedForDependencyException {
  export const filterSensitiveLog = (obj: AccessDeniedForDependencyException): any => ({
    ...obj,
  });
}

export interface AssociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
   */
  LogBucket: string | undefined;
}

export namespace AssociateDRTLogBucketRequest {
  export const filterSensitiveLog = (obj: AssociateDRTLogBucketRequest): any => ({
    ...obj,
  });
}

export interface AssociateDRTLogBucketResponse {}

export namespace AssociateDRTLogBucketResponse {
  export const filterSensitiveLog = (obj: AssociateDRTLogBucketResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You
 *          can retry the request.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a particular parameter passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the parameter that failed validation.</p>
   */
  name: string | undefined;

  /**
   * <p>The message describing why the parameter failed validation.</p>
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
}

/**
 * <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
  /**
   * <p>Additional information about the exception.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Fields that caused the exception.</p>
   */
  fields?: ValidationExceptionField[];
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that the operation would exceed a limit.</p>
 *          <p>
 *             <code>Type</code> is the type of limit that would be exceeded.</p>
 *          <p>
 *             <code>Limit</code> is the threshold that would be exceeded.</p>
 */
export interface LimitsExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitsExceededException";
  $fault: "client";
  message?: string;
  Type?: string;
  Limit?: number;
}

export namespace LimitsExceededException {
  export const filterSensitiveLog = (obj: LimitsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The ARN of the role that you specifed does not exist.</p>
 */
export interface NoAssociatedRoleException extends __SmithyException, $MetadataBearer {
  name: "NoAssociatedRoleException";
  $fault: "client";
  message?: string;
}

export namespace NoAssociatedRoleException {
  export const filterSensitiveLog = (obj: NoAssociatedRoleException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 */
export interface OptimisticLockException extends __SmithyException, $MetadataBearer {
  name: "OptimisticLockException";
  $fault: "client";
  message?: string;
}

export namespace OptimisticLockException {
  export const filterSensitiveLog = (obj: OptimisticLockException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
  /**
   * <p>Type of resource.</p>
   */
  resourceType?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface AssociateDRTRoleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the DRT will use to access your AWS account.</p>
   * 	        <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role.  For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>
   */
  RoleArn: string | undefined;
}

export namespace AssociateDRTRoleRequest {
  export const filterSensitiveLog = (obj: AssociateDRTRoleRequest): any => ({
    ...obj,
  });
}

export interface AssociateDRTRoleResponse {}

export namespace AssociateDRTRoleResponse {
  export const filterSensitiveLog = (obj: AssociateDRTRoleResponse): any => ({
    ...obj,
  });
}

export interface AssociateHealthCheckRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to add the health check association to. </p>
   */
  ProtectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the health check to associate with the protection.</p>
   */
  HealthCheckArn: string | undefined;
}

export namespace AssociateHealthCheckRequest {
  export const filterSensitiveLog = (obj: AssociateHealthCheckRequest): any => ({
    ...obj,
  });
}

export interface AssociateHealthCheckResponse {}

export namespace AssociateHealthCheckResponse {
  export const filterSensitiveLog = (obj: AssociateHealthCheckResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
 */
export interface EmergencyContact {
  /**
   * <p>The email address for the contact.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The phone number for the contact.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>Additional notes regarding the contact. </p>
   */
  ContactNotes?: string;
}

export namespace EmergencyContact {
  export const filterSensitiveLog = (obj: EmergencyContact): any => ({
    ...obj,
  });
}

export interface AssociateProactiveEngagementDetailsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support. </p>
   *          <p>To enable proactive engagement, the contact list must include at least one phone number.</p>
   *          <note>
   *             <p>The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it here.  </p>
   *          </note>
   */
  EmergencyContactList: EmergencyContact[] | undefined;
}

export namespace AssociateProactiveEngagementDetailsRequest {
  export const filterSensitiveLog = (obj: AssociateProactiveEngagementDetailsRequest): any => ({
    ...obj,
  });
}

export interface AssociateProactiveEngagementDetailsResponse {}

export namespace AssociateProactiveEngagementDetailsResponse {
  export const filterSensitiveLog = (obj: AssociateProactiveEngagementDetailsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The counter that describes a DDoS attack.</p>
 */
export interface SummarizedCounter {
  /**
   * <p>The counter name.</p>
   */
  Name?: string;

  /**
   * <p>The maximum value of the counter for a specified time period.</p>
   */
  Max?: number;

  /**
   * <p>The average value of the counter for a specified time period.</p>
   */
  Average?: number;

  /**
   * <p>The total of counter values for a specified time period.</p>
   */
  Sum?: number;

  /**
   * <p>The number of counters for a specified time period.</p>
   */
  N?: number;

  /**
   * <p>The unit of the counters.</p>
   */
  Unit?: string;
}

export namespace SummarizedCounter {
  export const filterSensitiveLog = (obj: SummarizedCounter): any => ({
    ...obj,
  });
}

export enum AttackLayer {
  APPLICATION = "APPLICATION",
  NETWORK = "NETWORK",
}

export enum AttackPropertyIdentifier {
  DESTINATION_URL = "DESTINATION_URL",
  REFERRER = "REFERRER",
  SOURCE_ASN = "SOURCE_ASN",
  SOURCE_COUNTRY = "SOURCE_COUNTRY",
  SOURCE_IP_ADDRESS = "SOURCE_IP_ADDRESS",
  SOURCE_USER_AGENT = "SOURCE_USER_AGENT",
  WORDPRESS_PINGBACK_REFLECTOR = "WORDPRESS_PINGBACK_REFLECTOR",
  WORDPRESS_PINGBACK_SOURCE = "WORDPRESS_PINGBACK_SOURCE",
}

/**
 * <p>A contributor to the attack and their contribution.</p>
 */
export interface Contributor {
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
  export const filterSensitiveLog = (obj: Contributor): any => ({
    ...obj,
  });
}

export enum Unit {
  BITS = "BITS",
  BYTES = "BYTES",
  PACKETS = "PACKETS",
  REQUESTS = "REQUESTS",
}

/**
 * <p>Details of the described attack.</p>
 */
export interface AttackProperty {
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
   * <p>The array of contributor objects that includes the top five contributors to an attack. </p>
   */
  TopContributors?: Contributor[];

  /**
   * <p>The unit of the <code>Value</code> of the contributions.</p>
   */
  Unit?: Unit | string;

  /**
   * <p>The total contributions made to this attack by all contributors, not just the five listed in the <code>TopContributors</code> list.</p>
   */
  Total?: number;
}

export namespace AttackProperty {
  export const filterSensitiveLog = (obj: AttackProperty): any => ({
    ...obj,
  });
}

/**
 * <p>The mitigation applied to a DDoS attack.</p>
 */
export interface Mitigation {
  /**
   * <p>The name of the mitigation taken for this attack.</p>
   */
  MitigationName?: string;
}

export namespace Mitigation {
  export const filterSensitiveLog = (obj: Mitigation): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about the attack.</p>
 */
export interface SummarizedAttackVector {
  /**
   * <p>The attack type, for example, SNMP reflection or SYN flood.</p>
   */
  VectorType: string | undefined;

  /**
   * <p>The list of counters that describe the details of the attack.</p>
   */
  VectorCounters?: SummarizedCounter[];
}

export namespace SummarizedAttackVector {
  export const filterSensitiveLog = (obj: SummarizedAttackVector): any => ({
    ...obj,
  });
}

export enum SubResourceType {
  IP = "IP",
  URL = "URL",
}

/**
 * <p>The attack information for the specified SubResource.</p>
 */
export interface SubResourceSummary {
  /**
   * <p>The <code>SubResource</code> type.</p>
   */
  Type?: SubResourceType | string;

  /**
   * <p>The unique identifier (ID) of the <code>SubResource</code>.</p>
   */
  Id?: string;

  /**
   * <p>The list of attack types and associated counters.</p>
   */
  AttackVectors?: SummarizedAttackVector[];

  /**
   * <p>The counters that describe the details of the attack.</p>
   */
  Counters?: SummarizedCounter[];
}

export namespace SubResourceSummary {
  export const filterSensitiveLog = (obj: SubResourceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a DDoS attack.</p>
 */
export interface AttackDetail {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</p>
   */
  SubResources?: SubResourceSummary[];

  /**
   * <p>The time the attack started, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the attack ended, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   */
  AttackCounters?: SummarizedCounter[];

  /**
   * <p>The array of <a>AttackProperty</a> objects.</p>
   */
  AttackProperties?: AttackProperty[];

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   */
  Mitigations?: Mitigation[];
}

export namespace AttackDetail {
  export const filterSensitiveLog = (obj: AttackDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics objects for the various data types in <a>AttackVolume</a>. </p>
 */
export interface AttackVolumeStatistics {
  /**
   * <p>The maximum attack volume observed for the given unit.</p>
   */
  Max: number | undefined;
}

export namespace AttackVolumeStatistics {
  export const filterSensitiveLog = (obj: AttackVolumeStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.</p>
 */
export interface AttackVolume {
  /**
   * <p>A statistics object that uses bits per second as the unit. This is included for network level attacks. </p>
   */
  BitsPerSecond?: AttackVolumeStatistics;

  /**
   * <p>A statistics object that uses packets per second as the unit. This is included for network level attacks. </p>
   */
  PacketsPerSecond?: AttackVolumeStatistics;

  /**
   * <p>A statistics object that uses requests per second as the unit. This is included for application level attacks, and is only available for accounts that are subscribed to Shield Advanced.</p>
   */
  RequestsPerSecond?: AttackVolumeStatistics;
}

export namespace AttackVolume {
  export const filterSensitiveLog = (obj: AttackVolume): any => ({
    ...obj,
  });
}

/**
 * <p>A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.  </p>
 */
export interface AttackStatisticsDataItem {
  /**
   * <p>Information about the volume of attacks during the time period. If the accompanying <code>AttackCount</code> is zero, this setting might be empty.</p>
   */
  AttackVolume?: AttackVolume;

  /**
   * <p>The number of attacks detected during the time period. This is always present, but might be zero. </p>
   */
  AttackCount: number | undefined;
}

export namespace AttackStatisticsDataItem {
  export const filterSensitiveLog = (obj: AttackStatisticsDataItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the attack.</p>
 */
export interface AttackVectorDescription {
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
  export const filterSensitiveLog = (obj: AttackVectorDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Summarizes all DDoS attacks for a specified time period.</p>
 */
export interface AttackSummary {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The start time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>The list of attacks for a specified time period.</p>
   */
  AttackVectors?: AttackVectorDescription[];
}

export namespace AttackSummary {
  export const filterSensitiveLog = (obj: AttackSummary): any => ({
    ...obj,
  });
}

export enum AutoRenew {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateProtectionRequest {
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
  export const filterSensitiveLog = (obj: CreateProtectionRequest): any => ({
    ...obj,
  });
}

export interface CreateProtectionResponse {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is created.</p>
   */
  ProtectionId?: string;
}

export namespace CreateProtectionResponse {
  export const filterSensitiveLog = (obj: CreateProtectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 */
export interface InvalidResourceException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceException";
  $fault: "client";
  message?: string;
}

export namespace InvalidResourceException {
  export const filterSensitiveLog = (obj: InvalidResourceException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception indicating the specified resource already exists. If available, this exception includes details in additional properties. </p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The type of resource that already exists.</p>
   */
  resourceType?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export enum ProtectionGroupAggregation {
  MAX = "MAX",
  MEAN = "MEAN",
  SUM = "SUM",
}

export enum ProtectionGroupPattern {
  ALL = "ALL",
  ARBITRARY = "ARBITRARY",
  BY_RESOURCE_TYPE = "BY_RESOURCE_TYPE",
}

export enum ProtectedResourceType {
  APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER",
  CLASSIC_LOAD_BALANCER = "CLASSIC_LOAD_BALANCER",
  CLOUDFRONT_DISTRIBUTION = "CLOUDFRONT_DISTRIBUTION",
  ELASTIC_IP_ALLOCATION = "ELASTIC_IP_ALLOCATION",
  GLOBAL_ACCELERATOR = "GLOBAL_ACCELERATOR",
  ROUTE_53_HOSTED_ZONE = "ROUTE_53_HOSTED_ZONE",
}

export interface CreateProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
   *             </li>
   *          </ul>
   */
  Aggregation: ProtectionGroupAggregation | string | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type. </p>
   */
  Pattern: ProtectionGroupPattern | string | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  ResourceType?: ProtectedResourceType | string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  Members?: string[];
}

export namespace CreateProtectionGroupRequest {
  export const filterSensitiveLog = (obj: CreateProtectionGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateProtectionGroupResponse {}

export namespace CreateProtectionGroupResponse {
  export const filterSensitiveLog = (obj: CreateProtectionGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionRequest {}

export namespace CreateSubscriptionRequest {
  export const filterSensitiveLog = (obj: CreateSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionResponse {}

export namespace CreateSubscriptionResponse {
  export const filterSensitiveLog = (obj: CreateSubscriptionResponse): any => ({
    ...obj,
  });
}

export interface DeleteProtectionRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to be
   *          deleted.</p>
   */
  ProtectionId: string | undefined;
}

export namespace DeleteProtectionRequest {
  export const filterSensitiveLog = (obj: DeleteProtectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProtectionResponse {}

export namespace DeleteProtectionResponse {
  export const filterSensitiveLog = (obj: DeleteProtectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;
}

export namespace DeleteProtectionGroupRequest {
  export const filterSensitiveLog = (obj: DeleteProtectionGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteProtectionGroupResponse {}

export namespace DeleteProtectionGroupResponse {
  export const filterSensitiveLog = (obj: DeleteProtectionGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteSubscriptionRequest {}

export namespace DeleteSubscriptionRequest {
  export const filterSensitiveLog = (obj: DeleteSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubscriptionResponse {}

export namespace DeleteSubscriptionResponse {
  export const filterSensitiveLog = (obj: DeleteSubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 */
export interface LockedSubscriptionException extends __SmithyException, $MetadataBearer {
  name: "LockedSubscriptionException";
  $fault: "client";
  message?: string;
}

export namespace LockedSubscriptionException {
  export const filterSensitiveLog = (obj: LockedSubscriptionException): any => ({
    ...obj,
  });
}

export interface DescribeAttackRequest {
  /**
   * <p>The unique identifier (ID) for the attack that to be described.</p>
   */
  AttackId: string | undefined;
}

export namespace DescribeAttackRequest {
  export const filterSensitiveLog = (obj: DescribeAttackRequest): any => ({
    ...obj,
  });
}

export interface DescribeAttackResponse {
  /**
   * <p>The attack that is described.</p>
   */
  Attack?: AttackDetail;
}

export namespace DescribeAttackResponse {
  export const filterSensitiveLog = (obj: DescribeAttackResponse): any => ({
    ...obj,
  });
}

export interface DescribeAttackStatisticsRequest {}

export namespace DescribeAttackStatisticsRequest {
  export const filterSensitiveLog = (obj: DescribeAttackStatisticsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The time range. </p>
 */
export interface TimeRange {
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
  export const filterSensitiveLog = (obj: TimeRange): any => ({
    ...obj,
  });
}

export interface DescribeAttackStatisticsResponse {
  /**
   * <p>The time range. </p>
   */
  TimeRange: TimeRange | undefined;

  /**
   * <p>The data that describes the attacks detected during the time period.</p>
   */
  DataItems: AttackStatisticsDataItem[] | undefined;
}

export namespace DescribeAttackStatisticsResponse {
  export const filterSensitiveLog = (obj: DescribeAttackStatisticsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDRTAccessRequest {}

export namespace DescribeDRTAccessRequest {
  export const filterSensitiveLog = (obj: DescribeDRTAccessRequest): any => ({
    ...obj,
  });
}

export interface DescribeDRTAccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the DRT used to access your AWS account.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of Amazon S3 buckets accessed by the DRT.</p>
   */
  LogBucketList?: string[];
}

export namespace DescribeDRTAccessResponse {
  export const filterSensitiveLog = (obj: DescribeDRTAccessResponse): any => ({
    ...obj,
  });
}

export interface DescribeEmergencyContactSettingsRequest {}

export namespace DescribeEmergencyContactSettingsRequest {
  export const filterSensitiveLog = (obj: DescribeEmergencyContactSettingsRequest): any => ({
    ...obj,
  });
}

export interface DescribeEmergencyContactSettingsResponse {
  /**
   * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
   */
  EmergencyContactList?: EmergencyContact[];
}

export namespace DescribeEmergencyContactSettingsResponse {
  export const filterSensitiveLog = (obj: DescribeEmergencyContactSettingsResponse): any => ({
    ...obj,
  });
}

export interface DescribeProtectionRequest {
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
  export const filterSensitiveLog = (obj: DescribeProtectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a resource that is under DDoS protection.</p>
 */
export interface Protection {
  /**
   * <p>The unique identifier (ID) of the protection.</p>
   */
  Id?: string;

  /**
   * <p>The name of the protection. For example, <code>My CloudFront distributions</code>.</p>
   */
  Name?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the AWS resource that is protected.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The unique identifier (ID) for the Route 53 health check that's associated with the protection. </p>
   */
  HealthCheckIds?: string[];
}

export namespace Protection {
  export const filterSensitiveLog = (obj: Protection): any => ({
    ...obj,
  });
}

export interface DescribeProtectionResponse {
  /**
   * <p>The <a>Protection</a> object that is described.</p>
   */
  Protection?: Protection;
}

export namespace DescribeProtectionResponse {
  export const filterSensitiveLog = (obj: DescribeProtectionResponse): any => ({
    ...obj,
  });
}

export interface DescribeProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;
}

export namespace DescribeProtectionGroupRequest {
  export const filterSensitiveLog = (obj: DescribeProtectionGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A grouping of protected resources that you and AWS Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 */
export interface ProtectionGroup {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
   *             </li>
   *          </ul>
   */
  Aggregation: ProtectionGroupAggregation | string | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.</p>
   */
  Pattern: ProtectionGroupPattern | string | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  ResourceType?: ProtectedResourceType | string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  Members: string[] | undefined;
}

export namespace ProtectionGroup {
  export const filterSensitiveLog = (obj: ProtectionGroup): any => ({
    ...obj,
  });
}

export interface DescribeProtectionGroupResponse {
  /**
   * <p>A grouping of protected resources that you and AWS Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
   */
  ProtectionGroup: ProtectionGroup | undefined;
}

export namespace DescribeProtectionGroupResponse {
  export const filterSensitiveLog = (obj: DescribeProtectionGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeSubscriptionRequest {}

export namespace DescribeSubscriptionRequest {
  export const filterSensitiveLog = (obj: DescribeSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how many protections of a given type you can create.</p>
 */
export interface Limit {
  /**
   * <p>The type of protection.</p>
   */
  Type?: string;

  /**
   * <p>The maximum number of protections that can be created for the specified <code>Type</code>.</p>
   */
  Max?: number;
}

export namespace Limit {
  export const filterSensitiveLog = (obj: Limit): any => ({
    ...obj,
  });
}

export enum ProactiveEngagementStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  PENDING = "PENDING",
}

/**
 * <p>Limits settings on protection groups with arbitrary pattern type. </p>
 */
export interface ProtectionGroupArbitraryPatternLimits {
  /**
   * <p>The maximum number of resources you can specify for a single arbitrary pattern in a protection group.</p>
   */
  MaxMembers: number | undefined;
}

export namespace ProtectionGroupArbitraryPatternLimits {
  export const filterSensitiveLog = (obj: ProtectionGroupArbitraryPatternLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
 */
export interface ProtectionGroupPatternTypeLimits {
  /**
   * <p>Limits settings on protection groups with arbitrary pattern type. </p>
   */
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits | undefined;
}

export namespace ProtectionGroupPatternTypeLimits {
  export const filterSensitiveLog = (obj: ProtectionGroupPatternTypeLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Limits settings on protection groups for your subscription. </p>
 */
export interface ProtectionGroupLimits {
  /**
   * <p>The maximum number of protection groups that you can have at one time. </p>
   */
  MaxProtectionGroups: number | undefined;

  /**
   * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
   */
  PatternTypeLimits: ProtectionGroupPatternTypeLimits | undefined;
}

export namespace ProtectionGroupLimits {
  export const filterSensitiveLog = (obj: ProtectionGroupLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Limits settings on protections for your subscription. </p>
 */
export interface ProtectionLimits {
  /**
   * <p>The maximum number of resource types that you can specify in a protection.</p>
   */
  ProtectedResourceTypeLimits: Limit[] | undefined;
}

export namespace ProtectionLimits {
  export const filterSensitiveLog = (obj: ProtectionLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Limits settings for your subscription. </p>
 */
export interface SubscriptionLimits {
  /**
   * <p>Limits settings on protections for your subscription. </p>
   */
  ProtectionLimits: ProtectionLimits | undefined;

  /**
   * <p>Limits settings on protection groups for your subscription. </p>
   */
  ProtectionGroupLimits: ProtectionGroupLimits | undefined;
}

export namespace SubscriptionLimits {
  export const filterSensitiveLog = (obj: SubscriptionLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the AWS Shield Advanced subscription for an account.</p>
 */
export interface Subscription {
  /**
   * <p>The start time of the subscription, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time your subscription will end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The length, in seconds, of the AWS Shield Advanced subscription for the account.</p>
   */
  TimeCommitmentInSeconds?: number;

  /**
   * <p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p>
   *          <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: AutoRenew | string;

  /**
   * <p>Specifies how many protections of a given type you can create.</p>
   */
  Limits?: Limit[];

  /**
   * <p>If <code>ENABLED</code>, the DDoS Response Team (DRT) will use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
   *          <p>If <code>PENDING</code>, you have requested proactive engagement and the request is pending. The status changes to <code>ENABLED</code> when your request is fully processed.</p>
   *          <p>If <code>DISABLED</code>, the DRT will not proactively notify contacts about escalations or to initiate proactive customer support. </p>
   */
  ProactiveEngagementStatus?: ProactiveEngagementStatus | string;

  /**
   * <p>Limits settings for your subscription. </p>
   */
  SubscriptionLimits: SubscriptionLimits | undefined;
}

export namespace Subscription {
  export const filterSensitiveLog = (obj: Subscription): any => ({
    ...obj,
  });
}

export interface DescribeSubscriptionResponse {
  /**
   * <p>The AWS Shield Advanced subscription details for an account.</p>
   */
  Subscription?: Subscription;
}

export namespace DescribeSubscriptionResponse {
  export const filterSensitiveLog = (obj: DescribeSubscriptionResponse): any => ({
    ...obj,
  });
}

export interface DisableProactiveEngagementRequest {}

export namespace DisableProactiveEngagementRequest {
  export const filterSensitiveLog = (obj: DisableProactiveEngagementRequest): any => ({
    ...obj,
  });
}

export interface DisableProactiveEngagementResponse {}

export namespace DisableProactiveEngagementResponse {
  export const filterSensitiveLog = (obj: DisableProactiveEngagementResponse): any => ({
    ...obj,
  });
}

export interface DisassociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
   */
  LogBucket: string | undefined;
}

export namespace DisassociateDRTLogBucketRequest {
  export const filterSensitiveLog = (obj: DisassociateDRTLogBucketRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDRTLogBucketResponse {}

export namespace DisassociateDRTLogBucketResponse {
  export const filterSensitiveLog = (obj: DisassociateDRTLogBucketResponse): any => ({
    ...obj,
  });
}

export interface DisassociateDRTRoleRequest {}

export namespace DisassociateDRTRoleRequest {
  export const filterSensitiveLog = (obj: DisassociateDRTRoleRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDRTRoleResponse {}

export namespace DisassociateDRTRoleResponse {
  export const filterSensitiveLog = (obj: DisassociateDRTRoleResponse): any => ({
    ...obj,
  });
}

export interface DisassociateHealthCheckRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to remove the health check association from. </p>
   */
  ProtectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the health check that is associated with the protection.</p>
   */
  HealthCheckArn: string | undefined;
}

export namespace DisassociateHealthCheckRequest {
  export const filterSensitiveLog = (obj: DisassociateHealthCheckRequest): any => ({
    ...obj,
  });
}

export interface DisassociateHealthCheckResponse {}

export namespace DisassociateHealthCheckResponse {
  export const filterSensitiveLog = (obj: DisassociateHealthCheckResponse): any => ({
    ...obj,
  });
}

export interface EnableProactiveEngagementRequest {}

export namespace EnableProactiveEngagementRequest {
  export const filterSensitiveLog = (obj: EnableProactiveEngagementRequest): any => ({
    ...obj,
  });
}

export interface EnableProactiveEngagementResponse {}

export namespace EnableProactiveEngagementResponse {
  export const filterSensitiveLog = (obj: EnableProactiveEngagementResponse): any => ({
    ...obj,
  });
}

export interface GetSubscriptionStateRequest {}

export namespace GetSubscriptionStateRequest {
  export const filterSensitiveLog = (obj: GetSubscriptionStateRequest): any => ({
    ...obj,
  });
}

export enum SubscriptionState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface GetSubscriptionStateResponse {
  /**
   * <p>The status of the subscription.</p>
   */
  SubscriptionState: SubscriptionState | string | undefined;
}

export namespace GetSubscriptionStateResponse {
  export const filterSensitiveLog = (obj: GetSubscriptionStateResponse): any => ({
    ...obj,
  });
}

export interface ListAttacksRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked. If this is left
   *          blank, all applicable resources for this account will be included.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>The start of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
   */
  StartTime?: TimeRange;

  /**
   * <p>The end of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
   */
  EndTime?: TimeRange;

  /**
   * <p>The <code>ListAttacksRequest.NextMarker</code> value from a previous call to <code>ListAttacksRequest</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of <a>AttackSummary</a> objects to return. If you leave this blank,
   *          Shield Advanced returns the first 20 results.</p>
   *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListAttacksRequest {
  export const filterSensitiveLog = (obj: ListAttacksRequest): any => ({
    ...obj,
  });
}

export interface ListAttacksResponse {
  /**
   * <p>The attack information for the specified time range.</p>
   */
  AttackSummaries?: AttackSummary[];

  /**
   * <p>The token returned by a previous call to indicate that there is more data available.
   *          If not null, more results are available. Pass this value for the <code>NextMarker</code>
   *          parameter in a subsequent call to <code>ListAttacks</code> to retrieve the next set of
   *          items.</p>
   *          <p>Shield Advanced might return the list of <a>AttackSummary</a> objects in batches smaller than the number specified by MaxResults. If there are more attack summary objects to return, Shield Advanced will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAttacksResponse {
  export const filterSensitiveLog = (obj: ListAttacksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationTokenException {
  export const filterSensitiveLog = (obj: InvalidPaginationTokenException): any => ({
    ...obj,
  });
}

export interface ListProtectionGroupsRequest {
  /**
   * <p>The next token value from a previous call to <code>ListProtectionGroups</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of <a>ProtectionGroup</a> objects to return. If you leave this blank,
   *          Shield Advanced returns the first 20 results.</p>
   *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListProtectionGroupsRequest {
  export const filterSensitiveLog = (obj: ListProtectionGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListProtectionGroupsResponse {
  /**
   * <p></p>
   */
  ProtectionGroups: ProtectionGroup[] | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more protection groups than the value of MaxResults, AWS Shield Advanced returns this token that you can use in your next request, to get the next batch of objects. </p>
   */
  NextToken?: string;
}

export namespace ListProtectionGroupsResponse {
  export const filterSensitiveLog = (obj: ListProtectionGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListProtectionsRequest {
  /**
   * <p>The <code>ListProtectionsRequest.NextToken</code> value from a previous call to <code>ListProtections</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of <a>Protection</a> objects to return. If you leave this blank,
   *          Shield Advanced returns the first 20 results.</p>
   *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListProtectionsRequest {
  export const filterSensitiveLog = (obj: ListProtectionsRequest): any => ({
    ...obj,
  });
}

export interface ListProtectionsResponse {
  /**
   * <p>The array of enabled <a>Protection</a> objects.</p>
   */
  Protections?: Protection[];

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more Protections than the value of MaxResults, AWS Shield Advanced returns a NextToken value in the response that allows you to list another group of Protections. For the second and subsequent ListProtections requests, specify the value of NextToken from the previous response to get information about another batch of Protections.</p>
   *          <p>Shield Advanced might return the list of <a>Protection</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>Protection</a> objects to return, Shield Advanced will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListProtectionsResponse {
  export const filterSensitiveLog = (obj: ListProtectionsResponse): any => ({
    ...obj,
  });
}

export interface ListResourcesInProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>The next token value from a previous call to <code>ListResourcesInProtectionGroup</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of resource ARN objects to return. If you leave this blank,
   *          Shield Advanced returns the first 20 results.</p>
   *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListResourcesInProtectionGroupRequest {
  export const filterSensitiveLog = (obj: ListResourcesInProtectionGroupRequest): any => ({
    ...obj,
  });
}

export interface ListResourcesInProtectionGroupResponse {
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources that are included in the protection group.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more resources in the protection group than the value of MaxResults, AWS Shield Advanced returns this token that you can use in your next request, to get the next batch of objects. </p>
   */
  NextToken?: string;
}

export namespace ListResourcesInProtectionGroupResponse {
  export const filterSensitiveLog = (obj: ListResourcesInProtectionGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateEmergencyContactSettingsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
   *          <p>If you have proactive engagement enabled, the contact list must include at least one phone number.</p>
   */
  EmergencyContactList?: EmergencyContact[];
}

export namespace UpdateEmergencyContactSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateEmergencyContactSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateEmergencyContactSettingsResponse {}

export namespace UpdateEmergencyContactSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateEmergencyContactSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
   *             </li>
   *          </ul>
   */
  Aggregation: ProtectionGroupAggregation | string | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.</p>
   */
  Pattern: ProtectionGroupPattern | string | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  ResourceType?: ProtectedResourceType | string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  Members?: string[];
}

export namespace UpdateProtectionGroupRequest {
  export const filterSensitiveLog = (obj: UpdateProtectionGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateProtectionGroupResponse {}

export namespace UpdateProtectionGroupResponse {
  export const filterSensitiveLog = (obj: UpdateProtectionGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateSubscriptionRequest {
  /**
   * <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: AutoRenew | string;
}

export namespace UpdateSubscriptionRequest {
  export const filterSensitiveLog = (obj: UpdateSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSubscriptionResponse {}

export namespace UpdateSubscriptionResponse {
  export const filterSensitiveLog = (obj: UpdateSubscriptionResponse): any => ({
    ...obj,
  });
}
