import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum IpAddressType {
  IPV4 = "IPV4",
}

/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 */
export interface IpSet {
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
}

export type AcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";

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
   * <p>The value for the address type must be IPv4.
   * 			</p>
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
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IP addresses. </p>
   * 		       <p>The naming convention for the DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   * 		       <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">
   * 			Support for DNS Addressing in Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
}

export namespace Accelerator {
  export const filterSensitiveLog = (obj: Accelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of an accelerator.</p>
 */
export interface AcceleratorAttributes {
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
   * 				<code>FlowLogsEnabled</code> is <code>true</code>.</p>
   * 		       <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 		       <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

export namespace AcceleratorAttributes {
  export const filterSensitiveLog = (obj: AcceleratorAttributes): any => ({
    ...obj,
  });
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
}

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

export namespace CustomRoutingEndpointConfiguration {
  export const filterSensitiveLog = (obj: CustomRoutingEndpointConfiguration): any => ({
    ...obj,
  });
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

export namespace AddCustomRoutingEndpointsRequest {
  export const filterSensitiveLog = (obj: AddCustomRoutingEndpointsRequest): any => ({
    ...obj,
  });
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

export namespace CustomRoutingEndpointDescription {
  export const filterSensitiveLog = (obj: CustomRoutingEndpointDescription): any => ({
    ...obj,
  });
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

export namespace AddCustomRoutingEndpointsResponse {
  export const filterSensitiveLog = (obj: AddCustomRoutingEndpointsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can't use both of those options.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint that you specified doesn't exist.</p>
 */
export interface EndpointAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "EndpointAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointAlreadyExistsException {
  export const filterSensitiveLog = (obj: EndpointAlreadyExistsException): any => ({
    ...obj,
  });
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
}

export interface AdvertiseByoipCidrRequest {
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
}

/**
 * <p>A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes
 * 			that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP
 * 			address (BYOIP).</p>
 */
export interface ByoipCidrEvent {
  /**
   * <p>A string that contains an <code>Event</code> message describing changes that you make in the status
   * 			of an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP).</p>
   */
  Message?: string;

  /**
   * <p>A timestamp when you make a status change for an IP address range that you bring to AWS Global Accelerator through
   * 			bring your own IP address (BYOIP).</p>
   */
  Timestamp?: Date;
}

export namespace ByoipCidrEvent {
  export const filterSensitiveLog = (obj: ByoipCidrEvent): any => ({
    ...obj,
  });
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
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;

  /**
   * <p>A history of status changes for an IP address range that you bring to AWS Global Accelerator
   * 			through bring your own IP address (BYOIP).</p>
   */
  Events?: ByoipCidrEvent[];
}

export namespace ByoipCidr {
  export const filterSensitiveLog = (obj: ByoipCidr): any => ({
    ...obj,
  });
}

export interface AdvertiseByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace AdvertiseByoipCidrResponse {
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrResponse): any => ({
    ...obj,
  });
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
}

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

export namespace AllowCustomRoutingTrafficRequest {
  export const filterSensitiveLog = (obj: AllowCustomRoutingTrafficRequest): any => ({
    ...obj,
  });
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
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS
 * 			account using bring your own IP addresses (BYOIP). </p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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

export namespace CidrAuthorizationContext {
  export const filterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
    ...obj,
  });
}

export type ClientAffinity = "NONE" | "SOURCE_IP";

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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateAcceleratorRequest {
  /**
   * <p>The name of an accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value for the address type must be IPv4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose IP addresses
   * 			from your own pool to use for the accelerator's static IP addresses when you create an accelerator. You can
   * 			specify one or two addresses, separated by a comma. Do not include the /32 suffix.</p>
   * 		       <p>Only one IP address from each of your IP address ranges can be used for each accelerator. If you specify only
   * 			one IP address from your IP address range, Global Accelerator assigns a second static IP address for the
   * 			accelerator from the AWS IP address pool.</p>
   * 		       <p> Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new
   * 			accelerator with the new addresses.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAcceleratorRequest {
  export const filterSensitiveLog = (obj: CreateAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface CreateAcceleratorResponse {
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   */
  Accelerator?: Accelerator;
}

export namespace CreateAcceleratorResponse {
  export const filterSensitiveLog = (obj: CreateAcceleratorResponse): any => ({
    ...obj,
  });
}

export interface CreateCustomRoutingAcceleratorRequest {
  /**
   * <p>The name of a custom routing accelerator. The name can have a maximum of 64 characters, must contain
   * 		only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value for the address type must be IPv4.</p>
   */
  IpAddressType?: IpAddressType | string;

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
   * 		in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCustomRoutingAcceleratorRequest {
  export const filterSensitiveLog = (obj: CreateCustomRoutingAcceleratorRequest): any => ({
    ...obj,
  });
}

export type CustomRoutingAcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";

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
   * <p>The value for the address type must be IPv4.</p>
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
   * <p>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IP addresses. </p>
   * 		       <p>The naming convention for the DNS name is the following: A lowercase letter a,
   * 			followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example:
   * 			a1234567890abcdef.awsglobalaccelerator.com.</p>
   * 		       <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing">
   * 			Support for DNS Addressing in Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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

export namespace CustomRoutingAccelerator {
  export const filterSensitiveLog = (obj: CustomRoutingAccelerator): any => ({
    ...obj,
  });
}

export interface CreateCustomRoutingAcceleratorResponse {
  /**
   * <p>The accelerator that is created.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export namespace CreateCustomRoutingAcceleratorResponse {
  export const filterSensitiveLog = (obj: CreateCustomRoutingAcceleratorResponse): any => ({
    ...obj,
  });
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

export namespace CustomRoutingDestinationConfiguration {
  export const filterSensitiveLog = (obj: CustomRoutingDestinationConfiguration): any => ({
    ...obj,
  });
}

export interface CreateCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The AWS Region where the endpoint group is located. A listener can have only one endpoint group in a
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

export namespace CreateCustomRoutingEndpointGroupRequest {
  export const filterSensitiveLog = (obj: CreateCustomRoutingEndpointGroupRequest): any => ({
    ...obj,
  });
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

export namespace CustomRoutingDestinationDescription {
  export const filterSensitiveLog = (obj: CustomRoutingDestinationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface CustomRoutingEndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The AWS Region where the endpoint group is located.</p>
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

export namespace CustomRoutingEndpointGroup {
  export const filterSensitiveLog = (obj: CustomRoutingEndpointGroup): any => ({
    ...obj,
  });
}

export interface CreateCustomRoutingEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group created for a custom routing accelerator.</p>
   */
  EndpointGroup?: CustomRoutingEndpointGroup;
}

export namespace CreateCustomRoutingEndpointGroupResponse {
  export const filterSensitiveLog = (obj: CreateCustomRoutingEndpointGroupResponse): any => ({
    ...obj,
  });
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

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
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

export namespace CreateCustomRoutingListenerRequest {
  export const filterSensitiveLog = (obj: CreateCustomRoutingListenerRequest): any => ({
    ...obj,
  });
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

export namespace CustomRoutingListener {
  export const filterSensitiveLog = (obj: CustomRoutingListener): any => ({
    ...obj,
  });
}

export interface CreateCustomRoutingListenerResponse {
  /**
   * <p>The listener that you've created for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export namespace CreateCustomRoutingListenerResponse {
  export const filterSensitiveLog = (obj: CreateCustomRoutingListenerResponse): any => ({
    ...obj,
  });
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
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  Weight?: number;

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
 * 			Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 */
export interface PortOverride {
  /**
   * <p>The listener port that you want to map to a specific endpoint port. This is the port that user traffic
   * 		arrives to the Global Accelerator on.</p>
   */
  ListenerPort?: number;

  /**
   * <p>The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint,
   * 			such as the Application Load Balancer or Amazon EC2 instance.</p>
   */
  EndpointPort?: number;
}

export namespace PortOverride {
  export const filterSensitiveLog = (obj: PortOverride): any => ({
    ...obj,
  });
}

export interface CreateEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The AWS Region where the endpoint group is located. A listener can have only one endpoint group in a
   * 			specific Region.</p>
   */
  EndpointGroupRegion: string | undefined;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?: EndpointConfiguration[];

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

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
   * 			Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  PortOverrides?: PortOverride[];
}

export namespace CreateEndpointGroupRequest {
  export const filterSensitiveLog = (obj: CreateEndpointGroupRequest): any => ({
    ...obj,
  });
}

export type HealthState = "HEALTHY" | "INITIAL" | "UNHEALTHY";

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
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic
   * 			based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The
   * 			result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second
   * 			and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the
   * 				<i>AWS Global Accelerator Developer Guide</i>. </p>
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
   * <p>Indicates whether client IP address preservation is enabled for an Application Load Balancer endpoint.
   * 			The value is true or false. The default value is true for new accelerators. </p>
   * 		       <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as
   * 			traffic travels to applications on the Application Load Balancer endpoint fronted by the accelerator.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works-client-ip.html">
   * 			Viewing Client IP Addresses in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  ClientIPPreservationEnabled?: boolean;
}

export namespace EndpointDescription {
  export const filterSensitiveLog = (obj: EndpointDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
 * 		</p>
 */
export interface EndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The AWS Region where the endpoint group is located.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: EndpointDescription[];

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
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
   * 			list, Global Accelerator uses the first specified port in the list of ports.</p>
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
   * 			Using a port override lets you to map a list of external destination ports (that your
   * 			users send traffic to) to a list of internal destination ports that you want an application
   * 			endpoint to receive traffic on. </p>
   */
  PortOverrides?: PortOverride[];
}

export namespace EndpointGroup {
  export const filterSensitiveLog = (obj: EndpointGroup): any => ({
    ...obj,
  });
}

export interface CreateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was created.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace CreateEndpointGroupResponse {
  export const filterSensitiveLog = (obj: CreateEndpointGroupResponse): any => ({
    ...obj,
  });
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
  IdempotencyToken?: string;
}

export namespace CreateListenerRequest {
  export const filterSensitiveLog = (obj: CreateListenerRequest): any => ({
    ...obj,
  });
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
}

export namespace Listener {
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj,
  });
}

export interface CreateListenerResponse {
  /**
   * <p>The listener that you've created.</p>
   */
  Listener?: Listener;
}

export namespace CreateListenerResponse {
  export const filterSensitiveLog = (obj: CreateListenerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of a custom routing accelerator.</p>
 */
export interface CustomRoutingAcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true,
   * 			<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 			<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
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

export namespace CustomRoutingAcceleratorAttributes {
  export const filterSensitiveLog = (obj: CustomRoutingAcceleratorAttributes): any => ({
    ...obj,
  });
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

export namespace DeleteAcceleratorRequest {
  export const filterSensitiveLog = (obj: DeleteAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to delete.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DeleteCustomRoutingAcceleratorRequest {
  export const filterSensitiveLog = (obj: DeleteCustomRoutingAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DeleteCustomRoutingEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DeleteCustomRoutingEndpointGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to delete.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteCustomRoutingListenerRequest {
  export const filterSensitiveLog = (obj: DeleteCustomRoutingListenerRequest): any => ({
    ...obj,
  });
}

export interface DeleteEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to delete.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DeleteEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DeleteEndpointGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteListenerRequest {
  export const filterSensitiveLog = (obj: DeleteListenerRequest): any => ({
    ...obj,
  });
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

export namespace DenyCustomRoutingTrafficRequest {
  export const filterSensitiveLog = (obj: DenyCustomRoutingTrafficRequest): any => ({
    ...obj,
  });
}

export interface DeprovisionByoipCidrRequest {
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
}

export interface DeprovisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace DeprovisionByoipCidrResponse {
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrResponse): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorResponse {
  /**
   * <p>The description of the accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace DescribeAcceleratorResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorResponse): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: DescribeAcceleratorAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace DescribeAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: DescribeAcceleratorAttributesResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to describe.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeCustomRoutingAcceleratorRequest {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingAcceleratorResponse {
  /**
   * <p>The description of the custom routing accelerator.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export namespace DescribeCustomRoutingAcceleratorResponse {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingAcceleratorResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to describe the attributes for.</p>
   */
  AcceleratorArn: string | undefined;
}

export namespace DescribeCustomRoutingAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingAcceleratorAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>The attributes of the custom routing accelerator.</p>
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

export namespace DescribeCustomRoutingAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingAcceleratorAttributesResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DescribeCustomRoutingEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingEndpointGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group for a custom routing accelerator.</p>
   */
  EndpointGroup?: CustomRoutingEndpointGroup;
}

export namespace DescribeCustomRoutingEndpointGroupResponse {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingEndpointGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DescribeCustomRoutingListenerRequest {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingListenerRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomRoutingListenerResponse {
  /**
   * <p>The description of a listener for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export namespace DescribeCustomRoutingListenerResponse {
  export const filterSensitiveLog = (obj: DescribeCustomRoutingListenerResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group to describe.</p>
   */
  EndpointGroupArn: string | undefined;
}

export namespace DescribeEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeEndpointGroupResponse {
  /**
   * <p>The description of an endpoint group.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace DescribeEndpointGroupResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeListenerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener to describe.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DescribeListenerRequest {
  export const filterSensitiveLog = (obj: DescribeListenerRequest): any => ({
    ...obj,
  });
}

export interface DescribeListenerResponse {
  /**
   * <p>The description of a listener.</p>
   */
  Listener?: Listener;
}

export namespace DescribeListenerResponse {
  export const filterSensitiveLog = (obj: DescribeListenerResponse): any => ({
    ...obj,
  });
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

export namespace SocketAddress {
  export const filterSensitiveLog = (obj: SocketAddress): any => ({
    ...obj,
  });
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
   * <p>The AWS Region for the endpoint group.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The endpoint IP address/port combination for traffic received on the accelerator socket address.</p>
   */
  DestinationSocketAddress?: SocketAddress;

  /**
   * <p>The IP address type, which must be IPv4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if
   * 			traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.</p>
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | string;
}

export namespace DestinationPortMapping {
  export const filterSensitiveLog = (obj: DestinationPortMapping): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint that you specified doesn't exist.</p>
 */
export interface EndpointNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EndpointNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EndpointNotFoundException {
  export const filterSensitiveLog = (obj: EndpointNotFoundException): any => ({
    ...obj,
  });
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

export namespace ListAcceleratorsRequest {
  export const filterSensitiveLog = (obj: ListAcceleratorsRequest): any => ({
    ...obj,
  });
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

export namespace ListAcceleratorsResponse {
  export const filterSensitiveLog = (obj: ListAcceleratorsResponse): any => ({
    ...obj,
  });
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

export namespace ListByoipCidrsRequest {
  export const filterSensitiveLog = (obj: ListByoipCidrsRequest): any => ({
    ...obj,
  });
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

export namespace ListByoipCidrsResponse {
  export const filterSensitiveLog = (obj: ListByoipCidrsResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingAcceleratorsRequest {
  export const filterSensitiveLog = (obj: ListCustomRoutingAcceleratorsRequest): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingAcceleratorsResponse {
  export const filterSensitiveLog = (obj: ListCustomRoutingAcceleratorsResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingEndpointGroupsRequest {
  export const filterSensitiveLog = (obj: ListCustomRoutingEndpointGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingEndpointGroupsResponse {
  export const filterSensitiveLog = (obj: ListCustomRoutingEndpointGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingListenersRequest {
  export const filterSensitiveLog = (obj: ListCustomRoutingListenersRequest): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingListenersResponse {
  export const filterSensitiveLog = (obj: ListCustomRoutingListenersResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingPortMappingsRequest {
  export const filterSensitiveLog = (obj: ListCustomRoutingPortMappingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual
 * 			private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that
 * 			statically associates port ranges with VPC subnets, which allows Global Accelerator to route to
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

export namespace PortMapping {
  export const filterSensitiveLog = (obj: PortMapping): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingPortMappingsResponse {
  export const filterSensitiveLog = (obj: ListCustomRoutingPortMappingsResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingPortMappingsByDestinationRequest {
  export const filterSensitiveLog = (obj: ListCustomRoutingPortMappingsByDestinationRequest): any => ({
    ...obj,
  });
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

export namespace ListCustomRoutingPortMappingsByDestinationResponse {
  export const filterSensitiveLog = (obj: ListCustomRoutingPortMappingsByDestinationResponse): any => ({
    ...obj,
  });
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

export namespace ListEndpointGroupsRequest {
  export const filterSensitiveLog = (obj: ListEndpointGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListEndpointGroupsResponse {
  export const filterSensitiveLog = (obj: ListEndpointGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListListenersRequest {
  export const filterSensitiveLog = (obj: ListListenersRequest): any => ({
    ...obj,
  });
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

export namespace ListListenersResponse {
  export const filterSensitiveLog = (obj: ListListenersResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Root level tag for the Tags parameters.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ProvisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface ProvisionByoipCidrResponse {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace ProvisionByoipCidrResponse {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrResponse): any => ({
    ...obj,
  });
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

export namespace RemoveCustomRoutingEndpointsRequest {
  export const filterSensitiveLog = (obj: RemoveCustomRoutingEndpointsRequest): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key pairs that you want to remove from the specified resources.</p>
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

export interface UpdateAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 			hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The IP address type, which must be IPv4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 		       <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateAcceleratorRequest {
  export const filterSensitiveLog = (obj: UpdateAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface UpdateAcceleratorResponse {
  /**
   * <p>Information about the updated accelerator.</p>
   */
  Accelerator?: Accelerator;
}

export namespace UpdateAcceleratorResponse {
  export const filterSensitiveLog = (obj: UpdateAcceleratorResponse): any => ({
    ...obj,
  });
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
   * 				<code>FlowLogsEnabled</code> is <code>true</code>. </p>
   * 		       <p>If you don’t specify a prefix, the flow logs are stored in the
   * 			root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p>
   * 			      <p>s3-bucket_name//AWSLogs/aws_account_id</p>
   */
  FlowLogsS3Prefix?: string;
}

export namespace UpdateAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: UpdateAcceleratorAttributesRequest): any => ({
    ...obj,
  });
}

export interface UpdateAcceleratorAttributesResponse {
  /**
   * <p>Updated attributes for the accelerator.</p>
   */
  AcceleratorAttributes?: AcceleratorAttributes;
}

export namespace UpdateAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: UpdateAcceleratorAttributesResponse): any => ({
    ...obj,
  });
}

export interface UpdateCustomRoutingAcceleratorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or
   * 		hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The value for the address type must be IPv4.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p>
   * 	        <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateCustomRoutingAcceleratorRequest {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingAcceleratorRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomRoutingAcceleratorResponse {
  /**
   * <p>Information about the updated custom routing accelerator.</p>
   */
  Accelerator?: CustomRoutingAccelerator;
}

export namespace UpdateCustomRoutingAcceleratorResponse {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingAcceleratorResponse): any => ({
    ...obj,
  });
}

export interface UpdateCustomRoutingAcceleratorAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom routing accelerator to update attributes for.</p>
   */
  AcceleratorArn: string | undefined;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true,
   * 		<code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p>
   * 	        <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in
   * 		the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is
   * 		<code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the
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

export namespace UpdateCustomRoutingAcceleratorAttributesRequest {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingAcceleratorAttributesRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomRoutingAcceleratorAttributesResponse {
  /**
   * <p>Updated custom routing accelerator.</p>
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

export namespace UpdateCustomRoutingAcceleratorAttributesResponse {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingAcceleratorAttributesResponse): any => ({
    ...obj,
  });
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

export namespace UpdateCustomRoutingListenerRequest {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingListenerRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomRoutingListenerResponse {
  /**
   * <p>Information for the updated listener for a custom routing accelerator.</p>
   */
  Listener?: CustomRoutingListener;
}

export namespace UpdateCustomRoutingListenerResponse {
  export const filterSensitiveLog = (obj: UpdateCustomRoutingListenerResponse): any => ({
    ...obj,
  });
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
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for
   * 			this listener. </p>
   * 		       <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is
   * 			applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p>
   * 		       <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

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
   * 			Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  PortOverrides?: PortOverride[];
}

export namespace UpdateEndpointGroupRequest {
  export const filterSensitiveLog = (obj: UpdateEndpointGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateEndpointGroupResponse {
  /**
   * <p>The information about the endpoint group that was updated.</p>
   */
  EndpointGroup?: EndpointGroup;
}

export namespace UpdateEndpointGroupResponse {
  export const filterSensitiveLog = (obj: UpdateEndpointGroupResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateListenerRequest {
  export const filterSensitiveLog = (obj: UpdateListenerRequest): any => ({
    ...obj,
  });
}

export interface UpdateListenerResponse {
  /**
   * <p>Information for the updated listener.</p>
   */
  Listener?: Listener;
}

export namespace UpdateListenerResponse {
  export const filterSensitiveLog = (obj: UpdateListenerResponse): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;
}

export namespace WithdrawByoipCidrRequest {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrResponse {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace WithdrawByoipCidrResponse {
  export const filterSensitiveLog = (obj: WithdrawByoipCidrResponse): any => ({
    ...obj,
  });
}
