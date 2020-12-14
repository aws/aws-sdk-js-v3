import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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

export namespace IpAddressUpdate {
  export const filterSensitiveLog = (obj: IpAddressUpdate): any => ({
    ...obj,
  });
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

export namespace AssociateResolverEndpointIpAddressRequest {
  export const filterSensitiveLog = (obj: AssociateResolverEndpointIpAddressRequest): any => ({
    ...obj,
  });
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
   * <p>A unique string that identifies the request that created the Resolver endpoint. The <code>CreatorRequestId</code> allows failed requests
   * 			to be retried without the risk of executing the operation twice.</p>
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

export namespace ResolverEndpoint {
  export const filterSensitiveLog = (obj: ResolverEndpoint): any => ({
    ...obj,
  });
}

export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>AssociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace AssociateResolverEndpointIpAddressResponse {
  export const filterSensitiveLog = (obj: AssociateResolverEndpointIpAddressResponse): any => ({
    ...obj,
  });
}

/**
 * <p>We encountered an unknown error. Try again in a few minutes.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "client";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters in this request are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>For an <code>InvalidParameterException</code> error, the name of the parameter that's invalid.</p>
   */
  FieldName?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is invalid.</p>
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
 * <p>The request caused one or more limits to be exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>For a <code>LimitExceededException</code> error, the type of resource that exceeded the current limit.</p>
   */
  ResourceType?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource that you tried to create already exists.</p>
 */
export interface ResourceExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   */
  ResourceType?: string;
}

export namespace ResourceExistsException {
  export const filterSensitiveLog = (obj: ResourceExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>For a <code>ResourceNotFoundException</code> error, the type of resource that doesn't exist.</p>
   */
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was throttled. Try again in a few minutes.</p>
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

export namespace AssociateResolverQueryLogConfigRequest {
  export const filterSensitiveLog = (obj: AssociateResolverQueryLogConfigRequest): any => ({
    ...obj,
  });
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

export namespace ResolverQueryLogConfigAssociation {
  export const filterSensitiveLog = (obj: ResolverQueryLogConfigAssociation): any => ({
    ...obj,
  });
}

export interface AssociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export namespace AssociateResolverQueryLogConfigResponse {
  export const filterSensitiveLog = (obj: AssociateResolverQueryLogConfigResponse): any => ({
    ...obj,
  });
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

export namespace AssociateResolverRuleRequest {
  export const filterSensitiveLog = (obj: AssociateResolverRuleRequest): any => ({
    ...obj,
  });
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

export namespace ResolverRuleAssociation {
  export const filterSensitiveLog = (obj: ResolverRuleAssociation): any => ({
    ...obj,
  });
}

export interface AssociateResolverRuleResponse {
  /**
   * <p>Information about the <code>AssociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace AssociateResolverRuleResponse {
  export const filterSensitiveLog = (obj: AssociateResolverRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource isn't available.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
  /**
   * <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   */
  ResourceType?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
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

export namespace IpAddressRequest {
  export const filterSensitiveLog = (obj: IpAddressRequest): any => ({
    ...obj,
  });
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateResolverEndpointRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
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

export namespace CreateResolverEndpointRequest {
  export const filterSensitiveLog = (obj: CreateResolverEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateResolverEndpointResponse {
  /**
   * <p>Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace CreateResolverEndpointResponse {
  export const filterSensitiveLog = (obj: CreateResolverEndpointResponse): any => ({
    ...obj,
  });
}

export interface CreateResolverQueryLogConfigRequest {
  /**
   * <p>The name that you want to give the query logging configuration</p>
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
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A list of the tag keys and values that you want to associate with the query logging configuration.</p>
   */
  Tags?: Tag[];
}

export namespace CreateResolverQueryLogConfigRequest {
  export const filterSensitiveLog = (obj: CreateResolverQueryLogConfigRequest): any => ({
    ...obj,
  });
}

export enum ShareStatus {
  NotShared = "NOT_SHARED",
  SharedByMe = "SHARED_BY_ME",
  SharedWithMe = "SHARED_WITH_ME",
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
   * <p>The AWS account ID for the account that created the query logging configuration. </p>
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
   * <p>An indication of whether the query logging configuration is shared with other AWS accounts, or was shared with the current account by another
   * 			AWS account. Sharing is configured through AWS Resource Access Manager (AWS RAM).</p>
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
   * <p>A unique string that identifies the request that created the query logging configuration. The <code>CreatorRequestId</code> allows failed requests
   * 			to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;
}

export namespace ResolverQueryLogConfig {
  export const filterSensitiveLog = (obj: ResolverQueryLogConfig): any => ({
    ...obj,
  });
}

export interface CreateResolverQueryLogConfigResponse {
  /**
   * <p>Information about the <code>CreateResolverQueryLogConfig</code> request, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export namespace CreateResolverQueryLogConfigResponse {
  export const filterSensitiveLog = (obj: CreateResolverQueryLogConfigResponse): any => ({
    ...obj,
  });
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

export namespace TargetAddress {
  export const filterSensitiveLog = (obj: TargetAddress): any => ({
    ...obj,
  });
}

export interface CreateResolverRuleRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
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
   * <p>The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a comma.</p>
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

export namespace CreateResolverRuleRequest {
  export const filterSensitiveLog = (obj: CreateResolverRuleRequest): any => ({
    ...obj,
  });
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
   * <p>A unique string that you specified when you created the Resolver rule. <code>CreatorRequestId</code> identifies the request and
   * 			allows failed requests to be retried without the risk of executing the operation twice. </p>
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
   * <p>When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.</p>
   */
  OwnerId?: string;

  /**
   * <p>Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or
   * 			another account is sharing the rule with the current account.</p>
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

export namespace ResolverRule {
  export const filterSensitiveLog = (obj: ResolverRule): any => ({
    ...obj,
  });
}

export interface CreateResolverRuleResponse {
  /**
   * <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

export namespace CreateResolverRuleResponse {
  export const filterSensitiveLog = (obj: CreateResolverRuleResponse): any => ({
    ...obj,
  });
}

export interface DeleteResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to delete.</p>
   */
  ResolverEndpointId: string | undefined;
}

export namespace DeleteResolverEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteResolverEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteResolverEndpointResponse {
  /**
   * <p>Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace DeleteResolverEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteResolverEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to delete.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

export namespace DeleteResolverQueryLogConfigRequest {
  export const filterSensitiveLog = (obj: DeleteResolverQueryLogConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteResolverQueryLogConfigResponse {
  /**
   * <p>Information about the query logging configuration that you deleted, including the status of the request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export namespace DeleteResolverQueryLogConfigResponse {
  export const filterSensitiveLog = (obj: DeleteResolverQueryLogConfigResponse): any => ({
    ...obj,
  });
}

export interface DeleteResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to delete.</p>
   */
  ResolverRuleId: string | undefined;
}

export namespace DeleteResolverRuleRequest {
  export const filterSensitiveLog = (obj: DeleteResolverRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteResolverRuleResponse {
  /**
   * <p>Information about the <code>DeleteResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: ResolverRule;
}

export namespace DeleteResolverRuleResponse {
  export const filterSensitiveLog = (obj: DeleteResolverRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource that you tried to update or delete is currently in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
  /**
   * <p>For a <code>ResourceInUseException</code> error, the type of resource that is currently in use.</p>
   */
  ResourceType?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
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

export namespace DisassociateResolverEndpointIpAddressRequest {
  export const filterSensitiveLog = (obj: DisassociateResolverEndpointIpAddressRequest): any => ({
    ...obj,
  });
}

export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>DisassociateResolverEndpointIpAddress</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace DisassociateResolverEndpointIpAddressResponse {
  export const filterSensitiveLog = (obj: DisassociateResolverEndpointIpAddressResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateResolverQueryLogConfigRequest {
  export const filterSensitiveLog = (obj: DisassociateResolverQueryLogConfigRequest): any => ({
    ...obj,
  });
}

export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export namespace DisassociateResolverQueryLogConfigResponse {
  export const filterSensitiveLog = (obj: DisassociateResolverQueryLogConfigResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateResolverRuleRequest {
  export const filterSensitiveLog = (obj: DisassociateResolverRuleRequest): any => ({
    ...obj,
  });
}

export interface DisassociateResolverRuleResponse {
  /**
   * <p>Information about the <code>DisassociateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace DisassociateResolverRuleResponse {
  export const filterSensitiveLog = (obj: DisassociateResolverRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>For Resolver list operations
 * 			(<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>),
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
   *                   <code>HostVpcId</code>: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or
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
   *                   <code>Destination</code>: The AWS service that you want to forward query logs to. Valid values include the following:</p>
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
   *                   <code>OwnerId</code>: The AWS account ID for the account that created the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: An indication of whether the query logging configuration is shared with other AWS accounts,
   * 				or was shared with the current account by another AWS account. Valid values include: <code>NOT_SHARED</code>, <code>SHARED_WITH_ME</code>,
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
   * 				<a href="https://docs.aws.amazon.com/API_route53resolver_ResolverQueryLogConfigAssociation.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfigAssociation-Status">Status</a>.
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

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface GetResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to get information about.</p>
   */
  ResolverEndpointId: string | undefined;
}

export namespace GetResolverEndpointRequest {
  export const filterSensitiveLog = (obj: GetResolverEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetResolverEndpointResponse {
  /**
   * <p>Information about the Resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace GetResolverEndpointResponse {
  export const filterSensitiveLog = (obj: GetResolverEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the Resolver query logging configuration that you want to get information about.</p>
   */
  ResolverQueryLogConfigId: string | undefined;
}

export namespace GetResolverQueryLogConfigRequest {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigRequest): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigResponse {
  /**
   * <p>Information about the Resolver query logging configuration that you specified in a <code>GetQueryLogConfig</code> request.</p>
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}

export namespace GetResolverQueryLogConfigResponse {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigResponse): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * <p>The ID of the Resolver query logging configuration association that you want to get information about.</p>
   */
  ResolverQueryLogConfigAssociationId: string | undefined;
}

export namespace GetResolverQueryLogConfigAssociationRequest {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigAssociationRequest): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * <p>Information about the Resolver query logging configuration association that you specified in a <code>GetQueryLogConfigAssociation</code> request.</p>
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}

export namespace GetResolverQueryLogConfigAssociationResponse {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigAssociationResponse): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The ARN of the query logging configuration that you want to get the query logging policy for.</p>
   */
  Arn: string | undefined;
}

export namespace GetResolverQueryLogConfigPolicyRequest {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * <p>Information about the query logging policy for the query logging configuration that you specified in a
   * 			<code>GetResolverQueryLogConfigPolicy</code> request.</p>
   */
  ResolverQueryLogConfigPolicy?: string;
}

export namespace GetResolverQueryLogConfigPolicyResponse {
  export const filterSensitiveLog = (obj: GetResolverQueryLogConfigPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface UnknownResourceException extends __SmithyException, $MetadataBearer {
  name: "UnknownResourceException";
  $fault: "client";
  Message?: string;
}

export namespace UnknownResourceException {
  export const filterSensitiveLog = (obj: UnknownResourceException): any => ({
    ...obj,
  });
}

export interface GetResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to get information about.</p>
   */
  ResolverRuleId: string | undefined;
}

export namespace GetResolverRuleRequest {
  export const filterSensitiveLog = (obj: GetResolverRuleRequest): any => ({
    ...obj,
  });
}

export interface GetResolverRuleResponse {
  /**
   * <p>Information about the Resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}

export namespace GetResolverRuleResponse {
  export const filterSensitiveLog = (obj: GetResolverRuleResponse): any => ({
    ...obj,
  });
}

export interface GetResolverRuleAssociationRequest {
  /**
   * <p>The ID of the Resolver rule association that you want to get information about.</p>
   */
  ResolverRuleAssociationId: string | undefined;
}

export namespace GetResolverRuleAssociationRequest {
  export const filterSensitiveLog = (obj: GetResolverRuleAssociationRequest): any => ({
    ...obj,
  });
}

export interface GetResolverRuleAssociationResponse {
  /**
   * <p>Information about the Resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace GetResolverRuleAssociationResponse {
  export const filterSensitiveLog = (obj: GetResolverRuleAssociationResponse): any => ({
    ...obj,
  });
}

export interface GetResolverRulePolicyRequest {
  /**
   * <p>The ID of the Resolver rule policy that you want to get information about.</p>
   */
  Arn: string | undefined;
}

export namespace GetResolverRulePolicyRequest {
  export const filterSensitiveLog = (obj: GetResolverRulePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResolverRulePolicyResponse {
  /**
   * <p>Information about the Resolver rule policy that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   */
  ResolverRulePolicy?: string;
}

export namespace GetResolverRulePolicyResponse {
  export const filterSensitiveLog = (obj: GetResolverRulePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Resolver rule policy is invalid.</p>
 */
export interface InvalidPolicyDocument extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyDocument";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPolicyDocument {
  export const filterSensitiveLog = (obj: InvalidPolicyDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The specified tag is invalid.</p>
 */
export interface InvalidTagException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTagException {
  export const filterSensitiveLog = (obj: InvalidTagException): any => ({
    ...obj,
  });
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

export namespace IpAddressResponse {
  export const filterSensitiveLog = (obj: IpAddressResponse): any => ({
    ...obj,
  });
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

export namespace ListResolverEndpointIpAddressesRequest {
  export const filterSensitiveLog = (obj: ListResolverEndpointIpAddressesRequest): any => ({
    ...obj,
  });
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

export namespace ListResolverEndpointIpAddressesResponse {
  export const filterSensitiveLog = (obj: ListResolverEndpointIpAddressesResponse): any => ({
    ...obj,
  });
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

export namespace ListResolverEndpointsRequest {
  export const filterSensitiveLog = (obj: ListResolverEndpointsRequest): any => ({
    ...obj,
  });
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
   * <p>The Resolver endpoints that were created by using the current AWS account, and that match the specified filters, if any.</p>
   */
  ResolverEndpoints?: ResolverEndpoint[];
}

export namespace ListResolverEndpointsResponse {
  export const filterSensitiveLog = (obj: ListResolverEndpointsResponse): any => ({
    ...obj,
  });
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

export namespace ListResolverQueryLogConfigAssociationsRequest {
  export const filterSensitiveLog = (obj: ListResolverQueryLogConfigAssociationsRequest): any => ({
    ...obj,
  });
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

export namespace ListResolverQueryLogConfigAssociationsResponse {
  export const filterSensitiveLog = (obj: ListResolverQueryLogConfigAssociationsResponse): any => ({
    ...obj,
  });
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
   *                   <code>OwnerId</code>: The AWS account number of the account that created the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: Whether the configuration is shared with other AWS accounts or shared with the current account by
   * 				another AWS account. Sharing is configured through AWS Resource Access Manager (AWS RAM).</p>
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

export namespace ListResolverQueryLogConfigsRequest {
  export const filterSensitiveLog = (obj: ListResolverQueryLogConfigsRequest): any => ({
    ...obj,
  });
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

export namespace ListResolverQueryLogConfigsResponse {
  export const filterSensitiveLog = (obj: ListResolverQueryLogConfigsResponse): any => ({
    ...obj,
  });
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

export namespace ListResolverRuleAssociationsRequest {
  export const filterSensitiveLog = (obj: ListResolverRuleAssociationsRequest): any => ({
    ...obj,
  });
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
   * <p>The associations that were created between Resolver rules and VPCs using the current AWS account, and that match the
   * 			specified filters, if any.</p>
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[];
}

export namespace ListResolverRuleAssociationsResponse {
  export const filterSensitiveLog = (obj: ListResolverRuleAssociationsResponse): any => ({
    ...obj,
  });
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

export namespace ListResolverRulesRequest {
  export const filterSensitiveLog = (obj: ListResolverRulesRequest): any => ({
    ...obj,
  });
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
   * <p>The Resolver rules that were created using the current AWS account and that match the specified filters, if any.</p>
   */
  ResolverRules?: ResolverRule[];
}

export namespace ListResolverRulesResponse {
  export const filterSensitiveLog = (obj: ListResolverRulesResponse): any => ({
    ...obj,
  });
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

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
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

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rules with.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An AWS Identity and Access Management policy statement that lists the query logging configurations that you want to share with another AWS account
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

export namespace PutResolverQueryLogConfigPolicyRequest {
  export const filterSensitiveLog = (obj: PutResolverQueryLogConfigPolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutResolverQueryLogConfigPolicyResponse {
  export const filterSensitiveLog = (obj: PutResolverQueryLogConfigPolicyResponse): any => ({
    ...obj,
  });
}

export interface PutResolverRulePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rules with.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An AWS Identity and Access Management policy statement that lists the rules that you want to share with another AWS account and the operations that you want the account
   * 			to be able to perform. You can specify the following operations in the <code>Actions</code> section of the statement:</p>
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
   * 		       <p>In the <code>Resource</code> section of the statement, you specify the ARNs for the rules that you want to share with the account that you
   * 			specified in <code>Arn</code>. </p>
   */
  ResolverRulePolicy: string | undefined;
}

export namespace PutResolverRulePolicyRequest {
  export const filterSensitiveLog = (obj: PutResolverRulePolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutResolverRulePolicyResponse {
  export const filterSensitiveLog = (obj: PutResolverRulePolicyResponse): any => ({
    ...obj,
  });
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

export namespace ResolverRuleConfig {
  export const filterSensitiveLog = (obj: ResolverRuleConfig): any => ({
    ...obj,
  });
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

export namespace UpdateResolverEndpointRequest {
  export const filterSensitiveLog = (obj: UpdateResolverEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateResolverEndpointResponse {
  /**
   * <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace UpdateResolverEndpointResponse {
  export const filterSensitiveLog = (obj: UpdateResolverEndpointResponse): any => ({
    ...obj,
  });
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

export namespace UpdateResolverRuleRequest {
  export const filterSensitiveLog = (obj: UpdateResolverRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateResolverRuleResponse {
  /**
   * <p>The response to an <code>UpdateResolverRule</code> request.</p>
   */
  ResolverRule?: ResolverRule;
}

export namespace UpdateResolverRuleResponse {
  export const filterSensitiveLog = (obj: UpdateResolverRuleResponse): any => ({
    ...obj,
  });
}
