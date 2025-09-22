// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayConnectPeerRequest, DeleteTransitGatewayConnectPeerResult } from "../models/models_3";
import { DeleteTransitGatewayConnectPeer } from "../schemas/schemas_27_Transit";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayConnectPeerCommand}.
 */
export interface DeleteTransitGatewayConnectPeerCommandInput extends DeleteTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayConnectPeerCommand}.
 */
export interface DeleteTransitGatewayConnectPeerCommandOutput
  extends DeleteTransitGatewayConnectPeerResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Connect peer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayConnectPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayConnectPeerRequest
 *   TransitGatewayConnectPeerId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayConnectPeerResult
 * //   TransitGatewayConnectPeer: { // TransitGatewayConnectPeer
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayConnectPeerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ConnectPeerConfiguration: { // TransitGatewayConnectPeerConfiguration
 * //       TransitGatewayAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // InsideCidrBlocksStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "gre",
 * //       BgpConfigurations: [ // TransitGatewayAttachmentBgpConfigurationList
 * //         { // TransitGatewayAttachmentBgpConfiguration
 * //           TransitGatewayAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           TransitGatewayAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //           BgpStatus: "up" || "down",
 * //         },
 * //       ],
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
 * @param DeleteTransitGatewayConnectPeerCommandInput - {@link DeleteTransitGatewayConnectPeerCommandInput}
 * @returns {@link DeleteTransitGatewayConnectPeerCommandOutput}
 * @see {@link DeleteTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayConnectPeerCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayConnectPeerCommandInput,
    DeleteTransitGatewayConnectPeerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayConnectPeer", {})
  .n("EC2Client", "DeleteTransitGatewayConnectPeerCommand")
  .sc(DeleteTransitGatewayConnectPeer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayConnectPeerRequest;
      output: DeleteTransitGatewayConnectPeerResult;
    };
    sdk: {
      input: DeleteTransitGatewayConnectPeerCommandInput;
      output: DeleteTransitGatewayConnectPeerCommandOutput;
    };
  };
}
