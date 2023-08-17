// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53ResolverServiceException as __BaseException } from "./Route53ResolverServiceException";

/**
 * @public
 * <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Action = {
  ALERT: "ALERT",
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;

/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const MutationProtectionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MutationProtectionStatus = (typeof MutationProtectionStatus)[keyof typeof MutationProtectionStatus];

/**
 * @public
 * <p>One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes,
   * 			the value of <code>Key</code> might be <code>account-id</code>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the
   * 			customer account that you're creating the resource for.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupRequest {
  /**
   * @public
   * <p>A unique string that identifies the request and that allows failed requests to be
   * 			retried without the risk of running the operation twice. <code>CreatorRequestId</code>
   * 			can be any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the VPC that you want to associate with the rule group. </p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   *          <p>The allowed values for <code>Priority</code> are between 100 and 9900.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>A name that lets you identify the association, to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
   *        When you create the association, the default setting is <code>DISABLED</code>. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the rule group association. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const FirewallRuleGroupAssociationStatus = {
  COMPLETE: "COMPLETE",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FirewallRuleGroupAssociationStatus =
  (typeof FirewallRuleGroupAssociationStatus)[keyof typeof FirewallRuleGroupAssociationStatus];

/**
 * @public
 * <p>An association between a firewall rule group and a VPC, which enables DNS filtering for
 * 			the VPC. </p>
 */
export interface FirewallRuleGroupAssociation {
  /**
   * @public
   * <p>The identifier for the association.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the firewall rule group association.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * @public
   * <p>The unique identifier of the VPC that is associated with the rule group. </p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The name of the association.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall
   *            filters VPC traffic starting from rule group with the lowest numeric priority setting. </p>
   */
  Priority?: number;

  /**
   * @public
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * @public
   * <p>The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to
   *    manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.</p>
   */
  ManagedOwnerName?: string;

  /**
   * @public
   * <p>The current status of the association.</p>
   */
  Status?: FirewallRuleGroupAssociationStatus | string;

  /**
   * @public
   * <p>Additional information about the status of the response, if available.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupResponse {
  /**
   * @public
   * <p>The association that you just created. The association has an ID that you can use to
   * 			identify it in other requests, like update and delete.</p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

/**
 * @public
 * <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>We encountered an unknown error. Try again in a few minutes.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request caused one or more limits to be exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>For a <code>LimitExceededException</code> error, the type of resource that exceeded the current limit.</p>
   */
  ResourceType?: string;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>The specified resource doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>For a <code>ResourceNotFoundException</code> error, the type of resource that doesn't exist.</p>
   */
  ResourceType?: string;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>The request was throttled. Try again in a few minutes.</p>
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

/**
 * @public
 * <p>You have provided an invalid command. Supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, information about an IP address to update.</p>
 */
export interface IpAddressUpdate {
  /**
   * @public
   * <p>
   *             <i>Only when removing an IP address from a Resolver endpoint</i>: The ID of the IP address that you want to remove.
   * 			To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   */
  IpId?: string;

  /**
   * @public
   * <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The new IPv4 address.</p>
   */
  Ip?: string;

  /**
   * @public
   * <p>
   * 			The new IPv6 address.
   * 		</p>
   */
  Ipv6?: string;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to associate IP addresses with.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * @public
   * <p>Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID,
   * 			Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverEndpointDirection = {
  Inbound: "INBOUND",
  Outbound: "OUTBOUND",
} as const;

/**
 * @public
 */
export type ResolverEndpointDirection = (typeof ResolverEndpointDirection)[keyof typeof ResolverEndpointDirection];

/**
 * @public
 * @enum
 */
export const ResolverEndpointType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type ResolverEndpointType = (typeof ResolverEndpointType)[keyof typeof ResolverEndpointType];

/**
 * @public
 * @enum
 */
export const ResolverEndpointStatus = {
  ActionNeeded: "ACTION_NEEDED",
  AutoRecovering: "AUTO_RECOVERING",
  Creating: "CREATING",
  Deleting: "DELETING",
  Operational: "OPERATIONAL",
  Updating: "UPDATING",
} as const;

/**
 * @public
 */
export type ResolverEndpointStatus = (typeof ResolverEndpointStatus)[keyof typeof ResolverEndpointStatus];

/**
 * @public
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>,
 * 			Updates the name, or ResolverEndpointType for an endpoint,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.</p>
 */
export interface ResolverEndpoint {
  /**
   * @public
   * <p>The ID of the Resolver endpoint.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A unique string that identifies the request that created the Resolver endpoint. The
   * 				<code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the Resolver endpoint.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name that you assigned to the Resolver endpoint when you submitted a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
   * 			request.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules
   * 			(for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access.
   * 			For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: allows DNS queries to your VPC from your network</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: allows DNS queries from your VPC to your network</p>
   *             </li>
   *          </ul>
   */
  Direction?: ResolverEndpointDirection | string;

  /**
   * @public
   * <p>The number of IP addresses that the Resolver endpoint can use for DNS queries.</p>
   */
  IpAddressCount?: number;

  /**
   * @public
   * <p>The ID of the VPC that you want to create the Resolver endpoint in.</p>
   */
  HostVPCId?: string;

  /**
   * @public
   * <p>A code that specifies the current status of the Resolver endpoint. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating and configuring one or more Amazon VPC network interfaces
   * 				for this endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATIONAL</code>: The Amazon VPC network interfaces for this endpoint are correctly configured and
   * 				able to pass inbound or outbound DNS queries between your network and Resolver.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>: Resolver is associating or disassociating one or more network interfaces
   * 				with this endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO_RECOVERING</code>: Resolver is trying to recover one or more of the network interfaces
   * 				that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the
   * 				limit on the number of DNS queries per IP address (per network interface). For the current limit, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities-resolver">Limits on Route 53 Resolver</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_NEEDED</code>: This endpoint is unhealthy, and Resolver can't automatically recover it.
   * 				To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address
   * 				that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include
   * 				at least two IP addresses.) A status of <code>ACTION_NEEDED</code> can have a variety of causes. Here are two common causes:</p>
   *                <ul>
   *                   <li>
   *                      <p>One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>The network interface couldn't be created for some reason that's outside the control of Resolver.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this endpoint and the associated network interfaces.</p>
   *             </li>
   *          </ul>
   */
  Status?: ResolverEndpointStatus | string;

  /**
   * @public
   * <p>A detailed description of the status of the Resolver endpoint.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;

  /**
   * @public
   * <p>
   * 			The Resolver endpoint IP address type.
   * 		</p>
   */
  ResolverEndpointType?: ResolverEndpointType | string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>
   * 			The Amazon EC2 instance type.
   * 		</p>
   */
  PreferredInstanceType?: string;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * @public
   * <p>The response to an <code>AssociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 * <p>One or more parameters in this request are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>For an <code>InvalidParameterException</code> error, the name of the parameter that's invalid.</p>
   */
  FieldName?: string;
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
    this.Message = opts.Message;
    this.FieldName = opts.FieldName;
  }
}

/**
 * @public
 * <p>The request is invalid.</p>
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
 * @public
 * <p>The resource that you tried to create already exists.</p>
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigRequest {
  /**
   * @public
   * <p>The ID of the query logging configuration that you want to associate a VPC with.</p>
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * @public
   * <p>The ID of an Amazon VPC that you want this query logging configuration to log queries for.</p>
   *          <note>
   *             <p>The VPCs and the query logging configuration must be in the same Region.</p>
   *          </note>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigAssociationError = {
  AccessDenied: "ACCESS_DENIED",
  DestinationNotFound: "DESTINATION_NOT_FOUND",
  InternalServiceError: "INTERNAL_SERVICE_ERROR",
  None: "NONE",
} as const;

/**
 * @public
 */
export type ResolverQueryLogConfigAssociationError =
  (typeof ResolverQueryLogConfigAssociationError)[keyof typeof ResolverQueryLogConfigAssociationError];

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigAssociationStatus = {
  ActionNeeded: "ACTION_NEEDED",
  Active: "ACTIVE",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;

/**
 * @public
 */
export type ResolverQueryLogConfigAssociationStatus =
  (typeof ResolverQueryLogConfigAssociationStatus)[keyof typeof ResolverQueryLogConfigAssociationStatus];

/**
 * @public
 * <p>In the response to an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>,
 * 			request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
 */
export interface ResolverQueryLogConfigAssociation {
  /**
   * @public
   * <p>The ID of the query logging association.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ID of the query logging configuration that a VPC is associated with.</p>
   */
  ResolverQueryLogConfigId?: string;

  /**
   * @public
   * <p>The ID of the Amazon VPC that is associated with the query logging configuration.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The status of the specified query logging association. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: The association between an Amazon VPC and a query logging configuration
   * 				was successfully created. Resolver is logging queries that originate in the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association.</p>
   *             </li>
   *          </ul>
   */
  Status?: ResolverQueryLogConfigAssociationStatus | string;

  /**
   * @public
   * <p>If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code> indicates the cause:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *             </li>
   *          </ul>
   *          <p>If the value of <code>Status</code> is a value other than <code>FAILED</code>, <code>Error</code> is null. </p>
   */
  Error?: ResolverQueryLogConfigAssociationError | string;

  /**
   * @public
   * <p>Contains additional information about the error. If the value or <code>Error</code> is null, the value of <code>ErrorMessage</code> also is null.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigResponse {
  /**
   * @public
   * <p>A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

/**
 * @public
 */
export interface AssociateResolverRuleRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * @public
   * <p>A name for the association that you're creating between a Resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the VPC that you want to associate the Resolver rule with.</p>
   */
  VPCId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverRuleAssociationStatus = {
  Complete: "COMPLETE",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
  Overridden: "OVERRIDDEN",
} as const;

/**
 * @public
 */
export type ResolverRuleAssociationStatus =
  (typeof ResolverRuleAssociationStatus)[keyof typeof ResolverRuleAssociationStatus];

/**
 * @public
 * <p>In the response to an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
 * 			request, provides information about an association between a Resolver rule and a VPC.
 * 			The association determines which DNS queries that originate in the VPC are forwarded to your network. </p>
 */
export interface ResolverRuleAssociation {
  /**
   * @public
   * <p>The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>
   * 			request.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ID of the Resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   */
  ResolverRuleId?: string;

  /**
   * @public
   * <p>The name of an association between a Resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the VPC that you associated the Resolver rule with.</p>
   */
  VPCId?: string;

  /**
   * @public
   * <p>A code that specifies the current status of the association between a Resolver rule and a VPC.</p>
   */
  Status?: ResolverRuleAssociationStatus | string;

  /**
   * @public
   * <p>A detailed description of the status of the association between a Resolver rule and a VPC.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface AssociateResolverRuleResponse {
  /**
   * @public
   * <p>Information about the <code>AssociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

/**
 * @public
 * <p>The specified resource isn't available.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * @enum
 */
export const AutodefinedReverseFlag = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;

/**
 * @public
 */
export type AutodefinedReverseFlag = (typeof AutodefinedReverseFlag)[keyof typeof AutodefinedReverseFlag];

/**
 * @public
 * @enum
 */
export const BlockOverrideDnsType = {
  CNAME: "CNAME",
} as const;

/**
 * @public
 */
export type BlockOverrideDnsType = (typeof BlockOverrideDnsType)[keyof typeof BlockOverrideDnsType];

/**
 * @public
 * @enum
 */
export const BlockResponse = {
  NODATA: "NODATA",
  NXDOMAIN: "NXDOMAIN",
  OVERRIDE: "OVERRIDE",
} as const;

/**
 * @public
 */
export type BlockResponse = (typeof BlockResponse)[keyof typeof BlockResponse];

/**
 * @public
 */
export interface CreateFirewallDomainListRequest {
  /**
   * @public
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>A name that lets you identify the domain list to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the domain list. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const FirewallDomainListStatus = {
  COMPLETE: "COMPLETE",
  COMPLETE_IMPORT_FAILED: "COMPLETE_IMPORT_FAILED",
  DELETING: "DELETING",
  IMPORTING: "IMPORTING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FirewallDomainListStatus = (typeof FirewallDomainListStatus)[keyof typeof FirewallDomainListStatus];

/**
 * @public
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p>
 *          <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
 */
export interface FirewallDomainList {
  /**
   * @public
   * <p>The ID of the domain list. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the firewall domain list.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The number of domain names that are specified in the domain list.</p>
   */
  DomainCount?: number;

  /**
   * @public
   * <p>The status of the domain list.  </p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * @public
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   */
  ManagedOwnerName?: string;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface CreateFirewallDomainListResponse {
  /**
   * @public
   * <p>The
   * 			domain list that you just created.</p>
   */
  FirewallDomainList?: FirewallDomainList;
}

/**
 * @public
 */
export interface CreateFirewallRuleRequest {
  /**
   * @public
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The unique identifier of the firewall rule group where you want to create the rule. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the domain list that you want to use in the rule. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request and send metrics and logs to Cloud Watch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p>
   *             </li>
   *          </ul>
   */
  Action: Action | string | undefined;

  /**
   * @public
   * <p>The way that you want DNS Firewall to block the request, used with the rule action
   * 			setting <code>BLOCK</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   *          <p>This setting is required if the rule action setting is <code>BLOCK</code>.</p>
   */
  BlockResponse?: BlockResponse | string;

  /**
   * @public
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * @public
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * @public
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * @public
   * <p>A name that lets you identify the rule in the rule group.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A single firewall rule in a rule group.</p>
 */
export interface FirewallRule {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group of the rule. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * @public
   * <p>The ID of the domain list that's used in the rule. </p>
   */
  FirewallDomainListId?: string;

  /**
   * @public
   * <p>The name of the rule. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p>
   *             </li>
   *          </ul>
   */
  Action?: Action | string;

  /**
   * @public
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   */
  BlockResponse?: BlockResponse | string;

  /**
   * @public
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * @public
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * @public
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed requests
   *            without the risk of executing the operation twice. This can be any unique string, for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface CreateFirewallRuleResponse {
  /**
   * @public
   * <p>The
   * 			firewall rule that you just created. </p>
   */
  FirewallRule?: FirewallRule;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupRequest {
  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>A name that lets you identify the rule group, to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the rule group. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  NotShared: "NOT_SHARED",
  SharedByMe: "SHARED_BY_ME",
  SharedWithMe: "SHARED_WITH_ME",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const FirewallRuleGroupStatus = {
  COMPLETE: "COMPLETE",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FirewallRuleGroupStatus = (typeof FirewallRuleGroupStatus)[keyof typeof FirewallRuleGroupStatus];

/**
 * @public
 * <p>High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.</p>
 */
export interface FirewallRuleGroup {
  /**
   * @public
   * <p>The ID of the rule group. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the rule group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The number of rules in the rule group.</p>
   */
  RuleCount?: number;

  /**
   * @public
   * <p>The status of the domain list.  </p>
   */
  Status?: FirewallRuleGroupStatus | string;

  /**
   * @public
   * <p>Additional information about the status of the rule group, if available.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * @public
   * <p>The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupResponse {
  /**
   * @public
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

/**
 * @public
 */
export interface CreateOutpostResolverRequest {
  /**
   * @public
   * <p>A unique string that identifies the request
   * 		and that allows failed requests to be retried without the risk of running the operation twice. </p>
   *          <p>
   *             <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId: string | undefined;

  /**
   * @public
   * <p>A friendly name that lets you easily find a configuration in the
   * 		Resolver dashboard in the Route 53 console.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Number of Amazon EC2 instances for the
   * 		Resolver on Outpost.
   * 		The default and minimal value is 4.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>
   * 		The Amazon EC2 instance type. If you specify this, you must also specify a value for the <code>OutpostArn</code>.
   * 	</p>
   */
  PreferredInstanceType: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the <code>PreferredInstanceType</code>.</p>
   */
  OutpostArn: string | undefined;

  /**
   * @public
   * <p>
   * 			A string that helps identify the Route 53 Resolvers on Outpost.
   * 		</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const OutpostResolverStatus = {
  ACTION_NEEDED: "ACTION_NEEDED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  OPERATIONAL: "OPERATIONAL",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type OutpostResolverStatus = (typeof OutpostResolverStatus)[keyof typeof OutpostResolverStatus];

/**
 * @public
 * <p>A complex type that contains settings for an existing Resolver on an Outpost.</p>
 */
export interface OutpostResolver {
  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the Resolver on an Outpost.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the Outpost Resolver was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the Outpost Resolver was modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;

  /**
   * @public
   * <p>A unique string that identifies the request that created the Resolver endpoint.
   * 		The <code>CreatorRequestId</code> allows failed requests to be retried without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The ID of the Resolver on Outpost.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Amazon EC2 instance count for the Resolver on the Outpost.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>
   * 			The Amazon EC2 instance type.
   * 		</p>
   */
  PreferredInstanceType?: string;

  /**
   * @public
   * <p>Name of the Resolver.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Status of the Resolver.</p>
   */
  Status?: OutpostResolverStatus | string;

  /**
   * @public
   * <p>A detailed description of the Resolver.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the Outpost.</p>
   */
  OutpostArn?: string;
}

/**
 * @public
 */
export interface CreateOutpostResolverResponse {
  /**
   * @public
   * <p>Information about the <code>CreateOutpostResolver</code>
   * 		request, including the status of the request.</p>
   */
  OutpostResolver?: OutpostResolver;
}

/**
 * @public
 * <p>Fulfilling the request would cause one or more quotas to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
 * 			request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
 * 			<code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.</p>
 */
export interface IpAddressRequest {
  /**
   * @public
   * <p>The ID of the subnet that contains the IP address. </p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>The IPv4 address that you want to use for DNS queries.</p>
   */
  Ip?: string;

  /**
   * @public
   * <p>
   * 			The IPv6 address that you want to use for DNS queries.
   * 		</p>
   */
  Ipv6?: string;
}

/**
 * @public
 */
export interface CreateResolverEndpointRequest {
  /**
   * @public
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string | undefined;

  /**
   * @public
   * <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify
   * 			must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints).
   * 			Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port
   * 			that you're using for DNS queries on your network.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>Specify the applicable value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network</p>
   *             </li>
   *          </ul>
   */
  Direction: ResolverEndpointDirection | string | undefined;

  /**
   * @public
   * <p>The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. </p>
   */
  IpAddresses: IpAddressRequest[] | undefined;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>
   * 			For the endpoint type you can choose either IPv4, IPv6, or dual-stack.
   * 			A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This
   * 			endpoint type is applied to all IP addresses.
   * 		</p>
   */
  ResolverEndpointType?: ResolverEndpointType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a
   * 			value for the <code>PreferredInstanceType</code>. </p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The  instance type. If you specify this, you must also specify a value for the <code>OutpostArn</code>.</p>
   */
  PreferredInstanceType?: string;
}

/**
 * @public
 */
export interface CreateResolverEndpointResponse {
  /**
   * @public
   * <p>Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigRequest {
  /**
   * @public
   * <p>The name that you want to give the query logging configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group,
   * 			or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>S3 bucket</b>: </p>
   *                <p>
   *                   <code>arn:aws:s3:::examplebucket</code>
   *                </p>
   *                <p>You can optionally append a file prefix to the end of the ARN.</p>
   *                <p>
   *                   <code>arn:aws:s3:::examplebucket/development/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CloudWatch Logs log group</b>: </p>
   *                <p>
   *                   <code>arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Kinesis Data Firehose delivery stream</b>:</p>
   *                <p>
   *                   <code>arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DestinationArn: string | undefined;

  /**
   * @public
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the query logging configuration.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigStatus = {
  Created: "CREATED",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;

/**
 * @public
 */
export type ResolverQueryLogConfigStatus =
  (typeof ResolverQueryLogConfigStatus)[keyof typeof ResolverQueryLogConfigStatus];

/**
 * @public
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>
 * 			request, a complex type that contains settings for one query logging configuration.</p>
 */
export interface ResolverQueryLogConfig {
  /**
   * @public
   * <p>The ID for the query logging configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that created the query logging configuration. </p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The status of the specified query logging configuration. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: The query logging configuration was successfully created.
   * 				Resolver is logging queries that originate in the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: Resolver can't deliver logs to the location that is specified in the query logging configuration.
   * 				Here are two common causes:</p>
   *                <ul>
   *                   <li>
   *                      <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ResolverQueryLogConfigStatus | string;

  /**
   * @public
   * <p>An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another
   * 			Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * @public
   * <p>The number of VPCs that are associated with the query logging configuration.</p>
   */
  AssociationCount?: number;

  /**
   * @public
   * <p>The ARN for the query logging configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the query logging configuration. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or
   * 			a Kinesis Data Firehose delivery stream.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>A unique string that identifies the request that created the query logging configuration.
   * 			The <code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigResponse {
  /**
   * @public
   * <p>Information about the <code>CreateResolverQueryLogConfig</code> request, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

/**
 * @public
 * @enum
 */
export const RuleTypeOption = {
  Forward: "FORWARD",
  Recursive: "RECURSIVE",
  System: "SYSTEM",
} as const;

/**
 * @public
 */
export type RuleTypeOption = (typeof RuleTypeOption)[keyof typeof RuleTypeOption];

/**
 * @public
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>
 * 			request, an array of the IPs that you want to forward DNS queries to.</p>
 */
export interface TargetAddress {
  /**
   * @public
   * <p>One IPv4 address that you want to forward DNS queries to.</p>
   */
  Ip?: string;

  /**
   * @public
   * <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>
   * 			One IPv6 address that you want to forward DNS queries to.
   * 		</p>
   */
  Ipv6?: string;
}

/**
 * @public
 */
export interface CreateResolverRuleRequest {
  /**
   * @public
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string | undefined;

  /**
   * @public
   * <p>A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p>
   *          <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   *          <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   *          <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   */
  RuleType: RuleTypeOption | string | undefined;

  /**
   * @public
   * <p>DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The IPs that you want Resolver to forward DNS queries to. You can specify either Ipv4 or Ipv6 addresses but not both in the same rule. Separate IP addresses with a space.</p>
   *          <p>
   *             <code>TargetIps</code> is available only when the value of <code>Rule type</code> is <code>FORWARD</code>.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * @public
   * <p>The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify
   * 			in <code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ResolverRuleStatus = {
  Complete: "COMPLETE",
  Deleting: "DELETING",
  Failed: "FAILED",
  Updating: "UPDATING",
} as const;

/**
 * @public
 */
export type ResolverRuleStatus = (typeof ResolverRuleStatus)[keyof typeof ResolverRuleStatus];

/**
 * @public
 * <p>For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries
 * 			out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.</p>
 */
export interface ResolverRule {
  /**
   * @public
   * <p>The ID that Resolver assigned to the Resolver rule when you created it.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A unique string that you specified when you created the Resolver rule.
   * 				<code>CreatorRequestId</code> identifies the request and allows failed requests to
   * 			be retried without the risk of running the operation twice. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the Resolver rule specified by <code>Id</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name
   * 			(www.example.com).</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>A code that specifies the current status of the Resolver rule.</p>
   */
  Status?: ResolverRuleStatus | string;

  /**
   * @public
   * <p>A detailed description of the status of a Resolver rule.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p>
   *          <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   *          <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   *          <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   */
  RuleType?: RuleTypeOption | string;

  /**
   * @public
   * <p>The name for the Resolver rule, which you specified when you created the Resolver rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically,
   * 			these are the IP addresses of DNS resolvers on your network. </p>
   */
  TargetIps?: TargetAddress[];

  /**
   * @public
   * <p>The ID of the endpoint that the rule is associated with.</p>
   */
  ResolverEndpointId?: string;

  /**
   * @public
   * <p>When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Whether the rule is shared and, if so, whether the current account is sharing the rule with
   * 			another account, or another account is sharing the rule with the current account.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * @public
   * <p>The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface CreateResolverRuleResponse {
  /**
   * @public
   * <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListRequest {
  /**
   * @public
   * <p>The ID of the domain list that you want to delete. </p>
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListResponse {
  /**
   * @public
   * <p>The domain list that you just deleted. </p>
   */
  FirewallDomainList?: FirewallDomainList;
}

/**
 * @public
 */
export interface DeleteFirewallRuleRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group that you want to delete the rule from. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the domain list that's used in the rule.  </p>
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleResponse {
  /**
   * @public
   * <p>The specification for the firewall rule that you just deleted.</p>
   */
  FirewallRule?: FirewallRule;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group that you want to delete. </p>
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupResponse {
  /**
   * @public
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

/**
 * @public
 */
export interface DeleteOutpostResolverRequest {
  /**
   * @public
   * <p>A unique string that identifies the Resolver on the Outpost.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostResolverResponse {
  /**
   * @public
   * <p>Information about the <code>DeleteOutpostResolver</code>
   * 		request, including the status of the request.</p>
   */
  OutpostResolver?: OutpostResolver;
}

/**
 * @public
 */
export interface DeleteResolverEndpointRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to delete.</p>
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverEndpointResponse {
  /**
   * @public
   * <p>Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigRequest {
  /**
   * @public
   * <p>The ID of the query logging configuration that you want to delete.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigResponse {
  /**
   * @public
   * <p>Information about the query logging configuration that you deleted, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

/**
 * @public
 */
export interface DeleteResolverRuleRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule that you want to delete.</p>
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverRuleResponse {
  /**
   * @public
   * <p>Information about the <code>DeleteResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

/**
 * @public
 * <p>The resource that you tried to update or delete is currently in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>For a <code>ResourceInUseException</code> error, the type of resource that is currently in use.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupRequest {
  /**
   * @public
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupResponse {
  /**
   * @public
   * <p>The firewall rule group association that you just removed. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to disassociate an IP address from.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * @public
   * <p>The IPv4 address that you want to remove from a Resolver endpoint.</p>
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * @public
   * <p>The response to an <code>DisassociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigRequest {
  /**
   * @public
   * <p>The ID of the query logging configuration that you want to disassociate a specified VPC from.</p>
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * @public
   * <p>A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

/**
 * @public
 */
export interface DisassociateResolverRuleRequest {
  /**
   * @public
   * <p>The ID of the VPC that you want to disassociate the Resolver rule from.</p>
   */
  VPCId: string | undefined;

  /**
   * @public
   * <p>The ID of the Resolver rule that you want to disassociate from the specified VPC.</p>
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverRuleResponse {
  /**
   * @public
   * <p>Information about the <code>DisassociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

/**
 * @public
 * <p>For Resolver list operations
 * 			(<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>),
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>),
 * 			an optional specification to return a subset of objects.</p>
 *          <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example,
 * 			to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the parameter that you want to use to filter objects.</p>
   *          <p>The valid values for <code>Name</code> depend on the action that you're including the filter in,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
   * 			or
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>.</p>
   *          <note>
   *             <p>In early versions of Resolver, values for <code>Name</code> were listed as uppercase, with underscore (_) delimiters. For example,
   * 				<code>CreatorRequestId</code> was originally listed as <code>CREATOR_REQUEST_ID</code>. Uppercase values for <code>Name</code> are still supported.</p>
   *          </note>
   *          <p>
   *             <b>ListResolverEndpoints</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that you specified when you created the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Direction</code>: Whether you want to return inbound or outbound Resolver endpoints. If you specify <code>DIRECTION</code>
   * 				for <code>Name</code>, specify <code>INBOUND</code> or <code>OUTBOUND</code> for <code>Values</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HostVPCId</code>: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or
   * 				the VPC that outbound queries pass through on the way from your VPCs to your network. In a
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
   * 				request, <code>SubnetId</code> indirectly identifies the VPC. In a
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   * 				request, the VPC ID for a Resolver endpoint
   * 				is returned in the <code>HostVPCId</code> element. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IpAddressCount</code>: The number of IP addresses that you have associated with the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SecurityGroupIds</code>: The IDs of the VPC security groups that you specified when you created the
   * 				Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver endpoint. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>OPERATIONAL</code>, <code>UPDATING</code>,
   * 				<code>AUTO_RECOVERING</code>, <code>ACTION_NEEDED</code>, or <code>DELETING</code>. For more information, see <code>Status</code> in
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverEndpoint.html">ResolverEndpoint</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverRules</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that you specified when you created the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DomainName</code>: The domain name for which Resolver is forwarding DNS queries to your network. In the value that
   * 				you specify for <code>Values</code>, include a trailing dot (.) after the domain name. For example, if the domain name is example.com,
   * 				specify the following value. Note the "." after <code>com</code>:</p>
   *                <p>
   *                   <code>example.com.</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverEndpointId</code>: The ID of the Resolver endpoint that the Resolver rule is associated with.</p>
   *                <note>
   *                   <p>You can filter on the Resolver endpoint only for rules that have a value of <code>FORWARD</code> for
   * 					<code>RuleType</code>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver rule. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>COMPLETE</code>, <code>DELETING</code>, <code>UPDATING</code>,
   * 				or <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Type</code>: The type of the Resolver rule. If you specify <code>TYPE</code>
   * 				for <code>Name</code>, specify <code>FORWARD</code> or <code>SYSTEM</code> for <code>Values</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverRuleAssociations</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver rule association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverRuleId</code>: The ID of the Resolver rule that is associated with one or more VPCs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver rule association. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>COMPLETE</code>, <code>DELETING</code>, or
   * 				<code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VPCId</code>: The ID of the VPC that the Resolver rule is associated with.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverQueryLogConfigs</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Arn</code>: The ARN for the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AssociationCount</code>: The number of VPCs that are associated with the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that the query logging configuration was created, in Unix time format and
   * 				Coordinated Universal Time (UTC). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: A unique string that identifies the request that created the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Destination</code>: The Amazon Web Services service that you want to forward query logs to. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>S3</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CloudWatchLogs</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>KinesisFirehose</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationArn</code>: The ARN of the location that Resolver is sending query logs to. This value can be the ARN for an
   * 				S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OwnerId</code>: The Amazon Web Services account ID for the account that created the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: An indication of whether the query logging configuration is shared with other Amazon Web Services accounts,
   * 				or was shared with the current account by another Amazon Web Services account. Valid values include: <code>NOT_SHARED</code>, <code>SHARED_WITH_ME</code>,
   * 				or <code>SHARED_BY_ME</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the query logging configuration. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>,
   * 				<code>DELETING</code>, or <code>FAILED</code>. For more information, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfig.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfig-Status">Status</a>.
   * 				</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverQueryLogConfigAssociations</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that the VPC was associated with the query logging configuration, in Unix time format and
   * 				Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, specify the cause:
   * 				<code>DESTINATION_NOT_FOUND</code> or <code>ACCESS_DENIED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration that a VPC is associated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceId</code>: The ID of the Amazon VPC that is associated with the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the query logging association. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>,
   * 				<code>DELETING</code>, or <code>FAILED</code>. For more information, see
   * 			    <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfigAssociation.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfigAssociation-Status">Status</a>.
   * 				</p>
   *             </li>
   *          </ul>
   */
  Name?: string;

  /**
   * @public
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules,
   * 			the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for
   * 			<code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>.</p>
   */
  Values?: string[];
}

/**
 * @public
 * @enum
 */
export const FirewallFailOpenStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;

/**
 * @public
 */
export type FirewallFailOpenStatus = (typeof FirewallFailOpenStatus)[keyof typeof FirewallFailOpenStatus];

/**
 * @public
 * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
 * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
 */
export interface FirewallConfig {
  /**
   * @public
   * <p>The ID of the firewall configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ID of the VPC that this firewall configuration applies to.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p>
   *          <ul>
   *             <li>
   *                <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns
   *            a failure error when it is unable to properly evaluate a query. </p>
   *             </li>
   *             <li>
   *                <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it
   *        is unable to properly evaluate them. </p>
   *             </li>
   *          </ul>
   *          <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>
   */
  FirewallFailOpen?: FirewallFailOpenStatus | string;
}

/**
 * @public
 * @enum
 */
export const FirewallDomainImportOperation = {
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type FirewallDomainImportOperation =
  (typeof FirewallDomainImportOperation)[keyof typeof FirewallDomainImportOperation];

/**
 * @public
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall domain list, call  <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
 */
export interface FirewallDomainListMetadata {
  /**
   * @public
   * <p>The ID of the domain list. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the firewall domain list metadata.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   */
  ManagedOwnerName?: string;
}

/**
 * @public
 * @enum
 */
export const FirewallDomainUpdateOperation = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type FirewallDomainUpdateOperation =
  (typeof FirewallDomainUpdateOperation)[keyof typeof FirewallDomainUpdateOperation];

/**
 * @public
 * <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
 */
export interface FirewallRuleGroupMetadata {
  /**
   * @public
   * <p>The ID of the rule group. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the rule group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;
}

/**
 * @public
 */
export interface GetFirewallConfigRequest {
  /**
   * @public
   * <p>The ID of the VPC from Amazon VPC that the configuration is for.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallConfigResponse {
  /**
   * @public
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
   * 			AmazonVPC. </p>
   */
  FirewallConfig?: FirewallConfig;
}

/**
 * @public
 */
export interface GetFirewallDomainListRequest {
  /**
   * @public
   * <p>The ID of the domain list.  </p>
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListResponse {
  /**
   * @public
   * <p>The domain list that you requested.  </p>
   */
  FirewallDomainList?: FirewallDomainList;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupResponse {
  /**
   * @public
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationRequest {
  /**
   * @public
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationResponse {
  /**
   * @public
   * <p>The association that you requested. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyRequest {
  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the rule group.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyResponse {
  /**
   * @public
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule
   * 			group. You can use the policy to share the rule group using Resource Access Manager
   * 			(RAM). </p>
   */
  FirewallRuleGroupPolicy?: string;
}

/**
 * @public
 */
export interface GetOutpostResolverRequest {
  /**
   * @public
   * <p>The ID of the Resolver on the Outpost.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostResolverResponse {
  /**
   * @public
   * <p>Information about the <code>GetOutpostResolver</code>
   * 		request, including the status of the request.</p>
   */
  OutpostResolver?: OutpostResolver;
}

/**
 * @public
 */
export interface GetResolverConfigRequest {
  /**
   * @public
   * <p>Resource ID of the Amazon VPC that you want to get information about.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverAutodefinedReverseStatus = {
  Disabled: "DISABLED",
  Disabling: "DISABLING",
  Enabled: "ENABLED",
  Enabling: "ENABLING",
  UpdatingToUseLocalResourceSetting: "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING",
  UseLocalResourceSetting: "USE_LOCAL_RESOURCE_SETTING",
} as const;

/**
 * @public
 */
export type ResolverAutodefinedReverseStatus =
  (typeof ResolverAutodefinedReverseStatus)[keyof typeof ResolverAutodefinedReverseStatus];

/**
 * @public
 * <p>A complex type that contains information about a Resolver configuration for a VPC.</p>
 */
export interface ResolverConfig {
  /**
   * @public
   * <p>ID for the Resolver configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The owner account ID of the Amazon Virtual Private Cloud VPC.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p> The status of whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. The status can be one of following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ENABLING:</b> Autodefined rules for reverse DNS lookups are being
   * 					enabled but are not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLED:</b> Autodefined rules for reverse DNS lookups are
   * 					enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLING:</b> Autodefined rules for reverse DNS lookups are
   * 					being disabled but are not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED:</b> Autodefined rules for reverse DNS lookups are
   * 					disabled.</p>
   *             </li>
   *          </ul>
   */
  AutodefinedReverse?: ResolverAutodefinedReverseStatus | string;
}

/**
 * @public
 */
export interface GetResolverConfigResponse {
  /**
   * @public
   * <p>Information about the behavior configuration of Route 53 Resolver behavior for the VPC you
   * 			specified in the <code>GetResolverConfig</code> request.</p>
   */
  ResolverConfig?: ResolverConfig;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigRequest {
  /**
   * @public
   * <p>The ID of the virtual private cloud (VPC) for the DNSSEC validation status.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverDNSSECValidationStatus = {
  Disabled: "DISABLED",
  Disabling: "DISABLING",
  Enabled: "ENABLED",
  Enabling: "ENABLING",
  UpdateToUseLocalResourceSetting: "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING",
  UseLocalResourceSetting: "USE_LOCAL_RESOURCE_SETTING",
} as const;

/**
 * @public
 */
export type ResolverDNSSECValidationStatus =
  (typeof ResolverDNSSECValidationStatus)[keyof typeof ResolverDNSSECValidationStatus];

/**
 * @public
 * <p>A complex type that contains information about a configuration for DNSSEC validation.</p>
 */
export interface ResolverDnssecConfig {
  /**
   * @public
   * <p>The ID for a configuration for DNSSEC validation.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The validation status for a DNSSEC configuration. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ENABLING:</b> DNSSEC validation is being enabled but is not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLED:</b> DNSSEC validation is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLING:</b> DNSSEC validation is being disabled but is not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED</b> DNSSEC validation is disabled.</p>
   *             </li>
   *          </ul>
   */
  ValidationStatus?: ResolverDNSSECValidationStatus | string;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigResponse {
  /**
   * @public
   * <p>The information about a configuration for DNSSEC validation.</p>
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}

/**
 * @public
 */
export interface GetResolverEndpointRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to get information about.</p>
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverEndpointResponse {
  /**
   * @public
   * <p>Information about the Resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigRequest {
  /**
   * @public
   * <p>The ID of the Resolver query logging configuration that you want to get information about.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigResponse {
  /**
   * @public
   * <p>Information about the Resolver query logging configuration that you specified in a <code>GetQueryLogConfig</code> request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * @public
   * <p>The ID of the Resolver query logging configuration association that you want to get information about.</p>
   */
  ResolverQueryLogConfigAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * @public
   * <p>Information about the Resolver query logging configuration association that you specified in a <code>GetQueryLogConfigAssociation</code> request.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * @public
   * <p>The ARN of the query logging configuration that you want to get the query logging policy for.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * @public
   * <p>Information about the query logging policy for the query logging configuration that you specified in a
   * 			<code>GetResolverQueryLogConfigPolicy</code> request.</p>
   */
  ResolverQueryLogConfigPolicy?: string;
}

/**
 * @public
 * <p>The specified resource doesn't exist.</p>
 */
export class UnknownResourceException extends __BaseException {
  readonly name: "UnknownResourceException" = "UnknownResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceException, __BaseException>) {
    super({
      name: "UnknownResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetResolverRuleRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule that you want to get information about.</p>
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleResponse {
  /**
   * @public
   * <p>Information about the Resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule association that you want to get information about.</p>
   */
  ResolverRuleAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationResponse {
  /**
   * @public
   * <p>Information about the Resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

/**
 * @public
 */
export interface GetResolverRulePolicyRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule that you want to get the Resolver rule policy for.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRulePolicyResponse {
  /**
   * @public
   * <p>The Resolver rule policy for the rule that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   */
  ResolverRulePolicy?: string;
}

/**
 * @public
 */
export interface ImportFirewallDomainsRequest {
  /**
   * @public
   * <p>The ID of the domain list that you want to modify with the import operation.</p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * @public
   * <p>What you want DNS Firewall to do with the domains that are listed in the file. This must be set to <code>REPLACE</code>, which updates the domain list to exactly match the list in the file. </p>
   */
  Operation: FirewallDomainImportOperation | string | undefined;

  /**
   * @public
   * <p>The fully qualified URL or URI of the file stored in Amazon Simple Storage Service
   * 			(Amazon S3) that contains the list of domains to import.</p>
   *          <p>The file must be in an S3 bucket that's in the same Region
   *        as your DNS Firewall. The file must be a text file and must contain a single domain per line.</p>
   */
  DomainFileUrl: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsResponse {
  /**
   * @public
   * <p>The Id of the firewall domain list that DNS Firewall just updated.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>Status of the import request.</p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * @public
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 * <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified Resolver rule policy is invalid.</p>
 */
export class InvalidPolicyDocument extends __BaseException {
  readonly name: "InvalidPolicyDocument" = "InvalidPolicyDocument";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyDocument, __BaseException>) {
    super({
      name: "InvalidPolicyDocument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyDocument.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified tag is invalid.</p>
 */
export class InvalidTagException extends __BaseException {
  readonly name: "InvalidTagException" = "InvalidTagException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const IpAddressStatus = {
  Attached: "ATTACHED",
  Attaching: "ATTACHING",
  Creating: "CREATING",
  DeleteFailedFasExpired: "DELETE_FAILED_FAS_EXPIRED",
  Deleting: "DELETING",
  Detaching: "DETACHING",
  FailedCreation: "FAILED_CREATION",
  FailedResourceGone: "FAILED_RESOURCE_GONE",
  RemapAttaching: "REMAP_ATTACHING",
  RemapDetaching: "REMAP_DETACHING",
  UpdateFailed: "UPDATE_FAILED",
  Updating: "UPDATING",
} as const;

/**
 * @public
 */
export type IpAddressStatus = (typeof IpAddressStatus)[keyof typeof IpAddressStatus];

/**
 * @public
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
 * 			request, information about the IP addresses that the Resolver endpoint uses for DNS queries.</p>
 */
export interface IpAddressResponse {
  /**
   * @public
   * <p>The ID of one IP address.</p>
   */
  IpId?: string;

  /**
   * @public
   * <p>The ID of one subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>One IPv4 address that the Resolver endpoint uses for DNS queries.</p>
   */
  Ip?: string;

  /**
   * @public
   * <p>
   * 			One IPv6 address that the Resolver endpoint uses for DNS queries.
   * 		</p>
   */
  Ipv6?: string;

  /**
   * @public
   * <p>A status code that gives the current status of the request.</p>
   */
  Status?: IpAddressStatus | string;

  /**
   * @public
   * <p>A message that provides additional information about the status of the request.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

/**
 * @public
 */
export interface ListFirewallConfigsRequest {
  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallConfigsResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The configurations for the firewall behavior provided by DNS Firewall for VPCs from
   * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
   */
  FirewallConfigs?: FirewallConfig[];
}

/**
 * @public
 */
export interface ListFirewallDomainListsRequest {
  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallDomainListsResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the domain lists that you have defined.   </p>
   *          <p>This might be a partial list of the domain lists that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   */
  FirewallDomainLists?: FirewallDomainListMetadata[];
}

/**
 * @public
 */
export interface ListFirewallDomainsRequest {
  /**
   * @public
   * <p>The ID of the domain list whose domains you want to retrieve. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallDomainsResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the domains in the firewall domain list.  </p>
   *          <p>This might be a partial list of the domains that you've defined in the domain list. For
   * 			information, see <code>MaxResults</code>. </p>
   */
  Domains?: string[];
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any rule group. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * @public
   * <p>The unique identifier of the VPC that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any VPC. </p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting
   * 			from the rule group with the lowest numeric priority setting. </p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The association <code>Status</code> setting that you want DNS Firewall to filter on for the list. If you don't specify this, then DNS Firewall returns all associations, regardless of status.</p>
   */
  Status?: FirewallRuleGroupAssociationStatus | string;

  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of your firewall rule group associations.</p>
   *          <p>This might be a partial list of the associations that you have defined. For information, see <code>MaxResults</code>. </p>
   */
  FirewallRuleGroupAssociations?: FirewallRuleGroupAssociation[];
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsRequest {
  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of your firewall rule groups.</p>
   *          <p>This might be a partial list of the rule groups that you have defined. For information, see <code>MaxResults</code>. </p>
   */
  FirewallRuleGroups?: FirewallRuleGroupMetadata[];
}

/**
 * @public
 */
export interface ListFirewallRulesRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group that you want to retrieve the rules for. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * @public
   * <p>Optional additional filter for the rules to retrieve.</p>
   *          <p>The setting that determines the processing order of the rules in a rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>Optional additional filter for the rules to retrieve.</p>
   *          <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p>
   *             </li>
   *          </ul>
   */
  Action?: Action | string;

  /**
   * @public
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFirewallRulesResponse {
  /**
   * @public
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the rules that you have defined.  </p>
   *          <p>This might be a partial list of the firewall rules that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   */
  FirewallRules?: FirewallRule[];
}

/**
 * @public
 */
export interface ListOutpostResolversRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The maximum number of Resolvers on the Outpost that you want to return in the response to a
   * 				<code>ListOutpostResolver</code> request. If you don't specify a value for
   * 				<code>MaxResults</code>, the request returns up to 100 Resolvers.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListOutpostResolver</code> request, omit this value.</p>
   *          <p></p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOutpostResolversResponse {
  /**
   * @public
   * <p>The Resolvers on Outposts that were created by using the current Amazon Web Services account,
   * 		and that match the specified filters, if any.</p>
   */
  OutpostResolvers?: OutpostResolver[];

  /**
   * @public
   * <p>If more than <code>MaxResults</code> Resolvers match the specified criteria, you can submit another
   * 		<code>ListOutpostResolver</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResolverConfigsRequest {
  /**
   * @public
   * <p>The maximum number of Resolver configurations that you want to return in the response to
   * 			a <code>ListResolverConfigs</code> request. If you don't specify a value for <code>MaxResults</code>,
   * 			up to 100 Resolver configurations are returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> Resolver configurations, use
   * 			<code>NextToken</code> to get the second and subsequent pages of results.</p>
   *          <p>For the first <code>ListResolverConfigs</code> request, omit this value.</p>
   *          <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and
   * 			specify that value for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResolverConfigsResponse {
  /**
   * @public
   * <p>If a response includes the last of the Resolver configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   *          <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<code>ListResolverConfigs</code> request.
   * 			Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array that contains one <code>ResolverConfigs</code> element for each Resolver configuration that is associated
   * 			with the current Amazon Web Services account.</p>
   */
  ResolverConfigs?: ResolverConfig[];
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsRequest {
  /**
   * @public
   * <p>
   *             <i>Optional</i>: An integer that specifies the maximum number of DNSSEC configuration results that you want Amazon Route 53 to return.
   * 			If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configuration per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> DNSSEC configurations, use <code>NextToken</code>
   * 			to get the second and subsequent pages of results.</p>
   *          <p>For the first <code>ListResolverDnssecConfigs</code> request, omit this value.</p>
   *          <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value
   * 			for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of objects.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsResponse {
  /**
   * @public
   * <p>If a response includes the last of the DNSSEC configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   *          <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>
   * 			request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array that contains one
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResolverDnssecConfig.html">ResolverDnssecConfig</a> element
   * 			for each configuration for DNSSEC validation that is associated with the current Amazon Web Services account.</p>
   */
  ResolverDnssecConfigs?: ResolverDnssecConfig[];
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to get IP addresses for.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * @public
   * <p>The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p>
   *          <p>If the specified Resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesResponse {
  /**
   * @public
   * <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request,
   * 			specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints).</p>
   */
  IpAddresses?: IpAddressResponse[];
}

/**
 * @public
 */
export interface ListResolverEndpointsRequest {
  /**
   * @public
   * <p>The maximum number of Resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver endpoints. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> Resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request
   * 			to get the next group of Resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListResolverEndpointsResponse {
  /**
   * @public
   * <p>If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request
   * 			to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Resolver endpoints that were created by using the current Amazon Web Services account, and that match the specified filters, if any.</p>
   */
  ResolverEndpoints?: ResolverEndpoint[];
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsRequest {
  /**
   * @public
   * <p>The maximum number of query logging associations that you want to return in the response to a <code>ListResolverQueryLogConfigAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging associations. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverQueryLogConfigAssociations</code> request, omit this value.</p>
   *          <p>If there are more than <code>MaxResults</code> query logging associations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigAssociations</code> request to get the next group of associations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of query logging associations.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The element that you want Resolver to sort query logging associations by. </p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   *          </note>
   *          <p>Valid values include the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The ID of the query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code>
   * 				indicates the cause: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   *                <p>If <code>Status</code> is a value other than <code>FAILED</code>, <code>ERROR</code> is null.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging association</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceId</code>: The ID of the VPC that is associated with the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The current status of the configuration. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATED</code>: The association between an Amazon VPC and a query logging configuration
   * 						was successfully created. Resolver is logging queries that originate in the specified VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DELETING</code>: Resolver is deleting this query logging association.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association.
   * 						Here are two common causes:</p>
   *                      <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  SortBy?: string;

  /**
   * @public
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging associations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   *          </note>
   */
  SortOrder?: SortOrder | string;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsResponse {
  /**
   * @public
   * <p>If there are more than <code>MaxResults</code> query logging associations, you can submit another <code>ListResolverQueryLogConfigAssociations</code> request
   * 			to get the next group of associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the
   * 			number of associations that are returned in a <code>ListResolverQueryLogConfigAssociations</code> response, depending on the values that you specify
   * 			in the request.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>The total number of query logging associations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigAssociations</code> request. For the total number of associations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   */
  TotalFilteredCount?: number;

  /**
   * @public
   * <p>A list that contains one <code>ResolverQueryLogConfigAssociations</code> element for each query logging association that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   */
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsRequest {
  /**
   * @public
   * <p>The maximum number of query logging configurations that you want to return in the response to a <code>ListResolverQueryLogConfigs</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging configurations. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverQueryLogConfigs</code> request, omit this value.</p>
   *          <p>If there are more than <code>MaxResults</code> query logging configurations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigs</code> request to get the next group of configurations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of query logging configurations.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The element that you want Resolver to sort query logging configurations by. </p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   *          </note>
   *          <p>Valid values include the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Arn</code>: The ARN of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AssociationCount</code>: The number of VPCs that are associated with the specified configuration </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that Resolver returned when the configuration was created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that was specified for <code>CreatorRequestId</code> when the configuration was created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationArn</code>: The location that logs are sent to</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OwnerId</code>: The Amazon Web Services account number of the account that created the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: Whether the configuration is shared with other Amazon Web Services accounts or shared with the current account by
   * 				another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The current status of the configuration. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING</code>: Resolver is creating the query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATED</code>: The query logging configuration was successfully created.
   * 						Resolver is logging queries that originate in the specified VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DELETING</code>: Resolver is deleting this query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging configuration.
   * 						Here are two common causes:</p>
   *                      <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  SortBy?: string;

  /**
   * @public
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging configurations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   *          </note>
   */
  SortOrder?: SortOrder | string;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsResponse {
  /**
   * @public
   * <p>If there are more than <code>MaxResults</code> query logging configurations, you can submit another <code>ListResolverQueryLogConfigs</code> request
   * 			to get the next group of configurations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the
   * 			number of query logging configurations that are returned in a <code>ListResolverQueryLogConfigs</code> response, depending on the values that you specify
   * 			in the request.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>The total number of query logging configurations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigs</code> request. For the total number of query logging configurations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   */
  TotalFilteredCount?: number;

  /**
   * @public
   * <p>A list that contains one <code>ResolverQueryLogConfig</code> element for each query logging configuration that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   */
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[];
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsRequest {
  /**
   * @public
   * <p>The maximum number of rule associations that you want to return in the response to a <code>ListResolverRuleAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 rule associations. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request
   * 			to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsResponse {
  /**
   * @public
   * <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another
   * 			<code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The associations that were created between Resolver rules and VPCs using the current Amazon Web Services account, and that match the
   * 			specified filters, if any.</p>
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[];
}

/**
 * @public
 */
export interface ListResolverRulesRequest {
  /**
   * @public
   * <p>The maximum number of Resolver rules that you want to return in the response to a <code>ListResolverRules</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver rules.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListResolverRules</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> Resolver rules, you can submit another <code>ListResolverRules</code> request
   * 			to get the next group of Resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRules</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListResolverRulesResponse {
  /**
   * @public
   * <p>If more than <code>MaxResults</code> Resolver rules match the specified criteria, you can submit another
   * 			<code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Resolver rules that were created using the current Amazon Web Services account and that match the specified filters, if any.</p>
   */
  ResolverRules?: ResolverRule[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that you want to list tags for.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>For the first <code>ListTagsForResource</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request
   * 			to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another
   * 			<code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyRequest {
  /**
   * @public
   * <p>The ARN (Amazon Resource Name) for the rule group that you want to share.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy to attach to the rule group.</p>
   */
  FirewallRuleGroupPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyResponse {
  /**
   * @public
   * <p></p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rules with.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>An Identity and Access Management policy statement that lists the query logging configurations that you want to share with another Amazon Web Services account
   * 			and the operations that you want the account to be able to perform. You can specify the following operations in the <code>Actions</code> section
   * 			of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>route53resolver:AssociateResolverQueryLogConfig</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:DisassociateResolverQueryLogConfig</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverQueryLogConfigs</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In the <code>Resource</code> section of the statement, you specify the ARNs for the query logging configurations that you want to share
   * 			with the account that you specified in <code>Arn</code>. </p>
   */
  ResolverQueryLogConfigPolicy: string | undefined;
}

/**
 * @public
 * <p>The response to a <code>PutResolverQueryLogConfigPolicy</code> request.</p>
 */
export interface PutResolverQueryLogConfigPolicyResponse {
  /**
   * @public
   * <p>Whether the <code>PutResolverQueryLogConfigPolicy</code> request was successful.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface PutResolverRulePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule that you want to share with another account.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>An Identity and Access Management policy statement that lists the rules that you want to share with another Amazon Web Services account and the operations that you want the account
   * 			to be able to perform. You can specify the following operations in the <code>Action</code> section of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>route53resolver:GetResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:AssociateResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:DisassociateResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverRules</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverRuleAssociations</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In the <code>Resource</code> section of the statement, specify the ARN for the rule that you want to share with another account. Specify the same ARN
   * 			that you specified in <code>Arn</code>.</p>
   */
  ResolverRulePolicy: string | undefined;
}

/**
 * @public
 * <p>The response to a <code>PutResolverRulePolicy</code> request.</p>
 */
export interface PutResolverRulePolicyResponse {
  /**
   * @public
   * <p>Whether the <code>PutResolverRulePolicy</code> request was successful.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a>
 * 			request, information about the changes that you want to make.</p>
 */
export interface ResolverRuleConfig {
  /**
   * @public
   * <p>The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * @public
   * <p>The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in
   * 			<code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags that you want to add to the specified resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags that you want to remove to the specified resource.</p>
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
export interface UpdateFirewallConfigRequest {
  /**
   * @public
   * <p>The ID of the VPC that the configuration is for.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p>
   *          <ul>
   *             <li>
   *                <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability.
   *        DNS Firewall blocks queries that it is unable to evaluate properly. </p>
   *             </li>
   *             <li>
   *                <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it
   *        is unable to properly evaluate them. </p>
   *             </li>
   *          </ul>
   *          <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>
   */
  FirewallFailOpen: FirewallFailOpenStatus | string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallConfigResponse {
  /**
   * @public
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC. </p>
   */
  FirewallConfig?: FirewallConfig;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsRequest {
  /**
   * @public
   * <p>The ID of the domain list whose domains you want to update. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * @public
   * <p>What you want DNS Firewall to do with the domains that you are providing: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - Add the domains to the ones that are already in the domain list. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - Search the domain list for the domains and remove them from the list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Update the domain list to exactly match the list that you are providing. </p>
   *             </li>
   *          </ul>
   */
  Operation: FirewallDomainUpdateOperation | string | undefined;

  /**
   * @public
   * <p>A list of domains to use in the update operation.</p>
   *          <important>
   *             <p>There is a limit of 1000 domains per request.</p>
   *          </important>
   *          <p>Each domain specification in your domain list must satisfy the following
   * 	requirements: </p>
   *          <ul>
   *             <li>
   *                <p>It can optionally start with <code>*</code> (asterisk).</p>
   *             </li>
   *             <li>
   *                <p>With the exception of the optional starting asterisk, it must only contain
   *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
   *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
   *             </li>
   *             <li>
   *                <p>It must be from 1-255 characters in length. </p>
   *             </li>
   *          </ul>
   */
  Domains: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsResponse {
  /**
   * @public
   * <p>The ID of the firewall domain list that DNS Firewall just updated.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>Status of the <code>UpdateFirewallDomains</code> request.</p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * @public
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface UpdateFirewallRuleRequest {
  /**
   * @public
   * <p>The unique identifier of the firewall rule group for the rule. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the domain list to use in the rule.  </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p>
   *             </li>
   *          </ul>
   */
  Action?: Action | string;

  /**
   * @public
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   */
  BlockResponse?: BlockResponse | string;

  /**
   * @public
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * @public
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * @public
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateFirewallRuleResponse {
  /**
   * @public
   * <p>The firewall rule that you just updated. </p>
   */
  FirewallRule?: FirewallRule;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationRequest {
  /**
   * @public
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;

  /**
   * @public
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * @public
   * <p>The name of the rule group association.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationResponse {
  /**
   * @public
   * <p>The association that you just updated. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

/**
 * @public
 */
export interface UpdateOutpostResolverRequest {
  /**
   * @public
   * <p>A unique string that identifies Resolver on an Outpost.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Name of the Resolver on the Outpost.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance count for a Resolver on the Outpost.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>
   * 			Amazon EC2 instance type.
   * 		</p>
   */
  PreferredInstanceType?: string;
}

/**
 * @public
 */
export interface UpdateOutpostResolverResponse {
  /**
   * @public
   * <p>The response to an <code>UpdateOutpostResolver</code> request.</p>
   */
  OutpostResolver?: OutpostResolver;
}

/**
 * @public
 */
export interface UpdateResolverConfigRequest {
  /**
   * @public
   * <p>Resource ID of the Amazon VPC that you want to update the Resolver configuration for.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Indicates whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. Disabling this option will also affect EC2-Classic
   * 			instances using ClassicLink. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 					<i>Amazon EC2 guide</i>.</p>
   *          <important>
   *             <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   * 			<i>Amazon EC2 guide</i> and the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>.</p>
   *          </important>
   *          <note>
   *             <p>It can take some time for the status change to be completed.</p>
   *          </note>
   *          <p></p>
   */
  AutodefinedReverseFlag: AutodefinedReverseFlag | string | undefined;
}

/**
 * @public
 */
export interface UpdateResolverConfigResponse {
  /**
   * @public
   * <p>An array that contains settings for the specified Resolver configuration.</p>
   */
  ResolverConfig?: ResolverConfig;
}

/**
 * @public
 * @enum
 */
export const Validation = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;

/**
 * @public
 */
export type Validation = (typeof Validation)[keyof typeof Validation];

/**
 * @public
 */
export interface UpdateResolverDnssecConfigRequest {
  /**
   * @public
   * <p>The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The new value that you are specifying for DNSSEC validation for the VPC. The value can be <code>ENABLE</code>
   * 			or <code>DISABLE</code>. Be aware that it can take time for a validation status change to be completed.</p>
   */
  Validation: Validation | string | undefined;
}

/**
 * @public
 */
export interface UpdateResolverDnssecConfigResponse {
  /**
   * @public
   * <p>A complex type that contains settings for the specified DNSSEC configuration.</p>
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}

/**
 * @public
 * <p>
 * 			Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.
 * 		</p>
 */
export interface UpdateIpAddress {
  /**
   * @public
   * <p> The ID of the IP address, specified by the <code>ResolverEndpointId</code>. </p>
   */
  IpId: string | undefined;

  /**
   * @public
   * <p>
   * 			The IPv6 address that you want to use for DNS queries.
   * 		</p>
   */
  Ipv6: string | undefined;
}

/**
 * @public
 */
export interface UpdateResolverEndpointRequest {
  /**
   * @public
   * <p>The ID of the Resolver endpoint that you want to update.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * @public
   * <p>The name of the Resolver endpoint that you want to update.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   * 			Specifies the endpoint type for what type of IP address the endpoint uses to forward DNS queries.
   * 		</p>
   *          <p>Updating to <code>IPV6</code> type isn't currently supported.</p>
   */
  ResolverEndpointType?: ResolverEndpointType | string;

  /**
   * @public
   * <p>
   * 			Specifies the IPv6 address when you update the Resolver endpoint from IPv4 to dual-stack.
   * 			If you don't specify an IPv6 address, one will be automatically chosen from your subnet.
   * 		</p>
   */
  UpdateIpAddresses?: UpdateIpAddress[];
}

/**
 * @public
 */
export interface UpdateResolverEndpointResponse {
  /**
   * @public
   * <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * @public
 */
export interface UpdateResolverRuleRequest {
  /**
   * @public
   * <p>The ID of the Resolver rule that you want to update.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * @public
   * <p>The new settings for the Resolver rule.</p>
   */
  Config: ResolverRuleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRuleResponse {
  /**
   * @public
   * <p>The response to an <code>UpdateResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}
