// smithy-typescript generated code
import type {
  ActionScope,
  AttachmentStatus,
  ConfigurationSyncState,
  ContainerAssociationStatus,
  ContainerMonitoringType,
  DecryptionAction,
  DNSExpiryExceptionPolicy,
  EnabledAnalysisType,
  EncryptionType,
  FirewallPolicyErrorCode,
  FirewallRuleAction,
  FirewallRuleProtocol,
  FirewallStatusValue,
  FlowOperationStatus,
  FlowOperationType,
  GeneratedRulesType,
  HookKey,
  IdentifiedType,
  IPAddressType,
  ListenerPropertyType,
  LogDestinationType,
  LogType,
  NatGatewayAttachmentStatus,
  OverrideAction,
  PerObjectSyncStatus,
  PolicyDefaultAction,
  PolicyMode,
  ProxyModifyState,
  ProxyState,
  ResourceManagedStatus,
  ResourceManagedType,
  ResourceStatus,
  RevocationCheckAction,
  Route53ResolvedIPValidationAction,
  RuleGroupType,
  RuleOrder,
  RuleOutputFormat,
  StatefulAction,
  StatefulRuleDirection,
  StatefulRuleProtocol,
  StreamExceptionPolicy,
  StreamExceptionPolicyV2,
  SubscriptionStatus,
  SummaryRuleOption,
  TargetType,
  TCPFlag,
  TLSInspectionScopeDeploymentMode,
  TlsInterceptMode,
  TransitGatewayAttachmentStatus,
  TransparentFilteringNatScope,
} from "./enums";

/**
 * @public
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentRequest {
  /**
   * <p>Required. The unique identifier of the transit gateway attachment to accept. This ID is returned in the response when creating a transit gateway-attached firewall.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * <p>The unique identifier of the transit gateway attachment that was accepted.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The current status of the transit gateway attachment. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The attachment is being created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The attachment is being deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The attachment has been deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The attachment creation has failed and cannot be recovered</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The attachment is in an error state that might be recoverable</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The attachment is active and processing traffic</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code> - The attachment is waiting to be accepted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTING</code> - The attachment is in the process of being rejected</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The attachment has been rejected</p>
   *             </li>
   *          </ul>
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the
 *             <code>PublishMetrics</code>
 *             <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's
 *          part of the identity of a metric. </p>
 *          <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the
 *          dimension value. </p>
 *          <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User
 *             Guide</a>.</p>
 * @public
 */
export interface Dimension {
  /**
   * <p>The value to use in the custom metric dimension.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the
 *          matching packet. This setting defines a CloudWatch dimension value to be published.</p>
 * @public
 */
export interface PublishMetricAction {
  /**
   * <p></p>
   * @public
   */
  Dimensions: Dimension[] | undefined;
}

/**
 * <p>A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.</p>
 * @public
 */
export interface ActionDefinition {
  /**
   * <p>Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the
   *          matching packet. This setting defines a CloudWatch dimension value to be published.</p>
   *          <p>You can pair this custom action with any of the standard stateless rule actions. For
   *          example, you could pair this in a rule action with the standard action that forwards the
   *          packet for stateful inspection. Then, when a packet matches the rule, Network Firewall
   *          publishes metrics for the packet and forwards it. </p>
   * @public
   */
  PublishMetricAction?: PublishMetricAction | undefined;
}

/**
 * <p>A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.</p>
 * @public
 */
export interface Address {
  /**
   * <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   * @public
   */
  AddressDefinition: string | undefined;
}

/**
 * <p>A report that captures key activity from the last 30 days of network traffic monitored by your firewall.</p>
 *          <p>You can generate up to one report per traffic type, per 30 day period. For example, when you successfully create an HTTP traffic report,
 *          you cannot create another HTTP traffic report until 30 days pass. Alternatively, if you generate a report that combines metrics on both HTTP
 *          and HTTPS traffic, you cannot create another report for either traffic type until 30 days pass.</p>
 * @public
 */
export interface AnalysisReport {
  /**
   * <p>The unique ID of the query that ran when you requested an analysis report. </p>
   * @public
   */
  AnalysisReportId?: string | undefined;

  /**
   * <p>The type of traffic that will be used to generate a report. </p>
   * @public
   */
  AnalysisType?: EnabledAnalysisType | undefined;

  /**
   * <p>The date and time the analysis report was ran. </p>
   * @public
   */
  ReportTime?: Date | undefined;

  /**
   * <p>The status of the analysis report you specify. Statuses include <code>RUNNING</code>, <code>COMPLETED</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Attempts made to a access domain.</p>
 * @public
 */
export interface Hits {
  /**
   * <p>The number of attempts made to access a domain.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>A unique source IP address that connected to a domain.</p>
 * @public
 */
export interface UniqueSources {
  /**
   * <p>The number of unique source IP addresses that connected to a domain.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>The results of a <code>COMPLETED</code> analysis report generated with <a>StartAnalysisReport</a>.</p>
 *          <p>For an example of traffic analysis report results, see the response syntax of <a>GetAnalysisReportResults</a>.</p>
 * @public
 */
export interface AnalysisTypeReportResult {
  /**
   * <p>The type of traffic captured by the analysis report.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The date and time any domain was first accessed (within the last 30 day period).</p>
   * @public
   */
  FirstAccessed?: Date | undefined;

  /**
   * <p>The date and time any domain was last accessed (within the last 30 day period).</p>
   * @public
   */
  LastAccessed?: Date | undefined;

  /**
   * <p>The most frequently accessed domains.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The number of attempts made to access a observed domain.</p>
   * @public
   */
  Hits?: Hits | undefined;

  /**
   * <p>The number of unique source IP addresses that connected to a domain.</p>
   * @public
   */
  UniqueSources?: UniqueSources | undefined;
}

/**
 * <p>The analysis result for Network Firewall's stateless rule group analyzer. Every time you call <a>CreateRuleGroup</a>, <a>UpdateRuleGroup</a>, or <a>DescribeRuleGroup</a> on a stateless rule group, Network Firewall analyzes the stateless rule groups in your account and identifies the rules that might adversely effect your firewall's functionality. For example, if Network Firewall detects a rule that's routing traffic asymmetrically, which impacts the service's ability to properly process traffic, the service includes the rule in a list of analysis results.</p>
 *          <p>The <code>AnalysisResult</code> data type is not related to traffic analysis reports you generate using <a>StartAnalysisReport</a>. For information on traffic analysis report results, see <a>AnalysisTypeReportResult</a>.</p>
 * @public
 */
export interface AnalysisResult {
  /**
   * <p>The priority number of the stateless rules identified in the analysis.</p>
   * @public
   */
  IdentifiedRuleIds?: string[] | undefined;

  /**
   * <p>The types of rule configurations that Network Firewall analyzes your rule groups for. Network Firewall analyzes stateless rule groups for the following types of rule configurations:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS_RULE_FORWARDING_ASYMMETRICALLY</code>
   *                </p>
   *                <p>Cause: One or more stateless rules with the action <code>pass</code> or <code>forward</code> are forwarding traffic asymmetrically. Specifically, the rule's set of source IP addresses  or their associated port numbers, don't match the set of destination IP addresses or their associated port numbers.</p>
   *                <p>To mitigate: Make sure that there's an existing return path. For example, if the rule allows traffic from source 10.1.0.0/24 to destination 20.1.0.0/24, you should allow return traffic from source 20.1.0.0/24 to destination 10.1.0.0/24.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATELESS_RULE_CONTAINS_TCP_FLAGS</code>
   *                </p>
   *                <p>Cause: At least one stateless rule with the action <code>pass</code> or<code>forward</code> contains TCP flags that are inconsistent in the forward and return directions.</p>
   *                <p>To mitigate: Prevent asymmetric routing issues caused by TCP flags by following these actions:</p>
   *                <ul>
   *                   <li>
   *                      <p>Remove unnecessary TCP flag inspections from the rules.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you need to inspect TCP flags, check that the rules correctly account for changes in TCP flags throughout the TCP connection cycle, for example <code>SYN</code> and <code>ACK</code> flags used in a 3-way TCP handshake.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  IdentifiedType?: IdentifiedType | undefined;

  /**
   * <p>Provides analysis details for the identified rule.</p>
   * @public
   */
  AnalysisDetail?: string | undefined;
}

/**
 * <p>Defines the mapping between an Availability Zone and a firewall endpoint for a transit gateway-attached firewall. Each mapping represents where the firewall can process traffic. You use these mappings when calling <code>CreateFirewall</code>, <code>AssociateAvailabilityZones</code>, and <code>DisassociateAvailabilityZones</code>.</p>
 *          <p>To retrieve the current Availability Zone mappings for a firewall, use <code>DescribeFirewall</code>.</p>
 * @public
 */
export interface AvailabilityZoneMapping {
  /**
   * <p>The ID of the Availability Zone where the firewall endpoint is located. For example, <code>us-east-2a</code>. The Availability Zone must be in the same Region as the transit gateway.</p>
   * @public
   */
  AvailabilityZone: string | undefined;
}

/**
 * @public
 */
export interface AssociateAvailabilityZonesRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>Required. The Availability Zones where you want to create firewall endpoints. You must specify at least one Availability Zone.</p>
   * @public
   */
  AvailabilityZoneMappings: AvailabilityZoneMapping[] | undefined;
}

/**
 * @public
 */
export interface AssociateAvailabilityZonesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Availability Zones where Network Firewall created firewall endpoints. Each mapping specifies an Availability Zone where the firewall processes traffic.</p>
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallPolicyRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   * @public
   */
  FirewallPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * <p>A NAT gateway that Network Firewall creates for a proxy mode firewall in one Availability Zone. You use this in <code>CreateFirewall</code> and <code>AssociateSubnets</code>.</p>
 *          <p>To create a public NAT gateway, specify <code>AllocationIds</code>, and one <code>PrivateIps</code> address for each Elastic IP address. To create a private NAT gateway, specify only <code>PrivateIps</code>. You must specify at least one of them. Each Elastic IP address and private IP address can appear only once in a request.</p>
 *          <p>The NAT gateway is a resource in your account. To change its IP addresses, use Amazon EC2 NAT gateway actions.</p>
 * @public
 */
export interface NatGatewayCreateMapping {
  /**
   * <p>The ID of the subnet where Network Firewall creates the NAT gateway. The subnet must be in the firewall's VPC and can't be one of the firewall endpoint subnets. Each mapping must be in a different Availability Zone.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The allocation IDs of the Elastic IP addresses for a public NAT gateway, from 1 to 8. For each allocation ID, specify one address in <code>PrivateIps</code>. If you don't specify this, Network Firewall creates a private NAT gateway.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * <p>The private IPv4 addresses of the NAT gateway. The addresses must be in the subnet that you specify and can't be the subnet's reserved addresses.</p>
   *          <p>For a public NAT gateway, you must specify exactly one address for each Elastic IP address in <code>AllocationIds</code>, even if you specify only one. For a private NAT gateway, specify from 1 to 8 addresses. The first address is the primary address.</p>
   * @public
   */
  PrivateIps?: string[] | undefined;
}

/**
 * <p>The ID for a subnet that's used in an association with a firewall. This is used in
 *       <code>CreateFirewall</code>, <code>AssociateSubnets</code>, and <code>CreateVpcEndpointAssociation</code>. Network Firewall
 *          creates an instance of the associated firewall in each subnet that you specify, to filter
 *          traffic in the subnet's Availability Zone.</p>
 * @public
 */
export interface SubnetMapping {
  /**
   * <p>The unique identifier for the subnet. </p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The subnet's IP address type. You can't change the IP address type after you create the subnet.</p>
   * @public
   */
  IPAddressType?: IPAddressType | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetsRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The IDs of the subnets that you want to associate with the firewall. </p>
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;

  /**
   * <p>The NAT gateways that Network Firewall creates for the Availability Zones that you add to a proxy mode firewall. For a proxy mode firewall, you must specify one mapping for each Availability Zone in <code>SubnetMappings</code>, and no other Availability Zones. Each NAT gateway subnet must be in the firewall's VPC and can't be one of the firewall endpoint subnets.</p>
   *          <p>You can't specify this for a firewall that isn't a proxy mode firewall.</p>
   * @public
   */
  NatGatewayCreateMappings?: NatGatewayCreateMapping[] | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The IDs of the subnets that are associated with the firewall. </p>
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * <p>The definition and status of the firewall endpoint for a single subnet. In each configured subnet, Network Firewall instantiates a firewall
 *          endpoint to handle network traffic. </p>
 *          <p>This data type is used for any firewall endpoint type: </p>
 *          <ul>
 *             <li>
 *                <p>For <code>Firewall.SubnetMappings</code>, this <code>Attachment</code> is part of the <code>FirewallStatus</code> sync states information. You define firewall subnets using <code>CreateFirewall</code> and <code>AssociateSubnets</code>. </p>
 *             </li>
 *             <li>
 *                <p>For <code>VpcEndpointAssociation</code>, this <code>Attachment</code> is part of the <code>VpcEndpointAssociationStatus</code> sync states information. You define these subnets using <code>CreateVpcEndpointAssociation</code>. </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Attachment {
  /**
   * <p>The unique identifier of the subnet that you've specified to be used for a firewall endpoint. </p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The identifier of the firewall endpoint that Network Firewall has instantiated in the
   *          subnet. You use this to identify the firewall endpoint in the VPC route tables, when you
   *          redirect the VPC traffic through the endpoint. </p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The current status of the firewall endpoint instantiation in the subnet. </p>
   *          <p>When this value is <code>READY</code>, the endpoint is available to handle network traffic. Otherwise,
   *          this value reflects its state, for example <code>CREATING</code> or <code>DELETING</code>.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>If Network Firewall fails to create or delete the firewall endpoint in the subnet, it populates this with the reason for the error or failure and how to resolve it.
   *          A <code>FAILED</code> status indicates a non-recoverable state, and a <code>ERROR</code> status indicates an issue that you can fix.
   *          Depending on the error, it can take as many as 15 minutes to populate this field. For more information about the causes for failiure or errors and solutions available for this field, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html">Troubleshooting firewall endpoint failures</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The proxy DNS name of a proxy mode firewall. Your clients send proxy requests to the firewall at this name. It's your <code>ProxySettings</code>
   *             <code>DomainName</code> if you specified one, or a name that Network Firewall generates in the format <code>proxy-<i>id</i>.nfw.<i>region</i>.amazonaws.com</code>.</p>
   *          <p>The firewall has one proxy DNS name for every Availability Zone and VPC that it serves. In each Availability Zone, the name resolves to the firewall endpoint in that Availability Zone, so traffic stays in your client's Availability Zone. Your clients must use the VPC's Route 53 Resolver.</p>
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * <p>The status of the firewall endpoint defined by a <code>VpcEndpointAssociation</code>. </p>
 * @public
 */
export interface AZSyncState {
  /**
   * <p>The definition and status of the firewall endpoint for a single subnet. In each configured subnet, Network Firewall instantiates a firewall
   *          endpoint to handle network traffic. </p>
   *          <p>This data type is used for any firewall endpoint type: </p>
   *          <ul>
   *             <li>
   *                <p>For <code>Firewall.SubnetMappings</code>, this <code>Attachment</code> is part of the <code>FirewallStatus</code> sync states information. You define firewall subnets using <code>CreateFirewall</code> and <code>AssociateSubnets</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <code>VpcEndpointAssociation</code>, this <code>Attachment</code> is part of the <code>VpcEndpointAssociationStatus</code> sync states information. You define these subnets using <code>CreateVpcEndpointAssociation</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Attachment?: Attachment | undefined;
}

/**
 * <p>High-level information about an Availability Zone where the firewall has an endpoint defined. </p>
 * @public
 */
export interface AvailabilityZoneMetadata {
  /**
   * <p>The IP address type of the Firewall subnet in the Availability Zone. You can't change the IP address type after you create the subnet.</p>
   * @public
   */
  IPAddressType?: IPAddressType | undefined;
}

/**
 * <p>General information about the IP set.</p>
 * @public
 */
export interface IPSetMetadata {
  /**
   * <p>Describes the total number of CIDR blocks currently in use by the IP set references in a firewall. To determine how many CIDR blocks are available for you to use in a firewall, you can call <code>AvailableCIDRCount</code>.</p>
   * @public
   */
  ResolvedCIDRCount?: number | undefined;
}

/**
 * <p>Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.</p>
 * @public
 */
export interface CIDRSummary {
  /**
   * <p>The number of CIDR blocks available for use by the IP set references in a firewall.</p>
   * @public
   */
  AvailableCIDRCount?: number | undefined;

  /**
   * <p>The number of CIDR blocks used by the IP set references in a firewall.</p>
   * @public
   */
  UtilizedCIDRCount?: number | undefined;

  /**
   * <p>The list of the IP set references used by a firewall.</p>
   * @public
   */
  IPSetReferences?: Record<string, IPSetMetadata> | undefined;
}

/**
 * <p>The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall.</p>
 * @public
 */
export interface CapacityUsageSummary {
  /**
   * <p>Describes the capacity usage of the CIDR blocks used by the IP set references in a firewall.</p>
   * @public
   */
  CIDRs?: CIDRSummary | undefined;
}

/**
 * <p>Contains metadata about an Certificate Manager certificate.</p>
 * @public
 */
export interface TlsCertificateData {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  CertificateSerial?: string | undefined;

  /**
   * <p>The status of the certificate.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Contains details about the certificate status, including information about certificate errors.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Defines the actions to take on the SSL/TLS connection if the certificate presented by the server in the connection has a revoked or unknown status.</p>
 * @public
 */
export interface CheckCertificateRevocationStatusActions {
  /**
   * <p>Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has a revoked status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PASS</b> - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DROP</b> - Network Firewall closes the connection and drops subsequent packets for that connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECT</b> - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. <code>REJECT</code> is available only for TCP traffic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RevokedStatusAction?: RevocationCheckAction | undefined;

  /**
   * <p>Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has an unknown status, or a status that cannot be determined for any other reason, including when the service is unable to connect to the OCSP and CRL endpoints for the certificate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PASS</b> - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DROP</b> - Network Firewall closes the connection and drops subsequent packets for that connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECT</b> - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. <code>REJECT</code> is available only for TCP traffic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  UnknownStatusAction?: RevocationCheckAction | undefined;
}

/**
 * <p>The metadata for a container association returned by <code>ListContainerAssociations</code>. Contains the ARN
 *       and name that you use to identify the container association in other operations.</p>
 * @public
 */
export interface ContainerAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The descriptive name of the container association.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A key-value filter pair used in container association monitoring configurations to narrow which containers
 *       are tracked. The key must match exactly. The value can be an exact value or a wildcard pattern.</p>
 * @public
 */
export interface ContainerAttribute {
  /**
   * <p>The attribute key to filter on. For Amazon EKS, specify <code>namespace</code> to filter by namespace, or
   *       specify a Kubernetes label key. For Amazon ECS, specify a container instance attribute name. Keys don't support
   *       wildcards.</p>
   *          <p>Valid characters are letters, numbers, spaces, hyphens (<code>-</code>), underscores (<code>_</code>),
   *       periods (<code>.</code>), forward slashes (<code>/</code>), and colons (<code>:</code>).</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The attribute value to match. You can specify an exact value, such as <code>payments-api</code>, or a
   *       wildcard pattern, such as <code>payments-*</code>.</p>
   *          <p>Valid characters are letters, numbers, spaces, hyphens (<code>-</code>), underscores (<code>_</code>),
   *       periods (<code>.</code>), forward slashes (<code>/</code>), colons (<code>:</code>), asterisks
   *       (<code>*</code>), and backslashes (<code>\</code>).</p>
   *          <p>Network Firewall evaluates the value using the following rules:</p>
   *          <ul>
   *             <li>
   *                <p>An asterisk (<code>*</code>) matches zero or more characters. For example, <code>payments-*</code>
   *             matches <code>payments-</code>, <code>payments-api</code>, and <code>payments-api-v2</code>, and
   *             <code>*-prod</code> matches <code>web-prod</code>.</p>
   *             </li>
   *             <li>
   *                <p>The pattern must match the entire value. For example, <code>payments-*</code> doesn't match
   *             <code>my-payments-api</code>. To match a value that contains <code>payments</code> anywhere, use
   *             <code>*payments*</code>.</p>
   *             </li>
   *             <li>
   *                <p>Matching is case sensitive. For example, <code>Payments-*</code> doesn't match
   *             <code>payments-api</code>.</p>
   *             </li>
   *             <li>
   *                <p>To match a literal asterisk, escape it with a backslash (<code>\*</code>). To match a literal
   *             backslash, use <code>\\</code>. A backslash followed by any other character matches a literal backslash
   *             followed by that character.</p>
   *             </li>
   *             <li>
   *                <p>A wildcard pattern matches only containers that have the attribute. For example, a filter with key
   *             <code>app</code> and value <code>*</code> matches every container that has an <code>app</code> label, but
   *             doesn't match a container without an <code>app</code> label.</p>
   *             </li>
   *             <li>
   *                <p>A value that doesn't contain <code>*</code> or <code>\</code> matches only that exact value.</p>
   *             </li>
   *          </ul>
   *          <p>A value can contain at most 10 unescaped asterisks. Escaped asterisks (<code>\*</code>) don't count toward
   *       this limit. A value can't end with a single unescaped backslash.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Contains the monitoring configuration for a single cluster in a container association. Specifies the cluster
 *       ARN and optional attribute filters to narrow which containers are tracked.</p>
 * @public
 */
export interface ContainerMonitoringConfiguration {
  /**
   * <p>The ARN of the Amazon ECS or Amazon EKS cluster to monitor. The cluster must be in the same Region and account as
   *       the container association.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>Key-value pairs that filter which containers are tracked. For Amazon EKS, you can filter by namespace and
   *       Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).</p>
   *          <p>Attribute values can contain wildcard patterns, for example <code>payments-*</code>. Attribute keys must
   *       match exactly.</p>
   * @public
   */
  AttributeFilters?: ContainerAttribute[] | undefined;
}

/**
 * <p>A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you
 *          define. Typically, the tag key represents a category (such as "environment") and the tag
 *          value represents a specific value within that category (such as "test," "development," or
 *          "production"). You can add up to 50 tags to each Amazon Web Services resource. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The part of the key:value pair that defines a tag. You can use a tag key to describe a
   *          category of information, such as "customer." Tag keys are case-sensitive.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The part of the key:value pair that defines a tag. You can use a tag value to describe a
   *          specific value within a category, such as "companyA" or "companyB." Tag values are
   *          case-sensitive.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateContainerAssociationRequest {
  /**
   * <p>The descriptive name of the container association. You can't change the name of a container association after you create it.</p>
   * @public
   */
  ContainerAssociationName: string | undefined;

  /**
   * <p>A description of the container association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of containers to monitor. You can't change the container type after creation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ECS</code> - Amazon Elastic Container Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS</code> - Amazon Elastic Kubernetes Service</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: ContainerMonitoringType | undefined;

  /**
   * <p>The monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster
   *       to monitor and optional attribute filters to narrow which containers are tracked.</p>
   * @public
   */
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[] | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContainerAssociationResponse {
  /**
   * <p>The descriptive name of the container association.</p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * <p>A description of the container association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ECS</code> - Amazon Elastic Container Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS</code> - Amazon Elastic Kubernetes Service</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * <p>The monitoring configurations for the container association.</p>
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * <p>The current status of the container association. For a new container association, the status is <code>CREATING</code>.</p>
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association.
   *       The token marks the state of the container association resource at the time of the request.</p>
   *          <p>To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure
   *       that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an
   *       <code>InvalidTokenException</code>. If this happens, retrieve the container association again to get a current copy of it
   *       with a current token. Reapply your changes as needed, then try the operation again using the new token.</p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The ID of the Amazon Web Services Key Management Service (KMS) customer managed key. You can use any of the key identifiers that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key ID</a> in the <i>Amazon Web Services KMS Developer Guide</i>.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The type of Amazon Web Services KMS key to use for encryption of your Network Firewall resources.</p>
   * @public
   */
  Type: EncryptionType | undefined;
}

/**
 * <p>Open port for taking HTTP or HTTPS traffic. </p>
 * @public
 */
export interface ListenerProperty {
  /**
   * <p>Port for processing traffic.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Selection of HTTP or HTTPS traffic.</p>
   * @public
   */
  Type?: ListenerPropertyType | undefined;
}

/**
 * <p>The proxy settings of a proxy mode firewall: the ports and protocols on which the firewall's proxy listens for traffic, and optionally your own domain name and certificate.</p>
 * @public
 */
export interface ProxySettings {
  /**
   * <p>The listeners of the firewall's proxy. Specify at least one listener, and at most one HTTP listener and one HTTPS listener. Each listener needs a port from 1 to 65535, and the two listeners must use different ports.</p>
   *          <p>If you don't specify listeners when you create the firewall, the firewall listens for HTTP on port 3128 and HTTPS on port 8443.</p>
   * @public
   */
  ListenerProperties: ListenerProperty[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate that the firewall's HTTPS proxy listener presents to clients. The certificate must be an Certificate Manager (ACM) certificate in the same account and Region as the firewall. Its subject alternative names must cover <code>DomainName</code>, either exactly or with a wildcard that matches exactly one label. For example, <code>*.example.com</code> covers <code>proxy.example.com</code>. If you don't specify this, Network Firewall uses a certificate that it manages for a domain name that it generates.</p>
   *          <p>You manage and renew the certificate in ACM, and Network Firewall uses renewed certificates automatically. While the firewall uses the certificate, you can't delete it from ACM. Your clients must trust the certificate's certificate authority.</p>
   *          <p>If you specify <code>CertificateArn</code>, you must also specify <code>DomainName</code>. You can set them only when you create the firewall. When you call <code>UpdateProxySettings</code>, specify the same values.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The domain name that your clients use to reach the firewall's proxy. The name must have at least two labels and at most 253 characters. It can't contain a wildcard or use the <code>proxy-<i>id</i>.nfw.<i>region</i>.amazonaws.com</code> format, and the certificate in <code>CertificateArn</code> must cover it. If you don't specify this, Network Firewall generates a domain name.</p>
   *          <p>Network Firewall creates the Route 53 private hosted zones that resolve this name to the firewall endpoints, so you don't need to configure DNS. A VPC can have only one private hosted zone with a given name. If a VPC that the firewall serves already has one with this name, Network Firewall can't set up the Availability Zones in that VPC.</p>
   *          <p>If you specify <code>DomainName</code>, you must also specify <code>CertificateArn</code>. You can set them only when you create the firewall. When you call <code>UpdateProxySettings</code>, specify the same values.</p>
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * <p>The VPC and subnets for the endpoints of a proxy mode firewall. You use this in <code>CreateFirewall</code>. Network Firewall creates the firewall endpoints and the firewall's NAT gateways in this VPC.</p>
 *          <p>This differs from <code>VpcEndpointAssociation</code>, which defines additional endpoints for a firewall in other VPCs.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the VPC where Network Firewall creates the endpoints and NAT gateways of a proxy mode firewall.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The subnets where Network Firewall creates the firewall endpoints of a proxy mode firewall. Specify one subnet for each Availability Zone, and a NAT gateway mapping in each of those Availability Zones.</p>
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a>FirewallPolicy</a> that you want to
   *          use for the firewall.</p>
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC where Network Firewall should create the firewall. </p>
   *          <p>You can't change this setting after you create the firewall. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a
   *          different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each
   *          subnet. </p>
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * <p>A description of the firewall.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your firewall resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>An optional setting indicating the specific traffic analysis types to enable on the firewall. </p>
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * <p>Required when creating a transit gateway-attached firewall. The unique identifier of the transit gateway to attach to this firewall. You can provide either a transit gateway from your account or one that has been shared with you through Resource Access Manager.</p>
   *          <important>
   *             <p>After creating the firewall, you cannot change the transit gateway association. To use a different transit gateway, you must create a new firewall.</p>
   *          </important>
   *          <p>For information about creating firewalls, see <a>CreateFirewall</a>. For specific guidance about transit gateway-attached firewalls, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tgw-firewall-considerations.html">Considerations for transit gateway-attached firewalls</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>Required. The Availability Zones where you want to create firewall endpoints for a transit gateway-attached firewall. You must specify at least one Availability Zone. Consider enabling the firewall in every Availability Zone where you have workloads to maintain Availability Zone isolation.</p>
   *          <p>You can modify Availability Zones later using <a>AssociateAvailabilityZones</a> or <a>DisassociateAvailabilityZones</a>, but this may briefly disrupt traffic. The <code>AvailabilityZoneChangeProtection</code> setting controls whether you can make these modifications.</p>
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * <p>Optional. A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to <code>TRUE</code>, you cannot add or remove Availability Zones without first disabling this protection using <a>UpdateAvailabilityZoneChangeProtection</a>.</p>
   *          <p>Default value: <code>FALSE</code>
   *          </p>
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;

  /**
   * <p>The NAT gateways that Network Firewall creates for a proxy mode firewall, one for each Availability Zone. When you specify this, you create a proxy mode firewall. Destinations see the IP address of the NAT gateway in the client's Availability Zone as the source of the traffic.</p>
   *          <p>Specify one mapping for each Availability Zone in <code>VpcEndpoint</code>, and no other Availability Zones. Each NAT gateway subnet must be in the <code>VpcEndpoint</code> VPC and can't be one of the firewall endpoint subnets.</p>
   *          <p>You need permission to call the Amazon EC2 <code>CreateNatGateway</code> action.</p>
   *          <p>If Network Firewall can't set up an Availability Zone, for example because Amazon EC2 rejects the NAT gateway, it removes the Availability Zone from the firewall. It also deletes the NAT gateway that it created there. The Availability Zone's <code>Attachment</code> status is <code>FAILED</code>, and its status message explains why. You can add the Availability Zone again with <code>AssociateSubnets</code>. If no Availability Zone can be set up, the firewall status is <code>FAILED</code>.</p>
   * @public
   */
  NatGatewayCreateMappings?: NatGatewayCreateMapping[] | undefined;

  /**
   * <p>The proxy settings for a proxy mode firewall: the ports and protocols on which the firewall's proxy listens for traffic, and optionally your own domain name and certificate. If you don't specify listeners, the firewall listens for HTTP on port 3128 and HTTPS on port 8443.</p>
   *          <p>To change the listeners later, use <code>UpdateProxySettings</code>.</p>
   * @public
   */
  ProxySettings?: ProxySettings | undefined;

  /**
   * <p>The VPC and subnets for the endpoints of a proxy mode firewall. Network Firewall creates a firewall endpoint in each subnet that you specify. It also creates the firewall's NAT gateways in this VPC, in the subnets that you specify in <code>NatGatewayCreateMappings</code>.</p>
   *          <p>To create a proxy mode firewall, you must specify <code>VpcEndpoint</code> and <code>NatGatewayCreateMappings</code>, and you must not specify the top-level <code>VpcId</code> and <code>SubnetMappings</code>. Specify one subnet for each Availability Zone where you want to use the firewall.</p>
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;

  /**
   * <p>How a proxy mode firewall handles traffic that isn't sent to its proxy listener. If you don't specify a value, the firewall uses <code>NAT_ALL</code>. You can choose from the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NAT_ALL</code> - After inspection, the firewall sends this traffic out through its NAT gateway, which translates the source address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAT_NONE</code> - After inspection, the firewall returns this traffic to the firewall endpoint without address translation.</p>
   *             </li>
   *          </ul>
   *          <p>You can specify this only for a proxy mode firewall, and you can't change it after you create the firewall.</p>
   * @public
   */
  TransparentFilteringNatScope?: TransparentFilteringNatScope | undefined;
}

/**
 * <p>A firewall defines the behavior of a firewall, the main VPC where the firewall is used, the Availability Zones where the firewall can be used, and one subnet to use for a firewall endpoint within each of the Availability Zones. The Availability Zones are defined implicitly in the subnet specifications.</p>
 *          <p>In addition to the firewall endpoints that you define in this <code>Firewall</code> specification, you can create firewall endpoints in <code>VpcEndpointAssociation</code> resources for any VPC, in any Availability Zone where the firewall is already in use. </p>
 *          <p>The status of the firewall, for example whether it's ready to filter network traffic,
 *          is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both
 *          the firewall and firewall status by calling <a>DescribeFirewall</a>.</p>
 * @public
 */
export interface Firewall {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>The relationship of firewall to firewall policy is many to one. Each firewall requires
   *          one firewall policy association, and you can use the same firewall policy for multiple
   *          firewalls. </p>
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC where the firewall is in use. </p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The primary public subnets that Network Firewall is using for the firewall. Network Firewall creates a firewall endpoint in each subnet. Create a subnet mapping for each Availability Zone where you want to use the firewall.</p>
   *          <p>These subnets are all defined for a single, primary VPC, and each must belong to a different Availability Zone. Each of these subnets establishes the availability of the firewall in its Availability Zone. </p>
   *          <p>In addition to these subnets, you can define other endpoints for the firewall in <code>VpcEndpointAssociation</code> resources. You can define these additional endpoints for any VPC, and for any of the Availability Zones where the firewall resource already has a subnet mapping. VPC endpoint associations give you the ability to protect multiple VPCs using a single firewall, and to define multiple firewall endpoints for a VPC in a single Availability Zone. </p>
   * @public
   */
  SubnetMappings: SubnetMapping[] | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * <p>A description of the firewall.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier for the firewall. </p>
   * @public
   */
  FirewallId: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The number of <code>VpcEndpointAssociation</code> resources that use this firewall. </p>
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * <p>An optional setting indicating the specific traffic analysis types to enable on the firewall. </p>
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * <p>The unique identifier of the transit gateway associated with this firewall. This field is only present for transit gateway-attached firewalls.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the transit gateway. This may be different from the firewall owner's account ID when using a shared transit gateway.</p>
   * @public
   */
  TransitGatewayOwnerAccountId?: string | undefined;

  /**
   * <p>The Availability Zones where the firewall endpoints are created for a transit gateway-attached firewall. Each mapping specifies an Availability Zone where the firewall processes traffic.</p>
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to <code>TRUE</code>, you must first disable this protection before adding or removing Availability Zones.</p>
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;

  /**
   * <p>The NAT gateways that you specified for Network Firewall to create for a proxy mode firewall. To get the IDs and status of the NAT gateways that are attached to the firewall, see <code>NatGatewayAttachments</code> in the firewall's <code>SyncStates</code>.</p>
   * @public
   */
  NatGatewayCreateMappings?: NatGatewayCreateMapping[] | undefined;

  /**
   * <p>The proxy settings of a proxy mode firewall: its listeners and, if you specified them, your own <code>CertificateArn</code> and <code>DomainName</code>.</p>
   * @public
   */
  ProxySettings?: ProxySettings | undefined;

  /**
   * <p>The VPC and subnets for the endpoints of a proxy mode firewall.</p>
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;

  /**
   * <p>How a proxy mode firewall handles traffic that isn't sent to its proxy listener. <code>NAT_ALL</code> sends this traffic out through the firewall's NAT gateway after inspection. <code>NAT_NONE</code> returns it to the firewall endpoint without address translation.</p>
   * @public
   */
  TransparentFilteringNatScope?: TransparentFilteringNatScope | undefined;
}

/**
 * <p>Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall
 *          provides each endpoint with the rules that are configured in the firewall policy. Each time
 *          you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the
 *           rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.</p>
 * @public
 */
export interface PerObjectStatus {
  /**
   * <p>Indicates whether this object is in sync with the version indicated in the update token.</p>
   * @public
   */
  SyncStatus?: PerObjectSyncStatus | undefined;

  /**
   * <p>The current version of the object that is either in sync or pending synchronization. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * <p>The NAT gateway that's attached to a proxy mode firewall in an Availability Zone, and the status of the attachment. Traffic that the firewall allows in the Availability Zone leaves through this NAT gateway.</p>
 * @public
 */
export interface NatGatewayAttachment {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The status of the NAT gateway attachment. <code>READY</code> means that the NAT gateway is attached and the firewall can send traffic through it. Other values are <code>CREATING</code>, <code>UPDATING</code>, <code>DELETING</code>, and <code>FAILED</code>.</p>
   * @public
   */
  Status: NatGatewayAttachmentStatus | undefined;

  /**
   * <p>The reason that Network Firewall couldn't create or attach the NAT gateway, if it couldn't.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The proxy DNS name of the firewall in this Availability Zone. This is the same as the <code>DnsName</code> of the firewall's <code>Attachment</code>.</p>
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet.
 *           This is part of the <a>FirewallStatus</a>. </p>
 *          <p>For each VPC subnet that you associate with a firewall, Network Firewall does the
 *          following: </p>
 *          <ul>
 *             <li>
 *                <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p>
 *             </li>
 *             <li>
 *                <p>Configures the endpoint with the current firewall policy settings, to provide the
 *                filtering behavior for the endpoint.</p>
 *             </li>
 *          </ul>
 *          <p>When you update a firewall, for example to add a subnet association or change a rule
 *          group in the firewall policy, the affected sync states reflect out-of-sync or not ready
 *          status until the changes are complete. </p>
 * @public
 */
export interface SyncState {
  /**
   * <p>The configuration and status for a single firewall subnet.
   *        For each configured subnet, Network Firewall creates the attachment by instantiating the firewall
   *          endpoint in the subnet so that it's ready to take traffic. </p>
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * <p>The configuration status of the firewall endpoint in a single VPC subnet. Network Firewall
   *          provides each endpoint with the rules that are configured in the firewall policy. Each time
   *          you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the
   *           rules in the endpoint, so it can properly filter network traffic. </p>
   * @public
   */
  Config?: Record<string, PerObjectStatus> | undefined;

  /**
   * <p>The NAT gateway that's attached to a proxy mode firewall in the Availability Zone, and the status of the attachment. To get NAT gateway details, such as IP addresses, use the Amazon EC2 <code>DescribeNatGateways</code> action.</p>
   *          <p>A proxy mode firewall is <code>READY</code> when at least one Availability Zone's firewall endpoint and NAT gateway attachment are <code>READY</code>.</p>
   * @public
   */
  NatGatewayAttachments?: NatGatewayAttachment[] | undefined;
}

/**
 * <p>Contains information about the synchronization state of a transit gateway attachment, including its current status and any error messages. Network Firewall uses this to track the state of your transit gateway configuration changes.</p>
 * @public
 */
export interface TransitGatewayAttachmentSyncState {
  /**
   * <p>The unique identifier of the transit gateway attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>The current status of the transit gateway attachment.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The attachment is being created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The attachment is being deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The attachment has been deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The attachment creation has failed and cannot be recovered</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The attachment is in an error state that might be recoverable</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The attachment is active and processing traffic</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code> - The attachment is waiting to be accepted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTING</code> - The attachment is in the process of being rejected</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The attachment has been rejected</p>
   *             </li>
   *          </ul>
   * @public
   */
  TransitGatewayAttachmentStatus?: TransitGatewayAttachmentStatus | undefined;

  /**
   * <p>A message providing additional information about the current status, particularly useful when the transit gateway attachment is in a non-<code>READY</code> state.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The attachment is being created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The attachment is being deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The attachment has been deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The attachment creation has failed and cannot be recovered</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The attachment is in an error state that might be recoverable</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The attachment is active and processing traffic</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code> - The attachment is waiting to be accepted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTING</code> - The attachment is in the process of being rejected</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The attachment has been rejected</p>
   *             </li>
   *          </ul>
   *          <p>For information about troubleshooting endpoint failures, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html">Troubleshooting firewall endpoint failures</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
 *          <p>The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values. </p>
 * @public
 */
export interface FirewallStatus {
  /**
   * <p>The readiness of the configured firewall to handle network traffic across all of the
   *          Availability Zones where you have it configured. This setting is <code>READY</code> only when
   *          the <code>ConfigurationSyncStateSummary</code> value is <code>IN_SYNC</code> and the
   *             <code>Attachment</code>
   *             <code>Status</code> values for all of the configured subnets are <code>READY</code>.
   *       </p>
   * @public
   */
  Status: FirewallStatusValue | undefined;

  /**
   * <p>The configuration sync state for the firewall. This summarizes the <code>Config</code>
   *                settings in the <code>SyncStates</code> for this firewall status object. </p>
   *          <p>When you create a firewall or update its configuration, for example by adding a rule
   *          group to its firewall policy, Network Firewall distributes the configuration changes to all
   *          Availability Zones that have subnets defined for the firewall. This summary indicates whether the configuration
   *          changes have been applied everywhere. </p>
   *          <p>This status must be <code>IN_SYNC</code> for the firewall to be ready for use, but it
   *          doesn't indicate that the firewall is ready. The <code>Status</code> setting indicates
   *          firewall readiness. It's based on this setting and the readiness of the firewall endpoints to take traffic. </p>
   * @public
   */
  ConfigurationSyncStateSummary: ConfigurationSyncState | undefined;

  /**
   * <p>Status for the subnets that you've configured in the firewall. This contains
   *       one array element per Availability Zone where you've configured a subnet in the firewall. </p>
   *          <p>These objects provide detailed information for the settings
   *   <code>ConfigurationSyncStateSummary</code> and <code>Status</code>. </p>
   * @public
   */
  SyncStates?: Record<string, SyncState> | undefined;

  /**
   * <p>Describes the capacity usage of the resources contained in a firewall's reference sets. Network Firewall calculates the capacity usage by taking an aggregated count of all of the resources used by all of the reference sets in a firewall.</p>
   * @public
   */
  CapacityUsageSummary?: CapacityUsageSummary | undefined;

  /**
   * <p>The synchronization state of the transit gateway attachment. This indicates whether the firewall's transit gateway configuration is properly synchronized and operational. Use this to verify that your transit gateway configuration changes have been applied.</p>
   * @public
   */
  TransitGatewayAttachmentSyncState?: TransitGatewayAttachmentSyncState | undefined;
}

/**
 * @public
 */
export interface CreateFirewallResponse {
  /**
   * <p>The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. </p>
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   *          <p>The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values. </p>
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. </p>
 * @public
 */
export interface IPSet {
  /**
   * <p>The list of IP addresses and address ranges, in CIDR notation.
   *
   *       </p>
   * @public
   */
  Definition: string[] | undefined;
}

/**
 * <p>Contains variables that you can use to override default Suricata settings in your firewall policy.</p>
 * @public
 */
export interface PolicyVariables {
  /**
   * <p>The IPv4 or IPv6 addresses in CIDR notation to use for the Suricata <code>HOME_NET</code> variable. If your firewall uses an inspection VPC, you might want to override the <code>HOME_NET</code> variable with the CIDRs of your home networks. If you don't override <code>HOME_NET</code> with your own CIDRs, Network Firewall by default uses the CIDR of your inspection VPC.</p>
   * @public
   */
  RuleVariables?: Record<string, IPSet> | undefined;
}

/**
 * <p>The policy-level configuration for resolved IP validation. When you set this on a firewall policy, you require that the destination IP address of a
 *          connection is one that the Amazon Route 53 Resolver returned in a DNS response for a domain. The Route 53 Resolver
 *          must have returned the response in a VPC that's associated with the Route 53 Resolver DNS
 *          Firewall rule group identified by <code>DNSFirewallRuleGroupId</code>. At the policy level,
 *          this verifies that the destination IP address was resolved for some domain. To match specific
 *          domains, also configure stateful rule groups that use the
 *          <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> target type or the
 *          <code>aws_route_53_resolved_domain</code> rule keyword.</p>
 *          <important>
 *             <p>Enabling or disabling resolved IP validation, or changing <code>DNSFirewallRuleGroupId</code>, may require a restart of the stateful engine in order to apply the change. When this occurs, existing connections will be treated according to your stream exception policy configuration. Changes to <code>Action</code>, <code>DNSExpiryExceptionPolicy</code>, <code>SourceIPRanges</code>, and <code>BypassDestinationValidationIPRanges</code> don't require a restart.</p>
 *          </important>
 * @public
 */
export interface Route53ResolvedIPValidation {
  /**
   * <p>The action that Network Firewall takes for a connection whose destination IP address fails
   *          resolved IP validation. A destination IP address fails validation when the Route 53 Resolver
   *          didn't return it in a DNS response in an associated VPC. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> – Tags the matching connection in the firewall's flow logs
   *                without blocking it, when you enable logging. Use this to observe the effect of
   *                resolved IP validation before you enforce it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DROP</code> – Silently blocks the connection without sending any response to the
   *                client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> – Blocks the connection and sends a TCP reset (RST) to the
   *                client. Because a TCP reset applies only to TCP connections, Network Firewall drops non-TCP
   *                traffic instead of resetting it.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Action: Route53ResolvedIPValidationAction | undefined;

  /**
   * <p>The ID of the Route 53 Resolver DNS Firewall rule group that determines which VPCs'
   *          DNS resolutions count for resolved IP validation. A destination IP address counts as resolved for a domain only when the Route 53 Resolver returned it in a DNS response within a VPC
   *          that's associated with this rule group. Associate the rule group with the VPCs that send
   *          traffic to the firewall. The ID must match the pattern <code>^rslvr-frg-[0-9a-f]+$</code>. It must also exist and
   *          be accessible from your account. Network Firewall validates this when you create or update the
   *          policy.</p>
   *          <p>Changing this value swaps the managed rule group association. Network Firewall processes
   *             the swap asynchronously. Each policy can have only one managed Route 53 Resolver DNS
   *             Firewall association. While a swap is in progress, Network Firewall rejects further changes to this setting. Wait
   *             until the swap completes, then retry. The change may also require a restart of the stateful
   *             engine. When this occurs, existing connections will be treated according to your stream
   *             exception policy configuration.</p>
   * @public
   */
  DNSFirewallRuleGroupId: string | undefined;

  /**
   * <p>The action that Network Firewall takes when the DNS resolution recorded for a destination IP
   *          address has expired from the resolved IP cache. This applies when Network Firewall still sees
   *          traffic to that IP address after the expiry. Network Firewall keeps a resolution for longer than
   *          the DNS record's time to live (TTL). Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> – Treats the expired resolution as still valid and doesn't
   *                block the connection because of expiry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DROP</code> – Silently blocks traffic to the IP address after its resolution
   *                has expired, without sending any response to the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> – Blocks traffic to the IP address after its resolution has
   *                expired and sends a TCP reset (RST) to the client. Network Firewall drops non-TCP traffic
   *                instead of resetting it.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DNSExpiryExceptionPolicy: DNSExpiryExceptionPolicy | undefined;

  /**
   * <p>The destination IP address ranges that are exempt from the policy-level resolved IP check.
   *          Network Firewall doesn't apply the <code>Action</code> in this configuration to a connection
   *          whose destination falls in these ranges, even if the Route 53 Resolver didn't return that IP
   *          address in an associated VPC. Specify each entry as an IPv4 or IPv6 address or CIDR range, up
   *          to 100 entries.</p>
   *          <p>This exemption applies only to the policy-level check. Stateful rules that use the
   *             <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> target type or the
   *             <code>aws_route_53_resolved_domain</code> keyword still evaluate connections to these
   *             destinations and match them independently of this list.</p>
   * @public
   */
  BypassDestinationValidationIPRanges?: Address[] | undefined;

  /**
   * <p>The client source IP address ranges whose connections are subject to resolved IP
   *          validation. Specify each entry as an IPv4 or IPv6 address or CIDR range, up to 100 entries. If
   *          you omit this field, resolved IP validation applies to the CIDR ranges of the firewall's VPC and of any additional
   *          VPCs attached to the firewall. Specifying an
   *          empty list is not the same as omitting the field: an empty list means that Network Firewall doesn't validate any source addresses.</p>
   *          <p>This scope applies to the policy-level check only. Stateful rules that use the
   *             <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> target type or the
   *             <code>aws_route_53_resolved_domain</code> keyword still evaluate their destinations
   *             regardless of <code>SourceIPRanges</code>.</p>
   * @public
   */
  SourceIPRanges?: Address[] | undefined;
}

/**
 * <p>Describes the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle and Network Firewall removes the flow entry from its flow table.
 *           When you update this value, existing connections will be treated according to your stream exception policy configuration.
 *      </p>
 * @public
 */
export interface FlowTimeouts {
  /**
   * <p>The number of seconds that can pass without any TCP traffic sent through the firewall before the firewall determines that the connection is idle.
   *         After the idle timeout passes, data packets are dropped, however, the next TCP SYN packet is considered a new flow and is processed by the firewall.
   *         Clients or targets can use TCP keepalive packets to reset the idle timeout.
   *          </p>
   *          <p>You can define the <code>TcpIdleTimeoutSeconds</code> value to be between 60 and 6000 seconds. If no value is provided, it defaults to 350 seconds.
   *       </p>
   * @public
   */
  TcpIdleTimeoutSeconds?: number | undefined;
}

/**
 * <p>Configuration settings for the handling of the stateful rule groups in a firewall policy. </p>
 *          <important>
 *             <p>Updating any setting in <code>StatefulEngineOptions</code> may require a restart of the stateful engine in order to apply the changes. When this occurs, existing connections will be treated according to your stream exception policy configuration.</p>
 *          </important>
 * @public
 */
export interface StatefulEngineOptions {
  /**
   * <p>Indicates how to manage the order of stateful rule evaluation for the policy. <code>STRICT_ORDER</code> is the
   *          recommended option, but <code>DEFAULT_ACTION_ORDER</code> is the default option. With <code>STRICT_ORDER</code>,
   *          provide your rules in the order that you want them to be evaluated.
   *          You can then choose one or more default actions for packets that don't match any rules.
   *          Choose <code>STRICT_ORDER</code> to have the stateful rules engine determine the evaluation order of your rules.
   *          The default action for this rule order is <code>PASS</code>, followed by <code>DROP</code>, <code>REJECT</code>, and <code>ALERT</code> actions.
   *          Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on your settings.
   *          For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   * @public
   */
  RuleOrder?: RuleOrder | undefined;

  /**
   * <p>Configures how Network Firewall processes traffic when a network connection breaks midstream. Network connections can break due to disruptions in external networks or within the firewall itself.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DROP</code> - Network Firewall fails closed and drops all subsequent traffic going to the firewall. This is the default behavior.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Network Firewall continues to apply rules to the subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on this context. For example, if you have a stateful rule to <code>drop http</code> traffic, Network Firewall won't match the traffic for this rule because the service won't have the context from session initialization defining the application layer protocol as HTTP. However, this behavior is rule dependent—a TCP-layer rule using a <code>flow:stateless</code> rule would still match, as would the <code>aws:drop_strict</code> default action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> - Network Firewall fails closed and drops all subsequent traffic going to the firewall. Network Firewall also sends a TCP reject packet back to your client so that the client can immediately establish a new session. Network Firewall will have context about the new session and will apply rules to the subsequent traffic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamExceptionPolicy?: StreamExceptionPolicy | undefined;

  /**
   * <p>Configures the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle.
   *         </p>
   * @public
   */
  FlowTimeouts?: FlowTimeouts | undefined;
}

/**
 * <p>The setting that allows the policy owner to change the behavior of the rule group within a policy. </p>
 * @public
 */
export interface StatefulRuleGroupOverride {
  /**
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to
   *       managed rule groups.</p>
   * @public
   */
  Action?: OverrideAction | undefined;
}

/**
 * <p>Identifier for a single stateful rule group, used in a firewall policy to refer to a
 *          rule group. </p>
 * @public
 */
export interface StatefulRuleGroupReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the stateful rule group.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An integer setting that indicates the order in which to run the stateful rule groups in
   *       a single <a>FirewallPolicy</a>. This setting only applies to firewall policies
   *       that specify the <code>STRICT_ORDER</code> rule order in the stateful engine options settings.</p>
   *          <p>Network Firewall evalutes each stateful rule group
   *          against a packet starting with the group that has the lowest priority setting. You must ensure
   *          that the priority settings are unique within each policy.</p>
   *          <p>You can change the priority settings of your rule groups at any time. To make it easier to
   *          insert rule groups later, number them so there's a wide range in between, for example use 100,
   *          200, and so on. </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The action that allows the policy owner to override the behavior of the rule group within a policy.</p>
   * @public
   */
  Override?: StatefulRuleGroupOverride | undefined;

  /**
   * <p>Network Firewall plans to augment the active threat defense managed rule group with an additional deep threat inspection capability. When this capability is released, Amazon Web Services will analyze service logs of network traffic processed by these rule groups to identify threat indicators across customers.
   *          Amazon Web Services will use these threat indicators to improve the active threat defense managed rule groups and protect the security of Amazon Web Services customers and services.</p>
   *          <note>
   *             <p>Customers can opt-out of deep threat inspection at any time through the Network Firewall console or API. When customers opt out, Network Firewall  will not use the network traffic processed by those customers' active threat defense rule groups for rule group improvement.</p>
   *          </note>
   * @public
   */
  DeepThreatInspection?: boolean | undefined;
}

/**
 * <p>An optional, non-standard action to use for stateless packet handling. You can define
 *          this in addition to the standard action that you must specify. </p>
 *          <p>You define and name the custom actions that you want to be able to use, and then you
 *          reference them by name in your actions settings. </p>
 *          <p>You can use custom actions in the following places: </p>
 *          <ul>
 *             <li>
 *                <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification.
 *                The custom actions are available for use by name inside the
 *                   <code>StatelessRulesAndCustomActions</code> where you define them. You can use
 *                them for your stateless rule actions to specify what to do with a packet that matches
 *                the rule's match attributes. </p>
 *             </li>
 *             <li>
 *                <p>In a <a>FirewallPolicy</a> specification, in
 *                   <code>StatelessCustomActions</code>. The custom actions are available for use
 *                inside the policy where you define them. You can use them for the policy's default
 *                stateless actions settings to specify what to do with packets that don't match any of
 *                the policy's stateless rules. </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CustomAction {
  /**
   * <p>The descriptive name of the custom action. You can't change the name of a custom action after you create it.</p>
   * @public
   */
  ActionName: string | undefined;

  /**
   * <p>The custom action associated with the action name.</p>
   * @public
   */
  ActionDefinition: ActionDefinition | undefined;
}

/**
 * <p>Identifier for a single stateless rule group, used in a firewall policy to refer to the
 *          rule group. </p>
 * @public
 */
export interface StatelessRuleGroupReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the stateless rule group.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An integer setting that indicates the order in which to run the stateless rule groups in
   *          a single <a>FirewallPolicy</a>. Network Firewall applies each stateless rule group
   *          to a packet starting with the group that has the lowest priority setting. You must ensure
   *          that the priority settings are unique within each policy.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless
 *          and stateful rule groups and other settings. You can use one firewall policy for multiple
 *          firewalls. </p>
 *          <p>This, along with <a>FirewallPolicyResponse</a>, define the policy.
 *          You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
 * @public
 */
export interface FirewallPolicy {
  /**
   * <p>References to the stateless rule groups that are used in the policy. These define the
   *          matching criteria in stateless rules. </p>
   * @public
   */
  StatelessRuleGroupReferences?: StatelessRuleGroupReference[] | undefined;

  /**
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the
   *          policy. If you want non-matching packets to be forwarded for stateful inspection, specify
   *             <code>aws:forward_to_sfe</code>. </p>
   *          <p>You must specify one of the standard actions: <code>aws:pass</code>,
   *             <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>. In addition, you can specify
   *          custom actions that are compatible with your standard section choice.</p>
   *          <p>For example, you could specify <code>["aws:pass"]</code> or you could specify
   *             <code>["aws:pass", “customActionName”]</code>. For information about compatibility, see
   *          the custom action descriptions under <a>CustomAction</a>.</p>
   * @public
   */
  StatelessDefaultActions: string[] | undefined;

  /**
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless
   *       rules in the policy. Network Firewall only manages UDP packet fragments and silently drops packet fragments for other protocols.
   *       If you want non-matching fragmented UDP packets to be forwarded for
   *          stateful inspection, specify <code>aws:forward_to_sfe</code>. </p>
   *          <p>You must specify one of the standard actions: <code>aws:pass</code>,
   *             <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>. In addition, you can specify
   *          custom actions that are compatible with your standard section choice.</p>
   *          <p>For example, you could specify <code>["aws:pass"]</code> or you could specify
   *             <code>["aws:pass", “customActionName”]</code>. For information about compatibility, see
   *          the custom action descriptions under <a>CustomAction</a>.</p>
   * @public
   */
  StatelessFragmentDefaultActions: string[] | undefined;

  /**
   * <p>The custom action definitions that are available for use in the firewall policy's
   *             <code>StatelessDefaultActions</code> setting. You name each custom action that you
   *          define, and then you can use it by name in your default actions specifications.</p>
   * @public
   */
  StatelessCustomActions?: CustomAction[] | undefined;

  /**
   * <p>References to the stateful rule groups that are used in the policy. These define the
   *          inspection criteria in stateful rules. </p>
   * @public
   */
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[] | undefined;

  /**
   * <p>The default actions to take on a packet that doesn't match any stateful rules. The stateful default action is optional,
   *          and is only valid when using the strict rule order.</p>
   *          <p>Valid values of the stateful default action:</p>
   *          <ul>
   *             <li>
   *                <p>aws:drop_strict</p>
   *             </li>
   *             <li>
   *                <p>aws:drop_established</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_strict</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_established</p>
   *             </li>
   *             <li>
   *                <p>aws:drop_established_app_layer</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_established_app_layer</p>
   *             </li>
   *             <li>
   *                <p>aws:drop_established_app_layer_to_server</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_established_app_layer_to_server</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html#suricata-strict-rule-evaluation-order.html">Strict evaluation order</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   * @public
   */
  StatefulDefaultActions?: string[] | undefined;

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The stateful
   *        rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.</p>
   * @public
   */
  StatefulEngineOptions?: StatefulEngineOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * <p>Contains variables that you can use to override default Suricata settings in your firewall policy.</p>
   * @public
   */
  PolicyVariables?: PolicyVariables | undefined;

  /**
   * <p>When true, prevents TCP and TLS packets from reaching destination servers until TLS Inspection has evaluated Server Name Indication (SNI) rules. Requires an associated TLS Inspection configuration.</p>
   * @public
   */
  EnableTLSSessionHolding?: boolean | undefined;

  /**
   * <p>The settings that enable resolved IP validation for the policy. Resolved IP validation
   *          verifies that a connection's destination IP address is one that the Amazon Route 53 Resolver
   *          returned in a DNS response for a domain. A VPC that's associated with the Route 53 Resolver
   *          DNS Firewall rule group that you specify must send the response. This checks how the
   *          destination IP address was obtained, instead of relying only on the domain that the client
   *          asserts in its TLS Server Name Indication (SNI) or HTTP <code>Host</code> header. For more
   *          information, see <a>Route53ResolvedIPValidation</a>.</p>
   * @public
   */
  Route53ResolvedIPValidation?: Route53ResolvedIPValidation | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  FirewallPolicyName: string | undefined;

  /**
   * <p>The rule groups and policy actions to use in the firewall policy.</p>
   * @public
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * <p>A configuration error that Network Firewall detected for a firewall policy.</p>
 * @public
 */
export interface FirewallPolicyError {
  /**
   * <p>The error code identifies the type of error. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DNS_FIREWALL_RULE_GROUP_UNAVAILABLE</code> – The Amazon Route 53 Resolver DNS
   *                Firewall rule group that resolved IP validation references is unavailable, for example,
   *                because it was deleted or is no longer accessible from your account. Update the rule
   *                group ID or remove the resolved IP validation configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUTE53_RESOLVED_IP_VALIDATION_MISSING</code> – An associated stateful rule
   *                group uses the <code>aws_route_53_resolved_domain</code> keyword, but the policy doesn't
   *                have resolved IP validation configured. The affected rules are inactive until you add
   *                resolved IP validation to the policy or remove the keyword rules.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Code: FirewallPolicyErrorCode | undefined;

  /**
   * <p>A description of the error and how to resolve it.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource that the error relates to, when applicable. For example, for
   *          <code>DNS_FIREWALL_RULE_GROUP_UNAVAILABLE</code> this is the Amazon Route 53 Resolver DNS
   *          Firewall rule group ID.</p>
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
 * @public
 */
export interface FirewallPolicyResponse {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  FirewallPolicyName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <note>
   *             <p>If this response is for a create request that had <code>DryRun</code> set to
   *                <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid
   *             resource.</p>
   *          </note>
   * @public
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier for the firewall policy. </p>
   * @public
   */
  FirewallPolicyId: string | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the firewall policy. You can retrieve this for a firewall policy
   *          by calling <a>DescribeFirewallPolicy</a> and providing the firewall policy's
   *          name or ARN.</p>
   * @public
   */
  FirewallPolicyStatus?: ResourceStatus | undefined;

  /**
   * <p>Additional detail about the firewall policy's current status, when applicable. For
   *          example, while an Amazon Route 53 Resolver DNS Firewall rule group change is in progress, the
   *          status is <code>UPDATING</code> and this message is "A DNS Firewall rule group change is in
   *          progress."</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The number of capacity units currently consumed by the policy's stateless rules.</p>
   * @public
   */
  ConsumedStatelessRuleCapacity?: number | undefined;

  /**
   * <p>The number of capacity units currently consumed by the policy's stateful rules.</p>
   * @public
   */
  ConsumedStatefulRuleCapacity?: number | undefined;

  /**
   * <p>The total number of domain name specifications across all domain list rule groups in the firewall policy that use the <code>stateful-domain-rulegroup</code> resource type.</p>
   * @public
   */
  ConsumedStatefulDomainCapacity?: number | undefined;

  /**
   * <p>The number of firewalls that are associated with this firewall policy.</p>
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall policy.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Any configuration errors that apply to the firewall policy. Network Firewall detects these
   *          errors asynchronously, after you create or update the policy, so an error can appear after
   *          the request that caused it has already succeeded. Each entry describes the problem and how to
   *          resolve it, and Network Firewall clears it automatically after you resolve the problem.</p>
   * @public
   */
  Errors?: FirewallPolicyError[] | undefined;

  /**
   * <p>The last time that the firewall policy was changed.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * <p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p>
 *          <p>
 *         Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references.
 *       </p>
 * @public
 */
export interface IPSetReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you are referencing in your rule group.</p>
   * @public
   */
  ReferenceArn?: string | undefined;
}

/**
 * <p>Contains a set of IP set references.</p>
 * @public
 */
export interface ReferenceSets {
  /**
   * <p>The list of IP set references.</p>
   * @public
   */
  IPSetReferences?: Record<string, IPSetReference> | undefined;
}

/**
 * <p>Metadata for a single firewall engine rule. Use it to disable a rule without removing it and to attach a description. When you describe a rule group in <code>RULES_STRING</code> format, Network Firewall renders a disabled rule and its description as <code>#</code> comment lines above the rule.</p>
 * @public
 */
export interface RuleMetadata {
  /**
   * <p>Specifies whether the rule is active. The default is <code>TRUE</code>. When you set this to <code>FALSE</code>, Network Firewall keeps the rule in the rule group but doesn't evaluate it against traffic and doesn't count it toward the rule group's consumed capacity.</p>
   * @public
   */
  RuleEnabled?: boolean | undefined;

  /**
   * <p>A description of the rule, up to 512 characters. The description can span multiple lines. A description line can't itself look like a firewall rule; to disable a rule, set <code>RuleEnabled</code> to <code>FALSE</code> instead.</p>
   * @public
   */
  RuleDescription?: string | undefined;
}

/**
 * <p>Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.</p>
 * @public
 */
export interface RuleOption {
  /**
   * <p>The keyword for the Suricata compatible rule option. You must include a <code>sid</code> (signature ID), and can optionally include other keywords. For information about Suricata compatible keywords, see <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html#rule-options">Rule options</a> in the Suricata documentation.</p>
   * @public
   */
  Keyword: string | undefined;

  /**
   * <p>The settings of the Suricata compatible rule option. Rule options have zero or more setting values, and the number of possible and required settings depends on the <code>Keyword</code>. For more information about the settings for specific options, see <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html#rule-options">Rule options</a>.</p>
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * <p>A single structured firewall engine rule, for use in a firewall engine rule group or as an embedded rule in a Next Generation policy. A firewall rule accepts, drops, or rejects traffic at a connection-state hook. For more information about authoring firewall engine rules, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface FirewallRule {
  /**
   * <p>The action that the firewall engine takes on traffic that matches the rule. The firewall engine supports the following actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCEPT</code> - Allow the traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DROP</code> - Block the traffic and discontinue inspection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> - Block the traffic and send a TCP reset packet back to the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT_DST</code> - Block the traffic and send a TCP reset packet to the destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT_BOTH</code> - Block the traffic and send a TCP reset packet to both the client and the destination.</p>
   *             </li>
   *          </ul>
   *          <p>You combine the action with an action scope, for example <code>accept:flow</code>. To send accepted traffic straight to its destination and skip the IPS engine, pair an accept action with the <code>BypassIPSEnabled</code> setting. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  Action: FirewallRuleAction | undefined;

  /**
   * <p>The scope that controls how much of the matched traffic the action applies to. The valid scopes depend on the action: <code>ACCEPT</code> supports all four scopes, and <code>DROP</code>, <code>REJECT</code>, <code>REJECT_DST</code>, and <code>REJECT_BOTH</code> support only <code>PACKET</code> and <code>FLOW</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PACKET</code> - The current packet only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK</code> - The current hook only. The firewall engine evaluates the connection again at the next hook.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TX</code> - The current transaction. The firewall engine continues to evaluate later transactions on the connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FLOW</code> - The entire connection. For an accept action, the connection skips the firewall engine's remaining hooks and advances to the IPS engine.</p>
   *             </li>
   *          </ul>
   *          <p>In a Suricata-compatible rule string, you write the scope in lowercase, for example <code>accept:flow</code>.</p>
   * @public
   */
  ActionScope: ActionScope | undefined;

  /**
   * <p>The connection-state hook at which the firewall engine evaluates the rule. The hook encodes both the protocol and the connection state, for example a TCP hook or a TLS <code>client_hello</code> hook. For the hooks that the firewall engine supports and how they map to the connection lifecycle, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i> and the <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/firewall/firewall-design.html">Suricata firewall mode documentation</a>.</p>
   * @public
   */
  Hook: HookKey | undefined;

  /**
   * <p>The protocol of the rule's hook. The protocol is derived from the hook and must match the hook's protocol prefix. Network Firewall rejects a rule whose protocol doesn't match its hook.</p>
   * @public
   */
  Protocol: FirewallRuleProtocol | undefined;

  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation. A firewall rule always compiles to a forward-direction rule, so you express inbound compared to outbound traffic through the source and destination addresses.</p>
   * @public
   */
  SourceIPs?: string | undefined;

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation. A firewall rule always compiles to a forward-direction rule, so you express inbound compared to outbound traffic through the source and destination addresses.</p>
   * @public
   */
  DestIPs?: string | undefined;

  /**
   * <p>The source ports to inspect for.</p>
   * @public
   */
  SourcePorts?: string | undefined;

  /**
   * <p>The destination ports to inspect for.</p>
   * @public
   */
  DestPorts?: string | undefined;

  /**
   * <p>Additional options for the rule. These are the Suricata <code>RuleOptions</code> settings, such as the signature ID (<code>sid</code>) and match keywords.</p>
   * @public
   */
  RuleOptions?: RuleOption[] | undefined;

  /**
   * <p>Whether Network Firewall automatically accepts the earlier application-layer hooks that a connection must pass to reach this rule's hook. Because the firewall engine is drop by default, accepting prior hooks lets you author a single rule for the hook you care about, instead of also authoring a rule for each earlier hook. This setting accepts the earlier application-layer hooks only; it doesn't accept the TCP layer. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  AcceptPriorHooks?: boolean | undefined;

  /**
   * <p>Specifies whether the rule also generates an alert log for the traffic that it matches. Turning on alerting adds a secondary alert action to the rule, so that Network Firewall logs the match in addition to taking the rule's primary action.</p>
   * @public
   */
  AlertEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether an accepted connection bypasses the IPS engine. By default, traffic that the firewall engine accepts advances to the IPS engine for threat inspection. When you turn on this setting for an accept rule, the accepted traffic goes straight to its destination without IPS inspection. You can set the bypass only on accept rules, and it uses the same scope as the rule's accept action; only the <code>flow</code> and <code>packet</code> scopes support a bypass. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  BypassIPSEnabled?: boolean | undefined;

  /**
   * <p>Optional metadata for the rule: whether the rule is enabled and a description. Metadata doesn't change how the rule matches or acts on traffic.</p>
   * @public
   */
  RuleMetadata?: RuleMetadata | undefined;
}

/**
 * <p>Stateful inspection criteria for a domain list rule group. </p>
 *          <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p>
 *          <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and
 *       <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface RulesSourceList {
  /**
   * <p>The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Explicit names. For example, <code>abc.example.com</code> matches only the domain <code>abc.example.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Names that use a domain wildcard, which you indicate with an initial '<code>.</code>'. For example,<code>.example.com</code> matches <code>example.com</code> and matches all subdomains of <code>example.com</code>, such as <code>abc.example.com</code> and <code>www.example.com</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Targets: string[] | undefined;

  /**
   * <p>The types of matching to perform against the domains in <code>Targets</code>. You can specify any combination of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> – Match the domain against the domain that the Amazon Route 53 Resolver resolved the connection's destination IP address for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP_HOST</code> – Match the domain against the <code>Host</code> header of HTTP traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS_SNI</code> – Match the domain against the Server Name Indication (SNI) of HTTPS traffic.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> matches on how the destination IP address was resolved, rather than on the domain that the client asserts in its TLS SNI or HTTP <code>Host</code> header. This target type takes effect when you configure resolved IP validation on the firewall policy. For more information, see the <code>Route53ResolvedIPValidation</code> firewall policy setting.</p>
   *          <p>Whether you include <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> changes what the generated rules match, together with <code>GeneratedRulesType</code>:</p>
   *          <ul>
   *             <li>
   *                <p>In an <code>ALLOWLIST</code>, combining <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> with <code>TLS_SNI</code> or <code>HTTP_HOST</code> requires both conditions to match: the SNI or <code>Host</code> header matches the domain, <b>and</b> the Route 53 Resolver resolved the destination IP address for that domain. Network Firewall allows the traffic only when both conditions match, so it blocks traffic that matches just one—for example, a spoofed <code>Host</code> header sent to an unresolved IP address.</p>
   *             </li>
   *             <li>
   *                <p>In a <code>DENYLIST</code>, or when <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> is the only target type, Network Firewall evaluates each condition independently: a match on either the domain (SNI or <code>Host</code>) or the resolved destination IP address triggers the rule.</p>
   *             </li>
   *             <li>
   *                <p>When you don't include <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code>, the generated rules match only on the SNI or <code>Host</code> header, without checking how the destination IP address was resolved.</p>
   *             </li>
   *          </ul>
   *          <p>An <code>ALLOWLIST</code> whose only target type is <code>AWS_ROUTE_53_RESOLVED_DOMAIN</code> is additive: it allows matching traffic but doesn't generate a default rule that drops non-matching traffic. Only the <code>TLS_SNI</code> and <code>HTTP_HOST</code> target types generate that default drop. To allow only the resolved domains and drop all other traffic, include a protocol target type as well.</p>
   * @public
   */
  TargetTypes: TargetType[] | undefined;

  /**
   * <p>Whether you want to apply allow, reject, alert, or drop behavior to the domains in your target list.</p>
   *          <note>
   *             <p>When logging is enabled and you choose Alert, traffic that matches the domain specifications
   *             generates an alert in the firewall's logs. Then, traffic either passes, is rejected, or drops based on other rules in the firewall policy.</p>
   *          </note>
   * @public
   */
  GeneratedRulesType: GeneratedRulesType | undefined;
}

/**
 * <p>The source of the rules for a firewall engine rule group. You provide the rules as a single Suricata-compatible rule string, as a list of structured firewall rules, or as a list of domain names to generate rules from.</p>
 * @public
 */
export interface FirewallRulesSource {
  /**
   * <p>Firewall engine rules, provided as a single Suricata-compatible rule string in firewall mode. Use this to provide rules that you've already written in the Suricata firewall-mode format. For the rule format, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  RulesString?: string | undefined;

  /**
   * <p>An array of individual firewall engine rules, provided as structured rules rather than as a rule string.</p>
   * @public
   */
  FirewallRules?: FirewallRule[] | undefined;

  /**
   * <p>Stateful inspection criteria for a domain list, specified as the list of domain names that Network Firewall generates firewall engine rules from.</p>
   * @public
   */
  RulesSourceList?: RulesSourceList | undefined;
}

/**
 * <p>A set of port ranges for use in the rules in a rule group. </p>
 * @public
 */
export interface PortSet {
  /**
   * <p>The set of port ranges.
   *       </p>
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * <p>Settings that are available for use in the rules in the <a>RuleGroup</a>
 *          where this is defined. See <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a> for usage.</p>
 * @public
 */
export interface RuleVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation. </p>
   * @public
   */
  IPSets?: Record<string, IPSet> | undefined;

  /**
   * <p>A list of port ranges. </p>
   * @public
   */
  PortSets?: Record<string, PortSet> | undefined;
}

/**
 * <p>The object that defines a firewall engine rule group, for use in a Next Generation policy. A firewall engine rule group provides access-control rules that the firewall engine evaluates at connection-state hooks. You provide the rules as a Suricata-compatible rule string, as structured firewall rules, or generated from a list of domain names. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface FirewallRuleGroup {
  /**
   * <p>The stateful inspection criteria for the firewall engine rule group.</p>
   * @public
   */
  RulesSource: FirewallRulesSource | undefined;

  /**
   * <p>Settings that are available for use in the rules in the firewall engine rule group, such as IP set and port variables that the rules reference.</p>
   * @public
   */
  RuleVariables?: RuleVariables | undefined;

  /**
   * <p>The list of a rule group's reference sets. Firewall engine rule groups don't support IP set references (reference sets); this setting applies to IPS engine rule groups. To use CIDR ranges in firewall engine rules, use rule variables instead.</p>
   * @public
   */
  ReferenceSets?: ReferenceSets | undefined;
}

/**
 * <p>A single entry in the firewall section of a Next Generation policy. An entry either references an existing firewall engine rule group by ARN or embeds a rule group directly in the policy, and it carries the priority that sets the rule group's evaluation order within the firewall section.</p>
 * @public
 */
export interface FirewallRuleGroupEntry {
  /**
   * <p>The priority of the rule group entry within the firewall section. Network Firewall evaluates the firewall section's entries in order of increasing priority value. Each entry in the firewall section must have a unique priority.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing firewall engine rule group to reference in this entry. Provide either <code>ResourceArn</code> to reference an existing rule group or <code>InlineRuleGroup</code> to embed a rule group in the policy.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>A firewall engine rule group defined directly in the policy, instead of referenced by ARN. Provide either <code>InlineRuleGroup</code> to embed a rule group or <code>ResourceArn</code> to reference an existing rule group. An embedded rule group can't use a domain list rules source; to filter on a domain list, reference a standalone rule group by ARN instead.</p>
   * @public
   */
  InlineRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * <p>The source of the rules for an IPS engine rule group.</p>
 * @public
 */
export interface IpsRulesSource {
  /**
   * <p>IPS engine rules, provided as a single Suricata-compatible rule string. For the rule format, see <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html">Rules Format</a> on the Suricata website.</p>
   * @public
   */
  RulesString?: string | undefined;
}

/**
 * <p>The object that defines an IPS engine rule group, for use in a Next Generation policy. An IPS engine rule group provides threat-detection rules that the IPS engine evaluates in the context of the traffic flow. You provide the rules as a Suricata-compatible rule string. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-v2.html">Rule groups for a firewall using a Next Generation policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface IpsRuleGroup {
  /**
   * <p>The stateful inspection criteria for the IPS engine rule group.</p>
   * @public
   */
  RulesSource: IpsRulesSource | undefined;

  /**
   * <p>Settings that are available for use in the rules in the IPS engine rule group.</p>
   * @public
   */
  RuleVariables?: RuleVariables | undefined;

  /**
   * <p>The list of a rule group's reference sets.</p>
   * @public
   */
  ReferenceSets?: ReferenceSets | undefined;
}

/**
 * <p>The setting that allows the policy owner to change the behavior of an IPS engine rule group within a Next Generation policy.</p>
 * @public
 */
export interface IpsRuleGroupOverride {
  /**
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.</p>
   * @public
   */
  Action?: OverrideAction | undefined;
}

/**
 * <p>A single entry in the IPS section of a Next Generation policy. An entry either references an existing IPS engine rule group by ARN or embeds a rule group directly in the policy. IPS section entries don't use a priority.</p>
 * @public
 */
export interface IpsRuleGroupEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of an existing IPS engine rule group to reference in this entry. Provide either <code>ResourceArn</code> to reference an existing rule group or <code>InlineRuleGroup</code> to embed a rule group in the policy.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>An IPS engine rule group defined directly in the policy, instead of referenced by ARN. Provide either <code>InlineRuleGroup</code> to embed a rule group or <code>ResourceArn</code> to reference an existing rule group.</p>
   * @public
   */
  InlineRuleGroup?: IpsRuleGroup | undefined;

  /**
   * <p>The setting that allows the policy owner to change the behavior of the IPS engine rule group within this policy, such as changing a managed rule group's action from <code>DROP</code> to <code>ALERT</code>.</p>
   * @public
   */
  Override?: IpsRuleGroupOverride | undefined;
}

/**
 * <p>Configuration settings for the handling of stateful traffic in a Next Generation policy.</p>
 * @public
 */
export interface StatefulEngineOptionsV2 {
  /**
   * <p>How Network Firewall handles traffic on a network connection that breaks midstream. A Next Generation policy supports <code>DROP</code> and <code>REJECT</code>. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stream-exception-policy.html">Stream exception policy options in your firewall policy</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  StreamExceptionPolicy?: StreamExceptionPolicyV2 | undefined;

  /**
   * <p>The amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle.</p>
   * @public
   */
  FlowTimeouts?: FlowTimeouts | undefined;
}

/**
 * <p>The object that defines a Next Generation policy. This, along with the <a>FirewallPolicyV2Response</a>, define the policy.</p>
 *          <p>A Next Generation policy defines how the firewall engine and IPS engine inspect and control your VPC network traffic. You define the policy as a firewall section and an IPS section, each a collection of rule groups, along with policy-wide settings such as the policy mode and default actions. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies-v2.html">Next Generation policies</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface FirewallPolicyV2 {
  /**
   * <p>The firewall section of the policy—the rule groups that the firewall engine evaluates. Each entry references an existing firewall engine rule group or embeds a rule group directly in the policy, and each entry has a unique priority that sets its evaluation order within the section.</p>
   * @public
   */
  FirewallRuleGroupEntries?: FirewallRuleGroupEntry[] | undefined;

  /**
   * <p>The IPS section of the policy—the rule groups that the IPS engine evaluates. Each entry references an existing IPS engine rule group or embeds a rule group directly in the policy. IPS section entries don't use a priority.</p>
   * @public
   */
  IpsRuleGroupEntries?: IpsRuleGroupEntry[] | undefined;

  /**
   * <p>Indicates whether the policy's engines enforce their verdicts or only report them. In <code>ENFORCE</code> mode, the firewall engine and IPS engine apply their verdicts to traffic. In <code>MONITOR</code> mode, the engines evaluate traffic and generate logs and metrics, but don't block traffic, so you can observe how a policy would behave before you enforce it. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies-v2.html">Next Generation policies</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  PolicyMode?: PolicyMode | undefined;

  /**
   * <p>The action that the firewall engine takes on traffic that doesn't match any firewall engine rule at a hook. The firewall engine is drop by default. You can set the default action to one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DROP</code> - Block the traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPT</code> - Allow the traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> - Block the traffic and send a TCP reset packet back to the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Allow the traffic and generate an alert log for the traffic that reaches the default action at every hook. This is distinct from setting the policy mode to <code>MONITOR</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies-v2.html">Next Generation policies</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  FirewallDefaultAction?: PolicyDefaultAction | undefined;

  /**
   * <p>Additional options governing how the engines handle stateful traffic, such as the stream exception policy and flow timeouts.</p>
   * @public
   */
  StatefulEngineOptions?: StatefulEngineOptionsV2 | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration to use to decrypt traffic for inspection. Next Generation policies support session holding only. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Inspecting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * <p>Contains variables that you can use to override default Suricata settings in your Next Generation policy.</p>
   * @public
   */
  PolicyVariables?: PolicyVariables | undefined;

  /**
   * <p>The settings that enable resolved IP validation for the Next Generation policy.
   *          Resolved IP validation verifies that a connection's destination IP address is one that the
   *          Amazon Route 53 Resolver returned in a DNS response for a domain. A VPC that's associated with
   *          the Route 53 Resolver DNS Firewall rule group that you specify must send the response.
   *          This checks how the destination IP address was obtained, instead of relying only on the
   *          domain that the client asserts in its TLS Server Name Indication (SNI) or HTTP
   *          <code>Host</code> header. For more information, see
   *          <a>Route53ResolvedIPValidation</a>.</p>
   * @public
   */
  Route53ResolvedIPValidation?: Route53ResolvedIPValidation | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyV2Request {
  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  FirewallPolicyV2Name: string | undefined;

  /**
   * <p>The rule groups and other settings that define the Next Generation policy.</p>
   * @public
   */
  FirewallPolicyV2: FirewallPolicyV2 | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * <p>The high-level properties of a Next Generation policy. This includes the policy's identity, status, consumed capacity, and association count. Network Firewall returns this object in response to the Next Generation policy operations. To retrieve the policy's rule groups and settings, use the <code>FirewallPolicyV2</code> object.</p>
 * @public
 */
export interface FirewallPolicyV2Response {
  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  FirewallPolicyV2Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Next Generation policy.</p>
   * @public
   */
  FirewallPolicyV2Arn: string | undefined;

  /**
   * <p>The unique identifier of the Next Generation policy. Network Firewall assigns this identifier when you create the policy.</p>
   * @public
   */
  FirewallPolicyV2Id: string | undefined;

  /**
   * <p>A description of the Next Generation policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the Next Generation policy. A policy must be in the <code>ACTIVE</code> state before you can use it in a firewall.</p>
   * @public
   */
  FirewallPolicyV2Status?: ResourceStatus | undefined;

  /**
   * <p>Additional information about the current status of the Next Generation policy.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The key-value tag pairs that are associated with the Next Generation policy.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The number of firewall engine rule capacity units that the policy's firewall section currently consumes.</p>
   * @public
   */
  ConsumedFirewallRuleCapacity?: number | undefined;

  /**
   * <p>The number of IPS engine rule capacity units that the policy's IPS section currently consumes.</p>
   * @public
   */
  ConsumedIpsRuleCapacity?: number | undefined;

  /**
   * <p>The number of IPS domain list capacity units that the policy's IPS section currently consumes.</p>
   * @public
   */
  ConsumedIpsDomainCapacity?: number | undefined;

  /**
   * <p>The number of firewalls that are associated with the Next Generation policy.</p>
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your Next Generation policy.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Any configuration errors that apply to the Next Generation policy. Network Firewall detects these errors asynchronously, after you create or update the policy, so an error can appear after the request that caused it has already succeeded. Each entry describes the problem and how to resolve it, and Network Firewall clears it automatically after you resolve the problem.</p>
   * @public
   */
  Errors?: FirewallPolicyError[] | undefined;

  /**
   * <p>The last time that the Next Generation policy was changed.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateFirewallPolicyV2Response {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of the Next Generation policy. This, along with the <a>FirewallPolicyV2</a>, define the policy. You can retrieve all objects for a Next Generation policy by calling <a>DescribeFirewallPolicyV2</a>.</p>
   * @public
   */
  FirewallPolicyV2Response: FirewallPolicyV2Response | undefined;
}

/**
 * <p>The basic rule criteria for Network Firewall to use to inspect packet headers in stateful
 *          traffic flow inspection. Traffic flows that match the criteria are a match for the
 *          corresponding <a>StatefulRule</a>. </p>
 * @public
 */
export interface Header {
  /**
   * <p>The protocol to inspect for. To specify all, you can use <code>IP</code>, because all traffic on Amazon Web Services and on the internet is IP.</p>
   * @public
   */
  Protocol: StatefulRuleProtocol | undefined;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation.
   *           To match with any address, specify <code>ANY</code>. </p>
   *          <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  SourcePort: string | undefined;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection
   *          matches bidirectional traffic, both from the source to the destination and from the
   *          destination to the source. If set to <code>FORWARD</code>, the inspection only matches
   *          traffic going from the source to the destination. </p>
   * @public
   */
  Direction: StatefulRuleDirection | undefined;

  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation.
   *           To match with any address, specify <code>ANY</code>. </p>
   *          <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   * @public
   */
  Destination: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  DestinationPort: string | undefined;
}

/**
 * <p>A single Suricata rules specification, for use in a stateful rule group.
 *        Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options.
 *        For information about the Suricata <code>Rules</code> format, see
 *                                         <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html">Rules Format</a> on the Suricata website. </p>
 * @public
 */
export interface StatefulRule {
  /**
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow
   *          matches the stateful rule criteria. For all actions, Network Firewall performs the specified
   *          action and discontinues stateful inspection of the traffic flow. </p>
   *          <p>The actions for a stateful rule are defined as follows: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PASS</b> - Permits the packets to go to the
   *                intended destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DROP</b> - Blocks the packets from going to
   *                the intended destination and sends an alert log message, if alert logging is configured in the <a>Firewall</a>
   *                   <a>LoggingConfiguration</a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ALERT</b> - Sends an alert log message, if alert logging is configured in the <a>Firewall</a>
   *                   <a>LoggingConfiguration</a>. </p>
   *                <p>You can use this action to test a rule that you intend to use to drop traffic. You
   *                can enable the rule with <code>ALERT</code> action, verify in the logs that the rule
   *                is filtering as you want, then change the action to <code>DROP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECT</b> - Drops traffic that matches the conditions of the stateful rule, and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and an RST bit contained in the TCP header flags. REJECT is available only for TCP traffic. This option doesn't support FTP or IMAP protocols.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Action: StatefulAction | undefined;

  /**
   * <p>The stateful inspection criteria for this rule, used to inspect traffic flows.
   *       </p>
   * @public
   */
  Header: Header | undefined;

  /**
   * <p>Additional options for the rule. These are the Suricata <code>RuleOptions</code> settings.</p>
   * @public
   */
  RuleOptions: RuleOption[] | undefined;
}

/**
 * <p>A single port range specification. This is used for source and destination port ranges
 *          in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and
 *             <code>DestinationPorts</code> settings. </p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The lower limit of the port range. This must be less than or equal to the
   *             <code>ToPort</code> specification. </p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>The upper limit of the port range. This must be greater than or equal to the
   *             <code>FromPort</code> specification. </p>
   * @public
   */
  ToPort: number | undefined;
}

/**
 * <p>TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.</p>
 * @public
 */
export interface TCPFlagField {
  /**
   * <p>Used in conjunction with the <code>Masks</code> setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the <code>Masks</code> setting.</p>
   *          <p>For the flags that are specified in the masks setting, the following must be true for the packet to match: </p>
   *          <ul>
   *             <li>
   *                <p>The ones that are set in this flags setting must be set in the packet. </p>
   *             </li>
   *             <li>
   *                <p>The ones that are not set in this flags setting must also not be set in the packet. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Flags: TCPFlag[] | undefined;

  /**
   * <p>The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.</p>
   * @public
   */
  Masks?: TCPFlag[] | undefined;
}

/**
 * <p>Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. </p>
 * @public
 */
export interface MatchAttributes {
  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation. If not
   *          specified, this matches with any source address. </p>
   * @public
   */
  Sources?: Address[] | undefined;

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation. If not
   *          specified, this matches with any destination address. </p>
   * @public
   */
  Destinations?: Address[] | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   *          <p> If not specified, this matches with any source port.</p>
   *          <p>This setting is only used for protocols 6 (TCP) and 17 (UDP).</p>
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   *          <p>This setting is only used for protocols 6 (TCP) and 17 (UDP). </p>
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * <p>The protocols to inspect for, specified using the assigned internet protocol number (IANA)
   *  for each protocol. If not specified, this matches with any protocol.</p>
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * <p>The TCP flags and masks to inspect for. If not specified, this matches with any
   *          settings. This setting is only used for protocol 6 (TCP).</p>
   * @public
   */
  TCPFlags?: TCPFlagField[] | undefined;
}

/**
 * <p>The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching
 *          criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on
 *          the packet.</p>
 * @public
 */
export interface RuleDefinition {
  /**
   * <p>Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. </p>
   * @public
   */
  MatchAttributes: MatchAttributes | undefined;

  /**
   * <p>The actions to take on a packet that matches one of the stateless rule definition's
   *          match attributes. You must specify a standard action and you can add custom actions. </p>
   *          <note>
   *             <p>Network Firewall only forwards a packet for stateful rule inspection if you specify
   *                <code>aws:forward_to_sfe</code> for a rule that the packet matches, or if the packet
   *             doesn't match any stateless rule and you specify <code>aws:forward_to_sfe</code> for the
   *                <code>StatelessDefaultActions</code> setting for the <a>FirewallPolicy</a>.</p>
   *          </note>
   *          <p>For every rule, you must specify exactly one of the following standard actions. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>aws:pass</b> - Discontinues all inspection of
   *                the packet and permits it to go to its intended destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>aws:drop</b> - Discontinues all inspection of
   *                the packet and blocks it from going to its intended destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>aws:forward_to_sfe</b> - Discontinues
   *                stateless inspection of the packet and forwards it to the stateful rule engine for
   *                inspection. </p>
   *             </li>
   *          </ul>
   *          <p>Additionally, you can specify a custom action.
   *          To
   *          do this, you define a custom action by name and type, then provide the name you've assigned
   *          to the action in this <code>Actions</code> setting. For information about the options, see
   *             <a>CustomAction</a>. </p>
   *          <p>To provide more than one action in this setting, separate the settings with a comma. For
   *          example, if you have a custom <code>PublishMetrics</code> action that you've named
   *             <code>MyMetricsAction</code>, then you could specify the standard action
   *             <code>aws:pass</code> and the custom action with <code>[“aws:pass”,
   *             “MyMetricsAction”]</code>. </p>
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * <p>A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.</p>
 * @public
 */
export interface StatelessRule {
  /**
   * <p>Defines the stateless 5-tuple packet inspection criteria and the action to take on a
   *          packet that matches the criteria. </p>
   * @public
   */
  RuleDefinition: RuleDefinition | undefined;

  /**
   * <p>Indicates the order in which to run this rule relative to all of the
   *          rules that are defined for a stateless rule group. Network Firewall evaluates the rules in a
   *          rule group starting with the lowest priority setting. You must ensure that the priority
   *          settings are unique for the rule group. </p>
   *          <p>Each stateless rule group uses exactly one <code>StatelessRulesAndCustomActions</code>
   *          object, and each <code>StatelessRulesAndCustomActions</code> contains exactly one
   *             <code>StatelessRules</code> object. To ensure unique priority settings for your rule
   *          groups, set unique priorities for the stateless rules that you define inside any single
   *             <code>StatelessRules</code> object.</p>
   *          <p>You can change the priority settings of your rules at any time. To make it easier to
   *          insert rules later, number them so there's a wide range in between, for example use 100,
   *          200, and so on. </p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * <p>Stateless inspection criteria. Each stateless rule group uses exactly one of these data
 *          types to define its stateless rules. </p>
 * @public
 */
export interface StatelessRulesAndCustomActions {
  /**
   * <p>Defines the set of stateless rules for use in a stateless rule group. </p>
   * @public
   */
  StatelessRules: StatelessRule[] | undefined;

  /**
   * <p>Defines an array of individual custom action definitions that are available for use by
   *          the stateless rules in this <code>StatelessRulesAndCustomActions</code> specification. You
   *          name each custom action that you define, and then you can use it by name in your <a>StatelessRule</a>
   *             <a>RuleDefinition</a>
   *             <code>Actions</code> specification.</p>
   * @public
   */
  CustomActions?: CustomAction[] | undefined;
}

/**
 * <p>The stateless or stateful rules definitions for use in a single rule group. Each rule
 *          group requires a single <code>RulesSource</code>. You can use an instance of this for
 *          either stateless rules or stateful rules. </p>
 * @public
 */
export interface RulesSource {
  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible rules. Suricata is an open-source threat detection framework that includes a standard
   *          rule-based language for network traffic inspection.</p>
   *          <p>These rules contain the inspection criteria and the action to take for traffic that
   *          matches the criteria, so this type of rule group doesn't have a separate action
   *          setting.</p>
   *          <note>
   *             <p>You can't use the <code>priority</code> keyword if the <code>RuleOrder</code> option in <a>StatefulRuleOptions</a> is set to  <code>STRICT_ORDER</code>.</p>
   *          </note>
   * @public
   */
  RulesString?: string | undefined;

  /**
   * <p>Stateful inspection criteria for a domain list rule group. </p>
   * @public
   */
  RulesSourceList?: RulesSourceList | undefined;

  /**
   * <p>An array of individual stateful rules inspection criteria to be used together in a stateful rule group.
   *        Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options.
   *        For information about the Suricata <code>Rules</code> format, see
   *                                         <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/rules/intro.html">Rules Format</a> on the Suricata website. </p>
   * @public
   */
  StatefulRules?: StatefulRule[] | undefined;

  /**
   * <p>Stateless inspection criteria to be used in a stateless rule group. </p>
   * @public
   */
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions | undefined;
}

/**
 * <p>Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.</p>
 * @public
 */
export interface StatefulRuleOptions {
  /**
   * <p>Indicates how to manage the order of the rule evaluation for the rule group. <code>DEFAULT_ACTION_ORDER</code> is
   *              the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them
   *              based on certain settings. For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   * @public
   */
  RuleOrder?: RuleOrder | undefined;
}

/**
 * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
 *          <p>Network Firewall uses a rule group to inspect and control network traffic.
 *     You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their
 *     traffic flow. </p>
 *          <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from
 *     more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
 * @public
 */
export interface RuleGroup {
  /**
   * <p>Settings that are available for use in the rules in the rule group. You can only use
   *          these for stateful rule groups. </p>
   * @public
   */
  RuleVariables?: RuleVariables | undefined;

  /**
   * <p>The list of a rule group's reference sets.</p>
   * @public
   */
  ReferenceSets?: ReferenceSets | undefined;

  /**
   * <p>The stateful rules or stateless rules for the rule group. </p>
   * @public
   */
  RulesSource: RulesSource | undefined;

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful
   *        rule group must have stateful rule options settings that are compatible with these settings. Some limitations apply; for more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-limitations-caveats.html">Strict evaluation order</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  StatefulRuleOptions?: StatefulRuleOptions | undefined;
}

/**
 * <p>High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>.</p>
 * @public
 */
export interface SourceMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group that your own rule group is copied from.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The update token of the Amazon Web Services managed rule group that your own rule group is copied from. To determine the update token for the managed rule group, call <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html#networkfirewall-DescribeRuleGroup-response-UpdateToken">DescribeRuleGroup</a>.</p>
   * @public
   */
  SourceUpdateToken?: string | undefined;
}

/**
 * <p>A complex type that specifies which Suricata rule metadata fields to use when displaying threat information. Contains:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>RuleOptions</code> - The Suricata rule options fields to extract and display</p>
 *             </li>
 *          </ul>
 *          <p>These settings affect how threat information appears in both the console and API responses. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.</p>
 * @public
 */
export interface SummaryConfiguration {
  /**
   * <p>Specifies the selected rule options returned by <a>DescribeRuleGroupSummary</a>.</p>
   * @public
   */
  RuleOptions?: SummaryRuleOption[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * <p>An object that defines the rule group rules. </p>
   *          <note>
   *             <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p>
   *          </note>
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * <p>An object that defines the rules in a firewall engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;

  /**
   * <p>An object that defines the rules in an IPS engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  IpsRuleGroup?: IpsRuleGroup | undefined;

  /**
   * <p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>
   * @public
   */
  Rules?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: RuleGroupType | undefined;

  /**
   * <p>A description of the rule group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation.
   *       When you update a rule group, you are limited to this capacity. When you reference a rule group
   *       from a firewall policy, Network Firewall reserves this capacity for the rule group. </p>
   *          <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling
   *       <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>
   *          <note>
   *             <p>You can't change or exceed this capacity when you update the rule group, so leave
   *             room for your rule group to grow. </p>
   *          </note>
   *          <p>
   *             <b>Capacity for a stateless rule group</b>
   *          </p>
   *          <p>For a stateless rule group, the capacity required is the sum of the capacity
   *          requirements of the individual rules that you expect to have in the rule group. </p>
   *          <p>To calculate the capacity requirement of a single rule, multiply the capacity
   *          requirement values of each of the rule's match settings:</p>
   *          <ul>
   *             <li>
   *                <p>A match setting with no criteria specified has a value of 1. </p>
   *             </li>
   *             <li>
   *                <p>A match setting with <code>Any</code> specified has a value of 1. </p>
   *             </li>
   *             <li>
   *                <p>All other match settings have a value equal to the number of elements provided in
   *                the setting. For example, a protocol setting ["UDP"] and a source setting
   *                ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value
   *                of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3.
   *             </p>
   *             </li>
   *          </ul>
   *          <p>A rule with no criteria specified in any of its match settings has a capacity
   *          requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting
   *          ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification
   *          for each of the other match settings has a capacity requirement of 6. </p>
   *          <p>
   *             <b>Capacity for a stateful rule group</b>
   *          </p>
   *          <p>For a stateful rule group, the minimum capacity required is the number of individual rules that
   *          you expect to have in the rule group. </p>
   * @public
   */
  Capacity: number | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your rule group resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.</p>
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to <code>TRUE</code>, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set <code>DryRun</code> to <code>TRUE</code>.</p>
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;

  /**
   * <p>An object that contains a <code>RuleOptions</code> array of strings.
   *          You use <code>RuleOptions</code> to determine which of the following <a>RuleSummary</a> values are returned in response to <code>DescribeRuleGroupSummary</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Metadata</code> - returns</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Msg</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SID</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
 * @public
 */
export interface RuleGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <note>
   *             <p>If this response is for a create request that had <code>DryRun</code> set to
   *                <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid
   *             resource.</p>
   *          </note>
   * @public
   */
  RuleGroupArn: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * <p>The unique identifier for the rule group. </p>
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * <p>A description of the rule group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * <p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation.
   *       When you update a rule group, you are limited to this capacity. When you reference a rule group
   *       from a firewall policy, Network Firewall reserves this capacity for the rule group. </p>
   *          <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling
   *       <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>Detailed information about the current status of a rule group. </p>
   * @public
   */
  RuleGroupStatus?: ResourceStatus | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The number of capacity units currently consumed by the rule group rules. </p>
   * @public
   */
  ConsumedCapacity?: number | undefined;

  /**
   * <p>The number of firewall policies that use this rule group.</p>
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your rule group.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to track the version updates made to the originating rule group.</p>
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service SNS topic that's
   * used to record changes to the managed rule group. You can subscribe to the SNS topic to receive
   * notifications when the managed rule group is modified, such as for new versions and for version
   * expiration. For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide.</a>.</p>
   * @public
   */
  SnsTopic?: string | undefined;

  /**
   * <p>The last time that the rule group was changed.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The list of analysis results for <code>AnalyzeRuleGroup</code>. If you set <code>AnalyzeRuleGroup</code> to <code>TRUE</code> in <a>CreateRuleGroup</a>, <a>UpdateRuleGroup</a>, or <a>DescribeRuleGroup</a>, Network Firewall analyzes the rule group and identifies the rules that might adversely effect your firewall's functionality. For example, if Network Firewall detects a rule that's routing traffic asymmetrically, which impacts the service's ability to properly process traffic, the service includes the rule in the list of analysis results.</p>
   * @public
   */
  AnalysisResults?: AnalysisResult[] | undefined;

  /**
   * <p>A complex type containing the currently selected rule option fields that will be displayed for rule summarization returned by <a>DescribeRuleGroupSummary</a>.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>RuleOptions</code> specified in <a>SummaryConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Rule metadata organization preferences</p>
   *             </li>
   *          </ul>
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * <p>The domains that a <a>ServerCertificateScope</a> matches for SSL/TLS inspection on a proxy mode firewall.</p>
 * @public
 */
export interface DomainMatch {
  /**
   * <p>The domains to match. You can specify an exact domain, such as <code>example.com</code>, or a domain with a single leading wildcard label, such as <code>*.example.com</code>. You can specify from 1 to 50 domains, and each domain can be up to 255 characters long.</p>
   * @public
   */
  Domains: string[] | undefined;
}

/**
 * <p>Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.</p>
 * @public
 */
export interface ServerCertificateScope {
  /**
   * <p>The source IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this
   * matches with any source address.</p>
   * @public
   */
  Sources?: Address[] | undefined;

  /**
   * <p>The destination IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this
   * matches with any destination address.</p>
   * @public
   */
  Destinations?: Address[] | undefined;

  /**
   * <p>The source ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any source port.</p>
   *          <p>You can specify individual ports, for example <code>1994</code>, and you can specify port ranges, such as <code>1990:1994</code>.</p>
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * <p>The destination ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any destination port.</p>
   *          <p>You can specify individual ports, for example <code>1994</code>, and you can specify port ranges, such as <code>1990:1994</code>.</p>
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * <p>The protocols to inspect for, specified using the assigned internet protocol number (IANA)
   *  for each protocol. If not specified, this matches with any protocol.</p>
   *          <p>Network Firewall currently supports only TCP.</p>
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * <p>The domains that this scope matches, based on the host name in the client's HTTP CONNECT request. Domain matching applies only to proxy mode firewalls. If you specify <code>DomainMatch</code>, you must set <code>DeploymentMode</code> to <code>EXPLICIT_PROXY_ONLY</code>. If you don't specify <code>DomainMatch</code>, the scope matches traffic by its source, destination, ports, and protocols only.</p>
   * @public
   */
  DomainMatch?: DomainMatch | undefined;

  /**
   * <p>Whether the firewall decrypts traffic that matches this scope. You can choose from the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DECRYPT</code> - The firewall decrypts the traffic for inspection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BYPASS</code> - The firewall doesn't decrypt the traffic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DecryptionAction?: DecryptionAction | undefined;

  /**
   * <p>The type of firewall that this scope applies to. If you don't specify a value, the scope applies to both types, the same as <code>ALL</code>. You can choose from the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - The scope applies to both transparent firewalls and proxy mode firewalls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSPARENT_FIREWALL_ONLY</code> - The scope applies only to transparent firewalls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPLICIT_PROXY_ONLY</code> - The scope applies only to proxy mode firewalls. A scope that specifies <code>DomainMatch</code> must use this value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeploymentMode?: TLSInspectionScopeDeploymentMode | undefined;
}

/**
 * <p>Any Certificate Manager (ACM) Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a <a>ServerCertificateConfiguration</a>. Used in a <a>TLSInspectionConfiguration</a> for inspection of inbound traffic to your firewall. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate </a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>.</p>
 * @public
 */
export interface ServerCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>Configures the Certificate Manager certificates and scope that Network Firewall uses to decrypt and re-encrypt traffic using a <a>TLSInspectionConfiguration</a>. You can configure <code>ServerCertificates</code> for inbound SSL/TLS inspection, a <code>CertificateAuthorityArn</code> for outbound SSL/TLS inspection, or both. For information about working with certificates for TLS inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html"> Using SSL/TLS server certficiates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
 *          <note>
 *             <p>If a server certificate that's associated with your <a>TLSInspectionConfiguration</a> is revoked, deleted, or expired it can result in client-side TLS errors.</p>
 *          </note>
 * @public
 */
export interface ServerCertificateConfiguration {
  /**
   * <p>The list of server certificates to use for inbound SSL/TLS inspection.</p>
   * @public
   */
  ServerCertificates?: ServerCertificate[] | undefined;

  /**
   * <p>A list of scopes.</p>
   * @public
   */
  Scopes?: ServerCertificateScope[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported certificate authority (CA) certificate within Certificate Manager (ACM) to use for outbound SSL/TLS inspection.</p>
   *          <p>The following limitations apply:</p>
   *          <ul>
   *             <li>
   *                <p>You can use CA certificates that you imported into ACM, but you can't generate CA certificates with ACM.</p>
   *             </li>
   *             <li>
   *                <p>You can't use certificates issued by Private Certificate Authority.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about configuring certificates for outbound inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html">Using SSL/TLS certificates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>
   *          <p>For information about working with certificates in ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status. If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a <code>CertificateAuthorityArn</code> in <a>ServerCertificateConfiguration</a>.</p>
   * @public
   */
  CheckCertificateRevocationStatus?: CheckCertificateRevocationStatusActions | undefined;

  /**
   * <p>What the firewall does with SSL/TLS traffic that doesn't match any scope in this server certificate configuration. This setting applies only to proxy mode firewalls. If you don't specify a value, the firewall uses <code>BYPASS</code>. You can choose from the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BYPASS</code> - The firewall doesn't decrypt the traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DECRYPT</code> - The firewall decrypts the traffic for inspection. You can use <code>DECRYPT</code> only if every scope in the configuration sets <code>DeploymentMode</code> to <code>EXPLICIT_PROXY_ONLY</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DefaultDecryptionBehavior?: DecryptionAction | undefined;
}

/**
 * <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
 *          <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p>
 *          <p>To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see
 *     <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Inspecting SSL/TLS traffic with TLS
 * inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
 * @public
 */
export interface TLSInspectionConfiguration {
  /**
   * <p>Lists the server certificate configurations that are associated with the TLS configuration.</p>
   * @public
   */
  ServerCertificateConfigurations?: ServerCertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateTLSInspectionConfigurationRequest {
  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   * @public
   */
  TLSInspectionConfigurationName: string | undefined;

  /**
   * <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   *          <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p>
   *          <p>To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see
   *     <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Inspecting SSL/TLS traffic with TLS
   * inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TLSInspectionConfiguration: TLSInspectionConfiguration | undefined;

  /**
   * <p>A description of the TLS inspection configuration. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * <p>The high-level properties of a TLS inspection configuration. This, along with the <code>TLSInspectionConfiguration</code>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <code>DescribeTLSInspectionConfiguration</code>.</p>
 * @public
 */
export interface TLSInspectionConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   * @public
   */
  TLSInspectionConfigurationArn: string | undefined;

  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   * @public
   */
  TLSInspectionConfigurationName: string | undefined;

  /**
   * <p>A unique identifier for the TLS inspection configuration. This ID is returned in the responses to create and list commands. You provide it to operations such as update and delete.</p>
   * @public
   */
  TLSInspectionConfigurationId: string | undefined;

  /**
   * <p>Detailed information about the current status of a <a>TLSInspectionConfiguration</a>. You can retrieve this for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a> and providing the TLS inspection configuration name and ARN.</p>
   * @public
   */
  TLSInspectionConfigurationStatus?: ResourceStatus | undefined;

  /**
   * <p>A description of the TLS inspection configuration. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The last time that the TLS inspection configuration was changed.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The number of firewall policies that use this TLS inspection configuration.</p>
   * @public
   */
  NumberOfAssociations?: number | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A list of the certificates associated with the TLS inspection configuration.</p>
   * @public
   */
  Certificates?: TlsCertificateData[] | undefined;

  /**
   * <p>Contains metadata about an Certificate Manager certificate.</p>
   * @public
   */
  CertificateAuthority?: TlsCertificateData | undefined;
}

/**
 * @public
 */
export interface CreateTLSInspectionConfigurationResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p>
   *          <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC where you want to create a firewall endpoint. </p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The ID for a subnet that's used in an association with a firewall. This is used in
   *       <code>CreateFirewall</code>, <code>AssociateSubnets</code>, and <code>CreateVpcEndpointAssociation</code>. Network Firewall
   *          creates an instance of the associated firewall in each subnet that you specify, to filter
   *          traffic in the subnet's Availability Zone.</p>
   * @public
   */
  SubnetMapping: SubnetMapping | undefined;

  /**
   * <p>A description of the VPC endpoint association. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A VPC endpoint association defines a single subnet to use for a firewall endpoint for a <code>Firewall</code>.
 *        You can define VPC endpoint associations only in the Availability Zones that already have
 *            a subnet mapping defined in the <code>Firewall</code> resource. </p>
 *          <note>
 *             <p>You can retrieve the list of Availability Zones that are available for use by calling <code>DescribeFirewallMetadata</code>.</p>
 *          </note>
 *          <p>To manage firewall endpoints, first, in the <code>Firewall</code> specification, you specify a single VPC and one subnet
 *            for each of the Availability Zones where you want to use the firewall. Then you can define additional endpoints as
 *            VPC endpoint associations. </p>
 *          <p>You can use VPC endpoint associations to expand the protections of the firewall as follows: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Protect multiple VPCs with a single firewall</b> - You can use the firewall to protect other VPCs, either in your account or in accounts where the firewall is shared. You can only specify Availability Zones that already have a firewall endpoint defined in the <code>Firewall</code> subnet mappings.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Define multiple firewall endpoints for a VPC in an Availability Zone</b> - You can create additional firewall endpoints for the VPC that you have defined in the firewall, in any Availability Zone that already has an endpoint defined in the <code>Firewall</code> subnet mappings. You can create multiple VPC endpoint associations for any other VPC where you use the firewall.</p>
 *             </li>
 *          </ul>
 *          <p>You can use Resource Access Manager to share a <code>Firewall</code> that you own with other accounts, which gives them the ability to use the firewall
 *       to create VPC endpoint associations. For information about sharing a firewall, see <code>PutResourcePolicy</code>
 *           in this guide and see
 *     <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/sharing.html">Sharing Network Firewall resources</a> in the <i>Network Firewall Developer Guide</i>.</p>
 *          <p>The status of the VPC endpoint association, which indicates whether it's ready to filter network traffic,
 *          is provided in the corresponding <a>VpcEndpointAssociationStatus</a>. You can retrieve both
 *          the association and its status by calling <a>DescribeVpcEndpointAssociation</a>.</p>
 * @public
 */
export interface VpcEndpointAssociation {
  /**
   * <p>The unique identifier of the VPC endpoint association. </p>
   * @public
   */
  VpcEndpointAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC for the endpoint association. </p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The ID for a subnet that's used in an association with a firewall. This is used in
   *       <code>CreateFirewall</code>, <code>AssociateSubnets</code>, and <code>CreateVpcEndpointAssociation</code>. Network Firewall
   *          creates an instance of the associated firewall in each subnet that you specify, to filter
   *          traffic in the subnet's Availability Zone.</p>
   * @public
   */
  SubnetMapping: SubnetMapping | undefined;

  /**
   * <p>A description of the VPC endpoint association. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Detailed information about the current status of a <a>VpcEndpointAssociation</a>. You can retrieve this
 * by calling <a>DescribeVpcEndpointAssociation</a> and providing the VPC endpoint association ARN.</p>
 * @public
 */
export interface VpcEndpointAssociationStatus {
  /**
   * <p>The readiness of the configured firewall endpoint to handle network traffic. </p>
   * @public
   */
  Status: FirewallStatusValue | undefined;

  /**
   * <p>The list of the Availability Zone sync states for all subnets that are defined by the firewall. </p>
   * @public
   */
  AssociationSyncState?: Record<string, AZSyncState> | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointAssociationResponse {
  /**
   * <p>The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint. </p>
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * <p>Detailed information about the current status of a <a>VpcEndpointAssociation</a>. You can retrieve this
   * by calling <a>DescribeVpcEndpointAssociation</a> and providing the VPC endpoint association ARN.</p>
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteContainerAssociationRequest {
  /**
   * <p>The descriptive name of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerAssociationResponse {
  /**
   * <p>The descriptive name of the container association.</p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * <p>The current status of the container association. After deletion is initiated, the status is <code>DELETING</code>.</p>
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>Specifies whether to delete the NAT gateways that Network Firewall created for a proxy mode firewall when you delete the firewall. You can choose from the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FALSE</code> - Network Firewall detaches the NAT gateways from the firewall and keeps them. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE</code> - Network Firewall also deletes the NAT gateways. The firewall status stays <code>DELETING</code> until they're deleted. You need permission to call the Amazon EC2 <code>DeleteNatGateway</code> action.</p>
   *             </li>
   *          </ul>
   *          <p>You can't specify <code>TRUE</code> for a firewall that isn't a proxy mode firewall.</p>
   * @public
   */
  DeleteAssociatedNatGateways?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallResponse {
  /**
   * <p>A firewall defines the behavior of a firewall, the main VPC where the firewall is used, the Availability Zones where the firewall can be used, and one subnet to use for a firewall endpoint within each of the Availability Zones. The Availability Zones are defined implicitly in the subnet specifications.</p>
   *          <p>In addition to the firewall endpoints that you define in this <code>Firewall</code> specification, you can create firewall endpoints in <code>VpcEndpointAssociation</code> resources for any VPC, in any Availability Zone where the firewall is already in use. </p>
   *          <p>The status of the firewall, for example whether it's ready to filter network traffic,
   *          is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both
   *          the firewall and firewall status by calling <a>DescribeFirewall</a>.</p>
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   *          <p>The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values. </p>
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyResponse {
  /**
   * <p>The object containing the definition of the <a>FirewallPolicyResponse</a>
   *          that you asked to delete. </p>
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the Next Generation policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Arn?: string | undefined;

  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallPolicyV2Response {
  /**
   * <p>The high-level properties of the Next Generation policy that you asked to delete.</p>
   * @public
   */
  FirewallPolicyV2Response: FirewallPolicyV2Response | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentRequest {
  /**
   * <p>Required. The unique identifier of the transit gateway attachment to delete.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * <p>The ID of the transit gateway attachment that was deleted.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The current status of the transit gateway attachment deletion process.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The attachment is being created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The attachment is being deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The attachment has been deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The attachment creation has failed and cannot be recovered</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The attachment is in an error state that might be recoverable</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The attachment is active and processing traffic</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code> - The attachment is waiting to be accepted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTING</code> - The attachment is in the process of being rejected</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The attachment has been rejected</p>
   *             </li>
   *          </ul>
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRequest {
  /**
   * <p>The NAT Gateway the proxy is attached to. </p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The descriptive name of the proxy. You can't change the name of a proxy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a proxy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyResponse {
  /**
   * <p>The NAT Gateway the Proxy was attached to. </p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>The descriptive name of the proxy. You can't change the name of a proxy after you create it.</p>
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a proxy.</p>
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete. </p>
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
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * @public
 */
export interface DeleteRuleGroupResponse {
  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface DeleteTLSInspectionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTLSInspectionConfigurationResponse {
  /**
   * <p>The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointAssociationResponse {
  /**
   * <p>The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint. </p>
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * <p>Detailed information about the current status of a <a>VpcEndpointAssociation</a>. You can retrieve this
   * by calling <a>DescribeVpcEndpointAssociation</a> and providing the VPC endpoint association ARN.</p>
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeContainerAssociationRequest {
  /**
   * <p>The descriptive name of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerAssociationResponse {
  /**
   * <p>The descriptive name of the container association.</p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * <p>A description of the container association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ECS</code> - Amazon Elastic Container Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS</code> - Amazon Elastic Kubernetes Service</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * <p>The monitoring configurations for the container association.</p>
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * <p>The current status of the container association.</p>
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * <p>The number of CIDR blocks resolved from the monitored containers.</p>
   * @public
   */
  ResolvedCidrCount?: number | undefined;

  /**
   * <p>The most recent time that Network Firewall updated the container association.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association.
   *       The token marks the state of the container association resource at the time of the request.</p>
   *          <p>To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure
   *       that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an
   *       <code>InvalidTokenException</code>. If this happens, retrieve the container association again to get a current copy of it
   *       with a current token. Reapply your changes as needed, then try the operation again using the new token.</p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. </p>
   * @public
   */
  Firewall?: Firewall | undefined;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   *          <p>The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values. </p>
   * @public
   */
  FirewallStatus?: FirewallStatus | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * <p>A description of the firewall.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The readiness of the configured firewall to handle network traffic across all of the
   *          Availability Zones where you have it configured. This setting is <code>READY</code> only when
   *          the <code>ConfigurationSyncStateSummary</code> value is <code>IN_SYNC</code> and the
   *             <code>Attachment</code>
   *             <code>Status</code> values for all of the configured subnets are <code>READY</code>.
   *       </p>
   * @public
   */
  Status?: FirewallStatusValue | undefined;

  /**
   * <p>The Availability Zones that the firewall currently supports. This includes all Availability Zones for which
   *        the firewall has a subnet defined. </p>
   * @public
   */
  SupportedAvailabilityZones?: Record<string, AvailabilityZoneMetadata> | undefined;

  /**
   * <p>The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;

  /**
   * <p>The policy for the specified firewall policy. </p>
   * @public
   */
  FirewallPolicy?: FirewallPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the Next Generation policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Arn?: string | undefined;

  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Name?: string | undefined;

  /**
   * <p>The format in which to return the rules of any firewall engine rule groups that are embedded in the policy. Specify <code>FIREWALL_RULES</code> for structured <code>FirewallRule</code> objects or <code>RULES_STRING</code> for a Suricata-compatible firewall-mode rule string. If you don't specify a format, Network Firewall returns each embedded rule group in the format you provided it in. Referenced rule groups aren't affected.</p>
   * @public
   */
  RuleOutputFormat?: RuleOutputFormat | undefined;
}

/**
 * @public
 */
export interface DescribeFirewallPolicyV2Response {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of the Next Generation policy. This, along with the <a>FirewallPolicyV2</a>, define the policy.</p>
   * @public
   */
  FirewallPolicyV2Response: FirewallPolicyV2Response | undefined;

  /**
   * <p>The rule groups and other settings that define the specified Next Generation policy.</p>
   * @public
   */
  FirewallPolicyV2?: FirewallPolicyV2 | undefined;
}

/**
 * @public
 */
export interface DescribeFlowOperationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>, not both. If you specify both, the request fails.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId: string | undefined;
}

/**
 * <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
 * @public
 */
export interface FlowFilter {
  /**
   * <p>A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.</p>
   * @public
   */
  SourceAddress?: Address | undefined;

  /**
   * <p>A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.</p>
   * @public
   */
  DestinationAddress?: Address | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  SourcePort?: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * <p>The protocols to inspect for, specified using the assigned internet protocol number (IANA)
   *  for each protocol. If not specified, this matches with any protocol.</p>
   * @public
   */
  Protocols?: string[] | undefined;
}

/**
 * <p>Contains information about a flow operation, such as related statuses, unique identifiers, and all filters defined in the operation.</p>
 *          <p>Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.</p>
 *          <p>A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. </p>
 * @public
 */
export interface FlowOperation {
  /**
   * <p>The reqested <code>FlowOperation</code> ignores flows with an age (in seconds) lower than <code>MinimumFlowAgeInSeconds</code>.
   * You provide this for start commands.</p>
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  FlowFilters?: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowOperationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * <p>Defines the type of <code>FlowOperation</code>.</p>
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * <p>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.</p>
   *          <p>If the status is <code>COMPLETED_WITH_ERRORS</code>, results may be returned with any number of <code>Flows</code> missing from the response.
   * If the status is <code>FAILED</code>, <code>Flows</code> returned will be empty.</p>
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;

  /**
   * <p>If the asynchronous operation fails, Network Firewall populates this with the reason for the error or failure. Options include <code>Flow operation error</code> and <code>Flow timeout</code>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>A timestamp indicating when the Suricata engine identified flows impacted by an operation. </p>
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * <p>Returns key information about a flow operation, such as related statuses, unique identifiers, and all filters defined in the operation.</p>
   * @public
   */
  FlowOperation?: FlowOperation | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;
}

/**
 * <p>Defines where Network Firewall sends logs for the firewall for one log type. This is used
 *          in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Firehose delivery stream.</p>
 *          <p>Network Firewall generates logs for stateful rule groups. You can save alert, flow, and TLS log
 *           types. </p>
 * @public
 */
export interface LogDestinationConfig {
  /**
   * <p>The type of log to record. You can record the following types of logs from your Network Firewall stateful engine.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Logs for traffic that matches your stateful rules and that have an action that sends an alert. A stateful rule sends alerts for the rule actions DROP, ALERT, and REJECT. For more information, see <a>StatefulRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FLOW</code> - Standard network traffic flow logs. The stateful rules engine records flow logs for all network traffic that it receives. Each flow log record captures the network flow for a specific standard stateless rule group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS</code> - Logs for events that are related to TLS inspection. For more information, see
   *           <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-configurations.html">Inspecting SSL/TLS traffic with TLS inspection configurations</a>
   *               in the <i>Network Firewall Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LogType: LogType | undefined;

  /**
   * <p>The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket,
   *          a CloudWatch log group, or a Firehose delivery stream.</p>
   * @public
   */
  LogDestinationType: LogDestinationType | undefined;

  /**
   * <p>The named location for the logs, provided in a key:value mapping that is specific to the
   *          chosen destination type. </p>
   *          <ul>
   *             <li>
   *                <p>For an Amazon S3 bucket, provide the name of the bucket, with key <code>bucketName</code>,
   *             and optionally provide a prefix, with key <code>prefix</code>. </p>
   *                <p>The following example specifies an Amazon S3 bucket named <code>DOC-EXAMPLE-BUCKET</code> and the prefix <code>alerts</code>: </p>
   *                <p>
   *                   <code>"LogDestination": \{ "bucketName": "DOC-EXAMPLE-BUCKET", "prefix": "alerts"
   *                   \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a CloudWatch log group, provide the name of the CloudWatch log group, with key
   *                   <code>logGroup</code>. The following example specifies a log group named
   *                   <code>alert-log-group</code>: </p>
   *                <p>
   *                   <code>"LogDestination": \{ "logGroup": "alert-log-group" \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a Firehose delivery stream, provide the name of the delivery stream, with key
   *                   <code>deliveryStream</code>. The following example specifies a delivery stream
   *                named <code>alert-delivery-stream</code>: </p>
   *                <p>
   *                   <code>"LogDestination": \{ "deliveryStream": "alert-delivery-stream"
   *                \}</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDestination: Record<string, string> | undefined;
}

/**
 * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>Defines the logging destinations for the logs for a firewall. Network Firewall generates
   *          logs for stateful rule groups. </p>
   * @public
   */
  LogDestinationConfigs: LogDestinationConfig[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>A boolean that reflects whether or not the firewall monitoring dashboard is enabled on a firewall.</p>
   *          <p>
   *          Returns <code>TRUE</code> when the firewall monitoring dashboard is enabled on the firewall.
   *          Returns <code>FALSE</code> when the firewall monitoring dashboard is not enabled on the firewall.
   *       </p>
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeProxyRequest {
  /**
   * <p>The descriptive name of the proxy. You can't change the name of a proxy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a proxy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ProxyArn?: string | undefined;
}

/**
 * <p>TLS decryption on traffic to filter on attributes in the HTTP header. </p>
 * @public
 */
export interface TlsInterceptProperties {
  /**
   * <p>Private Certificate Authority (PCA) used to issue private TLS certificates so that the proxy can present PCA-signed certificates which applications trust through the same root, establishing a secure and consistent trust model for encrypted communication.</p>
   * @public
   */
  PcaArn?: string | undefined;

  /**
   * <p>Specifies whether to enable or disable TLS Intercept Mode. </p>
   * @public
   */
  TlsInterceptMode?: TlsInterceptMode | undefined;
}

/**
 * <p>Proxy attached to a NAT gateway. </p>
 * @public
 */
export interface DescribeProxyResource {
  /**
   * <p>The descriptive name of the proxy. You can't change the name of a proxy after you create it.</p>
   * @public
   */
  ProxyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a proxy.</p>
   * @public
   */
  ProxyArn?: string | undefined;

  /**
   * <p>The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.</p>
   * @public
   */
  ProxyConfigurationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a proxy configuration.</p>
   * @public
   */
  ProxyConfigurationArn?: string | undefined;

  /**
   * <p>The NAT Gateway for the proxy. </p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>Current attachment/detachment status of the Proxy. </p>
   * @public
   */
  ProxyState?: ProxyState | undefined;

  /**
   * <p>Current modification status of the Proxy. </p>
   * @public
   */
  ProxyModifyState?: ProxyModifyState | undefined;

  /**
   * <p>Listener properties for HTTP and HTTPS traffic. </p>
   * @public
   */
  ListenerProperties?: ListenerProperty[] | undefined;

  /**
   * <p>TLS decryption on traffic to filter on attributes in the HTTP header. </p>
   * @public
   */
  TlsInterceptProperties?: TlsInterceptProperties | undefined;

  /**
   * <p>The service endpoint created in the VPC. </p>
   * @public
   */
  VpcEndpointServiceName?: string | undefined;

  /**
   * <p>The private DNS name of the Proxy. </p>
   * @public
   */
  PrivateDNSName?: string | undefined;

  /**
   * <p>Time the Proxy was created. </p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>Time the Proxy was deleted. </p>
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * <p>Time the Proxy was updated. </p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>Failure code for cases when the Proxy fails to attach or update. </p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>Failure message for cases when the Proxy fails to attach or update. </p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeProxyResponse {
  /**
   * <p>Proxy attached to a NAT gateway. </p>
   * @public
   */
  Proxy?: DescribeProxyResource | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request. </p>
   *          <p>To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>The IAM policy for the resource. </p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to <code>TRUE</code>, Network Firewall runs the analysis.</p>
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;

  /**
   * <p>For a firewall engine rule group, the format in which to return the rules. Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIREWALL_RULES</code> - Returns the rules as structured <code>FirewallRule</code> objects.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RULES_STRING</code> - Returns the rules as a Suricata-compatible firewall-mode rule string.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a format, Network Firewall returns the rules in the format you provided them in. This setting applies only to <code>FIREWALL</code> and <code>IPS</code> rule groups; IPS engine rule groups support only <code>RULES_STRING</code>.</p>
   * @public
   */
  RuleOutputFormat?: RuleOutputFormat | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   *          <p>Network Firewall uses a rule group to inspect and control network traffic.
   *     You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their
   *     traffic flow. </p>
   *          <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from
   *     more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * <p>The object that defines the rules in a firewall engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;

  /**
   * <p>The object that defines the rules in an IPS engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  IpsRuleGroup?: IpsRuleGroup | undefined;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupMetadataRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupMetadataResponse {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * <p>Returns the metadata objects for the specified rule group.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * <p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation.
   *       When you update a rule group, you are limited to this capacity. When you reference a rule group
   *       from a firewall policy, Network Firewall reserves this capacity for the rule group. </p>
   *          <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling
   *       <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.</p>
   * @public
   */
  StatefulRuleOptions?: StatefulRuleOptions | undefined;

  /**
   * <p>A timestamp indicating when the rule group was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the Amazon Web Services Marketplace vendor that provides this rule group.</p>
   * @public
   */
  VendorName?: string | undefined;

  /**
   * <p>The unique identifier for the product listing associated with this rule group.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The display name of the product listing for this rule group.</p>
   * @public
   */
  ListingName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupSummaryRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>Required. The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The type of rule group you want a summary for. This is a required field.</p>
   *          <p>Valid value: <code>STATEFUL</code>
   *          </p>
   *          <p>Note that <code>STATELESS</code> exists but is not currently supported. If you provide <code>STATELESS</code>, an exception is returned.</p>
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * <p>A complex type containing details about a Suricata rule. Contains:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>SID</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Msg</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Metadata</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The unique identifier (Signature ID) of the Suricata rule.</p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p>The contents taken from the rule's msg field.</p>
   * @public
   */
  Msg?: string | undefined;

  /**
   * <p>The contents of the rule's metadata.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>A complex type containing summaries of security protections provided by a rule group.</p>
 *          <p>Network Firewall extracts this information from selected fields in the rule group's Suricata rules, based on your <a>SummaryConfiguration</a> settings.</p>
 * @public
 */
export interface Summary {
  /**
   * <p>An array of <a>RuleSummary</a> objects containing individual rule details that had been configured by the rulegroup's SummaryConfiguration.</p>
   * @public
   */
  RuleSummaries?: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeRuleGroupSummaryResponse {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   * @public
   */
  RuleGroupName: string | undefined;

  /**
   * <p>A description of the rule group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A complex type that contains rule information based on the rule group's configured summary settings. The content varies depending on the fields that you specified to extract in your SummaryConfiguration. When you haven't configured any summary settings, this returns an empty array. The response might include:</p>
   *          <ul>
   *             <li>
   *                <p>Rule identifiers</p>
   *             </li>
   *             <li>
   *                <p>Rule descriptions</p>
   *             </li>
   *             <li>
   *                <p>Any metadata fields that you specified in your SummaryConfiguration</p>
   *             </li>
   *          </ul>
   * @public
   */
  Summary?: Summary | undefined;
}

/**
 * @public
 */
export interface DescribeTLSInspectionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTLSInspectionConfigurationResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p>
   *          <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   *          <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p>
   *          <p>To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see
   *     <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Inspecting SSL/TLS traffic with TLS
   * inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TLSInspectionConfiguration?: TLSInspectionConfiguration | undefined;

  /**
   * <p>The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationResponse {
  /**
   * <p>The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint. </p>
   * @public
   */
  VpcEndpointAssociation?: VpcEndpointAssociation | undefined;

  /**
   * <p>Detailed information about the current status of a <a>VpcEndpointAssociation</a>. You can retrieve this
   * by calling <a>DescribeVpcEndpointAssociation</a> and providing the VPC endpoint association ARN.</p>
   * @public
   */
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateAvailabilityZonesRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>Required. The Availability Zones to remove from the firewall's configuration.</p>
   * @public
   */
  AvailabilityZoneMappings: AvailabilityZoneMapping[] | undefined;
}

/**
 * @public
 */
export interface DisassociateAvailabilityZonesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The remaining Availability Zones where the firewall has endpoints after the disassociation.</p>
   * @public
   */
  AvailabilityZoneMappings?: AvailabilityZoneMapping[] | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetsRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The unique identifiers for the subnets that you want to disassociate. </p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The IDs of the subnets that are associated with the firewall. </p>
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * <p>High-level information about a firewall, returned by operations like create and
 *          describe. You can use the information provided in the metadata to retrieve and manage a
 *          firewall.</p>
 * @public
 */
export interface FirewallMetadata {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;
}

/**
 * <p>High-level information about a firewall policy, returned by operations like create and
 *          describe. You can use the information provided in the metadata to retrieve and manage a
 *          firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
 * @public
 */
export interface FirewallPolicyMetadata {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>High-level information about a Next Generation policy, returned in a list of policies. To retrieve the policy's full properties, rule groups, and settings, use the Next Generation policy describe operation.</p>
 * @public
 */
export interface FirewallPolicyV2Metadata {
  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Next Generation policy.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Any number of arrays, where each array is a single flow identified in the scope of the operation.
 * If multiple flows were in the scope of the operation, multiple <code>Flows</code> arrays are returned.</p>
 * @public
 */
export interface Flow {
  /**
   * <p>A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.</p>
   * @public
   */
  SourceAddress?: Address | undefined;

  /**
   * <p>A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.</p>
   * @public
   */
  DestinationAddress?: Address | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  SourcePort?: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port,
   *  for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>.
   *  To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * <p>The protocols to inspect for, specified using the assigned internet protocol number (IANA)
   *  for each protocol. If not specified, this matches with any protocol.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Returned as info about age of the flows identified by the flow operation.</p>
   * @public
   */
  Age?: number | undefined;

  /**
   * <p>Returns the total number of data packets received or transmitted in a flow.</p>
   * @public
   */
  PacketCount?: number | undefined;

  /**
   * <p>Returns the number of bytes received or transmitted in a specific flow.</p>
   * @public
   */
  ByteCount?: number | undefined;
}

/**
 * <p>An array of objects with metadata about the requested <code>FlowOperation</code>.</p>
 * @public
 */
export interface FlowOperationMetadata {
  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * <p>Defines the type of <code>FlowOperation</code>.</p>
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * <p>A timestamp indicating when the Suricata engine identified flows impacted by an operation. </p>
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * <p>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.</p>
   *          <p>If the status is <code>COMPLETED_WITH_ERRORS</code>, results may be returned with any number of <code>Flows</code> missing from the response.
   * If the status is <code>FAILED</code>, <code>Flows</code> returned will be empty.</p>
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface GetAnalysisReportResultsRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The unique ID of the query that ran when you requested an analysis report. </p>
   * @public
   */
  AnalysisReportId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnalysisReportResultsResponse {
  /**
   * <p>The status of the analysis report you specify. Statuses include <code>RUNNING</code>, <code>COMPLETED</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p> The date and time within the last 30 days from which to start retrieving analysis data,
   *    in UTC format (for example, <code>YYYY-MM-DDTHH:MM:SSZ</code>. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving analysis data,
   *    in UTC format (for example, <code>YYYY-MM-DDTHH:MM:SSZ</code>). </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The date and time the analysis report was ran. </p>
   * @public
   */
  ReportTime?: Date | undefined;

  /**
   * <p>The type of traffic that will be used to generate a report. </p>
   * @public
   */
  AnalysisType?: EnabledAnalysisType | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Retrieves the results of a traffic analysis report.</p>
   * @public
   */
  AnalysisReportResults?: AnalysisTypeReportResult[] | undefined;
}

/**
 * @public
 */
export interface ListAnalysisReportsRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalysisReportsResponse {
  /**
   * <p>The <code>id</code> and <code>ReportTime</code> associated with a requested analysis report. Does not provide the status of the analysis report. </p>
   * @public
   */
  AnalysisReports?: AnalysisReport[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerAssociationsRequest {
  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerAssociationsResponse {
  /**
   * <p>The container association metadata objects for the account and Region.</p>
   * @public
   */
  ContainerAssociations?: ContainerAssociationSummary[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The metadata for the firewall policies. Depending on your setting for max results and
   *          the number of firewall policies that you have, this might not be the full list. </p>
   * @public
   */
  FirewallPolicies?: FirewallPolicyMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesV2Request {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFirewallPoliciesV2Response {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The metadata for the Next Generation policies. Depending on your setting for max results and the number of firewall policies that you have, this might not be the full list.</p>
   * @public
   */
  FirewallPoliciesV2: FirewallPolicyV2Metadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls
   *          for. Leave this blank to retrieve all firewalls that you have defined.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFirewallsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The firewall metadata objects for the VPCs that you specified. Depending on your setting
   *          for max results and the number of firewalls you have, a single call might not be the full
   *          list. </p>
   * @public
   */
  Firewalls?: FirewallMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationResultsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId: string | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>, not both. If you specify both, the request fails.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationResultsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * <p>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.</p>
   *          <p>If the status is <code>COMPLETED_WITH_ERRORS</code>, results may be returned with any number of <code>Flows</code> missing from the response.
   * If the status is <code>FAILED</code>, <code>Flows</code> returned will be empty.</p>
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;

  /**
   * <p>If the asynchronous operation fails, Network Firewall populates this with the reason for the error or failure.
   *          Options include <code>Flow operation error</code> and <code>Flow timeout</code>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>A timestamp indicating when the Suricata engine identified flows impacted by an operation. </p>
   * @public
   */
  FlowRequestTimestamp?: Date | undefined;

  /**
   * <p>Any number of arrays, where each array is a single flow identified in the scope of the operation.
   * If multiple flows were in the scope of the operation, multiple <code>Flows</code> arrays are returned.</p>
   * @public
   */
  Flows?: Flow[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>, not both. If you specify both, the request fails.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>An optional string that defines whether any or all operation types are returned.</p>
   * @public
   */
  FlowOperationType?: FlowOperationType | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowOperationsResponse {
  /**
   * <p>Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.</p>
   *          <p>A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
   * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. </p>
   * @public
   */
  FlowOperations?: FlowOperationMetadata[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The scope of the request. The default setting of <code>ACCOUNT</code> or a setting of
   *          <code>NULL</code> returns all of the rule groups in your account. A setting of
   *          <code>MANAGED</code> returns all available managed rule groups.</p>
   * @public
   */
  Scope?: ResourceManagedStatus | undefined;

  /**
   * <p>Indicates the general category of the Amazon Web Services managed rule group.</p>
   * @public
   */
  ManagedType?: ResourceManagedType | undefined;

  /**
   * <p>Filters the results to show only rule groups with the specified subscription status. Use this to find subscribed or unsubscribed rule groups.</p>
   * @public
   */
  SubscriptionStatus?: SubscriptionStatus | undefined;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.</p>
   * @public
   */
  Type?: RuleGroupType | undefined;
}

/**
 * <p>High-level information about a rule group, returned by <a>ListRuleGroups</a>.
 *          You can use the information provided in the metadata to retrieve and manage a
 *          rule group.</p>
 * @public
 */
export interface RuleGroupMetadata {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Marketplace seller that provides this rule group.</p>
   * @public
   */
  VendorName?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The rule group metadata objects that you've defined. Depending on your setting for max
   *          results and the number of rule groups, this might not be the full list. </p>
   * @public
   */
  RuleGroups?: RuleGroupMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The tags that are associated with the resource. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTLSInspectionConfigurationsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>High-level information about a TLS inspection configuration, returned by <code>ListTLSInspectionConfigurations</code>. You can use the information provided in the metadata to retrieve and manage a TLS configuration.</p>
 * @public
 */
export interface TLSInspectionConfigurationMetadata {
  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListTLSInspectionConfigurationsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The TLS inspection configuration metadata objects that you've defined. Depending on your setting for max results and the number of TLS inspection configurations, this might not be the full list.</p>
   * @public
   */
  TLSInspectionConfigurations?: TLSInspectionConfigurationMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAssociationsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>If you don't specify this, Network Firewall retrieves all VPC endpoint associations that you have defined.</p>
   * @public
   */
  FirewallArn?: string | undefined;
}

/**
 * <p>High-level information about a VPC endpoint association, returned by <code>ListVpcEndpointAssociations</code>. You can use the information provided in the metadata to retrieve and manage a VPC endpoint association.</p>
 * @public
 */
export interface VpcEndpointAssociationMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAssociationsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The VPC endpoint assocation metadata objects for the firewall that you specified. If you didn't
   *            specify a firewall, this is all VPC endpoint associations that you have defined. </p>
   *          <p>Depending on your setting
   *          for max results and the number of firewalls you have, a single call might not be the full
   *          list. </p>
   * @public
   */
  VpcEndpointAssociations?: VpcEndpointAssociationMetadata[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share your Network Firewall resources with.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The IAM policy statement that lists the accounts that you want to share your Network Firewall resources with
   *            and the operations that you want the accounts to be able to perform. </p>
   *          <p>For a rule group resource, you can specify the following operations in the Actions section of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>network-firewall:CreateFirewallPolicy</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:UpdateFirewallPolicy</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:ListRuleGroups</p>
   *             </li>
   *          </ul>
   *          <p>For a firewall policy resource, you can specify the following operations in the Actions section of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>network-firewall:AssociateFirewallPolicy</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:ListFirewallPolicies</p>
   *             </li>
   *          </ul>
   *          <p>For a firewall resource, you can specify the following operations in the Actions section of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>network-firewall:CreateVpcEndpointAssociation</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:DescribeFirewallMetadata</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:ListFirewalls</p>
   *             </li>
   *          </ul>
   *          <p>In the Resource section of the statement, you specify the ARNs for the Network Firewall resources that you want to share with the account that you specified in <code>Arn</code>.</p>
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
   * <p>Required. The unique identifier of the transit gateway attachment to reject. This ID is returned in the response when creating a transit gateway-attached firewall.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentResponse {
  /**
   * <p>The unique identifier of the transit gateway attachment that was rejected.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The current status of the transit gateway attachment. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The attachment is being created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The attachment is being deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The attachment has been deleted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The attachment creation has failed and cannot be recovered</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The attachment is in an error state that might be recoverable</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The attachment is active and processing traffic</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code> - The attachment is waiting to be accepted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTING</code> - The attachment is in the process of being rejected</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The attachment has been rejected</p>
   *             </li>
   *          </ul>
   *          <p>For information about troubleshooting endpoint failures, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html">Troubleshooting firewall endpoint failures</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus | undefined;
}

/**
 * @public
 */
export interface StartAnalysisReportRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The type of traffic that will be used to generate a report. </p>
   * @public
   */
  AnalysisType: EnabledAnalysisType | undefined;
}

/**
 * @public
 */
export interface StartAnalysisReportResponse {
  /**
   * <p>The unique ID of the query that ran when you requested an analysis report. </p>
   * @public
   */
  AnalysisReportId: string | undefined;
}

/**
 * @public
 */
export interface StartFlowCaptureRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>, not both. If you specify both, the request fails.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The reqested <code>FlowOperation</code> ignores flows with an age (in seconds) lower than <code>MinimumFlowAgeInSeconds</code>.
   * You provide this for start commands.</p>
   *          <note>
   *             <p>We recommend setting this value to at least 1 minute (60 seconds) to reduce chance of capturing flows that are not yet established.</p>
   *          </note>
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  FlowFilters: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface StartFlowCaptureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * <p>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.</p>
   *          <p>If the status is <code>COMPLETED_WITH_ERRORS</code>, results may be returned with any number of <code>Flows</code> missing from the response.
   * If the status is <code>FAILED</code>, <code>Flows</code> returned will be empty.</p>
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface StartFlowFlushRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn: string | undefined;

  /**
   * <p>The name of the Availability Zone where the firewall is located. For example, <code>us-east-2a</code>.</p>
   *          <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the firewall is located. For example, <code>use2-az1</code>. Availability Zone IDs are the same in every Amazon Web Services account, so use this parameter when you coordinate resources across accounts. Specify either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>, not both. If you specify both, the request fails.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a VPC endpoint association.</p>
   * @public
   */
  VpcEndpointAssociationArn?: string | undefined;

  /**
   * <p>A unique identifier for the primary endpoint associated with a firewall.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The reqested <code>FlowOperation</code> ignores flows with an age (in seconds) lower than <code>MinimumFlowAgeInSeconds</code>.
   * You provide this for start commands.</p>
   * @public
   */
  MinimumFlowAgeInSeconds?: number | undefined;

  /**
   * <p>Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation.</p>
   * @public
   */
  FlowFilters: FlowFilter[] | undefined;
}

/**
 * @public
 */
export interface StartFlowFlushResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands.</p>
   * @public
   */
  FlowOperationId?: string | undefined;

  /**
   * <p>Returns the status of the flow operation. This string is returned in the responses to start, list, and describe commands.</p>
   *          <p>If the status is <code>COMPLETED_WITH_ERRORS</code>, results may be returned with any number of <code>Flows</code> missing from the response.
   * If the status is <code>FAILED</code>, <code>Flows</code> returned will be empty.</p>
   * @public
   */
  FlowOperationStatus?: FlowOperationStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
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
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  AvailabilityZoneChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAvailabilityZoneChangeProtectionResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  AvailabilityZoneChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateContainerAssociationRequest {
  /**
   * <p>The descriptive name of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * <p>A description of the container association. When omitted, the existing description remains unchanged.
   *       To clear the description, pass an empty string.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type. This value must match the existing type and can't be changed. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ECS</code> - Amazon Elastic Container Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS</code> - Amazon Elastic Kubernetes Service</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: ContainerMonitoringType | undefined;

  /**
   * <p>The updated monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster
   *       to monitor and optional attribute filters.</p>
   * @public
   */
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[] | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association.
   *       The token marks the state of the container association resource at the time of the request.</p>
   *          <p>To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure
   *       that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an
   *       <code>InvalidTokenException</code>. If this happens, retrieve the container association again to get a current copy of it
   *       with a current token. Reapply your changes as needed, then try the operation again using the new token.</p>
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateContainerAssociationResponse {
  /**
   * <p>The descriptive name of the container association.</p>
   * @public
   */
  ContainerAssociationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container association.</p>
   * @public
   */
  ContainerAssociationArn?: string | undefined;

  /**
   * <p>A description of the container association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ECS</code> - Amazon Elastic Container Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS</code> - Amazon Elastic Kubernetes Service</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ContainerMonitoringType | undefined;

  /**
   * <p>The monitoring configurations for the container association.</p>
   * @public
   */
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[] | undefined;

  /**
   * <p>The current status of the container association.</p>
   * @public
   */
  Status?: ContainerAssociationStatus | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association.
   *       The token marks the state of the container association resource at the time of the request.</p>
   *          <p>To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure
   *       that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an
   *       <code>InvalidTokenException</code>. If this happens, retrieve the container association again to get a current copy of it
   *       with a current token. Reapply your changes as needed, then try the operation again using the new token.</p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallAnalysisSettingsRequest {
  /**
   * <p>An optional setting indicating the specific traffic analysis types to enable on the firewall. </p>
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallAnalysisSettingsResponse {
  /**
   * <p>An optional setting indicating the specific traffic analysis types to enable on the firewall. </p>
   * @public
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDeleteProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   * @public
   */
  DeleteProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDeleteProtectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDescriptionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The new description for the firewall. If you omit this setting, Network Firewall removes
   *          the description for the firewall.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDescriptionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A description of the firewall.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallEncryptionConfigurationRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallEncryptionConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyRequest {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * <p>The updated firewall policy to use for the firewall. You can't add or remove a <a>TLSInspectionConfiguration</a> after you create a firewall policy. However, you can replace an existing TLS inspection configuration with another <code>TLSInspectionConfiguration</code>.</p>
   * @public
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   * @public
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyChangeProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  FirewallPolicyChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyChangeProtectionResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyV2Request {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Next Generation policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Arn?: string | undefined;

  /**
   * <p>The descriptive name of the Next Generation policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallPolicyV2Name?: string | undefined;

  /**
   * <p>The updated rule groups and other settings that define the Next Generation policy.</p>
   * @public
   */
  FirewallPolicyV2: FirewallPolicyV2 | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallPolicyV2Response {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of the Next Generation policy. This, along with the <a>FirewallPolicyV2</a>, define the policy. You can retrieve all objects for a Next Generation policy by calling <a>DescribeFirewallPolicyV2</a>.</p>
   * @public
   */
  FirewallPolicyV2Response: FirewallPolicyV2Response | undefined;
}

/**
 * @public
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>Defines how Network Firewall performs logging for a firewall. If you omit this setting,
   *          Network Firewall disables logging for the firewall.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>A boolean that lets you enable or disable the detailed firewall monitoring dashboard on the firewall. </p>
   *          <p>The monitoring dashboard provides comprehensive visibility into your firewall's flow logs and alert logs.
   *          After you enable detailed monitoring, you can access these dashboards directly from the <b>Monitoring</b> page of the Network Firewall console.</p>
   *          <p>
   *          Specify <code>TRUE</code> to enable the the detailed monitoring dashboard on the firewall.
   *          Specify <code>FALSE</code> to disable the the detailed monitoring dashboard on the firewall.
   *       </p>
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>A boolean that reflects whether or not the firewall monitoring dashboard is enabled on a firewall.</p>
   *          <p>
   *          Returns <code>TRUE</code> when the firewall monitoring dashboard is enabled on the firewall.
   *          Returns <code>FALSE</code> when the firewall monitoring dashboard is not enabled on the firewall.
   *       </p>
   * @public
   */
  EnableMonitoringDashboard?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProxySettingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The proxy settings to set on the firewall. These replace the current proxy settings. Specify at least one listener, and at most one HTTP listener and one HTTPS listener, on different ports. If the firewall uses your own <code>CertificateArn</code> and <code>DomainName</code>, specify the same values that you used to create the firewall.</p>
   * @public
   */
  ProxySettings?: ProxySettings | undefined;
}

/**
 * @public
 */
export interface UpdateProxySettingsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The updated proxy settings for the firewall. </p>
   * @public
   */
  ProxySettings?: ProxySettings | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupRequest {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>An object that defines the rule group rules. </p>
   *          <note>
   *             <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p>
   *          </note>
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * <p>An object that defines the rules in a firewall engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;

  /**
   * <p>An object that defines the rules in an IPS engine rule group, for use in a Next Generation policy.</p>
   * @public
   */
  IpsRuleGroup?: IpsRuleGroup | undefined;

  /**
   * <p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>
   * @public
   */
  Rules?: string | undefined;

  /**
   * <p>Indicates the type of the rule group. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATELESS</code> - Stateless rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEFUL</code> - Stateful rules, for use in a Classic Network Firewall policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREWALL</code> - Firewall engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPS</code> - IPS engine rules, for use in a Next Generation policy.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   * @public
   */
  Type?: RuleGroupType | undefined;

  /**
   * <p>A description of the rule group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A complex type that contains settings for encryption of your rule group resources.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.</p>
   * @public
   */
  SourceMetadata?: SourceMetadata | undefined;

  /**
   * <p>Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to <code>TRUE</code>, Network Firewall runs the analysis and then updates the rule group for you. To run the stateless rule group analyzer without updating the rule group, set <code>DryRun</code> to <code>TRUE</code>. </p>
   * @public
   */
  AnalyzeRuleGroup?: boolean | undefined;

  /**
   * <p>Updates the selected summary configuration for a rule group.</p>
   *          <p>Changes affect subsequent responses from <a>DescribeRuleGroupSummary</a>.</p>
   * @public
   */
  SummaryConfiguration?: SummaryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   * @public
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetChangeProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  SubnetChangeProtection: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetChangeProtectionResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTLSInspectionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p>
   * @public
   */
  TLSInspectionConfigurationArn?: string | undefined;

  /**
   * <p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p>
   * @public
   */
  TLSInspectionConfigurationName?: string | undefined;

  /**
   * <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   *          <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p>
   *          <p>To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see
   *     <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Inspecting SSL/TLS traffic with TLS
   * inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>
   * @public
   */
  TLSInspectionConfiguration: TLSInspectionConfiguration | undefined;

  /**
   * <p>A description of the TLS inspection configuration. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p>
   *          <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateTLSInspectionConfigurationResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p>
   *          <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p>
   * @public
   */
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse | undefined;
}
