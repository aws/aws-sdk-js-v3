import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the
 *             <code>PublishMetrics</code>
 *             <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's
 *          part of the identity of a metric. </p>
 *          <p>AWS Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the
 *          dimension value. </p>
 *          <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User
 *             Guide</a>.</p>
 */
export interface Dimension {
  /**
   * <p>The value to use in the custom metric dimension.</p>
   */
  Value: string | undefined;
}

export namespace Dimension {
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

/**
 * <p>Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the
 *          matching packet. This setting defines a CloudWatch dimension value to be published.</p>
 */
export interface PublishMetricAction {
  /**
   * <p></p>
   */
  Dimensions: Dimension[] | undefined;
}

export namespace PublishMetricAction {
  export const filterSensitiveLog = (obj: PublishMetricAction): any => ({
    ...obj,
  });
}

/**
 * <p>A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.</p>
 */
export interface ActionDefinition {
  /**
   * <p>Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the
   *          matching packet. This setting defines a CloudWatch dimension value to be published.</p>
   *          <p>You can pair this custom action with any of the standard stateless rule actions. For
   *          example, you could pair this in a rule action with the standard action that forwards the
   *          packet for stateful inspection. Then, when a packet matches the rule, Network Firewall
   *          publishes metrics for the packet and forwards it. </p>
   */
  PublishMetricAction?: PublishMetricAction;
}

export namespace ActionDefinition {
  export const filterSensitiveLog = (obj: ActionDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A single IP address specification. This is used in the <a>MatchAttributes</a>
 *          source and destination specifications.</p>
 */
export interface Address {
  /**
   * <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  AddressDefinition: string | undefined;
}

export namespace Address {
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj,
  });
}

export interface AssociateFirewallPolicyRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   */
  FirewallPolicyArn: string | undefined;
}

export namespace AssociateFirewallPolicyRequest {
  export const filterSensitiveLog = (obj: AssociateFirewallPolicyRequest): any => ({
    ...obj,
  });
}

export interface AssociateFirewallPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
}

export namespace AssociateFirewallPolicyResponse {
  export const filterSensitiveLog = (obj: AssociateFirewallPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The token you provided is stale or isn't valid for the operation. </p>
 */
export interface InvalidTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTokenException {
  export const filterSensitiveLog = (obj: InvalidTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>Unable to locate a resource using the parameters that you provided.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Unable to process the request due to throttling limitations.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The ID for a subnet that you want to associate with the firewall. This is used with
 *             <a>CreateFirewall</a> and <a>AssociateSubnets</a>. AWS Network Firewall
 *          creates an instance of the associated firewall in each subnet that you specify, to filter
 *          traffic in the subnet's Availability Zone.</p>
 */
export interface SubnetMapping {
  /**
   * <p>The unique identifier for the subnet. </p>
   */
  SubnetId: string | undefined;
}

export namespace SubnetMapping {
  export const filterSensitiveLog = (obj: SubnetMapping): any => ({
    ...obj,
  });
}

export interface AssociateSubnetsRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The IDs of the subnets that you want to associate with the firewall. </p>
   */
  SubnetMappings: SubnetMapping[] | undefined;
}

export namespace AssociateSubnetsRequest {
  export const filterSensitiveLog = (obj: AssociateSubnetsRequest): any => ({
    ...obj,
  });
}

export interface AssociateSubnetsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>The IDs of the subnets that are associated with the firewall. </p>
   */
  SubnetMappings?: SubnetMapping[];

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
}

export namespace AssociateSubnetsResponse {
  export const filterSensitiveLog = (obj: AssociateSubnetsResponse): any => ({
    ...obj,
  });
}

export enum AttachmentStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  READY = "READY",
  SCALING = "SCALING",
}

/**
 * <p>The configuration and status for a single subnet that you've specified for use by the
 *          AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.</p>
 */
export interface Attachment {
  /**
   * <p>The unique identifier of the subnet that you've specified to be used for a firewall
   *          endpoint. </p>
   */
  SubnetId?: string;

  /**
   * <p>The identifier of the firewall endpoint that Network Firewall has instantiated in the
   *          subnet. You use this to identify the firewall endpoint in the VPC route tables, when you
   *          redirect the VPC traffic through the endpoint. </p>
   */
  EndpointId?: string;

  /**
   * <p>The current status of the firewall endpoint in the subnet. This value reflects both the
   *          instantiation of the endpoint in the VPC subnet and the sync states that are reported in
   *          the <code>Config</code> settings. When this value is <code>READY</code>, the endpoint is
   *          available and configured properly to handle network traffic. When the endpoint isn't
   *          available for traffic, this value will reflect its state, for example
   *          <code>CREATING</code>, <code>DELETING</code>, or <code>FAILED</code>.</p>
   */
  Status?: AttachmentStatus | string;
}

export namespace Attachment {
  export const filterSensitiveLog = (obj: Attachment): any => ({
    ...obj,
  });
}

export enum ConfigurationSyncState {
  IN_SYNC = "IN_SYNC",
  PENDING = "PENDING",
}

/**
 * <p>A key:value pair associated with an AWS resource. The key:value pair can be anything you
 *          define. Typically, the tag key represents a category (such as "environment") and the tag
 *          value represents a specific value within that category (such as "test," "development," or
 *          "production"). You can add up to 50 tags to each AWS resource. </p>
 */
export interface Tag {
  /**
   * <p>The part of the key:value pair that defines a tag. You can use a tag key to describe a
   *          category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * <p>The part of the key:value pair that defines a tag. You can use a tag value to describe a
   *          specific value within a category, such as "companyA" or "companyB." Tag values are
   *          case-sensitive.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a>FirewallPolicy</a> that you want to
   *          use for the firewall.</p>
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC where Network Firewall should create the firewall. </p>
   *          <p>You can't change this setting after you create the firewall. </p>
   */
  VpcId: string | undefined;

  /**
   * <p>The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a
   *          different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each
   *          subnet. </p>
   */
  SubnetMappings: SubnetMapping[] | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFirewallRequest {
  export const filterSensitiveLog = (obj: CreateFirewallRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
 *          <p>The status of the firewall, for example whether it's ready to filter network traffic,
 *          is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both
 *          objects by calling <a>DescribeFirewall</a>.</p>
 */
export interface Firewall {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>The relationship of firewall to firewall policy is many to one. Each firewall requires
   *          one firewall policy association, and you can use the same firewall policy for multiple
   *          firewalls. </p>
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier of the VPC where the firewall is in use. </p>
   */
  VpcId: string | undefined;

  /**
   * <p>The public subnets that Network Firewall is using for the firewall. Each subnet must belong
   *          to a different Availability Zone. </p>
   */
  SubnetMappings: SubnetMapping[] | undefined;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the firewall. </p>
   */
  FirewallId: string | undefined;

  /**
   * <p></p>
   */
  Tags?: Tag[];
}

export namespace Firewall {
  export const filterSensitiveLog = (obj: Firewall): any => ({
    ...obj,
  });
}

export enum FirewallStatusValue {
  DELETING = "DELETING",
  PROVISIONING = "PROVISIONING",
  READY = "READY",
}

export enum PerObjectSyncStatus {
  IN_SYNC = "IN_SYNC",
  PENDING = "PENDING",
}

/**
 * <p></p>
 */
export interface PerObjectStatus {
  /**
   * <p></p>
   */
  SyncStatus?: PerObjectSyncStatus | string;
}

export namespace PerObjectStatus {
  export const filterSensitiveLog = (obj: PerObjectStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the firewall endpoint and firewall policy configuration for a single VPC
 *          subnet. </p>
 *          <p>For each VPC subnet that you associate with a firewall, AWS Network Firewall does the
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
 */
export interface SyncState {
  /**
   * <p>The attachment status of the firewall's association with a single VPC subnet. For each
   *          configured subnet, Network Firewall creates the attachment by instantiating the firewall
   *          endpoint in the subnet so that it's ready to take traffic. This is part of the <a>FirewallStatus</a>.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The configuration status of the firewall endpoint in a single VPC subnet. Network Firewall
   *          provides each endpoint with the rules that are configured in the firewall policy. Each time
   *          you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the
   *          rules in the endpoint, so it can properly filter network traffic. This is part of the <a>FirewallStatus</a>.</p>
   */
  Config?: { [key: string]: PerObjectStatus };
}

export namespace SyncState {
  export const filterSensitiveLog = (obj: SyncState): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
 */
export interface FirewallStatus {
  /**
   * <p>The readiness of the configured firewall to handle network traffic across all of the
   *          Availability Zones where you've configured it. This setting is <code>READY</code> only when
   *          the <code>ConfigurationSyncStateSummary</code> value is <code>IN_SYNC</code> and the
   *             <code>Attachment</code>
   *             <code>Status</code> values for all of the configured subnets are <code>READY</code>.
   *       </p>
   */
  Status: FirewallStatusValue | string | undefined;

  /**
   * <p>The configuration sync state for the firewall. This summarizes the sync states reported
   *          in the <code>Config</code> settings for all of the Availability Zones where you have
   *          configured the firewall. </p>
   *          <p>When you create a firewall or update its configuration, for example by adding a rule
   *          group to its firewall policy, Network Firewall distributes the configuration changes to all
   *          zones where the firewall is in use. This summary indicates whether the configuration
   *          changes have been applied everywhere. </p>
   *          <p>This status must be <code>IN_SYNC</code> for the firewall to be ready for use, but it
   *          doesn't indicate that the firewall is ready. The <code>Status</code> setting indicates
   *          firewall readiness.</p>
   */
  ConfigurationSyncStateSummary: ConfigurationSyncState | string | undefined;

  /**
   * <p>The subnets that you've configured for use by the Network Firewall firewall. This contains
   *          one array element per Availability Zone where you've configured a subnet. These objects
   *          provide details of the information that is summarized in the
   *             <code>ConfigurationSyncStateSummary</code> and <code>Status</code>, broken down by zone
   *          and configuration object. </p>
   */
  SyncStates?: { [key: string]: SyncState };
}

export namespace FirewallStatus {
  export const filterSensitiveLog = (obj: FirewallStatus): any => ({
    ...obj,
  });
}

export interface CreateFirewallResponse {
  /**
   * <p>The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. </p>
   */
  Firewall?: Firewall;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   */
  FirewallStatus?: FirewallStatus;
}

export namespace CreateFirewallResponse {
  export const filterSensitiveLog = (obj: CreateFirewallResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
 */
export interface InsufficientCapacityException extends __SmithyException, $MetadataBearer {
  name: "InsufficientCapacityException";
  $fault: "server";
  Message?: string;
}

export namespace InsufficientCapacityException {
  export const filterSensitiveLog = (obj: InsufficientCapacityException): any => ({
    ...obj,
  });
}

/**
 * <p>Unable to perform the operation because doing so would violate a limit setting. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Identifier for a single stateful rule group, used in a firewall policy to refer to a
 *          rule group. </p>
 */
export interface StatefulRuleGroupReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the stateful rule group.</p>
   */
  ResourceArn: string | undefined;
}

export namespace StatefulRuleGroupReference {
  export const filterSensitiveLog = (obj: StatefulRuleGroupReference): any => ({
    ...obj,
  });
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
 */
export interface CustomAction {
  /**
   * <p>The descriptive name of the custom action. You can't change the name of a custom action after you create it.</p>
   */
  ActionName: string | undefined;

  /**
   * <p>The custom action associated with the action name.</p>
   */
  ActionDefinition: ActionDefinition | undefined;
}

export namespace CustomAction {
  export const filterSensitiveLog = (obj: CustomAction): any => ({
    ...obj,
  });
}

/**
 * <p>Identifier for a single stateless rule group, used in a firewall policy to refer to the
 *          rule group. </p>
 */
export interface StatelessRuleGroupReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the stateless rule group.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An integer setting that indicates the order in which to run the stateless rule groups in
   *          a single <a>FirewallPolicy</a>. Network Firewall applies each stateless rule group
   *          to a packet starting with the group that has the lowest priority setting. You must ensure
   *          that the priority settings are unique within each policy.</p>
   */
  Priority: number | undefined;
}

export namespace StatelessRuleGroupReference {
  export const filterSensitiveLog = (obj: StatelessRuleGroupReference): any => ({
    ...obj,
  });
}

/**
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless
 *          and stateful rule groups and other settings. You can use one firewall policy for multiple
 *          firewalls. </p>
 *          <p>This, along with <a>FirewallPolicyResponse</a>, define the policy.
 *          You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
 */
export interface FirewallPolicy {
  /**
   * <p>References to the stateless rule groups that are used in the policy. These define the
   *          matching criteria in stateless rules. </p>
   */
  StatelessRuleGroupReferences?: StatelessRuleGroupReference[];

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
   */
  StatelessDefaultActions: string[] | undefined;

  /**
   * <p>The actions to take on a fragmented packet if it doesn't match any of the stateless
   *          rules in the policy. If you want non-matching fragmented packets to be forwarded for
   *          stateful inspection, specify <code>aws:forward_to_sfe</code>. </p>
   *          <p>You must specify one of the standard actions: <code>aws:pass</code>,
   *             <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>. In addition, you can specify
   *          custom actions that are compatible with your standard section choice.</p>
   *          <p>For example, you could specify <code>["aws:pass"]</code> or you could specify
   *             <code>["aws:pass", “customActionName”]</code>. For information about compatibility, see
   *          the custom action descriptions under <a>CustomAction</a>.</p>
   */
  StatelessFragmentDefaultActions: string[] | undefined;

  /**
   * <p>The custom action definitions that are available for use in the firewall policy's
   *             <code>StatelessDefaultActions</code> setting. You name each custom action that you
   *          define, and then you can use it by name in your default actions specifications.</p>
   */
  StatelessCustomActions?: CustomAction[];

  /**
   * <p>References to the stateless rule groups that are used in the policy. These define the
   *          inspection criteria in stateful rules. </p>
   */
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[];
}

export namespace FirewallPolicy {
  export const filterSensitiveLog = (obj: FirewallPolicy): any => ({
    ...obj,
  });
}

export interface CreateFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   */
  FirewallPolicyName: string | undefined;

  /**
   * <p>The rule groups and policy actions to use in the firewall policy.</p>
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   */
  DryRun?: boolean;
}

export namespace CreateFirewallPolicyRequest {
  export const filterSensitiveLog = (obj: CreateFirewallPolicyRequest): any => ({
    ...obj,
  });
}

export enum ResourceStatus {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
}

/**
 * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
 */
export interface FirewallPolicyResponse {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   */
  FirewallPolicyName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <note>
   *             <p>If this response is for a create request that had <code>DryRun</code> set to
   *                <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid
   *             resource.</p>
   *          </note>
   */
  FirewallPolicyArn: string | undefined;

  /**
   * <p>The unique identifier for the firewall policy. </p>
   */
  FirewallPolicyId: string | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the firewall policy. You can retrieve this for a firewall policy
   *          by calling <a>DescribeFirewallPolicy</a> and providing the firewall policy's
   *          name or ARN.</p>
   */
  FirewallPolicyStatus?: ResourceStatus | string;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace FirewallPolicyResponse {
  export const filterSensitiveLog = (obj: FirewallPolicyResponse): any => ({
    ...obj,
  });
}

export interface CreateFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

export namespace CreateFirewallPolicyResponse {
  export const filterSensitiveLog = (obj: CreateFirewallPolicyResponse): any => ({
    ...obj,
  });
}

export enum GeneratedRulesType {
  ALLOWLIST = "ALLOWLIST",
  DENYLIST = "DENYLIST",
}

export enum TargetType {
  HTTP_HOST = "HTTP_HOST",
  TLS_SNI = "TLS_SNI",
}

/**
 * <p>Stateful inspection criteria for a domain list rule group. </p>
 */
export interface RulesSourceList {
  /**
   * <p>The domains that you want to inspect for in your traffic flows. To provide multiple
   *          domains, separate them with commas.</p>
   */
  Targets: string[] | undefined;

  /**
   * <p></p>
   */
  TargetTypes: (TargetType | string)[] | undefined;

  /**
   * <p>Whether you want to allow or deny access to the domains in your target list.</p>
   */
  GeneratedRulesType: GeneratedRulesType | string | undefined;
}

export namespace RulesSourceList {
  export const filterSensitiveLog = (obj: RulesSourceList): any => ({
    ...obj,
  });
}

export enum StatefulAction {
  ALERT = "ALERT",
  DROP = "DROP",
  PASS = "PASS",
}

export enum StatefulRuleDirection {
  ANY = "ANY",
  FORWARD = "FORWARD",
}

export enum StatefulRuleProtocol {
  ANY = "IP",
  DCERPC = "DCERPC",
  DHCP = "DHCP",
  DNS = "DNS",
  FTP = "FTP",
  HTTP = "HTTP",
  ICMP = "ICMP",
  IKEV2 = "IKEV2",
  IMAP = "IMAP",
  KRB5 = "KRB5",
  MSN = "MSN",
  NTP = "NTP",
  SMB = "SMB",
  SMTP = "SMTP",
  SSH = "SSH",
  TCP = "TCP",
  TFTP = "TFTP",
  TLS = "TLS",
  UDP = "UDP",
}

/**
 * <p>The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful
 *          traffic flow inspection. Traffic flows that match the criteria are a match for the
 *          corresponding <a>StatefulRule</a>. </p>
 */
export interface Header {
  /**
   * <p>The protocol to inspect for. To match with any protocol, specify <code>ANY</code>. </p>
   */
  Protocol: StatefulRuleProtocol | string | undefined;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation.
   *           To match with any address, specify <code>ANY</code>. </p>
   *          <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  Source: string | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port, for
   *            example <code>1994</code> and you can specify a port
   *                range, for example <code>1990-1994</code>.
   *           To match with any port, specify <code>ANY</code>. </p>
   */
  SourcePort: string | undefined;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection
   *          matches bidirectional traffic, both from the source to the destination and from the
   *          destination to the source. If set to <code>FORWARD</code>, the inspection only matches
   *          traffic going from the source to the destination. </p>
   */
  Direction: StatefulRuleDirection | string | undefined;

  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation.
   *           To match with any address, specify <code>ANY</code>. </p>
   *          <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  Destination: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, for
   *            example <code>1994</code> and you can specify
   *          a port range, for example <code>1990-1994</code>.
   *           To match with any port, specify <code>ANY</code>. </p>
   */
  DestinationPort: string | undefined;
}

export namespace Header {
  export const filterSensitiveLog = (obj: Header): any => ({
    ...obj,
  });
}

/**
 * <p>Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.</p>
 */
export interface RuleOption {
  /**
   * <p></p>
   */
  Keyword: string | undefined;

  /**
   * <p></p>
   */
  Settings?: string[];
}

export namespace RuleOption {
  export const filterSensitiveLog = (obj: RuleOption): any => ({
    ...obj,
  });
}

/**
 * <p>A single 5-tuple stateful rule, for use in a stateful rule group.</p>
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
   *                   <b>ALERT</b> - Permits the packets to go to the
   *                intended destination and sends an alert log message, if alert logging is configured in the <a>Firewall</a>
   *                   <a>LoggingConfiguration</a>. </p>
   *                <p>You can use this action to test a rule that you intend to use to drop traffic. You
   *                can enable the rule with <code>ALERT</code> action, verify in the logs that the rule
   *                is filtering as you want, then change the action to <code>DROP</code>.</p>
   *             </li>
   *          </ul>
   */
  Action: StatefulAction | string | undefined;

  /**
   * <p>The stateful 5-tuple inspection criteria for this rule, used to inspect traffic flows.
   *       </p>
   */
  Header: Header | undefined;

  /**
   * <p></p>
   */
  RuleOptions: RuleOption[] | undefined;
}

export namespace StatefulRule {
  export const filterSensitiveLog = (obj: StatefulRule): any => ({
    ...obj,
  });
}

/**
 * <p>A single port range specification. This is used for source and destination port ranges
 *          in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and
 *             <code>DestinationPorts</code> settings. </p>
 */
export interface PortRange {
  /**
   * <p>The lower limit of the port range. This must be less than or equal to the
   *             <code>ToPort</code> specification. </p>
   */
  FromPort: number | undefined;

  /**
   * <p>The upper limit of the port range. This must be greater than or equal to the
   *             <code>FromPort</code> specification. </p>
   */
  ToPort: number | undefined;
}

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

export enum TCPFlag {
  ACK = "ACK",
  CWR = "CWR",
  ECE = "ECE",
  FIN = "FIN",
  PSH = "PSH",
  RST = "RST",
  SYN = "SYN",
  URG = "URG",
}

/**
 * <p>TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.</p>
 */
export interface TCPFlagField {
  /**
   * <p>Used in conjunction with the <code>Masks</code> setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the <code>Masks</code> setting.</p>
   *          <p>For the flags that are specified in the masks setting, the following must be true for the packet to match: </p>
   *          <ul>
   *             <li>
   *                <p>The ones that are set in this flags setting must be set in the packet. </p>
   *            </li>
   *             <li>
   *                <p>The ones that are not set in this flags setting must also not be set in the packet. </p>
   *            </li>
   *          </ul>
   */
  Flags: (TCPFlag | string)[] | undefined;

  /**
   * <p>The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.</p>
   */
  Masks?: (TCPFlag | string)[];
}

export namespace TCPFlagField {
  export const filterSensitiveLog = (obj: TCPFlagField): any => ({
    ...obj,
  });
}

/**
 * <p>Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. </p>
 */
export interface MatchAttributes {
  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation. If not
   *          specified, this matches with any source address. </p>
   */
  Sources?: Address[];

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation. If not
   *          specified, this matches with any destination address. </p>
   */
  Destinations?: Address[];

  /**
   * <p>The source ports to inspect for. If not specified, this matches with any source port.
   *          This setting is only used for protocols 6 (TCP) and 17 (UDP). </p>
   *          <p>You can specify individual ports, for example <code>1994</code> and you can specify port
   *          ranges, for example <code>1990-1994</code>. </p>
   */
  SourcePorts?: PortRange[];

  /**
   * <p>The destination ports to inspect for. If not specified, this matches with any
   *          destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP). </p>
   *          <p>You can specify individual ports, for example <code>1994</code> and you can specify port
   *          ranges, for example <code>1990-1994</code>. </p>
   */
  DestinationPorts?: PortRange[];

  /**
   * <p>The protocols to inspect for, specified using each protocol's assigned internet protocol
   *          number (IANA). If not specified, this matches with any protocol. </p>
   */
  Protocols?: number[];

  /**
   * <p>The TCP flags and masks to inspect for. If not specified, this matches with any
   *          settings. This setting is only used for protocol 6 (TCP).</p>
   */
  TCPFlags?: TCPFlagField[];
}

export namespace MatchAttributes {
  export const filterSensitiveLog = (obj: MatchAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching
 *          criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on
 *          the packet.</p>
 */
export interface RuleDefinition {
  /**
   * <p>Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. </p>
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
   */
  Actions: string[] | undefined;
}

export namespace RuleDefinition {
  export const filterSensitiveLog = (obj: RuleDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.</p>
 */
export interface StatelessRule {
  /**
   * <p>Defines the stateless 5-tuple packet inspection criteria and the action to take on a
   *          packet that matches the criteria. </p>
   */
  RuleDefinition: RuleDefinition | undefined;

  /**
   * <p>A setting that indicates the order in which to run this rule relative to all of the
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
   */
  Priority: number | undefined;
}

export namespace StatelessRule {
  export const filterSensitiveLog = (obj: StatelessRule): any => ({
    ...obj,
  });
}

/**
 * <p>Stateless inspection criteria. Each stateless rule group uses exactly one of these data
 *          types to define its stateless rules. </p>
 */
export interface StatelessRulesAndCustomActions {
  /**
   * <p>Defines the set of stateless rules for use in a stateless rule group. </p>
   */
  StatelessRules: StatelessRule[] | undefined;

  /**
   * <p>Defines an array of individual custom action definitions that are available for use by
   *          the stateless rules in this <code>StatelessRulesAndCustomActions</code> specification. You
   *          name each custom action that you define, and then you can use it by name in your <a>StatelessRule</a>
   *             <a>RuleDefinition</a>
   *             <code>Actions</code> specification.</p>
   */
  CustomActions?: CustomAction[];
}

export namespace StatelessRulesAndCustomActions {
  export const filterSensitiveLog = (obj: StatelessRulesAndCustomActions): any => ({
    ...obj,
  });
}

/**
 * <p>The stateless or stateful rules definitions for use in a single rule group. Each rule
 *          group requires a single <code>RulesSource</code>. You can use an instance of this for
 *          either stateless rules or stateful rules. </p>
 */
export interface RulesSource {
  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention
   *          system (IPS) rules. Suricata is an open-source network IPS that includes a standard
   *          rule-based language for network traffic inspection.</p>
   *          <p>These rules contain the inspection criteria and the action to take for traffic that
   *          matches the criteria, so this type of rule group doesn't have a separate action
   *          setting.</p>
   *          <p>You can provide the rules from a file that you've stored in an Amazon S3 bucket, or by
   *          providing the rules in a Suricata rules string. To import from Amazon S3, provide the fully
   *          qualified name of the file that contains the rules definitions. To provide a Suricata rule
   *          string, provide the complete, Suricata compatible rule.</p>
   */
  RulesString?: string;

  /**
   * <p>Stateful inspection criteria for a domain list rule group. </p>
   */
  RulesSourceList?: RulesSourceList;

  /**
   * <p>The 5-tuple stateful inspection criteria. This contains an array of individual 5-tuple
   *          stateful rules to be used together in a stateful rule group. </p>
   */
  StatefulRules?: StatefulRule[];

  /**
   * <p>Stateless inspection criteria to be used in a stateless rule group. </p>
   */
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}

export namespace RulesSource {
  export const filterSensitiveLog = (obj: RulesSource): any => ({
    ...obj,
  });
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. </p>
 */
export interface IPSet {
  /**
   * <p>The list of IP addresses and address ranges, in CIDR notation.
   *
   *       </p>
   */
  Definition: string[] | undefined;
}

export namespace IPSet {
  export const filterSensitiveLog = (obj: IPSet): any => ({
    ...obj,
  });
}

/**
 * <p>A set of port ranges for use in the rules in a rule group. </p>
 */
export interface PortSet {
  /**
   * <p>The set of port ranges.
   *       </p>
   */
  Definition?: string[];
}

export namespace PortSet {
  export const filterSensitiveLog = (obj: PortSet): any => ({
    ...obj,
  });
}

/**
 * <p>Settings that are available for use in the rules in the <a>RuleGroup</a>
 *          where this is defined. </p>
 */
export interface RuleVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation. </p>
   */
  IPSets?: { [key: string]: IPSet };

  /**
   * <p>A list of port ranges. </p>
   */
  PortSets?: { [key: string]: PortSet };
}

export namespace RuleVariables {
  export const filterSensitiveLog = (obj: RuleVariables): any => ({
    ...obj,
  });
}

/**
 * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
 *          <p>AWS Network Firewall uses a rule group to inspect and control network traffic.
 *     You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their
 *     traffic flow. </p>
 *          <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from
 *     more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
 */
export interface RuleGroup {
  /**
   * <p>Settings that are available for use in the rules in the rule group. You can only use
   *          these for stateful rule groups. </p>
   */
  RuleVariables?: RuleVariables;

  /**
   * <p>The stateful rules or stateless rules for the rule group. </p>
   */
  RulesSource: RulesSource | undefined;
}

export namespace RuleGroup {
  export const filterSensitiveLog = (obj: RuleGroup): any => ({
    ...obj,
  });
}

export enum RuleGroupType {
  STATEFUL = "STATEFUL",
  STATELESS = "STATELESS",
}

export interface CreateRuleGroupRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   */
  RuleGroupName: string | undefined;

  /**
   * <p>An object that defines the rule group rules. </p>
   *          <note>
   *             <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p>
   *          </note>
   */
  RuleGroup?: RuleGroup;

  /**
   * <p>The name of a file containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in a file through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your file.
   *          Network Firewall uses the file contents to populate the rule group rules, but does not maintain a reference to the file or use the file in any way after performing the create or update. If you call <a>DescribeRuleGroup</a> to retrieve the rule group, Network Firewall returns rules settings inside a <a>RuleGroup</a> object. </p>
   */
  Rules?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   */
  Type: RuleGroupType | string | undefined;

  /**
   * <p>A description of the rule group. </p>
   */
  Description?: string;

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
   *          <p>For
   *          a stateful rule group, the minimum capacity required is the number of individual rules that
   *          you expect to have in the rule group. </p>
   */
  Capacity: number | undefined;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   */
  DryRun?: boolean;
}

export namespace CreateRuleGroupRequest {
  export const filterSensitiveLog = (obj: CreateRuleGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
 */
export interface RuleGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <note>
   *             <p>If this response is for a create request that had <code>DryRun</code> set to
   *                <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid
   *             resource.</p>
   *          </note>
   */
  RuleGroupArn: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   */
  RuleGroupName: string | undefined;

  /**
   * <p>The unique identifier for the rule group. </p>
   */
  RuleGroupId: string | undefined;

  /**
   * <p>A description of the rule group. </p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   */
  Type?: RuleGroupType | string;

  /**
   * <p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation.
   *       When you update a rule group, you are limited to this capacity. When you reference a rule group
   *       from a firewall policy, Network Firewall reserves this capacity for the rule group. </p>
   *          <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling
   *       <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>
   */
  Capacity?: number;

  /**
   * <p>Detailed information about the current status of a rule group. </p>
   */
  RuleGroupStatus?: ResourceStatus | string;

  /**
   * <p>The key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace RuleGroupResponse {
  export const filterSensitiveLog = (obj: RuleGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

export namespace CreateRuleGroupResponse {
  export const filterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;
}

export namespace DeleteFirewallRequest {
  export const filterSensitiveLog = (obj: DeleteFirewallRequest): any => ({
    ...obj,
  });
}

export interface DeleteFirewallResponse {
  /**
   * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
   *          <p>The status of the firewall, for example whether it's ready to filter network traffic,
   *          is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both
   *          objects by calling <a>DescribeFirewall</a>.</p>
   */
  Firewall?: Firewall;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   */
  FirewallStatus?: FirewallStatus;
}

export namespace DeleteFirewallResponse {
  export const filterSensitiveLog = (obj: DeleteFirewallResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation you requested isn't supported by Network Firewall. </p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

export interface DeleteFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyArn?: string;
}

export namespace DeleteFirewallPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteFirewallPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteFirewallPolicyResponse {
  /**
   * <p>The object containing the definition of the <a>FirewallPolicyResponse</a>
   *          that you asked to delete. </p>
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

export namespace DeleteFirewallPolicyResponse {
  export const filterSensitiveLog = (obj: DeleteFirewallPolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete. </p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteRuleGroupRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupArn?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   */
  Type?: RuleGroupType | string;
}

export namespace DeleteRuleGroupRequest {
  export const filterSensitiveLog = (obj: DeleteRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleGroupResponse {
  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

export namespace DeleteRuleGroupResponse {
  export const filterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeFirewallRequest {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;
}

export namespace DescribeFirewallRequest {
  export const filterSensitiveLog = (obj: DescribeFirewallRequest): any => ({
    ...obj,
  });
}

export interface DescribeFirewallResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. </p>
   */
  Firewall?: Firewall;

  /**
   * <p>Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.</p>
   */
  FirewallStatus?: FirewallStatus;
}

export namespace DescribeFirewallResponse {
  export const filterSensitiveLog = (obj: DescribeFirewallResponse): any => ({
    ...obj,
  });
}

export interface DescribeFirewallPolicyRequest {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyArn?: string;
}

export namespace DescribeFirewallPolicyRequest {
  export const filterSensitiveLog = (obj: DescribeFirewallPolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;

  /**
   * <p>The policy for the specified firewall policy. </p>
   */
  FirewallPolicy?: FirewallPolicy;
}

export namespace DescribeFirewallPolicyResponse {
  export const filterSensitiveLog = (obj: DescribeFirewallPolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;
}

export namespace DescribeLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export enum LogDestinationType {
  CLOUDWATCH_LOGS = "CloudWatchLogs",
  KINESIS_DATA_FIREHOSE = "KinesisDataFirehose",
  S3 = "S3",
}

export enum LogType {
  ALERT = "ALERT",
  FLOW = "FLOW",
}

/**
 * <p>Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used
 *          in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p>
 *          <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log
 *           types. The stateful rules engine records flow logs for all network traffic that it receives.
 *           It records alert logs for traffic that matches stateful rules that have the rule
 *           action set to <code>DROP</code> or <code>ALERT</code>. </p>
 */
export interface LogDestinationConfig {
  /**
   * <p>The type of log to send. Alert logs report traffic that matches a <a>StatefulRule</a> with an action setting that sends an alert log message. Flow logs are
   *          standard network traffic flow logs. </p>
   */
  LogType: LogType | string | undefined;

  /**
   * <p>The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket,
   *          a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p>
   */
  LogDestinationType: LogDestinationType | string | undefined;

  /**
   * <p>The named location for the logs, provided in a key:value mapping that is specific to the
   *          chosen destination type. </p>
   *          <ul>
   *             <li>
   *                <p>For an Amazon S3 bucket, provide the name of the bucket, with key <code>bucketName</code>,
   *                and optionally provide a prefix, with key <code>prefix</code>. The following example
   *                specifies an Amazon S3 bucket named
   *                <code>DOC-EXAMPLE-BUCKET</code> and the prefix <code>alerts</code>: </p>
   *                <p>
   *                   <code>"LogDestination": { "bucketName": "DOC-EXAMPLE-BUCKET", "prefix": "alerts"
   *                   }</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a CloudWatch log group, provide the name of the CloudWatch log group, with key
   *                   <code>logGroup</code>. The following example specifies a log group named
   *                   <code>alert-log-group</code>: </p>
   *                <p>
   *                   <code>"LogDestination": { "logGroup": "alert-log-group" }</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a Kinesis Data Firehose delivery stream, provide the name of the delivery stream, with key
   *                   <code>deliveryStream</code>. The following example specifies a delivery stream
   *                named <code>alert-delivery-stream</code>: </p>
   *                <p>
   *                   <code>"LogDestination": { "deliveryStream": "alert-delivery-stream"
   *                }</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LogDestination: { [key: string]: string } | undefined;
}

export namespace LogDestinationConfig {
  export const filterSensitiveLog = (obj: LogDestinationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. </p>
 */
export interface LoggingConfiguration {
  /**
   * <p>Defines the logging destinations for the logs for a firewall. Network Firewall generates
   *          logs for stateful rule groups. </p>
   */
  LogDestinationConfigs: LogDestinationConfig[] | undefined;
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

export interface DescribeLoggingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. </p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace DescribeLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve. </p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeResourcePolicyRequest {
  export const filterSensitiveLog = (obj: DescribeResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyResponse {
  /**
   * <p>The AWS Identity and Access Management policy for the resource. </p>
   */
  Policy?: string;
}

export namespace DescribeResourcePolicyResponse {
  export const filterSensitiveLog = (obj: DescribeResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeRuleGroupRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupArn?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   */
  Type?: RuleGroupType | string;
}

export namespace DescribeRuleGroupRequest {
  export const filterSensitiveLog = (obj: DescribeRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   *          <p>AWS Network Firewall uses a rule group to inspect and control network traffic.
   *     You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their
   *     traffic flow. </p>
   *          <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from
   *     more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
   */
  RuleGroup?: RuleGroup;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

export namespace DescribeRuleGroupResponse {
  export const filterSensitiveLog = (obj: DescribeRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetsRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The unique identifiers for the subnets that you want to disassociate. </p>
   */
  SubnetIds: string[] | undefined;
}

export namespace DisassociateSubnetsRequest {
  export const filterSensitiveLog = (obj: DisassociateSubnetsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>The IDs of the subnets that are associated with the firewall. </p>
   */
  SubnetMappings?: SubnetMapping[];

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
}

export namespace DisassociateSubnetsResponse {
  export const filterSensitiveLog = (obj: DisassociateSubnetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a firewall, returned by operations like create and
 *          describe. You can use the information provided in the metadata to retrieve and manage a
 *          firewall.</p>
 */
export interface FirewallMetadata {
  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;
}

export namespace FirewallMetadata {
  export const filterSensitiveLog = (obj: FirewallMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a firewall policy, returned by operations like create and
 *          describe. You can use the information provided in the metadata to retrieve and manage a
 *          firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
 */
export interface FirewallPolicyMetadata {
  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   */
  Arn?: string;
}

export namespace FirewallPolicyMetadata {
  export const filterSensitiveLog = (obj: FirewallPolicyMetadata): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidResourcePolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourcePolicyException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourcePolicyException {
  export const filterSensitiveLog = (obj: InvalidResourcePolicyException): any => ({
    ...obj,
  });
}

export interface ListFirewallPoliciesRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListFirewallPoliciesRequest {
  export const filterSensitiveLog = (obj: ListFirewallPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListFirewallPoliciesResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The metadata for the firewall policies. Depending on your setting for max results and
   *          the number of firewall policies that you have, this might not be the full list. </p>
   */
  FirewallPolicies?: FirewallPolicyMetadata[];
}

export namespace ListFirewallPoliciesResponse {
  export const filterSensitiveLog = (obj: ListFirewallPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListFirewallsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls
   *          for. Leave this blank to retrieve all firewalls that you have defined.</p>
   */
  VpcIds?: string[];

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListFirewallsRequest {
  export const filterSensitiveLog = (obj: ListFirewallsRequest): any => ({
    ...obj,
  });
}

export interface ListFirewallsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The firewall metadata objects for the VPCs that you specified. Depending on your setting
   *          for max results and the number of firewalls you have, a single call might not be the full
   *          list. </p>
   */
  Firewalls?: FirewallMetadata[];
}

export namespace ListFirewallsResponse {
  export const filterSensitiveLog = (obj: ListFirewallsResponse): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace ListRuleGroupsRequest {
  export const filterSensitiveLog = (obj: ListRuleGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a rule group, returned by <a>ListRuleGroups</a>.
 *          You can use the information provided in the metadata to retrieve and manage a
 *          rule group.</p>
 */
export interface RuleGroupMetadata {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   */
  Arn?: string;
}

export namespace RuleGroupMetadata {
  export const filterSensitiveLog = (obj: RuleGroupMetadata): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The rule group metadata objects that you've defined. Depending on your setting for max
   *          results and the number of rule groups, this might not be the full list. </p>
   */
  RuleGroups?: RuleGroupMetadata[];
}

export namespace ListRuleGroupsResponse {
  export const filterSensitiveLog = (obj: ListRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Network Firewall to return for this request. If more
   *           objects are available, in the response, Network Firewall provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags that are associated with the resource. </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Unable to send logs to a configured logging destination. </p>
 */
export interface LogDestinationPermissionException extends __SmithyException, $MetadataBearer {
  name: "LogDestinationPermissionException";
  $fault: "client";
  Message?: string;
}

export namespace LogDestinationPermissionException {
  export const filterSensitiveLog = (obj: LogDestinationPermissionException): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rule groups and firewall policies with.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The AWS Identity and Access Management policy statement that lists the accounts that you want to share your rule group or firewall policy with
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
   *                <p>network-firewall:CreateFirewall</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:UpdateFirewall</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:AssociateFirewallPolicy</p>
   *             </li>
   *             <li>
   *                <p>network-firewall:ListFirewallPolicies</p>
   *             </li>
   *          </ul>
   *          <p>In the Resource section of the statement, you specify the ARNs for the rule groups and firewall policies that you want to share with the account that you specified in <code>Arn</code>.</p>
   */
  Policy: string | undefined;
}

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {}

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceOwnerCheckException extends __SmithyException, $MetadataBearer {
  name: "ResourceOwnerCheckException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceOwnerCheckException {
  export const filterSensitiveLog = (obj: ResourceOwnerCheckException): any => ({
    ...obj,
  });
}

export interface UpdateFirewallDeleteProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   */
  DeleteProtection: boolean | undefined;
}

export namespace UpdateFirewallDeleteProtectionRequest {
  export const filterSensitiveLog = (obj: UpdateFirewallDeleteProtectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateFirewallDeleteProtectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p></p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
}

export namespace UpdateFirewallDeleteProtectionResponse {
  export const filterSensitiveLog = (obj: UpdateFirewallDeleteProtectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateFirewallDescriptionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>The new description for the firewall. If you omit this setting, Network Firewall removes
   *          the description for the firewall.</p>
   */
  Description?: string;
}

export namespace UpdateFirewallDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdateFirewallDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateFirewallDescriptionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
}

export namespace UpdateFirewallDescriptionResponse {
  export const filterSensitiveLog = (obj: UpdateFirewallDescriptionResponse): any => ({
    ...obj,
  });
}

export interface UpdateFirewallPolicyRequest {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall policy.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>The updated firewall policy to use for the firewall. </p>
   */
  FirewallPolicy: FirewallPolicy | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   */
  DryRun?: boolean;
}

export namespace UpdateFirewallPolicyRequest {
  export const filterSensitiveLog = (obj: UpdateFirewallPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateFirewallPolicyResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p>
   *          <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. </p>
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

export namespace UpdateFirewallPolicyResponse {
  export const filterSensitiveLog = (obj: UpdateFirewallPolicyResponse): any => ({
    ...obj,
  });
}

export interface UpdateFirewallPolicyChangeProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  FirewallPolicyChangeProtection: boolean | undefined;
}

export namespace UpdateFirewallPolicyChangeProtectionRequest {
  export const filterSensitiveLog = (obj: UpdateFirewallPolicyChangeProtectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateFirewallPolicyChangeProtectionResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>A setting indicating whether the firewall is protected against a change to the firewall policy association.
   *          Use this setting to protect against
   *          accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  FirewallPolicyChangeProtection?: boolean;
}

export namespace UpdateFirewallPolicyChangeProtectionResponse {
  export const filterSensitiveLog = (obj: UpdateFirewallPolicyChangeProtectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>Defines how Network Firewall performs logging for a firewall. If you omit this setting,
   *          Network Firewall disables logging for the firewall.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace UpdateLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoggingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. </p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace UpdateLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateRuleGroupRequest {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule group.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupArn?: string;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupName?: string;

  /**
   * <p>An object that defines the rule group rules. </p>
   *          <note>
   *             <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p>
   *          </note>
   */
  RuleGroup?: RuleGroup;

  /**
   * <p>The name of a file containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in a file through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your file.
   *          Network Firewall uses the file contents to populate the rule group rules, but does not maintain a reference to the file or use the file in any way after performing the create or update. If you call <a>DescribeRuleGroup</a> to retrieve the rule group, Network Firewall returns rules settings inside a <a>RuleGroup</a> object. </p>
   */
  Rules?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
   */
  Type?: RuleGroupType | string;

  /**
   * <p>A description of the rule group. </p>
   */
  Description?: string;

  /**
   * <p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p>
   *          <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully,
   *          but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with
   *          dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have
   *          the required permissions to run the request and that your request parameters are valid. </p>
   *          <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>
   */
  DryRun?: boolean;
}

export namespace UpdateRuleGroupRequest {
  export const filterSensitiveLog = (obj: UpdateRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
}

export namespace UpdateRuleGroupResponse {
  export const filterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateSubnetChangeProtectionRequest {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   *           <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  FirewallName?: string;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  SubnetChangeProtection: boolean | undefined;
}

export namespace UpdateSubnetChangeProtectionRequest {
  export const filterSensitiveLog = (obj: UpdateSubnetChangeProtectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSubnetChangeProtectionResponse {
  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  SubnetChangeProtection?: boolean;
}

export namespace UpdateSubnetChangeProtectionResponse {
  export const filterSensitiveLog = (obj: UpdateSubnetChangeProtectionResponse): any => ({
    ...obj,
  });
}
