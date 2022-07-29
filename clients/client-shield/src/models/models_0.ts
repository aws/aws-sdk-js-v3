// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ShieldServiceException as __BaseException } from "./ShieldServiceException";

/**
 * <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p>
 */
export class AccessDeniedForDependencyException extends __BaseException {
  readonly name: "AccessDeniedForDependencyException" = "AccessDeniedForDependencyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedForDependencyException, __BaseException>) {
    super({
      name: "AccessDeniedForDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedForDependencyException.prototype);
  }
}

/**
 * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p>
 *             <p>This is only used in the context of the <code>ResponseAction</code> setting. </p>
 *          <p>JSON specification: <code>"Block": {}</code>
 *          </p>
 */
export interface BlockAction {}

/**
 * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p>
 *             <p>This is only used in the context of the <code>ResponseAction</code> setting. </p>
 *          <p>JSON specification: <code>"Count": {}</code>
 *          </p>
 */
export interface CountAction {}

/**
 * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
 *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
 *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
 */
export interface ResponseAction {
  /**
   * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p>
   *          <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>
   */
  Block?: BlockAction;

  /**
   * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p>
   *          <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>
   */
  Count?: CountAction;
}

export enum ApplicationLayerAutomaticResponseStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The automatic application layer DDoS mitigation settings for a <a>Protection</a>.
 *        This configuration determines whether Shield Advanced automatically
 *        manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. </p>
 */
export interface ApplicationLayerAutomaticResponseConfiguration {
  /**
   * <p>Indicates whether automatic application layer DDoS mitigation is enabled for the protection. </p>
   */
  Status: ApplicationLayerAutomaticResponseStatus | string | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   */
  Action: ResponseAction | undefined;
}

export interface AssociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains the logs that you want to share.</p>
   */
  LogBucket: string | undefined;
}

export interface AssociateDRTLogBucketResponse {}

/**
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
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

export enum ValidationExceptionReason {
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
}

/**
 * <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Fields that caused the exception.</p>
   */
  fields?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * <p>Exception that indicates that the operation would exceed a limit.</p>
 */
export class LimitsExceededException extends __BaseException {
  readonly name: "LimitsExceededException" = "LimitsExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The type of limit that would be exceeded.</p>
   */
  Type?: string;

  /**
   * <p>The threshold that would be exceeded.</p>
   */
  Limit?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitsExceededException, __BaseException>) {
    super({
      name: "LimitsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitsExceededException.prototype);
    this.Type = opts.Type;
    this.Limit = opts.Limit;
  }
}

/**
 * <p>The ARN of the role that you specified does not exist.</p>
 */
export class NoAssociatedRoleException extends __BaseException {
  readonly name: "NoAssociatedRoleException" = "NoAssociatedRoleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAssociatedRoleException, __BaseException>) {
    super({
      name: "NoAssociatedRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAssociatedRoleException.prototype);
  }
}

/**
 * <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 */
export class OptimisticLockException extends __BaseException {
  readonly name: "OptimisticLockException" = "OptimisticLockException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptimisticLockException, __BaseException>) {
    super({
      name: "OptimisticLockException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptimisticLockException.prototype);
  }
}

/**
 * <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Type of resource.</p>
   */
  resourceType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceType = opts.resourceType;
  }
}

export interface AssociateDRTRoleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the SRT will use to access your Amazon Web Services account.</p>
   * 	        <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role.  For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>
   */
  RoleArn: string | undefined;
}

export interface AssociateDRTRoleResponse {}

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

export interface AssociateHealthCheckResponse {}

/**
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 */
export class InvalidResourceException extends __BaseException {
  readonly name: "InvalidResourceException" = "InvalidResourceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceException, __BaseException>) {
    super({
      name: "InvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceException.prototype);
  }
}

/**
 * <p>Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
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

export interface AssociateProactiveEngagementDetailsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. </p>
   *          <p>To enable proactive engagement, the contact list must include at least one phone number.</p>
   *          <note>
   *             <p>The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it here.  </p>
   *          </note>
   */
  EmergencyContactList: EmergencyContact[] | undefined;
}

export interface AssociateProactiveEngagementDetailsResponse {}

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
 * <p>A contributor to the attack and their contribution. </p>
 */
export interface Contributor {
  /**
   * <p>The name of the contributor. The type of name that you'll find here depends on the <code>AttackPropertyIdentifier</code> setting in the <code>AttackProperty</code> where this contributor is defined. For example, if the <code>AttackPropertyIdentifier</code> is <code>SOURCE_COUNTRY</code>, the <code>Name</code> could be <code>United States</code>.</p>
   */
  Name?: string;

  /**
   * <p>The contribution of this contributor expressed in <a>Protection</a> units. For example <code>10,000</code>.</p>
   */
  Value?: number;
}

export enum Unit {
  BITS = "BITS",
  BYTES = "BYTES",
  PACKETS = "PACKETS",
  REQUESTS = "REQUESTS",
}

/**
 * <p>Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.</p>
 */
export interface AttackProperty {
  /**
   * <p>The type of Shield event that was observed. <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code>
   *          indicates layer 7 events.</p>
   *          <p>For infrastructure
   *   layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics.
   *            For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a>
   *                in the <i>WAF Developer Guide</i>. </p>
   */
  AttackLayer?: AttackLayer | string;

  /**
   * <p>Defines the Shield event property information that is provided. The
   *             <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code>
   *          values are valid only for WordPress reflective pingback events.</p>
   */
  AttackPropertyIdentifier?: AttackPropertyIdentifier | string;

  /**
   * <p>Contributor objects for the top five contributors to a Shield event. A contributor is a source of traffic that Shield Advanced identifies as responsible for some or all of an event.</p>
   */
  TopContributors?: Contributor[];

  /**
   * <p>The unit used for the <code>Contributor</code>
   *             <code>Value</code> property. </p>
   */
  Unit?: Unit | string;

  /**
   * <p>The total contributions made to this Shield event by all contributors.</p>
   */
  Total?: number;
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
   * <p>The time the attack started, in Unix time in seconds. </p>
   */
  StartTime?: Date;

  /**
   * <p>The time the attack ended, in Unix time in seconds. </p>
   */
  EndTime?: Date;

  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   */
  AttackCounters?: SummarizedCounter[];

  /**
   * <p>The array of objects that provide details of the Shield event. </p>
   *          <p>For infrastructure
   *   layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics.
   *            For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a>
   *                in the <i>WAF Developer Guide</i>. </p>
   */
  AttackProperties?: AttackProperty[];

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   */
  Mitigations?: Mitigation[];
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
   * <p>The start time of the attack, in Unix time in seconds. </p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the attack, in Unix time in seconds. </p>
   */
  EndTime?: Date;

  /**
   * <p>The list of attacks for a specified time period.</p>
   */
  AttackVectors?: AttackVectorDescription[];
}

export enum AutoRenew {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p>
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key?: string;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.</p>
   */
  Value?: string;
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
   *                <p>For an Amazon CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Global Accelerator standard accelerator: <code>arn:aws:globalaccelerator::<i>account-id</i>:accelerator/<i>accelerator-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For Amazon Route 53: <code>arn:aws:route53:::hostedzone/<i>hosted-zone-id</i>
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

  /**
   * <p>One or more tag key-value pairs for the <a>Protection</a> object that is created.</p>
   */
  Tags?: Tag[];
}

export interface CreateProtectionResponse {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is created.</p>
   */
  ProtectionId?: string;
}

/**
 * <p>Exception indicating the specified resource already exists. If available, this exception includes details in additional properties. </p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The type of resource that already exists.</p>
   */
  resourceType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.resourceType = opts.resourceType;
  }
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
   * <p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.</p>
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

  /**
   * <p>One or more tag key-value pairs for the protection group.</p>
   */
  Tags?: Tag[];
}

export interface CreateProtectionGroupResponse {}

export interface CreateSubscriptionRequest {}

export interface CreateSubscriptionResponse {}

export interface DeleteProtectionRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to be
   *          deleted.</p>
   */
  ProtectionId: string | undefined;
}

export interface DeleteProtectionResponse {}

export interface DeleteProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;
}

export interface DeleteProtectionGroupResponse {}

export interface DeleteSubscriptionRequest {}

export interface DeleteSubscriptionResponse {}

/**
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 */
export class LockedSubscriptionException extends __BaseException {
  readonly name: "LockedSubscriptionException" = "LockedSubscriptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LockedSubscriptionException, __BaseException>) {
    super({
      name: "LockedSubscriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LockedSubscriptionException.prototype);
  }
}

export interface DescribeAttackRequest {
  /**
   * <p>The unique identifier (ID) for the attack.</p>
   */
  AttackId: string | undefined;
}

export interface DescribeAttackResponse {
  /**
   * <p>The attack that you requested. </p>
   */
  Attack?: AttackDetail;
}

export interface DescribeAttackStatisticsRequest {}

/**
 * <p>The time range. </p>
 */
export interface TimeRange {
  /**
   * <p>The start time, in Unix time in seconds. </p>
   */
  FromInclusive?: Date;

  /**
   * <p>The end time, in Unix time in seconds. </p>
   */
  ToExclusive?: Date;
}

export interface DescribeAttackStatisticsResponse {
  /**
   * <p>The time range of the attack.</p>
   */
  TimeRange: TimeRange | undefined;

  /**
   * <p>The data that describes the attacks detected during the time period.</p>
   */
  DataItems: AttackStatisticsDataItem[] | undefined;
}

export interface DescribeDRTAccessRequest {}

export interface DescribeDRTAccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the SRT used to access your Amazon Web Services account.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of Amazon S3 buckets accessed by the SRT.</p>
   */
  LogBucketList?: string[];
}

export interface DescribeEmergencyContactSettingsRequest {}

export interface DescribeEmergencyContactSettingsResponse {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
   */
  EmergencyContactList?: EmergencyContact[];
}

export interface DescribeProtectionRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to describe.
   *            You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.</p>
   */
  ProtectionId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the protected Amazon Web Services resource.
   *            You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.</p>
   */
  ResourceArn?: string;
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
   * <p>The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The unique identifier (ID) for the Route 53 health check that's associated with the protection. </p>
   */
  HealthCheckIds?: string[];

  /**
   * <p>The ARN (Amazon Resource Name) of the protection.</p>
   */
  ProtectionArn?: string;

  /**
   * <p>The automatic application layer DDoS mitigation settings for the protection.
   *        This configuration determines whether Shield Advanced automatically
   *        manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. </p>
   */
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
}

export interface DescribeProtectionResponse {
  /**
   * <p>The <a>Protection</a> that you requested. </p>
   */
  Protection?: Protection;
}

export interface DescribeProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;
}

/**
 * <p>A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 */
export interface ProtectionGroup {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.</p>
   *             </li>
   *          </ul>
   */
  Aggregation: ProtectionGroupAggregation | string | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type.</p>
   */
  Pattern: ProtectionGroupPattern | string | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  ResourceType?: ProtectedResourceType | string;

  /**
   * <p>The ARNs (Amazon Resource Names) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   */
  Members: string[] | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the protection group.</p>
   */
  ProtectionGroupArn?: string;
}

export interface DescribeProtectionGroupResponse {
  /**
   * <p>A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
   */
  ProtectionGroup: ProtectionGroup | undefined;
}

export interface DescribeSubscriptionRequest {}

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

/**
 * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
 */
export interface ProtectionGroupPatternTypeLimits {
  /**
   * <p>Limits settings on protection groups with arbitrary pattern type. </p>
   */
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits | undefined;
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

/**
 * <p>Limits settings on protections for your subscription. </p>
 */
export interface ProtectionLimits {
  /**
   * <p>The maximum number of resource types that you can specify in a protection.</p>
   */
  ProtectedResourceTypeLimits: Limit[] | undefined;
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

/**
 * <p>Information about the Shield Advanced subscription for an account.</p>
 */
export interface Subscription {
  /**
   * <p>The start time of the subscription, in Unix time in seconds. </p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time your subscription will end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The length, in seconds, of the Shield Advanced subscription for the account.</p>
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
   * <p>If <code>ENABLED</code>, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.</p>
   *          <p>If <code>PENDING</code>, you have requested proactive engagement and the request is pending. The status changes to <code>ENABLED</code> when your request is fully processed.</p>
   *          <p>If <code>DISABLED</code>, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support. </p>
   */
  ProactiveEngagementStatus?: ProactiveEngagementStatus | string;

  /**
   * <p>Limits settings for your subscription. </p>
   */
  SubscriptionLimits: SubscriptionLimits | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the subscription.</p>
   */
  SubscriptionArn?: string;
}

export interface DescribeSubscriptionResponse {
  /**
   * <p>The Shield Advanced subscription details for an account.</p>
   */
  Subscription?: Subscription;
}

export interface DisableApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the protected resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface DisableApplicationLayerAutomaticResponseResponse {}

export interface DisableProactiveEngagementRequest {}

export interface DisableProactiveEngagementResponse {}

export interface DisassociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains the logs that you want to share.</p>
   */
  LogBucket: string | undefined;
}

export interface DisassociateDRTLogBucketResponse {}

export interface DisassociateDRTRoleRequest {}

export interface DisassociateDRTRoleResponse {}

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

export interface DisassociateHealthCheckResponse {}

export interface EnableApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the protected resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   */
  Action: ResponseAction | undefined;
}

export interface EnableApplicationLayerAutomaticResponseResponse {}

export interface EnableProactiveEngagementRequest {}

export interface EnableProactiveEngagementResponse {}

export interface GetSubscriptionStateRequest {}

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

export interface ListAttacksRequest {
  /**
   * <p>The ARNs (Amazon Resource Names) of the resources that were attacked. If you leave this
   *          blank, all applicable resources for this account will be included.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>The start of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type,
   *            but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting.  </p>
   */
  StartTime?: TimeRange;

  /**
   * <p>The end of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type,
   *            but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting.  </p>
   */
  EndTime?: TimeRange;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   */
  MaxResults?: number;
}

export interface ListAttacksResponse {
  /**
   * <p>The attack information for the specified time range.</p>
   */
  AttackSummaries?: AttackSummary[];

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   */
  NextToken?: string;
}

/**
 * <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}

/**
 * <p>Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.</p>
 */
export interface InclusionProtectionGroupFilters {
  /**
   * <p>The ID of the protection group that you want to retrieve.  </p>
   */
  ProtectionGroupIds?: string[];

  /**
   * <p>The pattern specification of the protection groups that you want to retrieve.  </p>
   */
  Patterns?: (ProtectionGroupPattern | string)[];

  /**
   * <p>The resource type configuration of the protection groups that you want to retrieve. In the protection group configuration, you specify the resource type when you set the group's <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code>. </p>
   */
  ResourceTypes?: (ProtectedResourceType | string)[];

  /**
   * <p>The aggregation setting of the protection groups that you want to retrieve.  </p>
   */
  Aggregations?: (ProtectionGroupAggregation | string)[];
}

export interface ListProtectionGroupsRequest {
  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   */
  MaxResults?: number;

  /**
   * <p>Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with specific pattern or aggregation settings. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.</p>
   */
  InclusionFilters?: InclusionProtectionGroupFilters;
}

export interface ListProtectionGroupsResponse {
  /**
   * <p></p>
   */
  ProtectionGroups: ProtectionGroup[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   */
  NextToken?: string;
}

/**
 * <p>Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.</p>
 */
export interface InclusionProtectionFilters {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource whose protection you want to retrieve.  </p>
   */
  ResourceArns?: string[];

  /**
   * <p>The name of the protection that you want to retrieve.  </p>
   */
  ProtectionNames?: string[];

  /**
   * <p>The type of protected resource whose protections you want to retrieve.  </p>
   */
  ResourceTypes?: (ProtectedResourceType | string)[];
}

export interface ListProtectionsRequest {
  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   */
  MaxResults?: number;

  /**
   * <p>Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.</p>
   */
  InclusionFilters?: InclusionProtectionFilters;
}

export interface ListProtectionsResponse {
  /**
   * <p>The array of enabled <a>Protection</a> objects.</p>
   */
  Protections?: Protection[];

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   */
  NextToken?: string;
}

export interface ListResourcesInProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   */
  MaxResults?: number;
}

export interface ListResourcesInProtectionGroupResponse {
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources that are included in the protection group.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *            <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *            <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags that you want to modify or add to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   */
  Action: ResponseAction | undefined;
}

export interface UpdateApplicationLayerAutomaticResponseResponse {}

export interface UpdateEmergencyContactSettingsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
   *          <p>If you have proactive engagement enabled, the contact list must include at least one phone number.</p>
   */
  EmergencyContactList?: EmergencyContact[];
}

export interface UpdateEmergencyContactSettingsResponse {}

export interface UpdateProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
   *          <ul>
   *             <li>
   *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
   *             </li>
   *             <li>
   *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
   *             </li>
   *             <li>
   *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.</p>
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

export interface UpdateProtectionGroupResponse {}

export interface UpdateSubscriptionRequest {
  /**
   * <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: AutoRenew | string;
}

export interface UpdateSubscriptionResponse {}

/**
 * @internal
 */
export const BlockActionFilterSensitiveLog = (obj: BlockAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CountActionFilterSensitiveLog = (obj: CountAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseActionFilterSensitiveLog = (obj: ResponseAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationLayerAutomaticResponseConfigurationFilterSensitiveLog = (
  obj: ApplicationLayerAutomaticResponseConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDRTLogBucketRequestFilterSensitiveLog = (obj: AssociateDRTLogBucketRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDRTLogBucketResponseFilterSensitiveLog = (obj: AssociateDRTLogBucketResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDRTRoleRequestFilterSensitiveLog = (obj: AssociateDRTRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDRTRoleResponseFilterSensitiveLog = (obj: AssociateDRTRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateHealthCheckRequestFilterSensitiveLog = (obj: AssociateHealthCheckRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateHealthCheckResponseFilterSensitiveLog = (obj: AssociateHealthCheckResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmergencyContactFilterSensitiveLog = (obj: EmergencyContact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateProactiveEngagementDetailsRequestFilterSensitiveLog = (
  obj: AssociateProactiveEngagementDetailsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateProactiveEngagementDetailsResponseFilterSensitiveLog = (
  obj: AssociateProactiveEngagementDetailsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SummarizedCounterFilterSensitiveLog = (obj: SummarizedCounter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContributorFilterSensitiveLog = (obj: Contributor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackPropertyFilterSensitiveLog = (obj: AttackProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MitigationFilterSensitiveLog = (obj: Mitigation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SummarizedAttackVectorFilterSensitiveLog = (obj: SummarizedAttackVector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubResourceSummaryFilterSensitiveLog = (obj: SubResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackDetailFilterSensitiveLog = (obj: AttackDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackVolumeStatisticsFilterSensitiveLog = (obj: AttackVolumeStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackVolumeFilterSensitiveLog = (obj: AttackVolume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackStatisticsDataItemFilterSensitiveLog = (obj: AttackStatisticsDataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackVectorDescriptionFilterSensitiveLog = (obj: AttackVectorDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttackSummaryFilterSensitiveLog = (obj: AttackSummary): any => ({
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
export const CreateProtectionRequestFilterSensitiveLog = (obj: CreateProtectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProtectionResponseFilterSensitiveLog = (obj: CreateProtectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProtectionGroupRequestFilterSensitiveLog = (obj: CreateProtectionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProtectionGroupResponseFilterSensitiveLog = (obj: CreateProtectionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionRequestFilterSensitiveLog = (obj: CreateSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionResponseFilterSensitiveLog = (obj: CreateSubscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProtectionRequestFilterSensitiveLog = (obj: DeleteProtectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProtectionResponseFilterSensitiveLog = (obj: DeleteProtectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProtectionGroupRequestFilterSensitiveLog = (obj: DeleteProtectionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProtectionGroupResponseFilterSensitiveLog = (obj: DeleteProtectionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionRequestFilterSensitiveLog = (obj: DeleteSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionResponseFilterSensitiveLog = (obj: DeleteSubscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttackRequestFilterSensitiveLog = (obj: DescribeAttackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttackResponseFilterSensitiveLog = (obj: DescribeAttackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttackStatisticsRequestFilterSensitiveLog = (obj: DescribeAttackStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeRangeFilterSensitiveLog = (obj: TimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttackStatisticsResponseFilterSensitiveLog = (obj: DescribeAttackStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDRTAccessRequestFilterSensitiveLog = (obj: DescribeDRTAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDRTAccessResponseFilterSensitiveLog = (obj: DescribeDRTAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEmergencyContactSettingsRequestFilterSensitiveLog = (
  obj: DescribeEmergencyContactSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEmergencyContactSettingsResponseFilterSensitiveLog = (
  obj: DescribeEmergencyContactSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectionRequestFilterSensitiveLog = (obj: DescribeProtectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionFilterSensitiveLog = (obj: Protection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectionResponseFilterSensitiveLog = (obj: DescribeProtectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectionGroupRequestFilterSensitiveLog = (obj: DescribeProtectionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionGroupFilterSensitiveLog = (obj: ProtectionGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectionGroupResponseFilterSensitiveLog = (obj: DescribeProtectionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscriptionRequestFilterSensitiveLog = (obj: DescribeSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LimitFilterSensitiveLog = (obj: Limit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionGroupArbitraryPatternLimitsFilterSensitiveLog = (
  obj: ProtectionGroupArbitraryPatternLimits
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionGroupPatternTypeLimitsFilterSensitiveLog = (obj: ProtectionGroupPatternTypeLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionGroupLimitsFilterSensitiveLog = (obj: ProtectionGroupLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectionLimitsFilterSensitiveLog = (obj: ProtectionLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionLimitsFilterSensitiveLog = (obj: SubscriptionLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterSensitiveLog = (obj: Subscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscriptionResponseFilterSensitiveLog = (obj: DescribeSubscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableApplicationLayerAutomaticResponseRequestFilterSensitiveLog = (
  obj: DisableApplicationLayerAutomaticResponseRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableApplicationLayerAutomaticResponseResponseFilterSensitiveLog = (
  obj: DisableApplicationLayerAutomaticResponseResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableProactiveEngagementRequestFilterSensitiveLog = (obj: DisableProactiveEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableProactiveEngagementResponseFilterSensitiveLog = (obj: DisableProactiveEngagementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDRTLogBucketRequestFilterSensitiveLog = (obj: DisassociateDRTLogBucketRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDRTLogBucketResponseFilterSensitiveLog = (obj: DisassociateDRTLogBucketResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDRTRoleRequestFilterSensitiveLog = (obj: DisassociateDRTRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDRTRoleResponseFilterSensitiveLog = (obj: DisassociateDRTRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateHealthCheckRequestFilterSensitiveLog = (obj: DisassociateHealthCheckRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateHealthCheckResponseFilterSensitiveLog = (obj: DisassociateHealthCheckResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableApplicationLayerAutomaticResponseRequestFilterSensitiveLog = (
  obj: EnableApplicationLayerAutomaticResponseRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableApplicationLayerAutomaticResponseResponseFilterSensitiveLog = (
  obj: EnableApplicationLayerAutomaticResponseResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableProactiveEngagementRequestFilterSensitiveLog = (obj: EnableProactiveEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableProactiveEngagementResponseFilterSensitiveLog = (obj: EnableProactiveEngagementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionStateRequestFilterSensitiveLog = (obj: GetSubscriptionStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionStateResponseFilterSensitiveLog = (obj: GetSubscriptionStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttacksRequestFilterSensitiveLog = (obj: ListAttacksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttacksResponseFilterSensitiveLog = (obj: ListAttacksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InclusionProtectionGroupFiltersFilterSensitiveLog = (obj: InclusionProtectionGroupFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectionGroupsRequestFilterSensitiveLog = (obj: ListProtectionGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectionGroupsResponseFilterSensitiveLog = (obj: ListProtectionGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InclusionProtectionFiltersFilterSensitiveLog = (obj: InclusionProtectionFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectionsRequestFilterSensitiveLog = (obj: ListProtectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectionsResponseFilterSensitiveLog = (obj: ListProtectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesInProtectionGroupRequestFilterSensitiveLog = (
  obj: ListResourcesInProtectionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesInProtectionGroupResponseFilterSensitiveLog = (
  obj: ListResourcesInProtectionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationLayerAutomaticResponseRequestFilterSensitiveLog = (
  obj: UpdateApplicationLayerAutomaticResponseRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationLayerAutomaticResponseResponseFilterSensitiveLog = (
  obj: UpdateApplicationLayerAutomaticResponseResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmergencyContactSettingsRequestFilterSensitiveLog = (
  obj: UpdateEmergencyContactSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmergencyContactSettingsResponseFilterSensitiveLog = (
  obj: UpdateEmergencyContactSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProtectionGroupRequestFilterSensitiveLog = (obj: UpdateProtectionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProtectionGroupResponseFilterSensitiveLog = (obj: UpdateProtectionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriptionRequestFilterSensitiveLog = (obj: UpdateSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriptionResponseFilterSensitiveLog = (obj: UpdateSubscriptionResponse): any => ({
  ...obj,
});
