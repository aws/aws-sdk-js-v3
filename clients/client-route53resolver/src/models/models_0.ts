// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { Route53ResolverServiceException as __BaseException } from "./Route53ResolverServiceException";

/**
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

export enum Action {
  ALERT = "ALERT",
  ALLOW = "ALLOW",
  BLOCK = "BLOCK",
}

export enum MutationProtectionStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.</p>
 */
export interface Tag {
  /**
   * <p>The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes,
   * 			the value of <code>Key</code> might be <code>account-id</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the
   * 			customer account that you're creating the resource for.</p>
   */
  Value: string | undefined;
}

export interface AssociateFirewallRuleGroupRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be
   * 			retried without the risk of running the operation twice. <code>CreatorRequestId</code>
   * 			can be any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The unique identifier of the VPC that you want to associate with the rule group. </p>
   */
  VpcId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   *    	     <p>The allowed values for <code>Priority</code> are between 100 and 9900.</p>
   */
  Priority: number | undefined;

  /**
   * <p>A name that lets you identify the association, to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
   *        When you create the association, the default setting is <code>DISABLED</code>. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * <p>A list of the tag keys and values that you want to associate with the rule group association. </p>
   */
  Tags?: Tag[];
}

export enum FirewallRuleGroupAssociationStatus {
  COMPLETE = "COMPLETE",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>An association between a firewall rule group and a VPC, which enables DNS filtering for
 * 			the VPC. </p>
 */
export interface FirewallRuleGroupAssociation {
  /**
   * <p>The identifier for the association.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall rule group association.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * <p>The unique identifier of the VPC that is associated with the rule group. </p>
   */
  VpcId?: string;

  /**
   * <p>The name of the association.</p>
   */
  Name?: string;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall
   *            filters VPC traffic starting from rule group with the lowest numeric priority setting. </p>
   */
  Priority?: number;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * <p>The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to
   *    manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.</p>
   */
  ManagedOwnerName?: string;

  /**
   * <p>The current status of the association.</p>
   */
  Status?: FirewallRuleGroupAssociationStatus | string;

  /**
   * <p>Additional information about the status of the response, if available.</p>
   */
  StatusMessage?: string;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface AssociateFirewallRuleGroupResponse {
  /**
   * <p>The association that you just created. The association has an ID that you can use to
   * 			identify it in other requests, like update and delete.</p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

/**
 * <p></p>
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
 * <p>The request caused one or more limits to be exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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
 * <p>The specified resource doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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
 * <p></p>
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
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, information about an IP address to update.</p>
 */
export interface IpAddressUpdate {
  /**
   * <p>
   *             <i>Only when removing an IP address from a Resolver endpoint</i>: The ID of the IP address that you want to remove.
   * 			To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   */
  IpId?: string;

  /**
   * <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The new IP address.</p>
   */
  Ip?: string;
}

export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to associate IP addresses with.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID,
   * 			Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
   */
  IpAddress: IpAddressUpdate | undefined;
}

export enum ResolverEndpointDirection {
  Inbound = "INBOUND",
  Outbound = "OUTBOUND",
}

export enum ResolverEndpointStatus {
  ActionNeeded = "ACTION_NEEDED",
  AutoRecovering = "AUTO_RECOVERING",
  Creating = "CREATING",
  Deleting = "DELETING",
  Operational = "OPERATIONAL",
  Updating = "UPDATING",
}

/**
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.</p>
 */
export interface ResolverEndpoint {
  /**
   * <p>The ID of the Resolver endpoint.</p>
   */
  Id?: string;

  /**
   * <p>A unique string that identifies the request that created the Resolver endpoint. The
   * 				<code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the Resolver endpoint.</p>
   */
  Arn?: string;

  /**
   * <p>The name that you assigned to the Resolver endpoint when you submitted a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
   * 			request.</p>
   */
  Name?: string;

  /**
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules
   * 			(for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access.
   * 			For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:</p>
   * 		       <ul>
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
   * <p>The number of IP addresses that the Resolver endpoint can use for DNS queries.</p>
   */
  IpAddressCount?: number;

  /**
   * <p>The ID of the VPC that you want to create the Resolver endpoint in.</p>
   */
  HostVPCId?: string;

  /**
   * <p>A code that specifies the current status of the Resolver endpoint. Valid values include the following:</p>
   * 		       <ul>
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
   * 				           <ul>
   *                   <li>
   *                      <p>One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>The network interface couldn't be created for some reason that's outside the control of Resolver.</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this endpoint and the associated network interfaces.</p>
   *             </li>
   *          </ul>
   */
  Status?: ResolverEndpointStatus | string;

  /**
   * <p>A detailed description of the status of the Resolver endpoint.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>AssociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

/**
 * <p>One or more parameters in this request are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
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
 * <p>The resource that you tried to create already exists.</p>
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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

export interface AssociateResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to associate a VPC with.</p>
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * <p>The ID of an Amazon VPC that you want this query logging configuration to log queries for.</p>
   *
   * 		       <note>
   * 			         <p>The VPCs and the query logging configuration must be in the same Region.</p>
   * 		       </note>
   */
  ResourceId: string | undefined;
}

export enum ResolverQueryLogConfigAssociationError {
  AccessDenied = "ACCESS_DENIED",
  DestinationNotFound = "DESTINATION_NOT_FOUND",
  InternalServiceError = "INTERNAL_SERVICE_ERROR",
  None = "NONE",
}

export enum ResolverQueryLogConfigAssociationStatus {
  ActionNeeded = "ACTION_NEEDED",
  Active = "ACTIVE",
  Creating = "CREATING",
  Deleting = "DELETING",
  Failed = "FAILED",
}

/**
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
   * <p>The ID of the query logging association.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the query logging configuration that a VPC is associated with.</p>
   */
  ResolverQueryLogConfigId?: string;

  /**
   * <p>The ID of the Amazon VPC that is associated with the query logging configuration.</p>
   */
  ResourceId?: string;

  /**
   * <p>The status of the specified query logging association. Valid values include the following:</p>
   * 		       <ul>
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
   * <p>If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code> indicates the cause:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *             </li>
   *          </ul>
   * 		       <p>If the value of <code>Status</code> is a value other than <code>FAILED</code>, <code>Error</code> is null. </p>
   */
  Error?: ResolverQueryLogConfigAssociationError | string;

  /**
   * <p>Contains additional information about the error. If the value or <code>Error</code> is null, the value of <code>ErrorMessage</code> also is null.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;
}

export interface AssociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export interface AssociateResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>A name for the association that you're creating between a Resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC that you want to associate the Resolver rule with.</p>
   */
  VPCId: string | undefined;
}

export enum ResolverRuleAssociationStatus {
  Complete = "COMPLETE",
  Creating = "CREATING",
  Deleting = "DELETING",
  Failed = "FAILED",
  Overridden = "OVERRIDDEN",
}

/**
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
   * <p>The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>
   * 			request.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the Resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   */
  ResolverRuleId?: string;

  /**
   * <p>The name of an association between a Resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC that you associated the Resolver rule with.</p>
   */
  VPCId?: string;

  /**
   * <p>A code that specifies the current status of the association between a Resolver rule and a VPC.</p>
   */
  Status?: ResolverRuleAssociationStatus | string;

  /**
   * <p>A detailed description of the status of the association between a Resolver rule and a VPC.</p>
   */
  StatusMessage?: string;
}

export interface AssociateResolverRuleResponse {
  /**
   * <p>Information about the <code>AssociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

/**
 * <p>The specified resource isn't available.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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

export enum AutodefinedReverseFlag {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export enum BlockOverrideDnsType {
  CNAME = "CNAME",
}

export enum BlockResponse {
  NODATA = "NODATA",
  NXDOMAIN = "NXDOMAIN",
  OVERRIDE = "OVERRIDE",
}

export interface CreateFirewallDomainListRequest {
  /**
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A name that lets you identify the domain list to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the domain list. </p>
   */
  Tags?: Tag[];
}

export enum FirewallDomainListStatus {
  COMPLETE = "COMPLETE",
  COMPLETE_IMPORT_FAILED = "COMPLETE_IMPORT_FAILED",
  DELETING = "DELETING",
  IMPORTING = "IMPORTING",
  UPDATING = "UPDATING",
}

/**
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p>
 *          <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
 */
export interface FirewallDomainList {
  /**
   * <p>The ID of the domain list. </p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall domain list.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * <p>The number of domain names that are specified in the domain list.</p>
   */
  DomainCount?: number;

  /**
   * <p>The status of the domain list.  </p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   */
  ManagedOwnerName?: string;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  ModificationTime?: string;
}

export interface CreateFirewallDomainListResponse {
  /**
   * <p>The
   * 			domain list that you just created.</p>
   */
  FirewallDomainList?: FirewallDomainList;
}

export interface CreateFirewallRuleRequest {
  /**
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The unique identifier of the firewall rule group where you want to create the rule. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list that you want to use in the rule. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   */
  Priority: number | undefined;

  /**
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
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * <p>A name that lets you identify the rule in the rule group.</p>
   */
  Name: string | undefined;
}

/**
 * <p>A single firewall rule in a rule group.</p>
 */
export interface FirewallRule {
  /**
   * <p>The unique identifier of the firewall rule group of the rule. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * <p>The ID of the domain list that's used in the rule. </p>
   */
  FirewallDomainListId?: string;

  /**
   * <p>The name of the rule. </p>
   */
  Name?: string;

  /**
   * <p>The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   */
  Priority?: number;

  /**
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
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed requests
   *            without the risk of executing the operation twice. This can be any unique string, for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface CreateFirewallRuleResponse {
  /**
   * <p>The
   * 			firewall rule that you just created. </p>
   */
  FirewallRule?: FirewallRule;
}

export interface CreateFirewallRuleGroupRequest {
  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A name that lets you identify the rule group, to manage and use it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the rule group. </p>
   */
  Tags?: Tag[];
}

export enum ShareStatus {
  NotShared = "NOT_SHARED",
  SharedByMe = "SHARED_BY_ME",
  SharedWithMe = "SHARED_WITH_ME",
}

export enum FirewallRuleGroupStatus {
  COMPLETE = "COMPLETE",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.</p>
 */
export interface FirewallRuleGroup {
  /**
   * <p>The ID of the rule group. </p>
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the rule group.</p>
   */
  Name?: string;

  /**
   * <p>The number of rules in the rule group.</p>
   */
  RuleCount?: number;

  /**
   * <p>The status of the domain list.  </p>
   */
  Status?: FirewallRuleGroupStatus | string;

  /**
   * <p>Additional information about the status of the rule group, if available.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   */
  OwnerId?: string;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface CreateFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

/**
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
 * 			request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
 * 			<code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.</p>
 */
export interface IpAddressRequest {
  /**
   * <p>The ID of the subnet that contains the IP address. </p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The IP address that you want to use for DNS queries.</p>
   */
  Ip?: string;
}

export interface CreateResolverEndpointRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify
   * 			must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints).
   * 			Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port
   * 			that you're using for DNS queries on your network.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>Specify the applicable value:</p>
   * 		       <ul>
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
   * <p>The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. </p>
   */
  IpAddresses: IpAddressRequest[] | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];
}

export interface CreateResolverEndpointResponse {
  /**
   * <p>Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export interface CreateResolverQueryLogConfigRequest {
  /**
   * <p>The name that you want to give the query logging configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group,
   * 			or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:</p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>S3 bucket</b>: </p>
   * 				           <p>
   *                   <code>arn:aws:s3:::examplebucket</code>
   *                </p>
   * 				           <p>You can optionally append a file prefix to the end of the ARN.</p>
   * 				           <p>
   *                   <code>arn:aws:s3:::examplebucket/development/</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>CloudWatch Logs log group</b>: </p>
   * 				           <p>
   *                   <code>arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Kinesis Data Firehose delivery stream</b>:</p>
   * 				           <p>
   *                   <code>arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  DestinationArn: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A list of the tag keys and values that you want to associate with the query logging configuration.</p>
   */
  Tags?: Tag[];
}

export enum ResolverQueryLogConfigStatus {
  Created = "CREATED",
  Creating = "CREATING",
  Deleting = "DELETING",
  Failed = "FAILED",
}

/**
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
   * <p>The ID for the query logging configuration.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Web Services account ID for the account that created the query logging configuration. </p>
   */
  OwnerId?: string;

  /**
   * <p>The status of the specified query logging configuration. Valid values include the following:</p>
   * 		       <ul>
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
   * 				           <ul>
   *                   <li>
   *                      <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *          </ul>
   */
  Status?: ResolverQueryLogConfigStatus | string;

  /**
   * <p>An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another
   * 			Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>The number of VPCs that are associated with the query logging configuration.</p>
   */
  AssociationCount?: number;

  /**
   * <p>The ARN for the query logging configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the query logging configuration. </p>
   */
  Name?: string;

  /**
   * <p>The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or
   * 			a Kinesis Data Firehose delivery stream.</p>
   */
  DestinationArn?: string;

  /**
   * <p>A unique string that identifies the request that created the query logging configuration.
   * 			The <code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;
}

export interface CreateResolverQueryLogConfigResponse {
  /**
   * <p>Information about the <code>CreateResolverQueryLogConfig</code> request, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export enum RuleTypeOption {
  Forward = "FORWARD",
  Recursive = "RECURSIVE",
  System = "SYSTEM",
}

/**
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>
 * 			request, an array of the IPs that you want to forward DNS queries to.</p>
 */
export interface TargetAddress {
  /**
   * <p>One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   */
  Port?: number;
}

export interface CreateResolverRuleRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p>
   * 		       <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   * 		       <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   * 		       <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   */
  RuleType: RuleTypeOption | string | undefined;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a space.</p>
   * 		       <p>
   *             <code>TargetIps</code> is available only when the value of <code>Rule type</code> is <code>FORWARD</code>.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify
   * 			in <code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];
}

export enum ResolverRuleStatus {
  Complete = "COMPLETE",
  Deleting = "DELETING",
  Failed = "FAILED",
  Updating = "UPDATING",
}

/**
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
   * <p>The ID that Resolver assigned to the Resolver rule when you created it.</p>
   */
  Id?: string;

  /**
   * <p>A unique string that you specified when you created the Resolver rule.
   * 				<code>CreatorRequestId</code> identifies the request and allows failed requests to
   * 			be retried without the risk of running the operation twice. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the Resolver rule specified by <code>Id</code>.</p>
   */
  Arn?: string;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name
   * 			(www.example.com).</p>
   */
  DomainName?: string;

  /**
   * <p>A code that specifies the current status of the Resolver rule.</p>
   */
  Status?: ResolverRuleStatus | string;

  /**
   * <p>A detailed description of the status of a Resolver rule.</p>
   */
  StatusMessage?: string;

  /**
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p>
   * 		       <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   * 		       <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   * 		       <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   */
  RuleType?: RuleTypeOption | string;

  /**
   * <p>The name for the Resolver rule, which you specified when you created the Resolver rule.</p>
   */
  Name?: string;

  /**
   * <p>An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically,
   * 			these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>The ID of the endpoint that the rule is associated with.</p>
   */
  ResolverEndpointId?: string;

  /**
   * <p>When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.</p>
   */
  OwnerId?: string;

  /**
   * <p>Whether the rule is shared and, if so, whether the current account is sharing the rule with
   * 			another account, or another account is sharing the rule with the current account.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface CreateResolverRuleResponse {
  /**
   * <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

export interface DeleteFirewallDomainListRequest {
  /**
   * <p>The ID of the domain list that you want to delete. </p>
   */
  FirewallDomainListId: string | undefined;
}

export interface DeleteFirewallDomainListResponse {
  /**
   * <p>The domain list that you just deleted. </p>
   */
  FirewallDomainList?: FirewallDomainList;
}

export interface DeleteFirewallRuleRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to delete the rule from. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list that's used in the rule.  </p>
   */
  FirewallDomainListId: string | undefined;
}

export interface DeleteFirewallRuleResponse {
  /**
   * <p>The specification for the firewall rule that you just deleted.</p>
   */
  FirewallRule?: FirewallRule;
}

export interface DeleteFirewallRuleGroupRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to delete. </p>
   */
  FirewallRuleGroupId: string | undefined;
}

export interface DeleteFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

export interface DeleteResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to delete.</p>
   */
  ResolverEndpointId: string | undefined;
}

export interface DeleteResolverEndpointResponse {
  /**
   * <p>Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export interface DeleteResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to delete.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

export interface DeleteResolverQueryLogConfigResponse {
  /**
   * <p>Information about the query logging configuration that you deleted, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export interface DeleteResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to delete.</p>
   */
  ResolverRuleId: string | undefined;
}

export interface DeleteResolverRuleResponse {
  /**
   * <p>Information about the <code>DeleteResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

/**
 * <p>The resource that you tried to update or delete is currently in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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

export interface DisassociateFirewallRuleGroupRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

export interface DisassociateFirewallRuleGroupResponse {
  /**
   * <p>The firewall rule group association that you just removed. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to disassociate an IP address from.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The IPv4 address that you want to remove from a Resolver endpoint.</p>
   */
  IpAddress: IpAddressUpdate | undefined;
}

export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>DisassociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export interface DisassociateResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to disassociate a specified VPC from.</p>
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * <p>The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.</p>
   */
  ResourceId: string | undefined;
}

export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export interface DisassociateResolverRuleRequest {
  /**
   * <p>The ID of the VPC that you want to disassociate the Resolver rule from.</p>
   */
  VPCId: string | undefined;

  /**
   * <p>The ID of the Resolver rule that you want to disassociate from the specified VPC.</p>
   */
  ResolverRuleId: string | undefined;
}

export interface DisassociateResolverRuleResponse {
  /**
   * <p>Information about the <code>DisassociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

/**
 * <p>For Resolver list operations
 * 			(<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>),
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>),
 * 			an optional specification to return a subset of objects.</p>
 * 		       <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example,
 * 			to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>
 */
export interface Filter {
  /**
   * <p>The name of the parameter that you want to use to filter objects.</p>
   * 		       <p>The valid values for <code>Name</code> depend on the action that you're including the filter in,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
   * 			or
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>.</p>
   *
   * 		       <note>
   * 			         <p>In early versions of Resolver, values for <code>Name</code> were listed as uppercase, with underscore (_) delimiters. For example,
   * 				<code>CreatorRequestId</code> was originally listed as <code>CREATOR_REQUEST_ID</code>. Uppercase values for <code>Name</code> are still supported.</p>
   * 		       </note>
   *
   * 		       <p>
   *             <b>ListResolverEndpoints</b>
   *          </p>
   * 		       <p>Valid values for <code>Name</code> include the following:</p>
   * 		       <ul>
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
   *
   * 		       <p>
   *             <b>ListResolverRules</b>
   *          </p>
   * 		       <p>Valid values for <code>Name</code> include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that you specified when you created the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DomainName</code>: The domain name for which Resolver is forwarding DNS queries to your network. In the value that
   * 				you specify for <code>Values</code>, include a trailing dot (.) after the domain name. For example, if the domain name is example.com,
   * 				specify the following value. Note the "." after <code>com</code>:</p>
   * 				           <p>
   *                   <code>example.com.</code>
   *                </p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverEndpointId</code>: The ID of the Resolver endpoint that the Resolver rule is associated with.</p>
   * 				           <note>
   *                   <p>You can filter on the Resolver endpoint only for rules that have a value of <code>FORWARD</code> for
   * 					<code>RuleType</code>.</p>
   *                </note>
   * 			         </li>
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
   *
   * 		       <p>
   *             <b>ListResolverRuleAssociations</b>
   *          </p>
   * 		       <p>Valid values for <code>Name</code> include the following:</p>
   * 		       <ul>
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
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>VPCId</code>: The ID of the VPC that the Resolver rule is associated with.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>ListResolverQueryLogConfigs</b>
   *          </p>
   * 		       <p>Valid values for <code>Name</code> include the following:</p>
   * 		       <ul>
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
   * 				           <ul>
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
   * 			         </li>
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
   * 			         </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>ListResolverQueryLogConfigAssociations</b>
   *          </p>
   * 		       <p>Valid values for <code>Name</code> include the following:</p>
   * 		       <ul>
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
   * 			         </li>
   *          </ul>
   */
  Name?: string;

  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules,
   * 			the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for
   * 			<code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>.</p>
   */
  Values?: string[];
}

export enum FirewallFailOpenStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
 * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
 */
export interface FirewallConfig {
  /**
   * <p>The ID of the firewall configuration.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the VPC that this firewall configuration applies to.</p>
   */
  ResourceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.</p>
   */
  OwnerId?: string;

  /**
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

export enum FirewallDomainImportOperation {
  REPLACE = "REPLACE",
}

/**
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall domain list, call  <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
 */
export interface FirewallDomainListMetadata {
  /**
   * <p>The ID of the domain list. </p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall domain list metadata.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   */
  ManagedOwnerName?: string;
}

export enum FirewallDomainUpdateOperation {
  ADD = "ADD",
  REMOVE = "REMOVE",
  REPLACE = "REPLACE",
}

/**
 * <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
 */
export interface FirewallRuleGroupMetadata {
  /**
   * <p>The ID of the rule group. </p>
   */
  Id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the rule group.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   */
  OwnerId?: string;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   */
  ShareStatus?: ShareStatus | string;
}

export interface GetFirewallConfigRequest {
  /**
   * <p>The ID of the VPC from Amazon VPC that the configuration is for.</p>
   */
  ResourceId: string | undefined;
}

export interface GetFirewallConfigResponse {
  /**
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
   * 			AmazonVPC. </p>
   */
  FirewallConfig?: FirewallConfig;
}

export interface GetFirewallDomainListRequest {
  /**
   * <p>The ID of the domain list.  </p>
   */
  FirewallDomainListId: string | undefined;
}

export interface GetFirewallDomainListResponse {
  /**
   * <p>The domain list that you requested.  </p>
   */
  FirewallDomainList?: FirewallDomainList;
}

export interface GetFirewallRuleGroupRequest {
  /**
   * <p>The unique identifier of the firewall rule group. </p>
   */
  FirewallRuleGroupId: string | undefined;
}

export interface GetFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   */
  FirewallRuleGroup?: FirewallRuleGroup;
}

export interface GetFirewallRuleGroupAssociationRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

export interface GetFirewallRuleGroupAssociationResponse {
  /**
   * <p>The association that you requested. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

export interface GetFirewallRuleGroupPolicyRequest {
  /**
   * <p>The ARN (Amazon Resource Name) for the rule group.</p>
   */
  Arn: string | undefined;
}

export interface GetFirewallRuleGroupPolicyResponse {
  /**
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule
   * 			group. You can use the policy to share the rule group using Resource Access Manager
   * 			(RAM). </p>
   */
  FirewallRuleGroupPolicy?: string;
}

export interface GetResolverConfigRequest {
  /**
   * <p>Resource ID of the Amazon VPC that you want to get information about.</p>
   */
  ResourceId: string | undefined;
}

export enum ResolverAutodefinedReverseStatus {
  Disabled = "DISABLED",
  Disabling = "DISABLING",
  Enabled = "ENABLED",
  Enabling = "ENABLING",
}

/**
 * <p>A complex type that contains information about a Resolver configuration for a VPC.</p>
 */
export interface ResolverConfig {
  /**
   * <p>ID for the Resolver configuration.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.</p>
   */
  ResourceId?: string;

  /**
   * <p>The owner account ID of the Amazon Virtual Private Cloud VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p> The status of whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. The status can be one of following:</p>
   * 		       <p> Status of the rules generated by VPCs based on CIDR/Region for reverse DNS resolution. The
   * 			status can be one of following:</p>
   *
   * 		       <ul>
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

export interface GetResolverConfigResponse {
  /**
   * <p>Information about the behavior configuration of Route 53 Resolver behavior for the VPC you
   * 			specified in the <code>GetResolverConfig</code> request.</p>
   */
  ResolverConfig?: ResolverConfig;
}

export interface GetResolverDnssecConfigRequest {
  /**
   * <p>The ID of the virtual private cloud (VPC) for the DNSSEC validation status.</p>
   */
  ResourceId: string | undefined;
}

export enum ResolverDNSSECValidationStatus {
  Disabled = "DISABLED",
  Disabling = "DISABLING",
  Enabled = "ENABLED",
  Enabling = "ENABLING",
}

/**
 * <p>A complex type that contains information about a configuration for DNSSEC validation.</p>
 */
export interface ResolverDnssecConfig {
  /**
   * <p>The ID for a configuration for DNSSEC validation.</p>
   */
  Id?: string;

  /**
   * <p>The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.</p>
   */
  ResourceId?: string;

  /**
   * <p>The validation status for a DNSSEC configuration. The status can be one of the following:</p>
   * 		       <ul>
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

export interface GetResolverDnssecConfigResponse {
  /**
   * <p>The information about a configuration for DNSSEC validation.</p>
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}

export interface GetResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to get information about.</p>
   */
  ResolverEndpointId: string | undefined;
}

export interface GetResolverEndpointResponse {
  /**
   * <p>Information about the Resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export interface GetResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the Resolver query logging configuration that you want to get information about.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

export interface GetResolverQueryLogConfigResponse {
  /**
   * <p>Information about the Resolver query logging configuration that you specified in a <code>GetQueryLogConfig</code> request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * <p>The ID of the Resolver query logging configuration association that you want to get information about.</p>
   */
  ResolverQueryLogConfigAssociationId: string | undefined;
}

export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * <p>Information about the Resolver query logging configuration association that you specified in a <code>GetQueryLogConfigAssociation</code> request.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The ARN of the query logging configuration that you want to get the query logging policy for.</p>
   */
  Arn: string | undefined;
}

export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * <p>Information about the query logging policy for the query logging configuration that you specified in a
   * 			<code>GetResolverQueryLogConfigPolicy</code> request.</p>
   */
  ResolverQueryLogConfigPolicy?: string;
}

/**
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

export interface GetResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to get information about.</p>
   */
  ResolverRuleId: string | undefined;
}

export interface GetResolverRuleResponse {
  /**
   * <p>Information about the Resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}

export interface GetResolverRuleAssociationRequest {
  /**
   * <p>The ID of the Resolver rule association that you want to get information about.</p>
   */
  ResolverRuleAssociationId: string | undefined;
}

export interface GetResolverRuleAssociationResponse {
  /**
   * <p>Information about the Resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export interface GetResolverRulePolicyRequest {
  /**
   * <p>The ID of the Resolver rule that you want to get the Resolver rule policy for.</p>
   */
  Arn: string | undefined;
}

export interface GetResolverRulePolicyResponse {
  /**
   * <p>The Resolver rule policy for the rule that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   */
  ResolverRulePolicy?: string;
}

export interface ImportFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list that you want to modify with the import operation.</p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>What you want DNS Firewall to do with the domains that are listed in the file. This must be set to <code>REPLACE</code>, which updates the domain list to exactly match the list in the file. </p>
   */
  Operation: FirewallDomainImportOperation | string | undefined;

  /**
   * <p>The fully qualified URL or URI of the file stored in Amazon Simple Storage Service
   * 			(Amazon S3) that contains the list of domains to import.</p>
   *          <p>The file must be in an S3 bucket that's in the same Region
   *        as your DNS Firewall. The file must be a text file and must contain a single domain per line.</p>
   */
  DomainFileUrl: string | undefined;
}

export interface ImportFirewallDomainsResponse {
  /**
   * <p>The Id of the firewall domain list that DNS Firewall just updated.</p>
   */
  Id?: string;

  /**
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * <p> </p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;
}

/**
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

export enum IpAddressStatus {
  Attached = "ATTACHED",
  Attaching = "ATTACHING",
  Creating = "CREATING",
  DeleteFailedFasExpired = "DELETE_FAILED_FAS_EXPIRED",
  Deleting = "DELETING",
  Detaching = "DETACHING",
  FailedCreation = "FAILED_CREATION",
  FailedResourceGone = "FAILED_RESOURCE_GONE",
  RemapAttaching = "REMAP_ATTACHING",
  RemapDetaching = "REMAP_DETACHING",
}

/**
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
 * 			request, information about the IP addresses that the Resolver endpoint uses for DNS queries.</p>
 */
export interface IpAddressResponse {
  /**
   * <p>The ID of one IP address.</p>
   */
  IpId?: string;

  /**
   * <p>The ID of one subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>One IP address that the Resolver endpoint uses for DNS queries.</p>
   */
  Ip?: string;

  /**
   * <p>A status code that gives the current status of the request.</p>
   */
  Status?: IpAddressStatus | string;

  /**
   * <p>A message that provides additional information about the status of the request.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface ListFirewallConfigsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallConfigsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The configurations for the firewall behavior provided by DNS Firewall for VPCs from
   * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
   */
  FirewallConfigs?: FirewallConfig[];
}

export interface ListFirewallDomainListsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallDomainListsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the domain lists that you have defined.   </p>
   *          <p>This might be a partial list of the domain lists that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   */
  FirewallDomainLists?: FirewallDomainListMetadata[];
}

export interface ListFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list whose domains you want to retrieve. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallDomainsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the domains in the firewall domain list.  </p>
   *          <p>This might be a partial list of the domains that you've defined in the domain list. For
   * 			information, see <code>MaxResults</code>. </p>
   */
  Domains?: string[];
}

export interface ListFirewallRuleGroupAssociationsRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any rule group. </p>
   */
  FirewallRuleGroupId?: string;

  /**
   * <p>The unique identifier of the VPC that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any VPC. </p>
   */
  VpcId?: string;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting
   * 			from the rule group with the lowest numeric priority setting. </p>
   */
  Priority?: number;

  /**
   * <p>The association <code>Status</code> setting that you want DNS Firewall to filter on for the list. If you don't specify this, then DNS Firewall returns all associations, regardless of status.</p>
   */
  Status?: FirewallRuleGroupAssociationStatus | string;

  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallRuleGroupAssociationsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of your firewall rule group associations.</p>
   *          <p>This might be a partial list of the associations that you have defined. For information, see <code>MaxResults</code>. </p>
   */
  FirewallRuleGroupAssociations?: FirewallRuleGroupAssociation[];
}

export interface ListFirewallRuleGroupsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallRuleGroupsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of your firewall rule groups.</p>
   *          <p>This might be a partial list of the rule groups that you have defined. For information, see <code>MaxResults</code>. </p>
   */
  FirewallRuleGroups?: FirewallRuleGroupMetadata[];
}

export interface ListFirewallRulesRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to retrieve the rules for. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>Optional additional filter for the rules to retrieve.</p>
   *          <p>The setting that determines the processing order of the rules in a rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   */
  Priority?: number;

  /**
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
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListFirewallRulesResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the rules that you have defined.  </p>
   *          <p>This might be a partial list of the firewall rules that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   */
  FirewallRules?: FirewallRule[];
}

export interface ListResolverConfigsRequest {
  /**
   * <p>The maximum number of Resolver configurations that you want to return in the response to
   * 			a <code>ListResolverConfigs</code> request. If you don't specify a value for <code>MaxResults</code>,
   * 			up to 100 Resolver configurations are returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> Resolver configurations, use
   * 			<code>NextToken</code> to get the second and subsequent pages of results.</p>
   * 		       <p>For the first <code>ListResolverConfigs</code> request, omit this value.</p>
   * 		       <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and
   * 			specify that value for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;
}

export interface ListResolverConfigsResponse {
  /**
   * <p>If a response includes the last of the Resolver configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   * 		       <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<code>ListResolverConfigs</code> request.
   * 			Get the value of <code>NextToken</code> that Amazon Route 53
   *              returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array that contains one <code>ResolverConfigs</code> element for each Resolver configuration that is associated
   * 			with the current Amazon Web Services account.</p>
   */
  ResolverConfigs?: ResolverConfig[];
}

export interface ListResolverDnssecConfigsRequest {
  /**
   * <p>
   *             <i>Optional</i>: An integer that specifies the maximum number of DNSSEC configuration results that you want Amazon Route 53 to return.
   * 			If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configuration per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> DNSSEC configurations, use <code>NextToken</code>
   * 			to get the second and subsequent pages of results.</p>
   * 		       <p>For the first <code>ListResolverDnssecConfigs</code> request, omit this value.</p>
   * 		       <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value
   * 			for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of objects.</p>
   */
  Filters?: Filter[];
}

export interface ListResolverDnssecConfigsResponse {
  /**
   * <p>If a response includes the last of the DNSSEC configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   * 		       <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>
   * 			request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array that contains one
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResolverDnssecConfig.html">ResolverDnssecConfig</a> element
   * 			for each configuration for DNSSEC validation that is associated with the current Amazon Web Services account.</p>
   */
  ResolverDnssecConfigs?: ResolverDnssecConfig[];
}

export interface ListResolverEndpointIpAddressesRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to get IP addresses for.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p>
   * 		       <p>If the specified Resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

export interface ListResolverEndpointIpAddressesResponse {
  /**
   * <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request,
   * 			specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints).</p>
   */
  IpAddresses?: IpAddressResponse[];
}

export interface ListResolverEndpointsRequest {
  /**
   * <p>The maximum number of Resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver endpoints. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> Resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request
   * 			to get the next group of Resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

export interface ListResolverEndpointsResponse {
  /**
   * <p>If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request
   * 			to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Resolver endpoints that were created by using the current Amazon Web Services account, and that match the specified filters, if any.</p>
   */
  ResolverEndpoints?: ResolverEndpoint[];
}

export enum SortOrder {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
}

export interface ListResolverQueryLogConfigAssociationsRequest {
  /**
   * <p>The maximum number of query logging associations that you want to return in the response to a <code>ListResolverQueryLogConfigAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging associations. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverQueryLogConfigAssociations</code> request, omit this value.</p>
   * 		       <p>If there are more than <code>MaxResults</code> query logging associations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigAssociations</code> request to get the next group of associations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of query logging associations.</p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   * 		       </note>
   */
  Filters?: Filter[];

  /**
   * <p>The element that you want Resolver to sort query logging associations by. </p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   * 		       </note>
   *
   * 		       <p>Valid values include the following elements:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The ID of the query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code>
   * 				indicates the cause: </p>
   * 				           <ul>
   *                   <li>
   *                      <p>
   *                         <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   * 				           <p>If <code>Status</code> is a value other than <code>FAILED</code>, <code>ERROR</code> is null.</p>
   * 			         </li>
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
   *
   * 				           <ul>
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
   * 						               <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   * 					             </li>
   *                </ul>
   * 			         </li>
   *          </ul>
   */
  SortBy?: string;

  /**
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging associations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   * 		       </note>
   */
  SortOrder?: SortOrder | string;
}

export interface ListResolverQueryLogConfigAssociationsResponse {
  /**
   * <p>If there are more than <code>MaxResults</code> query logging associations, you can submit another <code>ListResolverQueryLogConfigAssociations</code> request
   * 			to get the next group of associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the
   * 			number of associations that are returned in a <code>ListResolverQueryLogConfigAssociations</code> response, depending on the values that you specify
   * 			in the request.</p>
   */
  TotalCount?: number;

  /**
   * <p>The total number of query logging associations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigAssociations</code> request. For the total number of associations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   */
  TotalFilteredCount?: number;

  /**
   * <p>A list that contains one <code>ResolverQueryLogConfigAssociations</code> element for each query logging association that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   */
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];
}

export interface ListResolverQueryLogConfigsRequest {
  /**
   * <p>The maximum number of query logging configurations that you want to return in the response to a <code>ListResolverQueryLogConfigs</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging configurations. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverQueryLogConfigs</code> request, omit this value.</p>
   * 		       <p>If there are more than <code>MaxResults</code> query logging configurations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigs</code> request to get the next group of configurations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of query logging configurations.</p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   * 		       </note>
   */
  Filters?: Filter[];

  /**
   * <p>The element that you want Resolver to sort query logging configurations by. </p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   * 		       </note>
   *
   * 		       <p>Valid values include the following elements:</p>
   * 		       <ul>
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
   *
   * 				           <ul>
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
   * 						               <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   * 					             </li>
   *                </ul>
   * 			         </li>
   *          </ul>
   */
  SortBy?: string;

  /**
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging configurations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   * 		       <note>
   * 			         <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   * 		       </note>
   */
  SortOrder?: SortOrder | string;
}

export interface ListResolverQueryLogConfigsResponse {
  /**
   * <p>If there are more than <code>MaxResults</code> query logging configurations, you can submit another <code>ListResolverQueryLogConfigs</code> request
   * 			to get the next group of configurations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the
   * 			number of query logging configurations that are returned in a <code>ListResolverQueryLogConfigs</code> response, depending on the values that you specify
   * 			in the request.</p>
   */
  TotalCount?: number;

  /**
   * <p>The total number of query logging configurations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigs</code> request. For the total number of query logging configurations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   */
  TotalFilteredCount?: number;

  /**
   * <p>A list that contains one <code>ResolverQueryLogConfig</code> element for each query logging configuration that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   */
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[];
}

export interface ListResolverRuleAssociationsRequest {
  /**
   * <p>The maximum number of rule associations that you want to return in the response to a <code>ListResolverRuleAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 rule associations. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request
   * 			to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

export interface ListResolverRuleAssociationsResponse {
  /**
   * <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another
   * 			<code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The associations that were created between Resolver rules and VPCs using the current Amazon Web Services account, and that match the
   * 			specified filters, if any.</p>
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[];
}

export interface ListResolverRulesRequest {
  /**
   * <p>The maximum number of Resolver rules that you want to return in the response to a <code>ListResolverRules</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver rules.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverRules</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> Resolver rules, you can submit another <code>ListResolverRules</code> request
   * 			to get the next group of Resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRules</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];
}

export interface ListResolverRulesResponse {
  /**
   * <p>If more than <code>MaxResults</code> Resolver rules match the specified criteria, you can submit another
   * 			<code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Resolver rules that were created using the current Amazon Web Services account and that match the specified filters, if any.</p>
   */
  ResolverRules?: ResolverRule[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to list tags for.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListTagsForResource</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request
   * 			to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another
   * 			<code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

export interface PutFirewallRuleGroupPolicyRequest {
  /**
   * <p>The ARN (Amazon Resource Name) for the rule group that you want to share.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy to attach to the rule group.</p>
   */
  FirewallRuleGroupPolicy: string | undefined;
}

export interface PutFirewallRuleGroupPolicyResponse {
  /**
   * <p></p>
   */
  ReturnValue?: boolean;
}

export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rules with.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An Identity and Access Management policy statement that lists the query logging configurations that you want to share with another Amazon Web Services account
   * 			and the operations that you want the account to be able to perform. You can specify the following operations in the <code>Actions</code> section
   * 			of the statement:</p>
   * 		       <ul>
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
   *                   <code>route53resolver:ListResolverQueryLogConfigAssociations</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverQueryLogConfigs</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   * 		       <p>In the <code>Resource</code> section of the statement, you specify the ARNs for the query logging configurations that you want to share
   * 			with the account that you specified in <code>Arn</code>. </p>
   */
  ResolverQueryLogConfigPolicy: string | undefined;
}

/**
 * <p>The response to a <code>PutResolverQueryLogConfigPolicy</code> request.</p>
 */
export interface PutResolverQueryLogConfigPolicyResponse {
  /**
   * <p>Whether the <code>PutResolverQueryLogConfigPolicy</code> request was successful.</p>
   */
  ReturnValue?: boolean;
}

export interface PutResolverRulePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule that you want to share with another account.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An Identity and Access Management policy statement that lists the rules that you want to share with another Amazon Web Services account and the operations that you want the account
   * 			to be able to perform. You can specify the following operations in the <code>Action</code> section of the statement:</p>
   * 			      <ul>
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
   *
   * 		       <p>In the <code>Resource</code> section of the statement, specify the ARN for the rule that you want to share with another account. Specify the same ARN
   * 			that you specified in <code>Arn</code>.</p>
   */
  ResolverRulePolicy: string | undefined;
}

/**
 * <p>The response to a <code>PutResolverRulePolicy</code> request.</p>
 */
export interface PutResolverRulePolicyResponse {
  /**
   * <p>Whether the <code>PutResolverRulePolicy</code> request was successful.</p>
   */
  ReturnValue?: boolean;
}

/**
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a>
 * 			request, information about the changes that you want to make.</p>
 */
export interface ResolverRuleConfig {
  /**
   * <p>The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   */
  Name?: string;

  /**
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in
   * 			<code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   * 			      <ul>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   * 				        </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags that you want to add to the specified resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   * 			      <ul>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   * 				        </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags that you want to remove to the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateFirewallConfigRequest {
  /**
   * <p>The ID of the VPC that the configuration is for.</p>
   */
  ResourceId: string | undefined;

  /**
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

export interface UpdateFirewallConfigResponse {
  /**
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC. </p>
   */
  FirewallConfig?: FirewallConfig;
}

export interface UpdateFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list whose domains you want to update. </p>
   */
  FirewallDomainListId: string | undefined;

  /**
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
   * <p>A list of domains to use in the update operation.</p>
   *          <p>Each domain specification in your domain list must satisfy the following
   * 	requirements: </p>
   *          <ul>
   *             <li>
   *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
   *       	     </li>
   *             <li>
   *       	        <p>With the exception of the optional starting asterisk, it must only contain
   *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
   *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
   *       	     </li>
   *             <li>
   *       	        <p>It must be from 1-255 characters in length. </p>
   *       	     </li>
   *          </ul>
   */
  Domains: string[] | undefined;
}

export interface UpdateFirewallDomainsResponse {
  /**
   * <p>The ID of the firewall domain list that DNS Firewall just updated.</p>
   */
  Id?: string;

  /**
   * <p>The name of the domain list. </p>
   */
  Name?: string;

  /**
   * <p> </p>
   */
  Status?: FirewallDomainListStatus | string;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   */
  StatusMessage?: string;
}

export interface UpdateFirewallRuleRequest {
  /**
   * <p>The unique identifier of the firewall rule group for the rule. </p>
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list to use in the rule.  </p>
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   */
  Priority?: number;

  /**
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
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDomain?: string;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | string;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   */
  BlockOverrideTtl?: number;

  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;
}

export interface UpdateFirewallRuleResponse {
  /**
   * <p>The firewall rule that you just updated. </p>
   */
  FirewallRule?: FirewallRule;
}

export interface UpdateFirewallRuleGroupAssociationRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   */
  FirewallRuleGroupAssociationId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   */
  Priority?: number;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   */
  MutationProtection?: MutationProtectionStatus | string;

  /**
   * <p>The name of the rule group association.</p>
   */
  Name?: string;
}

export interface UpdateFirewallRuleGroupAssociationResponse {
  /**
   * <p>The association that you just updated. </p>
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}

export interface UpdateResolverConfigRequest {
  /**
   * <p>Resource ID of the Amazon VPC that you want to update the Resolver configuration for.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Indicates whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. Disabling this option will also affect EC2-Classic
   * 			instances using ClassicLink. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 					<i>Amazon EC2 guide</i>.</p>
   * 		       <note>
   *             <p>It can take some time for the status change to be completed.</p>
   *          </note>
   * 		       <p></p>
   */
  AutodefinedReverseFlag: AutodefinedReverseFlag | string | undefined;
}

export interface UpdateResolverConfigResponse {
  /**
   * <p>An array that contains settings for the specified Resolver configuration.</p>
   */
  ResolverConfig?: ResolverConfig;
}

export enum Validation {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export interface UpdateResolverDnssecConfigRequest {
  /**
   * <p>The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The new value that you are specifying for DNSSEC validation for the VPC. The value can be <code>ENABLE</code>
   * 			or <code>DISABLE</code>. Be aware that it can take time for a validation status change to be completed.</p>
   */
  Validation: Validation | string | undefined;
}

export interface UpdateResolverDnssecConfigResponse {
  /**
   * <p>A complex type that contains settings for the specified DNSSEC configuration.</p>
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}

export interface UpdateResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to update.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The name of the Resolver endpoint that you want to update.</p>
   */
  Name?: string;
}

export interface UpdateResolverEndpointResponse {
  /**
   * <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export interface UpdateResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to update.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>The new settings for the Resolver rule.</p>
   */
  Config: ResolverRuleConfig | undefined;
}

export interface UpdateResolverRuleResponse {
  /**
   * <p>The response to an <code>UpdateResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFirewallRuleGroupRequestFilterSensitiveLog = (obj: AssociateFirewallRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallRuleGroupAssociationFilterSensitiveLog = (obj: FirewallRuleGroupAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFirewallRuleGroupResponseFilterSensitiveLog = (obj: AssociateFirewallRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpAddressUpdateFilterSensitiveLog = (obj: IpAddressUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverEndpointIpAddressRequestFilterSensitiveLog = (
  obj: AssociateResolverEndpointIpAddressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverEndpointFilterSensitiveLog = (obj: ResolverEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverEndpointIpAddressResponseFilterSensitiveLog = (
  obj: AssociateResolverEndpointIpAddressResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverQueryLogConfigRequestFilterSensitiveLog = (
  obj: AssociateResolverQueryLogConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverQueryLogConfigAssociationFilterSensitiveLog = (obj: ResolverQueryLogConfigAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverQueryLogConfigResponseFilterSensitiveLog = (
  obj: AssociateResolverQueryLogConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverRuleRequestFilterSensitiveLog = (obj: AssociateResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverRuleAssociationFilterSensitiveLog = (obj: ResolverRuleAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResolverRuleResponseFilterSensitiveLog = (obj: AssociateResolverRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallDomainListRequestFilterSensitiveLog = (obj: CreateFirewallDomainListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallDomainListFilterSensitiveLog = (obj: FirewallDomainList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallDomainListResponseFilterSensitiveLog = (obj: CreateFirewallDomainListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallRuleRequestFilterSensitiveLog = (obj: CreateFirewallRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallRuleFilterSensitiveLog = (obj: FirewallRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallRuleResponseFilterSensitiveLog = (obj: CreateFirewallRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallRuleGroupRequestFilterSensitiveLog = (obj: CreateFirewallRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallRuleGroupFilterSensitiveLog = (obj: FirewallRuleGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFirewallRuleGroupResponseFilterSensitiveLog = (obj: CreateFirewallRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpAddressRequestFilterSensitiveLog = (obj: IpAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverEndpointRequestFilterSensitiveLog = (obj: CreateResolverEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverEndpointResponseFilterSensitiveLog = (obj: CreateResolverEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverQueryLogConfigRequestFilterSensitiveLog = (
  obj: CreateResolverQueryLogConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverQueryLogConfigFilterSensitiveLog = (obj: ResolverQueryLogConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverQueryLogConfigResponseFilterSensitiveLog = (
  obj: CreateResolverQueryLogConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetAddressFilterSensitiveLog = (obj: TargetAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverRuleRequestFilterSensitiveLog = (obj: CreateResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverRuleFilterSensitiveLog = (obj: ResolverRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResolverRuleResponseFilterSensitiveLog = (obj: CreateResolverRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallDomainListRequestFilterSensitiveLog = (obj: DeleteFirewallDomainListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallDomainListResponseFilterSensitiveLog = (obj: DeleteFirewallDomainListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallRuleRequestFilterSensitiveLog = (obj: DeleteFirewallRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallRuleResponseFilterSensitiveLog = (obj: DeleteFirewallRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallRuleGroupRequestFilterSensitiveLog = (obj: DeleteFirewallRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFirewallRuleGroupResponseFilterSensitiveLog = (obj: DeleteFirewallRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverEndpointRequestFilterSensitiveLog = (obj: DeleteResolverEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverEndpointResponseFilterSensitiveLog = (obj: DeleteResolverEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverQueryLogConfigRequestFilterSensitiveLog = (
  obj: DeleteResolverQueryLogConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverQueryLogConfigResponseFilterSensitiveLog = (
  obj: DeleteResolverQueryLogConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverRuleRequestFilterSensitiveLog = (obj: DeleteResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResolverRuleResponseFilterSensitiveLog = (obj: DeleteResolverRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFirewallRuleGroupRequestFilterSensitiveLog = (
  obj: DisassociateFirewallRuleGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFirewallRuleGroupResponseFilterSensitiveLog = (
  obj: DisassociateFirewallRuleGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverEndpointIpAddressRequestFilterSensitiveLog = (
  obj: DisassociateResolverEndpointIpAddressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverEndpointIpAddressResponseFilterSensitiveLog = (
  obj: DisassociateResolverEndpointIpAddressResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverQueryLogConfigRequestFilterSensitiveLog = (
  obj: DisassociateResolverQueryLogConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverQueryLogConfigResponseFilterSensitiveLog = (
  obj: DisassociateResolverQueryLogConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverRuleRequestFilterSensitiveLog = (obj: DisassociateResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResolverRuleResponseFilterSensitiveLog = (obj: DisassociateResolverRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallConfigFilterSensitiveLog = (obj: FirewallConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallDomainListMetadataFilterSensitiveLog = (obj: FirewallDomainListMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallRuleGroupMetadataFilterSensitiveLog = (obj: FirewallRuleGroupMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallConfigRequestFilterSensitiveLog = (obj: GetFirewallConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallConfigResponseFilterSensitiveLog = (obj: GetFirewallConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallDomainListRequestFilterSensitiveLog = (obj: GetFirewallDomainListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallDomainListResponseFilterSensitiveLog = (obj: GetFirewallDomainListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupRequestFilterSensitiveLog = (obj: GetFirewallRuleGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupResponseFilterSensitiveLog = (obj: GetFirewallRuleGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupAssociationRequestFilterSensitiveLog = (
  obj: GetFirewallRuleGroupAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupAssociationResponseFilterSensitiveLog = (
  obj: GetFirewallRuleGroupAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupPolicyRequestFilterSensitiveLog = (obj: GetFirewallRuleGroupPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFirewallRuleGroupPolicyResponseFilterSensitiveLog = (obj: GetFirewallRuleGroupPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverConfigRequestFilterSensitiveLog = (obj: GetResolverConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverConfigFilterSensitiveLog = (obj: ResolverConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverConfigResponseFilterSensitiveLog = (obj: GetResolverConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverDnssecConfigRequestFilterSensitiveLog = (obj: GetResolverDnssecConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverDnssecConfigFilterSensitiveLog = (obj: ResolverDnssecConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverDnssecConfigResponseFilterSensitiveLog = (obj: GetResolverDnssecConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverEndpointRequestFilterSensitiveLog = (obj: GetResolverEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverEndpointResponseFilterSensitiveLog = (obj: GetResolverEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigRequestFilterSensitiveLog = (obj: GetResolverQueryLogConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigResponseFilterSensitiveLog = (obj: GetResolverQueryLogConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigAssociationRequestFilterSensitiveLog = (
  obj: GetResolverQueryLogConfigAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigAssociationResponseFilterSensitiveLog = (
  obj: GetResolverQueryLogConfigAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigPolicyRequestFilterSensitiveLog = (
  obj: GetResolverQueryLogConfigPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverQueryLogConfigPolicyResponseFilterSensitiveLog = (
  obj: GetResolverQueryLogConfigPolicyResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRuleRequestFilterSensitiveLog = (obj: GetResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRuleResponseFilterSensitiveLog = (obj: GetResolverRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRuleAssociationRequestFilterSensitiveLog = (obj: GetResolverRuleAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRuleAssociationResponseFilterSensitiveLog = (obj: GetResolverRuleAssociationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRulePolicyRequestFilterSensitiveLog = (obj: GetResolverRulePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResolverRulePolicyResponseFilterSensitiveLog = (obj: GetResolverRulePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportFirewallDomainsRequestFilterSensitiveLog = (obj: ImportFirewallDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportFirewallDomainsResponseFilterSensitiveLog = (obj: ImportFirewallDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpAddressResponseFilterSensitiveLog = (obj: IpAddressResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallConfigsRequestFilterSensitiveLog = (obj: ListFirewallConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallConfigsResponseFilterSensitiveLog = (obj: ListFirewallConfigsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallDomainListsRequestFilterSensitiveLog = (obj: ListFirewallDomainListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallDomainListsResponseFilterSensitiveLog = (obj: ListFirewallDomainListsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallDomainsRequestFilterSensitiveLog = (obj: ListFirewallDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallDomainsResponseFilterSensitiveLog = (obj: ListFirewallDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRuleGroupAssociationsRequestFilterSensitiveLog = (
  obj: ListFirewallRuleGroupAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRuleGroupAssociationsResponseFilterSensitiveLog = (
  obj: ListFirewallRuleGroupAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRuleGroupsRequestFilterSensitiveLog = (obj: ListFirewallRuleGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRuleGroupsResponseFilterSensitiveLog = (obj: ListFirewallRuleGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRulesRequestFilterSensitiveLog = (obj: ListFirewallRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFirewallRulesResponseFilterSensitiveLog = (obj: ListFirewallRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverConfigsRequestFilterSensitiveLog = (obj: ListResolverConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverConfigsResponseFilterSensitiveLog = (obj: ListResolverConfigsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverDnssecConfigsRequestFilterSensitiveLog = (obj: ListResolverDnssecConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverDnssecConfigsResponseFilterSensitiveLog = (obj: ListResolverDnssecConfigsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverEndpointIpAddressesRequestFilterSensitiveLog = (
  obj: ListResolverEndpointIpAddressesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverEndpointIpAddressesResponseFilterSensitiveLog = (
  obj: ListResolverEndpointIpAddressesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverEndpointsRequestFilterSensitiveLog = (obj: ListResolverEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverEndpointsResponseFilterSensitiveLog = (obj: ListResolverEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverQueryLogConfigAssociationsRequestFilterSensitiveLog = (
  obj: ListResolverQueryLogConfigAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverQueryLogConfigAssociationsResponseFilterSensitiveLog = (
  obj: ListResolverQueryLogConfigAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverQueryLogConfigsRequestFilterSensitiveLog = (obj: ListResolverQueryLogConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverQueryLogConfigsResponseFilterSensitiveLog = (
  obj: ListResolverQueryLogConfigsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverRuleAssociationsRequestFilterSensitiveLog = (
  obj: ListResolverRuleAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverRuleAssociationsResponseFilterSensitiveLog = (
  obj: ListResolverRuleAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverRulesRequestFilterSensitiveLog = (obj: ListResolverRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResolverRulesResponseFilterSensitiveLog = (obj: ListResolverRulesResponse): any => ({
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
export const PutFirewallRuleGroupPolicyRequestFilterSensitiveLog = (obj: PutFirewallRuleGroupPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFirewallRuleGroupPolicyResponseFilterSensitiveLog = (obj: PutFirewallRuleGroupPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResolverQueryLogConfigPolicyRequestFilterSensitiveLog = (
  obj: PutResolverQueryLogConfigPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResolverQueryLogConfigPolicyResponseFilterSensitiveLog = (
  obj: PutResolverQueryLogConfigPolicyResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResolverRulePolicyRequestFilterSensitiveLog = (obj: PutResolverRulePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResolverRulePolicyResponseFilterSensitiveLog = (obj: PutResolverRulePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolverRuleConfigFilterSensitiveLog = (obj: ResolverRuleConfig): any => ({
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
export const UpdateFirewallConfigRequestFilterSensitiveLog = (obj: UpdateFirewallConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallConfigResponseFilterSensitiveLog = (obj: UpdateFirewallConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallDomainsRequestFilterSensitiveLog = (obj: UpdateFirewallDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallDomainsResponseFilterSensitiveLog = (obj: UpdateFirewallDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallRuleRequestFilterSensitiveLog = (obj: UpdateFirewallRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallRuleResponseFilterSensitiveLog = (obj: UpdateFirewallRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallRuleGroupAssociationRequestFilterSensitiveLog = (
  obj: UpdateFirewallRuleGroupAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFirewallRuleGroupAssociationResponseFilterSensitiveLog = (
  obj: UpdateFirewallRuleGroupAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverConfigRequestFilterSensitiveLog = (obj: UpdateResolverConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverConfigResponseFilterSensitiveLog = (obj: UpdateResolverConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverDnssecConfigRequestFilterSensitiveLog = (obj: UpdateResolverDnssecConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverDnssecConfigResponseFilterSensitiveLog = (obj: UpdateResolverDnssecConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverEndpointRequestFilterSensitiveLog = (obj: UpdateResolverEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverEndpointResponseFilterSensitiveLog = (obj: UpdateResolverEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverRuleRequestFilterSensitiveLog = (obj: UpdateResolverRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResolverRuleResponseFilterSensitiveLog = (obj: UpdateResolverRuleResponse): any => ({
  ...obj,
});
