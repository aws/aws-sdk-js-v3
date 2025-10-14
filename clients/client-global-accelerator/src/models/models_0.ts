// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlobalAcceleratorServiceException as __BaseException } from "./GlobalAcceleratorServiceException";

/**
 * <p>A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes
 * 			that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when
 * 			you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum
 * 			of ten event messages. </p>
 * @public
 */
export interface AcceleratorEvent {
  /**
   * <p>A string that contains an <code>Event</code> message describing changes or errors
   * 			when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A timestamp for when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4: "IPV4",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const IpAddressFamily = {
  IPv4: "IPv4",
  IPv6: "IPv6",
} as const;

/**
 * @public
 */
export type IpAddressFamily = (typeof IpAddressFamily)[keyof typeof IpAddressFamily];

/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 * @public
 */
export interface IpSet {
  /**
   * <p>IpFamily is deprecated and has been replaced by IpAddressFamily.</p>
   *
   * @deprecated IpFamily has been replaced by IpAddressFamily
   * @public
   */
  IpFamily?: string | undefined;

  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * <p>The types of IP addresses included in this IP set. </p>
   * @public
   */
  IpAddressFamily?: IpAddressFamily | undefined;
}

/**
 * @public
 * @enum
 */
export const AcceleratorStatus = {
  DEPLOYED: "DEPLOYED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AcceleratorStatus = (typeof AcceleratorStatus)[keyof typeof AcceleratorStatus];

/**
 * <p>An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct
 * 			traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.</p>
 * @public
 */
export interface Accelerator {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator.</p>
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   * @public
   */
  IpSets?: IpSet[] | undefined;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses.</p>
   *          <p>The naming convention for the DNS name for an accelerator is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   *          <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both
   *  			the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p>
   *          <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   * @public
   */
  Status?: AcceleratorStatus | undefined;

  /**
   * <p>The date and time that the accelerator was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses:
   * 			two IPv4 addresses and two IPv6 addresses.</p>
   *          <p>The naming convention for the dual-stack DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.dualstack.awsglobalaccelerator.com.</p>
   *          <p>Note: Global Accelerator also assigns a default DNS name, <code>DnsName</code>, to your accelerator that points just to the static IPv4 addresses. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  DualStackDnsName?: string | undefined;

  /**
   * <p>A history of changes that you make to an accelerator in Global Accelerator.</p>
   * @public
   */
  Events?: AcceleratorEvent[] | undefined;
}

/**
 * <p>Attributes of an accelerator.</p>
 * @public
 */
export interface AcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   *          <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   *          <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 * @public
 */
export class AcceleratorNotDisabledException extends __BaseException {
  readonly name: "AcceleratorNotDisabledException" = "AcceleratorNotDisabledException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class AcceleratorNotFoundException extends __BaseException {
  readonly name: "AcceleratorNotFoundException" = "AcceleratorNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface CustomRoutingEndpointConfiguration {
  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC)
   * 			subnet ID. </p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cross-account attachment that specifies the endpoints (resources)
   * 			that can be added to accelerators and principals that have permission to add the endpoints.</p>
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * @public
 */
export interface AddCustomRoutingEndpointsRequest {
  /**
   * <p>The list of endpoint objects to add to a custom routing accelerator.</p>
   * @public
   */
  EndpointConfigurations: CustomRoutingEndpointConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * <p>A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints,
 * 			which are virtual private cloud (VPC) subnets.</p>
 * @public
 */
export interface CustomRoutingEndpointDescription {
  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC)
   * 			subnet ID. </p>
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * @public
 */
export interface AddCustomRoutingEndpointsResponse {
  /**
   * <p>The endpoint objects added to the custom routing accelerator.</p>
   * @public
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;
}

/**
 * <p>You can't use both of those options.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class EndpointAlreadyExistsException extends __BaseException {
  readonly name: "EndpointAlreadyExistsException" = "EndpointAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class EndpointGroupNotFoundException extends __BaseException {
  readonly name: "EndpointGroupNotFoundException" = "EndpointGroupNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface EndpointConfiguration {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. A resource must be valid and active
   * 			when you add it as an endpoint.</p>
   *          <p>For cross-account endpoints, this must be the ARN of the resource.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the
   * 	        <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  Weight?: number | undefined;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint.
   * 			The value is true or false. The default value is true for Application Load Balancer endpoints. </p>
   *          <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   *          <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load
   * 			Balancers, Amazon EC2 instances, and Network Load Balancers with security groups. IMPORTANT: You cannot use client IP address preservation
   * 			with Network Load Balancers with TLS listeners.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html">
   * 			Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cross-account attachment that specifies the endpoints (resources)
   * 			that can be added to accelerators and principals that have permission to add the endpoints.</p>
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * @public
 */
export interface AddEndpointsRequest {
  /**
   * <p>The list of endpoint objects.</p>
   * @public
   */
  EndpointConfigurations: EndpointConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HealthState = {
  HEALTHY: "HEALTHY",
  INITIAL: "INITIAL",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type HealthState = (typeof HealthState)[keyof typeof HealthState];

/**
 * <p>A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load
 * 			balancers.</p>
 * @public
 */
export interface EndpointDescription {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p>
   *          <p>An Application Load Balancer can be either internal or internet-facing.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the
   * 	        <i>Global Accelerator Developer Guide</i>. </p>
   * @public
   */
  Weight?: number | undefined;

  /**
   * <p>The health status of the endpoint.</p>
   * @public
   */
  HealthState?: HealthState | undefined;

  /**
   * <p>Returns a null result.</p>
   * @public
   */
  HealthReason?: string | undefined;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint.
   * 			The value is true or false. The default value is true for Application Load Balancers endpoints. </p>
   *          <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   *          <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load
   * 			Balancers, Amazon EC2 instances, and Network Load Balancers with security groups. IMPORTANT: You cannot use client IP address preservation
   * 			with Network Load Balancers with TLS listeners.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html">
   * 			Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AddEndpointsResponse {
  /**
   * <p>The list of endpoint objects.</p>
   * @public
   */
  EndpointDescriptions?: EndpointDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;
}

/**
 * <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 * @public
 */
export class TransactionInProgressException extends __BaseException {
  readonly name: "TransactionInProgressException" = "TransactionInProgressException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   * 			You can't advertise only a portion of the provisioned range.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * <p>A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes
 * 			that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP
 * 			address (BYOIP).</p>
 * @public
 */
export interface ByoipCidrEvent {
  /**
   * <p>A string that contains an <code>Event</code> message describing changes that you make in the status
   * 			of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A timestamp for when you make a status change for an IP address range that you bring to Global Accelerator through
   * 			bring your own IP address (BYOIP).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ByoipCidrState = {
  ADVERTISING: "ADVERTISING",
  DEPROVISIONED: "DEPROVISIONED",
  FAILED_ADVERTISING: "FAILED_ADVERTISING",
  FAILED_DEPROVISION: "FAILED_DEPROVISION",
  FAILED_PROVISION: "FAILED_PROVISION",
  FAILED_WITHDRAW: "FAILED_WITHDRAW",
  PENDING_ADVERTISING: "PENDING_ADVERTISING",
  PENDING_DEPROVISIONING: "PENDING_DEPROVISIONING",
  PENDING_PROVISIONING: "PENDING_PROVISIONING",
  PENDING_WITHDRAWING: "PENDING_WITHDRAWING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ByoipCidrState = (typeof ByoipCidrState)[keyof typeof ByoipCidrState];

/**
 * <p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through
 * 			bring your own IP address (BYOIP).</p>
 *          <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p>
 *          <ul>
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
 * @public
 */
export interface ByoipCidr {
  /**
   * <p>The address range, in CIDR notation.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The state of the address pool.</p>
   * @public
   */
  State?: ByoipCidrState | undefined;

  /**
   * <p>A history of status changes for an IP address range that you bring to Global Accelerator
   * 			through bring your own IP address (BYOIP).</p>
   * @public
   */
  Events?: ByoipCidrEvent[] | undefined;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * <p>The CIDR that you specified was not found or is incorrect.</p>
 * @public
 */
export class ByoipCidrNotFoundException extends __BaseException {
  readonly name: "ByoipCidrNotFoundException" = "ByoipCidrNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class IncorrectCidrStateException extends __BaseException {
  readonly name: "IncorrectCidrStateException" = "IncorrectCidrStateException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface AllowCustomRoutingTrafficRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to allow to receive
   * 			traffic. The IP addresses must be a subset of the IP addresses that you specified for the endpoint group.</p>
   *          <p>
   *             <code>DestinationAddresses</code> is required if <code>AllowAllTrafficToEndpoint</code> is <code>FALSE</code> or is
   * 		not specified.</p>
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance ports (destination ports) that you want to allow to receive traffic.</p>
   * @public
   */
  DestinationPorts?: number[] | undefined;

  /**
   * <p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint can receive traffic
   * 			from a custom routing accelerator. The value is TRUE or FALSE. </p>
   *          <p>When set to TRUE, <i>all</i> destinations in the custom routing VPC subnet can receive traffic. Note
   * 			that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p>
   *          <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that are allowed
   * 			to receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is
   * 			the same as the ports configured for the endpoint group.</p>
   *          <p>The default value is FALSE.</p>
   * @public
   */
  AllowAllTrafficToEndpoint?: boolean | undefined;
}

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 * @public
 */
export class AssociatedEndpointGroupFoundException extends __BaseException {
  readonly name: "AssociatedEndpointGroupFoundException" = "AssociatedEndpointGroupFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class AssociatedListenerFoundException extends __BaseException {
  readonly name: "AssociatedListenerFoundException" = "AssociatedListenerFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A resource is one of the following: the ARN for an Amazon Web Services resource that is supported by
 * 			Global Accelerator to be added as an endpoint, or a CIDR range that specifies a bring your own IP (BYOIP) address pool.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The endpoint ID for the endpoint that is specified as a Amazon Web Services resource. </p>
   *          <p>An endpoint ID for the cross-account feature is the ARN of an Amazon Web Services resource, such as a
   * 			Network Load Balancer, that Global Accelerator supports as an endpoint for an accelerator.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>An IP address range, in CIDR format, that is specified as resource. The address must
   * 			be provisioned and advertised in Global Accelerator by following the bring your own IP address (BYOIP) process
   * 			for Global Accelerator</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where a shared endpoint resource is located.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>A cross-account attachment in Global Accelerator. A cross-account attachment
 * 			specifies the <i>principals</i> who have permission to work with <i>resources</i>
 * 			in your account, which you also list in the attachment.</p>
 * @public
 */
export interface Attachment {
  /**
   * <p>The Amazon Resource Name (ARN) of the cross-account attachment.</p>
   * @public
   */
  AttachmentArn?: string | undefined;

  /**
   * <p>The name of the cross-account attachment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The principals included in the cross-account attachment.</p>
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * <p>The resources included in the cross-account attachment.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>The date and time that the cross-account attachment was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The date and time that the cross-account attachment was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * <p>No cross-account attachment was found.</p>
 * @public
 */
export class AttachmentNotFoundException extends __BaseException {
  readonly name: "AttachmentNotFoundException" = "AttachmentNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentNotFoundException, __BaseException>) {
    super({
      name: "AttachmentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services
 * 			account using bring your own IP addresses (BYOIP). </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 		    IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @public
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientAffinity = {
  NONE: "NONE",
  SOURCE_IP: "SOURCE_IP",
} as const;

/**
 * @public
 */
export type ClientAffinity = (typeof ClientAffinity)[keyof typeof ClientAffinity];

/**
 * <p>A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string that contains a <code>Tag</code> key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A string that contains a <code>Tag</code> value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAcceleratorRequest {
  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 			periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address
   * 			from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p>
   *          <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool.
   * 	    	When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns
   * 	    	you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges
   * 	    	to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is
   * 			because Global Accelerator assigns each address range to a different network zone, for high availability.</p>
   *          <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p>
   *          <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new
   * 			accelerator with the new addresses.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
   * 		    your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of an accelerator.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Create tags for an accelerator.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 		    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcceleratorResponse {
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAttachmentRequest {
  /**
   * <p>The name of the cross-account attachment. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The principals to include in the cross-account attachment. A principal can be an Amazon Web Services account
   * 			number or the Amazon Resource Name (ARN) for an accelerator. </p>
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the resources to include in the cross-account attachment. A resource can
   * 			be any supported Amazon Web Services resource type for Global Accelerator or a CIDR range for a
   * 			bring your own IP address (BYOIP) address pool. </p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Add tags for a cross-account attachment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 			in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAttachmentResponse {
  /**
   * <p>Information about the cross-account attachment.</p>
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingAcceleratorRequest {
  /**
   * <p>The name of a custom routing accelerator. The name can have a maximum of 64 characters, must contain
   * 		only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address
   * 			from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p>
   *          <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool.
   * 			When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns
   * 			you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges
   * 			to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is
   * 			because Global Accelerator assigns each address range to a different network zone, for high availability.</p>
   *          <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p>
   *          <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new
   * 			accelerator with the new addresses.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
   * 			your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that
   * 			is, the uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Create tags for an accelerator.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 	    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomRoutingAcceleratorStatus = {
  DEPLOYED: "DEPLOYED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type CustomRoutingAcceleratorStatus =
  (typeof CustomRoutingAcceleratorStatus)[keyof typeof CustomRoutingAcceleratorStatus];

/**
 * <p>Attributes of a custom routing accelerator.</p>
 * @public
 */
export interface CustomRoutingAccelerator {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator.</p>
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   * @public
   */
  IpSets?: IpSet[] | undefined;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses. </p>
   *          <p>The naming convention for the DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   *          <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both the A record
   * 			and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p>
   *          <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html">
   * 			Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   * @public
   */
  Status?: CustomRoutingAcceleratorStatus | undefined;

  /**
   * <p>The date and time that the accelerator was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingAcceleratorResponse {
  /**
   * <p>The accelerator that is created.</p>
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomRoutingProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type CustomRoutingProtocol = (typeof CustomRoutingProtocol)[keyof typeof CustomRoutingProtocol];

/**
 * <p>For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual
 * 			private cloud subnets) in an endpoint group to accept client traffic on.</p>
 * @public
 */
export interface CustomRoutingDestinationConfiguration {
  /**
   * <p>The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   * @public
   */
  ToPort: number | undefined;

  /**
   * <p>The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.</p>
   * @public
   */
  Protocols: CustomRoutingProtocol[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 		specific Region.</p>
   * @public
   */
  EndpointGroupRegion: string | undefined;

  /**
   * <p>Sets the port range and protocol for all endpoints (virtual private cloud subnets) in a custom routing endpoint group to accept
   * 		client traffic on.</p>
   * @public
   */
  DestinationConfigurations: CustomRoutingDestinationConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 		uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * <p>For a custom routing accelerator, describes the port range and protocol for all endpoints
 * 			(virtual private cloud subnets) in an endpoint group to accept client traffic on.</p>
 * @public
 */
export interface CustomRoutingDestinationDescription {
  /**
   * <p>The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.</p>
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * <p>A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 * 		</p>
 * @public
 */
export interface CustomRoutingEndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located.</p>
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * <p>For a custom routing accelerator, describes the port range and protocol for all endpoints
   * 			(virtual private cloud subnets) in an endpoint group to accept client traffic on.</p>
   * @public
   */
  DestinationDescriptions?: CustomRoutingDestinationDescription[] | undefined;

  /**
   * <p>For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an
   * 			endpoint group to accept client traffic on.</p>
   * @public
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group created for a custom routing accelerator.</p>
   * @public
   */
  EndpointGroup?: CustomRoutingEndpointGroup | undefined;
}

/**
 * <p>The endpoint group that you specified already exists.</p>
 * @public
 */
export class EndpointGroupAlreadyExistsException extends __BaseException {
  readonly name: "EndpointGroupAlreadyExistsException" = "EndpointGroupAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidPortRangeException extends __BaseException {
  readonly name: "InvalidPortRangeException" = "InvalidPortRangeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ListenerNotFoundException extends __BaseException {
  readonly name: "ListenerNotFoundException" = "ListenerNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface PortRange {
  /**
   * <p>The first port in the range of ports, inclusive.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port in the range of ports, inclusive.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator for a custom routing listener.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The port range to support for connections from clients to your accelerator.</p>
   *          <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 		endpoints for custom routing accelerators</a>.</p>
   * @public
   */
  PortRanges: PortRange[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 		uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * <p>A complex type for a listener for a custom routing accelerator.</p>
 * @public
 */
export interface CustomRoutingListener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * <p>The port range to support for connections from clients to your accelerator.</p>
   *          <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 				endpoints for custom routing accelerators</a>.</p>
   * @public
   */
  PortRanges?: PortRange[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingListenerResponse {
  /**
   * <p>The listener that you've created for a custom routing accelerator.</p>
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * @public
 * @enum
 */
export const HealthCheckProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type HealthCheckProtocol = (typeof HealthCheckProtocol)[keyof typeof HealthCheckProtocol];

/**
 * <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group.
 * 			For example, you can create a port override in which the listener
 * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
 * 			and 1443, respectively, on the endpoints.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
 * 		    Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @public
 */
export interface PortOverride {
  /**
   * <p>The listener port that you want to map to a specific endpoint port. This is the port that user traffic
   * 		    arrives to the Global Accelerator on.</p>
   * @public
   */
  ListenerPort?: number | undefined;

  /**
   * <p>The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint,
   * 		    such as the Application Load Balancer or Amazon EC2 instance.</p>
   * @public
   */
  EndpointPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 			specific Region.</p>
   * @public
   */
  EndpointGroupRegion: string | undefined;

  /**
   * <p>The list of endpoint objects.</p>
   * @public
   */
  EndpointConfigurations?: EndpointConfiguration[] | undefined;

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   *          <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * <p>The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 	        is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the
   * 			first port in the list.</p>
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * <p>The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group.
   * 			For example, you can create a port override in which the listener
   * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
   * 			and 1443, respectively, on the endpoints.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
   * 			Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * <p>A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 * 		</p>
 * @public
 */
export interface EndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the endpoint group is located.</p>
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * <p>The list of endpoint objects.</p>
   * @public
   */
  EndpointDescriptions?: EndpointDescription[] | undefined;

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   *          <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * <p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p>
   *          <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a
   * 		    list, Global Accelerator uses the first specified port in the list of ports.</p>
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * <p>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * <p>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the
   * 			endpoints for health checks. The default is slash (/).</p>
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * <p>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</p>
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * <p>Allows you to override the destination ports used to route traffic to an endpoint.
   * 			Using a port override lets you map a list of external destination ports (that your
   * 			users send traffic to) to a list of internal destination ports that you want an application
   * 			endpoint to receive traffic on. </p>
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * @public
 */
export interface CreateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was created.</p>
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface CreateListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of your accelerator.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The list of port ranges to support for connections from clients to your accelerator.</p>
   * @public
   */
  PortRanges: PortRange[] | undefined;

  /**
   * <p>The protocol for connections from clients to your accelerator.</p>
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   *          <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   *          <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   *          <p>The default value is <code>NONE</code>.</p>
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * <p>A complex type for a listener.</p>
 * @public
 */
export interface Listener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * <p>The protocol for the connections from clients to the accelerator.</p>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   *          <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   *          <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   *          <p>The default value is <code>NONE</code>.</p>
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * <p>The listener that you've created.</p>
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * <p>An endpoint (Amazon Web Services resource) or an IP address range, in CIDR format, that is
 * 			listed in a cross-account attachment. A cross-account resource can be added to an accelerator by
 * 			specified principals, which are also listed in the attachment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html">
 * 			Working with cross-account attachments and resources in Global Accelerator</a> in the <i>
 * 				Global Accelerator Developer Guide</i>.</p>
 * @public
 */
export interface CrossAccountResource {
  /**
   * <p>The endpoint ID for the endpoint that is listed in a cross-account attachment and
   * 			can be added to an accelerator by specified principals.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>An IP address range, in CIDR format, that is specified as an Amazon Web Services resource. The address must
   * 			be provisioned and advertised in Global Accelerator by following the bring your own IP address (BYOIP) process
   * 			for Global Accelerator.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cross-account attachment that specifies the resources (endpoints or
   * 			CIDR range) that can be added to accelerators and principals that have permission to add them.</p>
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * <p>Attributes of a custom routing accelerator.</p>
 * @public
 */
export interface CustomRoutingAcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 			<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 			<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   *          <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   *          <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomRoutingDestinationTrafficState = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type CustomRoutingDestinationTrafficState =
  (typeof CustomRoutingDestinationTrafficState)[keyof typeof CustomRoutingDestinationTrafficState];

/**
 * @public
 */
export interface DeleteAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an accelerator.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAttachmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the cross-account attachment to delete.</p>
   * @public
   */
  AttachmentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to delete.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to delete.</p>
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DenyCustomRoutingTrafficRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to prevent from receiving
   * 			traffic. The IP addresses must be a subset of the IP addresses allowed for the VPC subnet associated with the
   * 			endpoint group.</p>
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * <p>A list of specific Amazon EC2 instance ports (destination ports) in a subnet endpoint that you want to prevent from
   * 			receiving traffic.</p>
   * @public
   */
  DestinationPorts?: number[] | undefined;

  /**
   * <p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint <i>cannot</i>
   * 			receive traffic from a custom routing accelerator. The value is TRUE or FALSE. </p>
   *          <p>When set to TRUE, <i>no</i> destinations in the custom routing VPC subnet can receive traffic. Note
   * 			that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p>
   *          <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that cannot receive
   * 			traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is
   * 			the same as the ports configured for the endpoint group.</p>
   *          <p>The default value is FALSE.</p>
   * @public
   */
  DenyAllTrafficToEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix that you specified
   * 			when you provisioned the address range.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorResponse {
  /**
   * <p>The description of the accelerator.</p>
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the accelerator.</p>
   * @public
   */
  AcceleratorAttributes?: AcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAttachmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the cross-account attachment to describe.</p>
   * @public
   */
  AttachmentArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAttachmentResponse {
  /**
   * <p>Information about the cross-account attachment.</p>
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorResponse {
  /**
   * <p>The description of the custom routing accelerator.</p>
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to describe the attributes for.</p>
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the custom routing accelerator.</p>
   * @public
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group for a custom routing accelerator.</p>
   * @public
   */
  EndpointGroup?: CustomRoutingEndpointGroup | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingListenerResponse {
  /**
   * <p>The description of a listener for a custom routing accelerator.</p>
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group.</p>
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface DescribeListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeListenerResponse {
  /**
   * <p>The description of a listener.</p>
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * <p>An IP address/port combination.</p>
 * @public
 */
export interface SocketAddress {
  /**
   * <p>The IP address for the socket address.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The port for the socket address.</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * <p>The port mappings for a specified endpoint IP address (destination).</p>
 * @public
 */
export interface DestinationPortMapping {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator
   * 			that you have port mappings for.</p>
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * <p>The IP address/port combinations (sockets) that map to a given destination socket
   * 			address.</p>
   * @public
   */
  AcceleratorSocketAddresses?: SocketAddress[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * <p>The ID for the virtual private cloud (VPC) subnet.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the endpoint group.</p>
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * <p>The endpoint IP address/port combination for traffic received on the accelerator socket address.</p>
   * @public
   */
  DestinationSocketAddress?: SocketAddress | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if
   * 			traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.</p>
   * @public
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | undefined;
}

/**
 * <p>A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group.</p>
 * @public
 */
export interface EndpointIdentifier {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p>
   *          <p>An Application Load Balancer can be either internal or internet-facing.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. </p>
   *          <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the endpoint fronted by the accelerator.</p>
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;
}

/**
 * <p>The endpoint that you specified doesn't exist.</p>
 * @public
 */
export class EndpointNotFoundException extends __BaseException {
  readonly name: "EndpointNotFoundException" = "EndpointNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 */
export interface ListAcceleratorsRequest {
  /**
   * <p>The number of Global Accelerator objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcceleratorsResponse {
  /**
   * <p>The list of accelerators for a customer account.</p>
   * @public
   */
  Accelerators?: Accelerator[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListByoipCidrsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make
   * 			another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListByoipCidrsResponse {
  /**
   * <p>Information about your address ranges.</p>
   * @public
   */
  ByoipCidrs?: ByoipCidr[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountAttachmentsRequest {
  /**
   * <p>The number of cross-account attachment objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountAttachmentsResponse {
  /**
   * <p>Information about the cross-account attachments.</p>
   * @public
   */
  CrossAccountAttachments?: Attachment[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountResourceAccountsRequest {}

/**
 * @public
 */
export interface ListCrossAccountResourceAccountsResponse {
  /**
   * <p>The account IDs of principals (resource owners) in a cross-account attachment who can work
   * 			with resources listed in the same attachment.</p>
   * @public
   */
  ResourceOwnerAwsAccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an accelerator in a cross-account attachment.</p>
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * <p>The account ID of a resource owner in a cross-account attachment.</p>
   * @public
   */
  ResourceOwnerAwsAccountId: string | undefined;

  /**
   * <p>The number of cross-account resource objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountResourcesResponse {
  /**
   * <p>The cross-account resources used with an accelerator.</p>
   * @public
   */
  CrossAccountResources?: CrossAccountResource[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingAcceleratorsRequest {
  /**
   * <p>The number of custom routing Global Accelerator objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingAcceleratorsResponse {
  /**
   * <p>The list of custom routing accelerators for a customer account.</p>
   * @public
   */
  Accelerators?: CustomRoutingAccelerator[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingEndpointGroupsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to list endpoint groups for.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The number of endpoint group objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingEndpointGroupsResponse {
  /**
   * <p>The list of the endpoint groups associated with a listener for a custom routing accelerator.</p>
   * @public
   */
  EndpointGroups?: CustomRoutingEndpointGroup[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingListenersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list listeners for.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The number of listener objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingListenersResponse {
  /**
   * <p>The list of listeners for a custom routing accelerator.</p>
   * @public
   */
  Listeners?: CustomRoutingListener[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list the custom routing port mappings for.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to list the custom routing port mappings for.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * <p>The number of destination port mappings that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual
 * 		    private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that
 * 		    statically associates port ranges with VPC subnets, which allows Global Accelerator to route to
 * 			specific instances and ports within one or more subnets. </p>
 * @public
 */
export interface PortMapping {
  /**
   * <p>The accelerator port.</p>
   * @public
   */
  AcceleratorPort?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * <p>The IP address of the VPC subnet (the subnet ID).</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The EC2 instance IP address and port number in the virtual private cloud (VPC) subnet.</p>
   * @public
   */
  DestinationSocketAddress?: SocketAddress | undefined;

  /**
   * <p>The protocols supported by the endpoint group.</p>
   * @public
   */
  Protocols?: CustomRoutingProtocol[] | undefined;

  /**
   * <p>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if
   * 			traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.</p>
   * @public
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsResponse {
  /**
   * <p>The port mappings for a custom routing accelerator.</p>
   * @public
   */
  PortMappings?: PortMapping[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsByDestinationRequest {
  /**
   * <p>The ID for the virtual private cloud (VPC) subnet.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>The endpoint IP address in a virtual private cloud (VPC) subnet for which you want to receive back port
   * 		mappings.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The number of destination port mappings that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsByDestinationResponse {
  /**
   * <p>The port mappings for the endpoint IP address that you specified in the request.</p>
   * @public
   */
  DestinationPortMappings?: DestinationPortMapping[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointGroupsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The number of endpoint group objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointGroupsResponse {
  /**
   * <p>The list of the endpoint groups associated with a listener.</p>
   * @public
   */
  EndpointGroups?: EndpointGroup[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The number of listener objects that you want to return with this call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersResponse {
  /**
   * <p>The list of listeners for an accelerator.</p>
   * @public
   */
  Listeners?: Listener[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Root level tag for the Tags parameters.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 address range, in CIDR notation. The most specific IP prefix that you can
   * 			specify is /24. The address range cannot overlap with another address range that you've brought
   * 			to this Amazon Web Services Region or another Region.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address range to
   * 			Amazon using BYOIP.
   * 		</p>
   * @public
   */
  CidrAuthorizationContext: CidrAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface RemoveCustomRoutingEndpointsRequest {
  /**
   * <p>The IDs for the endpoints. For custom routing accelerators, endpoint IDs are the virtual private cloud (VPC)
   * 		subnet IDs. </p>
   * @public
   */
  EndpointIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to remove endpoints from.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveEndpointsRequest {
  /**
   * <p>The identifiers of the endpoints that you want to remove.</p>
   * @public
   */
  EndpointIdentifiers: EndpointIdentifier[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to add tags to. An ARN uniquely identifies a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to a resource. A tag consists of a key and a value that you define.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key pairs that you want to remove from the specified resources.</p>
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
export interface UpdateAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 			periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The IP addresses for an accelerator.</p>
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorResponse {
  /**
   * <p>Information about the updated accelerator.</p>
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator that you want to update.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 			bucket.</p>
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   *          <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//),
   * 			like the following:</p>
   *          <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorAttributesResponse {
  /**
   * <p>Updated attributes for the accelerator.</p>
   * @public
   */
  AcceleratorAttributes?: AcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateCrossAccountAttachmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cross-account attachment to update.</p>
   * @public
   */
  AttachmentArn: string | undefined;

  /**
   * <p>The name of the cross-account attachment.  </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The principals to add to the cross-account attachment. A principal is an account or the Amazon Resource Name (ARN)
   * 			of an accelerator that the attachment gives permission to work with resources from another account. The resources
   * 			are also listed in the attachment.</p>
   *          <p>To add more than one principal, separate the account numbers or accelerator ARNs, or both, with commas.</p>
   * @public
   */
  AddPrincipals?: string[] | undefined;

  /**
   * <p>The principals to remove from the cross-account attachment. A principal is an account or the Amazon Resource Name (ARN)
   * 			of an accelerator that the attachment gives permission to work with resources from another account. The resources
   * 			are also listed in the attachment.</p>
   *          <p>To remove more than one principal, separate the account numbers or accelerator ARNs, or both, with commas.</p>
   * @public
   */
  RemovePrincipals?: string[] | undefined;

  /**
   * <p>The resources to add to the cross-account attachment. A resource listed in a cross-account attachment can be used
   * 			with an accelerator by the principals that are listed in the attachment.</p>
   *          <p>To add more than one resource, separate the resource ARNs with commas.</p>
   * @public
   */
  AddResources?: Resource[] | undefined;

  /**
   * <p>The resources to remove from the cross-account attachment. A resource listed in a cross-account attachment can be used
   * 			with an accelerator by the principals that are listed in the attachment.</p>
   *          <p>To remove more than one resource, separate the resource ARNs with commas.</p>
   * @public
   */
  RemoveResources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface UpdateCrossAccountAttachmentResponse {
  /**
   * <p>Information about the updated cross-account attachment.</p>
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters,
   * 		periods (.), or hyphens (-), and must not begin or end with a hyphen or period.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The IP addresses for an accelerator.</p>
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   *          <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorResponse {
  /**
   * <p>Information about the updated custom routing accelerator.</p>
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to update attributes for.</p>
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 		<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in
   * 	    the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 	    <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the
   * 		bucket.</p>
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 		<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   *          <p>If you don’t specify a prefix, the flow logs are stored in the
   * 		root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   *          <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>Updated custom routing accelerator.</p>
   * @public
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated port range to support for connections from clients to your accelerator. If you remove ports that are
   * 	currently being used by a subnet endpoint, the call fails.</p>
   *          <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About
   * 		endpoints for custom routing accelerators</a>.</p>
   * @public
   */
  PortRanges: PortRange[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingListenerResponse {
  /**
   * <p>Information for the updated listener for a custom routing accelerator.</p>
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>The list of endpoint objects. A resource must be valid and active when you add it as an endpoint.</p>
   * @public
   */
  EndpointConfigurations?: EndpointConfiguration[] | undefined;

  /**
   * <p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   *          <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * <p>The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 	        is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses
   * 			the first port in the list.</p>
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * <p>The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * <p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group.
   * 			For example, you can create a port override in which the listener
   * 			receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080
   * 			and 1443, respectively, on the endpoints.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html">
   * 			Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was updated.</p>
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated list of port ranges for the connections from clients to the accelerator.</p>
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * <p>The updated protocol for the connections from clients to the accelerator.</p>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Client affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   *          <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 	        affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   *          <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 		    instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   *          <p>The default value is <code>NONE</code>.</p>
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;
}

/**
 * @public
 */
export interface UpdateListenerResponse {
  /**
   * <p>Information for the updated listener.</p>
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   *          <p> For more information, see
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in
   * 			the Global Accelerator Developer Guide.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrResponse {
  /**
   * <p>Information about the BYOIP address pool.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
