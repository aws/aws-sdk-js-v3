// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteServerPeerRequest, DeleteRouteServerPeerResult } from "../models/models_3";
import { de_DeleteRouteServerPeerCommand, se_DeleteRouteServerPeerCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteServerPeerCommand}.
 */
export interface DeleteRouteServerPeerCommandInput extends DeleteRouteServerPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteServerPeerCommand}.
 */
export interface DeleteRouteServerPeerCommandOutput extends DeleteRouteServerPeerResult, __MetadataBearer {}

/**
 * <p>Deletes the specified BGP peer from a route server.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteServerPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteServerPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteServerPeerRequest
 *   RouteServerPeerId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteRouteServerPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteServerPeerResult
 * //   RouteServerPeer: { // RouteServerPeer
 * //     RouteServerPeerId: "STRING_VALUE",
 * //     RouteServerEndpointId: "STRING_VALUE",
 * //     RouteServerId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted" || "failing" || "failed",
 * //     FailureReason: "STRING_VALUE",
 * //     EndpointEniId: "STRING_VALUE",
 * //     EndpointEniAddress: "STRING_VALUE",
 * //     PeerAddress: "STRING_VALUE",
 * //     BgpOptions: { // RouteServerBgpOptions
 * //       PeerAsn: Number("long"),
 * //       PeerLivenessDetection: "bfd" || "bgp-keepalive",
 * //     },
 * //     BgpStatus: { // RouteServerBgpStatus
 * //       Status: "up" || "down",
 * //     },
 * //     BfdStatus: { // RouteServerBfdStatus
 * //       Status: "up" || "down",
 * //     },
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
 * @param DeleteRouteServerPeerCommandInput - {@link DeleteRouteServerPeerCommandInput}
 * @returns {@link DeleteRouteServerPeerCommandOutput}
 * @see {@link DeleteRouteServerPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteServerPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteRouteServerPeerCommand extends $Command
  .classBuilder<
    DeleteRouteServerPeerCommandInput,
    DeleteRouteServerPeerCommandOutput,
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
  .s("AmazonEC2", "DeleteRouteServerPeer", {})
  .n("EC2Client", "DeleteRouteServerPeerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteServerPeerCommand)
  .de(de_DeleteRouteServerPeerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteServerPeerRequest;
      output: DeleteRouteServerPeerResult;
    };
    sdk: {
      input: DeleteRouteServerPeerCommandInput;
      output: DeleteRouteServerPeerCommandOutput;
    };
  };
}
