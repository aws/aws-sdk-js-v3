// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfaceRequest, CreateNetworkInterfaceResult } from "../models/models_1";
import { de_CreateNetworkInterfaceCommand, se_CreateNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInterfaceCommand}.
 */
export interface CreateNetworkInterfaceCommandInput extends CreateNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInterfaceCommand}.
 */
export interface CreateNetworkInterfaceCommandOutput extends CreateNetworkInterfaceResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a network interface in the specified subnet.</p>
 *          <p>The number of IP addresses you can assign to a network interface varies by instance
 *             type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per ENI Per
 *                 Instance Type</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>For more information about network interfaces, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic network interfaces</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInterfaceRequest
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   Groups: [ // SecurityGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6AddressCount: Number("int"),
 *   Ipv6Addresses: [ // InstanceIpv6AddressList
 *     { // InstanceIpv6Address
 *       Ipv6Address: "STRING_VALUE",
 *       IsPrimaryIpv6: true || false,
 *     },
 *   ],
 *   PrivateIpAddress: "STRING_VALUE",
 *   PrivateIpAddresses: [ // PrivateIpAddressSpecificationList
 *     { // PrivateIpAddressSpecification
 *       Primary: true || false,
 *       PrivateIpAddress: "STRING_VALUE",
 *     },
 *   ],
 *   SecondaryPrivateIpAddressCount: Number("int"),
 *   Ipv4Prefixes: [ // Ipv4PrefixList
 *     { // Ipv4PrefixSpecificationRequest
 *       Ipv4Prefix: "STRING_VALUE",
 *     },
 *   ],
 *   Ipv4PrefixCount: Number("int"),
 *   Ipv6Prefixes: [ // Ipv6PrefixList
 *     { // Ipv6PrefixSpecificationRequest
 *       Ipv6Prefix: "STRING_VALUE",
 *     },
 *   ],
 *   Ipv6PrefixCount: Number("int"),
 *   InterfaceType: "efa" || "branch" || "trunk",
 *   SubnetId: "STRING_VALUE", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   EnablePrimaryIpv6: true || false,
 * };
 * const command = new CreateNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInterfaceResult
 * //   NetworkInterface: { // NetworkInterface
 * //     Association: { // NetworkInterfaceAssociation
 * //       AllocationId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       IpOwnerId: "STRING_VALUE",
 * //       PublicDnsName: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       CustomerOwnedIp: "STRING_VALUE",
 * //       CarrierIp: "STRING_VALUE",
 * //     },
 * //     Attachment: { // NetworkInterfaceAttachment
 * //       AttachTime: new Date("TIMESTAMP"),
 * //       AttachmentId: "STRING_VALUE",
 * //       DeleteOnTermination: true || false,
 * //       DeviceIndex: Number("int"),
 * //       NetworkCardIndex: Number("int"),
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceOwnerId: "STRING_VALUE",
 * //       Status: "attaching" || "attached" || "detaching" || "detached",
 * //       EnaSrdSpecification: { // AttachmentEnaSrdSpecification
 * //         EnaSrdEnabled: true || false,
 * //         EnaSrdUdpSpecification: { // AttachmentEnaSrdUdpSpecification
 * //           EnaSrdUdpEnabled: true || false,
 * //         },
 * //       },
 * //     },
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Groups: [ // GroupIdentifierList
 * //       { // GroupIdentifier
 * //         GroupName: "STRING_VALUE",
 * //         GroupId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InterfaceType: "interface" || "natGateway" || "efa" || "trunk" || "load_balancer" || "network_load_balancer" || "vpc_endpoint" || "branch" || "transit_gateway" || "lambda" || "quicksight" || "global_accelerator_managed" || "api_gateway_managed" || "gateway_load_balancer" || "gateway_load_balancer_endpoint" || "iot_rules_managed" || "aws_codestar_connections_managed",
 * //     Ipv6Addresses: [ // NetworkInterfaceIpv6AddressesList
 * //       { // NetworkInterfaceIpv6Address
 * //         Ipv6Address: "STRING_VALUE",
 * //         IsPrimaryIpv6: true || false,
 * //       },
 * //     ],
 * //     MacAddress: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     PrivateDnsName: "STRING_VALUE",
 * //     PrivateIpAddress: "STRING_VALUE",
 * //     PrivateIpAddresses: [ // NetworkInterfacePrivateIpAddressList
 * //       { // NetworkInterfacePrivateIpAddress
 * //         Association: {
 * //           AllocationId: "STRING_VALUE",
 * //           AssociationId: "STRING_VALUE",
 * //           IpOwnerId: "STRING_VALUE",
 * //           PublicDnsName: "STRING_VALUE",
 * //           PublicIp: "STRING_VALUE",
 * //           CustomerOwnedIp: "STRING_VALUE",
 * //           CarrierIp: "STRING_VALUE",
 * //         },
 * //         Primary: true || false,
 * //         PrivateDnsName: "STRING_VALUE",
 * //         PrivateIpAddress: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Ipv4Prefixes: [ // Ipv4PrefixesList
 * //       { // Ipv4PrefixSpecification
 * //         Ipv4Prefix: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Ipv6Prefixes: [ // Ipv6PrefixesList
 * //       { // Ipv6PrefixSpecification
 * //         Ipv6Prefix: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RequesterId: "STRING_VALUE",
 * //     RequesterManaged: true || false,
 * //     SourceDestCheck: true || false,
 * //     Status: "available" || "associated" || "attaching" || "in-use" || "detaching",
 * //     SubnetId: "STRING_VALUE",
 * //     TagSet: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     DenyAllIgwTraffic: true || false,
 * //     Ipv6Native: true || false,
 * //     Ipv6Address: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkInterfaceCommandInput - {@link CreateNetworkInterfaceCommandInput}
 * @returns {@link CreateNetworkInterfaceCommandOutput}
 * @see {@link CreateNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a network interface
 * ```javascript
 * // This example creates a network interface for the specified subnet.
 * const input = {
 *   "Description": "my network interface",
 *   "Groups": [
 *     "sg-903004f8"
 *   ],
 *   "PrivateIpAddress": "10.0.2.17",
 *   "SubnetId": "subnet-9d4a7b6c"
 * };
 * const command = new CreateNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkInterface": {
 *     "AvailabilityZone": "us-east-1d",
 *     "Description": "my network interface",
 *     "Groups": [
 *       {
 *         "GroupId": "sg-903004f8",
 *         "GroupName": "default"
 *       }
 *     ],
 *     "MacAddress": "02:1a:80:41:52:9c",
 *     "NetworkInterfaceId": "eni-e5aa89a3",
 *     "OwnerId": "123456789012",
 *     "PrivateIpAddress": "10.0.2.17",
 *     "PrivateIpAddresses": [
 *       {
 *         "Primary": true,
 *         "PrivateIpAddress": "10.0.2.17"
 *       }
 *     ],
 *     "RequesterManaged": false,
 *     "SourceDestCheck": true,
 *     "Status": "pending",
 *     "SubnetId": "subnet-9d4a7b6c",
 *     "TagSet": [],
 *     "VpcId": "vpc-a01106c2"
 *   }
 * }
 * *\/
 * // example id: ec2-create-network-interface-1
 * ```
 *
 */
export class CreateNetworkInterfaceCommand extends $Command<
  CreateNetworkInterfaceCommandInput,
  CreateNetworkInterfaceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateNetworkInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkInterfaceCommandInput, CreateNetworkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateNetworkInterface",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateNetworkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNetworkInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkInterfaceCommandOutput> {
    return de_CreateNetworkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
