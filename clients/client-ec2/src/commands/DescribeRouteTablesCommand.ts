// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteTablesRequest, DescribeRouteTablesResult } from "../models/models_4";
import { de_DescribeRouteTablesCommand, se_DescribeRouteTablesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteTablesCommand}.
 */
export interface DescribeRouteTablesCommandInput extends DescribeRouteTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteTablesCommand}.
 */
export interface DescribeRouteTablesCommandOutput extends DescribeRouteTablesResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your route tables.</p>
 *          <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeRouteTablesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   RouteTableIds: [ // RouteTableIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRouteTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteTablesResult
 * //   RouteTables: [ // RouteTableList
 * //     { // RouteTable
 * //       Associations: [ // RouteTableAssociationList
 * //         { // RouteTableAssociation
 * //           Main: true || false,
 * //           RouteTableAssociationId: "STRING_VALUE",
 * //           RouteTableId: "STRING_VALUE",
 * //           SubnetId: "STRING_VALUE",
 * //           GatewayId: "STRING_VALUE",
 * //           AssociationState: { // RouteTableAssociationState
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       PropagatingVgws: [ // PropagatingVgwList
 * //         { // PropagatingVgw
 * //           GatewayId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RouteTableId: "STRING_VALUE",
 * //       Routes: [ // RouteList
 * //         { // Route
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           DestinationIpv6CidrBlock: "STRING_VALUE",
 * //           DestinationPrefixListId: "STRING_VALUE",
 * //           EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //           GatewayId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           InstanceOwnerId: "STRING_VALUE",
 * //           NatGatewayId: "STRING_VALUE",
 * //           TransitGatewayId: "STRING_VALUE",
 * //           LocalGatewayId: "STRING_VALUE",
 * //           CarrierGatewayId: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           Origin: "CreateRouteTable" || "CreateRoute" || "EnableVgwRoutePropagation",
 * //           State: "active" || "blackhole",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //           CoreNetworkArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouteTablesCommandInput - {@link DescribeRouteTablesCommandInput}
 * @returns {@link DescribeRouteTablesCommandOutput}
 * @see {@link DescribeRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a route table
 * ```javascript
 * // This example describes the specified route table.
 * const input = {
 *   "RouteTableIds": [
 *     "rtb-1f382e7d"
 *   ]
 * };
 * const command = new DescribeRouteTablesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RouteTables": [
 *     {
 *       "Associations": [
 *         {
 *           "Main": true,
 *           "RouteTableAssociationId": "rtbassoc-d8ccddba",
 *           "RouteTableId": "rtb-1f382e7d"
 *         }
 *       ],
 *       "PropagatingVgws": [],
 *       "RouteTableId": "rtb-1f382e7d",
 *       "Routes": [
 *         {
 *           "DestinationCidrBlock": "10.0.0.0/16",
 *           "GatewayId": "local",
 *           "State": "active"
 *         }
 *       ],
 *       "Tags": [],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-route-tables-1
 * ```
 *
 */
export class DescribeRouteTablesCommand extends $Command
  .classBuilder<
    DescribeRouteTablesCommandInput,
    DescribeRouteTablesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeRouteTables", {})
  .n("EC2Client", "DescribeRouteTablesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRouteTablesCommand)
  .de(de_DescribeRouteTablesCommand)
  .build() {}
