// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteServerEndpointsRequest, DescribeRouteServerEndpointsResult } from "../models/models_5";
import { de_DescribeRouteServerEndpointsCommand, se_DescribeRouteServerEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteServerEndpointsCommand}.
 */
export interface DescribeRouteServerEndpointsCommandInput extends DescribeRouteServerEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteServerEndpointsCommand}.
 */
export interface DescribeRouteServerEndpointsCommandOutput
  extends DescribeRouteServerEndpointsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more route server endpoints.</p>
 *          <p>A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates <a href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol">BGP (Border Gateway Protocol)</a> connections between your route server and your BGP peers.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteServerEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteServerEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeRouteServerEndpointsRequest
 *   RouteServerEndpointIds: [ // RouteServerEndpointIdsList
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
 * const command = new DescribeRouteServerEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteServerEndpointsResult
 * //   RouteServerEndpoints: [ // RouteServerEndpointsList
 * //     { // RouteServerEndpoint
 * //       RouteServerId: "STRING_VALUE",
 * //       RouteServerEndpointId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       EniId: "STRING_VALUE",
 * //       EniAddress: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted" || "failing" || "failed" || "delete-failed",
 * //       FailureReason: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouteServerEndpointsCommandInput - {@link DescribeRouteServerEndpointsCommandInput}
 * @returns {@link DescribeRouteServerEndpointsCommandOutput}
 * @see {@link DescribeRouteServerEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteServerEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeRouteServerEndpointsCommand extends $Command
  .classBuilder<
    DescribeRouteServerEndpointsCommandInput,
    DescribeRouteServerEndpointsCommandOutput,
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
  .s("AmazonEC2", "DescribeRouteServerEndpoints", {})
  .n("EC2Client", "DescribeRouteServerEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRouteServerEndpointsCommand)
  .de(de_DescribeRouteServerEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRouteServerEndpointsRequest;
      output: DescribeRouteServerEndpointsResult;
    };
    sdk: {
      input: DescribeRouteServerEndpointsCommandInput;
      output: DescribeRouteServerEndpointsCommandOutput;
    };
  };
}
