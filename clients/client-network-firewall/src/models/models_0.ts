// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { NetworkFirewallServiceException as __BaseException } from "./NetworkFirewallServiceException";

/**
 * <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the
 *             <code>PublishMetrics</code>
 *             <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's
 *          part of the identity of a metric. </p>
 *          <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the
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

/**
 * <p>A single IP address specification. This is used in the <a>MatchAttributes</a>
 *          source and destination specifications.</p>
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
   */
  AddressDefinition: string | undefined;
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

/**
 * <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
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
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The token you provided is stale or isn't valid for the operation. </p>
 */
export class InvalidTokenException extends __BaseException {
  readonly name: "InvalidTokenException" = "InvalidTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to locate a resource using the parameters that you provided.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to process the request due to throttling limitations.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

export enum IPAddressType {
  DUALSTACK = "DUALSTACK",
  IPV4 = "IPV4",
}

/**
 * <p>The ID for a subnet that you want to associate with the firewall. This is used with
 *             <a>CreateFirewall</a> and <a>AssociateSubnets</a>. Network Firewall
 *          creates an instance of the associated firewall in each subnet that you specify, to filter
 *          traffic in the subnet's Availability Zone.</p>
 */
export interface SubnetMapping {
  /**
   * <p>The unique identifier for the subnet. </p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The subnet's IP address type. You can't change the IP address type after you create the subnet.</p>
   */
  IPAddressType?: IPAddressType | string;
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

/**
 * <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
 */
export class InsufficientCapacityException extends __BaseException {
  readonly name: "InsufficientCapacityException" = "InsufficientCapacityException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
    this.Message = opts.Message;
  }
}

export enum AttachmentStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  READY = "READY",
  SCALING = "SCALING",
}

/**
 * <p>The configuration and status for a single subnet that you've specified for use by the
 *          Network Firewall firewall. This is part of the <a>FirewallStatus</a>.</p>
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
   *          <code>CREATING</code> or <code>DELETING</code>.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>If Network Firewall fails to create or delete the firewall endpoint in the subnet, it populates this with the reason for the failure and how to resolve it. Depending on the error, it can take as many as 15 minutes to populate this field. For more information about the errors and solutions available for this field, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html">Troubleshooting firewall endpoint failures</a> in the <i>Network Firewall Developer Guide</i>.</p>
   */
  StatusMessage?: string;
}

/**
 * <p>General information about the IP set.</p>
 */
export interface IPSetMetadata {
  /**
   * <p>Describes the total number of CIDR blocks currently in use by the IP set references in a firewall. To determine how many CIDR blocks are available for you to use in a firewall, you can call <code>AvailableCIDRCount</code>.</p>
   */
  ResolvedCIDRCount?: number;
}

/**
 * <p>Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.</p>
 */
export interface CIDRSummary {
  /**
   * <p>The number of CIDR blocks available for use by the IP set references in a firewall.</p>
   */
  AvailableCIDRCount?: number;

  /**
   * <p>The number of CIDR blocks used by the IP set references in a firewall.</p>
   */
  UtilizedCIDRCount?: number;

  /**
   * <p>The list of the IP set references used by a firewall.</p>
   */
  IPSetReferences?: Record<string, IPSetMetadata>;
}

/**
 * <p>The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall.</p>
 */
export interface CapacityUsageSummary {
  /**
   * <p>Describes the capacity usage of the CIDR blocks used by the IP set references in a firewall.</p>
   */
  CIDRs?: CIDRSummary;
}

export enum ConfigurationSyncState {
  CAPACITY_CONSTRAINED = "CAPACITY_CONSTRAINED",
  IN_SYNC = "IN_SYNC",
  PENDING = "PENDING",
}

export enum EncryptionType {
  AWS_OWNED_KMS_KEY = "AWS_OWNED_KMS_KEY",
  CUSTOMER_KMS = "CUSTOMER_KMS",
}

/**
 * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>The ID of the Amazon Web Services Key Management Service (KMS) customer managed key. You can use any of the key identifiers that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key ID</a> in the <i>Amazon Web Services KMS Developer Guide</i>.</p>
   */
  KeyId?: string;

  /**
   * <p>The type of Amazon Web Services KMS key to use for encryption of your Network Firewall resources.</p>
   */
  Type: EncryptionType | string | undefined;
}

/**
 * <p>A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you
 *          define. Typically, the tag key represents a category (such as "environment") and the tag
 *          value represents a specific value within that category (such as "test," "development," or
 *          "production"). You can add up to 50 tags to each Amazon Web Services resource. </p>
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

  /**
   * <p>A complex type that contains settings for encryption of your firewall resources.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

/**
 * <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p>
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

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

export enum FirewallStatusValue {
  DELETING = "DELETING",
  PROVISIONING = "PROVISIONING",
  READY = "READY",
}

export enum PerObjectSyncStatus {
  CAPACITY_CONSTRAINED = "CAPACITY_CONSTRAINED",
  IN_SYNC = "IN_SYNC",
  PENDING = "PENDING",
}

/**
 * <p>Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall
 *          provides each endpoint with the rules that are configured in the firewall policy. Each time
 *          you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the
 *           rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.</p>
 */
export interface PerObjectStatus {
  /**
   * <p>Indicates whether this object is in sync with the version indicated in the update token.</p>
   */
  SyncStatus?: PerObjectSyncStatus | string;

  /**
   * <p>The current version of the object that is either in sync or pending synchronization. </p>
   */
  UpdateToken?: string;
}

/**
 * <p>The status of the firewall endpoint and firewall policy configuration for a single VPC
 *          subnet. </p>
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
  Config?: Record<string, PerObjectStatus>;
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
  SyncStates?: Record<string, SyncState>;

  /**
   * <p>Describes the capacity usage of the resources contained in a firewall's reference sets. Network Firewall calclulates the capacity usage by taking an aggregated count of all of the resources used by all of the reference sets in a firewall.</p>
   */
  CapacityUsageSummary?: CapacityUsageSummary;
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

/**
 * <p>Unable to perform the operation because doing so would violate a limit setting. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export enum RuleOrder {
  DEFAULT_ACTION_ORDER = "DEFAULT_ACTION_ORDER",
  STRICT_ORDER = "STRICT_ORDER",
}

export enum StreamExceptionPolicy {
  CONTINUE = "CONTINUE",
  DROP = "DROP",
}

/**
 * <p>Configuration settings for the handling of the stateful rule groups in a firewall policy. </p>
 */
export interface StatefulEngineOptions {
  /**
   * <p>Indicates how to manage the order of stateful rule evaluation for the policy. <code>DEFAULT_ACTION_ORDER</code> is
   *          the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them
   *          based on certain settings. For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   */
  RuleOrder?: RuleOrder | string;

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
   *          </ul>
   */
  StreamExceptionPolicy?: StreamExceptionPolicy | string;
}

export enum OverrideAction {
  DROP_TO_ALERT = "DROP_TO_ALERT",
}

/**
 * <p>The setting that allows the policy owner to change the behavior of the rule group within a policy. </p>
 */
export interface StatefulRuleGroupOverride {
  /**
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to
   *       managed rule groups.</p>
   */
  Action?: OverrideAction | string;
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
   */
  Priority?: number;

  /**
   * <p>The action that allows the policy owner to override the behavior of the rule group within a policy.</p>
   */
  Override?: StatefulRuleGroupOverride;
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
   */
  StatelessFragmentDefaultActions: string[] | undefined;

  /**
   * <p>The custom action definitions that are available for use in the firewall policy's
   *             <code>StatelessDefaultActions</code> setting. You name each custom action that you
   *          define, and then you can use it by name in your default actions specifications.</p>
   */
  StatelessCustomActions?: CustomAction[];

  /**
   * <p>References to the stateful rule groups that are used in the policy. These define the
   *          inspection criteria in stateful rules. </p>
   */
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[];

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
   *          </ul>
   *          <p>For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html#suricata-strict-rule-evaluation-order.html">Strict evaluation order</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   */
  StatefulDefaultActions?: string[];

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The stateful
   *        rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.</p>
   */
  StatefulEngineOptions?: StatefulEngineOptions;
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

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
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

  /**
   * <p>The number of capacity units currently consumed by the policy's stateless rules.</p>
   */
  ConsumedStatelessRuleCapacity?: number;

  /**
   * <p>The number of capacity units currently consumed by the policy's stateful rules.</p>
   */
  ConsumedStatefulRuleCapacity?: number;

  /**
   * <p>The number of firewalls that are associated with this firewall policy.</p>
   */
  NumberOfAssociations?: number;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall policy.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The last time that the firewall policy was changed.</p>
   */
  LastModifiedTime?: Date;
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

/**
 * <p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references a resource that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the IP set you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p>
 *          <p>
 *         Network Firewall currently supports only <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> as IP set references.
 *       </p>
 */
export interface IPSetReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you are referencing in your rule group.</p>
   */
  ReferenceArn?: string;
}

/**
 * <p>Contains a set of IP set references.</p>
 */
export interface ReferenceSets {
  /**
   * <p>The list of IP set references.</p>
   */
  IPSetReferences?: Record<string, IPSetReference>;
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
 *          <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p>
 *          <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p>
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
   */
  Targets: string[] | undefined;

  /**
   * <p>The protocols you want to inspect. Specify <code>TLS_SNI</code> for <code>HTTPS</code>. Specify <code>HTTP_HOST</code> for <code>HTTP</code>. You can specify either or both. </p>
   */
  TargetTypes: (TargetType | string)[] | undefined;

  /**
   * <p>Whether you want to allow or deny access to the domains in your target list.</p>
   */
  GeneratedRulesType: GeneratedRulesType | string | undefined;
}

export enum StatefulAction {
  ALERT = "ALERT",
  DROP = "DROP",
  PASS = "PASS",
  REJECT = "REJECT",
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
 * <p>The basic rule criteria for Network Firewall to use to inspect packet headers in stateful
 *          traffic flow inspection. Traffic flows that match the criteria are a match for the
 *          corresponding <a>StatefulRule</a>. </p>
 */
export interface Header {
  /**
   * <p>The protocol to inspect for. To specify all, you can use <code>IP</code>, because all traffic on Amazon Web Services and on the internet is IP.</p>
   */
  Protocol: StatefulRuleProtocol | string | undefined;

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
   */
  Source: string | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port, for
   *            example <code>1994</code> and you can specify a port
   *                range, for example <code>1990:1994</code>.
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
   */
  Destination: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, for
   *            example <code>1994</code> and you can specify
   *          a port range, for example <code>1990:1994</code>.
   *           To match with any port, specify <code>ANY</code>. </p>
   */
  DestinationPort: string | undefined;
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

/**
 * <p>A single Suricata rules specification, for use in a stateful rule group.
 *        Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options.
 *        For information about the Suricata <code>Rules</code> format, see
 *                                         <a href="https://suricata.readthedocs.io/rules/intro.html#">Rules Format</a>. </p>
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
   *             <li>
   *                <p>
   *                   <b>REJECT</b> - Drops TCP traffic that matches the conditions of the stateful rule, and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and a <code>RST</code> bit contained in the TCP header flags. Also sends an alert log mesage if alert logging is configured in the <a>Firewall</a>
   *                   <a>LoggingConfiguration</a>.</p>
   *                <p>
   *                   <code>REJECT</code> isn't currently available for use with IMAP and FTP protocols.</p>
   *             </li>
   *          </ul>
   */
  Action: StatefulAction | string | undefined;

  /**
   * <p>The stateful inspection criteria for this rule, used to inspect traffic flows.
   *       </p>
   */
  Header: Header | undefined;

  /**
   * <p>Additional options for the rule. These are the Suricata <code>RuleOptions</code> settings.</p>
   */
  RuleOptions: RuleOption[] | undefined;
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
   *             </li>
   *             <li>
   *                <p>The ones that are not set in this flags setting must also not be set in the packet. </p>
   *             </li>
   *          </ul>
   */
  Flags: (TCPFlag | string)[] | undefined;

  /**
   * <p>The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.</p>
   */
  Masks?: (TCPFlag | string)[];
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
   *          ranges, for example <code>1990:1994</code>. </p>
   */
  SourcePorts?: PortRange[];

  /**
   * <p>The destination ports to inspect for. If not specified, this matches with any
   *          destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP). </p>
   *          <p>You can specify individual ports, for example <code>1994</code> and you can specify port
   *          ranges, for example <code>1990:1994</code>. </p>
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

/**
 * <p>The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching
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
   */
  Priority: number | undefined;
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
   */
  RulesString?: string;

  /**
   * <p>Stateful inspection criteria for a domain list rule group. </p>
   */
  RulesSourceList?: RulesSourceList;

  /**
   * <p>An array of individual stateful rules inspection criteria to be used together in a stateful rule group.
   *        Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options.
   *        For information about the Suricata <code>Rules</code> format, see
   *                                         <a href="https://suricata.readthedocs.io/rules/intro.html#">Rules Format</a>. </p>
   */
  StatefulRules?: StatefulRule[];

  /**
   * <p>Stateless inspection criteria to be used in a stateless rule group. </p>
   */
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
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

/**
 * <p>Settings that are available for use in the rules in the <a>RuleGroup</a>
 *          where this is defined. </p>
 */
export interface RuleVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation. </p>
   */
  IPSets?: Record<string, IPSet>;

  /**
   * <p>A list of port ranges. </p>
   */
  PortSets?: Record<string, PortSet>;
}

/**
 * <p>Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.</p>
 */
export interface StatefulRuleOptions {
  /**
   * <p>Indicates how to manage the order of the rule evaluation for the rule group. <code>DEFAULT_ACTION_ORDER</code> is
   *              the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them
   *              based on certain settings. For more information, see
   *          <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.
   *       </p>
   */
  RuleOrder?: RuleOrder | string;
}

/**
 * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
 *          <p>Network Firewall uses a rule group to inspect and control network traffic.
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
   * <p>The list of a rule group's reference sets.</p>
   */
  ReferenceSets?: ReferenceSets;

  /**
   * <p>The stateful rules or stateless rules for the rule group. </p>
   */
  RulesSource: RulesSource | undefined;

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful
   *        rule group must have stateful rule options settings that are compatible with these settings.</p>
   */
  StatefulRuleOptions?: StatefulRuleOptions;
}

/**
 * <p>High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>.</p>
 */
export interface SourceMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group that your own rule group is copied from.</p>
   */
  SourceArn?: string;

  /**
   * <p>The update token of the Amazon Web Services managed rule group that your own rule group is copied from. To determine the update token for the managed rule group, call <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html#networkfirewall-DescribeRuleGroup-response-UpdateToken">DescribeRuleGroup</a>.</p>
   */
  SourceUpdateToken?: string;
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
   * <p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>
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

  /**
   * <p>A complex type that contains settings for encryption of your rule group resources.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.</p>
   */
  SourceMetadata?: SourceMetadata;
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

  /**
   * <p>The number of capacity units currently consumed by the rule group rules. </p>
   */
  ConsumedCapacity?: number;

  /**
   * <p>The number of firewall policies that use this rule group.</p>
   */
  NumberOfAssociations?: number;

  /**
   * <p>A complex type that contains the Amazon Web Services KMS encryption configuration settings for your rule group.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to track the version updates made to the originating rule group.</p>
   */
  SourceMetadata?: SourceMetadata;

  /**
   * <p>The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's
   * used to record changes to the managed rule group. You can subscribe to the SNS topic to receive
   * notifications when the managed rule group is modified, such as for new versions and for version
   * expiration. For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide.</a>.</p>
   */
  SnsTopic?: string;

  /**
   * <p>The last time that the rule group was changed.</p>
   */
  LastModifiedTime?: Date;
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

export interface DeleteFirewallResponse {
  /**
   * <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p>
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

/**
 * <p>The operation you requested isn't supported by Network Firewall. </p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
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

export interface DeleteFirewallPolicyResponse {
  /**
   * <p>The object containing the definition of the <a>FirewallPolicyResponse</a>
   *          that you asked to delete. </p>
   */
  FirewallPolicyResponse: FirewallPolicyResponse | undefined;
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete. </p>
   */
  ResourceArn: string | undefined;
}

export interface DeleteResourcePolicyResponse {}

/**
 * <p>The policy statement failed validation.</p>
 */
export class InvalidResourcePolicyException extends __BaseException {
  readonly name: "InvalidResourcePolicyException" = "InvalidResourcePolicyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourcePolicyException, __BaseException>) {
    super({
      name: "InvalidResourcePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourcePolicyException.prototype);
    this.Message = opts.Message;
  }
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

export interface DeleteRuleGroupResponse {
  /**
   * <p>The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   */
  RuleGroupResponse: RuleGroupResponse | undefined;
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
 * <p>Defines where Network Firewall sends logs for the firewall for one log type. This is used
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
  LogDestination: Record<string, string> | undefined;
}

/**
 * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
 */
export interface LoggingConfiguration {
  /**
   * <p>Defines the logging destinations for the logs for a firewall. Network Firewall generates
   *          logs for stateful rule groups. </p>
   */
  LogDestinationConfigs: LogDestinationConfig[] | undefined;
}

export interface DescribeLoggingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve. </p>
   */
  ResourceArn: string | undefined;
}

export interface DescribeResourcePolicyResponse {
  /**
   * <p>The IAM policy for the resource. </p>
   */
  Policy?: string;
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

export interface DescribeRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p>
   *          <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken: string | undefined;

  /**
   * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p>
   *          <p>Network Firewall uses a rule group to inspect and control network traffic.
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

export interface DescribeRuleGroupMetadataRequest {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupName?: string;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
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

export interface DescribeRuleGroupMetadataResponse {
  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupArn: string | undefined;

  /**
   * <p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p>
   *          <p>You must specify the ARN or the name, and you can specify both. </p>
   */
  RuleGroupName: string | undefined;

  /**
   * <p>Returns the metadata objects for the specified rule group.
   *       </p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains
   * stateless rules. If it is stateful, it contains stateful rules. </p>
   *          <note>
   *             <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p>
   *          </note>
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
   * <p>Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.</p>
   */
  StatefulRuleOptions?: StatefulRuleOptions;

  /**
   * <p>The last time that the rule group was changed.</p>
   */
  LastModifiedTime?: Date;
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

export enum ResourceManagedType {
  AWS_MANAGED_DOMAIN_LISTS = "AWS_MANAGED_DOMAIN_LISTS",
  AWS_MANAGED_THREAT_SIGNATURES = "AWS_MANAGED_THREAT_SIGNATURES",
}

export enum ResourceManagedStatus {
  ACCOUNT = "ACCOUNT",
  MANAGED = "MANAGED",
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

  /**
   * <p>The scope of the request. The default setting of <code>ACCOUNT</code> or a setting of
   *          <code>NULL</code> returns all of the rule groups in your account. A setting of
   *          <code>MANAGED</code> returns all available managed rule groups.</p>
   */
  Scope?: ResourceManagedStatus | string;

  /**
   * <p>Indicates the general category of the Amazon Web Services managed rule group.</p>
   */
  ManagedType?: ResourceManagedType | string;

  /**
   * <p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.</p>
   */
  Type?: RuleGroupType | string;
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

/**
 * <p>Unable to send logs to a configured logging destination. </p>
 */
export class LogDestinationPermissionException extends __BaseException {
  readonly name: "LogDestinationPermissionException" = "LogDestinationPermissionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LogDestinationPermissionException, __BaseException>) {
    super({
      name: "LogDestinationPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LogDestinationPermissionException.prototype);
    this.Message = opts.Message;
  }
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rule groups and firewall policies with.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The IAM policy statement that lists the accounts that you want to share your rule group or firewall policy with
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

export interface PutResourcePolicyResponse {}

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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

/**
 * <p>Unable to change the resource because your account doesn't own it. </p>
 */
export class ResourceOwnerCheckException extends __BaseException {
  readonly name: "ResourceOwnerCheckException" = "ResourceOwnerCheckException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceOwnerCheckException, __BaseException>) {
    super({
      name: "ResourceOwnerCheckException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceOwnerCheckException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates
   *          that the firewall is protected against deletion. Use this setting to protect against
   *          accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;
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

export interface UpdateFirewallEncryptionConfigurationRequest {
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
   * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

export interface UpdateFirewallEncryptionConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p>
   */
  FirewallName?: string;

  /**
   * <p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p>
   *          <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
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

  /**
   * <p>A complex type that contains settings for encryption of your firewall policy resources.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
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
   * <p>Defines how Network Firewall performs logging for a <a>Firewall</a>. </p>
   */
  LoggingConfiguration?: LoggingConfiguration;
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
   * <p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule
   * per line. Use this to import your existing Suricata compatible rule groups. </p>
   *          <note>
   *             <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p>
   *          </note>
   *          <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call
   * response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>
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

  /**
   * <p>A complex type that contains settings for encryption of your rule group resources.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.</p>
   */
  SourceMetadata?: SourceMetadata;
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

export interface UpdateSubnetChangeProtectionRequest {
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
   * <p>A setting indicating whether the firewall is protected against changes to the subnet associations.
   *          Use this setting to protect against
   *          accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.</p>
   */
  SubnetChangeProtection: boolean | undefined;
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

/**
 * @internal
 */
export const DimensionFilterSensitiveLog = (obj: Dimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishMetricActionFilterSensitiveLog = (obj: PublishMetricAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionDefinitionFilterSensitiveLog = (obj: ActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFirewallPolicyRequestFilterSensitiveLog = (obj: AssociateFirewallPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFirewallPolicyResponseFilterSensitiveLog = (obj: AssociateFirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetMappingFilterSensitiveLog = (obj: SubnetMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSubnetsRequestFilterSensitiveLog = (obj: AssociateSubnetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSubnetsResponseFilterSensitiveLog = (obj: AssociateSubnetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentFilterSensitiveLog = (obj: Attachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IPSetMetadataFilterSensitiveLog = (obj: IPSetMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CIDRSummaryFilterSensitiveLog = (obj: CIDRSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityUsageSummaryFilterSensitiveLog = (obj: CapacityUsageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionConfigurationFilterSensitiveLog = (obj: EncryptionConfiguration): any => ({
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
export const CreateFirewallRequestFilterSensitiveLog = (obj: CreateFirewallRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallFilterSensitiveLog = (obj: Firewall): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PerObjectStatusFilterSensitiveLog = (obj: PerObjectStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SyncStateFilterSensitiveLog = (obj: SyncState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallStatusFilterSensitiveLog = (obj: FirewallStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallResponseFilterSensitiveLog = (obj: CreateFirewallResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulEngineOptionsFilterSensitiveLog = (obj: StatefulEngineOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulRuleGroupOverrideFilterSensitiveLog = (obj: StatefulRuleGroupOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulRuleGroupReferenceFilterSensitiveLog = (obj: StatefulRuleGroupReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomActionFilterSensitiveLog = (obj: CustomAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessRuleGroupReferenceFilterSensitiveLog = (obj: StatelessRuleGroupReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyFilterSensitiveLog = (obj: FirewallPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallPolicyRequestFilterSensitiveLog = (obj: CreateFirewallPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyResponseFilterSensitiveLog = (obj: FirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallPolicyResponseFilterSensitiveLog = (obj: CreateFirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IPSetReferenceFilterSensitiveLog = (obj: IPSetReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceSetsFilterSensitiveLog = (obj: ReferenceSets): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RulesSourceListFilterSensitiveLog = (obj: RulesSourceList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeaderFilterSensitiveLog = (obj: Header): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleOptionFilterSensitiveLog = (obj: RuleOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulRuleFilterSensitiveLog = (obj: StatefulRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortRangeFilterSensitiveLog = (obj: PortRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TCPFlagFieldFilterSensitiveLog = (obj: TCPFlagField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MatchAttributesFilterSensitiveLog = (obj: MatchAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleDefinitionFilterSensitiveLog = (obj: RuleDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessRuleFilterSensitiveLog = (obj: StatelessRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessRulesAndCustomActionsFilterSensitiveLog = (obj: StatelessRulesAndCustomActions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RulesSourceFilterSensitiveLog = (obj: RulesSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IPSetFilterSensitiveLog = (obj: IPSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortSetFilterSensitiveLog = (obj: PortSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleVariablesFilterSensitiveLog = (obj: RuleVariables): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulRuleOptionsFilterSensitiveLog = (obj: StatefulRuleOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupFilterSensitiveLog = (obj: RuleGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceMetadataFilterSensitiveLog = (obj: SourceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleGroupRequestFilterSensitiveLog = (obj: CreateRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupResponseFilterSensitiveLog = (obj: RuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleGroupResponseFilterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallRequestFilterSensitiveLog = (obj: DeleteFirewallRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallResponseFilterSensitiveLog = (obj: DeleteFirewallResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallPolicyRequestFilterSensitiveLog = (obj: DeleteFirewallPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallPolicyResponseFilterSensitiveLog = (obj: DeleteFirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResponseFilterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleGroupRequestFilterSensitiveLog = (obj: DeleteRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleGroupResponseFilterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFirewallRequestFilterSensitiveLog = (obj: DescribeFirewallRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFirewallResponseFilterSensitiveLog = (obj: DescribeFirewallResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFirewallPolicyRequestFilterSensitiveLog = (obj: DescribeFirewallPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFirewallPolicyResponseFilterSensitiveLog = (obj: DescribeFirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoggingConfigurationRequestFilterSensitiveLog = (
  obj: DescribeLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDestinationConfigFilterSensitiveLog = (obj: LogDestinationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoggingConfigurationResponseFilterSensitiveLog = (
  obj: DescribeLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePolicyRequestFilterSensitiveLog = (obj: DescribeResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePolicyResponseFilterSensitiveLog = (obj: DescribeResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleGroupRequestFilterSensitiveLog = (obj: DescribeRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleGroupResponseFilterSensitiveLog = (obj: DescribeRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleGroupMetadataRequestFilterSensitiveLog = (obj: DescribeRuleGroupMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleGroupMetadataResponseFilterSensitiveLog = (obj: DescribeRuleGroupMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetsRequestFilterSensitiveLog = (obj: DisassociateSubnetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetsResponseFilterSensitiveLog = (obj: DisassociateSubnetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallMetadataFilterSensitiveLog = (obj: FirewallMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallPolicyMetadataFilterSensitiveLog = (obj: FirewallPolicyMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallPoliciesRequestFilterSensitiveLog = (obj: ListFirewallPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallPoliciesResponseFilterSensitiveLog = (obj: ListFirewallPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallsRequestFilterSensitiveLog = (obj: ListFirewallsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallsResponseFilterSensitiveLog = (obj: ListFirewallsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRuleGroupsRequestFilterSensitiveLog = (obj: ListRuleGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleGroupMetadataFilterSensitiveLog = (obj: RuleGroupMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRuleGroupsResponseFilterSensitiveLog = (obj: ListRuleGroupsResponse): any => ({
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
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
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
export const UpdateFirewallDeleteProtectionRequestFilterSensitiveLog = (
  obj: UpdateFirewallDeleteProtectionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallDeleteProtectionResponseFilterSensitiveLog = (
  obj: UpdateFirewallDeleteProtectionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallDescriptionRequestFilterSensitiveLog = (obj: UpdateFirewallDescriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallDescriptionResponseFilterSensitiveLog = (obj: UpdateFirewallDescriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallEncryptionConfigurationRequestFilterSensitiveLog = (
  obj: UpdateFirewallEncryptionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallEncryptionConfigurationResponseFilterSensitiveLog = (
  obj: UpdateFirewallEncryptionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallPolicyRequestFilterSensitiveLog = (obj: UpdateFirewallPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallPolicyResponseFilterSensitiveLog = (obj: UpdateFirewallPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallPolicyChangeProtectionRequestFilterSensitiveLog = (
  obj: UpdateFirewallPolicyChangeProtectionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallPolicyChangeProtectionResponseFilterSensitiveLog = (
  obj: UpdateFirewallPolicyChangeProtectionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLoggingConfigurationRequestFilterSensitiveLog = (obj: UpdateLoggingConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLoggingConfigurationResponseFilterSensitiveLog = (obj: UpdateLoggingConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuleGroupRequestFilterSensitiveLog = (obj: UpdateRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuleGroupResponseFilterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetChangeProtectionRequestFilterSensitiveLog = (
  obj: UpdateSubnetChangeProtectionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetChangeProtectionResponseFilterSensitiveLog = (
  obj: UpdateSubnetChangeProtectionResponse
): any => ({
  ...obj,
});
