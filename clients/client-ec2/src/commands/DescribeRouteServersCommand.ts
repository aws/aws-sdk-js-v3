// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteServersRequest, DescribeRouteServersResult } from "../models/models_5";
import { de_DescribeRouteServersCommand, se_DescribeRouteServersCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteServersCommand}.
 */
export interface DescribeRouteServersCommandInput extends DescribeRouteServersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteServersCommand}.
 */
export interface DescribeRouteServersCommandOutput extends DescribeRouteServersResult, __MetadataBearer {}

/**
 * <p>Describes one or more route servers.</p>
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
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteServersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteServersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeRouteServersRequest
 *   RouteServerIds: [ // RouteServerIdsList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeRouteServersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteServersResult
 * //   RouteServers: [ // RouteServersList
 * //     { // RouteServer
 * //       RouteServerId: "STRING_VALUE",
 * //       AmazonSideAsn: Number("long"),
 * //       State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PersistRoutesState: "enabling" || "enabled" || "resetting" || "disabling" || "disabled" || "modifying",
 * //       PersistRoutesDuration: Number("long"),
 * //       SnsNotificationsEnabled: true || false,
 * //       SnsTopicArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouteServersCommandInput - {@link DescribeRouteServersCommandInput}
 * @returns {@link DescribeRouteServersCommandOutput}
 * @see {@link DescribeRouteServersCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteServersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeRouteServersCommand extends $Command
  .classBuilder<
    DescribeRouteServersCommandInput,
    DescribeRouteServersCommandOutput,
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
  .s("AmazonEC2", "DescribeRouteServers", {})
  .n("EC2Client", "DescribeRouteServersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRouteServersCommand)
  .de(de_DescribeRouteServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRouteServersRequest;
      output: DescribeRouteServersResult;
    };
    sdk: {
      input: DescribeRouteServersCommandInput;
      output: DescribeRouteServersCommandOutput;
    };
  };
}
