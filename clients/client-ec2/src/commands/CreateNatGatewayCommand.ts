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
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_1";
import { de_CreateNatGatewayCommand, se_CreateNatGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandInput extends CreateNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandOutput extends CreateNatGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a NAT gateway in the specified subnet. This action creates a network interface
 *           in the specified subnet with a private IP address from the IP address range of the
 *           subnet. You can create either a public NAT gateway or a private NAT gateway.</p>
 *          <p>With a public NAT gateway, internet-bound traffic from a private subnet can be routed
 *           to the NAT gateway, so that instances in a private subnet can connect to the internet.</p>
 *          <p>With a private NAT gateway, private communication is routed across VPCs and on-premises
 *             networks through a transit gateway or virtual private gateway. Common use cases include
 *             running large workloads behind a small pool of allowlisted IPv4 addresses, preserving
 *             private IPv4 addresses, and communicating between overlapping networks.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT gateways</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNatGatewayRequest
 *   AllocationId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
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
 *   ConnectivityType: "private" || "public",
 *   PrivateIpAddress: "STRING_VALUE",
 *   SecondaryAllocationIds: [ // AllocationIdList
 *     "STRING_VALUE",
 *   ],
 *   SecondaryPrivateIpAddresses: [ // IpList
 *     "STRING_VALUE",
 *   ],
 *   SecondaryPrivateIpAddressCount: Number("int"),
 * };
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateNatGatewayResult
 * //   ClientToken: "STRING_VALUE",
 * //   NatGateway: { // NatGateway
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     NatGatewayAddresses: [ // NatGatewayAddressList
 * //       { // NatGatewayAddress
 * //         AllocationId: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         PrivateIp: "STRING_VALUE",
 * //         PublicIp: "STRING_VALUE",
 * //         AssociationId: "STRING_VALUE",
 * //         IsPrimary: true || false,
 * //         FailureMessage: "STRING_VALUE",
 * //         Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //       },
 * //     ],
 * //     NatGatewayId: "STRING_VALUE",
 * //     ProvisionedBandwidth: { // ProvisionedBandwidth
 * //       ProvisionTime: new Date("TIMESTAMP"),
 * //       Provisioned: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       Requested: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     State: "pending" || "failed" || "available" || "deleting" || "deleted",
 * //     SubnetId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConnectivityType: "private" || "public",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNatGatewayCommandInput - {@link CreateNatGatewayCommandInput}
 * @returns {@link CreateNatGatewayCommandOutput}
 * @see {@link CreateNatGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a NAT gateway
 * ```javascript
 * // This example creates a NAT gateway in subnet subnet-1a2b3c4d and associates an Elastic IP address with the allocation ID eipalloc-37fc1a52 with the NAT gateway.
 * const input = {
 *   "AllocationId": "eipalloc-37fc1a52",
 *   "SubnetId": "subnet-1a2b3c4d"
 * };
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NatGateway": {
 *     "CreateTime": "2015-12-17T12:45:26.732Z",
 *     "NatGatewayAddresses": [
 *       {
 *         "AllocationId": "eipalloc-37fc1a52"
 *       }
 *     ],
 *     "NatGatewayId": "nat-08d48af2a8e83edfd",
 *     "State": "pending",
 *     "SubnetId": "subnet-1a2b3c4d",
 *     "VpcId": "vpc-1122aabb"
 *   }
 * }
 * *\/
 * // example id: ec2-create-nat-gateway-1
 * ```
 *
 */
export class CreateNatGatewayCommand extends $Command<
  CreateNatGatewayCommandInput,
  CreateNatGatewayCommandOutput,
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
  constructor(readonly input: CreateNatGatewayCommandInput) {
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
  ): Handler<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNatGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNatGatewayCommand";
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
  private serialize(input: CreateNatGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNatGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNatGatewayCommandOutput> {
    return de_CreateNatGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
