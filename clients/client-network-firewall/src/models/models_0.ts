// smithy-typescript generated code
import type {
  AttachmentStatus,
  ConfigurationSyncState,
  ContainerAssociationStatus,
  ContainerMonitoringType,
  DNSExpiryExceptionPolicy,
  EnabledAnalysisType,
  EncryptionType,
  FirewallPolicyErrorCode,
  FirewallStatusValue,
  FlowOperationStatus,
  FlowOperationType,
  GeneratedRulesType,
  IdentifiedType,
  IPAddressType,
  ListenerPropertyType,
  LogDestinationType,
  LogType,
  NatGatewayAttachmentStatus,
  OverrideAction,
  PerObjectSyncStatus,
  ProxyModifyState,
  ProxyRulePhaseAction,
  ProxyState,
  ResourceManagedStatus,
  ResourceManagedType,
  ResourceStatus,
  RevocationCheckAction,
  Route53ResolvedIPValidationAction,
  RuleGroupRequestPhase,
  RuleGroupType,
  RuleOrder,
  StatefulAction,
  StatefulRuleDirection,
  StatefulRuleProtocol,
  StreamExceptionPolicy,
  SubscriptionStatus,
  SummaryRuleOption,
  TargetType,
  TCPFlag,
  TlsInterceptMode,
  TransitGatewayAttachmentStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentRequest {
  /**
   * Required. The unique identifier of the transit gateway attachment to accept. This ID is returned in the response when creating a transit gateway-attached firewall.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * The unique identifier of the transit gateway attachment that was accepted.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The current status of the transit gateway attachment. Valid values are:
   *
   * - `CREATING` - The attachment is being created
   * - `DELETING` - The attachment is being deleted
   * - `DELETED` - The attachment has been deleted
   * - `FAILED` - The attachment creation has failed and cannot be recovered
   * - `ERROR` - The attachment is in an error state that might be recoverable
   * - `READY` - The attachment is active and processing traffic
   * - `PENDING_ACCEPTANCE` - The attachment is waiting to be accepted
   * - `REJECTING` - The attachment is in the process of being rejected
   * - `REJECTED` - The attachment has been rejected
   *
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * The value to use in an Amazon CloudWatch custom metric dimension. This is used in the `PublishMetrics` CustomAction. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
 *
 * Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
 *
 * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
 *
 * @public
 */
export interface Dimension {
  /**
   * The value to use in the custom metric dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
 *
 * @public
 */
export interface PublishMetricAction {
  /**
   * @public
   */
  Dimensions: Dimension[] | undefined;
}

/**
 * A custom action to use in stateless rule actions settings. This is used in CustomAction.
 *
 * @public
 */
export interface ActionDefinition {
  /**
   * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
   *
   * You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
   *
   * @public
   */
  PublishMetricAction?: PublishMetricAction | undefined;
}

/**
 * A single IP address specification. This is used in the MatchAttributes source and destination specifications.
 *
 * @public
 */
export interface Address {
  /**
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   *
   * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * @public
   */
  AddressDefinition: string | undefined;
}

/**
 * A report that captures key activity from the last 30 days of network traffic monitored by your firewall.
 *
 * You can generate up to one report per traffic type, per 30 day period. For example, when you successfully create an HTTP traffic report, you cannot create another HTTP traffic report until 30 days pass. Alternatively, if you generate a report that combines metrics on both HTTP and HTTPS traffic, you cannot create another report for either traffic type until 30 days pass.
 *
 * @public
 */
export interface AnalysisReport {
  /**
   * The unique ID of the query that ran when you requested an analysis report.
   *
   * @public
   */
  AnalysisReportId?: string | undefined;

  /**
   * The type of traffic that will be used to generate a report.
   *
   * @public
   */
  AnalysisType?: EnabledAnalysisType | undefined;

  /**
   * The date and time the analysis report was ran.
   *
   * @public
   */
  ReportTime?: Date | undefined;

  /**
   * The status of the analysis report you specify. Statuses include `RUNNING`, `COMPLETED`, or `FAILED`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Attempts made to a access domain.
 *
 * @public
 */
export interface Hits {
  /**
   * The number of attempts made to access a domain.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * A unique source IP address that connected to a domain.
 *
 * @public
 */
export interface UniqueSources {
  /**
   * The number of unique source IP addresses that connected to a domain.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * The results of a `COMPLETED` analysis report generated with StartAnalysisReport.
 *
 * For an example of traffic analysis report results, see the response syntax of GetAnalysisReportResults.
 *
 * @public
 */
export interface AnalysisTypeReportResult {
  /**
   * The type of traffic captured by the analysis report.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The date and time any domain was first accessed (within the last 30 day period).
   *
   * @public
   */
  FirstAccessed?: Date | undefined;

  /**
   * The date and time any domain was last accessed (within the last 30 day period).
   *
   * @public
   */
  LastAccessed?: Date | undefined;

  /**
   * The most frequently accessed domains.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The number of attempts made to access a observed domain.
   *
   * @public
   */
  Hits?: Hits | undefined;

  /**
   * The number of unique source IP addresses that connected to a domain.
   *
   * @public
   */
  UniqueSources?: UniqueSources | undefined;
}

/**
 * The analysis result for Network Firewall's stateless rule group analyzer. Every time you call CreateRuleGroup, UpdateRuleGroup, or DescribeRuleGroup on a stateless rule group, Network Firewall analyzes the stateless rule groups in your account and identifies the rules that might adversely effect your firewall's functionality. For example, if Network Firewall detects a rule that's routing traffic asymmetrically, which impacts the service's ability to properly process traffic, the service includes the rule in a list of analysis results.
 *
 * The `AnalysisResult` data type is not related to traffic analysis reports you generate using StartAnalysisReport. For information on traffic analysis report results, see AnalysisTypeReportResult.
 *
 * @public
 */
export interface AnalysisResult {
  /**
   * The priority number of the stateless rules identified in the analysis.
   *
   * @public
   */
  IdentifiedRuleIds?: string[] | undefined;

  /**
   * The types of rule configurations that Network Firewall analyzes your rule groups for. Network Firewall analyzes stateless rule groups for the following types of rule configurations:
   *
   * - `STATELESS_RULE_FORWARDING_ASYMMETRICALLY`
   *
   *   Cause: One or more stateless rules with the action `pass` or `forward` are forwarding traffic asymmetrically. Specifically, the rule's set of source IP addresses or their associated port numbers, don't match the set of destination IP addresses or their associated port numbers.
   *
   *   To mitigate: Make sure that there's an existing return path. For example, if the rule allows traffic from source 10.1.0.0/24 to destination 20.1.0.0/24, you should allow return traffic from source 20.1.0.0/24 to destination 10.1.0.0/24.
   * - `STATELESS_RULE_CONTAINS_TCP_FLAGS`
   *
   *   Cause: At least one stateless rule with the action `pass` or`forward` contains TCP flags that are inconsistent in the forward and return directions.
   *
   *   To mitigate: Prevent asymmetric routing issues caused by TCP flags by following these actions:
   *
   *   - Remove unnecessary TCP flag inspections from the rules.
   *   - If you need to inspect TCP flags, check that the rules correctly account for changes in TCP flags throughout the TCP connection cycle, for example `SYN` and `ACK` flags used in a 3-way TCP handshake.
   *
   * @public
   */
  IdentifiedType?: IdentifiedType | undefined;

  /**
   * Provides analysis details for the identified rule.
   *
   * @public
   */
  AnalysisDetail?: string | undefined;
}

/**
 * Defines the mapping between an Availability Zone and a firewall endpoint for a transit gateway-attached firewall. Each mapping represents where the firewall can process traffic. You use these mappings when calling CreateFirewall, AssociateAvailabilityZones, and DisassociateAvailabilityZones.
 *
 * To retrieve the current Availability Zone mappings for a firewall, use DescribeFirewall.
 *
 * @public
 */
export interface AvailabilityZoneMapping {
  /**
   * The ID of the Availability Zone where the firewall endpoint is located. For example, `us-east-2a`. The Availability Zone must be in the same Region as the transit gateway.
   *
   * @public
   */
  AvailabilityZone: string | undefined;
}

/**
 * @public
 */
export interface AssociateAvailabilityZonesRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * Required. The Availability Zones where you want to create firewall endpoints. You must specify at least one Availability Zone.
   *
   * @public
   */
  AvailabilityZoneMappings: AvailabilityZoneMapping[] | undefined;
}

/**
 * @public
 */
export interface AssociateAvailabilityZonesResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Availability Zones where Network Firewall created firewall endpoints. Each mapping specifies an Availability Zone where the firewall processes traffic.
   *
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallPolicyRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * @public
   */
  FirewallPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * The ID for a subnet that's used in an association with a firewall. This is used in CreateFirewall, AssociateSubnets, and CreateVpcEndpointAssociation. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
 *
 * @public
 */
export interface SubnetMapping {
  /**
   * The unique identifier for the subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The subnet's IP address type. You can't change the IP address type after you create the subnet.
   *
   * @public
   */
  IPAddressType?: IPAddressType | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetsRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The IDs of the subnets that you want to associate with the firewall.
   *
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetsResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The IDs of the subnets that are associated with the firewall.
   *
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * The definition and status of the firewall endpoint for a single subnet. In each configured subnet, Network Firewall instantiates a firewall endpoint to handle network traffic.
 *
 * This data type is used for any firewall endpoint type:
 *
 * - For `Firewall.SubnetMappings`, this `Attachment` is part of the `FirewallStatus` sync states information. You define firewall subnets using `CreateFirewall` and `AssociateSubnets`.
 * - For `VpcEndpointAssociation`, this `Attachment` is part of the `VpcEndpointAssociationStatus` sync states information. You define these subnets using `CreateVpcEndpointAssociation`.
 *
 * @public
 */
export interface Attachment {
  /**
   * The unique identifier of the subnet that you've specified to be used for a firewall endpoint.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The identifier of the firewall endpoint that Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The current status of the firewall endpoint instantiation in the subnet.
   *
   * When this value is `READY`, the endpoint is available to handle network traffic. Otherwise, this value reflects its state, for example `CREATING` or `DELETING`.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * If Network Firewall fails to create or delete the firewall endpoint in the subnet, it populates this with the reason for the error or failure and how to resolve it. A `FAILED` status indicates a non-recoverable state, and a `ERROR` status indicates an issue that you can fix. Depending on the error, it can take as many as 15 minutes to populate this field. For more information about the causes for failiure or errors and solutions available for this field, see [Troubleshooting firewall endpoint failures](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The DNS name that resolves to the firewall endpoint in the subnet. This is populated for proxy mode firewalls, where clients direct traffic to the firewall's proxy using this name.
   *
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * The status of the firewall endpoint defined by a `VpcEndpointAssociation`.
 *
 * @public
 */
export interface AZSyncState {
  /**
   * The definition and status of the firewall endpoint for a single subnet. In each configured subnet, Network Firewall instantiates a firewall endpoint to handle network traffic.
   *
   * This data type is used for any firewall endpoint type:
   *
   * - For `Firewall.SubnetMappings`, this `Attachment` is part of the `FirewallStatus` sync states information. You define firewall subnets using `CreateFirewall` and `AssociateSubnets`.
   * - For `VpcEndpointAssociation`, this `Attachment` is part of the `VpcEndpointAssociationStatus` sync states information. You define these subnets using `CreateVpcEndpointAssociation`.
   *
   * @public
   */
  Attachment?: Attachment | undefined;
}

/**
 * The proxy rule group(s) to attach to the proxy configuration
 *
 * @public
 */
export interface ProxyRuleGroupAttachment {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * Where to insert a proxy rule group in a proxy configuration.
   *
   * @public
   */
  InsertPosition?: number | undefined;
}

/**
 * @public
 */
export interface AttachRuleGroupsToProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * The proxy rule group(s) to attach to the proxy configuration
   *
   * @public
   */
  RuleGroups: ProxyRuleGroupAttachment[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
 *
 * This data type is used specifically for the CreateProxyConfiguration and UpdateProxyConfiguration APIs.
 *
 * @public
 */
export interface ProxyConfigDefaultRulePhaseActionsRequest {
  /**
   * Before domain resolution.
   *
   * @public
   */
  PreDNS?: ProxyRulePhaseAction | undefined;

  /**
   * After DNS, before request.
   *
   * @public
   */
  PreREQUEST?: ProxyRulePhaseAction | undefined;

  /**
   * After receiving response.
   *
   * @public
   */
  PostRESPONSE?: ProxyRulePhaseAction | undefined;
}

/**
 * Proxy rule group contained within a proxy configuration.
 *
 * @public
 */
export interface ProxyConfigRuleGroup {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * Proxy rule group type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Priority of the proxy rule group in the proxy configuration.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.
 *
 * @public
 */
export interface ProxyConfiguration {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * A description of the proxy configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Time the Proxy Configuration was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Time the Proxy Configuration was deleted.
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * Proxy rule groups within the proxy configuration.
   *
   * @public
   */
  RuleGroups?: ProxyConfigRuleGroup[] | undefined;

  /**
   * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
   *
   * Pre-DNS - before domain resolution.
   *
   * Pre-Request - after DNS, before request.
   *
   * Post-Response - after receiving response.
   *
   * @public
   */
  DefaultRulePhaseActions?: ProxyConfigDefaultRulePhaseActionsRequest | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AttachRuleGroupsToProxyConfigurationResponse {
  /**
   * The updated proxy configuration resource that reflects the updates from the request.
   *
   * @public
   */
  ProxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * High-level information about an Availability Zone where the firewall has an endpoint defined.
 *
 * @public
 */
export interface AvailabilityZoneMetadata {
  /**
   * The IP address type of the Firewall subnet in the Availability Zone. You can't change the IP address type after you create the subnet.
   *
   * @public
   */
  IPAddressType?: IPAddressType | undefined;
}

/**
 * General information about the IP set.
 *
 * @public
 */
export interface IPSetMetadata {
  /**
   * Describes the total number of CIDR blocks currently in use by the IP set references in a firewall. To determine how many CIDR blocks are available for you to use in a firewall, you can call `AvailableCIDRCount`.
   *
   * @public
   */
  ResolvedCIDRCount?: number | undefined;
}

/**
 * Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.
 *
 * @public
 */
export interface CIDRSummary {
  /**
   * The number of CIDR blocks available for use by the IP set references in a firewall.
   *
   * @public
   */
  AvailableCIDRCount?: number | undefined;

  /**
   * The number of CIDR blocks used by the IP set references in a firewall.
   *
   * @public
   */
  UtilizedCIDRCount?: number | undefined;

  /**
   * The list of the IP set references used by a firewall.
   *
   * @public
   */
  IPSetReferences?: Record<string, IPSetMetadata> | undefined;
}

/**
 * The capacity usage summary of the resources used by the ReferenceSets in a firewall.
 *
 * @public
 */
export interface CapacityUsageSummary {
  /**
   * Describes the capacity usage of the CIDR blocks used by the IP set references in a firewall.
   *
   * @public
   */
  CIDRs?: CIDRSummary | undefined;
}

/**
 * Contains metadata about an Certificate Manager certificate.
 *
 * @public
 */
export interface TlsCertificateData {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  CertificateSerial?: string | undefined;

  /**
   * The status of the certificate.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Contains details about the certificate status, including information about certificate errors.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Defines the actions to take on the SSL/TLS connection if the certificate presented by the server in the connection has a revoked or unknown status.
 *
 * @public
 */
export interface CheckCertificateRevocationStatusActions {
  /**
   * Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has a revoked status.
   *
   * - **PASS** - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.
   * - **DROP** - Network Firewall closes the connection and drops subsequent packets for that connection.
   * - **REJECT** - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. `REJECT` is available only for TCP traffic.
   *
   * @public
   */
  RevokedStatusAction?: RevocationCheckAction | undefined;

  /**
   * Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has an unknown status, or a status that cannot be determined for any other reason, including when the service is unable to connect to the OCSP and CRL endpoints for the certificate.
   *
   * - **PASS** - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.
   * - **DROP** - Network Firewall closes the connection and drops subsequent packets for that connection.
   * - **REJECT** - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. `REJECT` is available only for TCP traffic.
   *
   * @public
   */
  UnknownStatusAction?: RevocationCheckAction | undefined;
}

/**
 * The metadata for a container association returned by `ListContainerAssociations`. Contains the ARN and name that you use to identify the container association in other operations.
 *
 * @public
 */
export interface ContainerAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The descriptive name of the container association.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A key-value filter pair used in container association monitoring configurations to narrow which containers are tracked. The key must match exactly. The value can be an exact value or a wildcard pattern.
 *
 * @public
 */
export interface ContainerAttribute {
  /**
   * The attribute key to filter on. For Amazon EKS, specify `namespace` to filter by namespace, or specify a Kubernetes label key. For Amazon ECS, specify a container instance attribute name. Keys don't support wildcards.
   *
   * Valid characters are letters, numbers, spaces, hyphens (`-`), underscores (`_`), periods (`.`), forward slashes (`/`), and colons (`:`).
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The attribute value to match. You can specify an exact value, such as `payments-api`, or a wildcard pattern, such as `payments-*`.
   *
   * Valid characters are letters, numbers, spaces, hyphens (`-`), underscores (`_`), periods (`.`), forward slashes (`/`), colons (`:`), asterisks (`*`), and backslashes (`\`).
   *
   * Network Firewall evaluates the value using the following rules:
   *
   * - An asterisk (`*`) matches zero or more characters. For example, `payments-*` matches `payments-`, `payments-api`, and `payments-api-v2`, and `*-prod` matches `web-prod`.
   * - The pattern must match the entire value. For example, `payments-*` doesn't match `my-payments-api`. To match a value that contains `payments` anywhere, use `*payments*`.
   * - Matching is case sensitive. For example, `Payments-*` doesn't match `payments-api`.
   * - To match a literal asterisk, escape it with a backslash (`\*`). To match a literal backslash, use `\\`. A backslash followed by any other character matches a literal backslash followed by that character.
   * - A wildcard pattern matches only containers that have the attribute. For example, a filter with key `app` and value `*` matches every container that has an `app` label, but doesn't match a container without an `app` label.
   * - A value that doesn't contain `*` or `\` matches only that exact value.
   *
   * A value can contain at most 10 unescaped asterisks. Escaped asterisks (`\*`) don't count toward this limit. A value can't end with a single unescaped backslash.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains the monitoring configuration for a single cluster in a container association. Specifies the cluster ARN and optional attribute filters to narrow which containers are tracked.
 *
 * @public
 */
export interface ContainerMonitoringConfiguration {
  /**
   * The ARN of the Amazon ECS or Amazon EKS cluster to monitor. The cluster must be in the same Region and account as the container association.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Key-value pairs that filter which containers are tracked. For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).
   *
   * Attribute values can contain wildcard patterns, for example `payments-*`. Attribute keys must match exactly.
   *
   * @public
   */
  AttributeFilters?: ContainerAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateContainerAssociationRequest {
  /**
   * The descriptive name of the container association. You can't change the name of a container association after you create it.
   *
   * @public
   */
  ContainerAssociationName: string | undefined;

  /**
   * A description of the container association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of containers to monitor. You can't change the container type after creation. Valid values:
   *
   * - `ECS` - Amazon Elastic Container Service
   * - `EKS` - Amazon Elastic Kubernetes Service
   *
   * @public
   */
  Type: ContainerMonitoringType | undefined;

  /**
   * The monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.
   *
   * @public
   */
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[] | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContainerAssociationResponse {
  /**
   * The descriptive name of the container association.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * A description of the container association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The container type. Valid values:
   *
   * - `ECS` - Amazon Elastic Container Service
   * - `EKS` - Amazon Elastic Kubernetes Service
   *
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * The monitoring configurations for the container association.
   *
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * The current status of the container association. For a new container association, the status is `CREATING`.
   *
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request.
   *
   * To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the container association again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see [Encryption at rest with Amazon Web Services Key Managment Service](https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html) in the *Network Firewall Developer Guide*.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The ID of the Amazon Web Services Key Management Service (KMS) customer managed key. You can use any of the key identifiers that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. For more information, see [Key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the *Amazon Web Services KMS Developer Guide*.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The type of Amazon Web Services KMS key to use for encryption of your Network Firewall resources.
   *
   * @public
   */
  Type: EncryptionType | undefined;
}

/**
 * A NAT gateway that a proxy mode firewall uses to proxy traffic. This is used in CreateFirewall when `NoSourcePreservation` is `TRUE`.
 *
 * @public
 */
export interface NatGatewayMapping {
  /**
   * A unique identifier for the NAT gateway to use with proxy resources.
   *
   * @public
   */
  NatGatewayId: string | undefined;
}

/**
 * Open port for taking HTTP or HTTPS traffic.
 *
 * @public
 */
export interface ListenerProperty {
  /**
   * Port for processing traffic.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Selection of HTTP or HTTPS traffic.
   *
   * @public
   */
  Type?: ListenerPropertyType | undefined;
}

/**
 * The listener configuration for a proxy mode firewall. This specifies the ports and protocols on which the firewall's proxy listens for traffic.
 *
 * @public
 */
export interface ProxySettings {
  /**
   * Listener properties for HTTP and HTTPS traffic.
   *
   * @public
   */
  ListenerProperties: ListenerProperty[] | undefined;
}

/**
 * The VPC and subnets for a proxy mode firewall endpoint. This is used in CreateFirewall when `NoSourcePreservation` is `TRUE`, to specify where Network Firewall creates the firewall endpoint.
 *
 * This differs from VpcEndpointAssociation, which defines additional secondary endpoints for a firewall in other VPCs.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The unique identifier of the VPC where Network Firewall creates the proxy mode firewall endpoint.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The subnets in which Network Firewall creates the firewall endpoint for a proxy mode firewall. Each subnet must belong to a different Availability Zone in the VPC.
   *
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the FirewallPolicy that you want to use for the firewall.
   *
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * The unique identifier of the VPC where Network Firewall should create the firewall.
   *
   * You can't change this setting after you create the firewall.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet.
   *
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * A flag indicating whether it is possible to delete the firewall. A setting of `TRUE` indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to `TRUE`.
   *
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * A description of the firewall.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A complex type that contains settings for encryption of your firewall resources.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * An optional setting indicating the specific traffic analysis types to enable on the firewall.
   *
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * Required when creating a transit gateway-attached firewall. The unique identifier of the transit gateway to attach to this firewall. You can provide either a transit gateway from your account or one that has been shared with you through Resource Access Manager.
   *
   * > **Important:** After creating the firewall, you cannot change the transit gateway association. To use a different transit gateway, you must create a new firewall.
   *
   * For information about creating firewalls, see CreateFirewall. For specific guidance about transit gateway-attached firewalls, see [Considerations for transit gateway-attached firewalls](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tgw-firewall-considerations.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * Required. The Availability Zones where you want to create firewall endpoints for a transit gateway-attached firewall. You must specify at least one Availability Zone. Consider enabling the firewall in every Availability Zone where you have workloads to maintain Availability Zone isolation.
   *
   * You can modify Availability Zones later using AssociateAvailabilityZones or DisassociateAvailabilityZones, but this may briefly disrupt traffic. The `AvailabilityZoneChangeProtection` setting controls whether you can make these modifications.
   *
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * Optional. A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to `TRUE`, you cannot add or remove Availability Zones without first disabling this protection using UpdateAvailabilityZoneChangeProtection.
   *
   * Default value: `FALSE`
   *
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;

  /**
   * The NAT gateways that the firewall uses to proxy traffic when `NoSourcePreservation` is `TRUE`. Network Firewall attaches the firewall to each NAT gateway that you specify, so that egress traffic is proxied through the NAT gateway.
   *
   * @public
   */
  NatGatewayMappings?: NatGatewayMapping[] | undefined;

  /**
   * The listener configuration for a proxy mode firewall, used when `NoSourcePreservation` is `TRUE`. This specifies the ports and protocols on which the firewall's proxy listens for traffic.
   *
   * @public
   */
  ProxySettings?: ProxySettings | undefined;

  /**
   * Optional. Indicates whether the firewall operates in proxy mode, in which the source IP address of the traffic is not preserved. When set to `TRUE`, the firewall proxies traffic through a NAT gateway and the traffic reaching the destination uses the NAT gateway's IP address as the source.
   *
   * When you set this to `TRUE`, you must specify `NatGatewayMappings` and `VpcEndpoint` instead of a top-level `VpcId` and `SubnetMappings`.
   *
   * You can't change this setting after you create the firewall.
   *
   * Default value: `FALSE`
   *
   * @public
   */
  NoSourcePreservation?: boolean | undefined;

  /**
   * The VPC and subnets for the firewall endpoint, used when `NoSourcePreservation` is `TRUE`. Network Firewall creates the firewall endpoint in the subnets that you specify here.
   *
   * For proxy mode firewalls, provide the firewall's VPC and endpoint subnets through this parameter instead of the top-level `VpcId` and `SubnetMappings`.
   *
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;
}

/**
 * A firewall defines the behavior of a firewall, the main VPC where the firewall is used, the Availability Zones where the firewall can be used, and one subnet to use for a firewall endpoint within each of the Availability Zones. The Availability Zones are defined implicitly in the subnet specifications.
 *
 * In addition to the firewall endpoints that you define in this `Firewall` specification, you can create firewall endpoints in `VpcEndpointAssociation` resources for any VPC, in any Availability Zone where the firewall is already in use.
 *
 * The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding FirewallStatus. You can retrieve both the firewall and firewall status by calling DescribeFirewall.
 *
 * @public
 */
export interface Firewall {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * The relationship of firewall to firewall policy is many to one. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.
   *
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * The unique identifier of the VPC where the firewall is in use.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The primary public subnets that Network Firewall is using for the firewall. Network Firewall creates a firewall endpoint in each subnet. Create a subnet mapping for each Availability Zone where you want to use the firewall.
   *
   * These subnets are all defined for a single, primary VPC, and each must belong to a different Availability Zone. Each of these subnets establishes the availability of the firewall in its Availability Zone.
   *
   * In addition to these subnets, you can define other endpoints for the firewall in `VpcEndpointAssociation` resources. You can define these additional endpoints for any VPC, and for any of the Availability Zones where the firewall resource already has a subnet mapping. VPC endpoint associations give you the ability to protect multiple VPCs using a single firewall, and to define multiple firewall endpoints for a VPC in a single Availability Zone.
   *
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;

  /**
   * A flag indicating whether it is possible to delete the firewall. A setting of `TRUE` indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to `TRUE`.
   *
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * A description of the firewall.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the firewall.
   *
   * @public
   */
  FirewallId: string | undefined;

  /**
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The number of `VpcEndpointAssociation` resources that use this firewall.
   *
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * An optional setting indicating the specific traffic analysis types to enable on the firewall.
   *
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * The unique identifier of the transit gateway associated with this firewall. This field is only present for transit gateway-attached firewalls.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the transit gateway. This may be different from the firewall owner's account ID when using a shared transit gateway.
   *
   * @public
   */
  TransitGatewayOwnerAccountId?: string | undefined;

  /**
   * The Availability Zones where the firewall endpoints are created for a transit gateway-attached firewall. Each mapping specifies an Availability Zone where the firewall processes traffic.
   *
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to `TRUE`, you must first disable this protection before adding or removing Availability Zones.
   *
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;

  /**
   * The NAT gateways that the firewall uses to proxy traffic. This is set for proxy mode firewalls, where `NoSourcePreservation` is `TRUE`.
   *
   * @public
   */
  NatGatewayMappings?: NatGatewayMapping[] | undefined;

  /**
   * The listener configuration for the firewall's proxy. This is set for proxy mode firewalls, where `NoSourcePreservation` is `TRUE`.
   *
   * @public
   */
  ProxySettings?: ProxySettings | undefined;

  /**
   * Indicates whether the firewall operates in proxy mode, in which the source IP address of the traffic is not preserved. When this value is `TRUE`, the firewall proxies traffic through a NAT gateway and uses the NAT gateway's IP address as the source for traffic reaching the destination.
   *
   * @public
   */
  NoSourcePreservation?: boolean | undefined;

  /**
   * The VPC and subnets for the firewall endpoint. This is set for proxy mode firewalls, where `NoSourcePreservation` is `TRUE`.
   *
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;
}

/**
 * Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a SyncState for a firewall.
 *
 * @public
 */
export interface PerObjectStatus {
  /**
   * Indicates whether this object is in sync with the version indicated in the update token.
   *
   * @public
   */
  SyncStatus?: PerObjectSyncStatus | undefined;

  /**
   * The current version of the object that is either in sync or pending synchronization.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * The definition and status of the attachment between a proxy mode firewall and a NAT gateway that proxies its traffic.
 *
 * @public
 */
export interface NatGatewayAttachment {
  /**
   * A unique identifier for the NAT gateway to use with proxy resources.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The current status of the NAT gateway attachment.
   *
   * When this value is `READY`, the attachment is available to proxy traffic. Otherwise, this value reflects its state, for example `CREATING` or `DELETING`.
   *
   * @public
   */
  Status: NatGatewayAttachmentStatus | undefined;

  /**
   * If Network Firewall encounters an issue with the NAT gateway attachment, it populates this with an explanation of the problem.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The DNS name that resolves to the firewall's proxy for traffic sent through this NAT gateway attachment.
   *
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. This is part of the FirewallStatus.
 *
 * For each VPC subnet that you associate with a firewall, Network Firewall does the following:
 *
 * - Instantiates a firewall endpoint in the subnet, ready to take traffic.
 * - Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.
 *
 * When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete.
 *
 * @public
 */
export interface SyncState {
  /**
   * The configuration and status for a single firewall subnet. For each configured subnet, Network Firewall creates the attachment by instantiating the firewall endpoint in the subnet so that it's ready to take traffic.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The configuration status of the firewall endpoint in a single VPC subnet. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic.
   *
   * @public
   */
  Config?: Record<string, PerObjectStatus> | undefined;

  /**
   * The status of the NAT gateway attachments for a proxy mode firewall in the Availability Zone. This reflects the attachment of the firewall to each NAT gateway that proxies its traffic.
   *
   * @public
   */
  NatGatewayAttachments?: NatGatewayAttachment[] | undefined;
}

/**
 * Contains information about the synchronization state of a transit gateway attachment, including its current status and any error messages. Network Firewall uses this to track the state of your transit gateway configuration changes.
 *
 * @public
 */
export interface TransitGatewayAttachmentSyncState {
  /**
   * The unique identifier of the transit gateway attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The current status of the transit gateway attachment.
   *
   * Valid values are:
   *
   * - `CREATING` - The attachment is being created
   * - `DELETING` - The attachment is being deleted
   * - `DELETED` - The attachment has been deleted
   * - `FAILED` - The attachment creation has failed and cannot be recovered
   * - `ERROR` - The attachment is in an error state that might be recoverable
   * - `READY` - The attachment is active and processing traffic
   * - `PENDING_ACCEPTANCE` - The attachment is waiting to be accepted
   * - `REJECTING` - The attachment is in the process of being rejected
   * - `REJECTED` - The attachment has been rejected
   *
   * @public
   */
  TransitGatewayAttachmentStatus?: TransitGatewayAttachmentStatus | undefined;

  /**
   * A message providing additional information about the current status, particularly useful when the transit gateway attachment is in a non-`READY` state.
   *
   * Valid values are:
   *
   * - `CREATING` - The attachment is being created
   * - `DELETING` - The attachment is being deleted
   * - `DELETED` - The attachment has been deleted
   * - `FAILED` - The attachment creation has failed and cannot be recovered
   * - `ERROR` - The attachment is in an error state that might be recoverable
   * - `READY` - The attachment is active and processing traffic
   * - `PENDING_ACCEPTANCE` - The attachment is waiting to be accepted
   * - `REJECTING` - The attachment is in the process of being rejected
   * - `REJECTED` - The attachment has been rejected
   *
   * For information about troubleshooting endpoint failures, see [Troubleshooting firewall endpoint failures](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Detailed information about the current status of a Firewall. You can retrieve this for a firewall by calling DescribeFirewall and providing the firewall name and ARN.
 *
 * The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values.
 *
 * @public
 */
export interface FirewallStatus {
  /**
   * The readiness of the configured firewall to handle network traffic across all of the Availability Zones where you have it configured. This setting is `READY` only when the `ConfigurationSyncStateSummary` value is `IN_SYNC` and the `Attachment` `Status` values for all of the configured subnets are `READY`.
   *
   * @public
   */
  Status: FirewallStatusValue | undefined;

  /**
   * The configuration sync state for the firewall. This summarizes the `Config` settings in the `SyncStates` for this firewall status object.
   *
   * When you create a firewall or update its configuration, for example by adding a rule group to its firewall policy, Network Firewall distributes the configuration changes to all Availability Zones that have subnets defined for the firewall. This summary indicates whether the configuration changes have been applied everywhere.
   *
   * This status must be `IN_SYNC` for the firewall to be ready for use, but it doesn't indicate that the firewall is ready. The `Status` setting indicates firewall readiness. It's based on this setting and the readiness of the firewall endpoints to take traffic.
   *
   * @public
   */
  ConfigurationSyncStateSummary: ConfigurationSyncState | undefined;

  /**
   * Status for the subnets that you've configured in the firewall. This contains one array element per Availability Zone where you've configured a subnet in the firewall.
   *
   * These objects provide detailed information for the settings `ConfigurationSyncStateSummary` and `Status`.
   *
   * @public
   */
  SyncStates?: Record<string, SyncState> | undefined;

  /**
   * Describes the capacity usage of the resources contained in a firewall's reference sets. Network Firewall calculates the capacity usage by taking an aggregated count of all of the resources used by all of the reference sets in a firewall.
   *
   * @public
   */
  CapacityUsageSummary?: CapacityUsageSummary | undefined;

  /**
   * The synchronization state of the transit gateway attachment. This indicates whether the firewall's transit gateway configuration is properly synchronized and operational. Use this to verify that your transit gateway configuration changes have been applied.
   *
   * @public
   */
  TransitGatewayAttachmentSyncState?: TransitGatewayAttachmentSyncState | undefined;
}

/**
 * @public
 */
export interface CreateFirewallResponse {
  /**
   * The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints.
   *
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * Detailed information about the current status of a Firewall. You can retrieve this for a firewall by calling DescribeFirewall and providing the firewall name and ARN.
   *
   * The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values.
   *
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * A list of IP addresses and address ranges, in CIDR notation. This is part of a RuleVariables.
 *
 * @public
 */
export interface IPSet {
  /**
   * The list of IP addresses and address ranges, in CIDR notation.
   *
   * @public
   */
  Definition: string[] | undefined;
}

/**
 * Contains variables that you can use to override default Suricata settings in your firewall policy.
 *
 * @public
 */
export interface PolicyVariables {
  /**
   * The IPv4 or IPv6 addresses in CIDR notation to use for the Suricata `HOME_NET` variable. If your firewall uses an inspection VPC, you might want to override the `HOME_NET` variable with the CIDRs of your home networks. If you don't override `HOME_NET` with your own CIDRs, Network Firewall by default uses the CIDR of your inspection VPC.
   *
   * @public
   */
  RuleVariables?: Record<string, IPSet> | undefined;
}

/**
 * The policy-level configuration for resolved IP validation. When you set this on a firewall policy, you require that the destination IP address of a connection is one that the Amazon Route 53 Resolver returned in a DNS response for a domain. The Route 53 Resolver must have returned the response in a VPC that's associated with the Route 53 Resolver DNS Firewall rule group identified by `DNSFirewallRuleGroupId`. At the policy level, this verifies that the destination IP address was resolved for some domain. To match specific domains, also configure stateful rule groups that use the `AWS_ROUTE_53_RESOLVED_DOMAIN` target type or the `aws_route_53_resolved_domain` rule keyword.
 *
 * @public
 */
export interface Route53ResolvedIPValidation {
  /**
   * The action that Network Firewall takes for a connection whose destination IP address fails resolved IP validation. A destination IP address fails validation when the Route 53 Resolver didn't return it in a DNS response in an associated VPC. Valid values are the following:
   *
   * - `ALERT` – Tags the matching connection in the firewall's flow logs without blocking it, when you enable logging. Use this to observe the effect of resolved IP validation before you enforce it.
   * - `DROP` – Silently blocks the connection without sending any response to the client.
   * - `REJECT` – Blocks the connection and sends a TCP reset (RST) to the client. Because a TCP reset applies only to TCP connections, Network Firewall drops non-TCP traffic instead of resetting it.
   *
   * @public
   */
  Action: Route53ResolvedIPValidationAction | undefined;

  /**
   * The ID of the Route 53 Resolver DNS Firewall rule group that determines which VPCs' DNS resolutions count for resolved IP validation. A destination IP address counts as resolved for a domain only when the Route 53 Resolver returned it in a DNS response within a VPC that's associated with this rule group. Associate the rule group with the VPCs that send traffic to the firewall. The ID must match the pattern `^rslvr-frg-[0-9a-f]+$`. It must also exist and be accessible from your account. Network Firewall validates this when you create or update the policy.
   *
   * Changing this value swaps the managed rule group association. Network Firewall processes the swap asynchronously. Each policy can have only one managed Route 53 Resolver DNS Firewall association. While a swap is in progress, Network Firewall rejects further changes to this setting. Wait until the swap completes, then retry.
   *
   * @public
   */
  DNSFirewallRuleGroupId: string | undefined;

  /**
   * The action that Network Firewall takes when the DNS resolution recorded for a destination IP address has expired from the resolved IP cache. This applies when Network Firewall still sees traffic to that IP address after the expiry. Network Firewall keeps a resolution for longer than the DNS record's time to live (TTL). Valid values are the following:
   *
   * - `CONTINUE` – Treats the expired resolution as still valid and doesn't block the connection because of expiry.
   * - `DROP` – Silently blocks traffic to the IP address after its resolution has expired, without sending any response to the client.
   * - `REJECT` – Blocks traffic to the IP address after its resolution has expired and sends a TCP reset (RST) to the client. Network Firewall drops non-TCP traffic instead of resetting it.
   *
   * @public
   */
  DNSExpiryExceptionPolicy: DNSExpiryExceptionPolicy | undefined;

  /**
   * The destination IP address ranges that are exempt from the policy-level resolved IP check. Network Firewall doesn't apply the `Action` in this configuration to a connection whose destination falls in these ranges, even if the Route 53 Resolver didn't return that IP address in an associated VPC. Specify each entry as an IPv4 or IPv6 address or CIDR range, up to 100 entries.
   *
   * This exemption applies only to the policy-level check. Stateful rules that use the `AWS_ROUTE_53_RESOLVED_DOMAIN` target type or the `aws_route_53_resolved_domain` keyword still evaluate connections to these destinations and match them independently of this list.
   *
   * @public
   */
  BypassDestinationValidationIPRanges?: Address[] | undefined;

  /**
   * The client source IP address ranges whose connections are subject to resolved IP validation. Specify each entry as an IPv4 or IPv6 address or CIDR range, up to 100 entries. If you omit this field, resolved IP validation applies to the CIDR ranges of the firewall's VPC and of any additional VPCs attached to the firewall. Specifying an empty list is not the same as omitting the field: an empty list means that Network Firewall doesn't validate any source addresses.
   *
   * This scope applies to the policy-level check only. Stateful rules that use the `AWS_ROUTE_53_RESOLVED_DOMAIN` target type or the `aws_route_53_resolved_domain` keyword still evaluate their destinations regardless of `SourceIPRanges`.
   *
   * @public
   */
  SourceIPRanges?: Address[] | undefined;
}

/**
 * Describes the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle and Network Firewall removes the flow entry from its flow table. When you update this value, existing connections will be treated according to your stream exception policy configuration.
 *
 * @public
 */
export interface FlowTimeouts {
  /**
   * The number of seconds that can pass without any TCP traffic sent through the firewall before the firewall determines that the connection is idle. After the idle timeout passes, data packets are dropped, however, the next TCP SYN packet is considered a new flow and is processed by the firewall. Clients or targets can use TCP keepalive packets to reset the idle timeout.
   *
   * You can define the `TcpIdleTimeoutSeconds` value to be between 60 and 6000 seconds. If no value is provided, it defaults to 350 seconds.
   *
   * @public
   */
  TcpIdleTimeoutSeconds?: number | undefined;
}

/**
 * Configuration settings for the handling of the stateful rule groups in a firewall policy.
 *
 * > **Important:** Updating any setting in `StatefulEngineOptions` may require a restart of the stateful engine in order to apply the changes. When this occurs, existing connections will be treated according to your stream exception policy configuration.
 *
 * @public
 */
export interface StatefulEngineOptions {
  /**
   * Indicates how to manage the order of stateful rule evaluation for the policy. `STRICT_ORDER` is the recommended option, but `DEFAULT_ACTION_ORDER` is the default option. With `STRICT_ORDER`, provide your rules in the order that you want them to be evaluated. You can then choose one or more default actions for packets that don't match any rules. Choose `STRICT_ORDER` to have the stateful rules engine determine the evaluation order of your rules. The default action for this rule order is `PASS`, followed by `DROP`, `REJECT`, and `ALERT` actions. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on your settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  RuleOrder?: RuleOrder | undefined;

  /**
   * Configures how Network Firewall processes traffic when a network connection breaks midstream. Network connections can break due to disruptions in external networks or within the firewall itself.
   *
   * - `DROP` - Network Firewall fails closed and drops all subsequent traffic going to the firewall. This is the default behavior.
   * - `CONTINUE` - Network Firewall continues to apply rules to the subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on this context. For example, if you have a stateful rule to `drop http` traffic, Network Firewall won't match the traffic for this rule because the service won't have the context from session initialization defining the application layer protocol as HTTP. However, this behavior is rule dependent—a TCP-layer rule using a `flow:stateless` rule would still match, as would the `aws:drop_strict` default action.
   * - `REJECT` - Network Firewall fails closed and drops all subsequent traffic going to the firewall. Network Firewall also sends a TCP reject packet back to your client so that the client can immediately establish a new session. Network Firewall will have context about the new session and will apply rules to the subsequent traffic.
   *
   * @public
   */
  StreamExceptionPolicy?: StreamExceptionPolicy | undefined;

  /**
   * Configures the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle.
   *
   * @public
   */
  FlowTimeouts?: FlowTimeouts | undefined;
}

/**
 * The setting that allows the policy owner to change the behavior of the rule group within a policy.
 *
 * @public
 */
export interface StatefulRuleGroupOverride {
  /**
   * The action that changes the rule group from `DROP` to `ALERT`. This only applies to managed rule groups.
   *
   * @public
   */
  Action?: OverrideAction | undefined;
}

/**
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.
 *
 * @public
 */
export interface StatefulRuleGroupReference {
  /**
   * The Amazon Resource Name (ARN) of the stateful rule group.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An integer setting that indicates the order in which to run the stateful rule groups in a single FirewallPolicy. This setting only applies to firewall policies that specify the `STRICT_ORDER` rule order in the stateful engine options settings.
   *
   * Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
   *
   * You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The action that allows the policy owner to override the behavior of the rule group within a policy.
   *
   * @public
   */
  Override?: StatefulRuleGroupOverride | undefined;

  /**
   * Network Firewall plans to augment the active threat defense managed rule group with an additional deep threat inspection capability. When this capability is released, Amazon Web Services will analyze service logs of network traffic processed by these rule groups to identify threat indicators across customers. Amazon Web Services will use these threat indicators to improve the active threat defense managed rule groups and protect the security of Amazon Web Services customers and services.
   *
   * > **Note:** Customers can opt-out of deep threat inspection at any time through the Network Firewall console or API. When customers opt out, Network Firewall will not use the network traffic processed by those customers' active threat defense rule groups for rule group improvement.
   *
   * @public
   */
  DeepThreatInspection?: boolean | undefined;
}

/**
 * An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify.
 *
 * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
 *
 * You can use custom actions in the following places:
 *
 * - In a rule group's StatelessRulesAndCustomActions specification. The custom actions are available for use by name inside the `StatelessRulesAndCustomActions` where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes.
 * - In a FirewallPolicy specification, in `StatelessCustomActions`. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules.
 *
 * @public
 */
export interface CustomAction {
  /**
   * The descriptive name of the custom action. You can't change the name of a custom action after you create it.
   *
   * @public
   */
  ActionName: string | undefined;

  /**
   * The custom action associated with the action name.
   *
   * @public
   */
  ActionDefinition: ActionDefinition | undefined;
}

/**
 * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.
 *
 * @public
 */
export interface StatelessRuleGroupReference {
  /**
   * The Amazon Resource Name (ARN) of the stateless rule group.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An integer setting that indicates the order in which to run the stateless rule groups in a single FirewallPolicy. Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
   *
   * @public
   */
  Priority: number | undefined;
}

/**
 * The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls.
 *
 * This, along with FirewallPolicyResponse, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
 *
 * @public
 */
export interface FirewallPolicy {
  /**
   * References to the stateless rule groups that are used in the policy. These define the matching criteria in stateless rules.
   *
   * @public
   */
  StatelessRuleGroupReferences?: StatelessRuleGroupReference[] | undefined;

  /**
   * The actions to take on a packet if it doesn't match any of the stateless rules in the policy. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
   *
   * You must specify one of the standard actions: `aws:pass`, `aws:drop`, or `aws:forward_to_sfe`. In addition, you can specify custom actions that are compatible with your standard section choice.
   *
   * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]`. For information about compatibility, see the custom action descriptions under CustomAction.
   *
   * @public
   */
  StatelessDefaultActions: string[] | undefined;

  /**
   * The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy. Network Firewall only manages UDP packet fragments and silently drops packet fragments for other protocols. If you want non-matching fragmented UDP packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
   *
   * You must specify one of the standard actions: `aws:pass`, `aws:drop`, or `aws:forward_to_sfe`. In addition, you can specify custom actions that are compatible with your standard section choice.
   *
   * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]`. For information about compatibility, see the custom action descriptions under CustomAction.
   *
   * @public
   */
  StatelessFragmentDefaultActions: string[] | undefined;

  /**
   * The custom action definitions that are available for use in the firewall policy's `StatelessDefaultActions` setting. You name each custom action that you define, and then you can use it by name in your default actions specifications.
   *
   * @public
   */
  StatelessCustomActions?: CustomAction[] | undefined;

  /**
   * References to the stateful rule groups that are used in the policy. These define the inspection criteria in stateful rules.
   *
   * @public
   */
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[] | undefined;

  /**
   * The default actions to take on a packet that doesn't match any stateful rules. The stateful default action is optional, and is only valid when using the strict rule order.
   *
   * Valid values of the stateful default action:
   *
   * - aws:drop_strict
   * - aws:drop_established
   * - aws:alert_strict
   * - aws:alert_established
   * - aws:drop_established_app_layer
   * - aws:alert_established_app_layer
   * - aws:drop_established_app_layer_to_server
   * - aws:alert_established_app_layer_to_server
   *
   * For more information, see [Strict evaluation order](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html#suricata-strict-rule-evaluation-order.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  StatefulDefaultActions?: string[] | undefined;

  /**
   * Additional options governing how Network Firewall handles stateful rules. The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.
   *
   * @public
   */
  StatefulEngineOptions?: StatefulEngineOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * Contains variables that you can use to override default Suricata settings in your firewall policy.
   *
   * @public
   */
  PolicyVariables?: PolicyVariables | undefined;

  /**
   * When true, prevents TCP and TLS packets from reaching destination servers until TLS Inspection has evaluated Server Name Indication (SNI) rules. Requires an associated TLS Inspection configuration.
   *
   * @public
   */
  EnableTLSSessionHolding?: boolean | undefined;

  /**
   * The settings that enable resolved IP validation for the policy. Resolved IP validation verifies that a connection's destination IP address is one that the Amazon Route 53 Resolver returned in a DNS response for a domain. The response must come from a VPC that's associated with the Route 53 Resolver DNS Firewall rule group that you specify. This checks how the destination IP address was obtained, instead of relying only on the domain that the client asserts in its TLS Server Name Indication (SNI) or HTTP `Host` header. For more information, see Route53ResolvedIPValidation.
   *
   * @public
   */
  Route53ResolvedIPValidation?: Route53ResolvedIPValidation | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyRequest {
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * @public
   */
  FirewallPolicyName: string | undefined;

  /**
   * The rule groups and policy actions to use in the firewall policy.
   *
   * @public
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * A description of the firewall policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.
   *
   * If set to `TRUE`, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to `FALSE`, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.
   *
   * If set to `FALSE`, Network Firewall makes the requested changes to your resources.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A complex type that contains settings for encryption of your firewall policy resources.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * A configuration error that Network Firewall detected for a firewall policy.
 *
 * @public
 */
export interface FirewallPolicyError {
  /**
   * The error code identifies the type of error. Valid values are the following:
   *
   * - `DNS_FIREWALL_RULE_GROUP_UNAVAILABLE` – The Amazon Route 53 Resolver DNS Firewall rule group that resolved IP validation references is unavailable, for example, because it was deleted or is no longer accessible from your account. Update the rule group ID or remove the resolved IP validation configuration.
   * - `ROUTE53_RESOLVED_IP_VALIDATION_MISSING` – An associated stateful rule group uses the `aws_route_53_resolved_domain` keyword, but the policy doesn't have resolved IP validation configured. The affected rules are inactive until you add resolved IP validation to the policy or remove the keyword rules.
   *
   * @public
   */
  Code: FirewallPolicyErrorCode | undefined;

  /**
   * A description of the error and how to resolve it.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The ID of the resource that the error relates to, when applicable. For example, for `DNS_FIREWALL_RULE_GROUP_UNAVAILABLE` this is the Amazon Route 53 Resolver DNS Firewall rule group ID.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * The high-level properties of a firewall policy. This, along with the FirewallPolicy, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
 *
 * @public
 */
export interface FirewallPolicyResponse {
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * @public
   */
  FirewallPolicyName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * > **Note:** If this response is for a create request that had `DryRun` set to `TRUE`, then this ARN is a placeholder that isn't attached to a valid resource.
   *
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * The unique identifier for the firewall policy.
   *
   * @public
   */
  FirewallPolicyId: string | undefined;

  /**
   * A description of the firewall policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the firewall policy. You can retrieve this for a firewall policy by calling DescribeFirewallPolicy and providing the firewall policy's name or ARN.
   *
   * @public
   */
  FirewallPolicyStatus?: ResourceStatus | undefined;

  /**
   * Additional detail about the firewall policy's current status, when applicable. For example, while an Amazon Route 53 Resolver DNS Firewall rule group change is in progress, the status is `UPDATING` and this message is "A DNS Firewall rule group change is in progress."
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The number of capacity units currently consumed by the policy's stateless rules.
   *
   * @public
   */
  ConsumedStatelessRuleCapacity?: number | undefined;

  /**
   * The number of capacity units currently consumed by the policy's stateful rules.
   *
   * @public
   */
  ConsumedStatefulRuleCapacity?: number | undefined;

  /**
   * The total number of domain name specifications across all domain list rule groups in the firewall policy that use the `stateful-domain-rulegroup` resource type.
   *
   * @public
   */
  ConsumedStatefulDomainCapacity?: number | undefined;

  /**
   * The number of firewalls that are associated with this firewall policy.
   *
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall policy.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Any configuration errors that apply to the firewall policy. Network Firewall detects these errors asynchronously, after you create or update the policy, so an error can appear after the request that caused it has already succeeded. Each entry describes the problem and how to resolve it, and Network Firewall clears it automatically after you resolve the problem.
   *
   * @public
   */
  Errors?: FirewallPolicyError[] | undefined;

  /**
   * The last time that the firewall policy was changed.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.
   *
   * To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a firewall policy. This, along with the FirewallPolicy, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
   *
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * This data type is used specifically for the CreateProxy and UpdateProxy APIs.
 *
 * Open port for taking HTTP or HTTPS traffic.
 *
 * @public
 */
export interface ListenerPropertyRequest {
  /**
   * Port for processing traffic.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Selection of HTTP or HTTPS traffic.
   *
   * @public
   */
  Type: ListenerPropertyType | undefined;
}

/**
 * This data type is used specifically for the CreateProxy and UpdateProxy APIs.
 *
 * TLS decryption on traffic to filter on attributes in the HTTP header.
 *
 * @public
 */
export interface TlsInterceptPropertiesRequest {
  /**
   * Private Certificate Authority (PCA) used to issue private TLS certificates so that the proxy can present PCA-signed certificates which applications trust through the same root, establishing a secure and consistent trust model for encrypted communication.
   *
   * @public
   */
  PcaArn?: string | undefined;

  /**
   * Specifies whether to enable or disable TLS Intercept Mode.
   *
   * @public
   */
  TlsInterceptMode?: TlsInterceptMode | undefined;
}

/**
 * @public
 */
export interface CreateProxyRequest {
  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * @public
   */
  ProxyName: string | undefined;

  /**
   * A unique identifier for the NAT gateway to use with proxy resources.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * Listener properties for HTTP and HTTPS traffic.
   *
   * @public
   */
  ListenerProperties?: ListenerPropertyRequest[] | undefined;

  /**
   * TLS decryption on traffic to filter on attributes in the HTTP header.
   *
   * @public
   */
  TlsInterceptProperties: TlsInterceptPropertiesRequest | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * TLS decryption on traffic to filter on attributes in the HTTP header.
 *
 * @public
 */
export interface TlsInterceptProperties {
  /**
   * Private Certificate Authority (PCA) used to issue private TLS certificates so that the proxy can present PCA-signed certificates which applications trust through the same root, establishing a secure and consistent trust model for encrypted communication.
   *
   * @public
   */
  PcaArn?: string | undefined;

  /**
   * Specifies whether to enable or disable TLS Intercept Mode.
   *
   * @public
   */
  TlsInterceptMode?: TlsInterceptMode | undefined;
}

/**
 * Proxy attached to a NAT gateway.
 *
 * @public
 */
export interface Proxy {
  /**
   * Time the Proxy was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Time the Proxy was deleted.
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * Time the Proxy was updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * Failure code for cases when the Proxy fails to attach or update.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * Failure message for cases when the Proxy fails to attach or update.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * Current attachment/detachment status of the Proxy.
   *
   * @public
   */
  ProxyState?: ProxyState | undefined;

  /**
   * Current modification status of the Proxy.
   *
   * @public
   */
  ProxyModifyState?: ProxyModifyState | undefined;

  /**
   * The NAT Gateway for the proxy.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * @public
   */
  ProxyArn?: string | undefined;

  /**
   * Listener properties for HTTP and HTTPS traffic.
   *
   * @public
   */
  ListenerProperties?: ListenerProperty[] | undefined;

  /**
   * TLS decryption on traffic to filter on attributes in the HTTP header.
   *
   * @public
   */
  TlsInterceptProperties?: TlsInterceptProperties | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProxyResponse {
  /**
   * Proxy attached to a NAT gateway.
   *
   * @public
   */
  Proxy?: Proxy | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request.
   *
   * To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  ProxyConfigurationName: string | undefined;

  /**
   * A description of the proxy configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The proxy rule group name(s) to attach to the proxy configuration.
   *
   * You must specify the ARNs or the names, and you can specify both.
   *
   * @public
   */
  RuleGroupNames?: string[] | undefined;

  /**
   * The proxy rule group arn(s) to attach to the proxy configuration.
   *
   * You must specify the ARNs or the names, and you can specify both.
   *
   * @public
   */
  RuleGroupArns?: string[] | undefined;

  /**
   * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
   *
   * @public
   */
  DefaultRulePhaseActions: ProxyConfigDefaultRulePhaseActionsRequest | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProxyConfigurationResponse {
  /**
   * The properties that define the proxy configuration.
   *
   * @public
   */
  ProxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * Match criteria that specify what traffic attributes to examine.
 *
 * @public
 */
export interface ProxyRuleCondition {
  /**
   * Defines how to perform a match.
   *
   * @public
   */
  ConditionOperator?: string | undefined;

  /**
   * Defines what is to be matched.
   *
   * @public
   */
  ConditionKey?: string | undefined;

  /**
   * Specifes the exact value that needs to be matched against.
   *
   * @public
   */
  ConditionValues?: string[] | undefined;
}

/**
 * Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
 *
 * @public
 */
export interface CreateProxyRule {
  /**
   * The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it.
   *
   * @public
   */
  ProxyRuleName?: string | undefined;

  /**
   * A description of the proxy rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Action to take.
   *
   * @public
   */
  Action?: ProxyRulePhaseAction | undefined;

  /**
   * Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against.
   *
   * @public
   */
  Conditions?: ProxyRuleCondition[] | undefined;

  /**
   * Where to insert a proxy rule in a proxy rule group.
   *
   * @public
   */
  InsertPosition?: number | undefined;
}

/**
 * Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
 *
 * @public
 */
export interface ProxyRule {
  /**
   * The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it.
   *
   * @public
   */
  ProxyRuleName?: string | undefined;

  /**
   * A description of the proxy rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Action to take.
   *
   * @public
   */
  Action?: ProxyRulePhaseAction | undefined;

  /**
   * Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against.
   *
   * @public
   */
  Conditions?: ProxyRuleCondition[] | undefined;
}

/**
 * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
 *
 * @public
 */
export interface ProxyRulesByRequestPhase {
  /**
   * Before domain resolution.
   *
   * @public
   */
  PreDNS?: ProxyRule[] | undefined;

  /**
   * After DNS, before request.
   *
   * @public
   */
  PreREQUEST?: ProxyRule[] | undefined;

  /**
   * After receiving response.
   *
   * @public
   */
  PostRESPONSE?: ProxyRule[] | undefined;
}

/**
 * @public
 */
export interface CreateProxyRuleGroupRequest {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName: string | undefined;

  /**
   * A description of the proxy rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
   *
   * @public
   */
  Rules?: ProxyRulesByRequestPhase | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations.
 *
 * @public
 */
export interface ProxyRuleGroup {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * Time the Proxy Rule Group was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Time the Proxy Rule Group was deleted.
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
   *
   * @public
   */
  Rules?: ProxyRulesByRequestPhase | undefined;

  /**
   * A description of the proxy rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProxyRuleGroupResponse {
  /**
   * The properties that define the proxy rule group.
   *
   * @public
   */
  ProxyRuleGroup?: ProxyRuleGroup | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request.
   *
   * To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
 *
 * This data type is used specifically for the CreateProxyRules API.
 *
 * Pre-DNS - before domain resolution.
 *
 * Pre-Request - after DNS, before request.
 *
 * Post-Response - after receiving response.
 *
 * @public
 */
export interface CreateProxyRulesByRequestPhase {
  /**
   * Before domain resolution.
   *
   * @public
   */
  PreDNS?: CreateProxyRule[] | undefined;

  /**
   * After DNS, before request.
   *
   * @public
   */
  PreREQUEST?: CreateProxyRule[] | undefined;

  /**
   * After receiving response.
   *
   * @public
   */
  PostRESPONSE?: CreateProxyRule[] | undefined;
}

/**
 * @public
 */
export interface CreateProxyRulesRequest {
  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
   *
   * @public
   */
  Rules: CreateProxyRulesByRequestPhase | undefined;
}

/**
 * @public
 */
export interface CreateProxyRulesResponse {
  /**
   * The properties that define the proxy rule group with the newly created proxy rule(s).
   *
   * @public
   */
  ProxyRuleGroup?: ProxyRuleGroup | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request.
   *
   * To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * Configures one or more IP set references for a Suricata-compatible rule group. This is used in CreateRuleGroup or UpdateRuleGroup. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see [Using IP set references](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references) in the *Network Firewall Developer Guide*.
 *
 * Network Firewall currently supports [Amazon VPC prefix lists](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) and [resource groups](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups) in IP set references.
 *
 * @public
 */
export interface IPSetReference {
  /**
   * The Amazon Resource Name (ARN) of the resource that you are referencing in your rule group.
   *
   * @public
   */
  ReferenceArn?: string | undefined;
}

/**
 * Contains a set of IP set references.
 *
 * @public
 */
export interface ReferenceSets {
  /**
   * The list of IP set references.
   *
   * @public
   */
  IPSetReferences?: Record<string, IPSetReference> | undefined;
}

/**
 * Stateful inspection criteria for a domain list rule group.
 *
 * For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.
 *
 * By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the `HOME_NET` rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see RuleVariables in this guide and [Stateful domain list rule groups in Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html) in the *Network Firewall Developer Guide*.
 *
 * @public
 */
export interface RulesSourceList {
  /**
   * The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:
   *
   * - Explicit names. For example, `abc.example.com` matches only the domain `abc.example.com`.
   * - Names that use a domain wildcard, which you indicate with an initial '`.`'. For example,`.example.com` matches `example.com` and matches all subdomains of `example.com`, such as `abc.example.com` and `www.example.com`.
   *
   * @public
   */
  Targets: string[] | undefined;

  /**
   * The types of matching to perform against the domains in `Targets`. You can specify any combination of the following:
   *
   * - `AWS_ROUTE_53_RESOLVED_DOMAIN` – Match the domain against the domain that the Amazon Route 53 Resolver resolved the connection's destination IP address for.
   * - `HTTP_HOST` – Match the domain against the `Host` header of HTTP traffic.
   * - `TLS_SNI` – Match the domain against the Server Name Indication (SNI) of HTTPS traffic.
   *
   * `AWS_ROUTE_53_RESOLVED_DOMAIN` matches on how the destination IP address was resolved, rather than on the domain that the client asserts in its TLS SNI or HTTP `Host` header. This target type takes effect when you configure resolved IP validation on the firewall policy. For more information, see Route53ResolvedIPValidation.
   *
   * Whether you include `AWS_ROUTE_53_RESOLVED_DOMAIN` changes what the generated rules match, together with `GeneratedRulesType`:
   *
   * - Combining `AWS_ROUTE_53_RESOLVED_DOMAIN` with `TLS_SNI` or `HTTP_HOST` in an `ALLOWLIST` requires both conditions to match. The SNI or `Host` header must match the domain, **and** the Route 53 Resolver must have resolved the destination IP address for that domain. Network Firewall allows traffic only in that case. Traffic that matches one condition, such as a spoofed `Host` header sent to an unresolved IP address, is not allowed.
   * - In a `DENYLIST`, or when `AWS_ROUTE_53_RESOLVED_DOMAIN` is the only target type, Network Firewall evaluates each condition independently: a match on either the domain (SNI or `Host`) or the resolved destination IP address triggers the rule.
   * - When you don't include `AWS_ROUTE_53_RESOLVED_DOMAIN`, the generated rules match only on the SNI or `Host` header, without checking how the destination IP address was resolved.
   *
   * An `ALLOWLIST` whose only target type is `AWS_ROUTE_53_RESOLVED_DOMAIN` is additive: it allows matching traffic but doesn't generate a default rule that drops non-matching traffic. Only the `TLS_SNI` and `HTTP_HOST` target types generate that default drop. To allow only the resolved domains and drop all other traffic, include a protocol target type as well.
   *
   * @public
   */
  TargetTypes: TargetType[] | undefined;

  /**
   * Whether you want to apply allow, reject, alert, or drop behavior to the domains in your target list.
   *
   * > **Note:** When logging is enabled and you choose Alert, traffic that matches the domain specifications generates an alert in the firewall's logs. Then, traffic either passes, is rejected, or drops based on other rules in the firewall policy.
   *
   * @public
   */
  GeneratedRulesType: GeneratedRulesType | undefined;
}

/**
 * The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding StatefulRule.
 *
 * @public
 */
export interface Header {
  /**
   * The protocol to inspect for. To specify all, you can use `IP`, because all traffic on Amazon Web Services and on the internet is IP.
   *
   * @public
   */
  Protocol: StatefulRuleProtocol | undefined;

  /**
   * The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   *
   * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  SourcePort: string | undefined;

  /**
   * The direction of traffic flow to inspect. If set to `ANY`, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to `FORWARD`, the inspection only matches traffic going from the source to the destination.
   *
   * @public
   */
  Direction: StatefulRuleDirection | undefined;

  /**
   * The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   *
   * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * @public
   */
  Destination: string | undefined;

  /**
   * The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  DestinationPort: string | undefined;
}

/**
 * Additional settings for a stateful rule. This is part of the StatefulRule configuration.
 *
 * @public
 */
export interface RuleOption {
  /**
   * The keyword for the Suricata compatible rule option. You must include a `sid` (signature ID), and can optionally include other keywords. For information about Suricata compatible keywords, see [Rule options](https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html#rule-options) in the Suricata documentation.
   *
   * @public
   */
  Keyword: string | undefined;

  /**
   * The settings of the Suricata compatible rule option. Rule options have zero or more setting values, and the number of possible and required settings depends on the `Keyword`. For more information about the settings for specific options, see [Rule options](https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html#rule-options).
   *
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html).
 *
 * @public
 */
export interface StatefulRule {
  /**
   * Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow.
   *
   * The actions for a stateful rule are defined as follows:
   *
   * - **PASS** - Permits the packets to go to the intended destination.
   * - **DROP** - Blocks the packets from going to the intended destination and sends an alert log message, if alert logging is configured in the Firewall LoggingConfiguration.
   * - **ALERT** - Sends an alert log message, if alert logging is configured in the Firewall LoggingConfiguration.
   *
   *   You can use this action to test a rule that you intend to use to drop traffic. You can enable the rule with `ALERT` action, verify in the logs that the rule is filtering as you want, then change the action to `DROP`.
   * - **REJECT** - Drops traffic that matches the conditions of the stateful rule, and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and an RST bit contained in the TCP header flags. REJECT is available only for TCP traffic. This option doesn't support FTP or IMAP protocols.
   *
   * @public
   */
  Action: StatefulAction | undefined;

  /**
   * The stateful inspection criteria for this rule, used to inspect traffic flows.
   *
   * @public
   */
  Header: Header | undefined;

  /**
   * Additional options for the rule. These are the Suricata `RuleOptions` settings.
   *
   * @public
   */
  RuleOptions: RuleOption[] | undefined;
}

/**
 * A single port range specification. This is used for source and destination port ranges in the stateless rule MatchAttributes, `SourcePorts`, and `DestinationPorts` settings.
 *
 * @public
 */
export interface PortRange {
  /**
   * The lower limit of the port range. This must be less than or equal to the `ToPort` specification.
   *
   * @public
   */
  FromPort: number | undefined;

  /**
   * The upper limit of the port range. This must be greater than or equal to the `FromPort` specification.
   *
   * @public
   */
  ToPort: number | undefined;
}

/**
 * TCP flags and masks to inspect packets for, used in stateless rules MatchAttributes settings.
 *
 * @public
 */
export interface TCPFlagField {
  /**
   * Used in conjunction with the `Masks` setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the `Masks` setting.
   *
   * For the flags that are specified in the masks setting, the following must be true for the packet to match:
   *
   * - The ones that are set in this flags setting must be set in the packet.
   * - The ones that are not set in this flags setting must also not be set in the packet.
   *
   * @public
   */
  Flags: TCPFlag[] | undefined;

  /**
   * The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.
   *
   * @public
   */
  Masks?: TCPFlag[] | undefined;
}

/**
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
 *
 * @public
 */
export interface MatchAttributes {
  /**
   * The source IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any source address.
   *
   * @public
   */
  Sources?: Address[] | undefined;

  /**
   * The destination IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any destination address.
   *
   * @public
   */
  Destinations?: Address[] | undefined;

  /**
   * The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * If not specified, this matches with any source port.
   *
   * This setting is only used for protocols 6 (TCP) and 17 (UDP).
   *
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * This setting is only used for protocols 6 (TCP) and 17 (UDP).
   *
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * The protocols to inspect for, specified using the assigned internet protocol number (IANA) for each protocol. If not specified, this matches with any protocol.
   *
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * The TCP flags and masks to inspect for. If not specified, this matches with any settings. This setting is only used for protocol 6 (TCP).
   *
   * @public
   */
  TCPFlags?: TCPFlagField[] | undefined;
}

/**
 * The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
 *
 * @public
 */
export interface RuleDefinition {
  /**
   * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
   *
   * @public
   */
  MatchAttributes: MatchAttributes | undefined;

  /**
   * The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action and you can add custom actions.
   *
   * > **Note:** Network Firewall only forwards a packet for stateful rule inspection if you specify `aws:forward_to_sfe` for a rule that the packet matches, or if the packet doesn't match any stateless rule and you specify `aws:forward_to_sfe` for the `StatelessDefaultActions` setting for the FirewallPolicy.
   *
   * For every rule, you must specify exactly one of the following standard actions.
   *
   * - **aws:pass** - Discontinues all inspection of the packet and permits it to go to its intended destination.
   * - **aws:drop** - Discontinues all inspection of the packet and blocks it from going to its intended destination.
   * - **aws:forward_to_sfe** - Discontinues stateless inspection of the packet and forwards it to the stateful rule engine for inspection.
   *
   * Additionally, you can specify a custom action. To do this, you define a custom action by name and type, then provide the name you've assigned to the action in this `Actions` setting. For information about the options, see CustomAction.
   *
   * To provide more than one action in this setting, separate the settings with a comma. For example, if you have a custom `PublishMetrics` action that you've named `MyMetricsAction`, then you could specify the standard action `aws:pass` and the custom action with `[“aws:pass”, “MyMetricsAction”]`.
   *
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * A single stateless rule. This is used in StatelessRulesAndCustomActions.
 *
 * @public
 */
export interface StatelessRule {
  /**
   * Defines the stateless 5-tuple packet inspection criteria and the action to take on a packet that matches the criteria.
   *
   * @public
   */
  RuleDefinition: RuleDefinition | undefined;

  /**
   * Indicates the order in which to run this rule relative to all of the rules that are defined for a stateless rule group. Network Firewall evaluates the rules in a rule group starting with the lowest priority setting. You must ensure that the priority settings are unique for the rule group.
   *
   * Each stateless rule group uses exactly one `StatelessRulesAndCustomActions` object, and each `StatelessRulesAndCustomActions` contains exactly one `StatelessRules` object. To ensure unique priority settings for your rule groups, set unique priorities for the stateless rules that you define inside any single `StatelessRules` object.
   *
   * You can change the priority settings of your rules at any time. To make it easier to insert rules later, number them so there's a wide range in between, for example use 100, 200, and so on.
   *
   * @public
   */
  Priority: number | undefined;
}

/**
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
 *
 * @public
 */
export interface StatelessRulesAndCustomActions {
  /**
   * Defines the set of stateless rules for use in a stateless rule group.
   *
   * @public
   */
  StatelessRules: StatelessRule[] | undefined;

  /**
   * Defines an array of individual custom action definitions that are available for use by the stateless rules in this `StatelessRulesAndCustomActions` specification. You name each custom action that you define, and then you can use it by name in your StatelessRule RuleDefinition `Actions` specification.
   *
   * @public
   */
  CustomActions?: CustomAction[] | undefined;
}

/**
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single `RulesSource`. You can use an instance of this for either stateless rules or stateful rules.
 *
 * @public
 */
export interface RulesSource {
  /**
   * Stateful inspection criteria, provided in Suricata compatible rules. Suricata is an open-source threat detection framework that includes a standard rule-based language for network traffic inspection.
   *
   * These rules contain the inspection criteria and the action to take for traffic that matches the criteria, so this type of rule group doesn't have a separate action setting.
   *
   * > **Note:** You can't use the `priority` keyword if the `RuleOrder` option in StatefulRuleOptions is set to `STRICT_ORDER`.
   *
   * @public
   */
  RulesString?: string | undefined;

  /**
   * Stateful inspection criteria for a domain list rule group.
   *
   * @public
   */
  RulesSourceList?: RulesSourceList | undefined;

  /**
   * An array of individual stateful rules inspection criteria to be used together in a stateful rule group. Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html).
   *
   * @public
   */
  StatefulRules?: StatefulRule[] | undefined;

  /**
   * Stateless inspection criteria to be used in a stateless rule group.
   *
   * @public
   */
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions | undefined;
}

/**
 * A set of port ranges for use in the rules in a rule group.
 *
 * @public
 */
export interface PortSet {
  /**
   * The set of port ranges.
   *
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * Settings that are available for use in the rules in the RuleGroup where this is defined. See CreateRuleGroup or UpdateRuleGroup for usage.
 *
 * @public
 */
export interface RuleVariables {
  /**
   * A list of IP addresses and address ranges, in CIDR notation.
   *
   * @public
   */
  IPSets?: Record<string, IPSet> | undefined;

  /**
   * A list of port ranges.
   *
   * @public
   */
  PortSets?: Record<string, PortSet> | undefined;
}

/**
 * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
 *
 * @public
 */
export interface StatefulRuleOptions {
  /**
   * Indicates how to manage the order of the rule evaluation for the rule group. `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  RuleOrder?: RuleOrder | undefined;
}

/**
 * The object that defines the rules in a rule group. This, along with RuleGroupResponse, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
 *
 * Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow.
 *
 * To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
 *
 * @public
 */
export interface RuleGroup {
  /**
   * Settings that are available for use in the rules in the rule group. You can only use these for stateful rule groups.
   *
   * @public
   */
  RuleVariables?: RuleVariables | undefined;

  /**
   * The list of a rule group's reference sets.
   *
   * @public
   */
  ReferenceSets?: ReferenceSets | undefined;

  /**
   * The stateful rules or stateless rules for the rule group.
   *
   * @public
   */
  RulesSource: RulesSource | undefined;

  /**
   * Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful rule group must have stateful rule options settings that are compatible with these settings. Some limitations apply; for more information, see [Strict evaluation order](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-limitations-caveats.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  StatefulRuleOptions?: StatefulRuleOptions | undefined;
}

/**
 * High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling [DescribeRuleGroup](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html).
 *
 * @public
 */
export interface SourceMetadata {
  /**
   * The Amazon Resource Name (ARN) of the rule group that your own rule group is copied from.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The update token of the Amazon Web Services managed rule group that your own rule group is copied from. To determine the update token for the managed rule group, call [DescribeRuleGroup](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html#networkfirewall-DescribeRuleGroup-response-UpdateToken).
   *
   * @public
   */
  SourceUpdateToken?: string | undefined;
}

/**
 * A complex type that specifies which Suricata rule metadata fields to use when displaying threat information. Contains:
 *
 * - `RuleOptions` - The Suricata rule options fields to extract and display
 *
 * These settings affect how threat information appears in both the console and API responses. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.
 *
 * @public
 */
export interface SummaryConfiguration {
  /**
   * Specifies the selected rule options returned by DescribeRuleGroupSummary.
   *
   * @public
   */
  RuleOptions?: SummaryRuleOption[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupRequest {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * An object that defines the rule group rules.
   *
   * > **Note:** You must provide either this rule group setting or a `Rules` setting, but not both.
   *
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.
   *
   * > **Note:** You must provide either this rules setting or a populated `RuleGroup` setting, but not both.
   *
   * You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.
   *
   * @public
   */
  Rules?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * @public
   */
  Type: RuleGroupType | undefined;

  /**
   * A description of the rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
   *
   * You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with `DryRun` set to `TRUE`.
   *
   * > **Note:** You can't change or exceed this capacity when you update the rule group, so leave room for your rule group to grow.
   *
   * **Capacity for a stateless rule group**
   *
   * For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group.
   *
   * To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule's match settings:
   *
   * - A match setting with no criteria specified has a value of 1.
   * - A match setting with `Any` specified has a value of 1.
   * - All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ["UDP"] and a source setting ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3.
   *
   * A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification for each of the other match settings has a capacity requirement of 6.
   *
   * **Capacity for a stateful rule group**
   *
   * For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group.
   *
   * @public
   */
  Capacity: number | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.
   *
   * If set to `TRUE`, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to `FALSE`, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.
   *
   * If set to `FALSE`, Network Firewall makes the requested changes to your resources.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A complex type that contains settings for encryption of your rule group resources.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.
   *
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to `TRUE`, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set `DryRun` to `TRUE`.
   *
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;

  /**
   * An object that contains a `RuleOptions` array of strings. You use `RuleOptions` to determine which of the following RuleSummary values are returned in response to `DescribeRuleGroupSummary`.
   *
   * - `Metadata` - returns
   * - `Msg`
   * - `SID`
   *
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
 *
 * @public
 */
export interface RuleGroupResponse {
  /**
   * The Amazon Resource Name (ARN) of the rule group.
   *
   * > **Note:** If this response is for a create request that had `DryRun` set to `TRUE`, then this ARN is a placeholder that isn't attached to a valid resource.
   *
   * @public
   */
  RuleGroupArn: string | undefined;

  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * The unique identifier for the rule group.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * A description of the rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
   *
   * You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with `DryRun` set to `TRUE`.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * Detailed information about the current status of a rule group.
   *
   * @public
   */
  RuleGroupStatus?: ResourceStatus | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The number of capacity units currently consumed by the rule group rules.
   *
   * @public
   */
  ConsumedCapacity?: number | undefined;

  /**
   * The number of firewall policies that use this rule group.
   *
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * A complex type that contains the Amazon Web Services KMS encryption configuration settings for your rule group.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to track the version updates made to the originating rule group.
   *
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service SNS topic that's used to record changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the [Amazon Simple Notification Service Developer Guide.](https://docs.aws.amazon.com/sns/latest/dg/welcome.html).
   *
   * @public
   */
  SnsTopic?: string | undefined;

  /**
   * The last time that the rule group was changed.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The list of analysis results for `AnalyzeRuleGroup`. If you set `AnalyzeRuleGroup` to `TRUE` in CreateRuleGroup, UpdateRuleGroup, or DescribeRuleGroup, Network Firewall analyzes the rule group and identifies the rules that might adversely effect your firewall's functionality. For example, if Network Firewall detects a rule that's routing traffic asymmetrically, which impacts the service's ability to properly process traffic, the service includes the rule in the list of analysis results.
   *
   * @public
   */
  AnalysisResults?: AnalysisResult[] | undefined;

  /**
   * A complex type containing the currently selected rule option fields that will be displayed for rule summarization returned by DescribeRuleGroupSummary.
   *
   * - The `RuleOptions` specified in SummaryConfiguration
   * - Rule metadata organization preferences
   *
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.
   *
   * To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
   *
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.
 *
 * @public
 */
export interface ServerCertificateScope {
  /**
   * The source IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any source address.
   *
   * @public
   */
  Sources?: Address[] | undefined;

  /**
   * The destination IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any destination address.
   *
   * @public
   */
  Destinations?: Address[] | undefined;

  /**
   * The source ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any source port.
   *
   * You can specify individual ports, for example `1994`, and you can specify port ranges, such as `1990:1994`.
   *
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * The destination ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any destination port.
   *
   * You can specify individual ports, for example `1994`, and you can specify port ranges, such as `1990:1994`.
   *
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * The protocols to inspect for, specified using the assigned internet protocol number (IANA) for each protocol. If not specified, this matches with any protocol.
   *
   * Network Firewall currently supports only TCP.
   *
   * @public
   */
  Protocols?: number[] | undefined;
}

/**
 * Any Certificate Manager (ACM) Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a ServerCertificateConfiguration. Used in a TLSInspectionConfiguration for inspection of inbound traffic to your firewall. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) or [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
 *
 * @public
 */
export interface ServerCertificate {
  /**
   * The Amazon Resource Name (ARN) of the Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * Configures the Certificate Manager certificates and scope that Network Firewall uses to decrypt and re-encrypt traffic using a TLSInspectionConfiguration. You can configure `ServerCertificates` for inbound SSL/TLS inspection, a `CertificateAuthorityArn` for outbound SSL/TLS inspection, or both. For information about working with certificates for TLS inspection, see [Using SSL/TLS server certficiates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the *Network Firewall Developer Guide*.
 *
 * > **Note:** If a server certificate that's associated with your TLSInspectionConfiguration is revoked, deleted, or expired it can result in client-side TLS errors.
 *
 * @public
 */
export interface ServerCertificateConfiguration {
  /**
   * The list of server certificates to use for inbound SSL/TLS inspection.
   *
   * @public
   */
  ServerCertificates?: ServerCertificate[] | undefined;

  /**
   * A list of scopes.
   *
   * @public
   */
  Scopes?: ServerCertificateScope[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the imported certificate authority (CA) certificate within Certificate Manager (ACM) to use for outbound SSL/TLS inspection.
   *
   * The following limitations apply:
   *
   * - You can use CA certificates that you imported into ACM, but you can't generate CA certificates with ACM.
   * - You can't use certificates issued by Private Certificate Authority.
   *
   * For more information about configuring certificates for outbound inspection, see [Using SSL/TLS certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the *Network Firewall Developer Guide*.
   *
   * For information about working with certificates in ACM, see [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status. If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a `CertificateAuthorityArn` in ServerCertificateConfiguration.
   *
   * @public
   */
  CheckCertificateRevocationStatus?: CheckCertificateRevocationStatusActions | undefined;
}

/**
 * The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
 *
 * Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
 *
 * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *Network Firewall Developer Guide*.
 *
 * @public
 */
export interface TLSInspectionConfiguration {
  /**
   * Lists the server certificate configurations that are associated with the TLS configuration.
   *
   * @public
   */
  ServerCertificateConfigurations?: ServerCertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateTLSInspectionConfigurationRequest {
  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * @public
   */
  TLSInspectionConfigurationName: string | undefined;

  /**
   * The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
   *
   * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  TLSInspectionConfiguration: TLSInspectionConfiguration | undefined;

  /**
   * A description of the TLS inspection configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see [Encryption at rest with Amazon Web Services Key Managment Service](https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * The high-level properties of a TLS inspection configuration. This, along with the `TLSInspectionConfiguration`, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling `DescribeTLSInspectionConfiguration`.
 *
 * @public
 */
export interface TLSInspectionConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * @public
   */
  TLSInspectionConfigurationArn: string | undefined;

  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * @public
   */
  TLSInspectionConfigurationName: string | undefined;

  /**
   * A unique identifier for the TLS inspection configuration. This ID is returned in the responses to create and list commands. You provide it to operations such as update and delete.
   *
   * @public
   */
  TLSInspectionConfigurationId: string | undefined;

  /**
   * Detailed information about the current status of a TLSInspectionConfiguration. You can retrieve this for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration and providing the TLS inspection configuration name and ARN.
   *
   * @public
   */
  TLSInspectionConfigurationStatus?: ResourceStatus | undefined;

  /**
   * A description of the TLS inspection configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The last time that the TLS inspection configuration was changed.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The number of firewall policies that use this TLS inspection configuration.
   *
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A list of the certificates associated with the TLS inspection configuration.
   *
   * @public
   */
  Certificates?: TlsCertificateData[] | undefined;

  /**
   * Contains metadata about an Certificate Manager certificate.
   *
   * @public
   */
  CertificateAuthority?: TlsCertificateData | undefined;
}

/**
 * @public
 */
export interface CreateTLSInspectionConfigurationResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request.
   *
   * To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a TLS inspection configuration. This, along with the TLSInspectionConfiguration, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The unique identifier of the VPC where you want to create a firewall endpoint.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID for a subnet that's used in an association with a firewall. This is used in CreateFirewall, AssociateSubnets, and CreateVpcEndpointAssociation. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
   *
   * @public
   */
  SubnetMapping: SubnetMapping | undefined;

  /**
   * A description of the VPC endpoint association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A VPC endpoint association defines a single subnet to use for a firewall endpoint for a `Firewall`. You can define VPC endpoint associations only in the Availability Zones that already have a subnet mapping defined in the `Firewall` resource.
 *
 * > **Note:** You can retrieve the list of Availability Zones that are available for use by calling `DescribeFirewallMetadata`.
 *
 * To manage firewall endpoints, first, in the `Firewall` specification, you specify a single VPC and one subnet for each of the Availability Zones where you want to use the firewall. Then you can define additional endpoints as VPC endpoint associations.
 *
 * You can use VPC endpoint associations to expand the protections of the firewall as follows:
 *
 * - **Protect multiple VPCs with a single firewall** - You can use the firewall to protect other VPCs, either in your account or in accounts where the firewall is shared. You can only specify Availability Zones that already have a firewall endpoint defined in the `Firewall` subnet mappings.
 * - **Define multiple firewall endpoints for a VPC in an Availability Zone** - You can create additional firewall endpoints for the VPC that you have defined in the firewall, in any Availability Zone that already has an endpoint defined in the `Firewall` subnet mappings. You can create multiple VPC endpoint associations for any other VPC where you use the firewall.
 *
 * You can use Resource Access Manager to share a `Firewall` that you own with other accounts, which gives them the ability to use the firewall to create VPC endpoint associations. For information about sharing a firewall, see `PutResourcePolicy` in this guide and see [Sharing Network Firewall resources](https://docs.aws.amazon.com/network-firewall/latest/developerguide/sharing.html) in the *Network Firewall Developer Guide*.
 *
 * The status of the VPC endpoint association, which indicates whether it's ready to filter network traffic, is provided in the corresponding VpcEndpointAssociationStatus. You can retrieve both the association and its status by calling DescribeVpcEndpointAssociation.
 *
 * @public
 */
export interface VpcEndpointAssociation {
  /**
   * The unique identifier of the VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The unique identifier of the VPC for the endpoint association.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID for a subnet that's used in an association with a firewall. This is used in CreateFirewall, AssociateSubnets, and CreateVpcEndpointAssociation. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
   *
   * @public
   */
  SubnetMapping: SubnetMapping | undefined;

  /**
   * A description of the VPC endpoint association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Detailed information about the current status of a VpcEndpointAssociation. You can retrieve this by calling DescribeVpcEndpointAssociation and providing the VPC endpoint association ARN.
 *
 * @public
 */
export interface VpcEndpointAssociationStatus {
  /**
   * The readiness of the configured firewall endpoint to handle network traffic.
   *
   * @public
   */
  Status: FirewallStatusValue | undefined;

  /**
   * The list of the Availability Zone sync states for all subnets that are defined by the firewall.
   *
   * @public
   */
  AssociationSyncState?: Record<string, AZSyncState> | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointAssociationResponse {
  /**
   * The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint.
   *
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * Detailed information about the current status of a VpcEndpointAssociation. You can retrieve this by calling DescribeVpcEndpointAssociation and providing the VPC endpoint association ARN.
   *
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteContainerAssociationRequest {
  /**
   * The descriptive name of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerAssociationResponse {
  /**
   * The descriptive name of the container association.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * The current status of the container association. After deletion is initiated, the status is `DELETING`.
   *
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallResponse {
  /**
   * A firewall defines the behavior of a firewall, the main VPC where the firewall is used, the Availability Zones where the firewall can be used, and one subnet to use for a firewall endpoint within each of the Availability Zones. The Availability Zones are defined implicitly in the subnet specifications.
   *
   * In addition to the firewall endpoints that you define in this `Firewall` specification, you can create firewall endpoints in `VpcEndpointAssociation` resources for any VPC, in any Availability Zone where the firewall is already in use.
   *
   * The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding FirewallStatus. You can retrieve both the firewall and firewall status by calling DescribeFirewall.
   *
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * Detailed information about the current status of a Firewall. You can retrieve this for a firewall by calling DescribeFirewall and providing the firewall name and ARN.
   *
   * The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values.
   *
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyRequest {
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyResponse {
  /**
   * The object containing the definition of the FirewallPolicyResponse that you asked to delete.
   *
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentRequest {
  /**
   * Required. The unique identifier of the transit gateway attachment to delete.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * The ID of the transit gateway attachment that was deleted.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The current status of the transit gateway attachment deletion process.
   *
   * Valid values are:
   *
   * - `CREATING` - The attachment is being created
   * - `DELETING` - The attachment is being deleted
   * - `DELETED` - The attachment has been deleted
   * - `FAILED` - The attachment creation has failed and cannot be recovered
   * - `ERROR` - The attachment is in an error state that might be recoverable
   * - `READY` - The attachment is active and processing traffic
   * - `PENDING_ACCEPTANCE` - The attachment is waiting to be accepted
   * - `REJECTING` - The attachment is in the process of being rejected
   * - `REJECTED` - The attachment has been rejected
   *
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRequest {
  /**
   * The NAT Gateway the proxy is attached to.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyResponse {
  /**
   * The NAT Gateway the Proxy was attached to.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyConfigurationResponse {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRuleGroupRequest {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRuleGroupResponse {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRulesRequest {
  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The proxy rule(s) to remove from the existing proxy rule group.
   *
   * @public
   */
  Rules: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRulesResponse {
  /**
   * The properties that define the proxy rule group with the newly created proxy rule(s).
   *
   * @public
   */
  ProxyRuleGroup?: ProxyRuleGroup | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteRuleGroupRequest {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * > **Note:** This setting is required for requests that do not include the `RuleGroupARN`.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * @public
 */
export interface DeleteRuleGroupResponse {
  /**
   * The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
   *
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface DeleteTLSInspectionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTLSInspectionConfigurationResponse {
  /**
   * The high-level properties of a TLS inspection configuration. This, along with the TLSInspectionConfiguration, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointAssociationResponse {
  /**
   * The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint.
   *
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * Detailed information about the current status of a VpcEndpointAssociation. You can retrieve this by calling DescribeVpcEndpointAssociation and providing the VPC endpoint association ARN.
   *
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeContainerAssociationRequest {
  /**
   * The descriptive name of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerAssociationResponse {
  /**
   * The descriptive name of the container association.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * A description of the container association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The container type. Valid values:
   *
   * - `ECS` - Amazon Elastic Container Service
   * - `EKS` - Amazon Elastic Kubernetes Service
   *
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * The monitoring configurations for the container association.
   *
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * The current status of the container association.
   *
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * The number of CIDR blocks resolved from the monitored containers.
   *
   * @public
   */
  ResolvedCidrCount?: number | undefined;

  /**
   * The most recent time that Network Firewall updated the container association.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request.
   *
   * To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the container association again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallResponse {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints.
   *
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * Detailed information about the current status of a Firewall. You can retrieve this for a firewall by calling DescribeFirewall and providing the firewall name and ARN.
   *
   * The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values.
   *
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallMetadataResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * A description of the firewall.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The readiness of the configured firewall to handle network traffic across all of the Availability Zones where you have it configured. This setting is `READY` only when the `ConfigurationSyncStateSummary` value is `IN_SYNC` and the `Attachment` `Status` values for all of the configured subnets are `READY`.
   *
   * @public
   */
  Status?: FirewallStatusValue | undefined;

  /**
   * The Availability Zones that the firewall currently supports. This includes all Availability Zones for which the firewall has a subnet defined.
   *
   * @public
   */
  SupportedAvailabilityZones?: Record<string, AvailabilityZoneMetadata> | undefined;

  /**
   * The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyRequest {
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.
   *
   * To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a firewall policy. This, along with the FirewallPolicy, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
   *
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;

  /**
   * The policy for the specified firewall policy.
   *
   * @public
   */
  FirewallPolicy?: FirewallPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeFlowOperationRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either `AvailabilityZone` or `AvailabilityZoneId`, not both. If you specify both, the request fails.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId: string | undefined;
}

/**
 * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
 *
 * @public
 */
export interface FlowFilter {
  /**
   * A single IP address specification. This is used in the MatchAttributes source and destination specifications.
   *
   * @public
   */
  SourceAddress?: Address | undefined;

  /**
   * A single IP address specification. This is used in the MatchAttributes source and destination specifications.
   *
   * @public
   */
  DestinationAddress?: Address | undefined;

  /**
   * The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  SourcePort?: string | undefined;

  /**
   * The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * The protocols to inspect for, specified using the assigned internet protocol number (IANA) for each protocol. If not specified, this matches with any protocol.
   *
   * @public
   */
  Protocols?: string[] | undefined;
}

/**
 * Contains information about a flow operation, such as related statuses, unique identifiers, and all filters defined in the operation.
 *
 * Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.
 *
 * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
 *
 * @public
 */
export interface FlowOperation {
  /**
   * The reqested `FlowOperation` ignores flows with an age (in seconds) lower than `MinimumFlowAgeInSeconds`. You provide this for start commands.
   *
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  FlowFilters?: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowOperationResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * Defines the type of `FlowOperation`.
   *
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.
   *
   * If the status is `COMPLETED_WITH_ERRORS`, results may be returned with any number of `Flows` missing from the response. If the status is `FAILED`, `Flows` returned will be empty.
   *
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;

  /**
   * If the asynchronous operation fails, Network Firewall populates this with the reason for the error or failure. Options include `Flow operation error` and `Flow timeout`.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * A timestamp indicating when the Suricata engine identified flows impacted by an operation.
   *
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * Returns key information about a flow operation, such as related statuses, unique identifiers, and all filters defined in the operation.
   *
   * @public
   */
  FlowOperation?: FlowOperation | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;
}

/**
 * Defines where Network Firewall sends logs for the firewall for one log type. This is used in LoggingConfiguration. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Firehose delivery stream.
 *
 * Network Firewall generates logs for stateful rule groups. You can save alert, flow, and TLS log types.
 *
 * @public
 */
export interface LogDestinationConfig {
  /**
   * The type of log to record. You can record the following types of logs from your Network Firewall stateful engine.
   *
   * - `ALERT` - Logs for traffic that matches your stateful rules and that have an action that sends an alert. A stateful rule sends alerts for the rule actions DROP, ALERT, and REJECT. For more information, see StatefulRule.
   * - `FLOW` - Standard network traffic flow logs. The stateful rules engine records flow logs for all network traffic that it receives. Each flow log record captures the network flow for a specific standard stateless rule group.
   * - `TLS` - Logs for events that are related to TLS inspection. For more information, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-configurations.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  LogType: LogType | undefined;

  /**
   * The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket, a CloudWatch log group, or a Firehose delivery stream.
   *
   * @public
   */
  LogDestinationType: LogDestinationType | undefined;

  /**
   * The named location for the logs, provided in a key:value mapping that is specific to the chosen destination type.
   *
   * - For an Amazon S3 bucket, provide the name of the bucket, with key `bucketName`, and optionally provide a prefix, with key `prefix`.
   *
   *   The following example specifies an Amazon S3 bucket named `DOC-EXAMPLE-BUCKET` and the prefix `alerts`:
   *
   *   `"LogDestination": \{ "bucketName": "DOC-EXAMPLE-BUCKET", "prefix": "alerts" \}`
   * - For a CloudWatch log group, provide the name of the CloudWatch log group, with key `logGroup`. The following example specifies a log group named `alert-log-group`:
   *
   *   `"LogDestination": \{ "logGroup": "alert-log-group" \}`
   * - For a Firehose delivery stream, provide the name of the delivery stream, with key `deliveryStream`. The following example specifies a delivery stream named `alert-delivery-stream`:
   *
   *   `"LogDestination": \{ "deliveryStream": "alert-delivery-stream" \}`
   *
   * @public
   */
  LogDestination: Record<string, string> | undefined;
}

/**
 * Defines how Network Firewall performs logging for a Firewall.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * Defines the logging destinations for the logs for a firewall. Network Firewall generates logs for stateful rule groups.
   *
   * @public
   */
  LogDestinationConfigs: LogDestinationConfig[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * Defines how Network Firewall performs logging for a Firewall.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * A boolean that reflects whether or not the firewall monitoring dashboard is enabled on a firewall.
   *
   * Returns `TRUE` when the firewall monitoring dashboard is enabled on the firewall. Returns `FALSE` when the firewall monitoring dashboard is not enabled on the firewall.
   *
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRequest {
  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * Proxy attached to a NAT gateway.
 *
 * @public
 */
export interface DescribeProxyResource {
  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * @public
   */
  ProxyArn?: string | undefined;

  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * The NAT Gateway for the proxy.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * Current attachment/detachment status of the Proxy.
   *
   * @public
   */
  ProxyState?: ProxyState | undefined;

  /**
   * Current modification status of the Proxy.
   *
   * @public
   */
  ProxyModifyState?: ProxyModifyState | undefined;

  /**
   * Listener properties for HTTP and HTTPS traffic.
   *
   * @public
   */
  ListenerProperties?: ListenerProperty[] | undefined;

  /**
   * TLS decryption on traffic to filter on attributes in the HTTP header.
   *
   * @public
   */
  TlsInterceptProperties?: TlsInterceptProperties | undefined;

  /**
   * The service endpoint created in the VPC.
   *
   * @public
   */
  VpcEndpointServiceName?: string | undefined;

  /**
   * The private DNS name of the Proxy.
   *
   * @public
   */
  PrivateDNSName?: string | undefined;

  /**
   * Time the Proxy was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Time the Proxy was deleted.
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * Time the Proxy was updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * Failure code for cases when the Proxy fails to attach or update.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * Failure message for cases when the Proxy fails to attach or update.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeProxyResponse {
  /**
   * Proxy attached to a NAT gateway.
   *
   * @public
   */
  Proxy?: DescribeProxyResource | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request.
   *
   * To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyConfigurationResponse {
  /**
   * The configuration for the specified proxy configuration.
   *
   * @public
   */
  ProxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRuleRequest {
  /**
   * The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it.
   *
   * @public
   */
  ProxyRuleName: string | undefined;

  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRuleResponse {
  /**
   * The configuration for the specified proxy rule.
   *
   * @public
   */
  ProxyRule?: ProxyRule | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request.
   *
   * To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRuleGroupRequest {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRuleGroupResponse {
  /**
   * The configuration for the specified proxy rule group.
   *
   * @public
   */
  ProxyRuleGroup?: ProxyRuleGroup | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request.
   *
   * To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * The IAM policy for the resource.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupRequest {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * > **Note:** This setting is required for requests that do not include the `RuleGroupARN`.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to `TRUE`, Network Firewall runs the analysis.
   *
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.
   *
   * To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The object that defines the rules in a rule group. This, along with RuleGroupResponse, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
   *
   * Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow.
   *
   * To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
   *
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
   *
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupMetadataRequest {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * > **Note:** This setting is required for requests that do not include the `RuleGroupARN`.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupMetadataResponse {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn: string | undefined;

  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * Returns the metadata objects for the specified rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * > **Note:** This setting is required for requests that do not include the `RuleGroupARN`.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
   *
   * You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with `DryRun` set to `TRUE`.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
   *
   * @public
   */
  StatefulRuleOptions?: StatefulRuleOptions | undefined;

  /**
   * A timestamp indicating when the rule group was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the Amazon Web Services Marketplace vendor that provides this rule group.
   *
   * @public
   */
  VendorName?: string | undefined;

  /**
   * The unique identifier for the product listing associated with this rule group.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The display name of the product listing for this rule group.
   *
   * @public
   */
  ListingName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupSummaryRequest {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * Required. The Amazon Resource Name (ARN) of the rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The type of rule group you want a summary for. This is a required field.
   *
   * Valid value: `STATEFUL`
   *
   * Note that `STATELESS` exists but is not currently supported. If you provide `STATELESS`, an exception is returned.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * A complex type containing details about a Suricata rule. Contains:
 *
 * - `SID`
 * - `Msg`
 * - `Metadata`
 *
 * Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The unique identifier (Signature ID) of the Suricata rule.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The contents taken from the rule's msg field.
   *
   * @public
   */
  Msg?: string | undefined;

  /**
   * The contents of the rule's metadata.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * A complex type containing summaries of security protections provided by a rule group.
 *
 * Network Firewall extracts this information from selected fields in the rule group's Suricata rules, based on your SummaryConfiguration settings.
 *
 * @public
 */
export interface Summary {
  /**
   * An array of RuleSummary objects containing individual rule details that had been configured by the rulegroup's SummaryConfiguration.
   *
   * @public
   */
  RuleSummaries?: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupSummaryResponse {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * A description of the rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A complex type that contains rule information based on the rule group's configured summary settings. The content varies depending on the fields that you specified to extract in your SummaryConfiguration. When you haven't configured any summary settings, this returns an empty array. The response might include:
   *
   * - Rule identifiers
   * - Rule descriptions
   * - Any metadata fields that you specified in your SummaryConfiguration
   *
   * @public
   */
  Summary?: Summary | undefined;
}

/**
 * @public
 */
export interface DescribeTLSInspectionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTLSInspectionConfigurationResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request.
   *
   * To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
   *
   * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  TLSInspectionConfiguration?: TLSInspectionConfiguration | undefined;

  /**
   * The high-level properties of a TLS inspection configuration. This, along with the TLSInspectionConfiguration, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationResponse {
  /**
   * The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint.
   *
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * Detailed information about the current status of a VpcEndpointAssociation. You can retrieve this by calling DescribeVpcEndpointAssociation and providing the VPC endpoint association ARN.
   *
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DetachRuleGroupsFromProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * The proxy rule group names to detach from the proxy configuration
   *
   * @public
   */
  RuleGroupNames?: string[] | undefined;

  /**
   * The proxy rule group arns to detach from the proxy configuration
   *
   * @public
   */
  RuleGroupArns?: string[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface DetachRuleGroupsFromProxyConfigurationResponse {
  /**
   * The updated proxy configuration resource that reflects the updates from the request.
   *
   * @public
   */
  ProxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAvailabilityZonesRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * Required. The Availability Zones to remove from the firewall's configuration.
   *
   * @public
   */
  AvailabilityZoneMappings: AvailabilityZoneMapping[] | undefined;
}

/**
 * @public
 */
export interface DisassociateAvailabilityZonesResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The remaining Availability Zones where the firewall has endpoints after the disassociation.
   *
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetsRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The unique identifiers for the subnets that you want to disassociate.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetsResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The IDs of the subnets that are associated with the firewall.
   *
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
 *
 * @public
 */
export interface FirewallMetadata {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;
}

/**
 * High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
 *
 * @public
 */
export interface FirewallPolicyMetadata {
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Any number of arrays, where each array is a single flow identified in the scope of the operation. If multiple flows were in the scope of the operation, multiple `Flows` arrays are returned.
 *
 * @public
 */
export interface Flow {
  /**
   * A single IP address specification. This is used in the MatchAttributes source and destination specifications.
   *
   * @public
   */
  SourceAddress?: Address | undefined;

  /**
   * A single IP address specification. This is used in the MatchAttributes source and destination specifications.
   *
   * @public
   */
  DestinationAddress?: Address | undefined;

  /**
   * The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  SourcePort?: string | undefined;

  /**
   * The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * The protocols to inspect for, specified using the assigned internet protocol number (IANA) for each protocol. If not specified, this matches with any protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Returned as info about age of the flows identified by the flow operation.
   *
   * @public
   */
  Age?: number | undefined;

  /**
   * Returns the total number of data packets received or transmitted in a flow.
   *
   * @public
   */
  PacketCount?: number | undefined;

  /**
   * Returns the number of bytes received or transmitted in a specific flow.
   *
   * @public
   */
  ByteCount?: number | undefined;
}

/**
 * An array of objects with metadata about the requested `FlowOperation`.
 *
 * @public
 */
export interface FlowOperationMetadata {
  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * Defines the type of `FlowOperation`.
   *
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * A timestamp indicating when the Suricata engine identified flows impacted by an operation.
   *
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.
   *
   * If the status is `COMPLETED_WITH_ERRORS`, results may be returned with any number of `Flows` missing from the response. If the status is `FAILED`, `Flows` returned will be empty.
   *
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface GetAnalysisReportResultsRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The unique ID of the query that ran when you requested an analysis report.
   *
   * @public
   */
  AnalysisReportId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnalysisReportResultsResponse {
  /**
   * The status of the analysis report you specify. Statuses include `RUNNING`, `COMPLETED`, or `FAILED`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The date and time within the last 30 days from which to start retrieving analysis data, in UTC format (for example, `YYYY-MM-DDTHH:MM:SSZ`.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time, up to the current date, from which to stop retrieving analysis data, in UTC format (for example, `YYYY-MM-DDTHH:MM:SSZ`).
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The date and time the analysis report was ran.
   *
   * @public
   */
  ReportTime?: Date | undefined;

  /**
   * The type of traffic that will be used to generate a report.
   *
   * @public
   */
  AnalysisType?: EnabledAnalysisType | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Retrieves the results of a traffic analysis report.
   *
   * @public
   */
  AnalysisReportResults?: AnalysisTypeReportResult[] | undefined;
}

/**
 * @public
 */
export interface ListAnalysisReportsRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalysisReportsResponse {
  /**
   * The `id` and `ReportTime` associated with a requested analysis report. Does not provide the status of the analysis report.
   *
   * @public
   */
  AnalysisReports?: AnalysisReport[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerAssociationsRequest {
  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerAssociationsResponse {
  /**
   * The container association metadata objects for the account and Region.
   *
   * @public
   */
  ContainerAssociations?: ContainerAssociationSummary[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The metadata for the firewall policies. Depending on your setting for max results and the number of firewall policies that you have, this might not be the full list.
   *
   * @public
   */
  FirewallPolicies?: FirewallPolicyMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls for. Leave this blank to retrieve all firewalls that you have defined.
   *
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFirewallsResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The firewall metadata objects for the VPCs that you specified. Depending on your setting for max results and the number of firewalls you have, a single call might not be the full list.
   *
   * @public
   */
  Firewalls?: FirewallMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationResultsRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId: string | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either `AvailabilityZone` or `AvailabilityZoneId`, not both. If you specify both, the request fails.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationResultsResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.
   *
   * If the status is `COMPLETED_WITH_ERRORS`, results may be returned with any number of `Flows` missing from the response. If the status is `FAILED`, `Flows` returned will be empty.
   *
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;

  /**
   * If the asynchronous operation fails, Network Firewall populates this with the reason for the error or failure. Options include `Flow operation error` and `Flow timeout`.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * A timestamp indicating when the Suricata engine identified flows impacted by an operation.
   *
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * Any number of arrays, where each array is a single flow identified in the scope of the operation. If multiple flows were in the scope of the operation, multiple `Flows` arrays are returned.
   *
   * @public
   */
  Flows?: Flow[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either `AvailabilityZone` or `AvailabilityZoneId`, not both. If you specify both, the request fails.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * An optional string that defines whether any or all operation types are returned.
   *
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationsResponse {
  /**
   * Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.
   *
   * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
   *
   * @public
   */
  FlowOperations?: FlowOperationMetadata[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxiesRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * High-level information about a proxy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a proxy. You can retrieve all objects for a proxy by calling DescribeProxy.
 *
 * @public
 */
export interface ProxyMetadata {
  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListProxiesResponse {
  /**
   * The metadata for the proxies. Depending on your setting for max results and the number of proxies that you have, this might not be the full list.
   *
   * @public
   */
  Proxies?: ProxyMetadata[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxyConfigurationsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * High-level information about a proxy configuration, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a proxy configuration. You can retrieve all objects for a proxy configuration by calling DescribeProxyConfiguration.
 *
 * @public
 */
export interface ProxyConfigurationMetadata {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListProxyConfigurationsResponse {
  /**
   * The metadata for the proxy configurations. Depending on your setting for max results and the number of proxy configurations that you have, this might not be the full list.
   *
   * @public
   */
  ProxyConfigurations?: ProxyConfigurationMetadata[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxyRuleGroupsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * High-level information about a proxy rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a proxy rule group. You can retrieve all objects for a proxy rule group by calling DescribeProxyRuleGroup.
 *
 * @public
 */
export interface ProxyRuleGroupMetadata {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListProxyRuleGroupsResponse {
  /**
   * The metadata for the proxy rule groups. Depending on your setting for max results and the number of proxy rule groups that you have, this might not be the full list.
   *
   * @public
   */
  ProxyRuleGroups?: ProxyRuleGroupMetadata[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The scope of the request. The default setting of `ACCOUNT` or a setting of `NULL` returns all of the rule groups in your account. A setting of `MANAGED` returns all available managed rule groups.
   *
   * @public
   */
  Scope?: ResourceManagedStatus | undefined;

  /**
   * Indicates the general category of the Amazon Web Services managed rule group.
   *
   * @public
   */
  ManagedType?: ResourceManagedType | undefined;

  /**
   * Filters the results to show only rule groups with the specified subscription status. Use this to find subscribed or unsubscribed rule groups.
   *
   * @public
   */
  SubscriptionStatus?: SubscriptionStatus | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * High-level information about a rule group, returned by ListRuleGroups. You can use the information provided in the metadata to retrieve and manage a rule group.
 *
 * @public
 */
export interface RuleGroupMetadata {
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the Amazon Web Services Marketplace seller that provides this rule group.
   *
   * @public
   */
  VendorName?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The rule group metadata objects that you've defined. Depending on your setting for max results and the number of rule groups, this might not be the full list.
   *
   * @public
   */
  RuleGroups?: RuleGroupMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The tags that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTLSInspectionConfigurationsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * High-level information about a TLS inspection configuration, returned by `ListTLSInspectionConfigurations`. You can use the information provided in the metadata to retrieve and manage a TLS configuration.
 *
 * @public
 */
export interface TLSInspectionConfigurationMetadata {
  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListTLSInspectionConfigurationsResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The TLS inspection configuration metadata objects that you've defined. Depending on your setting for max results and the number of TLS inspection configurations, this might not be the full list.
   *
   * @public
   */
  TLSInspectionConfigurations?: TLSInspectionConfigurationMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAssociationsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * If you don't specify this, Network Firewall retrieves all VPC endpoint associations that you have defined.
   *
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * High-level information about a VPC endpoint association, returned by `ListVpcEndpointAssociations`. You can use the information provided in the metadata to retrieve and manage a VPC endpoint association.
 *
 * @public
 */
export interface VpcEndpointAssociationMetadata {
  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAssociationsResponse {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The VPC endpoint assocation metadata objects for the firewall that you specified. If you didn't specify a firewall, this is all VPC endpoint associations that you have defined.
   *
   * Depending on your setting for max results and the number of firewalls you have, a single call might not be the full list.
   *
   * @public
   */
  VpcEndpointAssociations?: VpcEndpointAssociationMetadata[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the account that you want to share your Network Firewall resources with.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The IAM policy statement that lists the accounts that you want to share your Network Firewall resources with and the operations that you want the accounts to be able to perform.
   *
   * For a rule group resource, you can specify the following operations in the Actions section of the statement:
   *
   * - network-firewall:CreateFirewallPolicy
   * - network-firewall:UpdateFirewallPolicy
   * - network-firewall:ListRuleGroups
   *
   * For a firewall policy resource, you can specify the following operations in the Actions section of the statement:
   *
   * - network-firewall:AssociateFirewallPolicy
   * - network-firewall:ListFirewallPolicies
   *
   * For a firewall resource, you can specify the following operations in the Actions section of the statement:
   *
   * - network-firewall:CreateVpcEndpointAssociation
   * - network-firewall:DescribeFirewallMetadata
   * - network-firewall:ListFirewalls
   *
   * In the Resource section of the statement, you specify the ARNs for the Network Firewall resources that you want to share with the account that you specified in `Arn`.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentRequest {
  /**
   * Required. The unique identifier of the transit gateway attachment to reject. This ID is returned in the response when creating a transit gateway-attached firewall.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * The unique identifier of the transit gateway attachment that was rejected.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The current status of the transit gateway attachment. Valid values are:
   *
   * - `CREATING` - The attachment is being created
   * - `DELETING` - The attachment is being deleted
   * - `DELETED` - The attachment has been deleted
   * - `FAILED` - The attachment creation has failed and cannot be recovered
   * - `ERROR` - The attachment is in an error state that might be recoverable
   * - `READY` - The attachment is active and processing traffic
   * - `PENDING_ACCEPTANCE` - The attachment is waiting to be accepted
   * - `REJECTING` - The attachment is in the process of being rejected
   * - `REJECTED` - The attachment has been rejected
   *
   * For information about troubleshooting endpoint failures, see [Troubleshooting firewall endpoint failures](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * @public
 */
export interface StartAnalysisReportRequest {
  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The type of traffic that will be used to generate a report.
   *
   * @public
   */
  AnalysisType: EnabledAnalysisType | undefined;
}

/**
 * @public
 */
export interface StartAnalysisReportResponse {
  /**
   * The unique ID of the query that ran when you requested an analysis report.
   *
   * @public
   */
  AnalysisReportId: string | undefined;
}

/**
 * @public
 */
export interface StartFlowCaptureRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either `AvailabilityZone` or `AvailabilityZoneId`, not both. If you specify both, the request fails.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The reqested `FlowOperation` ignores flows with an age (in seconds) lower than `MinimumFlowAgeInSeconds`. You provide this for start commands.
   *
   * > **Note:** We recommend setting this value to at least 1 minute (60 seconds) to reduce chance of capturing flows that are not yet established.
   *
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  FlowFilters: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface StartFlowCaptureResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.
   *
   * If the status is `COMPLETED_WITH_ERRORS`, results may be returned with any number of `Flows` missing from the response. If the status is `FAILED`, `Flows` returned will be empty.
   *
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface StartFlowFlushRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * The name of the Availability Zone where the firewall is located. For example, `us-east-2a`.
   *
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the firewall is located. For example, `use2-az1`. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either `AvailabilityZone` or `AvailabilityZoneId`, not both. If you specify both, the request fails.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a VPC endpoint association.
   *
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * A unique identifier for the primary endpoint associated with a firewall.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The reqested `FlowOperation` ignores flows with an age (in seconds) lower than `MinimumFlowAgeInSeconds`. You provide this for start commands.
   *
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.
   *
   * @public
   */
  FlowFilters: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface StartFlowFlushResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.
   *
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.
   *
   * If the status is `COMPLETED_WITH_ERRORS`, results may be returned with any number of `Flows` missing from the response. If the status is `FAILED`, `Flows` returned will be empty.
   *
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
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
export interface UpdateAvailabilityZoneChangeProtectionRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  AvailabilityZoneChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAvailabilityZoneChangeProtectionResponse {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateContainerAssociationRequest {
  /**
   * The descriptive name of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * A description of the container association. When omitted, the existing description remains unchanged. To clear the description, pass an empty string.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The container type. This value must match the existing type and can't be changed. Valid values:
   *
   * - `ECS` - Amazon Elastic Container Service
   * - `EKS` - Amazon Elastic Kubernetes Service
   *
   * @public
   */
  Type: ContainerMonitoringType | undefined;

  /**
   * The updated monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters.
   *
   * @public
   */
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[] | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request.
   *
   * To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the container association again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateContainerAssociationResponse {
  /**
   * The descriptive name of the container association.
   *
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container association.
   *
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * A description of the container association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The container type. Valid values:
   *
   * - `ECS` - Amazon Elastic Container Service
   * - `EKS` - Amazon Elastic Kubernetes Service
   *
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * The monitoring configurations for the container association.
   *
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * The current status of the container association.
   *
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * The key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request.
   *
   * To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the container association again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallAnalysisSettingsRequest {
  /**
   * An optional setting indicating the specific traffic analysis types to enable on the firewall.
   *
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallAnalysisSettingsResponse {
  /**
   * An optional setting indicating the specific traffic analysis types to enable on the firewall.
   *
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDeleteProtectionRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A flag indicating whether it is possible to delete the firewall. A setting of `TRUE` indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to `TRUE`.
   *
   * @public
   */
  DeleteProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDeleteProtectionResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A flag indicating whether it is possible to delete the firewall. A setting of `TRUE` indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to `TRUE`.
   *
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDescriptionRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The new description for the firewall. If you omit this setting, Network Firewall removes the description for the firewall.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDescriptionResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A description of the firewall.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallEncryptionConfigurationRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see [Encryption at rest with Amazon Web Services Key Managment Service](https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallEncryptionConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see [Encryption at rest with Amazon Web Services Key Managment Service](https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyRequest {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.
   *
   * To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall policy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * The updated firewall policy to use for the firewall. You can't add or remove a TLSInspectionConfiguration after you create a firewall policy. However, you can replace an existing TLS inspection configuration with another `TLSInspectionConfiguration`.
   *
   * @public
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * A description of the firewall policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.
   *
   * If set to `TRUE`, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to `FALSE`, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.
   *
   * If set to `FALSE`, Network Firewall makes the requested changes to your resources.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A complex type that contains settings for encryption of your firewall policy resources.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.
   *
   * To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a firewall policy. This, along with the FirewallPolicy, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.
   *
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyChangeProtectionRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  FirewallPolicyChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyChangeProtectionResponse {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * Defines how Network Firewall performs logging for a firewall. If you omit this setting, Network Firewall disables logging for the firewall.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * A boolean that lets you enable or disable the detailed firewall monitoring dashboard on the firewall.
   *
   * The monitoring dashboard provides comprehensive visibility into your firewall's flow logs and alert logs. After you enable detailed monitoring, you can access these dashboards directly from the **Monitoring** page of the Network Firewall console.
   *
   * Specify `TRUE` to enable the the detailed monitoring dashboard on the firewall. Specify `FALSE` to disable the the detailed monitoring dashboard on the firewall.
   *
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * Defines how Network Firewall performs logging for a Firewall.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * A boolean that reflects whether or not the firewall monitoring dashboard is enabled on a firewall.
   *
   * Returns `TRUE` when the firewall monitoring dashboard is enabled on the firewall. Returns `FALSE` when the firewall monitoring dashboard is not enabled on the firewall.
   *
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRequest {
  /**
   * The NAT Gateway the proxy is attached to.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The descriptive name of the proxy. You can't change the name of a proxy after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyArn?: string | undefined;

  /**
   * Listener properties for HTTP and HTTPS traffic to add.
   *
   * @public
   */
  ListenerPropertiesToAdd?: ListenerPropertyRequest[] | undefined;

  /**
   * Listener properties for HTTP and HTTPS traffic to remove.
   *
   * @public
   */
  ListenerPropertiesToRemove?: ListenerPropertyRequest[] | undefined;

  /**
   * TLS decryption on traffic to filter on attributes in the HTTP header.
   *
   * @public
   */
  TlsInterceptProperties?: TlsInterceptPropertiesRequest | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request.
   *
   * To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyResponse {
  /**
   * The updated proxy resource that reflects the updates from the request.
   *
   * @public
   */
  Proxy?: Proxy | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request.
   *
   * To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyConfigurationRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
   *
   * @public
   */
  DefaultRulePhaseActions: ProxyConfigDefaultRulePhaseActionsRequest | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyConfigurationResponse {
  /**
   * The updated proxy configuration resource that reflects the updates from the request.
   *
   * @public
   */
  ProxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRuleRequest {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it.
   *
   * @public
   */
  ProxyRuleName: string | undefined;

  /**
   * A description of the proxy rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Depending on the match action, the proxy either stops the evaluation (if the action is terminal - allow or deny), or continues it (if the action is alert) until it matches a rule with a terminal action.
   *
   * @public
   */
  Action?: ProxyRulePhaseAction | undefined;

  /**
   * Proxy rule conditions to add. Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against.
   *
   * @public
   */
  AddConditions?: ProxyRuleCondition[] | undefined;

  /**
   * Proxy rule conditions to remove. Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against.
   *
   * @public
   */
  RemoveConditions?: ProxyRuleCondition[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request.
   *
   * To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRuleResponse {
  /**
   * The updated proxy rule resource that reflects the updates from the request.
   *
   * @public
   */
  ProxyRule?: ProxyRule | undefined;

  /**
   * Proxy rule conditions removed from the rule.
   *
   * @public
   */
  RemovedConditions?: ProxyRuleCondition[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request.
   *
   * To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * Proxy rule group name and new desired position.
 *
 * @public
 */
export interface ProxyRuleGroupPriority {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * Where to move a proxy rule group in a proxy configuration.
   *
   * @public
   */
  NewPosition?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRuleGroupPrioritiesRequest {
  /**
   * The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy configuration.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * proxy rule group resources to update to new positions.
   *
   * @public
   */
  RuleGroups: ProxyRuleGroupPriority[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * Proxy rule group along with its priority.
 *
 * @public
 */
export interface ProxyRuleGroupPriorityResult {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * Priority of the proxy rule group in the proxy configuration.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRuleGroupPrioritiesResponse {
  /**
   * The updated proxy rule group hierarchy that reflects the updates from the request.
   *
   * @public
   */
  ProxyRuleGroups?: ProxyRuleGroupPriorityResult[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.
   *
   * To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * Proxy rule name and new desired position.
 *
 * @public
 */
export interface ProxyRulePriority {
  /**
   * The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it.
   *
   * @public
   */
  ProxyRuleName?: string | undefined;

  /**
   * Where to move a proxy rule in a proxy rule group.
   *
   * @public
   */
  NewPosition?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRulePrioritiesRequest {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
   *
   * @public
   */
  RuleGroupRequestPhase: RuleGroupRequestPhase | undefined;

  /**
   * proxy rule resources to update to new positions.
   *
   * @public
   */
  Rules: ProxyRulePriority[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request.
   *
   * To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyRulePrioritiesResponse {
  /**
   * The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
   *
   * @public
   */
  ProxyRuleGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a proxy rule group.
   *
   * @public
   */
  ProxyRuleGroupArn?: string | undefined;

  /**
   * Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
   *
   * @public
   */
  RuleGroupRequestPhase?: RuleGroupRequestPhase | undefined;

  /**
   * The updated proxy rule hierarchy that reflects the updates from the request.
   *
   * @public
   */
  Rules?: ProxyRulePriority[] | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request.
   *
   * To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySettingsRequest {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The proxy listener configuration to set on the firewall. This specifies the ports and protocols on which the firewall's proxy listens for traffic.
   *
   * @public
   */
  ProxySettings?: ProxySettings | undefined;
}

/**
 * @public
 */
export interface UpdateProxySettingsResponse {
  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The updated proxy listener configuration on the firewall.
   *
   * @public
   */
  ProxySettings?: ProxySettings | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupRequest {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.
   *
   * To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule group.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * An object that defines the rule group rules.
   *
   * > **Note:** You must provide either this rule group setting or a `Rules` setting, but not both.
   *
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.
   *
   * > **Note:** You must provide either this rules setting or a populated `RuleGroup` setting, but not both.
   *
   * You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.
   *
   * @public
   */
  Rules?: string | undefined;

  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * > **Note:** This setting is required for requests that do not include the `RuleGroupARN`.
   *
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * A description of the rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.
   *
   * If set to `TRUE`, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to `FALSE`, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.
   *
   * If set to `FALSE`, Network Firewall makes the requested changes to your resources.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A complex type that contains settings for encryption of your rule group resources.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.
   *
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to `TRUE`, Network Firewall runs the analysis and then updates the rule group for you. To run the stateless rule group analyzer without updating the rule group, set `DryRun` to `TRUE`.
   *
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;

  /**
   * Updates the selected summary configuration for a rule group.
   *
   * Changes affect subsequent responses from DescribeRuleGroupSummary.
   *
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.
   *
   * To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
   *
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetChangeProtectionRequest {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * You must specify the ARN or the name, and you can specify both.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  SubnetChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetChangeProtectionResponse {
  /**
   * An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.
   *
   * To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.
   *
   * To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE`.
   *
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTLSInspectionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the TLS inspection configuration.
   *
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
   *
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;

  /**
   * The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
   *
   * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *Network Firewall Developer Guide*.
   *
   * @public
   */
  TLSInspectionConfiguration: TLSInspectionConfiguration | undefined;

  /**
   * A description of the TLS inspection configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request.
   *
   * To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateTLSInspectionConfigurationResponse {
  /**
   * A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request.
   *
   * To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * The high-level properties of a TLS inspection configuration. This, along with the TLSInspectionConfiguration, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.
   *
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}
