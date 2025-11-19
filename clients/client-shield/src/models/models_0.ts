// smithy-typescript generated code
import {
  ApplicationLayerAutomaticResponseStatus,
  AttackLayer,
  AttackPropertyIdentifier,
  AutoRenew,
  ProactiveEngagementStatus,
  ProtectedResourceType,
  ProtectionGroupAggregation,
  ProtectionGroupPattern,
  SubResourceType,
  SubscriptionState,
  Unit,
} from "./enums";

/**
 * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p>
 *          <p>This is only used in the context of the <code>ResponseAction</code> setting. </p>
 *          <p>JSON specification: <code>"Block": \{\}</code>
 *          </p>
 * @public
 */
export interface BlockAction {}

/**
 * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p>
 *          <p>This is only used in the context of the <code>ResponseAction</code> setting. </p>
 *          <p>JSON specification: <code>"Count": \{\}</code>
 *          </p>
 * @public
 */
export interface CountAction {}

/**
 * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
 *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
 *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
 * @public
 */
export interface ResponseAction {
  /**
   * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p>
   *          <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>
   * @public
   */
  Block?: BlockAction | undefined;

  /**
   * <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p>
   *          <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>
   * @public
   */
  Count?: CountAction | undefined;
}

/**
 * <p>The automatic application layer DDoS mitigation settings for a <a>Protection</a>.
 *        This configuration determines whether Shield Advanced automatically
 *        manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. </p>
 * @public
 */
export interface ApplicationLayerAutomaticResponseConfiguration {
  /**
   * <p>Indicates whether automatic application layer DDoS mitigation is enabled for the protection. </p>
   * @public
   */
  Status: ApplicationLayerAutomaticResponseStatus | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   * @public
   */
  Action: ResponseAction | undefined;
}

/**
 * @public
 */
export interface AssociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains the logs that you want to share.</p>
   * @public
   */
  LogBucket: string | undefined;
}

/**
 * @public
 */
export interface AssociateDRTLogBucketResponse {}

/**
 * <p>Provides information about a particular parameter passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the parameter that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message describing why the parameter failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateDRTRoleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the SRT will use to access your Amazon Web Services account.</p>
   *          <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role.  For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDRTRoleResponse {}

/**
 * @public
 */
export interface AssociateHealthCheckRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to add the health check association to. </p>
   * @public
   */
  ProtectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the health check to associate with the protection.</p>
   * @public
   */
  HealthCheckArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateHealthCheckResponse {}

/**
 * <p>Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
 * @public
 */
export interface EmergencyContact {
  /**
   * <p>The email address for the contact.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The phone number for the contact.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>Additional notes regarding the contact. </p>
   * @public
   */
  ContactNotes?: string | undefined;
}

/**
 * @public
 */
export interface AssociateProactiveEngagementDetailsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. </p>
   *          <p>To enable proactive engagement, the contact list must include at least one phone number.</p>
   *          <note>
   *             <p>The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it here.  </p>
   *          </note>
   * @public
   */
  EmergencyContactList: EmergencyContact[] | undefined;
}

/**
 * @public
 */
export interface AssociateProactiveEngagementDetailsResponse {}

/**
 * <p>The counter that describes a DDoS attack.</p>
 * @public
 */
export interface SummarizedCounter {
  /**
   * <p>The counter name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The maximum value of the counter for a specified time period.</p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>The average value of the counter for a specified time period.</p>
   * @public
   */
  Average?: number | undefined;

  /**
   * <p>The total of counter values for a specified time period.</p>
   * @public
   */
  Sum?: number | undefined;

  /**
   * <p>The number of counters for a specified time period.</p>
   * @public
   */
  N?: number | undefined;

  /**
   * <p>The unit of the counters.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>A contributor to the attack and their contribution. </p>
 * @public
 */
export interface Contributor {
  /**
   * <p>The name of the contributor. The type of name that you'll find here depends on the <code>AttackPropertyIdentifier</code> setting in the <code>AttackProperty</code> where this contributor is defined. For example, if the <code>AttackPropertyIdentifier</code> is <code>SOURCE_COUNTRY</code>, the <code>Name</code> could be <code>United States</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The contribution of this contributor expressed in <a>Protection</a> units. For example <code>10,000</code>.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.</p>
 * @public
 */
export interface AttackProperty {
  /**
   * <p>The type of Shield event that was observed. <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code>
   *          indicates layer 7 events.</p>
   *          <p>For infrastructure
   *   layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics.
   *            For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a>
   *                in the <i>WAF Developer Guide</i>. </p>
   * @public
   */
  AttackLayer?: AttackLayer | undefined;

  /**
   * <p>Defines the Shield event property information that is provided. The
   *             <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code>
   *          values are valid only for WordPress reflective pingback events.</p>
   * @public
   */
  AttackPropertyIdentifier?: AttackPropertyIdentifier | undefined;

  /**
   * <p>Contributor objects for the top five contributors to a Shield event. A contributor is a source of traffic that Shield Advanced identifies as responsible for some or all of an event.</p>
   * @public
   */
  TopContributors?: Contributor[] | undefined;

  /**
   * <p>The unit used for the <code>Contributor</code>
   *             <code>Value</code> property. </p>
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * <p>The total contributions made to this Shield event by all contributors.</p>
   * @public
   */
  Total?: number | undefined;
}

/**
 * <p>The mitigation applied to a DDoS attack.</p>
 * @public
 */
export interface Mitigation {
  /**
   * <p>The name of the mitigation taken for this attack.</p>
   * @public
   */
  MitigationName?: string | undefined;
}

/**
 * <p>A summary of information about the attack.</p>
 * @public
 */
export interface SummarizedAttackVector {
  /**
   * <p>The attack type, for example, SNMP reflection or SYN flood.</p>
   * @public
   */
  VectorType: string | undefined;

  /**
   * <p>The list of counters that describe the details of the attack.</p>
   * @public
   */
  VectorCounters?: SummarizedCounter[] | undefined;
}

/**
 * <p>The attack information for the specified SubResource.</p>
 * @public
 */
export interface SubResourceSummary {
  /**
   * <p>The <code>SubResource</code> type.</p>
   * @public
   */
  Type?: SubResourceType | undefined;

  /**
   * <p>The unique identifier (ID) of the <code>SubResource</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The list of attack types and associated counters.</p>
   * @public
   */
  AttackVectors?: SummarizedAttackVector[] | undefined;

  /**
   * <p>The counters that describe the details of the attack.</p>
   * @public
   */
  Counters?: SummarizedCounter[] | undefined;
}

/**
 * <p>The details of a DDoS attack.</p>
 * @public
 */
export interface AttackDetail {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   * @public
   */
  AttackId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</p>
   * @public
   */
  SubResources?: SubResourceSummary[] | undefined;

  /**
   * <p>The time the attack started, in Unix time in seconds. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time the attack ended, in Unix time in seconds. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   * @public
   */
  AttackCounters?: SummarizedCounter[] | undefined;

  /**
   * <p>The array of objects that provide details of the Shield event. </p>
   *          <p>For infrastructure
   *   layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics.
   *            For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a>
   *                in the <i>WAF Developer Guide</i>. </p>
   * @public
   */
  AttackProperties?: AttackProperty[] | undefined;

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   * @public
   */
  Mitigations?: Mitigation[] | undefined;
}

/**
 * <p>Statistics objects for the various data types in <a>AttackVolume</a>. </p>
 * @public
 */
export interface AttackVolumeStatistics {
  /**
   * <p>The maximum attack volume observed for the given unit.</p>
   * @public
   */
  Max: number | undefined;
}

/**
 * <p>Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.</p>
 * @public
 */
export interface AttackVolume {
  /**
   * <p>A statistics object that uses bits per second as the unit. This is included for network level attacks. </p>
   * @public
   */
  BitsPerSecond?: AttackVolumeStatistics | undefined;

  /**
   * <p>A statistics object that uses packets per second as the unit. This is included for network level attacks. </p>
   * @public
   */
  PacketsPerSecond?: AttackVolumeStatistics | undefined;

  /**
   * <p>A statistics object that uses requests per second as the unit. This is included for application level attacks, and is only available for accounts that are subscribed to Shield Advanced.</p>
   * @public
   */
  RequestsPerSecond?: AttackVolumeStatistics | undefined;
}

/**
 * <p>A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.  </p>
 * @public
 */
export interface AttackStatisticsDataItem {
  /**
   * <p>Information about the volume of attacks during the time period. If the accompanying <code>AttackCount</code> is zero, this setting might be empty.</p>
   * @public
   */
  AttackVolume?: AttackVolume | undefined;

  /**
   * <p>The number of attacks detected during the time period. This is always present, but might be zero. </p>
   * @public
   */
  AttackCount: number | undefined;
}

/**
 * <p>Describes the attack.</p>
 * @public
 */
export interface AttackVectorDescription {
  /**
   * <p>The attack type. Valid values:</p>
   *          <ul>
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
   * @public
   */
  VectorType: string | undefined;
}

/**
 * <p>Summarizes all DDoS attacks for a specified time period.</p>
 * @public
 */
export interface AttackSummary {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   * @public
   */
  AttackId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The start time of the attack, in Unix time in seconds. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the attack, in Unix time in seconds. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The list of attacks for a specified time period.</p>
   * @public
   */
  AttackVectors?: AttackVectorDescription[] | undefined;
}

/**
 * <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateProtectionRequest {
  /**
   * <p>Friendly name for the <code>Protection</code> you are creating.</p>
   * @public
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
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tag key-value pairs for the <a>Protection</a> object that is created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProtectionResponse {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is created.</p>
   * @public
   */
  ProtectionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
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
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type. </p>
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  Members?: string[] | undefined;

  /**
   * <p>One or more tag key-value pairs for the protection group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProtectionGroupResponse {}

/**
 * @public
 */
export interface CreateSubscriptionRequest {}

/**
 * @public
 */
export interface CreateSubscriptionResponse {}

/**
 * @public
 */
export interface DeleteProtectionRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to be
   *          deleted.</p>
   * @public
   */
  ProtectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectionResponse {}

/**
 * @public
 */
export interface DeleteProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
   */
  ProtectionGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectionGroupResponse {}

/**
 * @public
 */
export interface DeleteSubscriptionRequest {}

/**
 * @public
 */
export interface DeleteSubscriptionResponse {}

/**
 * @public
 */
export interface DescribeAttackRequest {
  /**
   * <p>The unique identifier (ID) for the attack.</p>
   * @public
   */
  AttackId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAttackResponse {
  /**
   * <p>The attack that you requested. </p>
   * @public
   */
  Attack?: AttackDetail | undefined;
}

/**
 * @public
 */
export interface DescribeAttackStatisticsRequest {}

/**
 * <p>The time range. </p>
 * @public
 */
export interface TimeRange {
  /**
   * <p>The start time, in Unix time in seconds. </p>
   * @public
   */
  FromInclusive?: Date | undefined;

  /**
   * <p>The end time, in Unix time in seconds. </p>
   * @public
   */
  ToExclusive?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAttackStatisticsResponse {
  /**
   * <p>The time range of the attack.</p>
   * @public
   */
  TimeRange: TimeRange | undefined;

  /**
   * <p>The data that describes the attacks detected during the time period.</p>
   * @public
   */
  DataItems: AttackStatisticsDataItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeDRTAccessRequest {}

/**
 * @public
 */
export interface DescribeDRTAccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the SRT used to access your Amazon Web Services account.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The list of Amazon S3 buckets accessed by the SRT.</p>
   * @public
   */
  LogBucketList?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEmergencyContactSettingsRequest {}

/**
 * @public
 */
export interface DescribeEmergencyContactSettingsResponse {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
   * @public
   */
  EmergencyContactList?: EmergencyContact[] | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to describe.
   *            You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.</p>
   * @public
   */
  ProtectionId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the protected Amazon Web Services resource.
   *            You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>An object that represents a resource that is under DDoS protection.</p>
 * @public
 */
export interface Protection {
  /**
   * <p>The unique identifier (ID) of the protection.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the protection. For example, <code>My CloudFront distributions</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The unique identifier (ID) for the Route 53 health check that's associated with the protection. </p>
   * @public
   */
  HealthCheckIds?: string[] | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the protection.</p>
   * @public
   */
  ProtectionArn?: string | undefined;

  /**
   * <p>The automatic application layer DDoS mitigation settings for the protection.
   *        This configuration determines whether Shield Advanced automatically
   *        manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. </p>
   * @public
   */
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionResponse {
  /**
   * <p>The <a>Protection</a> that you requested. </p>
   * @public
   */
  Protection?: Protection | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
   */
  ProtectionGroupId: string | undefined;
}

/**
 * <p>A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @public
 */
export interface ProtectionGroup {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
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
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type.</p>
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * <p>The ARNs (Amazon Resource Names) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  Members: string[] | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the protection group.</p>
   * @public
   */
  ProtectionGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionGroupResponse {
  /**
   * <p>A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
   * @public
   */
  ProtectionGroup: ProtectionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionRequest {}

/**
 * <p>Specifies how many protections of a given type you can create.</p>
 * @public
 */
export interface Limit {
  /**
   * <p>The type of protection.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The maximum number of protections that can be created for the specified <code>Type</code>.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>Limits settings on protection groups with arbitrary pattern type. </p>
 * @public
 */
export interface ProtectionGroupArbitraryPatternLimits {
  /**
   * <p>The maximum number of resources you can specify for a single arbitrary pattern in a protection group.</p>
   * @public
   */
  MaxMembers: number | undefined;
}

/**
 * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
 * @public
 */
export interface ProtectionGroupPatternTypeLimits {
  /**
   * <p>Limits settings on protection groups with arbitrary pattern type. </p>
   * @public
   */
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits | undefined;
}

/**
 * <p>Limits settings on protection groups for your subscription. </p>
 * @public
 */
export interface ProtectionGroupLimits {
  /**
   * <p>The maximum number of protection groups that you can have at one time. </p>
   * @public
   */
  MaxProtectionGroups: number | undefined;

  /**
   * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
   * @public
   */
  PatternTypeLimits: ProtectionGroupPatternTypeLimits | undefined;
}

/**
 * <p>Limits settings on protections for your subscription. </p>
 * @public
 */
export interface ProtectionLimits {
  /**
   * <p>The maximum number of resource types that you can specify in a protection.</p>
   * @public
   */
  ProtectedResourceTypeLimits: Limit[] | undefined;
}

/**
 * <p>Limits settings for your subscription. </p>
 * @public
 */
export interface SubscriptionLimits {
  /**
   * <p>Limits settings on protections for your subscription. </p>
   * @public
   */
  ProtectionLimits: ProtectionLimits | undefined;

  /**
   * <p>Limits settings on protection groups for your subscription. </p>
   * @public
   */
  ProtectionGroupLimits: ProtectionGroupLimits | undefined;
}

/**
 * <p>Information about the Shield Advanced subscription for an account.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The start time of the subscription, in Unix time in seconds. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time your subscription will end.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The length, in seconds, of the Shield Advanced subscription for the account.</p>
   * @public
   */
  TimeCommitmentInSeconds?: number | undefined;

  /**
   * <p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p>
   *          <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   * @public
   */
  AutoRenew?: AutoRenew | undefined;

  /**
   * <p>Specifies how many protections of a given type you can create.</p>
   * @public
   */
  Limits?: Limit[] | undefined;

  /**
   * <p>If <code>ENABLED</code>, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.</p>
   *          <p>If <code>PENDING</code>, you have requested proactive engagement and the request is pending. The status changes to <code>ENABLED</code> when your request is fully processed.</p>
   *          <p>If <code>DISABLED</code>, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support. </p>
   * @public
   */
  ProactiveEngagementStatus?: ProactiveEngagementStatus | undefined;

  /**
   * <p>Limits settings for your subscription. </p>
   * @public
   */
  SubscriptionLimits: SubscriptionLimits | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the subscription.</p>
   * @public
   */
  SubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionResponse {
  /**
   * <p>The Shield Advanced subscription details for an account.</p>
   * @public
   */
  Subscription?: Subscription | undefined;
}

/**
 * @public
 */
export interface DisableApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the protected resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisableApplicationLayerAutomaticResponseResponse {}

/**
 * @public
 */
export interface DisableProactiveEngagementRequest {}

/**
 * @public
 */
export interface DisableProactiveEngagementResponse {}

/**
 * @public
 */
export interface DisassociateDRTLogBucketRequest {
  /**
   * <p>The Amazon S3 bucket that contains the logs that you want to share.</p>
   * @public
   */
  LogBucket: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDRTLogBucketResponse {}

/**
 * @public
 */
export interface DisassociateDRTRoleRequest {}

/**
 * @public
 */
export interface DisassociateDRTRoleResponse {}

/**
 * @public
 */
export interface DisassociateHealthCheckRequest {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object to remove the health check association from. </p>
   * @public
   */
  ProtectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the health check that is associated with the protection.</p>
   * @public
   */
  HealthCheckArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateHealthCheckResponse {}

/**
 * @public
 */
export interface EnableApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the protected resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   * @public
   */
  Action: ResponseAction | undefined;
}

/**
 * @public
 */
export interface EnableApplicationLayerAutomaticResponseResponse {}

/**
 * @public
 */
export interface EnableProactiveEngagementRequest {}

/**
 * @public
 */
export interface EnableProactiveEngagementResponse {}

/**
 * @public
 */
export interface GetSubscriptionStateRequest {}

/**
 * @public
 */
export interface GetSubscriptionStateResponse {
  /**
   * <p>The status of the subscription.</p>
   * @public
   */
  SubscriptionState: SubscriptionState | undefined;
}

/**
 * @public
 */
export interface ListAttacksRequest {
  /**
   * <p>The ARNs (Amazon Resource Names) of the resources that were attacked. If you leave this
   *          blank, all applicable resources for this account will be included.</p>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>The start of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type,
   *            but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting.  </p>
   * @public
   */
  StartTime?: TimeRange | undefined;

  /**
   * <p>The end of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type,
   *            but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting.  </p>
   * @public
   */
  EndTime?: TimeRange | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttacksResponse {
  /**
   * <p>The attack information for the specified time range.</p>
   * @public
   */
  AttackSummaries?: AttackSummary[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.</p>
 * @public
 */
export interface InclusionProtectionGroupFilters {
  /**
   * <p>The ID of the protection group that you want to retrieve.  </p>
   * @public
   */
  ProtectionGroupIds?: string[] | undefined;

  /**
   * <p>The pattern specification of the protection groups that you want to retrieve.  </p>
   * @public
   */
  Patterns?: ProtectionGroupPattern[] | undefined;

  /**
   * <p>The resource type configuration of the protection groups that you want to retrieve. In the protection group configuration, you specify the resource type when you set the group's <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code>. </p>
   * @public
   */
  ResourceTypes?: ProtectedResourceType[] | undefined;

  /**
   * <p>The aggregation setting of the protection groups that you want to retrieve.  </p>
   * @public
   */
  Aggregations?: ProtectionGroupAggregation[] | undefined;
}

/**
 * @public
 */
export interface ListProtectionGroupsRequest {
  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with specific pattern or aggregation settings. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.</p>
   * @public
   */
  InclusionFilters?: InclusionProtectionGroupFilters | undefined;
}

/**
 * @public
 */
export interface ListProtectionGroupsResponse {
  /**
   * <p></p>
   * @public
   */
  ProtectionGroups: ProtectionGroup[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.</p>
 * @public
 */
export interface InclusionProtectionFilters {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource whose protection you want to retrieve.  </p>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>The name of the protection that you want to retrieve.  </p>
   * @public
   */
  ProtectionNames?: string[] | undefined;

  /**
   * <p>The type of protected resource whose protections you want to retrieve.  </p>
   * @public
   */
  ResourceTypes?: ProtectedResourceType[] | undefined;
}

/**
 * @public
 */
export interface ListProtectionsRequest {
  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.</p>
   * @public
   */
  InclusionFilters?: InclusionProtectionFilters | undefined;
}

/**
 * @public
 */
export interface ListProtectionsResponse {
  /**
   * <p>The array of enabled <a>Protection</a> objects.</p>
   * @public
   */
  Protections?: Protection[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesInProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
   */
  ProtectionGroupId: string | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   *          <p>On your first call to a list operation, leave this setting empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects
   *          than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value
   *          in the response.</p>
   *          <p>The default setting is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourcesInProtectionGroupResponse {
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources that are included in the protection group.</p>
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects,
   *            Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and
   *            providing the token that was returned by the prior call in your request. </p>
   *          <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code>
   *            setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p>
   *          <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags that you want to modify or add to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateApplicationLayerAutomaticResponseRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the
   *    protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature,
   *    when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. </p>
   * @public
   */
  Action: ResponseAction | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationLayerAutomaticResponseResponse {}

/**
 * @public
 */
export interface UpdateEmergencyContactSettingsRequest {
  /**
   * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
   *          <p>If you have proactive engagement enabled, the contact list must include at least one phone number.</p>
   * @public
   */
  EmergencyContactList?: EmergencyContact[] | undefined;
}

/**
 * @public
 */
export interface UpdateEmergencyContactSettingsResponse {}

/**
 * @public
 */
export interface UpdateProtectionGroupRequest {
  /**
   * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
   * @public
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
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.</p>
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
   *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
   * @public
   */
  Members?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateProtectionGroupResponse {}

/**
 * @public
 */
export interface UpdateSubscriptionRequest {
  /**
   * <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   * @public
   */
  AutoRenew?: AutoRenew | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionResponse {}
