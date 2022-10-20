// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { GlobalAcceleratorServiceException as __BaseException } from "./GlobalAcceleratorServiceException";

/**
 * <p>A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes
 * 			that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when
 * 			you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum
 * 			of ten event messages. </p>
 */
export interface AcceleratorEvent {
  /**
   * <p>A string that contains an <code>Event</code> message describing changes or errors
   * 			when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.</p>
   */
  Message?: string;

  /**
   * <p>A timestamp for when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.</p>
   */
  Timestamp?: Date;
}

export enum IpAddressType {
  DUAL_STACK = "DUAL_STACK",
  IPV4 = "IPV4",
}

export enum IpAddressFamily {
  IPv4 = "IPv4",
  IPv6 = "IPv6",
}

/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 */
export interface IpSet {
  /**
   * @deprecated
   *
   * <p>IpFamily is deprecated and has been replaced by IpAddressFamily.</p>
   */
  IpFamily?: string;

  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   */
  IpAddresses?: string[];

  /**
   * <p>The types of IP addresses included in this IP set. </p>
   */
  IpAddressFamily?: IpAddressFamily | string;
}

export enum AcceleratorStatus {
  DEPLOYED = "DEPLOYED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct
 * 			traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.</p>
 */
export interface Accelerator {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   */
  IpSets?: IpSet[];

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses.</p>
   * 		       <p>The naming convention for the DNS name for an accelerator is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   *          <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both
   *  			the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p>
   * 		       <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  DnsName?: string;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   */
  Status?: AcceleratorStatus | string;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses:
   * 			two IPv4 addresses and two IPv6 addresses.</p>
   * 		       <p>The naming convention for the dual-stack DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.dualstack.awsglobalaccelerator.com.</p>
   * 		       <p>Note: Global Accelerator also assigns a default DNS name, <code>DnsName</code>, to your accelerator that points just to the static IPv4 addresses. </p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  DualStackDnsName?: string;

  /**
   * <p>A history of changes that you make to an accelerator in Global Accelerator.</p>
   */
  Events?: AcceleratorEvent[];
}

/**
 * <p>Attributes of an accelerator.</p>
 */
export interface AcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   * 		       <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 		       <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 */
export class AcceleratorNotDisabledException extends __BaseException {
  readonly name: "AcceleratorNotDisabledException" = "AcceleratorNotDisabledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AcceleratorNotDisabledException, __BaseException>) {
    super({
      name: "AcceleratorNotDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AcceleratorNotDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accelerator that you specified doesn't exist.</p>
 */
export class AcceleratorNotFoundException extends __BaseException {
  readonly name: "AcceleratorNotFoundException" = "AcceleratorNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AcceleratorNotFoundException, __BaseException>) {
    super({
      name: "AcceleratorNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AcceleratorNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You don't have access permission.</p>
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
 * <p>The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.</p>
 */
export interface CustomRoutingEndpointConfiguration {
  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC)
   * 			subnet ID. </p>
   */
  EndpointId?: string;
}

export interface AddCustomRoutingEndpointsRequest {
  /**
   * <p>The list of endpoint objects to add to a custom routing accelerator.</p>
   */
  EndpointConfigurations: CustomRoutingEndpointConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.</p>
   */
  EndpointGroupArn: string | undefined;
}

/**
 * <p>A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints,
 * 			which are virtual private cloud (VPC) subnets.</p>
 */
export interface CustomRoutingEndpointDescription {
  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC)
   * 			subnet ID. </p>
   */
  EndpointId?: string;
}

export interface AddCustomRoutingEndpointsResponse {
  /**
   * <p>The endpoint objects added to the custom routing accelerator.</p>
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.</p>
   */
  EndpointGroupArn?: string;
}

/**
 * <p>You can't use both of those options.</p>
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
 * <p>The endpoint that you specified doesn't exist.</p>
 */
export class EndpointAlreadyExistsException extends __BaseException {
  readonly name: "EndpointAlreadyExistsException" = "EndpointAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAlreadyExistsException, __BaseException>) {
    super({
      name: "EndpointAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 */
export class EndpointGroupNotFoundException extends __BaseException {
  readonly name: "EndpointGroupNotFoundException" = "EndpointGroupNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointGroupNotFoundException, __BaseException>) {
    super({
      name: "EndpointGroupNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointGroupNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was an internal error for Global Accelerator.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An argument that you specified is invalid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
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

/**
 * <p>A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.</p>
 */
export interface EndpointConfiguration {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. A resource must be valid and active
   * 			when you add it as an endpoint.</p>
   * 		       <p>An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId?: string;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the
   * 	        <i>Global Accelerator Developer Guide</i>.</p>
   */
  Weight?: number;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint.
   * 			The value is true or false. The default value is true for new accelerators. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   *
   *
   * 		       <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load
   * 			Balancers and Amazon EC2 instances.</p>
   *
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html">
   * 			Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  ClientIPPreservationEnabled?: boolean;
}

export interface AddEndpointsRequest {
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations: EndpointConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;
}

export enum HealthState {
  HEALTHY = "HEALTHY",
  INITIAL = "INITIAL",
  UNHEALTHY = "UNHEALTHY",
}

/**
 * <p>A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load
 * 			balancers.</p>
 */
export interface EndpointDescription {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p>
   * 		       <p>An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId?: string;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the
   * 	        <i>Global Accelerator Developer Guide</i>. </p>
   */
  Weight?: number;

  /**
   * <p>The health status of the endpoint.</p>
   */
  HealthState?: HealthState | string;

  /**
   * <p>Returns a null result.</p>
   */
  HealthReason?: string;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint.
   * 			The value is true or false. The default value is true for new accelerators. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   *
   * 		       <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load
   * 			Balancers and Amazon EC2 instances.</p>
   *
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html">
   * 			Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  ClientIPPreservationEnabled?: boolean;
}

export interface AddEndpointsResponse {
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: EndpointDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;
}

/**
 * <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 */
export class TransactionInProgressException extends __BaseException {
  readonly name: "TransactionInProgressException" = "TransactionInProgressException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionInProgressException, __BaseException>) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
}

export interface AdvertiseByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   * 			You can't advertise only a portion of the provisioned range.</p>
   */
  Cidr: string | undefined;
}

/**
 * <p>A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes
 * 			that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP
 * 			address (BYOIP).</p>
 */
export interface ByoipCidrEvent {
  /**
   * <p>A string that contains an <code>Event</code> message describing changes that you make in the status
   * 			of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).</p>
   */
  Message?: string;

  /**
   * <p>A timestamp for when you make a status change for an IP address range that you bring to Global Accelerator through
   * 			bring your own IP address (BYOIP).</p>
   */
  Timestamp?: Date;
}

export enum ByoipCidrState {
  ADVERTISING = "ADVERTISING",
  DEPROVISIONED = "DEPROVISIONED",
  FAILED_ADVERTISING = "FAILED_ADVERTISING",
  FAILED_DEPROVISION = "FAILED_DEPROVISION",
  FAILED_PROVISION = "FAILED_PROVISION",
  FAILED_WITHDRAW = "FAILED_WITHDRAW",
  PENDING_ADVERTISING = "PENDING_ADVERTISING",
  PENDING_DEPROVISIONING = "PENDING_DEPROVISIONING",
  PENDING_PROVISIONING = "PENDING_PROVISIONING",
  PENDING_WITHDRAWING = "PENDING_WITHDRAWING",
  READY = "READY",
}

/**
 * <p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through
 * 			bring your own IP address (BYOIP).</p>
 * 		       <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>PENDING_PROVISIONING</b> —
 * 				You’ve submitted a request to provision an IP address range but it is not yet provisioned with
 * 			    Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>READY</b> — The address range is provisioned
 * 			    with Global Accelerator and can be advertised.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_ADVERTISING</b> — You’ve submitted a
 * 			    request for Global Accelerator to advertise an address range but it is not yet being advertised.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ADVERTISING</b> — The address range is
 * 			    being advertised by Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_WITHDRAWING</b> — You’ve submitted
 * 				a request to withdraw an address range from being advertised but it is still being advertised
 * 				by Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_DEPROVISIONING</b> — You’ve submitted a
 * 			    request to deprovision an address range from Global Accelerator but it is still provisioned.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DEPROVISIONED</b> — The address range is deprovisioned
 * 			    from Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_PROVISION </b> — The request to
 * 			    provision the address range from Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact Amazon Web Services support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_ADVERTISING</b> — The request for Global Accelerator
 * 				to advertise the address range was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact Amazon Web Services support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_WITHDRAW</b> — The request to withdraw
 * 			    the address range from advertising by Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact Amazon Web Services support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_DEPROVISION </b> — The request to
 * 			    deprovision the address range from Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact Amazon Web Services support.</p>
 *             </li>
 *          </ul>
 */
export interface ByoipCidr {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;

  /**
   * <p>A history of status changes for an IP address range that you bring to Global Accelerator
   * 			through bring your own IP address (BYOIP).</p>
   */
  Events?: ByoipCidrEvent[];
}

export interface AdvertiseByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * <p>The CIDR that you specified was not found or is incorrect.</p>
 */
export class ByoipCidrNotFoundException extends __BaseException {
  readonly name: "ByoipCidrNotFoundException" = "ByoipCidrNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ByoipCidrNotFoundException, __BaseException>) {
    super({
      name: "ByoipCidrNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ByoipCidrNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be
 * 		incorrect for this action.</p>
 */
export class IncorrectCidrStateException extends __BaseException {
  readonly name: "IncorrectCidrStateException" = "IncorrectCidrStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectCidrStateException, __BaseException>) {
    super({
      name: "IncorrectCidrStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectCidrStateException.prototype);
    this.Message = opts.Message;
  }
}

export interface AllowCustomRoutingTrafficRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to allow to receive
   * 			traffic. The IP addresses must be a subset of the IP addresses that you specified for the endpoint group.</p>
   * 		       <p>
   *             <code>DestinationAddresses</code> is required if <code>AllowAllTrafficToEndpoint</code> is <code>FALSE</code> or is
   * 		not specified.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>A list of specific Amazon EC2 instance ports (destination ports) that you want to allow to receive traffic.</p>
   */
  DestinationPorts?: number[];

  /**
   * <p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint can receive traffic
   * 			from a custom routing accelerator. The value is TRUE or FALSE. </p>
   * 		       <p>When set to TRUE, <i>all</i> destinations in the custom routing VPC subnet can receive traffic. Note
   * 			that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p>
   * 		       <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that are allowed
   * 			to receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is
   * 			the same as the ports configured for the endpoint group.</p>
   * 		       <p>The default value is FALSE.</p>
   */
  AllowAllTrafficToEndpoint?: boolean;
}

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 */
export class AssociatedEndpointGroupFoundException extends __BaseException {
  readonly name: "AssociatedEndpointGroupFoundException" = "AssociatedEndpointGroupFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedEndpointGroupFoundException, __BaseException>) {
    super({
      name: "AssociatedEndpointGroupFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedEndpointGroupFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an
 * 			accelerator before you can delete it.</p>
 */
export class AssociatedListenerFoundException extends __BaseException {
  readonly name: "AssociatedListenerFoundException" = "AssociatedListenerFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedListenerFoundException, __BaseException>) {
    super({
      name: "AssociatedListenerFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedListenerFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services
 * 			account using bring your own IP addresses (BYOIP). </p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 		    IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

export enum ClientAffinity {
  NONE = "NONE",
  SOURCE_IP = "SOURCE_IP",
}

/**
 * <p>A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface Tag {
  /**
   * <p>A string that contains a <code>Tag</code> key.</p>
   */
  Key: string | undefined;

  /**
   * <p>A string that contains a <code>Tag</code> value.</p>
   */
  Value: string | undefined;
}

export interface CreateAcceleratorRequest {
  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 			periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address
   * 			from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p>
   * 	        <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool.
   * 	    	When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns
   * 	    	you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges
   * 	    	to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is
   * 			because Global Accelerator assigns each address range to a different network zone, for high availability.</p>
   * 		       <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p>
   * 		       <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new
   * 			accelerator with the new addresses.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
   * 		    your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  IpAddresses?: string[];

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of an accelerator.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Create tags for an accelerator.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 		    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateAcceleratorResponse {
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   */
  Accelerator?: Accelerator;
}

export interface CreateCustomRoutingAcceleratorRequest {
  /**
   * <p>The name of a custom routing accelerator. The name can have a maximum of 64 characters, must contain
   * 		only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address
   * 			from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p>
   * 		       <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool.
   * 			When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns
   * 			you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges
   * 			to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is
   * 			because Global Accelerator assigns each address range to a different network zone, for high availability.</p>
   * 		       <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p>
   * 		       <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new
   * 			accelerator with the new addresses.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
   * 			your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  IpAddresses?: string[];

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 	        <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that
   * 			is, the uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Create tags for an accelerator.</p>
   * 	        <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 	    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  Tags?: Tag[];
}

export enum CustomRoutingAcceleratorStatus {
  DEPLOYED = "DEPLOYED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>Attributes of a custom routing accelerator.</p>
 */
export interface CustomRoutingAccelerator {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   */
  IpSets?: IpSet[];

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses. </p>
   * 		       <p>The naming convention for the DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   *
   * 		       <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both the A record
   * 			and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p>
   * 		       <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  DnsName?: string;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   */
  Status?: CustomRoutingAcceleratorStatus | string;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface CreateCustomRoutingAcceleratorResponse {
  /**
   * <p>The accelerator that is created.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export enum CustomRoutingProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual
 * 			private cloud subnets) in an endpoint group to accept client traffic on.</p>
 */
export interface CustomRoutingDestinationConfiguration {
  /**
   * <p>The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   */
  FromPort: number | undefined;

  /**
   * <p>The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   */
  ToPort: number | undefined;

  /**
   * <p>The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.</p>
   */
  Protocols: (CustomRoutingProtocol | string)[] | undefined;
}

export interface CreateCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 		specific Region.</p>
   */
  EndpointGroupRegion: string | undefined;

  /**
   * <p>Sets the port range and protocol for all endpoints (virtual private cloud subnets) in a custom routing endpoint group to accept
   * 		client traffic on.</p>
   */
  DestinationConfigurations: CustomRoutingDestinationConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 		uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;
}

export enum Protocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>For a custom routing accelerator, describes the port range and protocol for all endpoints
 * 			(virtual private cloud subnets) in an endpoint group to accept client traffic on.</p>
 */
export interface CustomRoutingDestinationDescription {
  /**
   * <p>The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   */
  ToPort?: number;

  /**
   * <p>The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.</p>
   */
  Protocols?: (Protocol | string)[];
}

/**
 * <p>A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface CustomRoutingEndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>For a custom routing accelerator, describes the port range and protocol for all endpoints
   * 			(virtual private cloud subnets) in an endpoint group to accept client traffic on.</p>
   */
  DestinationDescriptions?: CustomRoutingDestinationDescription[];

  /**
   * <p>For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an
   * 			endpoint group to accept client traffic on.</p>
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[];
}

export interface CreateCustomRoutingEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group created for a custom routing accelerator.</p>
   */
  EndpointGroup?: CustomRoutingEndpointGroup;
}

/**
 * <p>The endpoint group that you specified already exists.</p>
 */
export class EndpointGroupAlreadyExistsException extends __BaseException {
  readonly name: "EndpointGroupAlreadyExistsException" = "EndpointGroupAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointGroupAlreadyExistsException, __BaseException>) {
    super({
      name: "EndpointGroupAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointGroupAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 */
export class InvalidPortRangeException extends __BaseException {
  readonly name: "InvalidPortRangeException" = "InvalidPortRangeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPortRangeException, __BaseException>) {
    super({
      name: "InvalidPortRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPortRangeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The listener that you specified doesn't exist.</p>
 */
export class ListenerNotFoundException extends __BaseException {
  readonly name: "ListenerNotFoundException" = "ListenerNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListenerNotFoundException, __BaseException>) {
    super({
      name: "ListenerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ListenerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A complex type for a range of ports for a listener.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the range of ports, inclusive.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the range of ports, inclusive.</p>
   */
  ToPort?: number;
}

export interface CreateCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator for a custom routing listener.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The port range to support for connections from clients to your accelerator.</p>
   * 	        <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 		endpoints for custom routing accelerators</a>.</p>
   */
  PortRanges: PortRange[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 		uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * <p>A complex type for a listener for a custom routing accelerator.</p>
 */
export interface CustomRoutingListener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The port range to support for connections from clients to your accelerator.</p>
   * 		       <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 				endpoints for custom routing accelerators</a>.</p>
   */
  PortRanges?: PortRange[];
}

export interface CreateCustomRoutingListenerResponse {
  /**
   * <p>The listener that you've created for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export enum HealthCheckProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}

/**
 * <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group.
 * 			For example, you can create a port override in which the listener
 * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
 * 			and 1443, respectively, on the endpoints.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
 * 		    Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 */
export interface PortOverride {
  /**
   * <p>The listener port that you want to map to a specific endpoint port. This is the port that user traffic
   * 		    arrives to the Global Accelerator on.</p>
   */
  ListenerPort?: number;

  /**
   * <p>The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint,
   * 		    such as the Application Load Balancer or Amazon EC2 instance.</p>
   */
  EndpointPort?: number;
}

export interface CreateEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 			specific Region.</p>
   */
  EndpointGroupRegion: string | undefined;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: EndpointConfiguration[];

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 	        is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the
   * 			first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group.
   * 			For example, you can create a port override in which the listener
   * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
   * 			and 1443, respectively, on the endpoints.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
   * 			Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  PortOverrides?: PortOverride[];
}

/**
 * <p>A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface EndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: EndpointDescription[];

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p>
   *
   * 		       <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a
   * 		    list, Global Accelerator uses the first specified port in the list of ports.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the
   * 			endpoints for health checks. The default is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

  /**
   * <p>Allows you to override the destination ports used to route traffic to an endpoint.
   * 			Using a port override lets you map a list of external destination ports (that your
   * 			users send traffic to) to a list of internal destination ports that you want an application
   * 			endpoint to receive traffic on. </p>
   */
  PortOverrides?: PortOverride[];
}

export interface CreateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was created.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export interface CreateListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of your accelerator.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The list of port ranges to support for connections from clients to your accelerator.</p>
   */
  PortRanges: PortRange[] | undefined;

  /**
   * <p>The protocol for connections from clients to your accelerator.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 	        <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * <p>A complex type for a listener.</p>
 */
export interface Listener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 	        <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;
}

export interface CreateListenerResponse {
  /**
   * <p>The listener that you've created.</p>
   */
  Listener?: Listener;
}

/**
 * <p>Attributes of a custom routing accelerator.</p>
 */
export interface CustomRoutingAcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 			<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 			<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   * 		       <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 		       <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

export enum CustomRoutingDestinationTrafficState {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export interface DeleteAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an accelerator.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DeleteCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to delete.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DeleteCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface DeleteCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to delete.</p>
   */
  ListenerArn: string | undefined;
}

export interface DeleteEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface DeleteListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export interface DenyCustomRoutingTrafficRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to prevent from receiving
   * 			traffic. The IP addresses must be a subset of the IP addresses allowed for the VPC subnet associated with the
   * 			endpoint group.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>A list of specific Amazon EC2 instance ports (destination ports) in a subnet endpoint that you want to prevent from
   * 			receiving traffic.</p>
   */
  DestinationPorts?: number[];

  /**
   * <p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint <i>cannot</i>
   * 			receive traffic from a custom routing accelerator. The value is TRUE or FALSE. </p>
   * 		       <p>When set to TRUE, <i>no</i> destinations in the custom routing VPC subnet can receive traffic. Note
   * 			that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p>
   * 		       <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that cannot receive
   * 			traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is
   * 			the same as the ports configured for the endpoint group.</p>
   * 		       <p>The default value is FALSE.</p>
   */
  DenyAllTrafficToEndpoint?: boolean;
}

export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix that you specified
   * 			when you provisioned the address range.</p>
   */
  Cidr: string | undefined;
}

export interface DeprovisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export interface DescribeAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DescribeAcceleratorResponse {
  /**
   * <p>The description of the accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export interface DescribeAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DescribeAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export interface DescribeCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DescribeCustomRoutingAcceleratorResponse {
  /**
   * <p>The description of the custom routing accelerator.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export interface DescribeCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to describe the attributes for.</p>
   */
  AcceleratorArn: string | undefined;
}

export interface DescribeCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the custom routing accelerator.</p>
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

export interface DescribeCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface DescribeCustomRoutingEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group for a custom routing accelerator.</p>
   */
  EndpointGroup?: CustomRoutingEndpointGroup;
}

export interface DescribeCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export interface DescribeCustomRoutingListenerResponse {
  /**
   * <p>The description of a listener for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export interface DescribeEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface DescribeEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export interface DescribeListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export interface DescribeListenerResponse {
  /**
   * <p>The description of a listener.</p>
   */
  Listener?: Listener;
}

/**
 * <p>An IP address/port combination.</p>
 */
export interface SocketAddress {
  /**
   * <p>The IP address for the socket address.</p>
   */
  IpAddress?: string;

  /**
   * <p>The port for the socket address.</p>
   */
  Port?: number;
}

/**
 * <p>The port mappings for a specified endpoint IP address (destination).</p>
 */
export interface DestinationPortMapping {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator
   * 			that you have port mappings for.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>The IP address/port combinations (sockets) that map to a given destination socket
   * 			address.</p>
   */
  AcceleratorSocketAddresses?: SocketAddress[];

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The ID for the virtual private cloud (VPC) subnet.</p>
   */
  EndpointId?: string;

  /**
   * <p>The Amazon Web Services Region for the endpoint group.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The endpoint IP address/port combination for traffic received on the accelerator socket address.</p>
   */
  DestinationSocketAddress?: SocketAddress;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if
   * 			traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.</p>
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | string;
}

/**
 * <p>A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group.</p>
 */
export interface EndpointIdentifier {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p>
   * 		       <p>An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   */
  ClientIPPreservationEnabled?: boolean;
}

/**
 * <p>The endpoint that you specified doesn't exist.</p>
 */
export class EndpointNotFoundException extends __BaseException {
  readonly name: "EndpointNotFoundException" = "EndpointNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointNotFoundException, __BaseException>) {
    super({
      name: "EndpointNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There isn't another item to return.</p>
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

export interface ListAcceleratorsRequest {
  /**
   * <p>The number of Global Accelerator objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListAcceleratorsResponse {
  /**
   * <p>The list of accelerators for a customer account.</p>
   */
  Accelerators?: Accelerator[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListByoipCidrsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make
   * 			another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListByoipCidrsResponse {
  /**
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingAcceleratorsRequest {
  /**
   * <p>The number of custom routing Global Accelerator objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingAcceleratorsResponse {
  /**
   * <p>The list of custom routing accelerators for a customer account.</p>
   */
  Accelerators?: CustomRoutingAccelerator[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingEndpointGroupsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to list endpoint groups for.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The number of endpoint group objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingEndpointGroupsResponse {
  /**
   * <p>The list of the endpoint groups associated with a listener for a custom routing accelerator.</p>
   */
  EndpointGroups?: CustomRoutingEndpointGroup[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingListenersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list listeners for.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The number of listener objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingListenersResponse {
  /**
   * <p>The list of listeners for a custom routing accelerator.</p>
   */
  Listeners?: CustomRoutingListener[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingPortMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list the custom routing port mappings for.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to list the custom routing port mappings for.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The number of destination port mappings that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual
 * 		    private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that
 * 		    statically associates port ranges with VPC subnets, which allows Global Accelerator to route to
 * 			specific instances and ports within one or more subnets. </p>
 */
export interface PortMapping {
  /**
   * <p>The accelerator port.</p>
   */
  AcceleratorPort?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The IP address of the VPC subnet (the subnet ID).</p>
   */
  EndpointId?: string;

  /**
   * <p>The EC2 instance IP address and port number in the virtual private cloud (VPC) subnet.</p>
   */
  DestinationSocketAddress?: SocketAddress;

  /**
   * <p>The protocols supported by the endpoint group.</p>
   */
  Protocols?: (CustomRoutingProtocol | string)[];

  /**
   * <p>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if
   * 			traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.</p>
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | string;
}

export interface ListCustomRoutingPortMappingsResponse {
  /**
   * <p>The port mappings for a custom routing accelerator.</p>
   */
  PortMappings?: PortMapping[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingPortMappingsByDestinationRequest {
  /**
   * <p>The ID for the virtual private cloud (VPC) subnet.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>The endpoint IP address in a virtual private cloud (VPC) subnet for which you want to receive back port
   * 		mappings.</p>
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The number of destination port mappings that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListCustomRoutingPortMappingsByDestinationResponse {
  /**
   * <p>The port mappings for the endpoint IP address that you specified in the request.</p>
   */
  DestinationPortMappings?: DestinationPortMapping[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListEndpointGroupsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The number of endpoint group objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListEndpointGroupsResponse {
  /**
   * <p>The list of the endpoint groups associated with a listener.</p>
   */
  EndpointGroups?: EndpointGroup[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListListenersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The number of listener objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListListenersResponse {
  /**
   * <p>The list of listeners for an accelerator.</p>
   */
  Listeners?: Listener[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Root level tag for the Tags parameters.</p>
   */
  Tags?: Tag[];
}

export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 address range, in CIDR notation. The most specific IP prefix that you can
   * 			specify is /24. The address range cannot overlap with another address range that you've brought
   * 			to this or another Region.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address range to
   * 			Amazon using BYOIP.
   * 		</p>
   */
  CidrAuthorizationContext: CidrAuthorizationContext | undefined;
}

export interface ProvisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export interface RemoveCustomRoutingEndpointsRequest {
  /**
   * <p>The IDs for the endpoints. For custom routing accelerators, endpoint IDs are the virtual private cloud (VPC)
   * 		subnet IDs. </p>
   */
  EndpointIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to remove endpoints from.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface RemoveEndpointsRequest {
  /**
   * <p>The identifiers of the endpoints that you want to remove.</p>
   */
  EndpointIdentifiers: EndpointIdentifier[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to add tags to. An ARN uniquely identifies a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to a resource. A tag consists of a key and a value that you define.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key pairs that you want to remove from the specified resources.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 			periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   */
  Name?: string;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;
}

export interface UpdateAcceleratorResponse {
  /**
   * <p>Information about the updated accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export interface UpdateAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator that you want to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   * 		       <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//),
   * 			like the following:</p>
   * 			      <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

export interface UpdateAcceleratorAttributesResponse {
  /**
   * <p>Updated attributes for the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export interface UpdateCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 		periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   */
  Name?: string;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 	        <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;
}

export interface UpdateCustomRoutingAcceleratorResponse {
  /**
   * <p>Information about the updated custom routing accelerator.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export interface UpdateCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to update attributes for.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 		<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 	        <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 	    the <i>Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 	    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 		bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 		<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   * 	        <p>If you don’t specify a prefix, the flow logs are stored in the
   * 		root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 	        <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

export interface UpdateCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>Updated custom routing accelerator.</p>
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

export interface UpdateCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated port range to support for connections from clients to your accelerator. If you remove ports that are
   * 	currently being used by a subnet endpoint, the call fails.</p>
   * 	        <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 		endpoints for custom routing accelerators</a>.</p>
   */
  PortRanges: PortRange[] | undefined;
}

export interface UpdateCustomRoutingListenerResponse {
  /**
   * <p>Information for the updated listener for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export interface UpdateEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>The list of endpoint objects. A resource must be valid and active when you add it as an endpoint.</p>
   */
  EndpointConfigurations?: EndpointConfiguration[];

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 	        is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses
   * 			the first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

  /**
   * <p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group.
   * 			For example, you can create a port override in which the listener
   * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
   * 			and 1443, respectively, on the endpoints.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
   * 			Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  PortOverrides?: PortOverride[];
}

export interface UpdateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was updated.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export interface UpdateListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The updated protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 	        <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;
}

export interface UpdateListenerResponse {
  /**
   * <p>Information for the updated listener.</p>
   */
  Listener?: Listener;
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;
}

export interface WithdrawByoipCidrResponse {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @internal
 */
export const AcceleratorEventFilterSensitiveLog = (obj: AcceleratorEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpSetFilterSensitiveLog = (obj: IpSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorFilterSensitiveLog = (obj: Accelerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorAttributesFilterSensitiveLog = (obj: AcceleratorAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingEndpointConfigurationFilterSensitiveLog = (obj: CustomRoutingEndpointConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCustomRoutingEndpointsRequestFilterSensitiveLog = (obj: AddCustomRoutingEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingEndpointDescriptionFilterSensitiveLog = (obj: CustomRoutingEndpointDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCustomRoutingEndpointsResponseFilterSensitiveLog = (obj: AddCustomRoutingEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointConfigurationFilterSensitiveLog = (obj: EndpointConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddEndpointsRequestFilterSensitiveLog = (obj: AddEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointDescriptionFilterSensitiveLog = (obj: EndpointDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddEndpointsResponseFilterSensitiveLog = (obj: AddEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvertiseByoipCidrRequestFilterSensitiveLog = (obj: AdvertiseByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ByoipCidrEventFilterSensitiveLog = (obj: ByoipCidrEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ByoipCidrFilterSensitiveLog = (obj: ByoipCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvertiseByoipCidrResponseFilterSensitiveLog = (obj: AdvertiseByoipCidrResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowCustomRoutingTrafficRequestFilterSensitiveLog = (obj: AllowCustomRoutingTrafficRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CidrAuthorizationContextFilterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
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
export const CreateAcceleratorRequestFilterSensitiveLog = (obj: CreateAcceleratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAcceleratorResponseFilterSensitiveLog = (obj: CreateAcceleratorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomRoutingAcceleratorRequestFilterSensitiveLog = (
  obj: CreateCustomRoutingAcceleratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingAcceleratorFilterSensitiveLog = (obj: CustomRoutingAccelerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomRoutingAcceleratorResponseFilterSensitiveLog = (
  obj: CreateCustomRoutingAcceleratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingDestinationConfigurationFilterSensitiveLog = (
  obj: CustomRoutingDestinationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomRoutingEndpointGroupRequestFilterSensitiveLog = (
  obj: CreateCustomRoutingEndpointGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingDestinationDescriptionFilterSensitiveLog = (
  obj: CustomRoutingDestinationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingEndpointGroupFilterSensitiveLog = (obj: CustomRoutingEndpointGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomRoutingEndpointGroupResponseFilterSensitiveLog = (
  obj: CreateCustomRoutingEndpointGroupResponse
): any => ({
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
export const CreateCustomRoutingListenerRequestFilterSensitiveLog = (obj: CreateCustomRoutingListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingListenerFilterSensitiveLog = (obj: CustomRoutingListener): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomRoutingListenerResponseFilterSensitiveLog = (
  obj: CreateCustomRoutingListenerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortOverrideFilterSensitiveLog = (obj: PortOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointGroupRequestFilterSensitiveLog = (obj: CreateEndpointGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointGroupFilterSensitiveLog = (obj: EndpointGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointGroupResponseFilterSensitiveLog = (obj: CreateEndpointGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateListenerRequestFilterSensitiveLog = (obj: CreateListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListenerFilterSensitiveLog = (obj: Listener): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateListenerResponseFilterSensitiveLog = (obj: CreateListenerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomRoutingAcceleratorAttributesFilterSensitiveLog = (obj: CustomRoutingAcceleratorAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAcceleratorRequestFilterSensitiveLog = (obj: DeleteAcceleratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomRoutingAcceleratorRequestFilterSensitiveLog = (
  obj: DeleteCustomRoutingAcceleratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomRoutingEndpointGroupRequestFilterSensitiveLog = (
  obj: DeleteCustomRoutingEndpointGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomRoutingListenerRequestFilterSensitiveLog = (obj: DeleteCustomRoutingListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointGroupRequestFilterSensitiveLog = (obj: DeleteEndpointGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteListenerRequestFilterSensitiveLog = (obj: DeleteListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DenyCustomRoutingTrafficRequestFilterSensitiveLog = (obj: DenyCustomRoutingTrafficRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrRequestFilterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrResponseFilterSensitiveLog = (obj: DeprovisionByoipCidrResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorRequestFilterSensitiveLog = (obj: DescribeAcceleratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorResponseFilterSensitiveLog = (obj: DescribeAcceleratorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorAttributesRequestFilterSensitiveLog = (
  obj: DescribeAcceleratorAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAcceleratorAttributesResponseFilterSensitiveLog = (
  obj: DescribeAcceleratorAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingAcceleratorRequestFilterSensitiveLog = (
  obj: DescribeCustomRoutingAcceleratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingAcceleratorResponseFilterSensitiveLog = (
  obj: DescribeCustomRoutingAcceleratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingAcceleratorAttributesRequestFilterSensitiveLog = (
  obj: DescribeCustomRoutingAcceleratorAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingAcceleratorAttributesResponseFilterSensitiveLog = (
  obj: DescribeCustomRoutingAcceleratorAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingEndpointGroupRequestFilterSensitiveLog = (
  obj: DescribeCustomRoutingEndpointGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingEndpointGroupResponseFilterSensitiveLog = (
  obj: DescribeCustomRoutingEndpointGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingListenerRequestFilterSensitiveLog = (
  obj: DescribeCustomRoutingListenerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomRoutingListenerResponseFilterSensitiveLog = (
  obj: DescribeCustomRoutingListenerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointGroupRequestFilterSensitiveLog = (obj: DescribeEndpointGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointGroupResponseFilterSensitiveLog = (obj: DescribeEndpointGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenerRequestFilterSensitiveLog = (obj: DescribeListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenerResponseFilterSensitiveLog = (obj: DescribeListenerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SocketAddressFilterSensitiveLog = (obj: SocketAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationPortMappingFilterSensitiveLog = (obj: DestinationPortMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointIdentifierFilterSensitiveLog = (obj: EndpointIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAcceleratorsRequestFilterSensitiveLog = (obj: ListAcceleratorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAcceleratorsResponseFilterSensitiveLog = (obj: ListAcceleratorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListByoipCidrsRequestFilterSensitiveLog = (obj: ListByoipCidrsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListByoipCidrsResponseFilterSensitiveLog = (obj: ListByoipCidrsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingAcceleratorsRequestFilterSensitiveLog = (
  obj: ListCustomRoutingAcceleratorsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingAcceleratorsResponseFilterSensitiveLog = (
  obj: ListCustomRoutingAcceleratorsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingEndpointGroupsRequestFilterSensitiveLog = (
  obj: ListCustomRoutingEndpointGroupsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingEndpointGroupsResponseFilterSensitiveLog = (
  obj: ListCustomRoutingEndpointGroupsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingListenersRequestFilterSensitiveLog = (obj: ListCustomRoutingListenersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingListenersResponseFilterSensitiveLog = (obj: ListCustomRoutingListenersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingPortMappingsRequestFilterSensitiveLog = (
  obj: ListCustomRoutingPortMappingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortMappingFilterSensitiveLog = (obj: PortMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingPortMappingsResponseFilterSensitiveLog = (
  obj: ListCustomRoutingPortMappingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingPortMappingsByDestinationRequestFilterSensitiveLog = (
  obj: ListCustomRoutingPortMappingsByDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomRoutingPortMappingsByDestinationResponseFilterSensitiveLog = (
  obj: ListCustomRoutingPortMappingsByDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointGroupsRequestFilterSensitiveLog = (obj: ListEndpointGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointGroupsResponseFilterSensitiveLog = (obj: ListEndpointGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListListenersRequestFilterSensitiveLog = (obj: ListListenersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListListenersResponseFilterSensitiveLog = (obj: ListListenersResponse): any => ({
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
export const ProvisionByoipCidrRequestFilterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionByoipCidrResponseFilterSensitiveLog = (obj: ProvisionByoipCidrResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveCustomRoutingEndpointsRequestFilterSensitiveLog = (
  obj: RemoveCustomRoutingEndpointsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveEndpointsRequestFilterSensitiveLog = (obj: RemoveEndpointsRequest): any => ({
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
export const UpdateAcceleratorRequestFilterSensitiveLog = (obj: UpdateAcceleratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAcceleratorResponseFilterSensitiveLog = (obj: UpdateAcceleratorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAcceleratorAttributesRequestFilterSensitiveLog = (obj: UpdateAcceleratorAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAcceleratorAttributesResponseFilterSensitiveLog = (
  obj: UpdateAcceleratorAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingAcceleratorRequestFilterSensitiveLog = (
  obj: UpdateCustomRoutingAcceleratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingAcceleratorResponseFilterSensitiveLog = (
  obj: UpdateCustomRoutingAcceleratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingAcceleratorAttributesRequestFilterSensitiveLog = (
  obj: UpdateCustomRoutingAcceleratorAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingAcceleratorAttributesResponseFilterSensitiveLog = (
  obj: UpdateCustomRoutingAcceleratorAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingListenerRequestFilterSensitiveLog = (obj: UpdateCustomRoutingListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomRoutingListenerResponseFilterSensitiveLog = (
  obj: UpdateCustomRoutingListenerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointGroupRequestFilterSensitiveLog = (obj: UpdateEndpointGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointGroupResponseFilterSensitiveLog = (obj: UpdateEndpointGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateListenerRequestFilterSensitiveLog = (obj: UpdateListenerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateListenerResponseFilterSensitiveLog = (obj: UpdateListenerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WithdrawByoipCidrRequestFilterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WithdrawByoipCidrResponseFilterSensitiveLog = (obj: WithdrawByoipCidrResponse): any => ({
  ...obj,
});
