import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct
 * 			traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.</p>
 */
export interface Accelerator {
  __type?: "Accelerator";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IP addresses. </p>
   * 		       <p>The naming convention for the DNS name is: a lower case letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   * 		       <p>For more information about the default
   * 			DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">Support for DNS Addressing in Global Accelerator</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  DnsName?: string;

  /**
   * <p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The value for the address type must be IPv4.
   * 			</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The static IP addresses that Global Accelerator associates with the accelerator.</p>
   */
  IpSets?: Array<IpSet>;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the accelerator. The name must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   */
  Status?: AcceleratorStatus | string;
}

export namespace Accelerator {
  export function isa(o: any): o is Accelerator {
    return __isa(o, "Accelerator");
  }
}

/**
 * <p>Attributes of an accelerator.</p>
 */
export interface AcceleratorAttributes {
  __type?: "AcceleratorAttributes";
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 				<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 				<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket.</p>
   */
  FlowLogsS3Prefix?: string;
}

export namespace AcceleratorAttributes {
  export function isa(o: any): o is AcceleratorAttributes {
    return __isa(o, "AcceleratorAttributes");
  }
}

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 */
export interface AcceleratorNotDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "AcceleratorNotDisabledException";
  $fault: "client";
  Message?: string;
}

export namespace AcceleratorNotDisabledException {
  export function isa(o: any): o is AcceleratorNotDisabledException {
    return __isa(o, "AcceleratorNotDisabledException");
  }
}

/**
 * <p>The accelerator that you specified doesn't exist.</p>
 */
export interface AcceleratorNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AcceleratorNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AcceleratorNotFoundException {
  export function isa(o: any): o is AcceleratorNotFoundException {
    return __isa(o, "AcceleratorNotFoundException");
  }
}

export type AcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";

/**
 * <p>You don't have access permission.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 */
export interface AssociatedEndpointGroupFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociatedEndpointGroupFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AssociatedEndpointGroupFoundException {
  export function isa(o: any): o is AssociatedEndpointGroupFoundException {
    return __isa(o, "AssociatedEndpointGroupFoundException");
  }
}

/**
 * <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an
 * 			accelerator before you can delete it.</p>
 */
export interface AssociatedListenerFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AssociatedListenerFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AssociatedListenerFoundException {
  export function isa(o: any): o is AssociatedListenerFoundException {
    return __isa(o, "AssociatedListenerFoundException");
  }
}

export type ClientAffinity = "NONE" | "SOURCE_IP";

export interface CreateAcceleratorRequest {
  __type?: "CreateAcceleratorRequest";
  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of an accelerator.</p>
   */
  IdempotencyToken: string | undefined;

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
}

export namespace CreateAcceleratorRequest {
  export function isa(o: any): o is CreateAcceleratorRequest {
    return __isa(o, "CreateAcceleratorRequest");
  }
}

export interface CreateAcceleratorResponse {
  __type?: "CreateAcceleratorResponse";
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   */
  Accelerator?: Accelerator;
}

export namespace CreateAcceleratorResponse {
  export function isa(o: any): o is CreateAcceleratorResponse {
    return __isa(o, "CreateAcceleratorResponse");
  }
}

export interface CreateEndpointGroupRequest {
  __type?: "CreateEndpointGroupRequest";
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: Array<EndpointConfiguration>;

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
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;

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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

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
  export function isa(o: any): o is CreateEndpointGroupRequest {
    return __isa(o, "CreateEndpointGroupRequest");
  }
}

export interface CreateEndpointGroupResponse {
  __type?: "CreateEndpointGroupResponse";
  /**
   * <p>The information about the endpoint group that was created.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace CreateEndpointGroupResponse {
  export function isa(o: any): o is CreateEndpointGroupResponse {
    return __isa(o, "CreateEndpointGroupResponse");
  }
}

export interface CreateListenerRequest {
  __type?: "CreateListenerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of your accelerator.</p>
   */
  AcceleratorArn: string | undefined;

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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the
   * 			uniqueness—of the request.</p>
   */
  IdempotencyToken: string | undefined;

  /**
   * <p>The list of port ranges to support for connections from clients to your accelerator.</p>
   */
  PortRanges: Array<PortRange> | undefined;

  /**
   * <p>The protocol for connections from clients to your accelerator.</p>
   */
  Protocol: Protocol | string | undefined;
}

export namespace CreateListenerRequest {
  export function isa(o: any): o is CreateListenerRequest {
    return __isa(o, "CreateListenerRequest");
  }
}

export interface CreateListenerResponse {
  __type?: "CreateListenerResponse";
  /**
   * <p>The listener that you've created.</p>
   */
  Listener?: Listener;
}

export namespace CreateListenerResponse {
  export function isa(o: any): o is CreateListenerResponse {
    return __isa(o, "CreateListenerResponse");
  }
}

export interface DeleteAcceleratorRequest {
  __type?: "DeleteAcceleratorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of an accelerator.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DeleteAcceleratorRequest {
  export function isa(o: any): o is DeleteAcceleratorRequest {
    return __isa(o, "DeleteAcceleratorRequest");
  }
}

export interface DeleteEndpointGroupRequest {
  __type?: "DeleteEndpointGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DeleteEndpointGroupRequest {
  export function isa(o: any): o is DeleteEndpointGroupRequest {
    return __isa(o, "DeleteEndpointGroupRequest");
  }
}

export interface DeleteListenerRequest {
  __type?: "DeleteListenerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteListenerRequest {
  export function isa(o: any): o is DeleteListenerRequest {
    return __isa(o, "DeleteListenerRequest");
  }
}

export interface DescribeAcceleratorAttributesRequest {
  __type?: "DescribeAcceleratorAttributesRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorAttributesRequest {
  export function isa(o: any): o is DescribeAcceleratorAttributesRequest {
    return __isa(o, "DescribeAcceleratorAttributesRequest");
  }
}

export interface DescribeAcceleratorAttributesResponse {
  __type?: "DescribeAcceleratorAttributesResponse";
  /**
   * <p>The attributes of the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace DescribeAcceleratorAttributesResponse {
  export function isa(o: any): o is DescribeAcceleratorAttributesResponse {
    return __isa(o, "DescribeAcceleratorAttributesResponse");
  }
}

export interface DescribeAcceleratorRequest {
  __type?: "DescribeAcceleratorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorRequest {
  export function isa(o: any): o is DescribeAcceleratorRequest {
    return __isa(o, "DescribeAcceleratorRequest");
  }
}

export interface DescribeAcceleratorResponse {
  __type?: "DescribeAcceleratorResponse";
  /**
   * <p>The description of the accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace DescribeAcceleratorResponse {
  export function isa(o: any): o is DescribeAcceleratorResponse {
    return __isa(o, "DescribeAcceleratorResponse");
  }
}

export interface DescribeEndpointGroupRequest {
  __type?: "DescribeEndpointGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DescribeEndpointGroupRequest {
  export function isa(o: any): o is DescribeEndpointGroupRequest {
    return __isa(o, "DescribeEndpointGroupRequest");
  }
}

export interface DescribeEndpointGroupResponse {
  __type?: "DescribeEndpointGroupResponse";
  /**
   * <p>The description of an endpoint group.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace DescribeEndpointGroupResponse {
  export function isa(o: any): o is DescribeEndpointGroupResponse {
    return __isa(o, "DescribeEndpointGroupResponse");
  }
}

export interface DescribeListenerRequest {
  __type?: "DescribeListenerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DescribeListenerRequest {
  export function isa(o: any): o is DescribeListenerRequest {
    return __isa(o, "DescribeListenerRequest");
  }
}

export interface DescribeListenerResponse {
  __type?: "DescribeListenerResponse";
  /**
   * <p>The description of a listener.</p>
   */
  Listener?: Listener;
}

export namespace DescribeListenerResponse {
  export function isa(o: any): o is DescribeListenerResponse {
    return __isa(o, "DescribeListenerResponse");
  }
}

/**
 * <p>A complex type for endpoints.</p>
 */
export interface EndpointConfiguration {
  __type?: "EndpointConfiguration";
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
   * 			allocation ID.</p>
   */
  EndpointId?: string;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Weight?: number;
}

export namespace EndpointConfiguration {
  export function isa(o: any): o is EndpointConfiguration {
    return __isa(o, "EndpointConfiguration");
  }
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
   * 			allocation ID. An Application Load Balancer can be either internal or internet-facing.</p>
   */
  EndpointId?: string;

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

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>. </p>
   */
  Weight?: number;
}

export namespace EndpointDescription {
  export function isa(o: any): o is EndpointDescription {
    return __isa(o, "EndpointDescription");
  }
}

/**
 * <p>A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface EndpointGroup {
  __type?: "EndpointGroup";
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: Array<EndpointDescription>;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The AWS Region that this endpoint group belongs.</p>
   */
  EndpointGroupRegion?: string;

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
   * <p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p>
   *
   * 		       <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a
   * 			list, Global Accelerator uses the first specified port in the list of ports.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

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
  export function isa(o: any): o is EndpointGroup {
    return __isa(o, "EndpointGroup");
  }
}

/**
 * <p>The endpoint group that you specified already exists.</p>
 */
export interface EndpointGroupAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "EndpointGroupAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointGroupAlreadyExistsException {
  export function isa(o: any): o is EndpointGroupAlreadyExistsException {
    return __isa(o, "EndpointGroupAlreadyExistsException");
  }
}

/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 */
export interface EndpointGroupNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EndpointGroupNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointGroupNotFoundException {
  export function isa(o: any): o is EndpointGroupNotFoundException {
    return __isa(o, "EndpointGroupNotFoundException");
  }
}

export enum HealthCheckProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP"
}

export type HealthState = "HEALTHY" | "INITIAL" | "UNHEALTHY";

/**
 * <p>There was an internal error for AWS Global Accelerator.</p>
 */
export interface InternalServiceErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export function isa(o: any): o is InternalServiceErrorException {
    return __isa(o, "InternalServiceErrorException");
  }
}

/**
 * <p>An argument that you specified is invalid.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export function isa(o: any): o is InvalidArgumentException {
    return __isa(o, "InvalidArgumentException");
  }
}

/**
 * <p>There isn't another item to return.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 */
export interface InvalidPortRangeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPortRangeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPortRangeException {
  export function isa(o: any): o is InvalidPortRangeException {
    return __isa(o, "InvalidPortRangeException");
  }
}

export enum IpAddressType {
  IPV4 = "IPV4"
}

/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 */
export interface IpSet {
  __type?: "IpSet";
  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   */
  IpAddresses?: Array<string>;

  /**
   * <p>The types of IP addresses included in this IP set.</p>
   */
  IpFamily?: string;
}

export namespace IpSet {
  export function isa(o: any): o is IpSet {
    return __isa(o, "IpSet");
  }
}

/**
 * <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
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
  export function isa(o: any): o is ListAcceleratorsRequest {
    return __isa(o, "ListAcceleratorsRequest");
  }
}

export interface ListAcceleratorsResponse {
  __type?: "ListAcceleratorsResponse";
  /**
   * <p>The list of accelerators for a customer account.</p>
   */
  Accelerators?: Array<Accelerator>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListAcceleratorsResponse {
  export function isa(o: any): o is ListAcceleratorsResponse {
    return __isa(o, "ListAcceleratorsResponse");
  }
}

export interface ListEndpointGroupsRequest {
  __type?: "ListEndpointGroupsRequest";
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

export namespace ListEndpointGroupsRequest {
  export function isa(o: any): o is ListEndpointGroupsRequest {
    return __isa(o, "ListEndpointGroupsRequest");
  }
}

export interface ListEndpointGroupsResponse {
  __type?: "ListEndpointGroupsResponse";
  /**
   * <p>The list of the endpoint groups associated with a listener.</p>
   */
  EndpointGroups?: Array<EndpointGroup>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointGroupsResponse {
  export function isa(o: any): o is ListEndpointGroupsResponse {
    return __isa(o, "ListEndpointGroupsResponse");
  }
}

export interface ListListenersRequest {
  __type?: "ListListenersRequest";
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

export namespace ListListenersRequest {
  export function isa(o: any): o is ListListenersRequest {
    return __isa(o, "ListListenersRequest");
  }
}

export interface ListListenersResponse {
  __type?: "ListListenersResponse";
  /**
   * <p>The list of listeners for an accelerator.</p>
   */
  Listeners?: Array<Listener>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

export namespace ListListenersResponse {
  export function isa(o: any): o is ListListenersResponse {
    return __isa(o, "ListListenersResponse");
  }
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
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: Array<PortRange>;

  /**
   * <p>The protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;
}

export namespace Listener {
  export function isa(o: any): o is Listener {
    return __isa(o, "Listener");
  }
}

/**
 * <p>The listener that you specified doesn't exist.</p>
 */
export interface ListenerNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ListenerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ListenerNotFoundException {
  export function isa(o: any): o is ListenerNotFoundException {
    return __isa(o, "ListenerNotFoundException");
  }
}

/**
 * <p>A complex type for a range of ports for a listener.</p>
 */
export interface PortRange {
  __type?: "PortRange";
  /**
   * <p>The first port in the range of ports, inclusive.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the range of ports, inclusive.</p>
   */
  ToPort?: number;
}

export namespace PortRange {
  export function isa(o: any): o is PortRange {
    return __isa(o, "PortRange");
  }
}

export enum Protocol {
  TCP = "TCP",
  UDP = "UDP"
}

export interface UpdateAcceleratorAttributesRequest {
  __type?: "UpdateAcceleratorAttributesRequest";
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

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 				<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
   * 			bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket.</p>
   */
  FlowLogsS3Prefix?: string;
}

export namespace UpdateAcceleratorAttributesRequest {
  export function isa(o: any): o is UpdateAcceleratorAttributesRequest {
    return __isa(o, "UpdateAcceleratorAttributesRequest");
  }
}

export interface UpdateAcceleratorAttributesResponse {
  __type?: "UpdateAcceleratorAttributesResponse";
  /**
   * <p>Updated attributes for the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace UpdateAcceleratorAttributesResponse {
  export function isa(o: any): o is UpdateAcceleratorAttributesResponse {
    return __isa(o, "UpdateAcceleratorAttributesResponse");
  }
}

export interface UpdateAcceleratorRequest {
  __type?: "UpdateAcceleratorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The value for the address type must be IPv4.
   * 			</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;
}

export namespace UpdateAcceleratorRequest {
  export function isa(o: any): o is UpdateAcceleratorRequest {
    return __isa(o, "UpdateAcceleratorRequest");
  }
}

export interface UpdateAcceleratorResponse {
  __type?: "UpdateAcceleratorResponse";
  /**
   * <p>Information about the updated accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace UpdateAcceleratorResponse {
  export function isa(o: any): o is UpdateAcceleratorResponse {
    return __isa(o, "UpdateAcceleratorResponse");
  }
}

export interface UpdateEndpointGroupRequest {
  __type?: "UpdateEndpointGroupRequest";
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: Array<EndpointConfiguration>;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string | undefined;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The
   * 			default value is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port
   * 			is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses
   * 			the first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default
   * 			value is TCP.</p>
   */
  HealthCheckProtocol?: HealthCheckProtocol | string;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an
   * 			unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;
}

export namespace UpdateEndpointGroupRequest {
  export function isa(o: any): o is UpdateEndpointGroupRequest {
    return __isa(o, "UpdateEndpointGroupRequest");
  }
}

export interface UpdateEndpointGroupResponse {
  __type?: "UpdateEndpointGroupResponse";
  /**
   * <p>The information about the endpoint group that was updated.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace UpdateEndpointGroupResponse {
  export function isa(o: any): o is UpdateEndpointGroupResponse {
    return __isa(o, "UpdateEndpointGroupResponse");
  }
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
   * <p>The Amazon Resource Name (ARN) of the listener to update.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The updated list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: Array<PortRange>;

  /**
   * <p>The updated protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: Protocol | string;
}

export namespace UpdateListenerRequest {
  export function isa(o: any): o is UpdateListenerRequest {
    return __isa(o, "UpdateListenerRequest");
  }
}

export interface UpdateListenerResponse {
  __type?: "UpdateListenerResponse";
  /**
   * <p>Information for the updated listener.</p>
   */
  Listener?: Listener;
}

export namespace UpdateListenerResponse {
  export function isa(o: any): o is UpdateListenerResponse {
    return __isa(o, "UpdateListenerResponse");
  }
}
