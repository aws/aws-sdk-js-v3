// smithy-typescript generated code
import type {
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
 * Specifies that Shield Advanced should configure its WAF rules with the WAF `Block` action.
 *
 * This is only used in the context of the `ResponseAction` setting.
 *
 * JSON specification: `"Block": \{\}`
 *
 * @public
 */
export interface BlockAction {}

/**
 * Specifies that Shield Advanced should configure its WAF rules with the WAF `Count` action.
 *
 * This is only used in the context of the `ResponseAction` setting.
 *
 * JSON specification: `"Count": \{\}`
 *
 * @public
 */
export interface CountAction {}

/**
 * Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
 *
 * @public
 */
export interface ResponseAction {
  /**
   * Specifies that Shield Advanced should configure its WAF rules with the WAF `Block` action.
   *
   * You must specify exactly one action, either `Block` or `Count`.
   *
   * @public
   */
  Block?: BlockAction | undefined;

  /**
   * Specifies that Shield Advanced should configure its WAF rules with the WAF `Count` action.
   *
   * You must specify exactly one action, either `Block` or `Count`.
   *
   * @public
   */
  Count?: CountAction | undefined;
}

/**
 * The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
 *
 * @public
 */
export interface ApplicationLayerAutomaticResponseConfiguration {
  /**
   * Indicates whether automatic application layer DDoS mitigation is enabled for the protection.
   *
   * @public
   */
  Status: ApplicationLayerAutomaticResponseStatus | undefined;

  /**
   * Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
   *
   * @public
   */
  Action: ResponseAction | undefined;
}

/**
 * @public
 */
export interface AssociateDRTLogBucketRequest {
  /**
   * The Amazon S3 bucket that contains the logs that you want to share.
   *
   * @public
   */
  LogBucket: string | undefined;
}

/**
 * @public
 */
export interface AssociateDRTLogBucketResponse {}

/**
 * Provides information about a particular parameter passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the parameter that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message describing why the parameter failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateDRTRoleRequest {
  /**
   * The Amazon Resource Name (ARN) of the role the SRT will use to access your Amazon Web Services account.
   *
   * Prior to making the `AssociateDRTRole` request, you must attach the [AWSShieldDRTAccessPolicy](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy) managed policy to this role. For more information see [Attaching and Detaching IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html).
   *
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
   * The unique identifier (ID) for the Protection object to add the health check association to.
   *
   * @public
   */
  ProtectionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the health check to associate with the protection.
   *
   * @public
   */
  HealthCheckArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateHealthCheckResponse {}

/**
 * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
 *
 * @public
 */
export interface EmergencyContact {
  /**
   * The email address for the contact.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The phone number for the contact.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * Additional notes regarding the contact.
   *
   * @public
   */
  ContactNotes?: string | undefined;
}

/**
 * @public
 */
export interface AssociateProactiveEngagementDetailsRequest {
  /**
   * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.
   *
   * To enable proactive engagement, the contact list must include at least one phone number.
   *
   * > **Note:** The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using `DescribeEmergencyContactSettings` and then provide it here.
   *
   * @public
   */
  EmergencyContactList: EmergencyContact[] | undefined;
}

/**
 * @public
 */
export interface AssociateProactiveEngagementDetailsResponse {}

/**
 * The counter that describes a DDoS attack.
 *
 * @public
 */
export interface SummarizedCounter {
  /**
   * The counter name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The maximum value of the counter for a specified time period.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The average value of the counter for a specified time period.
   *
   * @public
   */
  Average?: number | undefined;

  /**
   * The total of counter values for a specified time period.
   *
   * @public
   */
  Sum?: number | undefined;

  /**
   * The number of counters for a specified time period.
   *
   * @public
   */
  N?: number | undefined;

  /**
   * The unit of the counters.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * A contributor to the attack and their contribution.
 *
 * @public
 */
export interface Contributor {
  /**
   * The name of the contributor. The type of name that you'll find here depends on the `AttackPropertyIdentifier` setting in the `AttackProperty` where this contributor is defined. For example, if the `AttackPropertyIdentifier` is `SOURCE_COUNTRY`, the `Name` could be `United States`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The contribution of this contributor expressed in Protection units. For example `10,000`.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Details of a Shield event. This is provided as part of an AttackDetail.
 *
 * @public
 */
export interface AttackProperty {
  /**
   * The type of Shield event that was observed. `NETWORK` indicates layer 3 and layer 4 events and `APPLICATION` indicates layer 7 events.
   *
   * For infrastructure layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics. For more information, see [Shield metrics and alarms](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms) in the *WAF Developer Guide*.
   *
   * @public
   */
  AttackLayer?: AttackLayer | undefined;

  /**
   * Defines the Shield event property information that is provided. The `WORDPRESS_PINGBACK_REFLECTOR` and `WORDPRESS_PINGBACK_SOURCE` values are valid only for WordPress reflective pingback events.
   *
   * @public
   */
  AttackPropertyIdentifier?: AttackPropertyIdentifier | undefined;

  /**
   * Contributor objects for the top five contributors to a Shield event. A contributor is a source of traffic that Shield Advanced identifies as responsible for some or all of an event.
   *
   * @public
   */
  TopContributors?: Contributor[] | undefined;

  /**
   * The unit used for the `Contributor` `Value` property.
   *
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * The total contributions made to this Shield event by all contributors.
   *
   * @public
   */
  Total?: number | undefined;
}

/**
 * The mitigation applied to a DDoS attack.
 *
 * @public
 */
export interface Mitigation {
  /**
   * The name of the mitigation taken for this attack.
   *
   * @public
   */
  MitigationName?: string | undefined;
}

/**
 * A summary of information about the attack.
 *
 * @public
 */
export interface SummarizedAttackVector {
  /**
   * The attack type, for example, SNMP reflection or SYN flood.
   *
   * @public
   */
  VectorType: string | undefined;

  /**
   * The list of counters that describe the details of the attack.
   *
   * @public
   */
  VectorCounters?: SummarizedCounter[] | undefined;
}

/**
 * The attack information for the specified SubResource.
 *
 * @public
 */
export interface SubResourceSummary {
  /**
   * The `SubResource` type.
   *
   * @public
   */
  Type?: SubResourceType | undefined;

  /**
   * The unique identifier (ID) of the `SubResource`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The list of attack types and associated counters.
   *
   * @public
   */
  AttackVectors?: SummarizedAttackVector[] | undefined;

  /**
   * The counters that describe the details of the attack.
   *
   * @public
   */
  Counters?: SummarizedCounter[] | undefined;
}

/**
 * The details of a DDoS attack.
 *
 * @public
 */
export interface AttackDetail {
  /**
   * The unique identifier (ID) of the attack.
   *
   * @public
   */
  AttackId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the resource that was attacked.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * If applicable, additional detail about the resource being attacked, for example, IP address or URL.
   *
   * @public
   */
  SubResources?: SubResourceSummary[] | undefined;

  /**
   * The time the attack started, in Unix time in seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the attack ended, in Unix time in seconds.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * List of counters that describe the attack for the specified time period.
   *
   * @public
   */
  AttackCounters?: SummarizedCounter[] | undefined;

  /**
   * The array of objects that provide details of the Shield event.
   *
   * For infrastructure layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics. For more information, see [Shield metrics and alarms](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms) in the *WAF Developer Guide*.
   *
   * @public
   */
  AttackProperties?: AttackProperty[] | undefined;

  /**
   * List of mitigation actions taken for the attack.
   *
   * @public
   */
  Mitigations?: Mitigation[] | undefined;
}

/**
 * Statistics objects for the various data types in AttackVolume.
 *
 * @public
 */
export interface AttackVolumeStatistics {
  /**
   * The maximum attack volume observed for the given unit.
   *
   * @public
   */
  Max: number | undefined;
}

/**
 * Information about the volume of attacks during the time period, included in an AttackStatisticsDataItem. If the accompanying `AttackCount` in the statistics object is zero, this setting might be empty.
 *
 * @public
 */
export interface AttackVolume {
  /**
   * A statistics object that uses bits per second as the unit. This is included for network level attacks.
   *
   * @public
   */
  BitsPerSecond?: AttackVolumeStatistics | undefined;

  /**
   * A statistics object that uses packets per second as the unit. This is included for network level attacks.
   *
   * @public
   */
  PacketsPerSecond?: AttackVolumeStatistics | undefined;

  /**
   * A statistics object that uses requests per second as the unit. This is included for application level attacks, and is only available for accounts that are subscribed to Shield Advanced.
   *
   * @public
   */
  RequestsPerSecond?: AttackVolumeStatistics | undefined;
}

/**
 * A single attack statistics data record. This is returned by DescribeAttackStatistics along with a time range indicating the time period that the attack statistics apply to.
 *
 * @public
 */
export interface AttackStatisticsDataItem {
  /**
   * Information about the volume of attacks during the time period. If the accompanying `AttackCount` is zero, this setting might be empty.
   *
   * @public
   */
  AttackVolume?: AttackVolume | undefined;

  /**
   * The number of attacks detected during the time period. This is always present, but might be zero.
   *
   * @public
   */
  AttackCount: number | undefined;
}

/**
 * Describes the attack.
 *
 * @public
 */
export interface AttackVectorDescription {
  /**
   * The attack type. Valid values:
   *
   * - UDP_TRAFFIC
   * - UDP_FRAGMENT
   * - GENERIC_UDP_REFLECTION
   * - DNS_REFLECTION
   * - NTP_REFLECTION
   * - CHARGEN_REFLECTION
   * - SSDP_REFLECTION
   * - PORT_MAPPER
   * - RIP_REFLECTION
   * - SNMP_REFLECTION
   * - MSSQL_REFLECTION
   * - NET_BIOS_REFLECTION
   * - SYN_FLOOD
   * - ACK_FLOOD
   * - REQUEST_FLOOD
   * - HTTP_REFLECTION
   * - UDS_REFLECTION
   * - MEMCACHED_REFLECTION
   *
   * @public
   */
  VectorType: string | undefined;
}

/**
 * Summarizes all DDoS attacks for a specified time period.
 *
 * @public
 */
export interface AttackSummary {
  /**
   * The unique identifier (ID) of the attack.
   *
   * @public
   */
  AttackId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the resource that was attacked.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The start time of the attack, in Unix time in seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the attack, in Unix time in seconds.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The list of attacks for a specified time period.
   *
   * @public
   */
  AttackVectors?: AttackVectorDescription[] | undefined;
}

/**
 * A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateProtectionRequest {
  /**
   * Friendly name for the `Protection` you are creating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the resource to be protected.
   *
   * The ARN should be in one of the following formats:
   *
   * - For an Application Load Balancer: `arn:aws:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id`
   * - For an Elastic Load Balancer (Classic Load Balancer): `arn:aws:elasticloadbalancing:region:account-id:loadbalancer/load-balancer-name`
   * - For an Amazon CloudFront distribution: `arn:aws:cloudfront::account-id:distribution/distribution-id`
   * - For an Global Accelerator standard accelerator: `arn:aws:globalaccelerator::account-id:accelerator/accelerator-id`
   * - For Amazon Route 53: `arn:aws:route53:::hostedzone/hosted-zone-id`
   * - For an Elastic IP address: `arn:aws:ec2:region:account-id:eip-allocation/allocation-id`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tag key-value pairs for the Protection object that is created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProtectionResponse {
  /**
   * The unique identifier (ID) for the Protection object that is created.
   *
   * @public
   */
  ProtectionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProtectionGroupRequest {
  /**
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;

  /**
   * Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.
   *
   * - Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
   * - Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
   * - Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.
   *
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
   *
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
   *
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
   *
   * @public
   */
  Members?: string[] | undefined;

  /**
   * One or more tag key-value pairs for the protection group.
   *
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
   * The unique identifier (ID) for the Protection object to be deleted.
   *
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
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectionGroupResponse {}

/**
 * @deprecated deprecated.
 * @public
 */
export interface DeleteSubscriptionRequest {}

/**
 * @deprecated deprecated.
 * @public
 */
export interface DeleteSubscriptionResponse {}

/**
 * @public
 */
export interface DescribeAttackRequest {
  /**
   * The unique identifier (ID) for the attack.
   *
   * @public
   */
  AttackId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAttackResponse {
  /**
   * The attack that you requested.
   *
   * @public
   */
  Attack?: AttackDetail | undefined;
}

/**
 * @public
 */
export interface DescribeAttackStatisticsRequest {}

/**
 * The time range.
 *
 * @public
 */
export interface TimeRange {
  /**
   * The start time, in Unix time in seconds.
   *
   * @public
   */
  FromInclusive?: Date | undefined;

  /**
   * The end time, in Unix time in seconds.
   *
   * @public
   */
  ToExclusive?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAttackStatisticsResponse {
  /**
   * The time range of the attack.
   *
   * @public
   */
  TimeRange: TimeRange | undefined;

  /**
   * The data that describes the attacks detected during the time period.
   *
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
   * The Amazon Resource Name (ARN) of the role the SRT used to access your Amazon Web Services account.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The list of Amazon S3 buckets accessed by the SRT.
   *
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
   * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
   *
   * @public
   */
  EmergencyContactList?: EmergencyContact[] | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionRequest {
  /**
   * The unique identifier (ID) for the Protection object to describe. You must provide either the `ResourceArn` of the protected resource or the `ProtectionID` of the protection, but not both.
   *
   * @public
   */
  ProtectionId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the protected Amazon Web Services resource. You must provide either the `ResourceArn` of the protected resource or the `ProtectionID` of the protection, but not both.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * An object that represents a resource that is under DDoS protection.
 *
 * @public
 */
export interface Protection {
  /**
   * The unique identifier (ID) of the protection.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the protection. For example, `My CloudFront distributions`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The unique identifier (ID) for the Route 53 health check that's associated with the protection.
   *
   * @public
   */
  HealthCheckIds?: string[] | undefined;

  /**
   * The ARN (Amazon Resource Name) of the protection.
   *
   * @public
   */
  ProtectionArn?: string | undefined;

  /**
   * The automatic application layer DDoS mitigation settings for the protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
   *
   * @public
   */
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionResponse {
  /**
   * The Protection that you requested.
   *
   * @public
   */
  Protection?: Protection | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionGroupRequest {
  /**
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;
}

/**
 * A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
 *
 * @public
 */
export interface ProtectionGroup {
  /**
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;

  /**
   * Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.
   *
   * - Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
   * - Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
   * - Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.
   *
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type.
   *
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * The resource type to include in the protection group. All protected resources of this type are included in the protection group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
   *
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * The ARNs (Amazon Resource Names) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
   *
   * @public
   */
  Members: string[] | undefined;

  /**
   * The ARN (Amazon Resource Name) of the protection group.
   *
   * @public
   */
  ProtectionGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProtectionGroupResponse {
  /**
   * A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
   *
   * @public
   */
  ProtectionGroup: ProtectionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionRequest {}

/**
 * Specifies how many protections of a given type you can create.
 *
 * @public
 */
export interface Limit {
  /**
   * The type of protection.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The maximum number of protections that can be created for the specified `Type`.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Limits settings on protection groups with arbitrary pattern type.
 *
 * @public
 */
export interface ProtectionGroupArbitraryPatternLimits {
  /**
   * The maximum number of resources you can specify for a single arbitrary pattern in a protection group.
   *
   * @public
   */
  MaxMembers: number | undefined;
}

/**
 * Limits settings by pattern type in the protection groups for your subscription.
 *
 * @public
 */
export interface ProtectionGroupPatternTypeLimits {
  /**
   * Limits settings on protection groups with arbitrary pattern type.
   *
   * @public
   */
  ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits | undefined;
}

/**
 * Limits settings on protection groups for your subscription.
 *
 * @public
 */
export interface ProtectionGroupLimits {
  /**
   * The maximum number of protection groups that you can have at one time.
   *
   * @public
   */
  MaxProtectionGroups: number | undefined;

  /**
   * Limits settings by pattern type in the protection groups for your subscription.
   *
   * @public
   */
  PatternTypeLimits: ProtectionGroupPatternTypeLimits | undefined;
}

/**
 * Limits settings on protections for your subscription.
 *
 * @public
 */
export interface ProtectionLimits {
  /**
   * The maximum number of resource types that you can specify in a protection.
   *
   * @public
   */
  ProtectedResourceTypeLimits: Limit[] | undefined;
}

/**
 * Limits settings for your subscription.
 *
 * @public
 */
export interface SubscriptionLimits {
  /**
   * Limits settings on protections for your subscription.
   *
   * @public
   */
  ProtectionLimits: ProtectionLimits | undefined;

  /**
   * Limits settings on protection groups for your subscription.
   *
   * @public
   */
  ProtectionGroupLimits: ProtectionGroupLimits | undefined;
}

/**
 * Information about the Shield Advanced subscription for an account.
 *
 * @public
 */
export interface Subscription {
  /**
   * The start time of the subscription, in Unix time in seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time your subscription will end.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The length, in seconds, of the Shield Advanced subscription for the account.
   *
   * @public
   */
  TimeCommitmentInSeconds?: number | undefined;

  /**
   * If `ENABLED`, the subscription will be automatically renewed at the end of the existing subscription period.
   *
   * When you initally create a subscription, `AutoRenew` is set to `ENABLED`. You can change this by submitting an `UpdateSubscription` request. If the `UpdateSubscription` request does not included a value for `AutoRenew`, the existing value for `AutoRenew` remains unchanged.
   *
   * @public
   */
  AutoRenew?: AutoRenew | undefined;

  /**
   * Specifies how many protections of a given type you can create.
   *
   * @public
   */
  Limits?: Limit[] | undefined;

  /**
   * If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
   *
   * If `PENDING`, you have requested proactive engagement and the request is pending. The status changes to `ENABLED` when your request is fully processed.
   *
   * If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
   *
   * @public
   */
  ProactiveEngagementStatus?: ProactiveEngagementStatus | undefined;

  /**
   * Limits settings for your subscription.
   *
   * @public
   */
  SubscriptionLimits: SubscriptionLimits | undefined;

  /**
   * The ARN (Amazon Resource Name) of the subscription.
   *
   * @public
   */
  SubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionResponse {
  /**
   * The Shield Advanced subscription details for an account.
   *
   * @public
   */
  Subscription?: Subscription | undefined;
}

/**
 * @public
 */
export interface DisableApplicationLayerAutomaticResponseRequest {
  /**
   * The ARN (Amazon Resource Name) of the protected resource.
   *
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
   * The Amazon S3 bucket that contains the logs that you want to share.
   *
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
   * The unique identifier (ID) for the Protection object to remove the health check association from.
   *
   * @public
   */
  ProtectionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the health check that is associated with the protection.
   *
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
   * The ARN (Amazon Resource Name) of the protected resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
   *
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
   * The status of the subscription.
   *
   * @public
   */
  SubscriptionState: SubscriptionState | undefined;
}

/**
 * @public
 */
export interface ListAttacksRequest {
  /**
   * The ARNs (Amazon Resource Names) of the resources that were attacked. If you leave this blank, all applicable resources for this account will be included.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * The start of the time period for the attacks. This is a `timestamp` type. The request syntax listing for this call indicates a `number` type, but you can provide the time in any valid [timestamp format](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) setting.
   *
   * @public
   */
  StartTime?: TimeRange | undefined;

  /**
   * The end of the time period for the attacks. This is a `timestamp` type. The request syntax listing for this call indicates a `number` type, but you can provide the time in any valid [timestamp format](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) setting.
   *
   * @public
   */
  EndTime?: TimeRange | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * On your first call to a list operation, leave this setting empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a `NextToken` value in the response.
   *
   * The default setting is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttacksResponse {
  /**
   * The attack information for the specified time range.
   *
   * @public
   */
  AttackSummaries?: AttackSummary[] | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.
 *
 * @public
 */
export interface InclusionProtectionGroupFilters {
  /**
   * The ID of the protection group that you want to retrieve.
   *
   * @public
   */
  ProtectionGroupIds?: string[] | undefined;

  /**
   * The pattern specification of the protection groups that you want to retrieve.
   *
   * @public
   */
  Patterns?: ProtectionGroupPattern[] | undefined;

  /**
   * The resource type configuration of the protection groups that you want to retrieve. In the protection group configuration, you specify the resource type when you set the group's `Pattern` to `BY_RESOURCE_TYPE`.
   *
   * @public
   */
  ResourceTypes?: ProtectedResourceType[] | undefined;

  /**
   * The aggregation setting of the protection groups that you want to retrieve.
   *
   * @public
   */
  Aggregations?: ProtectionGroupAggregation[] | undefined;
}

/**
 * @public
 */
export interface ListProtectionGroupsRequest {
  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * On your first call to a list operation, leave this setting empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a `NextToken` value in the response.
   *
   * The default setting is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with specific pattern or aggregation settings. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.
   *
   * @public
   */
  InclusionFilters?: InclusionProtectionGroupFilters | undefined;
}

/**
 * @public
 */
export interface ListProtectionGroupsResponse {
  /**
   * @public
   */
  ProtectionGroups: ProtectionGroup[] | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.
 *
 * @public
 */
export interface InclusionProtectionFilters {
  /**
   * The ARN (Amazon Resource Name) of the resource whose protection you want to retrieve.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * The name of the protection that you want to retrieve.
   *
   * @public
   */
  ProtectionNames?: string[] | undefined;

  /**
   * The type of protected resource whose protections you want to retrieve.
   *
   * @public
   */
  ResourceTypes?: ProtectedResourceType[] | undefined;
}

/**
 * @public
 */
export interface ListProtectionsRequest {
  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * On your first call to a list operation, leave this setting empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a `NextToken` value in the response.
   *
   * The default setting is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.
   *
   * @public
   */
  InclusionFilters?: InclusionProtectionFilters | undefined;
}

/**
 * @public
 */
export interface ListProtectionsResponse {
  /**
   * The array of enabled Protection objects.
   *
   * @public
   */
  Protections?: Protection[] | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesInProtectionGroupRequest {
  /**
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * On your first call to a list operation, leave this setting empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a `NextToken` value in the response.
   *
   * The default setting is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourcesInProtectionGroupResponse {
  /**
   * The Amazon Resource Names (ARNs) of the resources that are included in the protection group.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a `NextToken` value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request.
   *
   * You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the `MaxResults` setting. Shield Advanced will not return more than `MaxResults` objects, but may return fewer, even if more objects are still available.
   *
   * Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to get tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key and value pairs associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags that you want to modify or add to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag key for each tag that you want to remove from the resource.
   *
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
   * The ARN (Amazon Resource Name) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
   *
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
   * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
   *
   * If you have proactive engagement enabled, the contact list must include at least one phone number.
   *
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
   * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
   *
   * @public
   */
  ProtectionGroupId: string | undefined;

  /**
   * Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.
   *
   * - Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
   * - Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
   * - Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.
   *
   * @public
   */
  Aggregation: ProtectionGroupAggregation | undefined;

  /**
   * The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
   *
   * @public
   */
  Pattern: ProtectionGroupPattern | undefined;

  /**
   * The resource type to include in the protection group. All protected resources of this type are included in the protection group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
   *
   * @public
   */
  ResourceType?: ProtectedResourceType | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
   *
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
   * When you initally create a subscription, `AutoRenew` is set to `ENABLED`. If `ENABLED`, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an `UpdateSubscription` request. If the `UpdateSubscription` request does not included a value for `AutoRenew`, the existing value for `AutoRenew` remains unchanged.
   *
   * @public
   */
  AutoRenew?: AutoRenew | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionResponse {}
