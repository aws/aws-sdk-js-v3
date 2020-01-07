import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
export declare namespace Accelerator {
    function isa(o: any): o is Accelerator;
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
export declare namespace AcceleratorAttributes {
    function isa(o: any): o is AcceleratorAttributes;
}
/**
 * <p>The accelerator that you specified could not be disabled.</p>
 */
export interface AcceleratorNotDisabledException extends __SmithyException, $MetadataBearer {
    name: "AcceleratorNotDisabledException";
    $fault: "client";
    Message?: string;
}
export declare namespace AcceleratorNotDisabledException {
    function isa(o: any): o is AcceleratorNotDisabledException;
}
/**
 * <p>The accelerator that you specified doesn't exist.</p>
 */
export interface AcceleratorNotFoundException extends __SmithyException, $MetadataBearer {
    name: "AcceleratorNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace AcceleratorNotFoundException {
    function isa(o: any): o is AcceleratorNotFoundException;
}
export declare type AcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";
/**
 * <p>You don't have access permission.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessDeniedException {
    function isa(o: any): o is AccessDeniedException;
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
export declare namespace AssociatedEndpointGroupFoundException {
    function isa(o: any): o is AssociatedEndpointGroupFoundException;
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
export declare namespace AssociatedListenerFoundException {
    function isa(o: any): o is AssociatedListenerFoundException;
}
export declare type ClientAffinity = "NONE" | "SOURCE_IP";
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
export declare namespace CreateAcceleratorRequest {
    function isa(o: any): o is CreateAcceleratorRequest;
}
export interface CreateAcceleratorResponse {
    __type?: "CreateAcceleratorResponse";
    /**
     * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
     */
    Accelerator?: Accelerator;
}
export declare namespace CreateAcceleratorResponse {
    function isa(o: any): o is CreateAcceleratorResponse;
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
export declare namespace CreateEndpointGroupRequest {
    function isa(o: any): o is CreateEndpointGroupRequest;
}
export interface CreateEndpointGroupResponse {
    __type?: "CreateEndpointGroupResponse";
    /**
     * <p>The information about the endpoint group that was created.</p>
     */
    EndpointGroup?: EndpointGroup;
}
export declare namespace CreateEndpointGroupResponse {
    function isa(o: any): o is CreateEndpointGroupResponse;
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
export declare namespace CreateListenerRequest {
    function isa(o: any): o is CreateListenerRequest;
}
export interface CreateListenerResponse {
    __type?: "CreateListenerResponse";
    /**
     * <p>The listener that you've created.</p>
     */
    Listener?: Listener;
}
export declare namespace CreateListenerResponse {
    function isa(o: any): o is CreateListenerResponse;
}
export interface DeleteAcceleratorRequest {
    __type?: "DeleteAcceleratorRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of an accelerator.</p>
     */
    AcceleratorArn: string | undefined;
}
export declare namespace DeleteAcceleratorRequest {
    function isa(o: any): o is DeleteAcceleratorRequest;
}
export interface DeleteEndpointGroupRequest {
    __type?: "DeleteEndpointGroupRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
     */
    EndpointGroupArn: string | undefined;
}
export declare namespace DeleteEndpointGroupRequest {
    function isa(o: any): o is DeleteEndpointGroupRequest;
}
export interface DeleteListenerRequest {
    __type?: "DeleteListenerRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the listener.</p>
     */
    ListenerArn: string | undefined;
}
export declare namespace DeleteListenerRequest {
    function isa(o: any): o is DeleteListenerRequest;
}
export interface DescribeAcceleratorAttributesRequest {
    __type?: "DescribeAcceleratorAttributesRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
     */
    AcceleratorArn: string | undefined;
}
export declare namespace DescribeAcceleratorAttributesRequest {
    function isa(o: any): o is DescribeAcceleratorAttributesRequest;
}
export interface DescribeAcceleratorAttributesResponse {
    __type?: "DescribeAcceleratorAttributesResponse";
    /**
     * <p>The attributes of the accelerator.</p>
     */
    AcceleratorAttributes?: AcceleratorAttributes;
}
export declare namespace DescribeAcceleratorAttributesResponse {
    function isa(o: any): o is DescribeAcceleratorAttributesResponse;
}
export interface DescribeAcceleratorRequest {
    __type?: "DescribeAcceleratorRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
     */
    AcceleratorArn: string | undefined;
}
export declare namespace DescribeAcceleratorRequest {
    function isa(o: any): o is DescribeAcceleratorRequest;
}
export interface DescribeAcceleratorResponse {
    __type?: "DescribeAcceleratorResponse";
    /**
     * <p>The description of the accelerator.</p>
     */
    Accelerator?: Accelerator;
}
export declare namespace DescribeAcceleratorResponse {
    function isa(o: any): o is DescribeAcceleratorResponse;
}
export interface DescribeEndpointGroupRequest {
    __type?: "DescribeEndpointGroupRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
     */
    EndpointGroupArn: string | undefined;
}
export declare namespace DescribeEndpointGroupRequest {
    function isa(o: any): o is DescribeEndpointGroupRequest;
}
export interface DescribeEndpointGroupResponse {
    __type?: "DescribeEndpointGroupResponse";
    /**
     * <p>The description of an endpoint group.</p>
     */
    EndpointGroup?: EndpointGroup;
}
export declare namespace DescribeEndpointGroupResponse {
    function isa(o: any): o is DescribeEndpointGroupResponse;
}
export interface DescribeListenerRequest {
    __type?: "DescribeListenerRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
     */
    ListenerArn: string | undefined;
}
export declare namespace DescribeListenerRequest {
    function isa(o: any): o is DescribeListenerRequest;
}
export interface DescribeListenerResponse {
    __type?: "DescribeListenerResponse";
    /**
     * <p>The description of a listener.</p>
     */
    Listener?: Listener;
}
export declare namespace DescribeListenerResponse {
    function isa(o: any): o is DescribeListenerResponse;
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
export declare namespace EndpointConfiguration {
    function isa(o: any): o is EndpointConfiguration;
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
export declare namespace EndpointDescription {
    function isa(o: any): o is EndpointDescription;
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
export declare namespace EndpointGroup {
    function isa(o: any): o is EndpointGroup;
}
/**
 * <p>The endpoint group that you specified already exists.</p>
 */
export interface EndpointGroupAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "EndpointGroupAlreadyExistsException";
    $fault: "client";
    Message?: string;
}
export declare namespace EndpointGroupAlreadyExistsException {
    function isa(o: any): o is EndpointGroupAlreadyExistsException;
}
/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 */
export interface EndpointGroupNotFoundException extends __SmithyException, $MetadataBearer {
    name: "EndpointGroupNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace EndpointGroupNotFoundException {
    function isa(o: any): o is EndpointGroupNotFoundException;
}
export declare enum HealthCheckProtocol {
    HTTP = "HTTP",
    HTTPS = "HTTPS",
    TCP = "TCP"
}
export declare type HealthState = "HEALTHY" | "INITIAL" | "UNHEALTHY";
/**
 * <p>There was an internal error for AWS Global Accelerator.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServiceErrorException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServiceErrorException {
    function isa(o: any): o is InternalServiceErrorException;
}
/**
 * <p>An argument that you specified is invalid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
    name: "InvalidArgumentException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidArgumentException {
    function isa(o: any): o is InvalidArgumentException;
}
/**
 * <p>There isn't another item to return.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidNextTokenException {
    function isa(o: any): o is InvalidNextTokenException;
}
/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 */
export interface InvalidPortRangeException extends __SmithyException, $MetadataBearer {
    name: "InvalidPortRangeException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidPortRangeException {
    function isa(o: any): o is InvalidPortRangeException;
}
export declare enum IpAddressType {
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
export declare namespace IpSet {
    function isa(o: any): o is IpSet;
}
/**
 * <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
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
export declare namespace ListAcceleratorsRequest {
    function isa(o: any): o is ListAcceleratorsRequest;
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
export declare namespace ListAcceleratorsResponse {
    function isa(o: any): o is ListAcceleratorsResponse;
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
export declare namespace ListEndpointGroupsRequest {
    function isa(o: any): o is ListEndpointGroupsRequest;
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
export declare namespace ListEndpointGroupsResponse {
    function isa(o: any): o is ListEndpointGroupsResponse;
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
export declare namespace ListListenersRequest {
    function isa(o: any): o is ListListenersRequest;
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
export declare namespace ListListenersResponse {
    function isa(o: any): o is ListListenersResponse;
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
export declare namespace Listener {
    function isa(o: any): o is Listener;
}
/**
 * <p>The listener that you specified doesn't exist.</p>
 */
export interface ListenerNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ListenerNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ListenerNotFoundException {
    function isa(o: any): o is ListenerNotFoundException;
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
export declare namespace PortRange {
    function isa(o: any): o is PortRange;
}
export declare enum Protocol {
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
export declare namespace UpdateAcceleratorAttributesRequest {
    function isa(o: any): o is UpdateAcceleratorAttributesRequest;
}
export interface UpdateAcceleratorAttributesResponse {
    __type?: "UpdateAcceleratorAttributesResponse";
    /**
     * <p>Updated attributes for the accelerator.</p>
     */
    AcceleratorAttributes?: AcceleratorAttributes;
}
export declare namespace UpdateAcceleratorAttributesResponse {
    function isa(o: any): o is UpdateAcceleratorAttributesResponse;
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
export declare namespace UpdateAcceleratorRequest {
    function isa(o: any): o is UpdateAcceleratorRequest;
}
export interface UpdateAcceleratorResponse {
    __type?: "UpdateAcceleratorResponse";
    /**
     * <p>Information about the updated accelerator.</p>
     */
    Accelerator?: Accelerator;
}
export declare namespace UpdateAcceleratorResponse {
    function isa(o: any): o is UpdateAcceleratorResponse;
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
export declare namespace UpdateEndpointGroupRequest {
    function isa(o: any): o is UpdateEndpointGroupRequest;
}
export interface UpdateEndpointGroupResponse {
    __type?: "UpdateEndpointGroupResponse";
    /**
     * <p>The information about the endpoint group that was updated.</p>
     */
    EndpointGroup?: EndpointGroup;
}
export declare namespace UpdateEndpointGroupResponse {
    function isa(o: any): o is UpdateEndpointGroupResponse;
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
export declare namespace UpdateListenerRequest {
    function isa(o: any): o is UpdateListenerRequest;
}
export interface UpdateListenerResponse {
    __type?: "UpdateListenerResponse";
    /**
     * <p>Information for the updated listener.</p>
     */
    Listener?: Listener;
}
export declare namespace UpdateListenerResponse {
    function isa(o: any): o is UpdateListenerResponse;
}
