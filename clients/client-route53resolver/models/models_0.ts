import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.</p>
 */
export interface IpAddressUpdate {
  /**
   * <p>The new IP address.</p>
   */
  Ip?: string;

  /**
   * <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use <a>GetResolverEndpoint</a>.</p>
   */
  SubnetId?: string;

  /**
   * <p>
   *             <i>Only when removing an IP address from a resolver endpoint</i>: The ID of the IP address that you want to remove.
   * 			To get this ID, use <a>GetResolverEndpoint</a>.</p>
   */
  IpId?: string;
}

export namespace IpAddressUpdate {
  export const filterSensitiveLog = (obj: IpAddressUpdate): any => ({
    ...obj,
  });
}

export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * <p>Either the IPv4 address that you want to add to a resolver endpoint or a subnet ID. If you specify a subnet ID,
   * 			Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
   */
  IpAddress: IpAddressUpdate | undefined;

  /**
   * <p>The ID of the resolver endpoint that you want to associate IP addresses with.</p>
   */
  ResolverEndpointId: string | undefined;
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
 * <p>In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>,
 * 			<a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings
 * 			for an existing inbound or outbound resolver endpoint.</p>
 */
export interface ResolverEndpoint {
  /**
   * <p>The name that you assigned to the resolver endpoint when you submitted a <a>CreateResolverEndpoint</a> request.</p>
   */
  Name?: string;

  /**
   * <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;

  /**
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound resolver rules.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The ID of the VPC that you want to create the resolver endpoint in.</p>
   */
  HostVPCId?: string;

  /**
   * <p>The ID of the resolver endpoint.</p>
   */
  Id?: string;

  /**
   * <p>Indicates whether the resolver endpoint allows inbound or outbound DNS queries:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: allows DNS queries to your VPC from your network or another VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: allows DNS queries from your VPC to your network or another VPC</p>
   *             </li>
   *          </ul>
   */
  Direction?: ResolverEndpointDirection | string;

  /**
   * <p>A code that specifies the current status of the resolver endpoint.</p>
   */
  Status?: ResolverEndpointStatus | string;

  /**
   * <p>The ARN (Amazon Resource Name) for the resolver endpoint.</p>
   */
  Arn?: string;

  /**
   * <p>A detailed description of the status of the resolver endpoint.</p>
   */
  StatusMessage?: string;

  /**
   * <p>A unique string that identifies the request that created the resolver endpoint. The <code>CreatorRequestId</code> allows failed requests
   * 			to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The number of IP addresses that the resolver endpoint can use for DNS queries.</p>
   */
  IpAddressCount?: number;
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
  /**
   * <p>For an <code>InvalidParameterException</code> error, the name of the parameter that's invalid.</p>
   */
  FieldName?: string;

  Message: string | undefined;
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
  /**
   * <p>For a <code>LimitExceededException</code> error, the type of resource that exceeded the current limit.</p>
   */
  ResourceType?: string;

  Message?: string;
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
  /**
   * <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   */
  ResourceType?: string;

  Message?: string;
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
  /**
   * <p>For a <code>ResourceNotFoundException</code> error, the type of resource that doesn't exist.</p>
   */
  ResourceType?: string;

  Message?: string;
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

export interface AssociateResolverRuleRequest {
  /**
   * <p>The ID of the resolver rule that you want to associate with the VPC. To list the existing resolver rules, use
   * 			<a>ListResolverRules</a>.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>A name for the association that you're creating between a resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC that you want to associate the resolver rule with.</p>
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
 * <p>In the response to an <a>AssociateResolverRule</a>,
 * 			<a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request,
 * 			information about an association between a resolver rule and a VPC.</p>
 */
export interface ResolverRuleAssociation {
  /**
   * <p>The ID of the VPC that you associated the resolver rule with.</p>
   */
  VPCId?: string;

  /**
   * <p>A code that specifies the current status of the association between a resolver rule and a VPC.</p>
   */
  Status?: ResolverRuleAssociationStatus | string;

  /**
   * <p>The ID of the resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   */
  ResolverRuleId?: string;

  /**
   * <p>The ID of the association between a resolver rule and a VPC. Resolver assigns this value when you submit an
   * 			<a>AssociateResolverRule</a> request.</p>
   */
  Id?: string;

  /**
   * <p>The name of an association between a resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>A detailed description of the status of the association between a resolver rule and a VPC.</p>
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
  /**
   * <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   */
  ResourceType?: string;

  Message?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries.</p>
 */
export interface IpAddressRequest {
  /**
   * <p>The IP address that you want to use for DNS queries.</p>
   */
  Ip?: string;

  /**
   * <p>The subnet that contains the IP address.</p>
   */
  SubnetId: string | undefined;
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
  Key?: string;

  /**
   * <p>The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the
   * 			customer account that you're creating the resource for.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateResolverEndpointRequest {
  /**
   * <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify
   * 			must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints).</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * <p>The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network
   * 			(for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints). </p>
   */
  IpAddresses: IpAddressRequest[] | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>Specify the applicable value:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC</p>
   *             </li>
   *          </ul>
   */
  Direction: ResolverEndpointDirection | string | undefined;
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

export enum RuleTypeOption {
  Forward = "FORWARD",
  Recursive = "RECURSIVE",
  System = "SYSTEM",
}

/**
 * <p>In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.</p>
 */
export interface TargetAddress {
  /**
   * <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   */
  Port?: number;

  /**
   * <p>One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.</p>
   */
  Ip: string | undefined;
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
   * <p>Specify <code>FORWARD</code>. Other resolver rule types aren't supported.</p>
   */
  RuleType: RuleTypeOption | string | undefined;

  /**
   * <p>The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a comma.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches
   * 			multiple resolver rules (example.com and www.example.com), outbound DNS queries are routed using the resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify
   * 			in <code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;
}

export namespace CreateResolverRuleRequest {
  export const filterSensitiveLog = (obj: CreateResolverRuleRequest): any => ({
    ...obj,
  });
}

export enum ShareStatus {
  NotShared = "NOT_SHARED",
  SharedByMe = "SHARED_BY_ME",
  SharedWithMe = "SHARED_WITH_ME",
}

export enum ResolverRuleStatus {
  Complete = "COMPLETE",
  Deleting = "DELETING",
  Failed = "FAILED",
  Updating = "UPDATING",
}

/**
 * <p>For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries
 * 			out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>,
 * 			<a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a>
 * 			request.</p>
 */
export interface ResolverRule {
  /**
   * <p>The ARN (Amazon Resource Name) for the resolver rule specified by <code>Id</code>.</p>
   */
  Arn?: string;

  /**
   * <p>This value is always <code>FORWARD</code>. Other resolver rule types aren't supported.</p>
   */
  RuleType?: RuleTypeOption | string;

  /**
   * <p>A unique string that you specified when you created the resolver rule. <code>CreatorRequestId</code>identifies the request and allows failed requests
   * 			to be retried without the risk of executing the operation twice. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ID that Resolver assigned to the resolver rule when you created it.</p>
   */
  Id?: string;

  /**
   * <p>Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or
   * 			another account is sharing the rule with the current account.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>A code that specifies the current status of the resolver rule.</p>
   */
  Status?: ResolverRuleStatus | string;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches
   * 			multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name
   * 			(www.example.com).</p>
   */
  DomainName?: string;

  /**
   * <p>When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the endpoint that the rule is associated with.</p>
   */
  ResolverEndpointId?: string;

  /**
   * <p>An array that contains the IP addresses and ports that you want to forward </p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>The name for the resolver rule, which you specified when you created the resolver rule.</p>
   */
  Name?: string;

  /**
   * <p>A detailed description of the status of a resolver rule.</p>
   */
  StatusMessage?: string;
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
   * <p>The ID of the resolver endpoint that you want to delete.</p>
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

export interface DeleteResolverRuleRequest {
  /**
   * <p>The ID of the resolver rule that you want to delete.</p>
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
  /**
   * <p>For a <code>ResourceInUseException</code> error, the type of resource that is currently in use.</p>
   */
  ResourceType?: string;

  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * <p>The ID of the resolver endpoint that you want to disassociate an IP address from.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The IPv4 address that you want to remove from a resolver endpoint.</p>
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

export interface DisassociateResolverRuleRequest {
  /**
   * <p>The ID of the resolver rule that you want to disassociate from the specified VPC.</p>
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>The ID of the VPC that you want to disassociate the resolver rule from.</p>
   */
  VPCId: string | undefined;
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
 * <p>For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules.</p>
 */
export interface Filter {
  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules,
   * 			the name of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify
   * 			<code>Direction</code> for the value of <code>Name</code>.</p>
   */
  Name?: string;

  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules,
   * 			the value of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify
   * 			<code>INBOUND</code> for the value of <code>Values</code>.</p>
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
   * <p>The ID of the resolver endpoint that you want to get information about.</p>
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
   * <p>Information about the resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace GetResolverEndpointResponse {
  export const filterSensitiveLog = (obj: GetResolverEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetResolverRuleRequest {
  /**
   * <p>The ID of the resolver rule that you want to get information about.</p>
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
   * <p>Information about the resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
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
   * <p>The ID of the resolver rule association that you want to get information about.</p>
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
   * <p>Information about the resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
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
   * <p>The ID of the resolver rule policy that you want to get information about.</p>
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
   * <p>Information about the resolver rule policy that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   */
  ResolverRulePolicy?: string;
}

export namespace GetResolverRulePolicyResponse {
  export const filterSensitiveLog = (obj: GetResolverRulePolicyResponse): any => ({
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
 * <p>The specified resolver rule policy is invalid.</p>
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
 * <p>In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that
 * 			the resolver endpoint uses for DNS queries.</p>
 */
export interface IpAddressResponse {
  /**
   * <p>A status code that gives the current status of the request.</p>
   */
  Status?: IpAddressStatus | string;

  /**
   * <p>The ID of one IP address.</p>
   */
  IpId?: string;

  /**
   * <p>The ID of one subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;

  /**
   * <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>A message that provides additional information about the status of the request.</p>
   */
  StatusMessage?: string;

  /**
   * <p>One IP address that the resolver endpoint uses for DNS queries.</p>
   */
  Ip?: string;
}

export namespace IpAddressResponse {
  export const filterSensitiveLog = (obj: IpAddressResponse): any => ({
    ...obj,
  });
}

export interface ListResolverEndpointIpAddressesRequest {
  /**
   * <p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p>
   * 		       <p>If the specified resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. </p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the resolver endpoint that you want to get IP addresses for.</p>
   */
  ResolverEndpointId: string | undefined;
}

export namespace ListResolverEndpointIpAddressesRequest {
  export const filterSensitiveLog = (obj: ListResolverEndpointIpAddressesRequest): any => ({
    ...obj,
  });
}

export interface ListResolverEndpointIpAddressesResponse {
  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request,
   * 			specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The IP addresses that DNS queries pass through on their way to your network (outbound endpoint) or on the way to
   * 			Resolver (inbound endpoint).</p>
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
   * <p>The maximum number of resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 resolver endpoints. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request
   * 			to get the next group of resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of resolver endpoints, such as all inbound resolver endpoints.</p>
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
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request
   * 			to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The resolver endpoints that were created by using the current AWS account, and that match the specified filters, if any.</p>
   */
  ResolverEndpoints?: ResolverEndpoint[];
}

export namespace ListResolverEndpointsResponse {
  export const filterSensitiveLog = (obj: ListResolverEndpointsResponse): any => ({
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
   * <p>An optional specification to return a subset of resolver rules, such as resolver rules that are associated with the same VPC ID.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   */
  Filters?: Filter[];

  /**
   * <p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request
   * 			to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

export namespace ListResolverRuleAssociationsRequest {
  export const filterSensitiveLog = (obj: ListResolverRuleAssociationsRequest): any => ({
    ...obj,
  });
}

export interface ListResolverRuleAssociationsResponse {
  /**
   * <p>The associations that were created between resolver rules and VPCs using the current AWS account, and that match the
   * 			specified filters, if any.</p>
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[];

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another
   * 			<code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;
}

export namespace ListResolverRuleAssociationsResponse {
  export const filterSensitiveLog = (obj: ListResolverRuleAssociationsResponse): any => ({
    ...obj,
  });
}

export interface ListResolverRulesRequest {
  /**
   * <p>For the first <code>ListResolverRules</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> resolver rules, you can submit another <code>ListResolverRules</code> request
   * 			to get the next group of resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of resolver rules that you want to return in the response to a <code>ListResolverRules</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 resolver rules.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional specification to return a subset of resolver rules, such as all resolver rules that are associated with the same resolver endpoint.</p>
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
   * <p>If more than <code>MaxResults</code> resolver rules match the specified criteria, you can submit another
   * 			<code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The resolver rules that were created using the current AWS account and that match the specified filters, if any.</p>
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
   * <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another
   * 			<code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutResolverRulePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to grant permissions to.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An AWS Identity and Access Management policy statement that lists the permissions that you want to grant to another AWS account.</p>
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
 * <p>In an <a>UpdateResolverRule</a> request, information about the changes that you want to make.</p>
 */
export interface ResolverRuleConfig {
  /**
   * <p>The ID of the new outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in
   * 			<code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;

  /**
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   */
  TargetIps?: TargetAddress[];

  /**
   * <p>The new name for the resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   */
  Name?: string;
}

export namespace ResolverRuleConfig {
  export const filterSensitiveLog = (obj: ResolverRuleConfig): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The tags that you want to add to the specified resource.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a>GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
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
   *                <p>
   *                   <a>GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRules</a>
   *                </p>
   *             </li>
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
   * <p>The ID of the resolver endpoint that you want to update.</p>
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The name of the resolver endpoint that you want to update.</p>
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
   * <p>The new settings for the resolver rule.</p>
   */
  Config: ResolverRuleConfig | undefined;

  /**
   * <p>The ID of the resolver rule that you want to update.</p>
   */
  ResolverRuleId: string | undefined;
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
