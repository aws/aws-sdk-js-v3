// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRouteServerPeersRequest, DescribeRouteServerPeersResult } from "../models/models_5";
import { de_DescribeRouteServerPeersCommand, se_DescribeRouteServerPeersCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteServerPeersCommand}.
 */
export interface DescribeRouteServerPeersCommandInput extends DescribeRouteServerPeersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteServerPeersCommand}.
 */
export interface DescribeRouteServerPeersCommandOutput extends DescribeRouteServerPeersResult, __MetadataBearer {}

/**
 * <p>Describes one or more route server peers.</p>
 *          <p>A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Have an elastic network interface in the VPC</p>
 *             </li>
 *             <li>
 *                <p>Support BGP (Border Gateway Protocol)</p>
 *             </li>
 *             <li>
 *                <p>Can initiate BGP sessions</p>
 *             </li>
 *          </ul>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteServerPeersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteServerPeersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeRouteServerPeersRequest
 *   RouteServerPeerIds: [ // RouteServerPeerIdsList
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
 * const command = new DescribeRouteServerPeersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteServerPeersResult
 * //   RouteServerPeers: [ // RouteServerPeersList
 * //     { // RouteServerPeer
 * //       RouteServerPeerId: "STRING_VALUE",
 * //       RouteServerEndpointId: "STRING_VALUE",
 * //       RouteServerId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted" || "failing" || "failed",
 * //       FailureReason: "STRING_VALUE",
 * //       EndpointEniId: "STRING_VALUE",
 * //       EndpointEniAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       BgpOptions: { // RouteServerBgpOptions
 * //         PeerAsn: Number("long"),
 * //         PeerLivenessDetection: "bfd" || "bgp-keepalive",
 * //       },
 * //       BgpStatus: { // RouteServerBgpStatus
 * //         Status: "up" || "down",
 * //       },
 * //       BfdStatus: { // RouteServerBfdStatus
 * //         Status: "up" || "down",
 * //       },
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
 * @param DescribeRouteServerPeersCommandInput - {@link DescribeRouteServerPeersCommandInput}
 * @returns {@link DescribeRouteServerPeersCommandOutput}
 * @see {@link DescribeRouteServerPeersCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteServerPeersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeRouteServerPeersCommand extends $Command
  .classBuilder<
    DescribeRouteServerPeersCommandInput,
    DescribeRouteServerPeersCommandOutput,
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
  .s("AmazonEC2", "DescribeRouteServerPeers", {})
  .n("EC2Client", "DescribeRouteServerPeersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRouteServerPeersCommand)
  .de(de_DescribeRouteServerPeersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRouteServerPeersRequest;
      output: DescribeRouteServerPeersResult;
    };
    sdk: {
      input: DescribeRouteServerPeersCommandInput;
      output: DescribeRouteServerPeersCommandOutput;
    };
  };
}
