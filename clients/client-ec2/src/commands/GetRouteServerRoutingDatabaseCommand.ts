// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerRoutingDatabaseRequest, GetRouteServerRoutingDatabaseResult } from "../models/models_7";
import { de_GetRouteServerRoutingDatabaseCommand, se_GetRouteServerRoutingDatabaseCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteServerRoutingDatabaseCommand}.
 */
export interface GetRouteServerRoutingDatabaseCommandInput extends GetRouteServerRoutingDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteServerRoutingDatabaseCommand}.
 */
export interface GetRouteServerRoutingDatabaseCommandOutput
  extends GetRouteServerRoutingDatabaseResult,
    __MetadataBearer {}

/**
 * <p>Gets the routing database for the specified route server. The <a href="https://en.wikipedia.org/wiki/Routing_table">Routing Information Base (RIB)</a> serves as a database that stores all the routing information and network topology data collected by a router or routing system, such as routes learned from BGP peers. The RIB is constantly updated as new routing information is received or existing routes change. This ensures that the route server always has the most current view of the network topology and can make optimal routing decisions.</p>
 *          <p>Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature,
 * VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.</p>
 *          <p>Route server supports the follow route table types:</p>
 *          <ul>
 *             <li>
 *                <p>VPC route tables not associated with subnets</p>
 *             </li>
 *             <li>
 *                <p>Subnet route tables</p>
 *             </li>
 *             <li>
 *                <p>Internet gateway route tables</p>
 *             </li>
 *          </ul>
 *          <p>Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html">Transit Gateway Connect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetRouteServerRoutingDatabaseCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetRouteServerRoutingDatabaseCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetRouteServerRoutingDatabaseRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new GetRouteServerRoutingDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteServerRoutingDatabaseResult
 * //   AreRoutesPersisted: true || false,
 * //   Routes: [ // RouteServerRouteList
 * //     { // RouteServerRoute
 * //       RouteServerEndpointId: "STRING_VALUE",
 * //       RouteServerPeerId: "STRING_VALUE",
 * //       RouteInstallationDetails: [ // RouteServerRouteInstallationDetails
 * //         { // RouteServerRouteInstallationDetail
 * //           RouteTableId: "STRING_VALUE",
 * //           RouteInstallationStatus: "installed" || "rejected",
 * //           RouteInstallationStatusReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RouteStatus: "in-rib" || "in-fib",
 * //       Prefix: "STRING_VALUE",
 * //       AsPaths: [ // AsPath
 * //         "STRING_VALUE",
 * //       ],
 * //       Med: Number("int"),
 * //       NextHopIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRouteServerRoutingDatabaseCommandInput - {@link GetRouteServerRoutingDatabaseCommandInput}
 * @returns {@link GetRouteServerRoutingDatabaseCommandOutput}
 * @see {@link GetRouteServerRoutingDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetRouteServerRoutingDatabaseCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetRouteServerRoutingDatabaseCommand extends $Command
  .classBuilder<
    GetRouteServerRoutingDatabaseCommandInput,
    GetRouteServerRoutingDatabaseCommandOutput,
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
  .s("AmazonEC2", "GetRouteServerRoutingDatabase", {})
  .n("EC2Client", "GetRouteServerRoutingDatabaseCommand")
  .f(void 0, void 0)
  .ser(se_GetRouteServerRoutingDatabaseCommand)
  .de(de_GetRouteServerRoutingDatabaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouteServerRoutingDatabaseRequest;
      output: GetRouteServerRoutingDatabaseResult;
    };
    sdk: {
      input: GetRouteServerRoutingDatabaseCommandInput;
      output: GetRouteServerRoutingDatabaseCommandOutput;
    };
  };
}
