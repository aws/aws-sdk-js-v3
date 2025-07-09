// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRouteTableRequest, CreateRouteTableResult } from "../models/models_2";
import { de_CreateRouteTableCommand, se_CreateRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRouteTableCommand}.
 */
export interface CreateRouteTableCommandInput extends CreateRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouteTableCommand}.
 */
export interface CreateRouteTableCommandOutput extends CreateRouteTableResult, __MetadataBearer {}

/**
 * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateRouteTableRequest
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new CreateRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouteTableResult
 * //   RouteTable: { // RouteTable
 * //     Associations: [ // RouteTableAssociationList
 * //       { // RouteTableAssociation
 * //         Main: true || false,
 * //         RouteTableAssociationId: "STRING_VALUE",
 * //         RouteTableId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //         GatewayId: "STRING_VALUE",
 * //         AssociationState: { // RouteTableAssociationState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     PropagatingVgws: [ // PropagatingVgwList
 * //       { // PropagatingVgw
 * //         GatewayId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RouteTableId: "STRING_VALUE",
 * //     Routes: [ // RouteList
 * //       { // Route
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         DestinationIpv6CidrBlock: "STRING_VALUE",
 * //         DestinationPrefixListId: "STRING_VALUE",
 * //         EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //         GatewayId: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //         InstanceOwnerId: "STRING_VALUE",
 * //         NatGatewayId: "STRING_VALUE",
 * //         TransitGatewayId: "STRING_VALUE",
 * //         LocalGatewayId: "STRING_VALUE",
 * //         CarrierGatewayId: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         Origin: "CreateRouteTable" || "CreateRoute" || "EnableVgwRoutePropagation",
 * //         State: "active" || "blackhole",
 * //         VpcPeeringConnectionId: "STRING_VALUE",
 * //         CoreNetworkArn: "STRING_VALUE",
 * //         OdbNetworkArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRouteTableCommandInput - {@link CreateRouteTableCommandInput}
 * @returns {@link CreateRouteTableCommandOutput}
 * @see {@link CreateRouteTableCommandInput} for command's `input` shape.
 * @see {@link CreateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a route table
 * ```javascript
 * // This example creates a route table for the specified VPC.
 * const input = {
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new CreateRouteTableCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RouteTable: {
 *     Associations:     [],
 *     PropagatingVgws:     [],
 *     RouteTableId: "rtb-22574640",
 *     Routes: [
 *       {
 *         DestinationCidrBlock: "10.0.0.0/16",
 *         GatewayId: "local",
 *         State: "active"
 *       }
 *     ],
 *     Tags:     [],
 *     VpcId: "vpc-a01106c2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRouteTableCommand extends $Command
  .classBuilder<
    CreateRouteTableCommandInput,
    CreateRouteTableCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateRouteTable", {})
  .n("EC2Client", "CreateRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_CreateRouteTableCommand)
  .de(de_CreateRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRouteTableRequest;
      output: CreateRouteTableResult;
    };
    sdk: {
      input: CreateRouteTableCommandInput;
      output: CreateRouteTableCommandOutput;
    };
  };
}
