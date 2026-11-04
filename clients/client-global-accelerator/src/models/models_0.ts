// smithy-typescript generated code
import type {
  AcceleratorStatus,
  ByoipCidrState,
  ClientAffinity,
  CustomRoutingAcceleratorStatus,
  CustomRoutingDestinationTrafficState,
  CustomRoutingProtocol,
  HealthCheckProtocol,
  HealthState,
  IpAddressFamily,
  IpAddressType,
  Protocol,
} from "./enums";

/**
 * A complex type that contains a `Timestamp` value and `Message` for changes that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum of ten event messages.
 *
 * @public
 */
export interface AcceleratorEvent {
  /**
   * A string that contains an `Event` message describing changes or errors when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A timestamp for when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Detailed information for the IP addresses assigned to the Global Accelerator.
 *
 * @public
 */
export interface IpAddressDetail {
  /**
   * The static IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The network zone that the specified IP address is located on.
   *
   * @public
   */
  NetworkZone?: string | undefined;
}

/**
 * A complex type for the set of IP addresses for an accelerator.
 *
 * @public
 */
export interface IpSet {
  /**
   * IpFamily is deprecated and has been replaced by IpAddressFamily.
   *
   * @deprecated IpFamily has been replaced by IpAddressFamily.
   * @public
   */
  IpFamily?: string | undefined;

  /**
   * The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * The types of IP addresses included in this IP set.
   *
   * @public
   */
  IpAddressFamily?: IpAddressFamily | undefined;

  /**
   * The array of IP addresses in the IP address set, with detailed information about the IP addresses. An IP address set can have a maximum of two IP addresses.
   *
   * @public
   */
  IpAddressDetails?: IpAddressDetail[] | undefined;
}

/**
 * An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
 *
 * @public
 */
export interface Accelerator {
  /**
   * The Amazon Resource Name (ARN) of the accelerator.
   *
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Indicates whether the accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The static IP addresses that Global Accelerator associates with the accelerator.
   *
   * @public
   */
  IpSets?: IpSet[] | undefined;

  /**
   * The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses.
   *
   * The naming convention for the DNS name for an accelerator is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com.
   *
   * If you have a dual-stack accelerator, you also have a second DNS name, `DualStackDnsName`, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.
   *
   * For more information about the default DNS name, see [Support for DNS addressing in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Describes the deployment status of the accelerator.
   *
   * @public
   */
  Status?: AcceleratorStatus | undefined;

  /**
   * The date and time that the accelerator was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time that the accelerator was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses: two IPv4 addresses and two IPv6 addresses.
   *
   * The naming convention for the dual-stack DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example: a1234567890abcdef.dualstack.awsglobalaccelerator.com.
   *
   * Note: Global Accelerator also assigns a default DNS name, `DnsName`, to your accelerator that points just to the static IPv4 addresses.
   *
   * For more information, see [Support for DNS addressing in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  DualStackDnsName?: string | undefined;

  /**
   * A history of changes that you make to an accelerator in Global Accelerator.
   *
   * @public
   */
  Events?: AcceleratorEvent[] | undefined;
}

/**
 * Attributes of an accelerator.
 *
 * @public
 */
export interface AcceleratorAttributes {
  /**
   * Indicates whether flow logs are enabled. The default value is false. If the value is true, `FlowLogsS3Bucket` and `FlowLogsS3Prefix` must be specified.
   *
   * For more information, see [Flow logs](https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.
   *
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`.
   *
   * If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:
   *
   * s3-bucket_name//AWSLogs/aws_account_id
   *
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
 *
 * @public
 */
export interface CustomRoutingEndpointConfiguration {
  /**
   * An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cross-account attachment that specifies the endpoints (resources) that can be added to accelerators and principals that have permission to add the endpoints.
   *
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * @public
 */
export interface AddCustomRoutingEndpointsRequest {
  /**
   * The list of endpoint objects to add to a custom routing accelerator.
   *
   * @public
   */
  EndpointConfigurations: CustomRoutingEndpointConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.
 *
 * @public
 */
export interface CustomRoutingEndpointDescription {
  /**
   * An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.
   *
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * @public
 */
export interface AddCustomRoutingEndpointsResponse {
  /**
   * The endpoint objects added to the custom routing accelerator.
   *
   * @public
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;
}

/**
 * A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
 *
 * @public
 */
export interface EndpointConfiguration {
  /**
   * An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. A resource must be valid and active when you add it as an endpoint.
   *
   * For cross-account endpoints, this must be the ARN of the resource.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see [Endpoint weights](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. The default value is true for Application Load Balancer endpoints.
   *
   * If the value is set to true, the client's IP address is preserved in the `X-Forwarded-For` request header as traffic travels to applications on the endpoint fronted by the accelerator.
   *
   * Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load Balancers, Amazon EC2 instances, and Network Load Balancers with security groups. IMPORTANT: You cannot use client IP address preservation with Network Load Balancers with TLS listeners.
   *
   * For more information, see [Preserve client IP addresses in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cross-account attachment that specifies the endpoints (resources) that can be added to accelerators and principals that have permission to add the endpoints.
   *
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * @public
 */
export interface AddEndpointsRequest {
  /**
   * The list of endpoint objects.
   *
   * @public
   */
  EndpointConfigurations: EndpointConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
 *
 * @public
 */
export interface EndpointDescription {
  /**
   * An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID.
   *
   * An Application Load Balancer can be either internal or internet-facing.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see [Endpoint weights](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * The health status of the endpoint.
   *
   * @public
   */
  HealthState?: HealthState | undefined;

  /**
   * Returns a null result.
   *
   * @public
   */
  HealthReason?: string | undefined;

  /**
   * Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. The default value is true for Application Load Balancers endpoints.
   *
   * If the value is set to true, the client's IP address is preserved in the `X-Forwarded-For` request header as traffic travels to applications on the endpoint fronted by the accelerator.
   *
   * Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load Balancers, Amazon EC2 instances, and Network Load Balancers with security groups. IMPORTANT: You cannot use client IP address preservation with Network Load Balancers with TLS listeners.
   *
   * For more information, see [Preserve client IP addresses in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AddEndpointsResponse {
  /**
   * The list of endpoint objects.
   *
   * @public
   */
  EndpointDescriptions?: EndpointDescription[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * The address range, in CIDR notation. This must be the exact range that you provisioned. You can't advertise only a portion of the provisioned range.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * A complex type that contains a `Message` and a `Timestamp` value for changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).
 *
 * @public
 */
export interface ByoipCidrEvent {
  /**
   * A string that contains an `Event` message describing changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A timestamp for when you make a status change for an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Information about an IP address range that is provisioned for use with your Amazon Web Services resources through bring your own IP address (BYOIP).
 *
 * The following describes each BYOIP `State` that your IP address range can be in.
 *
 * - **PENDING_PROVISIONING** — You’ve submitted a request to provision an IP address range but it is not yet provisioned with Global Accelerator.
 * - **READY** — The address range is provisioned with Global Accelerator and can be advertised.
 * - **PENDING_ADVERTISING** — You’ve submitted a request for Global Accelerator to advertise an address range but it is not yet being advertised.
 * - **ADVERTISING** — The address range is being advertised by Global Accelerator.
 * - **PENDING_WITHDRAWING** — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by Global Accelerator.
 * - **PENDING_DEPROVISIONING** — You’ve submitted a request to deprovision an address range from Global Accelerator but it is still provisioned.
 * - **DEPROVISIONED** — The address range is deprovisioned from Global Accelerator.
 * - **FAILED_PROVISION** — The request to provision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.
 * - **FAILED_ADVERTISING** — The request for Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.
 * - **FAILED_WITHDRAW** — The request to withdraw the address range from advertising by Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.
 * - **FAILED_DEPROVISION** — The request to deprovision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.
 *
 * @public
 */
export interface ByoipCidr {
  /**
   * The address range, in CIDR notation.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The state of the address pool.
   *
   * @public
   */
  State?: ByoipCidrState | undefined;

  /**
   * A history of status changes for an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).
   *
   * @public
   */
  Events?: ByoipCidrEvent[] | undefined;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrResponse {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface AllowCustomRoutingTrafficRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to allow to receive traffic. The IP addresses must be a subset of the IP addresses that you specified for the endpoint group.
   *
   * `DestinationAddresses` is required if `AllowAllTrafficToEndpoint` is `FALSE` or is not specified.
   *
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * A list of specific Amazon EC2 instance ports (destination ports) that you want to allow to receive traffic.
   *
   * @public
   */
  DestinationPorts?: number[] | undefined;

  /**
   * Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint can receive traffic from a custom routing accelerator. The value is TRUE or FALSE.
   *
   * When set to TRUE, *all* destinations in the custom routing VPC subnet can receive traffic. Note that you cannot specify destination IP addresses and ports when the value is set to TRUE.
   *
   * When set to FALSE (or not specified), you *must* specify a list of destination IP addresses that are allowed to receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is the same as the ports configured for the endpoint group.
   *
   * The default value is FALSE.
   *
   * @public
   */
  AllowAllTrafficToEndpoint?: boolean | undefined;
}

/**
 * A resource is one of the following: the ARN for an Amazon Web Services resource that is supported by Global Accelerator to be added as an endpoint, or a CIDR range that specifies a bring your own IP (BYOIP) address pool.
 *
 * @public
 */
export interface Resource {
  /**
   * The endpoint ID for the endpoint that is specified as a Amazon Web Services resource.
   *
   * An endpoint ID for the cross-account feature is the ARN of an Amazon Web Services resource, such as a Network Load Balancer, that Global Accelerator supports as an endpoint for an accelerator.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * An IP address range, in CIDR format, that is specified as resource. The address must be provisioned and advertised in Global Accelerator by following the bring your own IP address (BYOIP) process for Global Accelerator
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The Amazon Web Services Region where a shared endpoint resource is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * A cross-account attachment in Global Accelerator. A cross-account attachment specifies the *principals* who have permission to work with *resources* in your account, which you also list in the attachment.
 *
 * @public
 */
export interface Attachment {
  /**
   * The Amazon Resource Name (ARN) of the cross-account attachment.
   *
   * @public
   */
  AttachmentArn?: string | undefined;

  /**
   * The name of the cross-account attachment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The principals included in the cross-account attachment.
   *
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * The resources included in the cross-account attachment.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * The date and time that the cross-account attachment was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The date and time that the cross-account attachment was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP).
 *
 * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
 *
 * @public
 */
export interface CidrAuthorizationContext {
  /**
   * The plain-text authorization message for the prefix and account.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The signed authorization message for the prefix and account.
   *
   * @public
   */
  Signature: string | undefined;
}

/**
 * A complex type that contains a `Tag` key and `Tag` value.
 *
 * @public
 */
export interface Tag {
  /**
   * A string that contains a `Tag` key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A string that contains a `Tag` value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAcceleratorRequest {
  /**
   * The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address from your own pool to use for the accelerator's static IPv4 address when you create an accelerator.
   *
   * After you bring an address range to Amazon Web Services, it appears in your account as an address pool. When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is because Global Accelerator assigns each address range to a different network zone, for high availability.
   *
   * You can specify one or two addresses, separated by a space. Do not include the /32 suffix.
   *
   * Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of an accelerator.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Create tags for an accelerator.
   *
   * For more information, see [Tagging in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcceleratorResponse {
  /**
   * The accelerator that is created by specifying a listener and the supported IP address types.
   *
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAttachmentRequest {
  /**
   * The name of the cross-account attachment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The principals to include in the cross-account attachment. A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an accelerator.
   *
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the resources to include in the cross-account attachment. A resource can be any supported Amazon Web Services resource type for Global Accelerator or a CIDR range for a bring your own IP address (BYOIP) address pool.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Add tags for a cross-account attachment.
   *
   * For more information, see [Tagging in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAttachmentResponse {
  /**
   * Information about the cross-account attachment.
   *
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingAcceleratorRequest {
  /**
   * The name of a custom routing accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address from your own pool to use for the accelerator's static IPv4 address when you create an accelerator.
   *
   * After you bring an address range to Amazon Web Services, it appears in your account as an address pool. When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is because Global Accelerator assigns each address range to a different network zone, for high availability.
   *
   * You can specify one or two addresses, separated by a space. Do not include the /32 suffix.
   *
   * Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Create tags for an accelerator.
   *
   * For more information, see [Tagging in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Attributes of a custom routing accelerator.
 *
 * @public
 */
export interface CustomRoutingAccelerator {
  /**
   * The Amazon Resource Name (ARN) of the custom routing accelerator.
   *
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Indicates whether the accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The static IP addresses that Global Accelerator associates with the accelerator.
   *
   * @public
   */
  IpSets?: IpSet[] | undefined;

  /**
   * The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses.
   *
   * The naming convention for the DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com.
   *
   * If you have a dual-stack accelerator, you also have a second DNS name, `DualStackDnsName`, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.
   *
   * For more information about the default DNS name, see [Support for DNS addressing in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Describes the deployment status of the accelerator.
   *
   * @public
   */
  Status?: CustomRoutingAcceleratorStatus | undefined;

  /**
   * The date and time that the accelerator was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time that the accelerator was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingAcceleratorResponse {
  /**
   * The accelerator that is created.
   *
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
 *
 * @public
 */
export interface CustomRoutingDestinationConfiguration {
  /**
   * The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
   *
   * @public
   */
  FromPort: number | undefined;

  /**
   * The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
   *
   * @public
   */
  ToPort: number | undefined;

  /**
   * The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.
   *
   * @public
   */
  Protocols: CustomRoutingProtocol[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.
   *
   * @public
   */
  EndpointGroupRegion: string | undefined;

  /**
   * Sets the port range and protocol for all endpoints (virtual private cloud subnets) in a custom routing endpoint group to accept client traffic on.
   *
   * @public
   */
  DestinationConfigurations: CustomRoutingDestinationConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
 *
 * @public
 */
export interface CustomRoutingDestinationDescription {
  /**
   * The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 *
 * @public
 */
export interface CustomRoutingEndpointGroup {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * The Amazon Web Services Region where the endpoint group is located.
   *
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
   *
   * @public
   */
  DestinationDescriptions?: CustomRoutingDestinationDescription[] | undefined;

  /**
   * For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
   *
   * @public
   */
  EndpointDescriptions?: CustomRoutingEndpointDescription[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingEndpointGroupResponse {
  /**
   * The information about the endpoint group created for a custom routing accelerator.
   *
   * @public
   */
  EndpointGroup?: CustomRoutingEndpointGroup | undefined;
}

/**
 * A complex type for a range of ports for a listener.
 *
 * @public
 */
export interface PortRange {
  /**
   * The first port in the range of ports, inclusive.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The last port in the range of ports, inclusive.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator for a custom routing listener.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The port range to support for connections from clients to your accelerator.
   *
   * Separately, you set port ranges for endpoints. For more information, see [About endpoints for custom routing accelerators](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html).
   *
   * @public
   */
  PortRanges: PortRange[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * A complex type for a listener for a custom routing accelerator.
 *
 * @public
 */
export interface CustomRoutingListener {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * The port range to support for connections from clients to your accelerator.
   *
   * Separately, you set port ranges for endpoints. For more information, see [About endpoints for custom routing accelerators](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html).
   *
   * @public
   */
  PortRanges?: PortRange[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomRoutingListenerResponse {
  /**
   * The listener that you've created for a custom routing accelerator.
   *
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.
 *
 * For more information, see [Overriding listener ports](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html) in the *Global Accelerator Developer Guide*.
 *
 * @public
 */
export interface PortOverride {
  /**
   * The listener port that you want to map to a specific endpoint port. This is the port that user traffic arrives to the Global Accelerator on.
   *
   * @public
   */
  ListenerPort?: number | undefined;

  /**
   * The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance.
   *
   * @public
   */
  EndpointPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.
   *
   * @public
   */
  EndpointGroupRegion: string | undefined;

  /**
   * The list of endpoint objects.
   *
   * @public
   */
  EndpointConfigurations?: EndpointConfiguration[] | undefined;

  /**
   * The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener.
   *
   * Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.
   *
   * The default value is 100.
   *
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
   *
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
   *
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
   *
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.
   *
   * For more information, see [Overriding listener ports](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.
 *
 * @public
 */
export interface EndpointGroup {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * The Amazon Web Services Region where the endpoint group is located.
   *
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * The list of endpoint objects.
   *
   * @public
   */
  EndpointDescriptions?: EndpointDescription[] | undefined;

  /**
   * The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener.
   *
   * Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.
   *
   * The default value is 100.
   *
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.
   *
   * The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.
   *
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP.
   *
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/).
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
   *
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * Allows you to override the destination ports used to route traffic to an endpoint. Using a port override lets you map a list of external destination ports (that your users send traffic to) to a list of internal destination ports that you want an application endpoint to receive traffic on.
   *
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * @public
 */
export interface CreateEndpointGroupResponse {
  /**
   * The information about the endpoint group that was created.
   *
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface CreateListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of your accelerator.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The list of port ranges to support for connections from clients to your accelerator.
   *
   * @public
   */
  PortRanges: PortRange[] | undefined;

  /**
   * The protocol for connections from clients to your accelerator.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.
   *
   * Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is `NONE`, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.
   *
   * If you want a given client to always be routed to the same endpoint, set client affinity to `SOURCE_IP` instead. When you use the `SOURCE_IP` setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.
   *
   * The default value is `NONE`.
   *
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * A complex type for a listener.
 *
 * @public
 */
export interface Listener {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * The list of port ranges for the connections from clients to the accelerator.
   *
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * The protocol for the connections from clients to the accelerator.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.
   *
   * Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is `NONE`, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.
   *
   * If you want a given client to always be routed to the same endpoint, set client affinity to `SOURCE_IP` instead. When you use the `SOURCE_IP` setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.
   *
   * The default value is `NONE`.
   *
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * The listener that you've created.
   *
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * An endpoint (Amazon Web Services resource) or an IP address range, in CIDR format, that is listed in a cross-account attachment. A cross-account resource can be added to an accelerator by specified principals, which are also listed in the attachment.
 *
 * For more information, see [Working with cross-account attachments and resources in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the *Global Accelerator Developer Guide*.
 *
 * @public
 */
export interface CrossAccountResource {
  /**
   * The endpoint ID for the endpoint that is listed in a cross-account attachment and can be added to an accelerator by specified principals.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * An IP address range, in CIDR format, that is specified as an Amazon Web Services resource. The address must be provisioned and advertised in Global Accelerator by following the bring your own IP address (BYOIP) process for Global Accelerator.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cross-account attachment that specifies the resources (endpoints or CIDR range) that can be added to accelerators and principals that have permission to add them.
   *
   * @public
   */
  AttachmentArn?: string | undefined;
}

/**
 * Attributes of a custom routing accelerator.
 *
 * @public
 */
export interface CustomRoutingAcceleratorAttributes {
  /**
   * Indicates whether flow logs are enabled. The default value is false. If the value is true, `FlowLogsS3Bucket` and `FlowLogsS3Prefix` must be specified.
   *
   * For more information, see [Flow logs](https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.
   *
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`.
   *
   * If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:
   *
   * DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id
   *
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAcceleratorRequest {
  /**
   * The Amazon Resource Name (ARN) of an accelerator.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAttachmentRequest {
  /**
   * The Amazon Resource Name (ARN) for the cross-account attachment to delete.
   *
   * @public
   */
  AttachmentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingAcceleratorRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom routing accelerator to delete.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group to delete.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomRoutingListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to delete.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group to delete.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DenyCustomRoutingTrafficRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to prevent from receiving traffic. The IP addresses must be a subset of the IP addresses allowed for the VPC subnet associated with the endpoint group.
   *
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * A list of specific Amazon EC2 instance ports (destination ports) in a subnet endpoint that you want to prevent from receiving traffic.
   *
   * @public
   */
  DestinationPorts?: number[] | undefined;

  /**
   * Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint *cannot* receive traffic from a custom routing accelerator. The value is TRUE or FALSE.
   *
   * When set to TRUE, *no* destinations in the custom routing VPC subnet can receive traffic. Note that you cannot specify destination IP addresses and ports when the value is set to TRUE.
   *
   * When set to FALSE (or not specified), you *must* specify a list of destination IP addresses that cannot receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is the same as the ports configured for the endpoint group.
   *
   * The default value is FALSE.
   *
   * @public
   */
  DenyAllTrafficToEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * The address range, in CIDR notation. The prefix must be the same prefix that you specified when you provisioned the address range.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrResponse {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to describe.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorResponse {
  /**
   * The description of the accelerator.
   *
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcceleratorAttributesResponse {
  /**
   * The attributes of the accelerator.
   *
   * @public
   */
  AcceleratorAttributes?: AcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAttachmentRequest {
  /**
   * The Amazon Resource Name (ARN) for the cross-account attachment to describe.
   *
   * @public
   */
  AttachmentArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAttachmentResponse {
  /**
   * Information about the cross-account attachment.
   *
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to describe.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorResponse {
  /**
   * The description of the custom routing accelerator.
   *
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom routing accelerator to describe the attributes for.
   *
   * @public
   */
  AcceleratorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingAcceleratorAttributesResponse {
  /**
   * The attributes of the custom routing accelerator.
   *
   * @public
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group to describe.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingEndpointGroupResponse {
  /**
   * The description of an endpoint group for a custom routing accelerator.
   *
   * @public
   */
  EndpointGroup?: CustomRoutingEndpointGroup | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to describe.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomRoutingListenerResponse {
  /**
   * The description of a listener for a custom routing accelerator.
   *
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group to describe.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointGroupResponse {
  /**
   * The description of an endpoint group.
   *
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface DescribeListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to describe.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeListenerResponse {
  /**
   * The description of a listener.
   *
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * An IP address/port combination.
 *
 * @public
 */
export interface SocketAddress {
  /**
   * The IP address for the socket address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The port for the socket address.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * The port mappings for a specified endpoint IP address (destination).
 *
 * @public
 */
export interface DestinationPortMapping {
  /**
   * The Amazon Resource Name (ARN) of the custom routing accelerator that you have port mappings for.
   *
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * The IP address/port combinations (sockets) that map to a given destination socket address.
   *
   * @public
   */
  AcceleratorSocketAddresses?: SocketAddress[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * The ID for the virtual private cloud (VPC) subnet.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The Amazon Web Services Region for the endpoint group.
   *
   * @public
   */
  EndpointGroupRegion?: string | undefined;

  /**
   * The endpoint IP address/port combination for traffic received on the accelerator socket address.
   *
   * @public
   */
  DestinationSocketAddress?: SocketAddress | undefined;

  /**
   * The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.
   *
   * @public
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | undefined;
}

/**
 * A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group.
 *
 * @public
 */
export interface EndpointIdentifier {
  /**
   * An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID.
   *
   * An Application Load Balancer can be either internal or internet-facing.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false.
   *
   * If the value is set to true, the client's IP address is preserved in the `X-Forwarded-For` request header as traffic travels to applications on the endpoint fronted by the accelerator.
   *
   * @public
   */
  ClientIPPreservationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAcceleratorsRequest {
  /**
   * The number of Global Accelerator objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcceleratorsResponse {
  /**
   * The list of accelerators for a customer account.
   *
   * @public
   */
  Accelerators?: Accelerator[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListByoipCidrsRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListByoipCidrsResponse {
  /**
   * Information about your address ranges.
   *
   * @public
   */
  ByoipCidrs?: ByoipCidr[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountAttachmentsRequest {
  /**
   * The number of cross-account attachment objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountAttachmentsResponse {
  /**
   * Information about the cross-account attachments.
   *
   * @public
   */
  CrossAccountAttachments?: Attachment[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
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
   * The account IDs of principals (resource owners) in a cross-account attachment who can work with resources listed in the same attachment.
   *
   * @public
   */
  ResourceOwnerAwsAccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountResourcesRequest {
  /**
   * The Amazon Resource Name (ARN) of an accelerator in a cross-account attachment.
   *
   * @public
   */
  AcceleratorArn?: string | undefined;

  /**
   * The account ID of a resource owner in a cross-account attachment.
   *
   * @public
   */
  ResourceOwnerAwsAccountId: string | undefined;

  /**
   * The number of cross-account resource objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountResourcesResponse {
  /**
   * The cross-account resources used with an accelerator.
   *
   * @public
   */
  CrossAccountResources?: CrossAccountResource[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingAcceleratorsRequest {
  /**
   * The number of custom routing Global Accelerator objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingAcceleratorsResponse {
  /**
   * The list of custom routing accelerators for a customer account.
   *
   * @public
   */
  Accelerators?: CustomRoutingAccelerator[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingEndpointGroupsRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to list endpoint groups for.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The number of endpoint group objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingEndpointGroupsResponse {
  /**
   * The list of the endpoint groups associated with a listener for a custom routing accelerator.
   *
   * @public
   */
  EndpointGroups?: CustomRoutingEndpointGroup[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingListenersRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to list listeners for.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The number of listener objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingListenersResponse {
  /**
   * The list of listeners for a custom routing accelerator.
   *
   * @public
   */
  Listeners?: CustomRoutingListener[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to list the custom routing port mappings for.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group to list the custom routing port mappings for.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * The number of destination port mappings that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.
 *
 * @public
 */
export interface PortMapping {
  /**
   * The accelerator port.
   *
   * @public
   */
  AcceleratorPort?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn?: string | undefined;

  /**
   * The IP address of the VPC subnet (the subnet ID).
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The EC2 instance IP address and port number in the virtual private cloud (VPC) subnet.
   *
   * @public
   */
  DestinationSocketAddress?: SocketAddress | undefined;

  /**
   * The protocols supported by the endpoint group.
   *
   * @public
   */
  Protocols?: CustomRoutingProtocol[] | undefined;

  /**
   * Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.
   *
   * @public
   */
  DestinationTrafficState?: CustomRoutingDestinationTrafficState | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsResponse {
  /**
   * The port mappings for a custom routing accelerator.
   *
   * @public
   */
  PortMappings?: PortMapping[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsByDestinationRequest {
  /**
   * The ID for the virtual private cloud (VPC) subnet.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * The endpoint IP address in a virtual private cloud (VPC) subnet for which you want to receive back port mappings.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The number of destination port mappings that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomRoutingPortMappingsByDestinationResponse {
  /**
   * The port mappings for the endpoint IP address that you specified in the request.
   *
   * @public
   */
  DestinationPortMappings?: DestinationPortMapping[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointGroupsRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The number of endpoint group objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointGroupsResponse {
  /**
   * The list of the endpoint groups associated with a listener.
   *
   * @public
   */
  EndpointGroups?: EndpointGroup[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The number of listener objects that you want to return with this call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersResponse {
  /**
   * The list of listeners for an accelerator.
   *
   * @public
   */
  Listeners?: Listener[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Root level tag for the Tags parameters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * The public IPv4 address range, in CIDR notation. The most specific IP prefix that you can specify is /24. The address range cannot overlap with another address range that you've brought to this Amazon Web Services Region or another Region.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.
   *
   * @public
   */
  CidrAuthorizationContext: CidrAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResponse {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface RemoveCustomRoutingEndpointsRequest {
  /**
   * The IDs for the endpoints. For custom routing accelerators, endpoint IDs are the virtual private cloud (VPC) subnet IDs.
   *
   * @public
   */
  EndpointIds: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group to remove endpoints from.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveEndpointsRequest {
  /**
   * The identifiers of the endpoints that you want to remove.
   *
   * @public
   */
  EndpointIdentifiers: EndpointIdentifier[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Global Accelerator resource to add tags to. An ARN uniquely identifies a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to a resource. A tag consists of a key and a value that you define.
   *
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
   * The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag key pairs that you want to remove from the specified resources.
   *
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
   * The Amazon Resource Name (ARN) of the accelerator to update.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The IP addresses for an accelerator.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorResponse {
  /**
   * Information about the updated accelerator.
   *
   * @public
   */
  Accelerator?: Accelerator | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator that you want to update.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * Update whether flow logs are enabled. The default value is false. If the value is true, `FlowLogsS3Bucket` and `FlowLogsS3Prefix` must be specified.
   *
   * For more information, see [Flow Logs](https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.
   *
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`.
   *
   * If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:
   *
   * s3-bucket_name//AWSLogs/aws_account_id
   *
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAcceleratorAttributesResponse {
  /**
   * Updated attributes for the accelerator.
   *
   * @public
   */
  AcceleratorAttributes?: AcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateCrossAccountAttachmentRequest {
  /**
   * The Amazon Resource Name (ARN) of the cross-account attachment to update.
   *
   * @public
   */
  AttachmentArn: string | undefined;

  /**
   * The name of the cross-account attachment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The principals to add to the cross-account attachment. A principal is an account or the Amazon Resource Name (ARN) of an accelerator that the attachment gives permission to work with resources from another account. The resources are also listed in the attachment.
   *
   * To add more than one principal, separate the account numbers or accelerator ARNs, or both, with commas.
   *
   * @public
   */
  AddPrincipals?: string[] | undefined;

  /**
   * The principals to remove from the cross-account attachment. A principal is an account or the Amazon Resource Name (ARN) of an accelerator that the attachment gives permission to work with resources from another account. The resources are also listed in the attachment.
   *
   * To remove more than one principal, separate the account numbers or accelerator ARNs, or both, with commas.
   *
   * @public
   */
  RemovePrincipals?: string[] | undefined;

  /**
   * The resources to add to the cross-account attachment. A resource listed in a cross-account attachment can be used with an accelerator by the principals that are listed in the attachment.
   *
   * To add more than one resource, separate the resource ARNs with commas.
   *
   * @public
   */
  AddResources?: Resource[] | undefined;

  /**
   * The resources to remove from the cross-account attachment. A resource listed in a cross-account attachment can be used with an accelerator by the principals that are listed in the attachment.
   *
   * To remove more than one resource, separate the resource ARNs with commas.
   *
   * @public
   */
  RemoveResources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface UpdateCrossAccountAttachmentResponse {
  /**
   * Information about the updated cross-account attachment.
   *
   * @public
   */
  CrossAccountAttachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorRequest {
  /**
   * The Amazon Resource Name (ARN) of the accelerator to update.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The IP addresses for an accelerator.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorResponse {
  /**
   * Information about the updated custom routing accelerator.
   *
   * @public
   */
  Accelerator?: CustomRoutingAccelerator | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom routing accelerator to update attributes for.
   *
   * @public
   */
  AcceleratorArn: string | undefined;

  /**
   * Update whether flow logs are enabled. The default value is false. If the value is true, `FlowLogsS3Bucket` and `FlowLogsS3Prefix` must be specified.
   *
   * For more information, see [Flow logs](https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  FlowLogsEnabled?: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.
   *
   * @public
   */
  FlowLogsS3Bucket?: string | undefined;

  /**
   * Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if `FlowLogsEnabled` is `true`.
   *
   * If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:
   *
   * DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id
   *
   * @public
   */
  FlowLogsS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingAcceleratorAttributesResponse {
  /**
   * Updated custom routing accelerator.
   *
   * @public
   */
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to update.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The updated port range to support for connections from clients to your accelerator. If you remove ports that are currently being used by a subnet endpoint, the call fails.
   *
   * Separately, you set port ranges for endpoints. For more information, see [About endpoints for custom routing accelerators](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html).
   *
   * @public
   */
  PortRanges: PortRange[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomRoutingListenerResponse {
  /**
   * Information for the updated listener for a custom routing accelerator.
   *
   * @public
   */
  Listener?: CustomRoutingListener | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group.
   *
   * @public
   */
  EndpointGroupArn: string | undefined;

  /**
   * The list of endpoint objects. A resource must be valid and active when you add it as an endpoint.
   *
   * @public
   */
  EndpointConfigurations?: EndpointConfiguration[] | undefined;

  /**
   * The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener.
   *
   * Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.
   *
   * The default value is 100.
   *
   * @public
   */
  TrafficDialPercentage?: number | undefined;

  /**
   * The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses the first port in the list.
   *
   * @public
   */
  HealthCheckPort?: number | undefined;

  /**
   * The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
   *
   * @public
   */
  HealthCheckProtocol?: HealthCheckProtocol | undefined;

  /**
   * If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
   *
   * @public
   */
  ThresholdCount?: number | undefined;

  /**
   * Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.
   *
   * For more information, see [Overriding listener ports](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html) in the *Global Accelerator Developer Guide*.
   *
   * @public
   */
  PortOverrides?: PortOverride[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointGroupResponse {
  /**
   * The information about the endpoint group that was updated.
   *
   * @public
   */
  EndpointGroup?: EndpointGroup | undefined;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * The Amazon Resource Name (ARN) of the listener to update.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The updated list of port ranges for the connections from clients to the accelerator.
   *
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * The updated protocol for the connections from clients to the accelerator.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.
   *
   * Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is `NONE`, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.
   *
   * If you want a given client to always be routed to the same endpoint, set client affinity to `SOURCE_IP` instead. When you use the `SOURCE_IP` setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.
   *
   * The default value is `NONE`.
   *
   * @public
   */
  ClientAffinity?: ClientAffinity | undefined;
}

/**
 * @public
 */
export interface UpdateListenerResponse {
  /**
   * Information for the updated listener.
   *
   * @public
   */
  Listener?: Listener | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * The address range, in CIDR notation.
   *
   * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the Global Accelerator Developer Guide.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrResponse {
  /**
   * Information about the BYOIP address pool.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
