import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct
 * 			traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.</p>
 */
export interface Accelerator {
  __type?: "Accelerator";
  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   */
  Status?: AcceleratorStatus | string;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IP addresses. </p>
   * 		       <p>The naming convention for the DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   * 		       <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">
   * 			Support for DNS Addressing in Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  DnsName?: string;

  /**
   * <p>The value for the address type must be IPv4.
   * 			</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   */
  IpSets?: IpSet[];

  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator.</p>
   */
  AcceleratorArn?: string;
}

export namespace Accelerator {
  export const filterSensitiveLog = (obj: Accelerator): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Accelerator => __isa(o, "Accelerator");
}

/**
 * <p>Attributes of an accelerator.</p>
 */
export interface AcceleratorAttributes {
  __type?: "AcceleratorAttributes";
  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   * 		       <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 		       <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 				<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;
}

export namespace AcceleratorAttributes {
  export const filterSensitiveLog = (obj: AcceleratorAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceleratorAttributes => __isa(o, "AcceleratorAttributes");
}

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 */
export interface AcceleratorNotDisabledException extends __SmithyException, $MetadataBearer {
  name: "AcceleratorNotDisabledException";
  $fault: "client";
  Message?: string;
}

export namespace AcceleratorNotDisabledException {
  export const filterSensitiveLog = (obj: AcceleratorNotDisabledException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceleratorNotDisabledException => __isa(o, "AcceleratorNotDisabledException");
}

/**
 * <p>The accelerator that you specified doesn't exist.</p>
 */
export interface AcceleratorNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AcceleratorNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AcceleratorNotFoundException {
  export const filterSensitiveLog = (obj: AcceleratorNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceleratorNotFoundException => __isa(o, "AcceleratorNotFoundException");
}

export type AcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";

/**
 * <p>You don't have access permission.</p>
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
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export interface AdvertiseByoipCidrRequest {
  __type?: "AdvertiseByoipCidrRequest";
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   * 			You can't advertise only a portion of the provisioned range.</p>
   */
  Cidr: string | undefined;
}

export namespace AdvertiseByoipCidrRequest {
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdvertiseByoipCidrRequest => __isa(o, "AdvertiseByoipCidrRequest");
}

export interface AdvertiseByoipCidrResponse {
  __type?: "AdvertiseByoipCidrResponse";
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace AdvertiseByoipCidrResponse {
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdvertiseByoipCidrResponse => __isa(o, "AdvertiseByoipCidrResponse");
}

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 */
export interface AssociatedEndpointGroupFoundException extends __SmithyException, $MetadataBearer {
  name: "AssociatedEndpointGroupFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AssociatedEndpointGroupFoundException {
  export const filterSensitiveLog = (obj: AssociatedEndpointGroupFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociatedEndpointGroupFoundException =>
    __isa(o, "AssociatedEndpointGroupFoundException");
}

/**
 * <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an
 * 			accelerator before you can delete it.</p>
 */
export interface AssociatedListenerFoundException extends __SmithyException, $MetadataBearer {
  name: "AssociatedListenerFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AssociatedListenerFoundException {
  export const filterSensitiveLog = (obj: AssociatedListenerFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociatedListenerFoundException => __isa(o, "AssociatedListenerFoundException");
}

/**
 * <p>Information about an IP address range that is provisioned for use with your AWS resources through
 * 			bring your own IP address (BYOIP).</p>
 * 		       <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>PENDING_PROVISIONING</b> —
 * 				You’ve submitted a request to provision an IP address range but it is not yet provisioned with
 * 				AWS Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>READY</b> — The address range is provisioned
 * 				with AWS Global Accelerator and can be advertised.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_ADVERTISING</b> — You’ve submitted a
 * 				request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ADVERTISING</b> — The address range is
 * 				being advertised by AWS Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_WITHDRAWING</b> — You’ve submitted
 * 				a request to withdraw an address range from being advertised but it is still being advertised
 * 				by AWS Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>PENDING_DEPROVISIONING</b> — You’ve submitted a
 * 				request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DEPROVISIONED</b> — The address range is deprovisioned
 * 				from AWS Global Accelerator.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_PROVISION </b> — The request to
 * 				provision the address range from AWS Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact AWS support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator
 * 				to advertise the address range was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact AWS support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_WITHDRAW</b> — The request to withdraw
 * 				the address range from advertising by AWS Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact AWS support.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FAILED_DEPROVISION </b> — The request to
 * 				deprovision the address range from AWS Global Accelerator was not successful. Please make sure that
 * 				you provide all of the correct information, and try again. If the request fails
 * 				a second time, contact AWS support.</p>
 *             </li>
 *          </ul>
 */
export interface ByoipCidr {
  __type?: "ByoipCidr";
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>A history of status changes for an IP address range that that you bring to AWS Global Accelerator
   * 			through bring your own IP address (BYOIP).</p>
   */
  Events?: ByoipCidrEvent[];

  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;
}

export namespace ByoipCidr {
  export const filterSensitiveLog = (obj: ByoipCidr): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ByoipCidr => __isa(o, "ByoipCidr");
}

/**
 * <p>A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes
 * 			that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP
 * 			address (BYOIP).</p>
 */
export interface ByoipCidrEvent {
  __type?: "ByoipCidrEvent";
  /**
   * <p>A timestamp when you make a status change for an IP address range that you bring to AWS Global Accelerator through
   * 			bring your own IP address (BYOIP).</p>
   */
  Timestamp?: Date;

  /**
   * <p>A string that contains an <code>Event</code> message describing changes that you make in the status
   * 			of an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP).</p>
   */
  Message?: string;
}

export namespace ByoipCidrEvent {
  export const filterSensitiveLog = (obj: ByoipCidrEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ByoipCidrEvent => __isa(o, "ByoipCidrEvent");
}

/**
 * <p>The CIDR that you specified was not found or is incorrect.</p>
 */
export interface ByoipCidrNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ByoipCidrNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ByoipCidrNotFoundException {
  export const filterSensitiveLog = (obj: ByoipCidrNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ByoipCidrNotFoundException => __isa(o, "ByoipCidrNotFoundException");
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
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS
 * 			account using bring your own IP addresses (BYOIP). </p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  __type?: "CidrAuthorizationContext";
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

export namespace CidrAuthorizationContext {
  export const filterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CidrAuthorizationContext => __isa(o, "CidrAuthorizationContext");
}

export type ClientAffinity = "NONE" | "SOURCE_IP";

export interface CreateAcceleratorRequest {
  __type?: "CreateAcceleratorRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of an accelerator.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Create tags for an accelerator.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The value for the address type must be IPv4.
   * 			</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The name of an accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator, you can choose IP addresses
   * 			from your own pool to use for the accelerator's static IP
   * 			addresses. You can specify one or two addresses, separated by a comma. Do not include the /32
   * 			suffix.</p>
   * 		       <p>If you specify only one IP address from your IP address range, Global Accelerator assigns a second
   * 			static IP address for the accelerator from the AWS IP address pool.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  IpAddresses?: string[];
}

export namespace CreateAcceleratorRequest {
  export const filterSensitiveLog = (obj: CreateAcceleratorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAcceleratorRequest => __isa(o, "CreateAcceleratorRequest");
}

export interface CreateAcceleratorResponse {
  __type?: "CreateAcceleratorResponse";
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   */
  Accelerator?: Accelerator;
}

export namespace CreateAcceleratorResponse {
  export const filterSensitiveLog = (obj: CreateAcceleratorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAcceleratorResponse => __isa(o, "CreateAcceleratorResponse");
}

export interface CreateEndpointGroupRequest {
  __type?: "CreateEndpointGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The name of the AWS Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 			specific Region.</p>
   */
  EndpointGroupRegion: string | undefined;

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
   * <p>The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 			is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the
   * 			first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: EndpointConfiguration[];

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;
}

export namespace CreateEndpointGroupRequest {
  export const filterSensitiveLog = (obj: CreateEndpointGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEndpointGroupRequest => __isa(o, "CreateEndpointGroupRequest");
}

export interface CreateEndpointGroupResponse {
  __type?: "CreateEndpointGroupResponse";
  /**
   * <p>The information about the endpoint group that was created.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace CreateEndpointGroupResponse {
  export const filterSensitiveLog = (obj: CreateEndpointGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEndpointGroupResponse => __isa(o, "CreateEndpointGroupResponse");
}

export interface CreateListenerRequest {
  __type?: "CreateListenerRequest";
  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Clienty affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 		       <p>AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 			affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 			instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;

  /**
   * <p>The list of port ranges to support for connections from clients to your accelerator.</p>
   */
  PortRanges: PortRange[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your accelerator.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The protocol for connections from clients to your accelerator.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateListenerRequest {
  export const filterSensitiveLog = (obj: CreateListenerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateListenerRequest => __isa(o, "CreateListenerRequest");
}

export interface CreateListenerResponse {
  __type?: "CreateListenerResponse";
  /**
   * <p>The listener that you've created.</p>
   */
  Listener?: Listener;
}

export namespace CreateListenerResponse {
  export const filterSensitiveLog = (obj: CreateListenerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateListenerResponse => __isa(o, "CreateListenerResponse");
}

export interface DeleteAcceleratorRequest {
  __type?: "DeleteAcceleratorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of an accelerator.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DeleteAcceleratorRequest {
  export const filterSensitiveLog = (obj: DeleteAcceleratorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAcceleratorRequest => __isa(o, "DeleteAcceleratorRequest");
}

export interface DeleteEndpointGroupRequest {
  __type?: "DeleteEndpointGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DeleteEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DeleteEndpointGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEndpointGroupRequest => __isa(o, "DeleteEndpointGroupRequest");
}

export interface DeleteListenerRequest {
  __type?: "DeleteListenerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteListenerRequest {
  export const filterSensitiveLog = (obj: DeleteListenerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteListenerRequest => __isa(o, "DeleteListenerRequest");
}

export interface DeprovisionByoipCidrRequest {
  __type?: "DeprovisionByoipCidrRequest";
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix that you specified
   * 			when you provisioned the address range.</p>
   */
  Cidr: string | undefined;
}

export namespace DeprovisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeprovisionByoipCidrRequest => __isa(o, "DeprovisionByoipCidrRequest");
}

export interface DeprovisionByoipCidrResponse {
  __type?: "DeprovisionByoipCidrResponse";
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace DeprovisionByoipCidrResponse {
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeprovisionByoipCidrResponse => __isa(o, "DeprovisionByoipCidrResponse");
}

export interface DescribeAcceleratorAttributesRequest {
  __type?: "DescribeAcceleratorAttributesRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorAttributesRequest =>
    __isa(o, "DescribeAcceleratorAttributesRequest");
}

export interface DescribeAcceleratorAttributesResponse {
  __type?: "DescribeAcceleratorAttributesResponse";
  /**
   * <p>The attributes of the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace DescribeAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorAttributesResponse =>
    __isa(o, "DescribeAcceleratorAttributesResponse");
}

export interface DescribeAcceleratorRequest {
  __type?: "DescribeAcceleratorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorRequest => __isa(o, "DescribeAcceleratorRequest");
}

export interface DescribeAcceleratorResponse {
  __type?: "DescribeAcceleratorResponse";
  /**
   * <p>The description of the accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace DescribeAcceleratorResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAcceleratorResponse => __isa(o, "DescribeAcceleratorResponse");
}

export interface DescribeEndpointGroupRequest {
  __type?: "DescribeEndpointGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DescribeEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEndpointGroupRequest => __isa(o, "DescribeEndpointGroupRequest");
}

export interface DescribeEndpointGroupResponse {
  __type?: "DescribeEndpointGroupResponse";
  /**
   * <p>The description of an endpoint group.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace DescribeEndpointGroupResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEndpointGroupResponse => __isa(o, "DescribeEndpointGroupResponse");
}

export interface DescribeListenerRequest {
  __type?: "DescribeListenerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DescribeListenerRequest {
  export const filterSensitiveLog = (obj: DescribeListenerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeListenerRequest => __isa(o, "DescribeListenerRequest");
}

export interface DescribeListenerResponse {
  __type?: "DescribeListenerResponse";
  /**
   * <p>The description of a listener.</p>
   */
  Listener?: Listener;
}

export namespace DescribeListenerResponse {
  export const filterSensitiveLog = (obj: DescribeListenerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeListenerResponse => __isa(o, "DescribeListenerResponse");
}

/**
 * <p>A complex type for endpoints.</p>
 */
export interface EndpointConfiguration {
  __type?: "EndpointConfiguration";
  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Weight?: number;

  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For EC2 instances, this is the EC2 instance ID. </p>
   * 		       <p>An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId?: string;

  /**
   * <p>Indicates whether client IP address preservation is enabled for an Application Load Balancer endpoint.
   * 			The value is true or false. The default value is true for new accelerators. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the Application Load Balancer endpoint fronted by the accelerator.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html">
   * 			Preserve Client IP Addresses in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  ClientIPPreservationEnabled?: boolean;
}

export namespace EndpointConfiguration {
  export const filterSensitiveLog = (obj: EndpointConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointConfiguration => __isa(o, "EndpointConfiguration");
}

/**
 * <p>A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load
 * 			balancers.</p>
 */
export interface EndpointDescription {
  __type?: "EndpointDescription";
  /**
   * <p>Indicates whether client IP address preservation is enabled for an Application Load Balancer endpoint.
   * 			The value is true or false. The default value is true for new accelerators. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the Application Load Balancer endpoint fronted by the accelerator.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works-client-ip.html">
   * 			Viewing Client IP Addresses in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  ClientIPPreservationEnabled?: boolean;

  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon
   * 			Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address
   * 			allocation ID. For EC2 instances, this is the EC2 instance ID. </p>
   * 		       <p>An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId?: string;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>. </p>
   */
  Weight?: number;

  /**
   * <p>The reason code associated with why the endpoint is not healthy. If the endpoint state is healthy, a reason code is
   * 			not provided.</p>
   * 		       <p>If the endpoint state is <b>unhealthy</b>, the reason code can be one of the following
   * 			values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Timeout</b>: The health check requests to the endpoint are timing out before
   * 					returning a status.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Failed</b>: The health check failed, for example because the endpoint response
   * 					was invalid (malformed).</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If the endpoint state is <b>initial</b>, the reason code can be one of the following
   * 			values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>ProvisioningInProgress</b>: The endpoint is in the process of being
   * 					provisioned.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>InitialHealthChecking</b>: Global Accelerator is still setting up the minimum number of
   * 					health checks for the endpoint that are required to determine its health status.</p>
   * 			         </li>
   *          </ul>
   */
  HealthReason?: string;

  /**
   * <p>The health status of the endpoint.</p>
   */
  HealthState?: HealthState | string;
}

export namespace EndpointDescription {
  export const filterSensitiveLog = (obj: EndpointDescription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointDescription => __isa(o, "EndpointDescription");
}

/**
 * <p>A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface EndpointGroup {
  __type?: "EndpointGroup";
  /**
   * <p>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the
   * 			endpoints for health checks. The default is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The AWS Region that this endpoint group belongs.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: EndpointDescription[];

  /**
   * <p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p>
   *
   * 		       <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a
   * 			list, Global Accelerator uses the first specified port in the list of ports.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

  /**
   * <p>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;
}

export namespace EndpointGroup {
  export const filterSensitiveLog = (obj: EndpointGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointGroup => __isa(o, "EndpointGroup");
}

/**
 * <p>The endpoint group that you specified already exists.</p>
 */
export interface EndpointGroupAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "EndpointGroupAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointGroupAlreadyExistsException {
  export const filterSensitiveLog = (obj: EndpointGroupAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointGroupAlreadyExistsException =>
    __isa(o, "EndpointGroupAlreadyExistsException");
}

/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 */
export interface EndpointGroupNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EndpointGroupNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointGroupNotFoundException {
  export const filterSensitiveLog = (obj: EndpointGroupNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointGroupNotFoundException => __isa(o, "EndpointGroupNotFoundException");
}

export enum HealthCheckProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}

export type HealthState = "HEALTHY" | "INITIAL" | "UNHEALTHY";

/**
 * <p>The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be
 * 		incorrect for this action.</p>
 */
export interface IncorrectCidrStateException extends __SmithyException, $MetadataBearer {
  name: "IncorrectCidrStateException";
  $fault: "client";
  Message?: string;
}

export namespace IncorrectCidrStateException {
  export const filterSensitiveLog = (obj: IncorrectCidrStateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IncorrectCidrStateException => __isa(o, "IncorrectCidrStateException");
}

/**
 * <p>There was an internal error for AWS Global Accelerator.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServiceErrorException => __isa(o, "InternalServiceErrorException");
}

/**
 * <p>An argument that you specified is invalid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidArgumentException => __isa(o, "InvalidArgumentException");
}

/**
 * <p>There isn't another item to return.</p>
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
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
}

/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 */
export interface InvalidPortRangeException extends __SmithyException, $MetadataBearer {
  name: "InvalidPortRangeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPortRangeException {
  export const filterSensitiveLog = (obj: InvalidPortRangeException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidPortRangeException => __isa(o, "InvalidPortRangeException");
}

export enum IpAddressType {
  IPV4 = "IPV4",
}

/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 */
export interface IpSet {
  __type?: "IpSet";
  /**
   * <p>The types of IP addresses included in this IP set.</p>
   */
  IpFamily?: string;

  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   */
  IpAddresses?: string[];
}

export namespace IpSet {
  export const filterSensitiveLog = (obj: IpSet): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IpSet => __isa(o, "IpSet");
}

/**
 * <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
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
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListAcceleratorsRequest {
  __type?: "ListAcceleratorsRequest";
  /**
   * <p>The number of Global Accelerator objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListAcceleratorsRequest {
  export const filterSensitiveLog = (obj: ListAcceleratorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAcceleratorsRequest => __isa(o, "ListAcceleratorsRequest");
}

export interface ListAcceleratorsResponse {
  __type?: "ListAcceleratorsResponse";
  /**
   * <p>The list of accelerators for a customer account.</p>
   */
  Accelerators?: Accelerator[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListAcceleratorsResponse {
  export const filterSensitiveLog = (obj: ListAcceleratorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAcceleratorsResponse => __isa(o, "ListAcceleratorsResponse");
}

export interface ListByoipCidrsRequest {
  __type?: "ListByoipCidrsRequest";
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

export namespace ListByoipCidrsRequest {
  export const filterSensitiveLog = (obj: ListByoipCidrsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListByoipCidrsRequest => __isa(o, "ListByoipCidrsRequest");
}

export interface ListByoipCidrsResponse {
  __type?: "ListByoipCidrsResponse";
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];
}

export namespace ListByoipCidrsResponse {
  export const filterSensitiveLog = (obj: ListByoipCidrsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListByoipCidrsResponse => __isa(o, "ListByoipCidrsResponse");
}

export interface ListEndpointGroupsRequest {
  __type?: "ListEndpointGroupsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of endpoint group objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListEndpointGroupsRequest {
  export const filterSensitiveLog = (obj: ListEndpointGroupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEndpointGroupsRequest => __isa(o, "ListEndpointGroupsRequest");
}

export interface ListEndpointGroupsResponse {
  __type?: "ListEndpointGroupsResponse";
  /**
   * <p>The list of the endpoint groups associated with a listener.</p>
   */
  EndpointGroups?: EndpointGroup[];

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointGroupsResponse {
  export const filterSensitiveLog = (obj: ListEndpointGroupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEndpointGroupsResponse => __isa(o, "ListEndpointGroupsResponse");
}

/**
 * <p>A complex type for a listener.</p>
 */
export interface Listener {
  __type?: "Listener";
  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Clienty affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 		       <p>AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 			affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 			instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;

  /**
   * <p>The protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: PortRange[];
}

export namespace Listener {
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Listener => __isa(o, "Listener");
}

/**
 * <p>The listener that you specified doesn't exist.</p>
 */
export interface ListenerNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ListenerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ListenerNotFoundException {
  export const filterSensitiveLog = (obj: ListenerNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListenerNotFoundException => __isa(o, "ListenerNotFoundException");
}

export interface ListListenersRequest {
  __type?: "ListListenersRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of listener objects that you want to return with this call. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListListenersRequest {
  export const filterSensitiveLog = (obj: ListListenersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListListenersRequest => __isa(o, "ListListenersRequest");
}

export interface ListListenersResponse {
  __type?: "ListListenersResponse";
  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of listeners for an accelerator.</p>
   */
  Listeners?: Listener[];
}

export namespace ListListenersResponse {
  export const filterSensitiveLog = (obj: ListListenersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListListenersResponse => __isa(o, "ListListenersResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Root level tag for the Tags parameters.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>A complex type for a range of ports for a listener.</p>
 */
export interface PortRange {
  __type?: "PortRange";
  /**
   * <p>The last port in the range of ports, inclusive.</p>
   */
  ToPort?: number;

  /**
   * <p>The first port in the range of ports, inclusive.</p>
   */
  FromPort?: number;
}

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PortRange => __isa(o, "PortRange");
}

export enum Protocol {
  TCP = "TCP",
  UDP = "UDP",
}

export interface ProvisionByoipCidrRequest {
  __type?: "ProvisionByoipCidrRequest";
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

export namespace ProvisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProvisionByoipCidrRequest => __isa(o, "ProvisionByoipCidrRequest");
}

export interface ProvisionByoipCidrResponse {
  __type?: "ProvisionByoipCidrResponse";
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace ProvisionByoipCidrResponse {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProvisionByoipCidrResponse => __isa(o, "ProvisionByoipCidrResponse");
}

/**
 * <p>A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A string that contains a <code>Tag</code> key.</p>
   */
  Key: string | undefined;

  /**
   * <p>A string that contains a <code>Tag</code> value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to add tags to. An ARN uniquely identifies a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to a resource. A tag consists of a key and a value that you define.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The tag key pairs that you want to remove from the specified resources.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateAcceleratorAttributesRequest {
  __type?: "UpdateAcceleratorAttributesRequest";
  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   * 		       <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 			      <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 				<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator that you want to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;
}

export namespace UpdateAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: UpdateAcceleratorAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAcceleratorAttributesRequest =>
    __isa(o, "UpdateAcceleratorAttributesRequest");
}

export interface UpdateAcceleratorAttributesResponse {
  __type?: "UpdateAcceleratorAttributesResponse";
  /**
   * <p>Updated attributes for the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace UpdateAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: UpdateAcceleratorAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAcceleratorAttributesResponse =>
    __isa(o, "UpdateAcceleratorAttributesResponse");
}

export interface UpdateAcceleratorRequest {
  __type?: "UpdateAcceleratorRequest";
  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The value for the address type must be IPv4.
   * 			</p>
   */
  IpAddressType?: IpAddressType | string;
}

export namespace UpdateAcceleratorRequest {
  export const filterSensitiveLog = (obj: UpdateAcceleratorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAcceleratorRequest => __isa(o, "UpdateAcceleratorRequest");
}

export interface UpdateAcceleratorResponse {
  __type?: "UpdateAcceleratorResponse";
  /**
   * <p>Information about the updated accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace UpdateAcceleratorResponse {
  export const filterSensitiveLog = (obj: UpdateAcceleratorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAcceleratorResponse => __isa(o, "UpdateAcceleratorResponse");
}

export interface UpdateEndpointGroupRequest {
  __type?: "UpdateEndpointGroupRequest";
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: EndpointConfiguration[];

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
   * <p>The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 			is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses
   * 			the first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;
}

export namespace UpdateEndpointGroupRequest {
  export const filterSensitiveLog = (obj: UpdateEndpointGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointGroupRequest => __isa(o, "UpdateEndpointGroupRequest");
}

export interface UpdateEndpointGroupResponse {
  __type?: "UpdateEndpointGroupResponse";
  /**
   * <p>The information about the endpoint group that was updated.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace UpdateEndpointGroupResponse {
  export const filterSensitiveLog = (obj: UpdateEndpointGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointGroupResponse => __isa(o, "UpdateEndpointGroupResponse");
}

export interface UpdateListenerRequest {
  __type?: "UpdateListenerRequest";
  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications,
   * 			regardless of the port and protocol of the client request. Clienty affinity gives you control over whether to always
   * 			route each client to the same specific endpoint.</p>
   * 		       <p>AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client
   * 			affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port,
   * 			destination IP address, destination port, and protocol—to select the hash value, and then chooses the best
   * 			endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not
   * 			be always routed to the same endpoint because the hash value changes. </p>
   * 		       <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code>
   * 			instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties—
   * 			source (client) IP address and destination IP address—to select the hash value.</p>
   * 		       <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: ClientAffinity | string;

  /**
   * <p>The updated protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: PortRange[];
}

export namespace UpdateListenerRequest {
  export const filterSensitiveLog = (obj: UpdateListenerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateListenerRequest => __isa(o, "UpdateListenerRequest");
}

export interface UpdateListenerResponse {
  __type?: "UpdateListenerResponse";
  /**
   * <p>Information for the updated listener.</p>
   */
  Listener?: Listener;
}

export namespace UpdateListenerResponse {
  export const filterSensitiveLog = (obj: UpdateListenerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateListenerResponse => __isa(o, "UpdateListenerResponse");
}

export interface WithdrawByoipCidrRequest {
  __type?: "WithdrawByoipCidrRequest";
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;
}

export namespace WithdrawByoipCidrRequest {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WithdrawByoipCidrRequest => __isa(o, "WithdrawByoipCidrRequest");
}

export interface WithdrawByoipCidrResponse {
  __type?: "WithdrawByoipCidrResponse";
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace WithdrawByoipCidrResponse {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WithdrawByoipCidrResponse => __isa(o, "WithdrawByoipCidrResponse");
}
