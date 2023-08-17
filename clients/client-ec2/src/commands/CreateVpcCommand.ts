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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcRequest, CreateVpcResult } from "../models/models_2";
import { de_CreateVpcCommand, se_CreateVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcCommand}.
 */
export interface CreateVpcCommandInput extends CreateVpcRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcCommand}.
 */
export interface CreateVpcCommandOutput extends CreateVpcResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a VPC with the specified CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html">IP addressing for your VPCs and subnets</a> in the
 *         <i>Amazon VPC User Guide</i>.</p>
 *          <p>You can optionally request an IPv6 CIDR block for the VPC. You can request an Amazon-provided
 *            IPv6 CIDR block from Amazon's pool of IPv6 addresses, or an IPv6 CIDR block from an IPv6 address
 *            pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>).</p>
 *          <p>By default, each instance that you launch in the VPC has the default DHCP options, which
 * 			include only a default DNS server that we provide (AmazonProvidedDNS). For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP option sets</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>You can specify the instance tenancy value for the VPC when you create it. You can't change
 *           this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 *           <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcRequest
 *   CidrBlock: "STRING_VALUE",
 *   AmazonProvidedIpv6CidrBlock: true || false,
 *   Ipv6Pool: "STRING_VALUE",
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   Ipv4IpamPoolId: "STRING_VALUE",
 *   Ipv4NetmaskLength: Number("int"),
 *   Ipv6IpamPoolId: "STRING_VALUE",
 *   Ipv6NetmaskLength: Number("int"),
 *   DryRun: true || false,
 *   InstanceTenancy: "default" || "dedicated" || "host",
 *   Ipv6CidrBlockNetworkBorderGroup: "STRING_VALUE",
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
 * };
 * const command = new CreateVpcCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcResult
 * //   Vpc: { // Vpc
 * //     CidrBlock: "STRING_VALUE",
 * //     DhcpOptionsId: "STRING_VALUE",
 * //     State: "pending" || "available",
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceTenancy: "default" || "dedicated" || "host",
 * //     Ipv6CidrBlockAssociationSet: [ // VpcIpv6CidrBlockAssociationSet
 * //       { // VpcIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // VpcCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         NetworkBorderGroup: "STRING_VALUE",
 * //         Ipv6Pool: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CidrBlockAssociationSet: [ // VpcCidrBlockAssociationSet
 * //       { // VpcCidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         CidrBlockState: {
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcCommandInput - {@link CreateVpcCommandInput}
 * @returns {@link CreateVpcCommandOutput}
 * @see {@link CreateVpcCommandInput} for command's `input` shape.
 * @see {@link CreateVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a VPC
 * ```javascript
 * // This example creates a VPC with the specified CIDR block.
 * const input = {
 *   "CidrBlock": "10.0.0.0/16"
 * };
 * const command = new CreateVpcCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Vpc": {
 *     "CidrBlock": "10.0.0.0/16",
 *     "DhcpOptionsId": "dopt-7a8b9c2d",
 *     "InstanceTenancy": "default",
 *     "State": "pending",
 *     "VpcId": "vpc-a01106c2"
 *   }
 * }
 * *\/
 * // example id: ec2-create-vpc-1
 * ```
 *
 */
export class CreateVpcCommand extends $Command<CreateVpcCommandInput, CreateVpcCommandOutput, EC2ClientResolvedConfig> {
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
  constructor(readonly input: CreateVpcCommandInput) {
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
  ): Handler<CreateVpcCommandInput, CreateVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVpcCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVpcCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpcCommandOutput> {
    return de_CreateVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
